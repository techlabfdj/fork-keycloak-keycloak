import { jsxs as r, Fragment as v, jsx as a } from "react/jsx-runtime";
import { u as h, $ as z, a as b, b as f, V as p, P as S, c as A, F, bw as O, A as w, X as y, B as C, bE as E, bA as x, bC as P } from "./index-D49mqW_n.js";
import { useTranslation as j } from "react-i18next";
import { useNavigate as k, Link as B } from "react-router-dom";
function $() {
  const { adminClient: s } = h(), { addAlert: c, addError: d } = z(), { t } = j(), m = k(), { realm: e } = b(), i = f({ mode: "onChange" }), { handleSubmit: l, formState: g } = i;
  return /* @__PURE__ */ r(v, { children: [
    /* @__PURE__ */ a(p, { titleKey: "createOrganization" }),
    /* @__PURE__ */ a(S, { variant: "light", children: /* @__PURE__ */ a(A, { role: "anyone", onSubmit: l(async (n) => {
      try {
        const o = x(n), { id: u } = await s.organizations.create(o);
        c(t("organizationSaveSuccess")), m(P({ realm: e, id: u, tab: "settings" }));
      } catch (o) {
        d("organizationSaveError", o);
      }
    }), isHorizontal: !0, children: /* @__PURE__ */ r(F, { ...i, children: [
      /* @__PURE__ */ a(O, {}),
      /* @__PURE__ */ r(w, { children: [
        /* @__PURE__ */ a(y, { formState: g, "data-testid": "save", children: t("save") }),
        /* @__PURE__ */ a(
          C,
          {
            "data-testid": "cancel",
            variant: "link",
            component: (n) => /* @__PURE__ */ a(B, { ...n, to: E({ realm: e }) }),
            children: t("cancel")
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  $ as default
};
//# sourceMappingURL=NewOrganization-DcLSAyBq.js.map
