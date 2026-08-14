window.__ModuleLoader__.load({
	id: "dsh-plugin-colorscheme",
	factory: function (require) {
		var module = { exports: {} };
		var exports = module.exports;
		(function (module, exports, require) {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");
var import_client = require("@deepseek-ai/dsh-client-runtime/client");
var import_jsx_runtime = require("react/jsx-runtime");
var name = "colorscheme";
var inject = ["theme", "slots", "locale", "connection", "remote", "settingsScope"];
var THEME_NS = "ui-theme";
var LOCALE_NS = "settings.colorscheme";
var CATALOG_URL = "colorscheme/themes.json";
var STYLE_TAG = "dsh-plugin-colorscheme/row.css";
var DEFAULT_ID = "";
var ROW_CSS = `
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
.dshcs-title-row{align-items:center;display:flex;justify-content:space-between}
.dshcs-btn{border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;font-size:12px;line-height:18px;min-height:26px;padding:2px 10px}
.dshcs-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dshcs-btn:disabled{opacity:.5;cursor:default}
.dshcs-btn-primary{border-color:var(--dsw-static-neutral-bluish-400);color:var(--dsw-alias-label-primary)}
.dshcs-chip-wrap{align-items:center;display:inline-flex;gap:4px}
.dshcs-del{border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:10px;height:20px;line-height:1;padding:0 6px}
.dshcs-del:hover{color:var(--dsw-alias-state-error-primary)}
.dshcs-del-confirm{border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary);font-size:10px}
.dshcs-form{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;display:flex;flex-direction:column;gap:12px;margin-top:12px;padding:14px}
.dshcs-form-title{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:600}
.dshcs-form-grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
.dshcs-field{display:flex;flex-direction:column;gap:4px}
.dshcs-field-label{color:var(--dsw-alias-label-secondary);font-size:11px}
.dshcs-input{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;min-height:26px;padding:2px 8px}
.dshcs-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}
.dshcs-color{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;height:28px;padding:2px;width:100%;cursor:pointer}
.dshcs-field-advanced{color:var(--dsw-alias-label-caption);font-size:11px;grid-column:1/-1;margin-top:4px}
.dshcs-form-actions{display:flex;gap:8px;justify-content:flex-end}
`;
if (typeof document !== "undefined" && document.querySelector(`style[data-plugin-css=${JSON.stringify(STYLE_TAG)}]`) === null) {
  const tag = document.createElement("style");
  tag.dataset.plugin = "dsh-plugin-colorscheme";
  tag.dataset.pluginCss = STYLE_TAG;
  tag.textContent = ROW_CSS;
  document.head.appendChild(tag);
}
var zh = {
  "colorscheme.title": "\u914D\u8272\u65B9\u6848",
  "colorscheme.default": "\u8DDF\u968F\u5916\u89C2",
  "colorscheme.loadError": "\u914D\u8272\u65B9\u6848\u52A0\u8F7D\u5931\u8D25",
  "colorscheme.add": "\u65B0\u589E\u4E3B\u9898",
  "colorscheme.addTitle": "\u65B0\u589E\u81EA\u5B9A\u4E49\u4E3B\u9898",
  "colorscheme.field.id": "\u6807\u8BC6 (id)",
  "colorscheme.field.name": "\u540D\u79F0",
  "colorscheme.field.scheme": "\u6A21\u5F0F",
  "colorscheme.field.scheme.dark": "\u6DF1\u8272",
  "colorscheme.field.scheme.light": "\u6D45\u8272",
  "colorscheme.field.bg": "\u80CC\u666F",
  "colorscheme.field.fg": "\u6587\u5B57",
  "colorscheme.field.accent": "\u5F3A\u8C03\u8272",
  "colorscheme.field.advanced": "\u9AD8\u7EA7\uFF08\u53EF\u9009\uFF09",
  "colorscheme.field.elevated": "\u6D6E\u8D77\u8868\u9762",
  "colorscheme.field.sidebar": "\u4FA7\u680F",
  "colorscheme.field.success": "\u6210\u529F",
  "colorscheme.field.error": "\u9519\u8BEF",
  "colorscheme.field.warn": "\u8B66\u544A",
  "colorscheme.save": "\u4FDD\u5B58",
  "colorscheme.cancel": "\u53D6\u6D88",
  "colorscheme.addError": "\u4FDD\u5B58\u5931\u8D25",
  "colorscheme.delete": "\u5220\u9664",
  "colorscheme.confirmDelete": "\u518D\u6B21\u70B9\u51FB\u786E\u8BA4\u5220\u9664"
};
var en = {
  "colorscheme.title": "Colorscheme",
  "colorscheme.default": "Follow appearance",
  "colorscheme.loadError": "Failed to load colorschemes",
  "colorscheme.add": "Add theme",
  "colorscheme.addTitle": "New custom theme",
  "colorscheme.field.id": "ID",
  "colorscheme.field.name": "Name",
  "colorscheme.field.scheme": "Scheme",
  "colorscheme.field.scheme.dark": "Dark",
  "colorscheme.field.scheme.light": "Light",
  "colorscheme.field.bg": "Background",
  "colorscheme.field.fg": "Foreground",
  "colorscheme.field.accent": "Accent",
  "colorscheme.field.advanced": "Advanced (optional)",
  "colorscheme.field.elevated": "Elevated surface",
  "colorscheme.field.sidebar": "Sidebar",
  "colorscheme.field.success": "Success",
  "colorscheme.field.error": "Error",
  "colorscheme.field.warn": "Warning",
  "colorscheme.save": "Save",
  "colorscheme.cancel": "Cancel",
  "colorscheme.addError": "Failed to save",
  "colorscheme.delete": "Delete",
  "colorscheme.confirmDelete": "Click again to confirm delete"
};
function createRowStore() {
  return (0, import_client.defineStore)({
    init: () => ({ selection: DEFAULT_ID, revision: -1, themes: [], deletable: [], error: "" }),
    actions: {
      sync: (d, selection, revision, themes, deletable, error) => {
        if (revision <= d.revision) return;
        d.selection = selection;
        d.revision = revision;
        d.themes = themes;
        d.deletable = deletable;
        d.error = error;
      }
    }
  });
}
function toRowThemes(snapshot, names) {
  return snapshot.themes.filter((t) => t.id !== "light" && t.id !== "dark").map((t) => ({
    id: t.id,
    name: names[t.id] ?? t.id,
    colorScheme: t.colorScheme,
    samples: [
      t.tokens["--dsw-alias-bg-base"] ?? "",
      t.tokens["--dsw-alias-label-primary"] ?? "",
      t.tokens["--dsw-alias-brand-primary"] ?? ""
    ]
  }));
}
function ColorschemeRow(props) {
  const { t, useStore, setTheme, reloadCatalog } = props;
  const selection = useStore((s) => s.selection);
  const themes = useStore((s) => s.themes);
  const deletable = useStore((s) => s.deletable);
  const error = useStore((s) => s.error);
  const [showForm, setShowForm] = (0, import_react.useState)(false);
  const [saving, setSaving] = (0, import_react.useState)(false);
  const [formError, setFormError] = (0, import_react.useState)("");
  const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(null);
  const [fields, setFields] = (0, import_react.useState)({
    id: "",
    name: "",
    colorScheme: "dark",
    bg: "#1e1e2e",
    fg: "#cdd6f4",
    accent: "#cba6f7",
    bgElevated: "#181825",
    bgSidebar: "#181825",
    success: "#a6e3a1",
    error: "#f38ba8",
    warn: "#f9e2af"
  });
  const setField = (key) => (event) => setFields((f) => ({ ...f, [key]: event.target.value }));
  const save = async () => {
    const id = fields.id.trim().replace(/\s+/g, "-").toLowerCase();
    if (!id) {
      setFormError(t("colorscheme.field.id"));
      return;
    }
    setSaving(true);
    setFormError("");
    try {
      const res = await fetch(CATALOG_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "add-theme",
          theme: {
            id,
            name: fields.name.trim() || id,
            colorScheme: fields.colorScheme,
            roles: {
              bg: fields.bg,
              fg: fields.fg,
              accent: fields.accent,
              bgElevated: fields.bgElevated,
              bgSidebar: fields.bgSidebar,
              success: fields.success,
              error: fields.error,
              warn: fields.warn
            }
          }
        })
      });
      const result = await res.json().catch(() => ({ ok: false, error: "invalid response" }));
      if (result.ok) {
        setShowForm(false);
        setFields((f) => ({ ...f, id: "", name: "" }));
        reloadCatalog();
        setTheme(id);
      } else {
        setFormError(result.error ?? t("colorscheme.addError"));
      }
    } catch (e) {
      setFormError(e instanceof Error ? e.message : t("colorscheme.addError"));
    } finally {
      setSaving(false);
    }
  };
  const remove = async (id) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      setTimeout(() => setConfirmDelete((c) => c === id ? null : c), 2500);
      return;
    }
    setConfirmDelete(null);
    try {
      const res = await fetch(CATALOG_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "remove-theme", id })
      });
      const result = await res.json().catch(() => ({ ok: false, error: "invalid response" }));
      if (!result.ok) setFormError(result.error ?? t("colorscheme.addError"));
      reloadCatalog();
    } catch (e) {
      setFormError(e instanceof Error ? e.message : t("colorscheme.addError"));
    }
  };
  const chips = [
    { id: DEFAULT_ID, label: t("colorscheme.default"), samples: [] },
    ...themes.map((th) => ({ id: th.id, label: th.name, samples: th.samples }))
  ];
  const colorField = (label, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcs-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-field-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "color", className: "dshcs-color", value: fields[key], onChange: setField(key) })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-title-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-title", children: t("colorscheme.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          className: "dshcs-btn",
          onClick: () => {
            setShowForm((v) => !v);
            setFormError("");
          },
          children: t("colorscheme.add")
        }
      )
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-error", children: error }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-grid", children: chips.map((chip) => {
      const isDeletable = deletable.includes(chip.id);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dshcs-chip-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "dshcs-chip", "aria-pressed": selection === chip.id, onClick: () => setTheme(chip.id), children: [
          chip.samples.length === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dots", "aria-hidden": "true", children: chip.samples.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dot", style: { backgroundColor: c } }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dot dshcs-dot-default", "aria-hidden": "true" }),
          chip.label
        ] }),
        isDeletable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            className: `dshcs-del${confirmDelete === chip.id ? " dshcs-del-confirm" : ""}`,
            title: t("colorscheme.delete"),
            onClick: () => void remove(chip.id),
            children: confirmDelete === chip.id ? t("colorscheme.confirmDelete") : "\u2715"
          }
        ) : null
      ] }, chip.id);
    }) }),
    showForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-form-title", children: t("colorscheme.addTitle") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-form-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcs-field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-field-label", children: t("colorscheme.field.id") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "dshcs-input", value: fields.id, onChange: setField("id"), placeholder: "my-theme" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcs-field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-field-label", children: t("colorscheme.field.name") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "dshcs-input", value: fields.name, onChange: setField("name"), placeholder: "My Theme" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcs-field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-field-label", children: t("colorscheme.field.scheme") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "select",
            {
              className: "dshcs-input",
              value: fields.colorScheme,
              onChange: (e) => setFields((f) => ({ ...f, colorScheme: e.target.value })),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "dark", children: t("colorscheme.field.scheme.dark") }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "light", children: t("colorscheme.field.scheme.light") })
              ]
            }
          )
        ] }),
        colorField(t("colorscheme.field.bg"), "bg"),
        colorField(t("colorscheme.field.fg"), "fg"),
        colorField(t("colorscheme.field.accent"), "accent"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-field-advanced", children: t("colorscheme.field.advanced") }),
        colorField(t("colorscheme.field.elevated"), "bgElevated"),
        colorField(t("colorscheme.field.sidebar"), "bgSidebar"),
        colorField(t("colorscheme.field.success"), "success"),
        colorField(t("colorscheme.field.error"), "error"),
        colorField(t("colorscheme.field.warn"), "warn")
      ] }),
      formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-error", children: formError }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-form-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dshcs-btn dshcs-btn-primary", disabled: saving, onClick: () => void save(), children: t("colorscheme.save") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dshcs-btn", disabled: saving, onClick: () => setShowForm(false), children: t("colorscheme.cancel") })
      ] })
    ] }) : null
  ] });
}
async function loadCatalog() {
  const res = await fetch(CATALOG_URL, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`catalog request failed: ${res.status}`);
  return await res.json();
}
function apply(ctx) {
  const theme = ctx.theme;
  const appearanceScope = ctx.settingsScope.bind({ namespace: THEME_NS });
  const nameById = {};
  const disposers = [];
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), "colorscheme: locale dictionary");
  const store = createRowStore();
  let bound;
  let selection = DEFAULT_ID;
  let revision = -1;
  let deletableIds = [];
  const appliedTokens = [];
  const applyActiveTokens = () => {
    const active = theme.getTheme().active;
    document.documentElement.style.colorScheme = active.colorScheme;
    const body = document.body;
    if (active.colorScheme === "dark") body.setAttribute("data-ds-dark-theme", "");
    else body.removeAttribute("data-ds-dark-theme");
    for (const name2 of appliedTokens) body.style.removeProperty(name2);
    appliedTokens.length = 0;
    for (const [name2, value] of Object.entries(active.tokens)) {
      body.style.setProperty(name2, value);
      appliedTokens.push(name2);
    }
  };
  const activeSelection = () => {
    const pref = theme.getTheme().preference;
    return pref === "light" || pref === "dark" || pref === "system" ? DEFAULT_ID : pref;
  };
  const publishRow = (error = "") => {
    if (!bound) return;
    bound.sync(activeSelection(), revision, toRowThemes(theme.getTheme(), nameById), deletableIds, error);
  };
  const saveSelection = (id) => {
    void fetch(CATALOG_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ selection: id })
    }).then((res) => {
      if (!res.ok) console.warn("[colorscheme] failed to persist selection", res.status);
    }).catch((e) => console.warn("[colorscheme] failed to persist selection", e));
  };
  const followAppearance = () => {
    const value = appearanceScope.getSnapshot().value;
    const pref = value?.preference;
    try {
      theme.setTheme(pref === "light" || pref === "dark" || pref === "system" ? pref : "system");
    } catch {
    }
  };
  let enforceTimer;
  const stopEnforce = () => {
    if (enforceTimer) {
      clearInterval(enforceTimer);
      enforceTimer = void 0;
    }
  };
  const enforceSelection = () => {
    if (selection === DEFAULT_ID) return;
    if (theme.getTheme().preference !== selection) {
      try {
        theme.setTheme(selection);
      } catch {
      }
    }
    applyActiveTokens();
  };
  ctx.on("theme/change", () => {
    revision = theme.getTheme().revision;
    applyActiveTokens();
    publishRow();
  });
  const applySelection = (id) => {
    if (!id) return;
    try {
      theme.setTheme(id);
    } catch {
    }
  };
  const disposeThemes = () => {
    for (const dispose of disposers) {
      try {
        dispose();
      } catch {
      }
    }
    disposers.length = 0;
  };
  const registerCatalog = (catalog) => {
    disposeThemes();
    for (const entry of [...catalog.presets, ...catalog.userThemes, ...catalog.settingsThemes]) {
      nameById[entry.id] = entry.name;
      try {
        const dispose = theme.register({
          id: entry.id,
          colorScheme: entry.colorScheme,
          tokens: entry.tokens ?? {}
        });
        disposers.push(dispose);
      } catch (e) {
        console.warn("[colorscheme] failed to register theme", entry.id, e);
      }
    }
    deletableIds = catalog.userThemes.map((t) => t.id);
    const saved = catalog.selection;
    if (saved && theme.getTheme().themes.some((t) => t.id === saved)) {
      selection = saved;
    } else if (catalog.defaultTheme) {
      selection = catalog.defaultTheme;
    }
    applySelection(selection);
    applyActiveTokens();
    if (selection !== DEFAULT_ID) {
      stopEnforce();
      enforceTimer = setInterval(enforceSelection, 400);
      setTimeout(stopEnforce, 5e3);
    }
    revision = theme.getTheme().revision;
    publishRow();
  };
  const reloadCatalog = () => {
    void loadCatalog().then(registerCatalog).catch((e) => {
      console.warn("[colorscheme] catalog reload failed", e);
      publishRow(typeof e === "object" && e !== null && "message" in e ? String(e.message) : String(e));
    });
  };
  void loadCatalog().then(registerCatalog).catch((e) => {
    console.warn("[colorscheme] catalog load failed", e);
    publishRow(typeof e === "object" && e !== null && "message" in e ? String(e.message) : String(e));
  });
  ctx.effect(
    () => () => {
      disposeThemes();
      const body = document.body;
      for (const name2 of appliedTokens) body.style.removeProperty(name2);
      appliedTokens.length = 0;
    },
    "colorscheme: theme registrations"
  );
  ctx.slots.inject(
    "settings.plugins.tab",
    () => ctx.slots.register(
      {
        name: "settings.plugins.tab",
        id: "colorscheme",
        order: 10,
        label: () => ctx.locale.bind(LOCALE_NS)("colorscheme.title"),
        store,
        locale: LOCALE_NS,
        inject: (actions) => {
          bound = actions;
          publishRow();
          return {
            setTheme: (id) => {
              selection = id;
              stopEnforce();
              if (id === DEFAULT_ID) {
                followAppearance();
                saveSelection("");
              } else {
                applySelection(id);
                saveSelection(id);
              }
            },
            reloadCatalog
          };
        }
      },
      ColorschemeRow
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC1ydW50aW1lL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgQ2xpZW50Q29udGV4dCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBUaGVtZVNuYXBzaG90IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtdWktdGhlbWUvY2xpZW50J1xuLy8gVHlwZS1vbmx5IGltcG9ydHMgdGhhdCBwdWxsIHRoZSBjb250ZXh0IGF1Z21lbnRhdGlvbnMgKHNldHRpbmdzU2NvcGUsXG4vLyBsb2NhbGUsIHRoZSBzZXR0aW5ncy5nZW5lcmFsLml0ZW0gc2xvdCBjb250cmFjdCkgaW50byB0aGlzIHByb2dyYW0uXG5pbXBvcnQgdHlwZSB7fSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS1zZXR0aW5ncy9jbGllbnQnXG5pbXBvcnQgdHlwZSB7fSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC1sb2NhbGUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBUaGVtZUNhdGFsb2cgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMudHMnXG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2NvbG9yc2NoZW1lJ1xuXG4vKiogUmVxdWlyZWQgY2xpZW50IHNlcnZpY2VzIChmaWJlciBpbmplY3QgXHUyMDE0IHdhaXRzIGZvciB0aGUgdGhlbWUgc2VydmljZSkuICovXG5leHBvcnQgY29uc3QgaW5qZWN0ID0gWyd0aGVtZScsICdzbG90cycsICdsb2NhbGUnLCAnY29ubmVjdGlvbicsICdyZW1vdGUnLCAnc2V0dGluZ3NTY29wZSddXG5cbmNvbnN0IE5TID0gJ2NvbG9yc2NoZW1lJ1xuLyoqIFRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHByZWZlcmVuY2UgbmFtZXNwYWNlIChvd25lZCBieSBkc2gtY2xpZW50LXVpLXRoZW1lKS4gKi9cbmNvbnN0IFRIRU1FX05TID0gJ3VpLXRoZW1lJ1xuY29uc3QgTE9DQUxFX05TID0gJ3NldHRpbmdzLmNvbG9yc2NoZW1lJ1xuY29uc3QgQ0FUQUxPR19VUkwgPSAnY29sb3JzY2hlbWUvdGhlbWVzLmpzb24nXG5jb25zdCBTVFlMRV9UQUcgPSAnZHNoLXBsdWdpbi1jb2xvcnNjaGVtZS9yb3cuY3NzJ1xuY29uc3QgREVGQVVMVF9JRCA9ICcnIC8vIHNlbnRpbmVsOiBmb2xsb3cgdGhlIGJ1aWx0LWluIEFwcGVhcmFuY2UgcHJlZmVyZW5jZVxuXG4vKipcbiAqIFByZWZlcmVuY2Utcm93IHN0eWxlcy4gSW5qZWN0ZWQgb25jZSBwZXIgbWF0ZXJpYWxpemF0aW9uIHdpdGggdGhlIGxvYWRlcidzXG4gKiBgZGF0YS1wbHVnaW4tY3NzYCBjb250cmFjdCBzbyB0aGUgY2xpZW50IEhNUiBkcml2ZXIgY2FuIGludmVudG9yeS9yZW1vdmUgaXQuXG4gKi9cbmNvbnN0IFJPV19DU1MgPSBgXG4uZHNoY3Mtcm93e2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjhweDtwYWRkaW5nOjE2cHggMH1cbi5kc2hjcy10aXRsZXtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjIycHh9XG4uZHNoY3MtZ3JpZHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjhweH1cbi5kc2hjcy1jaGlwe2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo5OTlweDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2ZvbnQ6aW5oZXJpdDtmb250LXNpemU6MTNweDtnYXA6OHB4O3BhZGRpbmc6NnB4IDEycHh9XG4uZHNoY3MtY2hpcDpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1pbnRlcmFjdGl2ZS1iZy1ob3Zlcil9XG4uZHNoY3MtY2hpcFthcmlhLXByZXNzZWQ9XCJ0cnVlXCJde2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLW1vZHVsZS1wbGF0Zm9ybSk7Ym9yZGVyLWNvbG9yOnZhcigtLWRzdy1zdGF0aWMtbmV1dHJhbC1ibHVpc2gtNDAwKX1cbi5kc2hjcy1kb3Rze2Rpc3BsYXk6aW5saW5lLWZsZXg7Z2FwOjJweH1cbi5kc2hjcy1kb3R7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xOCk7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjEycHg7d2lkdGg6MTJweH1cbi5kc2hjcy1kb3QtZGVmYXVsdHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsdmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC01MCkgNTAlLHZhcigtLWRzdy1zdGF0aWMtbmV1dHJhbC1ibHVpc2gtOTAwKSA1MCUpfVxuLmRzaGNzLWVycm9ye2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KTtmb250LXNpemU6MTJweH1cbi5kc2hjcy10aXRsZS1yb3d7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1cbi5kc2hjcy1idG57Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxOHB4O21pbi1oZWlnaHQ6MjZweDtwYWRkaW5nOjJweCAxMHB4fVxuLmRzaGNzLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKXtiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1pbnRlcmFjdGl2ZS1iZy1ob3Zlcik7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpfVxuLmRzaGNzLWJ0bjpkaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fVxuLmRzaGNzLWJ0bi1wcmltYXJ5e2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTQwMCk7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpfVxuLmRzaGNzLWNoaXAtd3JhcHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6NHB4fVxuLmRzaGNzLWRlbHtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpO2JvcmRlci1yYWRpdXM6OTk5cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxMHB4O2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjE7cGFkZGluZzowIDZweH1cbi5kc2hjcy1kZWw6aG92ZXJ7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpfVxuLmRzaGNzLWRlbC1jb25maXJte2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSk7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2ZvbnQtc2l6ZToxMHB4fVxuLmRzaGNzLWZvcm17Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjEycHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTJweDttYXJnaW4tdG9wOjEycHg7cGFkZGluZzoxNHB4fVxuLmRzaGNzLWZvcm0tdGl0bGV7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjYwMH1cbi5kc2hjcy1mb3JtLWdyaWR7ZGlzcGxheTpncmlkO2dhcDoxMHB4O2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLG1pbm1heCgxMzBweCwxZnIpKX1cbi5kc2hjcy1maWVsZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo0cHh9XG4uZHNoY3MtZmllbGQtbGFiZWx7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXNlY29uZGFyeSk7Zm9udC1zaXplOjExcHh9XG4uZHNoY3MtaW5wdXR7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjdweDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZToxMnB4O21pbi1oZWlnaHQ6MjZweDtwYWRkaW5nOjJweCA4cHh9XG4uZHNoY3MtaW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSl9XG4uZHNoY3MtY29sb3J7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjdweDtoZWlnaHQ6MjhweDtwYWRkaW5nOjJweDt3aWR0aDoxMDAlO2N1cnNvcjpwb2ludGVyfVxuLmRzaGNzLWZpZWxkLWFkdmFuY2Vke2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1jYXB0aW9uKTtmb250LXNpemU6MTFweDtncmlkLWNvbHVtbjoxLy0xO21hcmdpbi10b3A6NHB4fVxuLmRzaGNzLWZvcm0tYWN0aW9uc3tkaXNwbGF5OmZsZXg7Z2FwOjhweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XG5gXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLXBsdWdpbi1jc3M9JHtKU09OLnN0cmluZ2lmeShTVFlMRV9UQUcpfV1gKSA9PT0gbnVsbCkge1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHRhZy5kYXRhc2V0LnBsdWdpbiA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lJ1xuICB0YWcuZGF0YXNldC5wbHVnaW5Dc3MgPSBTVFlMRV9UQUdcbiAgdGFnLnRleHRDb250ZW50ID0gUk9XX0NTU1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZylcbn1cblxuLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSBkaWN0aW9uYXJ5IChrZXktc2V0IHNvdXJjZSBvZiB0cnV0aCkuICovXG5jb25zdCB6aCA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OCcsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ1x1OERERlx1OTY4Rlx1NTkxNlx1ODlDMicsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnXHU5MTREXHU4MjcyXHU2NUI5XHU2ODQ4XHU1MkEwXHU4RjdEXHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmFkZCc6ICdcdTY1QjBcdTU4OUVcdTRFM0JcdTk4OTgnLFxuICAnY29sb3JzY2hlbWUuYWRkVGl0bGUnOiAnXHU2NUIwXHU1ODlFXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTNCXHU5ODk4JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJzogJ1x1NjgwN1x1OEJDNiAoaWQpJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnOiAnXHU1NDBEXHU3OUYwJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdcdTZBMjFcdTVGMEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnXHU2REYxXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5saWdodCc6ICdcdTZENDVcdTgyNzInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnXHU4MENDXHU2NjZGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmZnJzogJ1x1NjU4N1x1NUI1NycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnOiAnXHU1RjNBXHU4QzAzXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFkdmFuY2VkJzogJ1x1OUFEOFx1N0VBN1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdcdTZENkVcdThENzdcdTg4NjhcdTk3NjInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2lkZWJhcic6ICdcdTRGQTdcdTY4MEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc3VjY2Vzcyc6ICdcdTYyMTBcdTUyOUYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnXHU5NTE5XHU4QkVGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLndhcm4nOiAnXHU4QjY2XHU1NDRBJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnXHU0RkREXHU1QjU4JyxcbiAgJ2NvbG9yc2NoZW1lLmNhbmNlbCc6ICdcdTUzRDZcdTZEODgnLFxuICAnY29sb3JzY2hlbWUuYWRkRXJyb3InOiAnXHU0RkREXHU1QjU4XHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdcdTUyMjBcdTk2NjQnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdcdTUxOERcdTZCMjFcdTcwQjlcdTUxRkJcdTc4NkVcdThCQTRcdTUyMjBcdTk2NjQnLFxufSBhcyBjb25zdFxuXG4vKiogRW5nbGlzaCBkaWN0aW9uYXJ5LCBjaGVja2VkIGNvbXBsZXRlIGFnYWluc3QgdGhlIHpoIGtleSBzZXQuICovXG5jb25zdCBlbjogUmVjb3JkPGtleW9mIHR5cGVvZiB6aCwgc3RyaW5nPiA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ0NvbG9yc2NoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmRlZmF1bHQnOiAnRm9sbG93IGFwcGVhcmFuY2UnLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ0ZhaWxlZCB0byBsb2FkIGNvbG9yc2NoZW1lcycsXG4gICdjb2xvcnNjaGVtZS5hZGQnOiAnQWRkIHRoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZFRpdGxlJzogJ05ldyBjdXN0b20gdGhlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuaWQnOiAnSUQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQubmFtZSc6ICdOYW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdTY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnRGFyaycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUubGlnaHQnOiAnTGlnaHQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnQmFja2dyb3VuZCcsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5mZyc6ICdGb3JlZ3JvdW5kJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFjY2VudCc6ICdBY2NlbnQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYWR2YW5jZWQnOiAnQWR2YW5jZWQgKG9wdGlvbmFsKScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdFbGV2YXRlZCBzdXJmYWNlJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNpZGViYXInOiAnU2lkZWJhcicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zdWNjZXNzJzogJ1N1Y2Nlc3MnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnRXJyb3InLFxuICAnY29sb3JzY2hlbWUuZmllbGQud2Fybic6ICdXYXJuaW5nJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnU2F2ZScsXG4gICdjb2xvcnNjaGVtZS5jYW5jZWwnOiAnQ2FuY2VsJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZEVycm9yJzogJ0ZhaWxlZCB0byBzYXZlJyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdEZWxldGUnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdDbGljayBhZ2FpbiB0byBjb25maXJtIGRlbGV0ZScsXG59XG5cbi8qKiBSb3cgZGlzcGxheSBtb2RlbDogaWQsIG5hbWUsIGFuZCB0aHJlZSBzYW1wbGUgY29sb3JzIChiZyAvIGZnIC8gYWNjZW50KS4gKi9cbmludGVyZmFjZSBSb3dUaGVtZSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGNvbG9yU2NoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnXG4gIHNhbXBsZXM6IHN0cmluZ1tdXG59XG5cbmludGVyZmFjZSBSb3dTdGF0ZSB7XG4gIHNlbGVjdGlvbjogc3RyaW5nXG4gIHJldmlzaW9uOiBudW1iZXJcbiAgdGhlbWVzOiBSb3dUaGVtZVtdXG4gIC8qKiBUaGVtZSBpZHMgdGhhdCBsaXZlIGluIHRoZSB0aGVtZXMgZGlyZWN0b3J5IGFuZCBjYW4gYmUgZGVsZXRlZCBpbi1hcHAuICovXG4gIGRlbGV0YWJsZTogc3RyaW5nW11cbiAgZXJyb3I6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3dTdG9yZSgpIHtcbiAgcmV0dXJuIGRlZmluZVN0b3JlKHtcbiAgICBpbml0OiAoKTogUm93U3RhdGUgPT4gKHsgc2VsZWN0aW9uOiBERUZBVUxUX0lELCByZXZpc2lvbjogLTEsIHRoZW1lczogW10sIGRlbGV0YWJsZTogW10sIGVycm9yOiAnJyB9KSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzeW5jOiAoZDogUm93U3RhdGUsIHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJldmlzaW9uIDw9IGQucmV2aXNpb24pIHJldHVyblxuICAgICAgICBkLnNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICBkLnJldmlzaW9uID0gcmV2aXNpb25cbiAgICAgICAgZC50aGVtZXMgPSB0aGVtZXNcbiAgICAgICAgZC5kZWxldGFibGUgPSBkZWxldGFibGVcbiAgICAgICAgZC5lcnJvciA9IGVycm9yXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvUm93VGhlbWVzKHNuYXBzaG90OiBUaGVtZVNuYXBzaG90LCBuYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJvd1RoZW1lW10ge1xuICByZXR1cm4gc25hcHNob3QudGhlbWVzXG4gICAgLy8gVGhlIGJ1aWx0LWluIGxpZ2h0L2RhcmsgcGFpciBpcyBvd25lZCBieSB0aGUgQXBwZWFyYW5jZSByb3cgYWJvdmUuXG4gICAgLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gJ2xpZ2h0JyAmJiB0LmlkICE9PSAnZGFyaycpXG4gICAgLm1hcCgodCkgPT4gKHtcbiAgICAgIGlkOiB0LmlkLFxuICAgICAgbmFtZTogbmFtZXNbdC5pZF0gPz8gdC5pZCxcbiAgICAgIGNvbG9yU2NoZW1lOiB0LmNvbG9yU2NoZW1lLFxuICAgICAgc2FtcGxlczogW1xuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYmctYmFzZSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSddID8/ICcnLFxuICAgICAgXSxcbiAgICB9KSlcbn1cblxuLyoqIFRoZSBDb2xvcnNjaGVtZSBwaWNrZXIgdGFiIGNvbnRlbnQgKFNldHRpbmdzIFx1MjE5MiBQbHVnaW5zKS4gKi9cbmZ1bmN0aW9uIENvbG9yc2NoZW1lUm93KHByb3BzOiB7XG4gIHQ6IChrZXk6IGtleW9mIHR5cGVvZiB6aCkgPT4gc3RyaW5nXG4gIHVzZVN0b3JlOiA8Uz4oc2VsZWN0b3I6IChzOiBSb3dTdGF0ZSkgPT4gUykgPT4gU1xuICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgcmVsb2FkQ2F0YWxvZzogKCkgPT4gdm9pZFxufSkge1xuICBjb25zdCB7IHQsIHVzZVN0b3JlLCBzZXRUaGVtZSwgcmVsb2FkQ2F0YWxvZyB9ID0gcHJvcHNcbiAgY29uc3Qgc2VsZWN0aW9uID0gdXNlU3RvcmUoKHMpID0+IHMuc2VsZWN0aW9uKVxuICBjb25zdCB0aGVtZXMgPSB1c2VTdG9yZSgocykgPT4gcy50aGVtZXMpXG4gIGNvbnN0IGRlbGV0YWJsZSA9IHVzZVN0b3JlKChzKSA9PiBzLmRlbGV0YWJsZSlcbiAgY29uc3QgZXJyb3IgPSB1c2VTdG9yZSgocykgPT4gcy5lcnJvcilcblxuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbmZpcm1EZWxldGUsIHNldENvbmZpcm1EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgY29sb3JTY2hlbWU6ICdkYXJrJyBhcyAnbGlnaHQnIHwgJ2RhcmsnLFxuICAgIGJnOiAnIzFlMWUyZScsXG4gICAgZmc6ICcjY2RkNmY0JyxcbiAgICBhY2NlbnQ6ICcjY2JhNmY3JyxcbiAgICBiZ0VsZXZhdGVkOiAnIzE4MTgyNScsXG4gICAgYmdTaWRlYmFyOiAnIzE4MTgyNScsXG4gICAgc3VjY2VzczogJyNhNmUzYTEnLFxuICAgIGVycm9yOiAnI2YzOGJhOCcsXG4gICAgd2FybjogJyNmOWUyYWYnLFxuICB9KVxuICBjb25zdCBzZXRGaWVsZCA9IChrZXk6IGtleW9mIHR5cGVvZiBmaWVsZHMpID0+IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgc2V0RmllbGRzKChmKSA9PiAoeyAuLi5mLCBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKVxuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmaWVsZHMuaWQudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFpZCkge1xuICAgICAgc2V0Rm9ybUVycm9yKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJykpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0U2F2aW5nKHRydWUpXG4gICAgc2V0Rm9ybUVycm9yKCcnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBhY3Rpb246ICdhZGQtdGhlbWUnLFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkcy5uYW1lLnRyaW0oKSB8fCBpZCxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lOiBmaWVsZHMuY29sb3JTY2hlbWUsXG4gICAgICAgICAgICByb2xlczoge1xuICAgICAgICAgICAgICBiZzogZmllbGRzLmJnLFxuICAgICAgICAgICAgICBmZzogZmllbGRzLmZnLFxuICAgICAgICAgICAgICBhY2NlbnQ6IGZpZWxkcy5hY2NlbnQsXG4gICAgICAgICAgICAgIGJnRWxldmF0ZWQ6IGZpZWxkcy5iZ0VsZXZhdGVkLFxuICAgICAgICAgICAgICBiZ1NpZGViYXI6IGZpZWxkcy5iZ1NpZGViYXIsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZpZWxkcy5zdWNjZXNzLFxuICAgICAgICAgICAgICBlcnJvcjogZmllbGRzLmVycm9yLFxuICAgICAgICAgICAgICB3YXJuOiBmaWVsZHMud2FybixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgb2s6IGZhbHNlLCBlcnJvcjogJ2ludmFsaWQgcmVzcG9uc2UnIH0pKSkgYXMgeyBvazogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfVxuICAgICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcbiAgICAgICAgc2V0RmllbGRzKChmKSA9PiAoeyAuLi5mLCBpZDogJycsIG5hbWU6ICcnIH0pKVxuICAgICAgICByZWxvYWRDYXRhbG9nKClcbiAgICAgICAgc2V0VGhlbWUoaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb3JtRXJyb3IocmVzdWx0LmVycm9yID8/IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0Rm9ybUVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChjb25maXJtRGVsZXRlICE9PSBpZCkge1xuICAgICAgc2V0Q29uZmlybURlbGV0ZShpZClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29uZmlybURlbGV0ZSgoYykgPT4gKGMgPT09IGlkID8gbnVsbCA6IGMpKSwgMjUwMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRDb25maXJtRGVsZXRlKG51bGwpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdyZW1vdmUtdGhlbWUnLCBpZCB9KSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBvazogZmFsc2UsIGVycm9yOiAnaW52YWxpZCByZXNwb25zZScgfSkpKSBhcyB7IG9rOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9XG4gICAgICBpZiAoIXJlc3VsdC5vaykgc2V0Rm9ybUVycm9yKHJlc3VsdC5lcnJvciA/PyB0KCdjb2xvcnNjaGVtZS5hZGRFcnJvcicpKVxuICAgICAgcmVsb2FkQ2F0YWxvZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0Rm9ybUVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hpcHMgPSBbXG4gICAgeyBpZDogREVGQVVMVF9JRCwgbGFiZWw6IHQoJ2NvbG9yc2NoZW1lLmRlZmF1bHQnKSwgc2FtcGxlczogW10gYXMgc3RyaW5nW10gfSxcbiAgICAuLi50aGVtZXMubWFwKCh0aCkgPT4gKHsgaWQ6IHRoLmlkLCBsYWJlbDogdGgubmFtZSwgc2FtcGxlczogdGguc2FtcGxlcyB9KSksXG4gIF1cblxuICBjb25zdCBjb2xvckZpZWxkID0gKGxhYmVsOiBzdHJpbmcsIGtleToga2V5b2YgdHlwZW9mIGZpZWxkcykgPT4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImRzaGNzLWNvbG9yXCIgdmFsdWU9e2ZpZWxkc1trZXldIGFzIHN0cmluZ30gb25DaGFuZ2U9e3NldEZpZWxkKGtleSl9IC8+XG4gICAgPC9sYWJlbD5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGUtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRzaGNzLWJ0blwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0Zvcm0oKHYpID0+ICF2KVxuICAgICAgICAgICAgc2V0Rm9ybUVycm9yKCcnKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnY29sb3JzY2hlbWUuYWRkJyl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWVycm9yXCI+e2Vycm9yfTwvZGl2PiA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWdyaWRcIj5cbiAgICAgICAge2NoaXBzLm1hcCgoY2hpcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRGVsZXRhYmxlID0gZGVsZXRhYmxlLmluY2x1ZGVzKGNoaXAuaWQpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17Y2hpcC5pZH0gY2xhc3NOYW1lPVwiZHNoY3MtY2hpcC13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWNoaXBcIiBhcmlhLXByZXNzZWQ9e3NlbGVjdGlvbiA9PT0gY2hpcC5pZH0gb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY2hpcC5pZCl9PlxuICAgICAgICAgICAgICAgIHtjaGlwLnNhbXBsZXMubGVuZ3RoID09PSAzID8gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwiZHNoY3MtZG90XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1kb3QgZHNoY3MtZG90LWRlZmF1bHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2NoaXAubGFiZWx9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7aXNEZWxldGFibGUgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkc2hjcy1kZWwke2NvbmZpcm1EZWxldGUgPT09IGNoaXAuaWQgPyAnIGRzaGNzLWRlbC1jb25maXJtJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17dCgnY29sb3JzY2hlbWUuZGVsZXRlJyl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHJlbW92ZShjaGlwLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29uZmlybURlbGV0ZSA9PT0gY2hpcC5pZCA/IHQoJ2NvbG9yc2NoZW1lLmNvbmZpcm1EZWxldGUnKSA6ICdcdTI3MTUnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0Zvcm0gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybS10aXRsZVwiPnt0KCdjb2xvcnNjaGVtZS5hZGRUaXRsZScpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybS1ncmlkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuaWQnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiIHZhbHVlPXtmaWVsZHMuaWR9IG9uQ2hhbmdlPXtzZXRGaWVsZCgnaWQnKX0gcGxhY2Vob2xkZXI9XCJteS10aGVtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWxhYmVsXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiIHZhbHVlPXtmaWVsZHMubmFtZX0gb25DaGFuZ2U9e3NldEZpZWxkKCduYW1lJyl9IHBsYWNlaG9sZGVyPVwiTXkgVGhlbWVcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1sYWJlbFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkcy5jb2xvclNjaGVtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpZWxkcygoZikgPT4gKHsgLi4uZiwgY29sb3JTY2hlbWU6IGUudGFyZ2V0LnZhbHVlIGFzICdsaWdodCcgfCAnZGFyaycgfSkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmxpZ2h0Jyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmJnJyksICdiZycpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZmcnKSwgJ2ZnJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnKSwgJ2FjY2VudCcpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1hZHZhbmNlZFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5hZHZhbmNlZCcpfTwvZGl2PlxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZWxldmF0ZWQnKSwgJ2JnRWxldmF0ZWQnKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLnNpZGViYXInKSwgJ2JnU2lkZWJhcicpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuc3VjY2VzcycpLCAnc3VjY2VzcycpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InKSwgJ2Vycm9yJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC53YXJuJyksICd3YXJuJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Zvcm1FcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57Zm9ybUVycm9yfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1mb3JtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0biBkc2hjcy1idG4tcHJpbWFyeVwiIGRpc2FibGVkPXtzYXZpbmd9IG9uQ2xpY2s9eygpID0+IHZvaWQgc2F2ZSgpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbG9yc2NoZW1lLnNhdmUnKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZHNoY3MtYnRuXCIgZGlzYWJsZWQ9e3NhdmluZ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0Zvcm0oZmFsc2UpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbG9yc2NoZW1lLmNhbmNlbCcpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLyoqIEZldGNoIHRoZSBzZXJ2ZXItc2lkZSB0aGVtZSBjYXRhbG9nIG9uY2UuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkQ2F0YWxvZygpOiBQcm9taXNlPFRoZW1lQ2F0YWxvZz4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwgeyBoZWFkZXJzOiB7IGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcbiAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihgY2F0YWxvZyByZXF1ZXN0IGZhaWxlZDogJHtyZXMuc3RhdHVzfWApXG4gIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSkgYXMgVGhlbWVDYXRhbG9nXG59XG5cbi8qKiBDbGllbnQgcGx1Z2luIGJvZHkuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoY3R4OiBDbGllbnRDb250ZXh0KTogdm9pZCB7XG4gIGNvbnN0IHRoZW1lID0gY3R4LnRoZW1lXG4gIC8vIFRoZSBBcHBlYXJhbmNlIHJvdydzIGR1cmFibGUgcHJlZmVyZW5jZSAobGlnaHQvZGFyay9zeXN0ZW0pIFx1MjAxNCB0aGUgdGFyZ2V0XG4gIC8vIG9mIFwiXHU4RERGXHU5NjhGXHU1OTE2XHU4OUMyIC8gRm9sbG93IGFwcGVhcmFuY2VcIi5cbiAgY29uc3QgYXBwZWFyYW5jZVNjb3BlID0gY3R4LnNldHRpbmdzU2NvcGUuYmluZCh7IG5hbWVzcGFjZTogVEhFTUVfTlMgfSlcbiAgY29uc3QgbmFtZUJ5SWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBjb25zdCBkaXNwb3NlcnM6ICgoKSA9PiB2b2lkKVtdID0gW11cblxuICBjdHguZWZmZWN0KCgpID0+IGN0eC5sb2NhbGUucmVnaXN0ZXIoTE9DQUxFX05TLCB7IHpoLCBlbiB9KSwgJ2NvbG9yc2NoZW1lOiBsb2NhbGUgZGljdGlvbmFyeScpXG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVSb3dTdG9yZSgpXG4gIGxldCBib3VuZDogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZGVsZXRhYmxlOiBzdHJpbmdbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9IHwgdW5kZWZpbmVkXG4gIC8qKiBQZXJzaXN0ZWQvZGVzaXJlZCBjb2xvcnNjaGVtZSBpZCAoJycgPSBmb2xsb3cgdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSkuICovXG4gIGxldCBzZWxlY3Rpb24gPSBERUZBVUxUX0lEXG4gIGxldCByZXZpc2lvbiA9IC0xXG4gIC8qKiBUaGVtZSBpZHMgZnJvbSB0aGUgdGhlbWVzIGRpcmVjdG9yeSAoZGVsZXRhYmxlIGluLWFwcCkuICovXG4gIGxldCBkZWxldGFibGVJZHM6IHN0cmluZ1tdID0gW11cblxuICAvKipcbiAgICogUHJlc2VudGVyIG1pcnJvci4gVGhlIG9mZmljaWFsIHVpLWxheW91dCBwcmVzZW50ZXIgYXBwbGllcyB0aGUgcmVzb2x2ZWRcbiAgICogdGhlbWUgdG8gPGJvZHk+IGJ1dCBpdHMgZXZlbnQgZGVsaXZlcnkgZnJvbSB0aGlzIGZpYmVyIGlzIHVucmVsaWFibGUgYXRcbiAgICogbG9hZCAodGhlIHRoZW1lIHNlcnZpY2UgYWxzbyBhc3luY2hyb25vdXNseSBhZG9wdHMgdGhlIGR1cmFibGUgdWktdGhlbWVcbiAgICogcHJlZmVyZW5jZSwgZmxpcHBpbmcgdGhlIHBhbGV0dGUgYmFjaykuIFRoaXMgcGx1Z2luIHRoZXJlZm9yZSBhcHBsaWVzIHRoZVxuICAgKiBhY3RpdmUgdGhlbWUncyB0b2tlbnMgaXRzZWxmLCBhbmQgcmUtYXNzZXJ0cyB0aGUgcGVyc2lzdGVkIHNlbGVjdGlvbiBmb3JcbiAgICogYSBib3VuZGVkIGxvYWQgd2luZG93LiBJZGVtcG90ZW50IHdpdGggdGhlIG9mZmljaWFsIHByZXNlbnRlciBcdTIwMTQgc2FtZVxuICAgKiB2YWx1ZXMsIHNhbWUgdGFyZ2V0cy5cbiAgICovXG4gIGNvbnN0IGFwcGxpZWRUb2tlbnM6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgYXBwbHlBY3RpdmVUb2tlbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhlbWUuZ2V0VGhlbWUoKS5hY3RpdmVcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY29sb3JTY2hlbWUgPSBhY3RpdmUuY29sb3JTY2hlbWVcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgIGlmIChhY3RpdmUuY29sb3JTY2hlbWUgPT09ICdkYXJrJykgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZHMtZGFyay10aGVtZScsICcnKVxuICAgIGVsc2UgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZHMtZGFyay10aGVtZScpXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIGFwcGxpZWRUb2tlbnMpIGJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSlcbiAgICBhcHBsaWVkVG9rZW5zLmxlbmd0aCA9IDBcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYWN0aXZlLnRva2VucykpIHtcbiAgICAgIGJvZHkuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpXG4gICAgICBhcHBsaWVkVG9rZW5zLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIHJvdyBoaWdobGlnaHRzIHRoZSB0aGVtZSB0aGUgc2VydmljZSBhY3R1YWxseSByZXNvbHZlZC4gKi9cbiAgY29uc3QgYWN0aXZlU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZWYgPSB0aGVtZS5nZXRUaGVtZSgpLnByZWZlcmVuY2VcbiAgICByZXR1cm4gcHJlZiA9PT0gJ2xpZ2h0JyB8fCBwcmVmID09PSAnZGFyaycgfHwgcHJlZiA9PT0gJ3N5c3RlbScgPyBERUZBVUxUX0lEIDogcHJlZlxuICB9XG5cbiAgY29uc3QgcHVibGlzaFJvdyA9IChlcnJvciA9ICcnKSA9PiB7XG4gICAgaWYgKCFib3VuZCkgcmV0dXJuXG4gICAgYm91bmQuc3luYyhhY3RpdmVTZWxlY3Rpb24oKSwgcmV2aXNpb24sIHRvUm93VGhlbWVzKHRoZW1lLmdldFRoZW1lKCksIG5hbWVCeUlkKSwgZGVsZXRhYmxlSWRzLCBlcnJvcilcbiAgfVxuXG4gIC8qKiBQZXJzaXN0IHRoZSBwaWNrZXIgc2VsZWN0aW9uIHRocm91Z2ggdGhlIGNhdGFsb2cgcm91dGUgKHNlcnZlci1zaWRlKS4gKi9cbiAgY29uc3Qgc2F2ZVNlbGVjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgdm9pZCBmZXRjaChDQVRBTE9HX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc2VsZWN0aW9uOiBpZCB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcy5vaykgY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIHJlcy5zdGF0dXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlOiB1bmtub3duKSA9PiBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHBlcnNpc3Qgc2VsZWN0aW9uJywgZSkpXG4gIH1cblxuICAvKiogUmV2ZXJ0IHRvIHRoZSBkdXJhYmxlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSAobGlnaHQgLyBkYXJrIC8gc3lzdGVtKS4gKi9cbiAgY29uc3QgZm9sbG93QXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGFwcGVhcmFuY2VTY29wZS5nZXRTbmFwc2hvdCgpLnZhbHVlIGFzIHsgcHJlZmVyZW5jZT86IHN0cmluZyB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgcHJlZiA9IHZhbHVlPy5wcmVmZXJlbmNlXG4gICAgdHJ5IHtcbiAgICAgIHRoZW1lLnNldFRoZW1lKHByZWYgPT09ICdsaWdodCcgfHwgcHJlZiA9PT0gJ2RhcmsnIHx8IHByZWYgPT09ICdzeXN0ZW0nID8gcHJlZiA6ICdzeXN0ZW0nKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gcmVnaXN0cnkgbm90IHJlYWR5IFx1MjAxNCBmYWxscyBiYWNrIG9uIG5leHQgbG9hZFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZS1hc3NlcnQgdGhlIHBlcnNpc3RlZCBzZWxlY3Rpb24gZm9yIGEgYm91bmRlZCBsb2FkIHdpbmRvdy4gVGhlIHRoZW1lXG4gICAqIHNlcnZpY2UgYXN5bmNocm9ub3VzbHkgYWRvcHRzIHRoZSBkdXJhYmxlIHVpLXRoZW1lIHByZWZlcmVuY2UgYWZ0ZXIgd2VcbiAgICogcmVzdG9yZSwgYW5kIGV2ZW50IGRlbGl2ZXJ5IGZyb20gdGhpcyBmaWJlciB0byB0aGUgb2ZmaWNpYWwgcHJlc2VudGVyIGlzXG4gICAqIHVucmVsaWFibGUgXHUyMDE0IHNvIHdoaWxlIHRoZSB3aW5kb3cgaXMgb3BlbiB3ZSBrZWVwIHB1c2hpbmcgb3VyIHNlbGVjdGlvblxuICAgKiAoYW5kIGFwcGx5aW5nIGl0cyB0b2tlbnMpIHVudGlsIHRoZSB3aW5kb3cgY2xvc2VzLiBOZXZlciBmaWdodHMgbGF0ZXJcbiAgICogdXNlciBhY3Rpb25zOiB0aGUgd2luZG93IG9ubHkgc3BhbnMgdGhlIGxvYWQtdGltZSBhZG9wdGlvbi5cbiAgICovXG4gIGxldCBlbmZvcmNlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IHVuZGVmaW5lZFxuICBjb25zdCBzdG9wRW5mb3JjZSA9ICgpID0+IHtcbiAgICBpZiAoZW5mb3JjZVRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKGVuZm9yY2VUaW1lcilcbiAgICAgIGVuZm9yY2VUaW1lciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuICBjb25zdCBlbmZvcmNlU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3Rpb24gPT09IERFRkFVTFRfSUQpIHJldHVyblxuICAgIGlmICh0aGVtZS5nZXRUaGVtZSgpLnByZWZlcmVuY2UgIT09IHNlbGVjdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbWUuc2V0VGhlbWUoc2VsZWN0aW9uKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCBcdTIwMTQgdGhlIG5leHQgdGljayByZXRyaWVzXG4gICAgICB9XG4gICAgfVxuICAgIGFwcGx5QWN0aXZlVG9rZW5zKClcbiAgfVxuXG4gIC8vIE1pcnJvciB0aGUgbGl2ZSB0aGVtZSBzdGF0ZSBpbnRvIHRoZSByb3cgYW5kIGtlZXAgdGhlIGFjdGl2ZSB0b2tlbnMgb25cbiAgLy8gPGJvZHk+IGZvciB3aGF0ZXZlciBldmVudHMgdGhpcyBmaWJlciBkb2VzIHJlY2VpdmUuXG4gIGN0eC5vbigndGhlbWUvY2hhbmdlJywgKCkgPT4ge1xuICAgIHJldmlzaW9uID0gdGhlbWUuZ2V0VGhlbWUoKS5yZXZpc2lvblxuICAgIGFwcGx5QWN0aXZlVG9rZW5zKClcbiAgICBwdWJsaXNoUm93KClcbiAgfSlcblxuICBjb25zdCBhcHBseVNlbGVjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHRoZW1lLnNldFRoZW1lKGlkKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbm90IHJlZ2lzdGVyZWQgeWV0IChjYXRhbG9nIHN0aWxsIGxvYWRpbmcpIFx1MjAxNCB0aGUgc2VsZWN0aW9uIGlzXG4gICAgICAvLyByZS1hcHBsaWVkIG9uY2UgcmVnaXN0cmF0aW9uIGNvbXBsZXRlcy5cbiAgICB9XG4gIH1cblxuICAvKiogRHJvcCBhbGwgdGhlbWUgcmVnaXN0cmF0aW9ucyAodXNlZCBiZWZvcmUgcmUtcmVnaXN0ZXJpbmcgYWZ0ZXIgYW4gZWRpdCkuICovXG4gIGNvbnN0IGRpc3Bvc2VUaGVtZXMgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlzcG9zZSgpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gYWxyZWFkeSBnb25lXG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2Vycy5sZW5ndGggPSAwXG4gIH1cblxuICBjb25zdCByZWdpc3RlckNhdGFsb2cgPSAoY2F0YWxvZzogVGhlbWVDYXRhbG9nKSA9PiB7XG4gICAgZGlzcG9zZVRoZW1lcygpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBbLi4uY2F0YWxvZy5wcmVzZXRzLCAuLi5jYXRhbG9nLnVzZXJUaGVtZXMsIC4uLmNhdGFsb2cuc2V0dGluZ3NUaGVtZXNdKSB7XG4gICAgICBuYW1lQnlJZFtlbnRyeS5pZF0gPSBlbnRyeS5uYW1lXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXNwb3NlID0gdGhlbWUucmVnaXN0ZXIoe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBjb2xvclNjaGVtZTogZW50cnkuY29sb3JTY2hlbWUsXG4gICAgICAgICAgdG9rZW5zOiBlbnRyeS50b2tlbnMgPz8ge30sXG4gICAgICAgIH0pXG4gICAgICAgIGRpc3Bvc2Vycy5wdXNoKGRpc3Bvc2UpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcmVnaXN0ZXIgdGhlbWUnLCBlbnRyeS5pZCwgZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRhYmxlSWRzID0gY2F0YWxvZy51c2VyVGhlbWVzLm1hcCgodCkgPT4gdC5pZClcbiAgICAvLyBQcmVjZWRlbmNlOiBwZXJzaXN0ZWQgc2VsZWN0aW9uIChmcm9tIHRoZSBjYXRhbG9nKSA+IGNvbmZpZyBkZWZhdWx0ID4gZm9sbG93IGFwcGVhcmFuY2UuXG4gICAgY29uc3Qgc2F2ZWQgPSBjYXRhbG9nLnNlbGVjdGlvblxuICAgIGlmIChzYXZlZCAmJiB0aGVtZS5nZXRUaGVtZSgpLnRoZW1lcy5zb21lKCh0KSA9PiB0LmlkID09PSBzYXZlZCkpIHtcbiAgICAgIHNlbGVjdGlvbiA9IHNhdmVkXG4gICAgfSBlbHNlIGlmIChjYXRhbG9nLmRlZmF1bHRUaGVtZSkge1xuICAgICAgc2VsZWN0aW9uID0gY2F0YWxvZy5kZWZhdWx0VGhlbWVcbiAgICB9XG4gICAgYXBwbHlTZWxlY3Rpb24oc2VsZWN0aW9uKVxuICAgIGFwcGx5QWN0aXZlVG9rZW5zKClcbiAgICBpZiAoc2VsZWN0aW9uICE9PSBERUZBVUxUX0lEKSB7XG4gICAgICAvLyBDb3ZlciB0aGUgbG9hZC10aW1lIGFkb3B0aW9uIGZsaXBzIHdpdGggYSBib3VuZGVkIHJlLWFzc2VydCBsb29wLlxuICAgICAgc3RvcEVuZm9yY2UoKVxuICAgICAgZW5mb3JjZVRpbWVyID0gc2V0SW50ZXJ2YWwoZW5mb3JjZVNlbGVjdGlvbiwgNDAwKVxuICAgICAgc2V0VGltZW91dChzdG9wRW5mb3JjZSwgNTAwMClcbiAgICB9XG4gICAgcmV2aXNpb24gPSB0aGVtZS5nZXRUaGVtZSgpLnJldmlzaW9uXG4gICAgcHVibGlzaFJvdygpXG4gIH1cblxuICAvKiogUmUtZmV0Y2ggdGhlIGNhdGFsb2cgYW5kIHJlLXJlZ2lzdGVyIChhZnRlciBhZGRpbmcvcmVtb3ZpbmcgYSB1c2VyIHRoZW1lKS4gKi9cbiAgY29uc3QgcmVsb2FkQ2F0YWxvZyA9ICgpID0+IHtcbiAgICB2b2lkIGxvYWRDYXRhbG9nKClcbiAgICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gY2F0YWxvZyByZWxvYWQgZmFpbGVkJywgZSlcbiAgICAgICAgcHVibGlzaFJvdyh0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgZSAhPT0gbnVsbCAmJiAnbWVzc2FnZScgaW4gZSA/IFN0cmluZygoZSBhcyB7IG1lc3NhZ2U6IHVua25vd24gfSkubWVzc2FnZSkgOiBTdHJpbmcoZSkpXG4gICAgICB9KVxuICB9XG5cbiAgdm9pZCBsb2FkQ2F0YWxvZygpXG4gICAgLnRoZW4ocmVnaXN0ZXJDYXRhbG9nKVxuICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGNhdGFsb2cgbG9hZCBmYWlsZWQnLCBlKVxuICAgICAgcHVibGlzaFJvdyh0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgZSAhPT0gbnVsbCAmJiAnbWVzc2FnZScgaW4gZSA/IFN0cmluZygoZSBhcyB7IG1lc3NhZ2U6IHVua25vd24gfSkubWVzc2FnZSkgOiBTdHJpbmcoZSkpXG4gICAgfSlcblxuICAvLyBDbGVhbiB1cCB0aGVtZSByZWdpc3RyYXRpb25zIGFuZCBhcHBsaWVkIHRva2VucyB3aGVuIHRoaXMgcGx1Z2luIHVubG9hZHNcbiAgLy8gKEhNUiAvIGNvbmZpZyBlZGl0KS5cbiAgY3R4LmVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBkaXNwb3NlVGhlbWVzKClcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXBwbGllZFRva2VucykgYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKVxuICAgICAgYXBwbGllZFRva2Vucy5sZW5ndGggPSAwXG4gICAgfSxcbiAgICAnY29sb3JzY2hlbWU6IHRoZW1lIHJlZ2lzdHJhdGlvbnMnLFxuICApXG5cbiAgLy8gVGhlIENvbG9yc2NoZW1lIHBpY2tlciBsaXZlcyBpbiBpdHMgb3duIHRhYiB1bmRlciBcdThCQkVcdTdGNkUgXHUyMTkyIFx1NjNEMlx1NEVGNiAobm90IHRoZVxuICAvLyBHZW5lcmFsIHNlY3Rpb24sIHdoaWNoIG9ubHkgb3ducyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSByb3cpLlxuICBjdHguc2xvdHMuaW5qZWN0KCdzZXR0aW5ncy5wbHVnaW5zLnRhYicsICgpID0+XG4gICAgY3R4LnNsb3RzLnJlZ2lzdGVyKFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2V0dGluZ3MucGx1Z2lucy50YWInLFxuICAgICAgICBpZDogJ2NvbG9yc2NoZW1lJyxcbiAgICAgICAgb3JkZXI6IDEwLFxuICAgICAgICBsYWJlbDogKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUykoJ2NvbG9yc2NoZW1lLnRpdGxlJyksXG4gICAgICAgIHN0b3JlLFxuICAgICAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICAgICAgaW5qZWN0OiAoYWN0aW9uczogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZGVsZXRhYmxlOiBzdHJpbmdbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7XG4gICAgICAgICAgYm91bmQgPSBhY3Rpb25zXG4gICAgICAgICAgcHVibGlzaFJvdygpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBpZFxuICAgICAgICAgICAgICAvLyBBIGRlbGliZXJhdGUgcGljayB3aW5zIG92ZXIgdGhlIGxvYWQtdGltZSBlbmZvcmNlbWVudCBsb29wLlxuICAgICAgICAgICAgICBzdG9wRW5mb3JjZSgpXG4gICAgICAgICAgICAgIGlmIChpZCA9PT0gREVGQVVMVF9JRCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byB0aGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlIGFuZCBmb3JnZXQgb3VyXG4gICAgICAgICAgICAgICAgLy8gcGVyc2lzdGVkIGNvbG9yc2NoZW1lLlxuICAgICAgICAgICAgICAgIGZvbGxvd0FwcGVhcmFuY2UoKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oJycpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbHlTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgICAgc2F2ZVNlbGVjdGlvbihpZClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbG9hZENhdGFsb2csXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIENvbG9yc2NoZW1lUm93LFxuICAgICksXG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQSxtQkFBeUI7QUFFekIsb0JBQTRCO0FBcVJ4QjtBQTVRRyxJQUFNLE9BQU87QUFHYixJQUFNLFNBQVMsQ0FBQyxTQUFTLFNBQVMsVUFBVSxjQUFjLFVBQVUsZUFBZTtBQUkxRixJQUFNLFdBQVc7QUFDakIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sY0FBYztBQUNwQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxhQUFhO0FBTW5CLElBQU0sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCaEIsSUFBSSxPQUFPLGFBQWEsZUFBZSxTQUFTLGNBQWMseUJBQXlCLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBRyxNQUFNLE1BQU07QUFDN0gsUUFBTSxNQUFNLFNBQVMsY0FBYyxPQUFPO0FBQzFDLE1BQUksUUFBUSxTQUFTO0FBQ3JCLE1BQUksUUFBUSxZQUFZO0FBQ3hCLE1BQUksY0FBYztBQUNsQixXQUFTLEtBQUssWUFBWSxHQUFHO0FBQy9CO0FBR0EsSUFBTSxLQUFLO0FBQUEsRUFDVCxxQkFBcUI7QUFBQSxFQUNyQix1QkFBdUI7QUFBQSxFQUN2Qix5QkFBeUI7QUFBQSxFQUN6QixtQkFBbUI7QUFBQSxFQUNuQix3QkFBd0I7QUFBQSxFQUN4Qix3QkFB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

		})(module, module.exports, require);
		return module.exports;
	}
});
