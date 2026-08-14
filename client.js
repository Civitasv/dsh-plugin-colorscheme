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
.dshcfg-card{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;list-style:none;margin-bottom:10px;overflow:hidden}
.dshcfg-head{align-items:center;background:transparent;border:0;color:var(--dsw-alias-label-primary);cursor:pointer;display:flex;font:inherit;gap:8px;padding:10px 12px;text-align:left;width:100%}
.dshcfg-head:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dshcfg-name{font-size:13px;font-weight:600}
.dshcfg-desc{color:var(--dsw-alias-label-tertiary);flex:1;font-size:12px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dshcfg-pending{background:rgba(46,160,67,.16);border-radius:999px;color:var(--dsw-alias-state-success-primary);flex:none;font-size:11px;padding:1px 8px}
.dshcfg-caret{color:var(--dsw-alias-label-tertiary);flex:none;font-size:10px}
.dshcfg-body{display:flex;flex-direction:column;gap:12px;padding:4px 12px 12px}
.dshcfg-field{display:flex;flex-direction:column;gap:4px}
.dshcfg-label{color:var(--dsw-alias-label-secondary);font-size:12px}
.dshcfg-hint{color:var(--dsw-alias-label-caption);font-size:11px}
.dshcfg-actions{display:flex;gap:8px;justify-content:flex-end}
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
  "colorscheme.confirmDelete": "\u518D\u6B21\u70B9\u51FB\u786E\u8BA4\u5220\u9664",
  "config.title": "\u914D\u7F6E",
  "config.themesDir": "\u4E3B\u9898\u76EE\u5F55",
  "config.themesDirHint": "\u7528\u6237\u4E3B\u9898 JSON \u6587\u4EF6\u7684\u76EE\u5F55\uFF08\u7559\u7A7A = \u9ED8\u8BA4 ~/.dsh/themes\uFF09",
  "config.defaultTheme": "\u9ED8\u8BA4\u4E3B\u9898",
  "config.defaultThemeHint": "\u672A\u624B\u52A8\u9009\u62E9\u65F6\u5E94\u7528\u7684\u4E3B\u9898 id\uFF08\u7559\u7A7A = \u8DDF\u968F\u5916\u89C2\uFF09",
  "config.save": "\u4FDD\u5B58",
  "config.discard": "\u6062\u590D\u9ED8\u8BA4",
  "config.unsaved": "\u672A\u4FDD\u5B58",
  "config.saveFailed": "\u4FDD\u5B58\u5931\u8D25"
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
  "colorscheme.confirmDelete": "Click again to confirm delete",
  "config.title": "Configuration",
  "config.themesDir": "Themes directory",
  "config.themesDirHint": "Directory for user theme JSON files (empty = default ~/.dsh/themes)",
  "config.defaultTheme": "Default theme",
  "config.defaultThemeHint": "Theme id applied when none is chosen (empty = follow appearance)",
  "config.save": "Save",
  "config.discard": "Reset",
  "config.unsaved": "Unsaved",
  "config.saveFailed": "Save failed"
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
function ColorschemeConfigCard({ t }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [config, setConfig] = (0, import_react.useState)(null);
  const [draft, setDraft] = (0, import_react.useState)({ themesDir: "", defaultTheme: "" });
  const [saving, setSaving] = (0, import_react.useState)(false);
  const [failed, setFailed] = (0, import_react.useState)(false);
  const load = async () => {
    try {
      const res = await fetch(CATALOG_URL, { headers: { accept: "application/json" } });
      const catalog = await res.json();
      const next = { themesDir: catalog.themesDir, defaultTheme: catalog.defaultTheme };
      setConfig(next);
      setDraft(next);
    } catch {
    }
  };
  (0, import_react.useEffect)(() => {
    if (open) void load();
  }, [open]);
  const dirty = config !== null && (draft.themesDir !== config.themesDir || draft.defaultTheme !== config.defaultTheme);
  const save = async (clear) => {
    setSaving(true);
    setFailed(false);
    try {
      const res = await fetch(CATALOG_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(clear ? { action: "set-config", config: {} } : { action: "set-config", config: draft })
      });
      const result = await res.json().catch(() => ({ ok: false }));
      if (!result.ok) setFailed(true);
      await load();
    } catch {
      setFailed(true);
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "dshcfg-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "dshcfg-head", "aria-expanded": open, onClick: () => setOpen((v) => !v), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-name", children: t("colorscheme.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-desc", children: t("config.title") }),
      dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-pending", children: t("config.unsaved") }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-caret", "aria-hidden": "true", children: open ? "\u25BE" : "\u25B8" })
    ] }),
    open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcfg-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcfg-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-label", children: t("config.themesDir") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "dshcs-input",
            value: draft.themesDir,
            placeholder: "~/.dsh/themes",
            onChange: (e) => setDraft((d) => ({ ...d, themesDir: e.target.value }))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-hint", children: t("config.themesDirHint") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dshcfg-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-label", children: t("config.defaultTheme") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "dshcs-input",
            value: draft.defaultTheme,
            placeholder: "dracula",
            onChange: (e) => setDraft((d) => ({ ...d, defaultTheme: e.target.value }))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-hint", children: t("config.defaultThemeHint") })
      ] }),
      failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dshcs-error", role: "status", children: t("config.saveFailed") }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcfg-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dshcs-btn", disabled: !dirty || saving, onClick: () => void save(true), children: t("config.discard") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dshcs-btn dshcs-btn-primary", disabled: !dirty || saving, onClick: () => void save(false), children: t("config.save") })
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
  ctx.slots.inject(
    "settings.plugin.item",
    () => ctx.slots.register(
      {
        name: "settings.plugin.item",
        id: "colorscheme-config",
        order: 20,
        locale: LOCALE_NS
      },
      ColorschemeConfigCard
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG4vLyBUeXBlLW9ubHkgaW1wb3J0cyB0aGF0IHB1bGwgdGhlIGNvbnRleHQgYXVnbWVudGF0aW9ucyAoc2V0dGluZ3NTY29wZSxcbi8vIGxvY2FsZSwgdGhlIHNldHRpbmdzLmdlbmVyYWwuaXRlbSBzbG90IGNvbnRyYWN0KSBpbnRvIHRoaXMgcHJvZ3JhbS5cbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzLXBsdWdpbnMvY2xpZW50J1xuaW1wb3J0IHR5cGUge30gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtbG9jYWxlL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgVGhlbWVDYXRhbG9nIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzLnRzJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdjb2xvcnNjaGVtZSdcblxuLyoqIFJlcXVpcmVkIGNsaWVudCBzZXJ2aWNlcyAoZmliZXIgaW5qZWN0IFx1MjAxNCB3YWl0cyBmb3IgdGhlIHRoZW1lIHNlcnZpY2UpLiAqL1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsndGhlbWUnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2Nvbm5lY3Rpb24nLCAncmVtb3RlJywgJ3NldHRpbmdzU2NvcGUnXVxuXG5jb25zdCBOUyA9ICdjb2xvcnNjaGVtZSdcbi8qKiBUaGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlIG5hbWVzcGFjZSAob3duZWQgYnkgZHNoLWNsaWVudC11aS10aGVtZSkuICovXG5jb25zdCBUSEVNRV9OUyA9ICd1aS10aGVtZSdcbmNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5jb2xvcnNjaGVtZSdcbmNvbnN0IENBVEFMT0dfVVJMID0gJ2NvbG9yc2NoZW1lL3RoZW1lcy5qc29uJ1xuY29uc3QgU1RZTEVfVEFHID0gJ2RzaC1wbHVnaW4tY29sb3JzY2hlbWUvcm93LmNzcydcbmNvbnN0IERFRkFVTFRfSUQgPSAnJyAvLyBzZW50aW5lbDogZm9sbG93IHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHByZWZlcmVuY2VcblxuLyoqXG4gKiBQcmVmZXJlbmNlLXJvdyBzdHlsZXMuIEluamVjdGVkIG9uY2UgcGVyIG1hdGVyaWFsaXphdGlvbiB3aXRoIHRoZSBsb2FkZXInc1xuICogYGRhdGEtcGx1Z2luLWNzc2AgY29udHJhY3Qgc28gdGhlIGNsaWVudCBITVIgZHJpdmVyIGNhbiBpbnZlbnRvcnkvcmVtb3ZlIGl0LlxuICovXG5jb25zdCBST1dfQ1NTID0gYFxuLmRzaGNzLXJvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo4cHg7cGFkZGluZzoxNnB4IDB9XG4uZHNoY3MtdGl0bGV7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyMnB4fVxuLmRzaGNzLWdyaWR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHh9XG4uZHNoY3MtY2hpcHthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpO2JvcmRlci1yYWRpdXM6OTk5cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEzcHg7Z2FwOjhweDtwYWRkaW5nOjZweCAxMnB4fVxuLmRzaGNzLWNoaXA6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpfVxuLmRzaGNzLWNoaXBbYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXXtiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1iZy1tb2R1bGUtcGxhdGZvcm0pO2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTQwMCl9XG4uZHNoY3MtZG90c3tkaXNwbGF5OmlubGluZS1mbGV4O2dhcDoycHh9XG4uZHNoY3MtZG90e2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTgpO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoxMnB4O3dpZHRoOjEycHh9XG4uZHNoY3MtZG90LWRlZmF1bHR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHZhcigtLWRzdy1zdGF0aWMtbmV1dHJhbC1ibHVpc2gtNTApIDUwJSx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTkwMCkgNTAlKX1cbi5kc2hjcy1lcnJvcntjb2xvcjp2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSk7Zm9udC1zaXplOjEycHh9XG4uZHNoY3MtdGl0bGUtcm93e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59XG4uZHNoY3MtYnRue2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtc2Vjb25kYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MThweDttaW4taGVpZ2h0OjI2cHg7cGFkZGluZzoycHggMTBweH1cbi5kc2hjcy1idG46aG92ZXI6bm90KDpkaXNhYmxlZCl7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KX1cbi5kc2hjcy1idG46ZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH1cbi5kc2hjcy1idG4tcHJpbWFyeXtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KX1cbi5kc2hjcy1jaGlwLXdyYXB7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Z2FwOjRweH1cbi5kc2hjcy1kZWx7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTBweDtoZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoxO3BhZGRpbmc6MCA2cHh9XG4uZHNoY3MtZGVsOmhvdmVye2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KX1cbi5kc2hjcy1kZWwtY29uZmlybXtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KTtmb250LXNpemU6MTBweH1cbi5kc2hjcy1mb3Jte2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czoxMnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7bWFyZ2luLXRvcDoxMnB4O3BhZGRpbmc6MTRweH1cbi5kc2hjcy1mb3JtLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDB9XG4uZHNoY3MtZm9ybS1ncmlke2Rpc3BsYXk6Z3JpZDtnYXA6MTBweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTMwcHgsMWZyKSl9XG4uZHNoY3MtZmllbGR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NHB4fVxuLmRzaGNzLWZpZWxkLWxhYmVse2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2ZvbnQtc2l6ZToxMXB4fVxuLmRzaGNzLWlucHV0e2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTIpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQ6aW5oZXJpdDtmb250LXNpemU6MTJweDttaW4taGVpZ2h0OjI2cHg7cGFkZGluZzoycHggOHB4fVxuLmRzaGNzLWlucHV0OmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnkpfVxuLmRzaGNzLWNvbG9ye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTIpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7aGVpZ2h0OjI4cHg7cGFkZGluZzoycHg7d2lkdGg6MTAwJTtjdXJzb3I6cG9pbnRlcn1cbi5kc2hjcy1maWVsZC1hZHZhbmNlZHtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtY2FwdGlvbik7Zm9udC1zaXplOjExcHg7Z3JpZC1jb2x1bW46MS8tMTttYXJnaW4tdG9wOjRweH1cbi5kc2hjcy1mb3JtLWFjdGlvbnN7ZGlzcGxheTpmbGV4O2dhcDo4cHg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVxuLmRzaGNmZy1jYXJke2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czoxMnB4O2xpc3Qtc3R5bGU6bm9uZTttYXJnaW4tYm90dG9tOjEwcHg7b3ZlcmZsb3c6aGlkZGVufVxuLmRzaGNmZy1oZWFke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjowO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2dhcDo4cHg7cGFkZGluZzoxMHB4IDEycHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjEwMCV9XG4uZHNoY2ZnLWhlYWQ6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpfVxuLmRzaGNmZy1uYW1le2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjYwMH1cbi5kc2hjZmctZGVzY3tjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpO2ZsZXg6MTtmb250LXNpemU6MTJweDttaW4td2lkdGg6MDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9XG4uZHNoY2ZnLXBlbmRpbmd7YmFja2dyb3VuZDpyZ2JhKDQ2LDE2MCw2NywuMTYpO2JvcmRlci1yYWRpdXM6OTk5cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLXN1Y2Nlc3MtcHJpbWFyeSk7ZmxleDpub25lO2ZvbnQtc2l6ZToxMXB4O3BhZGRpbmc6MXB4IDhweH1cbi5kc2hjZmctY2FyZXR7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtmbGV4Om5vbmU7Zm9udC1zaXplOjEwcHh9XG4uZHNoY2ZnLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTJweDtwYWRkaW5nOjRweCAxMnB4IDEycHh9XG4uZHNoY2ZnLWZpZWxke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjRweH1cbi5kc2hjZmctbGFiZWx7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXNlY29uZGFyeSk7Zm9udC1zaXplOjEycHh9XG4uZHNoY2ZnLWhpbnR7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLWNhcHRpb24pO2ZvbnQtc2l6ZToxMXB4fVxuLmRzaGNmZy1hY3Rpb25ze2Rpc3BsYXk6ZmxleDtnYXA6OHB4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1cbmBcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtcGx1Z2luLWNzcz0ke0pTT04uc3RyaW5naWZ5KFNUWUxFX1RBRyl9XWApID09PSBudWxsKSB7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgdGFnLmRhdGFzZXQucGx1Z2luID0gJ2RzaC1wbHVnaW4tY29sb3JzY2hlbWUnXG4gIHRhZy5kYXRhc2V0LnBsdWdpbkNzcyA9IFNUWUxFX1RBR1xuICB0YWcudGV4dENvbnRlbnQgPSBST1dfQ1NTXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGFnKVxufVxuXG4vKiogU2ltcGxpZmllZCBDaGluZXNlIGRpY3Rpb25hcnkgKGtleS1zZXQgc291cmNlIG9mIHRydXRoKS4gKi9cbmNvbnN0IHpoID0ge1xuICAnY29sb3JzY2hlbWUudGl0bGUnOiAnXHU5MTREXHU4MjcyXHU2NUI5XHU2ODQ4JyxcbiAgJ2NvbG9yc2NoZW1lLmRlZmF1bHQnOiAnXHU4RERGXHU5NjhGXHU1OTE2XHU4OUMyJyxcbiAgJ2NvbG9yc2NoZW1lLmxvYWRFcnJvcic6ICdcdTkxNERcdTgyNzJcdTY1QjlcdTY4NDhcdTUyQTBcdThGN0RcdTU5MzFcdThEMjUnLFxuICAnY29sb3JzY2hlbWUuYWRkJzogJ1x1NjVCMFx1NTg5RVx1NEUzQlx1OTg5OCcsXG4gICdjb2xvcnNjaGVtZS5hZGRUaXRsZSc6ICdcdTY1QjBcdTU4OUVcdTgxRUFcdTVCOUFcdTRFNDlcdTRFM0JcdTk4OTgnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuaWQnOiAnXHU2ODA3XHU4QkM2IChpZCknLFxuICAnY29sb3JzY2hlbWUuZmllbGQubmFtZSc6ICdcdTU0MERcdTc5RjAnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lJzogJ1x1NkEyMVx1NUYwRicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUuZGFyayc6ICdcdTZERjFcdTgyNzInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmxpZ2h0JzogJ1x1NkQ0NVx1ODI3MicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5iZyc6ICdcdTgwQ0NcdTY2NkYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZmcnOiAnXHU2NTg3XHU1QjU3JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFjY2VudCc6ICdcdTVGM0FcdThDMDNcdTgyNzInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYWR2YW5jZWQnOiAnXHU5QUQ4XHU3RUE3XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmVsZXZhdGVkJzogJ1x1NkQ2RVx1OEQ3N1x1ODg2OFx1OTc2MicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zaWRlYmFyJzogJ1x1NEZBN1x1NjgwRicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zdWNjZXNzJzogJ1x1NjIxMFx1NTI5RicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lcnJvcic6ICdcdTk1MTlcdThCRUYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQud2Fybic6ICdcdThCNjZcdTU0NEEnLFxuICAnY29sb3JzY2hlbWUuc2F2ZSc6ICdcdTRGRERcdTVCNTgnLFxuICAnY29sb3JzY2hlbWUuY2FuY2VsJzogJ1x1NTNENlx1NkQ4OCcsXG4gICdjb2xvcnNjaGVtZS5hZGRFcnJvcic6ICdcdTRGRERcdTVCNThcdTU5MzFcdThEMjUnLFxuICAnY29sb3JzY2hlbWUuZGVsZXRlJzogJ1x1NTIyMFx1OTY2NCcsXG4gICdjb2xvcnNjaGVtZS5jb25maXJtRGVsZXRlJzogJ1x1NTE4RFx1NkIyMVx1NzBCOVx1NTFGQlx1Nzg2RVx1OEJBNFx1NTIyMFx1OTY2NCcsXG4gICdjb25maWcudGl0bGUnOiAnXHU5MTREXHU3RjZFJyxcbiAgJ2NvbmZpZy50aGVtZXNEaXInOiAnXHU0RTNCXHU5ODk4XHU3NkVFXHU1RjU1JyxcbiAgJ2NvbmZpZy50aGVtZXNEaXJIaW50JzogJ1x1NzUyOFx1NjIzN1x1NEUzQlx1OTg5OCBKU09OIFx1NjU4N1x1NEVGNlx1NzY4NFx1NzZFRVx1NUY1NVx1RkYwOFx1NzU1OVx1N0E3QSA9IFx1OUVEOFx1OEJBNCB+Ly5kc2gvdGhlbWVzXHVGRjA5JyxcbiAgJ2NvbmZpZy5kZWZhdWx0VGhlbWUnOiAnXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4JyxcbiAgJ2NvbmZpZy5kZWZhdWx0VGhlbWVIaW50JzogJ1x1NjcyQVx1NjI0Qlx1NTJBOFx1OTAwOVx1NjJFOVx1NjVGNlx1NUU5NFx1NzUyOFx1NzY4NFx1NEUzQlx1OTg5OCBpZFx1RkYwOFx1NzU1OVx1N0E3QSA9IFx1OERERlx1OTY4Rlx1NTkxNlx1ODlDMlx1RkYwOScsXG4gICdjb25maWcuc2F2ZSc6ICdcdTRGRERcdTVCNTgnLFxuICAnY29uZmlnLmRpc2NhcmQnOiAnXHU2MDYyXHU1OTBEXHU5RUQ4XHU4QkE0JyxcbiAgJ2NvbmZpZy51bnNhdmVkJzogJ1x1NjcyQVx1NEZERFx1NUI1OCcsXG4gICdjb25maWcuc2F2ZUZhaWxlZCc6ICdcdTRGRERcdTVCNThcdTU5MzFcdThEMjUnLFxufSBhcyBjb25zdFxuXG4vKiogRW5nbGlzaCBkaWN0aW9uYXJ5LCBjaGVja2VkIGNvbXBsZXRlIGFnYWluc3QgdGhlIHpoIGtleSBzZXQuICovXG5jb25zdCBlbjogUmVjb3JkPGtleW9mIHR5cGVvZiB6aCwgc3RyaW5nPiA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ0NvbG9yc2NoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmRlZmF1bHQnOiAnRm9sbG93IGFwcGVhcmFuY2UnLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ0ZhaWxlZCB0byBsb2FkIGNvbG9yc2NoZW1lcycsXG4gICdjb2xvcnNjaGVtZS5hZGQnOiAnQWRkIHRoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZFRpdGxlJzogJ05ldyBjdXN0b20gdGhlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuaWQnOiAnSUQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQubmFtZSc6ICdOYW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdTY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnRGFyaycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUubGlnaHQnOiAnTGlnaHQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnQmFja2dyb3VuZCcsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5mZyc6ICdGb3JlZ3JvdW5kJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFjY2VudCc6ICdBY2NlbnQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYWR2YW5jZWQnOiAnQWR2YW5jZWQgKG9wdGlvbmFsKScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdFbGV2YXRlZCBzdXJmYWNlJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNpZGViYXInOiAnU2lkZWJhcicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zdWNjZXNzJzogJ1N1Y2Nlc3MnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnRXJyb3InLFxuICAnY29sb3JzY2hlbWUuZmllbGQud2Fybic6ICdXYXJuaW5nJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnU2F2ZScsXG4gICdjb2xvcnNjaGVtZS5jYW5jZWwnOiAnQ2FuY2VsJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZEVycm9yJzogJ0ZhaWxlZCB0byBzYXZlJyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdEZWxldGUnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdDbGljayBhZ2FpbiB0byBjb25maXJtIGRlbGV0ZScsXG4gICdjb25maWcudGl0bGUnOiAnQ29uZmlndXJhdGlvbicsXG4gICdjb25maWcudGhlbWVzRGlyJzogJ1RoZW1lcyBkaXJlY3RvcnknLFxuICAnY29uZmlnLnRoZW1lc0RpckhpbnQnOiAnRGlyZWN0b3J5IGZvciB1c2VyIHRoZW1lIEpTT04gZmlsZXMgKGVtcHR5ID0gZGVmYXVsdCB+Ly5kc2gvdGhlbWVzKScsXG4gICdjb25maWcuZGVmYXVsdFRoZW1lJzogJ0RlZmF1bHQgdGhlbWUnLFxuICAnY29uZmlnLmRlZmF1bHRUaGVtZUhpbnQnOiAnVGhlbWUgaWQgYXBwbGllZCB3aGVuIG5vbmUgaXMgY2hvc2VuIChlbXB0eSA9IGZvbGxvdyBhcHBlYXJhbmNlKScsXG4gICdjb25maWcuc2F2ZSc6ICdTYXZlJyxcbiAgJ2NvbmZpZy5kaXNjYXJkJzogJ1Jlc2V0JyxcbiAgJ2NvbmZpZy51bnNhdmVkJzogJ1Vuc2F2ZWQnLFxuICAnY29uZmlnLnNhdmVGYWlsZWQnOiAnU2F2ZSBmYWlsZWQnLFxufVxuXG4vKiogUm93IGRpc3BsYXkgbW9kZWw6IGlkLCBuYW1lLCBhbmQgdGhyZWUgc2FtcGxlIGNvbG9ycyAoYmcgLyBmZyAvIGFjY2VudCkuICovXG5pbnRlcmZhY2UgUm93VGhlbWUge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb2xvclNjaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJ1xuICBzYW1wbGVzOiBzdHJpbmdbXVxufVxuXG5pbnRlcmZhY2UgUm93U3RhdGUge1xuICBzZWxlY3Rpb246IHN0cmluZ1xuICByZXZpc2lvbjogbnVtYmVyXG4gIHRoZW1lczogUm93VGhlbWVbXVxuICAvKiogVGhlbWUgaWRzIHRoYXQgbGl2ZSBpbiB0aGUgdGhlbWVzIGRpcmVjdG9yeSBhbmQgY2FuIGJlIGRlbGV0ZWQgaW4tYXBwLiAqL1xuICBkZWxldGFibGU6IHN0cmluZ1tdXG4gIGVycm9yOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93U3RvcmUoKSB7XG4gIHJldHVybiBkZWZpbmVTdG9yZSh7XG4gICAgaW5pdDogKCk6IFJvd1N0YXRlID0+ICh7IHNlbGVjdGlvbjogREVGQVVMVF9JRCwgcmV2aXNpb246IC0xLCB0aGVtZXM6IFtdLCBkZWxldGFibGU6IFtdLCBlcnJvcjogJycgfSksXG4gICAgYWN0aW9uczoge1xuICAgICAgc3luYzogKGQ6IFJvd1N0YXRlLCBzZWxlY3Rpb246IHN0cmluZywgcmV2aXNpb246IG51bWJlciwgdGhlbWVzOiBSb3dUaGVtZVtdLCBkZWxldGFibGU6IHN0cmluZ1tdLCBlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChyZXZpc2lvbiA8PSBkLnJldmlzaW9uKSByZXR1cm5cbiAgICAgICAgZC5zZWxlY3Rpb24gPSBzZWxlY3Rpb25cbiAgICAgICAgZC5yZXZpc2lvbiA9IHJldmlzaW9uXG4gICAgICAgIGQudGhlbWVzID0gdGhlbWVzXG4gICAgICAgIGQuZGVsZXRhYmxlID0gZGVsZXRhYmxlXG4gICAgICAgIGQuZXJyb3IgPSBlcnJvclxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuXG5mdW5jdGlvbiB0b1Jvd1RoZW1lcyhzbmFwc2hvdDogVGhlbWVTbmFwc2hvdCwgbmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBSb3dUaGVtZVtdIHtcbiAgcmV0dXJuIHNuYXBzaG90LnRoZW1lc1xuICAgIC8vIFRoZSBidWlsdC1pbiBsaWdodC9kYXJrIHBhaXIgaXMgb3duZWQgYnkgdGhlIEFwcGVhcmFuY2Ugcm93IGFib3ZlLlxuICAgIC5maWx0ZXIoKHQpID0+IHQuaWQgIT09ICdsaWdodCcgJiYgdC5pZCAhPT0gJ2RhcmsnKVxuICAgIC5tYXAoKHQpID0+ICh7XG4gICAgICBpZDogdC5pZCxcbiAgICAgIG5hbWU6IG5hbWVzW3QuaWRdID8/IHQuaWQsXG4gICAgICBjb2xvclNjaGVtZTogdC5jb2xvclNjaGVtZSxcbiAgICAgIHNhbXBsZXM6IFtcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWJnLWJhc2UnXSA/PyAnJyxcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnknXSA/PyAnJyxcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnknXSA/PyAnJyxcbiAgICAgIF0sXG4gICAgfSkpXG59XG5cbi8qKiBUaGUgQ29sb3JzY2hlbWUgcGlja2VyIHRhYiBjb250ZW50IChTZXR0aW5ncyBcdTIxOTIgUGx1Z2lucykuICovXG5mdW5jdGlvbiBDb2xvcnNjaGVtZVJvdyhwcm9wczoge1xuICB0OiAoa2V5OiBrZXlvZiB0eXBlb2YgemgpID0+IHN0cmluZ1xuICB1c2VTdG9yZTogPFM+KHNlbGVjdG9yOiAoczogUm93U3RhdGUpID0+IFMpID0+IFNcbiAgc2V0VGhlbWU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIHJlbG9hZENhdGFsb2c6ICgpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgeyB0LCB1c2VTdG9yZSwgc2V0VGhlbWUsIHJlbG9hZENhdGFsb2cgfSA9IHByb3BzXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHVzZVN0b3JlKChzKSA9PiBzLnNlbGVjdGlvbilcbiAgY29uc3QgdGhlbWVzID0gdXNlU3RvcmUoKHMpID0+IHMudGhlbWVzKVxuICBjb25zdCBkZWxldGFibGUgPSB1c2VTdG9yZSgocykgPT4gcy5kZWxldGFibGUpXG4gIGNvbnN0IGVycm9yID0gdXNlU3RvcmUoKHMpID0+IHMuZXJyb3IpXG5cbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb25maXJtRGVsZXRlLCBzZXRDb25maXJtRGVsZXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGNvbG9yU2NoZW1lOiAnZGFyaycgYXMgJ2xpZ2h0JyB8ICdkYXJrJyxcbiAgICBiZzogJyMxZTFlMmUnLFxuICAgIGZnOiAnI2NkZDZmNCcsXG4gICAgYWNjZW50OiAnI2NiYTZmNycsXG4gICAgYmdFbGV2YXRlZDogJyMxODE4MjUnLFxuICAgIGJnU2lkZWJhcjogJyMxODE4MjUnLFxuICAgIHN1Y2Nlc3M6ICcjYTZlM2ExJyxcbiAgICBlcnJvcjogJyNmMzhiYTgnLFxuICAgIHdhcm46ICcjZjllMmFmJyxcbiAgfSlcbiAgY29uc3Qgc2V0RmllbGQgPSAoa2V5OiBrZXlvZiB0eXBlb2YgZmllbGRzKSA9PiAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgIHNldEZpZWxkcygoZikgPT4gKHsgLi4uZiwgW2tleV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSlcblxuICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gZmllbGRzLmlkLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKVxuICAgIGlmICghaWQpIHtcbiAgICAgIHNldEZvcm1FcnJvcih0KCdjb2xvcnNjaGVtZS5maWVsZC5pZCcpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFNhdmluZyh0cnVlKVxuICAgIHNldEZvcm1FcnJvcignJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYWN0aW9uOiAnYWRkLXRoZW1lJyxcbiAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lOiBmaWVsZHMubmFtZS50cmltKCkgfHwgaWQsXG4gICAgICAgICAgICBjb2xvclNjaGVtZTogZmllbGRzLmNvbG9yU2NoZW1lLFxuICAgICAgICAgICAgcm9sZXM6IHtcbiAgICAgICAgICAgICAgYmc6IGZpZWxkcy5iZyxcbiAgICAgICAgICAgICAgZmc6IGZpZWxkcy5mZyxcbiAgICAgICAgICAgICAgYWNjZW50OiBmaWVsZHMuYWNjZW50LFxuICAgICAgICAgICAgICBiZ0VsZXZhdGVkOiBmaWVsZHMuYmdFbGV2YXRlZCxcbiAgICAgICAgICAgICAgYmdTaWRlYmFyOiBmaWVsZHMuYmdTaWRlYmFyLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmaWVsZHMuc3VjY2VzcyxcbiAgICAgICAgICAgICAgZXJyb3I6IGZpZWxkcy5lcnJvcixcbiAgICAgICAgICAgICAgd2FybjogZmllbGRzLndhcm4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+ICh7IG9rOiBmYWxzZSwgZXJyb3I6ICdpbnZhbGlkIHJlc3BvbnNlJyB9KSkpIGFzIHsgb2s6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH1cbiAgICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpXG4gICAgICAgIHNldEZpZWxkcygoZikgPT4gKHsgLi4uZiwgaWQ6ICcnLCBuYW1lOiAnJyB9KSlcbiAgICAgICAgcmVsb2FkQ2F0YWxvZygpXG4gICAgICAgIHNldFRoZW1lKGlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Rm9ybUVycm9yKHJlc3VsdC5lcnJvciA/PyB0KCdjb2xvcnNjaGVtZS5hZGRFcnJvcicpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldEZvcm1FcnJvcihlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiB0KCdjb2xvcnNjaGVtZS5hZGRFcnJvcicpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY29uZmlybURlbGV0ZSAhPT0gaWQpIHtcbiAgICAgIHNldENvbmZpcm1EZWxldGUoaWQpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvbmZpcm1EZWxldGUoKGMpID0+IChjID09PSBpZCA/IG51bGwgOiBjKSksIDI1MDApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0Q29uZmlybURlbGV0ZShudWxsKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uOiAncmVtb3ZlLXRoZW1lJywgaWQgfSksXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgb2s6IGZhbHNlLCBlcnJvcjogJ2ludmFsaWQgcmVzcG9uc2UnIH0pKSkgYXMgeyBvazogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfVxuICAgICAgaWYgKCFyZXN1bHQub2spIHNldEZvcm1FcnJvcihyZXN1bHQuZXJyb3IgPz8gdCgnY29sb3JzY2hlbWUuYWRkRXJyb3InKSlcbiAgICAgIHJlbG9hZENhdGFsb2coKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldEZvcm1FcnJvcihlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiB0KCdjb2xvcnNjaGVtZS5hZGRFcnJvcicpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoaXBzID0gW1xuICAgIHsgaWQ6IERFRkFVTFRfSUQsIGxhYmVsOiB0KCdjb2xvcnNjaGVtZS5kZWZhdWx0JyksIHNhbXBsZXM6IFtdIGFzIHN0cmluZ1tdIH0sXG4gICAgLi4udGhlbWVzLm1hcCgodGgpID0+ICh7IGlkOiB0aC5pZCwgbGFiZWw6IHRoLm5hbWUsIHNhbXBsZXM6IHRoLnNhbXBsZXMgfSkpLFxuICBdXG5cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbDogc3RyaW5nLCBrZXk6IGtleW9mIHR5cGVvZiBmaWVsZHMpID0+IChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGRcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWxhYmVsXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBjbGFzc05hbWU9XCJkc2hjcy1jb2xvclwiIHZhbHVlPXtmaWVsZHNba2V5XSBhcyBzdHJpbmd9IG9uQ2hhbmdlPXtzZXRGaWVsZChrZXkpfSAvPlxuICAgIDwvbGFiZWw+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3Mtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLXRpdGxlLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLXRpdGxlXCI+e3QoJ2NvbG9yc2NoZW1lLnRpdGxlJyl9PC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1idG5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dGb3JtKCh2KSA9PiAhdilcbiAgICAgICAgICAgIHNldEZvcm1FcnJvcignJylcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2NvbG9yc2NoZW1lLmFkZCcpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1lcnJvclwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1ncmlkXCI+XG4gICAgICAgIHtjaGlwcy5tYXAoKGNoaXApID0+IHtcbiAgICAgICAgICBjb25zdCBpc0RlbGV0YWJsZSA9IGRlbGV0YWJsZS5pbmNsdWRlcyhjaGlwLmlkKVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2NoaXAuaWR9IGNsYXNzTmFtZT1cImRzaGNzLWNoaXAtd3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1jaGlwXCIgYXJpYS1wcmVzc2VkPXtzZWxlY3Rpb24gPT09IGNoaXAuaWR9IG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKGNoaXAuaWQpfT5cbiAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLmxlbmd0aCA9PT0gMyA/IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWRvdHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaXAuc2FtcGxlcy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cImRzaGNzLWRvdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90IGRzaGNzLWRvdC1kZWZhdWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtjaGlwLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge2lzRGVsZXRhYmxlID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHNoY3MtZGVsJHtjb25maXJtRGVsZXRlID09PSBjaGlwLmlkID8gJyBkc2hjcy1kZWwtY29uZmlybScgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ2NvbG9yc2NoZW1lLmRlbGV0ZScpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCByZW1vdmUoY2hpcC5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbmZpcm1EZWxldGUgPT09IGNoaXAuaWQgPyB0KCdjb2xvcnNjaGVtZS5jb25maXJtRGVsZXRlJykgOiAnXHUyNzE1J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dGb3JtID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWZvcm0tdGl0bGVcIj57dCgnY29sb3JzY2hlbWUuYWRkVGl0bGUnKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWZvcm0tZ3JpZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWxhYmVsXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZHNoY3MtaW5wdXRcIiB2YWx1ZT17ZmllbGRzLmlkfSBvbkNoYW5nZT17c2V0RmllbGQoJ2lkJyl9IHBsYWNlaG9sZGVyPVwibXktdGhlbWVcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1sYWJlbFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5uYW1lJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZHNoY3MtaW5wdXRcIiB2YWx1ZT17ZmllbGRzLm5hbWV9IG9uQ2hhbmdlPXtzZXRGaWVsZCgnbmFtZScpfSBwbGFjZWhvbGRlcj1cIk15IFRoZW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHNoY3MtaW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZHMuY29sb3JTY2hlbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWVsZHMoKGYpID0+ICh7IC4uLmYsIGNvbG9yU2NoZW1lOiBlLnRhcmdldC52YWx1ZSBhcyAnbGlnaHQnIHwgJ2RhcmsnIH0pKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5kYXJrJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5saWdodCcpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5iZycpLCAnYmcnKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmZnJyksICdmZycpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuYWNjZW50JyksICdhY2NlbnQnKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtYWR2YW5jZWRcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuYWR2YW5jZWQnKX08L2Rpdj5cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmVsZXZhdGVkJyksICdiZ0VsZXZhdGVkJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5zaWRlYmFyJyksICdiZ1NpZGViYXInKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLnN1Y2Nlc3MnKSwgJ3N1Y2Nlc3MnKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmVycm9yJyksICdlcnJvcicpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQud2FybicpLCAnd2FybicpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtmb3JtRXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWVycm9yXCI+e2Zvcm1FcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1idG4gZHNoY3MtYnRuLXByaW1hcnlcIiBkaXNhYmxlZD17c2F2aW5nfSBvbkNsaWNrPXsoKSA9PiB2b2lkIHNhdmUoKX0+XG4gICAgICAgICAgICAgIHt0KCdjb2xvcnNjaGVtZS5zYXZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0blwiIGRpc2FibGVkPXtzYXZpbmd9IG9uQ2xpY2s9eygpID0+IHNldFNob3dGb3JtKGZhbHNlKX0+XG4gICAgICAgICAgICAgIHt0KCdjb2xvcnNjaGVtZS5jYW5jZWwnKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8qKiBDb25maWcgY2FyZCBmb3IgdGhlIFBsdWdpbnMgY29uZmlndXJhdGlvbiB0YWIgKFNldHRpbmdzIFx1MjE5MiBQbHVnaW5zIFx1MjE5MiBcdTUzRUZcdTkxNERcdTdGNkUpLiAqL1xuZnVuY3Rpb24gQ29sb3JzY2hlbWVDb25maWdDYXJkKHsgdCB9OiB7IHQ6IChrZXk6IGtleW9mIHR5cGVvZiB6aCkgPT4gc3RyaW5nIH0pIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSB1c2VTdGF0ZTx7IHRoZW1lc0Rpcjogc3RyaW5nOyBkZWZhdWx0VGhlbWU6IHN0cmluZyB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSh7IHRoZW1lc0RpcjogJycsIGRlZmF1bHRUaGVtZTogJycgfSlcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZmFpbGVkLCBzZXRGYWlsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gICAgICBjb25zdCBjYXRhbG9nID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xuICAgICAgY29uc3QgbmV4dCA9IHsgdGhlbWVzRGlyOiBjYXRhbG9nLnRoZW1lc0RpciwgZGVmYXVsdFRoZW1lOiBjYXRhbG9nLmRlZmF1bHRUaGVtZSB9XG4gICAgICBzZXRDb25maWcobmV4dClcbiAgICAgIHNldERyYWZ0KG5leHQpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBrZWVwIGxhc3Qga25vd24gc3RhdGVcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB2b2lkIGxvYWQoKVxuICB9LCBbb3Blbl0pXG5cbiAgY29uc3QgZGlydHkgPSBjb25maWcgIT09IG51bGwgJiYgKGRyYWZ0LnRoZW1lc0RpciAhPT0gY29uZmlnLnRoZW1lc0RpciB8fCBkcmFmdC5kZWZhdWx0VGhlbWUgIT09IGNvbmZpZy5kZWZhdWx0VGhlbWUpXG5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jIChjbGVhcjogYm9vbGVhbikgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKVxuICAgIHNldEZhaWxlZChmYWxzZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjbGVhciA/IHsgYWN0aW9uOiAnc2V0LWNvbmZpZycsIGNvbmZpZzoge30gfSA6IHsgYWN0aW9uOiAnc2V0LWNvbmZpZycsIGNvbmZpZzogZHJhZnQgfSksXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgb2s6IGZhbHNlIH0pKSkgYXMgeyBvazogYm9vbGVhbiB9XG4gICAgICBpZiAoIXJlc3VsdC5vaykgc2V0RmFpbGVkKHRydWUpXG4gICAgICBhd2FpdCBsb2FkKClcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEZhaWxlZCh0cnVlKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiZHNoY2ZnLWNhcmRcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNmZy1oZWFkXCIgYXJpYS1leHBhbmRlZD17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbigodikgPT4gIXYpfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLW5hbWVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNmZy1kZXNjXCI+e3QoJ2NvbmZpZy50aXRsZScpfTwvc3Bhbj5cbiAgICAgICAge2RpcnR5ID8gPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLXBlbmRpbmdcIj57dCgnY29uZmlnLnVuc2F2ZWQnKX08L3NwYW4+IDogbnVsbH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLWNhcmV0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+e29wZW4gPyAnXHUyNUJFJyA6ICdcdTI1QjgnfTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge29wZW4gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY2ZnLWJvZHlcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY2ZnLWZpZWxkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctbGFiZWxcIj57dCgnY29uZmlnLnRoZW1lc0RpcicpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkcmFmdC50aGVtZXNEaXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwifi8uZHNoL3RoZW1lc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIHRoZW1lc0RpcjogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNmZy1oaW50XCI+e3QoJ2NvbmZpZy50aGVtZXNEaXJIaW50Jyl9PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNmZy1maWVsZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLWxhYmVsXCI+e3QoJ2NvbmZpZy5kZWZhdWx0VGhlbWUnKX08L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHNoY3MtaW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZHJhZnQuZGVmYXVsdFRoZW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRyYWN1bGFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERyYWZ0KChkKSA9PiAoeyAuLi5kLCBkZWZhdWx0VGhlbWU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctaGludFwiPnt0KCdjb25maWcuZGVmYXVsdFRoZW1lSGludCcpfTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHtmYWlsZWQgPyA8cCBjbGFzc05hbWU9XCJkc2hjcy1lcnJvclwiIHJvbGU9XCJzdGF0dXNcIj57dCgnY29uZmlnLnNhdmVGYWlsZWQnKX08L3A+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNmZy1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1idG5cIiBkaXNhYmxlZD17IWRpcnR5IHx8IHNhdmluZ30gb25DbGljaz17KCkgPT4gdm9pZCBzYXZlKHRydWUpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5kaXNjYXJkJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0biBkc2hjcy1idG4tcHJpbWFyeVwiIGRpc2FibGVkPXshZGlydHkgfHwgc2F2aW5nfSBvbkNsaWNrPXsoKSA9PiB2b2lkIHNhdmUoZmFsc2UpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5zYXZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2xpPlxuICApXG59XG5cbi8qKiBGZXRjaCB0aGUgc2VydmVyLXNpZGUgdGhlbWUgY2F0YWxvZyBvbmNlLiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENhdGFsb2coKTogUHJvbWlzZTxUaGVtZUNhdGFsb2c+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYGNhdGFsb2cgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzLnN0YXR1c31gKVxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xufVxuXG4vKiogQ2xpZW50IHBsdWdpbiBib2R5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGN0eDogQ2xpZW50Q29udGV4dCk6IHZvaWQge1xuICBjb25zdCB0aGVtZSA9IGN0eC50aGVtZVxuICAvLyBUaGUgQXBwZWFyYW5jZSByb3cncyBkdXJhYmxlIHByZWZlcmVuY2UgKGxpZ2h0L2Rhcmsvc3lzdGVtKSBcdTIwMTQgdGhlIHRhcmdldFxuICAvLyBvZiBcIlx1OERERlx1OTY4Rlx1NTkxNlx1ODlDMiAvIEZvbGxvdyBhcHBlYXJhbmNlXCIuXG4gIGNvbnN0IGFwcGVhcmFuY2VTY29wZSA9IGN0eC5zZXR0aW5nc1Njb3BlLmJpbmQoeyBuYW1lc3BhY2U6IFRIRU1FX05TIH0pXG4gIGNvbnN0IG5hbWVCeUlkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgY29uc3QgZGlzcG9zZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdXG5cbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyB6aCwgZW4gfSksICdjb2xvcnNjaGVtZTogbG9jYWxlIGRpY3Rpb25hcnknKVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlUm93U3RvcmUoKVxuICBsZXQgYm91bmQ6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSB8IHVuZGVmaW5lZFxuICAvKiogUGVyc2lzdGVkL2Rlc2lyZWQgY29sb3JzY2hlbWUgaWQgKCcnID0gZm9sbG93IHRoZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UpLiAqL1xuICBsZXQgc2VsZWN0aW9uID0gREVGQVVMVF9JRFxuICBsZXQgcmV2aXNpb24gPSAtMVxuICAvKiogVGhlbWUgaWRzIGZyb20gdGhlIHRoZW1lcyBkaXJlY3RvcnkgKGRlbGV0YWJsZSBpbi1hcHApLiAqL1xuICBsZXQgZGVsZXRhYmxlSWRzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLyoqXG4gICAqIFByZXNlbnRlciBtaXJyb3IuIFRoZSBvZmZpY2lhbCB1aS1sYXlvdXQgcHJlc2VudGVyIGFwcGxpZXMgdGhlIHJlc29sdmVkXG4gICAqIHRoZW1lIHRvIDxib2R5PiBidXQgaXRzIGV2ZW50IGRlbGl2ZXJ5IGZyb20gdGhpcyBmaWJlciBpcyB1bnJlbGlhYmxlIGF0XG4gICAqIGxvYWQgKHRoZSB0aGVtZSBzZXJ2aWNlIGFsc28gYXN5bmNocm9ub3VzbHkgYWRvcHRzIHRoZSBkdXJhYmxlIHVpLXRoZW1lXG4gICAqIHByZWZlcmVuY2UsIGZsaXBwaW5nIHRoZSBwYWxldHRlIGJhY2spLiBUaGlzIHBsdWdpbiB0aGVyZWZvcmUgYXBwbGllcyB0aGVcbiAgICogYWN0aXZlIHRoZW1lJ3MgdG9rZW5zIGl0c2VsZiwgYW5kIHJlLWFzc2VydHMgdGhlIHBlcnNpc3RlZCBzZWxlY3Rpb24gZm9yXG4gICAqIGEgYm91bmRlZCBsb2FkIHdpbmRvdy4gSWRlbXBvdGVudCB3aXRoIHRoZSBvZmZpY2lhbCBwcmVzZW50ZXIgXHUyMDE0IHNhbWVcbiAgICogdmFsdWVzLCBzYW1lIHRhcmdldHMuXG4gICAqL1xuICBjb25zdCBhcHBsaWVkVG9rZW5zOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGFwcGx5QWN0aXZlVG9rZW5zID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoZW1lLmdldFRoZW1lKCkuYWN0aXZlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNvbG9yU2NoZW1lID0gYWN0aXZlLmNvbG9yU2NoZW1lXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICBpZiAoYWN0aXZlLmNvbG9yU2NoZW1lID09PSAnZGFyaycpIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnLCAnJylcbiAgICBlbHNlIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnKVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBhcHBsaWVkVG9rZW5zKSBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpXG4gICAgYXBwbGllZFRva2Vucy5sZW5ndGggPSAwXG4gICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFjdGl2ZS50b2tlbnMpKSB7XG4gICAgICBib2R5LnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKVxuICAgICAgYXBwbGllZFRva2Vucy5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSByb3cgaGlnaGxpZ2h0cyB0aGUgdGhlbWUgdGhlIHNlcnZpY2UgYWN0dWFsbHkgcmVzb2x2ZWQuICovXG4gIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcmVmID0gdGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlXG4gICAgcmV0dXJuIHByZWYgPT09ICdsaWdodCcgfHwgcHJlZiA9PT0gJ2RhcmsnIHx8IHByZWYgPT09ICdzeXN0ZW0nID8gREVGQVVMVF9JRCA6IHByZWZcbiAgfVxuXG4gIGNvbnN0IHB1Ymxpc2hSb3cgPSAoZXJyb3IgPSAnJykgPT4ge1xuICAgIGlmICghYm91bmQpIHJldHVyblxuICAgIGJvdW5kLnN5bmMoYWN0aXZlU2VsZWN0aW9uKCksIHJldmlzaW9uLCB0b1Jvd1RoZW1lcyh0aGVtZS5nZXRUaGVtZSgpLCBuYW1lQnlJZCksIGRlbGV0YWJsZUlkcywgZXJyb3IpXG4gIH1cblxuICAvKiogUGVyc2lzdCB0aGUgcGlja2VyIHNlbGVjdGlvbiB0aHJvdWdoIHRoZSBjYXRhbG9nIHJvdXRlIChzZXJ2ZXItc2lkZSkuICovXG4gIGNvbnN0IHNhdmVTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHZvaWQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGlvbjogaWQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCByZXMuc3RhdHVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4gY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIGUpKVxuICB9XG5cbiAgLyoqIFJldmVydCB0byB0aGUgZHVyYWJsZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UgKGxpZ2h0IC8gZGFyayAvIHN5c3RlbSkuICovXG4gIGNvbnN0IGZvbGxvd0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhcHBlYXJhbmNlU2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHByZWZlcmVuY2U/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHByZWYgPSB2YWx1ZT8ucHJlZmVyZW5jZVxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShwcmVmID09PSAnbGlnaHQnIHx8IHByZWYgPT09ICdkYXJrJyB8fCBwcmVmID09PSAnc3lzdGVtJyA/IHByZWYgOiAnc3lzdGVtJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHJlZ2lzdHJ5IG5vdCByZWFkeSBcdTIwMTQgZmFsbHMgYmFjayBvbiBuZXh0IGxvYWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmUtYXNzZXJ0IHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uIGZvciBhIGJvdW5kZWQgbG9hZCB3aW5kb3cuIFRoZSB0aGVtZVxuICAgKiBzZXJ2aWNlIGFzeW5jaHJvbm91c2x5IGFkb3B0cyB0aGUgZHVyYWJsZSB1aS10aGVtZSBwcmVmZXJlbmNlIGFmdGVyIHdlXG4gICAqIHJlc3RvcmUsIGFuZCBldmVudCBkZWxpdmVyeSBmcm9tIHRoaXMgZmliZXIgdG8gdGhlIG9mZmljaWFsIHByZXNlbnRlciBpc1xuICAgKiB1bnJlbGlhYmxlIFx1MjAxNCBzbyB3aGlsZSB0aGUgd2luZG93IGlzIG9wZW4gd2Uga2VlcCBwdXNoaW5nIG91ciBzZWxlY3Rpb25cbiAgICogKGFuZCBhcHBseWluZyBpdHMgdG9rZW5zKSB1bnRpbCB0aGUgd2luZG93IGNsb3Nlcy4gTmV2ZXIgZmlnaHRzIGxhdGVyXG4gICAqIHVzZXIgYWN0aW9uczogdGhlIHdpbmRvdyBvbmx5IHNwYW5zIHRoZSBsb2FkLXRpbWUgYWRvcHRpb24uXG4gICAqL1xuICBsZXQgZW5mb3JjZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCB1bmRlZmluZWRcbiAgY29uc3Qgc3RvcEVuZm9yY2UgPSAoKSA9PiB7XG4gICAgaWYgKGVuZm9yY2VUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbmZvcmNlVGltZXIpXG4gICAgICBlbmZvcmNlVGltZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgY29uc3QgZW5mb3JjZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBERUZBVUxUX0lEKSByZXR1cm5cbiAgICBpZiAodGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW1lLnNldFRoZW1lKHNlbGVjdGlvbilcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBub3QgcmVnaXN0ZXJlZCB5ZXQgXHUyMDE0IHRoZSBuZXh0IHRpY2sgcmV0cmllc1xuICAgICAgfVxuICAgIH1cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gIH1cblxuICAvLyBNaXJyb3IgdGhlIGxpdmUgdGhlbWUgc3RhdGUgaW50byB0aGUgcm93IGFuZCBrZWVwIHRoZSBhY3RpdmUgdG9rZW5zIG9uXG4gIC8vIDxib2R5PiBmb3Igd2hhdGV2ZXIgZXZlbnRzIHRoaXMgZmliZXIgZG9lcyByZWNlaXZlLlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgcHVibGlzaFJvdygpXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShpZClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCAoY2F0YWxvZyBzdGlsbCBsb2FkaW5nKSBcdTIwMTQgdGhlIHNlbGVjdGlvbiBpc1xuICAgICAgLy8gcmUtYXBwbGllZCBvbmNlIHJlZ2lzdHJhdGlvbiBjb21wbGV0ZXMuXG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3AgYWxsIHRoZW1lIHJlZ2lzdHJhdGlvbnMgKHVzZWQgYmVmb3JlIHJlLXJlZ2lzdGVyaW5nIGFmdGVyIGFuIGVkaXQpLiAqL1xuICBjb25zdCBkaXNwb3NlVGhlbWVzID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZGlzcG9zZSBvZiBkaXNwb3NlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpc3Bvc2UoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGFscmVhZHkgZ29uZVxuICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlcnMubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJDYXRhbG9nID0gKGNhdGFsb2c6IFRoZW1lQ2F0YWxvZykgPT4ge1xuICAgIGRpc3Bvc2VUaGVtZXMoKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgWy4uLmNhdGFsb2cucHJlc2V0cywgLi4uY2F0YWxvZy51c2VyVGhlbWVzLCAuLi5jYXRhbG9nLnNldHRpbmdzVGhlbWVzXSkge1xuICAgICAgbmFtZUJ5SWRbZW50cnkuaWRdID0gZW50cnkubmFtZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlzcG9zZSA9IHRoZW1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgY29sb3JTY2hlbWU6IGVudHJ5LmNvbG9yU2NoZW1lLFxuICAgICAgICAgIHRva2VuczogZW50cnkudG9rZW5zID8/IHt9LFxuICAgICAgICB9KVxuICAgICAgICBkaXNwb3NlcnMucHVzaChkaXNwb3NlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHJlZ2lzdGVyIHRoZW1lJywgZW50cnkuaWQsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIGRlbGV0YWJsZUlkcyA9IGNhdGFsb2cudXNlclRoZW1lcy5tYXAoKHQpID0+IHQuaWQpXG4gICAgLy8gUHJlY2VkZW5jZTogcGVyc2lzdGVkIHNlbGVjdGlvbiAoZnJvbSB0aGUgY2F0YWxvZykgPiBjb25maWcgZGVmYXVsdCA+IGZvbGxvdyBhcHBlYXJhbmNlLlxuICAgIGNvbnN0IHNhdmVkID0gY2F0YWxvZy5zZWxlY3Rpb25cbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgIH0gZWxzZSBpZiAoY2F0YWxvZy5kZWZhdWx0VGhlbWUpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGNhdGFsb2cuZGVmYXVsdFRoZW1lXG4gICAgfVxuICAgIGFwcGx5U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gREVGQVVMVF9JRCkge1xuICAgICAgLy8gQ292ZXIgdGhlIGxvYWQtdGltZSBhZG9wdGlvbiBmbGlwcyB3aXRoIGEgYm91bmRlZCByZS1hc3NlcnQgbG9vcC5cbiAgICAgIHN0b3BFbmZvcmNlKClcbiAgICAgIGVuZm9yY2VUaW1lciA9IHNldEludGVydmFsKGVuZm9yY2VTZWxlY3Rpb24sIDQwMClcbiAgICAgIHNldFRpbWVvdXQoc3RvcEVuZm9yY2UsIDUwMDApXG4gICAgfVxuICAgIHJldmlzaW9uID0gdGhlbWUuZ2V0VGhlbWUoKS5yZXZpc2lvblxuICAgIHB1Ymxpc2hSb3coKVxuICB9XG5cbiAgLyoqIFJlLWZldGNoIHRoZSBjYXRhbG9nIGFuZCByZS1yZWdpc3RlciAoYWZ0ZXIgYWRkaW5nL3JlbW92aW5nIGEgdXNlciB0aGVtZSkuICovXG4gIGNvbnN0IHJlbG9hZENhdGFsb2cgPSAoKSA9PiB7XG4gICAgdm9pZCBsb2FkQ2F0YWxvZygpXG4gICAgICAudGhlbihyZWdpc3RlckNhdGFsb2cpXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGNhdGFsb2cgcmVsb2FkIGZhaWxlZCcsIGUpXG4gICAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgICAgfSlcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyBhbmQgYXBwbGllZCB0b2tlbnMgd2hlbiB0aGlzIHBsdWdpbiB1bmxvYWRzXG4gIC8vIChITVIgLyBjb25maWcgZWRpdCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgZGlzcG9zZVRoZW1lcygpXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFwcGxpZWRUb2tlbnMpIGJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSlcbiAgICAgIGFwcGxpZWRUb2tlbnMubGVuZ3RoID0gMFxuICAgIH0sXG4gICAgJ2NvbG9yc2NoZW1lOiB0aGVtZSByZWdpc3RyYXRpb25zJyxcbiAgKVxuXG4gIC8vIFRoZSBDb2xvcnNjaGVtZSBwaWNrZXIgbGl2ZXMgaW4gaXRzIG93biB0YWIgdW5kZXIgXHU4QkJFXHU3RjZFIFx1MjE5MiBcdTYzRDJcdTRFRjYgKG5vdCB0aGVcbiAgLy8gR2VuZXJhbCBzZWN0aW9uLCB3aGljaCBvbmx5IG93bnMgdGhlIGJ1aWx0LWluIEFwcGVhcmFuY2Ugcm93KS5cbiAgY3R4LnNsb3RzLmluamVjdCgnc2V0dGluZ3MucGx1Z2lucy50YWInLCAoKSA9PlxuICAgIGN0eC5zbG90cy5yZWdpc3RlcihcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NldHRpbmdzLnBsdWdpbnMudGFiJyxcbiAgICAgICAgaWQ6ICdjb2xvcnNjaGVtZScsXG4gICAgICAgIG9yZGVyOiAxMCxcbiAgICAgICAgbGFiZWw6ICgpID0+IGN0eC5sb2NhbGUuYmluZChMT0NBTEVfTlMpKCdjb2xvcnNjaGVtZS50aXRsZScpLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgICAgIGluamVjdDogKGFjdGlvbnM6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgICAgIGJvdW5kID0gYWN0aW9uc1xuICAgICAgICAgIHB1Ymxpc2hSb3coKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaWRcbiAgICAgICAgICAgICAgLy8gQSBkZWxpYmVyYXRlIHBpY2sgd2lucyBvdmVyIHRoZSBsb2FkLXRpbWUgZW5mb3JjZW1lbnQgbG9vcC5cbiAgICAgICAgICAgICAgc3RvcEVuZm9yY2UoKVxuICAgICAgICAgICAgICBpZiAoaWQgPT09IERFRkFVTFRfSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBhbmQgZm9yZ2V0IG91clxuICAgICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBjb2xvcnNjaGVtZS5cbiAgICAgICAgICAgICAgICBmb2xsb3dBcHBlYXJhbmNlKClcbiAgICAgICAgICAgICAgICBzYXZlU2VsZWN0aW9uKCcnKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5U2VsZWN0aW9uKGlkKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxvYWRDYXRhbG9nLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBDb2xvcnNjaGVtZVJvdyxcbiAgICApLFxuICApXG5cbiAgLy8gVGhlIGNvbmZpZyBjYXJkIGluc2lkZSBcdThCQkVcdTdGNkUgXHUyMTkyIFx1NjNEMlx1NEVGNiBcdTIxOTIgXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFIChzZXR0aW5ncy5wbHVnaW4uaXRlbSkuXG4gIGN0eC5zbG90cy5pbmplY3QoJ3NldHRpbmdzLnBsdWdpbi5pdGVtJywgKCkgPT5cbiAgICBjdHguc2xvdHMucmVnaXN0ZXIoXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZXR0aW5ncy5wbHVnaW4uaXRlbScsXG4gICAgICAgIGlkOiAnY29sb3JzY2hlbWUtY29uZmlnJyxcbiAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICAgIH0sXG4gICAgICBDb2xvcnNjaGVtZUNvbmZpZ0NhcmQsXG4gICAgKSxcbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBLG1CQUFvQztBQUVwQyxvQkFBNEI7QUFvVHhCO0FBMVNHLElBQU0sT0FBTztBQUdiLElBQU0sU0FBUyxDQUFDLFNBQVMsU0FBUyxVQUFVLGNBQWMsVUFBVSxlQUFlO0FBSTFGLElBQU0sV0FBVztBQUNqQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sWUFBWTtBQUNsQixJQUFNLGFBQWE7QUFNbkIsSUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkNoQixJQUFJLE9BQU8sYUFBYSxlQUFlLFNBQVMsY0FBYyx5QkFBeUIsS0FBSyxVQUFVLFNBQVMsQ0FBQyxHQUFHLE1BQU0sTUFBTTtBQUM3SCxRQUFNLE1BQU0sU0FBUyxjQUFjLE9BQU87QUFDMUMsTUFBSSxRQUFRLFNBQVM7QUFDckIsTUFBSSxRQUFRLFlBQVk7QUFDeEIsTUFBSSxjQUFjO0FBQ2xCLFdBQVMsS0FBSyxZQUFZLEdBQUc7QUFDL0I7QUFHQSxJQUFNLEtBQUs7QUFBQSxFQUNULHFCQUFxQjtBQUFBLEVBQ3JCLHVCQUF1QjtBQUFBLEVBQ3ZCLHlCQUF5QjtBQUFBLEVBQ3pCLG1CQUFtQjtBQUFBLEVBQ25CLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLDBCQUEwQjtBQUFBLEVBQzFCLDRCQUE0QjtBQUFBLEVBQzVCLGlDQUFpQztBQUFBLEVBQ2pDLGtDQUFrQztBQUFBLEVBQ2xDLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLDRCQUE0QjtBQUFBLEVBQzVCLDhCQUE4QjtBQUFBLEVBQzlCLDhCQUE4QjtBQUFBLEVBQzlCLDZCQUE2QjtBQUFBLEVBQzdCLDZCQUE2QjtBQUFBLEVBQzdCLDJCQUEyQjtBQUFBLEVBQzNCLDBCQUEwQjtBQUFBLEVBQzFCLG9CQUFvQjtBQUFBLEVBQ3BCLHNCQUFzQjtBQUFBLEVBQ3RCLHdCQUF3QjtBQUFBLEVBQ3hCLHNCQUFzQjtBQUFBLEVBQ3RCLDZCQUE2QjtBQUFBLEVBQzdCLGdCQUFnQjtBQUFBLEVBQ2hCLG9CQUFvQjtBQUFBLEVBQ3BCLHdCQUF3QjtBQUFBLEVBQ3hCLHVCQUF1QjtBQUFBLEVBQ3ZCLDJCQUEyQjtBQUFBLEVBQzNCLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLHFCQUFxQjtBQUN2QjtBQUdBLElBQU0sS0FBc0M7QUFBQSxFQUMxQyxxQkFBcUI7QUFBQSxFQUNyQix1QkFBdUI7QUFBQSxFQUN2Qix5QkFBeUI7QUFBQSxFQUN6QixtQkFBbUI7QUFBQSxFQUNuQix3QkFBd0I7QUFBQSxFQUN4Qix3QkFBd0I7QUFBQSxFQUN4QiwwQkFBMEI7QUFBQSxFQUMxQiw0QkFBNEI7QUFBQSxFQUM1QixpQ0FBaUM7QUFBQSxFQUNqQyxrQ0FBa0M7QUFBQSxFQUNsQyx3QkFBd0I7QUFBQSxFQUN4Qix3QkFBd0I7QUFBQSxFQUN4Qiw0QkFBNEI7QUFBQSxFQUM1Qiw4QkFBOEI7QUFBQSxFQUM5Qiw4QkFBOEI7QUFBQSxFQUM5Qiw2QkFBNkI7QUFBQSxFQUM3Qiw2QkFBNkI7QUFBQSxFQUM3QiwyQkFBMkI7QUFBQSxFQUMzQiwwQkFBMEI7QUFBQSxFQUMxQixvQkFBb0I7QUFBQSxFQUNwQixzQkFBc0I7QUFBQSxFQUN0Qix3QkFBd0I7QUFBQSxFQUN4QixzQkFBc0I7QUFBQSxFQUN0Qiw2QkFBNkI7QUFBQSxFQUM3QixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQix3QkFBd0I7QUFBQSxFQUN4Qix1QkFBdUI7QUFBQSxFQUN2QiwyQkFBMkI7QUFBQSxFQUMzQixlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixrQkFBa0I7QUFBQSxFQUNsQixxQkFBcUI7QUFDdkI7QUFtQkEsU0FBUyxpQkFBaUI7QUFDeEIsYUFBTywyQkFBWTtBQUFBLElBQ2pCLE1BQU0sT0FBaUIsRUFBRSxXQUFXLFlBQVksVUFBVSxJQUFJLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUFBLElBQ25HLFNBQVM7QUFBQSxNQUNQLE1BQU0sQ0FBQyxHQUFhLFdBQW1CLFVBQWtCLFFBQW9CLFdBQXFCLFVBQWtCO0FBQ2xILFlBQUksWUFBWSxFQUFFLFNBQVU7QUFDNUIsVUFBRSxZQUFZO0FBQ2QsVUFBRSxXQUFXO0FBQ2IsVUFBRSxTQUFTO0FBQ1gsVUFBRSxZQUFZO0FBQ2QsVUFBRSxRQUFRO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLFNBQVMsWUFBWSxVQUF5QixPQUEyQztBQUN2RixTQUFPLFNBQVMsT0FFYixPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUNqRCxJQUFJLENBQUMsT0FBTztBQUFBLElBQ1gsSUFBSSxFQUFFO0FBQUEsSUFDTixNQUFNLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtBQUFBLElBQ3ZCLGFBQWEsRUFBRTtBQUFBLElBQ2YsU0FBUztBQUFBLE1BQ1AsRUFBRSxPQUFPLHFCQUFxQixLQUFLO0FBQUEsTUFDbkMsRUFBRSxPQUFPLDJCQUEyQixLQUFLO0FBQUEsTUFDekMsRUFBRSxPQUFPLDJCQUEyQixLQUFLO0FBQUEsSUFDM0M7QUFBQSxFQUNGLEVBQUU7QUFDTjtBQUdBLFNBQVMsZUFBZSxPQUtyQjtBQUNELFFBQU0sRUFBRSxHQUFHLFVBQVUsVUFBVSxjQUFjLElBQUk7QUFDakQsUUFBTSxZQUFZLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUztBQUM3QyxRQUFNLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNO0FBQ3ZDLFFBQU0sWUFBWSxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVM7QUFDN0MsUUFBTSxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSztBQUVyQyxRQUFNLENBQUMsVUFBVSxXQUFXLFFBQUksdUJBQVMsS0FBSztBQUM5QyxRQUFNLENBQUMsUUFBUSxTQUFTLFFBQUksdUJBQVMsS0FBSztBQUMxQyxRQUFNLENBQUMsV0FBVyxZQUFZLFFBQUksdUJBQVMsRUFBRTtBQUM3QyxRQUFNLENBQUMsZUFBZSxnQkFBZ0IsUUFBSSx1QkFBd0IsSUFBSTtBQUN0RSxRQUFNLENBQUMsUUFBUSxTQUFTLFFBQUksdUJBQVM7QUFBQSxJQUNuQyxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsUUFBTSxXQUFXLENBQUMsUUFBNkIsQ0FBQyxVQUM5QyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLE9BQU8sTUFBTSxFQUFFO0FBRXhELFFBQU0sT0FBTyxZQUFZO0FBQ3ZCLFVBQU0sS0FBSyxPQUFPLEdBQUcsS0FBSyxFQUFFLFFBQVEsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUM3RCxRQUFJLENBQUMsSUFBSTtBQUNQLG1CQUFhLEVBQUUsc0JBQXNCLENBQUM7QUFDdEM7QUFBQSxJQUNGO0FBQ0EsY0FBVSxJQUFJO0FBQ2QsaUJBQWEsRUFBRTtBQUNmLFFBQUk7QUFDRixZQUFNLE1BQU0sTUFBTSxNQUFNLGFBQWE7QUFBQSxRQUNuQyxRQUFRO0FBQUEsUUFDUixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFFBQzlDLE1BQU0sS0FBSyxVQUFVO0FBQUEsVUFDbkIsUUFBUTtBQUFBLFVBQ1IsT0FBTztBQUFBLFlBQ0w7QUFBQSxZQUNBLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSztBQUFBLFlBQzVCLGFBQWEsT0FBTztBQUFBLFlBQ3BCLE9BQU87QUFBQSxjQUNMLElBQUksT0FBTztBQUFBLGNBQ1gsSUFBSSxPQUFPO0FBQUEsY0FDWCxRQUFRLE9BQU87QUFBQSxjQUNmLFlBQVksT0FBTztBQUFBLGNBQ25CLFdBQVcsT0FBTztBQUFBLGNBQ2xCLFNBQVMsT0FBTztBQUFBLGNBQ2hCLE9BQU8sT0FBTztBQUFBLGNBQ2QsTUFBTSxPQUFPO0FBQUEsWUFDZjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILENBQUM7QUFDRCxZQUFNLFNBQVUsTUFBTSxJQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxJQUFJLE9BQU8sT0FBTyxtQkFBbUIsRUFBRTtBQUN2RixVQUFJLE9BQU8sSUFBSTtBQUNiLG9CQUFZLEtBQUs7QUFDakIsa0JBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsRUFBRTtBQUM3QyxzQkFBYztBQUNkLGlCQUFTLEVBQUU7QUFBQSxNQUNiLE9BQU87QUFDTCxxQkFBYSxPQUFPLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQztBQUFBLE1BQ3hEO0FBQUEsSUFDRixTQUFTLEdBQUc7QUFDVixtQkFBYSxhQUFhLFFBQVEsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLENBQUM7QUFBQSxJQUN6RSxVQUFFO0FBQ0EsZ0JBQVUsS0FBSztBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUVBLFFBQU0sU0FBUyxPQUFPLE9BQWU7QUFDbkMsUUFBSSxrQkFBa0IsSUFBSTtBQUN4Qix1QkFBaUIsRUFBRTtBQUNuQixpQkFBVyxNQUFNLGlCQUFpQixDQUFDLE1BQU8sTUFBTSxLQUFLLE9BQU8sQ0FBRSxHQUFHLElBQUk7QUFDckU7QUFBQSxJQUNGO0FBQ0EscUJBQWlCLElBQUk7QUFDckIsUUFBSTtBQUNGLFlBQU0sTUFBTSxNQUFNLE1BQU0sYUFBYTtBQUFBLFFBQ25DLFFBQVE7QUFBQSxRQUNSLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsUUFDOUMsTUFBTSxLQUFLLFVBQVUsRUFBRSxRQUFRLGdCQUFnQixHQUFHLENBQUM7QUFBQSxNQUNyRCxDQUFDO0FBQ0QsWUFBTSxTQUFVLE1BQU0sSUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsSUFBSSxPQUFPLE9BQU8sbUJBQW1CLEVBQUU7QUFDdkYsVUFBSSxDQUFDLE9BQU8sR0FBSSxjQUFhLE9BQU8sU0FBUyxFQUFFLHNCQUFzQixDQUFDO0FBQ3RFLG9CQUFjO0FBQUEsSUFDaEIsU0FBUyxHQUFHO0FBQ1YsbUJBQWEsYUFBYSxRQUFRLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixDQUFDO0FBQUEsSUFDekU7QUFBQSxFQUNGO0FBRUEsUUFBTSxRQUFRO0FBQUEsSUFDWixFQUFFLElBQUksWUFBWSxPQUFPLEVBQUUscUJBQXFCLEdBQUcsU0FBUyxDQUFDLEVBQWM7QUFBQSxJQUMzRSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsTUFBTSxTQUFTLEdBQUcsUUFBUSxFQUFFO0FBQUEsRUFDNUU7QUFFQSxRQUFNLGFBQWEsQ0FBQyxPQUFlLFFBQ2pDLDZDQUFDLFdBQU0sV0FBVSxlQUNmO0FBQUEsZ0RBQUMsVUFBSyxXQUFVLHFCQUFxQixpQkFBTTtBQUFBLElBQzNDLDRDQUFDLFdBQU0sTUFBSyxTQUFRLFdBQVUsZUFBYyxPQUFPLE9BQU8sR0FBRyxHQUFhLFVBQVUsU0FBUyxHQUFHLEdBQUc7QUFBQSxLQUNyRztBQUdGLFNBQ0UsNkNBQUMsU0FBSSxXQUFVLGFBQ2I7QUFBQSxpREFBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSxrREFBQyxTQUFJLFdBQVUsZUFBZSxZQUFFLG1CQUFtQixHQUFFO0FBQUEsTUFDckQ7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQUs7QUFBQSxVQUNMLFdBQVU7QUFBQSxVQUNWLFNBQVMsTUFBTTtBQUNiLHdCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIseUJBQWEsRUFBRTtBQUFBLFVBQ2pCO0FBQUEsVUFFQyxZQUFFLGlCQUFpQjtBQUFBO0FBQUEsTUFDdEI7QUFBQSxPQUNGO0FBQUEsSUFDQyxRQUFRLDRDQUFDLFNBQUksV0FBVSxlQUFlLGlCQUFNLElBQVM7QUFBQSxJQUN0RCw0Q0FBQyxTQUFJLFdBQVUsY0FDWixnQkFBTSxJQUFJLENBQUMsU0FBUztBQUNuQixZQUFNLGNBQWMsVUFBVSxTQUFTLEtBQUssRUFBRTtBQUM5QyxhQUNFLDZDQUFDLFVBQW1CLFdBQVUsbUJBQzVCO0FBQUEscURBQUMsWUFBTyxNQUFLLFVBQVMsV0FBVSxjQUFhLGdCQUFjLGNBQWMsS0FBSyxJQUFJLFNBQVMsTUFBTSxTQUFTLEtBQUssRUFBRSxHQUM5RztBQUFBLGVBQUssUUFBUSxXQUFXLElBQ3ZCLDRDQUFDLFVBQUssV0FBVSxjQUFhLGVBQVksUUFDdEMsZUFBSyxRQUFRLElBQUksQ0FBQyxHQUFHLE1BQ3BCLDRDQUFDLFVBQWEsV0FBVSxhQUFZLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFyRCxDQUF3RCxDQUNwRSxHQUNILElBRUEsNENBQUMsVUFBSyxXQUFVLCtCQUE4QixlQUFZLFFBQU87QUFBQSxVQUVsRSxLQUFLO0FBQUEsV0FDUjtBQUFBLFFBQ0MsY0FDQztBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsTUFBSztBQUFBLFlBQ0wsV0FBVyxZQUFZLGtCQUFrQixLQUFLLEtBQUssdUJBQXVCLEVBQUU7QUFBQSxZQUM1RSxPQUFPLEVBQUUsb0JBQW9CO0FBQUEsWUFDN0IsU0FBUyxNQUFNLEtBQUssT0FBTyxLQUFLLEVBQUU7QUFBQSxZQUVqQyw0QkFBa0IsS0FBSyxLQUFLLEVBQUUsMkJBQTJCLElBQUk7QUFBQTtBQUFBLFFBQ2hFLElBQ0U7QUFBQSxXQXRCSyxLQUFLLEVBdUJoQjtBQUFBLElBRUosQ0FBQyxHQUNIO0FBQUEsSUFDQyxXQUNDLDZDQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsa0RBQUMsU0FBSSxXQUFVLG9CQUFvQixZQUFFLHNCQUFzQixHQUFFO0FBQUEsTUFDN0QsNkNBQUMsU0FBSSxXQUFVLG1CQUNiO0FBQUEscURBQUMsV0FBTSxXQUFVLGVBQ2Y7QUFBQSxzREFBQyxVQUFLLFdBQVUscUJBQXFCLFlBQUUsc0JBQXNCLEdBQUU7QUFBQSxVQUMvRCw0Q0FBQyxXQUFNLFdBQVUsZUFBYyxPQUFPLE9BQU8sSUFBSSxVQUFVLFNBQVMsSUFBSSxHQUFHLGFBQVksWUFBVztBQUFBLFdBQ3BHO0FBQUEsUUFDQSw2Q0FBQyxXQUFNLFdBQVUsZUFDZjtBQUFBLHNEQUFDLFVBQUssV0FBVSxxQkFBcUIsWUFBRSx3QkFBd0IsR0FBRTtBQUFBLFVBQ2pFLDRDQUFDLFdBQU0sV0FBVSxlQUFjLE9BQU8sT0FBTyxNQUFNLFVBQVUsU0FBUyxNQUFNLEdBQUcsYUFBWSxZQUFXO0FBQUEsV0FDeEc7QUFBQSxRQUNBLDZDQUFDLFdBQU0sV0FBVSxlQUNmO0FBQUEsc0RBQUMsVUFBSyxXQUFVLHFCQUFxQixZQUFFLDBCQUEwQixHQUFFO0FBQUEsVUFDbkU7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLE9BQU8sT0FBTztBQUFBLGNBQ2QsVUFBVSxDQUFDLE1BQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsYUFBYSxFQUFFLE9BQU8sTUFBMEIsRUFBRTtBQUFBLGNBRTdGO0FBQUEsNERBQUMsWUFBTyxPQUFNLFFBQVEsWUFBRSwrQkFBK0IsR0FBRTtBQUFBLGdCQUN6RCw0Q0FBQyxZQUFPLE9BQU0sU0FBUyxZQUFFLGdDQUFnQyxHQUFFO0FBQUE7QUFBQTtBQUFBLFVBQzdEO0FBQUEsV0FDRjtBQUFBLFFBQ0MsV0FBVyxFQUFFLHNCQUFzQixHQUFHLElBQUk7QUFBQSxRQUMxQyxXQUFXLEVBQUUsc0JBQXNCLEdBQUcsSUFBSTtBQUFBLFFBQzFDLFdBQVcsRUFBRSwwQkFBMEIsR0FBRyxRQUFRO0FBQUEsUUFDbkQsNENBQUMsU0FBSSxXQUFVLHdCQUF3QixZQUFFLDRCQUE0QixHQUFFO0FBQUEsUUFDdEUsV0FBVyxFQUFFLDRCQUE0QixHQUFHLFlBQVk7QUFBQSxRQUN4RCxXQUFXLEVBQUUsMkJBQTJCLEdBQUcsV0FBVztBQUFBLFFBQ3RELFdBQVcsRUFBRSwyQkFBMkIsR0FBRyxTQUFTO0FBQUEsUUFDcEQsV0FBVyxFQUFFLHlCQUF5QixHQUFHLE9BQU87QUFBQSxRQUNoRCxXQUFXLEVBQUUsd0JBQXdCLEdBQUcsTUFBTTtBQUFBLFNBQ2pEO0FBQUEsTUFDQyxZQUFZLDRDQUFDLFNBQUksV0FBVSxlQUFlLHFCQUFVLElBQVM7QUFBQSxNQUM5RCw2Q0FBQyxTQUFJLFdBQVUsc0JBQ2I7QUFBQSxvREFBQyxZQUFPLE1BQUssVUFBUyxXQUFVLCtCQUE4QixVQUFVLFFBQVEsU0FBUyxNQUFNLEtBQUssS0FBSyxHQUN0RyxZQUFFLGtCQUFrQixHQUN2QjtBQUFBLFFBQ0EsNENBQUMsWUFBTyxNQUFLLFVBQVMsV0FBVSxhQUFZLFVBQVUsUUFBUSxTQUFTLE1BQU0sWUFBWSxLQUFLLEdBQzNGLFlBQUUsb0JBQW9CLEdBQ3pCO0FBQUEsU0FDRjtBQUFBLE9BQ0YsSUFDRTtBQUFBLEtBQ047QUFFSjtBQUdBLFNBQVMsc0JBQXNCLEVBQUUsRUFBRSxHQUE0QztBQUM3RSxRQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQVMsS0FBSztBQUN0QyxRQUFNLENBQUMsUUFBUSxTQUFTLFFBQUksdUJBQTZELElBQUk7QUFDN0YsUUFBTSxDQUFDLE9BQU8sUUFBUSxRQUFJLHVCQUFTLEVBQUUsV0FBVyxJQUFJLGNBQWMsR0FBRyxDQUFDO0FBQ3RFLFFBQU0sQ0FBQyxRQUFRLFNBQVMsUUFBSSx1QkFBUyxLQUFLO0FBQzFDLFFBQU0sQ0FBQyxRQUFRLFNBQVMsUUFBSSx1QkFBUyxLQUFLO0FBRTFDLFFBQU0sT0FBTyxZQUFZO0FBQ3ZCLFFBQUk7QUFDRixZQUFNLE1BQU0sTUFBTSxNQUFNLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxtQkFBbUIsRUFBRSxDQUFDO0FBQ2hGLFlBQU0sVUFBVyxNQUFNLElBQUksS0FBSztBQUNoQyxZQUFNLE9BQU8sRUFBRSxXQUFXLFFBQVEsV0FBVyxjQUFjLFFBQVEsYUFBYTtBQUNoRixnQkFBVSxJQUFJO0FBQ2QsZUFBUyxJQUFJO0FBQUEsSUFDZixRQUFRO0FBQUEsSUFFUjtBQUFBLEVBQ0Y7QUFFQSw4QkFBVSxNQUFNO0FBQ2QsUUFBSSxLQUFNLE1BQUssS0FBSztBQUFBLEVBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFVCxRQUFNLFFBQVEsV0FBVyxTQUFTLE1BQU0sY0FBYyxPQUFPLGFBQWEsTUFBTSxpQkFBaUIsT0FBTztBQUV4RyxRQUFNLE9BQU8sT0FBTyxVQUFtQjtBQUNyQyxjQUFVLElBQUk7QUFDZCxjQUFVLEtBQUs7QUFDZixRQUFJO0FBQ0YsWUFBTSxNQUFNLE1BQU0sTUFBTSxhQUFhO0FBQUEsUUFDbkMsUUFBUTtBQUFBLFFBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxRQUM5QyxNQUFNLEtBQUssVUFBVSxRQUFRLEVBQUUsUUFBUSxjQUFjLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLGNBQWMsUUFBUSxNQUFNLENBQUM7QUFBQSxNQUM3RyxDQUFDO0FBQ0QsWUFBTSxTQUFVLE1BQU0sSUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLEVBQUUsSUFBSSxNQUFNLEVBQUU7QUFDNUQsVUFBSSxDQUFDLE9BQU8sR0FBSSxXQUFVLElBQUk7QUFDOUIsWUFBTSxLQUFLO0FBQUEsSUFDYixRQUFRO0FBQ04sZ0JBQVUsSUFBSTtBQUFBLElBQ2hCLFVBQUU7QUFDQSxnQkFBVSxLQUFLO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBRUEsU0FDRSw2Q0FBQyxRQUFHLFdBQVUsZUFDWjtBQUFBLGlEQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsZUFBYyxpQkFBZSxNQUFNLFNBQVMsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FDakc7QUFBQSxrREFBQyxVQUFLLFdBQVUsZUFBZSxZQUFFLG1CQUFtQixHQUFFO0FBQUEsTUFDdEQsNENBQUMsVUFBSyxXQUFVLGVBQWUsWUFBRSxjQUFjLEdBQUU7QUFBQSxNQUNoRCxRQUFRLDRDQUFDLFVBQUssV0FBVSxrQkFBa0IsWUFBRSxnQkFBZ0IsR0FBRSxJQUFVO0FBQUEsTUFDekUsNENBQUMsVUFBSyxXQUFVLGdCQUFlLGVBQVksUUFBUSxpQkFBTyxXQUFNLFVBQUk7QUFBQSxPQUN0RTtBQUFBLElBQ0MsT0FDQyw2Q0FBQyxTQUFJLFdBQVUsZUFDYjtBQUFBLG1EQUFDLFdBQU0sV0FBVSxnQkFDZjtBQUFBLG9EQUFDLFVBQUssV0FBVSxnQkFBZ0IsWUFBRSxrQkFBa0IsR0FBRTtBQUFBLFFBQ3REO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPLE1BQU07QUFBQSxZQUNiLGFBQVk7QUFBQSxZQUNaLFVBQVUsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRTtBQUFBO0FBQUEsUUFDeEU7QUFBQSxRQUNBLDRDQUFDLFVBQUssV0FBVSxlQUFlLFlBQUUsc0JBQXNCLEdBQUU7QUFBQSxTQUMzRDtBQUFBLE1BQ0EsNkNBQUMsV0FBTSxXQUFVLGdCQUNmO0FBQUEsb0RBQUMsVUFBSyxXQUFVLGdCQUFnQixZQUFFLHFCQUFxQixHQUFFO0FBQUEsUUFDekQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sTUFBTTtBQUFBLFlBQ2IsYUFBWTtBQUFBLFlBQ1osVUFBVSxDQUFDLE1BQU0sU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsY0FBYyxFQUFFLE9BQU8sTUFBTSxFQUFFO0FBQUE7QUFBQSxRQUMzRTtBQUFBLFFBQ0EsNENBQUMsVUFBSyxXQUFVLGVBQWUsWUFBRSx5QkFBeUIsR0FBRTtBQUFBLFNBQzlEO0FBQUEsTUFDQyxTQUFTLDRDQUFDLE9BQUUsV0FBVSxlQUFjLE1BQUssVUFBVSxZQUFFLG1CQUFtQixHQUFFLElBQU87QUFBQSxNQUNsRiw2Q0FBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSxvREFBQyxZQUFPLE1BQUssVUFBUyxXQUFVLGFBQVksVUFBVSxDQUFDLFNBQVMsUUFBUSxTQUFTLE1BQU0sS0FBSyxLQUFLLElBQUksR0FDbEcsWUFBRSxnQkFBZ0IsR0FDckI7QUFBQSxRQUNBLDRDQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsK0JBQThCLFVBQVUsQ0FBQyxTQUFTLFFBQVEsU0FBUyxNQUFNLEtBQUssS0FBSyxLQUFLLEdBQ3JILFlBQUUsYUFBYSxHQUNsQjtBQUFBLFNBQ0Y7QUFBQSxPQUNGLElBQ0U7QUFBQSxLQUNOO0FBRUo7QUFHQSxlQUFlLGNBQXFDO0FBQ2xELFFBQU0sTUFBTSxNQUFNLE1BQU0sYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLG1CQUFtQixFQUFFLENBQUM7QUFDaEYsTUFBSSxDQUFDLElBQUksR0FBSSxPQUFNLElBQUksTUFBTSwyQkFBMkIsSUFBSSxNQUFNLEVBQUU7QUFDcEUsU0FBUSxNQUFNLElBQUksS0FBSztBQUN6QjtBQUdPLFNBQVMsTUFBTSxLQUEwQjtBQUM5QyxRQUFNLFFBQVEsSUFBSTtBQUdsQixRQUFNLGtCQUFrQixJQUFJLGNBQWMsS0FBSyxFQUFFLFdBQVcsU0FBUyxDQUFDO0FBQ3RFLFFBQU0sV0FBbUMsQ0FBQztBQUMxQyxRQUFNLFlBQTRCLENBQUM7QUFFbkMsTUFBSSxPQUFPLE1BQU0sSUFBSSxPQUFPLFNBQVMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsZ0NBQWdDO0FBRTdGLFFBQU0sUUFBUSxlQUFlO0FBQzdCLE1BQUk7QUFFSixNQUFJLFlBQVk7QUFDaEIsTUFBSSxXQUFXO0FBRWYsTUFBSSxlQUF5QixDQUFDO0FBVzlCLFFBQU0sZ0JBQTBCLENBQUM7QUFDakMsUUFBTSxvQkFBb0IsTUFBTTtBQUM5QixVQUFNLFNBQVMsTUFBTSxTQUFTLEVBQUU7QUFDaEMsYUFBUyxnQkFBZ0IsTUFBTSxjQUFjLE9BQU87QUFDcEQsVUFBTSxPQUFPLFNBQVM7QUFDdEIsUUFBSSxPQUFPLGdCQUFnQixPQUFRLE1BQUssYUFBYSxzQkFBc0IsRUFBRTtBQUFBLFFBQ3hFLE1BQUssZ0JBQWdCLG9CQUFvQjtBQUM5QyxlQUFXQSxTQUFRLGNBQWUsTUFBSyxNQUFNLGVBQWVBLEtBQUk7QUFDaEUsa0JBQWMsU0FBUztBQUN2QixlQUFXLENBQUNBLE9BQU0sS0FBSyxLQUFLLE9BQU8sUUFBUSxPQUFPLE1BQU0sR0FBRztBQUN6RCxXQUFLLE1BQU0sWUFBWUEsT0FBTSxLQUFLO0FBQ2xDLG9CQUFjLEtBQUtBLEtBQUk7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFHQSxRQUFNLGtCQUFrQixNQUFNO0FBQzVCLFVBQU0sT0FBTyxNQUFNLFNBQVMsRUFBRTtBQUM5QixXQUFPLFNBQVMsV0FBVyxTQUFTLFVBQVUsU0FBUyxXQUFXLGFBQWE7QUFBQSxFQUNqRjtBQUVBLFFBQU0sYUFBYSxDQUFDLFFBQVEsT0FBTztBQUNqQyxRQUFJLENBQUMsTUFBTztBQUNaLFVBQU0sS0FBSyxnQkFBZ0IsR0FBRyxVQUFVLFlBQVksTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLGNBQWMsS0FBSztBQUFBLEVBQ3RHO0FBR0EsUUFBTSxnQkFBZ0IsQ0FBQyxPQUFlO0FBQ3BDLFNBQUssTUFBTSxhQUFhO0FBQUEsTUFDdEIsUUFBUTtBQUFBLE1BQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxNQUM5QyxNQUFNLEtBQUssVUFBVSxFQUFFLFdBQVcsR0FBRyxDQUFDO0FBQUEsSUFDeEMsQ0FBQyxFQUNFLEtBQUssQ0FBQyxRQUFRO0FBQ2IsVUFBSSxDQUFDLElBQUksR0FBSSxTQUFRLEtBQUssNkNBQTZDLElBQUksTUFBTTtBQUFBLElBQ25GLENBQUMsRUFDQSxNQUFNLENBQUMsTUFBZSxRQUFRLEtBQUssNkNBQTZDLENBQUMsQ0FBQztBQUFBLEVBQ3ZGO0FBR0EsUUFBTSxtQkFBbUIsTUFBTTtBQUM3QixVQUFNLFFBQVEsZ0JBQWdCLFlBQVksRUFBRTtBQUM1QyxVQUFNLE9BQU8sT0FBTztBQUNwQixRQUFJO0FBQ0YsWUFBTSxTQUFTLFNBQVMsV0FBVyxTQUFTLFVBQVUsU0FBUyxXQUFXLE9BQU8sUUFBUTtBQUFBLElBQzNGLFFBQVE7QUFBQSxJQUVSO0FBQUEsRUFDRjtBQVVBLE1BQUk7QUFDSixRQUFNLGNBQWMsTUFBTTtBQUN4QixRQUFJLGNBQWM7QUFDaEIsb0JBQWMsWUFBWTtBQUMxQixxQkFBZTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUNBLFFBQU0sbUJBQW1CLE1BQU07QUFDN0IsUUFBSSxjQUFjLFdBQVk7QUFDOUIsUUFBSSxNQUFNLFNBQVMsRUFBRSxlQUFlLFdBQVc7QUFDN0MsVUFBSTtBQUNGLGNBQU0sU0FBUyxTQUFTO0FBQUEsTUFDMUIsUUFBUTtBQUFBLE1BRVI7QUFBQSxJQUNGO0FBQ0Esc0JBQWtCO0FBQUEsRUFDcEI7QUFJQSxNQUFJLEdBQUcsZ0JBQWdCLE1BQU07QUFDM0IsZUFBVyxNQUFNLFNBQVMsRUFBRTtBQUM1QixzQkFBa0I7QUFDbEIsZUFBVztBQUFBLEVBQ2IsQ0FBQztBQUVELFFBQU0saUJBQWlCLENBQUMsT0FBZTtBQUNyQyxRQUFJLENBQUMsR0FBSTtBQUNULFFBQUk7QUFDRixZQUFNLFNBQVMsRUFBRTtBQUFBLElBQ25CLFFBQVE7QUFBQSxJQUdSO0FBQUEsRUFDRjtBQUdBLFFBQU0sZ0JBQWdCLE1BQU07QUFDMUIsZUFBVyxXQUFXLFdBQVc7QUFDL0IsVUFBSTtBQUNGLGdCQUFRO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFFUjtBQUFBLElBQ0Y7QUFDQSxjQUFVLFNBQVM7QUFBQSxFQUNyQjtBQUVBLFFBQU0sa0JBQWtCLENBQUMsWUFBMEI7QUFDakQsa0JBQWM7QUFDZCxlQUFXLFNBQVMsQ0FBQyxHQUFHLFFBQVEsU0FBUyxHQUFHLFFBQVEsWUFBWSxHQUFHLFFBQVEsY0FBYyxHQUFHO0FBQzFGLGVBQVMsTUFBTSxFQUFFLElBQUksTUFBTTtBQUMzQixVQUFJO0FBQ0YsY0FBTSxVQUFVLE1BQU0sU0FBUztBQUFBLFVBQzdCLElBQUksTUFBTTtBQUFBLFVBQ1YsYUFBYSxNQUFNO0FBQUEsVUFDbkIsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUFBLFFBQzNCLENBQUM7QUFDRCxrQkFBVSxLQUFLLE9BQU87QUFBQSxNQUN4QixTQUFTLEdBQUc7QUFDVixnQkFBUSxLQUFLLDBDQUEwQyxNQUFNLElBQUksQ0FBQztBQUFBLE1BQ3BFO0FBQUEsSUFDRjtBQUNBLG1CQUFlLFFBQVEsV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFFakQsVUFBTSxRQUFRLFFBQVE7QUFDdEIsUUFBSSxTQUFTLE1BQU0sU0FBUyxFQUFFLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEtBQUssR0FBRztBQUNoRSxrQkFBWTtBQUFBLElBQ2QsV0FBVyxRQUFRLGNBQWM7QUFDL0Isa0JBQVksUUFBUTtBQUFBLElBQ3RCO0FBQ0EsbUJBQWUsU0FBUztBQUN4QixzQkFBa0I7QUFDbEIsUUFBSSxjQUFjLFlBQVk7QUFFNUIsa0JBQVk7QUFDWixxQkFBZSxZQUFZLGtCQUFrQixHQUFHO0FBQ2hELGlCQUFXLGFBQWEsR0FBSTtBQUFBLElBQzlCO0FBQ0EsZUFBVyxNQUFNLFNBQVMsRUFBRTtBQUM1QixlQUFXO0FBQUEsRUFDYjtBQUdBLFFBQU0sZ0JBQWdCLE1BQU07QUFDMUIsU0FBSyxZQUFZLEVBQ2QsS0FBSyxlQUFlLEVBQ3BCLE1BQU0sQ0FBQyxNQUFlO0FBQ3JCLGNBQVEsS0FBSyx1Q0FBdUMsQ0FBQztBQUNyRCxpQkFBVyxPQUFPLE1BQU0sWUFBWSxNQUFNLFFBQVEsYUFBYSxJQUFJLE9BQVEsRUFBMkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQUEsSUFDNUgsQ0FBQztBQUFBLEVBQ0w7QUFFQSxPQUFLLFlBQVksRUFDZCxLQUFLLGVBQWUsRUFDcEIsTUFBTSxDQUFDLE1BQWU7QUFDckIsWUFBUSxLQUFLLHFDQUFxQyxDQUFDO0FBQ25ELGVBQVcsT0FBTyxNQUFNLFlBQVksTUFBTSxRQUFRLGFBQWEsSUFBSSxPQUFRLEVBQTJCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQzVILENBQUM7QUFJSCxNQUFJO0FBQUEsSUFDRixNQUFNLE1BQU07QUFDVixvQkFBYztBQUNkLFlBQU0sT0FBTyxTQUFTO0FBQ3RCLGlCQUFXQSxTQUFRLGNBQWUsTUFBSyxNQUFNLGVBQWVBLEtBQUk7QUFDaEUsb0JBQWMsU0FBUztBQUFBLElBQ3pCO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFJQSxNQUFJLE1BQU07QUFBQSxJQUFPO0FBQUEsSUFBd0IsTUFDdkMsSUFBSSxNQUFNO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFFBQ1AsT0FBTyxNQUFNLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRSxtQkFBbUI7QUFBQSxRQUMzRDtBQUFBLFFBQ0EsUUFBUTtBQUFBLFFBQ1IsUUFBUSxDQUFDLFlBQTZIO0FBQ3BJLGtCQUFRO0FBQ1IscUJBQVc7QUFDWCxpQkFBTztBQUFBLFlBQ0wsVUFBVSxDQUFDLE9BQWU7QUFDeEIsMEJBQVk7QUFFWiwwQkFBWTtBQUNaLGtCQUFJLE9BQU8sWUFBWTtBQUdyQixpQ0FBaUI7QUFDakIsOEJBQWMsRUFBRTtBQUFBLGNBQ2xCLE9BQU87QUFDTCwrQkFBZSxFQUFFO0FBQ2pCLDhCQUFjLEVBQUU7QUFBQSxjQUNsQjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBR0EsTUFBSSxNQUFNO0FBQUEsSUFBTztBQUFBLElBQXdCLE1BQ3ZDLElBQUksTUFBTTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLElBQUk7QUFBQSxRQUNKLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm5hbWUiXQp9Cg==

		})(module, module.exports, require);
		return module.exports;
	}
});
