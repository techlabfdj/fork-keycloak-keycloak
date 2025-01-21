import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { u as f, $ as P, a as p, b9 as O, b as S, m as A, P as c, F, bs as x, bt as B, bu as d, bv as b, c as C, bw as E, A as w, X as D, B as R, bx as V, by as j, bz as k, bA as H, bB as I, bC as X, bD as $ } from "./index-D49mqW_n.js";
import { useTranslation as G } from "react-i18next";
function q() {
  const { adminClient: m } = f(), { addAlert: u, addError: h } = P(), { realm: g } = p(), { id: r } = O(), { t: a } = G(), e = S(), l = async (i) => {
    try {
      const s = H(i);
      await m.organizations.updateById({ id: r }, s), u(a("organizationSaveSuccess"));
    } catch (s) {
      h("organizationSaveError", s);
    }
  };
  A(
    () => m.organizations.findOne({ id: r }),
    (i) => {
      if (!i)
        throw new Error(a("notFound"));
      e.reset({
        ...i,
        domains: i.domains?.map((s) => s.name),
        attributes: $(i.attributes)
      });
    },
    [r]
  );
  const n = (i) => I(
    X({
      realm: g,
      id: r,
      tab: i
    })
  ), v = n("settings"), T = n("attributes"), y = n("members"), z = n("identityProviders");
  return /* @__PURE__ */ t(c, { variant: "light", className: "pf-v5-u-p-0", children: /* @__PURE__ */ o(F, { ...e, children: [
    /* @__PURE__ */ t(x, { save: () => l(e.getValues()) }),
    /* @__PURE__ */ o(
      B,
      {
        "data-testid": "organization-tabs",
        "aria-label": a("organization"),
        isBox: !0,
        mountOnEnter: !0,
        children: [
          /* @__PURE__ */ t(
            d,
            {
              id: "settings",
              "data-testid": "settingsTab",
              title: /* @__PURE__ */ t(b, { children: a("settings") }),
              ...v,
              children: /* @__PURE__ */ t(c, { children: /* @__PURE__ */ o(
                C,
                {
                  role: "anyone",
                  onSubmit: e.handleSubmit(l),
                  isHorizontal: !0,
                  children: [
                    /* @__PURE__ */ t(E, { readOnly: !0 }),
                    /* @__PURE__ */ o(w, { children: [
                      /* @__PURE__ */ t(
                        D,
                        {
                          formState: e.formState,
                          "data-testid": "save",
                          children: a("save")
                        }
                      ),
                      /* @__PURE__ */ t(
                        R,
                        {
                          onClick: () => e.reset(),
                          "data-testid": "reset",
                          variant: "link",
                          children: a("reset")
                        }
                      )
                    ] })
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "attributes",
              "data-testid": "attributeTab",
              title: /* @__PURE__ */ t(b, { children: a("attributes") }),
              ...T,
              children: /* @__PURE__ */ t(c, { variant: "light", children: /* @__PURE__ */ t(
                V,
                {
                  form: e,
                  save: l,
                  reset: () => e.reset({
                    ...e.getValues()
                  }),
                  name: "attributes"
                }
              ) })
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "members",
              "data-testid": "membersTab",
              title: /* @__PURE__ */ t(b, { children: a("members") }),
              ...y,
              children: /* @__PURE__ */ t(j, {})
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "identityProviders",
              "data-testid": "identityProvidersTab",
              title: /* @__PURE__ */ t(b, { children: a("identityProviders") }),
              ...z,
              children: /* @__PURE__ */ t(k, {})
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  q as default
};
//# sourceMappingURL=DetailOrganization-CaIRdvr1.js.map
