import { jsxs as u, Fragment as R, jsx as o } from "react/jsx-runtime";
import { u as q, b9 as k, $ as J, bF as Q, b as U, m as W, V as X, P as Y, c as Z, bf as _, bg as V, b6 as ee, b7 as te, b8 as oe, aP as re, F as ce, aL as ae, A as se, B as g, bG as b, d as ne } from "./index-D49mqW_n.js";
import { useState as l } from "react";
import { useTranslation as ie } from "react-i18next";
import { useNavigate as le, Link as F } from "react-router-dom";
const C = {
  config: {},
  executor: ""
};
function ge() {
  const { adminClient: h } = q(), { t: a } = ie(), I = le(), { realm: d, profileName: n } = k(), { executorName: i } = k(), { addAlert: A, addError: G } = J(), [H, P] = l(!1), x = Q().componentTypes?.["org.keycloak.services.clientpolicy.executor.ClientPolicyExecutorProvider"], [f, N] = l([]), [O, B] = l([]), [T, L] = l([]), [D, $] = l([]), p = U({ defaultValues: C }), { control: j, reset: v, handleSubmit: w } = p, c = !!i, y = (e) => {
    const r = e.find((s) => s.name === n)?.executors?.find(
      (s) => s.executor === i
    );
    r && v({ config: r.configuration });
  };
  W(
    () => h.clientPolicies.listProfiles({ includeGlobalProfiles: !0 }),
    (e) => {
      L(e.globalProfiles), $(e.profiles), y(e.profiles), y(e.globalProfiles);
    },
    []
  );
  const z = async () => {
    const e = p.getValues(), t = D.map((r) => {
      if (r.name !== n)
        return r;
      const s = (r.executors ?? []).concat({
        executor: e.executor,
        configuration: e.config || {}
      });
      if (c) {
        const S = r.executors.find(
          (M) => M.executor === i
        );
        S.configuration = {
          ...S.configuration,
          ...e.config
        };
      }
      return c ? r : {
        ...r,
        executors: s
      };
    });
    try {
      await h.clientPolicies.createProfiles({
        profiles: t,
        globalProfiles: T
      }), A(
        a(c ? "updateExecutorSuccess" : "addExecutorSuccess"),
        ne.success
      ), I(b({ realm: d, profileName: n }));
    } catch (r) {
      G(c ? "updateExecutorError" : "addExecutorError", r);
    }
  }, m = T.find(
    (e) => e.name === n
  ), E = x?.find(
    (e) => e.id === i
  ), K = E?.properties.map(
    (e) => {
      const t = c ? e.defaultValue : "";
      return {
        ...e,
        defaultValue: t
      };
    }
  );
  return /* @__PURE__ */ u(R, { children: [
    /* @__PURE__ */ o(
      X,
      {
        titleKey: c ? i : a("addExecutor"),
        divider: !0
      }
    ),
    /* @__PURE__ */ u(Y, { variant: "light", children: [
      /* @__PURE__ */ u(
        Z,
        {
          isHorizontal: !0,
          role: "manage-realm",
          className: "pf-v5-u-mt-lg",
          isReadOnly: !!m,
          children: [
            /* @__PURE__ */ o(
              _,
              {
                label: a("executorType"),
                fieldId: "kc-executorType",
                labelIcon: f.length > 0 && f[0].helpText !== "" ? /* @__PURE__ */ o(
                  V,
                  {
                    helpText: f[0].helpText,
                    fieldLabelId: "executorTypeHelpText"
                  }
                ) : c ? /* @__PURE__ */ o(
                  V,
                  {
                    helpText: E?.helpText,
                    fieldLabelId: "executorTypeHelpText"
                  }
                ) : void 0,
                children: /* @__PURE__ */ o(
                  ee,
                  {
                    name: "executor",
                    defaultValue: "",
                    control: j,
                    render: ({ field: e }) => /* @__PURE__ */ o(
                      te,
                      {
                        toggleId: "kc-executor",
                        placeholderText: "Select an executor",
                        onToggle: (t) => P(t),
                        onSelect: (t) => {
                          v({ ...C, executor: t.toString() });
                          const r = x?.filter(
                            (s) => s.id === t
                          );
                          N(r ?? []), B(
                            r?.[0].properties ?? []
                          ), P(!1);
                        },
                        selections: c ? i : e.value,
                        variant: oe.single,
                        "data-testid": "executorType-select",
                        "aria-label": a("executorType"),
                        isOpen: H,
                        maxHeight: 580,
                        isDisabled: c,
                        children: x?.map((t) => /* @__PURE__ */ o(
                          re,
                          {
                            selected: t.id === e.value,
                            value: t.id,
                            description: t.helpText,
                            children: t.id
                          },
                          t.id
                        ))
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ o(ce, { ...p, children: /* @__PURE__ */ o(
              ae,
              {
                properties: c ? K : O
              }
            ) }),
            !m && /* @__PURE__ */ u(se, { children: [
              /* @__PURE__ */ o(
                g,
                {
                  variant: "primary",
                  onClick: () => w(z)(),
                  "data-testid": "addExecutor-saveBtn",
                  children: a(c ? "save" : "add")
                }
              ),
              /* @__PURE__ */ o(
                g,
                {
                  variant: "link",
                  component: (e) => /* @__PURE__ */ o(
                    F,
                    {
                      ...e,
                      to: b({ realm: d, profileName: n })
                    }
                  ),
                  "data-testid": "addExecutor-cancelBtn",
                  children: a("cancel")
                }
              )
            ] })
          ]
        }
      ),
      c && m && /* @__PURE__ */ o("div", { className: "kc-backToProfile", children: /* @__PURE__ */ o(
        g,
        {
          component: (e) => /* @__PURE__ */ o(F, { ...e, to: b({ realm: d, profileName: n }) }),
          variant: "primary",
          children: a("back")
        }
      ) })
    ] })
  ] });
}
export {
  ge as default
};
//# sourceMappingURL=ExecutorForm-CirVeqES.js.map
