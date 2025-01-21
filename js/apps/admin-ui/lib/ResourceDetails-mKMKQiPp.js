import { jsx as e, jsxs as I, Fragment as x } from "react/jsx-runtime";
import { u as T, b5 as q, m as H, bd as L, bf as S, bg as w, b6 as M, b7 as E, b8 as G, aP as j, $ as K, b as U, b9 as $, ba as Q, aY as W, bm as Y, d as D, bb as F, V as J, aG as X, P as Z, F as ee, c as ae, Q as g, bn as se, bo as re, bp as te, A as ne, B as N, g as oe, aO as le, bq as ie, aN as ce } from "./index-D49mqW_n.js";
import { useState as m } from "react";
import { useTranslation as V } from "react-i18next";
import { useNavigate as ue, Link as de } from "react-router-dom";
const me = ({ clientId: l }) => {
  const { adminClient: a } = T(), { t: i } = V(), { control: y } = q(), [A, v] = m(!1), [u, C] = m(), [p, b] = m("");
  H(
    () => {
      const o = {
        id: l,
        first: 0,
        max: 20,
        deep: !1,
        name: p
      };
      return a.clients.listAllScopes(o);
    },
    C,
    [p]
  );
  const h = (o) => o.map((s) => /* @__PURE__ */ e(j, { value: s, children: s.name }, s.id));
  return u ? /* @__PURE__ */ e(
    S,
    {
      label: i("authorizationScopes"),
      labelIcon: /* @__PURE__ */ e(w, { helpText: i("clientScopesHelp"), fieldLabelId: "scopes" }),
      fieldId: "scopes",
      children: /* @__PURE__ */ e(
        M,
        {
          name: "scopes",
          defaultValue: [],
          control: y,
          render: ({ field: o }) => /* @__PURE__ */ e(
            E,
            {
              toggleId: "scopes",
              variant: G.typeaheadMulti,
              chipGroupProps: {
                numChips: 3,
                expandedText: i("hide"),
                collapsedText: i("showRemaining")
              },
              onToggle: (s) => v(s),
              isOpen: A,
              selections: o.value.map((s) => s.name),
              onFilter: (s) => (b(s), h(u)),
              onSelect: (s) => {
                const r = typeof s == "string" ? s : s.name, t = o.value.find(
                  (c) => c.name === r
                ) ? o.value.filter((c) => c.name !== r) : [...o.value, s];
                o.onChange(t);
              },
              onClear: () => {
                b(""), o.onChange([]);
              },
              typeAheadAriaLabel: i("authorizationScopes"),
              children: h(u)
            }
          )
        }
      )
    }
  ) : /* @__PURE__ */ e(L, {});
};
function ve() {
  const { adminClient: l } = T(), { t: a } = V(), [i, y] = m(), [A, v] = m(), [u, C] = m(), { addAlert: p, addError: b } = K(), h = U({
    mode: "onChange"
  }), { setValue: o, handleSubmit: s } = h, { id: r, resourceId: t, realm: c } = $(), P = ue(), O = (n = {}) => {
    ce(n, o);
  }, { hasAccess: k } = Q(), R = !k("manage-authorization");
  H(
    () => Promise.all([
      l.clients.findOne({ id: r }),
      t ? l.clients.getResource({ id: r, resourceId: t }) : Promise.resolve(void 0),
      t ? l.clients.listPermissionsByResource({ id: r, resourceId: t }) : Promise.resolve(void 0)
    ]),
    ([n, d, f]) => {
      if (!n)
        throw new Error(a("notFound"));
      y(n), C(f), v(d), O(d);
    },
    []
  );
  const z = async (n) => {
    const d = le(n);
    try {
      if (t)
        await l.clients.updateResource({ id: r, resourceId: t }, d);
      else {
        const f = await l.clients.createResource(
          { id: r },
          d
        );
        v(d), P(ie({ realm: c, id: r, resourceId: f._id }));
      }
      p(
        a((t ? "update" : "create") + "ResourceSuccess"),
        D.success
      );
    } catch (f) {
      b("resourceSaveError", f);
    }
  }, [B, _] = W({
    titleKey: "deleteResource",
    children: /* @__PURE__ */ I(x, { children: [
      a("deleteResourceConfirm"),
      u?.length !== 0 && /* @__PURE__ */ e(
        Y,
        {
          variant: "warning",
          isInline: !0,
          isPlain: !0,
          title: a("deleteResourceWarning"),
          className: "pf-v5-u-pt-lg",
          children: /* @__PURE__ */ e("p", { className: "pf-v5-u-pt-xs", children: u?.map((n) => /* @__PURE__ */ e("strong", { className: "pf-v5-u-pr-md", children: n.name }, n.id)) })
        }
      )
    ] }),
    continueButtonLabel: "confirm",
    onConfirm: async () => {
      try {
        await l.clients.delResource({
          id: r,
          resourceId: t
        }), p(a("resourceDeletedSuccess"), D.success), P(F({ realm: c, clientId: r, tab: "resources" }));
      } catch (n) {
        b("resourceDeletedError", n);
      }
    }
  });
  return i ? /* @__PURE__ */ I(x, { children: [
    /* @__PURE__ */ e(_, {}),
    /* @__PURE__ */ e(
      J,
      {
        titleKey: t ? A?.name : "createResource",
        dropdownItems: t ? [
          /* @__PURE__ */ e(
            X,
            {
              "data-testid": "delete-resource",
              isDisabled: R,
              onClick: () => B(),
              children: a("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ e(Z, { variant: "light", children: /* @__PURE__ */ e(ee, { ...h, children: /* @__PURE__ */ I(
      ae,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        className: "keycloak__resource-details__form",
        onSubmit: s(z),
        children: [
          /* @__PURE__ */ e(
            g,
            {
              name: t ? "owner.name" : "",
              label: a("owner"),
              labelIcon: a("ownerHelp"),
              defaultValue: i.clientId,
              readOnly: !0
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "name",
              label: a("name"),
              labelIcon: a("resourceNameHelp"),
              rules: { required: a("required") }
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "displayName",
              label: a("displayName"),
              labelIcon: a("displayNameHelp"),
              rules: { required: a("required") }
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "type",
              label: a("type"),
              labelIcon: a("resourceDetailsTypeHelp")
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              label: a("uris"),
              fieldId: "uris",
              labelIcon: /* @__PURE__ */ e(w, { helpText: a("urisHelp"), fieldLabelId: "uris" }),
              children: /* @__PURE__ */ e(
                se,
                {
                  name: "uris",
                  type: "url",
                  "aria-label": a("uris"),
                  addButtonLabel: "addUri"
                }
              )
            }
          ),
          /* @__PURE__ */ e(me, { clientId: r }),
          /* @__PURE__ */ e(
            g,
            {
              name: "icon_uri",
              label: a("iconUri"),
              labelIcon: a("iconUriHelp"),
              type: "url"
            }
          ),
          /* @__PURE__ */ e(
            re,
            {
              name: "ownerManagedAccess",
              label: a("ownerManagedAccess"),
              labelIcon: a("ownerManagedAccessHelp")
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              hasNoPaddingTop: !0,
              label: a("resourceAttribute"),
              labelIcon: /* @__PURE__ */ e(
                w,
                {
                  helpText: a("resourceAttributeHelp"),
                  fieldLabelId: "resourceAttribute"
                }
              ),
              fieldId: "resourceAttribute",
              children: /* @__PURE__ */ e(te, { name: "attributes", isDisabled: R })
            }
          ),
          /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ I("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ e(
              N,
              {
                variant: oe.primary,
                type: "submit",
                "data-testid": "save",
                children: a("save")
              }
            ),
            /* @__PURE__ */ e(
              N,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (n) => /* @__PURE__ */ e(
                  de,
                  {
                    ...n,
                    to: F({
                      realm: c,
                      clientId: r,
                      tab: "resources"
                    })
                  }
                ),
                children: a("cancel")
              }
            )
          ] }) })
        ]
      }
    ) }) })
  ] }) : /* @__PURE__ */ e(L, {});
}
export {
  ve as default
};
//# sourceMappingURL=ResourceDetails-mKMKQiPp.js.map
