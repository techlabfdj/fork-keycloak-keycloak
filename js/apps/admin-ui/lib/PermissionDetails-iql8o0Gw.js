import { jsx as s, jsxs as v, Fragment as B } from "react/jsx-runtime";
import { u as G, b5 as _, m as K, b6 as J, b7 as W, b8 as N, aP as Y, b as X, b9 as Z, $ as ee, ba as se, aY as ae, g as H, d as k, bb as j, bc as ie, bd as oe, V as te, be as re, aG as ne, P as le, c as ce, F as de, Q as z, aJ as pe, bf as C, bg as P, bh as ue, bi as E, bj as $, bk as M, R as me, A as be, B as U, bl as fe } from "./index-D49mqW_n.js";
import { useState as f, useRef as he } from "react";
import { useTranslation as Q } from "react-i18next";
import { useNavigate as ge, Link as ye } from "react-router-dom";
const Se = ({
  clientId: c,
  resourceId: e,
  preSelected: u
}) => {
  const { adminClient: h } = G(), { t: R } = Q(), {
    control: F,
    getValues: O,
    setValue: A,
    formState: { errors: r }
  } = _(), [m, n] = f([]), [a, g] = f(
    []
  ), [p, b] = f(""), [y, D] = f(!1), S = he(!0), x = O("scopes"), q = (l) => l.map((t) => /* @__PURE__ */ s(Y, { value: t, children: t.name }, t.id));
  return K(
    async () => e ? (e && !S.current && A("scopes", []), S.current = !1, h.clients.listScopesByResource({
      id: c,
      resourceName: e
    })) : h.clients.listAllScopes(
      Object.assign(
        { id: c, deep: !1 },
        p === "" ? null : { name: p }
      )
    ),
    (l) => {
      n(l), p || g(
        l.filter((t) => x?.includes(t.id))
      );
    },
    [e, p]
  ), /* @__PURE__ */ s(
    J,
    {
      name: "scopes",
      defaultValue: u ? [u] : [],
      control: F,
      rules: { validate: (l) => l.length > 0 },
      render: ({ field: l }) => /* @__PURE__ */ s(
        W,
        {
          toggleId: "scopes",
          variant: N.typeaheadMulti,
          onToggle: (t) => D(t),
          onFilter: (t) => (b(t), q(m)),
          onClear: () => {
            l.onChange([]), b("");
          },
          selections: a.map((t) => t.name),
          onSelect: (t) => {
            const T = typeof t == "string" ? a.find((d) => d.name === t) : t, w = a.find((d) => d.id === T.id) ? a.filter((d) => d.id !== T.id) : [...a, T];
            l.onChange(w.map((d) => d.id)), g(w), b("");
          },
          isOpen: y,
          "aria-labelledby": R("scopes"),
          validated: r.scopes ? "error" : "default",
          isDisabled: !!u,
          typeAheadAriaLabel: R("scopes"),
          children: q(m)
        }
      )
    }
  );
};
function Re() {
  const { adminClient: c } = G(), { t: e } = Q(), u = X({
    mode: "onChange"
  }), {
    control: h,
    reset: R,
    formState: { errors: F },
    handleSubmit: O
  } = u, A = ge(), { id: r, realm: m, permissionType: n, permissionId: a, selectedId: g } = Z(), { addAlert: p, addError: b } = ee(), [y, D] = f(), [S, x] = f(!1), { hasAccess: q } = se(), l = !q("manage-authorization");
  K(
    async () => {
      if (!a)
        return {};
      const [i, o, L, V] = await Promise.all([
        c.clients.findOnePermission({
          id: r,
          type: n,
          permissionId: a
        }),
        c.clients.getAssociatedResources({
          id: r,
          permissionId: a
        }),
        c.clients.getAssociatedPolicies({
          id: r,
          permissionId: a
        }),
        c.clients.getAssociatedScopes({
          id: r,
          permissionId: a
        })
      ]);
      if (!i)
        throw new Error(e("notFound"));
      return {
        permission: i,
        resources: o.map((I) => I._id),
        policies: L.map((I) => I.id),
        scopes: V.map((I) => I.id)
      };
    },
    ({ permission: i, resources: o, policies: L, scopes: V }) => {
      R({ ...i, resources: o, policies: L, scopes: V }), i && "resourceType" in i && x(
        !!i.resourceType
      ), D({ ...i, resources: o, policies: L });
    },
    []
  );
  const t = async (i) => {
    try {
      if (a)
        await c.clients.updatePermission(
          { id: r, type: n, permissionId: a },
          i
        );
      else {
        const o = await c.clients.createPermission(
          { id: r, type: n },
          i
        );
        D(o), A(
          fe({
            realm: m,
            id: r,
            permissionType: n,
            permissionId: o.id
          })
        );
      }
      p(
        e((a ? "update" : "create") + "PermissionSuccess"),
        k.success
      );
    } catch (o) {
      b("permissionSaveError", o);
    }
  }, [T, w] = ae({
    titleKey: "deletePermission",
    messageKey: e("deletePermissionConfirm", {
      permission: y?.name
    }),
    continueButtonVariant: H.danger,
    continueButtonLabel: "confirm",
    onConfirm: async () => {
      try {
        await c.clients.delPermission({
          id: r,
          type: n,
          permissionId: a
        }), p(e("permissionDeletedSuccess"), k.success), A(
          j({ realm: m, clientId: r, tab: "permissions" })
        );
      } catch (i) {
        b("permissionDeletedError", i);
      }
    }
  }), d = ie({
    control: h,
    name: "resources",
    defaultValue: []
  });
  return y ? /* @__PURE__ */ v(B, { children: [
    /* @__PURE__ */ s(w, {}),
    /* @__PURE__ */ s(
      te,
      {
        titleKey: a ? y.name : `create${re(n)}BasedPermission`,
        dropdownItems: a ? [
          /* @__PURE__ */ s(
            ne,
            {
              "data-testid": "delete-resource",
              isDisabled: l,
              onClick: () => T(),
              children: e("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ s(le, { variant: "light", children: /* @__PURE__ */ s(
      ce,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: O(t),
        children: /* @__PURE__ */ v(de, { ...u, children: [
          /* @__PURE__ */ s(
            z,
            {
              name: "name",
              label: e("name"),
              labelIcon: e("permissionName"),
              rules: {
                required: e("required")
              }
            }
          ),
          /* @__PURE__ */ s(
            pe,
            {
              name: "description",
              label: e("description"),
              labelIcon: e("permissionDescription"),
              rules: {
                maxLength: {
                  value: 255,
                  message: e("maxLength", { length: 255 })
                }
              }
            }
          ),
          /* @__PURE__ */ s(
            C,
            {
              label: e("applyToResourceTypeFlag"),
              fieldId: "applyToResourceTypeFlag",
              labelIcon: /* @__PURE__ */ s(
                P,
                {
                  helpText: e("applyToResourceTypeFlagHelp"),
                  fieldLabelId: "applyToResourceTypeFlag"
                }
              ),
              children: /* @__PURE__ */ s(
                ue,
                {
                  id: "applyToResourceTypeFlag",
                  name: "applyToResourceTypeFlag",
                  label: e("on"),
                  labelOff: e("off"),
                  isChecked: S,
                  onChange: (i, o) => x(o),
                  "aria-label": e("applyToResourceTypeFlag")
                }
              )
            }
          ),
          S ? /* @__PURE__ */ s(
            z,
            {
              name: "resourceType",
              label: e("resourceType"),
              labelIcon: e("resourceTypeHelp"),
              rules: {
                required: {
                  value: n === "scope",
                  message: e("required")
                }
              }
            }
          ) : /* @__PURE__ */ v(
            C,
            {
              label: e("resource"),
              fieldId: "resources",
              labelIcon: /* @__PURE__ */ s(
                P,
                {
                  helpText: e("permissionResources"),
                  fieldLabelId: "resources"
                }
              ),
              isRequired: n !== "scope",
              children: [
                /* @__PURE__ */ s(
                  E,
                  {
                    name: "resources",
                    clientId: r,
                    permissionId: a,
                    preSelected: n === "scope" ? void 0 : g,
                    variant: n === "scope" ? N.typeahead : N.typeaheadMulti,
                    isRequired: n !== "scope"
                  }
                ),
                F.resources && /* @__PURE__ */ s($, { message: e("required") })
              ]
            }
          ),
          n === "scope" && /* @__PURE__ */ v(
            C,
            {
              label: e("authorizationScopes"),
              fieldId: "scopes",
              labelIcon: /* @__PURE__ */ s(
                P,
                {
                  helpText: e("permissionScopesHelp"),
                  fieldLabelId: "scopesSelect"
                }
              ),
              isRequired: !0,
              children: [
                /* @__PURE__ */ s(
                  Se,
                  {
                    clientId: r,
                    resourceId: d?.[0],
                    preSelected: g
                  }
                ),
                F.scopes && /* @__PURE__ */ s($, { message: e("required") })
              ]
            }
          ),
          /* @__PURE__ */ s(
            C,
            {
              label: e("policies"),
              fieldId: "policies",
              labelIcon: /* @__PURE__ */ s(
                P,
                {
                  helpText: e("permissionPoliciesHelp"),
                  fieldLabelId: "policies"
                }
              ),
              children: /* @__PURE__ */ s(
                E,
                {
                  name: "policies",
                  clientId: r,
                  permissionId: a
                }
              )
            }
          ),
          /* @__PURE__ */ s(
            C,
            {
              label: e("decisionStrategy"),
              labelIcon: /* @__PURE__ */ s(
                P,
                {
                  helpText: e("permissionDecisionStrategyHelp"),
                  fieldLabelId: "decisionStrategy"
                }
              ),
              fieldId: "policyEnforcementMode",
              hasNoPaddingTop: !0,
              children: /* @__PURE__ */ s(
                J,
                {
                  name: "decisionStrategy",
                  "data-testid": "decisionStrategy",
                  defaultValue: M.UNANIMOUS,
                  control: h,
                  render: ({ field: i }) => /* @__PURE__ */ s(B, { children: Object.values(M).map((o) => /* @__PURE__ */ s(
                    me,
                    {
                      id: o,
                      "data-testid": o,
                      isChecked: i.value === o,
                      isDisabled: l,
                      name: "decisionStrategies",
                      onChange: () => i.onChange(o),
                      label: e(`decisionStrategies.${o}`),
                      className: "pf-v5-u-mb-md"
                    },
                    o
                  )) })
                }
              )
            }
          ),
          /* @__PURE__ */ s(be, { children: /* @__PURE__ */ v("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ s(
              U,
              {
                variant: H.primary,
                type: "submit",
                "data-testid": "save",
                children: e("save")
              }
            ),
            /* @__PURE__ */ s(
              U,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (i) => /* @__PURE__ */ s(
                  ye,
                  {
                    ...i,
                    to: j({
                      realm: m,
                      clientId: r,
                      tab: "permissions"
                    })
                  }
                ),
                children: e("cancel")
              }
            )
          ] }) })
        ] })
      }
    ) })
  ] }) : /* @__PURE__ */ s(oe, {});
}
export {
  Re as default
};
//# sourceMappingURL=PermissionDetails-iql8o0Gw.js.map
