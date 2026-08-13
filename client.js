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
  const appearanceScope = ctx.settingsScope.bind({ namespace: THEME_NS });
  const nameById = {};
  const disposers = [];
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), "colorscheme: locale dictionary");
  const store = createRowStore();
  let bound;
  let selection = DEFAULT_ID;
  let revision = -1;
  let restoreArmed = false;
  let restoreTimer;
  const activeSelection = () => {
    const pref = theme.getTheme().preference;
    return pref === "light" || pref === "dark" || pref === "system" ? DEFAULT_ID : pref;
  };
  const publishRow = (error = "") => {
    if (!bound) return;
    bound.sync(activeSelection(), revision, toRowThemes(theme.getTheme(), nameById), error);
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
  const armRestore = () => {
    restoreArmed = true;
    if (restoreTimer) clearTimeout(restoreTimer);
    restoreTimer = setTimeout(() => {
      restoreArmed = false;
    }, 5e3);
  };
  ctx.on("theme/change", () => {
    revision = theme.getTheme().revision;
    if (restoreArmed) {
      const pref = theme.getTheme().preference;
      if (pref === "light" || pref === "dark" || pref === "system") {
        restoreArmed = false;
        if (restoreTimer) clearTimeout(restoreTimer);
        applySelection(selection);
      }
    }
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
    const saved = catalog.selection;
    if (saved && theme.getTheme().themes.some((t) => t.id === saved)) {
      selection = saved;
      armRestore();
    } else if (catalog.defaultTheme) {
      selection = catalog.defaultTheme;
      armRestore();
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
              restoreArmed = false;
              if (restoreTimer) clearTimeout(restoreTimer);
              if (id === DEFAULT_ID) {
                followAppearance();
                saveSelection("");
              } else {
                applySelection(id);
                saveSelection(id);
              }
            }
          };
        }
      },
      ColorschemeRow
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG4vLyBUeXBlLW9ubHkgaW1wb3J0cyB0aGF0IHB1bGwgdGhlIGNvbnRleHQgYXVnbWVudGF0aW9ucyAoc2V0dGluZ3NTY29wZSxcbi8vIGxvY2FsZSwgdGhlIHNldHRpbmdzLmdlbmVyYWwuaXRlbSBzbG90IGNvbnRyYWN0KSBpbnRvIHRoaXMgcHJvZ3JhbS5cbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LWxvY2FsZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lQ2F0YWxvZyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnY29sb3JzY2hlbWUnXG5cbi8qKiBSZXF1aXJlZCBjbGllbnQgc2VydmljZXMgKGZpYmVyIGluamVjdCBcdTIwMTQgd2FpdHMgZm9yIHRoZSB0aGVtZSBzZXJ2aWNlKS4gKi9cbmV4cG9ydCBjb25zdCBpbmplY3QgPSBbJ3RoZW1lJywgJ3Nsb3RzJywgJ2xvY2FsZScsICdjb25uZWN0aW9uJywgJ3JlbW90ZScsICdzZXR0aW5nc1Njb3BlJ11cblxuY29uc3QgTlMgPSAnY29sb3JzY2hlbWUnXG4vKiogVGhlIGJ1aWx0LWluIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBuYW1lc3BhY2UgKG93bmVkIGJ5IGRzaC1jbGllbnQtdWktdGhlbWUpLiAqL1xuY29uc3QgVEhFTUVfTlMgPSAndWktdGhlbWUnXG5jb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MuY29sb3JzY2hlbWUnXG5jb25zdCBDQVRBTE9HX1VSTCA9ICdjb2xvcnNjaGVtZS90aGVtZXMuanNvbidcbmNvbnN0IFNUWUxFX1RBRyA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lL3Jvdy5jc3MnXG5jb25zdCBERUZBVUxUX0lEID0gJycgLy8gc2VudGluZWw6IGZvbGxvdyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlXG5cbi8qKlxuICogUHJlZmVyZW5jZS1yb3cgc3R5bGVzLiBJbmplY3RlZCBvbmNlIHBlciBtYXRlcmlhbGl6YXRpb24gd2l0aCB0aGUgbG9hZGVyJ3NcbiAqIGBkYXRhLXBsdWdpbi1jc3NgIGNvbnRyYWN0IHNvIHRoZSBjbGllbnQgSE1SIGRyaXZlciBjYW4gaW52ZW50b3J5L3JlbW92ZSBpdC5cbiAqL1xuY29uc3QgUk9XX0NTUyA9IGBcbi5kc2hjcy1yb3d7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3BhZGRpbmc6MTZweCAwfVxuLmRzaGNzLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjJweH1cbi5kc2hjcy1ncmlke2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4fVxuLmRzaGNzLWNoaXB7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZToxM3B4O2dhcDo4cHg7cGFkZGluZzo2cHggMTJweH1cbi5kc2hjcy1jaGlwOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWludGVyYWN0aXZlLWJnLWhvdmVyKX1cbi5kc2hjcy1jaGlwW2FyaWEtcHJlc3NlZD1cInRydWVcIl17YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbW9kdWxlLXBsYXRmb3JtKTtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApfVxuLmRzaGNzLWRvdHN7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6MnB4fVxuLmRzaGNzLWRvdHtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE4KTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MTJweDt3aWR0aDoxMnB4fVxuLmRzaGNzLWRvdC1kZWZhdWx0e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTUwKSA1MCUsdmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC05MDApIDUwJSl9XG4uZHNoY3MtZXJyb3J7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2ZvbnQtc2l6ZToxMnB4fVxuYFxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1wbHVnaW4tY3NzPSR7SlNPTi5zdHJpbmdpZnkoU1RZTEVfVEFHKX1dYCkgPT09IG51bGwpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICB0YWcuZGF0YXNldC5wbHVnaW4gPSAnZHNoLXBsdWdpbi1jb2xvcnNjaGVtZSdcbiAgdGFnLmRhdGFzZXQucGx1Z2luQ3NzID0gU1RZTEVfVEFHXG4gIHRhZy50ZXh0Q29udGVudCA9IFJPV19DU1NcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0YWcpXG59XG5cbi8qKiBTaW1wbGlmaWVkIENoaW5lc2UgZGljdGlvbmFyeSAoa2V5LXNldCBzb3VyY2Ugb2YgdHJ1dGgpLiAqL1xuY29uc3QgemggPSB7XG4gICdjb2xvcnNjaGVtZS50aXRsZSc6ICdcdTkxNERcdTgyNzJcdTY1QjlcdTY4NDgnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdcdThEREZcdTk2OEZcdTU5MTZcdTg5QzInLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OFx1NTJBMFx1OEY3RFx1NTkzMVx1OEQyNScsXG59IGFzIGNvbnN0XG5cbi8qKiBFbmdsaXNoIGRpY3Rpb25hcnksIGNoZWNrZWQgY29tcGxldGUgYWdhaW5zdCB0aGUgemgga2V5IHNldC4gKi9cbmNvbnN0IGVuOiBSZWNvcmQ8a2V5b2YgdHlwZW9mIHpoLCBzdHJpbmc+ID0ge1xuICAnY29sb3JzY2hlbWUudGl0bGUnOiAnQ29sb3JzY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdGb2xsb3cgYXBwZWFyYW5jZScsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnRmFpbGVkIHRvIGxvYWQgY29sb3JzY2hlbWVzJyxcbn1cblxuLyoqIFJvdyBkaXNwbGF5IG1vZGVsOiBpZCwgbmFtZSwgYW5kIHRocmVlIHNhbXBsZSBjb2xvcnMgKGJnIC8gZmcgLyBhY2NlbnQpLiAqL1xuaW50ZXJmYWNlIFJvd1RoZW1lIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29sb3JTY2hlbWU6ICdsaWdodCcgfCAnZGFyaydcbiAgc2FtcGxlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIFJvd1N0YXRlIHtcbiAgc2VsZWN0aW9uOiBzdHJpbmdcbiAgcmV2aXNpb246IG51bWJlclxuICB0aGVtZXM6IFJvd1RoZW1lW11cbiAgZXJyb3I6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3dTdG9yZSgpIHtcbiAgcmV0dXJuIGRlZmluZVN0b3JlKHtcbiAgICBpbml0OiAoKTogUm93U3RhdGUgPT4gKHsgc2VsZWN0aW9uOiBERUZBVUxUX0lELCByZXZpc2lvbjogLTEsIHRoZW1lczogW10sIGVycm9yOiAnJyB9KSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzeW5jOiAoZDogUm93U3RhdGUsIHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJldmlzaW9uIDw9IGQucmV2aXNpb24pIHJldHVyblxuICAgICAgICBkLnNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICBkLnJldmlzaW9uID0gcmV2aXNpb25cbiAgICAgICAgZC50aGVtZXMgPSB0aGVtZXNcbiAgICAgICAgZC5lcnJvciA9IGVycm9yXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvUm93VGhlbWVzKHNuYXBzaG90OiBUaGVtZVNuYXBzaG90LCBuYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJvd1RoZW1lW10ge1xuICByZXR1cm4gc25hcHNob3QudGhlbWVzXG4gICAgLy8gVGhlIGJ1aWx0LWluIGxpZ2h0L2RhcmsgcGFpciBpcyBvd25lZCBieSB0aGUgQXBwZWFyYW5jZSByb3cgYWJvdmUuXG4gICAgLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gJ2xpZ2h0JyAmJiB0LmlkICE9PSAnZGFyaycpXG4gICAgLm1hcCgodCkgPT4gKHtcbiAgICAgIGlkOiB0LmlkLFxuICAgICAgbmFtZTogbmFtZXNbdC5pZF0gPz8gdC5pZCxcbiAgICAgIGNvbG9yU2NoZW1lOiB0LmNvbG9yU2NoZW1lLFxuICAgICAgc2FtcGxlczogW1xuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYmctYmFzZSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSddID8/ICcnLFxuICAgICAgXSxcbiAgICB9KSlcbn1cblxuLyoqIFRoZSBDb2xvcnNjaGVtZSBwcmVmZXJlbmNlIHJvdyAocmVnaXN0ZXJlZCBpbnRvIHNldHRpbmdzLmdlbmVyYWwuaXRlbSkuICovXG5mdW5jdGlvbiBDb2xvcnNjaGVtZVJvdyhwcm9wczoge1xuICB0OiAoa2V5OiBrZXlvZiB0eXBlb2YgemgpID0+IHN0cmluZ1xuICB1c2VTdG9yZTogPFM+KHNlbGVjdG9yOiAoczogUm93U3RhdGUpID0+IFMpID0+IFNcbiAgc2V0VGhlbWU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgdCwgdXNlU3RvcmUsIHNldFRoZW1lIH0gPSBwcm9wc1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VTdG9yZSgocykgPT4gcy5zZWxlY3Rpb24pXG4gIGNvbnN0IHRoZW1lcyA9IHVzZVN0b3JlKChzKSA9PiBzLnRoZW1lcylcbiAgY29uc3QgZXJyb3IgPSB1c2VTdG9yZSgocykgPT4gcy5lcnJvcilcblxuICBjb25zdCBjaGlwcyA9IFtcbiAgICB7XG4gICAgICBpZDogREVGQVVMVF9JRCxcbiAgICAgIGxhYmVsOiB0KCdjb2xvcnNjaGVtZS5kZWZhdWx0JyksXG4gICAgICBzYW1wbGVzOiBbXSxcbiAgICB9LFxuICAgIC4uLnRoZW1lcy5tYXAoKHRoKSA9PiAoeyBpZDogdGguaWQsIGxhYmVsOiB0aC5uYW1lLCBzYW1wbGVzOiB0aC5zYW1wbGVzIH0pKSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L2Rpdj5cbiAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZ3JpZFwiPlxuICAgICAgICB7Y2hpcHMubWFwKChjaGlwKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtjaGlwLmlkfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1jaGlwXCJcbiAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0aW9uID09PSBjaGlwLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY2hpcC5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaXAuc2FtcGxlcy5sZW5ndGggPT09IDMgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWRvdHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJkc2hjcy1kb3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMgfX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90IGRzaGNzLWRvdC1kZWZhdWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2hpcC5sYWJlbH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vKiogRmV0Y2ggdGhlIHNlcnZlci1zaWRlIHRoZW1lIGNhdGFsb2cgb25jZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDYXRhbG9nKCk6IFByb21pc2U8VGhlbWVDYXRhbG9nPiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7IGhlYWRlcnM6IHsgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBjYXRhbG9nIHJlcXVlc3QgZmFpbGVkOiAke3Jlcy5zdGF0dXN9YClcbiAgcmV0dXJuIChhd2FpdCByZXMuanNvbigpKSBhcyBUaGVtZUNhdGFsb2dcbn1cblxuLyoqIENsaWVudCBwbHVnaW4gYm9keS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjdHg6IENsaWVudENvbnRleHQpOiB2b2lkIHtcbiAgY29uc3QgdGhlbWUgPSBjdHgudGhlbWVcbiAgLy8gVGhlIEFwcGVhcmFuY2Ugcm93J3MgZHVyYWJsZSBwcmVmZXJlbmNlIChsaWdodC9kYXJrL3N5c3RlbSkgXHUyMDE0IHRoZSB0YXJnZXRcbiAgLy8gb2YgXCJcdThEREZcdTk2OEZcdTU5MTZcdTg5QzIgLyBGb2xsb3cgYXBwZWFyYW5jZVwiLlxuICBjb25zdCBhcHBlYXJhbmNlU2NvcGUgPSBjdHguc2V0dGluZ3NTY29wZS5iaW5kKHsgbmFtZXNwYWNlOiBUSEVNRV9OUyB9KVxuICBjb25zdCBuYW1lQnlJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gIGNvbnN0IGRpc3Bvc2VyczogKCgpID0+IHZvaWQpW10gPSBbXVxuXG4gIGN0eC5lZmZlY3QoKCkgPT4gY3R4LmxvY2FsZS5yZWdpc3RlcihMT0NBTEVfTlMsIHsgemgsIGVuIH0pLCAnY29sb3JzY2hlbWU6IGxvY2FsZSBkaWN0aW9uYXJ5JylcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVJvd1N0b3JlKClcbiAgbGV0IGJvdW5kOiB7IHN5bmM6IChzZWxlY3Rpb246IHN0cmluZywgcmV2aXNpb246IG51bWJlciwgdGhlbWVzOiBSb3dUaGVtZVtdLCBlcnJvcjogc3RyaW5nKSA9PiB2b2lkIH0gfCB1bmRlZmluZWRcbiAgLyoqIFBlcnNpc3RlZC9kZXNpcmVkIGNvbG9yc2NoZW1lIGlkICgnJyA9IGZvbGxvdyB0aGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlKS4gKi9cbiAgbGV0IHNlbGVjdGlvbiA9IERFRkFVTFRfSURcbiAgbGV0IHJldmlzaW9uID0gLTFcbiAgLyoqXG4gICAqIExvYWQtdGltZSB3YXRjaGRvZzogdGhlIHRoZW1lIHNlcnZpY2UgYWRvcHRzIHRoZSBkdXJhYmxlIHVpLXRoZW1lXG4gICAqIHByZWZlcmVuY2UgYXN5bmNocm9ub3VzbHksIHdoaWNoIGNhbiBvdmVycmlkZSBvdXIgcmVzdG9yZSByaWdodCBhZnRlciB3ZVxuICAgKiBhcHBseSBpdC4gV2hpbGUgYXJtZWQsIGEgdGhlbWUvY2hhbmdlIGJhY2sgdG8gYSBidWlsdC1pbiBwcmVmZXJlbmNlXG4gICAqIHJlLWFwcGxpZXMgb3VyIHNlbGVjdGlvbiBvbmNlLlxuICAgKi9cbiAgbGV0IHJlc3RvcmVBcm1lZCA9IGZhbHNlXG4gIGxldCByZXN0b3JlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG5cbiAgLyoqIFRoZSByb3cgaGlnaGxpZ2h0cyB0aGUgdGhlbWUgdGhlIHNlcnZpY2UgYWN0dWFsbHkgcmVzb2x2ZWQuICovXG4gIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcmVmID0gdGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlXG4gICAgcmV0dXJuIHByZWYgPT09ICdsaWdodCcgfHwgcHJlZiA9PT0gJ2RhcmsnIHx8IHByZWYgPT09ICdzeXN0ZW0nID8gREVGQVVMVF9JRCA6IHByZWZcbiAgfVxuXG4gIGNvbnN0IHB1Ymxpc2hSb3cgPSAoZXJyb3IgPSAnJykgPT4ge1xuICAgIGlmICghYm91bmQpIHJldHVyblxuICAgIGJvdW5kLnN5bmMoYWN0aXZlU2VsZWN0aW9uKCksIHJldmlzaW9uLCB0b1Jvd1RoZW1lcyh0aGVtZS5nZXRUaGVtZSgpLCBuYW1lQnlJZCksIGVycm9yKVxuICB9XG5cbiAgLyoqIFBlcnNpc3QgdGhlIHBpY2tlciBzZWxlY3Rpb24gdGhyb3VnaCB0aGUgY2F0YWxvZyByb3V0ZSAoc2VydmVyLXNpZGUpLiAqL1xuICBjb25zdCBzYXZlU2VsZWN0aW9uID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICB2b2lkIGZldGNoKENBVEFMT0dfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzZWxlY3Rpb246IGlkIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmICghcmVzLm9rKSBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHBlcnNpc3Qgc2VsZWN0aW9uJywgcmVzLnN0YXR1cylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCBlKSlcbiAgfVxuXG4gIC8qKiBSZXZlcnQgdG8gdGhlIGR1cmFibGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlIChsaWdodCAvIGRhcmsgLyBzeXN0ZW0pLiAqL1xuICBjb25zdCBmb2xsb3dBcHBlYXJhbmNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYXBwZWFyYW5jZVNjb3BlLmdldFNuYXBzaG90KCkudmFsdWUgYXMgeyBwcmVmZXJlbmNlPzogc3RyaW5nIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCBwcmVmID0gdmFsdWU/LnByZWZlcmVuY2VcbiAgICB0cnkge1xuICAgICAgdGhlbWUuc2V0VGhlbWUocHJlZiA9PT0gJ2xpZ2h0JyB8fCBwcmVmID09PSAnZGFyaycgfHwgcHJlZiA9PT0gJ3N5c3RlbScgPyBwcmVmIDogJ3N5c3RlbScpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyByZWdpc3RyeSBub3QgcmVhZHkgXHUyMDE0IGZhbGxzIGJhY2sgb24gbmV4dCBsb2FkXG4gICAgfVxuICB9XG5cbiAgLyoqIEFybSB0aGUgbG9hZC10aW1lIHJlc3RvcmUgd2F0Y2hkb2cgd2l0aCBhIGJvdW5kZWQgd2luZG93LiAqL1xuICBjb25zdCBhcm1SZXN0b3JlID0gKCkgPT4ge1xuICAgIHJlc3RvcmVBcm1lZCA9IHRydWVcbiAgICBpZiAocmVzdG9yZVRpbWVyKSBjbGVhclRpbWVvdXQocmVzdG9yZVRpbWVyKVxuICAgIHJlc3RvcmVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdG9yZUFybWVkID0gZmFsc2VcbiAgICB9LCA1MDAwKVxuICB9XG5cbiAgLy8gTWlycm9yIHRoZSBsaXZlIHRoZW1lIHN0YXRlIGludG8gdGhlIHJvdzsgcmUtYXBwbHkgb25jZSBpZiB0aGUgdGhlbWVcbiAgLy8gc2VydmljZSdzIGFzeW5jIHNldHRpbmdzIGFkb3B0aW9uIG92ZXJyb2RlIG91ciByZXN0b3JlLlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBpZiAocmVzdG9yZUFybWVkKSB7XG4gICAgICBjb25zdCBwcmVmID0gdGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlXG4gICAgICBpZiAocHJlZiA9PT0gJ2xpZ2h0JyB8fCBwcmVmID09PSAnZGFyaycgfHwgcHJlZiA9PT0gJ3N5c3RlbScpIHtcbiAgICAgICAgcmVzdG9yZUFybWVkID0gZmFsc2VcbiAgICAgICAgaWYgKHJlc3RvcmVUaW1lcikgY2xlYXJUaW1lb3V0KHJlc3RvcmVUaW1lcilcbiAgICAgICAgYXBwbHlTZWxlY3Rpb24oc2VsZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaXNoUm93KClcbiAgfSlcblxuICBjb25zdCBhcHBseVNlbGVjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHRoZW1lLnNldFRoZW1lKGlkKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbm90IHJlZ2lzdGVyZWQgeWV0IChjYXRhbG9nIHN0aWxsIGxvYWRpbmcpIFx1MjAxNCB0aGUgc2VsZWN0aW9uIGlzXG4gICAgICAvLyByZS1hcHBsaWVkIG9uY2UgcmVnaXN0cmF0aW9uIGNvbXBsZXRlcy5cbiAgICB9XG4gIH1cblxuICBjb25zdCByZWdpc3RlckNhdGFsb2cgPSAoY2F0YWxvZzogVGhlbWVDYXRhbG9nKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBbLi4uY2F0YWxvZy5wcmVzZXRzLCAuLi5jYXRhbG9nLnVzZXJUaGVtZXMsIC4uLmNhdGFsb2cuc2V0dGluZ3NUaGVtZXNdKSB7XG4gICAgICBuYW1lQnlJZFtlbnRyeS5pZF0gPSBlbnRyeS5uYW1lXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXNwb3NlID0gdGhlbWUucmVnaXN0ZXIoe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBjb2xvclNjaGVtZTogZW50cnkuY29sb3JTY2hlbWUsXG4gICAgICAgICAgdG9rZW5zOiBlbnRyeS50b2tlbnMgPz8ge30sXG4gICAgICAgIH0pXG4gICAgICAgIGRpc3Bvc2Vycy5wdXNoKGRpc3Bvc2UpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcmVnaXN0ZXIgdGhlbWUnLCBlbnRyeS5pZCwgZSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJlY2VkZW5jZTogcGVyc2lzdGVkIHNlbGVjdGlvbiAoZnJvbSB0aGUgY2F0YWxvZykgPiBjb25maWcgZGVmYXVsdCA+IGZvbGxvdyBhcHBlYXJhbmNlLlxuICAgIGNvbnN0IHNhdmVkID0gY2F0YWxvZy5zZWxlY3Rpb25cbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgICAgYXJtUmVzdG9yZSgpXG4gICAgfSBlbHNlIGlmIChjYXRhbG9nLmRlZmF1bHRUaGVtZSkge1xuICAgICAgc2VsZWN0aW9uID0gY2F0YWxvZy5kZWZhdWx0VGhlbWVcbiAgICAgIGFybVJlc3RvcmUoKVxuICAgIH1cbiAgICBhcHBseVNlbGVjdGlvbihzZWxlY3Rpb24pXG4gICAgcmV2aXNpb24gPSB0aGVtZS5nZXRUaGVtZSgpLnJldmlzaW9uXG4gICAgcHVibGlzaFJvdygpXG4gIH1cblxuICB2b2lkIGxvYWRDYXRhbG9nKClcbiAgICAudGhlbihyZWdpc3RlckNhdGFsb2cpXG4gICAgLmNhdGNoKChlOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gY2F0YWxvZyBsb2FkIGZhaWxlZCcsIGUpXG4gICAgICBwdWJsaXNoUm93KHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiBlICE9PSBudWxsICYmICdtZXNzYWdlJyBpbiBlID8gU3RyaW5nKChlIGFzIHsgbWVzc2FnZTogdW5rbm93biB9KS5tZXNzYWdlKSA6IFN0cmluZyhlKSlcbiAgICB9KVxuXG4gIC8vIENsZWFuIHVwIHRoZW1lIHJlZ2lzdHJhdGlvbnMgd2hlbiB0aGlzIHBsdWdpbiB1bmxvYWRzIChITVIgLyBjb25maWcgZWRpdCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRpc3Bvc2UoKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBhbHJlYWR5IGdvbmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcG9zZXJzLmxlbmd0aCA9IDBcbiAgICB9LFxuICAgICdjb2xvcnNjaGVtZTogdGhlbWUgcmVnaXN0cmF0aW9ucycsXG4gIClcblxuICAvLyBUaGUgcHJlZmVyZW5jZSByb3csIHBsYWNlZCBhZnRlciB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSByb3cgKG9yZGVyIDEwKS5cbiAgY3R4LnNsb3RzLmluamVjdCgnc2V0dGluZ3MuZ2VuZXJhbC5pdGVtJywgKCkgPT5cbiAgICBjdHguc2xvdHMucmVnaXN0ZXIoXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZXR0aW5ncy5nZW5lcmFsLml0ZW0nLFxuICAgICAgICBpZDogJ2NvbG9yc2NoZW1lJyxcbiAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgICAgIGluamVjdDogKGFjdGlvbnM6IHsgc3luYzogKHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGVycm9yOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgICAgIGJvdW5kID0gYWN0aW9uc1xuICAgICAgICAgIHB1Ymxpc2hSb3coKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXRUaGVtZTogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaWRcbiAgICAgICAgICAgICAgLy8gQSBkZWxpYmVyYXRlIHBpY2sgd2lucyBvdmVyIHRoZSBsb2FkLXRpbWUgd2F0Y2hkb2cuXG4gICAgICAgICAgICAgIHJlc3RvcmVBcm1lZCA9IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChyZXN0b3JlVGltZXIpIGNsZWFyVGltZW91dChyZXN0b3JlVGltZXIpXG4gICAgICAgICAgICAgIGlmIChpZCA9PT0gREVGQVVMVF9JRCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byB0aGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlIGFuZCBmb3JnZXQgb3VyXG4gICAgICAgICAgICAgICAgLy8gcGVyc2lzdGVkIGNvbG9yc2NoZW1lLlxuICAgICAgICAgICAgICAgIGZvbGxvd0FwcGVhcmFuY2UoKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oJycpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbHlTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgICAgc2F2ZVNlbGVjdGlvbihpZClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgQ29sb3JzY2hlbWVSb3cs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

		})(module, module.exports, require);
		return module.exports;
	}
});
