# dsh-plugin-colorscheme

[English](README.en.md)

为 DeepSeek Harness 提供配色方案（colorscheme）：内置多款知名开源主题的
配色，加载后可在 **设置 → 插件 → 插件配置 → 配色方案** 卡片中一键切换，选择会持久化并
在刷新后自动恢复。

- 内置 8 个预设主题（Dracula、Nord、One Dark/Light、Tokyo Night、
  Catppuccin Mocha、VS Code Dark/Light），许可与署名见
  [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
- 支持三种用户扩展方式（见下），也可以在 **设置 → 插件 → 配色方案** 页签里
  直接「新增主题」（填几个颜色即可，自动写入主题目录）、删除自定义主题，
  并可在 **设置 → 插件 → 插件配置 → 配色方案** 卡片内在线修改主题目录。

## 安装

本仓库已包含构建产物（`client.js` 与 `dist/`），克隆后可直接使用；只有修改过
源码才需要先执行 `npm install && npm run build`。

### 一键安装（推荐）

```sh
# macOS / Linux
bash install.sh

# Windows（PowerShell）
powershell -ExecutionPolicy Bypass -File install.ps1
```

脚本会：安装依赖（含 devDependencies，便于本地开发）→ 链接进
`~/.dsh/profiles/node_modules` → 注册 `cordis.patch.yml` → 提示重启与验证。

### 手动安装

> **用链接而不是拷贝**：`Copy-Item` 复制一份后改源码不会同步，重复安装还会
> 冲突；用下面的链接（Junction / 符号链接）指向本仓库，改源码即时生效。

```sh
# 1. 克隆并进入目录
git clone https://github.com/Civitasv/dsh-plugin-colorscheme.git
cd dsh-plugin-colorscheme

# 2. 链接进 profile 依赖目录
#    macOS / Linux：
ln -sfn "$PWD" ~/.dsh/profiles/node_modules/dsh-plugin-colorscheme
#    Windows（PowerShell，Junction 无需管理员权限）：
#    New-Item -ItemType Junction -Path "$HOME\.dsh\profiles\node_modules\dsh-plugin-colorscheme" -Target "$PWD"

# 3. 注册到 ~/.dsh/profiles/web/cordis.patch.yml
#    - insert:
#        - id: colorscheme
#          name: dsh-plugin-colorscheme

# 4. 重启 dsh web
```

> 装了 pnpm 的话，也可以用 `dsh plugin --profile web add <本插件绝对路径>` 代替
> 第 2 步（等价于链接）。pnpm 未安装时先 `npm install -g pnpm`（或 `corepack enable`）。

### 验证

```sh
dsh --profile web --dump-config | grep dsh-plugin-colorscheme
# 输出应包含：- id: colorscheme / name: dsh-plugin-colorscheme
```

重启后打开 **设置 → 插件 → 插件配置 → 配色方案** 卡片即可切换主题。

### 开发

插件以链接方式接入 profile，改源码后：

```sh
npm run build   # 重新生成 dist/ 与 client.js
```

server 端改动需重启 `dsh web`；纯 client 端改动刷新页面即可。

## 预览

**设置 → 插件 → 插件配置 → 配色方案** 卡片（点击即切换并持久化）：

![设置界面](docs/screenshots/settings.png)

各主题效果：

| 主题 | 预览 |
| --- | --- |
| VS Code Dark | ![VS Code Dark](docs/screenshots/vscode-dark.png) |
| VS Code Light | ![VS Code Light](docs/screenshots/vscode-light.png) |
| Dracula | ![Dracula](docs/screenshots/dracula.png) |
| Nord | ![Nord](docs/screenshots/nord.png) |
| One Dark | ![One Dark](docs/screenshots/one-dark.png) |
| One Light | ![One Light](docs/screenshots/one-light.png) |
| Tokyo Night Storm | ![Tokyo Night Storm](docs/screenshots/tokyo-night.png) |
| Catppuccin Mocha | ![Catppuccin Mocha](docs/screenshots/catppuccin-mocha.png) |

## 扩展方式

### 1. 主题目录（推荐）

把主题 JSON 文件放进 `~/.dsh/themes/`（或通过 `themesDir` 配置指向其他
目录），每个文件一个主题：

```json
{
  "id": "my-solarized-dark",
  "name": "My Solarized Dark",
  "colorScheme": "dark",
  "roles": {
    "bg": "#002b36",
    "fg": "#839496",
    "accent": "#268bd2"
  }
}
```

上面的示例用 `roles` 描述配色（背景、文字、强调色等），通常够用；想
进一步微调时，也可以直接写展开后的 `tokens`（键以 `--dsw-` 开头）。
`id` 不能与内置主题重名。

### 2. 插件配置

编辑 `~/.dsh/profiles/web/cordis.patch.yml`：

```yaml
- insert:
    - id: colorscheme
      name: dsh-plugin-colorscheme
      config:
        themesDir: /abs/path/to/my/themes   # 默认 ~/.dsh/themes
        defaultTheme: dracula               # 未手动选择时的默认主题
```

### 3. settings 用户层

直接编辑 `~/.dsh/settings.yaml`：

```yaml
colorscheme:
  selection: dracula
  customThemes:
    - id: my-inline-theme
      name: My Inline Theme
      colorScheme: light
      tokens:
        --dsw-alias-bg-base: "#ffffff"
        --dsw-alias-label-primary: "#333333"
```

保存后重启 `dsh web`（或等待 HMR）。`customThemes` 与主题目录文件等价。

### 贡献主题

- **想让主题随插件开箱即用**（所有用户装上就有）：作为内置预设提交，在
  `src/themes/presets.ts` 新增条目，并在 `THIRD_PARTY_NOTICES.md` 与
  `presets-licenses/` 中补充署名与许可。
- **只想分享一个自定义主题文件**：放进 `example-themes/` 作为示例即可
  （注意：示例不会被自动加载，使用者需复制到 `~/.dsh/themes/` 才会生效）。

## 许可

插件代码为 MIT（[LICENSE](LICENSE)）。内置预设的原色板归属与许可见
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) 与
[`presets-licenses/`](presets-licenses/)。
