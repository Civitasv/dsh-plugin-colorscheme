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
            }
          };
        }
      },
      ColorschemeRow
    )
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG4vLyBUeXBlLW9ubHkgaW1wb3J0cyB0aGF0IHB1bGwgdGhlIGNvbnRleHQgYXVnbWVudGF0aW9ucyAoc2V0dGluZ3NTY29wZSxcbi8vIGxvY2FsZSwgdGhlIHNldHRpbmdzLmdlbmVyYWwuaXRlbSBzbG90IGNvbnRyYWN0KSBpbnRvIHRoaXMgcHJvZ3JhbS5cbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LWxvY2FsZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lQ2F0YWxvZyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnY29sb3JzY2hlbWUnXG5cbi8qKiBSZXF1aXJlZCBjbGllbnQgc2VydmljZXMgKGZpYmVyIGluamVjdCBcdTIwMTQgd2FpdHMgZm9yIHRoZSB0aGVtZSBzZXJ2aWNlKS4gKi9cbmV4cG9ydCBjb25zdCBpbmplY3QgPSBbJ3RoZW1lJywgJ3Nsb3RzJywgJ2xvY2FsZScsICdjb25uZWN0aW9uJywgJ3JlbW90ZScsICdzZXR0aW5nc1Njb3BlJ11cblxuY29uc3QgTlMgPSAnY29sb3JzY2hlbWUnXG4vKiogVGhlIGJ1aWx0LWluIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBuYW1lc3BhY2UgKG93bmVkIGJ5IGRzaC1jbGllbnQtdWktdGhlbWUpLiAqL1xuY29uc3QgVEhFTUVfTlMgPSAndWktdGhlbWUnXG5jb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MuY29sb3JzY2hlbWUnXG5jb25zdCBDQVRBTE9HX1VSTCA9ICdjb2xvcnNjaGVtZS90aGVtZXMuanNvbidcbmNvbnN0IFNUWUxFX1RBRyA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lL3Jvdy5jc3MnXG5jb25zdCBERUZBVUxUX0lEID0gJycgLy8gc2VudGluZWw6IGZvbGxvdyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlXG5cbi8qKlxuICogUHJlZmVyZW5jZS1yb3cgc3R5bGVzLiBJbmplY3RlZCBvbmNlIHBlciBtYXRlcmlhbGl6YXRpb24gd2l0aCB0aGUgbG9hZGVyJ3NcbiAqIGBkYXRhLXBsdWdpbi1jc3NgIGNvbnRyYWN0IHNvIHRoZSBjbGllbnQgSE1SIGRyaXZlciBjYW4gaW52ZW50b3J5L3JlbW92ZSBpdC5cbiAqL1xuY29uc3QgUk9XX0NTUyA9IGBcbi5kc2hjcy1yb3d7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3BhZGRpbmc6MTZweCAwfVxuLmRzaGNzLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjJweH1cbi5kc2hjcy1ncmlke2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4fVxuLmRzaGNzLWNoaXB7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZToxM3B4O2dhcDo4cHg7cGFkZGluZzo2cHggMTJweH1cbi5kc2hjcy1jaGlwOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWludGVyYWN0aXZlLWJnLWhvdmVyKX1cbi5kc2hjcy1jaGlwW2FyaWEtcHJlc3NlZD1cInRydWVcIl17YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbW9kdWxlLXBsYXRmb3JtKTtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApfVxuLmRzaGNzLWRvdHN7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6MnB4fVxuLmRzaGNzLWRvdHtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE4KTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MTJweDt3aWR0aDoxMnB4fVxuLmRzaGNzLWRvdC1kZWZhdWx0e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTUwKSA1MCUsdmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC05MDApIDUwJSl9XG4uZHNoY3MtZXJyb3J7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2ZvbnQtc2l6ZToxMnB4fVxuYFxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1wbHVnaW4tY3NzPSR7SlNPTi5zdHJpbmdpZnkoU1RZTEVfVEFHKX1dYCkgPT09IG51bGwpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICB0YWcuZGF0YXNldC5wbHVnaW4gPSAnZHNoLXBsdWdpbi1jb2xvcnNjaGVtZSdcbiAgdGFnLmRhdGFzZXQucGx1Z2luQ3NzID0gU1RZTEVfVEFHXG4gIHRhZy50ZXh0Q29udGVudCA9IFJPV19DU1NcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0YWcpXG59XG5cbi8qKiBTaW1wbGlmaWVkIENoaW5lc2UgZGljdGlvbmFyeSAoa2V5LXNldCBzb3VyY2Ugb2YgdHJ1dGgpLiAqL1xuY29uc3QgemggPSB7XG4gICdjb2xvcnNjaGVtZS50aXRsZSc6ICdcdTkxNERcdTgyNzJcdTY1QjlcdTY4NDgnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdcdThEREZcdTk2OEZcdTU5MTZcdTg5QzInLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OFx1NTJBMFx1OEY3RFx1NTkzMVx1OEQyNScsXG59IGFzIGNvbnN0XG5cbi8qKiBFbmdsaXNoIGRpY3Rpb25hcnksIGNoZWNrZWQgY29tcGxldGUgYWdhaW5zdCB0aGUgemgga2V5IHNldC4gKi9cbmNvbnN0IGVuOiBSZWNvcmQ8a2V5b2YgdHlwZW9mIHpoLCBzdHJpbmc+ID0ge1xuICAnY29sb3JzY2hlbWUudGl0bGUnOiAnQ29sb3JzY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdGb2xsb3cgYXBwZWFyYW5jZScsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnRmFpbGVkIHRvIGxvYWQgY29sb3JzY2hlbWVzJyxcbn1cblxuLyoqIFJvdyBkaXNwbGF5IG1vZGVsOiBpZCwgbmFtZSwgYW5kIHRocmVlIHNhbXBsZSBjb2xvcnMgKGJnIC8gZmcgLyBhY2NlbnQpLiAqL1xuaW50ZXJmYWNlIFJvd1RoZW1lIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29sb3JTY2hlbWU6ICdsaWdodCcgfCAnZGFyaydcbiAgc2FtcGxlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIFJvd1N0YXRlIHtcbiAgc2VsZWN0aW9uOiBzdHJpbmdcbiAgcmV2aXNpb246IG51bWJlclxuICB0aGVtZXM6IFJvd1RoZW1lW11cbiAgZXJyb3I6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3dTdG9yZSgpIHtcbiAgcmV0dXJuIGRlZmluZVN0b3JlKHtcbiAgICBpbml0OiAoKTogUm93U3RhdGUgPT4gKHsgc2VsZWN0aW9uOiBERUZBVUxUX0lELCByZXZpc2lvbjogLTEsIHRoZW1lczogW10sIGVycm9yOiAnJyB9KSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzeW5jOiAoZDogUm93U3RhdGUsIHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJldmlzaW9uIDw9IGQucmV2aXNpb24pIHJldHVyblxuICAgICAgICBkLnNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICBkLnJldmlzaW9uID0gcmV2aXNpb25cbiAgICAgICAgZC50aGVtZXMgPSB0aGVtZXNcbiAgICAgICAgZC5lcnJvciA9IGVycm9yXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvUm93VGhlbWVzKHNuYXBzaG90OiBUaGVtZVNuYXBzaG90LCBuYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJvd1RoZW1lW10ge1xuICByZXR1cm4gc25hcHNob3QudGhlbWVzXG4gICAgLy8gVGhlIGJ1aWx0LWluIGxpZ2h0L2RhcmsgcGFpciBpcyBvd25lZCBieSB0aGUgQXBwZWFyYW5jZSByb3cgYWJvdmUuXG4gICAgLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gJ2xpZ2h0JyAmJiB0LmlkICE9PSAnZGFyaycpXG4gICAgLm1hcCgodCkgPT4gKHtcbiAgICAgIGlkOiB0LmlkLFxuICAgICAgbmFtZTogbmFtZXNbdC5pZF0gPz8gdC5pZCxcbiAgICAgIGNvbG9yU2NoZW1lOiB0LmNvbG9yU2NoZW1lLFxuICAgICAgc2FtcGxlczogW1xuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYmctYmFzZSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSddID8/ICcnLFxuICAgICAgXSxcbiAgICB9KSlcbn1cblxuLyoqIFRoZSBDb2xvcnNjaGVtZSBwcmVmZXJlbmNlIHJvdyAocmVnaXN0ZXJlZCBpbnRvIHNldHRpbmdzLmdlbmVyYWwuaXRlbSkuICovXG5mdW5jdGlvbiBDb2xvcnNjaGVtZVJvdyhwcm9wczoge1xuICB0OiAoa2V5OiBrZXlvZiB0eXBlb2YgemgpID0+IHN0cmluZ1xuICB1c2VTdG9yZTogPFM+KHNlbGVjdG9yOiAoczogUm93U3RhdGUpID0+IFMpID0+IFNcbiAgc2V0VGhlbWU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgdCwgdXNlU3RvcmUsIHNldFRoZW1lIH0gPSBwcm9wc1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VTdG9yZSgocykgPT4gcy5zZWxlY3Rpb24pXG4gIGNvbnN0IHRoZW1lcyA9IHVzZVN0b3JlKChzKSA9PiBzLnRoZW1lcylcbiAgY29uc3QgZXJyb3IgPSB1c2VTdG9yZSgocykgPT4gcy5lcnJvcilcblxuICBjb25zdCBjaGlwcyA9IFtcbiAgICB7XG4gICAgICBpZDogREVGQVVMVF9JRCxcbiAgICAgIGxhYmVsOiB0KCdjb2xvcnNjaGVtZS5kZWZhdWx0JyksXG4gICAgICBzYW1wbGVzOiBbXSxcbiAgICB9LFxuICAgIC4uLnRoZW1lcy5tYXAoKHRoKSA9PiAoeyBpZDogdGguaWQsIGxhYmVsOiB0aC5uYW1lLCBzYW1wbGVzOiB0aC5zYW1wbGVzIH0pKSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L2Rpdj5cbiAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZ3JpZFwiPlxuICAgICAgICB7Y2hpcHMubWFwKChjaGlwKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtjaGlwLmlkfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1jaGlwXCJcbiAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0aW9uID09PSBjaGlwLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY2hpcC5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaXAuc2FtcGxlcy5sZW5ndGggPT09IDMgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWRvdHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJkc2hjcy1kb3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMgfX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90IGRzaGNzLWRvdC1kZWZhdWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2hpcC5sYWJlbH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vKiogRmV0Y2ggdGhlIHNlcnZlci1zaWRlIHRoZW1lIGNhdGFsb2cgb25jZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDYXRhbG9nKCk6IFByb21pc2U8VGhlbWVDYXRhbG9nPiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7IGhlYWRlcnM6IHsgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBjYXRhbG9nIHJlcXVlc3QgZmFpbGVkOiAke3Jlcy5zdGF0dXN9YClcbiAgcmV0dXJuIChhd2FpdCByZXMuanNvbigpKSBhcyBUaGVtZUNhdGFsb2dcbn1cblxuLyoqIENsaWVudCBwbHVnaW4gYm9keS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjdHg6IENsaWVudENvbnRleHQpOiB2b2lkIHtcbiAgY29uc3QgdGhlbWUgPSBjdHgudGhlbWVcbiAgLy8gVGhlIEFwcGVhcmFuY2Ugcm93J3MgZHVyYWJsZSBwcmVmZXJlbmNlIChsaWdodC9kYXJrL3N5c3RlbSkgXHUyMDE0IHRoZSB0YXJnZXRcbiAgLy8gb2YgXCJcdThEREZcdTk2OEZcdTU5MTZcdTg5QzIgLyBGb2xsb3cgYXBwZWFyYW5jZVwiLlxuICBjb25zdCBhcHBlYXJhbmNlU2NvcGUgPSBjdHguc2V0dGluZ3NTY29wZS5iaW5kKHsgbmFtZXNwYWNlOiBUSEVNRV9OUyB9KVxuICBjb25zdCBuYW1lQnlJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gIGNvbnN0IGRpc3Bvc2VyczogKCgpID0+IHZvaWQpW10gPSBbXVxuXG4gIGN0eC5lZmZlY3QoKCkgPT4gY3R4LmxvY2FsZS5yZWdpc3RlcihMT0NBTEVfTlMsIHsgemgsIGVuIH0pLCAnY29sb3JzY2hlbWU6IGxvY2FsZSBkaWN0aW9uYXJ5JylcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVJvd1N0b3JlKClcbiAgbGV0IGJvdW5kOiB7IHN5bmM6IChzZWxlY3Rpb246IHN0cmluZywgcmV2aXNpb246IG51bWJlciwgdGhlbWVzOiBSb3dUaGVtZVtdLCBlcnJvcjogc3RyaW5nKSA9PiB2b2lkIH0gfCB1bmRlZmluZWRcbiAgLyoqIFBlcnNpc3RlZC9kZXNpcmVkIGNvbG9yc2NoZW1lIGlkICgnJyA9IGZvbGxvdyB0aGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlKS4gKi9cbiAgbGV0IHNlbGVjdGlvbiA9IERFRkFVTFRfSURcbiAgbGV0IHJldmlzaW9uID0gLTFcblxuICAvKipcbiAgICogUHJlc2VudGVyIG1pcnJvci4gVGhlIG9mZmljaWFsIHVpLWxheW91dCBwcmVzZW50ZXIgYXBwbGllcyB0aGUgcmVzb2x2ZWRcbiAgICogdGhlbWUgdG8gPGJvZHk+IGJ1dCBpdHMgZXZlbnQgZGVsaXZlcnkgZnJvbSB0aGlzIGZpYmVyIGlzIHVucmVsaWFibGUgYXRcbiAgICogbG9hZCAodGhlIHRoZW1lIHNlcnZpY2UgYWxzbyBhc3luY2hyb25vdXNseSBhZG9wdHMgdGhlIGR1cmFibGUgdWktdGhlbWVcbiAgICogcHJlZmVyZW5jZSwgZmxpcHBpbmcgdGhlIHBhbGV0dGUgYmFjaykuIFRoaXMgcGx1Z2luIHRoZXJlZm9yZSBhcHBsaWVzIHRoZVxuICAgKiBhY3RpdmUgdGhlbWUncyB0b2tlbnMgaXRzZWxmLCBhbmQgcmUtYXNzZXJ0cyB0aGUgcGVyc2lzdGVkIHNlbGVjdGlvbiBmb3JcbiAgICogYSBib3VuZGVkIGxvYWQgd2luZG93LiBJZGVtcG90ZW50IHdpdGggdGhlIG9mZmljaWFsIHByZXNlbnRlciBcdTIwMTQgc2FtZVxuICAgKiB2YWx1ZXMsIHNhbWUgdGFyZ2V0cy5cbiAgICovXG4gIGNvbnN0IGFwcGxpZWRUb2tlbnM6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgYXBwbHlBY3RpdmVUb2tlbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhlbWUuZ2V0VGhlbWUoKS5hY3RpdmVcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY29sb3JTY2hlbWUgPSBhY3RpdmUuY29sb3JTY2hlbWVcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgIGlmIChhY3RpdmUuY29sb3JTY2hlbWUgPT09ICdkYXJrJykgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZHMtZGFyay10aGVtZScsICcnKVxuICAgIGVsc2UgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZHMtZGFyay10aGVtZScpXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIGFwcGxpZWRUb2tlbnMpIGJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSlcbiAgICBhcHBsaWVkVG9rZW5zLmxlbmd0aCA9IDBcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYWN0aXZlLnRva2VucykpIHtcbiAgICAgIGJvZHkuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpXG4gICAgICBhcHBsaWVkVG9rZW5zLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIHJvdyBoaWdobGlnaHRzIHRoZSB0aGVtZSB0aGUgc2VydmljZSBhY3R1YWxseSByZXNvbHZlZC4gKi9cbiAgY29uc3QgYWN0aXZlU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZWYgPSB0aGVtZS5nZXRUaGVtZSgpLnByZWZlcmVuY2VcbiAgICByZXR1cm4gcHJlZiA9PT0gJ2xpZ2h0JyB8fCBwcmVmID09PSAnZGFyaycgfHwgcHJlZiA9PT0gJ3N5c3RlbScgPyBERUZBVUxUX0lEIDogcHJlZlxuICB9XG5cbiAgY29uc3QgcHVibGlzaFJvdyA9IChlcnJvciA9ICcnKSA9PiB7XG4gICAgaWYgKCFib3VuZCkgcmV0dXJuXG4gICAgYm91bmQuc3luYyhhY3RpdmVTZWxlY3Rpb24oKSwgcmV2aXNpb24sIHRvUm93VGhlbWVzKHRoZW1lLmdldFRoZW1lKCksIG5hbWVCeUlkKSwgZXJyb3IpXG4gIH1cblxuICAvKiogUGVyc2lzdCB0aGUgcGlja2VyIHNlbGVjdGlvbiB0aHJvdWdoIHRoZSBjYXRhbG9nIHJvdXRlIChzZXJ2ZXItc2lkZSkuICovXG4gIGNvbnN0IHNhdmVTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHZvaWQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGlvbjogaWQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCByZXMuc3RhdHVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4gY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIGUpKVxuICB9XG5cbiAgLyoqIFJldmVydCB0byB0aGUgZHVyYWJsZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UgKGxpZ2h0IC8gZGFyayAvIHN5c3RlbSkuICovXG4gIGNvbnN0IGZvbGxvd0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhcHBlYXJhbmNlU2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHByZWZlcmVuY2U/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHByZWYgPSB2YWx1ZT8ucHJlZmVyZW5jZVxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShwcmVmID09PSAnbGlnaHQnIHx8IHByZWYgPT09ICdkYXJrJyB8fCBwcmVmID09PSAnc3lzdGVtJyA/IHByZWYgOiAnc3lzdGVtJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHJlZ2lzdHJ5IG5vdCByZWFkeSBcdTIwMTQgZmFsbHMgYmFjayBvbiBuZXh0IGxvYWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmUtYXNzZXJ0IHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uIGZvciBhIGJvdW5kZWQgbG9hZCB3aW5kb3cuIFRoZSB0aGVtZVxuICAgKiBzZXJ2aWNlIGFzeW5jaHJvbm91c2x5IGFkb3B0cyB0aGUgZHVyYWJsZSB1aS10aGVtZSBwcmVmZXJlbmNlIGFmdGVyIHdlXG4gICAqIHJlc3RvcmUsIGFuZCBldmVudCBkZWxpdmVyeSBmcm9tIHRoaXMgZmliZXIgdG8gdGhlIG9mZmljaWFsIHByZXNlbnRlciBpc1xuICAgKiB1bnJlbGlhYmxlIFx1MjAxNCBzbyB3aGlsZSB0aGUgd2luZG93IGlzIG9wZW4gd2Uga2VlcCBwdXNoaW5nIG91ciBzZWxlY3Rpb25cbiAgICogKGFuZCBhcHBseWluZyBpdHMgdG9rZW5zKSB1bnRpbCB0aGUgd2luZG93IGNsb3Nlcy4gTmV2ZXIgZmlnaHRzIGxhdGVyXG4gICAqIHVzZXIgYWN0aW9uczogdGhlIHdpbmRvdyBvbmx5IHNwYW5zIHRoZSBsb2FkLXRpbWUgYWRvcHRpb24uXG4gICAqL1xuICBsZXQgZW5mb3JjZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCB1bmRlZmluZWRcbiAgY29uc3Qgc3RvcEVuZm9yY2UgPSAoKSA9PiB7XG4gICAgaWYgKGVuZm9yY2VUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbmZvcmNlVGltZXIpXG4gICAgICBlbmZvcmNlVGltZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbiAgY29uc3QgZW5mb3JjZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBERUZBVUxUX0lEKSByZXR1cm5cbiAgICBpZiAodGhlbWUuZ2V0VGhlbWUoKS5wcmVmZXJlbmNlICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW1lLnNldFRoZW1lKHNlbGVjdGlvbilcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBub3QgcmVnaXN0ZXJlZCB5ZXQgXHUyMDE0IHRoZSBuZXh0IHRpY2sgcmV0cmllc1xuICAgICAgfVxuICAgIH1cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gIH1cblxuICAvLyBNaXJyb3IgdGhlIGxpdmUgdGhlbWUgc3RhdGUgaW50byB0aGUgcm93IGFuZCBrZWVwIHRoZSBhY3RpdmUgdG9rZW5zIG9uXG4gIC8vIDxib2R5PiBmb3Igd2hhdGV2ZXIgZXZlbnRzIHRoaXMgZmliZXIgZG9lcyByZWNlaXZlLlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBhcHBseUFjdGl2ZVRva2VucygpXG4gICAgcHVibGlzaFJvdygpXG4gIH0pXG5cbiAgY29uc3QgYXBwbHlTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShpZClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIG5vdCByZWdpc3RlcmVkIHlldCAoY2F0YWxvZyBzdGlsbCBsb2FkaW5nKSBcdTIwMTQgdGhlIHNlbGVjdGlvbiBpc1xuICAgICAgLy8gcmUtYXBwbGllZCBvbmNlIHJlZ2lzdHJhdGlvbiBjb21wbGV0ZXMuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJDYXRhbG9nID0gKGNhdGFsb2c6IFRoZW1lQ2F0YWxvZykgPT4ge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgWy4uLmNhdGFsb2cucHJlc2V0cywgLi4uY2F0YWxvZy51c2VyVGhlbWVzLCAuLi5jYXRhbG9nLnNldHRpbmdzVGhlbWVzXSkge1xuICAgICAgbmFtZUJ5SWRbZW50cnkuaWRdID0gZW50cnkubmFtZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlzcG9zZSA9IHRoZW1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgY29sb3JTY2hlbWU6IGVudHJ5LmNvbG9yU2NoZW1lLFxuICAgICAgICAgIHRva2VuczogZW50cnkudG9rZW5zID8/IHt9LFxuICAgICAgICB9KVxuICAgICAgICBkaXNwb3NlcnMucHVzaChkaXNwb3NlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tjb2xvcnNjaGVtZV0gZmFpbGVkIHRvIHJlZ2lzdGVyIHRoZW1lJywgZW50cnkuaWQsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFByZWNlZGVuY2U6IHBlcnNpc3RlZCBzZWxlY3Rpb24gKGZyb20gdGhlIGNhdGFsb2cpID4gY29uZmlnIGRlZmF1bHQgPiBmb2xsb3cgYXBwZWFyYW5jZS5cbiAgICBjb25zdCBzYXZlZCA9IGNhdGFsb2cuc2VsZWN0aW9uXG4gICAgaWYgKHNhdmVkICYmIHRoZW1lLmdldFRoZW1lKCkudGhlbWVzLnNvbWUoKHQpID0+IHQuaWQgPT09IHNhdmVkKSkge1xuICAgICAgc2VsZWN0aW9uID0gc2F2ZWRcbiAgICB9IGVsc2UgaWYgKGNhdGFsb2cuZGVmYXVsdFRoZW1lKSB7XG4gICAgICBzZWxlY3Rpb24gPSBjYXRhbG9nLmRlZmF1bHRUaGVtZVxuICAgIH1cbiAgICBhcHBseVNlbGVjdGlvbihzZWxlY3Rpb24pXG4gICAgYXBwbHlBY3RpdmVUb2tlbnMoKVxuICAgIGlmIChzZWxlY3Rpb24gIT09IERFRkFVTFRfSUQpIHtcbiAgICAgIC8vIENvdmVyIHRoZSBsb2FkLXRpbWUgYWRvcHRpb24gZmxpcHMgd2l0aCBhIGJvdW5kZWQgcmUtYXNzZXJ0IGxvb3AuXG4gICAgICBzdG9wRW5mb3JjZSgpXG4gICAgICBlbmZvcmNlVGltZXIgPSBzZXRJbnRlcnZhbChlbmZvcmNlU2VsZWN0aW9uLCA0MDApXG4gICAgICBzZXRUaW1lb3V0KHN0b3BFbmZvcmNlLCA1MDAwKVxuICAgIH1cbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBwdWJsaXNoUm93KClcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyBhbmQgYXBwbGllZCB0b2tlbnMgd2hlbiB0aGlzIHBsdWdpbiB1bmxvYWRzXG4gIC8vIChITVIgLyBjb25maWcgZWRpdCkuXG4gIGN0eC5lZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRpc3Bvc2UoKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBhbHJlYWR5IGdvbmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcG9zZXJzLmxlbmd0aCA9IDBcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXBwbGllZFRva2VucykgYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKVxuICAgICAgYXBwbGllZFRva2Vucy5sZW5ndGggPSAwXG4gICAgfSxcbiAgICAnY29sb3JzY2hlbWU6IHRoZW1lIHJlZ2lzdHJhdGlvbnMnLFxuICApXG5cbiAgLy8gVGhlIENvbG9yc2NoZW1lIHBpY2tlciBsaXZlcyBpbiBpdHMgb3duIHRhYiB1bmRlciBcdThCQkVcdTdGNkUgXHUyMTkyIFx1NjNEMlx1NEVGNiAobm90IHRoZVxuICAvLyBHZW5lcmFsIHNlY3Rpb24sIHdoaWNoIG9ubHkgb3ducyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSByb3cpLlxuICBjdHguc2xvdHMuaW5qZWN0KCdzZXR0aW5ncy5wbHVnaW5zLnRhYicsICgpID0+XG4gICAgY3R4LnNsb3RzLnJlZ2lzdGVyKFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2V0dGluZ3MucGx1Z2lucy50YWInLFxuICAgICAgICBpZDogJ2NvbG9yc2NoZW1lJyxcbiAgICAgICAgb3JkZXI6IDEwLFxuICAgICAgICBsYWJlbDogKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUykoJ2NvbG9yc2NoZW1lLnRpdGxlJyksXG4gICAgICAgIHN0b3JlLFxuICAgICAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICAgICAgaW5qZWN0OiAoYWN0aW9uczogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7XG4gICAgICAgICAgYm91bmQgPSBhY3Rpb25zXG4gICAgICAgICAgcHVibGlzaFJvdygpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBpZFxuICAgICAgICAgICAgICAvLyBBIGRlbGliZXJhdGUgcGljayB3aW5zIG92ZXIgdGhlIGxvYWQtdGltZSBlbmZvcmNlbWVudCBsb29wLlxuICAgICAgICAgICAgICBzdG9wRW5mb3JjZSgpXG4gICAgICAgICAgICAgIGlmIChpZCA9PT0gREVGQVVMVF9JRCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byB0aGUgQXBwZWFyYW5jZSBwcmVmZXJlbmNlIGFuZCBmb3JnZXQgb3VyXG4gICAgICAgICAgICAgICAgLy8gcGVyc2lzdGVkIGNvbG9yc2NoZW1lLlxuICAgICAgICAgICAgICAgIGZvbGxvd0FwcGVhcmFuY2UoKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oJycpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbHlTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgICAgc2F2ZVNlbGVjdGlvbihpZClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgQ29sb3JzY2hlbWVSb3csXG4gICAgKSxcbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBLG9C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

		})(module, module.exports, require);
		return module.exports;
	}
});
