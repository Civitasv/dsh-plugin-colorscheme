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
import { defineStore } from '@deepseek-ai/dsh-client-runtime/client'
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { ThemeSnapshot } from '@deepseek-ai/dsh-client-ui-theme/client'
// Type-only imports that pull the context augmentations (settingsScope,
// locale, the settings.general.item slot contract) into this program.
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
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
} as const

/** English dictionary, checked complete against the zh key set. */
const en: Record<keyof typeof zh, string> = {
  'colorscheme.title': 'Colorscheme',
  'colorscheme.default': 'Follow appearance',
  'colorscheme.loadError': 'Failed to load colorschemes',
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
  error: string
}

function createRowStore() {
  return defineStore({
    init: (): RowState => ({ selection: DEFAULT_ID, revision: -1, themes: [], error: '' }),
    actions: {
      sync: (d: RowState, selection: string, revision: number, themes: RowTheme[], error: string) => {
        if (revision <= d.revision) return
        d.selection = selection
        d.revision = revision
        d.themes = themes
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

/** The Colorscheme preference row (registered into settings.general.item). */
function ColorschemeRow(props: {
  t: (key: keyof typeof zh) => string
  useStore: <S>(selector: (s: RowState) => S) => S
  setTheme: (id: string) => void
}) {
  const { t, useStore, setTheme } = props
  const selection = useStore((s) => s.selection)
  const themes = useStore((s) => s.themes)
  const error = useStore((s) => s.error)

  const chips = [
    {
      id: DEFAULT_ID,
      label: t('colorscheme.default'),
      samples: [],
    },
    ...themes.map((th) => ({ id: th.id, label: th.name, samples: th.samples })),
  ]

  return (
    <div className="dshcs-row">
      <div className="dshcs-title">{t('colorscheme.title')}</div>
      {error ? <div className="dshcs-error">{error}</div> : null}
      <div className="dshcs-grid">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="dshcs-chip"
            aria-pressed={selection === chip.id}
            onClick={() => setTheme(chip.id)}
          >
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
        ))}
      </div>
    </div>
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
  let bound: { sync: (selection: string, revision: number, themes: RowTheme[], error: string) => void } | undefined
  /** Persisted/desired colorscheme id ('' = follow the Appearance preference). */
  let selection = DEFAULT_ID
  let revision = -1

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
    bound.sync(activeSelection(), revision, toRowThemes(theme.getTheme(), nameById), error)
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

  const registerCatalog = (catalog: ThemeCatalog) => {
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
      for (const dispose of disposers) {
        try {
          dispose()
        } catch {
          // already gone
        }
      }
      disposers.length = 0
      const body = document.body
      for (const name of appliedTokens) body.style.removeProperty(name)
      appliedTokens.length = 0
    },
    'colorscheme: theme registrations',
  )

  // The preference row, placed after the built-in Appearance row (order 10).
  ctx.slots.inject('settings.general.item', () =>
    ctx.slots.register(
      {
        name: 'settings.general.item',
        id: 'colorscheme',
        order: 20,
        store,
        locale: LOCALE_NS,
        inject: (actions: { sync: (selection: string, revision: number, themes: RowTheme[], error: string) => void }) => {
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
          }
        },
      },
      ColorschemeRow,
    ),
  )
}
