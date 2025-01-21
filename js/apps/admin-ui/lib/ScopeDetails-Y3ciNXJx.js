import { jsxs as c, Fragment as D, jsx as t } from "react/jsx-runtime";
import { u as w, b9 as N, $ as z, aH as C, b as F, m as H, br as k, bb as l, V as U, aG as P, P as V, F as x, c as B, Q as d, A as E, B as m, g as T, d as j } from "./index-D49mqW_n.js";
import { useState as q } from "react";
import { useTranslation as G } from "react-i18next";
import { useNavigate as Q, Link as $ } from "react-router-dom";
function R() {
  const { adminClient: r } = w(), { t: e } = G(), { id: i, scopeId: o, realm: s } = N(), p = Q(), { addAlert: S, addError: v } = z(), [f, u] = C(), [n, h] = q(), b = F({
    mode: "onChange"
  }), { reset: g, handleSubmit: y } = b;
  H(
    async () => {
      if (o) {
        const a = await r.clients.getAuthorizationScope({
          id: i,
          scopeId: o
        });
        if (!a)
          throw new Error(e("notFound"));
        return a;
      }
    },
    (a) => {
      h(a), g({ ...a });
    },
    []
  );
  const A = async (a) => {
    try {
      o ? (await r.clients.updateAuthorizationScope(
        { id: i, scopeId: o },
        a
      ), h(a)) : (await r.clients.createAuthorizationScope(
        { id: i },
        {
          name: a.name,
          displayName: a.displayName,
          iconUri: a.iconUri
        }
      ), p(l({ realm: s, clientId: i, tab: "scopes" }))), S(
        e((o ? "update" : "create") + "ScopeSuccess"),
        j.success
      );
    } catch (I) {
      v("scopeSaveError", I);
    }
  };
  return /* @__PURE__ */ c(D, { children: [
    /* @__PURE__ */ t(
      k,
      {
        clientId: i,
        open: f,
        toggleDialog: u,
        selectedScope: n,
        refresh: () => p(l({ realm: s, clientId: i, tab: "scopes" }))
      }
    ),
    /* @__PURE__ */ t(
      U,
      {
        titleKey: o ? n?.name : e("createAuthorizationScope"),
        dropdownItems: o ? [
          /* @__PURE__ */ t(
            P,
            {
              "data-testid": "delete-resource",
              onClick: () => u(),
              children: e("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ t(V, { variant: "light", children: /* @__PURE__ */ t(x, { ...b, children: /* @__PURE__ */ c(
      B,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: y(A),
        children: [
          /* @__PURE__ */ t(
            d,
            {
              name: "name",
              label: e("name"),
              labelIcon: e("scopeNameHelp"),
              rules: { required: e("required") }
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              name: "displayName",
              label: e("displayName"),
              labelIcon: e("scopeDisplayNameHelp")
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              name: "iconUri",
              label: e("iconUri"),
              labelIcon: e("iconUriHelp")
            }
          ),
          /* @__PURE__ */ t(E, { children: /* @__PURE__ */ c("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ t(
              m,
              {
                variant: T.primary,
                type: "submit",
                "data-testid": "save",
                children: e("save")
              }
            ),
            n ? /* @__PURE__ */ t(
              m,
              {
                variant: "link",
                "data-testid": "revert",
                onClick: () => g({ ...n }),
                children: e("revert")
              }
            ) : /* @__PURE__ */ t(
              m,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (a) => /* @__PURE__ */ t(
                  $,
                  {
                    ...a,
                    to: l({
                      realm: s,
                      clientId: i,
                      tab: "scopes"
                    })
                  }
                ),
                children: e("cancel")
              }
            )
          ] }) })
        ]
      }
    ) }) })
  ] });
}
export {
  R as default
};
//# sourceMappingURL=ScopeDetails-Y3ciNXJx.js.map
