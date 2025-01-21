import { jsxs as r, Fragment as f, jsx as t } from "react/jsx-runtime";
import { u as h, a as F, $ as b, b as v, V as y, P as g, F as S, c as A, N as C, W as I, A as T, X as H, B as N, t as P, d as i, e as V } from "./index-D49mqW_n.js";
import { useTranslation as k } from "react-i18next";
import { useNavigate as x, Link as B } from "react-router-dom";
const c = ["basic-flow", "client-flow"];
function E() {
  const { adminClient: u } = h(), { t: e } = k(), d = x(), { realm: n } = F(), { addAlert: l } = b(), s = v(), { handleSubmit: m, formState: p } = s;
  return /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ t(y, { titleKey: "createFlow", subKey: "authenticationCreateFlowHelp" }),
    /* @__PURE__ */ t(g, { variant: "light", children: /* @__PURE__ */ t(S, { ...s, children: /* @__PURE__ */ r(
      A,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: m(async (a) => {
          const w = { ...a, builtIn: !1, topLevel: !0 };
          try {
            const { id: o } = await u.authenticationManagement.createFlow(w);
            l(e("flowCreatedSuccess"), i.success), d(
              V({
                realm: n,
                id: o,
                usedBy: "notInUse"
              })
            );
          } catch (o) {
            l(
              e("flowCreateError", {
                error: o.response?.data?.errorMessage || o
              }),
              i.danger
            );
          }
        }),
        children: [
          /* @__PURE__ */ t(C, {}),
          /* @__PURE__ */ t(
            I,
            {
              name: "providerId",
              label: e("flowType"),
              labelIcon: e("topLevelFlowTypeHelp"),
              "aria-label": e("selectFlowType"),
              controller: { defaultValue: c[0] },
              options: c.map((a) => ({
                key: a,
                value: e(`top-level-flow-type.${a}`)
              }))
            }
          ),
          /* @__PURE__ */ r(T, { children: [
            /* @__PURE__ */ t(
              H,
              {
                formState: p,
                "data-testid": "create",
                allowInvalid: !0,
                allowNonDirty: !0,
                children: e("create")
              }
            ),
            /* @__PURE__ */ t(
              N,
              {
                "data-testid": "cancel",
                variant: "link",
                component: (a) => /* @__PURE__ */ t(B, { ...a, to: P({ realm: n }) }),
                children: e("cancel")
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  E as default
};
//# sourceMappingURL=CreateFlow-CgrG-zrj.js.map
