/**
 * Color utilities for theme generation. All values are hex (#rgb / #rrggbb) or
 * 8-digit hex (#rrggbbaa); the generator converts to the CSS forms DSH tokens
 * expect (rgb() / rgba() / plain hex).
 */

export type RGB = [number, number, number]

/** Parse '#rgb', '#rrggbb' or '#rrggbbaa' into an [r,g,b] tuple (alpha dropped). */
export function hexToRgb(hex: string): RGB {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (h.length !== 6 && h.length !== 8) throw new Error(`colorscheme: not a hex color: ${hex}`)
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

export function rgbToHex([r, g, b]: RGB): string {
  const to = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}

/** Linear interpolation between two colors; t=0 → a, t=1 → b. */
export function mix(a: string, b: string, t: number): string {
  const ca = hexToRgb(a)
  const cb = hexToRgb(b)
  return rgbToHex(ca.map((v, i) => v + (cb[i] - v) * t) as RGB)
}

/** Relative luminance (WCAG-ish), 0 (black) … 1 (white). */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Readable text on a background: near-black on light bg, near-white on dark bg. */
export function readableOn(bg: string, darkText = '#1e1f24', lightText = '#ffffff'): string {
  return luminance(bg) > 0.45 ? darkText : lightText
}

/** Emit an rgba() CSS color from a hex color and an alpha in [0,1]. */
export function alpha(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, a))})`
}

/** Lighten (positive amt) or darken (negative) a color toward white/black. */
export function shade(hex: string, amt: number): string {
  // amt in [-1,1]: positive lightens toward white, negative darkens toward black.
  const target = amt >= 0 ? '#ffffff' : '#000000'
  return mix(hex, target, Math.abs(amt))
}

/** Scheme-aware elevation: dark schemes elevate toward lighter, light schemes stay near bg. */
export function elevate(bg: string, scheme: 'light' | 'dark', steps: number): string {
  if (scheme === 'light') return bg
  return shade(bg, 0.02 * steps)
}
