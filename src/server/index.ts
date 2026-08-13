/**
 * Colorscheme plugin — server half.
 *
 * - Registers the `colorscheme` settings namespace (durable `selection` and
 *   `customThemes` user layer).
 * - Serves the theme catalog at `catalogPath` (default
 *   `/colorscheme/themes.json`): preset themes plus user themes read from
 *   `themesDir` (default `$DSH_HOME/themes`) plus settings-layer themes.
 * - User theme files may carry either expanded `tokens` (--dsw-* overrides)
 *   or semantic `roles` (expanded by the shared generator).
 */
import type { Context } from '@deepseek-ai/cordis'
import { settingsNamespace } from '@deepseek-ai/dsh-settings'
import z from '@deepseek-ai/schemastery'
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { isAbsolute, join, resolve } from 'node:path'
import { generateTokens, type ThemeRoles } from '../shared/generate.ts'
import type { ThemeCatalog, ThemeEntry } from '../shared/types.ts'
import { PRESETS } from '../themes/presets.ts'

export const name = 'colorscheme'

export interface Config {
  /** Directory scanned for user theme JSON files (default: $DSH_HOME/themes). */
  themesDir: string
  /** Theme id applied when the user has not chosen one ('' = follow built-in preference). */
  defaultTheme: string
  /** HTTP route serving the theme catalog. */
  catalogPath: string
}

export const Config: z<Config> = z.object({
  themesDir: z.string().default(''),
  defaultTheme: z.string().default(''),
  catalogPath: z.string().default('/colorscheme/themes.json'),
})

/** Settings namespace owned by this plugin. */
const NS = settingsNamespace('colorscheme')

const customThemeSchema = z.object({
  id: z.string(),
  name: z.string().default(''),
  colorScheme: z.union([z.const('light'), z.const('dark')]),
  tokens: z.dict(z.string()).default({}),
})

const SettingsSchema = z.object({
  /** Last colorscheme id chosen in the picker ('' = follow built-in preference). */
  selection: z.string().default(''),
  /** Inline user themes from the settings user layer (settings.yaml). */
  customThemes: z.array(customThemeSchema).default([]),
  // Config mirrors: the entry-config subset lands in the namespace's base
  // layer, so the schema must accept them for the registration to validate.
  themesDir: z.string().default(''),
  defaultTheme: z.string().default(''),
  catalogPath: z.string().default('/colorscheme/themes.json'),
})

function resolveThemesDir(configDir: string): string {
  if (configDir) return isAbsolute(configDir) ? configDir : resolve(process.cwd(), configDir)
  const home = process.env.DSH_HOME || join(homedir(), '.dsh')
  return join(home, 'themes')
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

function isRoles(v: unknown): v is ThemeRoles {
  if (!isRecord(v)) return false
  return typeof v.bg === 'string' && typeof v.fg === 'string' && typeof v.accent === 'string'
}

/** Validate a raw theme object (file or settings layer) into a catalog entry. */
export function normalizeThemeEntry(raw: unknown, source: string): ThemeEntry {
  if (!isRecord(raw)) throw new Error(`${source}: expected a JSON object`)
  const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id.trim() : null
  if (!id) throw new Error(`${source}: missing non-empty string field "id"`)
  if (id === 'light' || id === 'dark' || id === 'system') {
    throw new Error(`${source}: theme id "${id}" is reserved`)
  }
  const colorScheme = raw.colorScheme === 'light' || raw.colorScheme === 'dark' ? raw.colorScheme : null
  if (!colorScheme) throw new Error(`${source}: "colorScheme" must be "light" or "dark"`)
  const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : id
  const roles = isRoles(raw.roles) ? raw.roles : undefined
  const tokens = isRecord(raw.tokens) ? raw.tokens as Record<string, string> : undefined
  if (!roles && !tokens) throw new Error(`${source}: provide "roles" {bg, fg, accent, ...} or "tokens" (--dsw-* overrides)`)
  const expanded = roles ? generateTokens(roles, colorScheme) : { ...tokens }
  for (const key of Object.keys(expanded)) {
    if (!key.startsWith('--dsw-')) throw new Error(`${source}: token key must start with "--dsw-": ${key}`)
    if (typeof expanded[key] !== 'string' || !expanded[key]) throw new Error(`${source}: token "${key}" must be a non-empty string`)
  }
  const meta = isRecord(raw.meta)
    ? {
        author: typeof raw.meta.author === 'string' ? raw.meta.author : undefined,
        license: typeof raw.meta.license === 'string' ? raw.meta.license : undefined,
        source: typeof raw.meta.source === 'string' ? raw.meta.source : undefined,
        description: typeof raw.meta.description === 'string' ? raw.meta.description : undefined,
      }
    : undefined
  return { id, name, colorScheme, tokens: expanded, meta }
}

/** Read and normalize every *.json file in the themes directory. */
function readUserThemes(themesDir: string, errors: Record<string, string>): ThemeEntry[] {
  const out: ThemeEntry[] = []
  let files: string[] = []
  try {
    files = readdirSync(themesDir).filter((f) => f.endsWith('.json')).sort()
  } catch (e) {
    errors[themesDir] = e instanceof Error ? e.message : String(e)
    return out
  }
  for (const file of files) {
    try {
      const raw = JSON.parse(readFileSync(join(themesDir, file), 'utf8'))
      out.push(normalizeThemeEntry(raw, file))
    } catch (e) {
      errors[file] = e instanceof Error ? e.message : String(e)
    }
  }
  return out
}

/** Build the catalog document. */
function buildCatalog(config: Config, ctx: Context): ThemeCatalog {
  const themesDir = resolveThemesDir(config.themesDir)
  try {
    if (!existsSync(themesDir)) mkdirSync(themesDir, { recursive: true })
  } catch {
    // non-fatal: report through errors below
  }
  const errors: Record<string, string> = {}
  const userThemes = readUserThemes(themesDir, errors)

  const settings = ctx.get('settings')
  let settingsThemes: ThemeEntry[] = []
  if (settings !== undefined) {
    const section = settings.get(NS) as { customThemes?: unknown[] } | undefined
    if (section?.customThemes) {
      for (const [i, raw] of section.customThemes.entries()) {
        try {
          settingsThemes.push(normalizeThemeEntry(raw, `settings customThemes[${i}]`))
        } catch (e) {
          errors[`settings customThemes[${i}]`] = e instanceof Error ? e.message : String(e)
        }
      }
    }
  }

  // Reject duplicate ids across sources (ThemeRuntime is single-occupant per id).
  const seen = new Set<string>()
  const dedupe = (entry: ThemeEntry, kind: string): ThemeEntry | null => {
    if (seen.has(entry.id)) {
      errors[`${kind} ${entry.id}`] = `duplicate theme id "${entry.id}" (preset or earlier source already owns it)`
      return null
    }
    seen.add(entry.id)
    return entry
  }

  return {
    version: 1,
    themesDir,
    presets: PRESETS.map((p) => dedupe(p, 'preset')).filter((p): p is ThemeEntry => p !== null).map((p) => ({
      ...p,
      tokens: p.roles ? generateTokens(p.roles, p.colorScheme) : p.tokens,
    })),
    userThemes: userThemes.map((u) => dedupe(u, 'user theme')).filter((u): u is ThemeEntry => u !== null),
    settingsThemes: settingsThemes.map((u) => dedupe(u, 'settings theme')).filter((u): u is ThemeEntry => u !== null),
    defaultTheme: config.defaultTheme,
    errors,
  }
}

/** Plugin body: register the settings namespace and the catalog route. */
export function apply(ctx: Context, config: Config): void {
  ctx.inject(['settings'], (settingsCtx) => {
    settingsCtx.settings.register(NS, SettingsSchema)
  })
  ctx.inject(['webServer'], (httpCtx) => {
    httpCtx.effect(
      () =>
        httpCtx.webServer!.register({
          kind: 'exact',
          path: config.catalogPath,
          handler: (_req, res) => {
            const catalog = buildCatalog(config, httpCtx)
            const body = JSON.stringify(catalog)
            res.writeHead(200, {
              'content-type': 'application/json; charset=utf-8',
              'cache-control': 'no-store',
              'content-length': Buffer.byteLength(body),
            })
            res.end(body)
          },
        }),
      'colorscheme: catalog route',
    )
  })
}
