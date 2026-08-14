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
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
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
.dshcs-error{color:var(--dsw-alias-label-error);font-size:12px;margin:0}
.dshcs-title-row{align-items:center;display:flex;justify-content:space-between}
.dshcs-btn{appearance:none;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;font-size:13px;line-height:1.5;padding:5px 14px}
.dshcs-btn:hover:not(:disabled):not(.dshcs-btn-primary){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}
.dshcs-btn:disabled{opacity:.4;cursor:default}
.dshcs-btn:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dshcs-btn-primary{background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-3);border-color:transparent}
.dshcs-chip-wrap{align-items:center;display:inline-flex;gap:4px}
.dshcs-del{border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:10px;height:20px;line-height:1;padding:0 6px}
.dshcs-del:hover{color:var(--dsw-alias-state-error-primary)}
.dshcs-del-confirm{border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary);font-size:10px}
.dshcs-form{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;display:flex;flex-direction:column;gap:12px;margin-top:12px;padding:14px}
.dshcs-form-title{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:600}
.dshcs-form-grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
.dshcs-field{display:flex;flex-direction:column;gap:4px}
.dshcs-field-label{color:var(--dsw-alias-label-secondary);font-size:11px}
.dshcs-input{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);height:34px;font:inherit;color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 12px;font-size:13px;line-height:1.5;min-width:0}
.dshcs-input:focus-visible{border-color:var(--dsw-alias-brand-primary);outline:none}
.dshcs-input:disabled{color:var(--dsw-alias-label-tertiary);cursor:default}
.dshcs-color{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;height:28px;padding:2px;width:100%;cursor:pointer}
.dshcs-field-advanced{color:var(--dsw-alias-label-caption);font-size:11px;grid-column:1/-1;margin-top:4px}
.dshcs-form-actions{display:flex;gap:8px;justify-content:flex-end}
.dshcfg-card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;list-style:none;transition:border-color .16s,background .16s}
.dshcfg-card:hover{border-color:var(--dsw-alias-label-dimmed)}
.dshcfg-card-open{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-label-dimmed)}
.dshcfg-head{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;align-items:center;gap:12px;padding:14px 16px;display:flex}
.dshcfg-head:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}
.dshcfg-head-text{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}
.dshcfg-name{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}
.dshcfg-desc{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:1.5}
.dshcfg-pending{white-space:nowrap;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-secondary);border-radius:999px;flex:none;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px}
.dshcfg-caret{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .16s}
.dshcfg-caret-open{transform:rotate(180deg)}
.dshcfg-body{border-top:1px solid var(--dsw-alias-border-l2);margin:0 16px;padding-bottom:8px;display:flex;flex-direction:column}
.dshcfg-field{flex-direction:column;gap:6px;padding:12px 0;display:flex}
.dshcfg-field+.dshcfg-field{border-top:1px solid var(--dsw-alias-border-l2)}
.dshcfg-label{min-width:0;color:var(--dsw-alias-label-primary);flex:1;font-size:13px;font-weight:500;line-height:1.5}
.dshcfg-hint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:1.5}
.dshcfg-failed{min-width:0;color:var(--dsw-alias-label-error);flex:1;margin:0;font-size:12px;line-height:1.5}
.dshcfg-actions{border-top:1px solid var(--dsw-alias-border-l2);justify-content:flex-end;align-items:center;gap:8px;padding:12px 0 4px;display:flex}
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
  const [draft, setDraft] = (0, import_react.useState)({ themesDir: "" });
  const [saving, setSaving] = (0, import_react.useState)(false);
  const [failed, setFailed] = (0, import_react.useState)(false);
  const load = async () => {
    try {
      const res = await fetch(CATALOG_URL, { headers: { accept: "application/json" } });
      const catalog = await res.json();
      const next = { themesDir: catalog.themesDir };
      setConfig(next);
      setDraft(next);
    } catch {
    }
  };
  (0, import_react.useEffect)(() => {
    if (open) void load();
  }, [open]);
  const dirty = config !== null && draft.themesDir !== config.themesDir;
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: open ? "dshcfg-card dshcfg-card-open" : "dshcfg-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "dshcfg-head", "aria-expanded": open, onClick: () => setOpen((v) => !v), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dshcfg-head-text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-name", children: t("colorscheme.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-desc", children: t("config.title") })
      ] }),
      dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcfg-pending", children: t("config.unsaved") }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutline14, { className: open ? "dshcfg-caret dshcfg-caret-open" : "dshcfg-caret" })
    ] }),
    open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcfg-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorschemePicker, { t, useStore, setTheme, reloadCatalog }),
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcfg-actions", children: [
        failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dshcfg-failed", role: "status", children: t("config.saveFailed") }) : null,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG5pbXBvcnQgeyBJY29uQ2hldnJvbkRvd25PdXRsaW5lMTQgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS1wcmltaXRpdmVzJ1xuLy8gVHlwZS1vbmx5IGltcG9ydHMgdGhhdCBwdWxsIHRoZSBjb250ZXh0IGF1Z21lbnRhdGlvbnMgKHNldHRpbmdzU2NvcGUsXG4vLyBsb2NhbGUsIHRoZSBzZXR0aW5ncy5nZW5lcmFsLml0ZW0gc2xvdCBjb250cmFjdCkgaW50byB0aGlzIHByb2dyYW0uXG5pbXBvcnQgdHlwZSB7fSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS1zZXR0aW5ncy9jbGllbnQnXG5pbXBvcnQgdHlwZSB7fSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS1zZXR0aW5ncy1wbHVnaW5zL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LWxvY2FsZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lQ2F0YWxvZyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnY29sb3JzY2hlbWUnXG5cbi8qKiBSZXF1aXJlZCBjbGllbnQgc2VydmljZXMgKGZpYmVyIGluamVjdCBcdTIwMTQgd2FpdHMgZm9yIHRoZSB0aGVtZSBzZXJ2aWNlKS4gKi9cbmV4cG9ydCBjb25zdCBpbmplY3QgPSBbJ3RoZW1lJywgJ3Nsb3RzJywgJ2xvY2FsZScsICdjb25uZWN0aW9uJywgJ3JlbW90ZScsICdzZXR0aW5nc1Njb3BlJ11cblxuY29uc3QgTlMgPSAnY29sb3JzY2hlbWUnXG4vKiogVGhlIGJ1aWx0LWluIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBuYW1lc3BhY2UgKG93bmVkIGJ5IGRzaC1jbGllbnQtdWktdGhlbWUpLiAqL1xuY29uc3QgVEhFTUVfTlMgPSAndWktdGhlbWUnXG5jb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MuY29sb3JzY2hlbWUnXG5jb25zdCBDQVRBTE9HX1VSTCA9ICdjb2xvcnNjaGVtZS90aGVtZXMuanNvbidcbmNvbnN0IFNUWUxFX1RBRyA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lL3Jvdy5jc3MnXG5jb25zdCBERUZBVUxUX0lEID0gJycgLy8gc2VudGluZWw6IGZvbGxvdyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlXG5cbi8qKlxuICogUHJlZmVyZW5jZS1yb3cgc3R5bGVzLiBJbmplY3RlZCBvbmNlIHBlciBtYXRlcmlhbGl6YXRpb24gd2l0aCB0aGUgbG9hZGVyJ3NcbiAqIGBkYXRhLXBsdWdpbi1jc3NgIGNvbnRyYWN0IHNvIHRoZSBjbGllbnQgSE1SIGRyaXZlciBjYW4gaW52ZW50b3J5L3JlbW92ZSBpdC5cbiAqL1xuY29uc3QgUk9XX0NTUyA9IGBcbi5kc2hjcy1yb3d7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3BhZGRpbmc6MTZweCAwfVxuLmRzaGNzLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjJweH1cbi5kc2hjcy1ncmlke2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4fVxuLmRzaGNzLWNoaXB7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZToxM3B4O2dhcDo4cHg7cGFkZGluZzo2cHggMTJweH1cbi5kc2hjcy1jaGlwOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWludGVyYWN0aXZlLWJnLWhvdmVyKX1cbi5kc2hjcy1jaGlwW2FyaWEtcHJlc3NlZD1cInRydWVcIl17YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbW9kdWxlLXBsYXRmb3JtKTtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApfVxuLmRzaGNzLWRvdHN7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6MnB4fVxuLmRzaGNzLWRvdHtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE4KTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MTJweDt3aWR0aDoxMnB4fVxuLmRzaGNzLWRvdC1kZWZhdWx0e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTUwKSA1MCUsdmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC05MDApIDUwJSl9XG4uZHNoY3MtZXJyb3J7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLWVycm9yKTtmb250LXNpemU6MTJweDttYXJnaW46MH1cbi5kc2hjcy10aXRsZS1yb3d7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1cbi5kc2hjcy1idG57YXBwZWFyYW5jZTpub25lO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo4cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtc2Vjb25kYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmc6NXB4IDE0cHh9XG4uZHNoY3MtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZHNoY3MtYnRuLXByaW1hcnkpe2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWludGVyYWN0aXZlLWJnLWhvdmVyKTtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7Ym9yZGVyLWNvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1kaW1tZWQpfVxuLmRzaGNzLWJ0bjpkaXNhYmxlZHtvcGFjaXR5Oi40O2N1cnNvcjpkZWZhdWx0fVxuLmRzaGNzLWJ0bjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1icmFuZC1wcmltYXJ5KTtvdXRsaW5lLW9mZnNldDoxcHh9XG4uZHNoY3MtYnRuLXByaW1hcnl7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTMpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1cbi5kc2hjcy1jaGlwLXdyYXB7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Z2FwOjRweH1cbi5kc2hjcy1kZWx7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTBweDtoZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoxO3BhZGRpbmc6MCA2cHh9XG4uZHNoY3MtZGVsOmhvdmVye2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KX1cbi5kc2hjcy1kZWwtY29uZmlybXtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1zdGF0ZS1lcnJvci1wcmltYXJ5KTtmb250LXNpemU6MTBweH1cbi5kc2hjcy1mb3Jte2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czoxMnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7bWFyZ2luLXRvcDoxMnB4O3BhZGRpbmc6MTRweH1cbi5kc2hjcy1mb3JtLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDB9XG4uZHNoY3MtZm9ybS1ncmlke2Rpc3BsYXk6Z3JpZDtnYXA6MTBweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTMwcHgsMWZyKSl9XG4uZHNoY3MtZmllbGR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NHB4fVxuLmRzaGNzLWZpZWxkLWxhYmVse2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2ZvbnQtc2l6ZToxMXB4fVxuLmRzaGNzLWlucHV0e2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMyk7aGVpZ2h0OjM0cHg7Zm9udDppbmhlcml0O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjAgMTJweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjU7bWluLXdpZHRoOjB9XG4uZHNoY3MtaW5wdXQ6Zm9jdXMtdmlzaWJsZXtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnkpO291dGxpbmU6bm9uZX1cbi5kc2hjcy1pbnB1dDpkaXNhYmxlZHtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpO2N1cnNvcjpkZWZhdWx0fVxuLmRzaGNzLWNvbG9ye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTIpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7Ym9yZGVyLXJhZGl1czo3cHg7aGVpZ2h0OjI4cHg7cGFkZGluZzoycHg7d2lkdGg6MTAwJTtjdXJzb3I6cG9pbnRlcn1cbi5kc2hjcy1maWVsZC1hZHZhbmNlZHtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtY2FwdGlvbik7Zm9udC1zaXplOjExcHg7Z3JpZC1jb2x1bW46MS8tMTttYXJnaW4tdG9wOjRweH1cbi5kc2hjcy1mb3JtLWFjdGlvbnN7ZGlzcGxheTpmbGV4O2dhcDo4cHg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVxuLmRzaGNmZy1jYXJke2JvcmRlcjoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMyk7Ym9yZGVyLXJhZGl1czoxMnB4O2xpc3Qtc3R5bGU6bm9uZTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTZzLGJhY2tncm91bmQgLjE2c31cbi5kc2hjZmctY2FyZDpob3Zlcntib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLWRpbW1lZCl9XG4uZHNoY2ZnLWNhcmQtb3BlbntiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0yKTtib3JkZXItY29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLWRpbW1lZCl9XG4uZHNoY2ZnLWhlYWR7YXBwZWFyYW5jZTpub25lO3dpZHRoOjEwMCU7Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXQ7dGV4dC1hbGlnbjpsZWZ0O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MTJweDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEycHg7cGFkZGluZzoxNHB4IDE2cHg7ZGlzcGxheTpmbGV4fVxuLmRzaGNmZy1oZWFkOmZvY3VzLXZpc2libGV7b3V0bGluZToycHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnkpO291dGxpbmUtb2Zmc2V0Oi0ycHh9XG4uZHNoY2ZnLWhlYWQtdGV4dHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxO2dhcDo0cHg7bWluLXdpZHRoOjA7ZGlzcGxheTpmbGV4fVxuLmRzaGNmZy1uYW1le2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MS40fVxuLmRzaGNmZy1kZXNje2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSk7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MS41fVxuLmRzaGNmZy1wZW5kaW5ne3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1iZy1tb2R1bGUtcGxhdGZvcm0pO2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1zZWNvbmRhcnkpO2JvcmRlci1yYWRpdXM6OTk5cHg7ZmxleDpub25lO3BhZGRpbmc6MXB4IDhweDtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MTdweH1cbi5kc2hjZmctY2FyZXR7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTtmbGV4Om5vbmU7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjE2c31cbi5kc2hjZmctY2FyZXQtb3Blbnt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9XG4uZHNoY2ZnLWJvZHl7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7bWFyZ2luOjAgMTZweDtwYWRkaW5nLWJvdHRvbTo4cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1cbi5kc2hjZmctZmllbGR7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo2cHg7cGFkZGluZzoxMnB4IDA7ZGlzcGxheTpmbGV4fVxuLmRzaGNmZy1maWVsZCsuZHNoY2ZnLWZpZWxke2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpfVxuLmRzaGNmZy1sYWJlbHttaW4td2lkdGg6MDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSk7ZmxleDoxO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxLjV9XG4uZHNoY2ZnLWhpbnR7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KTttYXJnaW46MDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjV9XG4uZHNoY2ZnLWZhaWxlZHttaW4td2lkdGg6MDtjb2xvcjp2YXIoLS1kc3ctYWxpYXMtbGFiZWwtZXJyb3IpO2ZsZXg6MTttYXJnaW46MDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjV9XG4uZHNoY2ZnLWFjdGlvbnN7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6OHB4O3BhZGRpbmc6MTJweCAwIDRweDtkaXNwbGF5OmZsZXh9XG5gXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLXBsdWdpbi1jc3M9JHtKU09OLnN0cmluZ2lmeShTVFlMRV9UQUcpfV1gKSA9PT0gbnVsbCkge1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHRhZy5kYXRhc2V0LnBsdWdpbiA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lJ1xuICB0YWcuZGF0YXNldC5wbHVnaW5Dc3MgPSBTVFlMRV9UQUdcbiAgdGFnLnRleHRDb250ZW50ID0gUk9XX0NTU1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZylcbn1cblxuLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSBkaWN0aW9uYXJ5IChrZXktc2V0IHNvdXJjZSBvZiB0cnV0aCkuICovXG5jb25zdCB6aCA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OCcsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ1x1OERERlx1OTY4Rlx1NTkxNlx1ODlDMicsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnXHU5MTREXHU4MjcyXHU2NUI5XHU2ODQ4XHU1MkEwXHU4RjdEXHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmFkZCc6ICdcdTY1QjBcdTU4OUVcdTRFM0JcdTk4OTgnLFxuICAnY29sb3JzY2hlbWUuYWRkVGl0bGUnOiAnXHU2NUIwXHU1ODlFXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTNCXHU5ODk4JyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmlkJzogJ1x1NjgwN1x1OEJDNiAoaWQpJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLm5hbWUnOiAnXHU1NDBEXHU3OUYwJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdcdTZBMjFcdTVGMEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnXHU2REYxXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZS5saWdodCc6ICdcdTZENDVcdTgyNzInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnXHU4MENDXHU2NjZGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmZnJzogJ1x1NjU4N1x1NUI1NycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5hY2NlbnQnOiAnXHU1RjNBXHU4QzAzXHU4MjcyJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFkdmFuY2VkJzogJ1x1OUFEOFx1N0VBN1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdcdTZENkVcdThENzdcdTg4NjhcdTk3NjInLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2lkZWJhcic6ICdcdTRGQTdcdTY4MEYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc3VjY2Vzcyc6ICdcdTYyMTBcdTUyOUYnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnXHU5NTE5XHU4QkVGJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLndhcm4nOiAnXHU4QjY2XHU1NDRBJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnXHU0RkREXHU1QjU4JyxcbiAgJ2NvbG9yc2NoZW1lLmNhbmNlbCc6ICdcdTUzRDZcdTZEODgnLFxuICAnY29sb3JzY2hlbWUuYWRkRXJyb3InOiAnXHU0RkREXHU1QjU4XHU1OTMxXHU4RDI1JyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdcdTUyMjBcdTk2NjQnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdcdTUxOERcdTZCMjFcdTcwQjlcdTUxRkJcdTc4NkVcdThCQTRcdTUyMjBcdTk2NjQnLFxuICAnY29uZmlnLnRpdGxlJzogJ1x1OTE0RFx1N0Y2RScsXG4gICdjb25maWcudGhlbWVzRGlyJzogJ1x1NEUzQlx1OTg5OFx1NzZFRVx1NUY1NScsXG4gICdjb25maWcudGhlbWVzRGlySGludCc6ICdcdTc1MjhcdTYyMzdcdTRFM0JcdTk4OTggSlNPTiBcdTY1ODdcdTRFRjZcdTc2ODRcdTc2RUVcdTVGNTVcdUZGMDhcdTc1NTlcdTdBN0EgPSBcdTlFRDhcdThCQTQgfi8uZHNoL3RoZW1lc1x1RkYwOScsXG4gICdjb25maWcuc2F2ZSc6ICdcdTRGRERcdTVCNTgnLFxuICAnY29uZmlnLmRpc2NhcmQnOiAnXHU2MDYyXHU1OTBEXHU5RUQ4XHU4QkE0JyxcbiAgJ2NvbmZpZy51bnNhdmVkJzogJ1x1NjcyQVx1NEZERFx1NUI1OCcsXG4gICdjb25maWcuc2F2ZUZhaWxlZCc6ICdcdTRGRERcdTVCNThcdTU5MzFcdThEMjUnLFxufSBhcyBjb25zdFxuXG4vKiogRW5nbGlzaCBkaWN0aW9uYXJ5LCBjaGVja2VkIGNvbXBsZXRlIGFnYWluc3QgdGhlIHpoIGtleSBzZXQuICovXG5jb25zdCBlbjogUmVjb3JkPGtleW9mIHR5cGVvZiB6aCwgc3RyaW5nPiA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ0NvbG9yc2NoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmRlZmF1bHQnOiAnRm9sbG93IGFwcGVhcmFuY2UnLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ0ZhaWxlZCB0byBsb2FkIGNvbG9yc2NoZW1lcycsXG4gICdjb2xvcnNjaGVtZS5hZGQnOiAnQWRkIHRoZW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZFRpdGxlJzogJ05ldyBjdXN0b20gdGhlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuaWQnOiAnSUQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQubmFtZSc6ICdOYW1lJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZSc6ICdTY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuc2NoZW1lLmRhcmsnOiAnRGFyaycsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUubGlnaHQnOiAnTGlnaHQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYmcnOiAnQmFja2dyb3VuZCcsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5mZyc6ICdGb3JlZ3JvdW5kJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLmFjY2VudCc6ICdBY2NlbnQnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuYWR2YW5jZWQnOiAnQWR2YW5jZWQgKG9wdGlvbmFsKScsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCc6ICdFbGV2YXRlZCBzdXJmYWNlJyxcbiAgJ2NvbG9yc2NoZW1lLmZpZWxkLnNpZGViYXInOiAnU2lkZWJhcicsXG4gICdjb2xvcnNjaGVtZS5maWVsZC5zdWNjZXNzJzogJ1N1Y2Nlc3MnLFxuICAnY29sb3JzY2hlbWUuZmllbGQuZXJyb3InOiAnRXJyb3InLFxuICAnY29sb3JzY2hlbWUuZmllbGQud2Fybic6ICdXYXJuaW5nJyxcbiAgJ2NvbG9yc2NoZW1lLnNhdmUnOiAnU2F2ZScsXG4gICdjb2xvcnNjaGVtZS5jYW5jZWwnOiAnQ2FuY2VsJyxcbiAgJ2NvbG9yc2NoZW1lLmFkZEVycm9yJzogJ0ZhaWxlZCB0byBzYXZlJyxcbiAgJ2NvbG9yc2NoZW1lLmRlbGV0ZSc6ICdEZWxldGUnLFxuICAnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZSc6ICdDbGljayBhZ2FpbiB0byBjb25maXJtIGRlbGV0ZScsXG4gICdjb25maWcudGl0bGUnOiAnQ29uZmlndXJhdGlvbicsXG4gICdjb25maWcudGhlbWVzRGlyJzogJ1RoZW1lcyBkaXJlY3RvcnknLFxuICAnY29uZmlnLnRoZW1lc0RpckhpbnQnOiAnRGlyZWN0b3J5IGZvciB1c2VyIHRoZW1lIEpTT04gZmlsZXMgKGVtcHR5ID0gZGVmYXVsdCB+Ly5kc2gvdGhlbWVzKScsXG4gICdjb25maWcuc2F2ZSc6ICdTYXZlJyxcbiAgJ2NvbmZpZy5kaXNjYXJkJzogJ1Jlc2V0JyxcbiAgJ2NvbmZpZy51bnNhdmVkJzogJ1Vuc2F2ZWQnLFxuICAnY29uZmlnLnNhdmVGYWlsZWQnOiAnU2F2ZSBmYWlsZWQnLFxufVxuXG4vKiogUm93IGRpc3BsYXkgbW9kZWw6IGlkLCBuYW1lLCBhbmQgdGhyZWUgc2FtcGxlIGNvbG9ycyAoYmcgLyBmZyAvIGFjY2VudCkuICovXG5pbnRlcmZhY2UgUm93VGhlbWUge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb2xvclNjaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJ1xuICBzYW1wbGVzOiBzdHJpbmdbXVxufVxuXG5pbnRlcmZhY2UgUm93U3RhdGUge1xuICBzZWxlY3Rpb246IHN0cmluZ1xuICByZXZpc2lvbjogbnVtYmVyXG4gIHRoZW1lczogUm93VGhlbWVbXVxuICAvKiogVGhlbWUgaWRzIHRoYXQgbGl2ZSBpbiB0aGUgdGhlbWVzIGRpcmVjdG9yeSBhbmQgY2FuIGJlIGRlbGV0ZWQgaW4tYXBwLiAqL1xuICBkZWxldGFibGU6IHN0cmluZ1tdXG4gIGVycm9yOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93U3RvcmUoKSB7XG4gIHJldHVybiBkZWZpbmVTdG9yZSh7XG4gICAgaW5pdDogKCk6IFJvd1N0YXRlID0+ICh7IHNlbGVjdGlvbjogREVGQVVMVF9JRCwgcmV2aXNpb246IC0xLCB0aGVtZXM6IFtdLCBkZWxldGFibGU6IFtdLCBlcnJvcjogJycgfSksXG4gICAgYWN0aW9uczoge1xuICAgICAgc3luYzogKGQ6IFJvd1N0YXRlLCBzZWxlY3Rpb246IHN0cmluZywgcmV2aXNpb246IG51bWJlciwgdGhlbWVzOiBSb3dUaGVtZVtdLCBkZWxldGFibGU6IHN0cmluZ1tdLCBlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChyZXZpc2lvbiA8PSBkLnJldmlzaW9uKSByZXR1cm5cbiAgICAgICAgZC5zZWxlY3Rpb24gPSBzZWxlY3Rpb25cbiAgICAgICAgZC5yZXZpc2lvbiA9IHJldmlzaW9uXG4gICAgICAgIGQudGhlbWVzID0gdGhlbWVzXG4gICAgICAgIGQuZGVsZXRhYmxlID0gZGVsZXRhYmxlXG4gICAgICAgIGQuZXJyb3IgPSBlcnJvclxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuXG5mdW5jdGlvbiB0b1Jvd1RoZW1lcyhzbmFwc2hvdDogVGhlbWVTbmFwc2hvdCwgbmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBSb3dUaGVtZVtdIHtcbiAgcmV0dXJuIHNuYXBzaG90LnRoZW1lc1xuICAgIC8vIFRoZSBidWlsdC1pbiBsaWdodC9kYXJrIHBhaXIgaXMgb3duZWQgYnkgdGhlIEFwcGVhcmFuY2Ugcm93IGFib3ZlLlxuICAgIC5maWx0ZXIoKHQpID0+IHQuaWQgIT09ICdsaWdodCcgJiYgdC5pZCAhPT0gJ2RhcmsnKVxuICAgIC5tYXAoKHQpID0+ICh7XG4gICAgICBpZDogdC5pZCxcbiAgICAgIG5hbWU6IG5hbWVzW3QuaWRdID8/IHQuaWQsXG4gICAgICBjb2xvclNjaGVtZTogdC5jb2xvclNjaGVtZSxcbiAgICAgIHNhbXBsZXM6IFtcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWJnLWJhc2UnXSA/PyAnJyxcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnknXSA/PyAnJyxcbiAgICAgICAgdC50b2tlbnNbJy0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnknXSA/PyAnJyxcbiAgICAgIF0sXG4gICAgfSkpXG59XG5cbi8qKiBUaGUgQ29sb3JzY2hlbWUgcGlja2VyIChjaGlwcyArIGFkZC9kZWxldGUpLCByZW5kZXJlZCBpbnNpZGUgdGhlIGNvbmZpZyBjYXJkLiAqL1xuZnVuY3Rpb24gQ29sb3JzY2hlbWVQaWNrZXIocHJvcHM6IHtcbiAgdDogKGtleToga2V5b2YgdHlwZW9mIHpoKSA9PiBzdHJpbmdcbiAgdXNlU3RvcmU6IDxTPihzZWxlY3RvcjogKHM6IFJvd1N0YXRlKSA9PiBTKSA9PiBTXG4gIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICByZWxvYWRDYXRhbG9nOiAoKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgdCwgdXNlU3RvcmUsIHNldFRoZW1lLCByZWxvYWRDYXRhbG9nIH0gPSBwcm9wc1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VTdG9yZSgocykgPT4gcy5zZWxlY3Rpb24pXG4gIGNvbnN0IHRoZW1lcyA9IHVzZVN0b3JlKChzKSA9PiBzLnRoZW1lcylcbiAgY29uc3QgZGVsZXRhYmxlID0gdXNlU3RvcmUoKHMpID0+IHMuZGVsZXRhYmxlKVxuICBjb25zdCBlcnJvciA9IHVzZVN0b3JlKChzKSA9PiBzLmVycm9yKVxuXG4gIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29uZmlybURlbGV0ZSwgc2V0Q29uZmlybURlbGV0ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoe1xuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBjb2xvclNjaGVtZTogJ2RhcmsnIGFzICdsaWdodCcgfCAnZGFyaycsXG4gICAgYmc6ICcjMWUxZTJlJyxcbiAgICBmZzogJyNjZGQ2ZjQnLFxuICAgIGFjY2VudDogJyNjYmE2ZjcnLFxuICAgIGJnRWxldmF0ZWQ6ICcjMTgxODI1JyxcbiAgICBiZ1NpZGViYXI6ICcjMTgxODI1JyxcbiAgICBzdWNjZXNzOiAnI2E2ZTNhMScsXG4gICAgZXJyb3I6ICcjZjM4YmE4JyxcbiAgICB3YXJuOiAnI2Y5ZTJhZicsXG4gIH0pXG4gIGNvbnN0IHNldEZpZWxkID0gKGtleToga2V5b2YgdHlwZW9mIGZpZWxkcykgPT4gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICBzZXRGaWVsZHMoKGYpID0+ICh7IC4uLmYsIFtrZXldOiBldmVudC50YXJnZXQudmFsdWUgfSkpXG5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpZCA9IGZpZWxkcy5pZC50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIWlkKSB7XG4gICAgICBzZXRGb3JtRXJyb3IodCgnY29sb3JzY2hlbWUuZmllbGQuaWQnKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRTYXZpbmcodHJ1ZSlcbiAgICBzZXRGb3JtRXJyb3IoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGFjdGlvbjogJ2FkZC10aGVtZScsXG4gICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZTogZmllbGRzLm5hbWUudHJpbSgpIHx8IGlkLFxuICAgICAgICAgICAgY29sb3JTY2hlbWU6IGZpZWxkcy5jb2xvclNjaGVtZSxcbiAgICAgICAgICAgIHJvbGVzOiB7XG4gICAgICAgICAgICAgIGJnOiBmaWVsZHMuYmcsXG4gICAgICAgICAgICAgIGZnOiBmaWVsZHMuZmcsXG4gICAgICAgICAgICAgIGFjY2VudDogZmllbGRzLmFjY2VudCxcbiAgICAgICAgICAgICAgYmdFbGV2YXRlZDogZmllbGRzLmJnRWxldmF0ZWQsXG4gICAgICAgICAgICAgIGJnU2lkZWJhcjogZmllbGRzLmJnU2lkZWJhcixcbiAgICAgICAgICAgICAgc3VjY2VzczogZmllbGRzLnN1Y2Nlc3MsXG4gICAgICAgICAgICAgIGVycm9yOiBmaWVsZHMuZXJyb3IsXG4gICAgICAgICAgICAgIHdhcm46IGZpZWxkcy53YXJuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBvazogZmFsc2UsIGVycm9yOiAnaW52YWxpZCByZXNwb25zZScgfSkpKSBhcyB7IG9rOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9XG4gICAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxuICAgICAgICBzZXRGaWVsZHMoKGYpID0+ICh7IC4uLmYsIGlkOiAnJywgbmFtZTogJycgfSkpXG4gICAgICAgIHJlbG9hZENhdGFsb2coKVxuICAgICAgICBzZXRUaGVtZShpZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvcm1FcnJvcihyZXN1bHQuZXJyb3IgPz8gdCgnY29sb3JzY2hlbWUuYWRkRXJyb3InKSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRGb3JtRXJyb3IoZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogdCgnY29sb3JzY2hlbWUuYWRkRXJyb3InKSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNvbmZpcm1EZWxldGUgIT09IGlkKSB7XG4gICAgICBzZXRDb25maXJtRGVsZXRlKGlkKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb25maXJtRGVsZXRlKChjKSA9PiAoYyA9PT0gaWQgPyBudWxsIDogYykpLCAyNTAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldENvbmZpcm1EZWxldGUobnVsbClcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ3JlbW92ZS10aGVtZScsIGlkIH0pLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+ICh7IG9rOiBmYWxzZSwgZXJyb3I6ICdpbnZhbGlkIHJlc3BvbnNlJyB9KSkpIGFzIHsgb2s6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH1cbiAgICAgIGlmICghcmVzdWx0Lm9rKSBzZXRGb3JtRXJyb3IocmVzdWx0LmVycm9yID8/IHQoJ2NvbG9yc2NoZW1lLmFkZEVycm9yJykpXG4gICAgICByZWxvYWRDYXRhbG9nKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRGb3JtRXJyb3IoZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogdCgnY29sb3JzY2hlbWUuYWRkRXJyb3InKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGlwcyA9IFtcbiAgICB7IGlkOiBERUZBVUxUX0lELCBsYWJlbDogdCgnY29sb3JzY2hlbWUuZGVmYXVsdCcpLCBzYW1wbGVzOiBbXSBhcyBzdHJpbmdbXSB9LFxuICAgIC4uLnRoZW1lcy5tYXAoKHRoKSA9PiAoeyBpZDogdGguaWQsIGxhYmVsOiB0aC5uYW1lLCBzYW1wbGVzOiB0aC5zYW1wbGVzIH0pKSxcbiAgXVxuXG4gIGNvbnN0IGNvbG9yRmllbGQgPSAobGFiZWw6IHN0cmluZywga2V5OiBrZXlvZiB0eXBlb2YgZmllbGRzKSA9PiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1sYWJlbFwiPntsYWJlbH08L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3NOYW1lPVwiZHNoY3MtY29sb3JcIiB2YWx1ZT17ZmllbGRzW2tleV0gYXMgc3RyaW5nfSBvbkNoYW5nZT17c2V0RmllbGQoa2V5KX0gLz5cbiAgICA8L2xhYmVsPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy10aXRsZS1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy10aXRsZVwiPnt0KCdjb2xvcnNjaGVtZS50aXRsZScpfTwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZHNoY3MtYnRuXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93Rm9ybSgodikgPT4gIXYpXG4gICAgICAgICAgICBzZXRGb3JtRXJyb3IoJycpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdjb2xvcnNjaGVtZS5hZGQnKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZ3JpZFwiPlxuICAgICAgICB7Y2hpcHMubWFwKChjaGlwKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEZWxldGFibGUgPSBkZWxldGFibGUuaW5jbHVkZXMoY2hpcC5pZClcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtjaGlwLmlkfSBjbGFzc05hbWU9XCJkc2hjcy1jaGlwLXdyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZHNoY3MtY2hpcFwiIGFyaWEtcHJlc3NlZD17c2VsZWN0aW9uID09PSBjaGlwLmlkfSBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShjaGlwLmlkKX0+XG4gICAgICAgICAgICAgICAge2NoaXAuc2FtcGxlcy5sZW5ndGggPT09IDMgPyAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1kb3RzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlwLnNhbXBsZXMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJkc2hjcy1kb3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWRvdCBkc2hjcy1kb3QtZGVmYXVsdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y2hpcC5sYWJlbH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtpc0RlbGV0YWJsZSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRzaGNzLWRlbCR7Y29uZmlybURlbGV0ZSA9PT0gY2hpcC5pZCA/ICcgZHNoY3MtZGVsLWNvbmZpcm0nIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdjb2xvcnNjaGVtZS5kZWxldGUnKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgcmVtb3ZlKGNoaXAuaWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb25maXJtRGVsZXRlID09PSBjaGlwLmlkID8gdCgnY29sb3JzY2hlbWUuY29uZmlybURlbGV0ZScpIDogJ1x1MjcxNSd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93Rm9ybSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1mb3JtLXRpdGxlXCI+e3QoJ2NvbG9yc2NoZW1lLmFkZFRpdGxlJyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1mb3JtLWdyaWRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkc2hjcy1maWVsZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1maWVsZC1sYWJlbFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5pZCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImRzaGNzLWlucHV0XCIgdmFsdWU9e2ZpZWxkcy5pZH0gb25DaGFuZ2U9e3NldEZpZWxkKCdpZCcpfSBwbGFjZWhvbGRlcj1cIm15LXRoZW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY3MtZmllbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZmllbGQtbGFiZWxcIj57dCgnY29sb3JzY2hlbWUuZmllbGQubmFtZScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImRzaGNzLWlucHV0XCIgdmFsdWU9e2ZpZWxkcy5uYW1lfSBvbkNoYW5nZT17c2V0RmllbGQoJ25hbWUnKX0gcGxhY2Vob2xkZXI9XCJNeSBUaGVtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWxhYmVsXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLnNjaGVtZScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRzaGNzLWlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmNvbG9yU2NoZW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmllbGRzKChmKSA9PiAoeyAuLi5mLCBjb2xvclNjaGVtZTogZS50YXJnZXQudmFsdWUgYXMgJ2xpZ2h0JyB8ICdkYXJrJyB9KSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUuZGFyaycpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPnt0KCdjb2xvcnNjaGVtZS5maWVsZC5zY2hlbWUubGlnaHQnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuYmcnKSwgJ2JnJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5mZycpLCAnZmcnKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLmFjY2VudCcpLCAnYWNjZW50Jyl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWZpZWxkLWFkdmFuY2VkXCI+e3QoJ2NvbG9yc2NoZW1lLmZpZWxkLmFkdmFuY2VkJyl9PC9kaXY+XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5lbGV2YXRlZCcpLCAnYmdFbGV2YXRlZCcpfVxuICAgICAgICAgICAge2NvbG9yRmllbGQodCgnY29sb3JzY2hlbWUuZmllbGQuc2lkZWJhcicpLCAnYmdTaWRlYmFyJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5zdWNjZXNzJyksICdzdWNjZXNzJyl9XG4gICAgICAgICAgICB7Y29sb3JGaWVsZCh0KCdjb2xvcnNjaGVtZS5maWVsZC5lcnJvcicpLCAnZXJyb3InKX1cbiAgICAgICAgICAgIHtjb2xvckZpZWxkKHQoJ2NvbG9yc2NoZW1lLmZpZWxkLndhcm4nKSwgJ3dhcm4nKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Zm9ybUVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1lcnJvclwiPntmb3JtRXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLWZvcm0tYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZHNoY3MtYnRuIGRzaGNzLWJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQ9e3NhdmluZ30gb25DbGljaz17KCkgPT4gdm9pZCBzYXZlKCl9PlxuICAgICAgICAgICAgICB7dCgnY29sb3JzY2hlbWUuc2F2ZScpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1idG5cIiBkaXNhYmxlZD17c2F2aW5nfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Rm9ybShmYWxzZSl9PlxuICAgICAgICAgICAgICB7dCgnY29sb3JzY2hlbWUuY2FuY2VsJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vKiogQ29uZmlnIGNhcmQgZm9yIHRoZSBQbHVnaW5zIGNvbmZpZ3VyYXRpb24gdGFiIChTZXR0aW5ncyBcdTIxOTIgUGx1Z2lucyBcdTIxOTIgXHU1M0VGXHU5MTREXHU3RjZFKS4gKi9cbmZ1bmN0aW9uIENvbG9yc2NoZW1lQ29uZmlnQ2FyZChwcm9wczoge1xuICB0OiAoa2V5OiBrZXlvZiB0eXBlb2YgemgpID0+IHN0cmluZ1xuICB1c2VTdG9yZTogPFM+KHNlbGVjdG9yOiAoczogUm93U3RhdGUpID0+IFMpID0+IFNcbiAgc2V0VGhlbWU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIHJlbG9hZENhdGFsb2c6ICgpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgeyB0LCB1c2VTdG9yZSwgc2V0VGhlbWUsIHJlbG9hZENhdGFsb2cgfSA9IHByb3BzXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gdXNlU3RhdGU8eyB0aGVtZXNEaXI6IHN0cmluZyB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZSh7IHRoZW1lc0RpcjogJycgfSlcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZmFpbGVkLCBzZXRGYWlsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gICAgICBjb25zdCBjYXRhbG9nID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xuICAgICAgY29uc3QgbmV4dCA9IHsgdGhlbWVzRGlyOiBjYXRhbG9nLnRoZW1lc0RpciB9XG4gICAgICBzZXRDb25maWcobmV4dClcbiAgICAgIHNldERyYWZ0KG5leHQpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBrZWVwIGxhc3Qga25vd24gc3RhdGVcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB2b2lkIGxvYWQoKVxuICB9LCBbb3Blbl0pXG5cbiAgY29uc3QgZGlydHkgPSBjb25maWcgIT09IG51bGwgJiYgZHJhZnQudGhlbWVzRGlyICE9PSBjb25maWcudGhlbWVzRGlyXG5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jIChjbGVhcjogYm9vbGVhbikgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKVxuICAgIHNldEZhaWxlZChmYWxzZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjbGVhciA/IHsgYWN0aW9uOiAnc2V0LWNvbmZpZycsIGNvbmZpZzoge30gfSA6IHsgYWN0aW9uOiAnc2V0LWNvbmZpZycsIGNvbmZpZzogZHJhZnQgfSksXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgb2s6IGZhbHNlIH0pKSkgYXMgeyBvazogYm9vbGVhbiB9XG4gICAgICBpZiAoIXJlc3VsdC5vaykgc2V0RmFpbGVkKHRydWUpXG4gICAgICBhd2FpdCBsb2FkKClcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEZhaWxlZCh0cnVlKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtvcGVuID8gJ2RzaGNmZy1jYXJkIGRzaGNmZy1jYXJkLW9wZW4nIDogJ2RzaGNmZy1jYXJkJ30+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjZmctaGVhZFwiIGFyaWEtZXhwYW5kZWQ9e29wZW59IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHYpID0+ICF2KX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNmZy1oZWFkLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctbmFtZVwiPnt0KCdjb2xvcnNjaGVtZS50aXRsZScpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctZGVzY1wiPnt0KCdjb25maWcudGl0bGUnKX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2RpcnR5ID8gPHNwYW4gY2xhc3NOYW1lPVwiZHNoY2ZnLXBlbmRpbmdcIj57dCgnY29uZmlnLnVuc2F2ZWQnKX08L3NwYW4+IDogbnVsbH1cbiAgICAgICAgPEljb25DaGV2cm9uRG93bk91dGxpbmUxNCBjbGFzc05hbWU9e29wZW4gPyAnZHNoY2ZnLWNhcmV0IGRzaGNmZy1jYXJldC1vcGVuJyA6ICdkc2hjZmctY2FyZXQnfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjZmctYm9keVwiPlxuICAgICAgICAgIDxDb2xvcnNjaGVtZVBpY2tlciB0PXt0fSB1c2VTdG9yZT17dXNlU3RvcmV9IHNldFRoZW1lPXtzZXRUaGVtZX0gcmVsb2FkQ2F0YWxvZz17cmVsb2FkQ2F0YWxvZ30gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHNoY2ZnLWZpZWxkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjZmctbGFiZWxcIj57dCgnY29uZmlnLnRoZW1lc0RpcicpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkcmFmdC50aGVtZXNEaXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwifi8uZHNoL3RoZW1lc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIHRoZW1lc0RpcjogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNmZy1oaW50XCI+e3QoJ2NvbmZpZy50aGVtZXNEaXJIaW50Jyl9PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjZmctYWN0aW9uc1wiPlxuICAgICAgICAgICAge2ZhaWxlZCA/IDxwIGNsYXNzTmFtZT1cImRzaGNmZy1mYWlsZWRcIiByb2xlPVwic3RhdHVzXCI+e3QoJ2NvbmZpZy5zYXZlRmFpbGVkJyl9PC9wPiA6IG51bGx9XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkc2hjcy1idG5cIiBkaXNhYmxlZD17IWRpcnR5IHx8IHNhdmluZ30gb25DbGljaz17KCkgPT4gdm9pZCBzYXZlKHRydWUpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5kaXNjYXJkJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRzaGNzLWJ0biBkc2hjcy1idG4tcHJpbWFyeVwiIGRpc2FibGVkPXshZGlydHkgfHwgc2F2aW5nfSBvbkNsaWNrPXsoKSA9PiB2b2lkIHNhdmUoZmFsc2UpfT5cbiAgICAgICAgICAgICAge3QoJ2NvbmZpZy5zYXZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2xpPlxuICApXG59XG5cbi8qKiBGZXRjaCB0aGUgc2VydmVyLXNpZGUgdGhlbWUgY2F0YWxvZyBvbmNlLiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENhdGFsb2coKTogUHJvbWlzZTxUaGVtZUNhdGFsb2c+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYGNhdGFsb2cgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzLnN0YXR1c31gKVxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xufVxuXG4vKiogQ2xpZW50IHBsdWdpbiBib2R5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGN0eDogQ2xpZW50Q29udGV4dCk6IHZvaWQge1xuICBjb25zdCB0aGVtZSA9IGN0eC50aGVtZVxuICAvLyBUaGUgQXBwZWFyYW5jZSByb3cncyBkdXJhYmxlIHByZWZlcmVuY2UgKGxpZ2h0L2Rhcmsvc3lzdGVtKSBcdTIwMTQgdGhlIHRhcmdldFxuICAvLyBvZiBcIlx1OERERlx1OTY4Rlx1NTkxNlx1ODlDMiAvIEZvbGxvdyBhcHBlYXJhbmNlXCIuXG4gIGNvbnN0IGFwcGVhcmFuY2VTY29wZSA9IGN0eC5zZXR0aW5nc1Njb3BlLmJpbmQoeyBuYW1lc3BhY2U6IFRIRU1FX05TIH0pXG4gIGNvbnN0IG5hbWVCeUlkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgY29uc3QgZGlzcG9zZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdXG5cbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyB6aCwgZW4gfSksICdjb2xvcnNjaGVtZTogbG9jYWxlIGRpY3Rpb25hcnknKVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlUm93U3RvcmUoKVxuICBsZXQgYm91bmQ6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSB8IHVuZGVmaW5lZFxuICAvKiogUGVyc2lzdGVkL2Rlc2lyZWQgY29sb3JzY2hlbWUgaWQgKCcnID0gZm9sbG93IHRoZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UpLiAqL1xuICBsZXQgc2VsZWN0aW9uID0gREVGQVVMVF9JRFxuICBsZXQgcmV2aXNpb24gPSAtMVxuICAvKiogVGhlbWUgaWRzIGZyb20gdGhlIHRoZW1lcyBkaXJlY3RvcnkgKGRlbGV0YWJsZSBpbi1hcHApLiAqL1xuICBsZXQgZGVsZXRhYmxlSWRzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLyoqXG4gICAqIFByZXNlbnRlciBtaXJyb3IuIFRoZSBvZmZpY2lhbCB1aS1sYXlvdXQgcHJlc2VudGVyIGFwcGxpZXMgdGhlIHJlc29sdmVkXG4gICAqIHRoZW1lIHRvIDxib2R5PiBidXQgaXRzIGV2ZW50IGRlbGl2ZXJ5IGZyb20gdGhpcyBmaWJlciBpcyB1bnJlbGlhYmxlIGF0XG4gICAqIGxvYWQgKHRoZSB0aGVtZSBzZXJ2aWNlIGFsc28gYXN5bmNocm9ub3VzbHkgYWRvcHRzIHRoZSBkdXJhYmxlIHVpLXRoZW1lXG4gICAqIHByZWZlcmVuY2UsIGZsaXBwaW5nIHRoZSBwYWxldHRlIGJhY2spLiBUaGlzIHBsdWdpbiB0aGVyZWZvcmUgYXBwbGllcyB0aGVcbiAgICogYWN0aXZlIHRoZW1lJ3MgdG9rZW5zIGl0c2VsZiwgYW5kIHJlLWFzc2VydHMgdGhlIHBlcnNpc3RlZCBzZWxlY3Rpb24gZm9yXG4gICAqIGEgYm91bmRlZCBsb2FkIHdpbmRvdy4gSWRlbXBvdGVudCB3aXRoIHRoZSBvZmZpY2lhbCBwcmVzZW50ZXIgXHUyMDE0IHNhbWVcbiAgICogdmFsdWVzLCBzYW1lIHRhcmdldHMuXG4gICAqL1xuICBjb25zdCBhcHBsaWVkVG9rZW5zOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGFwcGx5QWN0aXZlVG9rZW5zID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoZW1lLmdldFRoZW1lKCkuYWN0aXZlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNvbG9yU2NoZW1lID0gYWN0aXZlLmNvbG9yU2NoZW1lXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICBpZiAoYWN0aXZlLmNvbG9yU2NoZW1lID09PSAnZGFyaycpIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnLCAnJylcbiAgICBlbHNlIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRzLWRhcmstdGhlbWUnKVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBhcHBsaWVkVG9rZW5zKSBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpXG4gICAgYXBwbGllZFRva2Vucy5sZW5ndGggPSAwXG4gICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFjdGl2ZS50b2tlbnMpKSB7XG4gICAgICBib2R5LnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKVxuICAgICAgYXBwbGllZFRva2Vucy5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSByb3cgaGlnaGxpZ2h0cyB0aGUgdGhlbWUgdGhlIHNlcnZpY2UgYWN0dWFsbHkgcmVzb2x2ZWQuICovXG4gIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcmVmID0gdGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlXG4gICAgcmV0dXJuIHByZWYgPT09ICdsaWdodCcgfHwgcHJlZiA9PT0gJ2RhcmsnIHx8IHByZWYgPT09ICdzeXN0ZW0nID8gREVGQVVMVF9JRCA6IHByZWZcbiAgfVxuXG4gIGNvbnN0IHB1Ymxpc2hSb3cgPSAoZXJyb3IgPSAnJykgPT4ge1xuICAgIGlmICghYm91bmQpIHJldHVyblxuICAgIGJvdW5kLnN5bmMoYWN0aXZlU2VsZWN0aW9uKCksIHJldmlzaW9uLCB0b1Jvd1RoZW1lcyh0aGVtZS5nZXRUaGVtZSgpLCBuYW1lQnlJZCksIGRlbGV0YWJsZUlkcywgZXJyb3IpXG4gIH1cblxuICAvKiogUGVyc2lzdCB0aGUgcGlja2VyIHNlbGVjdGlvbiB0aHJvdWdoIHRoZSBjYXRhbG9nIHJvdXRlIChzZXJ2ZXItc2lkZSkuICovXG4gIGNvbnN0IHNhdmVTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHZvaWQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGlvbjogaWQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCByZXMuc3RhdHVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4gY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIGUpKVxuICB9XG5cbiAgLyoqIFJldmVydCB0byB0aGUgZHVyYWJsZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UgKGxpZ2h0IC8gZGFyayAvIHN5c3RlbSkuICovXG4gIGNvbnN0IGZvbGxvd0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhcHBlYXJhbmNlU2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHByZWZlcmVuY2U/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHByZWYgPSB2YWx1ZT8ucHJlZmVyZW5jZVxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShwcmVmID09PSAnbGlnaHQnIHx8IHByZWYgPT09ICdkYXJrJyB8fCBwcmVmID09PSAnc3lzdGVtJyA/IHByZWYgOiAnc3lzdGVtJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHJlZ2lzdHJ5IG5vdCByZWFkeSBcdTIwMTQgZmFsbHMgYmFjayBvbiBuZXh0IGxvYWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmUtYXNzZXJ0IHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uIGZvciBhIGJvdW5kZWQgbG9hZCB3aW5kb3cuIFRoZSB0aGVtZVxuICAgKiBzZXJ2aWNlIGFzeW5jaHJvbm91c2x5IGFkb3B0cyB0aGUgZHVyYWJsZSB1aS10aGVtZSBwcmVmZXJlbmNlIGFmdGVyIHdlXG4gICAqIHJlc3RvcmUsIGFuZCBldmVudCBkZWxpdmVyeSBmcm9tIHRoaXMgZmliZXIgdG8gdGhlIG9mZmljaWFsIHByZXNlbnRlciBpc1xuICAgKiB1bnJlbGlhYmxlIFx1MjAxNCBzbyB3aGlsZSB0aGUgd2luZG93IGlzIG9wZW4gd2Uga2VlcCBwdXNoaW5nIG91ciBzZWxlY3Rpb25cbiAgICogKGFuZCBhcHBseWluZyBpdHMgdG9rZW5zKSB1bnRpbCB0aGUgd2luZG93IGNsb3Nlcy4gTmV2ZXIgZmlnaHRzIGxhdGVyXG4gICAqIHVzZXIgYWN0aW9uczogdGhlIHdpbmRvdyBvbmx5IHNwYW5zIHRoZSBsb2FkLXRpbWUgYWRvcHRpb24uXG4gICAqL1xuICBsZXQgZW5mb3JjZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCB1bmRlZmluZWRcbiAgY29uc3Qgc3RvcEVuZm9yY2UgPSAoKSA9PiB7XG4gICAgaWYgKGVuZm9yY2VUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbmZvcmNlVGltZXIpXG4gICAgICBlbmZvcmNlVGltZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgY29uc3QgZW5mb3JjZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBERUZBVUxUX0lEKSByZXR1cm5cbiAgICBpZiAodGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW1lLnNldFRoZW1lKHNlbGVjdGlvbilcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBub3QgcmVnaXN0ZXJlZCB5ZXQgXHUyMDE0IHRoZSBuZXh0IHRpY2sgcmV0cmllc1xuICAgICAgfVxuICAgIH1cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gIH1cblxuICAvLyBNaXJyb3IgdGhlIGxpdmUgdGhlbWUgc3RhdGUgaW50byB0aGUgcm93IGFuZCBrZWVwIHRoZSBhY3RpdmUgdG9rZW5zIG9uXG4gIC8vIDxib2R5PiBmb3Igd2hhdGV2ZXIgZXZlbnRzIHRoaXMgZmliZXIgZG9lcyByZWNlaXZlLlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgcHVibGlzaFJvdygpXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShpZClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCAoY2F0YWxvZyBzdGlsbCBsb2FkaW5nKSBcdTIwMTQgdGhlIHNlbGVjdGlvbiBpc1xuICAgICAgLy8gcmUtYXBwbGllZCBvbmNlIHJlZ2lzdHJhdGlvbiBjb21wbGV0ZXMuXG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3AgYWxsIHRoZW1lIHJlZ2lzdHJhdGlvbnMgKHVzZWQgYmVmb3JlIHJlLXJlZ2lzdGVyaW5nIGFmdGVyIGFuIGVkaXQpLiAqL1xuICBjb25zdCBkaXNwb3NlVGhlbWVzID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZGlzcG9zZSBvZiBkaXNwb3NlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpc3Bvc2UoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGFscmVhZHkgZ29uZVxuICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlcnMubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJDYXRhbG9nID0gKGNhdGFsb2c6IFRoZW1lQ2F0YWxvZykgPT4ge1xuICAgIGRpc3Bvc2VUaGVtZXMoKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgWy4uLmNhdGFsb2cucHJlc2V0cywgLi4uY2F0YWxvZy51c2VyVGhlbWVzLCAuLi5jYXRhbG9nLnNldHRpbmdzVGhlbWVzXSkge1xuICAgICAgbmFtZUJ5SWRbZW50cnkuaWRdID0gZW50cnkubmFtZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlzcG9zZSA9IHRoZW1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgY29sb3JTY2hlbWU6IGVudHJ5LmNvbG9yU2NoZW1lLFxuICAgICAgICAgIHRva2VuczogZW50cnkudG9rZW5zID8/IHt9LFxuICAgICAgICB9KVxuICAgICAgICBkaXNwb3NlcnMucHVzaChkaXNwb3NlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHJlZ2lzdGVyIHRoZW1lJywgZW50cnkuaWQsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIGRlbGV0YWJsZUlkcyA9IGNhdGFsb2cudXNlclRoZW1lcy5tYXAoKHQpID0+IHQuaWQpXG4gICAgLy8gUHJlY2VkZW5jZTogcGVyc2lzdGVkIHNlbGVjdGlvbiAoZnJvbSB0aGUgY2F0YWxvZykgPiBjb25maWcgZGVmYXVsdCA+IGZvbGxvdyBhcHBlYXJhbmNlLlxuICAgIGNvbnN0IHNhdmVkID0gY2F0YWxvZy5zZWxlY3Rpb25cbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgIH0gZWxzZSBpZiAoY2F0YWxvZy5kZWZhdWx0VGhlbWUpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGNhdGFsb2cuZGVmYXVsdFRoZW1lXG4gICAgfVxuICAgIGFwcGx5U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gREVGQVVMVF9JRCkge1xuICAgICAgLy8gQ292ZXIgdGhlIGxvYWQtdGltZSBhZG9wdGlvbiBmbGlwcyB3aXRoIGEgYm91bmRlZCByZS1hc3NlcnQgbG9vcC5cbiAgICAgIHN0b3BFbmZvcmNlKClcbiAgICAgIGVuZm9yY2VUaW1lciA9IHNldEludGVydmFsKGVuZm9yY2VTZWxlY3Rpb24sIDQwMClcbiAgICAgIHNldFRpbWVvdXQoc3RvcEVuZm9yY2UsIDUwMDApXG4gICAgfVxuICAgIHJldmlzaW9uID0gdGhlbWUuZ2V0VGhlbWUoKS5yZXZpc2lvblxuICAgIHB1Ymxpc2hSb3coKVxuICB9XG5cbiAgLyoqIFJlLWZldGNoIHRoZSBjYXRhbG9nIGFuZCByZS1yZWdpc3RlciAoYWZ0ZXIgYWRkaW5nL3JlbW92aW5nIGEgdXNlciB0aGVtZSkuICovXG4gIGNvbnN0IHJlbG9hZENhdGFsb2cgPSAoKSA9PiB7XG4gICAgdm9pZCBsb2FkQ2F0YWxvZygpXG4gICAgICAudGhlbihyZWdpc3RlckNhdGFsb2cpXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGNhdGFsb2cgcmVsb2FkIGZhaWxlZCcsIGUpXG4gICAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgICAgfSlcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyBhbmQgYXBwbGllZCB0b2tlbnMgd2hlbiB0aGlzIHBsdWdpbiB1bmxvYWRzXG4gIC8vIChITVIgLyBjb25maWcgZWRpdCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgZGlzcG9zZVRoZW1lcygpXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFwcGxpZWRUb2tlbnMpIGJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSlcbiAgICAgIGFwcGxpZWRUb2tlbnMubGVuZ3RoID0gMFxuICAgIH0sXG4gICAgJ2NvbG9yc2NoZW1lOiB0aGVtZSByZWdpc3RyYXRpb25zJyxcbiAgKVxuXG4gIC8vIFRoZSB3aG9sZSBDb2xvcnNjaGVtZSBjb25maWd1cmF0aW9uIGxpdmVzIGluIG9uZSBjYXJkIGluc2lkZVxuICAvLyBcdThCQkVcdTdGNkUgXHUyMTkyIFx1NjNEMlx1NEVGNiBcdTIxOTIgXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFIChzZXR0aW5ncy5wbHVnaW4uaXRlbSk6IHBpY2tlciArIGFkZC9kZWxldGUgKyBjb25maWcuXG4gIGN0eC5zbG90cy5pbmplY3QoJ3NldHRpbmdzLnBsdWdpbi5pdGVtJywgKCkgPT5cbiAgICBjdHguc2xvdHMucmVnaXN0ZXIoXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZXR0aW5ncy5wbHVnaW4uaXRlbScsXG4gICAgICAgIGlkOiAnY29sb3JzY2hlbWUtY29uZmlnJyxcbiAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgICAgIGluamVjdDogKGFjdGlvbnM6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGRlbGV0YWJsZTogc3RyaW5nW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgICAgIGJvdW5kID0gYWN0aW9uc1xuICAgICAgICAgIHB1Ymxpc2hSb3coKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaWRcbiAgICAgICAgICAgICAgLy8gQSBkZWxpYmVyYXRlIHBpY2sgd2lucyBvdmVyIHRoZSBsb2FkLXRpbWUgZW5mb3JjZW1lbnQgbG9vcC5cbiAgICAgICAgICAgICAgc3RvcEVuZm9yY2UoKVxuICAgICAgICAgICAgICBpZiAoaWQgPT09IERFRkFVTFRfSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBhbmQgZm9yZ2V0IG91clxuICAgICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBjb2xvcnNjaGVtZS5cbiAgICAgICAgICAgICAgICBmb2xsb3dBcHBlYXJhbmNlKClcbiAgICAgICAgICAgICAgICBzYXZlU2VsZWN0aW9uKCcnKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5U2VsZWN0aW9uKGlkKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxvYWRDYXRhbG9nLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBDb2xvcnNjaGVtZUNvbmZpZ0NhcmQsXG4gICAgKSxcbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBLG1CQUFvQztBQUVwQyxvQkFBNEI7QUFHNUIsc0NBQXlDO0FBc1RyQztBQTlTRyxJQUFNLE9BQU87QUFHYixJQUFNLFNBQVMsQ0FBQyxTQUFTLFNBQVMsVUFBVSxjQUFjLFVBQVUsZUFBZTtBQUkxRixJQUFNLFdBQVc7QUFDakIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sY0FBYztBQUNwQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxhQUFhO0FBTW5CLElBQU0sVUFB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

		})(module, module.exports, require);
		return module.exports;
	}
});
