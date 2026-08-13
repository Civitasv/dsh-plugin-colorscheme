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
var import_client = require("@deepseek-ai/dsh-client-runtime/client");
var import_jsx_runtime = require("react/jsx-runtime");
var name = "colorscheme";
var inject = ["theme", "slots", "locale", "connection", "remote", "settingsScope"];
var NS = "colorscheme";
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
  "colorscheme.loadError": "\u914D\u8272\u65B9\u6848\u52A0\u8F7D\u5931\u8D25"
};
var en = {
  "colorscheme.title": "Colorscheme",
  "colorscheme.default": "Follow appearance",
  "colorscheme.loadError": "Failed to load colorschemes"
};
function createRowStore() {
  return (0, import_client.defineStore)({
    init: () => ({ selection: DEFAULT_ID, revision: -1, themes: [], error: "" }),
    actions: {
      sync: (d, selection, revision, themes, error) => {
        if (revision <= d.revision) return;
        d.selection = selection;
        d.revision = revision;
        d.themes = themes;
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
  const { t, useStore, setTheme } = props;
  const selection = useStore((s) => s.selection);
  const themes = useStore((s) => s.themes);
  const error = useStore((s) => s.error);
  const chips = [
    {
      id: DEFAULT_ID,
      label: t("colorscheme.default"),
      samples: []
    },
    ...themes.map((th) => ({ id: th.id, label: th.name, samples: th.samples }))
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dshcs-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-title", children: t("colorscheme.title") }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-error", children: error }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dshcs-grid", children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        type: "button",
        className: "dshcs-chip",
        "aria-pressed": selection === chip.id,
        onClick: () => setTheme(chip.id),
        children: [
          chip.samples.length === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dots", "aria-hidden": "true", children: chip.samples.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dot", style: { backgroundColor: c } }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dshcs-dot dshcs-dot-default", "aria-hidden": "true" }),
          chip.label
        ]
      },
      chip.id
    )) })
  ] });
}
async function loadCatalog() {
  const res = await fetch(CATALOG_URL, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`catalog request failed: ${res.status}`);
  return await res.json();
}
function apply(ctx) {
  const theme = ctx.theme;
  const scope = ctx.settingsScope.bind({ namespace: NS });
  const appearanceScope = ctx.settingsScope.bind({ namespace: THEME_NS });
  const nameById = {};
  const disposers = [];
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), "colorscheme: locale dictionary");
  const store = createRowStore();
  let bound;
  let selection = DEFAULT_ID;
  let revision = -1;
  const publishRow = (error = "") => {
    if (!bound) return;
    bound.sync(selection, revision, toRowThemes(theme.getTheme(), nameById), error);
  };
  const readSelection = () => {
    const value = scope.getSnapshot().value;
    return value?.selection ?? "";
  };
  const followAppearance = () => {
    const value = appearanceScope.getSnapshot().value;
    const pref = value?.preference;
    try {
      theme.setTheme(pref === "light" || pref === "dark" || pref === "system" ? pref : "system");
    } catch {
    }
  };
  ctx.on("theme/change", () => {
    revision = theme.getTheme().revision;
    publishRow();
  });
  const applySelection = (id) => {
    if (!id) return;
    try {
      theme.setTheme(id);
    } catch {
    }
  };
  const registerCatalog = (catalog) => {
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
    const saved = readSelection();
    if (saved && theme.getTheme().themes.some((t) => t.id === saved)) {
      selection = saved;
    } else if (catalog.defaultTheme) {
      selection = catalog.defaultTheme;
    }
    applySelection(selection);
    revision = theme.getTheme().revision;
    publishRow();
  };
  void loadCatalog().then(registerCatalog).catch((e) => {
    console.warn("[colorscheme] catalog load failed", e);
    publishRow(typeof e === "object" && e !== null && "message" in e ? String(e.message) : String(e));
  });
  ctx.effect(
    () => scope.subscribe(() => {
      const saved = readSelection();
      if (saved && saved !== selection) {
        selection = saved;
        applySelection(saved);
      }
    }),
    "colorscheme: settings scope subscription"
  );
  ctx.effect(
    () => () => {
      for (const dispose of disposers) {
        try {
          dispose();
        } catch {
        }
      }
      disposers.length = 0;
    },
    "colorscheme: theme registrations"
  );
  ctx.slots.inject(
    "settings.general.item",
    () => ctx.slots.register(
      {
        name: "settings.general.item",
        id: "colorscheme",
        order: 20,
        store,
        locale: LOCALE_NS,
        inject: (actions) => {
          bound = actions;
          publishRow();
          return {
            setTheme: (id) => {
              selection = id;
              if (id === DEFAULT_ID) {
                followAppearance();
                void scope.unset("selection").catch(() => {
                });
              } else {
                applySelection(id);
                void scope.set("selection", id).catch(() => {
                });
              }
            }
          };
        }
      },
      ColorschemeRow
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSwgc28gdGhpc1xuICogICBwbHVnaW4gcGVyc2lzdHMgdGhlIGNob3NlbiBpZCBpbiBpdHMgb3duIGBjb2xvcnNjaGVtZWAgc2V0dGluZ3NcbiAqICAgbmFtZXNwYWNlIGFuZCByZS1hcHBsaWVzIGl0IG9uIGxvYWQuXG4gKi9cbmltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IENsaWVudENvbnRleHQgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC1ydW50aW1lL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgVGhlbWVTbmFwc2hvdCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXRoZW1lL2NsaWVudCdcbi8vIFR5cGUtb25seSBpbXBvcnRzIHRoYXQgcHVsbCB0aGUgY29udGV4dCBhdWdtZW50YXRpb25zIChzZXR0aW5nc1Njb3BlLFxuLy8gbG9jYWxlLCB0aGUgc2V0dGluZ3MuZ2VuZXJhbC5pdGVtIHNsb3QgY29udHJhY3QpIGludG8gdGhpcyBwcm9ncmFtLlxuaW1wb3J0IHR5cGUge30gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtdWktc2V0dGluZ3MvY2xpZW50J1xuaW1wb3J0IHR5cGUge30gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtbG9jYWxlL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgVGhlbWVDYXRhbG9nIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzLnRzJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdjb2xvcnNjaGVtZSdcblxuLyoqIFJlcXVpcmVkIGNsaWVudCBzZXJ2aWNlcyAoZmliZXIgaW5qZWN0IFx1MjAxNCB3YWl0cyBmb3IgdGhlIHRoZW1lIHNlcnZpY2UpLiAqL1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsndGhlbWUnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2Nvbm5lY3Rpb24nLCAncmVtb3RlJywgJ3NldHRpbmdzU2NvcGUnXVxuXG5jb25zdCBOUyA9ICdjb2xvcnNjaGVtZSdcbi8qKiBUaGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlIG5hbWVzcGFjZSAob3duZWQgYnkgZHNoLWNsaWVudC11aS10aGVtZSkuICovXG5jb25zdCBUSEVNRV9OUyA9ICd1aS10aGVtZSdcbmNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5jb2xvcnNjaGVtZSdcbmNvbnN0IENBVEFMT0dfVVJMID0gJ2NvbG9yc2NoZW1lL3RoZW1lcy5qc29uJ1xuY29uc3QgU1RZTEVfVEFHID0gJ2RzaC1wbHVnaW4tY29sb3JzY2hlbWUvcm93LmNzcydcbmNvbnN0IERFRkFVTFRfSUQgPSAnJyAvLyBzZW50aW5lbDogZm9sbG93IHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHByZWZlcmVuY2VcblxuLyoqXG4gKiBQcmVmZXJlbmNlLXJvdyBzdHlsZXMuIEluamVjdGVkIG9uY2UgcGVyIG1hdGVyaWFsaXphdGlvbiB3aXRoIHRoZSBsb2FkZXInc1xuICogYGRhdGEtcGx1Z2luLWNzc2AgY29udHJhY3Qgc28gdGhlIGNsaWVudCBITVIgZHJpdmVyIGNhbiBpbnZlbnRvcnkvcmVtb3ZlIGl0LlxuICovXG5jb25zdCBST1dfQ1NTID0gYFxuLmRzaGNzLXJvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo4cHg7cGFkZGluZzoxNnB4IDB9XG4uZHNoY3MtdGl0bGV7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyMnB4fVxuLmRzaGNzLWdyaWR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHh9XG4uZHNoY3MtY2hpcHthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDIpO2JvcmRlci1yYWRpdXM6OTk5cHg7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtmb250OmluaGVyaXQ7Zm9udC1zaXplOjEzcHg7Z2FwOjhweDtwYWRkaW5nOjZweCAxMnB4fVxuLmRzaGNzLWNoaXA6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtaW50ZXJhY3RpdmUtYmctaG92ZXIpfVxuLmRzaGNzLWNoaXBbYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXXtiYWNrZ3JvdW5kOnZhcigtLWRzdy1hbGlhcy1iZy1tb2R1bGUtcGxhdGZvcm0pO2JvcmRlci1jb2xvcjp2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTQwMCl9XG4uZHNoY3MtZG90c3tkaXNwbGF5OmlubGluZS1mbGV4O2dhcDoycHh9XG4uZHNoY3MtZG90e2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTgpO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoxMnB4O3dpZHRoOjEycHh9XG4uZHNoY3MtZG90LWRlZmF1bHR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHZhcigtLWRzdy1zdGF0aWMtbmV1dHJhbC1ibHVpc2gtNTApIDUwJSx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTkwMCkgNTAlKX1cbi5kc2hjcy1lcnJvcntjb2xvcjp2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSk7Zm9udC1zaXplOjEycHh9XG5gXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLXBsdWdpbi1jc3M9JHtKU09OLnN0cmluZ2lmeShTVFlMRV9UQUcpfV1gKSA9PT0gbnVsbCkge1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHRhZy5kYXRhc2V0LnBsdWdpbiA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lJ1xuICB0YWcuZGF0YXNldC5wbHVnaW5Dc3MgPSBTVFlMRV9UQUdcbiAgdGFnLnRleHRDb250ZW50ID0gUk9XX0NTU1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZylcbn1cblxuLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSBkaWN0aW9uYXJ5IChrZXktc2V0IHNvdXJjZSBvZiB0cnV0aCkuICovXG5jb25zdCB6aCA9IHtcbiAgJ2NvbG9yc2NoZW1lLnRpdGxlJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OCcsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ1x1OERERlx1OTY4Rlx1NTkxNlx1ODlDMicsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnXHU5MTREXHU4MjcyXHU2NUI5XHU2ODQ4XHU1MkEwXHU4RjdEXHU1OTMxXHU4RDI1Jyxcbn0gYXMgY29uc3RcblxuLyoqIEVuZ2xpc2ggZGljdGlvbmFyeSwgY2hlY2tlZCBjb21wbGV0ZSBhZ2FpbnN0IHRoZSB6aCBrZXkgc2V0LiAqL1xuY29uc3QgZW46IFJlY29yZDxrZXlvZiB0eXBlb2YgemgsIHN0cmluZz4gPSB7XG4gICdjb2xvcnNjaGVtZS50aXRsZSc6ICdDb2xvcnNjaGVtZScsXG4gICdjb2xvcnNjaGVtZS5kZWZhdWx0JzogJ0ZvbGxvdyBhcHBlYXJhbmNlJyxcbiAgJ2NvbG9yc2NoZW1lLmxvYWRFcnJvcic6ICdGYWlsZWQgdG8gbG9hZCBjb2xvcnNjaGVtZXMnLFxufVxuXG4vKiogUm93IGRpc3BsYXkgbW9kZWw6IGlkLCBuYW1lLCBhbmQgdGhyZWUgc2FtcGxlIGNvbG9ycyAoYmcgLyBmZyAvIGFjY2VudCkuICovXG5pbnRlcmZhY2UgUm93VGhlbWUge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb2xvclNjaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJ1xuICBzYW1wbGVzOiBzdHJpbmdbXVxufVxuXG5pbnRlcmZhY2UgUm93U3RhdGUge1xuICBzZWxlY3Rpb246IHN0cmluZ1xuICByZXZpc2lvbjogbnVtYmVyXG4gIHRoZW1lczogUm93VGhlbWVbXVxuICBlcnJvcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvd1N0b3JlKCkge1xuICByZXR1cm4gZGVmaW5lU3RvcmUoe1xuICAgIGluaXQ6ICgpOiBSb3dTdGF0ZSA9PiAoeyBzZWxlY3Rpb246IERFRkFVTFRfSUQsIHJldmlzaW9uOiAtMSwgdGhlbWVzOiBbXSwgZXJyb3I6ICcnIH0pLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIHN5bmM6IChkOiBSb3dTdGF0ZSwgc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocmV2aXNpb24gPD0gZC5yZXZpc2lvbikgcmV0dXJuXG4gICAgICAgIGQuc2VsZWN0aW9uID0gc2VsZWN0aW9uXG4gICAgICAgIGQucmV2aXNpb24gPSByZXZpc2lvblxuICAgICAgICBkLnRoZW1lcyA9IHRoZW1lc1xuICAgICAgICBkLmVycm9yID0gZXJyb3JcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gdG9Sb3dUaGVtZXMoc25hcHNob3Q6IFRoZW1lU25hcHNob3QsIG5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogUm93VGhlbWVbXSB7XG4gIHJldHVybiBzbmFwc2hvdC50aGVtZXNcbiAgICAvLyBUaGUgYnVpbHQtaW4gbGlnaHQvZGFyayBwYWlyIGlzIG93bmVkIGJ5IHRoZSBBcHBlYXJhbmNlIHJvdyBhYm92ZS5cbiAgICAuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSAnbGlnaHQnICYmIHQuaWQgIT09ICdkYXJrJylcbiAgICAubWFwKCh0KSA9PiAoe1xuICAgICAgaWQ6IHQuaWQsXG4gICAgICBuYW1lOiBuYW1lc1t0LmlkXSA/PyB0LmlkLFxuICAgICAgY29sb3JTY2hlbWU6IHQuY29sb3JTY2hlbWUsXG4gICAgICBzYW1wbGVzOiBbXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1iZy1iYXNlJ10gPz8gJycsXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5J10gPz8gJycsXG4gICAgICAgIHQudG9rZW5zWyctLWRzdy1hbGlhcy1icmFuZC1wcmltYXJ5J10gPz8gJycsXG4gICAgICBdLFxuICAgIH0pKVxufVxuXG4vKiogVGhlIENvbG9yc2NoZW1lIHByZWZlcmVuY2Ugcm93IChyZWdpc3RlcmVkIGludG8gc2V0dGluZ3MuZ2VuZXJhbC5pdGVtKS4gKi9cbmZ1bmN0aW9uIENvbG9yc2NoZW1lUm93KHByb3BzOiB7XG4gIHQ6IChrZXk6IGtleW9mIHR5cGVvZiB6aCkgPT4gc3RyaW5nXG4gIHVzZVN0b3JlOiA8Uz4oc2VsZWN0b3I6IChzOiBSb3dTdGF0ZSkgPT4gUykgPT4gU1xuICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgeyB0LCB1c2VTdG9yZSwgc2V0VGhlbWUgfSA9IHByb3BzXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHVzZVN0b3JlKChzKSA9PiBzLnNlbGVjdGlvbilcbiAgY29uc3QgdGhlbWVzID0gdXNlU3RvcmUoKHMpID0+IHMudGhlbWVzKVxuICBjb25zdCBlcnJvciA9IHVzZVN0b3JlKChzKSA9PiBzLmVycm9yKVxuXG4gIGNvbnN0IGNoaXBzID0gW1xuICAgIHtcbiAgICAgIGlkOiBERUZBVUxUX0lELFxuICAgICAgbGFiZWw6IHQoJ2NvbG9yc2NoZW1lLmRlZmF1bHQnKSxcbiAgICAgIHNhbXBsZXM6IFtdLFxuICAgIH0sXG4gICAgLi4udGhlbWVzLm1hcCgodGgpID0+ICh7IGlkOiB0aC5pZCwgbGFiZWw6IHRoLm5hbWUsIHNhbXBsZXM6IHRoLnNhbXBsZXMgfSkpLFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRzaGNzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy10aXRsZVwiPnt0KCdjb2xvcnNjaGVtZS50aXRsZScpfTwvZGl2PlxuICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1lcnJvclwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1ncmlkXCI+XG4gICAgICAgIHtjaGlwcy5tYXAoKGNoaXApID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2NoaXAuaWR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRzaGNzLWNoaXBcIlxuICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3Rpb24gPT09IGNoaXAuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShjaGlwLmlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLmxlbmd0aCA9PT0gMyA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIHtjaGlwLnNhbXBsZXMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cImRzaGNzLWRvdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkc2hjcy1kb3QgZHNoY3MtZG90LWRlZmF1bHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGlwLmxhYmVsfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8qKiBGZXRjaCB0aGUgc2VydmVyLXNpZGUgdGhlbWUgY2F0YWxvZyBvbmNlLiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENhdGFsb2coKTogUHJvbWlzZTxUaGVtZUNhdGFsb2c+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0FUQUxPR19VUkwsIHsgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYGNhdGFsb2cgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzLnN0YXR1c31gKVxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFRoZW1lQ2F0YWxvZ1xufVxuXG4vKiogQ2xpZW50IHBsdWdpbiBib2R5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGN0eDogQ2xpZW50Q29udGV4dCk6IHZvaWQge1xuICBjb25zdCB0aGVtZSA9IGN0eC50aGVtZVxuICBjb25zdCBzY29wZSA9IGN0eC5zZXR0aW5nc1Njb3BlLmJpbmQoeyBuYW1lc3BhY2U6IE5TIH0pXG4gIC8vIFRoZSBBcHBlYXJhbmNlIHJvdydzIGR1cmFibGUgcHJlZmVyZW5jZSAobGlnaHQvZGFyay9zeXN0ZW0pIFx1MjAxNCB0aGUgdGFyZ2V0XG4gIC8vIG9mIFwiXHU4RERGXHU5NjhGXHU1OTE2XHU4OUMyIC8gRm9sbG93IGFwcGVhcmFuY2VcIi5cbiAgY29uc3QgYXBwZWFyYW5jZVNjb3BlID0gY3R4LnNldHRpbmdzU2NvcGUuYmluZCh7IG5hbWVzcGFjZTogVEhFTUVfTlMgfSlcbiAgY29uc3QgbmFtZUJ5SWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBjb25zdCBkaXNwb3NlcnM6ICgoKSA9PiB2b2lkKVtdID0gW11cblxuICBjdHguZWZmZWN0KCgpID0+IGN0eC5sb2NhbGUucmVnaXN0ZXIoTE9DQUxFX05TLCB7IHpoLCBlbiB9KSwgJ2NvbG9yc2NoZW1lOiBsb2NhbGUgZGljdGlvbmFyeScpXG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVSb3dTdG9yZSgpXG4gIGxldCBib3VuZDogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9IHwgdW5kZWZpbmVkXG4gIGxldCBzZWxlY3Rpb24gPSBERUZBVUxUX0lEXG4gIGxldCByZXZpc2lvbiA9IC0xXG5cbiAgY29uc3QgcHVibGlzaFJvdyA9IChlcnJvciA9ICcnKSA9PiB7XG4gICAgaWYgKCFib3VuZCkgcmV0dXJuXG4gICAgYm91bmQuc3luYyhzZWxlY3Rpb24sIHJldmlzaW9uLCB0b1Jvd1RoZW1lcyh0aGVtZS5nZXRUaGVtZSgpLCBuYW1lQnlJZCksIGVycm9yKVxuICB9XG5cbiAgLyoqIFJlYWQgdGhlIHBlcnNpc3RlZCBjb2xvcnNjaGVtZSBzZWxlY3Rpb24gZnJvbSBvdXIgc2V0dGluZ3MgbmFtZXNwYWNlLiAqL1xuICBjb25zdCByZWFkU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gc2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHNlbGVjdGlvbj86IHN0cmluZyB9IHwgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHZhbHVlPy5zZWxlY3Rpb24gPz8gJydcbiAgfVxuXG4gIC8qKiBSZXZlcnQgdG8gdGhlIGR1cmFibGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlIChsaWdodCAvIGRhcmsgLyBzeXN0ZW0pLiAqL1xuICBjb25zdCBmb2xsb3dBcHBlYXJhbmNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYXBwZWFyYW5jZVNjb3BlLmdldFNuYXBzaG90KCkudmFsdWUgYXMgeyBwcmVmZXJlbmNlPzogc3RyaW5nIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCBwcmVmID0gdmFsdWU/LnByZWZlcmVuY2VcbiAgICB0cnkge1xuICAgICAgdGhlbWUuc2V0VGhlbWUocHJlZiA9PT0gJ2xpZ2h0JyB8fCBwcmVmID09PSAnZGFyaycgfHwgcHJlZiA9PT0gJ3N5c3RlbScgPyBwcmVmIDogJ3N5c3RlbScpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyByZWdpc3RyeSBub3QgcmVhZHkgXHUyMDE0IGZhbGxzIGJhY2sgb24gbmV4dCBsb2FkXG4gICAgfVxuICB9XG5cbiAgLy8gTWlycm9yIHRoZSBsaXZlIHRoZW1lIHN0YXRlIGludG8gdGhlIHJvdy5cbiAgY3R4Lm9uKCd0aGVtZS9jaGFuZ2UnLCAoKSA9PiB7XG4gICAgcmV2aXNpb24gPSB0aGVtZS5nZXRUaGVtZSgpLnJldmlzaW9uXG4gICAgcHVibGlzaFJvdygpXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShpZClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCAoY2F0YWxvZyBzdGlsbCBsb2FkaW5nKSBcdTIwMTQgdGhlIHNlbGVjdGlvbiBpc1xuICAgICAgLy8gcmUtYXBwbGllZCBvbmNlIHJlZ2lzdHJhdGlvbiBjb21wbGV0ZXMuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJDYXRhbG9nID0gKGNhdGFsb2c6IFRoZW1lQ2F0YWxvZykgPT4ge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgWy4uLmNhdGFsb2cucHJlc2V0cywgLi4uY2F0YWxvZy51c2VyVGhlbWVzLCAuLi5jYXRhbG9nLnNldHRpbmdzVGhlbWVzXSkge1xuICAgICAgbmFtZUJ5SWRbZW50cnkuaWRdID0gZW50cnkubmFtZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlzcG9zZSA9IHRoZW1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgY29sb3JTY2hlbWU6IGVudHJ5LmNvbG9yU2NoZW1lLFxuICAgICAgICAgIHRva2VuczogZW50cnkudG9rZW5zID8/IHt9LFxuICAgICAgICB9KVxuICAgICAgICBkaXNwb3NlcnMucHVzaChkaXNwb3NlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHJlZ2lzdGVyIHRoZW1lJywgZW50cnkuaWQsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFByZWNlZGVuY2U6IHBlcnNpc3RlZCB1c2VyIHNlbGVjdGlvbiA+IGNvbmZpZyBkZWZhdWx0ID4gZm9sbG93IGFwcGVhcmFuY2UuXG4gICAgY29uc3Qgc2F2ZWQgPSByZWFkU2VsZWN0aW9uKClcbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgIH0gZWxzZSBpZiAoY2F0YWxvZy5kZWZhdWx0VGhlbWUpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGNhdGFsb2cuZGVmYXVsdFRoZW1lXG4gICAgfVxuICAgIGFwcGx5U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBwdWJsaXNoUm93KClcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gS2VlcCB0aGUgcGlja2VyIGluIHN5bmMgd2hlbiBzZXR0aW5ncyBjaGFuZ2UgZWxzZXdoZXJlIChhbm90aGVyIHRhYiwgYW5cbiAgLy8gZWRpdG9yIHdyaXRpbmcgc2V0dGluZ3MueWFtbCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIHNjb3BlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkID0gcmVhZFNlbGVjdGlvbigpXG4gICAgICAgIGlmIChzYXZlZCAmJiBzYXZlZCAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICAgICAgc2VsZWN0aW9uID0gc2F2ZWRcbiAgICAgICAgICBhcHBseVNlbGVjdGlvbihzYXZlZClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgJ2NvbG9yc2NoZW1lOiBzZXR0aW5ncyBzY29wZSBzdWJzY3JpcHRpb24nLFxuICApXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyB3aGVuIHRoaXMgcGx1Z2luIHVubG9hZHMgKEhNUiAvIGNvbmZpZyBlZGl0KS5cbiAgY3R4LmVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGRpc3Bvc2Ugb2YgZGlzcG9zZXJzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGlzcG9zZSgpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGFscmVhZHkgZ29uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwb3NlcnMubGVuZ3RoID0gMFxuICAgIH0sXG4gICAgJ2NvbG9yc2NoZW1lOiB0aGVtZSByZWdpc3RyYXRpb25zJyxcbiAgKVxuXG4gIC8vIFRoZSBwcmVmZXJlbmNlIHJvdywgcGxhY2VkIGFmdGVyIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdyAob3JkZXIgMTApLlxuICBjdHguc2xvdHMuaW5qZWN0KCdzZXR0aW5ncy5nZW5lcmFsLml0ZW0nLCAoKSA9PlxuICAgIGN0eC5zbG90cy5yZWdpc3RlcihcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NldHRpbmdzLmdlbmVyYWwuaXRlbScsXG4gICAgICAgIGlkOiAnY29sb3JzY2hlbWUnLFxuICAgICAgICBvcmRlcjogMjAsXG4gICAgICAgIHN0b3JlLFxuICAgICAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICAgICAgaW5qZWN0OiAoYWN0aW9uczogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7XG4gICAgICAgICAgYm91bmQgPSBhY3Rpb25zXG4gICAgICAgICAgcHVibGlzaFJvdygpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBpZFxuICAgICAgICAgICAgICBpZiAoaWQgPT09IERFRkFVTFRfSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBhbmQgZm9yZ2V0IG91clxuICAgICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBjb2xvcnNjaGVtZS5cbiAgICAgICAgICAgICAgICBmb2xsb3dBcHBlYXJhbmNlKClcbiAgICAgICAgICAgICAgICB2b2lkIHNjb3BlLnVuc2V0KCdzZWxlY3Rpb24nKS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseVNlbGVjdGlvbihpZClcbiAgICAgICAgICAgICAgICB2b2lkIHNjb3BlLnNldCgnc2VsZWN0aW9uJywgaWQpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBDb2xvcnNjaGVtZVJvdyxcbiAgICApLFxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0Esb0JBQTRCO0FBZ0l0QjtBQXZIQyxJQUFNLE9BQU87QUFHYixJQUFNLFNBQVMsQ0FBQyxTQUFTLFNBQVMsVUFBVSxjQUFjLFVBQVUsZUFBZTtBQUUxRixJQUFNLEtBQUs7QUFFWCxJQUFNLFdBQVc7QUFDakIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sY0FBYztBQUNwQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxhQUFhO0FBTW5CLElBQU0sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZaEIsSUFBSSxPQUFPLGFBQWEsZUFBZSxTQUFTLGNBQWMseUJBQXlCLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBRyxNQUFNLE1BQU07QUFDN0gsUUFBTSxNQUFNLFNBQVMsY0FBYyxPQUFPO0FBQzFDLE1BQUksUUFBUSxTQUFTO0FBQ3JCLE1B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

		})(module, module.exports, require);
		return module.exports;
	}
});
