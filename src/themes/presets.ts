/**
 * Built-in preset colorschemes.
 *
 * Every preset is adapted from a well-known, MIT-licensed color theme. The
 * original palettes are extracted (workbench colors / documented palettes)
 * and mapped onto the DSH `--dsw-alias-*` semantic token system by
 * `generateTokens`. Attribution and license texts live in
 * `THIRD_PARTY_NOTICES.md` and `presets-licenses/`.
 */
import type { ThemeEntry } from '../shared/types.ts'

/**
 * Build a preset entry. `roles` are expanded by the server at catalog time
 * (kept here so presets stay readable and regenerate if the token mapping
 * evolves).
 */
export function preset(id: string, name: string, colorScheme: 'light' | 'dark', roles: ThemeEntry['roles'], meta: ThemeEntry['meta']): ThemeEntry {
  return { id, name, colorScheme, roles, meta }
}

/** VS Code "Dark Modern" (microsoft/vscode, MIT). */
export const vscodeDark = preset('vscode-dark', 'VS Code Dark', 'dark', {
  bg: '#1f1f1f',
  fg: '#cccccc',
  accent: '#0078d4',
  bgElevated: '#181818',
  bgSidebar: '#181818',
  bgOverlay: '#252526',
  bgInput: '#313131',
  bgCode: '#1c1c1c',
  bgHover: '#2a2d2e',
  bgActive: '#04395e',
  fgSecondary: '#d7d7d7',
  fgMuted: '#9d9d9d',
  onAccent: '#ffffff',
  border: '#2b2b2b',
  success: '#4ec9b0',
  error: '#f85149',
  warn: '#cca700',
  scrollbar: '#424242',
}, {
  author: 'Microsoft Corporation (VS Code Dark Modern)',
  license: 'MIT',
  source: 'https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_modern.json',
  description: 'The default dark theme shipped with VS Code.',
})

/** VS Code "Light Modern" (microsoft/vscode, MIT). */
export const vscodeLight = preset('vscode-light', 'VS Code Light', 'light', {
  bg: '#ffffff',
  fg: '#3b3b3b',
  accent: '#005fb8',
  bgElevated: '#f8f8f8',
  bgSidebar: '#f8f8f8',
  bgOverlay: '#f8f8f8',
  bgInput: '#ffffff',
  bgCode: '#f6f6f6',
  bgHover: '#f2f2f2',
  bgActive: '#e8e8e8',
  fgSecondary: '#3b3b3b',
  fgMuted: '#6f6f6f',
  onAccent: '#ffffff',
  border: '#e5e5e5',
  success: '#107c10',
  error: '#a1260d',
  warn: '#895503',
  scrollbar: '#c9c9c9',
}, {
  author: 'Microsoft Corporation (VS Code Light Modern)',
  license: 'MIT',
  source: 'https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/light_modern.json',
  description: 'The default light theme shipped with VS Code.',
})

/** Dracula (dracula/visual-studio-code, MIT). */
export const dracula = preset('dracula', 'Dracula', 'dark', {
  bg: '#282a36',
  fg: '#f8f8f2',
  accent: '#bd93f9',
  bgElevated: '#21222c',
  bgSidebar: '#21222c',
  bgOverlay: '#343746',
  bgInput: '#282a36',
  bgCode: '#21222c',
  bgHover: '#3d404e',
  bgActive: '#44475a',
  fgSecondary: '#f8f8f2',
  fgMuted: '#6272a4',
  fgFaint: '#44475a',
  onAccent: '#1e1f29',
  border: '#3d404e',
  success: '#50fa7b',
  error: '#ff5555',
  warn: '#f1fa8c',
  scrollbar: '#44475a',
}, {
  author: 'Zeno Rocha (Dracula Theme)',
  license: 'MIT',
  source: 'https://github.com/dracula/visual-studio-code',
  description: 'The iconic Dracula palette with purple accent.',
})

/** Nord (arcticicestudio/nord-visual-studio-code, MIT). */
export const nord = preset('nord', 'Nord', 'dark', {
  bg: '#2e3440',
  fg: '#d8dee9',
  accent: '#88c0d0',
  bgElevated: '#3b4252',
  bgSidebar: '#2e3440',
  bgOverlay: '#3b4252',
  bgInput: '#3b4252',
  bgCode: '#2a303c',
  bgHover: '#3b4252',
  bgActive: '#434c5e',
  fgSecondary: '#d8dee9',
  fgMuted: '#7b88a1',
  onAccent: '#2e3440',
  border: '#434c5e',
  success: '#a3be8c',
  error: '#bf616a',
  warn: '#ebcb8b',
  scrollbar: '#434c5e',
}, {
  author: 'Arctic Ice Studio (Nord)',
  license: 'MIT',
  source: 'https://github.com/arcticicestudio/nord-visual-studio-code',
  description: 'An arctic, north-bluish clean theme.',
})

/** One Dark (atom/one-dark-syntax, MIT). */
export const oneDark = preset('one-dark', 'One Dark', 'dark', {
  bg: '#282c34',
  fg: '#abb2bf',
  accent: '#61afef',
  bgElevated: '#21252b',
  bgSidebar: '#21252b',
  bgOverlay: '#21252b',
  bgInput: '#1f2329',
  bgCode: '#21252b',
  bgHover: '#2c313a',
  bgActive: '#3e4451',
  fgSecondary: '#abb2bf',
  fgMuted: '#5c6370',
  onAccent: '#282c34',
  border: '#2c313a',
  success: '#98c379',
  error: '#e06c75',
  warn: '#e5c07b',
  scrollbar: '#3e4451',
}, {
  author: 'GitHub / Atom (One Dark)',
  license: 'MIT',
  source: 'https://github.com/atom/one-dark-syntax',
  description: 'The Atom editor dark syntax theme.',
})

/** One Light (atom/one-light-syntax, MIT). */
export const oneLight = preset('one-light', 'One Light', 'light', {
  bg: '#fafafa',
  fg: '#383a42',
  accent: '#4078f2',
  bgElevated: '#f5f5f5',
  bgSidebar: '#f5f5f5',
  bgOverlay: '#f5f5f5',
  bgInput: '#ffffff',
  bgCode: '#f2f2f2',
  bgHover: '#ececec',
  bgActive: '#e5e5e6',
  fgSecondary: '#383a42',
  fgMuted: '#a0a1a7',
  onAccent: '#ffffff',
  border: '#e1e1e1',
  success: '#50a14f',
  error: '#e45649',
  warn: '#c18401',
  scrollbar: '#c8c8c8',
}, {
  author: 'GitHub / Atom (One Light)',
  license: 'MIT',
  source: 'https://github.com/atom/one-light-syntax',
  description: 'The Atom editor light syntax theme.',
})

/** Tokyo Night Storm (enkia/tokyo-night-vscode-theme, MIT). */
export const tokyoNight = preset('tokyo-night', 'Tokyo Night Storm', 'dark', {
  bg: '#24283b',
  fg: '#a9b1d6',
  accent: '#7aa2f7',
  bgElevated: '#1f2335',
  bgSidebar: '#1f2335',
  bgOverlay: '#1f2335',
  bgInput: '#1b1e2e',
  bgCode: '#202434',
  bgHover: '#2c324a',
  bgActive: '#2c324a',
  fgSecondary: '#9aa5ce',
  fgMuted: '#565f89',
  onAccent: '#16161e',
  border: '#414868',
  success: '#73daca',
  error: '#f7768e',
  warn: '#e0af68',
  scrollbar: '#414868',
}, {
  author: 'Tomas Pustelnik (Tokyo Night)',
  license: 'MIT',
  source: 'https://github.com/enkia/tokyo-night-vscode-theme',
  description: 'The Tokyo Night "Storm" variant.',
})

/** Catppuccin Mocha (catppuccin/palette, MIT). */
export const catppuccin = preset('catppuccin-mocha', 'Catppuccin Mocha', 'dark', {
  bg: '#1e1e2e',
  fg: '#cdd6f4',
  accent: '#cba6f7',
  bgElevated: '#181825',
  bgSidebar: '#181825',
  bgOverlay: '#313244',
  bgInput: '#313244',
  bgCode: '#181825',
  bgHover: '#313244',
  bgActive: '#45475a',
  fgSecondary: '#bac2de',
  fgMuted: '#7f849c',
  onAccent: '#1e1e2e',
  border: '#313244',
  success: '#a6e3a1',
  error: '#f38ba8',
  warn: '#f9e2af',
  scrollbar: '#45475a',
}, {
  author: 'Catppuccin Org',
  license: 'MIT',
  source: 'https://github.com/catppuccin/palette',
  description: 'Catppuccin Mocha, the warm dark flavor with mauve accent.',
})

/** Ordered preset list (registration order). */
export const PRESETS: ThemeEntry[] = [
  vscodeDark,
  vscodeLight,
  dracula,
  nord,
  oneDark,
  oneLight,
  tokyoNight,
  catppuccin,
]
