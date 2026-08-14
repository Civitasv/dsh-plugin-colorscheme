/**
 * Colorscheme plugin — client half.
 *
 * - Fetches the theme catalog from the server route, registers every entry on
 *   `ctx.theme` (the DSH theme service), restores the persisted selection,
 *   and contributes a "Colorscheme" preference row to the General settings
 *   section (mirroring the built-in Appearance row).
 * - Third-party theme selection is process-local in ThemeRuntime and the
 *   browser settings wire only exposes built-in namespaces, so the plugin
 *   persists the chosen id through its own catalog route (POST) and
 *   re-applies it on load.
 */
import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { defineStore } from '@deepseek-ai/dsh-client-runtime/client'
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { ThemeSnapshot } from '@deepseek-ai/dsh-client-ui-theme/client'
// Type-only imports that pull the context augmentations (settingsScope,
// locale, the settings.general.item slot contract) into this program.
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings-plugins/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type { ThemeCatalog } from '../shared/types.ts'

export const name = 'colorscheme'

/** Required client services (fiber inject — waits for the theme service). */
export const inject = ['theme', 'slots', 'locale', 'connection', 'remote', 'settingsScope']

const NS = 'colorscheme'
/** The built-in Appearance preference namespace (owned by dsh-client-ui-theme). */
const THEME_NS = 'ui-theme'
const LOCALE_NS = 'settings.colorscheme'
const CATALOG_URL = 'colorscheme/themes.json'
const STYLE_TAG = 'dsh-plugin-colorscheme/row.css'
const DEFAULT_ID = '' // sentinel: follow the built-in Appearance preference

/**
 * Preference-row styles. Injected once per materialization with the loader's
 * `data-plugin-css` contract so the client HMR driver can inventory/remove it.
 */
const ROW_CSS = `
.dshcs-row{border-bottom:1px solid var(--dsw-alias-border-l2);display:flex;flex-direction:column;gap:8px;padding:16px 0}
.dshcs-title{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:400;line-height:22px}
.dshcs-grid{display:flex;flex-wrap:wrap;gap:8px}
.dshcs-chip{align-items:center;background:transparent;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;color:var(--dsw-alias-label-primary);cursor:pointer;display:flex;font:inherit;font-size:13px;gap:8px;padding:6px 12px}
.dshcs-chip:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dshcs-chip[aria-pressed="true"]{background:var(--dsw-alias-bg-module-platform);border-color:var(--dsw-static-neutral-bluish-400)}
.dshcs-dots{display:inline-flex;gap:2px}
.dshcs-dot{border:1px solid rgba(0,0,0,.18);border-radius:50%;display:inline-block;height:12px;width:12px}
.dshcs-dot-default{background:linear-gradient(135deg,var(--dsw-static-neutral-bluish-50) 50%,var(--dsw-static-neutral-bluish-900) 50%)}
.dshcs-error{color:var(--dsw-alias-state-error-primary);font-size:12px}
.dshcs-title-row{align-items:center;display:flex;justify-content:space-between}
.dshcs-btn{border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;font-size:12px;line-height:18px;min-height:26px;padding:2px 10px}
.dshcs-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dshcs-btn:disabled{opacity:.5;cursor:default}
.dshcs-btn-primary{border-color:var(--dsw-static-neutral-bluish-400);color:var(--dsw-alias-label-primary)}
.dshcs-chip-wrap{align-items:center;display:inline-flex;gap:4px}
.dshcs-del{border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:10px;height:20px;line-height:1;padding:0 6px}
.dshcs-del:hover{color:var(--dsw-alias-state-error-primary)}
.dshcs-del-confirm{border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary);font-size:10px}
.dshcs-form{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;display:flex;flex-direction:column;gap:12px;margin-top:12px;padding:14px}
.dshcs-form-title{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:600}
.dshcs-form-grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
.dshcs-field{display:flex;flex-direction:column;gap:4px}
.dshcs-field-label{color:var(--dsw-alias-label-secondary);font-size:11px}
.dshcs-input{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;min-height:26px;padding:2px 8px}
.dshcs-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}
.dshcs-color{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;height:28px;padding:2px;width:100%;cursor:pointer}
.dshcs-field-advanced{color:var(--dsw-alias-label-caption);font-size:11px;grid-column:1/-1;margin-top:4px}
.dshcs-form-actions{display:flex;gap:8px;justify-content:flex-end}
.dshcfg-card{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;list-style:none;margin-bottom:10px;overflow:hidden}
.dshcfg-head{align-items:center;background:transparent;border:0;color:var(--dsw-alias-label-primary);cursor:pointer;display:flex;font:inherit;gap:8px;padding:10px 12px;text-align:left;width:100%}
.dshcfg-head:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dshcfg-name{font-size:13px;font-weight:600}
.dshcfg-desc{color:var(--dsw-alias-label-tertiary);flex:1;font-size:12px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dshcfg-pending{background:rgba(46,160,67,.16);border-radius:999px;color:var(--dsw-alias-state-success-primary);flex:none;font-size:11px;padding:1px 8px}
.dshcfg-caret{color:var(--dsw-alias-label-tertiary);flex:none;font-size:10px}
.dshcfg-divider{border-top:1px solid var(--dsw-alias-border-l1);margin:2px 0}
.dshcfg-body{display:flex;flex-direction:column;gap:12px;padding:4px 12px 12px}
.dshcfg-field{display:flex;flex-direction:column;gap:4px}
.dshcfg-label{color:var(--dsw-alias-label-secondary);font-size:12px}
.dshcfg-hint{color:var(--dsw-alias-label-caption);font-size:11px}
.dshcfg-actions{display:flex;gap:8px;justify-content:flex-end}
`
if (typeof document !== 'undefined' && document.querySelector(`style[data-plugin-css=${JSON.stringify(STYLE_TAG)}]`) === null) {
  const tag = document.createElement('style')
  tag.dataset.plugin = 'dsh-plugin-colorscheme'
  tag.dataset.pluginCss = STYLE_TAG
  tag.textContent = ROW_CSS
  document.head.appendChild(tag)
}

/** Simplified Chinese dictionary (key-set source of truth). */
const zh = {
  'colorscheme.title': '配色方案',
  'colorscheme.default': '跟随外观',
  'colorscheme.loadError': '配色方案加载失败',
  'colorscheme.add': '新增主题',
  'colorscheme.addTitle': '新增自定义主题',
  'colorscheme.field.id': '标识 (id)',
  'colorscheme.field.name': '名称',
  'colorscheme.field.scheme': '模式',
  'colorscheme.field.scheme.dark': '深色',
  'colorscheme.field.scheme.light': '浅色',
  'colorscheme.field.bg': '背景',
  'colorscheme.field.fg': '文字',
  'colorscheme.field.accent': '强调色',
  'colorscheme.field.advanced': '高级（可选）',
  'colorscheme.field.elevated': '浮起表面',
  'colorscheme.field.sidebar': '侧栏',
  'colorscheme.field.success': '成功',
  'colorscheme.field.error': '错误',
  'colorscheme.field.warn': '警告',
  'colorscheme.save': '保存',
  'colorscheme.cancel': '取消',
  'colorscheme.addError': '保存失败',
  'colorscheme.delete': '删除',
  'colorscheme.confirmDelete': '再次点击确认删除',
  'config.title': '配置',
  'config.themesDir': '主题目录',
  'config.themesDirHint': '用户主题 JSON 文件的目录（留空 = 默认 ~/.dsh/themes）',
  'config.defaultTheme': '默认主题',
  'config.defaultThemeHint': '未手动选择时应用的主题 id（留空 = 跟随外观）',
  'config.save': '保存',
  'config.discard': '恢复默认',
  'config.unsaved': '未保存',
  'config.saveFailed': '保存失败',
} as const

/** English dictionary, checked complete against the zh key set. */
const en: Record<keyof typeof zh, string> = {
  'colorscheme.title': 'Colorscheme',
  'colorscheme.default': 'Follow appearance',
  'colorscheme.loadError': 'Failed to load colorschemes',
  'colorscheme.add': 'Add theme',
  'colorscheme.addTitle': 'New custom theme',
  'colorscheme.field.id': 'ID',
  'colorscheme.field.name': 'Name',
  'colorscheme.field.scheme': 'Scheme',
  'colorscheme.field.scheme.dark': 'Dark',
  'colorscheme.field.scheme.light': 'Light',
  'colorscheme.field.bg': 'Background',
  'colorscheme.field.fg': 'Foreground',
  'colorscheme.field.accent': 'Accent',
  'colorscheme.field.advanced': 'Advanced (optional)',
  'colorscheme.field.elevated': 'Elevated surface',
  'colorscheme.field.sidebar': 'Sidebar',
  'colorscheme.field.success': 'Success',
  'colorscheme.field.error': 'Error',
  'colorscheme.field.warn': 'Warning',
  'colorscheme.save': 'Save',
  'colorscheme.cancel': 'Cancel',
  'colorscheme.addError': 'Failed to save',
  'colorscheme.delete': 'Delete',
  'colorscheme.confirmDelete': 'Click again to confirm delete',
  'config.title': 'Configuration',
  'config.themesDir': 'Themes directory',
  'config.themesDirHint': 'Directory for user theme JSON files (empty = default ~/.dsh/themes)',
  'config.defaultTheme': 'Default theme',
  'config.defaultThemeHint': 'Theme id applied when none is chosen (empty = follow appearance)',
  'config.save': 'Save',
  'config.discard': 'Reset',
  'config.unsaved': 'Unsaved',
  'config.saveFailed': 'Save failed',
}

/** Row display model: id, name, and three sample colors (bg / fg / accent). */
interface RowTheme {
  id: string
  name: string
  colorScheme: 'light' | 'dark'
  samples: string[]
}

interface RowState {
  selection: string
  revision: number
  themes: RowTheme[]
  /** Theme ids that live in the themes directory and can be deleted in-app. */
  deletable: string[]
  error: string
}

function createRowStore() {
  return defineStore({
    init: (): RowState => ({ selection: DEFAULT_ID, revision: -1, themes: [], deletable: [], error: '' }),
    actions: {
      sync: (d: RowState, selection: string, revision: number, themes: RowTheme[], deletable: string[], error: string) => {
        if (revision <= d.revision) return
        d.selection = selection
        d.revision = revision
        d.themes = themes
        d.deletable = deletable
        d.error = error
      },
    },
  })
}

function toRowThemes(snapshot: ThemeSnapshot, names: Record<string, string>): RowTheme[] {
  return snapshot.themes
    // The built-in light/dark pair is owned by the Appearance row above.
    .filter((t) => t.id !== 'light' && t.id !== 'dark')
    .map((t) => ({
      id: t.id,
      name: names[t.id] ?? t.id,
      colorScheme: t.colorScheme,
      samples: [
        t.tokens['--dsw-alias-bg-base'] ?? '',
        t.tokens['--dsw-alias-label-primary'] ?? '',
        t.tokens['--dsw-alias-brand-primary'] ?? '',
      ],
    }))
}

/** The Colorscheme picker (chips + add/delete), rendered inside the config card. */
function ColorschemePicker(props: {
  t: (key: keyof typeof zh) => string
  useStore: <S>(selector: (s: RowState) => S) => S
  setTheme: (id: string) => void
  reloadCatalog: () => void
}) {
  const { t, useStore, setTheme, reloadCatalog } = props
  const selection = useStore((s) => s.selection)
  const themes = useStore((s) => s.themes)
  const deletable = useStore((s) => s.deletable)
  const error = useStore((s) => s.error)

  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [fields, setFields] = useState({
    id: '',
    name: '',
    colorScheme: 'dark' as 'light' | 'dark',
    bg: '#1e1e2e',
    fg: '#cdd6f4',
    accent: '#cba6f7',
    bgElevated: '#181825',
    bgSidebar: '#181825',
    success: '#a6e3a1',
    error: '#f38ba8',
    warn: '#f9e2af',
  })
  const setField = (key: keyof typeof fields) => (event: ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [key]: event.target.value }))

  const save = async () => {
    const id = fields.id.trim().replace(/\s+/g, '-').toLowerCase()
    if (!id) {
      setFormError(t('colorscheme.field.id'))
      return
    }
    setSaving(true)
    setFormError('')
    try {
      const res = await fetch(CATALOG_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          action: 'add-theme',
          theme: {
            id,
            name: fields.name.trim() || id,
            colorScheme: fields.colorScheme,
            roles: {
              bg: fields.bg,
              fg: fields.fg,
              accent: fields.accent,
              bgElevated: fields.bgElevated,
              bgSidebar: fields.bgSidebar,
              success: fields.success,
              error: fields.error,
              warn: fields.warn,
            },
          },
        }),
      })
      const result = (await res.json().catch(() => ({ ok: false, error: 'invalid response' }))) as { ok: boolean; error?: string }
      if (result.ok) {
        setShowForm(false)
        setFields((f) => ({ ...f, id: '', name: '' }))
        reloadCatalog()
        setTheme(id)
      } else {
        setFormError(result.error ?? t('colorscheme.addError'))
      }
    } catch (e) {
      setFormError(e instanceof Error ? e.message : t('colorscheme.addError'))
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id: string) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id)
      setTimeout(() => setConfirmDelete((c) => (c === id ? null : c)), 2500)
      return
    }
    setConfirmDelete(null)
    try {
      const res = await fetch(CATALOG_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'remove-theme', id }),
      })
      const result = (await res.json().catch(() => ({ ok: false, error: 'invalid response' }))) as { ok: boolean; error?: string }
      if (!result.ok) setFormError(result.error ?? t('colorscheme.addError'))
      reloadCatalog()
    } catch (e) {
      setFormError(e instanceof Error ? e.message : t('colorscheme.addError'))
    }
  }

  const chips = [
    { id: DEFAULT_ID, label: t('colorscheme.default'), samples: [] as string[] },
    ...themes.map((th) => ({ id: th.id, label: th.name, samples: th.samples })),
  ]

  const colorField = (label: string, key: keyof typeof fields) => (
    <label className="dshcs-field">
      <span className="dshcs-field-label">{label}</span>
      <input type="color" className="dshcs-color" value={fields[key] as string} onChange={setField(key)} />
    </label>
  )

  return (
    <div className="dshcs-row">
      <div className="dshcs-title-row">
        <div className="dshcs-title">{t('colorscheme.title')}</div>
        <button
          type="button"
          className="dshcs-btn"
          onClick={() => {
            setShowForm((v) => !v)
            setFormError('')
          }}
        >
          {t('colorscheme.add')}
        </button>
      </div>
      {error ? <div className="dshcs-error">{error}</div> : null}
      <div className="dshcs-grid">
        {chips.map((chip) => {
          const isDeletable = deletable.includes(chip.id)
          return (
            <span key={chip.id} className="dshcs-chip-wrap">
              <button type="button" className="dshcs-chip" aria-pressed={selection === chip.id} onClick={() => setTheme(chip.id)}>
                {chip.samples.length === 3 ? (
                  <span className="dshcs-dots" aria-hidden="true">
                    {chip.samples.map((c, i) => (
                      <span key={i} className="dshcs-dot" style={{ backgroundColor: c }} />
                    ))}
                  </span>
                ) : (
                  <span className="dshcs-dot dshcs-dot-default" aria-hidden="true" />
                )}
                {chip.label}
              </button>
              {isDeletable ? (
                <button
                  type="button"
                  className={`dshcs-del${confirmDelete === chip.id ? ' dshcs-del-confirm' : ''}`}
                  title={t('colorscheme.delete')}
                  onClick={() => void remove(chip.id)}
                >
                  {confirmDelete === chip.id ? t('colorscheme.confirmDelete') : '✕'}
                </button>
              ) : null}
            </span>
          )
        })}
      </div>
      {showForm ? (
        <div className="dshcs-form">
          <div className="dshcs-form-title">{t('colorscheme.addTitle')}</div>
          <div className="dshcs-form-grid">
            <label className="dshcs-field">
              <span className="dshcs-field-label">{t('colorscheme.field.id')}</span>
              <input className="dshcs-input" value={fields.id} onChange={setField('id')} placeholder="my-theme" />
            </label>
            <label className="dshcs-field">
              <span className="dshcs-field-label">{t('colorscheme.field.name')}</span>
              <input className="dshcs-input" value={fields.name} onChange={setField('name')} placeholder="My Theme" />
            </label>
            <label className="dshcs-field">
              <span className="dshcs-field-label">{t('colorscheme.field.scheme')}</span>
              <select
                className="dshcs-input"
                value={fields.colorScheme}
                onChange={(e) => setFields((f) => ({ ...f, colorScheme: e.target.value as 'light' | 'dark' }))}
              >
                <option value="dark">{t('colorscheme.field.scheme.dark')}</option>
                <option value="light">{t('colorscheme.field.scheme.light')}</option>
              </select>
            </label>
            {colorField(t('colorscheme.field.bg'), 'bg')}
            {colorField(t('colorscheme.field.fg'), 'fg')}
            {colorField(t('colorscheme.field.accent'), 'accent')}
            <div className="dshcs-field-advanced">{t('colorscheme.field.advanced')}</div>
            {colorField(t('colorscheme.field.elevated'), 'bgElevated')}
            {colorField(t('colorscheme.field.sidebar'), 'bgSidebar')}
            {colorField(t('colorscheme.field.success'), 'success')}
            {colorField(t('colorscheme.field.error'), 'error')}
            {colorField(t('colorscheme.field.warn'), 'warn')}
          </div>
          {formError ? <div className="dshcs-error">{formError}</div> : null}
          <div className="dshcs-form-actions">
            <button type="button" className="dshcs-btn dshcs-btn-primary" disabled={saving} onClick={() => void save()}>
              {t('colorscheme.save')}
            </button>
            <button type="button" className="dshcs-btn" disabled={saving} onClick={() => setShowForm(false)}>
              {t('colorscheme.cancel')}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

/** Config card for the Plugins configuration tab (Settings → Plugins → 可配置). */
function ColorschemeConfigCard(props: {
  t: (key: keyof typeof zh) => string
  useStore: <S>(selector: (s: RowState) => S) => S
  setTheme: (id: string) => void
  reloadCatalog: () => void
}) {
  const { t, useStore, setTheme, reloadCatalog } = props
  const [open, setOpen] = useState(false)
  const [config, setConfig] = useState<{ themesDir: string; defaultTheme: string } | null>(null)
  const [draft, setDraft] = useState({ themesDir: '', defaultTheme: '' })
  const [saving, setSaving] = useState(false)
  const [failed, setFailed] = useState(false)

  const load = async () => {
    try {
      const res = await fetch(CATALOG_URL, { headers: { accept: 'application/json' } })
      const catalog = (await res.json()) as ThemeCatalog
      const next = { themesDir: catalog.themesDir, defaultTheme: catalog.defaultTheme }
      setConfig(next)
      setDraft(next)
    } catch {
      // keep last known state
    }
  }

  useEffect(() => {
    if (open) void load()
  }, [open])

  const dirty = config !== null && (draft.themesDir !== config.themesDir || draft.defaultTheme !== config.defaultTheme)

  const save = async (clear: boolean) => {
    setSaving(true)
    setFailed(false)
    try {
      const res = await fetch(CATALOG_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(clear ? { action: 'set-config', config: {} } : { action: 'set-config', config: draft }),
      })
      const result = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean }
      if (!result.ok) setFailed(true)
      await load()
    } catch {
      setFailed(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <li className="dshcfg-card">
      <button type="button" className="dshcfg-head" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span className="dshcfg-name">{t('colorscheme.title')}</span>
        <span className="dshcfg-desc">{t('config.title')}</span>
        {dirty ? <span className="dshcfg-pending">{t('config.unsaved')}</span> : null}
        <span className="dshcfg-caret" aria-hidden="true">{open ? '▾' : '▸'}</span>
      </button>
      {open ? (
        <div className="dshcfg-body">
          <ColorschemePicker t={t} useStore={useStore} setTheme={setTheme} reloadCatalog={reloadCatalog} />
          <div className="dshcfg-divider" />
          <label className="dshcfg-field">
            <span className="dshcfg-label">{t('config.themesDir')}</span>
            <input
              className="dshcs-input"
              value={draft.themesDir}
              placeholder="~/.dsh/themes"
              onChange={(e) => setDraft((d) => ({ ...d, themesDir: e.target.value }))}
            />
            <span className="dshcfg-hint">{t('config.themesDirHint')}</span>
          </label>
          <label className="dshcfg-field">
            <span className="dshcfg-label">{t('config.defaultTheme')}</span>
            <input
              className="dshcs-input"
              value={draft.defaultTheme}
              placeholder="dracula"
              onChange={(e) => setDraft((d) => ({ ...d, defaultTheme: e.target.value }))}
            />
            <span className="dshcfg-hint">{t('config.defaultThemeHint')}</span>
          </label>
          {failed ? <p className="dshcs-error" role="status">{t('config.saveFailed')}</p> : null}
          <div className="dshcfg-actions">
            <button type="button" className="dshcs-btn" disabled={!dirty || saving} onClick={() => void save(true)}>
              {t('config.discard')}
            </button>
            <button type="button" className="dshcs-btn dshcs-btn-primary" disabled={!dirty || saving} onClick={() => void save(false)}>
              {t('config.save')}
            </button>
          </div>
        </div>
      ) : null}
    </li>
  )
}

/** Fetch the server-side theme catalog once. */
async function loadCatalog(): Promise<ThemeCatalog> {
  const res = await fetch(CATALOG_URL, { headers: { accept: 'application/json' } })
  if (!res.ok) throw new Error(`catalog request failed: ${res.status}`)
  return (await res.json()) as ThemeCatalog
}

/** Client plugin body. */
export function apply(ctx: ClientContext): void {
  const theme = ctx.theme
  // The Appearance row's durable preference (light/dark/system) — the target
  // of "跟随外观 / Follow appearance".
  const appearanceScope = ctx.settingsScope.bind({ namespace: THEME_NS })
  const nameById: Record<string, string> = {}
  const disposers: (() => void)[] = []

  ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), 'colorscheme: locale dictionary')

  const store = createRowStore()
  let bound: { sync: (selection: string, revision: number, themes: RowTheme[], deletable: string[], error: string) => void } | undefined
  /** Persisted/desired colorscheme id ('' = follow the Appearance preference). */
  let selection = DEFAULT_ID
  let revision = -1
  /** Theme ids from the themes directory (deletable in-app). */
  let deletableIds: string[] = []

  /**
   * Presenter mirror. The official ui-layout presenter applies the resolved
   * theme to <body> but its event delivery from this fiber is unreliable at
   * load (the theme service also asynchronously adopts the durable ui-theme
   * preference, flipping the palette back). This plugin therefore applies the
   * active theme's tokens itself, and re-asserts the persisted selection for
   * a bounded load window. Idempotent with the official presenter — same
   * values, same targets.
   */
  const appliedTokens: string[] = []
  const applyActiveTokens = () => {
    const active = theme.getTheme().active
    document.documentElement.style.colorScheme = active.colorScheme
    const body = document.body
    if (active.colorScheme === 'dark') body.setAttribute('data-ds-dark-theme', '')
    else body.removeAttribute('data-ds-dark-theme')
    for (const name of appliedTokens) body.style.removeProperty(name)
    appliedTokens.length = 0
    for (const [name, value] of Object.entries(active.tokens)) {
      body.style.setProperty(name, value)
      appliedTokens.push(name)
    }
  }

  /** The row highlights the theme the service actually resolved. */
  const activeSelection = () => {
    const pref = theme.getTheme().preference
    return pref === 'light' || pref === 'dark' || pref === 'system' ? DEFAULT_ID : pref
  }

  const publishRow = (error = '') => {
    if (!bound) return
    bound.sync(activeSelection(), revision, toRowThemes(theme.getTheme(), nameById), deletableIds, error)
  }

  /** Persist the picker selection through the catalog route (server-side). */
  const saveSelection = (id: string) => {
    void fetch(CATALOG_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ selection: id }),
    })
      .then((res) => {
        if (!res.ok) console.warn('[colorscheme] failed to persist selection', res.status)
      })
      .catch((e: unknown) => console.warn('[colorscheme] failed to persist selection', e))
  }

  /** Revert to the durable Appearance preference (light / dark / system). */
  const followAppearance = () => {
    const value = appearanceScope.getSnapshot().value as { preference?: string } | undefined
    const pref = value?.preference
    try {
      theme.setTheme(pref === 'light' || pref === 'dark' || pref === 'system' ? pref : 'system')
    } catch {
      // registry not ready — falls back on next load
    }
  }

  /**
   * Re-assert the persisted selection for a bounded load window. The theme
   * service asynchronously adopts the durable ui-theme preference after we
   * restore, and event delivery from this fiber to the official presenter is
   * unreliable — so while the window is open we keep pushing our selection
   * (and applying its tokens) until the window closes. Never fights later
   * user actions: the window only spans the load-time adoption.
   */
  let enforceTimer: ReturnType<typeof setInterval> | undefined
  const stopEnforce = () => {
    if (enforceTimer) {
      clearInterval(enforceTimer)
      enforceTimer = undefined
    }
  }
  const enforceSelection = () => {
    if (selection === DEFAULT_ID) return
    if (theme.getTheme().preference !== selection) {
      try {
        theme.setTheme(selection)
      } catch {
        // not registered yet — the next tick retries
      }
    }
    applyActiveTokens()
  }

  // Mirror the live theme state into the row and keep the active tokens on
  // <body> for whatever events this fiber does receive.
  ctx.on('theme/change', () => {
    revision = theme.getTheme().revision
    applyActiveTokens()
    publishRow()
  })

  const applySelection = (id: string) => {
    if (!id) return
    try {
      theme.setTheme(id)
    } catch {
      // not registered yet (catalog still loading) — the selection is
      // re-applied once registration completes.
    }
  }

  /** Drop all theme registrations (used before re-registering after an edit). */
  const disposeThemes = () => {
    for (const dispose of disposers) {
      try {
        dispose()
      } catch {
        // already gone
      }
    }
    disposers.length = 0
  }

  const registerCatalog = (catalog: ThemeCatalog) => {
    disposeThemes()
    for (const entry of [...catalog.presets, ...catalog.userThemes, ...catalog.settingsThemes]) {
      nameById[entry.id] = entry.name
      try {
        const dispose = theme.register({
          id: entry.id,
          colorScheme: entry.colorScheme,
          tokens: entry.tokens ?? {},
        })
        disposers.push(dispose)
      } catch (e) {
        console.warn('[colorscheme] failed to register theme', entry.id, e)
      }
    }
    deletableIds = catalog.userThemes.map((t) => t.id)
    // Precedence: persisted selection (from the catalog) > config default > follow appearance.
    const saved = catalog.selection
    if (saved && theme.getTheme().themes.some((t) => t.id === saved)) {
      selection = saved
    } else if (catalog.defaultTheme) {
      selection = catalog.defaultTheme
    }
    applySelection(selection)
    applyActiveTokens()
    if (selection !== DEFAULT_ID) {
      // Cover the load-time adoption flips with a bounded re-assert loop.
      stopEnforce()
      enforceTimer = setInterval(enforceSelection, 400)
      setTimeout(stopEnforce, 5000)
    }
    revision = theme.getTheme().revision
    publishRow()
  }

  /** Re-fetch the catalog and re-register (after adding/removing a user theme). */
  const reloadCatalog = () => {
    void loadCatalog()
      .then(registerCatalog)
      .catch((e: unknown) => {
        console.warn('[colorscheme] catalog reload failed', e)
        publishRow(typeof e === 'object' && e !== null && 'message' in e ? String((e as { message: unknown }).message) : String(e))
      })
  }

  void loadCatalog()
    .then(registerCatalog)
    .catch((e: unknown) => {
      console.warn('[colorscheme] catalog load failed', e)
      publishRow(typeof e === 'object' && e !== null && 'message' in e ? String((e as { message: unknown }).message) : String(e))
    })

  // Clean up theme registrations and applied tokens when this plugin unloads
  // (HMR / config edit).
  ctx.effect(
    () => () => {
      disposeThemes()
      const body = document.body
      for (const name of appliedTokens) body.style.removeProperty(name)
      appliedTokens.length = 0
    },
    'colorscheme: theme registrations',
  )

  // The whole Colorscheme configuration lives in one card inside
  // 设置 → 插件 → 插件配置 (settings.plugin.item): picker + add/delete + config.
  ctx.slots.inject('settings.plugin.item', () =>
    ctx.slots.register(
      {
        name: 'settings.plugin.item',
        id: 'colorscheme-config',
        order: 20,
        store,
        locale: LOCALE_NS,
        inject: (actions: { sync: (selection: string, revision: number, themes: RowTheme[], deletable: string[], error: string) => void }) => {
          bound = actions
          publishRow()
          return {
            setTheme: (id: string) => {
              selection = id
              // A deliberate pick wins over the load-time enforcement loop.
              stopEnforce()
              if (id === DEFAULT_ID) {
                // Return to the Appearance preference and forget our
                // persisted colorscheme.
                followAppearance()
                saveSelection('')
              } else {
                applySelection(id)
                saveSelection(id)
              }
            },
            reloadCatalog,
          }
        },
      },
      ColorschemeConfigCard,
    ),
  )
}
