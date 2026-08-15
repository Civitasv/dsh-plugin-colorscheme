# dsh-plugin-colorscheme

[中文](README.md)

Colorschemes for DeepSeek Harness: apply popular MIT-licensed open-source
theme palettes to the DSH interface. Once loaded, switch themes from
**Settings → Plugins → Plugin configuration → Colorscheme** card, with one click; the selection persists and
is restored after a refresh.

- 8 built-in preset themes (Dracula, Nord, One Dark/Light, Tokyo Night,
  Catppuccin Mocha, VS Code Dark/Light); licenses and attribution in
  [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
- Three ways to extend (below) — or add a theme with the "Add theme" form, delete custom themes in-app, and edit
the themes directory live — all inside the **Colorscheme**
card under Settings → Plugins → Plugin configuration

## Installation

This repository ships the built artifacts (`client.js` and `dist/`), so a clone
works out of the box. You only need `npm install && npm run build` if you
changed the source.

### One-command install (recommended)

```sh
# macOS / Linux
bash install.sh

# Windows (PowerShell)
powershell -ExecutionPolicy Bypass -File install.ps1
```

The script: installs dependencies (including devDependencies, so you can build
locally) → links the plugin into `~/.dsh/profiles/node_modules` → registers it
in `cordis.patch.yml` → prompts you to restart and verify.

### Manual install

> **Link, don't copy**: a `Copy-Item` snapshot won't pick up source changes and
> collides on re-install. Use a link (symlink / Junction) to this repository so
> edits take effect immediately.

```sh
# 1. Clone and enter the directory
git clone https://github.com/Civitasv/dsh-plugin-colorscheme.git
cd dsh-plugin-colorscheme

# 2. Link into the profile's dependency directory
#    macOS / Linux:
ln -sfn "$PWD" ~/.dsh/profiles/node_modules/dsh-plugin-colorscheme
#    Windows (PowerShell — Junction needs no admin rights):
#    New-Item -ItemType Junction -Path "$HOME\.dsh\profiles\node_modules\dsh-plugin-colorscheme" -Target "$PWD"

# 3. Register it in the config: edit ~/.dsh/profiles/web/cordis.patch.yml
#    - insert:
#        - id: colorscheme
#          name: dsh-plugin-colorscheme

# 4. Restart dsh web
```

> **If you have pnpm installed**, you can replace step 2 with
> `dsh plugin --profile web add <absolute path to this plugin>` (equivalent to
> the link). If pnpm is missing, install it first: `npm install -g pnpm` (or
> `corepack enable`).

### Verify

```sh
dsh --profile web --dump-config | grep dsh-plugin-colorscheme
# should print: - id: colorscheme / name: dsh-plugin-colorscheme
```

After restarting, switch themes from
**Settings → Plugins → Plugin configuration → Colorscheme**.

### Development

The plugin is linked into the profile, so after editing the source:

```sh
npm run build   # regenerate dist/ and client.js
```

Server-side changes need a `dsh web` restart; pure client-side changes just
need a page refresh.

## Preview

The **Colorscheme** card under Settings → Plugins → Plugin configuration
(click to switch, persisted automatically):

![Settings](docs/screenshots/settings.png)

Preset themes:

| Theme | Preview |
| --- | --- |
| VS Code Dark | ![VS Code Dark](docs/screenshots/vscode-dark.png) |
| VS Code Light | ![VS Code Light](docs/screenshots/vscode-light.png) |
| Dracula | ![Dracula](docs/screenshots/dracula.png) |
| Nord | ![Nord](docs/screenshots/nord.png) |
| One Dark | ![One Dark](docs/screenshots/one-dark.png) |
| One Light | ![One Light](docs/screenshots/one-light.png) |
| Tokyo Night Storm | ![Tokyo Night Storm](docs/screenshots/tokyo-night.png) |
| Catppuccin Mocha | ![Catppuccin Mocha](docs/screenshots/catppuccin-mocha.png) |

## Extending

### 1. Themes directory (recommended)

Drop theme JSON files into `~/.dsh/themes/` (or point `themesDir` at another
directory) — one theme per file:

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

The example above uses `roles` to describe the palette (background, text,
accent, …) — usually all you need. For finer control you can also provide
expanded `tokens` directly (keys start with `--dsw-`). `id` must not collide
with a built-in theme.

### 2. Plugin config

Edit `~/.dsh/profiles/web/cordis.patch.yml`:

```yaml
- insert:
    - id: colorscheme
      name: dsh-plugin-colorscheme
      config:
        themesDir: /abs/path/to/my/themes   # default ~/.dsh/themes
        defaultTheme: dracula               # theme applied when none is chosen
```

### 3. Settings user layer

Edit `~/.dsh/settings.yaml` directly:

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

Restart `dsh web` (or wait for HMR) after saving. `customThemes` is equivalent
to themes-directory files.

### Contributing a theme

- **To ship a theme built-in** (available to every user out of the box),
  submit it as a preset: add an entry in `src/themes/presets.ts` and record the
  attribution in `THIRD_PARTY_NOTICES.md` and `presets-licenses/`.
- **To share a custom theme file as a sample**, drop it into `example-themes/`
  (note: samples are not auto-loaded — users copy them to `~/.dsh/themes/` to
  use them).

## License

Plugin code is MIT ([LICENSE](LICENSE)). The built-in preset palettes and their
licenses are attributed in [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
and [`presets-licenses/`](presets-licenses/).
