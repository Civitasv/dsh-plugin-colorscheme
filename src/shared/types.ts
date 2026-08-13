/**
 * Shared wire types for the colorscheme catalog: what the server serves and
 * what the client registers on the theme service. Also the user-theme file
 * format documented in README.md.
 */
import type { ThemeRoles } from './generate.ts'

/** One theme entry as served in the catalog and accepted from user sources. */
export interface ThemeEntry {
  /** Unique theme id (the ctx.theme.setTheme argument). */
  id: string
  /** Display name. */
  name: string
  /** Which base palette this theme builds on. */
  colorScheme: 'light' | 'dark'
  /**
   * Either `tokens` (already-expanded --dsw-* overrides) or `roles`
   * (semantic roles expanded by the shared generator). `roles` wins when both
   * are present.
   */
  tokens?: Record<string, string>
  roles?: ThemeRoles
  /** Optional provenance / attribution. */
  meta?: {
    /** Original author / project. */
    author?: string
    /** SPDX license id of the source palette. */
    license?: string
    /** Upstream source URL. */
    source?: string
    /** Short description. */
    description?: string
  }
}

/** The catalog document served at the catalog route. */
export interface ThemeCatalog {
  /** Catalog schema version. */
  version: 1
  /** Where user themes are read from (absolute path, may not exist yet). */
  themesDir: string
  /** Last picker selection, persisted by the plugin ('' = follow built-in preference). */
  selection: string
  /** Preset themes bundled with the plugin. */
  presets: ThemeEntry[]
  /** User themes from the themes directory. */
  userThemes: ThemeEntry[]
  /** User themes from the settings user layer (settings.yaml). */
  settingsThemes: ThemeEntry[]
  /** Default theme id from plugin config ('' = follow the built-in preference). */
  defaultTheme: string
  /** Per-source load errors (file name → message), for diagnostics. */
  errors: Record<string, string>
}
