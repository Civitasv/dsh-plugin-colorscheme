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
.dshcfg-divider{border-top:1px solid var(--dsw-alias-border-l1);margin:2px 0}
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
function ColorschemePicker(props) {
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
function ColorschemeConfigCard(props) {
  const { t, useStore, setTheme, reloadCatalog } = props;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorschemePicker, { t, useStore, setTheme, reloadCatalog }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcfg-divider" }),
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
    "settings.plugin.item",
    () => ctx.slots.register(
      {
        name: "settings.plugin.item",
        id: "colorscheme-config",
        order: 20,
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
      ColorschemeConfigCard
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG4vLyBUeXBlLW9ubHkgaW1wb3J0cyB0aGF0IHB1bGwgdGhlIGNvbnRleHQgYXVnbWVudGF0aW9ucyAoc2V0dGluZ3NTY29wZSxcbi8vIGxvY2FsZSwgdGhlIHNldHRpbmdzLmdlbmVyYWwuaXRlbSBzbG90IGNvbnRyYWN0KSBpbnRvIHRoaXMgcHJvZ3JhbS5cbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzLXBsdWdpbnMvY2xpZW50J1xuaW1wb3J0IHR5cGUge30gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtbG9jYWxlL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgVGhlbWVDYXRhbG9nIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzLnRzJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdjb2xvcnNjaGVtZSdcblxuLyoqIFJlcXVpcmVkIGNsaWVudCBzZXJ2aWNlcyAoZmliZXIgaW5qZWN0IFx1MjAxNCB3YWl0cyBmb3IgdGhlIHRoZW1lIHNlcnZpY2UpLiAqL1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsndGhlbWUnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2Nvbm5lY3Rpb24nLCAncmVtb3RlJywgJ3NldHRpbmdzU2NvcGUnXVxuXG5jb25zdCBOUyA9ICdjb2xvcnNjaGVtZSdcbi8qKiBUaGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlIG5hbWVzcGFjZSAob3duZWQgYnkgZHNoLWNsaWVudC11aS10aGVtZSkuICovXG5jb25zdCBUSEVNRV9OUyA9ICd1aS10aGVtZSdcbmNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5jb2xvcnNjaGVtZSdcbmNvbnN0IENBVEFMT0dfVVJMID0gJ2NvbG9yc2NoZW1lL3RoZW1lcy5qc29uJ1xuY29uc3QgU1RZTEVfVEFHID0gJ2RzaC1wbHVnaW4tY29sb3JzY2hlbWUvcm93LmNzcydcbmNvbnN0IERFRkFVTFRfSUQgPSAnJyAvLyBzZW50aW5lbDogZm9sbG93IHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHByZWZlcmVuY2VcblxuLyoqXG4gKiBQcmVmZXJlbmNlLXJvdyBzdHlsZXMuIEluamVjdGVkIG9uY2UgcGVyIG1hdGVyaWFsaXphdGlvbiB3aXRoIHRoZSBsb2FkZXInc1xuICogYGRhdGEtcGx1Z2luLWNzc2AgY29udHJhY3Qgc28gdGhlIGNsaWVudCBITVIgZHJpdmVyIGNhbiBpbnZlbnRvcnkvcmVtb3ZlIGl0LlxuICovXG5jb25zdCBST1dfQ1NTID0gYFxuLmRzaGNzLXJvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo4cHg7cGFkZGluZzoxNnB4IDB9XG4uZHNoY3MtdGl0bGV7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyMnB4fVxuLmRzaGNzLWdyaWR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHh9XG4uZHNoY3MtY2hpcHthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpO2JvcmRlci1yYWRpdXM6OTk5cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEzcHg7Z2FwOjhweDtwYWRkaW5nOjZweCAxMnB4fVxuLmRzaGNzLWNoaXA6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpfVxuLmRzaGNzLWNoaXBbYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXXtiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1iZy1tb2R1bGUtcGxhdGZvcm0pO2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTQwMCl9XG4uZHNoY3MtZG90c3tkaXNwbGF5OmlubGluZS1mbGV4O2dhcDoycHh9XG4uZHNoY3MtZG90e2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTgpO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoxMnB4O3dpZHRoOjEycHh9XG4uZHNoY3MtZG90LWRlZmF1bHR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHZhcigtLWRzdy1zdGF0aWMtbmV1dHJhbC1ibHVpc2gtNTApIDUwJSx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTkwMCkgNTAlKX1cbi5kc2hjcy1lcnJvcntjb2xvcjp2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSk7Zm9udC1zaXplOjEycHh9XG4uZHNoY3MtdGl0bGUtcm93e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59XG4uZHNoY3MtYnRue2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtc2Vjb25kYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MThweDttaW4taGVpZ2h0OjI2cHg7cGFkZGluZzoycHggMTBweH1cbi5kc2hjcy1idG46aG92ZXI6bm90KDpkaXNhYmxlZCl7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KX1cbi5kc2hjcy1idG46ZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH1cbi5kc2hjcy1idG4tcHJpbWFyeXtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KX1cbi5kc2hjcy1jaGlwLXdyYXB7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Z2FwOjRweH1cbi5kc2hjcy1kZWx7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTBweDtoZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoxO3BhZGRpbmc6MCA2cHh9XG4uZHNoY3MtZGVsOmhvdmVye2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KX1cbi5kc2hjcy1kZWwtY29uZmlybXtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KTtmb250LXNpemU6MTBweH1cbi5kc2hjcy1mb3Jte2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czoxMnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7bWFyZ2luLXRvcDoxMnB4O3BhZGRpbmc6MTRweH1cbi5kc2hjcy1mb3JtLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDB9XG4uZHNoY3MtZm9ybS1ncmlke2Rpc3BsYXk6Z3JpZDtnYXA6MTBweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTMwcHgsMWZyKSl9XG4uZHNoY3MtZmllbGR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NHB4fVxuLmRzaGNzLWZpZWxkLWxhYmVse2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2ZvbnQtc2l6ZToxMXB4fVxuLmRzaGNzLWlucHV0e2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTIpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQ6aW5oZXJpdDtmb250LXNpemU6MTJweDttaW4taGVpZ2h0OjI2cHg7cGFkZGluZzoycHggOHB4fVxuLmRzaGNzLWlucHV0OmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnkpfVxuLmRzaGNzLWNvbG9ye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTIpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7aGVpZ2h0OjI4cHg7cGFkZGluZzoycHg7d2lkdGg6MTAwJTtjdXJzb3I6cG9pbnRlcn1cbi5kc2hjcy1maWVsZC1hZHZhbmNlZHtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtY2FwdGlvbik7Zm9udC1zaXplOjExcHg7Z3JpZC1jb2x1bW46MS8tMTttYXJnaW4tdG9wOjRweH1cbi5kc2hjcy1mb3JtLWFjdGlvbnN7ZGlzcGxheTpmbGV4O2dhcDo4cHg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVxuLmRzaGNmZy1jYXJke2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czoxMnB4O2xpc3Qtc3R5bGU6bm9uZTttYXJnaW4tYm90dG9tOjEwcHg7b3ZlcmZsb3c6aGlkZGVufVxuLmRzaGNmZy1oZWFke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjowO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2dhcDo4cHg7cGFkZGluZzoxMHB4IDEycHg7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOjEwMCV9XG4uZHNoY2ZnLWhlYWQ6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpfVxuLmRzaGNmZy1uYW1le2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjYwMH1cbi5kc2hjZmctZGVzY3tjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpO2ZsZXg6MTtmb250LXNpemU6MTJweDttaW4td2lkdGg6MDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9XG4uZHNoY2ZnLXBlbmRpbmd7YmFja2dyb3VuZDpyZ2JhKDQ2LDE2MCw2NywuMTYpO2JvcmRlci1yYWRpdXM6OTk5cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLXN1Y2Nlc3MtcHJpbWFyeSk7ZmxleDpub25lO2ZvbnQtc2l6ZToxMXB4O3BhZGRpbmc6MXB4IDhweH1cbi5kc2hjZmctY2FyZXR7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtmbGV4Om5vbmU7Zm9udC1zaXplOjEwcHh9XG4uZHNoY2ZnLWRpdmlkZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMSk7bWFyZ2luOjJweCAwfVxuLmRzaGNmZy1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7cGFkZGluZzo0cHggMTJweCAxMnB4fVxuLmRzaGNmZy1maWVsZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo0cHh9XG4uZHNoY2ZnLWxhYmVse2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2ZvbnQtc2l6ZToxMnB4fVxuLmRzaGNmZy1oaW50e2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1jYXB0aW9uKTtmb250LXNpemU6MTFweH1cbi5kc2hjZmctYWN0aW9uc3tkaXNwbGF5OmZsZXg7Z2FwOjhweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XG5gXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLXBsdWdpbi1jc3M9JHtKU09OLnN0cmluZ2lmeShTVFlMRV9UQUcpfV1gKSA9PT0gbnVsbCkge1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHRhZy5kYXRhc2V0LnBsdWdpbiA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lJ1xuICB0YWcuZGF0YXNldC5wbHVnaW5Dc3MgPSBTVFlMRV9UQUdcbiAgdGFnLnRleHRDb250ZW50ID0gUk9XX0NTU1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZylcbn1cblxuLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSBkaWN0aW9uYXJ5IChrZXktc2V0IHNvdXJjZSBvZiB0cnV0aCkuICovXG5jb25zdCB6aCA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OCcsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ1x1OERERlx1OTY4Rlx1NTkxNlx1ODlDMicsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnXHU5MTREXHU4MjcyXHU2NUI5XHU2ODQ4XHU1MkEwXHU4RjdEXHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmFkZCc6ICdcdTY1QjBcdTU4OUVcdTRFM0JcdTk4OTgnLFxuICAnY29sb3JzY2hlbWUuYWRkVGl0bGUnOiAnXHU2NUIwXHU1ODlFXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTNCXHU5ODk4JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJzogJ1x1NjgwN1x1OEJDNiAoaWQpJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnOiAnXHU1NDBEXHU3OUYwJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdcdTZBMjFcdTVGMEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnXHU2REYxXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5saWdodCc6ICdcdTZENDVcdTgyNzInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnXHU4MENDXHU2NjZGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmZnJzogJ1x1NjU4N1x1NUI1NycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnOiAnXHU1RjNBXHU4QzAzXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFkdmFuY2VkJzogJ1x1OUFEOFx1N0VBN1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdcdTZENkVcdThENzdcdTg4NjhcdTk3NjInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2lkZWJhcic6ICdcdTRGQTdcdTY4MEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc3VjY2Vzcyc6ICdcdTYyMTBcdTUyOUYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnXHU5NTE5XHU4QkVGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLndhcm4nOiAnXHU4QjY2XHU1NDRBJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnXHU0RkREXHU1QjU4JyxcbiAgJ2NvbG9yc2NoZW1lLmNhbmNlbCc6ICdcdTUzRDZcdTZEODgnLFxuICAnY29sb3JzY2hlbWUuYWRkRXJyb3InOiAnXHU0RkREXHU1QjU4XHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdcdTUyMjBcdTk2NjQnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdcdTUxOERcdTZCMjFcdTcwQjlcdTUxRkJcdTc4NkVcdThCQTRcdTUyMjBcdTk2NjQnLFxuICAnY29uZmlnLnRpdGxlJzogJ1x1OTE0RFx1N0Y2RScsXG4gICdjb25maWcudGhlbWVzRGlyJzogJ1x1NEUzQlx1OTg5OFx1NzZFRVx1NUY1NScsXG4gICdjb25maWcudGhlbWVzRGlySGludCc6ICdcdTc1MjhcdTYyMzdcdTRFM0JcdTk4OTggSlNPTiBcdTY1ODdcdTRFRjZcdTc2ODRcdTc2RUVcdTVGNTVcdUZGMDhcdTc1NTlcdTdBN0EgPSBcdTlFRDhcdThCQTQgfi8uZHNoL3RoZW1lc1x1RkYwOScsXG4gICdjb25maWcuZGVmYXVsdFRoZW1lJzogJ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OCcsXG4gICdjb25maWcuZGVmYXVsdFRoZW1lSGludCc6ICdcdTY3MkFcdTYyNEJcdTUyQThcdTkwMDlcdTYyRTlcdTY1RjZcdTVFOTRcdTc1MjhcdTc2ODRcdTRFM0JcdTk4OTggaWRcdUZGMDhcdTc1NTlcdTdBN0EgPSBcdThEREZcdTk2OEZcdTU5MTZcdTg5QzJcdUZGMDknLFxuICAnY29uZmlnLnNhdmUnOiAnXHU0RkREXHU1QjU4JyxcbiAgJ2NvbmZpZy5kaXNjYXJkJzogJ1x1NjA2Mlx1NTkwRFx1OUVEOFx1OEJBNCcsXG4gICdjb25maWcudW5zYXZlZCc6ICdcdTY3MkFcdTRGRERcdTVCNTgnLFxuICAnY29uZmlnLnNhdmVGYWlsZWQnOiAnXHU0RkREXHU1QjU4XHU1OTMxXHU4RDI1Jyxcbn0gYXMgY29uc3RcblxuLyoqIEVuZ2xpc2ggZGljdGlvbmFyeSwgY2hlY2tlZCBjb21wbGV0ZSBhZ2FpbnN0IHRoZSB6aCBrZXkgc2V0LiAqL1xuY29uc3QgZW46IFJlY29yZDxrZXlvZiB0eXBlb2YgemgsIHN0cmluZz4gPSB7XG4gICdjb2xvcnNjaGVtZS50aXRsZSc6ICdDb2xvcnNjaGVtZScsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ0ZvbGxvdyBhcHBlYXJhbmNlJyxcbiAgJ2NvbG9yc2NoZW1lLmxvYWRFcnJvcic6ICdGYWlsZWQgdG8gbG9hZCBjb2xvcnNjaGVtZXMnLFxuICAnY29sb3JzY2hlbWUuYWRkJzogJ0FkZCB0aGVtZScsXG4gICdjb2xvcnNjaGVtZS5hZGRUaXRsZSc6ICdOZXcgY3VzdG9tIHRoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJzogJ0lEJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnOiAnTmFtZScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUnOiAnU2NoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5kYXJrJzogJ0RhcmsnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmxpZ2h0JzogJ0xpZ2h0JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmJnJzogJ0JhY2tncm91bmQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZmcnOiAnRm9yZWdyb3VuZCcsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnOiAnQWNjZW50JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFkdmFuY2VkJzogJ0FkdmFuY2VkIChvcHRpb25hbCknLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZWxldmF0ZWQnOiAnRWxldmF0ZWQgc3VyZmFjZScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zaWRlYmFyJzogJ1NpZGViYXInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc3VjY2Vzcyc6ICdTdWNjZXNzJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmVycm9yJzogJ0Vycm9yJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLndhcm4nOiAnV2FybmluZycsXG4gICdjb2xvcnNjaGVtZS5zYXZlJzogJ1NhdmUnLFxuICAnY29sb3JzY2hlbWUuY2FuY2VsJzogJ0NhbmNlbCcsXG4gICdjb2xvcnNjaGVtZS5hZGRFcnJvcic6ICdGYWlsZWQgdG8gc2F2ZScsXG4gICdjb2xvcnNjaGVtZS5kZWxldGUnOiAnRGVsZXRlJyxcbiAgJ2NvbG9yc2NoZW1lLmNvbmZpcm1EZWxldGUnOiAnQ2xpY2sgYWdhaW4gdG8gY29uZmlybSBkZWxldGUnLFxuICAnY29uZmlnLnRpdGxlJzogJ0NvbmZpZ3VyYXRpb24nLFxuICAnY29uZmlnLnRoZW1lc0Rpcic6ICdUaGVtZXMgZGlyZWN0b3J5JyxcbiAgJ2NvbmZpZy50aGVtZXNEaXJIaW50JzogJ0RpcmVjdG9yeSBmb3IgdXNlciB0aGVtZSBKU09OIGZpbGVzIChlbXB0eSA9IGRlZmF1bHQgfi8uZHNoL3RoZW1lcyknLFxuICAnY29uZmlnLmRlZmF1bHRUaGVtZSc6ICdEZWZhdWx0IHRoZW1lJyxcbiAgJ2NvbmZpZy5kZWZhdWx0VGhlbWVIaW50JzogJ1RoZW1lIGlkIGFwcGxpZWQgd2hlbiBub25lIGlzIGNob3NlbiAoZW1wdHkgPSBmb2xsb3cgYXBwZWFyYW5jZSknLFxuICAnY29uZmlnLnNhdmUnOiAnU2F2ZScsXG4gICdjb25maWcuZGlzY2FyZCc6ICdSZXNldCcsXG4gICdjb25maWcudW5zYXZlZCc6ICdVbnNhdmVkJyxcbiAgJ2NvbmZpZy5zYXZlRmFpbGVkJzogJ1NhdmUgZmFpbGVkJyxcbn1cblxuLyoqIFJvdyBkaXNwbGF5IG1vZGVsOiBpZCwgbmFtZSwgYW5kIHRocmVlIHNhbXBsZSBjb2xvcnMgKGJnIC8gZmcgLyBhY2NlbnQpLiAqL1xuaW50ZXJmYWNlIFJvd1RoZW1lIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29sb3JTY2hlbWU6ICdsaWdodCcgfCAnZGFyaydcbiAgc2FtcGxlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIFJvd1N0YXRlIHtcbiAgc2VsZWN0aW9uOiBzdHJpbmdcbiAgcmV2aXNpb246IG51bWJlclxuICB0aGVtZXM6IFJvd1RoZW1lW11cbiAgLyoqIFRoZW1lIGlkcyB0aGF0IGxpdmUgaW4gdGhlIHRoZW1lcyBkaXJlY3RvcnkgYW5kIGNhbiBiZSBkZWxldGVkIGluLWFwcC4gKi9cbiAgZGVsZXRhYmxlOiBzdHJpbmdbXVxuICBlcnJvcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvd1N0b3JlKCkge1xuICByZXR1cm4gZGVmaW5lU3RvcmUoe1xuICAgIGluaXQ6ICgpOiBSb3dTdGF0ZSA9PiAoeyBzZWxlY3Rpb246IERFRkFVTFRfSUQsIHJldmlzaW9uOiAtMSwgdGhlbWVzOiBbXSwgZGVsZXRhYmxlOiBbXSwgZXJyb3I6ICcnIH0pLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIHN5bmM6IChkOiBSb3dTdGF0ZSwgc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZGVsZXRhYmxlOiBzdHJpbmdbXSwgZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocmV2aXNpb24gPD0gZC5yZXZpc2lvbikgcmV0dXJuXG4gICAgICAgIGQuc2VsZWN0aW9uID0gc2VsZWN0aW9uXG4gICAgICAgIGQucmV2aXNpb24gPSByZXZpc2lvblxuICAgICAgICBkLnRoZW1lcyA9IHRoZW1lc1xuICAgICAgICBkLmRlbGV0YWJsZSA9IGRlbGV0YWJsZVxuICAgICAgICBkLmVycm9yID0gZXJyb3JcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gdG9Sb3dUaGVtZXMoc25hcHNob3Q6IFRoZW1lU25hcHNob3QsIG5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogUm93VGhlbWVbXSB7XG4gIHJldHVybiBzbmFwc2hvdC50aGVtZXNcbiAgICAvLyBUaGUgYnVpbHQtaW4gbGlnaHQvZGFyayBwYWlyIGlzIG93bmVkIGJ5IHRoZSBBcHBlYXJhbmNlIHJvdyBhYm92ZS5cbiAgICAuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSAnbGlnaHQnICYmIHQuaWQgIT09ICdkYXJrJylcbiAgICAubWFwKCh0KSA9PiAoe1xuICAgICAgaWQ6IHQuaWQsXG4gICAgICBuYW1lOiBuYW1lc1t0LmlkXSA/PyB0LmlkLFxuICAgICAgY29sb3JTY2hlbWU6IHQuY29sb3JTY2hlbWUsXG4gICAgICBzYW1wbGVzOiBbXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1iZy1iYXNlJ10gPz8gJycsXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5J10gPz8gJycsXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1icmFuZC1wcmltYXJ5J10gPz8gJycsXG4gICAgICBdLFxuICAgIH0pKVxufVxuXG4vKiogVGhlIENvbG9yc2NoZW1lIHBpY2tlciAoY2hpcHMgKyBhZGQvZGVsZXRlKSwgcmVuZGVyZWQgaW5zaWRlIHRoZSBjb25maWcgY2FyZC4gKi9cbmZ1bmN0aW9uIENvbG9yc2NoZW1lUGlja2VyKHByb3BzOiB7XG4gIHQ6IChrZXk6IGtleW9mIHR5cGVvZiB6aCkgPT4gc3RyaW5nXG4gIHVzZVN0b3JlOiA8Uz4oc2VsZWN0b3I6IChzOiBSb3dTdGF0ZSkgPT4gUykgPT4gU1xuICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHZvaWRcbiAgcmVsb2FkQ2F0YWxvZzogKCkgPT4gdm9pZFxufSkge1xuICBjb25zdCB7IHQsIHVzZVN0b3JlLCBzZXRUaGVtZSwgcmVsb2FkQ2F0YWxvZyB9ID0gcHJvcHNcbiAgY29uc3Qgc2VsZWN0aW9uID0gdXNlU3RvcmUoKHMpID0+IHMuc2VsZWN0aW9uKVxuICBjb25zdCB0aGVtZXMgPSB1c2VTdG9yZSgocykgPT4gcy50aGVtZXMpXG4gIGNvbnN0IGRlbGV0YWJsZSA9IHVzZVN0b3JlKChzKSA9PiBzLmRlbGV0YWJsZSlcbiAgY29uc3QgZXJyb3IgPSB1c2VTdG9yZSgocykgPT4gcy5lcnJvcilcblxuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbmZpcm1EZWxldGUsIHNldENvbmZpcm1EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgY29sb3JTY2hlbWU6ICdkYXJrJyBhcyAnbGlnaHQnIHwgJ2RhcmsnLFxuICAgIGJnOiAnIzFlMWUyZScsXG4gICAgZmc6ICcjY2RkNmY0JyxcbiAgICBhY2NlbnQ6ICcjY2JhNmY3JyxcbiAgICBiZ0VsZXZhdGVkOiAnIzE4MTgyNScsXG4gICAgYmdTaWRlYmFyOiAnIzE4MTgyNScsXG4gICAgc3VjY2VzczogJyNhNmUzYTEnLFxuICAgIGVycm9yOiAnI2YzOGJhOCcsXG4gICAgd2FybjogJyNmOWUyYWYnLFxuICB9KVxuICBjb25zdCBzZXRGaWVsZCA9IChrZXk6IGtleW9mIHR5cGVvZiBmaWVsZHMpID0+IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgc2V0RmllbGRzKChmKSA9PiAoeyAuLi5mLCBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKVxuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmaWVsZHMuaWQudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFpZCkge1xuICAgICAgc2V0Rm9ybUVycm9yKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJykpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0U2F2aW5nKHRydWUpXG4gICAgc2V0Rm9ybUVycm9yKCcnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBhY3Rpb246ICdhZGQtdGhlbWUnLFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkcy5uYW1lLnRyaW0oKSB8fCBpZCxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lOiBmaWVsZHMuY29sb3JTY2hlbWUsXG4gICAgICAgICAgICByb2xlczoge1xuICAgICAgICAgICAgICBiZzogZmllbGRzLmJnLFxuICAgICAgICAgICAgICBmZzogZmllbGRzLmZnLFxuICAgICAgICAgICAgICBhY2NlbnQ6IGZpZWxkcy5hY2NlbnQsXG4gICAgICAgICAgICAgIGJnRWxldmF0ZWQ6IGZpZWxkcy5iZ0VsZXZhdGVkLFxuICAgICAgICAgICAgICBiZ1NpZGViYXI6IGZpZWxkcy5iZ1NpZGViYXIsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZpZWxkcy5zdWNjZXNzLFxuICAgICAgICAgICAgICBlcnJvcjogZmllbGRzLmVycm9yLFxuICAgICAgICAgICAgICB3YXJuOiBmaWVsZHMud2FybixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgb2s6IGZhbHNlLCBlcnJvcjogJ2ludmFsaWQgcmVzcG9uc2UnIH0pKSkgYXMgeyBvazogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfVxuICAgICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcbiAgICAgICAgc2V0RmllbGRzKChmKSA9PiAoeyAuLi5mLCBpZDogJycsIG5hbWU6ICcnIH0pKVxuICAgICAgICByZWxvYWRDYXRhbG9nKClcbiAgICAgICAgc2V0VGhlbWUoaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb3JtRXJyb3IocmVzdWx0LmVycm9yID8/IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0Rm9ybUVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChjb25maXJtRGVsZXRlICE9PSBpZCkge1xuICAgICAgc2V0Q29uZmlybURlbGV0ZShpZClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29uZmlybURlbGV0ZSgoYykgPT4gKGMgPT09IGlkID8gbnVsbCA6IGMpKSwgMjUwMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRDb25maXJtRGVsZXRlKG51bGwpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdyZW1vdmUtdGhlbWUnLCBpZCB9KSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBvazogZmFsc2UsIGVycm9yOiAnaW52YWxpZCByZXNwb25zZScgfSkpKSBhcyB7IG9rOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9XG4gICAgICBpZiAoIXJlc3VsdC5vaykgc2V0Rm9ybUVycm9yKHJlc3VsdC5lcnJvciA/PyB0KCdjb2xvcnNjaGVtZS5hZGRFcnJvcicpKVxuICAgICAgcmVsb2FkQ2F0YWxvZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0Rm9ybUVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hpcHMgPSBbXG4gICAgeyBpZDogREVGQVVMVF9JRCwgbGFiZWw6IHQoJ2NvbG9yc2NoZW1lLmRlZmF1bHQnKSwgc2FtcGxlczogW10gYXMgc3RyaW5nW10gfSxcbiAgICAuLi50aGVtZXMubWFwKCh0aCkgPT4gKHsgaWQ6IHRoLmlkLCBsYWJlbDogdGgubmFtZSwgc2FtcGxlczogdGguc2FtcGxlcyB9KSksXG4gIF1cblxuICBjb25zdCBjb2xvckZpZWxkID0gKGxhYmVsOiBzdHJpbmcsIGtleToga2V5b2YgdHlwZW9mIGZpZWxkcykgPT4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImRzaGNzLWNvbG9yXCIgdmFsdWU9e2ZpZWxkc1trZXldIGFzIHN0cmluZ30gb25DaGFuZ2U9e3NldEZpZWxkKGtleSl9IC8+XG4gICAgPC9sYWJlbD5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGUtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRzaGNzLWJ0blwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0Zvcm0oKHYpID0+ICF2KVxuICAgICAgICAgICAgc2V0Rm9ybUVycm9yKCcnKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnY29sb3JzY2hlbWUuYWRkJyl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWVycm9yXCI+e2Vycm9yfTwvZGl2PiA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWdyaWRcIj5cbiAgICAgICAge2NoaXBzLm1hcCgoY2hpcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRGVsZXRhYmxlID0gZGVsZXRhYmxlLmluY2x1ZGVzKGNoaXAuaWQpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17Y2hpcC5pZH0gY2xhc3NOYW1lPVwiZHNoY3MtY2hpcC13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWNoaXBcIiBhcmlhLXByZXNzZWQ9e3NlbGVjdGlvbiA9PT0gY2hpcC5pZH0gb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY2hpcC5pZCl9PlxuICAgICAgICAgICAgICAgIHtjaGlwLnNhbXBsZXMubGVuZ3RoID09PSAzID8gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwiZHNoY3MtZG90XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1kb3QgZHNoY3MtZG90LWRlZmF1bHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2NoaXAubGFiZWx9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7aXNEZWxldGFibGUgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkc2hjcy1kZWwke2NvbmZpcm1EZWxldGUgPT09IGNoaXAuaWQgPyAnIGRzaGNzLWRlbC1jb25maXJtJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17dCgnY29sb3JzY2hlbWUuZGVsZXRlJyl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHJlbW92ZShjaGlwLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29uZmlybURlbGV0ZSA9PT0gY2hpcC5pZCA/IHQoJ2NvbG9yc2NoZW1lLmNvbmZpcm1EZWxldGUnKSA6ICdcdTI3MTUnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0Zvcm0gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybS10aXRsZVwiPnt0KCdjb2xvcnNjaGVtZS5hZGRUaXRsZScpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZm9ybS1ncmlkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuaWQnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiIHZhbHVlPXtmaWVsZHMuaWR9IG9uQ2hhbmdlPXtzZXRGaWVsZCgnaWQnKX0gcGxhY2Vob2xkZXI9XCJteS10aGVtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWxhYmVsXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiIHZhbHVlPXtmaWVsZHMubmFtZX0gb25DaGFuZ2U9e3NldEZpZWxkKCduYW1lJyl9IHBsYWNlaG9sZGVyPVwiTXkgVGhlbWVcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1sYWJlbFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkcy5jb2xvclNjaGVtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpZWxkcygoZikgPT4gKHsgLi4uZiwgY29sb3JTY2hlbWU6IGUudGFyZ2V0LnZhbHVlIGFzICdsaWdodCcgfCAnZGFyaycgfSkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj57dCgnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmxpZ2h0Jyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmJnJyksICdiZycpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZmcnKSwgJ2ZnJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnKSwgJ2FjY2VudCcpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1hZHZhbmNlZFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5hZHZhbmNlZCcpfTwvZGl2PlxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZWxldmF0ZWQnKSwgJ2JnRWxldmF0ZWQnKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLnNpZGViYXInKSwgJ2JnU2lkZWJhcicpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuc3VjY2VzcycpLCAnc3VjY2VzcycpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InKSwgJ2Vycm9yJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC53YXJuJyksICd3YXJuJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Zvcm1FcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57Zm9ybUVycm9yfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1mb3JtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0biBkc2hjcy1idG4tcHJpbWFyeVwiIGRpc2FibGVkPXtzYXZpbmd9IG9uQ2xpY2s9eygpID0+IHZvaWQgc2F2ZSgpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbG9yc2NoZW1lLnNhdmUnKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZHNoY3MtYnRuXCIgZGlzYWJsZWQ9e3NhdmluZ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0Zvcm0oZmFsc2UpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbG9yc2NoZW1lLmNhbmNlbCcpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLyoqIENvbmZpZyBjYXJkIGZvciB0aGUgUGx1Z2lucyBjb25maWd1cmF0aW9uIHRhYiAoU2V0dGluZ3MgXHUyMTkyIFBsdWdpbnMgXHUyMTkyIFx1NTNFRlx1OTE0RFx1N0Y2RSkuICovXG5mdW5jdGlvbiBDb2xvcnNjaGVtZUNvbmZpZ0NhcmQocHJvcHM6IHtcbiAgdDogKGtleToga2V5b2YgdHlwZW9mIHpoKSA9PiBzdHJpbmdcbiAgdXNlU3RvcmU6IDxTPihzZWxlY3RvcjogKHM6IFJvd1N0YXRlKSA9PiBTKSA9PiBTXG4gIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICByZWxvYWRDYXRhbG9nOiAoKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgdCwgdXNlU3RvcmUsIHNldFRoZW1lLCByZWxvYWRDYXRhbG9nIH0gPSBwcm9wc1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlPHsgdGhlbWVzRGlyOiBzdHJpbmc7IGRlZmF1bHRUaGVtZTogc3RyaW5nIH0gfCBudWxsPihudWxsKVxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IHVzZVN0YXRlKHsgdGhlbWVzRGlyOiAnJywgZGVmYXVsdFRoZW1lOiAnJyB9KVxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmYWlsZWQsIHNldEZhaWxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwgeyBoZWFkZXJzOiB7IGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcbiAgICAgIGNvbnN0IGNhdGFsb2cgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgVGhlbWVDYXRhbG9nXG4gICAgICBjb25zdCBuZXh0ID0geyB0aGVtZXNEaXI6IGNhdGFsb2cudGhlbWVzRGlyLCBkZWZhdWx0VGhlbWU6IGNhdGFsb2cuZGVmYXVsdFRoZW1lIH1cbiAgICAgIHNldENvbmZpZyhuZXh0KVxuICAgICAgc2V0RHJhZnQobmV4dClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGtlZXAgbGFzdCBrbm93biBzdGF0ZVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHZvaWQgbG9hZCgpXG4gIH0sIFtvcGVuXSlcblxuICBjb25zdCBkaXJ0eSA9IGNvbmZpZyAhPT0gbnVsbCAmJiAoZHJhZnQudGhlbWVzRGlyICE9PSBjb25maWcudGhlbWVzRGlyIHx8IGRyYWZ0LmRlZmF1bHRUaGVtZSAhPT0gY29uZmlnLmRlZmF1bHRUaGVtZSlcblxuICBjb25zdCBzYXZlID0gYXN5bmMgKGNsZWFyOiBib29sZWFuKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpXG4gICAgc2V0RmFpbGVkKGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChDQVRBTE9HX1VSTCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNsZWFyID8geyBhY3Rpb246ICdzZXQtY29uZmlnJywgY29uZmlnOiB7fSB9IDogeyBhY3Rpb246ICdzZXQtY29uZmlnJywgY29uZmlnOiBkcmFmdCB9KSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBvazogZmFsc2UgfSkpKSBhcyB7IG9rOiBib29sZWFuIH1cbiAgICAgIGlmICghcmVzdWx0Lm9rKSBzZXRGYWlsZWQodHJ1ZSlcbiAgICAgIGF3YWl0IGxvYWQoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RmFpbGVkKHRydWUpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJkc2hjZmctY2FyZFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZHNoY2ZnLWhlYWRcIiBhcmlhLWV4cGFuZGVkPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCh2KSA9PiAhdil9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctbmFtZVwiPnt0KCdjb2xvcnNjaGVtZS50aXRsZScpfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLWRlc2NcIj57dCgnY29uZmlnLnRpdGxlJyl9PC9zcGFuPlxuICAgICAgICB7ZGlydHkgPyA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctcGVuZGluZ1wiPnt0KCdjb25maWcudW5zYXZlZCcpfTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctY2FyZXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57b3BlbiA/ICdcdTI1QkUnIDogJ1x1MjVCOCd9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjZmctYm9keVwiPlxuICAgICAgICAgIDxDb2xvcnNjaGVtZVBpY2tlciB0PXt0fSB1c2VTdG9yZT17dXNlU3RvcmV9IHNldFRoZW1lPXtzZXRUaGVtZX0gcmVsb2FkQ2F0YWxvZz17cmVsb2FkQ2F0YWxvZ30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNmZy1kaXZpZGVyXCIgLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY2ZnLWZpZWxkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctbGFiZWxcIj57dCgnY29uZmlnLnRoZW1lc0RpcicpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkcmFmdC50aGVtZXNEaXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwifi8uZHNoL3RoZW1lc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIHRoZW1lc0RpcjogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNmZy1oaW50XCI+e3QoJ2NvbmZpZy50aGVtZXNEaXJIaW50Jyl9PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNmZy1maWVsZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLWxhYmVsXCI+e3QoJ2NvbmZpZy5kZWZhdWx0VGhlbWUnKX08L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHNoY3MtaW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZHJhZnQuZGVmYXVsdFRoZW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRyYWN1bGFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERyYWZ0KChkKSA9PiAoeyAuLi5kLCBkZWZhdWx0VGhlbWU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctaGludFwiPnt0KCdjb25maWcuZGVmYXVsdFRoZW1lSGludCcpfTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHtmYWlsZWQgPyA8cCBjbGFzc05hbWU9XCJkc2hjcy1lcnJvclwiIHJvbGU9XCJzdGF0dXNcIj57dCgnY29uZmlnLnNhdmVGYWlsZWQnKX08L3A+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNmZy1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1idG5cIiBkaXNhYmxlZD17IWRpcnR5IHx8IHNhdmluZ30gb25DbGljaz17KCkgPT4gdm9pZCBzYXZlKHRydWUpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5kaXNjYXJkJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0biBkc2hjcy1idG4tcHJpbWFyeVwiIGRpc2FibGVkPXshZGlydHkgfHwgc2F2aW5nfSBvbkNsaWNrPXsoKSA9PiB2b2lkIHNhdmUoZmFsc2UpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5zYXZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2xpPlxuICApXG59XG5cbi8qKiBGZXRjaCB0aGUgc2VydmVyLXNpZGUgdGhlbWUgY2F0YWxvZyBvbmNlLiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENhdGFsb2coKTogUHJvbWlzZTxUaGVtZUNhdGFsb2c+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYGNhdGFsb2cgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzLnN0YXR1c31gKVxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xufVxuXG4vKiogQ2xpZW50IHBsdWdpbiBib2R5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGN0eDogQ2xpZW50Q29udGV4dCk6IHZvaWQge1xuICBjb25zdCB0aGVtZSA9IGN0eC50aGVtZVxuICAvLyBUaGUgQXBwZWFyYW5jZSByb3cncyBkdXJhYmxlIHByZWZlcmVuY2UgKGxpZ2h0L2Rhcmsvc3lzdGVtKSBcdTIwMTQgdGhlIHRhcmdldFxuICAvLyBvZiBcIlx1OERERlx1OTY4Rlx1NTkxNlx1ODlDMiAvIEZvbGxvdyBhcHBlYXJhbmNlXCIuXG4gIGNvbnN0IGFwcGVhcmFuY2VTY29wZSA9IGN0eC5zZXR0aW5nc1Njb3BlLmJpbmQoeyBuYW1lc3BhY2U6IFRIRU1FX05TIH0pXG4gIGNvbnN0IG5hbWVCeUlkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgY29uc3QgZGlzcG9zZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdXG5cbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyB6aCwgZW4gfSksICdjb2xvcnNjaGVtZTogbG9jYWxlIGRpY3Rpb25hcnknKVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlUm93U3RvcmUoKVxuICBsZXQgYm91bmQ6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSB8IHVuZGVmaW5lZFxuICAvKiogUGVyc2lzdGVkL2Rlc2lyZWQgY29sb3JzY2hlbWUgaWQgKCcnID0gZm9sbG93IHRoZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UpLiAqL1xuICBsZXQgc2VsZWN0aW9uID0gREVGQVVMVF9JRFxuICBsZXQgcmV2aXNpb24gPSAtMVxuICAvKiogVGhlbWUgaWRzIGZyb20gdGhlIHRoZW1lcyBkaXJlY3RvcnkgKGRlbGV0YWJsZSBpbi1hcHApLiAqL1xuICBsZXQgZGVsZXRhYmxlSWRzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLyoqXG4gICAqIFByZXNlbnRlciBtaXJyb3IuIFRoZSBvZmZpY2lhbCB1aS1sYXlvdXQgcHJlc2VudGVyIGFwcGxpZXMgdGhlIHJlc29sdmVkXG4gICAqIHRoZW1lIHRvIDxib2R5PiBidXQgaXRzIGV2ZW50IGRlbGl2ZXJ5IGZyb20gdGhpcyBmaWJlciBpcyB1bnJlbGlhYmxlIGF0XG4gICAqIGxvYWQgKHRoZSB0aGVtZSBzZXJ2aWNlIGFsc28gYXN5bmNocm9ub3VzbHkgYWRvcHRzIHRoZSBkdXJhYmxlIHVpLXRoZW1lXG4gICAqIHByZWZlcmVuY2UsIGZsaXBwaW5nIHRoZSBwYWxldHRlIGJhY2spLiBUaGlzIHBsdWdpbiB0aGVyZWZvcmUgYXBwbGllcyB0aGVcbiAgICogYWN0aXZlIHRoZW1lJ3MgdG9rZW5zIGl0c2VsZiwgYW5kIHJlLWFzc2VydHMgdGhlIHBlcnNpc3RlZCBzZWxlY3Rpb24gZm9yXG4gICAqIGEgYm91bmRlZCBsb2FkIHdpbmRvdy4gSWRlbXBvdGVudCB3aXRoIHRoZSBvZmZpY2lhbCBwcmVzZW50ZXIgXHUyMDE0IHNhbWVcbiAgICogdmFsdWVzLCBzYW1lIHRhcmdldHMuXG4gICAqL1xuICBjb25zdCBhcHBsaWVkVG9rZW5zOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGFwcGx5QWN0aXZlVG9rZW5zID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoZW1lLmdldFRoZW1lKCkuYWN0aXZlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNvbG9yU2NoZW1lID0gYWN0aXZlLmNvbG9yU2NoZW1lXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICBpZiAoYWN0aXZlLmNvbG9yU2NoZW1lID09PSAnZGFyaycpIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnLCAnJylcbiAgICBlbHNlIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnKVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBhcHBsaWVkVG9rZW5zKSBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpXG4gICAgYXBwbGllZFRva2Vucy5sZW5ndGggPSAwXG4gICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFjdGl2ZS50b2tlbnMpKSB7XG4gICAgICBib2R5LnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKVxuICAgICAgYXBwbGllZFRva2Vucy5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSByb3cgaGlnaGxpZ2h0cyB0aGUgdGhlbWUgdGhlIHNlcnZpY2UgYWN0dWFsbHkgcmVzb2x2ZWQuICovXG4gIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcmVmID0gdGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlXG4gICAgcmV0dXJuIHByZWYgPT09ICdsaWdodCcgfHwgcHJlZiA9PT0gJ2RhcmsnIHx8IHByZWYgPT09ICdzeXN0ZW0nID8gREVGQVVMVF9JRCA6IHByZWZcbiAgfVxuXG4gIGNvbnN0IHB1Ymxpc2hSb3cgPSAoZXJyb3IgPSAnJykgPT4ge1xuICAgIGlmICghYm91bmQpIHJldHVyblxuICAgIGJvdW5kLnN5bmMoYWN0aXZlU2VsZWN0aW9uKCksIHJldmlzaW9uLCB0b1Jvd1RoZW1lcyh0aGVtZS5nZXRUaGVtZSgpLCBuYW1lQnlJZCksIGRlbGV0YWJsZUlkcywgZXJyb3IpXG4gIH1cblxuICAvKiogUGVyc2lzdCB0aGUgcGlja2VyIHNlbGVjdGlvbiB0aHJvdWdoIHRoZSBjYXRhbG9nIHJvdXRlIChzZXJ2ZXItc2lkZSkuICovXG4gIGNvbnN0IHNhdmVTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHZvaWQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGlvbjogaWQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCByZXMuc3RhdHVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4gY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIGUpKVxuICB9XG5cbiAgLyoqIFJldmVydCB0byB0aGUgZHVyYWJsZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UgKGxpZ2h0IC8gZGFyayAvIHN5c3RlbSkuICovXG4gIGNvbnN0IGZvbGxvd0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhcHBlYXJhbmNlU2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHByZWZlcmVuY2U/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHByZWYgPSB2YWx1ZT8ucHJlZmVyZW5jZVxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShwcmVmID09PSAnbGlnaHQnIHx8IHByZWYgPT09ICdkYXJrJyB8fCBwcmVmID09PSAnc3lzdGVtJyA/IHByZWYgOiAnc3lzdGVtJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHJlZ2lzdHJ5IG5vdCByZWFkeSBcdTIwMTQgZmFsbHMgYmFjayBvbiBuZXh0IGxvYWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmUtYXNzZXJ0IHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uIGZvciBhIGJvdW5kZWQgbG9hZCB3aW5kb3cuIFRoZSB0aGVtZVxuICAgKiBzZXJ2aWNlIGFzeW5jaHJvbm91c2x5IGFkb3B0cyB0aGUgZHVyYWJsZSB1aS10aGVtZSBwcmVmZXJlbmNlIGFmdGVyIHdlXG4gICAqIHJlc3RvcmUsIGFuZCBldmVudCBkZWxpdmVyeSBmcm9tIHRoaXMgZmliZXIgdG8gdGhlIG9mZmljaWFsIHByZXNlbnRlciBpc1xuICAgKiB1bnJlbGlhYmxlIFx1MjAxNCBzbyB3aGlsZSB0aGUgd2luZG93IGlzIG9wZW4gd2Uga2VlcCBwdXNoaW5nIG91ciBzZWxlY3Rpb25cbiAgICogKGFuZCBhcHBseWluZyBpdHMgdG9rZW5zKSB1bnRpbCB0aGUgd2luZG93IGNsb3Nlcy4gTmV2ZXIgZmlnaHRzIGxhdGVyXG4gICAqIHVzZXIgYWN0aW9uczogdGhlIHdpbmRvdyBvbmx5IHNwYW5zIHRoZSBsb2FkLXRpbWUgYWRvcHRpb24uXG4gICAqL1xuICBsZXQgZW5mb3JjZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCB1bmRlZmluZWRcbiAgY29uc3Qgc3RvcEVuZm9yY2UgPSAoKSA9PiB7XG4gICAgaWYgKGVuZm9yY2VUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbmZvcmNlVGltZXIpXG4gICAgICBlbmZvcmNlVGltZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgY29uc3QgZW5mb3JjZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBERUZBVUxUX0lEKSByZXR1cm5cbiAgICBpZiAodGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW1lLnNldFRoZW1lKHNlbGVjdGlvbilcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBub3QgcmVnaXN0ZXJlZCB5ZXQgXHUyMDE0IHRoZSBuZXh0IHRpY2sgcmV0cmllc1xuICAgICAgfVxuICAgIH1cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gIH1cblxuICAvLyBNaXJyb3IgdGhlIGxpdmUgdGhlbWUgc3RhdGUgaW50byB0aGUgcm93IGFuZCBrZWVwIHRoZSBhY3RpdmUgdG9rZW5zIG9uXG4gIC8vIDxib2R5PiBmb3Igd2hhdGV2ZXIgZXZlbnRzIHRoaXMgZmliZXIgZG9lcyByZWNlaXZlLlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgcHVibGlzaFJvdygpXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShpZClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCAoY2F0YWxvZyBzdGlsbCBsb2FkaW5nKSBcdTIwMTQgdGhlIHNlbGVjdGlvbiBpc1xuICAgICAgLy8gcmUtYXBwbGllZCBvbmNlIHJlZ2lzdHJhdGlvbiBjb21wbGV0ZXMuXG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3AgYWxsIHRoZW1lIHJlZ2lzdHJhdGlvbnMgKHVzZWQgYmVmb3JlIHJlLXJlZ2lzdGVyaW5nIGFmdGVyIGFuIGVkaXQpLiAqL1xuICBjb25zdCBkaXNwb3NlVGhlbWVzID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZGlzcG9zZSBvZiBkaXNwb3NlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpc3Bvc2UoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGFscmVhZHkgZ29uZVxuICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlcnMubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJDYXRhbG9nID0gKGNhdGFsb2c6IFRoZW1lQ2F0YWxvZykgPT4ge1xuICAgIGRpc3Bvc2VUaGVtZXMoKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgWy4uLmNhdGFsb2cucHJlc2V0cywgLi4uY2F0YWxvZy51c2VyVGhlbWVzLCAuLi5jYXRhbG9nLnNldHRpbmdzVGhlbWVzXSkge1xuICAgICAgbmFtZUJ5SWRbZW50cnkuaWRdID0gZW50cnkubmFtZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlzcG9zZSA9IHRoZW1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgY29sb3JTY2hlbWU6IGVudHJ5LmNvbG9yU2NoZW1lLFxuICAgICAgICAgIHRva2VuczogZW50cnkudG9rZW5zID8/IHt9LFxuICAgICAgICB9KVxuICAgICAgICBkaXNwb3NlcnMucHVzaChkaXNwb3NlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHJlZ2lzdGVyIHRoZW1lJywgZW50cnkuaWQsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIGRlbGV0YWJsZUlkcyA9IGNhdGFsb2cudXNlclRoZW1lcy5tYXAoKHQpID0+IHQuaWQpXG4gICAgLy8gUHJlY2VkZW5jZTogcGVyc2lzdGVkIHNlbGVjdGlvbiAoZnJvbSB0aGUgY2F0YWxvZykgPiBjb25maWcgZGVmYXVsdCA+IGZvbGxvdyBhcHBlYXJhbmNlLlxuICAgIGNvbnN0IHNhdmVkID0gY2F0YWxvZy5zZWxlY3Rpb25cbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgIH0gZWxzZSBpZiAoY2F0YWxvZy5kZWZhdWx0VGhlbWUpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGNhdGFsb2cuZGVmYXVsdFRoZW1lXG4gICAgfVxuICAgIGFwcGx5U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gREVGQVVMVF9JRCkge1xuICAgICAgLy8gQ292ZXIgdGhlIGxvYWQtdGltZSBhZG9wdGlvbiBmbGlwcyB3aXRoIGEgYm91bmRlZCByZS1hc3NlcnQgbG9vcC5cbiAgICAgIHN0b3BFbmZvcmNlKClcbiAgICAgIGVuZm9yY2VUaW1lciA9IHNldEludGVydmFsKGVuZm9yY2VTZWxlY3Rpb24sIDQwMClcbiAgICAgIHNldFRpbWVvdXQoc3RvcEVuZm9yY2UsIDUwMDApXG4gICAgfVxuICAgIHJldmlzaW9uID0gdGhlbWUuZ2V0VGhlbWUoKS5yZXZpc2lvblxuICAgIHB1Ymxpc2hSb3coKVxuICB9XG5cbiAgLyoqIFJlLWZldGNoIHRoZSBjYXRhbG9nIGFuZCByZS1yZWdpc3RlciAoYWZ0ZXIgYWRkaW5nL3JlbW92aW5nIGEgdXNlciB0aGVtZSkuICovXG4gIGNvbnN0IHJlbG9hZENhdGFsb2cgPSAoKSA9PiB7XG4gICAgdm9pZCBsb2FkQ2F0YWxvZygpXG4gICAgICAudGhlbihyZWdpc3RlckNhdGFsb2cpXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGNhdGFsb2cgcmVsb2FkIGZhaWxlZCcsIGUpXG4gICAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgICAgfSlcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyBhbmQgYXBwbGllZCB0b2tlbnMgd2hlbiB0aGlzIHBsdWdpbiB1bmxvYWRzXG4gIC8vIChITVIgLyBjb25maWcgZWRpdCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgZGlzcG9zZVRoZW1lcygpXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFwcGxpZWRUb2tlbnMpIGJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSlcbiAgICAgIGFwcGxpZWRUb2tlbnMubGVuZ3RoID0gMFxuICAgIH0sXG4gICAgJ2NvbG9yc2NoZW1lOiB0aGVtZSByZWdpc3RyYXRpb25zJyxcbiAgKVxuXG4gIC8vIFRoZSB3aG9sZSBDb2xvcnNjaGVtZSBjb25maWd1cmF0aW9uIGxpdmVzIGluIG9uZSBjYXJkIGluc2lkZVxuICAvLyBcdThCQkVcdTdGNkUgXHUyMTkyIFx1NjNEMlx1NEVGNiBcdTIxOTIgXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFIChzZXR0aW5ncy5wbHVnaW4uaXRlbSk6IHBpY2tlciArIGFkZC9kZWxldGUgKyBjb25maWcuXG4gIGN0eC5zbG90cy5pbmplY3QoJ3NldHRpbmdzLnBsdWdpbi5pdGVtJywgKCkgPT5cbiAgICBjdHguc2xvdHMucmVnaXN0ZXIoXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZXR0aW5ncy5wbHVnaW4uaXRlbScsXG4gICAgICAgIGlkOiAnY29sb3JzY2hlbWUtY29uZmlnJyxcbiAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgICAgIGluamVjdDogKGFjdGlvbnM6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgICAgIGJvdW5kID0gYWN0aW9uc1xuICAgICAgICAgIHB1Ymxpc2hSb3coKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaWRcbiAgICAgICAgICAgICAgLy8gQSBkZWxpYmVyYXRlIHBpY2sgd2lucyBvdmVyIHRoZSBsb2FkLXRpbWUgZW5mb3JjZW1lbnQgbG9vcC5cbiAgICAgICAgICAgICAgc3RvcEVuZm9yY2UoKVxuICAgICAgICAgICAgICBpZiAoaWQgPT09IERFRkFVTFRfSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBhbmQgZm9yZ2V0IG91clxuICAgICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBjb2xvcnNjaGVtZS5cbiAgICAgICAgICAgICAgICBmb2xsb3dBcHBlYXJhbmNlKClcbiAgICAgICAgICAgICAgICBzYXZlU2VsZWN0aW9uKCcnKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5U2VsZWN0aW9uKGlkKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxvYWRDYXRhbG9nLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBDb2xvcnNjaGVtZUNvbmZpZ0NhcmQsXG4gICAgKSxcbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBLG1CQUFvQztBQUVwQyxvQkFBNEI7QUFxVHhCO0FBM1NHLElBQU0sT0FBTztBQUdiLElBQU0sU0FBUyxDQUFDLFNBQVMsU0FBUyxVQUFVLGNBQWMsVUFBVSxlQUFlO0FBSTFGLElBQU0sV0FBVztBQUNqQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sWUFBWTtBQUNsQixJQUFNLGFBQWE7QUFNbkIsSUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q2hCLElBQUksT0FBTyxhQUFhLGVBQWUsU0FBUyxjQUFjLHlCQUF5QixLQUFLLFVBQVUsU0FBUyxD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a0IsR0FBRztBQUNoRCxpQkFBVyxhQUFhLEdBQUk7QUFBQSxJQUM5QjtBQUNBLGVBQVcsTUFBTSxTQUFTLEVBQUU7QUFDNUIsZUFBVztBQUFBLEVBQ2I7QUFHQSxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFNBQUssWUFBWSxFQUNkLEtBQUssZUFBZSxFQUNwQixNQUFNLENBQUMsTUFBZTtBQUNyQixjQUFRLEtBQUssdUNBQXVDLENBQUM7QUFDckQsaUJBQVcsT0FBTyxNQUFNLFlBQVksTUFBTSxRQUFRLGFBQWEsSUFBSSxPQUFRLEVBQTJCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQztBQUFBLElBQzVILENBQUM7QUFBQSxFQUNMO0FBRUEsT0FBSyxZQUFZLEVBQ2QsS0FBSyxlQUFlLEVBQ3BCLE1BQU0sQ0FBQyxNQUFlO0FBQ3JCLFlBQVEsS0FBSyxxQ0FBcUMsQ0FBQztBQUNuRCxlQUFXLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxhQUFhLElBQUksT0FBUSxFQUEyQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUM7QUFBQSxFQUM1SCxDQUFDO0FBSUgsTUFBSTtBQUFBLElBQ0YsTUFBTSxNQUFNO0FBQ1Ysb0JBQWM7QUFDZCxZQUFNLE9BQU8sU0FBUztBQUN0QixpQkFBV0EsU0FBUSxjQUFlLE1BQUssTUFBTSxlQUFlQSxLQUFJO0FBQ2hFLG9CQUFjLFNBQVM7QUFBQSxJQUN6QjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBSUEsTUFBSSxNQUFNO0FBQUEsSUFBTztBQUFBLElBQXdCLE1BQ3ZDLElBQUksTUFBTTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLElBQUk7QUFBQSxRQUNKLE9BQU87QUFBQSxRQUNQO0FBQUEsUUFDQSxRQUFRO0FBQUEsUUFDUixRQUFRLENBQUMsWUFBNkg7QUFDcEksa0JBQVE7QUFDUixxQkFBVztBQUNYLGlCQUFPO0FBQUEsWUFDTCxVQUFVLENBQUMsT0FBZTtBQUN4QiwwQkFBWTtBQUVaLDBCQUFZO0FBQ1osa0JBQUksT0FBTyxZQUFZO0FBR3JCLGlDQUFpQjtBQUNqQiw4QkFBYyxFQUFFO0FBQUEsY0FDbEIsT0FBTztBQUNMLCtCQUFlLEVBQUU7QUFDakIsOEJBQWMsRUFBRTtBQUFBLGNBQ2xCO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsibmFtZSJdCn0K

		})(module, module.exports, require);
		return module.exports;
	}
});
