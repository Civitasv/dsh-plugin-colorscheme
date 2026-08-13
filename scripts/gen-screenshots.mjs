/**
 * Generate a screenshot per preset theme, plus one of the Settings → General
 * page showing the Colorscheme picker.
 *
 * Reads a colorscheme catalog JSON (arg 1, default /tmp/colorscheme-catalog.json),
 * renders each preset into a self-contained mock of the DSH web UI styled with
 * that theme's real --dsw-* tokens, and captures it with headless Chrome into
 * docs/screenshots/<id>.png. The settings screenshot (docs/screenshots/settings.png)
 * is styled with the default light appearance and shows the picker rows.
 *
 * Usage: node scripts/gen-screenshots.mjs [catalog.json]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { rmSync } from 'node:fs'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = process.argv[2] ?? '/tmp/colorscheme-catalog.json'
const outDir = join(root, 'docs', 'screenshots')
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'))
const presets = catalog.presets
mkdirSync(outDir, { recursive: true })

/** CSS variable declarations from a theme's token map. */
function tokenCss(tokens) {
  return Object.entries(tokens)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')
}

/** Common base stylesheet + head for a mock page styled with one theme. */
function shellHead(theme) {
  const dark = theme.colorScheme === 'dark'
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<style>
  :root {
    color-scheme: ${dark ? 'dark' : 'light'};
    ${tokenCss(theme.tokens)}
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 13px; line-height: 1.55;
    background: var(--dsw-alias-bg-base, #fff);
    color: var(--dsw-alias-label-primary, #111);
  }
</style>
</head>`
}

/** Build the mock conversation UI for one theme. */
function conversationHtml(theme) {
  const dark = theme.colorScheme === 'dark'
  const bodyAttr = dark ? ' data-ds-dark-theme' : ''
  return `${shellHead(theme)}
<body${bodyAttr}>
  <style>
  .app { display: grid; grid-template-columns: 220px 1fr; grid-template-rows: 44px 1fr; height: 100vh; }

  /* ---- top bar ---- */
  .topbar {
    grid-column: 1 / -1; display: flex; align-items: center; gap: 18px;
    padding: 0 16px; border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
    background: var(--dsw-alias-bg-layer-1, #fff);
  }
  .brand { font-weight: 600; font-size: 14px; color: var(--dsw-alias-brand-text, #111); display: flex; align-items: center; gap: 8px; }
  .brand-dot { width: 10px; height: 10px; border-radius: 3px; background: var(--dsw-alias-brand-primary, #4176e6); }
  .nav { display: flex; gap: 16px; }
  .nav span { color: var(--dsw-alias-label-secondary, #555); cursor: default; }
  .nav .active { color: var(--dsw-alias-label-primary, #111); }

  /* ---- sidebar ---- */
  .sidebar {
    grid-row: 2; border-right: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
    background: var(--dsw-specific-sidebar-fill, #fafafa);
    padding: 12px 10px; display: flex; flex-direction: column; gap: 4px; overflow: hidden;
  }
  .side-title { font-size: 11px; color: var(--dsw-alias-label-caption, #999); padding: 6px 8px 2px; }
  .side-item {
    padding: 7px 8px; border-radius: 8px; color: var(--dsw-alias-label-secondary, #555);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .side-item.hover { background: var(--dsw-specific-sidebar-nav-item-hover, rgba(0,0,0,.05)); }
  .side-item.active {
    background: var(--dsw-specific-sidebar-nav-item-active, rgba(0,0,0,.08));
    color: var(--dsw-alias-label-primary, #111);
  }
  .side-item .badge {
    float: right; font-size: 10px; padding: 1px 6px; border-radius: 99px;
    background: var(--dsw-alias-state-business-tertiary, #e4ecfd);
    color: var(--dsw-alias-state-business-primary, #4176e6);
  }
  .side-item .badge.err { background: var(--dsw-alias-state-error-secondary, #fca5a5); color: var(--dsw-alias-state-error-primary, #dc2626); }

  /* ---- main column ---- */
  .main { grid-row: 2; display: flex; flex-direction: column; background: var(--dsw-alias-bg-base, #fff); overflow: hidden; }
  .thread { flex: 1; overflow: hidden; padding: 20px 24px; display: flex; flex-direction: column; gap: 14px; }

  .msg { max-width: 78%; display: flex; flex-direction: column; gap: 6px; }
  .msg.user { align-self: flex-end; }
  .bubble {
    padding: 9px 13px; border-radius: 12px; font-size: 13px;
    background: var(--dsw-specific-bubble, #eef3fd); color: var(--dsw-alias-label-primary, #111);
  }
  .msg.assistant .meta { font-size: 11px; color: var(--dsw-alias-label-caption, #999); }
  .assistant-body { display: flex; flex-direction: column; gap: 8px; color: var(--dsw-alias-label-primary, #111); }

  .tool-chip {
    display: inline-flex; align-items: center; gap: 6px; align-self: flex-start;
    font-size: 11px; padding: 4px 10px; border-radius: 99px;
    border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
    color: var(--dsw-alias-label-secondary, #555);
    background: var(--dsw-alias-bg-layer-2, #fff);
  }
  .tool-chip .ok { width: 7px; height: 7px; border-radius: 50%; background: var(--dsw-alias-state-success-primary, #22c55e); }
  .tool-chip .run { width: 7px; height: 7px; border-radius: 50%; background: var(--dsw-alias-state-warn-primary, #f59e0b); }

  .code {
    border-radius: 10px; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
    background: var(--dsw-alias-markdown-code-block, #f6f7f8);
  }
  .code .bar {
    padding: 4px 10px; font-size: 11px; display: flex; justify-content: space-between;
    color: var(--dsw-alias-label-caption, #999);
    background: var(--dsw-alias-markdown-code-block-banner, #eef0f2);
    border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(0,0,0,.05));
  }
  .code pre { padding: 10px 12px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; color: var(--dsw-alias-label-primary, #111); }
  .code .k { color: var(--dsw-alias-state-business-primary, #4176e6); }
  .code .s { color: var(--dsw-alias-state-success-primary, #22c55e); }

  .notice { display: flex; align-items: center; gap: 8px; align-self: flex-start; font-size: 12px; padding: 6px 12px; border-radius: 8px; }
  .notice.warn { background: var(--dsw-alias-state-warn-tertiary, #fef3c7); color: var(--dsw-alias-state-warn-label, #b45309); }

  /* ---- composer ---- */
  .composer { padding: 12px 24px 16px; border-top: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1)); background: var(--dsw-alias-bg-base, #fff); }
  .composer-box {
    display: flex; align-items: flex-end; gap: 10px;
    border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.12));
    border-radius: 12px; padding: 9px 10px;
    background: var(--dsw-specific-input-major, #fff);
  }
  .composer-box .ph { flex: 1; font-size: 13px; color: var(--dsw-alias-label-caption, #999); }
  .send {
    border: 0; border-radius: 8px; padding: 6px 14px; font-size: 12px; font-weight: 500; cursor: default;
    background: var(--dsw-alias-button-primary-fill, #4176e6);
    color: var(--dsw-alias-label-primary-inverted, #fff);
  }
  .composer-hint { margin-top: 6px; font-size: 11px; color: var(--dsw-alias-label-caption, #999); }
  </style>
  <div class="app">
    <div class="topbar">
      <div class="brand"><span class="brand-dot"></span>DeepSeek Harness</div>
      <div class="nav"><span class="active">会话</span><span>技能</span><span>设置</span></div>
    </div>
    <div class="sidebar">
      <div class="side-title">会话</div>
      <div class="side-item hover">产品需求评审</div>
      <div class="side-item active">季度数据分析<span class="badge">4</span></div>
      <div class="side-item">竞品调研整理</div>
      <div class="side-item">API 对接联调<span class="badge err">2</span></div>
      <div class="side-item">上线公告撰写</div>
      <div class="side-title">技能</div>
      <div class="side-item">文件系统</div>
      <div class="side-item">网页搜索</div>
    </div>
    <div class="main">
      <div class="thread">
        <div class="msg assistant">
          <div class="assistant-body">
            <div class="meta">DeepSeek · 刚刚</div>
            <div class="tool-chip"><span class="run"></span>bash · 运行测试</div>
            <div class="code"><div class="bar"><span>summary.ts</span><span>通过</span></div><pre><span class="k">function</span> summarize(docs) {<br>&nbsp;&nbsp;<span class="k">const</span> groups = <span class="k">new</span> Map();<br>&nbsp;&nbsp;<span class="k">for</span> (const doc of docs) {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">const</span> key = doc.category ?? <span class="s">'other'</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;groups.set(key, (groups.get(key) ?? 0) + 1);<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span class="k">return</span> [...groups.entries()].sort((a, b) =&gt; b[1] - a[1]);<br>}</pre></div>
            <div class="notice warn">有 2 个外部接口响应超时，已自动重试</div>
          </div>
        </div>
        <div class="msg user">
          <div class="bubble">帮忙总结一下这份季度报告的重点，并列出下季度的建议？</div>
        </div>
        <div class="msg assistant">
          <div class="assistant-body">
            <div class="meta">DeepSeek · 正在思考</div>
            <div class="tool-chip"><span class="ok"></span>网页搜索 · 行业报告</div>
            <div>已找到相关行业数据，我先整理报告要点，再结合市场趋势给出下季度建议。</div>
          </div>
        </div>
      </div>
      <div class="composer">
        <div class="composer-box"><span class="ph">给 DeepSeek 发送消息…</span><span class="send">发送</span></div>
        <div class="composer-hint">DeepSeek 可能会犯错，请核查重要信息。</div>
      </div>
    </div>
  </div>
</body>
</html>`
}

/** One chip in the colorscheme picker: 3 sample dots (bg/fg/accent) + name. */
function themeChip(entry) {
  const t = entry.tokens ?? {}
  const dots = ['--dsw-alias-bg-base', '--dsw-alias-label-primary', '--dsw-alias-brand-primary']
    .map((k) => t[k])
    .filter(Boolean)
    .map((c) => `<span class="dot" style="background:${c}"></span>`)
    .join('')
  return `<button type="button" class="chip"><span class="dots">${dots}</span>${entry.name}</button>`
}

/** Build the Settings → General mock with the Colorscheme picker. */
function settingsHtml(shellTheme) {
  const dark = shellTheme.colorScheme === 'dark'
  const bodyAttr = dark ? ' data-ds-dark-theme' : ''
  const chips = [
    `<button type="button" class="chip selected"><span class="dots"><span class="dot dot-default"></span></span>跟随外观</button>`,
    ...presets.map(themeChip),
  ].join('\n      ')
  return `${shellHead(shellTheme)}
<body${bodyAttr}>
  <style>
  body { display: flex; align-items: center; justify-content: center; }
  .dialog {
    width: 760px; max-height: 640px; display: flex; flex-direction: column;
    border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
    border-radius: 14px; overflow: hidden;
    background: var(--dsw-alias-bg-layer-3, #fff);
    box-shadow: 0 12px 40px var(--dsw-alias-bg-mask-2, rgba(0,0,0,.12));
  }
  .dialog-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 20px; border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1));
  }
  .dialog-head h1 { font-size: 15px; font-weight: 600; color: var(--dsw-alias-label-primary, #111); }
  .close { border: 0; background: transparent; color: var(--dsw-alias-label-caption, #999); font-size: 16px; cursor: default; }
  .dialog-body { display: grid; grid-template-columns: 160px 1fr; min-height: 380px; }
  .nav-col { border-right: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1)); background: var(--dsw-alias-bg-layer-1, #fff); padding: 12px 10px; display: flex; flex-direction: column; gap: 4px; }
  .nav-item { padding: 7px 10px; border-radius: 8px; color: var(--dsw-alias-label-secondary, #555); }
  .nav-item.active { background: var(--dsw-alias-interactive-bg-active, rgba(0,0,0,.08)); color: var(--dsw-alias-label-primary, #111); }
  .content { padding: 4px 24px 20px; overflow: hidden; }
  .row { border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.1)); display: flex; flex-direction: column; gap: 10px; padding: 16px 0; }
  .row:last-child { border-bottom: 0; }
  .row-title { color: var(--dsw-alias-label-primary, #111); font-size: 14px; font-weight: 400; }
  .row-sub { color: var(--dsw-alias-label-caption, #999); font-size: 12px; }
  .cube-row { display: flex; gap: 8px; }
  .cube {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
    border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.12));
    border-radius: 10px; padding: 10px 0; background: transparent;
    color: var(--dsw-alias-label-primary, #111); font-size: 13px; cursor: default;
  }
  .cube.selected { background: var(--dsw-alias-bg-module-platform, #f0f1f2); border-color: var(--dsw-alias-brand-primary, #4176e6); }
  .cube .sun { color: var(--dsw-alias-state-warn-primary, #f59e0b); }
  .cube .moon { color: var(--dsw-alias-state-business-primary, #4176e6); }
  .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.12));
    border-radius: 999px; padding: 6px 12px; background: transparent;
    color: var(--dsw-alias-label-primary, #111); font-size: 13px; cursor: default;
  }
  .chip.selected { background: var(--dsw-alias-bg-module-platform, #f0f1f2); border-color: var(--dsw-alias-brand-primary, #4176e6); }
  .dots { display: inline-flex; gap: 2px; }
  .dot { width: 11px; height: 11px; border-radius: 50%; border: 1px solid rgba(0,0,0,.15); }
  .dot-default { background: linear-gradient(135deg, var(--dsw-static-neutral-bluish-50) 50%, var(--dsw-static-neutral-bluish-900) 50%); }
  </style>
  <div class="dialog">
    <div class="dialog-head"><h1>设置</h1><span class="close">✕</span></div>
    <div class="dialog-body">
      <div class="nav-col">
        <div class="nav-item active">通用</div>
        <div class="nav-item">模型</div>
        <div class="nav-item">插件</div>
        <div class="nav-item">关于</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="row-title">外观</div>
          <div class="cube-row">
            <button type="button" class="cube"><span class="sun">◐</span>浅色</button>
            <button type="button" class="cube"><span class="moon">◑</span>深色</button>
            <button type="button" class="cube selected"><span class="sun">◐</span><span class="moon">◑</span>跟随系统</button>
          </div>
        </div>
        <div class="row">
          <div class="row-title">配色方案</div>
          <div class="row-sub">内置预设与自定义主题，点击切换并自动保存</div>
          <div class="chip-row">
      ${chips}
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}

/** Capture one HTML page with headless Chrome (timeout-safe). */
function capture(htmlPath, pngPath, tag) {
  const userDataDir = `/tmp/dsh-cs-chrome-${tag}`
  rmSync(userDataDir, { recursive: true, force: true })
  const run = spawnSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--user-data-dir=${userDataDir}`,
    `--window-size=1280,800`,
    `--screenshot=${pngPath}`,
    `file://${htmlPath}`,
  ], { stdio: 'pipe', timeout: 20000 })
  // Chrome occasionally lingers after writing the PNG; the timeout kill is
  // fine — the screenshot file is already on disk.
  if (run.status !== 0 && !(run.error && run.error.code === 'ETIMEDOUT')) {
    throw new Error(`chrome failed for ${tag}: ${run.error?.message ?? run.stderr?.toString()}`)
  }
}

const results = []
for (const theme of presets) {
  const htmlPath = join(outDir, `${theme.id}.html`)
  const pngPath = join(outDir, `${theme.id}.png`)
  if (existsSync(pngPath)) {
    results.push(`${theme.id} (skip)`)
    continue
  }
  writeFileSync(htmlPath, conversationHtml(theme))
  capture(htmlPath, pngPath, theme.id)
  // Keep the output folder clean: only the PNGs are deliverables.
  rmSync(htmlPath, { force: true })
  results.push(theme.id)
}

// Settings → General, styled with the default light appearance (vscode-light).
const settingsPng = join(outDir, 'settings.png')
if (!existsSync(settingsPng)) {
  const settingsHtmlPath = join(outDir, 'settings.html')
  const shellTheme = presets.find((p) => p.id === 'vscode-light') ?? presets[0]
  writeFileSync(settingsHtmlPath, settingsHtml(shellTheme))
  capture(settingsHtmlPath, settingsPng, 'settings')
  rmSync(settingsHtmlPath, { force: true })
  results.push('settings')
} else {
  results.push('settings (skip)')
}

console.log('screenshots:', results.join(', '))
