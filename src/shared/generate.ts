/**
 * Theme roles → --dsw-* token generator.
 *
 * A colorscheme is defined by a small set of semantic roles (backgrounds,
 * foregrounds, accent, status colors); `generateTokens` expands them into the
 * full `--dsw-alias-*` / `--dsw-specific-*` override set that DSH's
 * ThemeRuntime applies as inline CSS variables. Tokens not derivable from
 * roles keep the design-system defaults (masks, photo overlays) so an
 * override layer is always legible in either palette mode.
 *
 * The token inventory mirrors `design-platform.css` from
 * `@deepseek-ai/dsh-client-ui-theme` (see reference/design-platform.css in
 * this workspace).
 */
import { alpha, elevate, mix, readableOn, shade } from './color.ts'

export interface ThemeRoles {
  /** Base application background (the "editor" background). */
  bg: string
  /** Primary foreground (the "editor" foreground). */
  fg: string
  /** Brand/accent color (primary buttons, links, focus, business state). */
  accent: string
  /** Raised surface (panels, popovers); default: bg. */
  bgElevated?: string
  /** Sidebar / activity-bar fill; default: bgElevated. */
  bgSidebar?: string
  /** Menu / dropdown / floating widget background; default: bgElevated. */
  bgOverlay?: string
  /** Input fields; default: bgElevated. */
  bgInput?: string
  /** Code blocks / inline code / quoted surfaces; default: slight bg tint. */
  bgCode?: string
  /** Hover fill; default: fg at ~6% alpha. */
  bgHover?: string
  /** Active / selected fill; default: fg at ~10% alpha. */
  bgActive?: string
  /** Secondary foreground; default: fg mixed 25% toward bg. */
  fgSecondary?: string
  /** Muted foreground (captions, tertiary labels); default: fg mixed 45% toward bg. */
  fgMuted?: string
  /** Faint foreground (dimmed labels); default: fg mixed 60% toward bg. */
  fgFaint?: string
  /** Text placed on accent surfaces (primary buttons); default: computed from accent luminance. */
  onAccent?: string
  /** Border color; default: fg at ~12% alpha. */
  border?: string
  /** Brand text color (product name); default: fg. */
  brandText?: string
  /** Success state color. */
  success?: string
  /** Error state color. */
  error?: string
  /** Warning state color. */
  warn?: string
  /** Scrollbar thumb base. */
  scrollbar?: string
  /** Toast surface; default: bgOverlay. */
  toastBg?: string
  /** Tooltip surface; default: bgOverlay. */
  tooltipBg?: string
  /** Drop mask behind modal surfaces. */
  maskDrop?: string
}

export type ColorScheme = 'light' | 'dark'

/** Default status colors when a theme does not pin them (design-system hues). */
const FALLBACK = {
  success: '#30a46c',
  error: '#e5484d',
  warn: '#f5a623',
}

/** Expand roles into the full token override map for one color scheme. */
export function generateTokens(roles: ThemeRoles, scheme: ColorScheme): Record<string, string> {
  const { bg, fg, accent } = roles
  const elevated = roles.bgElevated ?? bg
  const sidebar = roles.bgSidebar ?? elevated
  const overlay = roles.bgOverlay ?? elevated
  const input = roles.bgInput ?? elevated
  const code = roles.bgCode ?? mix(bg, fg, 0.03)
  const hover = roles.bgHover ?? alpha(fg, 0.06)
  const active = roles.bgActive ?? alpha(fg, 0.1)
  const onAccent = roles.onAccent ?? readableOn(accent)
  const fgSecondary = roles.fgSecondary ?? mix(fg, bg, 0.25)
  const fgMuted = roles.fgMuted ?? mix(fg, bg, 0.45)
  const fgFaint = roles.fgFaint ?? mix(fg, bg, 0.6)
  const border = roles.border ?? alpha(fg, 0.12)
  const success = roles.success ?? FALLBACK.success
  const error = roles.error ?? FALLBACK.error
  const warn = roles.warn ?? FALLBACK.warn
  const scrollbar = roles.scrollbar ?? mix(bg, fg, 0.12)
  const accentHover = scheme === 'dark' ? mix(accent, '#ffffff', 0.1) : mix(accent, '#000000', 0.1)
  const accentDim = mix(accent, bg, 0.85)
  const toast = roles.toastBg ?? overlay
  const tooltip = roles.tooltipBg ?? overlay

  return {
    // ---- backgrounds ----
    '--dsw-alias-bg-base': bg,
    '--dsw-alias-bg-layer-1': elevated,
    '--dsw-alias-bg-layer-2': elevate(elevated, scheme, 2),
    '--dsw-alias-bg-layer-3': elevate(elevated, scheme, 4),
    '--dsw-alias-bg-mask-1': scheme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.24)',
    '--dsw-alias-bg-mask-2': scheme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.12)',
    '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.48)',
    '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
    '--dsw-alias-bg-mask-drop': roles.maskDrop ?? (scheme === 'dark' ? alpha(mix(bg, fg, 0.15), 0.7) : 'rgba(255, 255, 255, 0.7)'),
    '--dsw-alias-bg-module-platform': sidebar,
    '--dsw-alias-bg-multi-select': active,
    '--dsw-alias-bg-overlay': overlay,
    '--dsw-alias-bg-skeleton': scheme === 'dark' ? alpha(fg, 0.08) : alpha(fg, 0.04),
    // ---- borders ----
    '--dsw-alias-border-inverted2': alpha(onAccent, 0.08),
    '--dsw-alias-border-inverted': alpha(onAccent, 0.06),
    '--dsw-alias-border-l1': alpha(fg, 0.05),
    '--dsw-alias-border-l2-darkmode-thin': alpha(fg, 0.06),
    '--dsw-alias-border-l2': border,
    '--dsw-alias-border-l3': alpha(fg, 0.18),
    '--dsw-alias-border-l4': alpha(fg, 0.24),
    // ---- brand ----
    '--dsw-alias-brand-primary-invert': onAccent,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': accent,
    '--dsw-alias-brand-primary': accent,
    '--dsw-alias-brand-text': roles.brandText ?? fg,
    // ---- buttons ----
    '--dsw-alias-button-contrast-fill': fg,
    '--dsw-alias-button-elevated-fill': elevate(elevated, scheme, 2),
    '--dsw-alias-button-floating-fill': overlay,
    '--dsw-alias-button-floating-hover': mix(overlay, fg, 0.06),
    '--dsw-alias-button-ghost-active-border': alpha(fg, 0.22),
    '--dsw-alias-button-ghost-active-fill': active,
    '--dsw-alias-button-ghost-active-hover': hover,
    '--dsw-alias-button-info-fill': accent,
    '--dsw-alias-button-info-hover': accentHover,
    '--dsw-alias-button-primary-dimmed': alpha(accent, 0.12),
    '--dsw-alias-button-primary-fill': accent,
    '--dsw-alias-button-primary-hover': accentHover,
    '--dsw-alias-button-tool-bar-fill-invisible': alpha(fg, 0.36),
    '--dsw-alias-button-tool-bar-fill': alpha(fg, 0.5),
    '--dsw-alias-button-tool-bar-hover': alpha(fg, 0.6),
    // ---- interactive ----
    '--dsw-alias-interactive-bg-active': alpha(fg, 0.12),
    '--dsw-alias-interactive-bg-hover-accent': alpha(accent, 0.14),
    '--dsw-alias-interactive-bg-hover-danger': alpha(error, 0.1),
    '--dsw-alias-interactive-bg-hover-solid': hover,
    '--dsw-alias-interactive-bg-hover': alpha(fg, 0.07),
    // ---- labels ----
    '--dsw-alias-label-caption': fgMuted,
    '--dsw-alias-label-dimmed': fgFaint,
    '--dsw-alias-label-primary-bluish': fg,
    '--dsw-alias-label-primary-dimmed': fg,
    '--dsw-alias-label-primary-foreground': onAccent,
    '--dsw-alias-label-primary-inverted': onAccent,
    '--dsw-alias-label-primary': fg,
    '--dsw-alias-label-secondary': fgSecondary,
    '--dsw-alias-label-tertiary': fgMuted,
    // ---- markdown / code ----
    '--dsw-alias-markdown-citation': code,
    '--dsw-alias-markdown-code-block-banner': scheme === 'dark' ? shade(code, -0.03) : shade(code, 0.02),
    '--dsw-alias-markdown-code-block': code,
    '--dsw-alias-markdown-code-segment-selected': active,
    '--dsw-alias-markdown-code-segment-unselected': code,
    '--dsw-alias-markdown-inline-code': code,
    '--dsw-alias-markdown-placeholder': input,
    '--dsw-alias-markdown-tag': code,
    // ---- scrollbar ----
    '--dsw-alias-scrollbar-bg-l1': scrollbar,
    '--dsw-alias-scrollbar-bg-l2': mix(bg, fg, 0.16),
    '--dsw-alias-scrollbar-hover-l1': mix(bg, fg, 0.22),
    '--dsw-alias-scrollbar-hover-l2': mix(bg, fg, 0.28),
    // ---- states ----
    '--dsw-alias-state-business-primary': accent,
    '--dsw-alias-state-business-tertiary': accentDim,
    '--dsw-alias-state-error-primary': error,
    '--dsw-alias-state-error-secondary': error,
    '--dsw-alias-state-success-primary': success,
    '--dsw-alias-state-success-secondary': success,
    '--dsw-alias-state-success-tertiary': mix(success, bg, 0.85),
    '--dsw-alias-state-warn-label': warn,
    '--dsw-alias-state-warn-primary': warn,
    '--dsw-alias-state-warn-secondary': warn,
    '--dsw-alias-state-warn-tertiary': mix(warn, bg, 0.85),
    // ---- floating surfaces ----
    '--dsw-alias-toast-bg': toast,
    '--dsw-alias-tooltip-bg': tooltip,
    // ---- specific surfaces ----
    '--dsw-specific-bubble-highlight': accentDim,
    '--dsw-specific-bubble': code,
    '--dsw-specific-input-major': input,
    '--dsw-specific-login-input': input,
    '--dsw-specific-menu': overlay,
    '--dsw-specific-selector': input,
    '--dsw-specific-sidebar-fill': sidebar,
    '--dsw-specific-sidebar-nav-item-active-accent': accentDim,
    '--dsw-specific-sidebar-nav-item-active': active,
    '--dsw-specific-sidebar-nav-item-hover': hover,
    '--dsw-specific-tip': mix(bg, fg, 0.02),
  }
}
