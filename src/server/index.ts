/**
 * Colorscheme plugin — server half.
 *
 * - Registers the `colorscheme` settings namespace (server-side `customThemes`
 *   user layer and a manual `selection` fallback; the namespace is NOT exposed
 *   on the browser settings wire, which only serves the built-in allowlist).
 * - Serves the theme catalog at `catalogPath` (default
 *   `/colorscheme/themes.json`): preset themes plus user themes read from
 *   `themesDir` (default `$DSH_HOME/themes`) plus settings-layer themes.
 * - Persists the picker selection through the same route: GET returns the
 *   catalog with the saved `selection`; POST `{selection}` stores it in a
 *   state file inside `themesDir` (atomic write). The browser client cannot
 *   write arbitrary settings namespaces, so the plugin owns its own
 *   persistence instead of the settings wire.
 * - User theme files may carry either expanded `tokens` (--dsw-* overrides)
 *   or semantic `roles` (expanded by the shared generator).
 */
import type { Context } from '@deepseek-ai/cordis'
import { settingsNamespace } from '@deepseek-ai/dsh-settings'
import z from '@deepseek-ai/schemastery'
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
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

/** Settings namespace owned by this plugin (server-side surface only). */
const NS = settingsNamespace('colorscheme')

const customThemeSchema = z.object({
  id: z.string(),
  name: z.string().default(''),
  colorScheme: z.union([z.const('light'), z.const('dark')]),
  tokens: z.dict(z.string()).default({}),
})

const SettingsSchema = z.object({
  /** Manual selection fallback (settings.yaml); the picker persists via the route. */
  selection: z.string().default(''),
  /** Inline user themes from the settings user layer (settings.yaml). */
  customThemes: z.array(customThemeSchema).default([]),
  // Config mirrors: the entry-config subset lands in the namespace's base
  // layer, so the schema must accept them for the registration to validate.
  themesDir: z.string().default(''),
  defaultTheme: z.string().default(''),
  catalogPath: z.string().default('/colorscheme/themes.json'),
})

/** State file holding the picker selection, inside the themes directory. */
const SELECTION_FILE = '.colorscheme.json'

/** User-editable config overrides (live, via the plugin config card). */
const CONFIG_OVERRIDE_FILE = 'dsh-plugin-colorscheme-config.json'

function configOverridePath(): string {
  const home = process.env.DSH_HOME || join(homedir(), '.dsh')
  return join(home, CONFIG_OVERRIDE_FILE)
}

function readConfigOverride(): { themesDir?: string } {
  try {
    const raw = JSON.parse(readFileSync(configOverridePath(), 'utf8'))
    if (!isRecord(raw)) return {}
    return {
      themesDir: typeof raw.themesDir === 'string' ? raw.themesDir : undefined,
    }
  } catch {
    return {}
  }
}

function writeConfigOverride(override: { themesDir?: string }): void {
  writeFileSync(configOverridePath(), JSON.stringify(override, null, 2), 'utf8')
}

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

/** Read the persisted picker selection from the state file ('' when absent). */
function readPersistedSelection(themesDir: string): string {
  try {
    const raw = JSON.parse(readFileSync(join(themesDir, SELECTION_FILE), 'utf8'))
    if (isRecord(raw) && typeof raw.selection === 'string') return raw.selection
  } catch {
    // absent or malformed — treat as no selection
  }
  return ''
}

/** Persist the picker selection with an atomic write (tmp + rename). */
function writePersistedSelection(themesDir: string, selection: string): void {
  const file = join(themesDir, SELECTION_FILE)
  const tmp = `${file}.tmp`
  writeFileSync(tmp, JSON.stringify({ selection }), 'utf8')
  renameSync(tmp, file)
}

/** Build the catalog document (honoring live config overrides). */
function buildCatalog(config: Config, ctx: Context): ThemeCatalog {
  const override = readConfigOverride()
  const themesDir = resolveThemesDir(override.themesDir ?? config.themesDir)
  try {
    if (!existsSync(themesDir)) mkdirSync(themesDir, { recursive: true })
  } catch {
    // non-fatal: report through errors below
  }
  const errors: Record<string, string> = {}
  const userThemes = readUserThemes(themesDir, errors)

  const settings = ctx.get('settings')
  let settingsThemes: ThemeEntry[] = []
  let manualSelection = ''
  if (settings !== undefined) {
    const section = settings.get(NS) as { customThemes?: unknown[]; selection?: string } | undefined
    if (section?.customThemes) {
      for (const [i, raw] of section.customThemes.entries()) {
        try {
          settingsThemes.push(normalizeThemeEntry(raw, `settings customThemes[${i}]`))
        } catch (e) {
          errors[`settings customThemes[${i}]`] = e instanceof Error ? e.message : String(e)
        }
      }
    }
    if (typeof section?.selection === 'string') manualSelection = section.selection
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
    selection: readPersistedSelection(themesDir) || manualSelection,
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

/** JSON helper for the route handler. */
function jsonResponse(res: import('node:http').ServerResponse, status: number, body: unknown): void {
  const data = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'content-length': Buffer.byteLength(data),
  })
  res.end(data)
}

/** Plugin body: register the settings namespace and the catalog/selection route. */
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
          handler: async (req, res) => {
            if (req.method === 'GET' || req.method === 'HEAD') {
              jsonResponse(res, 200, buildCatalog(config, httpCtx))
              return
            }
            if (req.method === 'POST') {
              let body = ''
              for await (const chunk of req) body += chunk
              let parsed: unknown
              try {
                parsed = JSON.parse(body)
              } catch {
                jsonResponse(res, 400, { ok: false, error: 'invalid JSON body' })
                return
              }
              const record = isRecord(parsed) ? parsed : {}
              const action = typeof record.action === 'string' ? record.action : 'set-selection'

              // Save live config overrides (the plugin config card); {} clears them.
              if (action === 'set-config') {
                const cfg = isRecord(record.config) ? record.config : {}
                const next: { themesDir?: string } = {}
                if (typeof cfg.themesDir === 'string') next.themesDir = cfg.themesDir
                try {
                  writeConfigOverride(next)
                  jsonResponse(res, 200, { ok: true })
                } catch (e) {
                  jsonResponse(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) })
                }
                return
              }

              // Add a user theme: validate, then write <themesDir>/<id>.json.
              if (action === 'add-theme') {
                const catalog = buildCatalog(config, httpCtx)
                try {
                  const entry = normalizeThemeEntry(record.theme, 'new theme')
                  const known = new Set([...catalog.presets, ...catalog.userThemes, ...catalog.settingsThemes].map((t) => t.id))
                  if (known.has(entry.id)) {
                    jsonResponse(res, 400, { ok: false, error: `theme id "${entry.id}" already exists` })
                    return
                  }
                  // Store the raw user input (roles preferred) so it stays editable.
                  const raw = isRecord(record.theme) ? record.theme : {}
                  const stored = {
                    id: entry.id,
                    name: entry.name,
                    colorScheme: entry.colorScheme,
                    ...(isRecord(raw.roles) ? { roles: raw.roles } : { tokens: entry.tokens }),
                  }
                  writeFileSync(join(catalog.themesDir, `${entry.id}.json`), JSON.stringify(stored, null, 2), 'utf8')
                  jsonResponse(res, 200, { ok: true, id: entry.id })
                } catch (e) {
                  jsonResponse(res, 400, { ok: false, error: e instanceof Error ? e.message : String(e) })
                }
                return
              }

              // Remove a user theme from the themes directory (never presets).
              if (action === 'remove-theme') {
                const id = typeof record.id === 'string' ? record.id.trim() : ''
                if (!id || !/^[A-Za-z0-9._-]+$/.test(id)) {
                  jsonResponse(res, 400, { ok: false, error: 'invalid theme id' })
                  return
                }
                const catalog = buildCatalog(config, httpCtx)
                if (catalog.presets.some((t) => t.id === id) || catalog.settingsThemes.some((t) => t.id === id)) {
                  jsonResponse(res, 400, { ok: false, error: `"${id}" is not a themes-directory user theme` })
                  return
                }
                const file = join(catalog.themesDir, `${id}.json`)
                try {
                  if (!existsSync(file)) {
                    jsonResponse(res, 404, { ok: false, error: `theme file not found: ${id}` })
                    return
                  }
                  rmSync(file, { force: true })
                  if (readPersistedSelection(catalog.themesDir) === id) writePersistedSelection(catalog.themesDir, '')
                  jsonResponse(res, 200, { ok: true, id })
                } catch (e) {
                  jsonResponse(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) })
                }
                return
              }

              // Default: persist the picker selection.
              const selection = typeof record.selection === 'string' ? record.selection : ''
              const catalog = buildCatalog(config, httpCtx)
              const known = new Set([...catalog.presets, ...catalog.userThemes, ...catalog.settingsThemes].map((t) => t.id))
              if (selection !== '' && !known.has(selection)) {
                jsonResponse(res, 400, { ok: false, error: `unknown theme id: ${selection}` })
                return
              }
              try {
                writePersistedSelection(catalog.themesDir, selection)
                jsonResponse(res, 200, { ok: true, selection })
              } catch (e) {
                jsonResponse(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) })
              }
              return
            }
            jsonResponse(res, 405, { ok: false, error: 'method not allowed' })
          },
        }),
      'colorscheme: catalog route',
    )
  })
}
