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
  const publishRow = (error = "") => {
    if (!bound) return;
    bound.sync(selection, revision, toRowThemes(theme.getTheme(), nameById), error);
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
    const saved = catalog.selection;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQ29sb3JzY2hlbWUgcGx1Z2luIFx1MjAxNCBjbGllbnQgaGFsZi5cbiAqXG4gKiAtIEZldGNoZXMgdGhlIHRoZW1lIGNhdGFsb2cgZnJvbSB0aGUgc2VydmVyIHJvdXRlLCByZWdpc3RlcnMgZXZlcnkgZW50cnkgb25cbiAqICAgYGN0eC50aGVtZWAgKHRoZSBEU0ggdGhlbWUgc2VydmljZSksIHJlc3RvcmVzIHRoZSBwZXJzaXN0ZWQgc2VsZWN0aW9uLFxuICogICBhbmQgY29udHJpYnV0ZXMgYSBcIkNvbG9yc2NoZW1lXCIgcHJlZmVyZW5jZSByb3cgdG8gdGhlIEdlbmVyYWwgc2V0dGluZ3NcbiAqICAgc2VjdGlvbiAobWlycm9yaW5nIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdykuXG4gKiAtIFRoaXJkLXBhcnR5IHRoZW1lIHNlbGVjdGlvbiBpcyBwcm9jZXNzLWxvY2FsIGluIFRoZW1lUnVudGltZSBhbmQgdGhlXG4gKiAgIGJyb3dzZXIgc2V0dGluZ3Mgd2lyZSBvbmx5IGV4cG9zZXMgYnVpbHQtaW4gbmFtZXNwYWNlcywgc28gdGhlIHBsdWdpblxuICogICBwZXJzaXN0cyB0aGUgY2hvc2VuIGlkIHRocm91Z2ggaXRzIG93biBjYXRhbG9nIHJvdXRlIChQT1NUKSBhbmRcbiAqICAgcmUtYXBwbGllcyBpdCBvbiBsb2FkLlxuICovXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXJ1bnRpbWUvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBDbGllbnRDb250ZXh0IH0gZnJvbSAnQGRlZXBzZWVrLWFpL2RzaC1jbGllbnQtcnVudGltZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lU25hcHNob3QgfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS10aGVtZS9jbGllbnQnXG4vLyBUeXBlLW9ubHkgaW1wb3J0cyB0aGF0IHB1bGwgdGhlIGNvbnRleHQgYXVnbWVudGF0aW9ucyAoc2V0dGluZ3NTY29wZSxcbi8vIGxvY2FsZSwgdGhlIHNldHRpbmdzLmdlbmVyYWwuaXRlbSBzbG90IGNvbnRyYWN0KSBpbnRvIHRoaXMgcHJvZ3JhbS5cbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXNldHRpbmdzL2NsaWVudCdcbmltcG9ydCB0eXBlIHt9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LWxvY2FsZS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IFRoZW1lQ2F0YWxvZyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnY29sb3JzY2hlbWUnXG5cbi8qKiBSZXF1aXJlZCBjbGllbnQgc2VydmljZXMgKGZpYmVyIGluamVjdCBcdTIwMTQgd2FpdHMgZm9yIHRoZSB0aGVtZSBzZXJ2aWNlKS4gKi9cbmV4cG9ydCBjb25zdCBpbmplY3QgPSBbJ3RoZW1lJywgJ3Nsb3RzJywgJ2xvY2FsZScsICdjb25uZWN0aW9uJywgJ3JlbW90ZScsICdzZXR0aW5nc1Njb3BlJ11cblxuY29uc3QgTlMgPSAnY29sb3JzY2hlbWUnXG4vKiogVGhlIGJ1aWx0LWluIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBuYW1lc3BhY2UgKG93bmVkIGJ5IGRzaC1jbGllbnQtdWktdGhlbWUpLiAqL1xuY29uc3QgVEhFTUVfTlMgPSAndWktdGhlbWUnXG5jb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MuY29sb3JzY2hlbWUnXG5jb25zdCBDQVRBTE9HX1VSTCA9ICdjb2xvcnNjaGVtZS90aGVtZXMuanNvbidcbmNvbnN0IFNUWUxFX1RBRyA9ICdkc2gtcGx1Z2luLWNvbG9yc2NoZW1lL3Jvdy5jc3MnXG5jb25zdCBERUZBVUxUX0lEID0gJycgLy8gc2VudGluZWw6IGZvbGxvdyB0aGUgYnVpbHQtaW4gQXBwZWFyYW5jZSBwcmVmZXJlbmNlXG5cbi8qKlxuICogUHJlZmVyZW5jZS1yb3cgc3R5bGVzLiBJbmplY3RlZCBvbmNlIHBlciBtYXRlcmlhbGl6YXRpb24gd2l0aCB0aGUgbG9hZGVyJ3NcbiAqIGBkYXRhLXBsdWdpbi1jc3NgIGNvbnRyYWN0IHNvIHRoZSBjbGllbnQgSE1SIGRyaXZlciBjYW4gaW52ZW50b3J5L3JlbW92ZSBpdC5cbiAqL1xuY29uc3QgUk9XX0NTUyA9IGBcbi5kc2hjcy1yb3d7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3BhZGRpbmc6MTZweCAwfVxuLmRzaGNzLXRpdGxle2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjJweH1cbi5kc2hjcy1ncmlke2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4fVxuLmRzaGNzLWNoaXB7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyKTtib3JkZXItcmFkaXVzOjk5OXB4O2NvbG9yOnZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZToxM3B4O2dhcDo4cHg7cGFkZGluZzo2cHggMTJweH1cbi5kc2hjcy1jaGlwOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tZHN3LWFsaWFzLWludGVyYWN0aXZlLWJnLWhvdmVyKX1cbi5kc2hjcy1jaGlwW2FyaWEtcHJlc3NlZD1cInRydWVcIl17YmFja2dyb3VuZDp2YXIoLS1kc3ctYWxpYXMtYmctbW9kdWxlLXBsYXRmb3JtKTtib3JkZXItY29sb3I6dmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC00MDApfVxuLmRzaGNzLWRvdHN7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6MnB4fVxuLmRzaGNzLWRvdHtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE4KTtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MTJweDt3aWR0aDoxMnB4fVxuLmRzaGNzLWRvdC1kZWZhdWx0e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1kc3ctc3RhdGljLW5ldXRyYWwtYmx1aXNoLTUwKSA1MCUsdmFyKC0tZHN3LXN0YXRpYy1uZXV0cmFsLWJsdWlzaC05MDApIDUwJSl9XG4uZHNoY3MtZXJyb3J7Y29sb3I6dmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnkpO2ZvbnQtc2l6ZToxMnB4fVxuYFxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1wbHVnaW4tY3NzPSR7SlNPTi5zdHJpbmdpZnkoU1RZTEVfVEFHKX1dYCkgPT09IG51bGwpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICB0YWcuZGF0YXNldC5wbHVnaW4gPSAnZHNoLXBsdWdpbi1jb2xvcnNjaGVtZSdcbiAgdGFnLmRhdGFzZXQucGx1Z2luQ3NzID0gU1RZTEVfVEFHXG4gIHRhZy50ZXh0Q29udGVudCA9IFJPV19DU1NcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0YWcpXG59XG5cbi8qKiBTaW1wbGlmaWVkIENoaW5lc2UgZGljdGlvbmFyeSAoa2V5LXNldCBzb3VyY2Ugb2YgdHJ1dGgpLiAqL1xuY29uc3QgemggPSB7XG4gICdjb2xvcnNjaGVtZS50aXRsZSc6ICdcdTkxNERcdTgyNzJcdTY1QjlcdTY4NDgnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdcdThEREZcdTk2OEZcdTU5MTZcdTg5QzInLFxuICAnY29sb3JzY2hlbWUubG9hZEVycm9yJzogJ1x1OTE0RFx1ODI3Mlx1NjVCOVx1Njg0OFx1NTJBMFx1OEY3RFx1NTkzMVx1OEQyNScsXG59IGFzIGNvbnN0XG5cbi8qKiBFbmdsaXNoIGRpY3Rpb25hcnksIGNoZWNrZWQgY29tcGxldGUgYWdhaW5zdCB0aGUgemgga2V5IHNldC4gKi9cbmNvbnN0IGVuOiBSZWNvcmQ8a2V5b2YgdHlwZW9mIHpoLCBzdHJpbmc+ID0ge1xuICAnY29sb3JzY2hlbWUudGl0bGUnOiAnQ29sb3JzY2hlbWUnLFxuICAnY29sb3JzY2hlbWUuZGVmYXVsdCc6ICdGb2xsb3cgYXBwZWFyYW5jZScsXG4gICdjb2xvcnNjaGVtZS5sb2FkRXJyb3InOiAnRmFpbGVkIHRvIGxvYWQgY29sb3JzY2hlbWVzJyxcbn1cblxuLyoqIFJvdyBkaXNwbGF5IG1vZGVsOiBpZCwgbmFtZSwgYW5kIHRocmVlIHNhbXBsZSBjb2xvcnMgKGJnIC8gZmcgLyBhY2NlbnQpLiAqL1xuaW50ZXJmYWNlIFJvd1RoZW1lIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29sb3JTY2hlbWU6ICdsaWdodCcgfCAnZGFyaydcbiAgc2FtcGxlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIFJvd1N0YXRlIHtcbiAgc2VsZWN0aW9uOiBzdHJpbmdcbiAgcmV2aXNpb246IG51bWJlclxuICB0aGVtZXM6IFJvd1RoZW1lW11cbiAgZXJyb3I6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3dTdG9yZSgpIHtcbiAgcmV0dXJuIGRlZmluZVN0b3JlKHtcbiAgICBpbml0OiAoKTogUm93U3RhdGUgPT4gKHsgc2VsZWN0aW9uOiBERUZBVUxUX0lELCByZXZpc2lvbjogLTEsIHRoZW1lczogW10sIGVycm9yOiAnJyB9KSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzeW5jOiAoZDogUm93U3RhdGUsIHNlbGVjdGlvbjogc3RyaW5nLCByZXZpc2lvbjogbnVtYmVyLCB0aGVtZXM6IFJvd1RoZW1lW10sIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJldmlzaW9uIDw9IGQucmV2aXNpb24pIHJldHVyblxuICAgICAgICBkLnNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICBkLnJldmlzaW9uID0gcmV2aXNpb25cbiAgICAgICAgZC50aGVtZXMgPSB0aGVtZXNcbiAgICAgICAgZC5lcnJvciA9IGVycm9yXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvUm93VGhlbWVzKHNuYXBzaG90OiBUaGVtZVNuYXBzaG90LCBuYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFJvd1RoZW1lW10ge1xuICByZXR1cm4gc25hcHNob3QudGhlbWVzXG4gICAgLy8gVGhlIGJ1aWx0LWluIGxpZ2h0L2RhcmsgcGFpciBpcyBvd25lZCBieSB0aGUgQXBwZWFyYW5jZSByb3cgYWJvdmUuXG4gICAgLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gJ2xpZ2h0JyAmJiB0LmlkICE9PSAnZGFyaycpXG4gICAgLm1hcCgodCkgPT4gKHtcbiAgICAgIGlkOiB0LmlkLFxuICAgICAgbmFtZTogbmFtZXNbdC5pZF0gPz8gdC5pZCxcbiAgICAgIGNvbG9yU2NoZW1lOiB0LmNvbG9yU2NoZW1lLFxuICAgICAgc2FtcGxlczogW1xuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYmctYmFzZSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSddID8/ICcnLFxuICAgICAgICB0LnRva2Vuc1snLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSddID8/ICcnLFxuICAgICAgXSxcbiAgICB9KSlcbn1cblxuLyoqIFRoZSBDb2xvcnNjaGVtZSBwcmVmZXJlbmNlIHJvdyAocmVnaXN0ZXJlZCBpbnRvIHNldHRpbmdzLmdlbmVyYWwuaXRlbSkuICovXG5mdW5jdGlvbiBDb2xvcnNjaGVtZVJvdyhwcm9wczoge1xuICB0OiAoa2V5OiBrZXlvZiB0eXBlb2YgemgpID0+IHN0cmluZ1xuICB1c2VTdG9yZTogPFM+KHNlbGVjdG9yOiAoczogUm93U3RhdGUpID0+IFMpID0+IFNcbiAgc2V0VGhlbWU6IChpZDogc3RyaW5nKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgdCwgdXNlU3RvcmUsIHNldFRoZW1lIH0gPSBwcm9wc1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VTdG9yZSgocykgPT4gcy5zZWxlY3Rpb24pXG4gIGNvbnN0IHRoZW1lcyA9IHVzZVN0b3JlKChzKSA9PiBzLnRoZW1lcylcbiAgY29uc3QgZXJyb3IgPSB1c2VTdG9yZSgocykgPT4gcy5lcnJvcilcblxuICBjb25zdCBjaGlwcyA9IFtcbiAgICB7XG4gICAgICBpZDogREVGQVVMVF9JRCxcbiAgICAgIGxhYmVsOiB0KCdjb2xvcnNjaGVtZS5kZWZhdWx0JyksXG4gICAgICBzYW1wbGVzOiBbXSxcbiAgICB9LFxuICAgIC4uLnRoZW1lcy5tYXAoKHRoKSA9PiAoeyBpZDogdGguaWQsIGxhYmVsOiB0aC5uYW1lLCBzYW1wbGVzOiB0aC5zYW1wbGVzIH0pKSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkc2hjcy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtdGl0bGVcIj57dCgnY29sb3JzY2hlbWUudGl0bGUnKX08L2Rpdj5cbiAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZXJyb3JcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHNoY3MtZ3JpZFwiPlxuICAgICAgICB7Y2hpcHMubWFwKChjaGlwKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtjaGlwLmlkfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkc2hjcy1jaGlwXCJcbiAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0aW9uID09PSBjaGlwLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY2hpcC5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaXAuc2FtcGxlcy5sZW5ndGggPT09IDMgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRzaGNzLWRvdHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICB7Y2hpcC5zYW1wbGVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJkc2hjcy1kb3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMgfX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHNoY3MtZG90IGRzaGNzLWRvdC1kZWZhdWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2hpcC5sYWJlbH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vKiogRmV0Y2ggdGhlIHNlcnZlci1zaWRlIHRoZW1lIGNhdGFsb2cgb25jZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDYXRhbG9nKCk6IFByb21pc2U8VGhlbWVDYXRhbG9nPiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENBVEFMT0dfVVJMLCB7IGhlYWRlcnM6IHsgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBjYXRhbG9nIHJlcXVlc3QgZmFpbGVkOiAke3Jlcy5zdGF0dXN9YClcbiAgcmV0dXJuIChhd2FpdCByZXMuanNvbigpKSBhcyBUaGVtZUNhdGFsb2dcbn1cblxuLyoqIENsaWVudCBwbHVnaW4gYm9keS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjdHg6IENsaWVudENvbnRleHQpOiB2b2lkIHtcbiAgY29uc3QgdGhlbWUgPSBjdHgudGhlbWVcbiAgLy8gVGhlIEFwcGVhcmFuY2Ugcm93J3MgZHVyYWJsZSBwcmVmZXJlbmNlIChsaWdodC9kYXJrL3N5c3RlbSkgXHUyMDE0IHRoZSB0YXJnZXRcbiAgLy8gb2YgXCJcdThEREZcdTk2OEZcdTU5MTZcdTg5QzIgLyBGb2xsb3cgYXBwZWFyYW5jZVwiLlxuICBjb25zdCBhcHBlYXJhbmNlU2NvcGUgPSBjdHguc2V0dGluZ3NTY29wZS5iaW5kKHsgbmFtZXNwYWNlOiBUSEVNRV9OUyB9KVxuICBjb25zdCBuYW1lQnlJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gIGNvbnN0IGRpc3Bvc2VyczogKCgpID0+IHZvaWQpW10gPSBbXVxuXG4gIGN0eC5lZmZlY3QoKCkgPT4gY3R4LmxvY2FsZS5yZWdpc3RlcihMT0NBTEVfTlMsIHsgemgsIGVuIH0pLCAnY29sb3JzY2hlbWU6IGxvY2FsZSBkaWN0aW9uYXJ5JylcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVJvd1N0b3JlKClcbiAgbGV0IGJvdW5kOiB7IHN5bmM6IChzZWxlY3Rpb246IHN0cmluZywgcmV2aXNpb246IG51bWJlciwgdGhlbWVzOiBSb3dUaGVtZVtdLCBlcnJvcjogc3RyaW5nKSA9PiB2b2lkIH0gfCB1bmRlZmluZWRcbiAgbGV0IHNlbGVjdGlvbiA9IERFRkFVTFRfSURcbiAgbGV0IHJldmlzaW9uID0gLTFcblxuICBjb25zdCBwdWJsaXNoUm93ID0gKGVycm9yID0gJycpID0+IHtcbiAgICBpZiAoIWJvdW5kKSByZXR1cm5cbiAgICBib3VuZC5zeW5jKHNlbGVjdGlvbiwgcmV2aXNpb24sIHRvUm93VGhlbWVzKHRoZW1lLmdldFRoZW1lKCksIG5hbWVCeUlkKSwgZXJyb3IpXG4gIH1cblxuICAvKiogUGVyc2lzdCB0aGUgcGlja2VyIHNlbGVjdGlvbiB0aHJvdWdoIHRoZSBjYXRhbG9nIHJvdXRlIChzZXJ2ZXItc2lkZSkuICovXG4gIGNvbnN0IHNhdmVTZWxlY3Rpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHZvaWQgZmV0Y2goQ0FUQUxPR19VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGlvbjogaWQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcGVyc2lzdCBzZWxlY3Rpb24nLCByZXMuc3RhdHVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogdW5rbm93bikgPT4gY29uc29sZS53YXJuKCdbY29sb3JzY2hlbWVdIGZhaWxlZCB0byBwZXJzaXN0IHNlbGVjdGlvbicsIGUpKVxuICB9XG5cbiAgLyoqIFJldmVydCB0byB0aGUgZHVyYWJsZSBBcHBlYXJhbmNlIHByZWZlcmVuY2UgKGxpZ2h0IC8gZGFyayAvIHN5c3RlbSkuICovXG4gIGNvbnN0IGZvbGxvd0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhcHBlYXJhbmNlU2NvcGUuZ2V0U25hcHNob3QoKS52YWx1ZSBhcyB7IHByZWZlcmVuY2U/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHByZWYgPSB2YWx1ZT8ucHJlZmVyZW5jZVxuICAgIHRyeSB7XG4gICAgICB0aGVtZS5zZXRUaGVtZShwcmVmID09PSAnbGlnaHQnIHx8IHByZWYgPT09ICdkYXJrJyB8fCBwcmVmID09PSAnc3lzdGVtJyA/IHByZWYgOiAnc3lzdGVtJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHJlZ2lzdHJ5IG5vdCByZWFkeSBcdTIwMTQgZmFsbHMgYmFjayBvbiBuZXh0IGxvYWRcbiAgICB9XG4gIH1cblxuICAvLyBNaXJyb3IgdGhlIGxpdmUgdGhlbWUgc3RhdGUgaW50byB0aGUgcm93LlxuICBjdHgub24oJ3RoZW1lL2NoYW5nZScsICgpID0+IHtcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBwdWJsaXNoUm93KClcbiAgfSlcblxuICBjb25zdCBhcHBseVNlbGVjdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFpZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHRoZW1lLnNldFRoZW1lKGlkKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbm90IHJlZ2lzdGVyZWQgeWV0IChjYXRhbG9nIHN0aWxsIGxvYWRpbmcpIFx1MjAxNCB0aGUgc2VsZWN0aW9uIGlzXG4gICAgICAvLyByZS1hcHBsaWVkIG9uY2UgcmVnaXN0cmF0aW9uIGNvbXBsZXRlcy5cbiAgICB9XG4gIH1cblxuICBjb25zdCByZWdpc3RlckNhdGFsb2cgPSAoY2F0YWxvZzogVGhlbWVDYXRhbG9nKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBbLi4uY2F0YWxvZy5wcmVzZXRzLCAuLi5jYXRhbG9nLnVzZXJUaGVtZXMsIC4uLmNhdGFsb2cuc2V0dGluZ3NUaGVtZXNdKSB7XG4gICAgICBuYW1lQnlJZFtlbnRyeS5pZF0gPSBlbnRyeS5uYW1lXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXNwb3NlID0gdGhlbWUucmVnaXN0ZXIoe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBjb2xvclNjaGVtZTogZW50cnkuY29sb3JTY2hlbWUsXG4gICAgICAgICAgdG9rZW5zOiBlbnRyeS50b2tlbnMgPz8ge30sXG4gICAgICAgIH0pXG4gICAgICAgIGRpc3Bvc2Vycy5wdXNoKGRpc3Bvc2UpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBmYWlsZWQgdG8gcmVnaXN0ZXIgdGhlbWUnLCBlbnRyeS5pZCwgZSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJlY2VkZW5jZTogcGVyc2lzdGVkIHNlbGVjdGlvbiAoZnJvbSB0aGUgY2F0YWxvZykgPiBjb25maWcgZGVmYXVsdCA+IGZvbGxvdyBhcHBlYXJhbmNlLlxuICAgIGNvbnN0IHNhdmVkID0gY2F0YWxvZy5zZWxlY3Rpb25cbiAgICBpZiAoc2F2ZWQgJiYgdGhlbWUuZ2V0VGhlbWUoKS50aGVtZXMuc29tZSgodCkgPT4gdC5pZCA9PT0gc2F2ZWQpKSB7XG4gICAgICBzZWxlY3Rpb24gPSBzYXZlZFxuICAgIH0gZWxzZSBpZiAoY2F0YWxvZy5kZWZhdWx0VGhlbWUpIHtcbiAgICAgIHNlbGVjdGlvbiA9IGNhdGFsb2cuZGVmYXVsdFRoZW1lXG4gICAgfVxuICAgIGFwcGx5U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICByZXZpc2lvbiA9IHRoZW1lLmdldFRoZW1lKCkucmV2aXNpb25cbiAgICBwdWJsaXNoUm93KClcbiAgfVxuXG4gIHZvaWQgbG9hZENhdGFsb2coKVxuICAgIC50aGVuKHJlZ2lzdGVyQ2F0YWxvZylcbiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignW2NvbG9yc2NoZW1lXSBjYXRhbG9nIGxvYWQgZmFpbGVkJywgZSlcbiAgICAgIHB1Ymxpc2hSb3codHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgPyBTdHJpbmcoKGUgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pLm1lc3NhZ2UpIDogU3RyaW5nKGUpKVxuICAgIH0pXG5cbiAgLy8gQ2xlYW4gdXAgdGhlbWUgcmVnaXN0cmF0aW9ucyB3aGVuIHRoaXMgcGx1Z2luIHVubG9hZHMgKEhNUiAvIGNvbmZpZyBlZGl0KS5cbiAgY3R4LmVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGRpc3Bvc2Ugb2YgZGlzcG9zZXJzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGlzcG9zZSgpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGFscmVhZHkgZ29uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwb3NlcnMubGVuZ3RoID0gMFxuICAgIH0sXG4gICAgJ2NvbG9yc2NoZW1lOiB0aGVtZSByZWdpc3RyYXRpb25zJyxcbiAgKVxuXG4gIC8vIFRoZSBwcmVmZXJlbmNlIHJvdywgcGxhY2VkIGFmdGVyIHRoZSBidWlsdC1pbiBBcHBlYXJhbmNlIHJvdyAob3JkZXIgMTApLlxuICBjdHguc2xvdHMuaW5qZWN0KCdzZXR0aW5ncy5nZW5lcmFsLml0ZW0nLCAoKSA9PlxuICAgIGN0eC5zbG90cy5yZWdpc3RlcihcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NldHRpbmdzLmdlbmVyYWwuaXRlbScsXG4gICAgICAgIGlkOiAnY29sb3JzY2hlbWUnLFxuICAgICAgICBvcmRlcjogMjAsXG4gICAgICAgIHN0b3JlLFxuICAgICAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICAgICAgaW5qZWN0OiAoYWN0aW9uczogeyBzeW5jOiAoc2VsZWN0aW9uOiBzdHJpbmcsIHJldmlzaW9uOiBudW1iZXIsIHRoZW1lczogUm93VGhlbWVbXSwgZXJyb3I6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7XG4gICAgICAgICAgYm91bmQgPSBhY3Rpb25zXG4gICAgICAgICAgcHVibGlzaFJvdygpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldFRoZW1lOiAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBpZFxuICAgICAgICAgICAgICBpZiAoaWQgPT09IERFRkFVTFRfSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIEFwcGVhcmFuY2UgcHJlZmVyZW5jZSBhbmQgZm9yZ2V0IG91clxuICAgICAgICAgICAgICAgIC8vIHBlcnNpc3RlZCBjb2xvcnNjaGVtZS5cbiAgICAgICAgICAgICAgICBmb2xsb3dBcHBlYXJhbmNlKClcbiAgICAgICAgICAgICAgICBzYXZlU2VsZWN0aW9uKCcnKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5U2VsZWN0aW9uKGlkKVxuICAgICAgICAgICAgICAgIHNhdmVTZWxlY3Rpb24oaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIENvbG9yc2NoZW1lUm93LFxuICAgICksXG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQSxvQkFBNEI7QUFnSXRCO0FBdkhDLElBQU0sT0FBTztBQUdiLElBQU0sU0FBUyxDQUFDLFNBQVMsU0FBUyxVQUFVLGNBQWMsVUFBVSxlQUFlO0FBSTFGLElBQU0sV0FBVztBQUNqQixJQUFNLFlBQVk7QUFDbEIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sWUFBWTtBQUNsQixJQUFNLGFBQWE7QUFNbkIsSUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVloQixJQUFJLE9BQU8sYUFBYSxlQUFlLFNBQVMsY0FBYyx5QkFBeUIsS0FBSyxVQUFVLFNBQVMsQ0FBQyxHQUFHLE1BQU0sTUFBTTtBQUM3SCxRQUFNLE1BQU0sU0FBUyxjQUFjLE9BQU87QUFDMUMsTUFBSSxRQUFRLFNBQVM7QUFDckIsTUFBSSxRQUFRLFlBQVk7QUFDeEIsTUFBSSxjQUFjO0FBQ2xCLFdBQVMsS0FBSyxZQUFZLEdBQUc7QUFDL0I7QUFHQSxJQUFNLEtBQUs7QUFBQSxFQUNULHFCQUFxQjtBQUFBLEVBQ3JCLHVCQUF1QjtBQUFBLEVBQ3ZCLHlCQUF5QjtBQUMzQjtBQUdBLElBQU0sS0FBc0M7QUFBQSxFQUMxQyxxQkFBcUI7QUFBQSxF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

		})(module, module.exports, require);
		return module.exports;
	}
});
