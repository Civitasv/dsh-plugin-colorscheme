// src/server/index.ts
import { settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";
import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { isAbsolute, join, resolve } from "node:path";

// src/shared/color.ts
function hexToRgb(hex) {
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6 && h.length !== 8) throw new Error(`colorscheme: not a hex color: ${hex}`);
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ];
}
function rgbToHex([r, g, b]) {
  const to = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}
function mix(a, b, t) {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return rgbToHex(ca.map((v, i) => v + (cb[i] - v) * t));
}
function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function readableOn(bg, darkText = "#1e1f24", lightText = "#ffffff") {
  return luminance(bg) > 0.45 ? darkText : lightText;
}
function alpha(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, a))})`;
}
function shade(hex, amt) {
  const target = amt >= 0 ? "#ffffff" : "#000000";
  return mix(hex, target, Math.abs(amt));
}
function elevate(bg, scheme, steps) {
  if (scheme === "light") return bg;
  return shade(bg, 0.02 * steps);
}

// src/shared/generate.ts
var FALLBACK = {
  success: "#30a46c",
  error: "#e5484d",
  warn: "#f5a623"
};
function generateTokens(roles, scheme) {
  const { bg, fg, accent } = roles;
  const elevated = roles.bgElevated ?? bg;
  const sidebar = roles.bgSidebar ?? elevated;
  const overlay = roles.bgOverlay ?? elevated;
  const input = roles.bgInput ?? elevated;
  const code = roles.bgCode ?? mix(bg, fg, 0.03);
  const hover = roles.bgHover ?? alpha(fg, 0.06);
  const active = roles.bgActive ?? alpha(fg, 0.1);
  const onAccent = roles.onAccent ?? readableOn(accent);
  const fgSecondary = roles.fgSecondary ?? mix(fg, bg, 0.25);
  const fgMuted = roles.fgMuted ?? mix(fg, bg, 0.45);
  const fgFaint = roles.fgFaint ?? mix(fg, bg, 0.6);
  const border = roles.border ?? alpha(fg, 0.12);
  const success = roles.success ?? FALLBACK.success;
  const error = roles.error ?? FALLBACK.error;
  const warn = roles.warn ?? FALLBACK.warn;
  const scrollbar = roles.scrollbar ?? mix(bg, fg, 0.12);
  const accentHover = scheme === "dark" ? mix(accent, "#ffffff", 0.1) : mix(accent, "#000000", 0.1);
  const accentDim = mix(accent, bg, 0.85);
  const toast = roles.toastBg ?? overlay;
  const tooltip = roles.tooltipBg ?? overlay;
  return {
    // ---- backgrounds ----
    "--dsw-alias-bg-base": bg,
    "--dsw-alias-bg-layer-1": elevated,
    "--dsw-alias-bg-layer-2": elevate(elevated, scheme, 2),
    "--dsw-alias-bg-layer-3": elevate(elevated, scheme, 4),
    "--dsw-alias-bg-mask-1": scheme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.24)",
    "--dsw-alias-bg-mask-2": scheme === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.12)",
    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.48)",
    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
    "--dsw-alias-bg-mask-drop": roles.maskDrop ?? (scheme === "dark" ? alpha(mix(bg, fg, 0.15), 0.7) : "rgba(255, 255, 255, 0.7)"),
    "--dsw-alias-bg-module-platform": sidebar,
    "--dsw-alias-bg-multi-select": active,
    "--dsw-alias-bg-overlay": overlay,
    "--dsw-alias-bg-skeleton": scheme === "dark" ? alpha(fg, 0.08) : alpha(fg, 0.04),
    // ---- borders ----
    "--dsw-alias-border-inverted2": alpha(onAccent, 0.08),
    "--dsw-alias-border-inverted": alpha(onAccent, 0.06),
    "--dsw-alias-border-l1": alpha(fg, 0.05),
    "--dsw-alias-border-l2-darkmode-thin": alpha(fg, 0.06),
    "--dsw-alias-border-l2": border,
    "--dsw-alias-border-l3": alpha(fg, 0.18),
    "--dsw-alias-border-l4": alpha(fg, 0.24),
    // ---- brand ----
    "--dsw-alias-brand-primary-invert": onAccent,
    "--dsw-alias-brand-primary-new-colorprimary-new-color": accent,
    "--dsw-alias-brand-primary": accent,
    "--dsw-alias-brand-text": roles.brandText ?? fg,
    // ---- buttons ----
    "--dsw-alias-button-contrast-fill": fg,
    "--dsw-alias-button-elevated-fill": elevate(elevated, scheme, 2),
    "--dsw-alias-button-floating-fill": overlay,
    "--dsw-alias-button-floating-hover": mix(overlay, fg, 0.06),
    "--dsw-alias-button-ghost-active-border": alpha(fg, 0.22),
    "--dsw-alias-button-ghost-active-fill": active,
    "--dsw-alias-button-ghost-active-hover": hover,
    "--dsw-alias-button-info-fill": accent,
    "--dsw-alias-button-info-hover": accentHover,
    "--dsw-alias-button-primary-dimmed": alpha(accent, 0.12),
    "--dsw-alias-button-primary-fill": accent,
    "--dsw-alias-button-primary-hover": accentHover,
    "--dsw-alias-button-tool-bar-fill-invisible": alpha(fg, 0.36),
    "--dsw-alias-button-tool-bar-fill": alpha(fg, 0.5),
    "--dsw-alias-button-tool-bar-hover": alpha(fg, 0.6),
    // ---- interactive ----
    "--dsw-alias-interactive-bg-active": alpha(fg, 0.12),
    "--dsw-alias-interactive-bg-hover-accent": alpha(accent, 0.14),
    "--dsw-alias-interactive-bg-hover-danger": alpha(error, 0.1),
    "--dsw-alias-interactive-bg-hover-solid": hover,
    "--dsw-alias-interactive-bg-hover": alpha(fg, 0.07),
    // ---- labels ----
    "--dsw-alias-label-caption": fgMuted,
    "--dsw-alias-label-dimmed": fgFaint,
    "--dsw-alias-label-primary-bluish": fg,
    "--dsw-alias-label-primary-dimmed": fg,
    "--dsw-alias-label-primary-foreground": onAccent,
    "--dsw-alias-label-primary-inverted": onAccent,
    "--dsw-alias-label-primary": fg,
    "--dsw-alias-label-secondary": fgSecondary,
    "--dsw-alias-label-tertiary": fgMuted,
    // ---- markdown / code ----
    "--dsw-alias-markdown-citation": code,
    "--dsw-alias-markdown-code-block-banner": scheme === "dark" ? shade(code, -0.03) : shade(code, 0.02),
    "--dsw-alias-markdown-code-block": code,
    "--dsw-alias-markdown-code-segment-selected": active,
    "--dsw-alias-markdown-code-segment-unselected": code,
    "--dsw-alias-markdown-inline-code": code,
    "--dsw-alias-markdown-placeholder": input,
    "--dsw-alias-markdown-tag": code,
    // ---- scrollbar ----
    "--dsw-alias-scrollbar-bg-l1": scrollbar,
    "--dsw-alias-scrollbar-bg-l2": mix(bg, fg, 0.16),
    "--dsw-alias-scrollbar-hover-l1": mix(bg, fg, 0.22),
    "--dsw-alias-scrollbar-hover-l2": mix(bg, fg, 0.28),
    // ---- states ----
    "--dsw-alias-state-business-primary": accent,
    "--dsw-alias-state-business-tertiary": accentDim,
    "--dsw-alias-state-error-primary": error,
    "--dsw-alias-state-error-secondary": error,
    "--dsw-alias-state-success-primary": success,
    "--dsw-alias-state-success-secondary": success,
    "--dsw-alias-state-success-tertiary": mix(success, bg, 0.85),
    "--dsw-alias-state-warn-label": warn,
    "--dsw-alias-state-warn-primary": warn,
    "--dsw-alias-state-warn-secondary": warn,
    "--dsw-alias-state-warn-tertiary": mix(warn, bg, 0.85),
    // ---- floating surfaces ----
    "--dsw-alias-toast-bg": toast,
    "--dsw-alias-tooltip-bg": tooltip,
    // ---- specific surfaces ----
    "--dsw-specific-bubble-highlight": accentDim,
    "--dsw-specific-bubble": code,
    "--dsw-specific-input-major": input,
    "--dsw-specific-login-input": input,
    "--dsw-specific-menu": overlay,
    "--dsw-specific-selector": input,
    "--dsw-specific-sidebar-fill": sidebar,
    "--dsw-specific-sidebar-nav-item-active-accent": accentDim,
    "--dsw-specific-sidebar-nav-item-active": active,
    "--dsw-specific-sidebar-nav-item-hover": hover,
    "--dsw-specific-tip": mix(bg, fg, 0.02)
  };
}

// src/themes/presets.ts
function preset(id, name2, colorScheme, roles, meta) {
  return { id, name: name2, colorScheme, roles, meta };
}
var vscodeDark = preset("vscode-dark", "VS Code Dark", "dark", {
  bg: "#1f1f1f",
  fg: "#cccccc",
  accent: "#0078d4",
  bgElevated: "#181818",
  bgSidebar: "#181818",
  bgOverlay: "#252526",
  bgInput: "#313131",
  bgCode: "#1c1c1c",
  bgHover: "#2a2d2e",
  bgActive: "#04395e",
  fgSecondary: "#d7d7d7",
  fgMuted: "#9d9d9d",
  onAccent: "#ffffff",
  border: "#2b2b2b",
  success: "#4ec9b0",
  error: "#f85149",
  warn: "#cca700",
  scrollbar: "#424242"
}, {
  author: "Microsoft Corporation (VS Code Dark Modern)",
  license: "MIT",
  source: "https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_modern.json",
  description: "The default dark theme shipped with VS Code."
});
var vscodeLight = preset("vscode-light", "VS Code Light", "light", {
  bg: "#ffffff",
  fg: "#3b3b3b",
  accent: "#005fb8",
  bgElevated: "#f8f8f8",
  bgSidebar: "#f8f8f8",
  bgOverlay: "#f8f8f8",
  bgInput: "#ffffff",
  bgCode: "#f6f6f6",
  bgHover: "#f2f2f2",
  bgActive: "#e8e8e8",
  fgSecondary: "#3b3b3b",
  fgMuted: "#6f6f6f",
  onAccent: "#ffffff",
  border: "#e5e5e5",
  success: "#107c10",
  error: "#a1260d",
  warn: "#895503",
  scrollbar: "#c9c9c9"
}, {
  author: "Microsoft Corporation (VS Code Light Modern)",
  license: "MIT",
  source: "https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/light_modern.json",
  description: "The default light theme shipped with VS Code."
});
var dracula = preset("dracula", "Dracula", "dark", {
  bg: "#282a36",
  fg: "#f8f8f2",
  accent: "#bd93f9",
  bgElevated: "#21222c",
  bgSidebar: "#21222c",
  bgOverlay: "#343746",
  bgInput: "#282a36",
  bgCode: "#21222c",
  bgHover: "#3d404e",
  bgActive: "#44475a",
  fgSecondary: "#f8f8f2",
  fgMuted: "#6272a4",
  fgFaint: "#44475a",
  onAccent: "#1e1f29",
  border: "#3d404e",
  success: "#50fa7b",
  error: "#ff5555",
  warn: "#f1fa8c",
  scrollbar: "#44475a"
}, {
  author: "Zeno Rocha (Dracula Theme)",
  license: "MIT",
  source: "https://github.com/dracula/visual-studio-code",
  description: "The iconic Dracula palette with purple accent."
});
var nord = preset("nord", "Nord", "dark", {
  bg: "#2e3440",
  fg: "#d8dee9",
  accent: "#88c0d0",
  bgElevated: "#3b4252",
  bgSidebar: "#2e3440",
  bgOverlay: "#3b4252",
  bgInput: "#3b4252",
  bgCode: "#2a303c",
  bgHover: "#3b4252",
  bgActive: "#434c5e",
  fgSecondary: "#d8dee9",
  fgMuted: "#7b88a1",
  onAccent: "#2e3440",
  border: "#434c5e",
  success: "#a3be8c",
  error: "#bf616a",
  warn: "#ebcb8b",
  scrollbar: "#434c5e"
}, {
  author: "Arctic Ice Studio (Nord)",
  license: "MIT",
  source: "https://github.com/arcticicestudio/nord-visual-studio-code",
  description: "An arctic, north-bluish clean theme."
});
var oneDark = preset("one-dark", "One Dark", "dark", {
  bg: "#282c34",
  fg: "#abb2bf",
  accent: "#61afef",
  bgElevated: "#21252b",
  bgSidebar: "#21252b",
  bgOverlay: "#21252b",
  bgInput: "#1f2329",
  bgCode: "#21252b",
  bgHover: "#2c313a",
  bgActive: "#3e4451",
  fgSecondary: "#abb2bf",
  fgMuted: "#5c6370",
  onAccent: "#282c34",
  border: "#2c313a",
  success: "#98c379",
  error: "#e06c75",
  warn: "#e5c07b",
  scrollbar: "#3e4451"
}, {
  author: "GitHub / Atom (One Dark)",
  license: "MIT",
  source: "https://github.com/atom/one-dark-syntax",
  description: "The Atom editor dark syntax theme."
});
var oneLight = preset("one-light", "One Light", "light", {
  bg: "#fafafa",
  fg: "#383a42",
  accent: "#4078f2",
  bgElevated: "#f5f5f5",
  bgSidebar: "#f5f5f5",
  bgOverlay: "#f5f5f5",
  bgInput: "#ffffff",
  bgCode: "#f2f2f2",
  bgHover: "#ececec",
  bgActive: "#e5e5e6",
  fgSecondary: "#383a42",
  fgMuted: "#a0a1a7",
  onAccent: "#ffffff",
  border: "#e1e1e1",
  success: "#50a14f",
  error: "#e45649",
  warn: "#c18401",
  scrollbar: "#c8c8c8"
}, {
  author: "GitHub / Atom (One Light)",
  license: "MIT",
  source: "https://github.com/atom/one-light-syntax",
  description: "The Atom editor light syntax theme."
});
var tokyoNight = preset("tokyo-night", "Tokyo Night Storm", "dark", {
  bg: "#24283b",
  fg: "#a9b1d6",
  accent: "#7aa2f7",
  bgElevated: "#1f2335",
  bgSidebar: "#1f2335",
  bgOverlay: "#1f2335",
  bgInput: "#1b1e2e",
  bgCode: "#202434",
  bgHover: "#2c324a",
  bgActive: "#2c324a",
  fgSecondary: "#9aa5ce",
  fgMuted: "#565f89",
  onAccent: "#16161e",
  border: "#414868",
  success: "#73daca",
  error: "#f7768e",
  warn: "#e0af68",
  scrollbar: "#414868"
}, {
  author: "Tomas Pustelnik (Tokyo Night)",
  license: "MIT",
  source: "https://github.com/enkia/tokyo-night-vscode-theme",
  description: 'The Tokyo Night "Storm" variant.'
});
var catppuccin = preset("catppuccin-mocha", "Catppuccin Mocha", "dark", {
  bg: "#1e1e2e",
  fg: "#cdd6f4",
  accent: "#cba6f7",
  bgElevated: "#181825",
  bgSidebar: "#181825",
  bgOverlay: "#313244",
  bgInput: "#313244",
  bgCode: "#181825",
  bgHover: "#313244",
  bgActive: "#45475a",
  fgSecondary: "#bac2de",
  fgMuted: "#7f849c",
  onAccent: "#1e1e2e",
  border: "#313244",
  success: "#a6e3a1",
  error: "#f38ba8",
  warn: "#f9e2af",
  scrollbar: "#45475a"
}, {
  author: "Catppuccin Org",
  license: "MIT",
  source: "https://github.com/catppuccin/palette",
  description: "Catppuccin Mocha, the warm dark flavor with mauve accent."
});
var PRESETS = [
  vscodeDark,
  vscodeLight,
  dracula,
  nord,
  oneDark,
  oneLight,
  tokyoNight,
  catppuccin
];

// src/server/index.ts
var name = "colorscheme";
var Config = z.object({
  themesDir: z.string().default(""),
  defaultTheme: z.string().default(""),
  catalogPath: z.string().default("/colorscheme/themes.json")
});
var NS = settingsNamespace("colorscheme");
var customThemeSchema = z.object({
  id: z.string(),
  name: z.string().default(""),
  colorScheme: z.union([z.const("light"), z.const("dark")]),
  tokens: z.dict(z.string()).default({})
});
var SettingsSchema = z.object({
  /** Last colorscheme id chosen in the picker ('' = follow built-in preference). */
  selection: z.string().default(""),
  /** Inline user themes from the settings user layer (settings.yaml). */
  customThemes: z.array(customThemeSchema).default([]),
  // Config mirrors: the entry-config subset lands in the namespace's base
  // layer, so the schema must accept them for the registration to validate.
  themesDir: z.string().default(""),
  defaultTheme: z.string().default(""),
  catalogPath: z.string().default("/colorscheme/themes.json")
});
function resolveThemesDir(configDir) {
  if (configDir) return isAbsolute(configDir) ? configDir : resolve(process.cwd(), configDir);
  const home = process.env.DSH_HOME || join(homedir(), ".dsh");
  return join(home, "themes");
}
function isRecord(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
function isRoles(v) {
  if (!isRecord(v)) return false;
  return typeof v.bg === "string" && typeof v.fg === "string" && typeof v.accent === "string";
}
function normalizeThemeEntry(raw, source) {
  if (!isRecord(raw)) throw new Error(`${source}: expected a JSON object`);
  const id = typeof raw.id === "string" && raw.id.trim() ? raw.id.trim() : null;
  if (!id) throw new Error(`${source}: missing non-empty string field "id"`);
  if (id === "light" || id === "dark" || id === "system") {
    throw new Error(`${source}: theme id "${id}" is reserved`);
  }
  const colorScheme = raw.colorScheme === "light" || raw.colorScheme === "dark" ? raw.colorScheme : null;
  if (!colorScheme) throw new Error(`${source}: "colorScheme" must be "light" or "dark"`);
  const name2 = typeof raw.name === "string" && raw.name.trim() ? raw.name.trim() : id;
  const roles = isRoles(raw.roles) ? raw.roles : void 0;
  const tokens = isRecord(raw.tokens) ? raw.tokens : void 0;
  if (!roles && !tokens) throw new Error(`${source}: provide "roles" {bg, fg, accent, ...} or "tokens" (--dsw-* overrides)`);
  const expanded = roles ? generateTokens(roles, colorScheme) : { ...tokens };
  for (const key of Object.keys(expanded)) {
    if (!key.startsWith("--dsw-")) throw new Error(`${source}: token key must start with "--dsw-": ${key}`);
    if (typeof expanded[key] !== "string" || !expanded[key]) throw new Error(`${source}: token "${key}" must be a non-empty string`);
  }
  const meta = isRecord(raw.meta) ? {
    author: typeof raw.meta.author === "string" ? raw.meta.author : void 0,
    license: typeof raw.meta.license === "string" ? raw.meta.license : void 0,
    source: typeof raw.meta.source === "string" ? raw.meta.source : void 0,
    description: typeof raw.meta.description === "string" ? raw.meta.description : void 0
  } : void 0;
  return { id, name: name2, colorScheme, tokens: expanded, meta };
}
function readUserThemes(themesDir, errors) {
  const out = [];
  let files = [];
  try {
    files = readdirSync(themesDir).filter((f) => f.endsWith(".json")).sort();
  } catch (e) {
    errors[themesDir] = e instanceof Error ? e.message : String(e);
    return out;
  }
  for (const file of files) {
    try {
      const raw = JSON.parse(readFileSync(join(themesDir, file), "utf8"));
      out.push(normalizeThemeEntry(raw, file));
    } catch (e) {
      errors[file] = e instanceof Error ? e.message : String(e);
    }
  }
  return out;
}
function buildCatalog(config, ctx) {
  const themesDir = resolveThemesDir(config.themesDir);
  try {
    if (!existsSync(themesDir)) mkdirSync(themesDir, { recursive: true });
  } catch {
  }
  const errors = {};
  const userThemes = readUserThemes(themesDir, errors);
  const settings = ctx.get("settings");
  let settingsThemes = [];
  if (settings !== void 0) {
    const section = settings.get(NS);
    if (section?.customThemes) {
      for (const [i, raw] of section.customThemes.entries()) {
        try {
          settingsThemes.push(normalizeThemeEntry(raw, `settings customThemes[${i}]`));
        } catch (e) {
          errors[`settings customThemes[${i}]`] = e instanceof Error ? e.message : String(e);
        }
      }
    }
  }
  const seen = /* @__PURE__ */ new Set();
  const dedupe = (entry, kind) => {
    if (seen.has(entry.id)) {
      errors[`${kind} ${entry.id}`] = `duplicate theme id "${entry.id}" (preset or earlier source already owns it)`;
      return null;
    }
    seen.add(entry.id);
    return entry;
  };
  return {
    version: 1,
    themesDir,
    presets: PRESETS.map((p) => dedupe(p, "preset")).filter((p) => p !== null).map((p) => ({
      ...p,
      tokens: p.roles ? generateTokens(p.roles, p.colorScheme) : p.tokens
    })),
    userThemes: userThemes.map((u) => dedupe(u, "user theme")).filter((u) => u !== null),
    settingsThemes: settingsThemes.map((u) => dedupe(u, "settings theme")).filter((u) => u !== null),
    defaultTheme: config.defaultTheme,
    errors
  };
}
function apply(ctx, config) {
  ctx.inject(["settings"], (settingsCtx) => {
    settingsCtx.settings.register(NS, SettingsSchema);
  });
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(
      () => httpCtx.webServer.register({
        kind: "exact",
        path: config.catalogPath,
        handler: (_req, res) => {
          const catalog = buildCatalog(config, httpCtx);
          const body = JSON.stringify(catalog);
          res.writeHead(200, {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
            "content-length": Buffer.byteLength(body)
          });
          res.end(body);
        }
      }),
      "colorscheme: catalog route"
    );
  });
}
export {
  Config,
  apply,
  name,
  normalizeThemeEntry
};
//# sourceMappingURL=index.js.map
