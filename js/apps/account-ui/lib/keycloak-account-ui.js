import { jsx as h, jsxs as Z, Fragment as wt } from "react/jsx-runtime";
import * as o from "react";
import re, { useRef as en, useEffect as Nt, forwardRef as $d, useImperativeHandle as ym, useMemo as lt, useState as me, createContext as Bd, useContext as jd, useCallback as Pi, Fragment as Io, useId as xm, Children as Vd, Suspense as Hd, lazy as wm } from "react";
import { useTranslation as je, initReactI18next as Om, Trans as Ud } from "react-i18next";
import * as No from "react-dom";
import { useRouteError as Cm, isRouteErrorResponse as _m, useHref as zd, useLocation as Em, matchPath as Sm, useLinkClickHandler as km, useParams as Lm } from "react-router-dom";
function Im(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(i, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: !0,
            get: () => i[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function z(e, t) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
function y(...e) {
  const t = [], n = {}.hasOwnProperty;
  return e.filter(Boolean).forEach((i) => {
    const r = typeof i;
    if (r === "string" || r === "number")
      t.push(i);
    else if (Array.isArray(i) && i.length) {
      const a = y(...i);
      a && t.push(a);
    } else if (r === "object")
      for (const a in i)
        n.call(i, a) && i[a] && t.push(a);
  }), t.join(" ");
}
const Ks = {
  content: "pf-v5-c-content",
  modifiers: {
    visited: "pf-m-visited",
    plain: "pf-m-plain"
  }
}, jl = {
  modifiers: {
    "4xl": "pf-m-4xl",
    "3xl": "pf-m-3xl",
    "2xl": "pf-m-2xl",
    xl: "pf-m-xl",
    lg: "pf-m-lg",
    md: "pf-m-md"
  },
  title: "pf-v5-c-title"
}, Nm = {
  name: "--pf-v5-global--breakpoint--sm",
  value: "576px",
  var: "var(--pf-v5-global--breakpoint--sm)"
}, Wd = {
  name: "--pf-v5-global--breakpoint--md",
  value: "768px",
  var: "var(--pf-v5-global--breakpoint--md)"
}, Gd = {
  name: "--pf-v5-global--breakpoint--lg",
  value: "992px",
  var: "var(--pf-v5-global--breakpoint--lg)"
}, To = {
  name: "--pf-v5-global--breakpoint--xl",
  value: "1200px",
  var: "var(--pf-v5-global--breakpoint--xl)"
}, Kd = {
  name: "--pf-v5-global--breakpoint--2xl",
  value: "1450px",
  var: "var(--pf-v5-global--breakpoint--2xl)"
}, Tm = {
  name: "--pf-v5-global--height-breakpoint--sm",
  value: "0",
  var: "var(--pf-v5-global--height-breakpoint--sm)"
}, Rm = {
  name: "--pf-v5-global--height-breakpoint--md",
  value: "40rem",
  var: "var(--pf-v5-global--height-breakpoint--md)"
}, Am = {
  name: "--pf-v5-global--height-breakpoint--lg",
  value: "48rem",
  var: "var(--pf-v5-global--height-breakpoint--lg)"
}, Pm = {
  name: "--pf-v5-global--height-breakpoint--xl",
  value: "60rem",
  var: "var(--pf-v5-global--height-breakpoint--xl)"
}, Mm = {
  name: "--pf-v5-global--height-breakpoint--2xl",
  value: "80rem",
  var: "var(--pf-v5-global--height-breakpoint--2xl)"
};
var zn;
(function(e) {
  e.success = "success", e.error = "error", e.warning = "warning", e.default = "default";
})(zn || (zn = {}));
const Wn = {
  Tab: "Tab",
  Space: " ",
  Escape: "Escape",
  Enter: "Enter",
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight"
}, _i = {
  sm: parseInt(Nm.value),
  md: parseInt(Wd.value),
  lg: parseInt(Gd.value),
  xl: parseInt(To.value),
  "2xl": parseInt(Kd.value)
}, rr = {
  sm: parseInt(Tm.value),
  md: parseInt(Rm.value),
  lg: parseInt(Am.value),
  xl: parseInt(Pm.value),
  "2xl": parseInt(Mm.value)
};
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Xd = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ua = /* @__PURE__ */ Xd.join(","), qd = typeof Element > "u", li = qd ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, pa = !qd && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, ma = function e(t, n) {
  var i;
  n === void 0 && (n = !0);
  var r = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), a = r === "" || r === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Dm = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Jd = function(t, n, i) {
  if (ma(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(ua));
  return n && li.call(t, ua) && r.unshift(t), r = r.filter(i), r;
}, Yd = function e(t, n, i) {
  for (var r = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!ma(s, !1))
      if (s.tagName === "SLOT") {
        var l = s.assignedElements(), c = l.length ? l : s.children, d = e(c, !0, i);
        i.flatten ? r.push.apply(r, d) : r.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var f = li.call(s, ua);
        f && i.filter(s) && (n || !t.includes(s)) && r.push(s);
        var u = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), p = !ma(u, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (u && p) {
          var m = e(u === !0 ? s.children : u.children, !0, i);
          i.flatten ? r.push.apply(r, m) : r.push({
            scopeParent: s,
            candidates: m
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return r;
}, Zd = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ii = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Dm(t)) && !Zd(t) ? 0 : t.tabIndex;
}, Fm = function(t, n) {
  var i = ii(t);
  return i < 0 && n && !Zd(t) ? 0 : i;
}, $m = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Qd = function(t) {
  return t.tagName === "INPUT";
}, Bm = function(t) {
  return Qd(t) && t.type === "hidden";
}, jm = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Vm = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, Hm = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || pa(t), i = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = i(window.CSS.escape(t.name));
  else
    try {
      r = i(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var a = Vm(r, t.form);
  return !a || a === t;
}, Um = function(t) {
  return Qd(t) && t.type === "radio";
}, zm = function(t) {
  return Um(t) && !Hm(t);
}, Wm = function(t) {
  var n, i = t && pa(t), r = (n = i) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (i && i !== t) {
    var s, l, c;
    for (a = !!((s = r) !== null && s !== void 0 && (l = s.ownerDocument) !== null && l !== void 0 && l.contains(r) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !a && r; ) {
      var d, f, u;
      i = pa(r), r = (d = i) === null || d === void 0 ? void 0 : d.host, a = !!((f = r) !== null && f !== void 0 && (u = f.ownerDocument) !== null && u !== void 0 && u.contains(r));
    }
  }
  return a;
}, Vl = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, r = n.height;
  return i === 0 && r === 0;
}, Gm = function(t, n) {
  var i = n.displayCheck, r = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = li.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (li.call(s, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || i === "legacy-full") {
    if (typeof r == "function") {
      for (var l = t; t; ) {
        var c = t.parentElement, d = pa(t);
        if (c && !c.shadowRoot && r(c) === !0)
          return Vl(t);
        t.assignedSlot ? t = t.assignedSlot : !c && d !== t.ownerDocument ? t = d.host : t = c;
      }
      t = l;
    }
    if (Wm(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Vl(t);
  return !1;
}, Km = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var r = n.children.item(i);
          if (r.tagName === "LEGEND")
            return li.call(n, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ha = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ma(n) || Bm(n) || Gm(n, t) || // For a details element with a summary, the summary element gets the focus
  jm(n) || Km(n));
}, Xs = function(t, n) {
  return !(zm(n) || ii(n) < 0 || !ha(t, n));
}, Xm = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, qm = function e(t) {
  var n = [], i = [];
  return t.forEach(function(r, a) {
    var s = !!r.scopeParent, l = s ? r.scopeParent : r, c = Fm(l, s), d = s ? e(r.candidates) : l;
    c === 0 ? s ? n.push.apply(n, d) : n.push(l) : i.push({
      documentOrder: a,
      tabIndex: c,
      item: r,
      isScope: s,
      content: d
    });
  }), i.sort($m).reduce(function(r, a) {
    return a.isScope ? r.push.apply(r, a.content) : r.push(a.content), r;
  }, []).concat(n);
}, Jm = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Yd([t], n.includeContainer, {
    filter: Xs.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Xm
  }) : i = Jd(t, n.includeContainer, Xs.bind(null, n)), qm(i);
}, Ym = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Yd([t], n.includeContainer, {
    filter: ha.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Jd(t, n.includeContainer, ha.bind(null, n)), i;
}, xi = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return li.call(t, ua) === !1 ? !1 : Xs(n, t);
}, Zm = /* @__PURE__ */ Xd.concat("iframe").join(","), bs = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return li.call(t, Zm) === !1 ? !1 : ha(n, t);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Hl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hl(Object(n), !0).forEach(function(i) {
      Qm(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hl(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Qm(e, t, n) {
  return t = th(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function eh(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function th(e) {
  var t = eh(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var zl = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var i = t[t.length - 1];
      i !== n && i.pause();
    }
    var r = t.indexOf(n);
    r === -1 || t.splice(r, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, nh = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, ih = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, ur = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, rh = function(t) {
  return ur(t) && !t.shiftKey;
}, ah = function(t) {
  return ur(t) && t.shiftKey;
}, Wl = function(t) {
  return setTimeout(t, 0);
}, Gl = function(t, n) {
  var i = -1;
  return t.every(function(r, a) {
    return n(r) ? (i = a, !1) : !0;
  }), i;
}, ar = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    i[r - 1] = arguments[r];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Zr = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, sh = [], oh = function(t, n) {
  var i = n?.document || document, r = n?.trapStack || sh, a = Ul({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: rh,
    isKeyBackward: ah
  }, n), s = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, l, c = function(O, L, j) {
    return O && O[L] !== void 0 ? O[L] : a[j || L];
  }, d = function(O, L) {
    var j = typeof L?.composedPath == "function" ? L.composedPath() : void 0;
    return s.containerGroups.findIndex(function(C) {
      var P = C.container, G = C.tabbableNodes;
      return P.contains(O) || j?.includes(P) || G.find(function(B) {
        return B === O;
      });
    });
  }, f = function(O) {
    var L = a[O];
    if (typeof L == "function") {
      for (var j = arguments.length, C = new Array(j > 1 ? j - 1 : 0), P = 1; P < j; P++)
        C[P - 1] = arguments[P];
      L = L.apply(void 0, C);
    }
    if (L === !0 && (L = void 0), !L) {
      if (L === void 0 || L === !1)
        return L;
      throw new Error("`".concat(O, "` was specified but was not a node, or did not return a node"));
    }
    var G = L;
    if (typeof L == "string" && (G = i.querySelector(L), !G))
      throw new Error("`".concat(O, "` as selector refers to no known node"));
    return G;
  }, u = function() {
    var O = f("initialFocus");
    if (O === !1)
      return !1;
    if (O === void 0 || !bs(O, a.tabbableOptions))
      if (d(i.activeElement) >= 0)
        O = i.activeElement;
      else {
        var L = s.tabbableGroups[0], j = L && L.firstTabbableNode;
        O = j || f("fallbackFocus");
      }
    if (!O)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return O;
  }, p = function() {
    if (s.containerGroups = s.containers.map(function(O) {
      var L = Jm(O, a.tabbableOptions), j = Ym(O, a.tabbableOptions), C = L.length > 0 ? L[0] : void 0, P = L.length > 0 ? L[L.length - 1] : void 0, G = j.find(function(b) {
        return xi(b);
      }), B = j.slice().reverse().find(function(b) {
        return xi(b);
      }), J = !!L.find(function(b) {
        return ii(b) > 0;
      });
      return {
        container: O,
        tabbableNodes: L,
        focusableNodes: j,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: J,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: C,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: P,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: G,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: B,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(F) {
          var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = L.indexOf(F);
          return V < 0 ? K ? j.slice(j.indexOf(F) + 1).find(function(U) {
            return xi(U);
          }) : j.slice(0, j.indexOf(F)).reverse().find(function(U) {
            return xi(U);
          }) : L[V + (K ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(O) {
      return O.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(O) {
      return O.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, m = function D(O) {
    var L = O.activeElement;
    if (L)
      return L.shadowRoot && L.shadowRoot.activeElement !== null ? D(L.shadowRoot) : L;
  }, g = function D(O) {
    if (O !== !1 && O !== m(document)) {
      if (!O || !O.focus) {
        D(u());
        return;
      }
      O.focus({
        preventScroll: !!a.preventScroll
      }), s.mostRecentlyFocusedNode = O, nh(O) && O.select();
    }
  }, v = function(O) {
    var L = f("setReturnFocus", O);
    return L || (L === !1 ? !1 : O);
  }, x = function(O) {
    var L = O.target, j = O.event, C = O.isBackward, P = C === void 0 ? !1 : C;
    L = L || Zr(j), p();
    var G = null;
    if (s.tabbableGroups.length > 0) {
      var B = d(L, j), J = B >= 0 ? s.containerGroups[B] : void 0;
      if (B < 0)
        P ? G = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : G = s.tabbableGroups[0].firstTabbableNode;
      else if (P) {
        var b = Gl(s.tabbableGroups, function(W) {
          var X = W.firstTabbableNode;
          return L === X;
        });
        if (b < 0 && (J.container === L || bs(L, a.tabbableOptions) && !xi(L, a.tabbableOptions) && !J.nextTabbableNode(L, !1)) && (b = B), b >= 0) {
          var F = b === 0 ? s.tabbableGroups.length - 1 : b - 1, K = s.tabbableGroups[F];
          G = ii(L) >= 0 ? K.lastTabbableNode : K.lastDomTabbableNode;
        } else ur(j) || (G = J.nextTabbableNode(L, !1));
      } else {
        var V = Gl(s.tabbableGroups, function(W) {
          var X = W.lastTabbableNode;
          return L === X;
        });
        if (V < 0 && (J.container === L || bs(L, a.tabbableOptions) && !xi(L, a.tabbableOptions) && !J.nextTabbableNode(L)) && (V = B), V >= 0) {
          var U = V === s.tabbableGroups.length - 1 ? 0 : V + 1, q = s.tabbableGroups[U];
          G = ii(L) >= 0 ? q.firstTabbableNode : q.firstDomTabbableNode;
        } else ur(j) || (G = J.nextTabbableNode(L));
      }
    } else
      G = f("fallbackFocus");
    return G;
  }, w = function(O) {
    var L = Zr(O);
    if (!(d(L, O) >= 0)) {
      if (ar(a.clickOutsideDeactivates, O)) {
        l.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: a.returnFocusOnDeactivate
        });
        return;
      }
      ar(a.allowOutsideClick, O) || O.preventDefault();
    }
  }, _ = function(O) {
    var L = Zr(O), j = d(L, O) >= 0;
    if (j || L instanceof Document)
      j && (s.mostRecentlyFocusedNode = L);
    else {
      O.stopImmediatePropagation();
      var C, P = !0;
      if (s.mostRecentlyFocusedNode)
        if (ii(s.mostRecentlyFocusedNode) > 0) {
          var G = d(s.mostRecentlyFocusedNode), B = s.containerGroups[G].tabbableNodes;
          if (B.length > 0) {
            var J = B.findIndex(function(b) {
              return b === s.mostRecentlyFocusedNode;
            });
            J >= 0 && (a.isKeyForward(s.recentNavEvent) ? J + 1 < B.length && (C = B[J + 1], P = !1) : J - 1 >= 0 && (C = B[J - 1], P = !1));
          }
        } else
          s.containerGroups.some(function(b) {
            return b.tabbableNodes.some(function(F) {
              return ii(F) > 0;
            });
          }) || (P = !1);
      else
        P = !1;
      P && (C = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: a.isKeyBackward(s.recentNavEvent)
      })), g(C || s.mostRecentlyFocusedNode || u());
    }
    s.recentNavEvent = void 0;
  }, S = function(O) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = O;
    var j = x({
      event: O,
      isBackward: L
    });
    j && (ur(O) && O.preventDefault(), g(j));
  }, I = function(O) {
    if (ih(O) && ar(a.escapeDeactivates, O) !== !1) {
      O.preventDefault(), l.deactivate();
      return;
    }
    (a.isKeyForward(O) || a.isKeyBackward(O)) && S(O, a.isKeyBackward(O));
  }, E = function(O) {
    var L = Zr(O);
    d(L, O) >= 0 || ar(a.clickOutsideDeactivates, O) || ar(a.allowOutsideClick, O) || (O.preventDefault(), O.stopImmediatePropagation());
  }, R = function() {
    if (s.active)
      return zl.activateTrap(r, l), s.delayInitialFocusTimer = a.delayInitialFocus ? Wl(function() {
        g(u());
      }) : g(u()), i.addEventListener("focusin", _, !0), i.addEventListener("mousedown", w, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", w, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", E, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), l;
  }, k = function() {
    if (s.active)
      return i.removeEventListener("focusin", _, !0), i.removeEventListener("mousedown", w, !0), i.removeEventListener("touchstart", w, !0), i.removeEventListener("click", E, !0), i.removeEventListener("keydown", I, !0), l;
  }, N = function(O) {
    var L = O.some(function(j) {
      var C = Array.from(j.removedNodes);
      return C.some(function(P) {
        return P === s.mostRecentlyFocusedNode;
      });
    });
    L && g(u());
  }, M = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(N) : void 0, $ = function() {
    M && (M.disconnect(), s.active && !s.paused && s.containers.map(function(O) {
      M.observe(O, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return l = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(O) {
      if (s.active)
        return this;
      var L = c(O, "onActivate"), j = c(O, "onPostActivate"), C = c(O, "checkCanFocusTrap");
      C || p(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = i.activeElement, L?.();
      var P = function() {
        C && p(), R(), $(), j?.();
      };
      return C ? (C(s.containers.concat()).then(P, P), this) : (P(), this);
    },
    deactivate: function(O) {
      if (!s.active)
        return this;
      var L = Ul({
        onDeactivate: a.onDeactivate,
        onPostDeactivate: a.onPostDeactivate,
        checkCanReturnFocus: a.checkCanReturnFocus
      }, O);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, k(), s.active = !1, s.paused = !1, $(), zl.deactivateTrap(r, l);
      var j = c(L, "onDeactivate"), C = c(L, "onPostDeactivate"), P = c(L, "checkCanReturnFocus"), G = c(L, "returnFocus", "returnFocusOnDeactivate");
      j?.();
      var B = function() {
        Wl(function() {
          G && g(v(s.nodeFocusedBeforeActivation)), C?.();
        });
      };
      return G && P ? (P(v(s.nodeFocusedBeforeActivation)).then(B, B), this) : (B(), this);
    },
    pause: function(O) {
      if (s.paused || !s.active)
        return this;
      var L = c(O, "onPause"), j = c(O, "onPostPause");
      return s.paused = !0, L?.(), k(), $(), j?.(), this;
    },
    unpause: function(O) {
      if (!s.paused || !s.active)
        return this;
      var L = c(O, "onUnpause"), j = c(O, "onPostUnpause");
      return s.paused = !1, L?.(), p(), R(), $(), j?.(), this;
    },
    updateContainerElements: function(O) {
      var L = [].concat(O).filter(Boolean);
      return s.containers = L.map(function(j) {
        return typeof j == "string" ? i.querySelector(j) : j;
      }), s.active && p(), $(), this;
    }
  }, l.updateContainerElements(t), l;
};
function lh(e) {
  const t = en(e);
  t.current = e, Nt(() => () => {
    t.current();
  }, []);
}
const $a = $d(function(t, n) {
  var { active: i = !0, paused: r = !1, focusTrapOptions: a = {}, preventScrollOnDeactivate: s = !1 } = t, l = z(t, ["active", "paused", "focusTrapOptions", "preventScrollOnDeactivate"]);
  const c = en(null);
  ym(n, () => c.current);
  const d = en(null);
  Nt(() => {
    const u = oh(c.current, Object.assign(Object.assign({}, a), { returnFocusOnDeactivate: !1 }));
    return d.current = u, () => {
      u.deactivate();
    };
  }, []), Nt(() => {
    const u = d.current;
    i ? u?.activate() : u?.deactivate();
  }, [i]), Nt(() => {
    const u = d.current;
    r ? u?.pause() : u?.unpause();
  }, [r]);
  const f = en(typeof document < "u" ? document.activeElement : null);
  return lh(() => {
    a.returnFocusOnDeactivate !== !1 && f.current instanceof HTMLElement && f.current.focus({
      preventScroll: s
    });
  }), re.createElement("div", Object.assign({ ref: c }, l));
});
$a.displayName = "FocusTrap";
function ga(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Mi(e = "pf") {
  const t = (/* @__PURE__ */ new Date()).getTime() + Math.random().toString(36).slice(2);
  return `${e}-${t}`;
}
function Ro(e, t) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => e.apply(this, i), t);
  };
}
function mn(e, t, n, i = !1) {
  if (!e || !t)
    return !1;
  const r = e.getBoundingClientRect(), a = t.getBoundingClientRect(), s = Math.ceil(r.left), l = Math.floor(r.right), c = Math.ceil(a.left), d = Math.floor(a.right), f = c >= s && d <= l, u = !i && r.width < a.width && (c < s && d > s || d > l && c < l);
  return f || u;
}
function Ao(e, t) {
  return e.replace(/\${(.*?)}/g, (n, i) => t[i] || "");
}
function ch(e, t, n) {
  return n || (n = `${t}s`), `${e || 0} ${e === 1 ? t : n}`;
}
const ef = (e, t) => Object.entries(e || {}).reduce((n, [i, r]) => i === "default" ? Object.assign(Object.assign({}, n), { [t]: r }) : Object.assign(Object.assign({}, n), { [`${t}-on-${i}`]: r }), {}), $e = (e, t, n = "", i, r) => {
  if (!e)
    return "";
  if (i && !r) {
    if (i in e)
      return t.modifiers[pr(`${n}${e[i]}`)];
    const a = ["2xl", "xl", "lg", "md", "sm", "default"], s = a.indexOf(i);
    for (let l = s; l < a.length; l++)
      if (a[l] in e)
        return t.modifiers[pr(`${n}${e[a[l]]}`)];
    return "";
  }
  return Object.entries(e || {}).map(([a, s]) => `${n}${s}${a !== "default" ? `-on-${a}` : ""}${r && a !== "default" ? "-height" : ""}`).map(pr).map((a) => a.replace(/-?(\dxl)/gi, (s, l) => `_${l}`)).map((a) => t.modifiers[a]).filter(Boolean).join(" ");
}, tf = (e) => e === null ? null : e >= rr["2xl"] ? "2xl" : e >= rr.xl ? "xl" : e >= rr.lg ? "lg" : e >= rr.md ? "md" : e >= rr.sm ? "sm" : "default", nf = (e) => e === null ? null : e >= _i["2xl"] ? "2xl" : e >= _i.xl ? "xl" : e >= _i.lg ? "lg" : e >= _i.md ? "md" : e >= _i.sm ? "sm" : "default", dh = (e) => e.toUpperCase().replace("-", "").replace("_", ""), pr = (e) => e.replace(/([-_][a-z])/gi, dh), ze = !!(typeof window < "u" && window.document && window.document.createElement), Kl = (e, t) => {
  const n = getComputedStyle(t), i = () => {
    let s = "";
    const l = {
      "50%": "ultra-condensed",
      "62.5%": "extra-condensed",
      "75%": "condensed",
      "87.5%": "semi-condensed",
      "100%": "normal",
      "112.5%": "semi-expanded",
      "125%": "expanded",
      "150%": "extra-expanded",
      "200%": "ultra-expanded"
    };
    let c;
    return n.fontStretch in l ? c = l[n.fontStretch] : c = "normal", s = n.fontStyle + " " + n.fontVariant + " " + n.fontWeight + " " + c + " " + n.fontSize + "/" + n.lineHeight + " " + n.fontFamily, s;
  }, a = document.createElement("canvas").getContext("2d");
  return a.font = n.font || i(), a.measureText(e).width;
}, fh = (e) => {
  const t = getComputedStyle(e);
  let n = e.clientWidth, i = e.clientHeight;
  return i -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), n -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), { height: i, width: n };
}, uh = (e, t) => {
  const n = fh(e).width;
  let i = t;
  if (Kl(t, e) > n) {
    for (; Kl(`...${i}`, e) > n; )
      i = i.substring(1);
    e.value ? e.value = `...${i}` : e.innerText = `...${i}`;
  } else
    e.value ? e.value = t : e.innerText = t;
}, Qr = (e) => {
  e.forEach((t) => {
    t.current && clearTimeout(t.current);
  });
}, jn = (e, t = "ltr") => {
  if (!e)
    return t;
  const n = getComputedStyle(e).getPropertyValue("direction");
  return ["ltr", "rtl"].includes(n) ? n : t;
};
let ph = 0;
function mh() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : Mi();
}
class sn extends o.Component {
  constructor() {
    super(...arguments), this.uniqueElement = this.props.isRandom ? mh() : ph++, this.id = `${this.props.prefix}${this.uniqueElement}`;
  }
  render() {
    return this.props.children(this.id);
  }
}
sn.displayName = "GenerateId";
sn.defaultProps = {
  prefix: "pf-random-id-",
  isRandom: !1
};
const rf = "*";
let hh = 0;
const Xl = "OUIA-Generated-", vs = {};
function rt(e, t, n = !0) {
  return {
    "data-ouia-component-type": `PF5/${e}`,
    "data-ouia-safe": n,
    "data-ouia-component-id": t
  };
}
const Gt = (e, t, n = !0, i) => ({
  "data-ouia-component-type": `PF5/${e}`,
  "data-ouia-safe": n,
  "data-ouia-component-id": gh(e, t, i)
}), gh = (e, t, n) => {
  const i = lt(() => Ct(e, n), [e, n]);
  return t ?? i;
};
function Ct(e, t) {
  try {
    let n;
    return typeof window < "u" ? n = `${window.location.href}-${e}-${t || ""}` : n = `${e}-${t || ""}`, vs[n] || (vs[n] = 0), `${Xl}${e}-${t ? `${t}-` : ""}${++vs[n]}`;
  } catch {
    return `${Xl}${e}-${t ? `${t}-` : ""}${++hh}`;
  }
}
function Or(e) {
  const t = e.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    x: t.left,
    y: t.top
  };
}
function on(e) {
  if (e.toString() !== "[object Window]") {
    const t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  return e;
}
function Po(e) {
  const t = on(e), n = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i
  };
}
function Cr(e) {
  const t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function rn(e) {
  const t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vh(e) {
  return e === on(e) || !rn(e) ? Po(e) : bh(e);
}
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function kn(e) {
  return (Cr(e) ? e.ownerDocument : e.document).documentElement;
}
function Mo(e) {
  return Or(kn(e)).left + Po(e).scrollLeft;
}
function yn(e) {
  return on(e).getComputedStyle(e);
}
function Do(e) {
  const { overflow: t, overflowX: n, overflowY: i } = yn(e);
  return /auto|scroll|overlay|hidden/.test(t + i + n);
}
function yh(e, t, n = !1) {
  const i = kn(t), r = Or(e), a = rn(t);
  let s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (a || !a && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Do(i)) && (s = vh(t)), rn(t) ? (l = Or(t), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Mo(i))), {
    x: r.left + s.scrollLeft - l.x,
    y: r.top + s.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Fo(e) {
  return {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Ba(e) {
  return Kt(e) === "html" ? e : (
    // $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    e.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    kn(e)
  );
}
function af(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : rn(e) && Do(e) ? e : af(Ba(e));
}
function mr(e, t = []) {
  const n = af(e), i = Kt(n) === "body", r = on(n), a = i ? [r].concat(r.visualViewport || [], Do(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(mr(Ba(a)));
}
function xh(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function ql(e) {
  if (!rn(e) || // https://github.com/popperjs/popper-core/issues/837
  yn(e).position === "fixed")
    return null;
  const t = e.offsetParent;
  if (t) {
    const n = kn(t);
    if (Kt(t) === "body" && yn(t).position === "static" && yn(n).position !== "static")
      return n;
  }
  return t;
}
function wh(e) {
  let t = Ba(e);
  for (; rn(t) && ["html", "body"].indexOf(Kt(t)) < 0; ) {
    const n = yn(t);
    if (n.transform !== "none" || n.perspective !== "none" || n.willChange && n.willChange !== "auto")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Fr(e) {
  const t = on(e);
  let n = ql(e);
  for (; n && xh(n) && yn(n).position === "static"; )
    n = ql(n);
  return n && Kt(n) === "body" && yn(n).position === "static" ? t : n || wh(e) || t;
}
const Tt = "top", jt = "bottom", Vt = "right", Rt = "left", $o = "auto", $r = [Tt, jt, Vt, Rt], Di = "start", Bo = "end", Oh = "clippingParents", sf = "viewport", sr = "popper", Ch = "reference", Jl = $r.reduce((e, t) => e.concat([`${t}-${Di}`, `${t}-${Bo}`]), []), of = [...$r, $o].reduce((e, t) => e.concat([t, `${t}-${Di}`, `${t}-${Bo}`]), []), _h = "beforeRead", Eh = "read", Sh = "afterRead", kh = "beforeMain", Lh = "main", Ih = "afterMain", Nh = "beforeWrite", Th = "write", Rh = "afterWrite", Ah = [
  _h,
  Eh,
  Sh,
  kh,
  Lh,
  Ih,
  Nh,
  Th,
  Rh
];
function Ph(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  e.forEach((a) => {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name), [...a.requires || [], ...a.requiresIfExists || []].forEach((l) => {
      if (!n.has(l)) {
        const c = t.get(l);
        c && r(c);
      }
    }), i.push(a);
  }
  return e.forEach((a) => {
    n.has(a.name) || r(a);
  }), i;
}
function Mh(e) {
  const t = Ph(e);
  return Ah.reduce((n, i) => n.concat(t.filter((r) => r.phase === i)), []);
}
function Dh(e) {
  let t;
  return () => (t || (t = new Promise((n) => {
    Promise.resolve().then(() => {
      t = void 0, n(e());
    });
  })), t);
}
function tn(e) {
  return e.split("-")[0];
}
function Fh(e) {
  const t = e.reduce((n, i) => {
    const r = n[i.name];
    return n[i.name] = r ? Object.assign(Object.assign(Object.assign({}, r), i), { options: Object.assign(Object.assign({}, r.options), i.options), data: Object.assign(Object.assign({}, r.data), i.data) }) : i, n;
  }, {});
  return Object.keys(t).map((n) => t[n]);
}
function $h(e) {
  const t = on(e), n = kn(e), i = t.visualViewport;
  let r = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  return i && (r = i.width, a = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, l = i.offsetTop)), {
    width: r,
    height: a,
    x: s + Mo(e),
    y: l
  };
}
function Bh(e) {
  const t = kn(e), n = Po(e), i = e.ownerDocument.body, r = Math.max(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Math.max(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let s = -n.scrollLeft + Mo(e);
  const l = -n.scrollTop;
  return yn(i || t).direction === "rtl" && (s += Math.max(t.clientWidth, i ? i.clientWidth : 0) - r), { width: r, height: a, x: s, y: l };
}
function lf(e, t) {
  const n = !!(t.getRootNode && t.getRootNode().host);
  if (e.contains(t))
    return !0;
  if (n) {
    let i = t;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function qs(e) {
  return Object.assign(Object.assign({}, e), { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function jh(e) {
  const t = Or(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Yl(e, t) {
  return t === sf ? qs($h(e)) : rn(t) ? jh(t) : qs(Bh(kn(e)));
}
function Vh(e) {
  const t = mr(Ba(e)), i = ["absolute", "fixed"].indexOf(yn(e).position) >= 0 && rn(e) ? Fr(e) : e;
  return Cr(i) ? t.filter((r) => Cr(r) && lf(r, i) && Kt(r) !== "body") : [];
}
function Hh(e, t, n) {
  const r = [...t === "clippingParents" ? Vh(e) : [].concat(t), n], a = r[0], s = r.reduce((l, c) => {
    const d = Yl(e, c);
    return l.top = Math.max(d.top, l.top), l.right = Math.min(d.right, l.right), l.bottom = Math.min(d.bottom, l.bottom), l.left = Math.max(d.left, l.left), l;
  }, Yl(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function _r(e) {
  return e.split("-")[1];
}
function jo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cf({ reference: e, element: t, placement: n }) {
  const i = n ? tn(n) : null, r = n ? _r(n) : null, a = e.x + e.width / 2 - t.width / 2, s = e.y + e.height / 2 - t.height / 2;
  let l;
  switch (i) {
    case Tt:
      l = {
        x: a,
        y: e.y - t.height
      };
      break;
    case jt:
      l = {
        x: a,
        y: e.y + e.height
      };
      break;
    case Vt:
      l = {
        x: e.x + e.width,
        y: s
      };
      break;
    case Rt:
      l = {
        x: e.x - t.width,
        y: s
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  const c = i ? jo(i) : null;
  if (c != null) {
    const d = c === "y" ? "height" : "width";
    switch (r) {
      case Di:
        l[c] = Math.floor(l[c]) - Math.floor(e[d] / 2 - t[d] / 2);
        break;
      case Bo:
        l[c] = Math.floor(l[c]) + Math.ceil(e[d] / 2 - t[d] / 2);
        break;
    }
  }
  return l;
}
function df() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ff(e) {
  return Object.assign(Object.assign({}, df()), e);
}
function uf(e, t) {
  return t.reduce((n, i) => (n[i] = e, n), {});
}
function Er(e, t = {}) {
  const { placement: n = e.placement, boundary: i = Oh, rootBoundary: r = sf, elementContext: a = sr, altBoundary: s = !1, padding: l = 0 } = t, c = ff(typeof l != "number" ? l : uf(l, $r)), d = a === sr ? Ch : sr, f = e.elements.reference, u = e.rects.popper, p = e.elements[s ? d : a], m = Hh(Cr(p) ? p : p.contextElement || kn(e.elements.popper), i, r), g = Or(f), v = cf({
    reference: g,
    element: u,
    strategy: "absolute",
    placement: n
  }), x = qs(Object.assign(Object.assign({}, u), v)), w = a === sr ? x : g, _ = {
    top: m.top - w.top + c.top,
    bottom: w.bottom - m.bottom + c.bottom,
    left: m.left - w.left + c.left,
    right: w.right - m.right + c.right
  }, S = e.modifiersData.offset;
  if (a === sr && S) {
    const I = S[n];
    Object.keys(_).forEach((E) => {
      const R = [Vt, jt].indexOf(E) >= 0 ? 1 : -1, k = [Tt, jt].indexOf(E) >= 0 ? "y" : "x";
      _[E] += I[k] * R;
    });
  }
  return _;
}
const Zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ql(...e) {
  return !e.some((t) => !(t && typeof t.getBoundingClientRect == "function"));
}
function Uh(e = {}) {
  const { defaultModifiers: t = [], defaultOptions: n = Zl } = e;
  return function(r, a, s = n) {
    let l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, Zl), n),
      modifiersData: {},
      elements: {
        reference: r,
        popper: a
      },
      attributes: {},
      styles: {}
    }, c = [], d = !1;
    const f = {
      state: l,
      setOptions(m) {
        p(), l.options = Object.assign(Object.assign(Object.assign({}, n), l.options), m), l.scrollParents = {
          reference: Cr(r) ? mr(r) : r.contextElement ? mr(r.contextElement) : [],
          popper: mr(a)
        };
        const g = Mh(Fh([...t, ...l.options.modifiers]));
        return l.orderedModifiers = g.filter((v) => v.enabled), u(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate() {
        if (d)
          return;
        const { reference: m, popper: g } = l.elements;
        if (Ql(m, g)) {
          l.rects = {
            reference: yh(m, Fr(g), l.options.strategy === "fixed"),
            popper: Fo(g)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((v) => l.modifiersData[v.name] = Object.assign({}, v.data));
          for (let v = 0; v < l.orderedModifiers.length; v++) {
            if (l.reset === !0) {
              l.reset = !1, v = -1;
              continue;
            }
            const { fn: x, options: w = {}, name: _ } = l.orderedModifiers[v];
            typeof x == "function" && (l = x({ state: l, options: w, name: _, instance: f }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Dh(() => new Promise((m) => {
        f.forceUpdate(), m(l);
      })),
      destroy() {
        p(), d = !0;
      }
    };
    if (!Ql(r, a))
      return f;
    f.setOptions(s).then((m) => {
      !d && s.onFirstUpdate && s.onFirstUpdate(m);
    });
    function u() {
      l.orderedModifiers.forEach(({ name: m, options: g = {}, effect: v }) => {
        if (typeof v == "function") {
          const x = v({ state: l, name: m, instance: f, options: g }), w = () => {
          };
          c.push(x || w);
        }
      });
    }
    function p() {
      c.forEach((m) => m()), c = [];
    }
    return f;
  };
}
const ea = { passive: !0 };
function zh({ state: e, instance: t, options: n }) {
  const { scroll: i = !0, resize: r = !0 } = n, a = on(e.elements.popper), s = [...e.scrollParents.reference, ...e.scrollParents.popper];
  return i && s.forEach((l) => {
    l.addEventListener("scroll", t.update, ea);
  }), r && a.addEventListener("resize", t.update, ea), () => {
    i && s.forEach((l) => {
      l.removeEventListener("scroll", t.update, ea);
    }), r && a.removeEventListener("resize", t.update, ea);
  };
}
const Wh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: () => {
  },
  effect: zh,
  data: {}
};
function Gh({ state: e, name: t }) {
  e.modifiersData[t] = cf({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Kh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gh,
  data: {}
}, Xh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qh({ x: e, y: t }) {
  const i = window.devicePixelRatio || 1;
  return {
    x: Math.round(e * i) / i || 0,
    y: Math.round(t * i) / i || 0
  };
}
function ec({ popper: e, popperRect: t, placement: n, offsets: i, position: r, gpuAcceleration: a, adaptive: s }) {
  let { x: l, y: c } = qh(i);
  const d = i.hasOwnProperty("x"), f = i.hasOwnProperty("y");
  let u = Rt, p = Tt;
  const m = window;
  if (s) {
    let v = Fr(e);
    v === on(e) && (v = kn(e)), n === Tt && (p = jt, c -= v.clientHeight - t.height, c *= a ? 1 : -1), n === Rt && (u = Vt, l -= v.clientWidth - t.width, l *= a ? 1 : -1);
  }
  const g = Object.assign({ position: r }, s && Xh);
  return a ? Object.assign(Object.assign({}, g), {
    [p]: f ? "0" : "",
    [u]: d ? "0" : "",
    // Layer acceleration can disable subpixel rendering which causes slightly
    // blurry text on low PPI displays, so we want to use 2D transforms
    // instead
    transform: (m.devicePixelRatio || 1) < 2 ? `translate(${l}px, ${c}px)` : `translate3d(${l}px, ${c}px, 0)`
  }) : Object.assign(Object.assign({}, g), { [p]: f ? `${c}px` : "", [u]: d ? `${l}px` : "", transform: "" });
}
function Jh({ state: e, options: t }) {
  const { gpuAcceleration: n = !0, adaptive: i = !0 } = t, r = {
    placement: tn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: n
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), ec(Object.assign(Object.assign({}, r), { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: i })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), ec(Object.assign(Object.assign({}, r), { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1 })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), { "data-popper-placement": e.placement });
}
const Yh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jh,
  data: {}
};
function Zh({ state: e }) {
  Object.keys(e.elements).forEach((t) => {
    const n = e.styles[t] || {}, i = e.attributes[t] || {}, r = e.elements[t];
    !rn(r) || !Kt(r) || (Object.assign(r.style, n), Object.keys(i).forEach((a) => {
      const s = i[a];
      s === !1 ? r.removeAttribute(a) : r.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Qh({ state: e }) {
  const t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), () => {
    Object.keys(e.elements).forEach((n) => {
      const i = e.elements[n], r = e.attributes[n] || {}, s = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]).reduce((l, c) => (l[c] = "", l), {});
      !rn(i) || !Kt(i) || (Object.assign(i.style, s), Object.keys(r).forEach((l) => {
        i.removeAttribute(l);
      }));
    });
  };
}
const eg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zh,
  effect: Qh,
  requires: ["computeStyles"]
};
function tg(e, t, n) {
  const i = tn(e), r = [Rt, Tt].indexOf(i) >= 0 ? -1 : 1;
  let [a, s] = typeof n == "function" ? n(Object.assign(Object.assign({}, t), { placement: e })) : n;
  return a = a || 0, s = (s || 0) * r, [Rt, Vt].indexOf(i) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function ng({ state: e, options: t, name: n }) {
  const { offset: i = [0, 0] } = t, r = of.reduce((l, c) => (l[c] = tg(c, e.rects, i), l), {}), { x: a, y: s } = r[e.placement];
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += s), e.modifiersData[n] = r;
}
const ig = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ng
}, rg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function sa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rg[t]);
}
const ag = { start: "end", end: "start" };
function tc(e) {
  return e.replace(/start|end/g, (t) => ag[t]);
}
function sg(e, t = {}) {
  const { placement: n, boundary: i, rootBoundary: r, padding: a, flipVariations: s, allowedAutoPlacements: l = of } = t, c = _r(n), d = c ? s ? Jl : Jl.filter((p) => _r(p) === c) : $r;
  let f = d.filter((p) => l.indexOf(p) >= 0);
  f.length === 0 && (f = d);
  const u = f.reduce((p, m) => (p[m] = Er(e, {
    placement: m,
    boundary: i,
    rootBoundary: r,
    padding: a
  })[tn(m)], p), {});
  return Object.keys(u).sort((p, m) => u[p] - u[m]);
}
function og(e) {
  if (tn(e) === $o)
    return [];
  const t = sa(e);
  return [
    tc(e),
    t,
    tc(t)
  ];
}
function lg({ state: e, options: t, name: n }) {
  if (e.modifiersData[n]._skip)
    return;
  const { mainAxis: i = !0, altAxis: r = !0, fallbackPlacements: a, padding: s, boundary: l, rootBoundary: c, altBoundary: d, flipVariations: f = !0, allowedAutoPlacements: u } = t, p = e.options.placement, g = tn(p) === p, v = a || (g || !f ? [sa(p)] : og(p)), x = [p, ...v].reduce((R, k) => R.concat(tn(k) === $o ? sg(e, {
    placement: k,
    boundary: l,
    rootBoundary: c,
    padding: s,
    flipVariations: f,
    allowedAutoPlacements: u
  }) : k), []), w = e.rects.reference, _ = e.rects.popper, S = /* @__PURE__ */ new Map();
  let I = !0, E = x[0];
  for (let R = 0; R < x.length; R++) {
    const k = x[R], N = tn(k), M = _r(k) === Di, $ = [Tt, jt].indexOf(N) >= 0, D = $ ? "width" : "height", O = Er(e, {
      placement: k,
      boundary: l,
      rootBoundary: c,
      altBoundary: d,
      padding: s
    });
    let L = $ ? M ? Vt : Rt : M ? jt : Tt;
    w[D] > _[D] && (L = sa(L));
    const j = sa(L), C = [];
    if (i && C.push(O[N] <= 0), r && C.push(O[L] <= 0, O[j] <= 0), C.every((P) => P)) {
      E = k, I = !1;
      break;
    }
    S.set(k, C);
  }
  if (I) {
    const R = f ? 3 : 1;
    for (let k = R; k > 0; k--) {
      const N = x.find((M) => {
        const $ = S.get(M);
        if ($)
          return $.slice(0, k).every((D) => D);
      });
      if (N) {
        E = N;
        break;
      }
    }
  }
  e.placement !== E && (e.modifiersData[n]._skip = !0, e.placement = E, e.reset = !0);
}
const cg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lg,
  requiresIfExists: ["offset"],
  data: { _skip: !1 }
};
function dg(e) {
  return e === "x" ? "y" : "x";
}
function oa(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function fg({ state: e, options: t, name: n }) {
  const { mainAxis: i = !0, altAxis: r = !1, boundary: a, rootBoundary: s, altBoundary: l, padding: c, tether: d = !0, tetherOffset: f = 0 } = t, u = Er(e, {
    boundary: a,
    rootBoundary: s,
    padding: c,
    altBoundary: l
  }), p = tn(e.placement), m = _r(e.placement), g = !m, v = jo(p), x = dg(v), w = e.modifiersData.popperOffsets, _ = e.rects.reference, S = e.rects.popper, I = typeof f == "function" ? f(Object.assign(Object.assign({}, e.rects), { placement: e.placement })) : f, E = { x: 0, y: 0 };
  if (w) {
    if (i) {
      const R = v === "y" ? Tt : Rt, k = v === "y" ? jt : Vt, N = v === "y" ? "height" : "width", M = w[v], $ = w[v] + u[R], D = w[v] - u[k], O = d ? -S[N] / 2 : 0, L = m === Di ? _[N] : S[N], j = m === Di ? -S[N] : -_[N], C = e.elements.arrow, P = d && C ? Fo(C) : { width: 0, height: 0 }, G = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : df(), B = G[R], J = G[k], b = oa(0, _[N], P[N]), F = g ? _[N] / 2 - O - b - B - I : L - b - B - I, K = g ? -_[N] / 2 + O + b + J + I : j + b + J + I, V = e.elements.arrow && Fr(e.elements.arrow), U = V ? v === "y" ? V.clientTop || 0 : V.clientLeft || 0 : 0, q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][v] : 0, W = w[v] + F - q - U, X = w[v] + K - q, te = oa(d ? Math.min($, W) : $, M, d ? Math.max(D, X) : D);
      w[v] = te, E[v] = te - M;
    }
    if (r) {
      const R = v === "x" ? Tt : Rt, k = v === "x" ? jt : Vt, N = w[x], M = N + u[R], $ = N - u[k], D = oa(M, N, $);
      w[x] = D, E[x] = D - N;
    }
    e.modifiersData[n] = E;
  }
}
const ug = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: fg,
  requiresIfExists: ["offset"]
};
function pg({ state: e, name: t }) {
  const n = e.elements.arrow, i = e.modifiersData.popperOffsets, r = tn(e.placement), a = jo(r), l = [Rt, Vt].indexOf(r) >= 0 ? "height" : "width";
  if (!n || !i)
    return;
  const c = e.modifiersData[`${t}#persistent`].padding, d = Fo(n), f = a === "y" ? Tt : Rt, u = a === "y" ? jt : Vt, p = e.rects.reference[l] + e.rects.reference[a] - i[a] - e.rects.popper[l], m = i[a] - e.rects.reference[a], g = Fr(n), v = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, x = p / 2 - m / 2, w = c[f], _ = v - d[l] - c[u], S = v / 2 - d[l] / 2 + x, I = oa(w, S, _), E = a;
  e.modifiersData[t] = {
    [E]: I,
    centerOffset: I - S
  };
}
function mg({ state: e, options: t, name: n }) {
  let { element: i = "[data-popper-arrow]", padding: r = 0 } = t;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || lf(e.elements.popper, i) && (e.elements.arrow = i, e.modifiersData[`${n}#persistent`] = {
    padding: ff(typeof r != "number" ? r : uf(r, $r))
  }));
}
const hg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pg,
  effect: mg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function nc(e, t, n = { x: 0, y: 0 }) {
  return {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ic(e) {
  return [Tt, Vt, jt, Rt].some((t) => e[t] >= 0);
}
function gg({ state: e, name: t }) {
  const n = e.rects.reference, i = e.rects.popper, r = e.modifiersData.preventOverflow, a = Er(e, {
    elementContext: "reference"
  }), s = Er(e, {
    altBoundary: !0
  }), l = nc(a, n), c = nc(s, i, r), d = ic(l), f = ic(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
const bg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gg
}, vg = [
  Wh,
  Kh,
  Yh,
  eg,
  ig,
  cg,
  ug,
  hg,
  bg
], yg = Uh({ defaultModifiers: vg }), Sr = ze ? o.useLayoutEffect : o.useEffect, xg = (e, t) => JSON.stringify(e) === JSON.stringify(t), rc = (e) => e.reduce((t, [n, i]) => (t[n] = i, t), {}), wg = [], Og = (e, t, n = {}) => {
  const i = o.useRef(null), r = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || wg
  }, [a, s] = o.useState({
    styles: {
      popper: {
        position: r.strategy,
        left: "0",
        top: "0"
      }
    },
    attributes: {}
  }), l = o.useMemo(() => ({
    name: "updateState",
    enabled: !0,
    phase: "write",
    // eslint-disable-next-line no-shadow
    fn: ({ state: f }) => {
      const u = Object.keys(f.elements);
      s({
        styles: rc(u.map((p) => [p, f.styles[p] || {}])),
        attributes: rc(u.map((p) => [p, f.attributes[p]]))
      });
    },
    requires: ["computeStyles"]
  }), []), c = o.useMemo(() => {
    const f = {
      onFirstUpdate: r.onFirstUpdate,
      placement: r.placement,
      strategy: r.strategy,
      modifiers: [...r.modifiers, l, { name: "applyStyles", enabled: !1 }]
    };
    return xg(i.current, f) ? i.current || f : (i.current = f, f);
  }, [
    r.onFirstUpdate,
    r.placement,
    r.strategy,
    r.modifiers,
    l
  ]), d = o.useRef();
  return Sr(() => {
    d && d.current && d.current.setOptions(c);
  }, [c]), Sr(() => {
    if (e == null || t == null)
      return;
    const u = (n.createPopper || yg)(e, t, c);
    return d.current = u, () => {
      u.destroy(), d.current = null;
    };
  }, [e, t, n.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: a.styles,
    attributes: a.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
}, Cg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom",
  "top-start": "bottom-end",
  "top-end": "bottom-start",
  "bottom-start": "top-end",
  "bottom-end": "top-start",
  "left-start": "right-end",
  "left-end": "right-start",
  "right-start": "left-end",
  "right-end": "left-start"
}, _g = (e) => e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g, (t) => Cg[t]), Eg = (e) => `opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`, Ln = ({ trigger: e, popper: t, direction: n = "down", position: i = "start", placement: r, width: a, minWidth: s = "trigger", maxWidth: l, appendTo: c = "inline", zIndex: d = 9999, isVisible: f = !0, positionModifiers: u, distance: p = 0, onMouseEnter: m, onMouseLeave: g, onFocus: v, onBlur: x, onDocumentClick: w, onTriggerClick: _, onTriggerEnter: S, onPopperClick: I, onPopperMouseEnter: E, onPopperMouseLeave: R, onDocumentKeyDown: k, enableFlip: N = !0, flipBehavior: M = "flip", triggerRef: $, popperRef: D, animationDuration: O = 0, entryDelay: L = 0, exitDelay: j = 0, onHidden: C = () => {
}, onHide: P = () => {
}, onMount: G = () => {
}, onShow: B = () => {
}, onShown: J = () => {
}, preventOverflow: b = !1 }) => {
  var F;
  const [K, V] = o.useState(null), [U, q] = o.useState(null), [W, X] = o.useState(null), [te, ie] = o.useState(null), [Y, oe] = o.useState(!1), [de, Ce] = o.useState(0), [Oe, Te] = o.useState(f), De = o.useRef(null), Le = o.useRef(null), T = o.useRef(null), A = o.useRef(), H = U || K, ee = f || Oe, ne = (F = $?.current || K) === null || F === void 0 ? void 0 : F.parentElement, Q = jn(ne), le = o.useMemo(() => {
    const we = { left: "left", right: "right", center: "center" };
    return {
      ltr: Object.assign({ start: "left", end: "right" }, we),
      rtl: Object.assign({ start: "right", end: "left" }, we)
    }[Q][i];
  }, [i, Q]), ae = o.useCallback((we) => w(we, H, W), [ee, K, U, W, w]);
  o.useEffect(() => {
    oe(!0), G();
  }, []), o.useEffect(() => () => {
    Qr([De, T, Le]);
  }, []), o.useEffect(() => {
    $ && ($.current ? q($.current) : typeof $ == "function" && q($()));
  }, [$, e]), o.useEffect(() => {
    D && (D.current ? X(D.current) : typeof D == "function" && X(D()));
  }, [ee, D]), o.useEffect(() => {
    const we = new MutationObserver(() => {
      _t && _t();
    });
    return W && we.observe(W, { attributes: !0, childList: !0, subtree: !0 }), () => {
      we.disconnect();
    };
  }, [W]);
  const ve = (we, He, ei, ti = !1) => {
    we && He && He.addEventListener(ei, we, { capture: ti });
  }, ye = (we, He, ei, ti = !1) => {
    we && He && He.removeEventListener(ei, we, { capture: ti });
  };
  o.useEffect(() => (ve(m, H, "mouseenter"), ve(g, H, "mouseleave"), ve(v, H, "focus"), ve(x, H, "blur"), ve(_, H, "click"), ve(S, H, "keydown"), ve(I, W, "click"), ve(E, W, "mouseenter"), ve(R, W, "mouseleave"), w && ve(ae, document, "click", !0), ve(k, document, "keydown", !0), () => {
    ye(m, H, "mouseenter"), ye(g, H, "mouseleave"), ye(v, H, "focus"), ye(x, H, "blur"), ye(_, H, "click"), ye(S, H, "keydown"), ye(I, W, "click"), ye(E, W, "mouseenter"), ye(R, W, "mouseleave"), w && ye(ae, document, "click", !0), ye(k, document, "keydown", !0);
  }), [
    K,
    W,
    m,
    g,
    v,
    x,
    _,
    S,
    I,
    E,
    R,
    w,
    k,
    U
  ]);
  const he = () => {
    if (r)
      return r;
    let we = n === "up" ? "top" : "bottom";
    return le !== "center" && (we = `${we}-${le === "right" ? "end" : "start"}`), we;
  }, Ee = o.useMemo(he, [n, le, r]), We = o.useMemo(() => _g(he()), [n, le, r]), ue = o.useMemo(() => ({
    name: "widthMods",
    enabled: a !== void 0 || s !== void 0 || l !== void 0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state: we }) => {
      const He = we.rects.reference.width;
      a && (we.styles.popper.width = a === "trigger" ? `${He}px` : a), s && (we.styles.popper.minWidth = s === "trigger" ? `${He}px` : s), l && (we.styles.popper.maxWidth = l === "trigger" ? `${He}px` : l);
    },
    effect: ({ state: we }) => {
      const He = we.elements.reference.offsetWidth;
      return a && (we.elements.popper.style.width = a === "trigger" ? `${He}px` : a), s && (we.elements.popper.style.minWidth = s === "trigger" ? `${He}px` : s), l && (we.elements.popper.style.maxWidth = l === "trigger" ? `${He}px` : l), () => {
      };
    }
  }), [a, s, l]), { styles: Ie, attributes: Ue, update: _t, forceUpdate: ln } = Og(H, W, {
    placement: Ee,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, p]
        }
      },
      {
        name: "preventOverflow",
        enabled: b
      },
      {
        // adds attribute [data-popper-reference-hidden] to the popper element which can be used to hide it using CSS
        name: "hide",
        enabled: !0
      },
      {
        name: "flip",
        enabled: Ee.startsWith("auto") || N,
        options: {
          fallbackPlacements: M === "flip" ? [We] : M
        }
      },
      ue
    ]
  });
  o.useEffect(() => {
    var we, He, ei, ti, ps, ms, hs;
    const gs = ((ti = (ei = (He = (we = t?.props) === null || we === void 0 ? void 0 : we.children) === null || He === void 0 ? void 0 : He[1]) === null || ei === void 0 ? void 0 : ei.props) === null || ti === void 0 ? void 0 : ti.children) || ((hs = (ms = (ps = t?.props) === null || ps === void 0 ? void 0 : ps.children) === null || ms === void 0 ? void 0 : ms.props) === null || hs === void 0 ? void 0 : hs.children);
    ie(gs), gs && te && gs !== te && ln && ln();
  }, [t]), o.useEffect(() => {
    A.current < j && (Qr([De, T]), T.current = setTimeout(() => {
      De.current = setTimeout(() => {
        Te(!1);
      }, O);
    }, j)), A.current = j;
  }, [j]);
  const Nn = () => {
    B(), Qr([De, T]), Le.current = setTimeout(() => {
      Te(!0), Ce(1), J();
    }, L);
  }, nr = () => {
    P(), Qr([Le]), T.current = setTimeout(() => {
      Ce(0), De.current = setTimeout(() => {
        Te(!1), C();
      }, O);
    }, j);
  };
  o.useEffect(() => {
    f ? Nn() : nr();
  }, [f]);
  const ir = () => {
    if (Ue && Ue.popper && Ue.popper["data-popper-placement"]) {
      const we = Ue.popper["data-popper-placement"];
      return u[we];
    }
    return u.top;
  }, $l = Object.assign({ className: y(t.props && t.props.className, u && ir()), style: Object.assign(Object.assign(Object.assign({}, t.props && t.props.style || {}), Ie.popper), {
    zIndex: d,
    opacity: de,
    transition: Eg(O)
  }) }, Ue.popper), Bl = () => {
    const we = o.cloneElement(t, $l);
    return D ? we : o.createElement("div", { style: { display: "contents" }, ref: (He) => X(He?.firstElementChild) }, we);
  }, vm = () => {
    if (c === "inline")
      return Bl();
    {
      const we = typeof c == "function" ? c() : c;
      return No.createPortal(Bl(), we);
    }
  };
  return o.createElement(
    o.Fragment,
    null,
    !$ && e && o.isValidElement(e) && o.createElement("div", { style: { display: "contents" }, ref: (we) => V(we?.firstElementChild) }, e),
    $ && e && o.isValidElement(e) && e,
    Y && ee && vm()
  );
};
Ln.displayName = "Popper";
const pf = (e, t, n = (d) => document.activeElement.contains(d), i = (d) => d, r = ["A", "BUTTON", "INPUT"], a = !1, s = !1, l = !0, c = !0) => {
  const d = document.activeElement, f = e.key;
  let u = null;
  if (!a && ["ArrowUp", "ArrowDown"].includes(f)) {
    e.preventDefault(), e.stopImmediatePropagation();
    let p = -1;
    t.forEach((m, g) => {
      if (n(m)) {
        let v = 0;
        for (; !u && v < t.length && v * -1 < t.length; )
          f === "ArrowUp" ? v-- : v++, p = g + v, p >= t.length && (p = 0), p < 0 && (p = t.length - 1), u = i(t[p]);
      }
    });
  }
  if (!s && ["ArrowLeft", "ArrowRight"].includes(f)) {
    e.preventDefault(), e.stopImmediatePropagation();
    let p = -1;
    t.forEach((m, g) => {
      if (n(m)) {
        const v = t[g].querySelectorAll(r.join(","));
        if (!v.length || c) {
          let x = d;
          for (; x; )
            if (x = f === "ArrowLeft" ? x.previousElementSibling : x.nextElementSibling, x && r.includes(x.tagName)) {
              u = x;
              break;
            }
        } else
          v.forEach((x, w) => {
            e.target === x && (p = w + (f === "ArrowLeft" ? -1 : 1), p >= v.length && (p = 0), p < 0 && (p = v.length - 1), u = v[p]);
          });
      }
    });
  }
  u && (l && (d.tabIndex = -1, u.tabIndex = 0), u.focus());
}, Sg = (e) => {
  e && e.length > 0 && (e.forEach((t) => {
    t.tabIndex = -1;
  }), e[0].tabIndex = 0);
};
class Vo extends o.Component {
  constructor() {
    super(...arguments), this.keyHandler = (t) => {
      const { isEventFromContainer: n } = this.props;
      if (n ? !n(t) : !this._isEventFromContainer(t))
        return;
      const { isActiveElement: i, getFocusableElement: r, noVerticalArrowHandling: a, noHorizontalArrowHandling: s, noEnterHandling: l, noSpaceHandling: c, updateTabIndex: d, validSiblingTags: f, additionalKeyHandler: u, createNavigableElements: p, onlyTraverseSiblings: m } = this.props;
      u && u(t);
      const g = p();
      if (!g) {
        console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");
        return;
      }
      const v = t.key;
      l || v === "Enter" && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click()), c || v === " " && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click()), pf(t, g, i, r, f, a, s, d, m);
    }, this._isEventFromContainer = (t) => {
      const { containerRef: n } = this.props;
      return n.current && n.current.contains(t.target);
    };
  }
  componentDidMount() {
    ze && window.addEventListener("keydown", this.keyHandler);
  }
  componentWillUnmount() {
    ze && window.removeEventListener("keydown", this.keyHandler);
  }
  render() {
    return null;
  }
}
Vo.displayName = "KeyboardHandler";
Vo.defaultProps = {
  containerRef: null,
  createNavigableElements: () => null,
  isActiveElement: (e) => document.activeElement === e,
  getFocusableElement: (e) => e,
  validSiblingTags: ["BUTTON", "A"],
  onlyTraverseSiblings: !0,
  updateTabIndex: !0,
  noHorizontalArrowHandling: !1,
  noVerticalArrowHandling: !1,
  noEnterHandling: !1,
  noSpaceHandling: !1
};
const Fi = (e, t, n) => {
  let i;
  if (ze) {
    const { ResizeObserver: r } = window;
    if (e && r) {
      const a = new r((s) => {
        n ? window.requestAnimationFrame(() => {
          Array.isArray(s) && s.length > 0;
        }) : Array.isArray(s) && s.length > 0 && t();
      });
      a.observe(e), i = () => a.unobserve(e);
    } else
      window.addEventListener("resize", t), i = () => window.removeEventListener("resize", t);
  }
  return () => {
    i && i();
  };
};
var ac;
(function(e) {
  e.md = "md", e.lg = "lg", e.xl = "xl", e["2xl"] = "2xl", e["3xl"] = "3xl", e["4xl"] = "4xl";
})(ac || (ac = {}));
var Js;
(function(e) {
  e.h1 = "2xl", e.h2 = "xl", e.h3 = "lg", e.h4 = "md", e.h5 = "md", e.h6 = "md";
})(Js || (Js = {}));
const Cn = (e) => {
  var { className: t = "", children: n = "", headingLevel: i, size: r = Js[i], ouiaId: a, ouiaSafe: s = !0 } = e, l = z(e, ["className", "children", "headingLevel", "size", "ouiaId", "ouiaSafe"]);
  const c = Gt(Cn.displayName, a, s);
  return o.createElement(i, Object.assign({}, c, l, { className: y(jl.title, r && jl.modifiers[r], t) }), n);
};
Cn.displayName = "Title";
const Ge = {
  badge: "pf-v5-c-badge",
  button: "pf-v5-c-button",
  buttonCount: "pf-v5-c-button__count",
  buttonIcon: "pf-v5-c-button__icon",
  buttonProgress: "pf-v5-c-button__progress",
  modifiers: {
    active: "pf-m-active",
    block: "pf-m-block",
    small: "pf-m-small",
    primary: "pf-m-primary",
    displayLg: "pf-m-display-lg",
    secondary: "pf-m-secondary",
    tertiary: "pf-m-tertiary",
    link: "pf-m-link",
    unread: "pf-m-unread",
    inline: "pf-m-inline",
    danger: "pf-m-danger",
    warning: "pf-m-warning",
    control: "pf-m-control",
    expanded: "pf-m-expanded",
    plain: "pf-m-plain",
    noPadding: "pf-m-no-padding",
    disabled: "pf-m-disabled",
    ariaDisabled: "pf-m-aria-disabled",
    progress: "pf-m-progress",
    inProgress: "pf-m-in-progress",
    start: "pf-m-start",
    end: "pf-m-end"
  },
  spinner: "pf-v5-c-spinner",
  themeDark: "pf-v5-theme-dark"
}, ta = {
  modifiers: {
    inline: "pf-m-inline",
    sm: "pf-m-sm",
    md: "pf-m-md",
    lg: "pf-m-lg",
    xl: "pf-m-xl"
  },
  spinner: "pf-v5-c-spinner",
  spinnerPath: "pf-v5-c-spinner__path"
}, kg = {
  name: "--pf-v5-c-spinner--diameter",
  value: "3.375rem",
  var: "var(--pf-v5-c-spinner--diameter)"
};
var Ys;
(function(e) {
  e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl";
})(Ys || (Ys = {}));
const Xt = (e) => {
  var { className: t = "", size: n = "xl", "aria-valuetext": i = "Loading...", diameter: r, isInline: a = !1, "aria-label": s, "aria-labelledBy": l } = e, c = z(e, ["className", "size", "aria-valuetext", "diameter", "isInline", "aria-label", "aria-labelledBy"]);
  return o.createElement(
    "svg",
    Object.assign({ className: y(ta.spinner, a ? ta.modifiers.inline : ta.modifiers[n], t), role: "progressbar", "aria-valuetext": i, viewBox: "0 0 100 100" }, r && { style: { [kg.name]: r } }, s && { "aria-label": s }, l && { "aria-labelledBy": l }, !s && !l && { "aria-label": "Contents" }, c),
    o.createElement("circle", { className: ta.spinnerPath, cx: "50", cy: "50", r: "45", fill: "none" })
  );
};
Xt.displayName = "Spinner";
const ys = {
  badge: "pf-v5-c-badge",
  modifiers: {
    read: "pf-m-read",
    unread: "pf-m-unread"
  },
  themeDark: "pf-v5-theme-dark"
}, ja = (e) => {
  var { isRead: t = !1, className: n = "", children: i = "", screenReaderText: r } = e, a = z(e, ["isRead", "className", "children", "screenReaderText"]);
  return o.createElement(
    "span",
    Object.assign({}, a, { className: y(ys.badge, t ? ys.modifiers.read : ys.modifiers.unread, n) }),
    i,
    r && o.createElement("span", { className: "pf-v5-screen-reader" }, r)
  );
};
ja.displayName = "Badge";
var Me;
(function(e) {
  e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary", e.danger = "danger", e.warning = "warning", e.link = "link", e.plain = "plain", e.control = "control";
})(Me || (Me = {}));
var Zs;
(function(e) {
  e.button = "button", e.submit = "submit", e.reset = "reset";
})(Zs || (Zs = {}));
var hr;
(function(e) {
  e.default = "default", e.sm = "sm", e.lg = "lg";
})(hr || (hr = {}));
const Lg = (e) => {
  var { children: t = null, className: n = "", component: i = "button", isActive: r = !1, isBlock: a = !1, isDisabled: s = !1, isAriaDisabled: l = !1, isLoading: c = null, isDanger: d = !1, spinnerAriaValueText: f, spinnerAriaLabelledBy: u, spinnerAriaLabel: p, size: m = hr.default, inoperableEvents: g = ["onClick", "onKeyPress"], isInline: v = !1, type: x = Zs.button, variant: w = Me.primary, iconPosition: _ = "start", "aria-label": S = null, icon: I = null, ouiaId: E, ouiaSafe: R = !0, tabIndex: k = null, innerRef: N, countOptions: M } = e, $ = z(e, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isAriaDisabled", "isLoading", "isDanger", "spinnerAriaValueText", "spinnerAriaLabelledBy", "spinnerAriaLabel", "size", "inoperableEvents", "isInline", "type", "variant", "iconPosition", "aria-label", "icon", "ouiaId", "ouiaSafe", "tabIndex", "innerRef", "countOptions"]);
  const D = Gt(ce.displayName, E, R, w), O = i, L = O === "button", j = v && O === "span", C = g.reduce((G, B) => Object.assign(Object.assign({}, G), { [B]: (J) => {
    J.preventDefault();
  } }), {}), P = () => {
    if (s)
      return L ? null : -1;
    if (l)
      return null;
    if (j)
      return 0;
  };
  return o.createElement(
    O,
    Object.assign({}, $, l ? C : null, { "aria-disabled": s || l, "aria-label": S, className: y(Ge.button, Ge.modifiers[w], a && Ge.modifiers.block, s && Ge.modifiers.disabled, l && Ge.modifiers.ariaDisabled, r && Ge.modifiers.active, v && w === Me.link && Ge.modifiers.inline, d && (w === Me.secondary || w === Me.link) && Ge.modifiers.danger, c !== null && w !== Me.plain && Ge.modifiers.progress, c && Ge.modifiers.inProgress, m === hr.sm && Ge.modifiers.small, m === hr.lg && Ge.modifiers.displayLg, n), disabled: L ? s : null, tabIndex: k !== null ? k : P(), type: L || j ? x : null, role: j ? "button" : null, ref: N }, D),
    c && o.createElement(
      "span",
      { className: y(Ge.buttonProgress) },
      o.createElement(Xt, { size: Ys.md, isInline: v, "aria-valuetext": f, "aria-label": p, "aria-labelledby": u })
    ),
    w === Me.plain && t === null && I ? I : null,
    w !== Me.plain && I && (_ === "start" || _ === "left") && o.createElement("span", { className: y(Ge.buttonIcon, Ge.modifiers.start) }, I),
    t,
    w !== Me.plain && I && (_ === "end" || _ === "right") && o.createElement("span", { className: y(Ge.buttonIcon, Ge.modifiers.end) }, I),
    M && o.createElement(
      "span",
      { className: y(Ge.buttonCount, M.className) },
      o.createElement(ja, { isRead: M.isRead }, M.count)
    )
  );
}, ce = o.forwardRef((e, t) => o.createElement(Lg, Object.assign({ innerRef: t }, e)));
ce.displayName = "Button";
let Ig = 0;
function pe({ name: e, xOffset: t = 0, yOffset: n = 0, width: i, height: r, svgPath: a }) {
  var s;
  return s = class extends o.Component {
    constructor() {
      super(...arguments), this.id = `icon-title-${Ig++}`;
    }
    render() {
      const c = this.props, { title: d, className: f } = c, u = z(c, ["title", "className"]), p = f ? `pf-v5-svg ${f}` : "pf-v5-svg", m = !!d, g = [t, n, i, r].join(" ");
      return o.createElement(
        "svg",
        Object.assign({ className: p, viewBox: g, fill: "currentColor", "aria-labelledby": m ? this.id : null, "aria-hidden": m ? null : !0, role: "img", width: "1em", height: "1em" }, u),
        m && o.createElement("title", { id: this.id }, d),
        o.createElement("path", { d: a })
      );
    }
  }, s.displayName = e, s;
}
const Ng = {
  name: "TimesIcon",
  height: 512,
  width: 352,
  svgPath: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
  yOffset: 0,
  xOffset: 0
}, an = pe(Ng), Ei = {
  backdrop: "pf-v5-c-backdrop",
  backdropOpen: "pf-v5-c-backdrop__open"
}, nt = {
  button: "pf-v5-c-button",
  modalBox: "pf-v5-c-modal-box",
  modalBoxBody: "pf-v5-c-modal-box__body",
  modalBoxClose: "pf-v5-c-modal-box__close",
  modalBoxDescription: "pf-v5-c-modal-box__description",
  modalBoxFooter: "pf-v5-c-modal-box__footer",
  modalBoxHeader: "pf-v5-c-modal-box__header",
  modalBoxHeaderMain: "pf-v5-c-modal-box__header-main",
  modalBoxTitle: "pf-v5-c-modal-box__title",
  modalBoxTitleIcon: "pf-v5-c-modal-box__title-icon",
  modalBoxTitleText: "pf-v5-c-modal-box__title-text",
  modifiers: {
    sm: "pf-m-sm",
    md: "pf-m-md",
    lg: "pf-m-lg",
    alignTop: "pf-m-align-top",
    danger: "pf-m-danger",
    warning: "pf-m-warning",
    success: "pf-m-success",
    custom: "pf-m-custom",
    info: "pf-m-info",
    help: "pf-m-help",
    icon: "pf-m-icon"
  },
  themeDark: "pf-v5-theme-dark"
}, Tg = {
  bullseye: "pf-v5-l-bullseye"
}, mf = (e) => {
  var { children: t = null, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({}, i, { className: y(Ei.backdrop, n) }), t);
};
mf.displayName = "Backdrop";
const hf = (e) => {
  var { children: t = null, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({}, i, { className: y(nt.modalBoxBody, n) }), t);
};
hf.displayName = "ModalBoxBody";
const Ho = (e) => {
  var { className: t, onClose: n = () => {
  }, "aria-label": i = "Close", ouiaId: r } = e, a = z(e, ["className", "onClose", "aria-label", "ouiaId"]);
  return o.createElement(
    "div",
    { className: y(nt.modalBoxClose, t) },
    o.createElement(
      ce,
      Object.assign({ variant: "plain", onClick: (s) => n(s), "aria-label": i }, r && { ouiaId: `${r}-${Ho.displayName}` }, a),
      o.createElement(an, null)
    )
  );
};
Ho.displayName = "ModalBoxCloseButton";
const Rg = {
  name: "--pf-v5-c-modal-box--m-align-top--spacer",
  value: "0.5rem",
  var: "var(--pf-v5-c-modal-box--m-align-top--spacer)"
}, gf = (e) => {
  var { children: t, className: n = "", variant: i = "default", position: r, positionOffset: a, "aria-labelledby": s, "aria-label": l = "", "aria-describedby": c, style: d } = e, f = z(e, ["children", "className", "variant", "position", "positionOffset", "aria-labelledby", "aria-label", "aria-describedby", "style"]);
  return a && (d = d || {}, d[Rg.name] = a), o.createElement("div", Object.assign({}, f, { role: "dialog", "aria-label": l || null, "aria-labelledby": s || null, "aria-describedby": c, "aria-modal": "true", className: y(nt.modalBox, n, r === "top" && nt.modifiers.alignTop, i === "large" && nt.modifiers.lg, i === "small" && nt.modifiers.sm, i === "medium" && nt.modifiers.md), style: d }), t);
};
gf.displayName = "ModalBox";
const Qs = (e) => {
  var { children: t = null, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("footer", Object.assign({}, i, { className: y(nt.modalBoxFooter, n) }), t);
};
Qs.displayName = "ModalBoxFooter";
const bf = (e) => {
  var { children: t = null, className: n = "", id: i = "" } = e, r = z(e, ["children", "className", "id"]);
  return o.createElement("div", Object.assign({}, r, { id: i, className: y(nt.modalBoxDescription, n) }), t);
};
bf.displayName = "ModalBoxDescription";
const eo = (e) => {
  var { children: t = null, className: n = "", help: i = null } = e, r = z(e, ["children", "className", "help"]);
  return o.createElement(
    "header",
    Object.assign({ className: y(nt.modalBoxHeader, i && nt.modifiers.help, n) }, r),
    i && o.createElement(
      o.Fragment,
      null,
      o.createElement("div", { className: y(nt.modalBoxHeaderMain) }, t),
      o.createElement("div", { className: `${nt.modalBoxHeader}-help` }, i)
    ),
    !i && t
  );
};
eo.displayName = "ModalBoxHeader";
const st = {
  modifiers: {
    top: "pf-m-top",
    topLeft: "pf-m-top-left",
    topRight: "pf-m-top-right",
    bottom: "pf-m-bottom",
    bottomLeft: "pf-m-bottom-left",
    bottomRight: "pf-m-bottom-right",
    left: "pf-m-left",
    leftTop: "pf-m-left-top",
    leftBottom: "pf-m-left-bottom",
    right: "pf-m-right",
    rightTop: "pf-m-right-top",
    rightBottom: "pf-m-right-bottom",
    textAlignLeft: "pf-m-text-align-left"
  },
  themeDark: "pf-v5-theme-dark",
  tooltip: "pf-v5-c-tooltip",
  tooltipArrow: "pf-v5-c-tooltip__arrow",
  tooltipContent: "pf-v5-c-tooltip__content"
}, vf = (e) => {
  var { className: t, children: n, isLeftAligned: i } = e, r = z(e, ["className", "children", "isLeftAligned"]);
  return o.createElement("div", Object.assign({ className: y(st.tooltipContent, i && st.modifiers.textAlignLeft, t) }, r), n);
};
vf.displayName = "TooltipContent";
const yf = (e) => {
  var { className: t } = e, n = z(e, ["className"]);
  return o.createElement("div", Object.assign({ className: y(st.tooltipArrow, t) }, n));
};
yf.displayName = "TooltipArrow";
const sc = {
  name: "--pf-v5-c-tooltip--MaxWidth",
  value: "18.75rem",
  var: "var(--pf-v5-c-tooltip--MaxWidth)"
};
var oc;
(function(e) {
  e.auto = "auto", e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e.topStart = "top-start", e.topEnd = "top-end", e.bottomStart = "bottom-start", e.bottomEnd = "bottom-end", e.leftStart = "left-start", e.leftEnd = "left-end", e.rightStart = "right-start", e.rightEnd = "right-end";
})(oc || (oc = {}));
let Ag = 1;
const ft = (e) => {
  var {
    content: t,
    position: n = "top",
    trigger: i = "mouseenter focus",
    isVisible: r = !1,
    isContentLeftAligned: a = !1,
    enableFlip: s = !0,
    className: l = "",
    entryDelay: c = 300,
    exitDelay: d = 300,
    appendTo: f = () => document.body,
    zIndex: u = 9999,
    minWidth: p,
    maxWidth: m = sc.value,
    distance: g = 15,
    aria: v = "describedby",
    // For every initial starting position, there are 3 escape positions
    flipBehavior: x = ["top", "right", "bottom", "left", "top", "right", "bottom"],
    id: w = `pf-tooltip-${Ag++}`,
    children: _,
    animationDuration: S = 300,
    triggerRef: I,
    "aria-live": E = I ? "polite" : "off",
    onTooltipHidden: R = () => {
    }
  } = e, k = z(e, ["content", "position", "trigger", "isVisible", "isContentLeftAligned", "enableFlip", "className", "entryDelay", "exitDelay", "appendTo", "zIndex", "minWidth", "maxWidth", "distance", "aria", "flipBehavior", "id", "children", "animationDuration", "triggerRef", "aria-live", "onTooltipHidden"]);
  const N = i.includes("mouseenter"), M = i.includes("focus"), $ = i.includes("click"), D = i === "manual", [O, L] = o.useState(!1), j = o.createRef(), C = (U) => {
    D || U.key === Wn.Escape && O && B();
  }, P = (U) => {
    U.key === Wn.Enter && (O ? B() : G());
  };
  o.useEffect(() => {
    r ? G() : B();
  }, [r]);
  const G = () => {
    L(!0);
  }, B = () => {
    L(!1);
  }, J = {
    top: st.modifiers.top,
    bottom: st.modifiers.bottom,
    left: st.modifiers.left,
    right: st.modifiers.right,
    "top-start": st.modifiers.topLeft,
    "top-end": st.modifiers.topRight,
    "bottom-start": st.modifiers.bottomLeft,
    "bottom-end": st.modifiers.bottomRight,
    "left-start": st.modifiers.leftTop,
    "left-end": st.modifiers.leftBottom,
    "right-start": st.modifiers.rightTop,
    "right-end": st.modifiers.rightBottom
  }, b = m !== sc.value, F = o.createElement(
    "div",
    Object.assign({ "aria-live": E, className: y(st.tooltip, l), role: "tooltip", id: w, style: {
      maxWidth: b ? m : null
    }, ref: j }, k),
    o.createElement(yf, null),
    o.createElement(vf, { isLeftAligned: a }, t)
  ), K = (U, q) => {
    O ? B() : U.target === q && G();
  }, V = () => v === "describedby" && _ && _.props && !_.props["aria-describedby"] ? o.cloneElement(_, { "aria-describedby": w }) : v === "labelledby" && _.props && !_.props["aria-labelledby"] ? o.cloneElement(_, { "aria-labelledby": w }) : _;
  return o.createElement(Ln, { trigger: v !== "none" && O ? V() : _, triggerRef: I, popper: F, popperRef: j, minWidth: p !== void 0 ? p : "revert", appendTo: f, isVisible: O, positionModifiers: J, distance: g, placement: n, onMouseEnter: N && G, onMouseLeave: N && B, onPopperMouseEnter: N && G, onPopperMouseLeave: N && B, onFocus: M && G, onBlur: M && B, onDocumentClick: $ && K, onDocumentKeyDown: D ? null : C, onTriggerEnter: D ? null : P, enableFlip: s, zIndex: u, flipBehavior: x, animationDuration: S, entryDelay: c, exitDelay: d, onHidden: R });
};
ft.displayName = "Tooltip";
const Pg = {
  name: "CheckCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
  yOffset: 0,
  xOffset: 0
}, Br = pe(Pg), Mg = {
  name: "ExclamationCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
  yOffset: 0,
  xOffset: 0
}, Ki = pe(Mg), Dg = {
  name: "ExclamationTriangleIcon",
  height: 512,
  width: 576,
  svgPath: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
  yOffset: 0,
  xOffset: 0
}, jr = pe(Dg), Fg = {
  name: "InfoCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
  yOffset: 0,
  xOffset: 0
}, xf = pe(Fg), $g = {
  name: "BellIcon",
  height: 1024,
  width: 896,
  svgPath: "M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",
  yOffset: 0,
  xOffset: 0
}, wf = pe($g), la = (e) => ["success", "danger", "warning", "info", "custom"].includes(e), Of = (e) => {
  var { className: t = "", id: n, title: i, titleIconVariant: r, titleLabel: a = "" } = e, s = z(e, ["className", "id", "title", "titleIconVariant", "titleLabel"]);
  const [l, c] = o.useState(!1), d = o.useRef(null), f = a || (la(r) ? `${ga(r)} alert:` : a), u = {
    success: o.createElement(Br, null),
    danger: o.createElement(Ki, null),
    warning: o.createElement(jr, null),
    info: o.createElement(xf, null),
    custom: o.createElement(wf, null)
  }, p = !la(r) && r;
  Sr(() => {
    c(d.current && d.current.offsetWidth < d.current.scrollWidth);
  }, []);
  const m = o.createElement(
    "h1",
    Object.assign({ id: n, ref: d, className: y(nt.modalBoxTitle, r && nt.modifiers.icon, t) }, s),
    r && o.createElement("span", { className: y(nt.modalBoxTitleIcon) }, la(r) ? u[r] : o.createElement(p, null)),
    f && o.createElement("span", { className: "pf-v5-screen-reader" }, f),
    o.createElement("span", { className: y(nt.modalBoxTitleText) }, i)
  );
  return l ? o.createElement(ft, { content: i }, m) : m;
};
Of.displayName = "ModalBoxTitle";
const Uo = (e) => {
  var { children: t, className: n = "", isOpen: i = !1, header: r = null, help: a = null, description: s = null, title: l = "", titleIconVariant: c = null, titleLabel: d = "", "aria-label": f = "", "aria-describedby": u, "aria-labelledby": p, bodyAriaLabel: m, bodyAriaRole: g, showClose: v = !0, footer: x = null, actions: w = [], onClose: _ = () => {
  }, variant: S = "default", position: I, positionOffset: E, width: R, maxWidth: k, boxId: N, labelId: M, descriptorId: $, disableFocusTrap: D = !1, hasNoBodyWrapper: O = !1, ouiaId: L, ouiaSafe: j = !0, elementToFocus: C } = e, P = z(e, ["children", "className", "isOpen", "header", "help", "description", "title", "titleIconVariant", "titleLabel", "aria-label", "aria-describedby", "aria-labelledby", "bodyAriaLabel", "bodyAriaRole", "showClose", "footer", "actions", "onClose", "variant", "position", "positionOffset", "width", "maxWidth", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe", "elementToFocus"]);
  if (!i)
    return null;
  const G = r ? o.createElement(eo, { help: a }, r) : l && o.createElement(
    eo,
    { help: a },
    o.createElement(Of, { title: l, titleIconVariant: c, titleLabel: d, id: M }),
    s && o.createElement(bf, { id: $ }, s)
  ), B = x ? o.createElement(Qs, null, x) : w.length > 0 && o.createElement(Qs, null, w), J = m ? "region" : void 0, F = !s && !u ? $ : void 0, K = O ? t : o.createElement(hf, Object.assign({ "aria-label": m, role: g || J }, P, { id: F }), t), V = () => {
    if (p === null)
      return null;
    const q = [];
    return (f && N) !== "" && q.push(f && N), p && q.push(p), l && q.push(M), q.join(" ");
  }, U = o.createElement(
    gf,
    Object.assign({ id: N, className: y(n, la(c) && nt.modifiers[c]), variant: S, position: I, positionOffset: E, "aria-label": f, "aria-labelledby": V(), "aria-describedby": u || (O ? null : $) }, rt(Uo.displayName, L, j), { style: Object.assign(Object.assign({}, R && { "--pf-v5-c-modal-box--Width": typeof R != "number" ? R : `${R}px` }), k && {
      "--pf-v5-c-modal-box--MaxWidth": typeof k != "number" ? k : `${k}px`
    }) }),
    v && o.createElement(Ho, { onClose: (q) => _(q), ouiaId: L }),
    G,
    K,
    B
  );
  return o.createElement(
    mf,
    null,
    o.createElement($a, { active: !D, focusTrapOptions: {
      clickOutsideDeactivates: !0,
      tabbableOptions: { displayCheck: "none" },
      // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
      // We want to prevent this in case false is ever passed in.
      initialFocus: C || void 0
    }, className: y(Tg.bullseye) }, U)
  );
};
Uo.displayName = "ModalContent";
var kr;
(function(e) {
  e.small = "small", e.medium = "medium", e.large = "large", e.default = "default";
})(kr || (kr = {}));
class At extends o.Component {
  constructor(t) {
    super(t), this.boxId = "", this.labelId = "", this.descriptorId = "", this.handleEscKeyClick = (a) => {
      var s, l;
      const { onEscapePress: c } = this.props;
      a.key === Wn.Escape && this.props.isOpen && (c ? c(a) : (l = (s = this.props).onClose) === null || l === void 0 || l.call(s, a));
    }, this.getElement = (a) => typeof a == "function" ? a() : a || document.body, this.toggleSiblingsFromScreenReaders = (a) => {
      const { appendTo: s } = this.props, c = this.getElement(s).children;
      for (const d of Array.from(c))
        d !== this.state.container && (a ? d.setAttribute("aria-hidden", "" + a) : d.removeAttribute("aria-hidden"));
    }, this.isEmpty = (a) => a == null || a === "";
    const n = At.currentId++, i = n + 1, r = n + 2;
    this.boxId = t.id || `pf-modal-part-${n}`, this.labelId = `pf-modal-part-${i}`, this.descriptorId = `pf-modal-part-${r}`, this.state = {
      container: void 0,
      ouiaStateId: Ct(At.displayName, t.variant)
    };
  }
  componentDidMount() {
    const { appendTo: t, title: n, "aria-label": i, "aria-labelledby": r, hasNoBodyWrapper: a, header: s } = this.props, l = this.getElement(t), c = document.createElement("div");
    this.setState({ container: c }), l.appendChild(c), l.addEventListener("keydown", this.handleEscKeyClick, !1), this.props.isOpen ? l.classList.add(y(Ei.backdropOpen)) : l.classList.remove(y(Ei.backdropOpen)), !n && this.isEmpty(i) && this.isEmpty(r) && console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."), this.isEmpty(i) && this.isEmpty(r) && (a || s) && console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.");
  }
  componentDidUpdate() {
    const { appendTo: t } = this.props, n = this.getElement(t);
    this.props.isOpen ? (n.classList.add(y(Ei.backdropOpen)), this.toggleSiblingsFromScreenReaders(!0)) : (n.classList.remove(y(Ei.backdropOpen)), this.toggleSiblingsFromScreenReaders(!1));
  }
  componentWillUnmount() {
    const { appendTo: t } = this.props, n = this.getElement(t);
    this.state.container && n.removeChild(this.state.container), n.removeEventListener("keydown", this.handleEscKeyClick, !1), n.classList.remove(y(Ei.backdropOpen)), this.toggleSiblingsFromScreenReaders(!1);
  }
  render() {
    const t = this.props, {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      appendTo: n,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onEscapePress: i,
      "aria-labelledby": r,
      "aria-label": a,
      "aria-describedby": s,
      bodyAriaLabel: l,
      bodyAriaRole: c,
      title: d,
      titleIconVariant: f,
      titleLabel: u,
      ouiaId: p,
      ouiaSafe: m,
      position: g,
      elementToFocus: v
    } = t, x = z(t, ["appendTo", "onEscapePress", "aria-labelledby", "aria-label", "aria-describedby", "bodyAriaLabel", "bodyAriaRole", "title", "titleIconVariant", "titleLabel", "ouiaId", "ouiaSafe", "position", "elementToFocus"]), { container: w } = this.state;
    return !ze || !w ? null : No.createPortal(o.createElement(Uo, Object.assign({}, x, { boxId: this.boxId, labelId: this.labelId, descriptorId: this.descriptorId, title: d, titleIconVariant: f, titleLabel: u, "aria-label": a, "aria-describedby": s, "aria-labelledby": r, bodyAriaLabel: l, bodyAriaRole: c, ouiaId: p !== void 0 ? p : this.state.ouiaStateId, ouiaSafe: m, position: g, elementToFocus: v })), w);
  }
}
At.displayName = "Modal";
At.currentId = 0;
At.defaultProps = {
  className: "",
  isOpen: !1,
  title: "",
  titleIconVariant: null,
  titleLabel: "",
  "aria-label": "",
  showClose: !0,
  "aria-describedby": "",
  "aria-labelledby": "",
  id: void 0,
  actions: [],
  onClose: () => {
  },
  variant: "default",
  hasNoBodyWrapper: !1,
  appendTo: () => document.body,
  ouiaSafe: !0,
  position: "default"
};
const Bg = {
  name: "AngleRightIcon",
  height: 512,
  width: 256,
  svgPath: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
  yOffset: 0,
  xOffset: 0
}, Ot = pe(Bg), to = {
  actionList: "pf-v5-c-action-list",
  actionListGroup: "pf-v5-c-action-list__group",
  modifiers: {
    icons: "pf-m-icons"
  }
}, Cf = (e) => {
  var { children: t, isIconList: n, className: i = "" } = e, r = z(e, ["children", "isIconList", "className"]);
  return o.createElement("div", Object.assign({ className: y(to.actionList, n && to.modifiers.icons, i) }, r), t);
};
Cf.displayName = "ActionList";
const _f = (e) => {
  var { children: t, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(`${to.actionList}__item`, n) }, i), t);
};
_f.displayName = "ActionListItem";
const pt = {
  alert: "pf-v5-c-alert",
  alertAction: "pf-v5-c-alert__action",
  alertActionGroup: "pf-v5-c-alert__action-group",
  alertDescription: "pf-v5-c-alert__description",
  alertIcon: "pf-v5-c-alert__icon",
  alertTitle: "pf-v5-c-alert__title",
  alertToggle: "pf-v5-c-alert__toggle",
  alertToggleIcon: "pf-v5-c-alert__toggle-icon",
  button: "pf-v5-c-button",
  dirRtl: "pf-v5-m-dir-rtl",
  modifiers: {
    custom: "pf-m-custom",
    success: "pf-m-success",
    danger: "pf-m-danger",
    warning: "pf-m-warning",
    info: "pf-m-info",
    inline: "pf-m-inline",
    plain: "pf-m-plain",
    expandable: "pf-m-expandable",
    expanded: "pf-m-expanded",
    truncate: "pf-m-truncate"
  },
  themeDark: "pf-v5-theme-dark"
}, jg = {
  success: Br,
  danger: Ki,
  warning: jr,
  info: xf,
  custom: wf
}, Vg = (e) => {
  var { variant: t, customIcon: n, className: i = "" } = e, r = z(e, ["variant", "customIcon", "className"]);
  const a = jg[t];
  return a ? o.createElement("div", Object.assign({}, r, { className: y(pt.alertIcon, i) }), n || o.createElement(a, null)) : null;
}, ba = o.createContext(null), Hg = {
  name: "--pf-v5-c-alert__title--max-lines",
  value: "1",
  var: "var(--pf-v5-c-alert__title--max-lines)"
}, Ef = (e) => {
  var { "aria-label": t = "", variantLabel: n, onToggleExpand: i, isExpanded: r = !1 } = e, a = z(e, ["aria-label", "variantLabel", "onToggleExpand", "isExpanded"]);
  const { title: s, variantLabel: l } = o.useContext(ba);
  return o.createElement(
    ce,
    Object.assign({ variant: Me.plain, onClick: i, "aria-expanded": r, "aria-label": t === "" ? `Toggle ${n || l} alert: ${s}` : t }, a),
    o.createElement(
      "span",
      { className: y(pt.alertToggleIcon) },
      o.createElement(Ot, { "aria-hidden": "true" })
    )
  );
};
Ef.displayName = "AlertToggleExpandButton";
var Gn;
(function(e) {
  e.success = "success", e.danger = "danger", e.warning = "warning", e.info = "info", e.custom = "custom";
})(Gn || (Gn = {}));
const Va = (e) => {
  var { variant: t = Gn.custom, isInline: n = !1, isPlain: i = !1, isLiveRegion: r = !1, variantLabel: a = `${ga(t)} alert:`, actionClose: s, actionLinks: l, title: c, component: d = "h4", children: f = "", className: u = "", ouiaId: p, ouiaSafe: m = !0, timeout: g = !1, timeoutAnimation: v = 3e3, onTimeout: x = () => {
  }, truncateTitle: w = 0, tooltipPosition: _, customIcon: S, isExpandable: I = !1, toggleAriaLabel: E = `${ga(t)} alert details`, onMouseEnter: R = () => {
  }, onMouseLeave: k = () => {
  }, id: N } = e, M = z(e, ["variant", "isInline", "isPlain", "isLiveRegion", "variantLabel", "actionClose", "actionLinks", "title", "component", "children", "className", "ouiaId", "ouiaSafe", "timeout", "timeoutAnimation", "onTimeout", "truncateTitle", "tooltipPosition", "customIcon", "isExpandable", "toggleAriaLabel", "onMouseEnter", "onMouseLeave", "id"]);
  const $ = Gt(Va.displayName, p, m, t), D = o.createElement(
    o.Fragment,
    null,
    o.createElement("span", { className: "pf-v5-screen-reader" }, a),
    c
  ), O = o.useRef(null), L = d, j = o.useRef(), [C, P] = me(!1);
  o.useEffect(() => {
    if (!O.current || !w)
      return;
    O.current.style.setProperty(Hg.name, w.toString());
    const de = O.current && O.current.offsetHeight < O.current.scrollHeight;
    C !== de && P(de);
  }, [O, w, C]);
  const [G, B] = me(!1), [J, b] = me(!0), [F, K] = me(), [V, U] = me(), q = G && J && !F && !V;
  o.useEffect(() => {
    const de = g === !0 ? 8e3 : Number(g);
    if (de > 0) {
      const Ce = setTimeout(() => B(!0), de);
      return () => clearTimeout(Ce);
    }
  }, [g]), o.useEffect(() => {
    const de = () => {
      j.current && (j.current.contains(document.activeElement) ? (U(!0), b(!1)) : V && U(!1));
    };
    return document.addEventListener("focus", de, !0), () => document.removeEventListener("focus", de, !0);
  }, [V]), o.useEffect(() => {
    if (V === !1 || F === !1) {
      const de = setTimeout(() => b(!0), v);
      return () => clearTimeout(de);
    }
  }, [V, F, v]), o.useEffect(() => {
    q && x();
  }, [q, x]);
  const [W, X] = me(!1), te = () => {
    X(!W);
  }, ie = (de) => {
    K(!0), b(!1), R(de);
  }, Y = (de) => {
    K(!1), k(de);
  };
  if (q)
    return null;
  const oe = o.createElement(L, Object.assign({}, C && { tabIndex: 0 }, { ref: O, className: y(pt.alertTitle, w && pt.modifiers.truncate) }), D);
  return o.createElement(
    "div",
    Object.assign({ ref: j, className: y(pt.alert, n && pt.modifiers.inline, i && pt.modifiers.plain, I && pt.modifiers.expandable, W && pt.modifiers.expanded, pt.modifiers[t], u) }, $, r && {
      "aria-live": "polite",
      "aria-atomic": "false"
    }, { onMouseEnter: ie, onMouseLeave: Y, id: N }, M),
    I && o.createElement(
      ba.Provider,
      { value: { title: c, variantLabel: a } },
      o.createElement(
        "div",
        { className: y(pt.alertToggle) },
        o.createElement(Ef, { isExpanded: W, onToggleExpand: te, "aria-label": E })
      )
    ),
    o.createElement(Vg, { variant: t, customIcon: S }),
    C ? o.createElement(ft, { content: D, position: _ }, oe) : oe,
    s && o.createElement(
      ba.Provider,
      { value: { title: c, variantLabel: a } },
      o.createElement("div", { className: y(pt.alertAction) }, s)
    ),
    f && (!I || I && W) && o.createElement("div", { className: y(pt.alertDescription) }, f),
    l && o.createElement("div", { className: y(pt.alertActionGroup) }, l)
  );
};
Va.displayName = "Alert";
const Sf = (e) => {
  var { className: t, onClose: n = () => {
  }, "aria-label": i = "", variantLabel: r } = e, a = z(e, ["className", "onClose", "aria-label", "variantLabel"]);
  return o.createElement(ba.Consumer, null, ({ title: s, variantLabel: l }) => o.createElement(
    ce,
    Object.assign({ variant: Me.plain, onClick: n, "aria-label": i === "" ? `Close ${r || l} alert: ${s}` : i, className: t }, a),
    o.createElement(an, null)
  ));
};
Sf.displayName = "AlertActionCloseButton";
const xs = {
  alertGroup: "pf-v5-c-alert-group",
  alertGroupOverflowButton: "pf-v5-c-alert-group__overflow-button",
  modifiers: {
    toast: "pf-m-toast"
  }
}, kf = (e) => {
  var { className: t, children: n, isToast: i, isLiveRegion: r, onOverflowClick: a, overflowMessage: s } = e, l = z(e, ["className", "children", "isToast", "isLiveRegion", "onOverflowClick", "overflowMessage"]);
  return o.createElement(
    "ul",
    Object.assign({ role: "list", "aria-live": r ? "polite" : null, "aria-atomic": r ? !1 : null, className: y(xs.alertGroup, t, i ? xs.modifiers.toast : "") }, l),
    o.Children.toArray(n).map((c, d) => {
      var f;
      return o.createElement("li", { key: ((f = c.props) === null || f === void 0 ? void 0 : f.id) || d }, c);
    }),
    s && o.createElement(
      "li",
      null,
      o.createElement("button", { onClick: a, className: y(xs.alertGroupOverflowButton) }, s)
    )
  );
};
kf.displayName = "AlertGroupInline";
class Lf extends o.Component {
  constructor() {
    super(...arguments), this.state = {
      container: void 0
    };
  }
  componentDidMount() {
    const t = document.createElement("div"), n = this.getTargetElement();
    this.setState({ container: t }), n.appendChild(t);
  }
  componentWillUnmount() {
    const t = this.getTargetElement();
    this.state.container && t.removeChild(this.state.container);
  }
  getTargetElement() {
    const t = this.props.appendTo;
    return typeof t == "function" ? t() : t || document.body;
  }
  render() {
    const t = this.props, {
      className: n,
      children: i,
      isToast: r,
      isLiveRegion: a,
      onOverflowClick: s,
      overflowMessage: l,
      "aria-label": c,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      appendTo: d
    } = t, f = z(t, ["className", "children", "isToast", "isLiveRegion", "onOverflowClick", "overflowMessage", "aria-label", "appendTo"]), u = o.createElement(kf, Object.assign({ onOverflowClick: s, className: n, isToast: r, isLiveRegion: a, overflowMessage: l, "aria-label": c }, f), i);
    if (!this.props.isToast)
      return u;
    const p = this.state.container;
    return !ze || !p ? null : No.createPortal(u, p);
  }
}
Lf.displayName = "AlertGroup";
const Dn = {
  avatar: "pf-v5-c-avatar",
  modifiers: {
    light: "pf-m-light",
    dark: "pf-m-dark",
    sm: "pf-m-sm",
    md: "pf-m-md",
    lg: "pf-m-lg",
    xl: "pf-m-xl"
  }
}, If = (e) => {
  var { className: t = "", src: n = "", alt: i, border: r, size: a } = e, s = z(e, ["className", "src", "alt", "border", "size"]);
  return o.createElement("img", Object.assign({ src: n, alt: i, className: y(Dn.avatar, Dn.modifiers[a], r === "light" && Dn.modifiers.light, r === "dark" && Dn.modifiers.dark, t) }, s));
};
If.displayName = "Avatar";
const Ug = {
  name: "AngleUpIcon",
  height: 512,
  width: 320,
  svgPath: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z",
  yOffset: 0,
  xOffset: 0
}, zg = pe(Ug), ws = {
  breadcrumb: "pf-v5-c-breadcrumb",
  breadcrumbDropdown: "pf-v5-c-breadcrumb__dropdown",
  breadcrumbHeading: "pf-v5-c-breadcrumb__heading",
  breadcrumbItem: "pf-v5-c-breadcrumb__item",
  breadcrumbItemDivider: "pf-v5-c-breadcrumb__item-divider",
  breadcrumbLink: "pf-v5-c-breadcrumb__link",
  breadcrumbList: "pf-v5-c-breadcrumb__list",
  dirRtl: "pf-v5-m-dir-rtl",
  dropdownToggle: "pf-v5-c-dropdown__toggle",
  modifiers: {
    current: "pf-m-current"
  }
}, it = {
  formControl: "pf-v5-c-form-control",
  formControlIcon: "pf-v5-c-form-control__icon",
  formControlToggleIcon: "pf-v5-c-form-control__toggle-icon",
  formControlUtilities: "pf-v5-c-form-control__utilities",
  modifiers: {
    readonly: "pf-m-readonly",
    success: "pf-m-success",
    warning: "pf-m-warning",
    error: "pf-m-error",
    plain: "pf-m-plain",
    expanded: "pf-m-expanded",
    disabled: "pf-m-disabled",
    icon: "pf-m-icon",
    placeholder: "pf-m-placeholder",
    resizeVertical: "pf-m-resize-vertical",
    resizeHorizontal: "pf-m-resize-horizontal",
    resizeBoth: "pf-m-resize-both",
    status: "pf-m-status"
  },
  themeDark: "pf-v5-theme-dark"
}, Wg = {
  success: Br,
  error: Ki,
  warning: jr
}, no = (e) => {
  var { status: t, customIcon: n, className: i } = e, r = z(e, ["status", "customIcon", "className"]);
  const a = t && Wg[t];
  return o.createElement("span", Object.assign({ className: y(it.formControlIcon, t && it.modifiers.status, i) }, r), n || o.createElement(a, null));
};
var io;
(function(e) {
  e.text = "text", e.date = "date", e.datetimeLocal = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url";
})(io || (io = {}));
var lc;
(function(e) {
  e.default = "default", e.plain = "plain";
})(lc || (lc = {}));
class Vr extends o.Component {
  constructor(t) {
    super(t), this.inputRef = o.createRef(), this.observer = () => {
    }, this.handleChange = (n) => {
      this.props.onChange && this.props.onChange(n, n.currentTarget.value);
    }, this.handleResize = () => {
      const n = this.props.innerRef || this.inputRef;
      n && n.current && uh(n.current, String(this.props.value));
    }, this.restoreText = () => {
      const n = this.props.innerRef || this.inputRef;
      n.current.value = String(this.props.value), n.current.scrollLeft = n.current.scrollWidth;
    }, this.onFocus = (n) => {
      const { isLeftTruncated: i, isStartTruncated: r, onFocus: a } = this.props;
      (i || r) && this.restoreText(), a && a(n);
    }, this.onBlur = (n) => {
      const { isLeftTruncated: i, isStartTruncated: r, onBlur: a } = this.props;
      (i || r) && this.handleResize(), a && a(n);
    }, this.sanitizeInputValue = (n) => typeof n == "string" ? n.replace(/\n/g, " ") : n, !t.id && !t["aria-label"] && !t["aria-labelledby"] && console.error("Text input:", "Text input requires either an id or aria-label to be specified"), this.state = {
      ouiaStateId: Ct(Vr.displayName)
    };
  }
  componentDidMount() {
    if (this.props.isLeftTruncated || this.props.isStartTruncated) {
      const t = this.props.innerRef || this.inputRef;
      this.observer = Fi(t.current, this.handleResize, !0), this.handleResize();
    }
  }
  componentWillUnmount() {
    (this.props.isLeftTruncated || this.props.isStartTruncated) && this.observer();
  }
  render() {
    const t = this.props, {
      innerRef: n,
      className: i,
      type: r,
      value: a,
      placeholder: s,
      validated: l,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange: c,
      onFocus: d,
      onBlur: f,
      isLeftTruncated: u,
      isStartTruncated: p,
      isExpanded: m,
      expandedProps: g,
      readOnly: v,
      readOnlyVariant: x,
      isRequired: w,
      isDisabled: _,
      customIcon: S,
      ouiaId: I,
      ouiaSafe: E
    } = t, R = z(t, ["innerRef", "className", "type", "value", "placeholder", "validated", "onChange", "onFocus", "onBlur", "isLeftTruncated", "isStartTruncated", "isExpanded", "expandedProps", "readOnly", "readOnlyVariant", "isRequired", "isDisabled", "customIcon", "ouiaId", "ouiaSafe"]), k = ["success", "error", "warning"].includes(l), N = g ? { "aria-expanded": g?.isExpanded, "aria-controls": g?.ariaControls, role: "combobox" } : {};
    return o.createElement(
      "span",
      { className: y(it.formControl, x && it.modifiers.readonly, x === "plain" && it.modifiers.plain, _ && it.modifiers.disabled, (m || g?.isExpanded) && it.modifiers.expanded, S && it.modifiers.icon, k && it.modifiers[l], i) },
      o.createElement("input", Object.assign({}, R, { onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.handleChange, type: r, value: this.sanitizeInputValue(a), "aria-invalid": R["aria-invalid"] ? R["aria-invalid"] : l === zn.error }, N, { required: w, disabled: _, readOnly: !!x || v, ref: n || this.inputRef, placeholder: s }, rt($t.displayName, I !== void 0 ? I : this.state.ouiaStateId, E))),
      (S || k) && o.createElement(
        "span",
        { className: y(it.formControlUtilities) },
        S && o.createElement(no, { customIcon: S }),
        k && o.createElement(no, { status: l })
      )
    );
  }
}
Vr.displayName = "TextInputBase";
Vr.defaultProps = {
  "aria-label": null,
  isRequired: !1,
  validated: "default",
  isDisabled: !1,
  isExpanded: !1,
  type: io.text,
  isLeftTruncated: !1,
  isStartTruncated: !1,
  onChange: () => {
  },
  ouiaSafe: !0
};
const $t = o.forwardRef((e, t) => o.createElement(Vr, Object.assign({}, e, { innerRef: t })));
$t.displayName = "TextInput";
const ge = {
  breadcrumb: "pf-v5-c-breadcrumb",
  check: "pf-v5-c-check",
  dirRtl: "pf-v5-m-dir-rtl",
  divider: "pf-v5-c-divider",
  menu: "pf-v5-c-menu",
  menuBreadcrumb: "pf-v5-c-menu__breadcrumb",
  menuContent: "pf-v5-c-menu__content",
  menuFooter: "pf-v5-c-menu__footer",
  menuGroup: "pf-v5-c-menu__group",
  menuGroupTitle: "pf-v5-c-menu__group-title",
  menuHeader: "pf-v5-c-menu__header",
  menuItem: "pf-v5-c-menu__item",
  menuItemAction: "pf-v5-c-menu__item-action",
  menuItemActionIcon: "pf-v5-c-menu__item-action-icon",
  menuItemCheck: "pf-v5-c-menu__item-check",
  menuItemDescription: "pf-v5-c-menu__item-description",
  menuItemExternalIcon: "pf-v5-c-menu__item-external-icon",
  menuItemIcon: "pf-v5-c-menu__item-icon",
  menuItemMain: "pf-v5-c-menu__item-main",
  menuItemSelectIcon: "pf-v5-c-menu__item-select-icon",
  menuItemText: "pf-v5-c-menu__item-text",
  menuItemToggleIcon: "pf-v5-c-menu__item-toggle-icon",
  menuList: "pf-v5-c-menu__list",
  menuListItem: "pf-v5-c-menu__list-item",
  menuSearch: "pf-v5-c-menu__search",
  modifiers: {
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    flyout: "pf-m-flyout",
    top: "pf-m-top",
    left: "pf-m-left",
    drilldown: "pf-m-drilldown",
    drilledIn: "pf-m-drilled-in",
    currentPath: "pf-m-current-path",
    static: "pf-m-static",
    plain: "pf-m-plain",
    scrollable: "pf-m-scrollable",
    nav: "pf-m-nav",
    focus: "pf-m-focus",
    disabled: "pf-m-disabled",
    ariaDisabled: "pf-m-aria-disabled",
    load: "pf-m-load",
    loading: "pf-m-loading",
    danger: "pf-m-danger",
    selected: "pf-m-selected",
    favorite: "pf-m-favorite",
    favorited: "pf-m-favorited"
  },
  themeDark: "pf-v5-theme-dark"
}, cc = {
  badge: "pf-v5-c-badge",
  check: "pf-v5-c-check",
  divider: "pf-v5-c-divider",
  dropdown: "pf-v5-c-dropdown",
  dropdownGroup: "pf-v5-c-dropdown__group",
  dropdownGroupTitle: "pf-v5-c-dropdown__group-title",
  dropdownMenu: "pf-v5-c-dropdown__menu",
  dropdownMenuItem: "pf-v5-c-dropdown__menu-item",
  dropdownMenuItemDescription: "pf-v5-c-dropdown__menu-item-description",
  dropdownMenuItemIcon: "pf-v5-c-dropdown__menu-item-icon",
  dropdownMenuItemMain: "pf-v5-c-dropdown__menu-item-main",
  dropdownToggle: "pf-v5-c-dropdown__toggle",
  dropdownToggleButton: "pf-v5-c-dropdown__toggle-button",
  dropdownToggleCheck: "pf-v5-c-dropdown__toggle-check",
  dropdownToggleIcon: "pf-v5-c-dropdown__toggle-icon",
  dropdownToggleImage: "pf-v5-c-dropdown__toggle-image",
  dropdownToggleProgress: "pf-v5-c-dropdown__toggle-progress",
  dropdownToggleText: "pf-v5-c-dropdown__toggle-text",
  menu: "pf-v5-c-menu",
  modifiers: {
    fullHeight: "pf-m-full-height",
    expanded: "pf-m-expanded",
    action: "pf-m-action",
    disabled: "pf-m-disabled",
    plain: "pf-m-plain",
    text: "pf-m-text",
    splitButton: "pf-m-split-button",
    primary: "pf-m-primary",
    inProgress: "pf-m-in-progress",
    active: "pf-m-active",
    secondary: "pf-m-secondary",
    top: "pf-m-top",
    static: "pf-m-static",
    alignRight: "pf-m-align-right",
    alignLeft: "pf-m-align-left",
    alignRightOnSm: "pf-m-align-right-on-sm",
    alignLeftOnSm: "pf-m-align-left-on-sm",
    alignRightOnMd: "pf-m-align-right-on-md",
    alignLeftOnMd: "pf-m-align-left-on-md",
    alignRightOnLg: "pf-m-align-right-on-lg",
    alignLeftOnLg: "pf-m-align-left-on-lg",
    alignRightOnXl: "pf-m-align-right-on-xl",
    alignLeftOnXl: "pf-m-align-left-on-xl",
    alignRightOn_2xl: "pf-m-align-right-on-2xl",
    alignLeftOn_2xl: "pf-m-align-left-on-2xl",
    ariaDisabled: "pf-m-aria-disabled",
    icon: "pf-m-icon",
    description: "pf-m-description"
  },
  spinner: "pf-v5-c-spinner",
  themeDark: "pf-v5-theme-dark"
}, ci = o.createContext({
  menuId: null,
  parentMenu: null,
  onActionClick: () => null,
  onSelect: () => null,
  activeItemId: null,
  selected: null,
  drilledInMenus: [],
  drilldownItemPath: [],
  onDrillIn: null,
  onDrillOut: null,
  onGetMenuHeight: () => null,
  flyoutRef: null,
  setFlyoutRef: () => null,
  disableHover: !1,
  role: "menu"
}), Nf = o.createContext({
  itemId: null,
  isDisabled: !1
});
class Ha extends o.Component {
  constructor(t) {
    super(t), this.menuRef = o.createRef(), this.activeMenu = null, this.state = {
      ouiaStateId: Ct(di.displayName),
      transitionMoveTarget: null,
      flyoutRef: null,
      disableHover: !1,
      currentDrilldownMenuId: this.props.id
    }, this.handleDrilldownTransition = (n) => {
      const i = this.menuRef.current;
      if (!(!i || i !== n.target.closest(`.${ge.menu}`) && !Array.from(i.getElementsByClassName(ge.menu)).includes(n.target.closest(`.${ge.menu}`))))
        if (this.state.transitionMoveTarget)
          this.state.transitionMoveTarget.focus(), this.setState({ transitionMoveTarget: null });
        else {
          const r = i.querySelector("#" + this.props.activeMenu) || i || null, a = r.getElementsByTagName("UL");
          if (a.length === 0)
            return;
          const s = Array.from(a[0].children);
          if (!this.state.currentDrilldownMenuId || r.id !== this.state.currentDrilldownMenuId)
            this.setState({ currentDrilldownMenuId: r.id });
          else
            return;
          const l = s.filter((c) => !(c.classList.contains("pf-m-disabled") || c.classList.contains(ge.divider)))[0].firstChild;
          l.focus(), l.tabIndex = 0;
        }
    }, this.handleExtraKeys = (n) => {
      const i = this.props.containsDrilldown, r = document.activeElement;
      if (n.target.closest(`.${ge.menu}`) !== this.activeMenu && !n.target.classList.contains(ws.breadcrumbLink) && (this.activeMenu = n.target.closest(`.${ge.menu}`), this.setState({ disableHover: !0 })), n.target.tagName === "INPUT")
        return;
      const a = this.activeMenu, s = n.key, l = r.classList.contains(ws.breadcrumbLink) || r.classList.contains(cc.dropdownToggle);
      if (s === " " || s === "Enter") {
        if (n.preventDefault(), i && !l) {
          if (r.closest("li").classList.contains("pf-m-current-path") && a.parentElement.tagName === "LI")
            r.tabIndex = -1, a.parentElement.firstChild.tabIndex = 0, this.setState({ transitionMoveTarget: a.parentElement.firstChild });
          else if (r.nextElementSibling && r.nextElementSibling.classList.contains(ge.menu)) {
            const d = Array.from(r.nextElementSibling.getElementsByTagName("UL")[0].children).filter((f) => !(f.classList.contains("pf-m-disabled") || f.classList.contains(ge.divider)));
            r.tabIndex = -1, d[0].firstChild.tabIndex = 0, this.setState({ transitionMoveTarget: d[0].firstChild });
          }
        }
        document.activeElement.click();
      }
    }, this.createNavigableElements = () => this.props.containsDrilldown ? this.activeMenu ? Array.from(this.activeMenu.getElementsByTagName("UL")[0].children).filter((i) => !(i.classList.contains("pf-m-disabled") || i.classList.contains(ge.divider))) : [] : this.menuRef.current ? Array.from(this.menuRef.current.getElementsByTagName("LI")).filter((i) => !(i.classList.contains("pf-m-disabled") || i.classList.contains(ge.divider))) : [], t.innerRef && (this.menuRef = t.innerRef);
  }
  allowTabFirstItem() {
    const t = this.menuRef.current;
    if (t) {
      const n = t.querySelector("ul button:not(:disabled), ul a:not(:disabled)");
      n && (n.tabIndex = 0);
    }
  }
  componentDidMount() {
    this.context && this.setState({ disableHover: this.context.disableHover }), ze && window.addEventListener("transitionend", this.props.isRootMenu ? this.handleDrilldownTransition : null), this.allowTabFirstItem();
  }
  componentWillUnmount() {
    ze && window.removeEventListener("transitionend", this.handleDrilldownTransition);
  }
  componentDidUpdate(t) {
    t.children !== this.props.children && this.allowTabFirstItem();
  }
  render() {
    const t = this.props, {
      id: n,
      children: i,
      className: r,
      onSelect: a,
      selected: s = null,
      onActionClick: l,
      ouiaId: c,
      ouiaSafe: d,
      containsFlyout: f,
      isNavFlyout: u,
      containsDrilldown: p,
      isMenuDrilledIn: m,
      isPlain: g,
      isScrollable: v,
      drilldownItemPath: x,
      drilledInMenus: w,
      onDrillIn: _,
      onDrillOut: S,
      onGetMenuHeight: I,
      parentMenu: E = null,
      activeItemId: R = null,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      innerRef: k,
      isRootMenu: N,
      activeMenu: M,
      role: $
    } = t, D = z(t, ["id", "children", "className", "onSelect", "selected", "onActionClick", "ouiaId", "ouiaSafe", "containsFlyout", "isNavFlyout", "containsDrilldown", "isMenuDrilledIn", "isPlain", "isScrollable", "drilldownItemPath", "drilledInMenus", "onDrillIn", "onDrillOut", "onGetMenuHeight", "parentMenu", "activeItemId", "innerRef", "isRootMenu", "activeMenu", "role"]), O = m || w && w.includes(n) || !1;
    return o.createElement(
      ci.Provider,
      { value: {
        menuId: n,
        parentMenu: E || n,
        onSelect: a,
        onActionClick: l,
        activeItemId: R,
        selected: s,
        drilledInMenus: w,
        drilldownItemPath: x,
        onDrillIn: _,
        onDrillOut: S,
        onGetMenuHeight: I,
        flyoutRef: this.state.flyoutRef,
        setFlyoutRef: (L) => this.setState({ flyoutRef: L }),
        disableHover: this.state.disableHover,
        role: $
      } },
      N && o.createElement(Vo, { containerRef: this.menuRef || null, additionalKeyHandler: this.handleExtraKeys, createNavigableElements: this.createNavigableElements, isActiveElement: (L) => document.activeElement.closest("li") === L || // if element is a basic MenuItem
      document.activeElement.parentElement === L || document.activeElement.closest(`.${ge.menuSearch}`) === L || // if element is a MenuSearch
      document.activeElement.closest("ol") && document.activeElement.closest("ol").firstChild === L, getFocusableElement: (L) => {
        var j, C;
        return L?.tagName === "DIV" && L.querySelector("input") || // for MenuSearchInput
        ((j = L.firstChild) === null || j === void 0 ? void 0 : j.tagName) === "LABEL" && L.querySelector("input") || // for MenuItem checkboxes
        ((C = L.firstChild) === null || C === void 0 ? void 0 : C.tagName) === "DIV" && L.querySelector("a, button, input") || // For aria-disabled element that is rendered inside a div with "display: contents" styling
        L.firstChild;
      }, noHorizontalArrowHandling: document.activeElement && (document.activeElement.classList.contains(ws.breadcrumbLink) || document.activeElement.classList.contains(cc.dropdownToggle) || document.activeElement.tagName === "INPUT"), noEnterHandling: !0, noSpaceHandling: !0 }),
      o.createElement("div", Object.assign({ id: n, className: y(ge.menu, g && ge.modifiers.plain, v && ge.modifiers.scrollable, f && ge.modifiers.flyout, u && ge.modifiers.nav, p && ge.modifiers.drilldown, O && ge.modifiers.drilledIn, r), ref: this.menuRef }, rt(di.displayName, c !== void 0 ? c : this.state.ouiaStateId, d), D), i)
    );
  }
}
Ha.displayName = "Menu";
Ha.contextType = ci;
Ha.defaultProps = {
  ouiaSafe: !0,
  isRootMenu: !0,
  isPlain: !1,
  isScrollable: !1,
  role: "menu"
};
const di = o.forwardRef((e, t) => o.createElement(Ha, Object.assign({}, e, { innerRef: t })));
di.displayName = "Menu";
const Gg = {
  name: "--pf-v5-c-menu__content--Height",
  value: "auto",
  var: "var(--pf-v5-c-menu__content--Height)"
}, Kg = {
  name: "--pf-v5-c-menu__content--MaxHeight",
  value: "18.75rem",
  var: "var(--pf-v5-c-menu__content--MaxHeight)"
}, Hr = o.forwardRef((e, t) => {
  const { getHeight: n, children: i, menuHeight: r, maxMenuHeight: a } = e, s = z(e, ["getHeight", "children", "menuHeight", "maxMenuHeight"]), l = o.createRef(), c = (d, f, u) => {
    if (d) {
      let p = d.clientHeight, m = null, g = d.closest(`.${ge.menuList}`);
      for (; g !== null && g.nodeType === 1; )
        g.classList.contains(ge.menuList) && (m = g), g = g.parentElement;
      if (m) {
        const v = getComputedStyle(m), x = parseFloat(v.getPropertyValue("padding-top").replace(/px/g, "")) + parseFloat(v.getPropertyValue("padding-bottom").replace(/px/g, "")) + parseFloat(getComputedStyle(m.parentElement).getPropertyValue("border-bottom-width").replace(/px/g, ""));
        p = p + x;
      }
      u && u(f, p), n && n(p.toString());
    }
    return t || l;
  };
  return o.createElement(ci.Consumer, null, ({ menuId: d, onGetMenuHeight: f }) => o.createElement("div", Object.assign({}, s, { className: y(ge.menuContent, e.className), ref: (u) => c(u, d, f), style: Object.assign(Object.assign({}, r && { [Gg.name]: r }), a && { [Kg.name]: a }) }), i));
});
Hr.displayName = "MenuContent";
const Tf = (e) => {
  var { children: t, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({}, i, { className: y(ge.menuFooter, n) }), t);
};
Tf.displayName = "MenuFooter";
const Xg = {
  name: "--pf-v5-c-menu--m-flyout__menu--top-offset",
  value: "0px",
  var: "var(--pf-v5-c-menu--m-flyout__menu--top-offset)"
}, qg = {
  name: "--pf-v5-c-menu--m-flyout__menu--m-left--right-offset",
  value: "0px",
  var: "var(--pf-v5-c-menu--m-flyout__menu--m-left--right-offset)"
}, Jg = {
  name: "--pf-v5-c-menu--m-flyout__menu--left-offset",
  value: "0px",
  var: "var(--pf-v5-c-menu--m-flyout__menu--left-offset)"
}, Yg = {
  name: "ExternalLinkAltIcon",
  height: 512,
  width: 512,
  svgPath: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
  yOffset: 0,
  xOffset: 0
}, zo = pe(Yg), Zg = {
  name: "AngleLeftIcon",
  height: 512,
  width: 256,
  svgPath: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
  yOffset: 0,
  xOffset: 0
}, Ua = pe(Zg), Qg = {
  name: "CheckIcon",
  height: 512,
  width: 512,
  svgPath: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
  yOffset: 0,
  xOffset: 0
}, Rf = pe(Qg), un = {
  check: "pf-v5-c-check",
  checkBody: "pf-v5-c-check__body",
  checkDescription: "pf-v5-c-check__description",
  checkInput: "pf-v5-c-check__input",
  checkLabel: "pf-v5-c-check__label",
  checkLabelRequired: "pf-v5-c-check__label-required",
  modifiers: {
    standalone: "pf-m-standalone",
    disabled: "pf-m-disabled"
  }
}, Af = () => {
};
class Ht extends o.Component {
  constructor(t) {
    super(t), this.handleChange = (n) => {
      this.props.onChange(n, n.currentTarget.checked);
    }, this.state = {
      ouiaStateId: Ct(Ht.displayName)
    };
  }
  render() {
    const t = this.props, { "aria-label": n, className: i, inputClassName: r, onChange: a, isLabelWrapped: s, isLabelBeforeButton: l, isValid: c, isDisabled: d, isRequired: f, isChecked: u, label: p, checked: m, defaultChecked: g, description: v, body: x, ouiaId: w, ouiaSafe: _, component: S } = t, I = z(t, ["aria-label", "className", "inputClassName", "onChange", "isLabelWrapped", "isLabelBeforeButton", "isValid", "isDisabled", "isRequired", "isChecked", "label", "checked", "defaultChecked", "description", "body", "ouiaId", "ouiaSafe", "component"]);
    I.id || console.error("Checkbox:", "id is required to make input accessible");
    const E = {};
    ([!0, !1].includes(m) || u === !0) && (E.checked = m || u), a !== Af && (E.checked = u), [!1, !0].includes(g) && (E.defaultChecked = g);
    const R = o.createElement("input", Object.assign({}, I, { className: y(un.checkInput, r), type: "checkbox", onChange: this.handleChange, "aria-invalid": !c, "aria-label": n, disabled: d, required: f, ref: (D) => D && (D.indeterminate = u === null) }, E, rt(Ht.displayName, w !== void 0 ? w : this.state.ouiaStateId, _))), k = s && !S || S === "label", N = k ? "span" : "label", M = p ? o.createElement(
      N,
      { className: y(un.checkLabel, d && un.modifiers.disabled), htmlFor: k ? void 0 : I.id },
      p,
      f && o.createElement("span", { className: y(un.checkLabelRequired), "aria-hidden": "true" }, rf)
    ) : null, $ = S ?? (k ? "label" : "div");
    return E.checked = E.checked === null ? !1 : E.checked, o.createElement(
      $,
      { className: y(un.check, !p && un.modifiers.standalone, i), htmlFor: k ? I.id : void 0 },
      l ? o.createElement(
        o.Fragment,
        null,
        M,
        R
      ) : o.createElement(
        o.Fragment,
        null,
        R,
        M
      ),
      v && o.createElement("span", { className: y(un.checkDescription) }, v),
      x && o.createElement("span", { className: y(un.checkBody) }, x)
    );
  }
}
Ht.displayName = "Checkbox";
Ht.defaultProps = {
  className: "",
  isLabelWrapped: !1,
  isValid: !0,
  isDisabled: !1,
  isRequired: !1,
  isChecked: !1,
  onChange: Af,
  ouiaSafe: !0
};
const eb = {
  name: "StarIcon",
  height: 512,
  width: 576,
  svgPath: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
  yOffset: 0,
  xOffset: 0
}, Wo = pe(eb), tb = (e) => {
  var { className: t = "", icon: n, onClick: i, "aria-label": r, isFavorited: a = null, isDisabled: s, actionId: l, innerRef: c } = e, d = z(e, ["className", "icon", "onClick", "aria-label", "isFavorited", "isDisabled", "actionId", "innerRef"]);
  return o.createElement(ci.Consumer, null, ({ onActionClick: f }) => o.createElement(Nf.Consumer, null, ({ itemId: u, isDisabled: p }) => {
    const m = (g) => {
      i && i(g), f && f(g, u, l);
    };
    return o.createElement(
      "button",
      Object.assign({ className: y(ge.menuItemAction, a !== null && ge.modifiers.favorite, a && ge.modifiers.favorited, t), "aria-label": r, onClick: m }, (s === !0 || p === !0) && { disabled: !0 }, { ref: c, tabIndex: -1 }, d),
      o.createElement("span", { className: y(ge.menuItemActionIcon) }, n === "favorites" || a !== null ? o.createElement(Wo, { "aria-hidden": !0 }) : n)
    );
  }));
}, Pf = o.forwardRef((e, t) => o.createElement(tb, Object.assign({}, e, { innerRef: t })));
Pf.displayName = "MenuItemAction";
const dc = o.createContext({
  direction: "right"
}), nb = (e) => {
  var { children: t, className: n, itemId: i = null, to: r, hasCheckbox: a = !1, isActive: s = null, isFavorited: l = null, isLoadButton: c = !1, isLoading: d = !1, flyoutMenu: f, direction: u, description: p = null, onClick: m = () => {
  }, component: g = "button", isDisabled: v = !1, isAriaDisabled: x = !1, isExternalLink: w = !1, isSelected: _ = null, isFocused: S, isDanger: I = !1, icon: E, actions: R, onShowFlyout: k, drilldownMenu: N, isOnPath: M, innerRef: $, id: D, "aria-label": O, tooltipProps: L, rel: j, target: C, download: P } = e, G = z(e, ["children", "className", "itemId", "to", "hasCheckbox", "isActive", "isFavorited", "isLoadButton", "isLoading", "flyoutMenu", "direction", "description", "onClick", "component", "isDisabled", "isAriaDisabled", "isExternalLink", "isSelected", "isFocused", "isDanger", "icon", "actions", "onShowFlyout", "drilldownMenu", "isOnPath", "innerRef", "id", "aria-label", "tooltipProps", "rel", "target", "download"]);
  const { menuId: B, parentMenu: J, onSelect: b, onActionClick: F, activeItemId: K, selected: V, drilldownItemPath: U, onDrillIn: q, onDrillOut: W, flyoutRef: X, setFlyoutRef: te, disableHover: ie, role: Y } = o.useContext(ci);
  let oe = r ? "a" : g;
  a && !r && (oe = "label");
  const [de, Ce] = o.useState(null), Oe = o.useContext(dc), [Te, De] = o.useState(Oe.direction), Le = o.useRef(), T = Le === X, A = f !== void 0, H = (ue) => {
    !T && ue ? te(Le) : T && !ue && te(null), k && ue && k();
  };
  Sr(() => {
    if (A && Le.current && ze) {
      const ue = Le.current.lastElementChild;
      if (ue && ue.classList.contains(ge.menu)) {
        const Ie = Le.current.getClientRects()[0], Ue = ue.getClientRects()[0];
        if (Ie && Ue) {
          const _t = Ie.x - Ue.width, ln = window.innerWidth - Ie.x - Ie.width - Ue.width;
          let Nn = Te;
          ln < 0 && Nn !== "left" ? (De("left"), Nn = "left") : _t < 0 && Nn !== "right" && (De("right"), Nn = "right");
          let nr = 0;
          _t < 0 && ln < 0 && (nr = Nn === "right" ? -ln : -_t), Nn === "left" ? (ue.classList.add(ge.modifiers.left), ue.style.setProperty(qg.name, `-${nr}px`)) : ue.style.setProperty(Jg.name, `-${nr}px`);
          const ir = window.innerHeight - Ie.y - Ue.height;
          window.innerHeight - Ue.height < 0 && ir < 0 || ir < 0 && ue.style.setProperty(Xg.name, `${ir}px`);
        }
      }
    }
  }, [T, f]), o.useEffect(() => {
    De(Oe.direction);
  }, [Oe]), o.useEffect(() => {
    if (de)
      if (T) {
        const ue = de.nextElementSibling;
        Array.from(ue.getElementsByTagName("UL")[0].children).filter((Ue) => !(Ue.classList.contains("pf-m-disabled") || Ue.classList.contains(ge.divider)))[0].firstChild.focus();
      } else
        de.focus();
  }, [T, de]);
  const ee = (ue) => {
    const Ie = ue.key, Ue = ue.target, _t = ue.type;
    (Ie === " " || Ie === "Enter" || Ie === "ArrowRight" || _t === "click") && (ue.stopPropagation(), ue.preventDefault(), T || (H(!0), Ce(Ue))), (Ie === "Escape" || Ie === "ArrowLeft") && T && (ue.stopPropagation(), H(!1));
  }, ne = (ue, Ie) => {
    x || (Ie && Ie(ue, i), m && m(ue));
  }, Q = M && M || U && U.includes(i) || !1;
  let le;
  u && (u === "down" ? le = (ue) => q && q(ue, B, typeof N == "function" ? N().props.id : N.props.id, i) : le = (ue) => W && W(ue, J, i));
  let ae = {};
  oe === "a" ? ae = {
    href: r,
    "aria-disabled": v || x ? !0 : null,
    // prevent invalid 'disabled' attribute on <a> tags
    disabled: null,
    target: w ? "_blank" : C,
    rel: j,
    download: P
  } : oe === "button" && (ae = {
    type: "button",
    "aria-disabled": x ? !0 : null
  }), M ? ae["aria-expanded"] = !0 : A && (ae["aria-haspopup"] = "menu", ae["aria-expanded"] = T);
  const ve = () => s !== null ? s ? "page" : null : i !== null && K !== null ? i === K : null, ye = () => _ !== null ? _ : V !== null && i !== null ? Array.isArray(V) && V.includes(i) || i === V : !1, he = () => {
    ie || (A ? H(!0) : te(null));
  };
  o.useEffect(() => {
    if (S && Le.current) {
      const ue = Le.current, Ie = ue.parentElement;
      if (Ie) {
        const Ue = ue.offsetTop - Ie.offsetTop < Ie.scrollTop, _t = ue.offsetTop - Ie.offsetTop + ue.clientHeight;
        (Ue || _t) && ue.scrollIntoView({ behavior: "auto", block: "nearest" });
      }
    }
  }, [S]);
  const Ee = Y === "listbox", We = o.createElement(
    o.Fragment,
    null,
    o.createElement(sn, null, (ue) => o.createElement(
      oe,
      Object.assign({ id: D, tabIndex: -1, className: y(ge.menuItem, ye() && !a && ge.modifiers.selected, n), "aria-current": ve() }, !a && { disabled: v, "aria-label": O }, !a && !f && { role: Ee ? "option" : "menuitem" }, !a && !f && Ee && { "aria-selected": ye() }, { ref: $ }, !a && {
        onClick: (Ie) => {
          x ? Ie.preventDefault() : (ne(Ie, b), le && le(Ie), f && ee(Ie));
        }
      }, a && { htmlFor: ue }, ae),
      o.createElement(
        "span",
        { className: y(ge.menuItemMain) },
        u === "up" && o.createElement(
          "span",
          { className: y(ge.menuItemToggleIcon) },
          o.createElement(Ua, { "aria-hidden": !0 })
        ),
        E && o.createElement("span", { className: y(ge.menuItemIcon) }, E),
        a && o.createElement(
          "span",
          { className: y(ge.menuItemCheck) },
          o.createElement(Ht, { id: ue, component: "span", isChecked: _ || !1, onChange: (Ie) => ne(Ie, b), isDisabled: v, "aria-disabled": x })
        ),
        o.createElement("span", { className: y(ge.menuItemText) }, t),
        w && o.createElement(
          "span",
          { className: y(ge.menuItemExternalIcon) },
          o.createElement(zo, { "aria-hidden": !0 })
        ),
        (f || u === "down") && o.createElement(
          "span",
          { className: y(ge.menuItemToggleIcon) },
          o.createElement(Ot, { "aria-hidden": !0 })
        ),
        ye() && o.createElement(
          "span",
          { className: y(ge.menuItemSelectIcon) },
          o.createElement(Rf, { "aria-hidden": !0 })
        )
      ),
      p && u !== "up" && o.createElement(
        "span",
        { className: y(ge.menuItemDescription) },
        o.createElement("span", null, p)
      )
    )),
    T && o.createElement(
      ci.Provider,
      { value: { disableHover: ie } },
      o.createElement(dc.Provider, { value: { direction: Te } }, f)
    ),
    typeof N == "function" ? N() : N,
    o.createElement(
      Nf.Provider,
      { value: { itemId: i, isDisabled: v } },
      R,
      l !== null && o.createElement(Pf, { icon: "favorites", isFavorited: l, "aria-label": l ? "starred" : "not starred", onClick: (ue) => F(ue, i), tabIndex: -1, actionId: "fav" })
    )
  );
  return o.createElement("li", Object.assign({ className: y(ge.menuListItem, v && ge.modifiers.disabled, x && ge.modifiers.ariaDisabled, Q && ge.modifiers.currentPath, c && ge.modifiers.load, d && ge.modifiers.loading, S && ge.modifiers.focus, I && ge.modifiers.danger, n), onMouseOver: () => {
    x || he();
  } }, f && !x && { onKeyDown: ee }, { ref: Le, role: a ? "menuitem" : "none" }, a && { "aria-label": O }, G), L ? o.createElement(ft, Object.assign({}, L), We) : We);
}, Ur = o.forwardRef((e, t) => o.createElement(nb, Object.assign({}, e, { innerRef: t })));
Ur.displayName = "MenuItem";
const zr = (e) => {
  var { children: t = null, className: n, isAriaMultiselectable: i = !1, "aria-label": r } = e, a = z(e, ["children", "className", "isAriaMultiselectable", "aria-label"]);
  const { role: s } = o.useContext(ci);
  return o.createElement("ul", Object.assign({ role: s }, s === "listbox" && { "aria-multiselectable": i }, { className: y(ge.menuList, n), "aria-label": r }, a), t);
};
zr.displayName = "MenuList";
const ib = (e) => {
  var { children: t, className: n, onSelect: i, isOpen: r, selected: a, toggle: s, shouldFocusToggleOnSelect: l = !1, shouldFocusFirstItemOnOpen: c = !0, onOpenChange: d, onOpenChangeKeys: f = ["Escape", "Tab"], isPlain: u, innerRef: p, zIndex: m = 9999, role: g = "listbox", popperProps: v, menuHeight: x, maxMenuHeight: w, isScrollable: _ } = e, S = z(e, ["children", "className", "onSelect", "isOpen", "selected", "toggle", "shouldFocusToggleOnSelect", "shouldFocusFirstItemOnOpen", "onOpenChange", "onOpenChangeKeys", "isPlain", "innerRef", "zIndex", "role", "popperProps", "menuHeight", "maxMenuHeight", "isScrollable"]);
  const I = re.useRef(), E = re.useRef(), R = p || I, k = typeof s == "function" || typeof s != "function" && !s.toggleRef ? E : s?.toggleRef;
  re.useEffect(() => {
    const M = (D) => {
      var O, L, j;
      r && d && (!((O = R.current) === null || O === void 0) && O.contains(D.target) || !((L = k.current) === null || L === void 0) && L.contains(D.target)) && f.includes(D.key) && (D.preventDefault(), d(!1), (j = k.current) === null || j === void 0 || j.focus());
    }, $ = (D) => {
      var O, L, j;
      r && c && (!((O = k.current) === null || O === void 0) && O.contains(D.target)) && setTimeout(() => {
        var C;
        const P = (C = R?.current) === null || C === void 0 ? void 0 : C.querySelector("li button:not(:disabled),li input:not(:disabled)");
        P && P.focus();
      }, 10), r && d && !(!((L = k?.current) === null || L === void 0) && L.contains(D.target)) && r && !(!((j = R.current) === null || j === void 0) && j.contains(D.target)) && d(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("click", $), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("click", $);
    };
  }, [r, R, k, d, f]);
  const N = re.createElement(
    di,
    Object.assign({ role: g, className: y(n), ref: R, onSelect: (M, $) => {
      i && i(M, $), l && k.current.focus();
    }, isPlain: u, selected: a, isScrollable: _ ?? (x !== void 0 || w !== void 0) }, rt(Kn.displayName, S.ouiaId !== void 0 ? S.ouiaId : Ct(Kn.displayName), S.ouiaSafe !== void 0 ? S.ouiaSafe : !0), S),
    re.createElement(Hr, { menuHeight: x, maxMenuHeight: w }, t)
  );
  return re.createElement(Ln, Object.assign({ trigger: typeof s == "function" ? s(k) : s.toggleNode, triggerRef: k, popper: N, popperRef: R, isVisible: r, zIndex: m }, v));
}, Kn = re.forwardRef((e, t) => re.createElement(ib, Object.assign({ innerRef: t }, e)));
Kn.displayName = "Select";
const Xi = (e) => {
  var { children: t, className: n, isAriaMultiselectable: i = !1 } = e, r = z(e, ["children", "className", "isAriaMultiselectable"]);
  return re.createElement(zr, Object.assign({ isAriaMultiselectable: i, className: y(n) }, r), t);
};
Xi.displayName = "SelectList";
const rb = (e) => {
  var { children: t, className: n, innerRef: i, value: r } = e, a = z(e, ["children", "className", "innerRef", "value"]);
  return re.createElement(Ur, Object.assign({ itemId: r, ref: i, className: y(n) }, a), t);
}, Wr = re.forwardRef((e, t) => re.createElement(rb, Object.assign({}, e, { innerRef: t })));
Wr.displayName = "SelectOption";
const Ve = {
  check: "pf-v5-c-check",
  checkInput: "pf-v5-c-check__input",
  menuToggle: "pf-v5-c-menu-toggle",
  menuToggleButton: "pf-v5-c-menu-toggle__button",
  menuToggleControls: "pf-v5-c-menu-toggle__controls",
  menuToggleCount: "pf-v5-c-menu-toggle__count",
  menuToggleIcon: "pf-v5-c-menu-toggle__icon",
  menuToggleStatusIcon: "pf-v5-c-menu-toggle__status-icon",
  menuToggleText: "pf-v5-c-menu-toggle__text",
  menuToggleToggleIcon: "pf-v5-c-menu-toggle__toggle-icon",
  modifiers: {
    primary: "pf-m-primary",
    secondary: "pf-m-secondary",
    expanded: "pf-m-expanded",
    plain: "pf-m-plain",
    text: "pf-m-text",
    fullHeight: "pf-m-full-height",
    disabled: "pf-m-disabled",
    typeahead: "pf-m-typeahead",
    splitButton: "pf-m-split-button",
    action: "pf-m-action",
    active: "pf-m-active",
    fullWidth: "pf-m-full-width",
    success: "pf-m-success",
    warning: "pf-m-warning",
    danger: "pf-m-danger"
  },
  textInputGroup: "pf-v5-c-text-input-group",
  themeDark: "pf-v5-theme-dark"
}, ab = {
  name: "CaretDownIcon",
  height: 512,
  width: 320,
  svgPath: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
  yOffset: 0,
  xOffset: 0
}, Mf = pe(ab);
var Vn;
(function(e) {
  e.success = "success", e.danger = "danger", e.warning = "warning";
})(Vn || (Vn = {}));
class Df extends o.Component {
  constructor() {
    super(...arguments), this.displayName = "MenuToggleBase", this.state = {
      ouiaStateId: Ct(yt.displayName, this.props.variant)
    };
  }
  render() {
    const t = this.props, { children: n, className: i, icon: r, badge: a, isExpanded: s, isDisabled: l, isFullHeight: c, isFullWidth: d, splitButtonOptions: f, variant: u, status: p, statusIcon: m, innerRef: g, onClick: v, "aria-label": x, ouiaId: w, ouiaSafe: _ } = t, S = z(t, ["children", "className", "icon", "badge", "isExpanded", "isDisabled", "isFullHeight", "isFullWidth", "splitButtonOptions", "variant", "status", "statusIcon", "innerRef", "onClick", "aria-label", "ouiaId", "ouiaSafe"]), I = u === "plain", E = u === "plainText", R = u === "typeahead", k = rt(yt.displayName, w ?? this.state.ouiaStateId, _);
    let N = m;
    if (!m)
      switch (p) {
        case Vn.success:
          N = o.createElement(Br, { "aria-hidden": "true" });
          break;
        case Vn.warning:
          N = o.createElement(jr, { "aria-hidden": "true" });
          break;
        case Vn.danger:
          N = o.createElement(Ki, { "aria-hidden": "true" });
          break;
      }
    const M = o.createElement(
      "span",
      { className: y(Ve.menuToggleControls) },
      p !== void 0 && o.createElement("span", { className: y(Ve.menuToggleStatusIcon) }, N),
      o.createElement(
        "span",
        { className: y(Ve.menuToggleToggleIcon) },
        o.createElement(Mf, { "aria-hidden": !0 })
      )
    ), $ = o.createElement(
      o.Fragment,
      null,
      r && o.createElement("span", { className: y(Ve.menuToggleIcon) }, r),
      R ? n : o.createElement("span", { className: y(Ve.menuToggleText) }, n),
      o.isValidElement(a) && o.createElement("span", { className: y(Ve.menuToggleCount) }, a),
      R ? o.createElement("button", Object.assign({ type: "button", className: y(Ve.menuToggleButton), "aria-expanded": s, onClick: v, "aria-label": x || "Menu toggle", tabIndex: -1 }, k), M) : M
    ), D = y(Ve.menuToggle, s && Ve.modifiers.expanded, u === "primary" && Ve.modifiers.primary, u === "secondary" && Ve.modifiers.secondary, p && Ve.modifiers[p], (I || E) && Ve.modifiers.plain, E && Ve.modifiers.text, c && Ve.modifiers.fullHeight, d && Ve.modifiers.fullWidth, l && Ve.modifiers.disabled, i), O = Object.assign(Object.assign({ children: I ? n : $ }, l && { disabled: !0 }), S);
    return R ? o.createElement("div", Object.assign({ ref: g, className: y(D, Ve.modifiers.typeahead) }, O)) : f ? o.createElement(
      "div",
      { ref: g, className: y(D, Ve.modifiers.splitButton, f?.variant === "action" && Ve.modifiers.action) },
      f?.items,
      o.createElement(
        "button",
        Object.assign({ className: y(Ve.menuToggleButton, n && Ve.modifiers.text), type: "button", "aria-expanded": s, "aria-label": x, disabled: l, onClick: v }, S, k),
        n && o.createElement("span", { className: y(Ve.menuToggleText) }, n),
        M
      )
    ) : o.createElement("button", Object.assign({ className: y(D), type: "button", "aria-label": x, "aria-expanded": s, ref: g, disabled: l, onClick: v }, O, k));
  }
}
Df.defaultProps = {
  className: "",
  isExpanded: !1,
  isDisabled: !1,
  isFullWidth: !1,
  isFullHeight: !1,
  ouiaSafe: !0
};
const yt = o.forwardRef((e, t) => o.createElement(Df, Object.assign({ innerRef: t }, e)));
yt.displayName = "MenuToggle";
const Si = {
  inputGroup: "pf-v5-c-input-group",
  inputGroupItem: "pf-v5-c-input-group__item",
  inputGroupText: "pf-v5-c-input-group__text",
  modifiers: {
    box: "pf-m-box",
    plain: "pf-m-plain",
    disabled: "pf-m-disabled",
    fill: "pf-m-fill"
  },
  themeDark: "pf-v5-theme-dark"
}, Ff = (e) => {
  var { className: t, children: n, innerRef: i } = e, r = z(e, ["className", "children", "innerRef"]);
  const a = o.useRef(null), s = i || a;
  return o.createElement("div", Object.assign({ ref: s, className: y(Si.inputGroup, t) }, r), n);
};
Ff.displayName = "InputGroupBase";
const Hn = o.forwardRef((e, t) => o.createElement(Ff, Object.assign({ innerRef: t }, e)));
Hn.displayName = "InputGroup";
const xt = (e) => {
  var { className: t, children: n, isFill: i = !1, isBox: r = !1, isPlain: a, isDisabled: s } = e, l = z(e, ["className", "children", "isFill", "isBox", "isPlain", "isDisabled"]);
  return o.createElement("div", Object.assign({ className: y(Si.inputGroupItem, i && Si.modifiers.fill, r && Si.modifiers.box, a && Si.modifiers.plain, s && Si.modifiers.disabled, t) }, l), n);
};
xt.displayName = "InputGroupItem";
const Ne = {
  card: "pf-v5-c-card",
  cardActions: "pf-v5-c-card__actions",
  cardBody: "pf-v5-c-card__body",
  cardExpandableContent: "pf-v5-c-card__expandable-content",
  cardFooter: "pf-v5-c-card__footer",
  cardHeader: "pf-v5-c-card__header",
  cardHeaderMain: "pf-v5-c-card__header-main",
  cardHeaderToggle: "pf-v5-c-card__header-toggle",
  cardHeaderToggleIcon: "pf-v5-c-card__header-toggle-icon",
  cardSelectableActions: "pf-v5-c-card__selectable-actions",
  cardSrInput: "pf-v5-c-card__sr-input",
  cardTitle: "pf-v5-c-card__title",
  cardTitleText: "pf-v5-c-card__title-text",
  check: "pf-v5-c-check",
  checkInput: "pf-v5-c-check__input",
  checkLabel: "pf-v5-c-check__label",
  dirRtl: "pf-v5-m-dir-rtl",
  divider: "pf-v5-c-divider",
  modifiers: {
    selectable: "pf-m-selectable",
    clickable: "pf-m-clickable",
    selected: "pf-m-selected",
    current: "pf-m-current",
    disabled: "pf-m-disabled",
    hoverableRaised: "pf-m-hoverable-raised",
    selectableRaised: "pf-m-selectable-raised",
    nonSelectableRaised: "pf-m-non-selectable-raised",
    selectedRaised: "pf-m-selected-raised",
    compact: "pf-m-compact",
    displayLg: "pf-m-display-lg",
    flat: "pf-m-flat",
    plain: "pf-m-plain",
    rounded: "pf-m-rounded",
    expanded: "pf-m-expanded",
    fullHeight: "pf-m-full-height",
    toggleRight: "pf-m-toggle-right",
    noOffset: "pf-m-no-offset",
    noFill: "pf-m-no-fill"
  },
  radio: "pf-v5-c-radio",
  radioInput: "pf-v5-c-radio__input",
  radioLabel: "pf-v5-c-radio__label",
  themeDark: "pf-v5-theme-dark"
}, Go = o.createContext({
  cardId: "",
  registerTitleId: () => {
  },
  isExpanded: !1,
  isClickable: !1,
  isSelectable: !1,
  isSelected: !1,
  isClicked: !1,
  isDisabled: !1
}), Ko = (e) => {
  var { children: t, id: n = "", className: i, component: r = "div", isCompact: a = !1, isSelectable: s = !1, isClickable: l = !1, isDisabled: c = !1, isSelectableRaised: d = !1, isSelected: f = !1, isClicked: u = !1, isDisabledRaised: p = !1, isFlat: m = !1, isExpanded: g = !1, isRounded: v = !1, isLarge: x = !1, isFullHeight: w = !1, isPlain: _ = !1, ouiaId: S, ouiaSafe: I = !0, hasSelectableInput: E = !1, selectableInputAriaLabel: R, onSelectableInputChange: k = () => {
  } } = e, N = z(e, ["children", "id", "className", "component", "isCompact", "isSelectable", "isClickable", "isDisabled", "isSelectableRaised", "isSelected", "isClicked", "isDisabledRaised", "isFlat", "isExpanded", "isRounded", "isLarge", "isFullHeight", "isPlain", "ouiaId", "ouiaSafe", "hasSelectableInput", "selectableInputAriaLabel", "onSelectableInputChange"]);
  const M = r, $ = Gt(Ko.displayName, S, I), [D, O] = o.useState(""), [L, j] = o.useState();
  a && x && (console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"), x = !1);
  const C = () => p ? y(Ne.modifiers.nonSelectableRaised) : d ? y(Ne.modifiers.selectableRaised, f && Ne.modifiers.selectedRaised) : s && l ? y(Ne.modifiers.selectable, Ne.modifiers.clickable, (f || u) && Ne.modifiers.current) : s ? y(Ne.modifiers.selectable, f && Ne.modifiers.selected) : l ? y(Ne.modifiers.clickable, u && Ne.modifiers.current) : "", P = o.useRef(!1), G = (B) => {
    O(B), P.current = !!B;
  };
  return o.useEffect(() => {
    R ? j({ "aria-label": R }) : D ? j({ "aria-labelledby": D }) : E && !P.current && (j({}), console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"));
  }, [E, R, D]), o.createElement(
    Go.Provider,
    { value: {
      cardId: n,
      registerTitleId: G,
      isExpanded: g,
      isClickable: l,
      isSelectable: s,
      isSelected: f,
      isClicked: u,
      isDisabled: c,
      // TODO: Remove hasSelectableInput when deprecated prop is removed
      hasSelectableInput: E
    } },
    E && o.createElement("input", Object.assign({ className: "pf-v5-screen-reader", id: `${n}-input` }, L, { type: "checkbox", checked: f, onChange: (B) => k(B, n), disabled: p, tabIndex: -1 })),
    o.createElement(M, Object.assign({ id: n, className: y(Ne.card, a && Ne.modifiers.compact, g && Ne.modifiers.expanded, m && Ne.modifiers.flat, v && Ne.modifiers.rounded, x && Ne.modifiers.displayLg, w && Ne.modifiers.fullHeight, _ && Ne.modifiers.plain, C(), c && Ne.modifiers.disabled, i), tabIndex: d ? "0" : void 0 }, N, $), t)
  );
};
Ko.displayName = "Card";
const $f = (e) => {
  var { children: t, className: n, component: i = "div", isFilled: r = !0 } = e, a = z(e, ["children", "className", "component", "isFilled"]);
  const s = i;
  return o.createElement(s, Object.assign({ className: y(Ne.cardBody, !r && Ne.modifiers.noFill, n) }, a), t);
};
$f.displayName = "CardBody";
const Bf = (e) => {
  var { children: t, className: n, component: i = "div" } = e, r = z(e, ["children", "className", "component"]);
  const { cardId: a, registerTitleId: s } = o.useContext(Go), l = i, c = a ? `${a}-title` : "";
  return o.useEffect(() => (s(c), () => s("")), [s, c]), o.createElement(
    "div",
    { className: y(Ne.cardTitle) },
    o.createElement(l, Object.assign({ className: y(Ne.cardTitleText, n), id: c || void 0 }, r), t)
  );
};
Bf.displayName = "CardTitle";
const jf = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(Ne.cardHeaderMain, n) }, i), t);
};
jf.displayName = "CardHeaderMain";
const Vf = (e) => {
  var { children: t, className: n, hasNoOffset: i = !1 } = e, r = z(e, ["children", "className", "hasNoOffset"]);
  return o.createElement("div", Object.assign({ className: y(Ne.cardActions, i && Ne.modifiers.noOffset, n) }, r), t);
};
Vf.displayName = "CardActions";
const Hf = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(Ne.cardSelectableActions, n) }, i), t);
};
Hf.displayName = "CardSelectableActions";
const ni = {
  modifiers: {
    standalone: "pf-m-standalone",
    disabled: "pf-m-disabled"
  },
  radio: "pf-v5-c-radio",
  radioBody: "pf-v5-c-radio__body",
  radioDescription: "pf-v5-c-radio__description",
  radioInput: "pf-v5-c-radio__input",
  radioLabel: "pf-v5-c-radio__label"
};
class fi extends o.Component {
  constructor(t) {
    super(t), this.handleChange = (n) => {
      this.props.onChange(n, n.currentTarget.checked);
    }, !t.label && !t["aria-label"] && console.error("Radio:", "Radio requires an aria-label to be specified"), this.state = {
      ouiaStateId: Ct(fi.displayName)
    };
  }
  render() {
    const t = this.props, {
      "aria-label": n,
      checked: i,
      className: r,
      inputClassName: a,
      defaultChecked: s,
      isLabelWrapped: l,
      isLabelBeforeButton: c,
      isChecked: d,
      isDisabled: f,
      isValid: u,
      label: p,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange: m,
      description: g,
      body: v,
      ouiaId: x,
      ouiaSafe: w = !0,
      component: _
    } = t, S = z(t, ["aria-label", "checked", "className", "inputClassName", "defaultChecked", "isLabelWrapped", "isLabelBeforeButton", "isChecked", "isDisabled", "isValid", "label", "onChange", "description", "body", "ouiaId", "ouiaSafe", "component"]);
    S.id || console.error("Radio:", "id is required to make input accessible");
    const I = o.createElement("input", Object.assign({}, S, { className: y(ni.radioInput, a), type: "radio", onChange: this.handleChange, "aria-invalid": !u, disabled: f, checked: i || d }, i === void 0 && { defaultChecked: s }, !p && { "aria-label": n }, rt(fi.displayName, x !== void 0 ? x : this.state.ouiaStateId, w))), E = l && !_ || _ === "label", R = E ? "span" : "label", k = p ? o.createElement(R, { className: y(ni.radioLabel, f && ni.modifiers.disabled), htmlFor: E ? void 0 : S.id }, p) : null, N = _ ?? (E ? "label" : "div");
    return o.createElement(
      N,
      { className: y(ni.radio, !p && ni.modifiers.standalone, r), htmlFor: E ? S.id : void 0 },
      c ? o.createElement(
        o.Fragment,
        null,
        k,
        I
      ) : o.createElement(
        o.Fragment,
        null,
        I,
        k
      ),
      g && o.createElement("span", { className: y(ni.radioDescription) }, g),
      v && o.createElement("span", { className: y(ni.radioBody) }, v)
    );
  }
}
fi.displayName = "Radio";
fi.defaultProps = {
  className: "",
  isDisabled: !1,
  isValid: !0,
  onChange: () => {
  }
};
const Uf = (e) => {
  var { children: t, className: n, actions: i, selectableActions: r, id: a, onExpand: s, toggleButtonProps: l, isToggleRightAligned: c } = e, d = z(e, ["children", "className", "actions", "selectableActions", "id", "onExpand", "toggleButtonProps", "isToggleRightAligned"]);
  return o.createElement(Go.Consumer, null, ({ cardId: f, isClickable: u, isSelectable: p, isSelected: m, isClicked: g, isDisabled: v, hasSelectableInput: x }) => {
    const w = o.createElement(
      "div",
      { className: y(Ne.cardHeaderToggle) },
      o.createElement(
        ce,
        Object.assign({ variant: "plain", type: "button", onClick: (R) => {
          s(R, f);
        } }, l),
        o.createElement(
          "span",
          { className: y(Ne.cardHeaderToggleIcon) },
          o.createElement(Ot, { "aria-hidden": "true" })
        )
      )
    ), _ = u && !p || p && !u, S = x;
    i?.actions && _ && !S && console.warn(`${u ? "Clickable" : "Selectable"} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`);
    const I = (R) => {
      r?.onClickAction ? r.onClickAction(R) : r?.to && window.open(r.to, r.isExternalLink ? "_blank" : "_self");
    }, E = () => {
      var R;
      const k = {
        className: "pf-m-standalone",
        inputClassName: u && !p && "pf-v5-screen-reader",
        label: o.createElement(o.Fragment, null),
        "aria-label": r.selectableActionAriaLabel,
        "aria-labelledby": r.selectableActionAriaLabelledby,
        id: r.selectableActionId,
        name: r.name,
        isDisabled: v
      }, N = (R = r.isChecked) !== null && R !== void 0 ? R : m;
      return u && !p ? Object.assign(Object.assign({}, k), { onClick: I, isChecked: g }) : p ? Object.assign(Object.assign({}, k), { onChange: r.onChange, isChecked: N }) : k;
    };
    return o.createElement(
      "div",
      Object.assign({ className: y(Ne.cardHeader, c && Ne.modifiers.toggleRight, n), id: a }, d),
      s && !c && w,
      (i || r && (u || p)) && o.createElement(
        Vf,
        { className: i?.className, hasNoOffset: i?.hasNoOffset || r?.hasNoOffset },
        i?.actions,
        r && (u || p) && o.createElement(Hf, { className: r?.className }, r?.variant === "single" || u && !p ? o.createElement(fi, Object.assign({}, E())) : o.createElement(Ht, Object.assign({}, E())))
      ),
      t && o.createElement(jf, null, t),
      s && c && w
    );
  });
};
Uf.displayName = "CardHeader";
const Tn = {
  badge: "pf-v5-c-badge",
  button: "pf-v5-c-button",
  chip: "pf-v5-c-chip",
  chipActions: "pf-v5-c-chip__actions",
  chipContent: "pf-v5-c-chip__content",
  chipIcon: "pf-v5-c-chip__icon",
  chipText: "pf-v5-c-chip__text",
  modifiers: {
    overflow: "pf-m-overflow",
    draggable: "pf-m-draggable"
  },
  themeDark: "pf-v5-theme-dark"
}, sb = {
  name: "--pf-v5-c-chip__text--MaxWidth",
  value: "16ch",
  var: "var(--pf-v5-c-chip__text--MaxWidth)"
};
class Ut extends o.Component {
  constructor(t) {
    super(t), this.span = o.createRef(), this.setChipStyle = () => ({
      [sb.name]: this.props.textMaxWidth
    }), this.renderOverflowChip = () => {
      const n = this.props, {
        badge: i,
        children: r,
        className: a,
        onClick: s,
        ouiaId: l,
        textMaxWidth: c,
        style: d,
        component: f,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tooltipPosition: u,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isOverflowChip: p,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        closeBtnAriaLabel: m,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isReadOnly: g
      } = n, v = z(n, ["badge", "children", "className", "onClick", "ouiaId", "textMaxWidth", "style", "component", "tooltipPosition", "isOverflowChip", "closeBtnAriaLabel", "isReadOnly"]), x = f;
      return o.createElement(
        x,
        Object.assign({ onClick: s }, c && Object.assign({ style: this.setChipStyle() }, d), { className: y(Tn.chip, Tn.modifiers.overflow, a) }, f === "button" ? { type: "button" } : {}, rt("OverflowChip", l !== void 0 ? l : this.state.ouiaStateId), v),
        o.createElement(
          "span",
          { className: y(Tn.chipContent) },
          o.createElement("span", { className: y(Tn.chipText) }, r),
          i && i
        )
      );
    }, this.renderChip = (n) => {
      const { children: i, tooltipPosition: r } = this.props;
      return this.state.isTooltipVisible ? o.createElement(ft, { position: r, content: i }, this.renderInnerChip(n)) : this.renderInnerChip(n);
    }, this.state = {
      isTooltipVisible: !1,
      ouiaStateId: Ct(Ut.displayName)
    };
  }
  componentDidMount() {
    this.setState({
      isTooltipVisible: !!(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
    });
  }
  componentDidUpdate(t, n) {
    const i = !!(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth);
    n.isTooltipVisible !== i && this.setState({
      isTooltipVisible: i
    });
  }
  renderInnerChip(t) {
    const n = this.props, {
      badge: i,
      children: r,
      className: a,
      onClick: s,
      closeBtnAriaLabel: l,
      isReadOnly: c,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isOverflowChip: d,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tooltipPosition: f,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id: u,
      component: p,
      ouiaId: m,
      textMaxWidth: g
    } = n, v = z(n, ["badge", "children", "className", "onClick", "closeBtnAriaLabel", "isReadOnly", "isOverflowChip", "tooltipPosition", "id", "component", "ouiaId", "textMaxWidth"]), x = p;
    return o.createElement(
      x,
      Object.assign({}, g && {
        style: this.setChipStyle()
      }, { className: y(Tn.chip, a) }, this.state.isTooltipVisible && { tabIndex: 0 }, rt(Ut.displayName, m !== void 0 ? m : this.state.ouiaStateId), v),
      o.createElement(
        "span",
        { className: y(Tn.chipContent) },
        o.createElement("span", { ref: this.span, className: y(Tn.chipText), id: t }, r),
        i && i
      ),
      !c && o.createElement(
        "span",
        { className: y(Tn.chipActions) },
        o.createElement(
          ce,
          { onClick: s, variant: "plain", "aria-label": l, id: `remove_${t}`, "aria-labelledby": `remove_${t} ${t}`, ouiaId: m || l },
          o.createElement(an, { "aria-hidden": "true" })
        )
      )
    );
  }
  render() {
    const { isOverflowChip: t } = this.props;
    return o.createElement(sn, null, (n) => t ? this.renderOverflowChip() : this.renderChip(this.props.id || n));
  }
}
Ut.displayName = "Chip";
Ut.defaultProps = {
  closeBtnAriaLabel: "close",
  className: "",
  isOverflowChip: !1,
  isReadOnly: !1,
  tooltipPosition: "top",
  onClick: (e) => {
  },
  component: "div"
};
const cn = {
  chipGroup: "pf-v5-c-chip-group",
  chipGroupClose: "pf-v5-c-chip-group__close",
  chipGroupLabel: "pf-v5-c-chip-group__label",
  chipGroupList: "pf-v5-c-chip-group__list",
  chipGroupListItem: "pf-v5-c-chip-group__list-item",
  chipGroupMain: "pf-v5-c-chip-group__main",
  modifiers: {
    category: "pf-m-category"
  }
}, ob = {
  name: "TimesCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
  yOffset: 0,
  xOffset: 0
}, lb = pe(ob);
class qn extends o.Component {
  constructor(t) {
    super(t), this.headingRef = o.createRef(), this.toggleCollapse = () => {
      this.setState((n) => ({
        isOpen: !n.isOpen,
        isTooltipVisible: !!(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
      }));
    }, this.state = {
      isOpen: this.props.defaultIsOpen,
      isTooltipVisible: !1
    };
  }
  componentDidMount() {
    this.setState({
      isTooltipVisible: !!(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
    });
  }
  renderLabel(t) {
    const { categoryName: n, tooltipPosition: i } = this.props, { isTooltipVisible: r } = this.state;
    return r ? o.createElement(
      ft,
      { position: i, content: n },
      o.createElement(
        "span",
        { tabIndex: 0, ref: this.headingRef, className: y(cn.chipGroupLabel) },
        o.createElement("span", { id: t }, n)
      )
    ) : o.createElement("span", { ref: this.headingRef, className: y(cn.chipGroupLabel), id: t }, n);
  }
  render() {
    const t = this.props, {
      categoryName: n,
      children: i,
      className: r,
      isClosable: a,
      closeBtnAriaLabel: s,
      "aria-label": l,
      onClick: c,
      onOverflowChipClick: d,
      numChips: f,
      expandedText: u,
      collapsedText: p,
      ouiaId: m,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      defaultIsOpen: g,
      tooltipPosition: v
    } = t, x = z(t, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", "aria-label", "onClick", "onOverflowChipClick", "numChips", "expandedText", "collapsedText", "ouiaId", "defaultIsOpen", "tooltipPosition"]), { isOpen: w } = this.state, _ = o.Children.count(i), S = Ao(p, {
      remaining: o.Children.count(i) - f
    }), I = (E) => {
      const R = w ? o.Children.toArray(i) : o.Children.toArray(i).slice(0, f);
      return o.createElement(
        "div",
        Object.assign({ className: y(cn.chipGroup, r, n && cn.modifiers.category), role: "group" }, n && { "aria-labelledby": E }, !n && { "aria-label": l }, rt(qn.displayName, m)),
        o.createElement(
          "div",
          { className: y(cn.chipGroupMain) },
          n && this.renderLabel(E),
          o.createElement(
            "ul",
            Object.assign({ className: y(cn.chipGroupList) }, n && { "aria-labelledby": E }, !n && { "aria-label": l }, { role: "list" }, x),
            R.map((k, N) => o.createElement("li", { className: y(cn.chipGroupListItem), key: N }, k)),
            _ > f && o.createElement(
              "li",
              { className: y(cn.chipGroupListItem) },
              o.createElement(Ut, { isOverflowChip: !0, onClick: (k) => {
                this.toggleCollapse(), d(k);
              }, component: "button" }, w ? u : S)
            )
          )
        ),
        a && o.createElement(
          "div",
          { className: y(cn.chipGroupClose) },
          o.createElement(
            ce,
            { variant: "plain", "aria-label": s, onClick: c, id: `remove_group_${E}`, "aria-labelledby": `remove_group_${E} ${E}`, ouiaId: m || s },
            o.createElement(lb, { "aria-hidden": "true" })
          )
        )
      );
    };
    return _ === 0 ? null : o.createElement(sn, null, (E) => I(this.props.id || E));
  }
}
qn.displayName = "ChipGroup";
qn.defaultProps = {
  expandedText: "Show Less",
  collapsedText: "${remaining} more",
  categoryName: "",
  defaultIsOpen: !1,
  numChips: 3,
  isClosable: !1,
  onClick: (e) => {
  },
  onOverflowChipClick: (e) => {
  },
  closeBtnAriaLabel: "Close chip group",
  tooltipPosition: "top",
  "aria-label": "Chip group category"
};
const Se = {
  dataList: "pf-v5-c-data-list",
  dataListAction: "pf-v5-c-data-list__action",
  dataListCell: "pf-v5-c-data-list__cell",
  dataListCheck: "pf-v5-c-data-list__check",
  dataListExpandableContent: "pf-v5-c-data-list__expandable-content",
  dataListExpandableContentBody: "pf-v5-c-data-list__expandable-content-body",
  dataListItem: "pf-v5-c-data-list__item",
  dataListItemAction: "pf-v5-c-data-list__item-action",
  dataListItemContent: "pf-v5-c-data-list__item-content",
  dataListItemControl: "pf-v5-c-data-list__item-control",
  dataListItemDraggableButton: "pf-v5-c-data-list__item-draggable-button",
  dataListItemDraggableIcon: "pf-v5-c-data-list__item-draggable-icon",
  dataListItemRow: "pf-v5-c-data-list__item-row",
  dataListText: "pf-v5-c-data-list__text",
  dataListToggle: "pf-v5-c-data-list__toggle",
  dataListToggleIcon: "pf-v5-c-data-list__toggle-icon",
  dirRtl: "pf-v5-m-dir-rtl",
  modifiers: {
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    icon: "pf-m-icon",
    alignRight: "pf-m-align-right",
    noFill: "pf-m-no-fill",
    flex_2: "pf-m-flex-2",
    flex_3: "pf-m-flex-3",
    flex_4: "pf-m-flex-4",
    flex_5: "pf-m-flex-5",
    gridNone: "pf-m-grid-none",
    gridSm: "pf-m-grid-sm",
    gridMd: "pf-m-grid-md",
    gridLg: "pf-m-grid-lg",
    gridXl: "pf-m-grid-xl",
    grid_2xl: "pf-m-grid-2xl",
    compact: "pf-m-compact",
    dragOver: "pf-m-drag-over",
    truncate: "pf-m-truncate",
    breakWord: "pf-m-break-word",
    nowrap: "pf-m-nowrap",
    clickable: "pf-m-clickable",
    selected: "pf-m-selected",
    ghostRow: "pf-m-ghost-row",
    expanded: "pf-m-expanded",
    disabled: "pf-m-disabled",
    noPadding: "pf-m-no-padding"
  },
  themeDark: "pf-v5-theme-dark"
}, cb = {
  none: Se.modifiers.gridNone,
  always: "pf-m-grid",
  // Placeholder per https://github.com/patternfly/patternfly-react/issues/4965#issuecomment-704984236
  sm: Se.modifiers.gridSm,
  md: Se.modifiers.gridMd,
  lg: Se.modifiers.gridLg,
  xl: Se.modifiers.gridXl,
  "2xl": Se.modifiers.grid_2xl
};
var fc;
(function(e) {
  e.nowrap = "nowrap", e.truncate = "truncate", e.breakWord = "breakWord";
})(fc || (fc = {}));
const zf = o.createContext({
  isSelectable: !1
}), Wf = (e) => {
  var { children: t = null, className: n = "", "aria-label": i, onSelectDataListItem: r, selectedDataListItemId: a = "", isCompact: s = !1, gridBreakpoint: l = "md", wrapModifier: c = null, onSelectableRowChange: d, innerRef: f } = e, u = z(e, ["children", "className", "aria-label", "onSelectDataListItem", "selectedDataListItemId", "isCompact", "gridBreakpoint", "wrapModifier", "onSelectableRowChange", "innerRef"]);
  const p = r !== void 0, m = (g, v) => {
    r(g, v);
  };
  return o.createElement(
    zf.Provider,
    { value: {
      isSelectable: p,
      selectedDataListItemId: a,
      updateSelectedDataListItem: m,
      onSelectableRowChange: d
    } },
    o.createElement("ul", Object.assign({ className: y(Se.dataList, s && Se.modifiers.compact, cb[l], c && Se.modifiers[c], n), style: u.style, role: "list", "aria-label": i, ref: f }, u), t)
  );
};
Wf.displayName = "DataListBase";
const ui = o.forwardRef((e, t) => o.createElement(Wf, Object.assign({ innerRef: t }, e)));
ui.displayName = "DataList";
const Xo = (e) => {
  var {
    children: t,
    className: n,
    visibility: i,
    /* eslint-disable @typescript-eslint/no-unused-vars */
    id: r,
    "aria-label": a,
    "aria-labelledby": s,
    isPlainButtonAction: l
  } = e, c = z(e, ["children", "className", "visibility", "id", "aria-label", "aria-labelledby", "isPlainButtonAction"]);
  return o.createElement("div", Object.assign({ className: y(Se.dataListItemAction, $e(i, Se), n) }, c), l ? o.createElement("div", { className: y(Se.dataListAction) }, t) : t);
};
Xo.displayName = "DataListAction";
const qe = (e) => {
  var { children: t = null, className: n = "", width: i = 1, isFilled: r = !0, alignRight: a = !1, isIcon: s = !1, wrapModifier: l = null } = e, c = z(e, ["children", "className", "width", "isFilled", "alignRight", "isIcon", "wrapModifier"]);
  return o.createElement("div", Object.assign({ className: y(Se.dataListCell, i > 1 && Se.modifiers[`flex_${i}`], !r && Se.modifiers.noFill, a && Se.modifiers.alignRight, s && Se.modifiers.icon, n, l && Se.modifiers[l]) }, c), t);
};
qe.displayName = "DataListCell";
const db = {
  name: "GripVerticalIcon",
  height: 512,
  width: 320,
  svgPath: "M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",
  yOffset: 0,
  xOffset: 0
}, fb = pe(db);
class Bt extends o.Component {
  render() {
    const t = this.props, { children: n, isExpanded: i, className: r, id: a, "aria-labelledby": s, selectableInputAriaLabel: l } = t, c = z(t, ["children", "isExpanded", "className", "id", "aria-labelledby", "selectableInputAriaLabel"]);
    return o.createElement(zf.Consumer, null, ({ isSelectable: d, selectedDataListItemId: f, updateSelectedDataListItem: u, onSelectableRowChange: p }) => {
      const m = (w) => {
        let _ = w.target;
        for (; w.currentTarget !== _; ) {
          if ("onclick" in _ && _.onclick || _.parentNode.classList.contains(Se.dataListItemAction) || _.parentNode.classList.contains(Se.dataListItemControl))
            return;
          _ = _.parentNode;
        }
        u(w, a);
      }, g = (w) => {
        [Wn.Enter, Wn.Space].includes(w.key) && (w.preventDefault(), u(w, a));
      }, v = f === a, x = l ? { "aria-label": l } : { "aria-labelledby": s };
      return o.createElement(
        "li",
        Object.assign({ id: a, className: y(Se.dataListItem, i && Se.modifiers.expanded, d && Se.modifiers.clickable, f && v && Se.modifiers.selected, r), "aria-labelledby": s }, d && { tabIndex: 0, onClick: m, onKeyDown: g }, d && v && { "aria-selected": !0 }, c),
        p && o.createElement("input", Object.assign({ className: "pf-v5-screen-reader", type: "radio", checked: v, onChange: (w) => p(w, a), tabIndex: -1 }, x)),
        o.Children.map(n, (w) => o.isValidElement(w) && o.cloneElement(w, {
          rowid: s
        }))
      );
    });
  }
}
Bt.displayName = "DataListItem";
Bt.defaultProps = {
  isExpanded: !1,
  className: "",
  id: "",
  children: null,
  "aria-labelledby": ""
};
const xn = (e) => {
  var {
    className: t = "",
    dataListCells: n,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowid: i = ""
  } = e, r = z(e, ["className", "dataListCells", "rowid"]);
  return o.createElement("div", Object.assign({ className: y(Se.dataListItemContent, t) }, r), n);
};
xn.displayName = "DataListItemCells";
const nn = (e) => {
  var { children: t, className: n = "", rowid: i = "", wrapModifier: r = null } = e, a = z(e, ["children", "className", "rowid", "wrapModifier"]);
  return o.createElement("div", Object.assign({ className: y(Se.dataListItemRow, n, r && Se.modifiers[r]) }, a), o.Children.map(t, (s) => o.isValidElement(s) && o.cloneElement(s, {
    rowid: i
  })));
};
nn.displayName = "DataListItemRow";
const ro = (e) => {
  var { className: t = "", isExpanded: n = !1, "aria-controls": i = "", "aria-label": r = "Details", rowid: a = "", id: s, buttonProps: l } = e, c = z(e, ["className", "isExpanded", "aria-controls", "aria-label", "rowid", "id", "buttonProps"]);
  return o.createElement(
    "div",
    Object.assign({ className: y(Se.dataListItemControl, t) }, c),
    o.createElement(
      "div",
      { className: y(Se.dataListToggle) },
      o.createElement(
        ce,
        Object.assign({ id: s, variant: Me.plain, "aria-controls": i !== "" && i, "aria-label": r, "aria-labelledby": r !== "Details" ? null : `${a} ${s}`, "aria-expanded": n }, l),
        o.createElement(
          "div",
          { className: y(Se.dataListToggleIcon) },
          o.createElement(Ot, null)
        )
      )
    )
  );
};
ro.displayName = "DataListToggle";
const qo = (e) => {
  var {
    className: t = "",
    children: n = null,
    id: i = "",
    isHidden: r = !1,
    "aria-label": a,
    hasNoPadding: s = !1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowid: l = ""
  } = e, c = z(e, ["className", "children", "id", "isHidden", "aria-label", "hasNoPadding", "rowid"]);
  return o.createElement(
    "section",
    Object.assign({ id: i, className: y(Se.dataListExpandableContent, t), hidden: r, "aria-label": a }, c),
    o.createElement("div", { className: y(Se.dataListExpandableContentBody, s && Se.modifiers.noPadding) }, n)
  );
};
qo.displayName = "DataListContent";
const Re = {
  modifiers: {
    noPadding: "pf-m-no-padding",
    widthAuto: "pf-m-width-auto",
    top: "pf-m-top",
    topLeft: "pf-m-top-left",
    topRight: "pf-m-top-right",
    bottom: "pf-m-bottom",
    bottomLeft: "pf-m-bottom-left",
    bottomRight: "pf-m-bottom-right",
    left: "pf-m-left",
    leftTop: "pf-m-left-top",
    leftBottom: "pf-m-left-bottom",
    right: "pf-m-right",
    rightTop: "pf-m-right-top",
    rightBottom: "pf-m-right-bottom",
    danger: "pf-m-danger",
    warning: "pf-m-warning",
    success: "pf-m-success",
    custom: "pf-m-custom",
    info: "pf-m-info"
  },
  popover: "pf-v5-c-popover",
  popoverArrow: "pf-v5-c-popover__arrow",
  popoverBody: "pf-v5-c-popover__body",
  popoverClose: "pf-v5-c-popover__close",
  popoverContent: "pf-v5-c-popover__content",
  popoverFooter: "pf-v5-c-popover__footer",
  popoverHeader: "pf-v5-c-popover__header",
  popoverTitle: "pf-v5-c-popover__title",
  popoverTitleIcon: "pf-v5-c-popover__title-icon",
  popoverTitleText: "pf-v5-c-popover__title-text",
  themeDark: "pf-v5-theme-dark"
}, ub = o.createContext({}), Gf = (e) => {
  var { className: t = null, children: n } = e, i = z(e, ["className", "children"]);
  return o.createElement("div", Object.assign({ className: y(Re.popoverContent, t) }, i), n);
};
Gf.displayName = "PopoverContent";
const Kf = (e) => {
  var { children: t, id: n, className: i } = e, r = z(e, ["children", "id", "className"]);
  return o.createElement("div", Object.assign({ className: y(Re.popoverBody, i), id: n }, r), t);
};
Kf.displayName = "PopoverBody";
const Xf = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("span", Object.assign({ className: y(Re.popoverTitleIcon, n) }, i), t);
};
Xf.displayName = "PopoverHeaderIcon";
const qf = (e) => {
  var { children: t, className: n, headingLevel: i } = e, r = z(e, ["children", "className", "headingLevel"]);
  const a = i;
  return o.createElement(a, Object.assign({ className: y(Re.popoverTitleText, n) }, r), t);
};
qf.displayName = "PopoverHeaderText";
const Jf = (e) => {
  var { children: t, icon: n, className: i, titleHeadingLevel: r = "h6", alertSeverityVariant: a, id: s, alertSeverityScreenReaderText: l } = e, c = z(e, ["children", "icon", "className", "titleHeadingLevel", "alertSeverityVariant", "id", "alertSeverityScreenReaderText"]);
  return o.createElement(
    "header",
    Object.assign({ className: y(Re.popoverHeader, i) }, c),
    o.createElement(
      "div",
      { className: y(Re.popoverTitle), id: s },
      n && o.createElement(Xf, null, n),
      o.createElement(
        qf,
        { headingLevel: r },
        a && l && o.createElement("span", { className: "pf-v5-screen-reader" }, l),
        t
      )
    )
  );
};
Jf.displayName = "PopoverHeader";
const Yf = (e) => {
  var { children: t, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("footer", Object.assign({ className: y(Re.popoverFooter, n) }, i), t);
};
Yf.displayName = "PopoverFooter";
const Zf = (e) => {
  var { onClose: t = () => {
  } } = e, n = z(e, ["onClose"]);
  return o.createElement(
    "div",
    { className: y(Re.popoverClose) },
    o.createElement(
      ce,
      Object.assign({ onClick: t, variant: "plain", "aria-label": !0 }, n, { style: { pointerEvents: "auto" } }),
      o.createElement(an, null)
    )
  );
};
Zf.displayName = "PopoverCloseButton";
const Qf = (e) => {
  var { className: t = "" } = e, n = z(e, ["className"]);
  return o.createElement("div", Object.assign({ className: y(Re.popoverArrow, t) }, n));
};
Qf.displayName = "PopoverArrow";
const Os = {
  name: "--pf-v5-c-popover--MaxWidth",
  value: "none",
  var: "var(--pf-v5-c-popover--MaxWidth)"
}, Cs = {
  name: "--pf-v5-c-popover--MinWidth",
  value: "auto",
  var: "var(--pf-v5-c-popover--MinWidth)"
};
var uc;
(function(e) {
  e.auto = "auto", e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e.topStart = "top-start", e.topEnd = "top-end", e.bottomStart = "bottom-start", e.bottomEnd = "bottom-end", e.leftStart = "left-start", e.leftEnd = "left-end", e.rightStart = "right-start", e.rightEnd = "right-end";
})(uc || (uc = {}));
const pb = {
  custom: Re.modifiers.custom,
  info: Re.modifiers.info,
  success: Re.modifiers.success,
  warning: Re.modifiers.warning,
  danger: Re.modifiers.danger
}, Jo = (e) => {
  var { children: t, position: n = "top", enableFlip: i = !0, className: r = "", isVisible: a = null, shouldClose: s = () => null, shouldOpen: l = () => null, "aria-label": c = "", bodyContent: d, headerContent: f = null, headerComponent: u = "h6", headerIcon: p = null, alertSeverityVariant: m, alertSeverityScreenReaderText: g, footerContent: v = null, appendTo: x = () => document.body, hideOnOutsideClick: w = !0, onHide: _ = () => null, onHidden: S = () => null, onShow: I = () => null, onShown: E = () => null, onMount: R = () => null, zIndex: k = 9999, triggerAction: N = "click", minWidth: M = Cs && Cs.value, maxWidth: $ = Os && Os.value, closeBtnAriaLabel: D = "Close", showClose: O = !0, distance: L = 25, flipBehavior: j = [
    "top",
    "bottom",
    "left",
    "right",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end"
  ], animationDuration: C = 300, id: P, withFocusTrap: G, triggerRef: B, hasNoPadding: J = !1, hasAutoWidth: b = !1, elementToFocus: F } = e, K = z(e, ["children", "position", "enableFlip", "className", "isVisible", "shouldClose", "shouldOpen", "aria-label", "bodyContent", "headerContent", "headerComponent", "headerIcon", "alertSeverityVariant", "alertSeverityScreenReaderText", "footerContent", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "triggerAction", "minWidth", "maxWidth", "closeBtnAriaLabel", "showClose", "distance", "flipBehavior", "animationDuration", "id", "withFocusTrap", "triggerRef", "hasNoPadding", "hasAutoWidth", "elementToFocus"]);
  const V = P || Mi(), U = a !== null, [q, W] = o.useState(!1), [X, te] = o.useState(!!G), ie = o.useRef(null);
  o.useEffect(() => {
    R();
  }, []), o.useEffect(() => {
    U && (a ? Y(void 0, !0) : oe());
  }, [a, U]);
  const Y = (ae, ve) => {
    ae && I(ae), W(!0), G !== !1 && ve && te(!0);
  }, oe = (ae) => {
    ae && _(ae), W(!1);
  }, de = {
    top: Re.modifiers.top,
    bottom: Re.modifiers.bottom,
    left: Re.modifiers.left,
    right: Re.modifiers.right,
    "top-start": Re.modifiers.topLeft,
    "top-end": Re.modifiers.topRight,
    "bottom-start": Re.modifiers.bottomLeft,
    "bottom-end": Re.modifiers.bottomRight,
    "left-start": Re.modifiers.leftTop,
    "left-end": Re.modifiers.leftBottom,
    "right-start": Re.modifiers.rightTop,
    "right-end": Re.modifiers.rightBottom
  }, Ce = M !== Cs.value, Oe = $ !== Os.value, Te = (ae) => {
    ae.key === Wn.Escape && q && (U ? s(ae, oe) : oe(ae));
  }, De = (ae, ve, ye) => {
    if (w && q) {
      const he = ye && ye.contains(ae.target), Ee = ve && ve.contains(ae.target);
      if (he || Ee)
        return;
      U ? s(ae, oe) : oe(ae);
    }
  }, Le = (ae) => {
    U ? q ? s(ae, oe) : l(ae, Y) : q ? oe(ae) : Y(ae, !0);
  }, T = () => {
    X && te(!1);
  }, A = (ae) => {
    U ? l(ae, Y) : Y(ae, !1);
  }, H = (ae) => {
    U ? s(ae, oe) : oe(ae);
  }, ee = (ae) => {
    U ? l(ae, Y) : Y(ae, !1);
  }, ne = (ae) => {
    U ? s(ae, oe) : oe(ae);
  }, Q = (ae) => {
    ae.stopPropagation(), U ? s(ae, oe) : oe(ae);
  }, le = o.createElement(
    $a,
    Object.assign({ ref: ie, active: X, focusTrapOptions: {
      returnFocusOnDeactivate: G !== !1,
      clickOutsideDeactivates: !0,
      // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
      // We want to prevent this in case false is ever passed in.
      initialFocus: F || void 0,
      checkCanFocusTrap: (ae) => new Promise((ve) => {
        const ye = setInterval(() => {
          ae.every((he) => getComputedStyle(he).visibility !== "hidden") && (ve(), clearInterval(ye));
        }, 10);
      }),
      tabbableOptions: { displayCheck: "none" },
      fallbackFocus: () => {
        let ae = null;
        return document && document.activeElement && (ae = document.activeElement), ae;
      }
    }, preventScrollOnDeactivate: !0, className: y(Re.popover, m && pb[m], J && Re.modifiers.noPadding, b && Re.modifiers.widthAuto, r), role: "dialog", "aria-modal": "true", "aria-label": f ? void 0 : c, "aria-labelledby": f ? `popover-${V}-header` : void 0, "aria-describedby": `popover-${V}-body`, onMouseDown: T, style: {
      minWidth: Ce ? M : null,
      maxWidth: Oe ? $ : null
    } }, K),
    o.createElement(Qf, null),
    o.createElement(
      Gf,
      null,
      O && N === "click" && o.createElement(Zf, { onClose: Q, "aria-label": D }),
      f && o.createElement(Jf, { id: `popover-${V}-header`, icon: p, alertSeverityVariant: m, alertSeverityScreenReaderText: g || `${m} alert:`, titleHeadingLevel: u }, typeof f == "function" ? f(oe) : f),
      o.createElement(Kf, { id: `popover-${V}-body` }, typeof d == "function" ? d(oe) : d),
      v && o.createElement(Yf, { id: `popover-${V}-footer` }, typeof v == "function" ? v(oe) : v)
    )
  );
  return o.createElement(
    ub.Provider,
    { value: { headerComponent: u } },
    o.createElement(Ln, { trigger: t, triggerRef: B, popper: le, popperRef: ie, minWidth: M, appendTo: x, isVisible: q, onMouseEnter: N === "hover" && A, onMouseLeave: N === "hover" && H, onPopperMouseEnter: N === "hover" && A, onPopperMouseLeave: N === "hover" && H, onFocus: N === "hover" && ee, onBlur: N === "hover" && ne, positionModifiers: de, distance: L, placement: n, onTriggerClick: N === "click" && Le, onDocumentClick: De, onDocumentKeyDown: Te, enableFlip: i, zIndex: k, flipBehavior: j, animationDuration: C, onHidden: S, onShown: E, onHide: () => te(!1) })
  );
};
Jo.displayName = "Popover";
const Yt = {
  helperText: "pf-v5-c-helper-text",
  helperTextItem: "pf-v5-c-helper-text__item",
  helperTextItemIcon: "pf-v5-c-helper-text__item-icon",
  helperTextItemText: "pf-v5-c-helper-text__item-text",
  modifiers: {
    hidden: "pf-m-hidden",
    indeterminate: "pf-m-indeterminate",
    warning: "pf-m-warning",
    success: "pf-m-success",
    error: "pf-m-error",
    dynamic: "pf-m-dynamic"
  },
  themeDark: "pf-v5-theme-dark"
}, Yo = (e) => {
  var { children: t, className: n, component: i = "div", id: r, isLiveRegion: a = !1, "aria-label": s } = e, l = z(e, ["children", "className", "component", "id", "isLiveRegion", "aria-label"]);
  const c = i;
  return o.createElement(c, Object.assign({ id: r, className: y(Yt.helperText, n) }, a && { "aria-live": "polite" }, i === "ul" && { role: "list", "aria-label": s }, l), t);
};
Yo.displayName = "HelperText";
const mb = {
  name: "MinusIcon",
  height: 512,
  width: 448,
  svgPath: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  yOffset: 0,
  xOffset: 0
}, hb = pe(mb), gb = {
  default: "",
  indeterminate: Yt.modifiers.indeterminate,
  warning: Yt.modifiers.warning,
  success: Yt.modifiers.success,
  error: Yt.modifiers.error
}, Zo = (e) => {
  var { children: t, className: n, component: i = "div", variant: r = "default", icon: a, isDynamic: s = !1, hasIcon: l = s, id: c, screenReaderText: d = `${r} status` } = e, f = z(e, ["children", "className", "component", "variant", "icon", "isDynamic", "hasIcon", "id", "screenReaderText"]);
  const u = i;
  return o.createElement(
    u,
    Object.assign({ className: y(Yt.helperTextItem, gb[r], s && Yt.modifiers.dynamic, n), id: c }, f),
    a && o.createElement("span", { className: y(Yt.helperTextItemIcon), "aria-hidden": !0 }, a),
    l && !a && o.createElement(
      "span",
      { className: y(Yt.helperTextItemIcon), "aria-hidden": !0 },
      (r === "default" || r === "indeterminate") && o.createElement(hb, null),
      r === "warning" && o.createElement(jr, null),
      r === "success" && o.createElement(Br, null),
      r === "error" && o.createElement(Ki, null)
    ),
    o.createElement(
      "span",
      { className: y(Yt.helperTextItemText) },
      t,
      s && o.createElement(
        "span",
        { className: "pf-v5-screen-reader" },
        ": ",
        d,
        ";"
      )
    )
  );
};
Zo.displayName = "HelperTextItem";
const tt = {
  card: "pf-v5-c-card",
  descriptionList: "pf-v5-c-description-list",
  descriptionListDescription: "pf-v5-c-description-list__description",
  descriptionListGroup: "pf-v5-c-description-list__group",
  descriptionListTerm: "pf-v5-c-description-list__term",
  descriptionListTermIcon: "pf-v5-c-description-list__term-icon",
  descriptionListText: "pf-v5-c-description-list__text",
  modifiers: {
    inlineGrid: "pf-m-inline-grid",
    autoColumnWidths: "pf-m-auto-column-widths",
    autoFit: "pf-m-auto-fit",
    compact: "pf-m-compact",
    fluid: "pf-m-fluid",
    fillColumns: "pf-m-fill-columns",
    displayLg: "pf-m-display-lg",
    display_2xl: "pf-m-display-2xl",
    helpText: "pf-m-help-text",
    "1Col": "pf-m-1-col",
    "2Col": "pf-m-2-col",
    "3Col": "pf-m-3-col",
    horizontal: "pf-m-horizontal",
    vertical: "pf-m-vertical",
    "1ColOnSm": "pf-m-1-col-on-sm",
    "2ColOnSm": "pf-m-2-col-on-sm",
    "3ColOnSm": "pf-m-3-col-on-sm",
    horizontalOnSm: "pf-m-horizontal-on-sm",
    verticalOnSm: "pf-m-vertical-on-sm",
    "1ColOnMd": "pf-m-1-col-on-md",
    "2ColOnMd": "pf-m-2-col-on-md",
    "3ColOnMd": "pf-m-3-col-on-md",
    horizontalOnMd: "pf-m-horizontal-on-md",
    verticalOnMd: "pf-m-vertical-on-md",
    "1ColOnLg": "pf-m-1-col-on-lg",
    "2ColOnLg": "pf-m-2-col-on-lg",
    "3ColOnLg": "pf-m-3-col-on-lg",
    horizontalOnLg: "pf-m-horizontal-on-lg",
    verticalOnLg: "pf-m-vertical-on-lg",
    "1ColOnXl": "pf-m-1-col-on-xl",
    "2ColOnXl": "pf-m-2-col-on-xl",
    "3ColOnXl": "pf-m-3-col-on-xl",
    horizontalOnXl: "pf-m-horizontal-on-xl",
    verticalOnXl: "pf-m-vertical-on-xl",
    "1ColOn_2xl": "pf-m-1-col-on-2xl",
    "2ColOn_2xl": "pf-m-2-col-on-2xl",
    "3ColOn_2xl": "pf-m-3-col-on-2xl",
    horizontalOn_2xl: "pf-m-horizontal-on-2xl",
    verticalOn_2xl: "pf-m-vertical-on-2xl"
  }
}, bb = {
  name: "--pf-v5-c-description-list--GridTemplateColumns--min",
  value: "0",
  var: "var(--pf-v5-c-description-list--GridTemplateColumns--min)"
}, vb = {
  name: "--pf-v5-c-description-list__term--width",
  value: "12ch",
  var: "var(--pf-v5-c-description-list__term--width)"
}, yb = {
  name: "--pf-v5-c-description-list--m-horizontal__term--width",
  value: "fit-content(20ch)",
  var: "var(--pf-v5-c-description-list--m-horizontal__term--width)"
}, pc = (e, t) => {
  const n = t;
  return Object.keys(n || {}).reduce((i, r) => r === "default" ? Object.assign(Object.assign({}, i), { [e]: n[r] }) : Object.assign(Object.assign({}, i), { [`${e}-on-${r}`]: n[r] }), {});
}, Qo = (e) => {
  var { className: t = "", children: n = null, isHorizontal: i = !1, isAutoColumnWidths: r, isAutoFit: a, isInlineGrid: s, isCompact: l, isFluid: c, isFillColumns: d, displaySize: f = "default", columnModifier: u, autoFitMinModifier: p, termWidth: m, horizontalTermWidthModifier: g, orientation: v, style: x } = e, w = z(e, ["className", "children", "isHorizontal", "isAutoColumnWidths", "isAutoFit", "isInlineGrid", "isCompact", "isFluid", "isFillColumns", "displaySize", "columnModifier", "autoFitMinModifier", "termWidth", "horizontalTermWidthModifier", "orientation", "style"]);
  return a && p && (x = Object.assign(Object.assign({}, x), pc(bb.name, p))), m && (x = Object.assign(Object.assign({}, x), { [vb.name]: m })), i && g && (x = Object.assign(Object.assign({}, x), pc(yb.name, g))), o.createElement("dl", Object.assign({ className: y(tt.descriptionList, (i || c) && tt.modifiers.horizontal, r && tt.modifiers.autoColumnWidths, a && tt.modifiers.autoFit, $e(u, tt), $e(v, tt), s && tt.modifiers.inlineGrid, l && tt.modifiers.compact, c && tt.modifiers.fluid, d && tt.modifiers.fillColumns, f === "lg" && tt.modifiers.displayLg, f === "2xl" && tt.modifiers.display_2xl, t), style: x }, w), n);
};
Qo.displayName = "DescriptionList";
const mt = (e) => {
  var { children: t = null, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement(
    "dd",
    Object.assign({ className: y(tt.descriptionListDescription, n) }, i),
    o.createElement("div", { className: y(tt.descriptionListText) }, t)
  );
};
mt.displayName = "DescriptionListDescription";
const ht = (e) => {
  var { className: t, children: n } = e, i = z(e, ["className", "children"]);
  return o.createElement("div", Object.assign({ className: y(tt.descriptionListGroup, t) }, i), n);
};
ht.displayName = "DescriptionListGroup";
const gt = (e) => {
  var { children: t, className: n, icon: i } = e, r = z(e, ["children", "className", "icon"]);
  return o.createElement(
    "dt",
    Object.assign({ className: y(tt.descriptionListTerm, n) }, r),
    i ? o.createElement("span", { className: y(tt.descriptionListTermIcon) }, i) : null,
    o.createElement("span", { className: y(tt.descriptionListText) }, t)
  );
};
gt.displayName = "DescriptionListTerm";
const _s = {
  divider: "pf-v5-c-divider",
  modifiers: {
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    vertical: "pf-m-vertical",
    insetNone: "pf-m-inset-none",
    insetXs: "pf-m-inset-xs",
    insetSm: "pf-m-inset-sm",
    insetMd: "pf-m-inset-md",
    insetLg: "pf-m-inset-lg",
    insetXl: "pf-m-inset-xl",
    inset_2xl: "pf-m-inset-2xl",
    inset_3xl: "pf-m-inset-3xl",
    horizontalOnSm: "pf-m-horizontal-on-sm",
    verticalOnSm: "pf-m-vertical-on-sm",
    insetNoneOnSm: "pf-m-inset-none-on-sm",
    insetXsOnSm: "pf-m-inset-xs-on-sm",
    insetSmOnSm: "pf-m-inset-sm-on-sm",
    insetMdOnSm: "pf-m-inset-md-on-sm",
    insetLgOnSm: "pf-m-inset-lg-on-sm",
    insetXlOnSm: "pf-m-inset-xl-on-sm",
    inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
    inset_3xlOnSm: "pf-m-inset-3xl-on-sm",
    horizontalOnMd: "pf-m-horizontal-on-md",
    verticalOnMd: "pf-m-vertical-on-md",
    insetNoneOnMd: "pf-m-inset-none-on-md",
    insetXsOnMd: "pf-m-inset-xs-on-md",
    insetSmOnMd: "pf-m-inset-sm-on-md",
    insetMdOnMd: "pf-m-inset-md-on-md",
    insetLgOnMd: "pf-m-inset-lg-on-md",
    insetXlOnMd: "pf-m-inset-xl-on-md",
    inset_2xlOnMd: "pf-m-inset-2xl-on-md",
    inset_3xlOnMd: "pf-m-inset-3xl-on-md",
    horizontalOnLg: "pf-m-horizontal-on-lg",
    verticalOnLg: "pf-m-vertical-on-lg",
    insetNoneOnLg: "pf-m-inset-none-on-lg",
    insetXsOnLg: "pf-m-inset-xs-on-lg",
    insetSmOnLg: "pf-m-inset-sm-on-lg",
    insetMdOnLg: "pf-m-inset-md-on-lg",
    insetLgOnLg: "pf-m-inset-lg-on-lg",
    insetXlOnLg: "pf-m-inset-xl-on-lg",
    inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
    inset_3xlOnLg: "pf-m-inset-3xl-on-lg",
    horizontalOnXl: "pf-m-horizontal-on-xl",
    verticalOnXl: "pf-m-vertical-on-xl",
    insetNoneOnXl: "pf-m-inset-none-on-xl",
    insetXsOnXl: "pf-m-inset-xs-on-xl",
    insetSmOnXl: "pf-m-inset-sm-on-xl",
    insetMdOnXl: "pf-m-inset-md-on-xl",
    insetLgOnXl: "pf-m-inset-lg-on-xl",
    insetXlOnXl: "pf-m-inset-xl-on-xl",
    inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
    inset_3xlOnXl: "pf-m-inset-3xl-on-xl",
    horizontalOn_2xl: "pf-m-horizontal-on-2xl",
    verticalOn_2xl: "pf-m-vertical-on-2xl",
    insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
    insetXsOn_2xl: "pf-m-inset-xs-on-2xl",
    insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
    insetMdOn_2xl: "pf-m-inset-md-on-2xl",
    insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
    insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
    inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl",
    inset_3xlOn_2xl: "pf-m-inset-3xl-on-2xl"
  }
};
var ao;
(function(e) {
  e.hr = "hr", e.li = "li", e.div = "div";
})(ao || (ao = {}));
const el = (e) => {
  var { className: t, component: n = ao.hr, inset: i, orientation: r } = e, a = z(e, ["className", "component", "inset", "orientation"]);
  const s = n;
  return o.createElement(s, Object.assign({ className: y(_s.divider, $e(i, _s), $e(r, _s), t) }, n !== "hr" && { role: "separator" }, a));
};
el.displayName = "Divider";
const Be = {
  dirRtl: "pf-v5-m-dir-rtl",
  drawer: "pf-v5-c-drawer",
  drawerActions: "pf-v5-c-drawer__actions",
  drawerBody: "pf-v5-c-drawer__body",
  drawerClose: "pf-v5-c-drawer__close",
  drawerContent: "pf-v5-c-drawer__content",
  drawerHead: "pf-v5-c-drawer__head",
  drawerMain: "pf-v5-c-drawer__main",
  drawerPanel: "pf-v5-c-drawer__panel",
  drawerPanelMain: "pf-v5-c-drawer__panel-main",
  drawerSection: "pf-v5-c-drawer__section",
  drawerSplitter: "pf-v5-c-drawer__splitter",
  drawerSplitterHandle: "pf-v5-c-drawer__splitter-handle",
  modifiers: {
    panelBottom: "pf-m-panel-bottom",
    inline: "pf-m-inline",
    noBorder: "pf-m-no-border",
    resizable: "pf-m-resizable",
    static: "pf-m-static",
    panelLeft: "pf-m-panel-left",
    expanded: "pf-m-expanded",
    resizing: "pf-m-resizing",
    noBackground: "pf-m-no-background",
    light_200: "pf-m-light-200",
    noPadding: "pf-m-no-padding",
    padding: "pf-m-padding",
    vertical: "pf-m-vertical",
    width_25: "pf-m-width-25",
    width_33: "pf-m-width-33",
    width_50: "pf-m-width-50",
    width_66: "pf-m-width-66",
    width_75: "pf-m-width-75",
    width_100: "pf-m-width-100",
    width_25OnLg: "pf-m-width-25-on-lg",
    width_33OnLg: "pf-m-width-33-on-lg",
    width_50OnLg: "pf-m-width-50-on-lg",
    width_66OnLg: "pf-m-width-66-on-lg",
    width_75OnLg: "pf-m-width-75-on-lg",
    width_100OnLg: "pf-m-width-100-on-lg",
    width_25OnXl: "pf-m-width-25-on-xl",
    width_33OnXl: "pf-m-width-33-on-xl",
    width_50OnXl: "pf-m-width-50-on-xl",
    width_66OnXl: "pf-m-width-66-on-xl",
    width_75OnXl: "pf-m-width-75-on-xl",
    width_100OnXl: "pf-m-width-100-on-xl",
    width_25On_2xl: "pf-m-width-25-on-2xl",
    width_33On_2xl: "pf-m-width-33-on-2xl",
    width_50On_2xl: "pf-m-width-50-on-2xl",
    width_66On_2xl: "pf-m-width-66-on-2xl",
    width_75On_2xl: "pf-m-width-75-on-2xl",
    width_100On_2xl: "pf-m-width-100-on-2xl",
    inlineOnLg: "pf-m-inline-on-lg",
    staticOnLg: "pf-m-static-on-lg",
    inlineOnXl: "pf-m-inline-on-xl",
    staticOnXl: "pf-m-static-on-xl",
    inlineOn_2xl: "pf-m-inline-on-2xl",
    staticOn_2xl: "pf-m-static-on-2xl"
  },
  pageMain: "pf-v5-c-page__main",
  themeDark: "pf-v5-theme-dark"
};
var Un;
(function(e) {
  e.default = "default", e.light200 = "light-200", e.noBackground = "no-background";
})(Un || (Un = {}));
const tl = o.createContext({
  isExpanded: !1,
  isStatic: !1,
  onExpand: () => {
  },
  position: "end",
  drawerRef: null,
  drawerContentRef: null,
  isInline: !1
}), eu = (e) => {
  var { className: t = "", children: n, isExpanded: i = !1, isInline: r = !1, isStatic: a = !1, position: s = "end", onExpand: l = () => {
  } } = e, c = z(e, ["className", "children", "isExpanded", "isInline", "isStatic", "position", "onExpand"]);
  const d = o.useRef(), f = o.useRef();
  return o.createElement(
    tl.Provider,
    { value: { isExpanded: i, isStatic: a, onExpand: l, position: s, drawerRef: d, drawerContentRef: f, isInline: r } },
    o.createElement("div", Object.assign({ className: y(Be.drawer, i && Be.modifiers.expanded, r && Be.modifiers.inline, a && Be.modifiers.static, (s === "left" || s === "start") && Be.modifiers.panelLeft, s === "bottom" && Be.modifiers.panelBottom, t), ref: d }, c), n)
  );
};
eu.displayName = "Drawer";
const tu = (e) => {
  var { className: t = "", children: n } = e, i = z(e, ["className", "children"]);
  return o.createElement("div", Object.assign({ className: y(Be.drawerMain, t) }, i), n);
};
tu.displayName = "DrawerMain";
const nu = (e) => {
  var { className: t = "", children: n, panelContent: i, colorVariant: r = Un.default } = e, a = z(e, ["className", "children", "panelContent", "colorVariant"]);
  const { drawerContentRef: s } = o.useContext(tl);
  return o.createElement(
    tu,
    null,
    o.createElement("div", Object.assign({ className: y(Be.drawerContent, r === Un.light200 && Be.modifiers.light_200, r === Un.noBackground && Be.modifiers.noBackground, t), ref: s }, a), n),
    i
  );
};
nu.displayName = "DrawerContent";
const iu = (e) => {
  var { className: t = "", children: n, hasPadding: i = !1 } = e, r = z(e, ["className", "children", "hasPadding"]);
  return o.createElement("div", Object.assign({ className: y(Be.drawerBody, i && Be.modifiers.padding, t) }, r), n);
};
iu.displayName = "DrawerContentBody";
const Es = {
  name: "--pf-v5-c-drawer__panel--md--FlexBasis",
  value: "50%",
  var: "var(--pf-v5-c-drawer__panel--md--FlexBasis)"
}, xb = {
  name: "--pf-v5-c-drawer__panel--md--FlexBasis--min",
  value: "1.5rem",
  var: "var(--pf-v5-c-drawer__panel--md--FlexBasis--min)"
}, wb = {
  name: "--pf-v5-c-drawer__panel--md--FlexBasis--max",
  value: "100%",
  var: "var(--pf-v5-c-drawer__panel--md--FlexBasis--max)"
};
let Rn = null, or = 0;
const ru = (e) => {
  var { className: t = "", id: n, children: i, hasNoBorder: r = !1, isResizable: a = !1, onResize: s, minSize: l, defaultSize: c, maxSize: d, increment: f = 5, resizeAriaLabel: u = "Resize", widths: p, colorVariant: m = Un.default, focusTrap: g } = e, v = z(e, ["className", "id", "children", "hasNoBorder", "isResizable", "onResize", "minSize", "defaultSize", "maxSize", "increment", "resizeAriaLabel", "widths", "colorVariant", "focusTrap"]);
  const x = o.useRef(), w = o.useRef(), [_, S] = o.useState(0), { position: I, isExpanded: E, isStatic: R, onExpand: k, drawerRef: N, drawerContentRef: M, isInline: $ } = o.useContext(tl), D = R ? !1 : !E, [O, L] = o.useState(!D), [j, C] = o.useState(!1), P = o.useRef(null);
  let G = 0, B, J, b, F, K = !0;
  R && g?.enabled && console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."), o.useEffect(() => {
    !R && E && L(E);
  }, [R, E]);
  const V = () => {
    let A, H;
    const ee = jn(x.current) === "rtl";
    $ && (I === "end" || I === "right") ? ee ? (A = x.current.getBoundingClientRect().left - w.current.getBoundingClientRect().right, H = N.current.getBoundingClientRect().left - N.current.getBoundingClientRect().right) : (A = x.current.getBoundingClientRect().right - w.current.getBoundingClientRect().left, H = N.current.getBoundingClientRect().right - N.current.getBoundingClientRect().left) : $ && (I === "start" || I === "left") ? ee ? (A = w.current.getBoundingClientRect().left - x.current.getBoundingClientRect().right, H = N.current.getBoundingClientRect().left - N.current.getBoundingClientRect().right) : (A = w.current.getBoundingClientRect().right - x.current.getBoundingClientRect().left, H = N.current.getBoundingClientRect().right - N.current.getBoundingClientRect().left) : I === "end" || I === "right" ? ee ? (A = M.current.getBoundingClientRect().left - w.current.getBoundingClientRect().right, H = M.current.getBoundingClientRect().left - M.current.getBoundingClientRect().right) : (A = M.current.getBoundingClientRect().right - w.current.getBoundingClientRect().left, H = M.current.getBoundingClientRect().right - M.current.getBoundingClientRect().left) : I === "start" || I === "left" ? ee ? (A = w.current.getBoundingClientRect().left - M.current.getBoundingClientRect().right, H = M.current.getBoundingClientRect().left - M.current.getBoundingClientRect().right) : (A = w.current.getBoundingClientRect().right - M.current.getBoundingClientRect().left, H = M.current.getBoundingClientRect().right - M.current.getBoundingClientRect().left) : I === "bottom" && (A = M.current.getBoundingClientRect().bottom - w.current.getBoundingClientRect().top, H = M.current.getBoundingClientRect().bottom - M.current.getBoundingClientRect().top);
    const ne = A / H * 100;
    return Math.round((ne + Number.EPSILON) * 100) / 100;
  }, U = (A) => {
    A.stopPropagation(), document.addEventListener("touchmove", Ce, { passive: !1 }), document.addEventListener("touchend", de), Rn = !0;
  }, q = (A) => {
    A.stopPropagation(), A.preventDefault(), document.addEventListener("mousemove", oe), document.addEventListener("mouseup", Oe), N.current.classList.add(y(Be.modifiers.resizing)), Rn = !0, K = !0;
  }, W = (A) => {
    const H = I === "bottom" ? A.clientY : A.clientX;
    te(A, H);
  }, X = (A) => {
    A.preventDefault(), A.stopImmediatePropagation();
    const H = I === "bottom" ? A.touches[0].clientY : A.touches[0].clientX;
    te(A, H);
  }, te = (A, H) => {
    const ee = jn(x.current) === "rtl";
    if (A.stopPropagation(), !Rn)
      return;
    K && (B = x.current.getBoundingClientRect(), ee ? (b = B.right, J = B.left) : (J = B.right, b = B.left), F = B.bottom, K = !1);
    const ne = H;
    let Q = 0;
    I === "end" || I === "right" ? Q = ee ? ne - J : J - ne : I === "start" || I === "left" ? Q = ee ? b - ne : ne - b : Q = F - ne, I === "bottom" && (x.current.style.overflowAnchor = "none"), x.current.style.setProperty(Es.name, Q + "px"), G = Q, S(V());
  }, ie = (A) => {
    Rn && (N.current.classList.remove(y(Be.modifiers.resizing)), Rn = !1, s && s(A, G, n), K = !0, document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", Oe));
  }, Y = (A) => {
    A.stopPropagation(), Rn && (Rn = !1, s && s(A, G, n), document.removeEventListener("touchmove", Ce), document.removeEventListener("touchend", de));
  }, oe = o.useCallback(W, []), de = o.useCallback(Y, []), Ce = o.useCallback(X, []), Oe = o.useCallback(ie, []), Te = (A) => {
    const H = jn(x.current) === "rtl", ee = A.key;
    if (ee !== "Escape" && ee !== "Enter" && ee !== "ArrowUp" && ee !== "ArrowDown" && ee !== "ArrowLeft" && ee !== "ArrowRight") {
      Rn && A.preventDefault();
      return;
    }
    A.preventDefault(), (ee === "Escape" || ee === "Enter") && s && s(A, G, n);
    const ne = x.current.getBoundingClientRect();
    or = I === "bottom" ? ne.height : ne.width;
    let Q = 0;
    ee === "ArrowRight" ? H ? Q = I === "left" || I === "start" ? -f : f : Q = I === "left" || I === "start" ? f : -f : ee === "ArrowLeft" ? H ? Q = I === "left" || I === "start" ? f : -f : Q = I === "left" || I === "start" ? -f : f : ee === "ArrowUp" ? Q = f : ee === "ArrowDown" && (Q = -f), or = or + Q, I === "bottom" && (x.current.style.overflowAnchor = "none"), x.current.style.setProperty(Es.name, or + "px"), G = or, S(V());
  }, De = {};
  c && (De[Es.name] = c), l && (De[xb.name] = l), d && (De[wb.name] = d);
  const Le = g?.enabled && !R, T = Le ? $a : "div";
  return o.createElement(sn, { prefix: "pf-drawer-panel-" }, (A) => {
    const H = {
      tabIndex: -1,
      "aria-modal": !0,
      role: "dialog",
      active: j,
      "aria-labelledby": g?.["aria-labelledby"] || n || A,
      focusTrapOptions: {
        fallbackFocus: () => x.current,
        onActivate: () => {
          P.current !== document.activeElement && (P.current = document.activeElement);
        },
        onDeactivate: () => {
          P.current && P.current.focus && P.current.focus();
        },
        clickOutsideDeactivates: !0,
        returnFocusOnDeactivate: !1,
        // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
        // We want to prevent this in case false is ever passed in.
        initialFocus: g?.elementToFocusOnExpand || void 0,
        escapeDeactivates: !1
      }
    };
    return o.createElement(T, Object.assign({}, Le && H, { id: n || A, className: y(Be.drawerPanel, a && Be.modifiers.resizable, r && Be.modifiers.noBorder, $e(p, Be), m === Un.light200 && Be.modifiers.light_200, m === Un.noBackground && Be.modifiers.noBackground, t), onTransitionEnd: (ee) => {
      ee.target === x.current && (!D && ee.nativeEvent.propertyName === "transform" && k(ee), L(!D), Le && ee.nativeEvent.propertyName === "transform" && C((ne) => !ne));
    }, hidden: D }, (c || l || d) && {
      style: De
    }, v, { ref: x }), O && o.createElement(
      o.Fragment,
      null,
      a && o.createElement(
        o.Fragment,
        null,
        o.createElement(
          "div",
          { className: y(Be.drawerSplitter, I !== "bottom" && Be.modifiers.vertical), role: "separator", tabIndex: 0, "aria-orientation": I === "bottom" ? "horizontal" : "vertical", "aria-label": u, "aria-valuenow": _, "aria-valuemin": 0, "aria-valuemax": 100, "aria-controls": n || A, onMouseDown: q, onKeyDown: Te, onTouchStart: U, ref: w },
          o.createElement("div", { className: y(Be.drawerSplitterHandle), "aria-hidden": !0 })
        ),
        o.createElement("div", { className: y(Be.drawerPanelMain) }, i)
      ),
      !a && i
    ));
  });
};
ru.displayName = "DrawerPanelContent";
const Ob = (e) => {
  var { children: t, className: n, onSelect: i, isOpen: r, toggle: a, shouldFocusToggleOnSelect: s = !1, onOpenChange: l, isPlain: c, isScrollable: d, innerRef: f, ouiaId: u, ouiaSafe: p = !0, zIndex: m = 9999, popperProps: g, onOpenChangeKeys: v = ["Escape", "Tab"], menuHeight: x, maxMenuHeight: w, shouldFocusFirstItemOnOpen: _ = !0 } = e, S = z(e, ["children", "className", "onSelect", "isOpen", "toggle", "shouldFocusToggleOnSelect", "onOpenChange", "isPlain", "isScrollable", "innerRef", "ouiaId", "ouiaSafe", "zIndex", "popperProps", "onOpenChangeKeys", "menuHeight", "maxMenuHeight", "shouldFocusFirstItemOnOpen"]);
  const I = re.useRef(), E = re.useRef(), R = Gt(pi.displayName, u, p), k = f || I, N = typeof a == "function" || typeof a != "function" && !a.toggleRef ? E : a?.toggleRef;
  re.useEffect(() => {
    const D = (L) => {
      var j, C, P;
      r && l && (!((j = k.current) === null || j === void 0) && j.contains(L.target) || !((C = N.current) === null || C === void 0) && C.contains(L.target)) && v.includes(L.key) && (l(!1), (P = N.current) === null || P === void 0 || P.focus());
    }, O = (L) => {
      var j, C, P;
      r && _ && (!((j = N.current) === null || j === void 0) && j.contains(L.target)) && setTimeout(() => {
        var G;
        const B = (G = k?.current) === null || G === void 0 ? void 0 : G.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');
        B && B.focus();
      }, 10), r && l && !(!((C = N?.current) === null || C === void 0) && C.contains(L.target)) && r && !(!((P = k.current) === null || P === void 0) && P.contains(L.target)) && l(!1);
    };
    return window.addEventListener("keydown", D), window.addEventListener("click", O), () => {
      window.removeEventListener("keydown", D), window.removeEventListener("click", O);
    };
  }, [r, k, N, l, v]);
  const M = w !== void 0 || x !== void 0 || d, $ = re.createElement(
    di,
    Object.assign({ className: y(n), ref: k, onSelect: (D, O) => {
      i && i(D, O), s && N.current.focus();
    }, isPlain: c, isScrollable: M }, S, R),
    re.createElement(Hr, { menuHeight: x, maxMenuHeight: w }, t)
  );
  return re.createElement(Ln, Object.assign({ trigger: typeof a == "function" ? a(N) : a.toggleNode, triggerRef: N, popper: $, popperRef: k, isVisible: r, zIndex: m }, g));
}, pi = re.forwardRef((e, t) => re.createElement(Ob, Object.assign({ innerRef: t }, e)));
pi.displayName = "Dropdown";
const Cb = (e) => {
  var { children: t, className: n, description: i, isDisabled: r, isAriaDisabled: a, value: s, onClick: l, ouiaId: c, ouiaSafe: d, innerRef: f, tooltipProps: u } = e, p = z(e, ["children", "className", "description", "isDisabled", "isAriaDisabled", "value", "onClick", "ouiaId", "ouiaSafe", "innerRef", "tooltipProps"]);
  const m = Gt(_n.displayName, c, d);
  return re.createElement(Ur, Object.assign({ className: y(n), description: i, isDisabled: r, isAriaDisabled: a, itemId: s, onClick: l, tooltipProps: u, ref: f }, m, p), t);
}, _n = re.forwardRef((e, t) => re.createElement(Cb, Object.assign({}, e, { innerRef: t })));
_n.displayName = "DropdownItem";
const Lr = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return re.createElement(zr, Object.assign({ className: y(n) }, i), t);
};
Lr.displayName = "DropdownList";
const _b = {
  name: "AngleDoubleLeftIcon",
  height: 512,
  width: 448,
  svgPath: "M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",
  yOffset: 0,
  xOffset: 0
}, Eb = pe(_b), Sb = {
  name: "AngleDoubleRightIcon",
  height: 512,
  width: 448,
  svgPath: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",
  yOffset: 0,
  xOffset: 0
}, kb = pe(Sb), dn = {
  icon: "pf-v5-c-icon",
  iconContent: "pf-v5-c-icon__content",
  iconProgress: "pf-v5-c-icon__progress",
  modifiers: {
    inline: "pf-m-inline",
    sm: "pf-m-sm",
    md: "pf-m-md",
    lg: "pf-m-lg",
    xl: "pf-m-xl",
    inProgress: "pf-m-in-progress",
    danger: "pf-m-danger",
    warning: "pf-m-warning",
    success: "pf-m-success",
    info: "pf-m-info",
    custom: "pf-m-custom"
  },
  spinner: "pf-v5-c-spinner"
}, Xn = (e) => {
  var { children: t, className: n, progressIcon: i, size: r, iconSize: a, progressIconSize: s, status: l, isInline: c = !1, isInProgress: d = !1, defaultProgressArialabel: f = "Loading...", shouldMirrorRTL: u = !1 } = e, p = z(e, ["children", "className", "progressIcon", "size", "iconSize", "progressIconSize", "status", "isInline", "isInProgress", "defaultProgressArialabel", "shouldMirrorRTL"]);
  const m = i ?? o.createElement(Xt, { diameter: "1em", "aria-label": f });
  return o.createElement(
    "span",
    Object.assign({ className: y(dn.icon, c && dn.modifiers.inline, d && dn.modifiers.inProgress, dn.modifiers[r], n) }, p),
    o.createElement("span", { className: y(dn.iconContent, dn.modifiers[a], dn.modifiers[l], u && "pf-v5-m-mirror-inline-rtl") }, t),
    d && o.createElement("span", { className: y(dn.iconProgress, dn.modifiers[s], n) }, m)
  );
};
Xn.displayName = "Icon";
const Lb = {
  name: "AngleDownIcon",
  height: 512,
  width: 320,
  svgPath: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",
  yOffset: 0,
  xOffset: 0
}, nl = pe(Lb), Ib = {
  name: "SearchIcon",
  height: 512,
  width: 512,
  svgPath: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
  yOffset: 0,
  xOffset: 0
}, mc = pe(Ib), Nb = {
  name: "ArrowRightIcon",
  height: 512,
  width: 448,
  svgPath: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
  yOffset: 0,
  xOffset: 0
}, Tb = pe(Nb), Xe = {
  dirRtl: "pf-v5-m-dir-rtl",
  form: "pf-v5-c-form",
  formActions: "pf-v5-c-form__actions",
  formFieldGroup: "pf-v5-c-form__field-group",
  formFieldGroupBody: "pf-v5-c-form__field-group-body",
  formFieldGroupHeader: "pf-v5-c-form__field-group-header",
  formFieldGroupHeaderActions: "pf-v5-c-form__field-group-header-actions",
  formFieldGroupHeaderDescription: "pf-v5-c-form__field-group-header-description",
  formFieldGroupHeaderMain: "pf-v5-c-form__field-group-header-main",
  formFieldGroupHeaderTitle: "pf-v5-c-form__field-group-header-title",
  formFieldGroupHeaderTitleText: "pf-v5-c-form__field-group-header-title-text",
  formFieldGroupToggle: "pf-v5-c-form__field-group-toggle",
  formFieldGroupToggleButton: "pf-v5-c-form__field-group-toggle-button",
  formFieldGroupToggleIcon: "pf-v5-c-form__field-group-toggle-icon",
  formFieldset: "pf-v5-c-form__fieldset",
  formGroup: "pf-v5-c-form__group",
  formGroupControl: "pf-v5-c-form__group-control",
  formGroupLabel: "pf-v5-c-form__group-label",
  formGroupLabelHelp: "pf-v5-c-form__group-label-help",
  formGroupLabelInfo: "pf-v5-c-form__group-label-info",
  formGroupLabelMain: "pf-v5-c-form__group-label-main",
  formHelperText: "pf-v5-c-form__helper-text",
  formHelperTextIcon: "pf-v5-c-form__helper-text-icon",
  formLabel: "pf-v5-c-form__label",
  formLabelRequired: "pf-v5-c-form__label-required",
  formLabelText: "pf-v5-c-form__label-text",
  formSection: "pf-v5-c-form__section",
  formSectionTitle: "pf-v5-c-form__section-title",
  modifiers: {
    horizontal: "pf-m-horizontal",
    alignRight: "pf-m-align-right",
    noPaddingTop: "pf-m-no-padding-top",
    info: "pf-m-info",
    horizontalOnXs: "pf-m-horizontal-on-xs",
    horizontalOnSm: "pf-m-horizontal-on-sm",
    horizontalOnMd: "pf-m-horizontal-on-md",
    horizontalOnLg: "pf-m-horizontal-on-lg",
    horizontalOnXl: "pf-m-horizontal-on-xl",
    horizontalOn_2xl: "pf-m-horizontal-on-2xl",
    limitWidth: "pf-m-limit-width",
    action: "pf-m-action",
    disabled: "pf-m-disabled",
    inline: "pf-m-inline",
    stack: "pf-m-stack",
    error: "pf-m-error",
    success: "pf-m-success",
    warning: "pf-m-warning",
    inactive: "pf-m-inactive",
    hidden: "pf-m-hidden",
    expanded: "pf-m-expanded"
  },
  themeDark: "pf-v5-theme-dark"
}, il = (e) => {
  var { children: t = null, className: n = "" } = e, i = z(e, ["children", "className"]);
  const r = y(Xe.formGroup, Xe.modifiers.action, n), a = o.createElement("div", { className: y(Xe.formActions) }, t);
  return o.createElement(
    "div",
    Object.assign({}, i, { className: r }),
    o.createElement("div", { className: y(Xe.formGroupControl) }, a)
  );
};
il.displayName = "ActionGroup";
const Rb = {
  name: "--pf-v5-c-form--m-limit-width--MaxWidth",
  value: "55rem",
  var: "var(--pf-v5-c-form--m-limit-width--MaxWidth)"
}, Ab = (e) => {
  var { children: t = null, className: n = "", isHorizontal: i = !1, isWidthLimited: r = !1, maxWidth: a = "", innerRef: s } = e, l = z(e, ["children", "className", "isHorizontal", "isWidthLimited", "maxWidth", "innerRef"]);
  return o.createElement("form", Object.assign({ noValidate: !0 }, a && {
    style: Object.assign({ [Rb.name]: a }, l.style)
  }, l, { className: y(Xe.form, i && Xe.modifiers.horizontal, (r || a) && Xe.modifiers.limitWidth, n), ref: s }), t);
}, Gr = o.forwardRef((e, t) => o.createElement(Ab, Object.assign({ innerRef: t }, e)));
Gr.displayName = "Form";
const wn = (e) => {
  var { children: t = null, className: n = "", label: i, labelInfo: r, labelIcon: a, isRequired: s = !1, isInline: l = !1, hasNoPaddingTop: c = !1, isStack: d = !1, fieldId: f, role: u } = e, p = z(e, ["children", "className", "label", "labelInfo", "labelIcon", "isRequired", "isInline", "hasNoPaddingTop", "isStack", "fieldId", "role"]);
  const m = u === "group" || u === "radiogroup", g = m ? "span" : "label", v = o.createElement(
    o.Fragment,
    null,
    o.createElement(
      g,
      Object.assign({ className: y(Xe.formLabel) }, !m && { htmlFor: f }),
      o.createElement("span", { className: y(Xe.formLabelText) }, i),
      s && o.createElement(
        "span",
        { className: y(Xe.formLabelRequired), "aria-hidden": "true" },
        " ",
        rf
      )
    ),
    " ",
    o.isValidElement(a) && a
  );
  return o.createElement(sn, null, (x) => o.createElement(
    "div",
    Object.assign({ className: y(Xe.formGroup, n) }, u && { role: u }, m && { "aria-labelledby": `${f || x}-legend` }, p),
    i && o.createElement(
      "div",
      Object.assign({ className: y(Xe.formGroupLabel, r && Xe.modifiers.info, c && Xe.modifiers.noPaddingTop) }, m && { id: `${f || x}-legend` }),
      r && o.createElement(
        o.Fragment,
        null,
        o.createElement("div", { className: y(Xe.formGroupLabelMain) }, v),
        o.createElement("div", { className: y(Xe.formGroupLabelInfo) }, r)
      ),
      !r && v
    ),
    o.createElement("div", { className: y(Xe.formGroupControl, l && Xe.modifiers.inline, d && Xe.modifiers.stack) }, t)
  ));
};
wn.displayName = "FormGroup";
const rl = (e) => {
  var { children: t = null, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(Xe.formHelperText, n) }, i), t);
};
rl.displayName = "FormHelperText";
const Li = {
  modifiers: {
    bordered: "pf-m-bordered",
    raised: "pf-m-raised",
    scrollable: "pf-m-scrollable"
  },
  panel: "pf-v5-c-panel",
  panelFooter: "pf-v5-c-panel__footer",
  panelHeader: "pf-v5-c-panel__header",
  panelMain: "pf-v5-c-panel__main",
  panelMainBody: "pf-v5-c-panel__main-body",
  themeDark: "pf-v5-theme-dark"
}, Pb = (e) => {
  var { className: t, children: n, variant: i, isScrollable: r, innerRef: a } = e, s = z(e, ["className", "children", "variant", "isScrollable", "innerRef"]);
  return o.createElement("div", Object.assign({ className: y(Li.panel, i === "raised" && Li.modifiers.raised, i === "bordered" && Li.modifiers.bordered, r && Li.modifiers.scrollable, t), ref: a }, s), n);
}, au = o.forwardRef((e, t) => o.createElement(Pb, Object.assign({ innerRef: t }, e)));
au.displayName = "Panel";
const Mb = {
  name: "--pf-v5-c-panel__main--MaxHeight",
  value: "18.75rem",
  var: "var(--pf-v5-c-panel__main--MaxHeight)"
}, su = (e) => {
  var { className: t, children: n, maxHeight: i } = e, r = z(e, ["className", "children", "maxHeight"]);
  return o.createElement("div", Object.assign({ className: y(Li.panelMain, t), style: { [Mb.name]: i } }, r), n);
};
su.displayName = "PanelMain";
const ou = (e) => {
  var { className: t, children: n } = e, i = z(e, ["className", "children"]);
  return o.createElement("div", Object.assign({ className: y(Li.panelMainBody, t) }, i), n);
};
ou.displayName = "PanelMainBody";
const lu = ({ className: e, parentRef: t, parentInputRef: n, value: i = "", attributes: r = [], formAdditionalItems: a, hasWordsAttrLabel: s = "Has words", advancedSearchDelimiter: l, getAttrValueMap: c, onChange: d, onSearch: f, onClear: u, resetButtonLabel: p = "Reset", submitSearchButtonLabel: m = "Search", isSearchMenuOpen: g, onToggleAdvancedMenu: v }) => {
  const x = o.useRef(null), [w, _] = o.useState(!1);
  o.useEffect(() => {
    r.length > 0 && !l && console.error("AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop");
  }), o.useEffect(() => {
    g && x && x.current ? (x.current.focus(), _(!0)) : !g && w && n && n.current && n.current.focus();
  }, [g]), o.useEffect(() => (document.addEventListener("mousedown", S), document.addEventListener("touchstart", S), document.addEventListener("keydown", I), function() {
    document.removeEventListener("mousedown", S), document.removeEventListener("touchstart", S), document.removeEventListener("keydown", I);
  }));
  const S = (M) => {
    const $ = t && t.current.contains(M.target);
    g && !$ && v(M);
  }, I = (M) => {
    g && M.key === Wn.Escape && t && t.current.contains(M.target) && (v(M), n && n.current.focus());
  }, E = (M) => {
    M.preventDefault(), f && f(M, i, c()), g && v(M);
  }, R = (M, $, D) => {
    const O = c();
    O[M] = $;
    let L = "";
    Object.entries(O).forEach(([j, C]) => {
      if (C.trim() !== "") {
        const P = C.includes(" ") ? `'${C.replace(/(^'|'$)/g, "")}'` : C;
        j !== "haswords" ? L = `${L} ${j}${l}${P}` : L = `${L} ${P}`;
      }
    }), d && d(D, L.replace(/^\s+/g, ""));
  }, k = (M) => {
    const $ = c();
    return $.hasOwnProperty(M) ? $[M] : "";
  }, N = () => {
    const M = [];
    return r.forEach(($, D) => {
      const O = typeof $ == "string" ? $ : $.display, L = typeof $ == "string" ? $ : $.attr;
      D === 0 ? M.push(o.createElement(
        wn,
        { label: O, fieldId: `${L}_${D}`, key: `${$}_${D}` },
        o.createElement($t, { ref: x, type: "text", id: `${L}_${D}`, value: k(L), onChange: (j, C) => R(L, C, j) })
      )) : M.push(o.createElement(
        wn,
        { label: O, fieldId: `${L}_${D}`, key: `${$}_${D}` },
        o.createElement($t, { type: "text", id: `${L}_${D}`, value: k(L), onChange: (j, C) => R(L, C, j) })
      ));
    }), M.push(o.createElement(sn, { key: "hasWords" }, ($) => o.createElement(
      wn,
      { label: s, fieldId: $ },
      o.createElement($t, { type: "text", id: $, value: k("haswords"), onChange: (D, O) => R("haswords", O, D) })
    ))), M;
  };
  return g ? o.createElement(
    au,
    { variant: "raised", className: y(e) },
    o.createElement(
      su,
      null,
      o.createElement(
        ou,
        null,
        o.createElement(
          Gr,
          null,
          N(),
          a || null,
          o.createElement(
            il,
            null,
            o.createElement(ce, { variant: "primary", type: "submit", onClick: E, isDisabled: !i }, m),
            !!u && o.createElement(ce, { variant: "link", type: "reset", onClick: u }, p)
          )
        )
      )
    )
  ) : null;
};
lu.displayName = "SearchInput";
const kt = {
  button: "pf-v5-c-button",
  chipGroupMain: "pf-v5-c-chip-group__main",
  modifiers: {
    disabled: "pf-m-disabled",
    plain: "pf-m-plain",
    icon: "pf-m-icon",
    hint: "pf-m-hint"
  },
  textInputGroup: "pf-v5-c-text-input-group",
  textInputGroupGroup: "pf-v5-c-text-input-group__group",
  textInputGroupIcon: "pf-v5-c-text-input-group__icon",
  textInputGroupMain: "pf-v5-c-text-input-group__main",
  textInputGroupText: "pf-v5-c-text-input-group__text",
  textInputGroupTextInput: "pf-v5-c-text-input-group__text-input",
  textInputGroupUtilities: "pf-v5-c-text-input-group__utilities",
  themeDark: "pf-v5-theme-dark"
}, cu = o.createContext({
  isDisabled: !1
}), za = (e) => {
  var { children: t, className: n, isDisabled: i, isPlain: r, innerRef: a } = e, s = z(e, ["children", "className", "isDisabled", "isPlain", "innerRef"]);
  const l = o.useRef(null), c = a || l;
  return o.createElement(
    cu.Provider,
    { value: { isDisabled: i } },
    o.createElement("div", Object.assign({ ref: c, className: y(kt.textInputGroup, i && kt.modifiers.disabled, r && kt.modifiers.plain, n) }, s), t)
  );
};
za.displayName = "TextInputGroup";
const Db = (e) => {
  var { children: t, className: n, icon: i, type: r = "text", hint: a, onChange: s = () => {
  }, onFocus: l, onBlur: c, "aria-label": d = "Type to filter", value: f, placeholder: u, innerRef: p, name: m, "aria-activedescendant": g, role: v, isExpanded: x, "aria-controls": w, inputId: _ } = e, S = z(e, ["children", "className", "icon", "type", "hint", "onChange", "onFocus", "onBlur", "aria-label", "value", "placeholder", "innerRef", "name", "aria-activedescendant", "role", "isExpanded", "aria-controls", "inputId"]);
  const { isDisabled: I } = o.useContext(cu), E = o.useRef(null), R = p || E, k = (N) => {
    s(N, N.currentTarget.value);
  };
  return o.createElement(
    "div",
    Object.assign({ className: y(kt.textInputGroupMain, i && kt.modifiers.icon, n) }, S),
    t,
    o.createElement(
      "span",
      { className: y(kt.textInputGroupText) },
      a && o.createElement("input", { className: y(kt.textInputGroupTextInput, kt.modifiers.hint), type: "text", disabled: !0, "aria-hidden": "true", value: a, id: _ }),
      i && o.createElement("span", { className: y(kt.textInputGroupIcon) }, i),
      o.createElement("input", Object.assign({ ref: R, type: r, className: y(kt.textInputGroupTextInput), "aria-label": d, disabled: I, onChange: k, onFocus: l, onBlur: c, value: f || "", placeholder: u, name: m, "aria-activedescendant": g, id: _ }, v && { role: v }, x !== void 0 && { "aria-expanded": x }, w && { "aria-controls": w }))
    )
  );
}, Wa = o.forwardRef((e, t) => o.createElement(Db, Object.assign({ innerRef: t }, e)));
Wa.displayName = "TextInputGroupMain";
const Ga = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(kt.textInputGroupUtilities, n) }, i), t);
};
Ga.displayName = "TextInputGroupUtilities";
const du = (e) => {
  var { className: t, searchInputId: n, value: i = "", attributes: r = [], formAdditionalItems: a, hasWordsAttrLabel: s = "Has words", advancedSearchDelimiter: l, placeholder: c, hint: d, onChange: f, onSearch: u, onClear: p, onToggleAdvancedSearch: m, isAdvancedSearchOpen: g, resultsCount: v, onNextClick: x, onPreviousClick: w, innerRef: _, expandableInput: S, "aria-label": I = "Search input", resetButtonLabel: E = "Reset", openMenuButtonAriaLabel: R = "Open advanced search", previousNavigationButtonAriaLabel: k = "Previous", isPreviousNavigationButtonDisabled: N = !1, isNextNavigationButtonDisabled: M = !1, nextNavigationButtonAriaLabel: $ = "Next", submitSearchButtonLabel: D = "Search", isDisabled: O = !1, appendTo: L, zIndex: j = 9999, name: C, areUtilitiesDisplayed: P } = e, G = z(e, ["className", "searchInputId", "value", "attributes", "formAdditionalItems", "hasWordsAttrLabel", "advancedSearchDelimiter", "placeholder", "hint", "onChange", "onSearch", "onClear", "onToggleAdvancedSearch", "isAdvancedSearchOpen", "resultsCount", "onNextClick", "onPreviousClick", "innerRef", "expandableInput", "aria-label", "resetButtonLabel", "openMenuButtonAriaLabel", "previousNavigationButtonAriaLabel", "isPreviousNavigationButtonDisabled", "isNextNavigationButtonDisabled", "nextNavigationButtonAriaLabel", "submitSearchButtonLabel", "isDisabled", "appendTo", "zIndex", "name", "areUtilitiesDisplayed"]);
  const [B, J] = o.useState(!1), [b, F] = o.useState(i), K = o.useRef(null), V = o.useRef(null), U = _ || V, q = o.useRef(null), W = o.useRef(null), X = o.useRef(null), [te, ie] = o.useState(!1), { isExpanded: Y, onToggleExpand: oe, toggleAriaLabel: de } = S || {};
  o.useEffect(() => {
    var he, Ee;
    if (te)
      Y ? (he = U?.current) === null || he === void 0 || he.focus() : (Ee = q?.current) === null || Ee === void 0 || Ee.focus();
    else return;
    ie(!1);
  }, [te, Y, U, q]), o.useEffect(() => {
    F(i);
  }, [i]), o.useEffect(() => {
    r.length > 0 && !l && console.error("An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop");
  }), o.useEffect(() => {
    J(g);
  }, [g]);
  const Ce = (he, Ee) => {
    f && f(he, Ee), F(Ee);
  }, Oe = (he) => {
    const Ee = !B;
    J(Ee), m && m(he, Ee);
  }, Te = (he) => {
    he.preventDefault(), u && u(he, i, Le()), J(!1);
  }, De = (he) => {
    let Ee;
    return he.match(/\\?.|^$/g).reduce((We, ue) => (ue === "'" || ue === '"' ? (Ee || (Ee = ue), ue === Ee && (We.quote = !We.quote)) : !We.quote && ue === " " ? We.a.push("") : We.a[We.a.length - 1] += ue.replace(/\\(.)/, "$1"), We), { a: [""] }).a;
  }, Le = () => {
    const he = {};
    return De(b).map((We) => {
      const ue = We.split(l);
      ue.length === 2 ? he[ue[0]] = ue[1].replace(/(^'|'$)/g, "") : ue.length === 1 && (he.haswords = he.hasOwnProperty("haswords") ? `${he.haswords} ${ue[0]}` : ue[0]);
    }), he;
  }, T = (he) => {
    he.key === "Enter" && Te(he);
  }, A = (he) => {
    p && p(he), U && U.current && U.current.focus();
  }, H = (he) => {
    F(""), oe(he, Y), ie(!0);
  }, ee = i && (v || !!x && !!w || !!p && !S), ne = (he = {}) => {
    var Ee = z(he, []);
    return o.createElement(
      za,
      Object.assign({ isDisabled: O }, Ee),
      o.createElement(Wa, { hint: d, icon: o.createElement(mc, null), innerRef: U, value: b, placeholder: c, "aria-label": I, onKeyDown: T, onChange: Ce, name: C, inputId: n }),
      (ee || P) && o.createElement(
        Ga,
        null,
        v && o.createElement(ja, { isRead: !0 }, v),
        !!x && !!w && o.createElement(
          "div",
          { className: kt.textInputGroupGroup },
          o.createElement(
            ce,
            { variant: Me.plain, "aria-label": k, isDisabled: O || N, onClick: w },
            o.createElement(zg, null)
          ),
          o.createElement(
            ce,
            { variant: Me.plain, "aria-label": $, isDisabled: O || M, onClick: x },
            o.createElement(nl, null)
          )
        ),
        !!p && !S && o.createElement(
          ce,
          { variant: Me.plain, isDisabled: O, "aria-label": E, onClick: A },
          o.createElement(an, null)
        )
      )
    );
  }, Q = o.createElement(ce, { variant: Me.plain, "aria-label": de, "aria-expanded": Y, icon: Y ? o.createElement(an, null) : o.createElement(mc, null), onClick: H, ref: q }), le = (he = {}) => {
    var Ee = z(he, []);
    return o.createElement(
      Hn,
      Object.assign({}, Ee),
      o.createElement(
        xt,
        { isFill: !0 },
        ne(),
        " "
      ),
      o.createElement(xt, { isPlain: !0 }, Q)
    );
  }, ae = (he = {}) => {
    var Ee = z(he, []);
    return S ? le(Object.assign({}, Ee)) : ne(Object.assign({}, Ee));
  }, ve = (he = {}) => {
    var Ee = z(he, []);
    return o.createElement(
      Hn,
      Object.assign({ ref: W }, Ee),
      o.createElement(xt, { isFill: !0 }, ne()),
      (r.length > 0 || m) && o.createElement(
        xt,
        { isPlain: !0 },
        o.createElement(
          ce,
          { className: B && "pf-m-expanded", variant: Me.control, "aria-label": R, onClick: Oe, isDisabled: O, "aria-expanded": B },
          o.createElement(Mf, null)
        )
      ),
      !!u && o.createElement(
        xt,
        null,
        o.createElement(
          ce,
          { type: "submit", variant: Me.control, "aria-label": D, onClick: Te, isDisabled: O },
          o.createElement(
            Xn,
            { shouldMirrorRTL: !0 },
            o.createElement(Tb, null)
          )
        )
      ),
      S && o.createElement(xt, null, Q)
    );
  }, ye = Object.assign(Object.assign({}, G), { className: t && y(t), innerRef: K });
  if (S && !Y)
    return o.createElement(
      Hn,
      Object.assign({}, ye),
      o.createElement(xt, null, Q)
    );
  if (u || r.length > 0 || m) {
    if (r.length > 0) {
      const he = o.createElement(
        "div",
        { ref: X },
        o.createElement(lu, { value: i, parentRef: K, parentInputRef: U, onSearch: u, onClear: p, onChange: f, onToggleAdvancedMenu: Oe, resetButtonLabel: E, submitSearchButtonLabel: D, attributes: r, formAdditionalItems: a, hasWordsAttrLabel: s, advancedSearchDelimiter: l, getAttrValueMap: Le, isSearchMenuOpen: B })
      ), Ee = o.createElement(
        "div",
        Object.assign({ className: y(t), ref: K }, G),
        o.createElement(Ln, { trigger: ve(), triggerRef: W, popper: he, popperRef: X, isVisible: B, enableFlip: !0, appendTo: () => L || K.current, zIndex: j })
      ), We = o.createElement(
        "div",
        Object.assign({ className: y(t), ref: K }, G),
        ve(),
        he
      );
      return L !== "inline" ? Ee : We;
    }
    return ve(Object.assign({}, ye));
  }
  return ae(ye);
};
du.displayName = "SearchInputBase";
const al = o.forwardRef((e, t) => o.createElement(du, Object.assign({}, e, { innerRef: t })));
al.displayName = "SearchInput";
const Et = {
  dirRtl: "pf-v5-m-dir-rtl",
  expandableSection: "pf-v5-c-expandable-section",
  expandableSectionContent: "pf-v5-c-expandable-section__content",
  expandableSectionToggle: "pf-v5-c-expandable-section__toggle",
  expandableSectionToggleIcon: "pf-v5-c-expandable-section__toggle-icon",
  expandableSectionToggleText: "pf-v5-c-expandable-section__toggle-text",
  modifiers: {
    expanded: "pf-m-expanded",
    detached: "pf-m-detached",
    truncate: "pf-m-truncate",
    limitWidth: "pf-m-limit-width",
    displayLg: "pf-m-display-lg",
    indented: "pf-m-indented",
    active: "pf-m-active",
    expandTop: "pf-m-expand-top"
  }
}, fu = {
  name: "--pf-v5-c-expandable-section--m-truncate__content--LineClamp",
  value: "3",
  var: "var(--pf-v5-c-expandable-section--m-truncate__content--LineClamp)"
};
var Jt;
(function(e) {
  e.default = "default", e.truncate = "truncate";
})(Jt || (Jt = {}));
const hc = (e, t) => {
  !t || e < 1 || t.style.setProperty(fu.name, e.toString());
};
class sl extends o.Component {
  constructor(t) {
    super(t), this.expandableContentRef = o.createRef(), this.observer = () => {
    }, this.checkToggleVisibility = () => {
      var n;
      if (!((n = this.expandableContentRef) === null || n === void 0) && n.current) {
        const i = this.props.truncateMaxLines || parseInt(fu.value), r = this.expandableContentRef.current.scrollHeight / parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);
        this.setState({
          hasToggle: r > i
        });
      }
    }, this.resize = () => {
      if (this.expandableContentRef.current) {
        const { offsetWidth: n } = this.expandableContentRef.current;
        this.state.previousWidth !== n && (this.setState({ previousWidth: n }), this.checkToggleVisibility());
      }
    }, this.handleResize = Ro(this.resize, 250), this.state = {
      isExpanded: t.isExpanded,
      hasToggle: !0,
      previousWidth: void 0
    };
  }
  calculateToggleText(t, n, i, r) {
    return r && n !== "" ? n : !r && i !== "" ? i : t;
  }
  componentDidMount() {
    if (this.props.variant === Jt.truncate) {
      const t = this.expandableContentRef.current;
      this.setState({ previousWidth: t.offsetWidth }), this.observer = Fi(t, this.handleResize, !1), this.props.truncateMaxLines && hc(this.props.truncateMaxLines, t), this.checkToggleVisibility();
    }
  }
  componentDidUpdate(t) {
    if (this.props.variant === Jt.truncate && (t.truncateMaxLines !== this.props.truncateMaxLines || t.children !== this.props.children)) {
      const n = this.expandableContentRef.current;
      hc(this.props.truncateMaxLines, n), this.checkToggleVisibility();
    }
  }
  componentWillUnmount() {
    this.props.variant === Jt.truncate && this.observer();
  }
  render() {
    const t = this.props, {
      onToggle: n,
      isActive: i,
      className: r,
      toggleText: a,
      toggleTextExpanded: s,
      toggleTextCollapsed: l,
      toggleContent: c,
      children: d,
      isExpanded: f,
      isDetached: u,
      displaySize: p,
      isWidthLimited: m,
      isIndented: g,
      contentId: v,
      toggleId: x,
      variant: w,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      truncateMaxLines: _
    } = t, S = z(t, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "toggleContent", "children", "isExpanded", "isDetached", "displaySize", "isWidthLimited", "isIndented", "contentId", "toggleId", "variant", "truncateMaxLines"]);
    u && !x && console.warn("ExpandableSection: The toggleId value must be passed in and must match the toggleId of the ExpandableSectionToggle.");
    let I = n, E = f;
    const R = v || Mi("expandable-section-content"), k = x || Mi("expandable-section-toggle");
    f === void 0 && (E = this.state.isExpanded, I = ($, D) => {
      this.setState({ isExpanded: D }, () => n($, this.state.isExpanded));
    });
    const N = this.calculateToggleText(a, s, l, E), M = !u && o.createElement(
      "button",
      { className: y(Et.expandableSectionToggle), type: "button", "aria-expanded": E, "aria-controls": R, id: k, onClick: ($) => I($, !E) },
      w !== Jt.truncate && o.createElement(
        "span",
        { className: y(Et.expandableSectionToggleIcon) },
        o.createElement(Ot, { "aria-hidden": !0 })
      ),
      o.createElement("span", { className: y(Et.expandableSectionToggleText) }, c || N)
    );
    return o.createElement(
      "div",
      Object.assign({ className: y(Et.expandableSection, E && Et.modifiers.expanded, i && Et.modifiers.active, u && Et.modifiers.detached, p === "lg" && Et.modifiers.displayLg, m && Et.modifiers.limitWidth, g && Et.modifiers.indented, w === Jt.truncate && Et.modifiers.truncate, r) }, S),
      w === Jt.default && M,
      o.createElement("div", { ref: this.expandableContentRef, className: y(Et.expandableSectionContent), hidden: w !== Jt.truncate && !E, id: R, "aria-labelledby": k, role: "region" }, d),
      w === Jt.truncate && this.state.hasToggle && M
    );
  }
}
sl.displayName = "ExpandableSection";
sl.defaultProps = {
  className: "",
  toggleText: "",
  toggleTextExpanded: "",
  toggleTextCollapsed: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onToggle: (e, t) => {
  },
  isActive: !1,
  isDetached: !1,
  displaySize: "default",
  isWidthLimited: !1,
  isIndented: !1,
  variant: "default"
};
var gc;
(function(e) {
  e.horizontal = "horizontal", e.vertical = "vertical", e.both = "both";
})(gc || (gc = {}));
var bc;
(function(e) {
  e.default = "default", e.plain = "plain";
})(bc || (bc = {}));
class ol extends o.Component {
  constructor(t) {
    super(t), this.inputRef = o.createRef(), this.setAutoHeight = (n) => {
      const i = n.parentElement;
      i.style.setProperty("height", "inherit");
      const r = window.getComputedStyle(n), a = parseInt(r.getPropertyValue("border-top-width")) + parseInt(r.getPropertyValue("padding-top")) + n.scrollHeight + parseInt(r.getPropertyValue("padding-bottom")) + parseInt(r.getPropertyValue("border-bottom-width"));
      i.style.setProperty("height", `${a}px`);
    }, this.handleChange = (n) => {
      const i = n.currentTarget;
      this.props.autoResize && ze && this.setAutoHeight(i), this.props.onChange && this.props.onChange(n, i.value);
    }, !t.id && !t["aria-label"] && console.error("TextArea: TextArea requires either an id or aria-label to be specified");
  }
  componentDidMount() {
    const t = this.props.innerRef || this.inputRef;
    if (this.props.autoResize && ze) {
      const n = t.current;
      this.setAutoHeight(n);
    }
  }
  render() {
    const t = this.props, {
      className: n,
      value: i,
      validated: r,
      isRequired: a,
      isDisabled: s,
      readOnlyVariant: l,
      resizeOrientation: c,
      innerRef: d,
      disabled: f,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      autoResize: u,
      onChange: p,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      onBlur: m,
      onFocus: g
    } = t, v = z(t, ["className", "value", "validated", "isRequired", "isDisabled", "readOnlyVariant", "resizeOrientation", "innerRef", "disabled", "autoResize", "onChange", "onBlur", "onFocus"]), x = `resize${ga(c)}`, w = ["success", "error", "warning"].includes(r);
    return o.createElement(
      "span",
      { className: y(it.formControl, l && it.modifiers.readonly, l === "plain" && it.modifiers.plain, c && it.modifiers[x], s && it.modifiers.disabled, w && it.modifiers[r], n) },
      o.createElement("textarea", Object.assign({ onChange: this.handleChange, onFocus: g, onBlur: m }, typeof this.props.defaultValue != "string" && { value: i }, { "aria-invalid": r === zn.error, required: a, disabled: s || f, readOnly: !!l, ref: d || this.inputRef }, v)),
      w && o.createElement(
        "span",
        { className: y(it.formControlUtilities) },
        o.createElement(no, { status: r })
      )
    );
  }
}
ol.displayName = "TextArea";
ol.defaultProps = {
  innerRef: o.createRef(),
  className: "",
  isRequired: !1,
  isDisabled: !1,
  validated: "default",
  resizeOrientation: "both",
  "aria-label": null
};
const uu = o.forwardRef((e, t) => o.createElement(ol, Object.assign({}, e, { innerRef: t })));
uu.displayName = "TextArea";
var hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const et = {
  button: "pf-v5-c-button",
  dirRtl: "pf-v5-m-dir-rtl",
  jumpLinks: "pf-v5-c-jump-links",
  jumpLinksItem: "pf-v5-c-jump-links__item",
  jumpLinksLabel: "pf-v5-c-jump-links__label",
  jumpLinksLink: "pf-v5-c-jump-links__link",
  jumpLinksLinkText: "pf-v5-c-jump-links__link-text",
  jumpLinksList: "pf-v5-c-jump-links__list",
  jumpLinksMain: "pf-v5-c-jump-links__main",
  jumpLinksToggle: "pf-v5-c-jump-links__toggle",
  jumpLinksToggleIcon: "pf-v5-c-jump-links__toggle-icon",
  jumpLinksToggleText: "pf-v5-c-jump-links__toggle-text",
  modifiers: {
    center: "pf-m-center",
    vertical: "pf-m-vertical",
    expandable: "pf-m-expandable",
    nonExpandable: "pf-m-non-expandable",
    expandableOnSm: "pf-m-expandable-on-sm",
    nonExpandableOnSm: "pf-m-non-expandable-on-sm",
    expandableOnMd: "pf-m-expandable-on-md",
    nonExpandableOnMd: "pf-m-non-expandable-on-md",
    expandableOnLg: "pf-m-expandable-on-lg",
    nonExpandableOnLg: "pf-m-non-expandable-on-lg",
    expandableOnXl: "pf-m-expandable-on-xl",
    nonExpandableOnXl: "pf-m-non-expandable-on-xl",
    expandableOn_2xl: "pf-m-expandable-on-2xl",
    nonExpandableOn_2xl: "pf-m-non-expandable-on-2xl",
    expanded: "pf-m-expanded",
    current: "pf-m-current"
  }
}, Fb = {
  modifiers: {
    gutter: "pf-m-gutter",
    panelRight: "pf-m-panel-right",
    stack: "pf-m-stack",
    split: "pf-m-split",
    border: "pf-m-border",
    padding: "pf-m-padding",
    sticky: "pf-m-sticky",
    static: "pf-m-static",
    noBackground: "pf-m-no-background",
    widthDefault: "pf-m-width-default",
    width_25: "pf-m-width-25",
    width_33: "pf-m-width-33",
    width_50: "pf-m-width-50",
    width_66: "pf-m-width-66",
    width_75: "pf-m-width-75",
    width_100: "pf-m-width-100",
    widthDefaultOnSm: "pf-m-width-default-on-sm",
    width_25OnSm: "pf-m-width-25-on-sm",
    width_33OnSm: "pf-m-width-33-on-sm",
    width_50OnSm: "pf-m-width-50-on-sm",
    width_66OnSm: "pf-m-width-66-on-sm",
    width_75OnSm: "pf-m-width-75-on-sm",
    width_100OnSm: "pf-m-width-100-on-sm",
    widthDefaultOnMd: "pf-m-width-default-on-md",
    width_25OnMd: "pf-m-width-25-on-md",
    width_33OnMd: "pf-m-width-33-on-md",
    width_50OnMd: "pf-m-width-50-on-md",
    width_66OnMd: "pf-m-width-66-on-md",
    width_75OnMd: "pf-m-width-75-on-md",
    width_100OnMd: "pf-m-width-100-on-md",
    widthDefaultOnLg: "pf-m-width-default-on-lg",
    width_25OnLg: "pf-m-width-25-on-lg",
    width_33OnLg: "pf-m-width-33-on-lg",
    width_50OnLg: "pf-m-width-50-on-lg",
    width_66OnLg: "pf-m-width-66-on-lg",
    width_75OnLg: "pf-m-width-75-on-lg",
    width_100OnLg: "pf-m-width-100-on-lg",
    widthDefaultOnXl: "pf-m-width-default-on-xl",
    width_25OnXl: "pf-m-width-25-on-xl",
    width_33OnXl: "pf-m-width-33-on-xl",
    width_50OnXl: "pf-m-width-50-on-xl",
    width_66OnXl: "pf-m-width-66-on-xl",
    width_75OnXl: "pf-m-width-75-on-xl",
    width_100OnXl: "pf-m-width-100-on-xl",
    widthDefaultOn_2xl: "pf-m-width-default-on-2xl",
    width_25On_2xl: "pf-m-width-25-on-2xl",
    width_33On_2xl: "pf-m-width-33-on-2xl",
    width_50On_2xl: "pf-m-width-50-on-2xl",
    width_66On_2xl: "pf-m-width-66-on-2xl",
    width_75On_2xl: "pf-m-width-75-on-2xl",
    width_100On_2xl: "pf-m-width-100-on-2xl"
  },
  sidebar: "pf-v5-c-sidebar",
  sidebarContent: "pf-v5-c-sidebar__content",
  sidebarMain: "pf-v5-c-sidebar__main",
  sidebarPanel: "pf-v5-c-sidebar__panel"
}, Ir = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("ul", Object.assign({ className: y(et.jumpLinksList, n), role: "list" }, i), t);
};
Ir.displayName = "JumpLinksList";
const Nr = (e) => {
  var {
    isActive: t,
    href: n,
    // eslint-disable-next-line
    node: i,
    children: r,
    onClick: a,
    className: s
  } = e, l = z(e, ["isActive", "href", "node", "children", "onClick", "className"]);
  const c = o.Children.toArray(r), d = c.filter((f) => f.type === Ir);
  return r = c.filter((f) => f.type !== Ir), o.createElement(
    "li",
    Object.assign({ className: y(et.jumpLinksItem, t && et.modifiers.current, s) }, t && { "aria-current": "location" }, l),
    o.createElement(
      "a",
      { className: et.jumpLinksLink, href: n, onClick: a },
      o.createElement("span", { className: et.jumpLinksLinkText }, r)
    ),
    d
  );
};
Nr.displayName = "JumpLinksItem";
const $b = {
  name: "--pf-v5-c-jump-links__toggle--Display",
  value: "none",
  var: "var(--pf-v5-c-jump-links__toggle--Display)"
}, ca = (e, t) => (o.Children.forEach(e, (n) => {
  if (ze && document.getElementById && document.querySelector && n.type === Nr) {
    const i = n.props.node || n.props.href;
    typeof i == "string" ? i.startsWith("#") ? t.push(document.getElementById(i.substr(1))) : t.push(document.querySelector(i)) : i instanceof HTMLElement && t.push(i);
  }
  [o.Fragment, Ir, Nr].includes(n.type) && ca(n.props.children, t);
}), t);
function Bb(e) {
  return e && getComputedStyle(e).getPropertyValue($b.name).includes("block");
}
const mu = (e) => {
  var { isCentered: t, isVertical: n, children: i, label: r, "aria-label": a = typeof r == "string" ? r : null, scrollableRef: s, scrollableSelector: l, activeIndex: c = 0, offset: d = 0, expandable: f, isExpanded: u = !1, alwaysShowLabel: p = !0, toggleAriaLabel: m = "Toggle jump links", className: g } = e, v = z(e, ["isCentered", "isVertical", "children", "label", "aria-label", "scrollableRef", "scrollableSelector", "activeIndex", "offset", "expandable", "isExpanded", "alwaysShowLabel", "toggleAriaLabel", "className"]);
  const x = !!(s || l), [w, _] = o.useState(x ? ca(i, []) : []), [S, I] = o.useState(c), [E, R] = o.useState(u), k = o.useRef(!1), N = o.useRef();
  let M;
  const $ = () => {
    if (s)
      return s instanceof HTMLElement ? s : typeof s == "function" ? s() : s.current;
    if (l)
      return document.querySelector(l);
  }, D = o.useCallback(() => {
    if (!ze || !x || !(M instanceof HTMLElement))
      return;
    if (k.current) {
      k.current = !1;
      return;
    }
    const j = Math.ceil(M.scrollTop + d);
    window.requestAnimationFrame(() => {
      let C = w;
      (C.every((B) => !B?.offsetTop) || !C[0] || C.includes(null)) && (C = ca(i, []), _(C));
      const G = C.map((B, J) => ({
        y: B ? B.offsetTop : null,
        index: J
      })).filter(({ y: B }) => B !== null).sort((B, J) => J.y - B.y);
      for (const { y: B, index: J } of G)
        if (j >= B)
          return I(J);
    });
  }, [w, x, M, d]);
  o.useEffect(() => {
    if (M = $(), M instanceof HTMLElement)
      return M.addEventListener("scroll", D), () => M.removeEventListener("scroll", D);
  }, [M, D, $]), o.useEffect(() => {
    D();
  }, []);
  let O = 0;
  const L = (j) => x ? o.Children.map(j, (C) => {
    if (C.type === Nr) {
      const { onClick: P, isActive: G } = C.props, B = O++, J = w[B];
      return o.cloneElement(C, {
        onClick(b) {
          k.current = !0;
          let F;
          J || (F = ca(j, []), _(F));
          const K = J || F[B];
          if (K) {
            const V = $();
            if (V instanceof HTMLElement) {
              if (Bb(N.current)) {
                N.current && N.current.classList.remove(et.modifiers.expanded);
                let U = N.current && N.current.parentElement;
                for (; U && !U.classList.contains(Fb.modifiers.sticky); )
                  U = U.parentElement;
                R(!1), U && (d += U.scrollHeight);
              }
              V.scrollTo(0, K.offsetTop - d);
            }
            K.focus(), window.history.pushState("", "", b.currentTarget.href), b.preventDefault(), I(B);
          }
          P && P(b);
        },
        isActive: G || S === B,
        children: L(C.props.children)
      });
    } else {
      if (C.type === o.Fragment)
        return L(C.props.children);
      if (C.type === Ir)
        return o.cloneElement(C, { children: L(C.props.children) });
    }
    return C;
  }) : j;
  return o.createElement(
    "nav",
    Object.assign({ className: y(et.jumpLinks, t && et.modifiers.center, n && et.modifiers.vertical, $e(f, et), E && et.modifiers.expanded, g), "aria-label": a, ref: N }, v),
    o.createElement(
      "div",
      { className: et.jumpLinksMain },
      o.createElement(
        "div",
        { className: y(`${et.jumpLinks}__header`) },
        f && o.createElement(
          "div",
          { className: et.jumpLinksToggle },
          o.createElement(
            ce,
            { variant: "plain", onClick: () => R(!E), "aria-label": m, "aria-expanded": E },
            o.createElement(
              "span",
              { className: et.jumpLinksToggleIcon },
              o.createElement(Ot, null)
            ),
            r && o.createElement(
              "span",
              { className: y(et.jumpLinksToggleText) },
              " ",
              r,
              " "
            )
          )
        ),
        r && p && o.createElement("div", { className: y(et.jumpLinksLabel) }, r)
      ),
      o.createElement("ul", { className: et.jumpLinksList, role: "list" }, L(i))
    )
  );
};
mu.displayName = "JumpLinks";
const Ye = {
  button: "pf-v5-c-button",
  label: "pf-v5-c-label",
  labelActions: "pf-v5-c-label__actions",
  labelContent: "pf-v5-c-label__content",
  labelIcon: "pf-v5-c-label__icon",
  labelText: "pf-v5-c-label__text",
  modifiers: {
    compact: "pf-m-compact",
    blue: "pf-m-blue",
    green: "pf-m-green",
    orange: "pf-m-orange",
    red: "pf-m-red",
    purple: "pf-m-purple",
    cyan: "pf-m-cyan",
    gold: "pf-m-gold",
    outline: "pf-m-outline",
    overflow: "pf-m-overflow",
    add: "pf-m-add",
    editable: "pf-m-editable",
    editableActive: "pf-m-editable-active",
    disabled: "pf-m-disabled"
  },
  themeDark: "pf-v5-theme-dark"
}, jb = {
  button: "pf-v5-c-button",
  labelGroup: "pf-v5-c-label-group",
  labelGroupClose: "pf-v5-c-label-group__close",
  labelGroupLabel: "pf-v5-c-label-group__label",
  labelGroupList: "pf-v5-c-label-group__list",
  labelGroupListItem: "pf-v5-c-label-group__list-item",
  labelGroupMain: "pf-v5-c-label-group__main",
  labelGroupTextarea: "pf-v5-c-label-group__textarea",
  modifiers: {
    category: "pf-m-category",
    vertical: "pf-m-vertical",
    editable: "pf-m-editable",
    textarea: "pf-m-textarea"
  }
}, Vb = {
  name: "--pf-v5-c-label__text--MaxWidth",
  value: "100%",
  var: "var(--pf-v5-c-label__text--MaxWidth)"
}, Hb = {
  blue: Ye.modifiers.blue,
  cyan: Ye.modifiers.cyan,
  green: Ye.modifiers.green,
  orange: Ye.modifiers.orange,
  purple: Ye.modifiers.purple,
  red: Ye.modifiers.red,
  gold: Ye.modifiers.gold,
  grey: ""
}, ll = (e) => {
  var { children: t, className: n = "", color: i = "grey", variant: r = "filled", isCompact: a = !1, isDisabled: s = !1, isEditable: l = !1, editableProps: c, textMaxWidth: d, tooltipPosition: f, icon: u, onClose: p, onClick: m, onEditCancel: g, onEditComplete: v, closeBtn: x, closeBtnAriaLabel: w, closeBtnProps: _, href: S, isOverflowLabel: I, render: E } = e, R = z(e, ["children", "className", "color", "variant", "isCompact", "isDisabled", "isEditable", "editableProps", "textMaxWidth", "tooltipPosition", "icon", "onClose", "onClick", "onEditCancel", "onEditComplete", "closeBtn", "closeBtnAriaLabel", "closeBtnProps", "href", "isOverflowLabel", "render"]);
  const [k, N] = me(!1), [M, $] = me(t), D = o.useRef(), O = o.useRef();
  o.useEffect(() => (document.addEventListener("mousedown", L), document.addEventListener("keydown", j), () => {
    document.removeEventListener("mousedown", L), document.removeEventListener("keydown", j);
  })), o.useEffect(() => {
    m && S ? console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop.") : m && l && console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.");
  }, [m, S, l]);
  const L = (Y) => {
    k && O && O.current && !O.current.contains(Y.target) && (O.current.value && v && v(Y, O.current.value), N(!1));
  }, j = (Y) => {
    var oe, de;
    const Ce = Y.key;
    if (!(!k && (!D || !D.current || !D.current.contains(Y.target)) || k && (!O || !O.current || !O.current.contains(Y.target))) && (k && (Ce === "Enter" || Ce === "Tab") && (Y.preventDefault(), Y.stopImmediatePropagation(), O.current.value && v && v(Y, O.current.value), N(!1), (oe = D?.current) === null || oe === void 0 || oe.focus()), k && Ce === "Escape" && (Y.preventDefault(), Y.stopImmediatePropagation(), O.current.value && (O.current.value = t, g && g(Y, t)), N(!1), (de = D?.current) === null || de === void 0 || de.focus()), !k && Ce === "Enter")) {
      Y.preventDefault(), Y.stopImmediatePropagation(), N(!0);
      const Oe = Y.target, Te = document.createRange(), De = window.getSelection();
      Te.selectNodeContents(Oe), Te.collapse(!1), De.removeAllRanges(), De.addRange(Te);
    }
  }, C = (S || m) && s, P = o.createElement(
    ce,
    Object.assign({ type: "button", variant: "plain", onClick: p, "aria-label": w || `Close ${t}` }, C && { isDisabled: !0 }, _),
    o.createElement(an, null)
  ), G = o.createElement("span", { className: y(Ye.labelActions) }, x || P), B = o.createRef(), J = o.useRef(), [b, F] = o.useState(!1);
  Sr(() => {
    const Y = l ? D : B;
    k || F(Y.current && Y.current.offsetWidth < Y.current.scrollWidth);
  }, [k]);
  const K = o.createElement(
    o.Fragment,
    null,
    u && o.createElement("span", { className: y(Ye.labelIcon) }, u),
    o.createElement("span", Object.assign({ ref: B, className: y(Ye.labelText) }, d && {
      style: {
        [Vb.name]: d
      }
    }), t)
  );
  o.useEffect(() => {
    k && O && O.current && O.current.focus();
  }, [O, k]);
  const V = () => {
    $(O.current.value);
  };
  let U = "span";
  S ? U = "a" : (l || m && !I) && (U = "button");
  const q = {
    type: "button",
    onClick: m
  }, W = U === "button", X = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ className: y(Ye.labelContent) }, b && { tabIndex: 0 }), S && { href: S }), S && s && { onClick: (Y) => Y.preventDefault() }), W && q), l && Object.assign({ ref: D, onClick: (Y) => {
    N(!0), Y.stopPropagation();
  } }, c)), C && W && { disabled: !0 }), C && S && { tabIndex: -1, "aria-disabled": !0 });
  let te = o.createElement(U, Object.assign({}, X), K);
  E ? te = o.createElement(
    o.Fragment,
    null,
    b && o.createElement(ft, { triggerRef: J, content: t, position: f }),
    E({
      className: Ye.labelContent,
      content: K,
      componentRef: J
    })
  ) : b && (te = o.createElement(ft, { content: t, position: f }, te));
  const ie = I ? "button" : "span";
  return o.createElement(
    ie,
    Object.assign({}, R, { className: y(Ye.label, C && Ye.modifiers.disabled, Hb[i], r === "outline" && Ye.modifiers.outline, I && Ye.modifiers.overflow, a && Ye.modifiers.compact, l && jb.modifiers.editable, k && Ye.modifiers.editableActive, n), onClick: I ? m : void 0 }, ie === "button" && { type: "button" }),
    !k && te,
    !k && p && G,
    k && o.createElement("input", Object.assign({ className: y(Ye.labelContent), type: "text", id: "editable-input", ref: O, value: M, onChange: V }, c))
  );
};
ll.displayName = "Label";
const St = {
  list: "pf-v5-c-list",
  listItem: "pf-v5-c-list__item",
  listItemIcon: "pf-v5-c-list__item-icon",
  modifiers: {
    iconLg: "pf-m-icon-lg",
    plain: "pf-m-plain",
    inline: "pf-m-inline",
    bordered: "pf-m-bordered"
  }
};
var so;
(function(e) {
  e.number = "1", e.lowercaseLetter = "a", e.uppercaseLetter = "A", e.lowercaseRomanNumber = "i", e.uppercaseRomanNumber = "I";
})(so || (so = {}));
var vc;
(function(e) {
  e.inline = "inline";
})(vc || (vc = {}));
var va;
(function(e) {
  e.ol = "ol", e.ul = "ul";
})(va || (va = {}));
const hu = (e) => {
  var { className: t = "", children: n = null, variant: i = null, isBordered: r = !1, isPlain: a = !1, iconSize: s = "default", type: l = so.number, ref: c = null, component: d = va.ul } = e, f = z(e, ["className", "children", "variant", "isBordered", "isPlain", "iconSize", "type", "ref", "component"]);
  return d === va.ol ? o.createElement("ol", Object.assign({ ref: c, type: l }, a && { role: "list" }, f, { className: y(St.list, i && St.modifiers[i], r && St.modifiers.bordered, a && St.modifiers.plain, s && s === "large" && St.modifiers.iconLg, t) }), n) : o.createElement("ul", Object.assign({ ref: c }, a && { role: "list" }, f, { className: y(St.list, i && St.modifiers[i], r && St.modifiers.bordered, a && St.modifiers.plain, s && s === "large" && St.modifiers.iconLg, t) }), n);
};
hu.displayName = "List";
const oo = (e) => {
  var { icon: t = null, children: n = null } = e, i = z(e, ["icon", "children"]);
  return o.createElement(
    "li",
    Object.assign({ className: y(t && St.listItem) }, i),
    t && o.createElement("span", { className: y(St.listItemIcon) }, t),
    n
  );
};
oo.displayName = "ListItem";
const Ub = {
  name: "EyeSlashIcon",
  height: 512,
  width: 640,
  svgPath: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",
  yOffset: 0,
  xOffset: 0
}, zb = pe(Ub), Wb = {
  name: "EyeIcon",
  height: 512,
  width: 576,
  svgPath: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
  yOffset: 0,
  xOffset: 0
}, Gb = pe(Wb), Pn = {
  button: "pf-v5-c-button",
  contextSelector: "pf-v5-c-context-selector",
  dropdown: "pf-v5-c-dropdown",
  masthead: "pf-v5-c-masthead",
  mastheadBrand: "pf-v5-c-masthead__brand",
  mastheadContent: "pf-v5-c-masthead__content",
  mastheadMain: "pf-v5-c-masthead__main",
  mastheadToggle: "pf-v5-c-masthead__toggle",
  menuToggle: "pf-v5-c-menu-toggle",
  modifiers: {
    light_200: "pf-m-light-200",
    light: "pf-m-light",
    plain: "pf-m-plain",
    resizeObserver: "pf-m-resize-observer",
    fullHeight: "pf-m-full-height",
    horizontal: "pf-m-horizontal",
    displayStack: "pf-m-display-stack",
    displayInline: "pf-m-display-inline",
    insetNone: "pf-m-inset-none",
    insetSm: "pf-m-inset-sm",
    insetMd: "pf-m-inset-md",
    insetLg: "pf-m-inset-lg",
    insetXl: "pf-m-inset-xl",
    inset_2xl: "pf-m-inset-2xl",
    displayStackOnSm: "pf-m-display-stack-on-sm",
    displayInlineOnSm: "pf-m-display-inline-on-sm",
    insetNoneOnSm: "pf-m-inset-none-on-sm",
    insetSmOnSm: "pf-m-inset-sm-on-sm",
    insetMdOnSm: "pf-m-inset-md-on-sm",
    insetLgOnSm: "pf-m-inset-lg-on-sm",
    insetXlOnSm: "pf-m-inset-xl-on-sm",
    inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
    displayStackOnMd: "pf-m-display-stack-on-md",
    displayInlineOnMd: "pf-m-display-inline-on-md",
    insetNoneOnMd: "pf-m-inset-none-on-md",
    insetSmOnMd: "pf-m-inset-sm-on-md",
    insetMdOnMd: "pf-m-inset-md-on-md",
    insetLgOnMd: "pf-m-inset-lg-on-md",
    insetXlOnMd: "pf-m-inset-xl-on-md",
    inset_2xlOnMd: "pf-m-inset-2xl-on-md",
    displayStackOnLg: "pf-m-display-stack-on-lg",
    displayInlineOnLg: "pf-m-display-inline-on-lg",
    insetNoneOnLg: "pf-m-inset-none-on-lg",
    insetSmOnLg: "pf-m-inset-sm-on-lg",
    insetMdOnLg: "pf-m-inset-md-on-lg",
    insetLgOnLg: "pf-m-inset-lg-on-lg",
    insetXlOnLg: "pf-m-inset-xl-on-lg",
    inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
    displayStackOnXl: "pf-m-display-stack-on-xl",
    displayInlineOnXl: "pf-m-display-inline-on-xl",
    insetNoneOnXl: "pf-m-inset-none-on-xl",
    insetSmOnXl: "pf-m-inset-sm-on-xl",
    insetMdOnXl: "pf-m-inset-md-on-xl",
    insetLgOnXl: "pf-m-inset-lg-on-xl",
    insetXlOnXl: "pf-m-inset-xl-on-xl",
    inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
    displayStackOn_2xl: "pf-m-display-stack-on-2xl",
    displayInlineOn_2xl: "pf-m-display-inline-on-2xl",
    insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
    insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
    insetMdOn_2xl: "pf-m-inset-md-on-2xl",
    insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
    insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
    inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl"
  },
  nav: "pf-v5-c-nav",
  page: "pf-v5-c-page",
  themeDark: "pf-v5-theme-dark",
  toolbar: "pf-v5-c-toolbar",
  toolbarContentSection: "pf-v5-c-toolbar__content-section",
  toolbarExpandableContent: "pf-v5-c-toolbar__expandable-content"
}, Kb = {
  isManagedSidebar: !1,
  isSidebarOpen: !1,
  onSidebarToggle: () => null,
  width: null,
  height: null,
  getBreakpoint: nf,
  getVerticalBreakpoint: tf
}, In = o.createContext(Kb), Xb = In.Provider, gu = In.Consumer, bu = (e) => {
  var { children: t, className: n, backgroundColor: i = "dark", display: r = {
    md: "inline"
  }, inset: a } = e, s = z(e, ["children", "className", "backgroundColor", "display", "inset"]);
  const { width: l, getBreakpoint: c } = o.useContext(In);
  return o.createElement("header", Object.assign({ className: y(Pn.masthead, $e(r, Pn, "display-", c(l)), $e(a, Pn, "", c(l)), i === "light" && Pn.modifiers.light, i === "light200" && Pn.modifiers.light_200, n) }, s), t);
};
bu.displayName = "Masthead";
const vu = (e) => {
  var { children: t, className: n, component: i } = e, r = z(e, ["children", "className", "component"]);
  let a = i;
  return i || (r?.href !== void 0 ? a = "a" : a = "span"), o.createElement(a, Object.assign({ className: y(Pn.mastheadBrand, n) }, a === "a" && { tabIndex: 0 }, r), t);
};
vu.displayName = "MastheadBrand";
const yu = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("div", Object.assign({ className: y(Pn.mastheadContent, n) }, i), t);
};
yu.displayName = "MastheadContent";
const xu = (e) => {
  var { children: t, className: n } = e, i = z(e, ["children", "className"]);
  return o.createElement("span", Object.assign({ className: y(Pn.mastheadToggle, n) }, i), t);
};
xu.displayName = "MastheadToggle";
const ke = {
  dirRtl: "pf-v5-m-dir-rtl",
  divider: "pf-v5-c-divider",
  menu: "pf-v5-c-menu",
  menuContent: "pf-v5-c-menu__content",
  menuItem: "pf-v5-c-menu__item",
  menuItemToggleIcon: "pf-v5-c-menu__item-toggle-icon",
  menuListItem: "pf-v5-c-menu__list-item",
  modifiers: {
    flyout: "pf-m-flyout",
    top: "pf-m-top",
    left: "pf-m-left",
    current: "pf-m-current",
    drillUp: "pf-m-drill-up",
    horizontal: "pf-m-horizontal",
    tertiary: "pf-m-tertiary",
    horizontalSubnav: "pf-m-horizontal-subnav",
    light: "pf-m-light",
    scrollable: "pf-m-scrollable",
    overflowHidden: "pf-m-overflow-hidden",
    expandable: "pf-m-expandable",
    expanded: "pf-m-expanded",
    drilldown: "pf-m-drilldown",
    hover: "pf-m-hover",
    start: "pf-m-start"
  },
  nav: "pf-v5-c-nav",
  navItem: "pf-v5-c-nav__item",
  navLink: "pf-v5-c-nav__link",
  navList: "pf-v5-c-nav__list",
  navScrollButton: "pf-v5-c-nav__scroll-button",
  navSection: "pf-v5-c-nav__section",
  navSectionTitle: "pf-v5-c-nav__section-title",
  navSubnav: "pf-v5-c-nav__subnav",
  navToggle: "pf-v5-c-nav__toggle",
  navToggleIcon: "pf-v5-c-nav__toggle-icon",
  themeDark: "pf-v5-theme-dark"
}, qb = {}, $i = o.createContext(qb);
class Bi extends o.Component {
  constructor() {
    super(...arguments), this.state = {
      isScrollable: !1,
      ouiaStateId: Ct(Bi.displayName, this.props.variant),
      flyoutRef: null
    }, this.navRef = o.createRef();
  }
  // Callback from NavItem
  onSelect(t, n, i, r, a, s) {
    a && t.preventDefault(), this.props.onSelect(t, { groupId: n, itemId: i, to: r }), s && s(t, i, n, r);
  }
  // Callback from NavExpandable
  onToggle(t, n, i) {
    this.props.onToggle(t, {
      groupId: n,
      isExpanded: i
    });
  }
  render() {
    const t = this.props, {
      "aria-label": n,
      children: i,
      className: r,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSelect: a,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onToggle: s,
      theme: l,
      ouiaId: c,
      ouiaSafe: d,
      variant: f
    } = t, u = z(t, ["aria-label", "children", "className", "onSelect", "onToggle", "theme", "ouiaId", "ouiaSafe", "variant"]), p = ["horizontal", "tertiary"].includes(f);
    return o.createElement(
      $i.Provider,
      { value: {
        onSelect: (m, g, v, x, w, _) => this.onSelect(m, g, v, x, w, _),
        onToggle: (m, g, v) => this.onToggle(m, g, v),
        updateIsScrollable: (m) => this.setState({ isScrollable: m }),
        isHorizontal: ["horizontal", "tertiary", "horizontal-subnav"].includes(f),
        flyoutRef: this.state.flyoutRef,
        setFlyoutRef: (m) => this.setState({ flyoutRef: m }),
        navRef: this.navRef
      } },
      o.createElement("nav", Object.assign({ className: y(ke.nav, l === "light" && ke.modifiers.light, p && ke.modifiers.horizontal, f === "tertiary" && ke.modifiers.tertiary, f === "horizontal-subnav" && ke.modifiers.horizontalSubnav, this.state.isScrollable && ke.modifiers.scrollable, r), "aria-label": n || (["tertiary", "horizontal-subnav"].includes(f) ? "Local" : "Global"), ref: this.navRef }, rt(Bi.displayName, c !== void 0 ? c : this.state.ouiaStateId, d), u), i)
    );
  }
}
Bi.displayName = "Nav";
Bi.defaultProps = {
  onSelect: () => {
  },
  onToggle: () => {
  },
  theme: "dark",
  ouiaSafe: !0
};
const xe = {
  avatar: "pf-v5-c-avatar",
  brand: "pf-v5-c-brand",
  button: "pf-v5-c-button",
  contextSelector: "pf-v5-c-context-selector",
  dirRtl: "pf-v5-m-dir-rtl",
  drawer: "pf-v5-c-drawer",
  masthead: "pf-v5-c-masthead",
  modifiers: {
    light: "pf-m-light",
    menu: "pf-m-menu",
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    read: "pf-m-read",
    selected: "pf-m-selected",
    unread: "pf-m-unread",
    attention: "pf-m-attention",
    expanded: "pf-m-expanded",
    collapsed: "pf-m-collapsed",
    pageInsets: "pf-m-page-insets",
    insetNone: "pf-m-inset-none",
    fill: "pf-m-fill",
    noFill: "pf-m-no-fill",
    limitWidth: "pf-m-limit-width",
    alignCenter: "pf-m-align-center",
    overflowScroll: "pf-m-overflow-scroll",
    shadowBottom: "pf-m-shadow-bottom",
    shadowTop: "pf-m-shadow-top",
    stickyTop: "pf-m-sticky-top",
    stickyBottom: "pf-m-sticky-bottom",
    stickyTopOnSmHeight: "pf-m-sticky-top-on-sm-height",
    stickyBottomOnSmHeight: "pf-m-sticky-bottom-on-sm-height",
    stickyTopOnMdHeight: "pf-m-sticky-top-on-md-height",
    stickyBottomOnMdHeight: "pf-m-sticky-bottom-on-md-height",
    stickyTopOnLgHeight: "pf-m-sticky-top-on-lg-height",
    stickyBottomOnLgHeight: "pf-m-sticky-bottom-on-lg-height",
    stickyTopOnXlHeight: "pf-m-sticky-top-on-xl-height",
    stickyBottomOnXlHeight: "pf-m-sticky-bottom-on-xl-height",
    stickyTopOn_2xlHeight: "pf-m-sticky-top-on-2xl-height",
    stickyBottomOn_2xlHeight: "pf-m-sticky-bottom-on-2xl-height",
    light_100: "pf-m-light-100",
    dark_100: "pf-m-dark-100",
    dark_200: "pf-m-dark-200",
    padding: "pf-m-padding",
    noPadding: "pf-m-no-padding",
    paddingOnSm: "pf-m-padding-on-sm",
    noPaddingOnSm: "pf-m-no-padding-on-sm",
    paddingOnMd: "pf-m-padding-on-md",
    noPaddingOnMd: "pf-m-no-padding-on-md",
    paddingOnLg: "pf-m-padding-on-lg",
    noPaddingOnLg: "pf-m-no-padding-on-lg",
    paddingOnXl: "pf-m-padding-on-xl",
    noPaddingOnXl: "pf-m-no-padding-on-xl",
    paddingOn_2xl: "pf-m-padding-on-2xl",
    noPaddingOn_2xl: "pf-m-no-padding-on-2xl",
    light_200: "pf-m-light-200"
  },
  nav: "pf-v5-c-nav",
  notificationBadge: "pf-v5-c-notification-badge",
  page: "pf-v5-c-page",
  pageDrawer: "pf-v5-c-page__drawer",
  pageHeader: "pf-v5-c-page__header",
  pageHeaderBrand: "pf-v5-c-page__header-brand",
  pageHeaderBrandLink: "pf-v5-c-page__header-brand-link",
  pageHeaderBrandToggle: "pf-v5-c-page__header-brand-toggle",
  pageHeaderNav: "pf-v5-c-page__header-nav",
  pageHeaderTools: "pf-v5-c-page__header-tools",
  pageHeaderToolsGroup: "pf-v5-c-page__header-tools-group",
  pageHeaderToolsItem: "pf-v5-c-page__header-tools-item",
  pageMain: "pf-v5-c-page__main",
  pageMainBody: "pf-v5-c-page__main-body",
  pageMainBreadcrumb: "pf-v5-c-page__main-breadcrumb",
  pageMainDrawer: "pf-v5-c-page__main-drawer",
  pageMainGroup: "pf-v5-c-page__main-group",
  pageMainNav: "pf-v5-c-page__main-nav",
  pageMainSection: "pf-v5-c-page__main-section",
  pageMainSubnav: "pf-v5-c-page__main-subnav",
  pageMainTabs: "pf-v5-c-page__main-tabs",
  pageMainWizard: "pf-v5-c-page__main-wizard",
  pageSidebar: "pf-v5-c-page__sidebar",
  pageSidebarBody: "pf-v5-c-page__sidebar-body",
  themeDark: "pf-v5-theme-dark"
}, Jb = {
  isSidebarOpen: !0
}, Ka = o.createContext(Jb), wu = (e) => {
  var { className: t = "", children: n, isSidebarOpen: i = !0, theme: r = "dark", id: a = "page-sidebar" } = e, s = z(e, ["className", "children", "isSidebarOpen", "theme", "id"]);
  return o.createElement(gu, null, ({ isManagedSidebar: l, isSidebarOpen: c }) => {
    const d = l ? c : i;
    return o.createElement(
      "div",
      Object.assign({ id: a, className: y(xe.pageSidebar, r === "light" && xe.modifiers.light, d && xe.modifiers.expanded, !d && xe.modifiers.collapsed, t), "aria-hidden": !d }, s),
      o.createElement(Ka.Provider, { value: { isSidebarOpen: d } }, n)
    );
  });
};
wu.displayName = "PageSidebar";
class Xa extends o.Component {
  constructor() {
    super(...arguments), this.direction = "ltr", this.state = {
      scrollViewAtStart: !1,
      scrollViewAtEnd: !1
    }, this.navList = o.createRef(), this.observer = () => {
    }, this.handleScrollButtons = () => {
      const t = this.navList.current;
      if (t) {
        const n = mn(t, t.firstChild), i = mn(t, t.lastChild);
        this.setState({
          scrollViewAtStart: n,
          scrollViewAtEnd: i
        }), this.context.updateIsScrollable(!n || !i);
      }
    }, this.scrollBack = () => {
      const t = this.navList.current;
      if (t) {
        const n = Array.from(t.children);
        let i, r;
        for (let a = 0; a < n.length && !i; a++)
          mn(t, n[a]) && (i = n[a], r = n[a - 1]);
        r && (this.direction === "ltr" ? t.scrollLeft -= r.scrollWidth : t.scrollLeft += r.scrollWidth), this.handleScrollButtons();
      }
    }, this.scrollForward = () => {
      const t = this.navList.current;
      if (t) {
        const n = Array.from(t.children);
        let i, r;
        for (let a = n.length - 1; a >= 0 && !i; a--)
          mn(t, n[a]) && (i = n[a], r = n[a + 1]);
        r && (this.direction === "ltr" ? t.scrollLeft += r.scrollWidth : t.scrollLeft -= r.scrollWidth), this.handleScrollButtons();
      }
    };
  }
  componentDidMount() {
    this.observer = Fi(this.navList.current, this.handleScrollButtons, !0), this.direction = jn(this.navList.current), this.handleScrollButtons();
  }
  componentWillUnmount() {
    this.observer();
  }
  componentDidUpdate() {
    this.direction = jn(this.navList.current);
  }
  render() {
    const t = this.props, { children: n, className: i, ariaLeftScroll: r, ariaRightScroll: a, backScrollAriaLabel: s, forwardScrollAriaLabel: l } = t, c = z(t, ["children", "className", "ariaLeftScroll", "ariaRightScroll", "backScrollAriaLabel", "forwardScrollAriaLabel"]), { scrollViewAtStart: d, scrollViewAtEnd: f } = this.state;
    return o.createElement($i.Consumer, null, ({ isHorizontal: u }) => o.createElement(Ka.Consumer, null, ({ isSidebarOpen: p }) => o.createElement(
      o.Fragment,
      null,
      u && o.createElement(
        "button",
        { className: y(ke.navScrollButton), "aria-label": s || r, onClick: this.scrollBack, disabled: d, tabIndex: p ? null : -1 },
        o.createElement(Ua, null)
      ),
      o.createElement("ul", Object.assign({ ref: this.navList, className: y(ke.navList, i), onScroll: this.handleScrollButtons, role: "list" }, c), n),
      u && o.createElement(
        "button",
        { className: y(ke.navScrollButton), "aria-label": l || a, onClick: this.scrollForward, disabled: f, tabIndex: p ? null : -1 },
        o.createElement(Ot, null)
      )
    )));
  }
}
Xa.displayName = "NavList";
Xa.contextType = $i;
Xa.defaultProps = {
  ariaLeftScroll: "Scroll left",
  backScrollAriaLabel: "Scroll back",
  ariaRightScroll: "Scroll right",
  forwardScrollAriaLabel: "Scroll foward"
};
const cl = (e) => {
  var { children: t, styleChildren: n = !0, className: i, to: r, isActive: a = !1, groupId: s = null, itemId: l = null, preventDefault: c = !1, onClick: d, component: f = "a", flyout: u, onShowFlyout: p, ouiaId: m, ouiaSafe: g, zIndex: v = 9999, hasNavLinkWrapper: x } = e, w = z(e, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "flyout", "onShowFlyout", "ouiaId", "ouiaSafe", "zIndex", "hasNavLinkWrapper"]);
  const { flyoutRef: _, setFlyoutRef: S, navRef: I } = o.useContext($i), { isSidebarOpen: E } = o.useContext(Ka), [R, k] = o.useState(null), [N, M] = o.useState(!1), $ = o.useRef(), D = $ === _, O = o.useRef(), L = u !== void 0, j = L ? "button" : f;
  r && L && console.error('NavItem cannot have both "to" and "flyout" props.');
  const C = (ie, Y) => {
    (!D || Y) && ie ? S($) : (D || Y) && !ie && S(null), p && ie && p();
  }, P = (ie) => {
    const Y = ie.target.closest(`.${ke.navItem}.pf-m-flyout`);
    L && !D ? C(!0) : _ !== null && !Y && S(null);
  }, G = (ie) => {
    ie.target.closest(".pf-m-flyout") || (L ? C(!1, !0) : _ !== null && S(null));
  }, B = (ie) => {
    var Y, oe;
    const de = ie.key, Ce = ie.target;
    (de === " " || de === "Enter" || de === "ArrowRight") && L && (!((Y = $?.current) === null || Y === void 0) && Y.contains(Ce)) && (ie.stopPropagation(), ie.preventDefault(), D || (C(!0), k(Ce))), (de === "Escape" || de === "ArrowLeft") && ((oe = O?.current) === null || oe === void 0 ? void 0 : oe.querySelectorAll(`.${ke.menu}`).length) === 1 && D && (ie.stopPropagation(), ie.preventDefault(), C(!1));
  };
  o.useEffect(() => (L && window.addEventListener("click", G), () => {
    L && window.removeEventListener("click", G);
  }), []), o.useEffect(() => {
    R && (D ? Array.from(O.current.getElementsByTagName("UL")[0].children).filter((Y) => !(Y.classList.contains("pf-m-disabled") || Y.classList.contains(ke.divider)))[0].firstChild.focus() : R.focus());
  }, [D, R]);
  const J = o.createElement(
    "span",
    { className: y(ke.navToggle) },
    o.createElement(
      "span",
      { className: y(ke.navToggleIcon) },
      o.createElement(Ot, { "aria-hidden": !0 })
    )
  ), b = {
    "aria-haspopup": "menu",
    "aria-expanded": D
  }, F = E ? null : -1, K = (ie) => {
    const Y = c || !r;
    return o.createElement(
      j,
      Object.assign({ href: r, onClick: (oe) => ie.onSelect(oe, s, l, r, Y, d), className: y(ke.navLink, a && ke.modifiers.current, N && ke.modifiers.hover, i), "aria-current": a ? "page" : null, tabIndex: F }, L && Object.assign({}, b), w),
      x ? o.createElement("span", { className: y(`${ke.nav}__link-text`) }, t) : t,
      u && J
    );
  }, V = (ie, Y) => o.cloneElement(Y, Object.assign(Object.assign({ onClick: (oe) => ie.onSelect(oe, s, l, r, c, d), "aria-current": a ? "page" : null }, n && {
    className: y(ke.navLink, a && ke.modifiers.current, Y.props && Y.props.className)
  }), { tabIndex: Y.props.tabIndex || F, children: L ? o.createElement(
    o.Fragment,
    null,
    Y.props.children,
    J
  ) : Y.props.children })), U = Gt(cl.displayName, m, g), q = () => {
    M(!0);
  }, W = () => {
    M(!1);
  }, X = o.createElement(Ln, { triggerRef: $, popper: o.createElement("div", { ref: O, onMouseEnter: q, onMouseLeave: W }, u), popperRef: O, placement: "right-start", isVisible: D, onDocumentKeyDown: B, zIndex: v, appendTo: I?.current });
  return o.createElement(
    o.Fragment,
    null,
    o.createElement(
      "li",
      Object.assign({ onMouseOver: P, className: y(ke.navItem, L && ke.modifiers.flyout, i), ref: $ }, U),
      o.createElement($i.Consumer, null, (ie) => o.isValidElement(t) ? V(ie, t) : K(ie))
    ),
    u && X
  );
};
cl.displayName = "NavItem";
class ji extends o.Component {
  constructor() {
    super(...arguments), this.id = this.props.id || Mi(), this.state = {
      expandedState: this.props.isExpanded,
      ouiaStateId: Ct(ji.displayName)
    }, this.onExpand = (t, n) => {
      const { expandedState: i } = this.state;
      if (this.props.onExpand)
        this.props.onExpand(t, !i);
      else {
        this.setState((a) => ({ expandedState: !a.expandedState }));
        const { groupId: r } = this.props;
        n(t, r, !i);
      }
    };
  }
  componentDidMount() {
    this.setState({ expandedState: this.props.isExpanded });
  }
  componentDidUpdate(t) {
    this.props.isExpanded !== t.isExpanded && this.setState({ expandedState: this.props.isExpanded });
  }
  render() {
    const t = this.props, {
      title: n,
      srText: i,
      children: r,
      className: a,
      isActive: s,
      ouiaId: l,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      groupId: c,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id: d,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isExpanded: f,
      buttonProps: u,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onExpand: p
    } = t, m = z(t, ["title", "srText", "children", "className", "isActive", "ouiaId", "groupId", "id", "isExpanded", "buttonProps", "onExpand"]), { expandedState: g, ouiaStateId: v } = this.state;
    return o.createElement($i.Consumer, null, (x) => o.createElement(
      "li",
      Object.assign({ className: y(ke.navItem, ke.modifiers.expandable, g && ke.modifiers.expanded, s && ke.modifiers.current, a) }, rt(ji.displayName, l !== void 0 ? l : v), m),
      o.createElement(Ka.Consumer, null, ({ isSidebarOpen: w }) => o.createElement(
        "button",
        Object.assign({ className: y(ke.navLink), id: i ? null : this.id, onClick: (_) => this.onExpand(_, x.onToggle), "aria-expanded": g, tabIndex: w ? null : -1 }, u),
        typeof n != "string" ? o.createElement("span", { className: y(`${ke.nav}__link-text`) }, n) : n,
        o.createElement(
          "span",
          { className: y(ke.navToggle) },
          o.createElement(
            "span",
            { className: y(ke.navToggleIcon) },
            o.createElement(Ot, { "aria-hidden": "true" })
          )
        )
      )),
      o.createElement(
        "section",
        { className: y(ke.navSubnav), "aria-labelledby": this.id, hidden: g ? null : !0 },
        i && o.createElement("h2", { className: "pf-v5-screen-reader", id: this.id }, i),
        o.createElement("ul", { className: y(ke.navList), role: "list" }, r)
      )
    ));
  }
}
ji.displayName = "NavExpandable";
ji.defaultProps = {
  srText: "",
  isExpanded: !1,
  children: "",
  className: "",
  groupId: null,
  isActive: !1,
  id: ""
};
const qa = (e) => {
  var { children: t, className: n = "", isVisited: i = !1 } = e, r = z(e, ["children", "className", "isVisited"]);
  return o.createElement("div", Object.assign({}, r, { className: y(Ks.content, i && Ks.modifiers.visited, n) }), t);
};
qa.displayName = "TextContent";
var Vi;
(function(e) {
  e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.p = "p", e.a = "a", e.small = "small", e.blockquote = "blockquote", e.pre = "pre";
})(Vi || (Vi = {}));
const En = (e) => {
  var { children: t = null, className: n = "", component: i = Vi.p, isVisitedLink: r = !1, ouiaId: a, ouiaSafe: s = !0 } = e, l = z(e, ["children", "className", "component", "isVisitedLink", "ouiaId", "ouiaSafe"]);
  const c = i, d = Gt(En.displayName, a, s);
  return o.createElement(c, Object.assign({}, d, l, { "data-pf-content": !0, className: y(r && i === Vi.a && Ks.modifiers.visited, n) }), t);
};
En.displayName = "Text";
const oi = {
  divider: "pf-v5-c-divider",
  modifiers: {
    buttonGroup: "pf-m-button-group",
    iconButtonGroup: "pf-m-icon-button-group",
    vertical: "pf-m-vertical"
  },
  overflowMenu: "pf-v5-c-overflow-menu",
  overflowMenuContent: "pf-v5-c-overflow-menu__content",
  overflowMenuControl: "pf-v5-c-overflow-menu__control",
  overflowMenuGroup: "pf-v5-c-overflow-menu__group",
  overflowMenuItem: "pf-v5-c-overflow-menu__item"
}, bi = o.createContext({
  isBelowBreakpoint: !1
});
class dl extends o.Component {
  constructor(t) {
    super(t), this.observer = () => {
    }, this.handleResize = () => {
      const n = _i[this.props.breakpoint];
      if (!n) {
        console.error("OverflowMenu will not be visible without a valid breakpoint.");
        return;
      }
      const r = (this.state.breakpointRef ? this.state.breakpointRef.clientWidth : window.innerWidth) < n;
      this.state.isBelowBreakpoint !== r && this.setState({ isBelowBreakpoint: r });
    }, this.handleResizeWithDelay = Ro(this.handleResize, 250), this.state = {
      isBelowBreakpoint: !1,
      breakpointRef: void 0
    };
  }
  getBreakpointRef() {
    const { breakpointReference: t } = this.props;
    if (t.current)
      return t.current;
    if (typeof t == "function")
      return t();
  }
  componentDidMount() {
    const t = this.props.breakpointReference ? this.getBreakpointRef() : void 0;
    this.setState({ breakpointRef: t }), this.observer = Fi(t, this.handleResizeWithDelay), this.handleResize();
  }
  componentDidUpdate(t, n) {
    const i = this.props.breakpointReference ? this.getBreakpointRef() : void 0;
    n.breakpointRef !== i && (this.observer(), this.setState({ breakpointRef: i }), this.observer = Fi(i, this.handleResizeWithDelay), this.handleResize());
  }
  componentWillUnmount() {
    this.observer();
  }
  render() {
    const t = this.props, { className: n, breakpoint: i, children: r, breakpointReference: a } = t, s = z(t, ["className", "breakpoint", "children", "breakpointReference"]);
    return o.createElement(
      "div",
      Object.assign({}, s, { className: y(oi.overflowMenu, n) }),
      o.createElement(bi.Provider, { value: { isBelowBreakpoint: this.state.isBelowBreakpoint } }, r)
    );
  }
}
dl.displayName = "OverflowMenu";
dl.contextType = bi;
const Ou = (e) => {
  var { className: t, children: n, hasAdditionalOptions: i } = e, r = z(e, ["className", "children", "hasAdditionalOptions"]);
  return o.createElement(bi.Consumer, null, (a) => (a.isBelowBreakpoint || i) && o.createElement(
    "div",
    Object.assign({ className: y(oi.overflowMenuControl, t) }, r),
    " ",
    n,
    " "
  ));
};
Ou.displayName = "OverflowMenuControl";
const Cu = ({ className: e, children: t, isPersistent: n }) => o.createElement(bi.Consumer, null, (i) => (!i.isBelowBreakpoint || n) && o.createElement("div", { className: y(oi.overflowMenuContent, e) }, t));
Cu.displayName = "OverflowMenuContent";
const _u = (e) => {
  var { className: t, children: n, isPersistent: i = !1, groupType: r } = e, a = z(e, ["className", "children", "isPersistent", "groupType"]);
  return o.createElement(bi.Consumer, null, (s) => (i || !s.isBelowBreakpoint) && o.createElement("div", Object.assign({ className: y(oi.overflowMenuGroup, r === "button" && oi.modifiers.buttonGroup, r === "icon" && oi.modifiers.iconButtonGroup, t) }, a), n));
};
_u.displayName = "OverflowMenuGroup";
const lo = ({ className: e, children: t, isPersistent: n = !1 }) => o.createElement(bi.Consumer, null, (i) => (n || !i.isBelowBreakpoint) && o.createElement(
  "div",
  { className: y(oi.overflowMenuItem, e) },
  " ",
  t,
  " "
));
lo.displayName = "OverflowMenuItem";
const da = (e) => {
  var { children: t, isShared: n = !1, itemId: i } = e, r = z(e, ["children", "isShared", "itemId"]);
  return o.createElement(bi.Consumer, null, (a) => (!n || a.isBelowBreakpoint) && o.createElement(_n, Object.assign({ component: "button", value: i }, r), t));
};
da.displayName = "OverflowMenuDropdownItem";
const Eu = (e) => {
  var { className: t = "", children: n, stickyOnBreakpoint: i, hasShadowTop: r = !1, hasShadowBottom: a = !1, hasOverflowScroll: s = !1, "aria-label": l } = e, c = z(e, ["className", "children", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll", "aria-label"]);
  const { height: d, getVerticalBreakpoint: f } = o.useContext(In);
  return o.useEffect(() => {
    s && !l && console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.");
  }, [s, l]), o.createElement("div", Object.assign({}, c, { className: y(xe.pageMainGroup, $e(i, xe, "sticky-", f(d), !0), r && xe.modifiers.shadowTop, a && xe.modifiers.shadowBottom, s && xe.modifiers.overflowScroll, t) }, s && { tabIndex: 0, role: "region", "aria-label": l }), n);
};
Eu.displayName = "PageGroup";
var yc;
(function(e) {
  e.vertical = "vertical", e.horizontal = "horizontal";
})(yc || (yc = {}));
let Ja = class extends o.Component {
  constructor(t) {
    super(t), this.mainRef = o.createRef(), this.pageRef = o.createRef(), this.observer = () => {
    }, this.getWindowWidth = () => ze ? this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth : 1200, this.isMobile = () => (
      // eslint-disable-next-line radix
      this.getWindowWidth() < Number.parseInt(To.value, 10)
    ), this.resize = (a) => {
      var s;
      const { onPageResize: l } = this.props, c = this.isMobile();
      if (l && l(a, { mobileView: c, windowSize: this.getWindowWidth() }), c !== this.state.mobileView && this.setState({ mobileView: c }), !((s = this.pageRef) === null || s === void 0) && s.current) {
        const d = this.pageRef.current.clientWidth, f = this.pageRef.current.clientHeight;
        this.state.width !== d && this.setState({ width: d }), this.state.height !== f && this.setState({ height: f });
      }
    }, this.handleResize = Ro(this.resize, 250), this.handleMainClick = () => {
      this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current && this.setState({ mobileIsSidebarOpen: !1 });
    }, this.onSidebarToggleMobile = () => {
      this.setState((a) => ({
        mobileIsSidebarOpen: !a.mobileIsSidebarOpen
      }));
    }, this.onSidebarToggleDesktop = () => {
      this.setState((a) => ({
        desktopIsSidebarOpen: !a.desktopIsSidebarOpen
      }));
    };
    const { isManagedSidebar: n, defaultManagedSidebarIsOpen: i } = t, r = n ? i : !0;
    this.state = {
      desktopIsSidebarOpen: r,
      mobileIsSidebarOpen: !1,
      mobileView: !1,
      width: null,
      height: null
    };
  }
  componentDidMount() {
    const { isManagedSidebar: t, onPageResize: n } = this.props;
    if (t || n) {
      this.observer = Fi(this.pageRef.current, this.handleResize);
      const i = this.mainRef.current;
      i && (i.addEventListener("mousedown", this.handleMainClick), i.addEventListener("touchstart", this.handleMainClick)), this.resize();
    }
  }
  componentWillUnmount() {
    const { isManagedSidebar: t, onPageResize: n } = this.props;
    if (t || n) {
      this.observer();
      const i = this.mainRef.current;
      i && (i.removeEventListener("mousedown", this.handleMainClick), i.removeEventListener("touchstart", this.handleMainClick));
    }
  }
  render() {
    const t = this.props, {
      breadcrumb: n,
      isBreadcrumbWidthLimited: i,
      className: r,
      children: a,
      header: s,
      sidebar: l,
      notificationDrawer: c,
      isNotificationDrawerExpanded: d,
      onNotificationDrawerExpand: f,
      drawerDefaultSize: u,
      drawerMinSize: p,
      drawerMaxSize: m,
      isTertiaryNavWidthLimited: g,
      skipToContent: v,
      role: x,
      mainContainerId: w,
      isManagedSidebar: _,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      defaultManagedSidebarIsOpen: S,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onPageResize: I,
      getBreakpoint: E,
      getVerticalBreakpoint: R,
      mainAriaLabel: k,
      mainTabIndex: N,
      mainComponent: M,
      tertiaryNav: $,
      isTertiaryNavGrouped: D,
      isBreadcrumbGrouped: O,
      additionalGroupedContent: L,
      groupProps: j,
      breadcrumbProps: C
    } = t, P = z(t, ["breadcrumb", "isBreadcrumbWidthLimited", "className", "children", "header", "sidebar", "notificationDrawer", "isNotificationDrawerExpanded", "onNotificationDrawerExpand", "drawerDefaultSize", "drawerMinSize", "drawerMaxSize", "isTertiaryNavWidthLimited", "skipToContent", "role", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize", "getBreakpoint", "getVerticalBreakpoint", "mainAriaLabel", "mainTabIndex", "mainComponent", "tertiaryNav", "isTertiaryNavGrouped", "isBreadcrumbGrouped", "additionalGroupedContent", "groupProps", "breadcrumbProps"]), { mobileView: G, mobileIsSidebarOpen: B, desktopIsSidebarOpen: J, width: b, height: F } = this.state, K = {
      isManagedSidebar: _,
      onSidebarToggle: G ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
      isSidebarOpen: G ? B : J,
      width: b,
      height: F,
      getBreakpoint: E,
      getVerticalBreakpoint: R
    };
    let V = null;
    $ && g ? V = o.createElement(
      "div",
      { className: y(xe.pageMainNav, xe.modifiers.limitWidth) },
      o.createElement("div", { className: y(xe.pageMainBody) }, $)
    ) : $ && (V = o.createElement("div", { className: y(xe.pageMainNav) }, $));
    const U = n ? o.createElement("section", { className: y(xe.pageMainBreadcrumb, i && xe.modifiers.limitWidth, $e(C?.stickyOnBreakpoint, xe, "sticky-", R(F), !0)) }, i ? o.createElement("div", { className: y(xe.pageMainBody) }, n) : n) : null, W = D || O || L ? o.createElement(
      Eu,
      Object.assign({}, j),
      D && V,
      O && U,
      L
    ) : null, X = M, te = o.createElement(
      X,
      { ref: this.mainRef, role: x, id: w, className: y(xe.pageMain), tabIndex: N, "aria-label": k },
      W,
      !D && V,
      !O && U,
      a
    ), ie = o.createElement(ru, { defaultSize: u, minSize: p, maxSize: m }, c);
    return o.createElement(
      Xb,
      { value: K },
      o.createElement(
        "div",
        Object.assign({ ref: this.pageRef }, P, { className: y(xe.page, b !== null && F !== null && "pf-m-resize-observer", b !== null && `pf-m-breakpoint-${E(b)}`, F !== null && `pf-m-height-breakpoint-${R(F)}`, r) }),
        v,
        s,
        l,
        c && o.createElement(
          "div",
          { className: y(xe.pageDrawer) },
          o.createElement(
            eu,
            { isExpanded: d, onExpand: (Y) => f(Y) },
            o.createElement(
              nu,
              { panelContent: ie },
              o.createElement(iu, null, te)
            )
          )
        ),
        !c && te
      )
    );
  }
};
Ja.displayName = "Page";
Ja.defaultProps = {
  isManagedSidebar: !1,
  isBreadcrumbWidthLimited: !1,
  defaultManagedSidebarIsOpen: !0,
  mainTabIndex: -1,
  isNotificationDrawerExpanded: !1,
  onNotificationDrawerExpand: () => null,
  mainComponent: "main",
  getBreakpoint: nf,
  getVerticalBreakpoint: tf
};
const Su = (e) => {
  var { children: t, className: n, usePageInsets: i, isFilled: r } = e, a = z(e, ["children", "className", "usePageInsets", "isFilled"]);
  return o.createElement("div", Object.assign({ className: y(xe.pageSidebarBody, i && xe.modifiers.pageInsets, r === !1 && xe.modifiers.noFill, r === !0 && xe.modifiers.fill, n) }, a), t);
};
Su.displayName = "PageSidebarBody";
var ai;
(function(e) {
  e.default = "default", e.light = "light", e.dark = "dark", e.darker = "darker";
})(ai || (ai = {}));
var pn;
(function(e) {
  e.default = "default", e.nav = "nav", e.subNav = "subnav", e.breadcrumb = "breadcrumb", e.tabs = "tabs", e.wizard = "wizard";
})(pn || (pn = {}));
const Yb = {
  [pn.default]: xe.pageMainSection,
  [pn.nav]: xe.pageMainNav,
  [pn.subNav]: xe.pageMainSubnav,
  [pn.breadcrumb]: xe.pageMainBreadcrumb,
  [pn.tabs]: xe.pageMainTabs,
  [pn.wizard]: xe.pageMainWizard
}, Zb = {
  [ai.default]: "",
  [ai.light]: xe.modifiers.light,
  [ai.dark]: xe.modifiers.dark_200,
  [ai.darker]: xe.modifiers.dark_100
}, Hi = (e) => {
  var { className: t = "", children: n, variant: i = "default", type: r = "default", padding: a, isFilled: s, isWidthLimited: l = !1, isCenterAligned: c = !1, stickyOnBreakpoint: d, hasShadowTop: f = !1, hasShadowBottom: u = !1, hasOverflowScroll: p = !1, "aria-label": m, component: g = "section" } = e, v = z(e, ["className", "children", "variant", "type", "padding", "isFilled", "isWidthLimited", "isCenterAligned", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll", "aria-label", "component"]);
  const { height: x, getVerticalBreakpoint: w } = o.useContext(In);
  o.useEffect(() => {
    p && !m && console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.");
  }, [p, m]);
  const _ = g;
  return o.createElement(
    _,
    Object.assign({}, v, { className: y(Yb[r], $e(a, xe), $e(d, xe, "sticky-", w(x), !0), Zb[i], s === !1 && xe.modifiers.noFill, s === !0 && xe.modifiers.fill, l && xe.modifiers.limitWidth, l && c && r !== pn.subNav && xe.modifiers.alignCenter, f && xe.modifiers.shadowTop, u && xe.modifiers.shadowBottom, p && xe.modifiers.overflowScroll, t) }, p && { tabIndex: 0 }, { "aria-label": m }),
    l && o.createElement("div", { className: y(xe.pageMainBody) }, n),
    !l && n
  );
};
Hi.displayName = "PageSection";
const ku = (e) => {
  var { children: t, isSidebarOpen: n = !0, onSidebarToggle: i = () => {
  }, id: r = "nav-toggle" } = e, a = z(e, ["children", "isSidebarOpen", "onSidebarToggle", "id"]);
  return o.createElement(gu, null, ({ isManagedSidebar: s, onSidebarToggle: l, isSidebarOpen: c }) => {
    const d = s ? l : i, f = s ? c : n;
    return o.createElement(ce, Object.assign({ id: r, onClick: d, "aria-label": "Side navigation toggle", "aria-expanded": f ? "true" : "false", variant: Me.plain }, a), t);
  });
};
ku.displayName = "PageToggleButton";
const fl = ({ firstIndex: e = 0, lastIndex: t = 0, itemCount: n = 0, itemsTitle: i = "items", ofWord: r = "of" }) => o.createElement(
  o.Fragment,
  null,
  o.createElement(
    "b",
    null,
    e,
    " - ",
    t
  ),
  " ",
  r,
  " ",
  o.createElement("b", null, n),
  " ",
  i
);
fl.displayName = "ToggleTemplate";
const ot = {
  button: "pf-v5-c-button",
  dirRtl: "pf-v5-m-dir-rtl",
  formControl: "pf-v5-c-form-control",
  menuToggle: "pf-v5-c-menu-toggle",
  modifiers: {
    bottom: "pf-m-bottom",
    static: "pf-m-static",
    first: "pf-m-first",
    last: "pf-m-last",
    sticky: "pf-m-sticky",
    compact: "pf-m-compact",
    pageInsets: "pf-m-page-insets",
    displaySummary: "pf-m-display-summary",
    displayFull: "pf-m-display-full",
    insetNone: "pf-m-inset-none",
    insetSm: "pf-m-inset-sm",
    insetMd: "pf-m-inset-md",
    insetLg: "pf-m-inset-lg",
    insetXl: "pf-m-inset-xl",
    inset_2xl: "pf-m-inset-2xl",
    displaySummaryOnSm: "pf-m-display-summary-on-sm",
    displayFullOnSm: "pf-m-display-full-on-sm",
    insetNoneOnSm: "pf-m-inset-none-on-sm",
    insetSmOnSm: "pf-m-inset-sm-on-sm",
    insetMdOnSm: "pf-m-inset-md-on-sm",
    insetLgOnSm: "pf-m-inset-lg-on-sm",
    insetXlOnSm: "pf-m-inset-xl-on-sm",
    inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
    displaySummaryOnMd: "pf-m-display-summary-on-md",
    displayFullOnMd: "pf-m-display-full-on-md",
    insetNoneOnMd: "pf-m-inset-none-on-md",
    insetSmOnMd: "pf-m-inset-sm-on-md",
    insetMdOnMd: "pf-m-inset-md-on-md",
    insetLgOnMd: "pf-m-inset-lg-on-md",
    insetXlOnMd: "pf-m-inset-xl-on-md",
    inset_2xlOnMd: "pf-m-inset-2xl-on-md",
    displaySummaryOnLg: "pf-m-display-summary-on-lg",
    displayFullOnLg: "pf-m-display-full-on-lg",
    insetNoneOnLg: "pf-m-inset-none-on-lg",
    insetSmOnLg: "pf-m-inset-sm-on-lg",
    insetMdOnLg: "pf-m-inset-md-on-lg",
    insetLgOnLg: "pf-m-inset-lg-on-lg",
    insetXlOnLg: "pf-m-inset-xl-on-lg",
    inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
    displaySummaryOnXl: "pf-m-display-summary-on-xl",
    displayFullOnXl: "pf-m-display-full-on-xl",
    insetNoneOnXl: "pf-m-inset-none-on-xl",
    insetSmOnXl: "pf-m-inset-sm-on-xl",
    insetMdOnXl: "pf-m-inset-md-on-xl",
    insetLgOnXl: "pf-m-inset-lg-on-xl",
    insetXlOnXl: "pf-m-inset-xl-on-xl",
    inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
    displaySummaryOn_2xl: "pf-m-display-summary-on-2xl",
    displayFullOn_2xl: "pf-m-display-full-on-2xl",
    insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
    insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
    insetMdOn_2xl: "pf-m-inset-md-on-2xl",
    insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
    insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
    inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl"
  },
  pagination: "pf-v5-c-pagination",
  paginationNav: "pf-v5-c-pagination__nav",
  paginationNavControl: "pf-v5-c-pagination__nav-control",
  paginationNavPageSelect: "pf-v5-c-pagination__nav-page-select",
  paginationTotalItems: "pf-v5-c-pagination__total-items",
  themeDark: "pf-v5-theme-dark"
};
class Ui extends o.Component {
  constructor(t) {
    super(t), this.handleNewPage = (n, i) => {
      const { perPage: r, onSetPage: a } = this.props, s = (i - 1) * r, l = i * r;
      return a(n, i, r, s, l);
    }, this.state = { userInputPage: this.props.page };
  }
  static parseInteger(t, n) {
    let i = Number.parseInt(t, 10);
    return Number.isNaN(i) || (i = i > n ? n : i, i = i < 1 ? 1 : i), i;
  }
  onChange(t, n) {
    const i = Ui.parseInteger(t.currentTarget.value, n);
    this.setState({ userInputPage: Number.isNaN(i) ? t.currentTarget.value : i });
  }
  onKeyDown(t, n, i, r) {
    const a = [
      "Tab",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "ArrowUp",
      "ArrowDown"
    ];
    if (t.key === Wn.Enter) {
      const s = Ui.parseInteger(this.state.userInputPage, i);
      r(t, Number.isNaN(s) ? n : s), this.handleNewPage(t, Number.isNaN(s) ? n : s);
    } else !/^\d*$/.test(t.key) && !a.includes(t.key) && t.preventDefault();
  }
  componentDidUpdate(t) {
    this.props.page !== t.page && this.props.page <= this.props.lastPage && this.state.userInputPage !== this.props.page && this.setState({ userInputPage: this.props.page });
  }
  render() {
    const t = this.props, {
      page: n,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      perPage: i,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSetPage: r,
      isDisabled: a,
      itemCount: s,
      lastPage: l,
      firstPage: c,
      pagesTitle: d,
      pagesTitlePlural: f,
      toLastPageAriaLabel: u,
      toNextPageAriaLabel: p,
      toFirstPageAriaLabel: m,
      toPreviousPageAriaLabel: g,
      currPageAriaLabel: v,
      paginationAriaLabel: x,
      ofWord: w,
      onNextClick: _,
      onPreviousClick: S,
      onFirstClick: I,
      onLastClick: E,
      onPageInput: R,
      className: k,
      isCompact: N
    } = t, M = z(t, ["page", "perPage", "onSetPage", "isDisabled", "itemCount", "lastPage", "firstPage", "pagesTitle", "pagesTitlePlural", "toLastPageAriaLabel", "toNextPageAriaLabel", "toFirstPageAriaLabel", "toPreviousPageAriaLabel", "currPageAriaLabel", "paginationAriaLabel", "ofWord", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]), { userInputPage: $ } = this.state;
    return o.createElement(
      "nav",
      Object.assign({ className: y(ot.paginationNav, k), "aria-label": x }, M),
      !N && o.createElement(
        "div",
        { className: y(ot.paginationNavControl, ot.modifiers.first) },
        o.createElement(
          ce,
          { variant: Me.plain, isDisabled: a || n === c || n === 0, "aria-label": m, "data-action": "first", onClick: (D) => {
            I(D, 1), this.handleNewPage(D, 1), this.setState({ userInputPage: 1 });
          } },
          o.createElement(Eb, null)
        )
      ),
      o.createElement(
        "div",
        { className: ot.paginationNavControl },
        o.createElement(
          ce,
          { variant: Me.plain, isDisabled: a || n === c || n === 0, "data-action": "previous", onClick: (D) => {
            const O = n - 1 >= 1 ? n - 1 : 1;
            S(D, O), this.handleNewPage(D, O), this.setState({ userInputPage: O });
          }, "aria-label": g },
          o.createElement(Ua, null)
        )
      ),
      !N && o.createElement(
        "div",
        { className: ot.paginationNavPageSelect },
        o.createElement($t, { "aria-label": v, type: "number", isDisabled: a || s && n === c && n === l && s >= 0 || n === 0, min: l <= 0 && c <= 0 ? 0 : 1, max: l, value: $, onKeyDown: (D) => this.onKeyDown(D, n, l, R), onChange: (D) => this.onChange(D, l) }),
        (s || s === 0) && o.createElement(
          "span",
          { "aria-hidden": "true" },
          w,
          " ",
          d ? ch(l, d, f) : l
        )
      ),
      o.createElement(
        "div",
        { className: ot.paginationNavControl },
        o.createElement(
          ce,
          { variant: Me.plain, isDisabled: a || n === l, "aria-label": p, "data-action": "next", onClick: (D) => {
            const O = n + 1 <= l ? n + 1 : l;
            _(D, O), this.handleNewPage(D, O), this.setState({ userInputPage: O });
          } },
          o.createElement(Ot, null)
        )
      ),
      !N && o.createElement(
        "div",
        { className: y(ot.paginationNavControl, ot.modifiers.last) },
        o.createElement(
          ce,
          { variant: Me.plain, isDisabled: a || n === l, "aria-label": u, "data-action": "last", onClick: (D) => {
            E(D, l), this.handleNewPage(D, l), this.setState({ userInputPage: l });
          } },
          o.createElement(kb, null)
        )
      )
    );
  }
}
Ui.displayName = "Navigation";
Ui.defaultProps = {
  className: "",
  isDisabled: !1,
  isCompact: !1,
  lastPage: 0,
  firstPage: 0,
  pagesTitle: "",
  pagesTitlePlural: "",
  toLastPageAriaLabel: "Go to last page",
  toNextPageAriaLabel: "Go to next page",
  toFirstPageAriaLabel: "Go to first page",
  toPreviousPageAriaLabel: "Go to previous page",
  currPageAriaLabel: "Current page",
  paginationAriaLabel: "Pagination",
  ofWord: "of",
  onNextClick: () => {
  },
  onPreviousClick: () => {
  },
  onFirstClick: () => {
  },
  onLastClick: () => {
  },
  onPageInput: () => {
  }
};
const Lu = ({
  className: e,
  widgetId: t,
  page: n,
  itemCount: i,
  isDisabled: r = !1,
  minWidth: a,
  dropDirection: s = "down",
  perPageOptions: l = [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemsPerPageTitle: c = "Items per page",
  perPageSuffix: d = "per page",
  optionsToggleAriaLabel: f,
  ofWord: u = "of",
  perPage: p = 0,
  firstIndex: m = 0,
  lastIndex: g = 0,
  isLastFullPageShown: v = !1,
  itemsTitle: x = "",
  toggleTemplate: w,
  onPerPageSelect: _ = () => null,
  containerRef: S,
  appendTo: I
}) => {
  const [E, R] = o.useState(!1), k = o.useRef(null), N = o.useRef(null), M = () => {
    R((P) => !P);
  }, $ = () => {
    var P;
    R((G) => !G), (P = k.current) === null || P === void 0 || P.focus();
  }, D = (P, G) => {
    let B = n;
    for (; Math.ceil(i / G) < B; )
      B--;
    if (v && i / G !== B)
      for (; B > 1 && i - G * B < 0; )
        B--;
    const J = (B - 1) * G, b = B * G;
    return _(P, G, B, J, b);
  };
  o.useEffect(() => {
    const P = (B) => {
      var J, b, F;
      (E && (!((J = N.current) === null || J === void 0) && J.contains(B.target)) || !((b = k.current) === null || b === void 0) && b.contains(B.target)) && (B.key === "Escape" || B.key === "Tab") && (R(!1), (F = k.current) === null || F === void 0 || F.focus());
    }, G = (B) => {
      var J, b, F;
      E && (!((J = k.current) === null || J === void 0) && J.contains(B.target)) && setTimeout(() => {
        var K;
        const V = (K = N?.current) === null || K === void 0 ? void 0 : K.querySelector("li button:not(:disabled)");
        V && V.focus();
      }, 0), E && !(!((b = k?.current) === null || b === void 0) && b.contains(B.target)) && !(!((F = N.current) === null || F === void 0) && F.contains(B.target)) && R(!1);
    };
    return window.addEventListener("keydown", P), window.addEventListener("click", G), () => {
      window.removeEventListener("keydown", P), window.removeEventListener("click", G);
    };
  }, [E, N]);
  const O = () => l.map(({ value: P, title: G }) => o.createElement(
    Ur,
    { key: P, "data-action": `per-page-${P}`, isSelected: p === P, onClick: (B) => D(B, P) },
    G,
    ` ${d}`
  )), L = o.createElement(
    yt,
    Object.assign({ ref: k, onClick: M }, f && { "aria-label": f }, { isDisabled: r || i && i <= 0, isExpanded: E }, t && { id: `${t}-toggle` }, { variant: "plainText", "aria-haspopup": "listbox" }),
    w && typeof w == "string" && Ao(w, { firstIndex: m, lastIndex: g, ofWord: u, itemCount: i, itemsTitle: x }),
    w && typeof w != "string" && w({
      firstIndex: m,
      lastIndex: g,
      ofWord: u,
      itemCount: i,
      itemsTitle: x
    }),
    !w && o.createElement(fl, { firstIndex: m, lastIndex: g, ofWord: u, itemCount: i, itemsTitle: x })
  ), j = o.createElement(
    di,
    { className: y(e), onSelect: $, ref: N },
    o.createElement(
      Hr,
      null,
      o.createElement(zr, null, O())
    )
  ), C = I ?? (S?.current || void 0);
  return o.createElement(Ln, { trigger: L, triggerRef: k, popper: j, popperRef: N, isVisible: E, direction: s, appendTo: C, minWidth: a !== void 0 ? a : "revert" });
};
Lu.displayName = "PaginationOptionsMenu";
const xc = {
  name: "--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars",
  value: "2",
  var: "var(--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars)"
};
var gr;
(function(e) {
  e.bottom = "bottom", e.top = "top";
})(gr || (gr = {}));
const wc = [
  {
    title: "10",
    value: 10
  },
  {
    title: "20",
    value: 20
  },
  {
    title: "50",
    value: 50
  },
  {
    title: "100",
    value: 100
  }
], Qb = (e, t) => {
  if (!t)
    return;
  const n = String(e).length;
  n >= 3 ? t.style.setProperty(xc.name, `${n}`) : t.style.setProperty(xc.name, "2");
}, Ya = (e) => {
  var { children: t, className: n = "", variant: i = gr.top, isDisabled: r = !1, isCompact: a = !1, isSticky: s = !1, isStatic: l = !1, dropDirection: c, toggleTemplate: d, perPage: f = wc[0].value, titles: u = {
    items: "",
    page: "",
    pages: "",
    itemsPerPage: "Items per page",
    perPageSuffix: "per page",
    toFirstPageAriaLabel: "Go to first page",
    toPreviousPageAriaLabel: "Go to previous page",
    toLastPageAriaLabel: "Go to last page",
    toNextPageAriaLabel: "Go to next page",
    optionsToggleAriaLabel: "",
    currPageAriaLabel: "Current page",
    paginationAriaLabel: "Pagination",
    ofWord: "of"
  }, firstPage: p = 1, page: m = 1, offset: g = null, isLastFullPageShown: v = !1, itemsStart: x = null, itemsEnd: w = null, itemCount: _, perPageOptions: S = wc, widgetId: I = "options-menu", onSetPage: E = () => {
  }, onPerPageSelect: R = () => {
  }, onFirstClick: k = () => {
  }, onPreviousClick: N = () => {
  }, onNextClick: M = () => {
  }, onPageInput: $ = () => {
  }, onLastClick: D = () => {
  }, ouiaId: O, ouiaSafe: L = !0, usePageInsets: j, inset: C, menuAppendTo: P } = e, G = z(e, ["children", "className", "variant", "isDisabled", "isCompact", "isSticky", "isStatic", "dropDirection", "toggleTemplate", "perPage", "titles", "firstPage", "page", "offset", "isLastFullPageShown", "itemsStart", "itemsEnd", "itemCount", "perPageOptions", "widgetId", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaId", "ouiaSafe", "usePageInsets", "inset", "menuAppendTo"]);
  const B = o.useRef(null), J = o.useRef(null), b = () => (
    // when itemCount is not known let's set lastPage as page+1 as we don't know the total count
    _ || _ === 0 ? Math.ceil(_ / f) || 0 : K + 1
  );
  o.useEffect(() => {
    const X = B.current;
    Qb(b(), X);
  }, [f, _]);
  const F = c || (i === "bottom" && !l ? "up" : "down");
  let K = m;
  g !== null && (x = g + 1, K = Math.max(Math.ceil(x / f), 1), w = g + f);
  const V = b();
  let U = (K - 1) * f + 1, q = K * f;
  (_ || _ === 0) && (U = _ <= 0 ? 0 : (K - 1) * f + 1, K < p && _ > 0 ? K = p : K > V && (K = V), _ >= 0 && (q = K === V || _ === 0 ? _ : K * f));
  const W = {
    firstIndex: U,
    lastIndex: q,
    itemCount: _,
    itemsTitle: u.items,
    ofWord: u.ofWord
  };
  return o.createElement(
    "div",
    Object.assign({ ref: B, className: y(ot.pagination, i === gr.bottom && ot.modifiers.bottom, j && ot.modifiers.pageInsets, $e(C, ot), a && ot.modifiers.compact, l && ot.modifiers.static, s && ot.modifiers.sticky, n) }, I && { id: `${I}-${i}-pagination` }, Gt(Ya.displayName, O, L, i), G),
    i === gr.top && o.createElement(
      "div",
      { className: y(ot.paginationTotalItems) },
      d && typeof d == "string" && Ao(d, W),
      d && typeof d != "string" && d(W),
      !d && o.createElement(fl, { firstIndex: U, lastIndex: q, itemCount: _, itemsTitle: u.items, ofWord: u.ofWord })
    ),
    S && S.length > 0 && o.createElement(Lu, { itemsPerPageTitle: u.itemsPerPage, perPageSuffix: u.perPageSuffix, itemsTitle: a ? "" : u.items, optionsToggleAriaLabel: u.optionsToggleAriaLabel, perPageOptions: S, firstIndex: x !== null ? x : U, lastIndex: w !== null ? w : q, ofWord: u.ofWord, isLastFullPageShown: v, itemCount: _, page: K, perPage: f, lastPage: V, onPerPageSelect: R, dropDirection: F, widgetId: `${I}-${i}`, toggleTemplate: d, isDisabled: r, containerRef: J, appendTo: P }),
    o.createElement(Ui, { pagesTitle: u.page, pagesTitlePlural: u.pages, toLastPageAriaLabel: u.toLastPageAriaLabel, toPreviousPageAriaLabel: u.toPreviousPageAriaLabel, toNextPageAriaLabel: u.toNextPageAriaLabel, toFirstPageAriaLabel: u.toFirstPageAriaLabel, currPageAriaLabel: u.currPageAriaLabel, paginationAriaLabel: u.paginationAriaLabel, ofWord: u.ofWord, page: _ && _ <= 0 ? 0 : K, perPage: f, itemCount: _, firstPage: x !== null ? x : 1, lastPage: V, onSetPage: E, onFirstClick: k, onPreviousClick: N, onNextClick: M, onLastClick: D, onPageInput: $, isDisabled: r, isCompact: a }),
    t
  );
};
Ya.displayName = "Pagination";
const _e = {
  button: "pf-v5-c-button",
  dirRtl: "pf-v5-m-dir-rtl",
  modifiers: {
    fill: "pf-m-fill",
    scrollable: "pf-m-scrollable",
    noBorderBottom: "pf-m-no-border-bottom",
    box: "pf-m-box",
    vertical: "pf-m-vertical",
    current: "pf-m-current",
    colorSchemeLight_300: "pf-m-color-scheme--light-300",
    expandable: "pf-m-expandable",
    nonExpandable: "pf-m-non-expandable",
    expandableOnSm: "pf-m-expandable-on-sm",
    nonExpandableOnSm: "pf-m-non-expandable-on-sm",
    expandableOnMd: "pf-m-expandable-on-md",
    nonExpandableOnMd: "pf-m-non-expandable-on-md",
    expandableOnLg: "pf-m-expandable-on-lg",
    nonExpandableOnLg: "pf-m-non-expandable-on-lg",
    expandableOnXl: "pf-m-expandable-on-xl",
    nonExpandableOnXl: "pf-m-non-expandable-on-xl",
    expandableOn_2xl: "pf-m-expandable-on-2xl",
    nonExpandableOn_2xl: "pf-m-non-expandable-on-2xl",
    expanded: "pf-m-expanded",
    secondary: "pf-m-secondary",
    pageInsets: "pf-m-page-insets",
    overflow: "pf-m-overflow",
    action: "pf-m-action",
    active: "pf-m-active",
    disabled: "pf-m-disabled",
    ariaDisabled: "pf-m-aria-disabled",
    insetNone: "pf-m-inset-none",
    insetSm: "pf-m-inset-sm",
    insetMd: "pf-m-inset-md",
    insetLg: "pf-m-inset-lg",
    insetXl: "pf-m-inset-xl",
    inset_2xl: "pf-m-inset-2xl",
    insetNoneOnSm: "pf-m-inset-none-on-sm",
    insetSmOnSm: "pf-m-inset-sm-on-sm",
    insetMdOnSm: "pf-m-inset-md-on-sm",
    insetLgOnSm: "pf-m-inset-lg-on-sm",
    insetXlOnSm: "pf-m-inset-xl-on-sm",
    inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
    insetNoneOnMd: "pf-m-inset-none-on-md",
    insetSmOnMd: "pf-m-inset-sm-on-md",
    insetMdOnMd: "pf-m-inset-md-on-md",
    insetLgOnMd: "pf-m-inset-lg-on-md",
    insetXlOnMd: "pf-m-inset-xl-on-md",
    inset_2xlOnMd: "pf-m-inset-2xl-on-md",
    insetNoneOnLg: "pf-m-inset-none-on-lg",
    insetSmOnLg: "pf-m-inset-sm-on-lg",
    insetMdOnLg: "pf-m-inset-md-on-lg",
    insetLgOnLg: "pf-m-inset-lg-on-lg",
    insetXlOnLg: "pf-m-inset-xl-on-lg",
    inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
    insetNoneOnXl: "pf-m-inset-none-on-xl",
    insetSmOnXl: "pf-m-inset-sm-on-xl",
    insetMdOnXl: "pf-m-inset-md-on-xl",
    insetLgOnXl: "pf-m-inset-lg-on-xl",
    insetXlOnXl: "pf-m-inset-xl-on-xl",
    inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
    insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
    insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
    insetMdOn_2xl: "pf-m-inset-md-on-2xl",
    insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
    insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
    inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl"
  },
  tabs: "pf-v5-c-tabs",
  tabsAdd: "pf-v5-c-tabs__add",
  tabsItem: "pf-v5-c-tabs__item",
  tabsItemAction: "pf-v5-c-tabs__item-action",
  tabsItemActionIcon: "pf-v5-c-tabs__item-action-icon",
  tabsItemIcon: "pf-v5-c-tabs__item-icon",
  tabsItemText: "pf-v5-c-tabs__item-text",
  tabsLink: "pf-v5-c-tabs__link",
  tabsLinkToggleIcon: "pf-v5-c-tabs__link-toggle-icon",
  tabsList: "pf-v5-c-tabs__list",
  tabsScrollButton: "pf-v5-c-tabs__scroll-button",
  tabsToggle: "pf-v5-c-tabs__toggle",
  tabsToggleButton: "pf-v5-c-tabs__toggle-button",
  tabsToggleIcon: "pf-v5-c-tabs__toggle-icon",
  tabsToggleText: "pf-v5-c-tabs__toggle-text",
  themeDark: "pf-v5-theme-dark"
}, ul = (e) => {
  var {
    children: t,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabContentRef: n,
    ouiaId: i,
    parentInnerRef: r,
    ouiaSafe: a
  } = e, s = z(e, ["children", "tabContentRef", "ouiaId", "parentInnerRef", "ouiaSafe"]);
  const l = s.href ? "a" : "button";
  return o.createElement(l, Object.assign({}, !s.href && { type: "button" }, { ref: r }, rt(ul.displayName, i, a), s), t);
};
ul.displayName = "TabButton";
const Za = o.createContext({
  variant: "default",
  mountOnEnter: !1,
  unmountOnExit: !1,
  localActiveKey: "",
  uniqueId: "",
  handleTabClick: () => null,
  handleTabClose: void 0
}), ev = Za.Provider, tv = Za.Consumer, nv = (e) => {
  var { children: t, className: n, onClick: i, isDisabled: r, "aria-label": a = "Tab action", innerRef: s, ouiaId: l, ouiaSafe: c } = e, d = z(e, ["children", "className", "onClick", "isDisabled", "aria-label", "innerRef", "ouiaId", "ouiaSafe"]);
  return o.createElement(
    "span",
    { className: y(_e.tabsItemAction, n) },
    o.createElement(
      ce,
      Object.assign({ ref: s, type: "button", variant: "plain", "aria-label": a, onClick: i, isDisabled: r }, rt(pl.displayName, l, c), d),
      o.createElement("span", { className: y(_e.tabsItemActionIcon) }, t)
    )
  );
}, pl = o.forwardRef((e, t) => o.createElement(nv, Object.assign({}, e, { innerRef: t })));
pl.displayName = "TabAction";
const iv = (e) => {
  var { title: t, eventKey: n, tabContentRef: i, id: r, tabContentId: a, className: s = "", ouiaId: l, isDisabled: c, isAriaDisabled: d, inoperableEvents: f = ["onClick", "onKeyPress"], href: u, innerRef: p, tooltip: m, closeButtonAriaLabel: g, isCloseDisabled: v = !1, actions: x } = e, w = z(e, ["title", "eventKey", "tabContentRef", "id", "tabContentId", "className", "ouiaId", "isDisabled", "isAriaDisabled", "inoperableEvents", "href", "innerRef", "tooltip", "closeButtonAriaLabel", "isCloseDisabled", "actions"]);
  const _ = f.reduce((L, j) => Object.assign(Object.assign({}, L), { [j]: (C) => {
    C.preventDefault();
  } }), {}), { mountOnEnter: S, localActiveKey: I, unmountOnExit: E, uniqueId: R, handleTabClick: k, handleTabClose: N } = o.useContext(Za);
  let M = a ? `${a}` : `pf-tab-section-${n}-${r || R}`;
  (S || E) && n !== I && (M = void 0);
  const $ = !u, D = () => {
    if (c)
      return $ ? null : -1;
    if (d)
      return null;
  }, O = o.createElement(ul, Object.assign({ parentInnerRef: p, className: y(_e.tabsLink, c && u && _e.modifiers.disabled, d && _e.modifiers.ariaDisabled), disabled: $ ? c : null, "aria-disabled": c || d, tabIndex: D(), onClick: (L) => k(L, n, i) }, d ? _ : null, { id: `pf-tab-${n}-${r || R}`, "aria-controls": M, tabContentRef: i, ouiaId: l, href: u, role: "tab", "aria-selected": n === I }, w), t);
  return o.createElement(
    "li",
    { className: y(_e.tabsItem, n === I && _e.modifiers.current, (N || x) && _e.modifiers.action, (c || d) && _e.modifiers.disabled, s), role: "presentation" },
    m ? o.createElement(ft, Object.assign({}, m.props), O) : O,
    x && x,
    N !== void 0 && o.createElement(
      pl,
      { "aria-label": g || "Close tab", onClick: (L) => N(L, n, i), isDisabled: v },
      o.createElement(an, null)
    )
  );
}, co = o.forwardRef((e, t) => o.createElement(iv, Object.assign({ innerRef: t }, e)));
co.displayName = "Tab";
const rv = {
  name: "PlusIcon",
  height: 512,
  width: 448,
  svgPath: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  yOffset: 0,
  xOffset: 0
}, av = pe(rv), fo = {
  modifiers: {
    light_300: "pf-m-light-300",
    padding: "pf-m-padding"
  },
  tabContent: "pf-v5-c-tab-content",
  tabContentBody: "pf-v5-c-tab-content__body"
}, Oc = {
  default: "",
  light300: fo.modifiers.light_300
}, sv = (e) => {
  var {
    id: t,
    activeKey: n,
    "aria-label": i,
    child: r,
    children: a,
    className: s,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    eventKey: l,
    innerRef: c,
    ouiaId: d,
    ouiaSafe: f
  } = e, u = z(e, ["id", "activeKey", "aria-label", "child", "children", "className", "eventKey", "innerRef", "ouiaId", "ouiaSafe"]);
  if (a || r) {
    let p;
    return i ? p = null : p = a ? `${t}` : `pf-tab-${r.props.eventKey}-${t}`, o.createElement(tv, null, ({ variant: m }) => o.createElement("section", Object.assign({ ref: c, hidden: a ? null : r.props.eventKey !== n, className: a ? y(fo.tabContent, s, Oc[m]) : y(fo.tabContent, r.props.className, Oc[m]), id: a ? t : `pf-tab-section-${r.props.eventKey}-${t}`, "aria-label": i, "aria-labelledby": p, role: "tabpanel", tabIndex: 0 }, rt("TabContent", d, f), u), a || r.props.children));
  }
  return null;
}, ov = o.forwardRef((e, t) => o.createElement(sv, Object.assign({}, e, { innerRef: t }))), ya = (e) => {
  var { children: t, className: n = "" } = e, i = z(e, ["children", "className"]);
  return o.createElement("span", Object.assign({ className: y(_e.tabsItemText, n) }, i), t);
};
ya.displayName = "TabTitleText";
const Iu = (e) => {
  var { className: t, overflowingTabs: n = [], showTabCount: i, defaultTitleText: r = "More", toggleAriaLabel: a, zIndex: s = 9999 } = e, l = z(e, ["className", "overflowingTabs", "showTabCount", "defaultTitleText", "toggleAriaLabel", "zIndex"]);
  const c = re.useRef(), d = re.useRef(), f = re.useRef(), [u, p] = re.useState(!1), { localActiveKey: m, handleTabClick: g } = re.useContext(Za), v = () => {
    p(!1), d.current.focus();
  }, x = (M) => {
    var $;
    const D = ($ = c?.current) === null || $ === void 0 ? void 0 : $.contains(M.target);
    u && D && M.key === "Escape" && v();
  }, w = (M) => {
    var $, D;
    const O = !(!(($ = c?.current) === null || $ === void 0) && $.contains(M.target)), L = !(!((D = d?.current) === null || D === void 0) && D.contains(M.target));
    u && O && L && v();
  };
  re.useEffect(() => (window.addEventListener("click", w), window.addEventListener("keydown", x), () => {
    window.removeEventListener("click", w), window.removeEventListener("keydown", x);
  }), [u, c, d]);
  const _ = n.find((M) => M.eventKey === m), S = _?.title ? _.title : r, I = () => {
    p((M) => !M), setTimeout(() => {
      if (c?.current) {
        const M = c.current.querySelector("li > button,input:not(:disabled)");
        M && M.focus();
      }
    }, 0);
  }, E = re.createElement(
    "li",
    Object.assign({ className: y(_e.tabsItem, _e.modifiers.overflow, _ && _e.modifiers.current, t), role: "presentation", ref: f }, l),
    re.createElement(
      "button",
      { type: "button", className: y(_e.tabsLink, u && _e.modifiers.expanded), onClick: () => I(), "aria-label": a, "aria-haspopup": "menu", "aria-expanded": u, role: "tab", ref: d },
      re.createElement(
        ya,
        null,
        S,
        i && S === r && ` (${n.length})`
      ),
      re.createElement(
        "span",
        { className: _e.tabsLinkToggleIcon },
        re.createElement(Ot, null)
      )
    )
  ), R = n.map((M) => re.createElement(Ur, { key: M.eventKey, itemId: M.eventKey, isSelected: m === M.eventKey }, M.title)), k = (M, $) => {
    v();
    const D = n.find((O) => O.eventKey === $).tabContentRef;
    g(M, $, D);
  }, N = re.createElement(
    di,
    { ref: c, onSelect: (M, $) => k(M, $) },
    re.createElement(
      Hr,
      null,
      re.createElement(zr, null, R)
    )
  );
  return re.createElement(
    re.Fragment,
    null,
    E,
    re.createElement(Ln, { triggerRef: d, popper: N, popperRef: c, isVisible: u, minWidth: "revert", appendTo: f.current, zIndex: s })
  );
};
Iu.displayName = "OverflowTab";
var xa;
(function(e) {
  e.div = "div", e.nav = "nav";
})(xa || (xa = {}));
const lv = {
  default: "",
  light300: _e.modifiers.colorSchemeLight_300
};
class zi extends o.Component {
  constructor(t) {
    super(t), this.tabList = o.createRef(), this.leftScrollButtonRef = o.createRef(), this.direction = "ltr", this.scrollTimeout = null, this.countOverflowingElements = (n) => Array.from(n.children).filter((r) => !mn(n, r)).length, this.handleScrollButtons = () => {
      const { isOverflowHorizontal: n } = this.props;
      clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
        const i = this.tabList.current;
        let r = !0, a = !0, s = !1, l = 0;
        if (i && !this.props.isVertical && !n) {
          const c = !mn(i, i.firstChild), d = !mn(i, i.lastChild);
          s = c || d, r = !c, a = !d;
        }
        n && (l = this.countOverflowingElements(i)), this.setState({
          enableScrollButtons: s,
          disableBackScrollButton: r,
          disableForwardScrollButton: a,
          overflowingTabCount: l
        });
      }, 100);
    }, this.scrollBack = () => {
      if (this.tabList.current) {
        const n = this.tabList.current, i = Array.from(n.children);
        let r, a, s;
        for (s = 0; s < i.length && !r; s++)
          mn(n, i[s]) && (r = i[s], a = i[s - 1]);
        a && (this.direction === "ltr" ? n.scrollLeft -= a.scrollWidth : n.scrollLeft += a.scrollWidth);
      }
    }, this.scrollForward = () => {
      if (this.tabList.current) {
        const n = this.tabList.current, i = Array.from(n.children);
        let r, a;
        for (let s = i.length - 1; s >= 0 && !r; s--)
          mn(n, i[s]) && (r = i[s], a = i[s + 1]);
        a && (this.direction === "ltr" ? n.scrollLeft += a.scrollWidth : n.scrollLeft -= a.scrollWidth);
      }
    }, this.hideScrollButtons = () => {
      const { enableScrollButtons: n, renderScrollButtons: i, showScrollButtons: r } = this.state;
      !n && !r && i && this.setState({ renderScrollButtons: !1 });
    }, this.state = {
      enableScrollButtons: !1,
      showScrollButtons: !1,
      renderScrollButtons: !1,
      disableBackScrollButton: !0,
      disableForwardScrollButton: !0,
      shownKeys: this.props.defaultActiveKey !== void 0 ? [this.props.defaultActiveKey] : [this.props.activeKey],
      // only for mountOnEnter case
      uncontrolledActiveKey: this.props.defaultActiveKey,
      uncontrolledIsExpandedLocal: this.props.defaultIsExpanded,
      ouiaStateId: Ct(zi.displayName),
      overflowingTabCount: 0
    }, this.props.isVertical && this.props.expandable !== void 0 && !this.props.toggleAriaLabel && !this.props.toggleText && console.error("Tabs:", "toggleAriaLabel or the toggleText prop is required to make the toggle button accessible");
  }
  handleTabClick(t, n, i) {
    const { shownKeys: r } = this.state, { onSelect: a, defaultActiveKey: s } = this.props;
    s !== void 0 ? this.setState({
      uncontrolledActiveKey: n
    }) : a(t, n), i && (o.Children.toArray(this.props.children).filter((l) => o.isValidElement(l)).filter(({ props: l }) => l.tabContentRef && l.tabContentRef.current).forEach((l) => l.props.tabContentRef.current.hidden = !0), i.current && (i.current.hidden = !1)), this.props.mountOnEnter && this.setState({
      shownKeys: r.concat(n)
    });
  }
  componentDidMount() {
    this.props.isVertical || (ze && window.addEventListener("resize", this.handleScrollButtons, !1), this.direction = jn(this.tabList.current), this.handleScrollButtons());
  }
  componentWillUnmount() {
    var t;
    this.props.isVertical || ze && window.removeEventListener("resize", this.handleScrollButtons, !1), clearTimeout(this.scrollTimeout), (t = this.leftScrollButtonRef.current) === null || t === void 0 || t.removeEventListener("transitionend", this.hideScrollButtons);
  }
  componentDidUpdate(t, n) {
    const { activeKey: i, mountOnEnter: r, isOverflowHorizontal: a, children: s } = this.props, { shownKeys: l, overflowingTabCount: c, enableScrollButtons: d } = this.state;
    t.activeKey !== i && r && l.indexOf(i) < 0 && this.setState({
      shownKeys: l.concat(i)
    }), t.children && s && o.Children.toArray(t.children).length !== o.Children.toArray(s).length && this.handleScrollButtons();
    const f = this.countOverflowingElements(this.tabList.current);
    a && f && this.setState({ overflowingTabCount: f + c }), !n.enableScrollButtons && d ? (this.setState({ renderScrollButtons: !0 }), setTimeout(() => {
      var u;
      (u = this.leftScrollButtonRef.current) === null || u === void 0 || u.addEventListener("transitionend", this.hideScrollButtons), this.setState({ showScrollButtons: !0 });
    }, 100)) : n.enableScrollButtons && !d && this.setState({ showScrollButtons: !1 }), this.direction = jn(this.tabList.current);
  }
  static getDerivedStateFromProps(t, n) {
    return n.uncontrolledActiveKey === void 0 || o.Children.toArray(t.children).filter((r) => o.isValidElement(r)).some(({ props: r }) => r.eventKey === n.uncontrolledActiveKey) ? null : {
      uncontrolledActiveKey: t.defaultActiveKey,
      shownKeys: t.defaultActiveKey !== void 0 ? [t.defaultActiveKey] : [t.activeKey]
      // only for mountOnEnter case
    };
  }
  render() {
    const t = this.props, { className: n, children: i, activeKey: r, defaultActiveKey: a, id: s, isFilled: l, isSecondary: c, isVertical: d, isBox: f, hasNoBorderBottom: u, leftScrollAriaLabel: p, rightScrollAriaLabel: m, backScrollAriaLabel: g, forwardScrollAriaLabel: v, "aria-label": x, component: w, ouiaId: _, ouiaSafe: S, mountOnEnter: I, unmountOnExit: E, usePageInsets: R, inset: k, variant: N, expandable: M, isExpanded: $, defaultIsExpanded: D, toggleText: O, toggleAriaLabel: L, addButtonAriaLabel: j, onToggle: C, onClose: P, onAdd: G, isOverflowHorizontal: B } = t, J = z(t, ["className", "children", "activeKey", "defaultActiveKey", "id", "isFilled", "isSecondary", "isVertical", "isBox", "hasNoBorderBottom", "leftScrollAriaLabel", "rightScrollAriaLabel", "backScrollAriaLabel", "forwardScrollAriaLabel", "aria-label", "component", "ouiaId", "ouiaSafe", "mountOnEnter", "unmountOnExit", "usePageInsets", "inset", "variant", "expandable", "isExpanded", "defaultIsExpanded", "toggleText", "toggleAriaLabel", "addButtonAriaLabel", "onToggle", "onClose", "onAdd", "isOverflowHorizontal"]), { showScrollButtons: b, renderScrollButtons: F, disableBackScrollButton: K, disableForwardScrollButton: V, shownKeys: U, uncontrolledActiveKey: q, uncontrolledIsExpandedLocal: W, overflowingTabCount: X } = this.state, te = o.Children.toArray(i).filter((A) => o.isValidElement(A)).filter(({ props: A }) => !A.isHidden), ie = te.slice(0, te.length - X), oe = te.slice(te.length - X).map((A) => A.props), de = s || Mi(), Ce = w === xa.nav ? "nav" : "div", Oe = a !== void 0 ? q : r, Te = D !== void 0 ? W : $, De = (A, H) => {
      $ === void 0 ? this.setState({ uncontrolledIsExpandedLocal: H }) : C(A, H);
    }, Le = B && X > 0, T = typeof B == "object" ? Object.assign({}, B) : {};
    return o.createElement(
      ev,
      { value: {
        variant: N,
        mountOnEnter: I,
        unmountOnExit: E,
        localActiveKey: Oe,
        uniqueId: de,
        handleTabClick: (...A) => this.handleTabClick(...A),
        handleTabClose: P
      } },
      o.createElement(
        Ce,
        Object.assign({ "aria-label": x, className: y(_e.tabs, l && _e.modifiers.fill, c && _e.modifiers.secondary, d && _e.modifiers.vertical, d && M && $e(M, _e), d && M && Te && _e.modifiers.expanded, f && _e.modifiers.box, b && _e.modifiers.scrollable, R && _e.modifiers.pageInsets, u && _e.modifiers.noBorderBottom, $e(k, _e), lv[N], Le && _e.modifiers.overflow, n) }, rt(zi.displayName, _ !== void 0 ? _ : this.state.ouiaStateId, S), { id: s && s }, J),
        M && d && o.createElement(sn, null, (A) => o.createElement(
          "div",
          { className: y(_e.tabsToggle) },
          o.createElement(
            "div",
            { className: y(_e.tabsToggleButton) },
            o.createElement(
              ce,
              { onClick: (H) => De(H, !Te), variant: "plain", "aria-label": L, "aria-expanded": Te, id: `${A}-button`, "aria-labelledby": `${A}-text ${A}-button` },
              o.createElement(
                "span",
                { className: y(_e.tabsToggleIcon) },
                o.createElement(Ot, { "arian-hidden": "true" })
              ),
              O && o.createElement("span", { className: y(_e.tabsToggleText), id: `${A}-text` }, O)
            )
          )
        )),
        F && o.createElement(
          "button",
          { type: "button", className: y(_e.tabsScrollButton, c && Ge.modifiers.secondary), "aria-label": g || p, onClick: this.scrollBack, disabled: K, "aria-hidden": K, ref: this.leftScrollButtonRef },
          o.createElement(Ua, null)
        ),
        o.createElement(
          "ul",
          { className: y(_e.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons, role: "tablist" },
          B ? ie : te,
          Le && o.createElement(Iu, Object.assign({ overflowingTabs: oe }, T))
        ),
        F && o.createElement(
          "button",
          { type: "button", className: y(_e.tabsScrollButton, c && Ge.modifiers.secondary), "aria-label": v || m, onClick: this.scrollForward, disabled: V, "aria-hidden": V },
          o.createElement(Ot, null)
        ),
        G !== void 0 && o.createElement(
          "span",
          { className: y(_e.tabsAdd) },
          o.createElement(
            ce,
            { variant: "plain", "aria-label": j || "Add tab", onClick: G },
            o.createElement(av, null)
          )
        )
      ),
      te.filter((A) => A.props.children && !(E && A.props.eventKey !== Oe) && !(I && U.indexOf(A.props.eventKey) === -1)).map((A) => o.createElement(ov, { key: A.props.eventKey, activeKey: Oe, child: A, id: A.props.id || de, ouiaId: A.props.ouiaId }))
    );
  }
}
zi.displayName = "Tabs";
zi.defaultProps = {
  activeKey: 0,
  onSelect: () => {
  },
  isFilled: !1,
  isSecondary: !1,
  isVertical: !1,
  isBox: !1,
  hasNoBorderBottom: !1,
  leftScrollAriaLabel: "Scroll left",
  backScrollAriaLabel: "Scroll back",
  rightScrollAriaLabel: "Scroll right",
  forwardScrollAriaLabel: "Scroll forward",
  component: xa.div,
  mountOnEnter: !1,
  unmountOnExit: !1,
  ouiaSafe: !0,
  variant: "default",
  onToggle: (e, t) => {
  }
};
const be = {
  button: "pf-v5-c-button",
  chipGroup: "pf-v5-c-chip-group",
  divider: "pf-v5-c-divider",
  modifiers: {
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    pageInsets: "pf-m-page-insets",
    sticky: "pf-m-sticky",
    fullHeight: "pf-m-full-height",
    static: "pf-m-static",
    vertical: "pf-m-vertical",
    alignItemsStart: "pf-m-align-items-start",
    alignItemsCenter: "pf-m-align-items-center",
    alignItemsBaseline: "pf-m-align-items-baseline",
    alignSelfStart: "pf-m-align-self-start",
    alignSelfCenter: "pf-m-align-self-center",
    alignSelfBaseline: "pf-m-align-self-baseline",
    buttonGroup: "pf-m-button-group",
    iconButtonGroup: "pf-m-icon-button-group",
    filterGroup: "pf-m-filter-group",
    toggleGroup: "pf-m-toggle-group",
    overflowMenu: "pf-m-overflow-menu",
    bulkSelect: "pf-m-bulk-select",
    expandAll: "pf-m-expand-all",
    expanded: "pf-m-expanded",
    searchFilter: "pf-m-search-filter",
    chipGroup: "pf-m-chip-group",
    label: "pf-m-label",
    formElement: "pf-m-form-element",
    pagination: "pf-m-pagination",
    overflowContainer: "pf-m-overflow-container",
    chipContainer: "pf-m-chip-container",
    plain: "pf-m-plain",
    show: "pf-m-show",
    showOnSm: "pf-m-show-on-sm",
    showOnMd: "pf-m-show-on-md",
    showOnLg: "pf-m-show-on-lg",
    showOnXl: "pf-m-show-on-xl",
    showOn_2xl: "pf-m-show-on-2xl",
    alignRight: "pf-m-align-right",
    alignLeft: "pf-m-align-left",
    nowrap: "pf-m-nowrap",
    wrap: "pf-m-wrap",
    alignRightOnSm: "pf-m-align-right-on-sm",
    alignLeftOnSm: "pf-m-align-left-on-sm",
    nowrapOnSm: "pf-m-nowrap-on-sm",
    wrapOnSm: "pf-m-wrap-on-sm",
    alignRightOnMd: "pf-m-align-right-on-md",
    alignLeftOnMd: "pf-m-align-left-on-md",
    nowrapOnMd: "pf-m-nowrap-on-md",
    wrapOnMd: "pf-m-wrap-on-md",
    alignRightOnLg: "pf-m-align-right-on-lg",
    alignLeftOnLg: "pf-m-align-left-on-lg",
    nowrapOnLg: "pf-m-nowrap-on-lg",
    wrapOnLg: "pf-m-wrap-on-lg",
    alignRightOnXl: "pf-m-align-right-on-xl",
    alignLeftOnXl: "pf-m-align-left-on-xl",
    nowrapOnXl: "pf-m-nowrap-on-xl",
    wrapOnXl: "pf-m-wrap-on-xl",
    alignRightOn_2xl: "pf-m-align-right-on-2xl",
    alignLeftOn_2xl: "pf-m-align-left-on-2xl",
    nowrapOn_2xl: "pf-m-nowrap-on-2xl",
    wrapOn_2xl: "pf-m-wrap-on-2xl",
    spaceItemsNone: "pf-m-space-items-none",
    spaceItemsSm: "pf-m-space-items-sm",
    spaceItemsMd: "pf-m-space-items-md",
    spaceItemsLg: "pf-m-space-items-lg",
    spaceItemsNoneOnSm: "pf-m-space-items-none-on-sm",
    spaceItemsSmOnSm: "pf-m-space-items-sm-on-sm",
    spaceItemsMdOnSm: "pf-m-space-items-md-on-sm",
    spaceItemsLgOnSm: "pf-m-space-items-lg-on-sm",
    spaceItemsNoneOnMd: "pf-m-space-items-none-on-md",
    spaceItemsSmOnMd: "pf-m-space-items-sm-on-md",
    spaceItemsMdOnMd: "pf-m-space-items-md-on-md",
    spaceItemsLgOnMd: "pf-m-space-items-lg-on-md",
    spaceItemsNoneOnLg: "pf-m-space-items-none-on-lg",
    spaceItemsSmOnLg: "pf-m-space-items-sm-on-lg",
    spaceItemsMdOnLg: "pf-m-space-items-md-on-lg",
    spaceItemsLgOnLg: "pf-m-space-items-lg-on-lg",
    spaceItemsNoneOnXl: "pf-m-space-items-none-on-xl",
    spaceItemsSmOnXl: "pf-m-space-items-sm-on-xl",
    spaceItemsMdOnXl: "pf-m-space-items-md-on-xl",
    spaceItemsLgOnXl: "pf-m-space-items-lg-on-xl",
    spaceItemsNoneOn_2xl: "pf-m-space-items-none-on-2xl",
    spaceItemsSmOn_2xl: "pf-m-space-items-sm-on-2xl",
    spaceItemsMdOn_2xl: "pf-m-space-items-md-on-2xl",
    spaceItemsLgOn_2xl: "pf-m-space-items-lg-on-2xl",
    spacerNone: "pf-m-spacer-none",
    spacerSm: "pf-m-spacer-sm",
    spacerMd: "pf-m-spacer-md",
    spacerLg: "pf-m-spacer-lg",
    spacerNoneOnSm: "pf-m-spacer-none-on-sm",
    spacerSmOnSm: "pf-m-spacer-sm-on-sm",
    spacerMdOnSm: "pf-m-spacer-md-on-sm",
    spacerLgOnSm: "pf-m-spacer-lg-on-sm",
    spacerNoneOnMd: "pf-m-spacer-none-on-md",
    spacerSmOnMd: "pf-m-spacer-sm-on-md",
    spacerMdOnMd: "pf-m-spacer-md-on-md",
    spacerLgOnMd: "pf-m-spacer-lg-on-md",
    spacerNoneOnLg: "pf-m-spacer-none-on-lg",
    spacerSmOnLg: "pf-m-spacer-sm-on-lg",
    spacerMdOnLg: "pf-m-spacer-md-on-lg",
    spacerLgOnLg: "pf-m-spacer-lg-on-lg",
    spacerNoneOnXl: "pf-m-spacer-none-on-xl",
    spacerSmOnXl: "pf-m-spacer-sm-on-xl",
    spacerMdOnXl: "pf-m-spacer-md-on-xl",
    spacerLgOnXl: "pf-m-spacer-lg-on-xl",
    spacerNoneOn_2xl: "pf-m-spacer-none-on-2xl",
    spacerSmOn_2xl: "pf-m-spacer-sm-on-2xl",
    spacerMdOn_2xl: "pf-m-spacer-md-on-2xl",
    spacerLgOn_2xl: "pf-m-spacer-lg-on-2xl",
    insetNone: "pf-m-inset-none",
    insetSm: "pf-m-inset-sm",
    insetMd: "pf-m-inset-md",
    insetLg: "pf-m-inset-lg",
    insetXl: "pf-m-inset-xl",
    inset_2xl: "pf-m-inset-2xl",
    insetNoneOnSm: "pf-m-inset-none-on-sm",
    insetSmOnSm: "pf-m-inset-sm-on-sm",
    insetMdOnSm: "pf-m-inset-md-on-sm",
    insetLgOnSm: "pf-m-inset-lg-on-sm",
    insetXlOnSm: "pf-m-inset-xl-on-sm",
    inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
    insetNoneOnMd: "pf-m-inset-none-on-md",
    insetSmOnMd: "pf-m-inset-sm-on-md",
    insetMdOnMd: "pf-m-inset-md-on-md",
    insetLgOnMd: "pf-m-inset-lg-on-md",
    insetXlOnMd: "pf-m-inset-xl-on-md",
    inset_2xlOnMd: "pf-m-inset-2xl-on-md",
    insetNoneOnLg: "pf-m-inset-none-on-lg",
    insetSmOnLg: "pf-m-inset-sm-on-lg",
    insetMdOnLg: "pf-m-inset-md-on-lg",
    insetLgOnLg: "pf-m-inset-lg-on-lg",
    insetXlOnLg: "pf-m-inset-xl-on-lg",
    inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
    insetNoneOnXl: "pf-m-inset-none-on-xl",
    insetSmOnXl: "pf-m-inset-sm-on-xl",
    insetMdOnXl: "pf-m-inset-md-on-xl",
    insetLgOnXl: "pf-m-inset-lg-on-xl",
    insetXlOnXl: "pf-m-inset-xl-on-xl",
    inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
    insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
    insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
    insetMdOn_2xl: "pf-m-inset-md-on-2xl",
    insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
    insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
    inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl"
  },
  pagination: "pf-v5-c-pagination",
  toolbar: "pf-v5-c-toolbar",
  toolbarContent: "pf-v5-c-toolbar__content",
  toolbarContentSection: "pf-v5-c-toolbar__content-section",
  toolbarExpandAllIcon: "pf-v5-c-toolbar__expand-all-icon",
  toolbarExpandableContent: "pf-v5-c-toolbar__expandable-content",
  toolbarGroup: "pf-v5-c-toolbar__group",
  toolbarItem: "pf-v5-c-toolbar__item",
  toolbarToggle: "pf-v5-c-toolbar__toggle"
}, Nu = o.createContext({
  isExpanded: !1,
  toggleIsExpanded: () => {
  },
  chipGroupContentRef: null,
  updateNumberFilters: () => {
  },
  numberOfFilters: 0,
  clearAllFilters: () => {
  }
}), cv = o.createContext({
  expandableContentRef: null,
  expandableContentId: "",
  chipContainerRef: null,
  clearAllFilters: () => {
  }
}), dv = {
  md: parseInt(Wd.value),
  lg: parseInt(Gd.value),
  xl: parseInt(To.value),
  "2xl": parseInt(Kd.value)
}, fv = {
  name: "--pf-v5-c-toolbar__item--Width",
  value: "auto",
  var: "var(--pf-v5-c-toolbar__item--Width)"
};
var uo;
(function(e) {
  e.separator = "separator", e["bulk-select"] = "bulk-select", e["overflow-menu"] = "overflow-menu", e.pagination = "pagination", e["search-filter"] = "search-filter", e.label = "label", e["chip-group"] = "chip-group", e["expand-all"] = "expand-all";
})(uo || (uo = {}));
const Ft = (e) => {
  var { className: t, variant: n, visibility: i, spacer: r, widths: a, align: s, alignSelf: l, alignItems: c, id: d, children: f, isAllExpanded: u, isOverflowContainer: p } = e, m = z(e, ["className", "variant", "visibility", "spacer", "widths", "align", "alignSelf", "alignItems", "id", "children", "isAllExpanded", "isOverflowContainer"]);
  if (n === uo.separator)
    return o.createElement(el, Object.assign({ className: y(be.modifiers.vertical, t) }, m));
  const g = {};
  return a && Object.entries(a || {}).map(([v, x]) => g[`${fv.name}${v !== "default" ? `-on-${v}` : ""}`] = x), o.createElement(In.Consumer, null, ({ width: v, getBreakpoint: x }) => o.createElement("div", Object.assign({ className: y(be.toolbarItem, n && be.modifiers[pr(n)], u && be.modifiers.expanded, p && be.modifiers.overflowContainer, $e(i, be, "", x(v)), $e(s, be, "", x(v)), $e(r, be, "", x(v)), c === "start" && be.modifiers.alignItemsStart, c === "center" && be.modifiers.alignItemsCenter, c === "baseline" && be.modifiers.alignItemsBaseline, l === "start" && be.modifiers.alignSelfStart, l === "center" && be.modifiers.alignSelfCenter, l === "baseline" && be.modifiers.alignSelfBaseline, t) }, n === "label" && { "aria-hidden": !0 }, { id: d }, m, a && { style: Object.assign(Object.assign({}, g), m.style) }), f));
};
Ft.displayName = "ToolbarItem";
var Cc;
(function(e) {
  e["filter-group"] = "filter-group", e["icon-button-group"] = "icon-button-group", e["button-group"] = "button-group";
})(Cc || (Cc = {}));
class uv extends o.Component {
  render() {
    const t = this.props, { visibility: n, align: i, alignItems: r, alignSelf: a, spacer: s, spaceItems: l, className: c, variant: d, children: f, isOverflowContainer: u, innerRef: p } = t, m = z(t, ["visibility", "align", "alignItems", "alignSelf", "spacer", "spaceItems", "className", "variant", "children", "isOverflowContainer", "innerRef"]);
    return o.createElement(In.Consumer, null, ({ width: g, getBreakpoint: v }) => o.createElement("div", Object.assign({ className: y(be.toolbarGroup, d && be.modifiers[pr(d)], $e(n, be, "", v(g)), $e(i, be, "", v(g)), $e(s, be, "", v(g)), $e(l, be, "", v(g)), r === "start" && be.modifiers.alignItemsStart, r === "center" && be.modifiers.alignItemsCenter, r === "baseline" && be.modifiers.alignItemsBaseline, a === "start" && be.modifiers.alignSelfStart, a === "center" && be.modifiers.alignSelfCenter, a === "baseline" && be.modifiers.alignSelfBaseline, u && be.modifiers.overflowContainer, c) }, m, { ref: p }), f));
  }
}
const _c = o.forwardRef((e, t) => o.createElement(uv, Object.assign({}, e, { innerRef: t })));
class ml extends o.Component {
  render() {
    const t = this.props, { className: n, isExpanded: i, chipGroupContentRef: r, clearAllFilters: a, showClearFiltersButton: s, clearFiltersButtonText: l, collapseListedFiltersBreakpoint: c, numberOfFilters: d, numberOfFiltersText: f, customChipGroupContent: u } = t, p = z(t, ["className", "isExpanded", "chipGroupContentRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "numberOfFilters", "numberOfFiltersText", "customChipGroupContent"]), m = () => {
      a();
    };
    let g = !1;
    c === "all" ? g = !0 : ze && (g = (ze ? window.innerWidth : 1200) < dv[c]);
    const v = d === 0 || i;
    return o.createElement(
      "div",
      Object.assign({ className: y(be.toolbarContent, !v && !g && be.modifiers.chipContainer, v && be.modifiers.hidden, n) }, (d === 0 || i) && { hidden: !0 }, { ref: r }, p),
      o.createElement(_c, Object.assign({ className: y(g && be.modifiers.hidden) }, g && { hidden: !0 }, g && { "aria-hidden": !0 })),
      g && d > 0 && !i && o.createElement(
        _c,
        null,
        o.createElement(Ft, null, f(d))
      ),
      s && !i && !u && o.createElement(
        Ft,
        null,
        o.createElement(ce, { variant: "link", onClick: m, isInline: !0 }, l)
      ),
      u && u
    );
  }
}
ml.displayName = "ToolbarChipGroupContent";
ml.defaultProps = {
  clearFiltersButtonText: "Clear all filters",
  collapseListedFiltersBreakpoint: "lg",
  numberOfFiltersText: (e) => `${e} filters applied`
};
class mi extends o.Component {
  constructor() {
    super(...arguments), this.chipGroupContentRef = o.createRef(), this.staticFilterInfo = {}, this.state = {
      isManagedToggleExpanded: !1,
      filterInfo: {},
      windowWidth: ze ? window.innerWidth : 1200,
      ouiaStateId: Ct(mi.displayName)
    }, this.isToggleManaged = () => !(this.props.isExpanded || this.props.toggleIsExpanded), this.toggleIsExpanded = () => {
      this.setState((t) => ({
        isManagedToggleExpanded: !t.isManagedToggleExpanded
      }));
    }, this.closeExpandableContent = (t) => {
      t.target.innerWidth !== this.state.windowWidth && this.setState(() => ({
        isManagedToggleExpanded: !1,
        windowWidth: t.target.innerWidth
      }));
    }, this.updateNumberFilters = (t, n) => {
      const i = Object.assign({}, this.staticFilterInfo);
      (!i.hasOwnProperty(t) || i[t] !== n) && (i[t] = n, this.staticFilterInfo = i, this.setState({ filterInfo: i }));
    }, this.getNumberOfFilters = () => Object.values(this.state.filterInfo).reduce((t, n) => t + n, 0), this.renderToolbar = (t) => {
      const n = this.props, { clearAllFilters: i, clearFiltersButtonText: r, collapseListedFiltersBreakpoint: a, isExpanded: s, toggleIsExpanded: l, className: c, children: d, isFullHeight: f, isStatic: u, inset: p, usePageInsets: m, isSticky: g, ouiaId: v, numberOfFiltersText: x, customChipGroupContent: w } = n, _ = z(n, ["clearAllFilters", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "isExpanded", "toggleIsExpanded", "className", "children", "isFullHeight", "isStatic", "inset", "usePageInsets", "isSticky", "ouiaId", "numberOfFiltersText", "customChipGroupContent"]), { isManagedToggleExpanded: S } = this.state, I = this.isToggleManaged(), E = I ? S : s, R = this.getNumberOfFilters(), k = R > 0;
      return o.createElement(In.Consumer, null, ({ width: N, getBreakpoint: M }) => o.createElement(
        "div",
        Object.assign({ className: y(be.toolbar, f && be.modifiers.fullHeight, u && be.modifiers.static, m && be.modifiers.pageInsets, g && be.modifiers.sticky, $e(p, be, "", M(N)), c), id: t }, rt(mi.displayName, v !== void 0 ? v : this.state.ouiaStateId), _),
        o.createElement(
          Nu.Provider,
          { value: {
            isExpanded: E,
            toggleIsExpanded: I ? this.toggleIsExpanded : l,
            chipGroupContentRef: this.chipGroupContentRef,
            updateNumberFilters: this.updateNumberFilters,
            numberOfFilters: R,
            clearAllFilters: i,
            clearFiltersButtonText: r,
            showClearFiltersButton: k,
            toolbarId: t,
            customChipGroupContent: w
          } },
          d,
          o.createElement(ml, { isExpanded: E, chipGroupContentRef: this.chipGroupContentRef, clearAllFilters: i, showClearFiltersButton: k, clearFiltersButtonText: r, numberOfFilters: R, numberOfFiltersText: x, collapseListedFiltersBreakpoint: a, customChipGroupContent: w })
        )
      ));
    };
  }
  componentDidMount() {
    this.isToggleManaged() && ze && window.addEventListener("resize", this.closeExpandableContent);
  }
  componentWillUnmount() {
    this.isToggleManaged() && ze && window.removeEventListener("resize", this.closeExpandableContent);
  }
  render() {
    return this.props.id ? this.renderToolbar(this.props.id) : o.createElement(sn, null, (t) => this.renderToolbar(t));
  }
}
mi.displayName = "Toolbar";
class Jn extends o.Component {
  constructor() {
    super(...arguments), this.expandableContentRef = o.createRef(), this.chipContainerRef = o.createRef();
  }
  render() {
    const t = this.props, { className: n, children: i, isExpanded: r, toolbarId: a, visibility: s, alignItems: l, clearAllFilters: c, showClearFiltersButton: d, clearFiltersButtonText: f, alignSelf: u } = t, p = z(t, ["className", "children", "isExpanded", "toolbarId", "visibility", "alignItems", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "alignSelf"]);
    return o.createElement(In.Consumer, null, ({ width: m, getBreakpoint: g }) => o.createElement(
      "div",
      Object.assign({ className: y(be.toolbarContent, $e(s, be, "", g(m)), n), ref: this.expandableContentRef }, p),
      o.createElement(Nu.Consumer, null, ({ clearAllFilters: v, clearFiltersButtonText: x, showClearFiltersButton: w, isExpanded: _, toolbarId: S }) => {
        const I = `${a || S}-expandable-content-${Jn.currentId++}`;
        return o.createElement(
          cv.Provider,
          { value: {
            expandableContentRef: this.expandableContentRef,
            expandableContentId: I,
            chipContainerRef: this.chipContainerRef,
            isExpanded: r || _,
            clearAllFilters: c || v,
            clearFiltersButtonText: f || x,
            showClearFiltersButton: d || w
          } },
          o.createElement("div", { className: y(be.toolbarContentSection, l === "center" && be.modifiers.alignItemsCenter, l === "start" && be.modifiers.alignItemsStart, l === "baseline" && be.modifiers.alignItemsBaseline, u === "center" && be.modifiers.alignSelfCenter, u === "start" && be.modifiers.alignSelfStart, u === "baseline" && be.modifiers.alignSelfBaseline) }, i)
        );
      })
    ));
  }
}
Jn.displayName = "ToolbarContent";
Jn.currentId = 0;
Jn.defaultProps = {
  isExpanded: !1,
  showClearFiltersButton: !1
};
const Mt = {
  grid: "pf-v5-l-grid",
  gridItem: "pf-v5-l-grid__item",
  modifiers: {
    all_1Col: "pf-m-all-1-col",
    all_2Col: "pf-m-all-2-col",
    all_3Col: "pf-m-all-3-col",
    all_4Col: "pf-m-all-4-col",
    all_5Col: "pf-m-all-5-col",
    all_6Col: "pf-m-all-6-col",
    all_7Col: "pf-m-all-7-col",
    all_8Col: "pf-m-all-8-col",
    all_9Col: "pf-m-all-9-col",
    all_10Col: "pf-m-all-10-col",
    all_11Col: "pf-m-all-11-col",
    all_12Col: "pf-m-all-12-col",
    all_1ColOnSm: "pf-m-all-1-col-on-sm",
    all_2ColOnSm: "pf-m-all-2-col-on-sm",
    all_3ColOnSm: "pf-m-all-3-col-on-sm",
    all_4ColOnSm: "pf-m-all-4-col-on-sm",
    all_5ColOnSm: "pf-m-all-5-col-on-sm",
    all_6ColOnSm: "pf-m-all-6-col-on-sm",
    all_7ColOnSm: "pf-m-all-7-col-on-sm",
    all_8ColOnSm: "pf-m-all-8-col-on-sm",
    all_9ColOnSm: "pf-m-all-9-col-on-sm",
    all_10ColOnSm: "pf-m-all-10-col-on-sm",
    all_11ColOnSm: "pf-m-all-11-col-on-sm",
    all_12ColOnSm: "pf-m-all-12-col-on-sm",
    all_1ColOnMd: "pf-m-all-1-col-on-md",
    all_2ColOnMd: "pf-m-all-2-col-on-md",
    all_3ColOnMd: "pf-m-all-3-col-on-md",
    all_4ColOnMd: "pf-m-all-4-col-on-md",
    all_5ColOnMd: "pf-m-all-5-col-on-md",
    all_6ColOnMd: "pf-m-all-6-col-on-md",
    all_7ColOnMd: "pf-m-all-7-col-on-md",
    all_8ColOnMd: "pf-m-all-8-col-on-md",
    all_9ColOnMd: "pf-m-all-9-col-on-md",
    all_10ColOnMd: "pf-m-all-10-col-on-md",
    all_11ColOnMd: "pf-m-all-11-col-on-md",
    all_12ColOnMd: "pf-m-all-12-col-on-md",
    all_1ColOnLg: "pf-m-all-1-col-on-lg",
    all_2ColOnLg: "pf-m-all-2-col-on-lg",
    all_3ColOnLg: "pf-m-all-3-col-on-lg",
    all_4ColOnLg: "pf-m-all-4-col-on-lg",
    all_5ColOnLg: "pf-m-all-5-col-on-lg",
    all_6ColOnLg: "pf-m-all-6-col-on-lg",
    all_7ColOnLg: "pf-m-all-7-col-on-lg",
    all_8ColOnLg: "pf-m-all-8-col-on-lg",
    all_9ColOnLg: "pf-m-all-9-col-on-lg",
    all_10ColOnLg: "pf-m-all-10-col-on-lg",
    all_11ColOnLg: "pf-m-all-11-col-on-lg",
    all_12ColOnLg: "pf-m-all-12-col-on-lg",
    all_1ColOnXl: "pf-m-all-1-col-on-xl",
    all_2ColOnXl: "pf-m-all-2-col-on-xl",
    all_3ColOnXl: "pf-m-all-3-col-on-xl",
    all_4ColOnXl: "pf-m-all-4-col-on-xl",
    all_5ColOnXl: "pf-m-all-5-col-on-xl",
    all_6ColOnXl: "pf-m-all-6-col-on-xl",
    all_7ColOnXl: "pf-m-all-7-col-on-xl",
    all_8ColOnXl: "pf-m-all-8-col-on-xl",
    all_9ColOnXl: "pf-m-all-9-col-on-xl",
    all_10ColOnXl: "pf-m-all-10-col-on-xl",
    all_11ColOnXl: "pf-m-all-11-col-on-xl",
    all_12ColOnXl: "pf-m-all-12-col-on-xl",
    all_1ColOn_2xl: "pf-m-all-1-col-on-2xl",
    all_2ColOn_2xl: "pf-m-all-2-col-on-2xl",
    all_3ColOn_2xl: "pf-m-all-3-col-on-2xl",
    all_4ColOn_2xl: "pf-m-all-4-col-on-2xl",
    all_5ColOn_2xl: "pf-m-all-5-col-on-2xl",
    all_6ColOn_2xl: "pf-m-all-6-col-on-2xl",
    all_7ColOn_2xl: "pf-m-all-7-col-on-2xl",
    all_8ColOn_2xl: "pf-m-all-8-col-on-2xl",
    all_9ColOn_2xl: "pf-m-all-9-col-on-2xl",
    all_10ColOn_2xl: "pf-m-all-10-col-on-2xl",
    all_11ColOn_2xl: "pf-m-all-11-col-on-2xl",
    all_12ColOn_2xl: "pf-m-all-12-col-on-2xl",
    "1Col": "pf-m-1-col",
    "2Col": "pf-m-2-col",
    "3Col": "pf-m-3-col",
    "4Col": "pf-m-4-col",
    "5Col": "pf-m-5-col",
    "6Col": "pf-m-6-col",
    "7Col": "pf-m-7-col",
    "8Col": "pf-m-8-col",
    "9Col": "pf-m-9-col",
    "10Col": "pf-m-10-col",
    "11Col": "pf-m-11-col",
    "12Col": "pf-m-12-col",
    offset_1Col: "pf-m-offset-1-col",
    offset_2Col: "pf-m-offset-2-col",
    offset_3Col: "pf-m-offset-3-col",
    offset_4Col: "pf-m-offset-4-col",
    offset_5Col: "pf-m-offset-5-col",
    offset_6Col: "pf-m-offset-6-col",
    offset_7Col: "pf-m-offset-7-col",
    offset_8Col: "pf-m-offset-8-col",
    offset_9Col: "pf-m-offset-9-col",
    offset_10Col: "pf-m-offset-10-col",
    offset_11Col: "pf-m-offset-11-col",
    offset_12Col: "pf-m-offset-12-col",
    "1Row": "pf-m-1-row",
    "2Row": "pf-m-2-row",
    "3Row": "pf-m-3-row",
    "4Row": "pf-m-4-row",
    "5Row": "pf-m-5-row",
    "6Row": "pf-m-6-row",
    "7Row": "pf-m-7-row",
    "8Row": "pf-m-8-row",
    "9Row": "pf-m-9-row",
    "10Row": "pf-m-10-row",
    "11Row": "pf-m-11-row",
    "12Row": "pf-m-12-row",
    "1ColOnSm": "pf-m-1-col-on-sm",
    "2ColOnSm": "pf-m-2-col-on-sm",
    "3ColOnSm": "pf-m-3-col-on-sm",
    "4ColOnSm": "pf-m-4-col-on-sm",
    "5ColOnSm": "pf-m-5-col-on-sm",
    "6ColOnSm": "pf-m-6-col-on-sm",
    "7ColOnSm": "pf-m-7-col-on-sm",
    "8ColOnSm": "pf-m-8-col-on-sm",
    "9ColOnSm": "pf-m-9-col-on-sm",
    "10ColOnSm": "pf-m-10-col-on-sm",
    "11ColOnSm": "pf-m-11-col-on-sm",
    "12ColOnSm": "pf-m-12-col-on-sm",
    offset_1ColOnSm: "pf-m-offset-1-col-on-sm",
    offset_2ColOnSm: "pf-m-offset-2-col-on-sm",
    offset_3ColOnSm: "pf-m-offset-3-col-on-sm",
    offset_4ColOnSm: "pf-m-offset-4-col-on-sm",
    offset_5ColOnSm: "pf-m-offset-5-col-on-sm",
    offset_6ColOnSm: "pf-m-offset-6-col-on-sm",
    offset_7ColOnSm: "pf-m-offset-7-col-on-sm",
    offset_8ColOnSm: "pf-m-offset-8-col-on-sm",
    offset_9ColOnSm: "pf-m-offset-9-col-on-sm",
    offset_10ColOnSm: "pf-m-offset-10-col-on-sm",
    offset_11ColOnSm: "pf-m-offset-11-col-on-sm",
    offset_12ColOnSm: "pf-m-offset-12-col-on-sm",
    "1RowOnSm": "pf-m-1-row-on-sm",
    "2RowOnSm": "pf-m-2-row-on-sm",
    "3RowOnSm": "pf-m-3-row-on-sm",
    "4RowOnSm": "pf-m-4-row-on-sm",
    "5RowOnSm": "pf-m-5-row-on-sm",
    "6RowOnSm": "pf-m-6-row-on-sm",
    "7RowOnSm": "pf-m-7-row-on-sm",
    "8RowOnSm": "pf-m-8-row-on-sm",
    "9RowOnSm": "pf-m-9-row-on-sm",
    "10RowOnSm": "pf-m-10-row-on-sm",
    "11RowOnSm": "pf-m-11-row-on-sm",
    "12RowOnSm": "pf-m-12-row-on-sm",
    "1ColOnMd": "pf-m-1-col-on-md",
    "2ColOnMd": "pf-m-2-col-on-md",
    "3ColOnMd": "pf-m-3-col-on-md",
    "4ColOnMd": "pf-m-4-col-on-md",
    "5ColOnMd": "pf-m-5-col-on-md",
    "6ColOnMd": "pf-m-6-col-on-md",
    "7ColOnMd": "pf-m-7-col-on-md",
    "8ColOnMd": "pf-m-8-col-on-md",
    "9ColOnMd": "pf-m-9-col-on-md",
    "10ColOnMd": "pf-m-10-col-on-md",
    "11ColOnMd": "pf-m-11-col-on-md",
    "12ColOnMd": "pf-m-12-col-on-md",
    offset_1ColOnMd: "pf-m-offset-1-col-on-md",
    offset_2ColOnMd: "pf-m-offset-2-col-on-md",
    offset_3ColOnMd: "pf-m-offset-3-col-on-md",
    offset_4ColOnMd: "pf-m-offset-4-col-on-md",
    offset_5ColOnMd: "pf-m-offset-5-col-on-md",
    offset_6ColOnMd: "pf-m-offset-6-col-on-md",
    offset_7ColOnMd: "pf-m-offset-7-col-on-md",
    offset_8ColOnMd: "pf-m-offset-8-col-on-md",
    offset_9ColOnMd: "pf-m-offset-9-col-on-md",
    offset_10ColOnMd: "pf-m-offset-10-col-on-md",
    offset_11ColOnMd: "pf-m-offset-11-col-on-md",
    offset_12ColOnMd: "pf-m-offset-12-col-on-md",
    "1RowOnMd": "pf-m-1-row-on-md",
    "2RowOnMd": "pf-m-2-row-on-md",
    "3RowOnMd": "pf-m-3-row-on-md",
    "4RowOnMd": "pf-m-4-row-on-md",
    "5RowOnMd": "pf-m-5-row-on-md",
    "6RowOnMd": "pf-m-6-row-on-md",
    "7RowOnMd": "pf-m-7-row-on-md",
    "8RowOnMd": "pf-m-8-row-on-md",
    "9RowOnMd": "pf-m-9-row-on-md",
    "10RowOnMd": "pf-m-10-row-on-md",
    "11RowOnMd": "pf-m-11-row-on-md",
    "12RowOnMd": "pf-m-12-row-on-md",
    "1ColOnLg": "pf-m-1-col-on-lg",
    "2ColOnLg": "pf-m-2-col-on-lg",
    "3ColOnLg": "pf-m-3-col-on-lg",
    "4ColOnLg": "pf-m-4-col-on-lg",
    "5ColOnLg": "pf-m-5-col-on-lg",
    "6ColOnLg": "pf-m-6-col-on-lg",
    "7ColOnLg": "pf-m-7-col-on-lg",
    "8ColOnLg": "pf-m-8-col-on-lg",
    "9ColOnLg": "pf-m-9-col-on-lg",
    "10ColOnLg": "pf-m-10-col-on-lg",
    "11ColOnLg": "pf-m-11-col-on-lg",
    "12ColOnLg": "pf-m-12-col-on-lg",
    offset_1ColOnLg: "pf-m-offset-1-col-on-lg",
    offset_2ColOnLg: "pf-m-offset-2-col-on-lg",
    offset_3ColOnLg: "pf-m-offset-3-col-on-lg",
    offset_4ColOnLg: "pf-m-offset-4-col-on-lg",
    offset_5ColOnLg: "pf-m-offset-5-col-on-lg",
    offset_6ColOnLg: "pf-m-offset-6-col-on-lg",
    offset_7ColOnLg: "pf-m-offset-7-col-on-lg",
    offset_8ColOnLg: "pf-m-offset-8-col-on-lg",
    offset_9ColOnLg: "pf-m-offset-9-col-on-lg",
    offset_10ColOnLg: "pf-m-offset-10-col-on-lg",
    offset_11ColOnLg: "pf-m-offset-11-col-on-lg",
    offset_12ColOnLg: "pf-m-offset-12-col-on-lg",
    "1RowOnLg": "pf-m-1-row-on-lg",
    "2RowOnLg": "pf-m-2-row-on-lg",
    "3RowOnLg": "pf-m-3-row-on-lg",
    "4RowOnLg": "pf-m-4-row-on-lg",
    "5RowOnLg": "pf-m-5-row-on-lg",
    "6RowOnLg": "pf-m-6-row-on-lg",
    "7RowOnLg": "pf-m-7-row-on-lg",
    "8RowOnLg": "pf-m-8-row-on-lg",
    "9RowOnLg": "pf-m-9-row-on-lg",
    "10RowOnLg": "pf-m-10-row-on-lg",
    "11RowOnLg": "pf-m-11-row-on-lg",
    "12RowOnLg": "pf-m-12-row-on-lg",
    "1ColOnXl": "pf-m-1-col-on-xl",
    "2ColOnXl": "pf-m-2-col-on-xl",
    "3ColOnXl": "pf-m-3-col-on-xl",
    "4ColOnXl": "pf-m-4-col-on-xl",
    "5ColOnXl": "pf-m-5-col-on-xl",
    "6ColOnXl": "pf-m-6-col-on-xl",
    "7ColOnXl": "pf-m-7-col-on-xl",
    "8ColOnXl": "pf-m-8-col-on-xl",
    "9ColOnXl": "pf-m-9-col-on-xl",
    "10ColOnXl": "pf-m-10-col-on-xl",
    "11ColOnXl": "pf-m-11-col-on-xl",
    "12ColOnXl": "pf-m-12-col-on-xl",
    offset_1ColOnXl: "pf-m-offset-1-col-on-xl",
    offset_2ColOnXl: "pf-m-offset-2-col-on-xl",
    offset_3ColOnXl: "pf-m-offset-3-col-on-xl",
    offset_4ColOnXl: "pf-m-offset-4-col-on-xl",
    offset_5ColOnXl: "pf-m-offset-5-col-on-xl",
    offset_6ColOnXl: "pf-m-offset-6-col-on-xl",
    offset_7ColOnXl: "pf-m-offset-7-col-on-xl",
    offset_8ColOnXl: "pf-m-offset-8-col-on-xl",
    offset_9ColOnXl: "pf-m-offset-9-col-on-xl",
    offset_10ColOnXl: "pf-m-offset-10-col-on-xl",
    offset_11ColOnXl: "pf-m-offset-11-col-on-xl",
    offset_12ColOnXl: "pf-m-offset-12-col-on-xl",
    "1RowOnXl": "pf-m-1-row-on-xl",
    "2RowOnXl": "pf-m-2-row-on-xl",
    "3RowOnXl": "pf-m-3-row-on-xl",
    "4RowOnXl": "pf-m-4-row-on-xl",
    "5RowOnXl": "pf-m-5-row-on-xl",
    "6RowOnXl": "pf-m-6-row-on-xl",
    "7RowOnXl": "pf-m-7-row-on-xl",
    "8RowOnXl": "pf-m-8-row-on-xl",
    "9RowOnXl": "pf-m-9-row-on-xl",
    "10RowOnXl": "pf-m-10-row-on-xl",
    "11RowOnXl": "pf-m-11-row-on-xl",
    "12RowOnXl": "pf-m-12-row-on-xl",
    "1ColOn_2xl": "pf-m-1-col-on-2xl",
    "2ColOn_2xl": "pf-m-2-col-on-2xl",
    "3ColOn_2xl": "pf-m-3-col-on-2xl",
    "4ColOn_2xl": "pf-m-4-col-on-2xl",
    "5ColOn_2xl": "pf-m-5-col-on-2xl",
    "6ColOn_2xl": "pf-m-6-col-on-2xl",
    "7ColOn_2xl": "pf-m-7-col-on-2xl",
    "8ColOn_2xl": "pf-m-8-col-on-2xl",
    "9ColOn_2xl": "pf-m-9-col-on-2xl",
    "10ColOn_2xl": "pf-m-10-col-on-2xl",
    "11ColOn_2xl": "pf-m-11-col-on-2xl",
    "12ColOn_2xl": "pf-m-12-col-on-2xl",
    offset_1ColOn_2xl: "pf-m-offset-1-col-on-2xl",
    offset_2ColOn_2xl: "pf-m-offset-2-col-on-2xl",
    offset_3ColOn_2xl: "pf-m-offset-3-col-on-2xl",
    offset_4ColOn_2xl: "pf-m-offset-4-col-on-2xl",
    offset_5ColOn_2xl: "pf-m-offset-5-col-on-2xl",
    offset_6ColOn_2xl: "pf-m-offset-6-col-on-2xl",
    offset_7ColOn_2xl: "pf-m-offset-7-col-on-2xl",
    offset_8ColOn_2xl: "pf-m-offset-8-col-on-2xl",
    offset_9ColOn_2xl: "pf-m-offset-9-col-on-2xl",
    offset_10ColOn_2xl: "pf-m-offset-10-col-on-2xl",
    offset_11ColOn_2xl: "pf-m-offset-11-col-on-2xl",
    offset_12ColOn_2xl: "pf-m-offset-12-col-on-2xl",
    "1RowOn_2xl": "pf-m-1-row-on-2xl",
    "2RowOn_2xl": "pf-m-2-row-on-2xl",
    "3RowOn_2xl": "pf-m-3-row-on-2xl",
    "4RowOn_2xl": "pf-m-4-row-on-2xl",
    "5RowOn_2xl": "pf-m-5-row-on-2xl",
    "6RowOn_2xl": "pf-m-6-row-on-2xl",
    "7RowOn_2xl": "pf-m-7-row-on-2xl",
    "8RowOn_2xl": "pf-m-8-row-on-2xl",
    "9RowOn_2xl": "pf-m-9-row-on-2xl",
    "10RowOn_2xl": "pf-m-10-row-on-2xl",
    "11RowOn_2xl": "pf-m-11-row-on-2xl",
    "12RowOn_2xl": "pf-m-12-row-on-2xl",
    gutter: "pf-m-gutter"
  }
};
var Ec;
(function(e) {
  e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e["2xl"] = "2xl", e["3xl"] = "3xl", e["4xl"] = "4xl";
})(Ec || (Ec = {}));
var wa;
(function(e) {
  e.sm = "Sm", e.md = "Md", e.lg = "Lg", e.xl = "Xl", e.xl2 = "_2xl";
})(wa || (wa = {}));
const Tu = {
  name: "--pf-v5-l-grid--item--Order",
  value: "0",
  var: "var(--pf-v5-l-grid--item--Order)"
}, Qa = (e) => {
  var { children: t = null, className: n = "", component: i = "div", hasGutter: r, span: a = null, order: s, style: l } = e, c = z(e, ["children", "className", "component", "hasGutter", "span", "order", "style"]);
  const d = [Mt.grid, a && Mt.modifiers[`all_${a}Col`]], f = i;
  return Object.entries(wa).forEach(([u, p]) => {
    const m = u, g = c[m];
    g && d.push(Mt.modifiers[`all_${g}ColOn${p}`]), delete c[m];
  }), o.createElement(f, Object.assign({ className: y(...d, r && Mt.modifiers.gutter, n), style: l || s ? Object.assign(Object.assign({}, l), ef(s, Tu.name)) : void 0 }, c), t);
};
Qa.displayName = "Grid";
const gn = (e) => {
  var { children: t = null, className: n = "", component: i = "div", span: r = null, rowSpan: a = null, offset: s = null, order: l, style: c } = e, d = z(e, ["children", "className", "component", "span", "rowSpan", "offset", "order", "style"]);
  const f = [
    Mt.gridItem,
    r && Mt.modifiers[`${r}Col`],
    a && Mt.modifiers[`${a}Row`],
    s && Mt.modifiers[`offset_${s}Col`]
  ], u = i;
  return Object.entries(wa).forEach(([p, m]) => {
    const g = p, v = `${g}RowSpan`, x = `${g}Offset`, w = d[g], _ = d[v], S = d[x];
    w && f.push(Mt.modifiers[`${w}ColOn${m}`]), _ && f.push(Mt.modifiers[`${_}RowOn${m}`]), S && f.push(Mt.modifiers[`offset_${S}ColOn${m}`]), delete d[g], delete d[v], delete d[x];
  }), o.createElement(u, Object.assign({ className: y(...f, n), style: c || l ? Object.assign(Object.assign({}, c), ef(l, Tu.name)) : void 0 }, d), t);
};
gn.displayName = "GridItem";
const br = {
  modifiers: {
    wrap: "pf-m-wrap",
    fill: "pf-m-fill",
    gutter: "pf-m-gutter"
  },
  split: "pf-v5-l-split",
  splitItem: "pf-v5-l-split__item"
}, Ni = (e) => {
  var { hasGutter: t = !1, isWrappable: n = !1, className: i = "", children: r = null, component: a = "div" } = e, s = z(e, ["hasGutter", "isWrappable", "className", "children", "component"]);
  const l = a;
  return o.createElement(l, Object.assign({}, s, { className: y(br.split, t && br.modifiers.gutter, n && br.modifiers.wrap, i) }), r);
};
Ni.displayName = "Split";
const bn = (e) => {
  var { isFilled: t = !1, className: n = "", children: i = null } = e, r = z(e, ["isFilled", "className", "children"]);
  return o.createElement("div", Object.assign({}, r, { className: y(br.splitItem, t && br.modifiers.fill, n) }), i);
};
bn.displayName = "SplitItem";
const Oa = {
  modifiers: {
    fill: "pf-m-fill",
    gutter: "pf-m-gutter"
  },
  stack: "pf-v5-l-stack",
  stackItem: "pf-v5-l-stack__item"
}, Ru = (e) => {
  var { hasGutter: t = !1, className: n = "", children: i = null, component: r = "div" } = e, a = z(e, ["hasGutter", "className", "children", "component"]);
  const s = r;
  return o.createElement(s, Object.assign({}, a, { className: y(Oa.stack, t && Oa.modifiers.gutter, n) }), i);
};
Ru.displayName = "Stack";
const po = (e) => {
  var { isFilled: t = !1, className: n = "", children: i = null } = e, r = z(e, ["isFilled", "className", "children"]);
  return o.createElement("div", Object.assign({}, r, { className: y(Oa.stackItem, t && Oa.modifiers.fill, n) }), i);
};
po.displayName = "StackItem";
class Au extends Error {
  response;
  responseData;
  constructor(t, n) {
    super(t), this.response = n.response, this.responseData = n.responseData;
  }
}
var Sc;
(function(e) {
  e.VERIFY_EMAIL = "VERIFY_EMAIL", e.UPDATE_PROFILE = "UPDATE_PROFILE", e.CONFIGURE_TOTP = "CONFIGURE_TOTP", e.UPDATE_PASSWORD = "UPDATE_PASSWORD", e.TERMS_AND_CONDITIONS = "TERMS_AND_CONDITIONS";
})(Sc || (Sc = {}));
function Pu(e) {
  if (!(this instanceof Pu))
    throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");
  if (typeof e != "string" && !ks(e))
    throw new Error("The 'Keycloak' constructor must be provided with a configuration object, or a URL to a JSON configuration file.");
  if (ks(e)) {
    const b = "oidcProvider" in e ? ["clientId"] : ["url", "realm", "clientId"];
    for (const F of b)
      if (!e[F])
        throw new Error(`The configuration object is missing the required '${F}' property.`);
  }
  var t = this, n, i = [], r, a = {
    enable: !0,
    callbackList: [],
    interval: 5
  };
  t.didInitialize = !1;
  var s = !0, l = J(console.info), c = J(console.warn);
  globalThis.isSecureContext || c(
    `[KEYCLOAK] Keycloak JS must be used in a 'secure context' to function properly as it relies on browser APIs that are otherwise not available.
Continuing to run your application insecurely will lead to unexpected behavior and breakage.

For more information see: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts`
  ), t.init = function(b = {}) {
    if (t.didInitialize)
      throw new Error("A 'Keycloak' instance can only be initialized once.");
    t.didInitialize = !0, t.authenticated = !1, r = B();
    var F = ["default", "cordova", "cordova-native"];
    if (F.indexOf(b.adapter) > -1 ? n = j(b.adapter) : typeof b.adapter == "object" ? n = b.adapter : window.Cordova || window.cordova ? n = j("cordova") : n = j(), typeof b.useNonce < "u" && (s = b.useNonce), typeof b.checkLoginIframe < "u" && (a.enable = b.checkLoginIframe), b.checkLoginIframeInterval && (a.interval = b.checkLoginIframeInterval), b.onLoad === "login-required" && (t.loginRequired = !0), b.responseMode)
      if (b.responseMode === "query" || b.responseMode === "fragment")
        t.responseMode = b.responseMode;
      else
        throw "Invalid value for responseMode";
    if (b.flow) {
      switch (b.flow) {
        case "standard":
          t.responseType = "code";
          break;
        case "implicit":
          t.responseType = "id_token token";
          break;
        case "hybrid":
          t.responseType = "code id_token token";
          break;
        default:
          throw "Invalid value for flow";
      }
      t.flow = b.flow;
    }
    if (b.timeSkew != null && (t.timeSkew = b.timeSkew), b.redirectUri && (t.redirectUri = b.redirectUri), b.silentCheckSsoRedirectUri && (t.silentCheckSsoRedirectUri = b.silentCheckSsoRedirectUri), typeof b.silentCheckSsoFallback == "boolean" ? t.silentCheckSsoFallback = b.silentCheckSsoFallback : t.silentCheckSsoFallback = !0, typeof b.pkceMethod < "u") {
      if (b.pkceMethod !== "S256" && b.pkceMethod !== !1)
        throw new TypeError(`Invalid value for pkceMethod', expected 'S256' or false but got ${b.pkceMethod}.`);
      t.pkceMethod = b.pkceMethod;
    } else
      t.pkceMethod = "S256";
    typeof b.enableLogging == "boolean" ? t.enableLogging = b.enableLogging : t.enableLogging = !1, b.logoutMethod === "POST" ? t.logoutMethod = "POST" : t.logoutMethod = "GET", typeof b.scope == "string" && (t.scope = b.scope), typeof b.acrValues == "string" && (t.acrValues = b.acrValues), typeof b.messageReceiveTimeout == "number" && b.messageReceiveTimeout > 0 ? t.messageReceiveTimeout = b.messageReceiveTimeout : t.messageReceiveTimeout = 1e4, t.responseMode || (t.responseMode = "fragment"), t.responseType || (t.responseType = "code", t.flow = "standard");
    var K = N(), V = N();
    V.promise.then(function() {
      t.onReady && t.onReady(t.authenticated), K.setSuccess(t.authenticated);
    }).catch(function(X) {
      K.setError(X);
    });
    var U = w();
    function q() {
      var X = function(Y) {
        Y || (ie.prompt = "none"), b.locale && (ie.locale = b.locale), t.login(ie).then(function() {
          V.setSuccess();
        }).catch(function(oe) {
          V.setError(oe);
        });
      }, te = async function() {
        var Y = document.createElement("iframe"), oe = await t.createLoginUrl({ prompt: "none", redirectUri: t.silentCheckSsoRedirectUri });
        Y.setAttribute("src", oe), Y.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin"), Y.setAttribute("title", "keycloak-silent-check-sso"), Y.style.display = "none", document.body.appendChild(Y);
        var de = function(Ce) {
          if (!(Ce.origin !== window.location.origin || Y.contentWindow !== Ce.source)) {
            var Oe = E(Ce.data);
            x(Oe, V), document.body.removeChild(Y), window.removeEventListener("message", de);
          }
        };
        window.addEventListener("message", de);
      }, ie = {};
      switch (b.onLoad) {
        case "check-sso":
          a.enable ? $().then(function() {
            O().then(function(Y) {
              Y ? V.setSuccess() : t.silentCheckSsoRedirectUri ? te() : X(!1);
            }).catch(function(Y) {
              V.setError(Y);
            });
          }) : t.silentCheckSsoRedirectUri ? te() : X(!1);
          break;
        case "login-required":
          X(!0);
          break;
        default:
          throw "Invalid value for onLoad";
      }
    }
    function W() {
      var X = E(window.location.href);
      if (X && window.history.replaceState(window.history.state, null, X.newUrl), X && X.valid)
        return $().then(function() {
          x(X, V);
        }).catch(function(te) {
          V.setError(te);
        });
      b.token && b.refreshToken ? (S(b.token, b.refreshToken, b.idToken), a.enable ? $().then(function() {
        O().then(function(te) {
          te ? (t.onAuthSuccess && t.onAuthSuccess(), V.setSuccess(), D()) : V.setSuccess();
        }).catch(function(te) {
          V.setError(te);
        });
      }) : t.updateToken(-1).then(function() {
        t.onAuthSuccess && t.onAuthSuccess(), V.setSuccess();
      }).catch(function(te) {
        t.onAuthError && t.onAuthError(), b.onLoad ? q() : V.setError(te);
      })) : b.onLoad ? q() : V.setSuccess();
    }
    return U.then(function() {
      L().then(W).catch(function(X) {
        K.setError(X);
      });
    }), U.catch(function(X) {
      K.setError(X);
    }), K.promise;
  }, t.login = function(b) {
    return n.login(b);
  };
  function d(b) {
    if (typeof crypto > "u" || typeof crypto.getRandomValues > "u")
      throw new Error("Web Crypto API is not available.");
    return crypto.getRandomValues(new Uint8Array(b));
  }
  function f(b) {
    return u(b, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
  }
  function u(b, F) {
    for (var K = d(b), V = new Array(b), U = 0; U < b; U++)
      V[U] = F.charCodeAt(K[U] % F.length);
    return String.fromCharCode.apply(null, V);
  }
  async function p(b, F) {
    if (b !== "S256")
      throw new TypeError(`Invalid value for 'pkceMethod', expected 'S256' but got '${b}'.`);
    const K = new Uint8Array(await mv(F));
    return pv(K).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  function m(b) {
    var F = {
      id_token: {
        acr: b
      }
    };
    return JSON.stringify(F);
  }
  t.createLoginUrl = async function(b) {
    var F = I(), K = I(), V = n.redirectUri(b), U = {
      state: F,
      nonce: K,
      redirectUri: encodeURIComponent(V),
      loginOptions: b
    };
    b && b.prompt && (U.prompt = b.prompt);
    var q;
    b && b.action == "register" ? q = t.endpoints.register() : q = t.endpoints.authorize();
    var W = b && b.scope || t.scope;
    W ? W.indexOf("openid") === -1 && (W = "openid " + W) : W = "openid";
    var X = q + "?client_id=" + encodeURIComponent(t.clientId) + "&redirect_uri=" + encodeURIComponent(V) + "&state=" + encodeURIComponent(F) + "&response_mode=" + encodeURIComponent(t.responseMode) + "&response_type=" + encodeURIComponent(t.responseType) + "&scope=" + encodeURIComponent(W);
    if (s && (X = X + "&nonce=" + encodeURIComponent(K)), b && b.prompt && (X += "&prompt=" + encodeURIComponent(b.prompt)), b && typeof b.maxAge == "number" && (X += "&max_age=" + encodeURIComponent(b.maxAge)), b && b.loginHint && (X += "&login_hint=" + encodeURIComponent(b.loginHint)), b && b.idpHint && (X += "&kc_idp_hint=" + encodeURIComponent(b.idpHint)), b && b.action && b.action != "register" && (X += "&kc_action=" + encodeURIComponent(b.action)), b && b.locale && (X += "&ui_locales=" + encodeURIComponent(b.locale)), b && b.acr) {
      var te = m(b.acr);
      X += "&claims=" + encodeURIComponent(te);
    }
    if ((b && b.acrValues || t.acrValues) && (X += "&acr_values=" + encodeURIComponent(b.acrValues || t.acrValues)), t.pkceMethod)
      try {
        const ie = f(96), Y = await p(t.pkceMethod, ie);
        U.pkceCodeVerifier = ie, X += "&code_challenge=" + Y, X += "&code_challenge_method=" + t.pkceMethod;
      } catch (ie) {
        throw new Error("Failed to generate PKCE challenge.", { cause: ie });
      }
    return r.add(U), X;
  }, t.logout = function(b) {
    return n.logout(b);
  }, t.createLogoutUrl = function(b) {
    if ((b?.logoutMethod ?? t.logoutMethod) === "POST")
      return t.endpoints.logout();
    var K = t.endpoints.logout() + "?client_id=" + encodeURIComponent(t.clientId) + "&post_logout_redirect_uri=" + encodeURIComponent(n.redirectUri(b, !1));
    return t.idToken && (K += "&id_token_hint=" + encodeURIComponent(t.idToken)), K;
  }, t.register = function(b) {
    return n.register(b);
  }, t.createRegisterUrl = async function(b) {
    return b || (b = {}), b.action = "register", await t.createLoginUrl(b);
  }, t.createAccountUrl = function(b) {
    var F = g(), K = void 0;
    return typeof F < "u" && (K = F + "/account?referrer=" + encodeURIComponent(t.clientId) + "&referrer_uri=" + encodeURIComponent(n.redirectUri(b))), K;
  }, t.accountManagement = function() {
    return n.accountManagement();
  }, t.hasRealmRole = function(b) {
    var F = t.realmAccess;
    return !!F && F.roles.indexOf(b) >= 0;
  }, t.hasResourceRole = function(b, F) {
    if (!t.resourceAccess)
      return !1;
    var K = t.resourceAccess[F || t.clientId];
    return !!K && K.roles.indexOf(b) >= 0;
  }, t.loadUserProfile = function() {
    var b = g() + "/account", F = new XMLHttpRequest();
    F.open("GET", b, !0), F.setRequestHeader("Accept", "application/json"), F.setRequestHeader("Authorization", "bearer " + t.token);
    var K = N();
    return F.onreadystatechange = function() {
      F.readyState == 4 && (F.status == 200 ? (t.profile = JSON.parse(F.responseText), K.setSuccess(t.profile)) : K.setError());
    }, F.send(), K.promise;
  }, t.loadUserInfo = function() {
    var b = t.endpoints.userinfo(), F = new XMLHttpRequest();
    F.open("GET", b, !0), F.setRequestHeader("Accept", "application/json"), F.setRequestHeader("Authorization", "bearer " + t.token);
    var K = N();
    return F.onreadystatechange = function() {
      F.readyState == 4 && (F.status == 200 ? (t.userInfo = JSON.parse(F.responseText), K.setSuccess(t.userInfo)) : K.setError());
    }, F.send(), K.promise;
  }, t.isTokenExpired = function(b) {
    if (!t.tokenParsed || !t.refreshToken && t.flow != "implicit")
      throw "Not authenticated";
    if (t.timeSkew == null)
      return l("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"), !0;
    var F = t.tokenParsed.exp - Math.ceil((/* @__PURE__ */ new Date()).getTime() / 1e3) + t.timeSkew;
    if (b) {
      if (isNaN(b))
        throw "Invalid minValidity";
      F -= b;
    }
    return F < 0;
  }, t.updateToken = function(b) {
    var F = N();
    if (!t.refreshToken)
      return F.setError(), F.promise;
    b = b || 5;
    var K = function() {
      var U = !1;
      if (b == -1 ? (U = !0, l("[KEYCLOAK] Refreshing token: forced refresh")) : (!t.tokenParsed || t.isTokenExpired(b)) && (U = !0, l("[KEYCLOAK] Refreshing token: token expired")), !U)
        F.setSuccess(!1);
      else {
        var q = "grant_type=refresh_token&refresh_token=" + t.refreshToken, W = t.endpoints.token();
        if (i.push(F), i.length == 1) {
          var X = new XMLHttpRequest();
          X.open("POST", W, !0), X.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), X.withCredentials = !0, q += "&client_id=" + encodeURIComponent(t.clientId);
          var te = (/* @__PURE__ */ new Date()).getTime();
          X.onreadystatechange = function() {
            if (X.readyState == 4)
              if (X.status == 200) {
                l("[KEYCLOAK] Token refreshed"), te = (te + (/* @__PURE__ */ new Date()).getTime()) / 2;
                var ie = JSON.parse(X.responseText);
                S(ie.access_token, ie.refresh_token, ie.id_token, te), t.onAuthRefreshSuccess && t.onAuthRefreshSuccess();
                for (var Y = i.pop(); Y != null; Y = i.pop())
                  Y.setSuccess(!0);
              } else {
                c("[KEYCLOAK] Failed to refresh token"), X.status == 400 && t.clearToken(), t.onAuthRefreshError && t.onAuthRefreshError();
                for (var Y = i.pop(); Y != null; Y = i.pop())
                  Y.setError(!0);
              }
          }, X.send(q);
        }
      }
    };
    if (a.enable) {
      var V = O();
      V.then(function() {
        K();
      }).catch(function(U) {
        F.setError(U);
      });
    } else
      K();
    return F.promise;
  }, t.clearToken = function() {
    t.token && (S(null, null, null), t.onAuthLogout && t.onAuthLogout(), t.loginRequired && t.login());
  };
  function g() {
    if (typeof t.authServerUrl < "u")
      return t.authServerUrl.charAt(t.authServerUrl.length - 1) == "/" ? t.authServerUrl + "realms/" + encodeURIComponent(t.realm) : t.authServerUrl + "/realms/" + encodeURIComponent(t.realm);
  }
  function v() {
    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
  }
  function x(b, F) {
    var K = b.code, V = b.error, U = b.prompt, q = (/* @__PURE__ */ new Date()).getTime();
    if (b.kc_action_status && t.onActionUpdate && t.onActionUpdate(b.kc_action_status, b.kc_action), V) {
      if (U != "none")
        if (b.error_description && b.error_description === "authentication_expired")
          t.login(b.loginOptions);
        else {
          var W = { error: V, error_description: b.error_description };
          t.onAuthError && t.onAuthError(W), F && F.setError(W);
        }
      else
        F && F.setSuccess();
      return;
    } else t.flow != "standard" && (b.access_token || b.id_token) && Y(b.access_token, null, b.id_token, !0);
    if (t.flow != "implicit" && K) {
      var X = "code=" + K + "&grant_type=authorization_code", te = t.endpoints.token(), ie = new XMLHttpRequest();
      ie.open("POST", te, !0), ie.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), X += "&client_id=" + encodeURIComponent(t.clientId), X += "&redirect_uri=" + b.redirectUri, b.pkceCodeVerifier && (X += "&code_verifier=" + b.pkceCodeVerifier), ie.withCredentials = !0, ie.onreadystatechange = function() {
        if (ie.readyState == 4)
          if (ie.status == 200) {
            var oe = JSON.parse(ie.responseText);
            Y(oe.access_token, oe.refresh_token, oe.id_token, t.flow === "standard"), D();
          } else
            t.onAuthError && t.onAuthError(), F && F.setError();
      }, ie.send(X);
    }
    function Y(oe, de, Ce, Oe) {
      q = (q + (/* @__PURE__ */ new Date()).getTime()) / 2, S(oe, de, Ce, q), s && t.idTokenParsed && t.idTokenParsed.nonce != b.storedNonce ? (l("[KEYCLOAK] Invalid nonce, clearing token"), t.clearToken(), F && F.setError()) : Oe && (t.onAuthSuccess && t.onAuthSuccess(), F && F.setSuccess());
    }
  }
  function w() {
    var b = N(), F;
    typeof e == "string" && (F = e);
    function K(W) {
      W ? t.endpoints = {
        authorize: function() {
          return W.authorization_endpoint;
        },
        token: function() {
          return W.token_endpoint;
        },
        logout: function() {
          if (!W.end_session_endpoint)
            throw "Not supported by the OIDC server";
          return W.end_session_endpoint;
        },
        checkSessionIframe: function() {
          if (!W.check_session_iframe)
            throw "Not supported by the OIDC server";
          return W.check_session_iframe;
        },
        register: function() {
          throw 'Redirection to "Register user" page not supported in standard OIDC mode';
        },
        userinfo: function() {
          if (!W.userinfo_endpoint)
            throw "Not supported by the OIDC server";
          return W.userinfo_endpoint;
        }
      } : t.endpoints = {
        authorize: function() {
          return g() + "/protocol/openid-connect/auth";
        },
        token: function() {
          return g() + "/protocol/openid-connect/token";
        },
        logout: function() {
          return g() + "/protocol/openid-connect/logout";
        },
        checkSessionIframe: function() {
          return g() + "/protocol/openid-connect/login-status-iframe.html";
        },
        thirdPartyCookiesIframe: function() {
          return g() + "/protocol/openid-connect/3p-cookies/step1.html";
        },
        register: function() {
          return g() + "/protocol/openid-connect/registrations";
        },
        userinfo: function() {
          return g() + "/protocol/openid-connect/userinfo";
        }
      };
    }
    if (F) {
      var V = new XMLHttpRequest();
      V.open("GET", F, !0), V.setRequestHeader("Accept", "application/json"), V.onreadystatechange = function() {
        if (V.readyState == 4)
          if (V.status == 200 || _(V)) {
            var W = JSON.parse(V.responseText);
            t.authServerUrl = W["auth-server-url"], t.realm = W.realm, t.clientId = W.resource, K(null), b.setSuccess();
          } else
            b.setError();
      }, V.send();
    } else {
      t.clientId = e.clientId;
      var U = e.oidcProvider;
      if (!U)
        t.authServerUrl = e.url, t.realm = e.realm, K(null), b.setSuccess();
      else if (typeof U == "string") {
        var q;
        U.charAt(U.length - 1) == "/" ? q = U + ".well-known/openid-configuration" : q = U + "/.well-known/openid-configuration";
        var V = new XMLHttpRequest();
        V.open("GET", q, !0), V.setRequestHeader("Accept", "application/json"), V.onreadystatechange = function() {
          if (V.readyState == 4)
            if (V.status == 200 || _(V)) {
              var X = JSON.parse(V.responseText);
              K(X), b.setSuccess();
            } else
              b.setError();
        }, V.send();
      } else
        K(U), b.setSuccess();
    }
    return b.promise;
  }
  function _(b) {
    return b.status == 0 && b.responseText && b.responseURL.startsWith("file:");
  }
  function S(b, F, K, V) {
    if (t.tokenTimeoutHandle && (clearTimeout(t.tokenTimeoutHandle), t.tokenTimeoutHandle = null), F ? (t.refreshToken = F, t.refreshTokenParsed = Ss(F)) : (delete t.refreshToken, delete t.refreshTokenParsed), K ? (t.idToken = K, t.idTokenParsed = Ss(K)) : (delete t.idToken, delete t.idTokenParsed), b) {
      if (t.token = b, t.tokenParsed = Ss(b), t.sessionId = t.tokenParsed.sid, t.authenticated = !0, t.subject = t.tokenParsed.sub, t.realmAccess = t.tokenParsed.realm_access, t.resourceAccess = t.tokenParsed.resource_access, V && (t.timeSkew = Math.floor(V / 1e3) - t.tokenParsed.iat), t.timeSkew != null && (l("[KEYCLOAK] Estimated time difference between browser and server is " + t.timeSkew + " seconds"), t.onTokenExpired)) {
        var U = (t.tokenParsed.exp - (/* @__PURE__ */ new Date()).getTime() / 1e3 + t.timeSkew) * 1e3;
        l("[KEYCLOAK] Token expires in " + Math.round(U / 1e3) + " s"), U <= 0 ? t.onTokenExpired() : t.tokenTimeoutHandle = setTimeout(t.onTokenExpired, U);
      }
    } else
      delete t.token, delete t.tokenParsed, delete t.subject, delete t.realmAccess, delete t.resourceAccess, t.authenticated = !1;
  }
  function I() {
    if (typeof crypto > "u" || typeof crypto.randomUUID > "u")
      throw new Error("Web Crypto API is not available.");
    return crypto.randomUUID();
  }
  function E(b) {
    var F = R(b);
    if (F) {
      var K = r.get(F.state);
      return K && (F.valid = !0, F.redirectUri = K.redirectUri, F.storedNonce = K.nonce, F.prompt = K.prompt, F.pkceCodeVerifier = K.pkceCodeVerifier, F.loginOptions = K.loginOptions), F;
    }
  }
  function R(b) {
    var F;
    switch (t.flow) {
      case "standard":
        F = ["code", "state", "session_state", "kc_action_status", "kc_action", "iss"];
        break;
      case "implicit":
        F = ["access_token", "token_type", "id_token", "state", "session_state", "expires_in", "kc_action_status", "kc_action", "iss"];
        break;
      case "hybrid":
        F = ["access_token", "token_type", "id_token", "code", "state", "session_state", "expires_in", "kc_action_status", "kc_action", "iss"];
        break;
    }
    F.push("error"), F.push("error_description"), F.push("error_uri");
    var K = b.indexOf("?"), V = b.indexOf("#"), U, q;
    if (t.responseMode === "query" && K !== -1 ? (U = b.substring(0, K), q = k(b.substring(K + 1, V !== -1 ? V : b.length), F), q.paramsString !== "" && (U += "?" + q.paramsString), V !== -1 && (U += b.substring(V))) : t.responseMode === "fragment" && V !== -1 && (U = b.substring(0, V), q = k(b.substring(V + 1), F), q.paramsString !== "" && (U += "#" + q.paramsString)), q && q.oauthParams) {
      if (t.flow === "standard" || t.flow === "hybrid") {
        if ((q.oauthParams.code || q.oauthParams.error) && q.oauthParams.state)
          return q.oauthParams.newUrl = U, q.oauthParams;
      } else if (t.flow === "implicit" && (q.oauthParams.access_token || q.oauthParams.error) && q.oauthParams.state)
        return q.oauthParams.newUrl = U, q.oauthParams;
    }
  }
  function k(b, F) {
    for (var K = b.split("&"), V = {
      paramsString: "",
      oauthParams: {}
    }, U = 0; U < K.length; U++) {
      var q = K[U].indexOf("="), W = K[U].slice(0, q);
      F.indexOf(W) !== -1 ? V.oauthParams[W] = K[U].slice(q + 1) : (V.paramsString !== "" && (V.paramsString += "&"), V.paramsString += K[U]);
    }
    return V;
  }
  function N() {
    var b = {
      setSuccess: function(F) {
        b.resolve(F);
      },
      setError: function(F) {
        b.reject(F);
      }
    };
    return b.promise = new Promise(function(F, K) {
      b.resolve = F, b.reject = K;
    }), b;
  }
  function M(b, F, K) {
    var V = null, U = new Promise(function(q, W) {
      V = setTimeout(function() {
        W({ error: K });
      }, F);
    });
    return Promise.race([b, U]).finally(function() {
      clearTimeout(V);
    });
  }
  function $() {
    var b = N();
    if (!a.enable || a.iframe)
      return b.setSuccess(), b.promise;
    var F = document.createElement("iframe");
    a.iframe = F, F.onload = function() {
      var U = t.endpoints.authorize();
      U.charAt(0) === "/" ? a.iframeOrigin = v() : a.iframeOrigin = U.substring(0, U.indexOf("/", 8)), b.setSuccess();
    };
    var K = t.endpoints.checkSessionIframe();
    F.setAttribute("src", K), F.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin"), F.setAttribute("title", "keycloak-session-iframe"), F.style.display = "none", document.body.appendChild(F);
    var V = function(U) {
      if (!(U.origin !== a.iframeOrigin || a.iframe.contentWindow !== U.source) && (U.data == "unchanged" || U.data == "changed" || U.data == "error")) {
        U.data != "unchanged" && t.clearToken();
        for (var q = a.callbackList.splice(0, a.callbackList.length), W = q.length - 1; W >= 0; --W) {
          var X = q[W];
          U.data == "error" ? X.setError() : X.setSuccess(U.data == "unchanged");
        }
      }
    };
    return window.addEventListener("message", V, !1), b.promise;
  }
  function D() {
    a.enable && t.token && setTimeout(function() {
      O().then(function(b) {
        b && D();
      });
    }, a.interval * 1e3);
  }
  function O() {
    var b = N();
    if (a.iframe && a.iframeOrigin) {
      var F = t.clientId + " " + (t.sessionId ? t.sessionId : "");
      a.callbackList.push(b);
      var K = a.iframeOrigin;
      a.callbackList.length == 1 && a.iframe.contentWindow.postMessage(F, K);
    } else
      b.setSuccess();
    return b.promise;
  }
  function L() {
    var b = N();
    if ((a.enable || t.silentCheckSsoRedirectUri) && typeof t.endpoints.thirdPartyCookiesIframe == "function") {
      var F = document.createElement("iframe");
      F.setAttribute("src", t.endpoints.thirdPartyCookiesIframe()), F.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin"), F.setAttribute("title", "keycloak-3p-check-iframe"), F.style.display = "none", document.body.appendChild(F);
      var K = function(V) {
        F.contentWindow === V.source && (V.data !== "supported" && V.data !== "unsupported" || (V.data === "unsupported" && (c(
          `[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:

 - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).
 - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).

For more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers`
        ), a.enable = !1, t.silentCheckSsoFallback && (t.silentCheckSsoRedirectUri = !1)), document.body.removeChild(F), window.removeEventListener("message", K), b.setSuccess()));
      };
      window.addEventListener("message", K, !1);
    } else
      b.setSuccess();
    return M(b.promise, t.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
  }
  function j(b) {
    if (!b || b == "default")
      return {
        login: async function(W) {
          return window.location.assign(await t.createLoginUrl(W)), N().promise;
        },
        logout: async function(W) {
          if ((W?.logoutMethod ?? t.logoutMethod) === "GET") {
            window.location.replace(t.createLogoutUrl(W));
            return;
          }
          const te = document.createElement("form");
          te.setAttribute("method", "POST"), te.setAttribute("action", t.createLogoutUrl(W)), te.style.display = "none";
          const ie = {
            id_token_hint: t.idToken,
            client_id: t.clientId,
            post_logout_redirect_uri: n.redirectUri(W, !1)
          };
          for (const [Y, oe] of Object.entries(ie)) {
            const de = document.createElement("input");
            de.setAttribute("type", "hidden"), de.setAttribute("name", Y), de.setAttribute("value", oe), te.appendChild(de);
          }
          document.body.appendChild(te), te.submit();
        },
        register: async function(W) {
          return window.location.assign(await t.createRegisterUrl(W)), N().promise;
        },
        accountManagement: function() {
          var W = t.createAccountUrl();
          if (typeof W < "u")
            window.location.href = W;
          else
            throw "Not supported by the OIDC server";
          return N().promise;
        },
        redirectUri: function(W, X) {
          return W && W.redirectUri ? W.redirectUri : t.redirectUri ? t.redirectUri : location.href;
        }
      };
    if (b == "cordova") {
      a.enable = !1;
      var F = function(W, X, te) {
        return window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(W, X, te) : window.open(W, X, te);
      }, K = function(W) {
        return W && W.cordovaOptions ? Object.keys(W.cordovaOptions).reduce(function(X, te) {
          return X[te] = W.cordovaOptions[te], X;
        }, {}) : {};
      }, V = function(W) {
        return Object.keys(W).reduce(function(X, te) {
          return X.push(te + "=" + W[te]), X;
        }, []).join(",");
      }, U = function(W) {
        var X = K(W);
        return X.location = "no", W && W.prompt == "none" && (X.hidden = "yes"), V(X);
      }, q = function() {
        return t.redirectUri || "http://localhost";
      };
      return {
        login: async function(W) {
          var X = N(), te = U(W), ie = await t.createLoginUrl(W), Y = F(ie, "_blank", te), oe = !1, de = !1, Ce = function() {
            de = !0, Y.close();
          };
          return Y.addEventListener("loadstart", function(Oe) {
            if (Oe.url.indexOf(q()) == 0) {
              var Te = E(Oe.url);
              x(Te, X), Ce(), oe = !0;
            }
          }), Y.addEventListener("loaderror", function(Oe) {
            if (!oe)
              if (Oe.url.indexOf(q()) == 0) {
                var Te = E(Oe.url);
                x(Te, X), Ce(), oe = !0;
              } else
                X.setError(), Ce();
          }), Y.addEventListener("exit", function(Oe) {
            de || X.setError({
              reason: "closed_by_user"
            });
          }), X.promise;
        },
        logout: function(W) {
          var X = N(), te = t.createLogoutUrl(W), ie = F(te, "_blank", "location=no,hidden=yes,clearcache=yes"), Y;
          return ie.addEventListener("loadstart", function(oe) {
            oe.url.indexOf(q()) == 0 && ie.close();
          }), ie.addEventListener("loaderror", function(oe) {
            oe.url.indexOf(q()) == 0 || (Y = !0), ie.close();
          }), ie.addEventListener("exit", function(oe) {
            Y ? X.setError() : (t.clearToken(), X.setSuccess());
          }), X.promise;
        },
        register: async function(W) {
          var X = N(), te = await t.createRegisterUrl(), ie = U(W), Y = F(te, "_blank", ie);
          return Y.addEventListener("loadstart", function(oe) {
            if (oe.url.indexOf(q()) == 0) {
              Y.close();
              var de = E(oe.url);
              x(de, X);
            }
          }), X.promise;
        },
        accountManagement: function() {
          var W = t.createAccountUrl();
          if (typeof W < "u") {
            var X = F(W, "_blank", "location=no");
            X.addEventListener("loadstart", function(te) {
              te.url.indexOf(q()) == 0 && X.close();
            });
          } else
            throw "Not supported by the OIDC server";
        },
        redirectUri: function(W) {
          return q();
        }
      };
    }
    if (b == "cordova-native")
      return a.enable = !1, {
        login: async function(W) {
          var X = N(), te = await t.createLoginUrl(W);
          return universalLinks.subscribe("keycloak", function(ie) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close();
            var Y = E(ie.url);
            x(Y, X);
          }), window.cordova.plugins.browsertab.openUrl(te), X.promise;
        },
        logout: function(W) {
          var X = N(), te = t.createLogoutUrl(W);
          return universalLinks.subscribe("keycloak", function(ie) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), t.clearToken(), X.setSuccess();
          }), window.cordova.plugins.browsertab.openUrl(te), X.promise;
        },
        register: async function(W) {
          var X = N(), te = await t.createRegisterUrl(W);
          return universalLinks.subscribe("keycloak", function(ie) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close();
            var Y = E(ie.url);
            x(Y, X);
          }), window.cordova.plugins.browsertab.openUrl(te), X.promise;
        },
        accountManagement: function() {
          var W = t.createAccountUrl();
          if (typeof W < "u")
            window.cordova.plugins.browsertab.openUrl(W);
          else
            throw "Not supported by the OIDC server";
        },
        redirectUri: function(W) {
          return W && W.redirectUri ? W.redirectUri : t.redirectUri ? t.redirectUri : "http://localhost";
        }
      };
    throw "invalid adapter type: " + b;
  }
  const C = "kc-callback-";
  var P = function() {
    if (!(this instanceof P))
      return new P();
    localStorage.setItem("kc-test", "test"), localStorage.removeItem("kc-test");
    var b = this;
    function F() {
      const q = Date.now();
      for (const [W, X] of V()) {
        const te = U(X);
        (te === null || te < q) && localStorage.removeItem(W);
      }
    }
    function K() {
      for (const [q] of V())
        localStorage.removeItem(q);
    }
    function V() {
      return Object.entries(localStorage).filter(([q]) => q.startsWith(C));
    }
    function U(q) {
      let W;
      try {
        W = JSON.parse(q);
      } catch {
        return null;
      }
      return ks(W) && "expires" in W && typeof W.expires == "number" ? W.expires : null;
    }
    b.get = function(q) {
      if (q) {
        var W = C + q, X = localStorage.getItem(W);
        return X && (localStorage.removeItem(W), X = JSON.parse(X)), F(), X;
      }
    }, b.add = function(q) {
      F();
      const W = C + q.state, X = JSON.stringify({
        ...q,
        // Set the expiry time to 1 hour from now.
        expires: Date.now() + 60 * 60 * 1e3
      });
      try {
        localStorage.setItem(W, X);
      } catch {
        K(), localStorage.setItem(W, X);
      }
    };
  }, G = function() {
    if (!(this instanceof G))
      return new G();
    var b = this;
    b.get = function(U) {
      if (U) {
        var q = K(C + U);
        if (V(C + U, "", F(-100)), q)
          return JSON.parse(q);
      }
    }, b.add = function(U) {
      V(C + U.state, JSON.stringify(U), F(60));
    }, b.removeItem = function(U) {
      V(U, "", F(-100));
    };
    var F = function(U) {
      var q = /* @__PURE__ */ new Date();
      return q.setTime(q.getTime() + U * 60 * 1e3), q;
    }, K = function(U) {
      for (var q = U + "=", W = document.cookie.split(";"), X = 0; X < W.length; X++) {
        for (var te = W[X]; te.charAt(0) == " "; )
          te = te.substring(1);
        if (te.indexOf(q) == 0)
          return te.substring(q.length, te.length);
      }
      return "";
    }, V = function(U, q, W) {
      var X = U + "=" + q + "; expires=" + W.toUTCString() + "; ";
      document.cookie = X;
    };
  };
  function B() {
    try {
      return new P();
    } catch {
    }
    return new G();
  }
  function J(b) {
    return function() {
      t.enableLogging && b.apply(console, Array.prototype.slice.call(arguments));
    };
  }
}
function pv(e) {
  const t = String.fromCodePoint(...e);
  return btoa(t);
}
async function mv(e) {
  const n = new TextEncoder().encode(e);
  if (typeof crypto > "u" || typeof crypto.subtle > "u")
    throw new Error("Web Crypto API is not available.");
  return await crypto.subtle.digest("SHA-256", n);
}
function Ss(e) {
  const [t, n] = e.split(".");
  if (typeof n != "string")
    throw new Error("Unable to decode token, payload not found.");
  let i;
  try {
    i = hv(n);
  } catch (r) {
    throw new Error("Unable to decode token, payload is not a valid Base64URL value.", { cause: r });
  }
  try {
    return JSON.parse(i);
  } catch (r) {
    throw new Error("Unable to decode token, payload is not a valid JSON value.", { cause: r });
  }
}
function hv(e) {
  let t = e.replaceAll("-", "+").replaceAll("_", "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw new Error("Input is not of the correct length.");
  }
  try {
    return gv(t);
  } catch {
    return atob(t);
  }
}
function gv(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, n) => {
    let i = n.charCodeAt(0).toString(16).toUpperCase();
    return i.length < 2 && (i = "0" + i), "%" + i;
  }));
}
function ks(e) {
  return typeof e == "object" && e !== null;
}
const bv = {
  name: "ArrowsAltVIcon",
  height: 512,
  width: 256,
  svgPath: "M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z",
  yOffset: 0,
  xOffset: 0
}, vv = pe(bv), yv = {
  name: "BarsIcon",
  height: 512,
  width: 448,
  svgPath: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  yOffset: 0,
  xOffset: 0
}, xv = pe(yv), wv = {
  name: "BitbucketIcon",
  height: 512,
  width: 512,
  svgPath: "M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z",
  yOffset: 0,
  xOffset: 0
}, Ov = pe(wv), Cv = {
  name: "CubeIcon",
  height: 512,
  width: 512,
  svgPath: "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z",
  yOffset: 0,
  xOffset: 0
}, _v = pe(Cv), Ev = {
  name: "DesktopIcon",
  height: 512,
  width: 576,
  svgPath: "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z",
  yOffset: 0,
  xOffset: 0
}, Sv = pe(Ev), kv = {
  name: "EditAltIcon",
  height: 1024,
  width: 1024,
  svgPath: "M1024,187.9 C1024,207 1017.3,223.1 1004,236.4 L857.5,386.9 L638.8,168.4 L787.3,20.5 C800.3,6.83333333 816.5,0 835.9,0 C855,0 871.366667,6.83333333 885,20.5 L1004,138.9 C1017.3,152.9 1023.96667,169.233333 1024,187.9 Z M806.2,438.9 L219.4,1024 L0,1024 L0,804.6 L586.6,219.5 L806.2,438.9 Z M219.6,950.9 L292.9,877.8 L146.3,731.4 L73.2,804.5 L73.2,877.6 L146.3,877.6 L146.3,951 L219.6,950.9 Z",
  yOffset: 0,
  xOffset: 0
}, kc = pe(kv), Lv = {
  name: "EllipsisHIcon",
  height: 512,
  width: 512,
  svgPath: "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z",
  yOffset: 0,
  xOffset: 0
}, Iv = pe(Lv), Nv = {
  name: "EllipsisVIcon",
  height: 512,
  width: 192,
  svgPath: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",
  yOffset: 0,
  xOffset: 0
}, Tr = pe(Nv), Tv = {
  name: "ExternalLinkSquareAltIcon",
  height: 512,
  width: 448,
  svgPath: "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z",
  yOffset: 0,
  xOffset: 0
}, Mu = pe(Tv), Rv = {
  name: "FacebookSquareIcon",
  height: 512,
  width: 448,
  svgPath: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
  yOffset: 0,
  xOffset: 0
}, Av = pe(Rv), Pv = {
  name: "GithubIcon",
  height: 512,
  width: 496,
  svgPath: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
  yOffset: 0,
  xOffset: 0
}, Mv = pe(Pv), Dv = {
  name: "GitlabIcon",
  height: 512,
  width: 512,
  svgPath: "M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z",
  yOffset: 0,
  xOffset: 0
}, Fv = pe(Dv), $v = {
  name: "GoogleIcon",
  height: 512,
  width: 488,
  svgPath: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
  yOffset: 0,
  xOffset: 0
}, Bv = pe($v), jv = {
  name: "HelpIcon",
  height: 1024,
  width: 1024,
  svgPath: "M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",
  yOffset: 0,
  xOffset: 0
}, Ca = pe(jv), Vv = {
  name: "InfoAltIcon",
  height: 1024,
  width: 1024,
  svgPath: "M592,369 L592,289 C592.013862,284.755109 590.320137,280.682962 587.3,277.7 C584.338831,274.647672 580.252355,272.947987 576,273 L464,273 C459.755109,272.986138 455.682962,274.679863 452.7,277.7 C449.647672,280.661169 447.947987,284.747645 447.99884,289 L447.99884,369 C447.986138,373.244891 449.679863,377.317038 452.7,380.3 C455.661169,383.352328 459.747645,385.052013 464,385 L576,385 C580.244891,385.013862 584.317038,383.320137 587.3,380.3 C590.359349,377.343612 592.060354,373.253963 592,369 Z M592,705 L592,465 C592,456.163444 584.836556,449 576,449 L432,449 C423.163444,449 416,456.163444 416,465 L416,497 C416,505.836556 423.163444,513 432,513 L448,513 L448,705 L416,705 C407.163444,705 400,712.163444 400,721 L400,753 C400,761.836556 407.163444,769 416,769 L624,769 C632.836556,769 640,761.836556 640,753 L640,721 C640,712.163444 632.836556,705 624,705 L592,705 Z M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 Z M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0 Z",
  yOffset: 0,
  xOffset: 0
}, Hv = pe(Vv), Uv = {
  name: "InstagramIcon",
  height: 512,
  width: 448,
  svgPath: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  yOffset: 0,
  xOffset: 0
}, zv = pe(Uv), Wv = {
  name: "LinkIcon",
  height: 512,
  width: 512,
  svgPath: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
  yOffset: 0,
  xOffset: 0
}, Gv = pe(Wv), Kv = {
  name: "LinkedinIcon",
  height: 512,
  width: 448,
  svgPath: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
  yOffset: 0,
  xOffset: 0
}, Xv = pe(Kv), qv = {
  name: "LongArrowAltDownIcon",
  height: 512,
  width: 256,
  svgPath: "M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",
  yOffset: 0,
  xOffset: 0
}, Jv = pe(qv), Yv = {
  name: "LongArrowAltUpIcon",
  height: 512,
  width: 256,
  svgPath: "M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",
  yOffset: 0,
  xOffset: 0
}, Zv = pe(Yv), Qv = {
  name: "MicrosoftIcon",
  height: 512,
  width: 448,
  svgPath: "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z",
  yOffset: 0,
  xOffset: 0
}, e1 = pe(Qv), t1 = {
  name: "MinusCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z",
  yOffset: 0,
  xOffset: 0
}, n1 = pe(t1), i1 = {
  name: "MobileAltIcon",
  height: 512,
  width: 320,
  svgPath: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z",
  yOffset: 0,
  xOffset: 0
}, r1 = pe(i1), a1 = {
  name: "OpenshiftIcon",
  height: 100,
  width: 100,
  svgPath: "M145.7,45.3l-16.1,5.8c0.2,2.6,0.6,5.1,1.3,7.6l15.3-5.6C145.7,50.6,145.5,47.9,145.7,45.3M216.7,27.5c-1.1-2.3-2.4-4.5-3.9-6.6l-16.1,5.8c1.9,1.9,3.4,4.1,4.7,6.4L216.7,27.5zM181.4,23c3.3,1.6,6.2,3.7,8.7,6.2l16.1-5.8c-4.4-6.2-10.5-11.5-17.9-14.9c-22.9-10.7-50.3-0.7-61,22.2c-3.5,7.4-4.8,15.3-4.1,23l16.1-5.8c0.3-3.5,1.1-7,2.7-10.3C148.7,22.5,166.4,16,181.4,23M131.9,58.4l-15.3,5.6c1.4,5.6,3.8,10.8,7.2,15.5l16-5.8C135.8,69.4,133,64.1,131.9,58.4M198.5,52.3c-0.3,3.5-1.1,7-2.7,10.3C188.8,77.5,171,84,156.1,77c-3.3-1.6-6.3-3.7-8.7-6.2l-16,5.8c4.4,6.2,10.5,11.5,17.9,14.9c22.9,10.7,50.3,0.7,61-22.2c3.5-7.4,4.7-15.3,4.1-22.9L198.5,52.3zM202.4,32.7l-15.3,5.6c2.8,5.1,4.2,10.9,3.7,16.8l16-5.8C206.5,43.5,204.9,37.9,202.4,32.7",
  yOffset: 0,
  xOffset: 116
}, s1 = pe(a1), o1 = {
  name: "PaypalIcon",
  height: 512,
  width: 384,
  svgPath: "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z",
  yOffset: 0,
  xOffset: 0
}, l1 = pe(o1), c1 = {
  name: "PlusCircleIcon",
  height: 512,
  width: 512,
  svgPath: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",
  yOffset: 0,
  xOffset: 0
}, d1 = pe(c1), f1 = {
  name: "Remove2Icon",
  height: 1024,
  width: 896,
  svgPath: "M576,128 L576,0 L320,0 L320,128 L0,128 L0,320 L64,256 L832,256 L896,320 L896,128 L576,128 Z M512,128 L384,128 L384,64 L512,64 L512,128 Z M64,320 L128,1024 L731.4,1024 L832,320 L64,320 Z",
  yOffset: 0,
  xOffset: 0
}, Lc = pe(f1), u1 = {
  name: "ShareAltIcon",
  height: 512,
  width: 448,
  svgPath: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z",
  yOffset: 0,
  xOffset: 0
}, Ic = pe(u1), p1 = {
  name: "StackOverflowIcon",
  height: 512,
  width: 384,
  svgPath: "M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z",
  yOffset: 0,
  xOffset: 0
}, m1 = pe(p1), h1 = {
  name: "SyncAltIcon",
  height: 512,
  width: 512,
  svgPath: "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z",
  yOffset: 0,
  xOffset: 0
}, g1 = pe(h1), b1 = {
  name: "TwitterIcon",
  height: 512,
  width: 512,
  svgPath: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
  yOffset: 0,
  xOffset: 0
}, v1 = pe(b1), y1 = {
  name: "UnlinkIcon",
  height: 512,
  width: 512,
  svgPath: "M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z",
  yOffset: 0,
  xOffset: 0
}, x1 = pe(y1), w1 = {
  name: "UserCheckIcon",
  height: 512,
  width: 640,
  svgPath: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z",
  yOffset: 0,
  xOffset: 0
}, O1 = pe(w1);
var Kr = (e) => e.type === "checkbox", Ii = (e) => e instanceof Date, dt = (e) => e == null;
const Du = (e) => typeof e == "object";
var Je = (e) => !dt(e) && !Array.isArray(e) && Du(e) && !Ii(e), Fu = (e) => Je(e) && e.target ? Kr(e.target) ? e.target.checked : e.target.value : e, C1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, $u = (e, t) => e.has(C1(t)), _1 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Je(t) && t.hasOwnProperty("isPrototypeOf");
}, hl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ze(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(hl && (e instanceof Blob || e instanceof FileList)) && (n || Je(e)))
    if (t = n ? [] : {}, !n && !_1(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = Ze(e[i]));
  else
    return e;
  return t;
}
var Xr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Pe = (e) => e === void 0, se = (e, t, n) => {
  if (!t || !Je(e))
    return n;
  const i = Xr(t.split(/[,[\].]+?/)).reduce((r, a) => dt(r) ? r : r[a], e);
  return Pe(i) || i === e ? Pe(e[t]) ? n : e[t] : i;
}, Lt = (e) => typeof e == "boolean", gl = (e) => /^\w*$/.test(e), Bu = (e) => Xr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ae = (e, t, n) => {
  let i = -1;
  const r = gl(t) ? [t] : Bu(t), a = r.length, s = a - 1;
  for (; ++i < a; ) {
    const l = r[i];
    let c = n;
    if (i !== s) {
      const d = e[l];
      c = Je(d) || Array.isArray(d) ? d : isNaN(+r[i + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = c, e = e[l];
  }
  return e;
};
const _a = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, It = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, fn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ju = re.createContext(null), qi = () => re.useContext(ju), bl = (e) => {
  const { children: t, ...n } = e;
  return re.createElement(ju.Provider, { value: n }, t);
};
var Vu = (e, t, n, i = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(r, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== It.all && (t._proxyFormState[s] = !i || It.all), n && (n[s] = !0), e[s];
      }
    });
  return r;
}, ct = (e) => Je(e) && !Object.keys(e).length, Hu = (e, t, n, i) => {
  n(e);
  const { name: r, ...a } = e;
  return ct(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!i || It.all));
}, vt = (e) => Array.isArray(e) ? e : [e], Uu = (e, t, n) => !e || !t || e === t || vt(e).some((i) => i && (n ? i === t : i.startsWith(t) || t.startsWith(i)));
function es(e) {
  const t = re.useRef(e);
  t.current = e, re.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function E1(e) {
  const t = qi(), { control: n = t.control, disabled: i, name: r, exact: a } = e || {}, [s, l] = re.useState(n._formState), c = re.useRef(!0), d = re.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = re.useRef(r);
  return f.current = r, es({
    disabled: i,
    next: (u) => c.current && Uu(f.current, u.name, a) && Hu(u, d.current, n._updateFormState) && l({
      ...n._formState,
      ...u
    }),
    subject: n._subjects.state
  }), re.useEffect(() => (c.current = !0, d.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Vu(s, n, d.current, !1);
}
var Zt = (e) => typeof e == "string", zu = (e, t, n, i, r) => Zt(e) ? (i && t.watch.add(e), se(n, e, r)) : Array.isArray(e) ? e.map((a) => (i && t.watch.add(a), se(n, a))) : (i && (t.watchAll = !0), n);
function vl(e) {
  const t = qi(), { control: n = t.control, name: i, defaultValue: r, disabled: a, exact: s } = e || {}, l = re.useRef(i);
  l.current = i, es({
    disabled: a,
    subject: n._subjects.values,
    next: (f) => {
      Uu(l.current, f.name, s) && d(Ze(zu(l.current, n._names, f.values || n._formValues, !1, r)));
    }
  });
  const [c, d] = re.useState(n._getWatch(i, r));
  return re.useEffect(() => n._removeUnmounted()), c;
}
function Wu(e) {
  const t = qi(), { name: n, disabled: i, control: r = t.control, shouldUnregister: a } = e, s = $u(r._names.array, n), l = vl({
    control: r,
    name: n,
    defaultValue: se(r._formValues, n, se(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = E1({
    control: r,
    name: n,
    exact: !0
  }), d = re.useRef(r.register(n, {
    ...e.rules,
    value: l,
    ...Lt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return re.useEffect(() => {
    const f = r._options.shouldUnregister || a, u = (p, m) => {
      const g = se(r._fields, p);
      g && g._f && (g._f.mount = m);
    };
    if (u(n, !0), f) {
      const p = Ze(se(r._options.defaultValues, n));
      Ae(r._defaultValues, n, p), Pe(se(r._formValues, n)) && Ae(r._formValues, n, p);
    }
    return () => {
      (s ? f && !r._state.action : f) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, s, a]), re.useEffect(() => {
    se(r._fields, n) && r._updateDisabledField({
      disabled: i,
      fields: r._fields,
      name: n,
      value: se(r._fields, n)._f.value
    });
  }, [i, n, r]), {
    field: {
      name: n,
      value: l,
      ...Lt(i) || c.disabled ? { disabled: c.disabled || i } : {},
      onChange: re.useCallback((f) => d.current.onChange({
        target: {
          value: Fu(f),
          name: n
        },
        type: _a.CHANGE
      }), [n]),
      onBlur: re.useCallback(() => d.current.onBlur({
        target: {
          value: se(r._formValues, n),
          name: n
        },
        type: _a.BLUR
      }), [n, r]),
      ref: re.useCallback((f) => {
        const u = se(r._fields, n);
        u && f && (u._f.ref = {
          focus: () => f.focus(),
          select: () => f.select(),
          setCustomValidity: (p) => f.setCustomValidity(p),
          reportValidity: () => f.reportValidity()
        });
      }, [r._fields, n])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!se(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!se(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!se(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!se(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => se(c.errors, n)
      }
    })
  };
}
const ts = (e) => e.render(Wu(e));
var S1 = (e, t, n, i, r) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [i]: r || !0
  }
} : {}, An = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const n = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? n : n & 3 | 8).toString(16);
  });
}, Ls = (e, t, n = {}) => n.shouldFocus || Pe(n.shouldFocus) ? n.focusName || `${e}.${Pe(n.focusIndex) ? t : n.focusIndex}.` : "", vr = (e) => ({
  isOnSubmit: !e || e === It.onSubmit,
  isOnBlur: e === It.onBlur,
  isOnChange: e === It.onChange,
  isOnAll: e === It.all,
  isOnTouch: e === It.onTouched
}), mo = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const Ti = (e, t, n, i) => {
  for (const r of n || Object.keys(e)) {
    const a = se(e, r);
    if (a) {
      const { _f: s, ...l } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], r) && !i)
          return !0;
        if (s.ref && t(s.ref, s.name) && !i)
          return !0;
        if (Ti(l, t))
          break;
      } else if (Je(l) && Ti(l, t))
        break;
    }
  }
};
var Gu = (e, t, n) => {
  const i = vt(se(e, n));
  return Ae(i, "root", t[n]), Ae(e, n, i), e;
}, yl = (e) => e.type === "file", vn = (e) => typeof e == "function", Ea = (e) => {
  if (!hl)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, fa = (e) => Zt(e), xl = (e) => e.type === "radio", Sa = (e) => e instanceof RegExp;
const Nc = {
  value: !1,
  isValid: !1
}, Tc = { value: !0, isValid: !0 };
var Ku = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Pe(e[0].attributes.value) ? Pe(e[0].value) || e[0].value === "" ? Tc : { value: e[0].value, isValid: !0 } : Tc
    ) : Nc;
  }
  return Nc;
};
const Rc = {
  isValid: !1,
  value: null
};
var Xu = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Rc) : Rc;
function Ac(e, t, n = "validate") {
  if (fa(e) || Array.isArray(e) && e.every(fa) || Lt(e) && !e)
    return {
      type: n,
      message: fa(e) ? e : "",
      ref: t
    };
}
var wi = (e) => Je(e) && !Sa(e) ? e : {
  value: e,
  message: ""
}, ho = async (e, t, n, i, r) => {
  const { ref: a, refs: s, required: l, maxLength: c, minLength: d, min: f, max: u, pattern: p, validate: m, name: g, valueAsNumber: v, mount: x, disabled: w } = e._f, _ = se(t, g);
  if (!x || w)
    return {};
  const S = s ? s[0] : a, I = (O) => {
    i && S.reportValidity && (S.setCustomValidity(Lt(O) ? "" : O || ""), S.reportValidity());
  }, E = {}, R = xl(a), k = Kr(a), N = R || k, M = (v || yl(a)) && Pe(a.value) && Pe(_) || Ea(a) && a.value === "" || _ === "" || Array.isArray(_) && !_.length, $ = S1.bind(null, g, n, E), D = (O, L, j, C = fn.maxLength, P = fn.minLength) => {
    const G = O ? L : j;
    E[g] = {
      type: O ? C : P,
      message: G,
      ref: a,
      ...$(O ? C : P, G)
    };
  };
  if (r ? !Array.isArray(_) || !_.length : l && (!N && (M || dt(_)) || Lt(_) && !_ || k && !Ku(s).isValid || R && !Xu(s).isValid)) {
    const { value: O, message: L } = fa(l) ? { value: !!l, message: l } : wi(l);
    if (O && (E[g] = {
      type: fn.required,
      message: L,
      ref: S,
      ...$(fn.required, L)
    }, !n))
      return I(L), E;
  }
  if (!M && (!dt(f) || !dt(u))) {
    let O, L;
    const j = wi(u), C = wi(f);
    if (!dt(_) && !isNaN(_)) {
      const P = a.valueAsNumber || _ && +_;
      dt(j.value) || (O = P > j.value), dt(C.value) || (L = P < C.value);
    } else {
      const P = a.valueAsDate || new Date(_), G = (b) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + b), B = a.type == "time", J = a.type == "week";
      Zt(j.value) && _ && (O = B ? G(_) > G(j.value) : J ? _ > j.value : P > new Date(j.value)), Zt(C.value) && _ && (L = B ? G(_) < G(C.value) : J ? _ < C.value : P < new Date(C.value));
    }
    if ((O || L) && (D(!!O, j.message, C.message, fn.max, fn.min), !n))
      return I(E[g].message), E;
  }
  if ((c || d) && !M && (Zt(_) || r && Array.isArray(_))) {
    const O = wi(c), L = wi(d), j = !dt(O.value) && _.length > +O.value, C = !dt(L.value) && _.length < +L.value;
    if ((j || C) && (D(j, O.message, L.message), !n))
      return I(E[g].message), E;
  }
  if (p && !M && Zt(_)) {
    const { value: O, message: L } = wi(p);
    if (Sa(O) && !_.match(O) && (E[g] = {
      type: fn.pattern,
      message: L,
      ref: a,
      ...$(fn.pattern, L)
    }, !n))
      return I(L), E;
  }
  if (m) {
    if (vn(m)) {
      const O = await m(_, t), L = Ac(O, S);
      if (L && (E[g] = {
        ...L,
        ...$(fn.validate, L.message)
      }, !n))
        return I(L.message), E;
    } else if (Je(m)) {
      let O = {};
      for (const L in m) {
        if (!ct(O) && !n)
          break;
        const j = Ac(await m[L](_, t), S, L);
        j && (O = {
          ...j,
          ...$(L, j.message)
        }, I(j.message), n && (E[g] = O));
      }
      if (!ct(O) && (E[g] = {
        ref: S,
        ...O
      }, !n))
        return E;
    }
  }
  return I(!0), E;
}, Is = (e, t) => [
  ...e,
  ...vt(t)
], Ns = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Ts(e, t, n) {
  return [
    ...e.slice(0, t),
    ...vt(n),
    ...e.slice(t)
  ];
}
var Rs = (e, t, n) => Array.isArray(e) ? (Pe(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : [], As = (e, t) => [
  ...vt(t),
  ...vt(e)
];
function k1(e, t) {
  let n = 0;
  const i = [...e];
  for (const r of t)
    i.splice(r - n, 1), n++;
  return Xr(i).length ? i : [];
}
var Ps = (e, t) => Pe(t) ? [] : k1(e, vt(t).sort((n, i) => n - i)), Ms = (e, t, n) => {
  [e[t], e[n]] = [e[n], e[t]];
};
function L1(e, t) {
  const n = t.slice(0, -1).length;
  let i = 0;
  for (; i < n; )
    e = Pe(e) ? i++ : e[t[i++]];
  return e;
}
function I1(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Pe(e[t]))
      return !1;
  return !0;
}
function Ke(e, t) {
  const n = Array.isArray(t) ? t : gl(t) ? [t] : Bu(t), i = n.length === 1 ? e : L1(e, n), r = n.length - 1, a = n[r];
  return i && delete i[a], r !== 0 && (Je(i) && ct(i) || Array.isArray(i) && I1(i)) && Ke(e, n.slice(0, -1)), e;
}
var Pc = (e, t, n) => (e[t] = n, e);
function qu(e) {
  const t = qi(), { control: n = t.control, name: i, keyName: r = "id", shouldUnregister: a } = e, [s, l] = re.useState(n._getFieldArray(i)), c = re.useRef(n._getFieldArray(i).map(An)), d = re.useRef(s), f = re.useRef(i), u = re.useRef(!1);
  f.current = i, d.current = s, n._names.array.add(i), e.rules && n.register(i, e.rules), es({
    next: ({ values: E, name: R }) => {
      if (R === f.current || !R) {
        const k = se(E, f.current);
        Array.isArray(k) && (l(k), c.current = k.map(An));
      }
    },
    subject: n._subjects.array
  });
  const p = re.useCallback((E) => {
    u.current = !0, n._updateFieldArray(i, E);
  }, [n, i]), m = (E, R) => {
    const k = vt(Ze(E)), N = Is(n._getFieldArray(i), k);
    n._names.focus = Ls(i, N.length - 1, R), c.current = Is(c.current, k.map(An)), p(N), l(N), n._updateFieldArray(i, N, Is, {
      argA: Ns(E)
    });
  }, g = (E, R) => {
    const k = vt(Ze(E)), N = As(n._getFieldArray(i), k);
    n._names.focus = Ls(i, 0, R), c.current = As(c.current, k.map(An)), p(N), l(N), n._updateFieldArray(i, N, As, {
      argA: Ns(E)
    });
  }, v = (E) => {
    const R = Ps(n._getFieldArray(i), E);
    c.current = Ps(c.current, E), p(R), l(R), n._updateFieldArray(i, R, Ps, {
      argA: E
    });
  }, x = (E, R, k) => {
    const N = vt(Ze(R)), M = Ts(n._getFieldArray(i), E, N);
    n._names.focus = Ls(i, E, k), c.current = Ts(c.current, E, N.map(An)), p(M), l(M), n._updateFieldArray(i, M, Ts, {
      argA: E,
      argB: Ns(R)
    });
  }, w = (E, R) => {
    const k = n._getFieldArray(i);
    Ms(k, E, R), Ms(c.current, E, R), p(k), l(k), n._updateFieldArray(i, k, Ms, {
      argA: E,
      argB: R
    }, !1);
  }, _ = (E, R) => {
    const k = n._getFieldArray(i);
    Rs(k, E, R), Rs(c.current, E, R), p(k), l(k), n._updateFieldArray(i, k, Rs, {
      argA: E,
      argB: R
    }, !1);
  }, S = (E, R) => {
    const k = Ze(R), N = Pc(n._getFieldArray(i), E, k);
    c.current = [...N].map((M, $) => !M || $ === E ? An() : c.current[$]), p(N), l([...N]), n._updateFieldArray(i, N, Pc, {
      argA: E,
      argB: k
    }, !0, !1);
  }, I = (E) => {
    const R = vt(Ze(E));
    c.current = R.map(An), p([...R]), l([...R]), n._updateFieldArray(i, [...R], (k) => k, {}, !0, !1);
  };
  return re.useEffect(() => {
    if (n._state.action = !1, mo(i, n._names) && n._subjects.state.next({
      ...n._formState
    }), u.current && (!vr(n._options.mode).isOnSubmit || n._formState.isSubmitted))
      if (n._options.resolver)
        n._executeSchema([i]).then((E) => {
          const R = se(E.errors, i), k = se(n._formState.errors, i);
          (k ? !R && k.type || R && (k.type !== R.type || k.message !== R.message) : R && R.type) && (R ? Ae(n._formState.errors, i, R) : Ke(n._formState.errors, i), n._subjects.state.next({
            errors: n._formState.errors
          }));
        });
      else {
        const E = se(n._fields, i);
        E && E._f && !(vr(n._options.reValidateMode).isOnSubmit && vr(n._options.mode).isOnSubmit) && ho(E, n._formValues, n._options.criteriaMode === It.all, n._options.shouldUseNativeValidation, !0).then((R) => !ct(R) && n._subjects.state.next({
          errors: Gu(n._formState.errors, R, i)
        }));
      }
    n._subjects.values.next({
      name: i,
      values: { ...n._formValues }
    }), n._names.focus && Ti(n._fields, (E, R) => {
      if (n._names.focus && R.startsWith(n._names.focus) && E.focus)
        return E.focus(), 1;
    }), n._names.focus = "", n._updateValid(), u.current = !1;
  }, [s, i, n]), re.useEffect(() => (!se(n._formValues, i) && n._updateFieldArray(i), () => {
    (n._options.shouldUnregister || a) && n.unregister(i);
  }), [i, n, r, a]), {
    swap: re.useCallback(w, [p, i, n]),
    move: re.useCallback(_, [p, i, n]),
    prepend: re.useCallback(g, [p, i, n]),
    append: re.useCallback(m, [p, i, n]),
    remove: re.useCallback(v, [p, i, n]),
    insert: re.useCallback(x, [p, i, n]),
    update: re.useCallback(S, [p, i, n]),
    replace: re.useCallback(I, [p, i, n]),
    fields: re.useMemo(() => s.map((E, R) => ({
      ...E,
      [r]: c.current[R] || An()
    })), [s, r])
  };
}
var Ds = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (r) => {
      for (const a of e)
        a.next && a.next(r);
    },
    subscribe: (r) => (e.push(r), {
      unsubscribe: () => {
        e = e.filter((a) => a !== r);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, ka = (e) => dt(e) || !Du(e);
function Mn(e, t) {
  if (ka(e) || ka(t))
    return e === t;
  if (Ii(e) && Ii(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), i = Object.keys(t);
  if (n.length !== i.length)
    return !1;
  for (const r of n) {
    const a = e[r];
    if (!i.includes(r))
      return !1;
    if (r !== "ref") {
      const s = t[r];
      if (Ii(a) && Ii(s) || Je(a) && Je(s) || Array.isArray(a) && Array.isArray(s) ? !Mn(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Ju = (e) => e.type === "select-multiple", N1 = (e) => xl(e) || Kr(e), Fs = (e) => Ea(e) && e.isConnected, Yu = (e) => {
  for (const t in e)
    if (vn(e[t]))
      return !0;
  return !1;
};
function La(e, t = {}) {
  const n = Array.isArray(e);
  if (Je(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || Je(e[i]) && !Yu(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {}, La(e[i], t[i])) : dt(e[i]) || (t[i] = !0);
  return t;
}
function Zu(e, t, n) {
  const i = Array.isArray(e);
  if (Je(e) || i)
    for (const r in e)
      Array.isArray(e[r]) || Je(e[r]) && !Yu(e[r]) ? Pe(t) || ka(n[r]) ? n[r] = Array.isArray(e[r]) ? La(e[r], []) : { ...La(e[r]) } : Zu(e[r], dt(t) ? {} : t[r], n[r]) : n[r] = !Mn(e[r], t[r]);
  return n;
}
var na = (e, t) => Zu(e, t, La(t)), Qu = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: i }) => Pe(e) ? e : t ? e === "" ? NaN : e && +e : n && Zt(e) ? new Date(e) : i ? i(e) : e;
function $s(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return yl(t) ? t.files : xl(t) ? Xu(e.refs).value : Ju(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Kr(t) ? Ku(e.refs).value : Qu(Pe(t.value) ? e.ref.value : t.value, e);
}
var T1 = (e, t, n, i) => {
  const r = {};
  for (const a of e) {
    const s = se(t, a);
    s && Ae(r, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: r,
    shouldUseNativeValidation: i
  };
}, lr = (e) => Pe(e) ? e : Sa(e) ? e.source : Je(e) ? Sa(e.value) ? e.value.source : e.value : e;
const Mc = "AsyncFunction";
var R1 = (e) => (!e || !e.validate) && !!(vn(e.validate) && e.validate.constructor.name === Mc || Je(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Mc)), A1 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Dc(e, t, n) {
  const i = se(e, n);
  if (i || gl(n))
    return {
      error: i,
      name: n
    };
  const r = n.split(".");
  for (; r.length; ) {
    const a = r.join("."), s = se(t, a), l = se(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (l && l.type)
      return {
        name: a,
        error: l
      };
    r.pop();
  }
  return {
    name: n
  };
}
var P1 = (e, t, n, i, r) => r.isOnAll ? !1 : !n && r.isOnTouch ? !(t || e) : (n ? i.isOnBlur : r.isOnBlur) ? !e : (n ? i.isOnChange : r.isOnChange) ? e : !0, M1 = (e, t) => !Xr(se(e, t)).length && Ke(e, t);
const D1 = {
  mode: It.onSubmit,
  reValidateMode: It.onChange,
  shouldFocusError: !0
};
function F1(e = {}) {
  let t = {
    ...D1,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: vn(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, i = {}, r = Je(t.defaultValues) || Je(t.values) ? Ze(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Ze(r), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, d = 0;
  const f = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, u = {
    values: Ds(),
    array: Ds(),
    state: Ds()
  }, p = vr(t.mode), m = vr(t.reValidateMode), g = t.criteriaMode === It.all, v = (T) => (A) => {
    clearTimeout(d), d = setTimeout(T, A);
  }, x = async (T) => {
    if (f.isValid || T) {
      const A = t.resolver ? ct((await N()).errors) : await $(i, !0);
      A !== n.isValid && u.state.next({
        isValid: A
      });
    }
  }, w = (T, A) => {
    (f.isValidating || f.validatingFields) && ((T || Array.from(l.mount)).forEach((H) => {
      H && (A ? Ae(n.validatingFields, H, A) : Ke(n.validatingFields, H));
    }), u.state.next({
      validatingFields: n.validatingFields,
      isValidating: !ct(n.validatingFields)
    }));
  }, _ = (T, A = [], H, ee, ne = !0, Q = !0) => {
    if (ee && H) {
      if (s.action = !0, Q && Array.isArray(se(i, T))) {
        const le = H(se(i, T), ee.argA, ee.argB);
        ne && Ae(i, T, le);
      }
      if (Q && Array.isArray(se(n.errors, T))) {
        const le = H(se(n.errors, T), ee.argA, ee.argB);
        ne && Ae(n.errors, T, le), M1(n.errors, T);
      }
      if (f.touchedFields && Q && Array.isArray(se(n.touchedFields, T))) {
        const le = H(se(n.touchedFields, T), ee.argA, ee.argB);
        ne && Ae(n.touchedFields, T, le);
      }
      f.dirtyFields && (n.dirtyFields = na(r, a)), u.state.next({
        name: T,
        isDirty: O(T, A),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ae(a, T, A);
  }, S = (T, A) => {
    Ae(n.errors, T, A), u.state.next({
      errors: n.errors
    });
  }, I = (T) => {
    n.errors = T, u.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, E = (T, A, H, ee) => {
    const ne = se(i, T);
    if (ne) {
      const Q = se(a, T, Pe(H) ? se(r, T) : H);
      Pe(Q) || ee && ee.defaultChecked || A ? Ae(a, T, A ? Q : $s(ne._f)) : C(T, Q), s.mount && x();
    }
  }, R = (T, A, H, ee, ne) => {
    let Q = !1, le = !1;
    const ae = {
      name: T
    }, ve = !!(se(i, T) && se(i, T)._f && se(i, T)._f.disabled);
    if (!H || ee) {
      f.isDirty && (le = n.isDirty, n.isDirty = ae.isDirty = O(), Q = le !== ae.isDirty);
      const ye = ve || Mn(se(r, T), A);
      le = !!(!ve && se(n.dirtyFields, T)), ye || ve ? Ke(n.dirtyFields, T) : Ae(n.dirtyFields, T, !0), ae.dirtyFields = n.dirtyFields, Q = Q || f.dirtyFields && le !== !ye;
    }
    if (H) {
      const ye = se(n.touchedFields, T);
      ye || (Ae(n.touchedFields, T, H), ae.touchedFields = n.touchedFields, Q = Q || f.touchedFields && ye !== H);
    }
    return Q && ne && u.state.next(ae), Q ? ae : {};
  }, k = (T, A, H, ee) => {
    const ne = se(n.errors, T), Q = f.isValid && Lt(A) && n.isValid !== A;
    if (e.delayError && H ? (c = v(() => S(T, H)), c(e.delayError)) : (clearTimeout(d), c = null, H ? Ae(n.errors, T, H) : Ke(n.errors, T)), (H ? !Mn(ne, H) : ne) || !ct(ee) || Q) {
      const le = {
        ...ee,
        ...Q && Lt(A) ? { isValid: A } : {},
        errors: n.errors,
        name: T
      };
      n = {
        ...n,
        ...le
      }, u.state.next(le);
    }
  }, N = async (T) => {
    w(T, !0);
    const A = await t.resolver(a, t.context, T1(T || l.mount, i, t.criteriaMode, t.shouldUseNativeValidation));
    return w(T), A;
  }, M = async (T) => {
    const { errors: A } = await N(T);
    if (T)
      for (const H of T) {
        const ee = se(A, H);
        ee ? Ae(n.errors, H, ee) : Ke(n.errors, H);
      }
    else
      n.errors = A;
    return A;
  }, $ = async (T, A, H = {
    valid: !0
  }) => {
    for (const ee in T) {
      const ne = T[ee];
      if (ne) {
        const { _f: Q, ...le } = ne;
        if (Q) {
          const ae = l.array.has(Q.name), ve = ne._f && R1(ne._f);
          ve && f.validatingFields && w([ee], !0);
          const ye = await ho(ne, a, g, t.shouldUseNativeValidation && !A, ae);
          if (ve && f.validatingFields && w([ee]), ye[Q.name] && (H.valid = !1, A))
            break;
          !A && (se(ye, Q.name) ? ae ? Gu(n.errors, ye, Q.name) : Ae(n.errors, Q.name, ye[Q.name]) : Ke(n.errors, Q.name));
        }
        !ct(le) && await $(le, A, H);
      }
    }
    return H.valid;
  }, D = () => {
    for (const T of l.unMount) {
      const A = se(i, T);
      A && (A._f.refs ? A._f.refs.every((H) => !Fs(H)) : !Fs(A._f.ref)) && W(T);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, O = (T, A) => (T && A && Ae(a, T, A), !Mn(F(), r)), L = (T, A, H) => zu(T, l, {
    ...s.mount ? a : Pe(A) ? r : Zt(T) ? { [T]: A } : A
  }, H, A), j = (T) => Xr(se(s.mount ? a : r, T, e.shouldUnregister ? se(r, T, []) : [])), C = (T, A, H = {}) => {
    const ee = se(i, T);
    let ne = A;
    if (ee) {
      const Q = ee._f;
      Q && (!Q.disabled && Ae(a, T, Qu(A, Q)), ne = Ea(Q.ref) && dt(A) ? "" : A, Ju(Q.ref) ? [...Q.ref.options].forEach((le) => le.selected = ne.includes(le.value)) : Q.refs ? Kr(Q.ref) ? Q.refs.length > 1 ? Q.refs.forEach((le) => (!le.defaultChecked || !le.disabled) && (le.checked = Array.isArray(ne) ? !!ne.find((ae) => ae === le.value) : ne === le.value)) : Q.refs[0] && (Q.refs[0].checked = !!ne) : Q.refs.forEach((le) => le.checked = le.value === ne) : yl(Q.ref) ? Q.ref.value = "" : (Q.ref.value = ne, Q.ref.type || u.values.next({
        name: T,
        values: { ...a }
      })));
    }
    (H.shouldDirty || H.shouldTouch) && R(T, ne, H.shouldTouch, H.shouldDirty, !0), H.shouldValidate && b(T);
  }, P = (T, A, H) => {
    for (const ee in A) {
      const ne = A[ee], Q = `${T}.${ee}`, le = se(i, Q);
      (l.array.has(T) || !ka(ne) || le && !le._f) && !Ii(ne) ? P(Q, ne, H) : C(Q, ne, H);
    }
  }, G = (T, A, H = {}) => {
    const ee = se(i, T), ne = l.array.has(T), Q = Ze(A);
    Ae(a, T, Q), ne ? (u.array.next({
      name: T,
      values: { ...a }
    }), (f.isDirty || f.dirtyFields) && H.shouldDirty && u.state.next({
      name: T,
      dirtyFields: na(r, a),
      isDirty: O(T, Q)
    })) : ee && !ee._f && !dt(Q) ? P(T, Q, H) : C(T, Q, H), mo(T, l) && u.state.next({ ...n }), u.values.next({
      name: s.mount ? T : void 0,
      values: { ...a }
    });
  }, B = async (T) => {
    s.mount = !0;
    const A = T.target;
    let H = A.name, ee = !0;
    const ne = se(i, H), Q = () => A.type ? $s(ne._f) : Fu(T), le = (ae) => {
      ee = Number.isNaN(ae) || Mn(ae, se(a, H, ae));
    };
    if (ne) {
      let ae, ve;
      const ye = Q(), he = T.type === _a.BLUR || T.type === _a.FOCUS_OUT, Ee = !A1(ne._f) && !t.resolver && !se(n.errors, H) && !ne._f.deps || P1(he, se(n.touchedFields, H), n.isSubmitted, m, p), We = mo(H, l, he);
      Ae(a, H, ye), he ? (ne._f.onBlur && ne._f.onBlur(T), c && c(0)) : ne._f.onChange && ne._f.onChange(T);
      const ue = R(H, ye, he, !1), Ie = !ct(ue) || We;
      if (!he && u.values.next({
        name: H,
        type: T.type,
        values: { ...a }
      }), Ee)
        return f.isValid && (e.mode === "onBlur" ? he && x() : x()), Ie && u.state.next({ name: H, ...We ? {} : ue });
      if (!he && We && u.state.next({ ...n }), t.resolver) {
        const { errors: Ue } = await N([H]);
        if (le(ye), ee) {
          const _t = Dc(n.errors, i, H), ln = Dc(Ue, i, _t.name || H);
          ae = ln.error, H = ln.name, ve = ct(Ue);
        }
      } else
        w([H], !0), ae = (await ho(ne, a, g, t.shouldUseNativeValidation))[H], w([H]), le(ye), ee && (ae ? ve = !1 : f.isValid && (ve = await $(i, !0)));
      ee && (ne._f.deps && b(ne._f.deps), k(H, ve, ae, ue));
    }
  }, J = (T, A) => {
    if (se(n.errors, A) && T.focus)
      return T.focus(), 1;
  }, b = async (T, A = {}) => {
    let H, ee;
    const ne = vt(T);
    if (t.resolver) {
      const Q = await M(Pe(T) ? T : ne);
      H = ct(Q), ee = T ? !ne.some((le) => se(Q, le)) : H;
    } else T ? (ee = (await Promise.all(ne.map(async (Q) => {
      const le = se(i, Q);
      return await $(le && le._f ? { [Q]: le } : le);
    }))).every(Boolean), !(!ee && !n.isValid) && x()) : ee = H = await $(i);
    return u.state.next({
      ...!Zt(T) || f.isValid && H !== n.isValid ? {} : { name: T },
      ...t.resolver || !T ? { isValid: H } : {},
      errors: n.errors
    }), A.shouldFocus && !ee && Ti(i, J, T ? ne : l.mount), ee;
  }, F = (T) => {
    const A = {
      ...s.mount ? a : r
    };
    return Pe(T) ? A : Zt(T) ? se(A, T) : T.map((H) => se(A, H));
  }, K = (T, A) => ({
    invalid: !!se((A || n).errors, T),
    isDirty: !!se((A || n).dirtyFields, T),
    error: se((A || n).errors, T),
    isValidating: !!se(n.validatingFields, T),
    isTouched: !!se((A || n).touchedFields, T)
  }), V = (T) => {
    T && vt(T).forEach((A) => Ke(n.errors, A)), u.state.next({
      errors: T ? n.errors : {}
    });
  }, U = (T, A, H) => {
    const ee = (se(i, T, { _f: {} })._f || {}).ref, ne = se(n.errors, T) || {}, { ref: Q, message: le, type: ae, ...ve } = ne;
    Ae(n.errors, T, {
      ...ve,
      ...A,
      ref: ee
    }), u.state.next({
      name: T,
      errors: n.errors,
      isValid: !1
    }), H && H.shouldFocus && ee && ee.focus && ee.focus();
  }, q = (T, A) => vn(T) ? u.values.subscribe({
    next: (H) => T(L(void 0, A), H)
  }) : L(T, A, !0), W = (T, A = {}) => {
    for (const H of T ? vt(T) : l.mount)
      l.mount.delete(H), l.array.delete(H), A.keepValue || (Ke(i, H), Ke(a, H)), !A.keepError && Ke(n.errors, H), !A.keepDirty && Ke(n.dirtyFields, H), !A.keepTouched && Ke(n.touchedFields, H), !A.keepIsValidating && Ke(n.validatingFields, H), !t.shouldUnregister && !A.keepDefaultValue && Ke(r, H);
    u.values.next({
      values: { ...a }
    }), u.state.next({
      ...n,
      ...A.keepDirty ? { isDirty: O() } : {}
    }), !A.keepIsValid && x();
  }, X = ({ disabled: T, name: A, field: H, fields: ee, value: ne }) => {
    if (Lt(T) && s.mount || T) {
      const Q = T ? void 0 : Pe(ne) ? $s(H ? H._f : se(ee, A)._f) : ne;
      Ae(a, A, Q), R(A, Q, !1, !1, !0);
    }
  }, te = (T, A = {}) => {
    let H = se(i, T);
    const ee = Lt(A.disabled) || Lt(e.disabled);
    return Ae(i, T, {
      ...H || {},
      _f: {
        ...H && H._f ? H._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...A
      }
    }), l.mount.add(T), H ? X({
      field: H,
      disabled: Lt(A.disabled) ? A.disabled : e.disabled,
      name: T,
      value: A.value
    }) : E(T, !0, A.value), {
      ...ee ? { disabled: A.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!A.required,
        min: lr(A.min),
        max: lr(A.max),
        minLength: lr(A.minLength),
        maxLength: lr(A.maxLength),
        pattern: lr(A.pattern)
      } : {},
      name: T,
      onChange: B,
      onBlur: B,
      ref: (ne) => {
        if (ne) {
          te(T, A), H = se(i, T);
          const Q = Pe(ne.value) && ne.querySelectorAll && ne.querySelectorAll("input,select,textarea")[0] || ne, le = N1(Q), ae = H._f.refs || [];
          if (le ? ae.find((ve) => ve === Q) : Q === H._f.ref)
            return;
          Ae(i, T, {
            _f: {
              ...H._f,
              ...le ? {
                refs: [
                  ...ae.filter(Fs),
                  Q,
                  ...Array.isArray(se(r, T)) ? [{}] : []
                ],
                ref: { type: Q.type, name: T }
              } : { ref: Q }
            }
          }), E(T, !1, void 0, Q);
        } else
          H = se(i, T, {}), H._f && (H._f.mount = !1), (t.shouldUnregister || A.shouldUnregister) && !($u(l.array, T) && s.action) && l.unMount.add(T);
      }
    };
  }, ie = () => t.shouldFocusError && Ti(i, J, l.mount), Y = (T) => {
    Lt(T) && (u.state.next({ disabled: T }), Ti(i, (A, H) => {
      const ee = se(i, H);
      ee && (A.disabled = ee._f.disabled || T, Array.isArray(ee._f.refs) && ee._f.refs.forEach((ne) => {
        ne.disabled = ee._f.disabled || T;
      }));
    }, 0, !1));
  }, oe = (T, A) => async (H) => {
    let ee;
    H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
    let ne = Ze(a);
    if (u.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: Q, values: le } = await N();
      n.errors = Q, ne = le;
    } else
      await $(i);
    if (Ke(n.errors, "root"), ct(n.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await T(ne, H);
      } catch (Q) {
        ee = Q;
      }
    } else
      A && await A({ ...n.errors }, H), ie(), setTimeout(ie);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ct(n.errors) && !ee,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ee)
      throw ee;
  }, de = (T, A = {}) => {
    se(i, T) && (Pe(A.defaultValue) ? G(T, Ze(se(r, T))) : (G(T, A.defaultValue), Ae(r, T, Ze(A.defaultValue))), A.keepTouched || Ke(n.touchedFields, T), A.keepDirty || (Ke(n.dirtyFields, T), n.isDirty = A.defaultValue ? O(T, Ze(se(r, T))) : O()), A.keepError || (Ke(n.errors, T), f.isValid && x()), u.state.next({ ...n }));
  }, Ce = (T, A = {}) => {
    const H = T ? Ze(T) : r, ee = Ze(H), ne = ct(T), Q = ne ? r : ee;
    if (A.keepDefaultValues || (r = H), !A.keepValues) {
      if (A.keepDirtyValues)
        for (const le of l.mount)
          se(n.dirtyFields, le) ? Ae(Q, le, se(a, le)) : G(le, se(Q, le));
      else {
        if (hl && Pe(T))
          for (const le of l.mount) {
            const ae = se(i, le);
            if (ae && ae._f) {
              const ve = Array.isArray(ae._f.refs) ? ae._f.refs[0] : ae._f.ref;
              if (Ea(ve)) {
                const ye = ve.closest("form");
                if (ye) {
                  ye.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      a = e.shouldUnregister ? A.keepDefaultValues ? Ze(r) : {} : Ze(Q), u.array.next({
        values: { ...Q }
      }), u.values.next({
        values: { ...Q }
      });
    }
    l = {
      mount: A.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !f.isValid || !!A.keepIsValid || !!A.keepDirtyValues, s.watch = !!e.shouldUnregister, u.state.next({
      submitCount: A.keepSubmitCount ? n.submitCount : 0,
      isDirty: ne ? !1 : A.keepDirty ? n.isDirty : !!(A.keepDefaultValues && !Mn(T, r)),
      isSubmitted: A.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ne ? {} : A.keepDirtyValues ? A.keepDefaultValues && a ? na(r, a) : n.dirtyFields : A.keepDefaultValues && T ? na(r, T) : A.keepDirty ? n.dirtyFields : {},
      touchedFields: A.keepTouched ? n.touchedFields : {},
      errors: A.keepErrors ? n.errors : {},
      isSubmitSuccessful: A.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Oe = (T, A) => Ce(vn(T) ? T(a) : T, A);
  return {
    control: {
      register: te,
      unregister: W,
      getFieldState: K,
      handleSubmit: oe,
      setError: U,
      _executeSchema: N,
      _getWatch: L,
      _getDirty: O,
      _updateValid: x,
      _removeUnmounted: D,
      _updateFieldArray: _,
      _updateDisabledField: X,
      _getFieldArray: j,
      _reset: Ce,
      _resetDefaultValues: () => vn(t.defaultValues) && t.defaultValues().then((T) => {
        Oe(T, t.resetOptions), u.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        n = {
          ...n,
          ...T
        };
      },
      _disableForm: Y,
      _subjects: u,
      _proxyFormState: f,
      _setErrors: I,
      get _fields() {
        return i;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(T) {
        s = T;
      },
      get _defaultValues() {
        return r;
      },
      get _names() {
        return l;
      },
      set _names(T) {
        l = T;
      },
      get _formState() {
        return n;
      },
      set _formState(T) {
        n = T;
      },
      get _options() {
        return t;
      },
      set _options(T) {
        t = {
          ...t,
          ...T
        };
      }
    },
    trigger: b,
    register: te,
    handleSubmit: oe,
    watch: q,
    setValue: G,
    getValues: F,
    reset: Oe,
    resetField: de,
    clearErrors: V,
    unregister: W,
    setError: U,
    setFocus: (T, A = {}) => {
      const H = se(i, T), ee = H && H._f;
      if (ee) {
        const ne = ee.refs ? ee.refs[0] : ee.ref;
        ne.focus && (ne.focus(), A.shouldSelect && ne.select());
      }
    },
    getFieldState: K
  };
}
function wl(e = {}) {
  const t = re.useRef(), n = re.useRef(), [i, r] = re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: vn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: vn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...F1(e),
    formState: i
  });
  const a = t.current.control;
  return a._options = e, es({
    subject: a._subjects.state,
    next: (s) => {
      Hu(s, a._proxyFormState, a._updateFormState, !0) && r({ ...a._formState });
    }
  }), re.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), re.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== i.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, i.isDirty]), re.useEffect(() => {
    e.values && !Mn(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, r((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), re.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), re.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), re.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Vu(i, a), t.current;
}
var $1 = typeof global == "object" && global && global.Object === Object && global, B1 = typeof self == "object" && self && self.Object === Object && self, Ol = $1 || B1 || Function("return this")(), Wi = Ol.Symbol, ep = Object.prototype, j1 = ep.hasOwnProperty, V1 = ep.toString, cr = Wi ? Wi.toStringTag : void 0;
function H1(e) {
  var t = j1.call(e, cr), n = e[cr];
  try {
    e[cr] = void 0;
    var i = !0;
  } catch {
  }
  var r = V1.call(e);
  return i && (t ? e[cr] = n : delete e[cr]), r;
}
var U1 = Object.prototype, z1 = U1.toString;
function W1(e) {
  return z1.call(e);
}
var G1 = "[object Null]", K1 = "[object Undefined]", Fc = Wi ? Wi.toStringTag : void 0;
function tp(e) {
  return e == null ? e === void 0 ? K1 : G1 : Fc && Fc in Object(e) ? H1(e) : W1(e);
}
function X1(e) {
  return e != null && typeof e == "object";
}
var q1 = "[object Symbol]";
function Cl(e) {
  return typeof e == "symbol" || X1(e) && tp(e) == q1;
}
function J1(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, r = Array(i); ++n < i; )
    r[n] = t(e[n], n, e);
  return r;
}
var _l = Array.isArray, Y1 = 1 / 0, $c = Wi ? Wi.prototype : void 0, Bc = $c ? $c.toString : void 0;
function np(e) {
  if (typeof e == "string")
    return e;
  if (_l(e))
    return J1(e, np) + "";
  if (Cl(e))
    return Bc ? Bc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Y1 ? "-0" : t;
}
function ip(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Z1 = "[object AsyncFunction]", Q1 = "[object Function]", ey = "[object GeneratorFunction]", ty = "[object Proxy]";
function ny(e) {
  if (!ip(e))
    return !1;
  var t = tp(e);
  return t == Q1 || t == ey || t == Z1 || t == ty;
}
var Bs = Ol["__core-js_shared__"], jc = function() {
  var e = /[^.]+$/.exec(Bs && Bs.keys && Bs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function iy(e) {
  return !!jc && jc in e;
}
var ry = Function.prototype, ay = ry.toString;
function sy(e) {
  if (e != null) {
    try {
      return ay.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oy = /[\\^$.*+?()[\]{}|]/g, ly = /^\[object .+?Constructor\]$/, cy = Function.prototype, dy = Object.prototype, fy = cy.toString, uy = dy.hasOwnProperty, py = RegExp(
  "^" + fy.call(uy).replace(oy, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function my(e) {
  if (!ip(e) || iy(e))
    return !1;
  var t = ny(e) ? py : ly;
  return t.test(sy(e));
}
function hy(e, t) {
  return e?.[t];
}
function rp(e, t) {
  var n = hy(e, t);
  return my(n) ? n : void 0;
}
function gy(e, t) {
  return e === t || e !== e && t !== t;
}
var by = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vy = /^\w*$/;
function yy(e, t) {
  if (_l(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Cl(e) ? !0 : vy.test(e) || !by.test(e) || t != null && e in Object(t);
}
var Rr = rp(Object, "create");
function xy() {
  this.__data__ = Rr ? Rr(null) : {}, this.size = 0;
}
function wy(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Oy = "__lodash_hash_undefined__", Cy = Object.prototype, _y = Cy.hasOwnProperty;
function Ey(e) {
  var t = this.__data__;
  if (Rr) {
    var n = t[e];
    return n === Oy ? void 0 : n;
  }
  return _y.call(t, e) ? t[e] : void 0;
}
var Sy = Object.prototype, ky = Sy.hasOwnProperty;
function Ly(e) {
  var t = this.__data__;
  return Rr ? t[e] !== void 0 : ky.call(t, e);
}
var Iy = "__lodash_hash_undefined__";
function Ny(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rr && t === void 0 ? Iy : t, this;
}
function hi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
hi.prototype.clear = xy;
hi.prototype.delete = wy;
hi.prototype.get = Ey;
hi.prototype.has = Ly;
hi.prototype.set = Ny;
function Ty() {
  this.__data__ = [], this.size = 0;
}
function ns(e, t) {
  for (var n = e.length; n--; )
    if (gy(e[n][0], t))
      return n;
  return -1;
}
var Ry = Array.prototype, Ay = Ry.splice;
function Py(e) {
  var t = this.__data__, n = ns(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Ay.call(t, n, 1), --this.size, !0;
}
function My(e) {
  var t = this.__data__, n = ns(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Dy(e) {
  return ns(this.__data__, e) > -1;
}
function Fy(e, t) {
  var n = this.__data__, i = ns(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function Ji(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ji.prototype.clear = Ty;
Ji.prototype.delete = Py;
Ji.prototype.get = My;
Ji.prototype.has = Dy;
Ji.prototype.set = Fy;
var $y = rp(Ol, "Map");
function By() {
  this.size = 0, this.__data__ = {
    hash: new hi(),
    map: new ($y || Ji)(),
    string: new hi()
  };
}
function jy(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function is(e, t) {
  var n = e.__data__;
  return jy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Vy(e) {
  var t = is(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Hy(e) {
  return is(this, e).get(e);
}
function Uy(e) {
  return is(this, e).has(e);
}
function zy(e, t) {
  var n = is(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function vi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
vi.prototype.clear = By;
vi.prototype.delete = Vy;
vi.prototype.get = Hy;
vi.prototype.has = Uy;
vi.prototype.set = zy;
var Wy = "Expected a function";
function El(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wy);
  var n = function() {
    var i = arguments, r = t ? t.apply(this, i) : i[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, i);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (El.Cache || vi)(), n;
}
El.Cache = vi;
var Gy = 500;
function Ky(e) {
  var t = El(e, function(i) {
    return n.size === Gy && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Xy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qy = /\\(\\)?/g, Jy = Ky(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xy, function(n, i, r, a) {
    t.push(r ? a.replace(qy, "$1") : i || n);
  }), t;
});
function Yy(e) {
  return e == null ? "" : np(e);
}
function Zy(e, t) {
  return _l(e) ? e : yy(e, t) ? [e] : Jy(Yy(e));
}
var Qy = 1 / 0;
function e2(e) {
  if (typeof e == "string" || Cl(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Qy ? "-0" : t;
}
function t2(e, t) {
  t = Zy(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[e2(t[n++])];
  return n && n == i ? e : void 0;
}
function Ar(e, t, n) {
  var i = e == null ? void 0 : t2(e, t);
  return i === void 0 ? n : i;
}
const n2 = (e) => {
  var { items: t, isDisabled: n, rowData: i, extraData: r, actionsToggle: a, popperProps: s = {
    position: "end",
    direction: "down"
  }, innerRef: l, firstActionItemRef: c, isOnOpenChangeDisabled: d = !1 } = e, f = z(e, ["items", "isDisabled", "rowData", "extraData", "actionsToggle", "popperProps", "innerRef", "firstActionItemRef", "isOnOpenChangeDisabled"]);
  const [u, p] = o.useState(!1), m = () => {
    p(!u);
  }, g = (v, x) => {
    x && (v.preventDefault(), x(v, r && r.rowIndex, i, r));
  };
  return o.createElement(
    o.Fragment,
    null,
    t.filter((v) => v.isOutsideDropdown).map((v, x) => {
      var { title: w, itemKey: _, onClick: S, isOutsideDropdown: I } = v, E = z(v, ["title", "itemKey", "onClick", "isOutsideDropdown"]);
      return typeof w == "string" ? o.createElement(ce, Object.assign({ onClick: (R) => g(R, S) }, E, { isDisabled: n, key: _ || `outside_dropdown_${x}`, "data-key": _ || `outside_dropdown_${x}` }), w) : o.cloneElement(w, Object.assign({ onClick: S, isDisabled: n }, E));
    }),
    o.createElement(
      pi,
      Object.assign({ isOpen: u, onOpenChange: d ? void 0 : (v) => p(v), toggle: (v) => a ? a({ onToggle: m, isOpen: u, isDisabled: n, toggleRef: v }) : o.createElement(
        yt,
        { "aria-label": "Kebab toggle", ref: v, onClick: m, isExpanded: u, isDisabled: n, variant: "plain" },
        o.createElement(Tr, null)
      ) }, i && i.actionProps, { ref: l }, f, { popperProps: s }),
      o.createElement(Lr, null, t.filter((v) => !v.isOutsideDropdown).map((v, x) => {
        var { title: w, itemKey: _, onClick: S, tooltipProps: I, isSeparator: E, shouldCloseOnClick: R = !0 } = v, k = z(v, ["title", "itemKey", "onClick", "tooltipProps", "isSeparator", "shouldCloseOnClick"]);
        if (E)
          return o.createElement(el, { key: _ || x, "data-key": _ || x });
        const N = o.createElement(_n, Object.assign({ onClick: (M) => {
          g(M, S), R && m();
        } }, k, { key: _ || x, "data-key": _ || x, ref: x === 0 ? c : void 0 }), w);
        return I?.content ? o.createElement(ft, Object.assign({ key: _ || x }, I), N) : N;
      }))
    )
  );
}, ap = o.forwardRef((e, t) => o.createElement(n2, Object.assign({}, e, { innerRef: t })));
ap.displayName = "ActionsColumn";
const fe = {
  button: "pf-v5-c-button",
  check: "pf-v5-c-check",
  checkInput: "pf-v5-c-check__input",
  dirRtl: "pf-v5-m-dir-rtl",
  modifiers: {
    hidden: "pf-m-hidden",
    hiddenOnSm: "pf-m-hidden-on-sm",
    visibleOnSm: "pf-m-visible-on-sm",
    hiddenOnMd: "pf-m-hidden-on-md",
    visibleOnMd: "pf-m-visible-on-md",
    hiddenOnLg: "pf-m-hidden-on-lg",
    visibleOnLg: "pf-m-visible-on-lg",
    hiddenOnXl: "pf-m-hidden-on-xl",
    visibleOnXl: "pf-m-visible-on-xl",
    hiddenOn_2xl: "pf-m-hidden-on-2xl",
    visibleOn_2xl: "pf-m-visible-on-2xl",
    fixed: "pf-m-fixed",
    stickyHeader: "pf-m-sticky-header",
    nestedColumnHeader: "pf-m-nested-column-header",
    borderRow: "pf-m-border-row",
    striped: "pf-m-striped",
    expandable: "pf-m-expandable",
    stripedEven: "pf-m-striped-even",
    ghostRow: "pf-m-ghost-row",
    center: "pf-m-center",
    help: "pf-m-help",
    favorite: "pf-m-favorite",
    borderRight: "pf-m-border-right",
    borderLeft: "pf-m-border-left",
    expanded: "pf-m-expanded",
    truncate: "pf-m-truncate",
    wrap: "pf-m-wrap",
    nowrap: "pf-m-nowrap",
    fitContent: "pf-m-fit-content",
    breakWord: "pf-m-break-word",
    noBorderRows: "pf-m-no-border-rows",
    clickable: "pf-m-clickable",
    selected: "pf-m-selected",
    firstCellOffsetReset: "pf-m-first-cell-offset-reset",
    dragOver: "pf-m-drag-over",
    standalone: "pf-m-standalone",
    favorited: "pf-m-favorited",
    noPadding: "pf-m-no-padding",
    compact: "pf-m-compact",
    width_10: "pf-m-width-10",
    width_15: "pf-m-width-15",
    width_20: "pf-m-width-20",
    width_25: "pf-m-width-25",
    width_30: "pf-m-width-30",
    width_35: "pf-m-width-35",
    width_40: "pf-m-width-40",
    width_45: "pf-m-width-45",
    width_50: "pf-m-width-50",
    width_60: "pf-m-width-60",
    width_70: "pf-m-width-70",
    width_80: "pf-m-width-80",
    width_90: "pf-m-width-90",
    width_100: "pf-m-width-100"
  },
  table: "pf-v5-c-table",
  tableAction: "pf-v5-c-table__action",
  tableButton: "pf-v5-c-table__button",
  tableButtonContent: "pf-v5-c-table__button-content",
  tableCaption: "pf-v5-c-table__caption",
  tableCheck: "pf-v5-c-table__check",
  tableColumnHelp: "pf-v5-c-table__column-help",
  tableColumnHelpAction: "pf-v5-c-table__column-help-action",
  tableCompoundExpansionToggle: "pf-v5-c-table__compound-expansion-toggle",
  tableControlRow: "pf-v5-c-table__control-row",
  tableDraggable: "pf-v5-c-table__draggable",
  tableExpandableRow: "pf-v5-c-table__expandable-row",
  tableExpandableRowContent: "pf-v5-c-table__expandable-row-content",
  tableFavorite: "pf-v5-c-table__favorite",
  tableIcon: "pf-v5-c-table__icon",
  tableIconInline: "pf-v5-c-table__icon-inline",
  tableInlineEditAction: "pf-v5-c-table__inline-edit-action",
  tableSort: "pf-v5-c-table__sort",
  tableSortIndicator: "pf-v5-c-table__sort-indicator",
  tableSubhead: "pf-v5-c-table__subhead",
  tableTbody: "pf-v5-c-table__tbody",
  tableTd: "pf-v5-c-table__td",
  tableText: "pf-v5-c-table__text",
  tableTh: "pf-v5-c-table__th",
  tableThead: "pf-v5-c-table__thead",
  tableToggle: "pf-v5-c-table__toggle",
  tableToggleIcon: "pf-v5-c-table__toggle-icon",
  tableTr: "pf-v5-c-table__tr",
  themeDark: "pf-v5-theme-dark"
}, sp = (e) => {
  var { className: t = "", children: n = null, isOpen: i, onToggle: r } = e, a = z(e, ["className", "children", "isOpen", "onToggle"]);
  return o.createElement(
    o.Fragment,
    null,
    i !== void 0 && o.createElement(
      ce,
      Object.assign({ className: y(t, i && fe.modifiers.expanded) }, a, { variant: "plain", "aria-label": a["aria-label"] || "Details", onClick: r, "aria-expanded": i }),
      o.createElement(
        "div",
        { className: y(fe.tableToggleIcon) },
        o.createElement(nl, null)
      )
    ),
    n
  );
};
sp.displayName = "CollapseColumn";
const op = (e) => {
  var { className: t, onClick: n, "aria-label": i, id: r } = e, a = z(e, ["className", "onClick", "aria-label", "id"]);
  return o.createElement(
    ce,
    Object.assign({ id: r, variant: "plain", className: t, type: "button", "aria-label": i || "Draggable row draggable button", onClick: n }, a),
    o.createElement(fb, { "aria-hidden": !0 })
  );
};
op.displayName = "DraggableCell";
const i2 = {
  button: "pf-v5-c-button",
  inlineEdit: "pf-v5-c-inline-edit",
  inlineEditAction: "pf-v5-c-inline-edit__action",
  inlineEditEditableText: "pf-v5-c-inline-edit__editable-text",
  inlineEditGroup: "pf-v5-c-inline-edit__group",
  inlineEditInput: "pf-v5-c-inline-edit__input",
  inlineEditLabel: "pf-v5-c-inline-edit__label",
  inlineEditValue: "pf-v5-c-inline-edit__value",
  modifiers: {
    iconGroup: "pf-m-icon-group",
    footer: "pf-m-footer",
    column: "pf-m-column",
    valid: "pf-m-valid",
    plain: "pf-m-plain",
    actionGroup: "pf-m-action-group",
    enableEditable: "pf-m-enable-editable",
    inlineEditable: "pf-m-inline-editable",
    enable: "pf-m-enable",
    bold: "pf-m-bold"
  }
}, lp = (e) => {
  var { children: t = null } = e, n = z(e, ["children"]);
  return o.createElement("div", Object.assign({}, n, { className: y(fe.tableExpandableRowContent) }), t);
};
lp.displayName = "ExpandableRowContent";
var Vc;
(function(e) {
  e.div = "div", e.nav = "nav";
})(Vc || (Vc = {}));
var Hc;
(function(e) {
  e.wrap = "wrap", e.nowrap = "nowrap", e.truncate = "truncate", e.breakWord = "breakWord", e.fitContent = "fitContent";
})(Hc || (Hc = {}));
const rs = (e) => {
  var { children: t = null, className: n = "", variant: i = "span", wrapModifier: r = null, tooltip: a = "", tooltipProps: s = {}, onMouseEnter: l = () => {
  }, focused: c = !1, tooltipHasDefaultBehavior: d = !1 } = e, f = z(e, ["children", "className", "variant", "wrapModifier", "tooltip", "tooltipProps", "onMouseEnter", "focused", "tooltipHasDefaultBehavior"]);
  const u = i, p = o.createRef(), [m, g] = o.useState(a), v = (_) => {
    _.target.offsetWidth < _.target.scrollWidth ? g(a || _.target.innerText) : g(""), l(_);
  }, x = (_) => {
    _.offsetWidth < _.scrollWidth ? g(a || _.innerText) : g("");
  }, w = o.createElement(u, Object.assign({ ref: p, onMouseEnter: d ? void 0 : v, className: y(n, r && fe.modifiers[r], fe.tableText) }, f), t);
  return o.useEffect(() => {
    d || (c ? x(p.current) : g(""));
  }, [c, d]), m !== "" ? o.createElement(ft, Object.assign({ triggerRef: p, content: m }, !d && { isVisible: !0 }, s), w) : w;
};
rs.displayName = "TableText";
const go = ({ children: e, info: t, className: n, variant: i = "tooltip", popoverProps: r, tooltipProps: a, ariaLabel: s }) => o.createElement(
  "div",
  { className: y(fe.tableColumnHelp, n) },
  typeof e == "string" ? o.createElement(rs, null, e) : e,
  o.createElement("span", { className: y(fe.tableColumnHelpAction) }, i === "tooltip" ? o.createElement(
    ft,
    Object.assign({ content: t }, a),
    o.createElement(
      ce,
      { variant: "plain", "aria-label": s || typeof t == "string" && t || "More info" },
      o.createElement(Ca, null)
    )
  ) : o.createElement(
    Jo,
    Object.assign({ bodyContent: t }, r),
    o.createElement(
      ce,
      { variant: "plain", "aria-label": s || typeof t == "string" && t || "More info" },
      o.createElement(Ca, null)
    )
  ))
);
go.displayName = "HeaderCellInfoWrapper";
const r2 = {
  button: "pf-v5-c-button",
  modifiers: {
    grid: "pf-m-grid",
    compact: "pf-m-compact",
    expanded: "pf-m-expanded",
    selected: "pf-m-selected",
    noPadding: "pf-m-no-padding",
    hoverable: "pf-m-hoverable",
    nowrap: "pf-m-nowrap",
    fitContent: "pf-m-fit-content",
    truncate: "pf-m-truncate",
    gridMd: "pf-m-grid-md",
    gridLg: "pf-m-grid-lg",
    gridXl: "pf-m-grid-xl",
    grid_2xl: "pf-m-grid-2xl"
  },
  table: "pf-v5-c-table",
  tableAction: "pf-v5-c-table__action",
  tableButton: "pf-v5-c-table__button",
  tableCheck: "pf-v5-c-table__check",
  tableCompoundExpansionToggle: "pf-v5-c-table__compound-expansion-toggle",
  tableExpandableRow: "pf-v5-c-table__expandable-row",
  tableExpandableRowContent: "pf-v5-c-table__expandable-row-content",
  tableFavorite: "pf-v5-c-table__favorite",
  tableIcon: "pf-v5-c-table__icon",
  tableInlineEditAction: "pf-v5-c-table__inline-edit-action",
  tableTbody: "pf-v5-c-table__tbody",
  tableTd: "pf-v5-c-table__td",
  tableText: "pf-v5-c-table__text",
  tableTh: "pf-v5-c-table__th",
  tableThead: "pf-v5-c-table__thead",
  tableToggle: "pf-v5-c-table__toggle",
  tableToggleIcon: "pf-v5-c-table__toggle-icon",
  tableTr: "pf-v5-c-table__tr"
}, bt = {
  dirRtl: "pf-v5-m-dir-rtl",
  dropdown: "pf-v5-c-dropdown",
  modifiers: {
    treeView: "pf-m-tree-view",
    noInset: "pf-m-no-inset",
    treeViewGrid: "pf-m-tree-view-grid",
    treeViewDetailsExpanded: "pf-m-tree-view-details-expanded",
    treeViewGridMd: "pf-m-tree-view-grid-md",
    treeViewGridLg: "pf-m-tree-view-grid-lg",
    treeViewGridXl: "pf-m-tree-view-grid-xl",
    treeViewGrid_2xl: "pf-m-tree-view-grid-2xl"
  },
  table: "pf-v5-c-table",
  tableAction: "pf-v5-c-table__action",
  tableCheck: "pf-v5-c-table__check",
  tableTbody: "pf-v5-c-table__tbody",
  tableTd: "pf-v5-c-table__td",
  tableTh: "pf-v5-c-table__th",
  tableThead: "pf-v5-c-table__thead",
  tableToggle: "pf-v5-c-table__toggle",
  tableToggleIcon: "pf-v5-c-table__toggle-icon",
  tableTr: "pf-v5-c-table__tr",
  tableTreeViewDetailsToggle: "pf-v5-c-table__tree-view-details-toggle",
  tableTreeViewIcon: "pf-v5-c-table__tree-view-icon",
  tableTreeViewMain: "pf-v5-c-table__tree-view-main",
  tableTreeViewText: "pf-v5-c-table__tree-view-text",
  tableTreeViewTitleCell: "pf-v5-c-table__tree-view-title-cell",
  tableTreeViewTitleHeaderCell: "pf-v5-c-table__tree-view-title-header-cell"
};
var bo;
(function(e) {
  e.radio = "radio", e.checkbox = "checkbox";
})(bo || (bo = {}));
const cp = (e) => {
  var {
    children: t = null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className: n,
    onSelect: i = null,
    selectVariant: r,
    tooltip: a,
    tooltipProps: s
  } = e, l = z(e, ["children", "className", "onSelect", "selectVariant", "tooltip", "tooltipProps"]);
  const c = o.createRef(), d = o.createElement(
    o.Fragment,
    null,
    o.createElement(
      "label",
      null,
      o.createElement("input", Object.assign({}, l, { ref: c, type: r, onChange: i }))
    ),
    t
  );
  return a ? o.createElement(ft, Object.assign({ triggerRef: c, content: a }, s), d) : d;
};
cp.displayName = "SelectColumn";
const dp = (e, { rowIndex: t, columnIndex: n, rowData: i, column: r, property: a, tooltip: s }) => {
  const { extraParams: { onSelect: l, selectVariant: c, allRowsSelected: d, isHeaderSelectDisabled: f } } = r, u = {
    rowIndex: t,
    columnIndex: n,
    column: r,
    property: a
  };
  if (i && i.hasOwnProperty("parent") && !i.showSelect && !i.fullWidth)
    return {
      component: "td",
      isVisible: !0
    };
  const p = t !== void 0 ? t : -1;
  function m(x) {
    const w = t === void 0 ? x.currentTarget.checked : i && !i.selected;
    l && l(x, w, p, i, u);
  }
  const g = Object.assign(Object.assign(Object.assign({}, p !== -1 ? {
    checked: i && !!i.selected,
    "aria-label": `Select row ${t}`
  } : {
    checked: d,
    "aria-label": "Select all rows"
  }), i && (i.disableCheckbox || i.disableSelection) && {
    disabled: !0,
    className: un.checkInput
  }), !i && f && { disabled: !0 });
  let v = "check-all";
  return p !== -1 && c === bo.checkbox ? v = `checkrow${t}` : p !== -1 && (v = "radioGroup"), {
    className: y(fe.tableCheck),
    component: p !== -1 ? "td" : "th",
    isVisible: !i || !i.fullWidth,
    children: o.createElement(cp, Object.assign({}, g, { selectVariant: c, onSelect: m, name: v, tooltip: s }), e)
  };
};
var si;
(function(e) {
  e.asc = "asc", e.desc = "desc";
})(si || (si = {}));
const fp = (e) => {
  var { children: t = null, className: n = "", isSortedBy: i = !1, onSort: r = null, sortDirection: a = "", type: s = "button", tooltip: l, tooltipProps: c, tooltipHasDefaultBehavior: d } = e, f = z(e, ["children", "className", "isSortedBy", "onSort", "sortDirection", "type", "tooltip", "tooltipProps", "tooltipHasDefaultBehavior"]);
  let u;
  const [p, m] = o.useState(!1);
  return i ? u = a === si.asc ? Zv : Jv : u = vv, o.createElement(
    "button",
    Object.assign({}, f, { type: s, className: y(n, fe.tableButton), onClick: (g) => r && r(g), onFocus: () => m(!0), onBlur: () => m(!1) }),
    o.createElement(
      "div",
      { className: y(n, fe.tableButtonContent) },
      o.createElement(rs, { tooltip: l, tooltipProps: c, tooltipHasDefaultBehavior: d, focused: p }, t),
      o.createElement(
        "span",
        { className: y(fe.tableSortIndicator) },
        o.createElement(u, null)
      )
    )
  );
};
fp.displayName = "SortColumn";
const a2 = (e) => () => up(o.createElement(Wo, { "aria-hidden": !0 }), {
  columnIndex: e.columnIndex,
  className: fe.modifiers.favorite,
  ariaLabel: "Sort favorites",
  column: {
    extraParams: {
      sortBy: e.sortBy,
      onSort: e?.onSort
    }
  },
  tooltip: e.tooltip,
  tooltipProps: e.tooltipProps,
  tooltipHasDefaultBehavior: !0
}), up = (e, { columnIndex: t, column: n, property: i, className: r, ariaLabel: a, tooltip: s, tooltipProps: l, tooltipHasDefaultBehavior: c }) => {
  const { extraParams: { sortBy: d, onSort: f } } = n, u = {
    columnIndex: t,
    column: n,
    property: i
  }, p = d && t === d.index;
  function m(g) {
    let v;
    p ? v = d.direction === si.asc ? si.desc : si.asc : v = d.defaultDirection ? d.defaultDirection : si.asc, f && f(g, t, v, u);
  }
  return {
    className: y(fe.tableSort, p && fe.modifiers.selected, r),
    "aria-sort": p ? `${d.direction}ending` : "none",
    children: o.createElement(fp, { isSortedBy: p, sortDirection: p ? d.direction : "", onSort: m, "aria-label": a, tooltip: s, tooltipProps: l, tooltipHasDefaultBehavior: c }, e)
  };
}, Uc = (e, t, n, i) => t, s2 = (e, t, n) => (i, { rowData: r, column: a, rowIndex: s, columnIndex: l, column: { extraParams: { actionsToggle: c, actionsPopperProps: d } }, property: f }) => {
  const u = {
    rowIndex: s,
    columnIndex: l,
    column: a,
    property: f
  }, p = Uc(t, e), m = Uc(n, r && r.disableActions), g = p && p.length > 0 ? {
    children: o.createElement(ap, { items: p, isDisabled: m, rowData: r, extraData: u, actionsToggle: c, popperProps: d }, i)
  } : {};
  return Object.assign({ className: y(fe.tableAction), style: { paddingRight: 0 }, isVisible: !0 }, g);
}, o2 = (e) => e.toUpperCase().replace("-", "").replace("_", ""), zc = (e) => e.replace(/([-_][a-z])/gi, o2);
function l2(e) {
  return e[0].toUpperCase() + e.substring(1);
}
const pp = (e) => () => ({
  className: y(fe.modifiers[typeof e == "number" ? `width_${e}` : `width${l2(e)}`])
}), mp = (e, { rowIndex: t, columnIndex: n, rowData: i, column: r, property: a }) => {
  const { extraParams: { onCollapse: s, rowLabeledBy: l = "simple-node", expandId: c = "expand-toggle", allRowsExpanded: d, collapseAllAriaLabel: f } } = r, u = {
    rowIndex: t,
    columnIndex: n,
    column: r,
    property: a
  }, p = t !== void 0 ? t : -1, m = Object.assign({}, p !== -1 ? {
    isOpen: i?.isOpen,
    "aria-labelledby": `${l}${p} ${c}${p}`
  } : {
    isOpen: d,
    "aria-label": f || "Expand all rows"
  });
  function g(v) {
    const x = i ? !i.isOpen : !d;
    s && s(v, t, x, i, u);
  }
  return {
    className: (i?.isOpen !== void 0 || p === -1) && y(fe.tableToggle),
    isVisible: !i?.fullWidth,
    children: o.createElement(sp, Object.assign({ "aria-labelledby": `${l}${p} ${c}${p}`, onToggle: g, id: c + p }, m), e)
  };
}, c2 = (e, { rowIndex: t, columnIndex: n, rowData: i, column: r, property: a }) => {
  if (!e)
    return null;
  const { title: s, props: l } = e, { extraParams: { onExpand: c, expandId: d = "expand-toggle" } } = r, f = {
    rowIndex: t,
    columnIndex: n,
    column: r,
    property: a
  };
  function u(p) {
    c && c(p, t, n, l.isOpen, i, f);
  }
  return {
    className: y(fe.tableCompoundExpansionToggle, l.isOpen && fe.modifiers.expanded),
    children: l.isOpen !== void 0 && o.createElement(
      "button",
      { type: "button", className: y(fe.tableButton), onClick: u, "aria-expanded": l.isOpen, "aria-controls": l.ariaControls, id: `${d}-${t}-${n}` },
      o.createElement(rs, null, s)
    )
  };
}, d2 = [
  "hidden",
  "hiddenOnSm",
  "hiddenOnMd",
  "hiddenOnLg",
  "hiddenOnXl",
  "hiddenOn_2xl",
  "visibleOnSm",
  "visibleOnMd",
  "visibleOnLg",
  "visibleOnXl",
  "visibleOn_2xl"
], hp = d2.filter((e) => fe.modifiers[e]).reduce((e, t) => {
  const n = t.replace("_2xl", "2Xl");
  return e[n] = fe.modifiers[t], e;
}, {}), gp = (...e) => () => ({
  className: y(...e)
}), f2 = ({ tooltip: e, tooltipProps: t, popover: n, popoverProps: i, className: r, ariaLabel: a }) => (l) => ({
  className: fe.modifiers.help,
  children: e ? o.createElement(go, { variant: "tooltip", info: e, tooltipProps: t, ariaLabel: a, className: r }, l) : o.createElement(go, { variant: "popover", info: n, popoverProps: i, ariaLabel: a, className: r }, l)
}), bp = (e) => {
  var { className: t = "", onFavorite: n, isFavorited: i, rowIndex: r } = e, a = z(e, ["className", "onFavorite", "isFavorited", "rowIndex"]);
  const s = r === void 0 ? {} : {
    id: `favorites-button-${r}`,
    "aria-labelledby": `favorites-button-${r}`
  };
  return o.createElement(
    ce,
    Object.assign({ variant: "plain", className: t, type: "button", "aria-label": i ? "Starred" : "Not starred", onClick: n }, s, a),
    o.createElement(Wo, { "aria-hidden": !0 })
  );
};
bp.displayName = "FavoritesCell";
const u2 = (e, { rowIndex: t, columnIndex: n, rowData: i, column: r, property: a }) => {
  const { extraParams: { onFavorite: s } } = r, l = {
    rowIndex: t,
    columnIndex: n,
    column: r,
    property: a
  };
  if (i && i.hasOwnProperty("parent") && !i.fullWidth)
    return {
      component: "td",
      isVisible: !0
    };
  function c(f) {
    s && s(f, i && !i.favorited, t, i, l);
  }
  const d = i.favoritesProps || {};
  return {
    className: y(fe.tableFavorite, i && i.favorited && fe.modifiers.favorited),
    isVisible: !i || !i.fullWidth,
    children: o.createElement(bp, Object.assign({ rowIndex: t, onFavorite: c, isFavorited: i && i.favorited }, d))
  };
}, p2 = (e, t, n) => (i, { rowIndex: r, rowData: a }) => {
  const { isExpanded: s, isDetailsExpanded: l, "aria-level": c, "aria-setsize": d, toggleAriaLabel: f, checkAriaLabel: u, showDetailsAriaLabel: p, isChecked: m, checkboxId: g, icon: v } = a.props, x = i.title || i, w = o.createElement(
    "div",
    { className: y(bt.tableTreeViewText), key: "tree-view-text" },
    v && o.createElement("span", { className: y(bt.tableTreeViewIcon), key: "tree-view-text-icon" }, v),
    o.createElement("span", { className: fe.tableText, key: "table-text" }, x)
  ), _ = (S, I) => {
    t(I, S, r, x, a);
  };
  return {
    component: "th",
    className: bt.tableTreeViewTitleCell,
    children: c !== void 0 ? o.createElement(
      "div",
      { className: y(bt.tableTreeViewMain) },
      d > 0 && o.createElement(
        "span",
        { className: y(bt.tableToggle), key: "table-toggle" },
        o.createElement(
          ce,
          { variant: "plain", onClick: (S) => e && e(S, r, x, a), className: y(s && fe.modifiers.expanded), "aria-expanded": s, "aria-label": f || `${s ? "Collapse" : "Expand"} row ${r}` },
          o.createElement(
            "div",
            { className: y(bt.tableToggleIcon) },
            o.createElement(nl, { "aria-hidden": "true" })
          )
        )
      ),
      !!t && o.createElement(
        "span",
        { className: y(bt.tableCheck), key: "table-check" },
        o.createElement(
          "label",
          { htmlFor: g || `checkbox_${r}` },
          o.createElement(Ht, { id: g || `checkbox_${r}`, "aria-label": u || `Row ${r} checkbox`, isChecked: m, onChange: (S, I) => _(I, S) })
        )
      ),
      w,
      !!n && o.createElement(
        "span",
        { className: y(bt.tableTreeViewDetailsToggle), key: "view-details-toggle" },
        o.createElement(
          ce,
          { variant: "plain", "aria-expanded": l, "aria-label": p || "Show row details", onClick: (S) => n && n(S, r, x, a) },
          o.createElement(
            "span",
            { className: `${fe.table}__details-toggle-icon` },
            o.createElement(Iv, { "aria-hidden": !0 })
          )
        )
      )
    ) : w
  };
};
var vo;
(function(e) {
  e.none = "", e.grid = "grid", e.gridMd = "grid-md", e.gridLg = "grid-lg", e.gridXl = "grid-xl", e.grid2xl = "grid-2xl";
})(vo || (vo = {}));
var Wc;
(function(e) {
  e.compact = "compact";
})(Wc || (Wc = {}));
const vp = o.createContext({
  registerSelectableRow: () => {
  }
}), m2 = (e) => {
  var t, n, {
    children: i,
    className: r,
    variant: a,
    borders: s = !0,
    isStickyHeader: l = !1,
    gridBreakPoint: c = vo.gridMd,
    "aria-label": d,
    role: f = "grid",
    innerRef: u,
    ouiaId: p,
    ouiaSafe: m = !0,
    isTreeTable: g = !1,
    isNested: v = !1,
    isStriped: x = !1,
    isExpandable: w = !1,
    hasNoInset: _ = !1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nestedHeaderColumnSpans: S,
    selectableRowCaptionText: I
  } = e, E = z(e, ["children", "className", "variant", "borders", "isStickyHeader", "gridBreakPoint", "aria-label", "role", "innerRef", "ouiaId", "ouiaSafe", "isTreeTable", "isNested", "isStriped", "isExpandable", "hasNoInset", "nestedHeaderColumnSpans", "selectableRowCaptionText"]);
  const R = o.useRef(null), k = u || R, [N, M] = o.useState(!1), [$, D] = o.useState();
  o.useEffect(() => {
    if (document.addEventListener("keydown", P), k && k.current && k.current.classList.contains("pf-m-tree-view")) {
      const B = k.current.querySelector("tbody");
      B && Sg(Array.from(B.querySelectorAll("button, a, input")));
    }
    return function() {
      document.removeEventListener("keydown", P);
    };
  }, [k, k.current]), o.useEffect(() => {
    D(I ? o.createElement(
      "caption",
      null,
      I,
      o.createElement("div", { className: "pf-v5-screen-reader" }, "This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space or enter.")
    ) : o.createElement("caption", { className: "pf-v5-screen-reader" }, "This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space or enter."));
  }, [I]);
  const O = Gt("Table", p, m), L = (t = r2.modifiers) === null || t === void 0 ? void 0 : t[zc(c || "").replace(/-?2xl/, "_2xl")], j = `treeView${c.charAt(0).toUpperCase() + c.slice(1)}`, C = (n = bt.modifiers) === null || n === void 0 ? void 0 : n[zc(j || "").replace(/-?2xl/, "_2xl")], P = (B) => {
    if (v || !(k && k.current && k.current.classList.contains(bt.modifiers.treeView)) || // implements roving tab-index to tree tables only
    k && k.current !== B.target.closest(`.${fe.table}:not(.pf-m-nested)`))
      return;
    const J = document.activeElement, b = B.key, F = Array.from(k.current.querySelectorAll("tbody tr")).filter((V) => !V.classList.contains("pf-m-disabled") && !V.hidden);
    (b === "Space" || b === "Enter") && (J.click(), B.preventDefault()), pf(B, F, (V) => V === J.closest("tr"), (V) => V.querySelectorAll("button:not(:disabled), input:not(:disabled), a:not(:disabled)")[0], ["button", "input", "a"], void 0, !1, !0, !1);
  }, G = () => {
    !N && M(!0);
  };
  return o.createElement(
    vp.Provider,
    { value: { registerSelectableRow: G } },
    o.createElement(
      "table",
      Object.assign({ "aria-label": d, role: f, className: y(r, fe.table, g ? C : L, fe.modifiers[a], !s && fe.modifiers.noBorderRows, l && fe.modifiers.stickyHeader, g && bt.modifiers.treeView, x && fe.modifiers.striped, w && fe.modifiers.expandable, _ && bt.modifiers.noInset, v && "pf-m-nested"), ref: k }, g && { role: "treegrid" }, O, E),
      N && $,
      i
    )
  );
}, Sl = o.forwardRef((e, t) => o.createElement(m2, Object.assign({}, e, { innerRef: t })));
Sl.displayName = "Table";
const h2 = (e) => {
  var { children: t, className: n, isExpanded: i, isEditable: r, isHidden: a = !1, isClickable: s = !1, isRowSelected: l = !1, isStriped: c = !1, isBorderRow: d = !1, isControlRow: f = !1, innerRef: u, ouiaId: p, ouiaSafe: m = !0, resetOffset: g = !1, onRowClick: v, isSelectable: x, "aria-label": w } = e, _ = z(e, ["children", "className", "isExpanded", "isEditable", "isHidden", "isClickable", "isRowSelected", "isStriped", "isBorderRow", "isControlRow", "innerRef", "ouiaId", "ouiaSafe", "resetOffset", "onRowClick", "isSelectable", "aria-label"]);
  const S = Gt("TableRow", p, m), [I, E] = o.useState("");
  let R = null;
  v && (R = ($) => {
    ($.key === "Enter" || $.key === " ") && (v($), $.preventDefault());
  });
  const k = a || i !== void 0 && !i, { registerSelectableRow: N } = o.useContext(vp);
  o.useEffect(() => {
    x && !k ? (E(`${l ? "Row selected" : ""}`), N()) : E(void 0);
  }, [l, x, N, k]);
  const M = w || I;
  return o.createElement(
    o.Fragment,
    null,
    o.createElement("tr", Object.assign({ className: y(fe.tableTr, n, i !== void 0 && fe.tableExpandableRow, i && fe.modifiers.expanded, r && i2.modifiers.inlineEditable, s && fe.modifiers.clickable, l && fe.modifiers.selected, c && fe.modifiers.striped, d && fe.modifiers.borderRow, f && fe.tableControlRow, g && fe.modifiers.firstCellOffsetReset), hidden: k }, s && { tabIndex: 0 }, { "aria-label": M, ref: u }, v && { onClick: v, onKeyDown: R }, S, _), t)
  );
}, Ri = o.forwardRef((e, t) => o.createElement(h2, Object.assign({}, e, { innerRef: t })));
Ri.displayName = "Tr";
const g2 = (e) => {
  var { children: t, className: n, noWrap: i = !1, innerRef: r, hasNestedHeader: a } = e, s = z(e, ["children", "className", "noWrap", "innerRef", "hasNestedHeader"]);
  return o.createElement("thead", Object.assign({ className: y(fe.tableThead, n, i && fe.modifiers.nowrap, a && fe.modifiers.nestedColumnHeader), ref: r }, s), t);
}, kl = o.forwardRef((e, t) => o.createElement(g2, Object.assign({}, e, { innerRef: t })));
kl.displayName = "Thead";
const b2 = (e) => {
  var { children: t, className: n, isExpanded: i, innerRef: r, isEvenStriped: a = !1, isOddStriped: s = !1 } = e, l = z(e, ["children", "className", "isExpanded", "innerRef", "isEvenStriped", "isOddStriped"]);
  return o.createElement("tbody", Object.assign({ role: "rowgroup", className: y(fe.tableTbody, n, i && fe.modifiers.expanded, s && fe.modifiers.striped, a && fe.modifiers.stripedEven), ref: r }, l), t);
}, Ll = o.forwardRef((e, t) => o.createElement(b2, Object.assign({}, e, { innerRef: t })));
Ll.displayName = "Tbody";
const Ai = {
  modifiers: {
    borderRight: "pf-m-border-right",
    borderLeft: "pf-m-border-left",
    right: "pf-m-right",
    inlineEnd: "pf-m-inline-end",
    left: "pf-m-left",
    inlineStart: "pf-m-inline-start"
  },
  scrollInnerWrapper: "pf-v5-c-scroll-inner-wrapper",
  scrollOuterWrapper: "pf-v5-c-scroll-outer-wrapper",
  table: "pf-v5-c-table",
  tableStickyCell: "pf-v5-c-table__sticky-cell"
};
function v2() {
  this.__data__ = [], this.size = 0;
}
var y2 = v2;
function x2(e, t) {
  return e === t || e !== e && t !== t;
}
var as = x2, w2 = as;
function O2(e, t) {
  for (var n = e.length; n--; )
    if (w2(e[n][0], t))
      return n;
  return -1;
}
var ss = O2, C2 = ss, _2 = Array.prototype, E2 = _2.splice;
function S2(e) {
  var t = this.__data__, n = C2(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : E2.call(t, n, 1), --this.size, !0;
}
var k2 = S2, L2 = ss;
function I2(e) {
  var t = this.__data__, n = L2(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var N2 = I2, T2 = ss;
function R2(e) {
  return T2(this.__data__, e) > -1;
}
var A2 = R2, P2 = ss;
function M2(e, t) {
  var n = this.__data__, i = P2(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
var D2 = M2, F2 = y2, $2 = k2, B2 = N2, j2 = A2, V2 = D2;
function Yi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Yi.prototype.clear = F2;
Yi.prototype.delete = $2;
Yi.prototype.get = B2;
Yi.prototype.has = j2;
Yi.prototype.set = V2;
var os = Yi, H2 = os;
function U2() {
  this.__data__ = new H2(), this.size = 0;
}
var z2 = U2;
function W2(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var G2 = W2;
function K2(e) {
  return this.__data__.get(e);
}
var X2 = K2;
function q2(e) {
  return this.__data__.has(e);
}
var J2 = q2, Y2 = typeof hn == "object" && hn && hn.Object === Object && hn, yp = Y2, Z2 = yp, Q2 = typeof self == "object" && self && self.Object === Object && self, e0 = Z2 || Q2 || Function("return this")(), Zi = e0, t0 = Zi, n0 = t0.Symbol, xp = n0, Gc = xp, wp = Object.prototype, i0 = wp.hasOwnProperty, r0 = wp.toString, dr = Gc ? Gc.toStringTag : void 0;
function a0(e) {
  var t = i0.call(e, dr), n = e[dr];
  try {
    e[dr] = void 0;
    var i = !0;
  } catch {
  }
  var r = r0.call(e);
  return i && (t ? e[dr] = n : delete e[dr]), r;
}
var s0 = a0, o0 = Object.prototype, l0 = o0.toString;
function c0(e) {
  return l0.call(e);
}
var d0 = c0, Kc = xp, f0 = s0, u0 = d0, p0 = "[object Null]", m0 = "[object Undefined]", Xc = Kc ? Kc.toStringTag : void 0;
function h0(e) {
  return e == null ? e === void 0 ? m0 : p0 : Xc && Xc in Object(e) ? f0(e) : u0(e);
}
var ls = h0;
function g0(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yi = g0, b0 = ls, v0 = yi, y0 = "[object AsyncFunction]", x0 = "[object Function]", w0 = "[object GeneratorFunction]", O0 = "[object Proxy]";
function C0(e) {
  if (!v0(e))
    return !1;
  var t = b0(e);
  return t == x0 || t == w0 || t == y0 || t == O0;
}
var Il = C0, _0 = Zi, E0 = _0["__core-js_shared__"], S0 = E0, js = S0, qc = function() {
  var e = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function k0(e) {
  return !!qc && qc in e;
}
var L0 = k0, I0 = Function.prototype, N0 = I0.toString;
function T0(e) {
  if (e != null) {
    try {
      return N0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var R0 = T0, A0 = Il, P0 = L0, M0 = yi, D0 = R0, F0 = /[\\^$.*+?()[\]{}|]/g, $0 = /^\[object .+?Constructor\]$/, B0 = Function.prototype, j0 = Object.prototype, V0 = B0.toString, H0 = j0.hasOwnProperty, U0 = RegExp(
  "^" + V0.call(H0).replace(F0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function z0(e) {
  if (!M0(e) || P0(e))
    return !1;
  var t = A0(e) ? U0 : $0;
  return t.test(D0(e));
}
var W0 = z0;
function G0(e, t) {
  return e?.[t];
}
var K0 = G0, X0 = W0, q0 = K0;
function J0(e, t) {
  var n = q0(e, t);
  return X0(n) ? n : void 0;
}
var Nl = J0, Y0 = Nl, Z0 = Zi, Q0 = Y0(Z0, "Map"), Op = Q0, ex = Nl, tx = ex(Object, "create"), cs = tx, Jc = cs;
function nx() {
  this.__data__ = Jc ? Jc(null) : {}, this.size = 0;
}
var ix = nx;
function rx(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ax = rx, sx = cs, ox = "__lodash_hash_undefined__", lx = Object.prototype, cx = lx.hasOwnProperty;
function dx(e) {
  var t = this.__data__;
  if (sx) {
    var n = t[e];
    return n === ox ? void 0 : n;
  }
  return cx.call(t, e) ? t[e] : void 0;
}
var fx = dx, ux = cs, px = Object.prototype, mx = px.hasOwnProperty;
function hx(e) {
  var t = this.__data__;
  return ux ? t[e] !== void 0 : mx.call(t, e);
}
var gx = hx, bx = cs, vx = "__lodash_hash_undefined__";
function yx(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = bx && t === void 0 ? vx : t, this;
}
var xx = yx, wx = ix, Ox = ax, Cx = fx, _x = gx, Ex = xx;
function Qi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Qi.prototype.clear = wx;
Qi.prototype.delete = Ox;
Qi.prototype.get = Cx;
Qi.prototype.has = _x;
Qi.prototype.set = Ex;
var Sx = Qi, Yc = Sx, kx = os, Lx = Op;
function Ix() {
  this.size = 0, this.__data__ = {
    hash: new Yc(),
    map: new (Lx || kx)(),
    string: new Yc()
  };
}
var Nx = Ix;
function Tx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Rx = Tx, Ax = Rx;
function Px(e, t) {
  var n = e.__data__;
  return Ax(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ds = Px, Mx = ds;
function Dx(e) {
  var t = Mx(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Fx = Dx, $x = ds;
function Bx(e) {
  return $x(this, e).get(e);
}
var jx = Bx, Vx = ds;
function Hx(e) {
  return Vx(this, e).has(e);
}
var Ux = Hx, zx = ds;
function Wx(e, t) {
  var n = zx(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
var Gx = Wx, Kx = Nx, Xx = Fx, qx = jx, Jx = Ux, Yx = Gx;
function er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
er.prototype.clear = Kx;
er.prototype.delete = Xx;
er.prototype.get = qx;
er.prototype.has = Jx;
er.prototype.set = Yx;
var Zx = er, Qx = os, ew = Op, tw = Zx, nw = 200;
function iw(e, t) {
  var n = this.__data__;
  if (n instanceof Qx) {
    var i = n.__data__;
    if (!ew || i.length < nw - 1)
      return i.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new tw(i);
  }
  return n.set(e, t), this.size = n.size, this;
}
var rw = iw, aw = os, sw = z2, ow = G2, lw = X2, cw = J2, dw = rw;
function tr(e) {
  var t = this.__data__ = new aw(e);
  this.size = t.size;
}
tr.prototype.clear = sw;
tr.prototype.delete = ow;
tr.prototype.get = lw;
tr.prototype.has = cw;
tr.prototype.set = dw;
var fw = tr, uw = Nl, pw = function() {
  try {
    var e = uw(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Cp = pw, Zc = Cp;
function mw(e, t, n) {
  t == "__proto__" && Zc ? Zc(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Tl = mw, hw = Tl, gw = as;
function bw(e, t, n) {
  (n !== void 0 && !gw(e[t], n) || n === void 0 && !(t in e)) && hw(e, t, n);
}
var _p = bw;
function vw(e) {
  return function(t, n, i) {
    for (var r = -1, a = Object(t), s = i(t), l = s.length; l--; ) {
      var c = s[e ? l : ++r];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var yw = vw, xw = yw, ww = xw(), Ow = ww, Ia = { exports: {} };
Ia.exports;
(function(e, t) {
  var n = Zi, i = t && !t.nodeType && t, r = i && !0 && e && !e.nodeType && e, a = r && r.exports === i, s = a ? n.Buffer : void 0, l = s ? s.allocUnsafe : void 0;
  function c(d, f) {
    if (f)
      return d.slice();
    var u = d.length, p = l ? l(u) : new d.constructor(u);
    return d.copy(p), p;
  }
  e.exports = c;
})(Ia, Ia.exports);
var Cw = Ia.exports, _w = Zi, Ew = _w.Uint8Array, Sw = Ew, Qc = Sw;
function kw(e) {
  var t = new e.constructor(e.byteLength);
  return new Qc(t).set(new Qc(e)), t;
}
var Lw = kw, Iw = Lw;
function Nw(e, t) {
  var n = t ? Iw(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Tw = Nw;
function Rw(e, t) {
  var n = -1, i = e.length;
  for (t || (t = Array(i)); ++n < i; )
    t[n] = e[n];
  return t;
}
var Aw = Rw, Pw = yi, ed = Object.create, Mw = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Pw(t))
      return {};
    if (ed)
      return ed(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), Dw = Mw;
function Fw(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var $w = Fw, Bw = $w, jw = Bw(Object.getPrototypeOf, Object), Ep = jw, Vw = Object.prototype;
function Hw(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vw;
  return e === n;
}
var Sp = Hw, Uw = Dw, zw = Ep, Ww = Sp;
function Gw(e) {
  return typeof e.constructor == "function" && !Ww(e) ? Uw(zw(e)) : {};
}
var Kw = Gw;
function Xw(e) {
  return e != null && typeof e == "object";
}
var qr = Xw, qw = ls, Jw = qr, Yw = "[object Arguments]";
function Zw(e) {
  return Jw(e) && qw(e) == Yw;
}
var Qw = Zw, td = Qw, eO = qr, kp = Object.prototype, tO = kp.hasOwnProperty, nO = kp.propertyIsEnumerable, iO = td(/* @__PURE__ */ function() {
  return arguments;
}()) ? td : function(e) {
  return eO(e) && tO.call(e, "callee") && !nO.call(e, "callee");
}, Lp = iO, rO = Array.isArray, Ip = rO, aO = 9007199254740991;
function sO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aO;
}
var Np = sO, oO = Il, lO = Np;
function cO(e) {
  return e != null && lO(e.length) && !oO(e);
}
var Rl = cO, dO = Rl, fO = qr;
function uO(e) {
  return fO(e) && dO(e);
}
var pO = uO, Na = { exports: {} };
function mO() {
  return !1;
}
var hO = mO;
Na.exports;
(function(e, t) {
  var n = Zi, i = hO, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, l = s ? n.Buffer : void 0, c = l ? l.isBuffer : void 0, d = c || i;
  e.exports = d;
})(Na, Na.exports);
var Tp = Na.exports, gO = ls, bO = Ep, vO = qr, yO = "[object Object]", xO = Function.prototype, wO = Object.prototype, Rp = xO.toString, OO = wO.hasOwnProperty, CO = Rp.call(Object);
function _O(e) {
  if (!vO(e) || gO(e) != yO)
    return !1;
  var t = bO(e);
  if (t === null)
    return !0;
  var n = OO.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Rp.call(n) == CO;
}
var EO = _O, SO = ls, kO = Np, LO = qr, IO = "[object Arguments]", NO = "[object Array]", TO = "[object Boolean]", RO = "[object Date]", AO = "[object Error]", PO = "[object Function]", MO = "[object Map]", DO = "[object Number]", FO = "[object Object]", $O = "[object RegExp]", BO = "[object Set]", jO = "[object String]", VO = "[object WeakMap]", HO = "[object ArrayBuffer]", UO = "[object DataView]", zO = "[object Float32Array]", WO = "[object Float64Array]", GO = "[object Int8Array]", KO = "[object Int16Array]", XO = "[object Int32Array]", qO = "[object Uint8Array]", JO = "[object Uint8ClampedArray]", YO = "[object Uint16Array]", ZO = "[object Uint32Array]", Fe = {};
Fe[zO] = Fe[WO] = Fe[GO] = Fe[KO] = Fe[XO] = Fe[qO] = Fe[JO] = Fe[YO] = Fe[ZO] = !0;
Fe[IO] = Fe[NO] = Fe[HO] = Fe[TO] = Fe[UO] = Fe[RO] = Fe[AO] = Fe[PO] = Fe[MO] = Fe[DO] = Fe[FO] = Fe[$O] = Fe[BO] = Fe[jO] = Fe[VO] = !1;
function QO(e) {
  return LO(e) && kO(e.length) && !!Fe[SO(e)];
}
var eC = QO;
function tC(e) {
  return function(t) {
    return e(t);
  };
}
var nC = tC, Ta = { exports: {} };
Ta.exports;
(function(e, t) {
  var n = yp, i = t && !t.nodeType && t, r = i && !0 && e && !e.nodeType && e, a = r && r.exports === i, s = a && n.process, l = function() {
    try {
      var c = r && r.require && r.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(Ta, Ta.exports);
var iC = Ta.exports, rC = eC, aC = nC, nd = iC, id = nd && nd.isTypedArray, sC = id ? aC(id) : rC, Ap = sC;
function oC(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Pp = oC, lC = Tl, cC = as, dC = Object.prototype, fC = dC.hasOwnProperty;
function uC(e, t, n) {
  var i = e[t];
  (!(fC.call(e, t) && cC(i, n)) || n === void 0 && !(t in e)) && lC(e, t, n);
}
var pC = uC, mC = pC, hC = Tl;
function gC(e, t, n, i) {
  var r = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], c = i ? i(n[l], e[l], l, n, e) : void 0;
    c === void 0 && (c = e[l]), r ? hC(n, l, c) : mC(n, l, c);
  }
  return n;
}
var bC = gC;
function vC(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var yC = vC, xC = 9007199254740991, wC = /^(?:0|[1-9]\d*)$/;
function OC(e, t) {
  var n = typeof e;
  return t = t ?? xC, !!t && (n == "number" || n != "symbol" && wC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Mp = OC, CC = yC, _C = Lp, EC = Ip, SC = Tp, kC = Mp, LC = Ap, IC = Object.prototype, NC = IC.hasOwnProperty;
function TC(e, t) {
  var n = EC(e), i = !n && _C(e), r = !n && !i && SC(e), a = !n && !i && !r && LC(e), s = n || i || r || a, l = s ? CC(e.length, String) : [], c = l.length;
  for (var d in e)
    (t || NC.call(e, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    kC(d, c))) && l.push(d);
  return l;
}
var RC = TC;
function AC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var PC = AC, MC = yi, DC = Sp, FC = PC, $C = Object.prototype, BC = $C.hasOwnProperty;
function jC(e) {
  if (!MC(e))
    return FC(e);
  var t = DC(e), n = [];
  for (var i in e)
    i == "constructor" && (t || !BC.call(e, i)) || n.push(i);
  return n;
}
var VC = jC, HC = RC, UC = VC, zC = Rl;
function WC(e) {
  return zC(e) ? HC(e, !0) : UC(e);
}
var Dp = WC, GC = bC, KC = Dp;
function XC(e) {
  return GC(e, KC(e));
}
var qC = XC, rd = _p, JC = Cw, YC = Tw, ZC = Aw, QC = Kw, ad = Lp, sd = Ip, e5 = pO, t5 = Tp, n5 = Il, i5 = yi, r5 = EO, a5 = Ap, od = Pp, s5 = qC;
function o5(e, t, n, i, r, a, s) {
  var l = od(e, n), c = od(t, n), d = s.get(c);
  if (d) {
    rd(e, n, d);
    return;
  }
  var f = a ? a(l, c, n + "", e, t, s) : void 0, u = f === void 0;
  if (u) {
    var p = sd(c), m = !p && t5(c), g = !p && !m && a5(c);
    f = c, p || m || g ? sd(l) ? f = l : e5(l) ? f = ZC(l) : m ? (u = !1, f = JC(c, !0)) : g ? (u = !1, f = YC(c, !0)) : f = [] : r5(c) || ad(c) ? (f = l, ad(l) ? f = s5(l) : (!i5(l) || n5(l)) && (f = QC(c))) : u = !1;
  }
  u && (s.set(c, f), r(f, c, i, a, s), s.delete(c)), rd(e, n, f);
}
var l5 = o5, c5 = fw, d5 = _p, f5 = Ow, u5 = l5, p5 = yi, m5 = Dp, h5 = Pp;
function Fp(e, t, n, i, r) {
  e !== t && f5(t, function(a, s) {
    if (r || (r = new c5()), p5(a))
      u5(e, t, s, n, Fp, i, r);
    else {
      var l = i ? i(h5(e, s), a, s + "", e, t, r) : void 0;
      l === void 0 && (l = a), d5(e, s, l);
    }
  }, m5);
}
var g5 = Fp;
function b5(e) {
  return e;
}
var $p = b5;
function v5(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var y5 = v5, x5 = y5, ld = Math.max;
function w5(e, t, n) {
  return t = ld(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, r = -1, a = ld(i.length - t, 0), s = Array(a); ++r < a; )
      s[r] = i[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = i[r];
    return l[t] = n(s), x5(e, this, l);
  };
}
var O5 = w5;
function C5(e) {
  return function() {
    return e;
  };
}
var _5 = C5, E5 = _5, cd = Cp, S5 = $p, k5 = cd ? function(e, t) {
  return cd(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: E5(t),
    writable: !0
  });
} : S5, L5 = k5, I5 = 800, N5 = 16, T5 = Date.now;
function R5(e) {
  var t = 0, n = 0;
  return function() {
    var i = T5(), r = N5 - (i - n);
    if (n = i, r > 0) {
      if (++t >= I5)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var A5 = R5, P5 = L5, M5 = A5, D5 = M5(P5), F5 = D5, $5 = $p, B5 = O5, j5 = F5;
function V5(e, t) {
  return j5(B5(e, t, $5), e + "");
}
var H5 = V5, U5 = as, z5 = Rl, W5 = Mp, G5 = yi;
function K5(e, t, n) {
  if (!G5(n))
    return !1;
  var i = typeof t;
  return (i == "number" ? z5(n) && W5(t, n.length) : i == "string" && t in n) ? U5(n[t], e) : !1;
}
var X5 = K5, q5 = H5, J5 = X5;
function Y5(e) {
  return q5(function(t, n) {
    var i = -1, r = n.length, a = r > 1 ? n[r - 1] : void 0, s = r > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (r--, a) : void 0, s && J5(n[0], n[1], s) && (a = r < 3 ? void 0 : a, r = 1), t = Object(t); ++i < r; ) {
      var l = n[i];
      l && e(t, l, i, a);
    }
    return t;
  });
}
var Z5 = Y5, Q5 = g5, e3 = Z5, t3 = e3(function(e, t, n, i) {
  Q5(e, t, n, i);
}), n3 = t3;
const Vs = /* @__PURE__ */ pu(n3);
function Bp(...e) {
  const t = e[0], n = e.slice(1);
  return n.length ? Vs(Vs({}, t), ...n, (i, r, a) => {
    if (a === "children")
      return i && r ? o.cloneElement(i, {
        children: r
      }) : Object.assign(Object.assign({}, r), i);
    if (a === "className")
      return y(i, r);
  }) : Vs({}, t);
}
const jp = {
  name: "--pf-v5-c-table__sticky-cell--MinWidth",
  value: "12.5rem",
  var: "var(--pf-v5-c-table__sticky-cell--MinWidth)"
}, Vp = {
  name: "--pf-v5-c-table__sticky-cell--Left",
  value: "0",
  var: "var(--pf-v5-c-table__sticky-cell--Left)"
}, Hp = {
  name: "--pf-v5-c-table__sticky-cell--Right",
  value: "0",
  var: "var(--pf-v5-c-table__sticky-cell--Right)"
}, i3 = (e) => {
  var { children: t, className: n, component: i = "th", dataLabel: r, scope: a = "col", textCenter: s = !1, sort: l = null, modifier: c, select: d = null, expand: f = null, tooltip: u = "", tooltipProps: p, onMouseEnter: m = () => {
  }, width: g, visibility: v, innerRef: x, info: w, isStickyColumn: _ = !1, hasRightBorder: S = !1, hasLeftBorder: I = !1, stickyMinWidth: E = "120px", stickyLeftOffset: R, stickyRightOffset: k, isSubheader: N = !1, screenReaderText: M, "aria-label": $ } = e, D = z(e, ["children", "className", "component", "dataLabel", "scope", "textCenter", "sort", "modifier", "select", "expand", "tooltip", "tooltipProps", "onMouseEnter", "width", "visibility", "innerRef", "info", "isStickyColumn", "hasRightBorder", "hasLeftBorder", "stickyMinWidth", "stickyLeftOffset", "stickyRightOffset", "isSubheader", "screenReaderText", "aria-label"]);
  !t && !M && !$ && console.warn("Th: Table headers must have an accessible name. If the Th is intended to be visually empty, pass in screenReaderText. If the Th contains only non-text, interactive content such as a checkbox or expand toggle, pass in an aria-label.");
  const [O, L] = o.useState(!1), [j, C] = o.useState(!1), P = x || o.createRef(), G = (Oe) => {
    Oe.target.offsetWidth < Oe.target.scrollWidth ? !O && L(!0) : O && L(!1), m(Oe);
  };
  let B = null;
  l && (l.isFavorites ? B = a2({
    onSort: l?.onSort,
    columnIndex: l.columnIndex,
    sortBy: l.sortBy,
    tooltip: u,
    tooltipProps: p
  })() : B = up(t, {
    columnIndex: l.columnIndex,
    column: {
      extraParams: {
        sortBy: l.sortBy,
        onSort: l?.onSort
      }
    },
    tooltip: u,
    tooltipProps: p
  }));
  const J = d ? dp(t, {
    rowData: {
      selected: d.isSelected,
      disableSelection: d?.isDisabled,
      props: d?.props
    },
    column: {
      extraParams: {
        onSelect: d?.onSelect,
        selectVariant: "checkbox",
        allRowsSelected: d.isSelected,
        isHeaderSelectDisabled: !!d.isHeaderSelectDisabled
      }
    },
    tooltip: u,
    tooltipProps: p
  }) : null, b = f ? mp(t, {
    column: {
      extraParams: {
        onCollapse: f?.onToggle,
        allRowsExpanded: !f.areAllExpanded,
        collapseAllAriaLabel: ""
      }
    }
  }) : null, F = g ? pp(g)() : null, K = v ? gp(...v.map((Oe) => hp[Oe]))() : null;
  let V = B?.children || J?.children || b?.children || t, U = null;
  w && (U = f2(w)(V), V = U.children);
  const q = Bp(B, J, b, F, K, U), {
    // ignore the merged children since we transform them ourselves so we can wrap it with info
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: W = null,
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible: X = null,
    className: te = "",
    component: ie = i
  } = q, Y = z(q, ["children", "isVisible", "className", "component"]);
  o.useEffect(() => {
    C(P.current.offsetWidth < P.current.scrollWidth);
  }, [P]);
  const oe = o.createElement(ie, Object.assign({ tabIndex: l || d || !j ? -1 : 0, onFocus: u !== null ? G : m, onBlur: () => L(!1), "data-label": r, onMouseEnter: u !== null ? G : m, scope: i === "th" ? a : null, ref: P, "aria-label": $, className: y(fe.tableTh, n, s && fe.modifiers.center, N && fe.tableSubhead, _ && Ai.tableStickyCell, S && Ai.modifiers.borderRight, I && Ai.modifiers.borderLeft, c && fe.modifiers[c], te) }, Y, D, _ && {
    style: Object.assign({ [jp.name]: E || void 0, [Vp.name]: R || 0, [Hp.name]: k || 0 }, D.style)
  }), V || M && o.createElement("span", { className: "pf-v5-screen-reader" }, M));
  return u !== null && (u === "" ? typeof V == "string" : !0) && !(B || J) && O ? o.createElement(
    o.Fragment,
    null,
    oe,
    o.createElement(ft, Object.assign({ triggerRef: P, content: u || u === "" && t, isVisible: !0 }, p))
  ) : oe;
}, Fn = o.forwardRef((e, t) => o.createElement(i3, Object.assign({}, e, { innerRef: t })));
Fn.displayName = "Th";
const r3 = (e, { rowData: t }) => {
  const { id: n } = t;
  return {
    className: "",
    children: o.createElement(op, { id: n })
  };
}, a3 = (e) => {
  var { children: t, className: n, isActionCell: i = !1, component: r = "td", dataLabel: a, textCenter: s = !1, modifier: l, select: c = null, actions: d = null, expand: f = null, treeRow: u = null, compoundExpand: p = null, noPadding: m, width: g, visibility: v, innerRef: x, favorites: w = null, draggableRow: _ = null, tooltip: S = "", onMouseEnter: I = () => {
  }, isStickyColumn: E = !1, hasRightBorder: R = !1, hasLeftBorder: k = !1, stickyMinWidth: N = "120px", stickyLeftOffset: M, stickyRightOffset: $ } = e, D = z(e, ["children", "className", "isActionCell", "component", "dataLabel", "textCenter", "modifier", "select", "actions", "expand", "treeRow", "compoundExpand", "noPadding", "width", "visibility", "innerRef", "favorites", "draggableRow", "tooltip", "onMouseEnter", "isStickyColumn", "hasRightBorder", "hasLeftBorder", "stickyMinWidth", "stickyLeftOffset", "stickyRightOffset"]);
  const [O, L] = o.useState(!1), [j, C] = o.useState(!1), P = x || o.createRef(), G = (Le) => {
    Le.target.offsetWidth < Le.target.scrollWidth ? !O && L(!0) : O && L(!1), I(Le);
  }, B = c ? dp(t, {
    rowIndex: c.rowIndex,
    rowData: {
      selected: c.isSelected,
      disableSelection: c?.isDisabled,
      props: c?.props
    },
    column: {
      extraParams: {
        onSelect: c?.onSelect,
        selectVariant: c.variant || "checkbox"
      }
    }
  }) : null, J = w ? u2(null, {
    rowIndex: w?.rowIndex,
    rowData: {
      favorited: w.isFavorited,
      favoritesProps: w?.props
    },
    column: {
      extraParams: {
        onFavorite: w?.onFavorite
      }
    }
  }) : null, b = _ !== null ? r3(null, {
    rowData: {
      id: _.id
    }
  }) : null, F = d ? s2(d.items, null, null) : null, K = F ? F(null, {
    rowIndex: d?.rowIndex,
    rowData: {
      disableActions: d?.isDisabled
    },
    column: {
      extraParams: {
        dropdownPosition: d?.dropdownPosition,
        dropdownDirection: d?.dropdownDirection,
        menuAppendTo: d?.menuAppendTo,
        actionsToggle: d?.actionsToggle
      }
    }
  }) : null, V = f !== null ? mp(null, {
    rowIndex: f.rowIndex,
    columnIndex: f?.columnIndex,
    rowData: {
      isOpen: f.isExpanded
    },
    column: {
      extraParams: {
        onCollapse: f?.onToggle,
        expandId: f?.expandId
      }
    }
  }) : null, U = p !== null ? c2({
    title: t,
    props: {
      isOpen: p.isExpanded
    }
  }, {
    rowIndex: p?.rowIndex,
    columnIndex: p?.columnIndex,
    column: {
      extraParams: {
        onExpand: p?.onToggle,
        expandId: p?.expandId
      }
    }
  }) : null, q = g ? pp(g)() : null, W = v ? gp(...v.map((Le) => hp[Le]))() : null, X = u !== null ? p2(u.onCollapse, u.onCheckChange, u.onToggleRowDetails)({
    title: t
  }, {
    rowIndex: u.rowIndex,
    rowData: {
      props: u.props
    }
  }) : null, te = Bp(B, K, V, U, q, W, J, X, b), {
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible: ie = null,
    children: Y = null,
    className: oe = "",
    component: de = r
  } = te, Ce = z(te, ["isVisible", "children", "className", "component"]), Oe = n && n.includes(bt.tableTreeViewTitleCell) || oe && oe.includes(bt.tableTreeViewTitleCell);
  o.useEffect(() => {
    C(P.current.offsetWidth < P.current.scrollWidth);
  }, [P]);
  const Te = o.createElement(de, Object.assign({ tabIndex: (c || !j) && l !== "truncate" ? -1 : 0 }, !Oe && { "data-label": a }, { onFocus: S !== null ? G : I, onBlur: () => L(!1), onMouseEnter: S !== null ? G : I, className: y(fe.tableTd, n, i && fe.tableAction, s && fe.modifiers.center, m && fe.modifiers.noPadding, E && Ai.tableStickyCell, R && Ai.modifiers.borderRight, k && Ai.modifiers.borderLeft, fe.modifiers[l], b && fe.tableDraggable, oe), ref: P }, Ce, D, E && {
    style: Object.assign({ [jp.name]: N || void 0, [Vp.name]: M || 0, [Hp.name]: $ || 0 }, D.style)
  }), Y || t);
  return S !== null && (S === "" ? typeof t == "string" : !0) && O ? o.createElement(
    o.Fragment,
    null,
    Te,
    o.createElement(ft, { triggerRef: P, content: S || S === "" && t, isVisible: !0 })
  ) : Te;
}, Dt = o.forwardRef((e, t) => o.createElement(a3, Object.assign({}, e, { innerRef: t })));
Dt.displayName = "Td";
function Al(e, t) {
  const n = Bd(t);
  return n.displayName = e, n;
}
const s3 = ["error", "errorMessage"], Hs = "error_description";
function o3(e) {
  if (typeof e == "string")
    return e;
  if (e instanceof Au)
    return zp(e.responseData);
  if (e instanceof Error)
    return e.message;
  throw new Error("Unable to determine error message.");
}
function l3(e) {
  if (!(e instanceof Au))
    return;
  const t = e.responseData;
  return Up(t);
}
function Up(e) {
  if (typeof e == "object" && e !== null && Hs in e && typeof e[Hs] == "string")
    return e[Hs];
}
function zp(e) {
  if (!(typeof e != "object" || e === null))
    for (const t of s3) {
      const n = e[t];
      if (typeof n == "string")
        return n;
    }
}
const c3 = () => Math.floor(Math.random() * 1e3);
function d3(e) {
  return e != null;
}
function Wp(e) {
  const t = jd(e);
  if (d3(t))
    return t;
  throw new Error(
    `No provider found for ${e.displayName ? `the '${e.displayName}'` : "an unknown"} context, make sure it is included in your component hierarchy.`
  );
}
function f3() {
  const e = en(!1), t = en(/* @__PURE__ */ new Set());
  Nt(() => (e.current = !1, () => {
    e.current = !0, n();
  }), []);
  function n() {
    t.current.forEach((i) => clearTimeout(i)), t.current.clear();
  }
  return Pi((i, r) => {
    if (e.current)
      throw new Error("Can't schedule a timeout on an unmounted component.");
    const a = Number(setTimeout(s, r));
    t.current.add(a);
    function s() {
      t.current.delete(a), i();
    }
    return function() {
      clearTimeout(a), t.current.delete(a);
    };
  }, []);
}
function u3({ alerts: e, onCloseAlert: t }) {
  return /* @__PURE__ */ h(
    Lf,
    {
      "data-testid": "global-alerts",
      isToast: !0,
      style: { whiteSpace: "pre-wrap" },
      children: e.map(({ id: n, variant: i, message: r, description: a }, s) => /* @__PURE__ */ h(
        Va,
        {
          "data-testid": s === 0 ? "last-alert" : void 0,
          isLiveRegion: !0,
          variant: Gn[i],
          component: "p",
          variantLabel: "",
          title: r,
          actionClose: /* @__PURE__ */ h(
            Sf,
            {
              title: r,
              onClose: () => t(n)
            }
          ),
          children: a && /* @__PURE__ */ h("p", { children: a })
        },
        n
      ))
    }
  );
}
const p3 = 8e3, Gp = Al(
  "AlertContext",
  void 0
), m3 = () => Wp(Gp), h3 = ({ children: e }) => {
  const { t } = je(), n = f3(), [i, r] = me([]), a = (d) => r((f) => f.filter((u) => u.id !== d)), s = Pi(
    (d, f = Gn.success, u) => {
      const p = {
        id: c3(),
        message: d,
        variant: f,
        description: u
      };
      r((m) => [p, ...m]), n(() => a(p.id), p3);
    },
    [n]
  ), l = Pi(
    (d, f) => {
      const u = t(d, { error: o3(f) }), p = l3(f);
      s(u, Gn.danger, p);
    },
    [s, t]
  ), c = lt(() => ({ addAlert: s, addError: l }), [s, l]);
  return /* @__PURE__ */ Z(Gp.Provider, { value: c, children: [
    /* @__PURE__ */ h(u3, { alerts: i, onCloseAlert: a }),
    e
  ] });
}, g3 = (e) => {
  const { t } = je(), n = e.error, i = b3(n);
  function r() {
    location.href = location.origin + location.pathname;
  }
  return /* @__PURE__ */ h(Ja, { children: /* @__PURE__ */ h(
    At,
    {
      variant: kr.small,
      title: t("somethingWentWrong"),
      titleIconVariant: "danger",
      showClose: !1,
      isOpen: !0,
      actions: [
        /* @__PURE__ */ h(ce, { variant: "primary", onClick: r, children: t("tryAgain") }, "tryAgain")
      ],
      children: /* @__PURE__ */ Z(qa, { children: [
        /* @__PURE__ */ h(En, { children: t("somethingWentWrongDescription") }),
        i && /* @__PURE__ */ h(En, { component: Vi.small, children: i })
      ] })
    }
  ) });
};
function b3(e) {
  return typeof e == "string" ? e : e instanceof Error ? e.message : null;
}
function v3(e, t, n) {
  const [i, r] = me(
    () => e.getItem(t) ?? n
  ), a = Pi((s) => {
    r(s), e.setItem(t, s);
  }, []);
  return Nt(() => {
    r(e.getItem(t) ?? n), window.addEventListener("storage", s);
    function s(l) {
      l.storageArea === e && (l.key === null || l.key === t) && r(l.newValue ?? n);
    }
    return () => window.removeEventListener("storage", s);
  }, [e, t]), [i, a];
}
function y3(e, t, n) {
  const i = lt(
    () => JSON.stringify(n),
    [n]
  ), [r, a] = v3(
    e,
    t,
    i
  ), s = lt(() => JSON.parse(r), [r]), l = Pi(
    (c) => a(JSON.stringify(c)),
    []
  );
  return [s, l];
}
const Kp = Al(
  "HelpContext",
  void 0
), x3 = () => Wp(Kp), w3 = ({ children: e }) => {
  const [t, n] = y3(localStorage, "helpEnabled", !0);
  function i() {
    n(!t);
  }
  return /* @__PURE__ */ h(Kp.Provider, { value: { enabled: t, toggleHelp: i }, children: e });
}, O3 = () => Bd(void 0);
let yo;
const at = () => {
  const e = jd(yo);
  if (!e)
    throw Error(
      "no environment provider in the hierarchy make sure to add the provider"
    );
  return e;
}, M4 = ({
  environment: e,
  children: t
}) => {
  yo = O3();
  const n = en(!1), [i, r] = me(!1), [a, s] = me(), l = lt(() => {
    const c = new Pu({
      url: e.serverBaseUrl,
      realm: e.realm,
      clientId: e.clientId
    });
    return c.onAuthLogout = () => c.login(), c;
  }, [e]);
  return Nt(() => {
    n.current || (l.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      responseMode: "query"
    }).then(() => r(!0)).catch((c) => s(c)), n.current = !0);
  }, [l]), a ? /* @__PURE__ */ h(g3, { error: a }) : i ? /* @__PURE__ */ h(yo.Provider, { value: { environment: e, keycloak: l }, children: /* @__PURE__ */ h(h3, { children: /* @__PURE__ */ h(w3, { children: t }) }) }) : /* @__PURE__ */ h(Xt, {});
};
function C3() {
  const e = document.getElementById("environment")?.textContent;
  if (typeof e != "string")
    throw new Error("Environment variables not found in the document.");
  try {
    return JSON.parse(e);
  } catch {
    throw new Error("Unable to parse environment variables as JSON.");
  }
}
const Pr = ({
  modalTitle: e,
  continueLabel: t,
  cancelLabel: n,
  buttonTitle: i,
  isDisabled: r,
  buttonVariant: a,
  buttonTestRole: s,
  onContinue: l,
  component: c = ce,
  children: d,
  ...f
}) => {
  const [u, p] = me(!1);
  return /* @__PURE__ */ Z(wt, { children: [
    /* @__PURE__ */ h(
      c,
      {
        variant: a,
        onClick: () => p(!0),
        isDisabled: r,
        "data-testrole": s,
        children: i
      }
    ),
    /* @__PURE__ */ h(
      At,
      {
        variant: "small",
        ...f,
        title: e,
        isOpen: u,
        onClose: () => p(!1),
        actions: [
          /* @__PURE__ */ h(
            ce,
            {
              id: "modal-confirm",
              variant: "primary",
              onClick: () => {
                p(!1), l();
              },
              children: t
            },
            "confirm"
          ),
          /* @__PURE__ */ h(
            ce,
            {
              id: "modal-cancel",
              variant: "secondary",
              onClick: () => p(!1),
              children: n
            },
            "cancel"
          )
        ],
        children: d
      }
    )
  ] });
}, Pl = ({ message: e, ...t }) => /* @__PURE__ */ h(rl, { ...t, children: /* @__PURE__ */ h(Yo, { children: /* @__PURE__ */ h(Zo, { icon: /* @__PURE__ */ h(Ki, {}), variant: "error", children: e }) }) }), Xp = ({
  helpText: e,
  fieldLabelId: t,
  noVerticalAlign: n = !0,
  unWrap: i = !1
}) => {
  const { enabled: r } = x3();
  return r ? /* @__PURE__ */ h(Jo, { bodyContent: e, children: /* @__PURE__ */ Z(wt, { children: [
    !i && /* @__PURE__ */ h(
      "button",
      {
        "data-testid": `help-label-${t}`,
        "aria-label": t,
        onClick: (a) => a.preventDefault(),
        className: "pf-v5-c-form__group-label-help",
        children: /* @__PURE__ */ h(Xn, { isInline: n, children: /* @__PURE__ */ h(Ca, {}) })
      }
    ),
    i && /* @__PURE__ */ h(Xn, { isInline: n, children: /* @__PURE__ */ h(Ca, {}) })
  ] }) }) : null;
};
function qp(e) {
  if (!(typeof e > "u" || e instanceof RegExp))
    return typeof e == "object" ? e.value : e;
}
const Ml = ({
  name: e,
  label: t,
  labelIcon: n,
  error: i,
  children: r,
  ...a
}) => /* @__PURE__ */ Z(
  wn,
  {
    label: t || e,
    fieldId: e,
    labelIcon: n ? /* @__PURE__ */ h(Xp, { helpText: n, fieldLabelId: e }) : void 0,
    ...a,
    children: [
      r,
      i && /* @__PURE__ */ h(Pl, { "data-testid": `${e}-helper`, message: i.message })
    ]
  }
), _3 = ({
  hasReveal: e = !0,
  innerRef: t,
  ...n
}) => {
  const { t: i } = je(), [r, a] = me(!0);
  return /* @__PURE__ */ Z(Hn, { children: [
    /* @__PURE__ */ h(xt, { isFill: !0, children: /* @__PURE__ */ h(
      $t,
      {
        ...n,
        type: r ? "password" : "text",
        ref: t
      }
    ) }),
    e && /* @__PURE__ */ h(
      ce,
      {
        variant: "control",
        "aria-label": i("showPassword"),
        onClick: () => a(!r),
        children: r ? /* @__PURE__ */ h(Gb, {}) : /* @__PURE__ */ h(zb, {})
      }
    )
  ] });
}, E3 = $d(
  (e, t) => /* @__PURE__ */ h(_3, { ...e, innerRef: t })
);
E3.displayName = "PasswordInput";
const S3 = ({
  id: e,
  name: t,
  label: n,
  options: i,
  controller: r,
  labelIcon: a,
  ...s
}) => {
  const {
    control: l,
    formState: { errors: c }
  } = qi(), [d, f] = me(!1), u = qp(r.rules?.required) === !0;
  return /* @__PURE__ */ h(
    Ml,
    {
      name: t,
      label: n,
      isRequired: u,
      error: Ar(c, t),
      labelIcon: a,
      children: /* @__PURE__ */ h(
        ts,
        {
          ...r,
          name: t,
          control: l,
          render: ({ field: { onChange: p, value: m } }) => /* @__PURE__ */ h(
            Kn,
            {
              ...s,
              onClick: () => f(!d),
              onOpenChange: () => f(!1),
              selected: yr(i) ? i.filter(
                (g) => Array.isArray(m) ? m.includes(g.key) : m === g.key
              ).map((g) => g.value) : m,
              toggle: (g) => /* @__PURE__ */ h(
                yt,
                {
                  id: e || t.slice(t.lastIndexOf(".") + 1),
                  ref: g,
                  onClick: () => f(!d),
                  isExpanded: d,
                  isFullWidth: !0,
                  status: Ar(c, t) ? Vn.danger : void 0,
                  "aria-label": "toggle",
                  children: yr(i) ? i.find(
                    (v) => v.key === (Array.isArray(m) ? m[0] : m)
                  )?.value : m
                }
              ),
              onSelect: (g, v) => {
                const x = v?.toString();
                p(Array.isArray(m) ? [x] : x), f(!1);
              },
              isOpen: d,
              children: /* @__PURE__ */ h(Xi, { children: i.map((g) => /* @__PURE__ */ h(Wr, { value: ri(g), children: Dl(g) ? g : g.value }, ri(g))) })
            }
          )
        }
      )
    }
  );
}, ia = (e) => Dl(e) ? e : e.value, k3 = ({
  id: e,
  name: t,
  label: n,
  options: i,
  controller: r,
  labelIcon: a,
  placeholderText: s,
  onFilter: l,
  variant: c,
  ...d
}) => {
  const {
    control: f,
    formState: { errors: u }
  } = qi(), [p, m] = me(!1), [g, v] = me(""), [x, w] = me(0), _ = en(), S = qp(r.rules?.required) === !0, I = i.filter(
    (k) => ia(k).toLowerCase().startsWith(g.toLowerCase())
  ), E = lt(
    () => I.map((k, N) => /* @__PURE__ */ h(
      Wr,
      {
        value: ri(k),
        isFocused: x === N,
        children: ia(k)
      },
      ri(k)
    )),
    [x, I]
  ), R = (k, N) => {
    const M = I[x];
    switch (m(!0), k.key) {
      case "Enter": {
        k.preventDefault(), c !== ki.typeaheadMulti ? v(ia(M)) : v(""), N.onChange(
          Array.isArray(N.value) ? [...N.value, ri(M)] : ri(M)
        ), m(!1), w(0);
        break;
      }
      case "Tab":
      case "Escape": {
        m(!1), N.onChange(void 0);
        break;
      }
      case "Backspace": {
        c === ki.typeahead && N.onChange("");
        break;
      }
      case "ArrowUp":
      case "ArrowDown": {
        k.preventDefault();
        let $ = 0;
        k.key === "ArrowUp" && (x === 0 ? $ = i.length - 1 : $ = x - 1), k.key === "ArrowDown" && (x === i.length - 1 ? $ = 0 : $ = x + 1), w($);
        break;
      }
    }
  };
  return /* @__PURE__ */ h(
    Ml,
    {
      name: t,
      label: n,
      isRequired: S,
      error: Ar(u, t),
      labelIcon: a,
      children: /* @__PURE__ */ h(
        ts,
        {
          ...r,
          name: t,
          control: f,
          render: ({ field: k }) => /* @__PURE__ */ h(
            Kn,
            {
              ...d,
              onClick: () => m(!p),
              onOpenChange: () => m(!1),
              selected: yr(i) ? i.filter(
                (N) => Array.isArray(k.value) ? k.value.includes(N.key) : k.value === N.key
              ).map((N) => N.value) : k.value,
              toggle: (N) => /* @__PURE__ */ h(
                yt,
                {
                  ref: N,
                  id: e || t.slice(t.lastIndexOf(".") + 1),
                  variant: "typeahead",
                  onClick: () => m(!p),
                  isExpanded: p,
                  isFullWidth: !0,
                  status: Ar(u, t) ? Vn.danger : void 0,
                  children: /* @__PURE__ */ Z(za, { isPlain: !0, children: [
                    /* @__PURE__ */ h(
                      Wa,
                      {
                        placeholder: s,
                        value: c === ki.typeahead && k.value ? yr(i) ? i.find(
                          (M) => M.key === (Array.isArray(k.value) ? k.value[0] : k.value)
                        )?.value : k.value : g,
                        onClick: () => m(!p),
                        onChange: (M, $) => {
                          v($), l?.($);
                        },
                        onKeyDown: (M) => R(M, k),
                        autoComplete: "off",
                        innerRef: _,
                        role: "combobox",
                        isExpanded: p,
                        "aria-controls": "select-typeahead-listbox",
                        children: c === ki.typeaheadMulti && Array.isArray(k.value) && /* @__PURE__ */ h(qn, { "aria-label": "Current selections", children: k.value.map(
                          (M, $) => /* @__PURE__ */ h(
                            Ut,
                            {
                              onClick: (D) => {
                                D.stopPropagation(), k.onChange(
                                  k.value.filter(
                                    (O) => O !== ri(M)
                                  )
                                );
                              },
                              children: yr(i) ? i.find((D) => M === D.key)?.value : ia(M)
                            },
                            $
                          )
                        ) })
                      }
                    ),
                    /* @__PURE__ */ h(Ga, { children: (!!g || k.value) && /* @__PURE__ */ h(
                      ce,
                      {
                        variant: "plain",
                        onClick: () => {
                          v(""), k.onChange(""), _?.current?.focus();
                        },
                        "aria-label": "Clear input value",
                        children: /* @__PURE__ */ h(an, { "aria-hidden": !0 })
                      }
                    ) })
                  ] })
                }
              ),
              onSelect: (N, M) => {
                N?.stopPropagation();
                const $ = M?.toString();
                c === ki.typeaheadMulti && Array.isArray(k.value) ? k.value.includes($) ? k.onChange(
                  k.value.filter((D) => D !== $)
                ) : k.onChange([...k.value, $]) : (k.onChange(Array.isArray(k.value) ? [$] : $), m(!1));
              },
              isOpen: p,
              children: /* @__PURE__ */ h(Xi, { children: E })
            }
          )
        }
      )
    }
  );
};
var ki = /* @__PURE__ */ ((e) => (e.single = "single", e.typeahead = "typeahead", e.typeaheadMulti = "typeaheadMulti", e))(ki || {});
const yr = (e) => typeof e[0] != "string", Dl = (e) => typeof e == "string", ri = (e) => Dl(e) ? e : e.key, Fl = ({
  variant: e = "single",
  ...t
}) => e === "single" ? /* @__PURE__ */ h(S3, { ...t }) : /* @__PURE__ */ h(k3, { ...t, variant: e }), L3 = (e) => {
  const { labelIcon: t, helperText: n, ...i } = e, r = !!e.rules?.required, a = e.defaultValue ?? "", { field: s, fieldState: l } = Wu({
    ...e,
    defaultValue: a
  });
  return /* @__PURE__ */ Z(
    Ml,
    {
      name: e.name,
      label: e.label,
      labelIcon: t,
      isRequired: r,
      error: l.error,
      children: [
        /* @__PURE__ */ h(
          $t,
          {
            isRequired: r,
            id: e.name,
            "data-testid": e["data-testid"] || e.name,
            validated: l.error ? zn.error : zn.default,
            isDisabled: e.isDisabled,
            ...i,
            ...s
          }
        ),
        n && /* @__PURE__ */ h(rl, { children: /* @__PURE__ */ h(Yo, { children: /* @__PURE__ */ h(Zo, { children: n }) }) })
      ]
    }
  );
}, I3 = uu, N3 = ({ icon: e }) => {
  const t = T3(e);
  return /* @__PURE__ */ h(Xn, { size: "lg", children: /* @__PURE__ */ h(t, { alt: e }) });
};
function T3(e) {
  switch (e) {
    case "github":
      return Mv;
    case "facebook":
      return Av;
    case "gitlab":
      return Fv;
    case "google":
      return Bv;
    case "linkedin":
    case "linkedin-openid-connect":
      return Xv;
    case "openshift-v3":
    case "openshift-v4":
      return s1;
    case "stackoverflow":
      return m1;
    case "twitter":
      return v1;
    case "microsoft":
      return e1;
    case "bitbucket":
      return Ov;
    case "instagram":
      return zv;
    case "paypal":
      return l1;
    default:
      return _v;
  }
}
const R3 = "_title_180i0_2", A3 = {
  title: R3
}, Jp = ({
  id: e,
  title: t,
  headingLevel: n = "h1",
  size: i = "xl",
  ...r
}) => /* @__PURE__ */ h(
  Cn,
  {
    headingLevel: n,
    size: i,
    className: A3.title,
    id: e,
    tabIndex: 0,
    ...r,
    children: t
  }
), P3 = ({
  title: e,
  children: t,
  scrollId: n,
  className: i
}) => {
  const r = xm();
  return /* @__PURE__ */ Z(Ko, { id: r, className: i, isFlat: !0, children: [
    /* @__PURE__ */ h(Uf, { className: "kc-form-panel__header", children: /* @__PURE__ */ h(Bf, { tabIndex: 0, children: /* @__PURE__ */ h(Jp, { id: n, title: e }) }) }),
    /* @__PURE__ */ h($f, { className: "kc-form-panel__body", children: t })
  ] });
}, M3 = (e) => {
  const { title: t, children: n, scrollId: i, ...r } = e;
  return /* @__PURE__ */ h("section", { ...r, style: { marginTop: "var(--pf-v5-global--spacer--lg)" }, children: /* @__PURE__ */ Z(wt, { children: [
    /* @__PURE__ */ h(Jp, { id: i, title: t }),
    n
  ] }) });
}, D3 = "_panel_1cdve_1", F3 = "_sticky_1cdve_5", dd = {
  panel: D3,
  sticky: F3
}, $3 = "kc-main-content-page-container", fd = (e) => e.replace(/\s+/g, "-"), B3 = ({
  label: e,
  sections: t,
  borders: n = !1,
  ...i
}) => {
  const r = lt(
    () => t.filter(({ isHidden: a }) => !a),
    [t]
  );
  return /* @__PURE__ */ Z(Qa, { hasGutter: !0, ...i, children: [
    /* @__PURE__ */ h(gn, { md: 8, sm: 12, children: r.map(({ title: a, panel: s }) => {
      const l = fd(a.toLowerCase());
      return /* @__PURE__ */ h(Io, { children: n ? /* @__PURE__ */ h(
        P3,
        {
          scrollId: l,
          title: a,
          className: dd.panel,
          children: s
        }
      ) : /* @__PURE__ */ h(M3, { scrollId: l, title: a, children: s }) }, a);
    }) }),
    /* @__PURE__ */ h(gn, { md: 4, sm: 12, order: { default: "-1", md: "1" }, children: /* @__PURE__ */ h(Hi, { className: dd.sticky, children: /* @__PURE__ */ h(
      mu,
      {
        isVertical: !0,
        scrollableSelector: `#${$3}`,
        label: e,
        offset: 100,
        children: r.map(({ title: a }) => {
          const s = fd(a.toLowerCase());
          return (
            // note that JumpLinks currently does not work with spaces in the href
            /* @__PURE__ */ h(
              Nr,
              {
                href: `#${s}`,
                "data-testid": `jump-link-${s}`,
                children: a
              },
              a
            )
          );
        })
      }
    ) }) })
  ] });
}, j3 = (e) => {
  try {
    return new Intl.DisplayNames([e], { type: "language" }).of(e);
  } catch {
    return e;
  }
}, V3 = ({
  t: e,
  form: t,
  supportedLocales: n,
  currentLocale: i
}) => {
  const r = lt(
    () => n.map((a) => ({
      key: a,
      value: e(`locale_${a}`, j3(a) ?? a)
    })).sort((a, s) => a.value.localeCompare(s.value, i)),
    [n, i, e]
  );
  return r.length ? /* @__PURE__ */ h(bl, { ...t, children: /* @__PURE__ */ h(
    Fl,
    {
      "data-testid": "locale-select",
      name: "attributes.locale",
      label: e("selectALocale"),
      controller: { defaultValue: "" },
      options: r,
      variant: r.length >= 10 ? "typeahead" : "single"
    }
  ) }) : null;
}, xo = (e) => e?.includes("${"), wo = (e) => e.substring(2, e.length - 1), zt = (e, t, n, i) => {
  const r = t || n, a = xo(r) ? wo(r) : r, s = i ? `${i}.${a}` : a;
  return e(s || "");
}, Oo = (e, t) => zt(e, t.displayName, t.name), H3 = ["username", "firstName", "lastName", "email"], Yp = (e) => e && H3.includes(e), Yn = (e) => `${Yp(e) ? "" : "attributes."}${e?.replaceAll(
  ".",
  "🍺"
)}`, U3 = (e) => e.replaceAll(".", "🍺"), z3 = (e) => e.replaceAll("🍺", ".");
function W3(e, t, n) {
  (e.responseData.errors !== void 0 ? e.responseData.errors : [e.responseData]).forEach((i) => {
    const r = Object.assign(
      {},
      i.params?.map((a) => xo(a.toString()) ? n(wo(a)) : a)
    );
    t(Yn(i.field), {
      message: n(
        xo(i.errorMessage) ? wo(i.errorMessage) : i.errorMessage,
        {
          ...r,
          defaultValue: i.errorMessage || i.field
        }
      ),
      type: "server"
    });
  });
}
function fs({
  required: e,
  validators: t
}) {
  return e || G3(t);
}
function G3(e) {
  return e && "length" in e && "min" in e.length && typeof e.length.min == "number" ? e.length.min > 0 : !1;
}
const Jr = ({
  t: e,
  form: t,
  attribute: n,
  renderer: i,
  children: r
}) => {
  const a = zt(
    e,
    n.annotations?.inputHelperTextBefore
  ), {
    formState: { errors: s }
  } = t, l = i?.(n), c = Ar(s, Yn(n.name));
  return /* @__PURE__ */ Z(
    wn,
    {
      label: Oo(e, n) || "",
      fieldId: n.name,
      isRequired: fs(n),
      labelIcon: a ? /* @__PURE__ */ h(Xp, { helpText: a, fieldLabelId: n.name }) : void 0,
      children: [
        l ? /* @__PURE__ */ Z(Hn, { children: [
          r,
          l
        ] }) : r,
        c && /* @__PURE__ */ h(
          Pl,
          {
            "data-testid": `${n.name}-helper`,
            message: c.message
          }
        )
      ]
    },
    n.name
  );
}, K3 = ({
  t: e,
  form: t,
  attribute: n,
  renderer: i,
  ...r
}) => /* @__PURE__ */ h(Jr, { t: e, form: t, attribute: n, renderer: i, children: /* @__PURE__ */ h(
  X3,
  {
    t: e,
    form: t,
    "aria-label": Oo(e, n),
    name: Yn(n.name),
    addButtonLabel: e("addMultivaluedLabel", {
      fieldLabel: Oo(e, n)
    }),
    ...r
  }
) }), X3 = ({
  t: e,
  name: t,
  inputType: n,
  form: i,
  addButtonLabel: r,
  isDisabled: a = !1,
  defaultValue: s,
  id: l,
  ...c
}) => {
  const { register: d, setValue: f, control: u } = i, p = vl({
    name: t,
    control: u,
    defaultValue: s || ""
  }), m = lt(() => Array.isArray(p) && p.length !== 0 ? p : s || [""], [p]), g = (S) => {
    w([...m.slice(0, S), ...m.slice(S + 1)]);
  }, v = () => {
    w([...m, ""]);
  }, x = (S, I) => {
    w([...m.slice(0, S), I, ...m.slice(S + 1)]);
  }, w = (S) => {
    const I = S.flatMap((E) => E);
    f(t, I, {
      shouldDirty: !0
    });
  }, _ = n.startsWith("html") ? n.substring(6) : "text";
  return Nt(() => {
    d(t);
  }, [d]), /* @__PURE__ */ h("div", { id: l, children: m.map((S, I) => /* @__PURE__ */ Z(Io, { children: [
    /* @__PURE__ */ Z(Hn, { children: [
      /* @__PURE__ */ h(xt, { isFill: !0, children: /* @__PURE__ */ h(
        $t,
        {
          "data-testid": t + I,
          onChange: (E, R) => x(I, R),
          name: `${t}.${I}.value`,
          value: S,
          isDisabled: a,
          type: _,
          ...c
        }
      ) }),
      /* @__PURE__ */ h(xt, { children: /* @__PURE__ */ h(
        ce,
        {
          "data-testid": "remove" + I,
          variant: Me.link,
          onClick: () => g(I),
          tabIndex: -1,
          "aria-label": e("remove"),
          isDisabled: m.length === 1 || a,
          children: /* @__PURE__ */ h(n1, {})
        }
      ) })
    ] }),
    I === m.length - 1 && /* @__PURE__ */ Z(
      ce,
      {
        variant: Me.link,
        onClick: v,
        tabIndex: -1,
        "aria-label": e("add"),
        "data-testid": "addValue",
        isDisabled: !S || a,
        children: [
          /* @__PURE__ */ h(d1, {}),
          " ",
          e(r || "add")
        ]
      }
    )
  ] }, I)) });
}, ud = (e) => {
  const { form: t, inputType: n, attribute: i } = e, r = fs(i), a = n.startsWith("multiselect"), s = a ? Ht : fi, l = i.validators?.options?.options || [], c = i.annotations?.inputOptionLabels || {}, d = i.annotations?.inputOptionLabelsI18nPrefix;
  return /* @__PURE__ */ h(Jr, { ...e, children: /* @__PURE__ */ h(
    ts,
    {
      name: Yn(i.name),
      control: t.control,
      defaultValue: "",
      render: ({ field: f }) => /* @__PURE__ */ h(wt, { children: l.map((u) => /* @__PURE__ */ h(
        s,
        {
          id: u,
          "data-testid": u,
          label: zt(e.t, c[u], u, d),
          value: u,
          isChecked: f.value.includes(u),
          onChange: () => {
            a ? f.value.includes(u) ? f.onChange(
              f.value.filter((p) => p !== u)
            ) : f.onChange([...f.value, u]) : f.onChange([u]);
          },
          readOnly: i.readOnly,
          isRequired: r
        },
        u
      )) })
    }
  ) });
}, q3 = ({
  toggleId: e,
  onToggle: t,
  onSelect: n,
  selections: i,
  isOpen: r,
  menuAppendTo: a,
  direction: s,
  width: l,
  maxHeight: c,
  toggleIcon: d,
  className: f,
  isDisabled: u,
  children: p,
  ...m
}) => {
  const [g, v] = me(!1), x = en(), w = () => {
    v(!g), t(!g);
  }, _ = () => a === "parent" && x.current?.parentElement || "inline", S = Vd.toArray(
    p
  );
  return /* @__PURE__ */ h(
    Kn,
    {
      ref: x,
      maxMenuHeight: Ra(c),
      isScrollable: !0,
      popperProps: {
        appendTo: _(),
        direction: s,
        width: Ra(l)
      },
      ...m,
      onClick: w,
      onOpenChange: (I) => {
        I !== g && w();
      },
      selected: i,
      onSelect: (I, E) => {
        n?.(E || ""), w();
      },
      toggle: (I) => /* @__PURE__ */ h(
        yt,
        {
          id: e,
          ref: I,
          className: f,
          onClick: w,
          isExpanded: r,
          "aria-label": m["aria-label"],
          icon: d,
          isDisabled: u,
          isFullWidth: !0,
          children: S.find((E) => E.props.value === i)?.props.children || i || m["aria-label"]
        }
      ),
      isOpen: r,
      children: /* @__PURE__ */ h(Xi, { children: p })
    }
  );
}, J3 = ({
  toggleId: e,
  onSelect: t,
  onToggle: n,
  onFilter: i,
  variant: r,
  validated: a,
  placeholderText: s,
  maxHeight: l,
  width: c,
  toggleIcon: d,
  direction: f,
  selections: u,
  typeAheadAriaLabel: p,
  chipGroupComponent: m,
  chipGroupProps: g,
  footer: v,
  isDisabled: x,
  children: w,
  ..._
}) => {
  const [S, I] = me(""), [E, R] = me(0), k = en(), N = Vd.toArray(
    w
  ), M = () => {
    n?.(!_.isOpen);
  }, $ = (D) => {
    const O = N[E];
    switch (n?.(!0), D.key) {
      case "Enter": {
        D.preventDefault(), r !== $n.typeaheadMulti ? I(O.props.value) : I(""), t?.(O.props.value), n?.(!1), R(0);
        break;
      }
      case "Escape": {
        n?.(!1);
        break;
      }
      case "Backspace": {
        r === $n.typeahead && t?.("");
        break;
      }
      case "ArrowUp":
      case "ArrowDown": {
        D.preventDefault();
        let L = 0;
        D.key === "ArrowUp" && (E === 0 ? L = N.length - 1 : L = E - 1), D.key === "ArrowDown" && (E === N.length - 1 ? L = 0 : L = E + 1), R(L);
        break;
      }
    }
  };
  return /* @__PURE__ */ Z(
    Kn,
    {
      ..._,
      onClick: M,
      onOpenChange: (D) => n?.(D),
      onSelect: (D, O) => t?.(O || ""),
      maxMenuHeight: Ra(l),
      popperProps: { direction: f, width: Ra(c) },
      toggle: (D) => /* @__PURE__ */ h(
        yt,
        {
          ref: D,
          id: e,
          variant: "typeahead",
          onClick: () => n?.(!0),
          icon: d,
          isDisabled: x,
          isExpanded: _.isOpen,
          isFullWidth: !0,
          status: a === "error" ? Vn.danger : void 0,
          children: /* @__PURE__ */ Z(za, { isPlain: !0, children: [
            /* @__PURE__ */ h(
              Wa,
              {
                placeholder: s,
                value: r === $n.typeahead && u ? u : S,
                onClick: M,
                onChange: (O, L) => {
                  I(L), i?.(L);
                },
                onKeyDown: (O) => $(O),
                autoComplete: "off",
                innerRef: k,
                role: "combobox",
                isExpanded: _.isOpen,
                "aria-controls": "select-typeahead-listbox",
                "aria-label": p,
                children: r === $n.typeaheadMulti && Array.isArray(u) && (m || /* @__PURE__ */ h(qn, { ...g, children: u.map((O, L) => /* @__PURE__ */ h(
                  Ut,
                  {
                    onClick: (j) => {
                      j.stopPropagation(), t?.(O);
                    },
                    children: O
                  },
                  L
                )) }))
              }
            ),
            /* @__PURE__ */ h(Ga, { children: !!S && /* @__PURE__ */ h(
              ce,
              {
                variant: "plain",
                onClick: () => {
                  t?.(""), I(""), i?.(""), k?.current?.focus();
                },
                "aria-label": "Clear input value",
                children: /* @__PURE__ */ h(an, { "aria-hidden": !0 })
              }
            ) })
          ] })
        }
      ),
      children: [
        /* @__PURE__ */ h(Xi, { children: w }),
        v && /* @__PURE__ */ h(Tf, { children: v })
      ]
    }
  );
};
var $n = /* @__PURE__ */ ((e) => (e.single = "single", e.typeahead = "typeahead", e.typeaheadMulti = "typeaheadMulti", e))($n || {});
const Ra = (e) => typeof e == "number" ? e + "px" : e, Y3 = ({
  variant: e = "single",
  ...t
}) => e === "single" ? /* @__PURE__ */ h(q3, { ...t }) : /* @__PURE__ */ h(J3, { ...t, variant: e }), pd = (e) => {
  const { t, form: n, inputType: i, attribute: r } = e, [a, s] = me(!1), [l, c] = me(""), d = i === "multiselect", f = (x, w) => {
    d ? w.value.includes(x) ? w.onChange(w.value.filter((_) => _ !== x)) : Array.isArray(w.value) ? w.onChange([...w.value, x]) : w.onChange([x]) : w.onChange(x === w.value ? "" : x);
  }, u = r.validators?.options?.options || [], p = r.annotations?.inputOptionLabels || {}, m = r.annotations?.inputOptionLabelsI18nPrefix, g = (x) => zt(e.t, p[x], x, m), v = (x) => u.filter(
    (w) => g(w).toLowerCase().includes(l.toLowerCase())
  ).map((w) => /* @__PURE__ */ h(
    Wr,
    {
      selected: x === w,
      value: w,
      children: g(w)
    },
    w
  ));
  return /* @__PURE__ */ h(Jr, { ...e, children: /* @__PURE__ */ h(
    ts,
    {
      name: Yn(r.name),
      defaultValue: "",
      control: n.control,
      render: ({ field: x }) => /* @__PURE__ */ h(
        Y3,
        {
          toggleId: r.name,
          onToggle: (w) => s(w),
          onClear: () => f("", x),
          onSelect: (w) => {
            const _ = w.toString();
            f(_, x), Array.isArray(x.value) || s(!1);
          },
          selections: d && Array.isArray(x.value) ? x.value : g(x.value),
          variant: d ? $n.typeaheadMulti : u.length >= 10 ? $n.typeahead : $n.single,
          "aria-label": t("selectOne"),
          isOpen: a,
          isDisabled: r.readOnly,
          onFilter: (w) => (c(w), v(x.value)),
          children: v(x.value)
        }
      )
    }
  ) });
}, Z3 = (e) => {
  const { form: t, attribute: n } = e, i = fs(n);
  return /* @__PURE__ */ h(Jr, { ...e, children: /* @__PURE__ */ h(
    I3,
    {
      id: n.name,
      "data-testid": n.name,
      ...t.register(Yn(n.name)),
      cols: n.annotations?.inputTypeCols,
      rows: n.annotations?.inputTypeRows,
      readOnly: n.readOnly,
      isRequired: i
    }
  ) });
}, qt = (e) => {
  const { form: t, inputType: n, attribute: i } = e, r = fs(i), a = n.startsWith("html") ? n.substring(6) : "text";
  return /* @__PURE__ */ h(Jr, { ...e, children: /* @__PURE__ */ h(
    $t,
    {
      id: i.name,
      "data-testid": i.name,
      type: a,
      placeholder: zt(
        e.t,
        i.annotations?.inputTypePlaceholder,
        i.name,
        i.annotations?.inputOptionLabelsI18nPrefix
      ),
      readOnly: i.readOnly,
      isRequired: r,
      ...t.register(Yn(i.name))
    }
  ) });
}, Co = {
  text: qt,
  textarea: Z3,
  select: pd,
  "select-radiobuttons": ud,
  multiselect: pd,
  "multiselect-checkboxes": ud,
  "html5-email": qt,
  "html5-tel": qt,
  "html5-url": qt,
  "html5-number": qt,
  "html5-range": qt,
  "html5-datetime-local": qt,
  "html5-date": qt,
  "html5-month": qt,
  "html5-time": qt,
  "multi-input": K3
}, Q3 = ({
  t: e,
  form: t,
  userProfileMetadata: n,
  supportedLocales: i,
  currentLocale: r,
  hideReadOnly: a = !1,
  renderer: s
}) => {
  const l = lt(() => {
    if (!n.attributes)
      return [];
    const c = a ? n.attributes.filter(({ readOnly: d }) => !d) : n.attributes;
    return [
      // Insert an empty group for attributes without a group.
      { name: void 0 },
      ...n.groups ?? []
    ].map((d) => ({
      group: d,
      attributes: c.filter(
        (f) => f.group === d.name
      )
    }));
  }, [
    a,
    n.groups,
    n.attributes
  ]);
  return l.length === 0 ? null : /* @__PURE__ */ h(
    B3,
    {
      label: e("jumpToSection"),
      sections: l.filter((c) => c.attributes.length > 0).map(({ group: c, attributes: d }) => ({
        title: zt(e, c.displayHeader, c.name) || e("general"),
        panel: /* @__PURE__ */ Z("div", { className: "pf-v5-c-form", children: [
          c.displayDescription && /* @__PURE__ */ h(En, { className: "pf-v5-u-pb-lg", children: zt(e, c.displayDescription, "") }),
          d.map((f) => /* @__PURE__ */ h(
            e_,
            {
              t: e,
              form: t,
              supportedLocales: i,
              currentLocale: r,
              renderer: s,
              attribute: f
            },
            f.name
          ))
        ] })
      }))
    }
  );
}, e_ = ({
  t: e,
  form: t,
  renderer: n,
  supportedLocales: i,
  currentLocale: r,
  attribute: a
}) => {
  const s = t.watch(
    Yn(a.name)
  ), l = lt(() => n_(a), [a]), c = a.multivalued || r_(s) && a.annotations?.inputType === void 0 ? Co["multi-input"] : Co[l];
  return a.name === "locale" ? /* @__PURE__ */ h(
    V3,
    {
      form: t,
      supportedLocales: i,
      currentLocale: r,
      t: e,
      attribute: a
    }
  ) : /* @__PURE__ */ h(
    c,
    {
      t: e,
      form: t,
      inputType: l,
      attribute: a,
      renderer: n
    }
  );
}, t_ = "text";
function n_(e) {
  if (Yp(e.name))
    return "text";
  const t = e.annotations?.inputType;
  return i_(t) ? t : t_;
}
const i_ = (e) => typeof e == "string" && e in Co, r_ = (e) => Array.isArray(e) && e.length > 1, a_ = ({
  className: e = "",
  border: t,
  size: n = "md"
}) => /* @__PURE__ */ Z(
  "svg",
  {
    className: y(
      Dn.avatar,
      Dn.modifiers[n],
      t === "light" && Dn.modifiers.light,
      t === "dark" && Dn.modifiers.dark,
      e
    ),
    enableBackground: "new 0 0 36 36",
    version: "1.1",
    viewBox: "0 0 36 36",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ h(
        "circle",
        {
          style: { fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" },
          cx: "18",
          cy: "18.5",
          r: "18"
        }
      ),
      /* @__PURE__ */ h("defs", { children: /* @__PURE__ */ h(
        "filter",
        {
          id: "b",
          x: "5.2",
          y: "7.2",
          width: "25.6",
          height: "53.6",
          filterUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ h("feColorMatrix", { values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" })
        }
      ) }),
      /* @__PURE__ */ h(
        "mask",
        {
          id: "a",
          x: "5.2",
          y: "7.2",
          width: "25.6",
          height: "53.6",
          maskUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ h("g", { style: { filter: 'url("#b")' }, children: /* @__PURE__ */ h(
            "circle",
            {
              style: { fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" },
              cx: "18",
              cy: "18.5",
              r: "18"
            }
          ) })
        }
      ),
      /* @__PURE__ */ h("g", { style: { filter: 'url("#a")' }, children: /* @__PURE__ */ Z("g", { transform: "translate(5.04 6.88)", children: [
        /* @__PURE__ */ h(
          "path",
          {
            style: {
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "#BBBBBB"
            },
            d: "m22.6 18.1c-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-0.6-6.3-0.6-6.1 0.7-6.1 0.7 0 0 0 0c-1.2 0.4-2.4 1.2-3.4 2.6-2.3 2.8-3.2 12.3-3.2 14.8 0 3.2 0.4 12.3 0.6 15.4 0 0-0.4 5.5 4 5.5l-0.3-6.3-0.4-3.5 0.2-0.9c0.9 0.4 3.6 1.2 8.6 1.2 5.3 0 8-0.9 8.8-1.3l0.2 1-0.2 3.6-0.3 6.3c3 0.1 3.7-3 3.8-4.4s0.6-12.6 0.6-16.5c0.1-2.6-0.8-12.1-3.1-15z"
          }
        ),
        /* @__PURE__ */ h(
          "path",
          {
            style: {
              opacity: 0.1,
              fillRule: "evenodd",
              clipRule: "evenodd"
            },
            d: "m22.5 26c-0.1-2.1-1.5-2.8-4.8-2.8l2.2 9.6s1.8-1.7 3-1.8c0 0-0.4-4.6-0.4-5z"
          }
        ),
        /* @__PURE__ */ h(
          "path",
          {
            style: {
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "#BBBBBB"
            },
            d: "m12.7 13.2c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z"
          }
        ),
        /* @__PURE__ */ h(
          "path",
          {
            style: {
              opacity: 0.08,
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "#231F20"
            },
            d: "m9.4 6.8c0-3 2.1-5.5 4.9-6.3-0.5-0.1-1-0.2-1.6-0.2-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4c0.6 0 1.1-0.1 1.6-0.2-2.8-0.6-4.9-3.1-4.9-6.1z"
          }
        ),
        /* @__PURE__ */ h(
          "path",
          {
            style: {
              opacity: 0.1,
              fillRule: "evenodd",
              clipRule: "evenodd"
            },
            d: "m8.3 22.4c-2 0.4-2.9 1.4-3.1 3.5l-0.6 18.6s1.7 0.7 3.6 0.9l0.1-23z"
          }
        )
      ] }) })
    ]
  }
), md = ({
  isKebab: e = !1,
  title: t,
  dropDownItems: n,
  ...i
}) => {
  const [r, a] = me(!1);
  return /* @__PURE__ */ h(
    pi,
    {
      ...i,
      popperProps: {
        position: "right"
      },
      onOpenChange: (s) => a(s),
      toggle: (s) => /* @__PURE__ */ h(
        yt,
        {
          "data-testid": `${i["data-testid"]}-toggle`,
          ref: s,
          onClick: () => a(!r),
          isExpanded: r,
          variant: e ? "plain" : "default",
          children: e ? /* @__PURE__ */ h(Tr, {}) : t
        }
      ),
      isOpen: r,
      children: /* @__PURE__ */ h(Lr, { children: n })
    }
  );
};
function s_(e, t) {
  if (!e)
    return t("unknownUser");
  const n = e.given_name, i = e.family_name, r = e.preferred_username;
  return n && i ? t("fullName", { givenName: n, familyName: i }) : n || i || r || t("unknownUser");
}
const o_ = ({
  keycloak: e,
  brand: { src: t, alt: n, className: i, ...r },
  avatar: a,
  features: {
    hasLogout: s = !0,
    hasManageAccount: l = !0,
    hasUsername: c = !0
  } = {},
  kebabDropdownItems: d,
  dropdownItems: f = [],
  toolbarItems: u,
  ...p
}) => {
  const { t: m } = je(), g = [];
  l && g.push(
    /* @__PURE__ */ h(
      _n,
      {
        onClick: () => e.accountManagement(),
        children: m("manageAccount")
      },
      "manageAccount"
    )
  ), s && g.push(
    /* @__PURE__ */ h(_n, { onClick: () => e.logout(), children: m("signOut") }, "signOut")
  );
  const v = e.idTokenParsed?.picture;
  return /* @__PURE__ */ Z(bu, { ...p, children: [
    /* @__PURE__ */ h(xu, { children: /* @__PURE__ */ h(ku, { variant: "plain", "aria-label": m("navigation"), children: /* @__PURE__ */ h(xv, {}) }) }),
    /* @__PURE__ */ h(vu, { ...r, children: /* @__PURE__ */ h("img", { src: t, alt: n, className: i }) }),
    /* @__PURE__ */ h(yu, { children: /* @__PURE__ */ h(mi, { children: /* @__PURE__ */ Z(Jn, { children: [
      u?.map((x, w) => /* @__PURE__ */ h(Ft, { align: { default: "alignRight" }, children: x }, w)),
      /* @__PURE__ */ h(
        Ft,
        {
          visibility: {
            default: "hidden",
            md: "visible"
          },
          children: /* @__PURE__ */ h(
            md,
            {
              "data-testid": "options",
              dropDownItems: [...f, g],
              title: c ? s_(e.idTokenParsed, m) : void 0
            }
          )
        }
      ),
      /* @__PURE__ */ h(
        Ft,
        {
          align: { default: "alignLeft" },
          visibility: {
            md: "hidden"
          },
          children: /* @__PURE__ */ h(
            md,
            {
              "data-testid": "options-kebab",
              isKebab: !0,
              dropDownItems: [
                ...d || f,
                g
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ h(
        Ft,
        {
          variant: "overflow-menu",
          align: { default: "alignRight" },
          className: "pf-v5-u-m-0-on-lg",
          children: v || a?.src ? /* @__PURE__ */ h(If, { src: v, alt: m("avatar"), ...a }) : /* @__PURE__ */ h(a_, { ...a })
        }
      )
    ] }) }) })
  ] });
};
Al("ErrorBoundaryContext", void 0);
window.matchMedia("(prefers-color-scheme: dark)");
const Us = "/";
function Sn(...e) {
  return e.map((n, i) => {
    const r = i === 0, a = i === e.length - 1;
    return !r && n.startsWith(Us) && (n = n.slice(1)), !a && n.endsWith(Us) && (n = n.slice(0, -1)), n;
  }, []).join(Us);
}
const Zp = "content-type", Qp = "application/json";
class em extends Error {
  description;
  constructor(t, n) {
    super(t), this.description = n;
  }
}
async function Pt(e) {
  const t = e.headers.get(Zp);
  if (!(t ? t.includes(Qp) : !1))
    throw new Error(
      `Expected response to have a JSON content type, got '${t}' instead.`
    );
  const i = await l_(e);
  if (!e.ok) {
    const r = zp(i), a = Up(i);
    throw r ? new em(r, a) : new Error(
      "Unable to retrieve error message from response, no matching key found."
    );
  }
  return i;
}
async function l_(e) {
  try {
    return await e.json();
  } catch (t) {
    throw new Error("Unable to parse response as valid JSON.", {
      cause: t
    });
  }
}
async function c_(e, { signal: t, getAccessToken: n, method: i, searchParams: r, body: a } = {}) {
  return r && Object.entries(r).forEach(
    ([s, l]) => e.searchParams.set(s, l)
  ), fetch(e, {
    signal: t,
    method: i,
    body: a ? JSON.stringify(a) : void 0,
    headers: {
      [Zp]: Qp,
      authorization: `Bearer ${await n?.()}`
    }
  });
}
async function Qe(e, { environment: t, keycloak: n }, i = {}, r) {
  return typeof r > "u" && (r = d_(t, e)), c_(r, {
    ...i,
    getAccessToken: f_(n)
  });
}
const d_ = (e, t) => new URL(
  Sn(
    e.serverBaseUrl,
    "realms",
    e.realm,
    "account",
    t
  )
), f_ = (e) => async function() {
  try {
    await e.updateToken(5);
  } catch {
    await e.login();
  }
  return e.token;
};
async function u_({
  signal: e,
  context: t
}) {
  const n = await Qe("/?userProfileMetadata=true", t, {
    signal: e
  });
  return Pt(n);
}
async function p_({
  signal: e,
  context: t
}) {
  const n = await Qe("/supportedLocales", t, { signal: e });
  return Pt(n);
}
async function m_(e, t) {
  const n = await Qe("/", e, { body: t, method: "POST" });
  if (!n.ok) {
    const { errors: i } = await n.json();
    throw i;
  }
}
async function h_(e, { signal: t, context: n }) {
  const i = await Qe(
    `/resources/${e}/permissions/requests`,
    n,
    { signal: t }
  );
  return Pt(i);
}
async function g_({
  signal: e,
  context: t
}) {
  const n = await Qe("/sessions/devices", t, { signal: e });
  return Pt(n);
}
async function b_({
  signal: e,
  context: t
}) {
  const n = await Qe("/applications", t, { signal: e });
  return Pt(n);
}
async function v_(e, t) {
  return Qe(`/applications/${t}/consent`, e, { method: "DELETE" });
}
async function hd(e, t) {
  return Qe(`/sessions${t ? `/${t}` : ""}`, e, {
    method: "DELETE"
  });
}
async function y_({ signal: e, context: t }) {
  const n = await Qe("/credentials", t, {
    signal: e
  });
  return Pt(n);
}
async function gd({ signal: e, context: t }, n) {
  const i = await Qe("/linked-accounts", t, {
    searchParams: Object.entries(n).reduce(
      (r, [a, s]) => ({ ...r, [a]: s.toString() }),
      {}
    ),
    signal: e
  });
  return Pt(i);
}
async function x_(e, t) {
  const n = await Qe(
    "/linked-accounts/" + t.providerName,
    e,
    {
      method: "DELETE"
    }
  );
  if (!n.ok)
    return Pt(n);
}
async function w_(e, t) {
  const n = encodeURIComponent(
    Sn(
      e.environment.serverBaseUrl,
      "realms",
      e.environment.realm,
      "account"
    )
  ), i = await Qe(
    "/linked-accounts/" + t.providerName,
    e,
    {
      searchParams: { providerId: t.providerName, redirectUri: n }
    }
  );
  return Pt(i);
}
async function O_({ signal: e, context: t }) {
  const n = await Qe("/groups", t, {
    signal: e
  });
  return Pt(n);
}
const Zn = ({
  title: e,
  description: t,
  children: n
}) => /* @__PURE__ */ Z(wt, { children: [
  /* @__PURE__ */ h(Hi, { variant: "light", children: /* @__PURE__ */ Z(qa, { children: [
    /* @__PURE__ */ h(Cn, { headingLevel: "h1", "data-testid": "page-heading", children: e }),
    /* @__PURE__ */ h(En, { component: "p", children: t })
  ] }) }),
  /* @__PURE__ */ h(Hi, { variant: "light", children: n })
] }), C_ = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class Aa {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || C_, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, i, r) {
    return r && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Aa(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Aa(this.logger, t);
  }
}
var Qt = new Aa();
class us {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const r = this.observers[i].get(n) || 0;
      this.observers[i].set(n, r + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      i[r - 1] = arguments[r];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [l, c] = s;
      for (let d = 0; d < c; d++)
        l(...i);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [l, c] = s;
      for (let d = 0; d < c; d++)
        l.apply(l, [t, ...i]);
    });
  }
}
const fr = () => {
  let e, t;
  const n = new Promise((i, r) => {
    e = i, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}, bd = (e) => e == null ? "" : "" + e, __ = (e, t, n) => {
  e.forEach((i) => {
    t[i] && (n[i] = t[i]);
  });
}, E_ = /###/g, vd = (e) => e && e.indexOf("###") > -1 ? e.replace(E_, ".") : e, yd = (e) => !e || typeof e == "string", xr = (e, t, n) => {
  const i = typeof t != "string" ? t : t.split(".");
  let r = 0;
  for (; r < i.length - 1; ) {
    if (yd(e)) return {};
    const a = vd(i[r]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++r;
  }
  return yd(e) ? {} : {
    obj: e,
    k: vd(i[r])
  };
}, xd = (e, t, n) => {
  const {
    obj: i,
    k: r
  } = xr(e, t, Object);
  if (i !== void 0 || t.length === 1) {
    i[r] = n;
    return;
  }
  let a = t[t.length - 1], s = t.slice(0, t.length - 1), l = xr(e, s, Object);
  for (; l.obj === void 0 && s.length; )
    a = `${s[s.length - 1]}.${a}`, s = s.slice(0, s.length - 1), l = xr(e, s, Object), l && l.obj && typeof l.obj[`${l.k}.${a}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${a}`] = n;
}, S_ = (e, t, n, i) => {
  const {
    obj: r,
    k: a
  } = xr(e, t, Object);
  r[a] = r[a] || [], r[a].push(n);
}, Pa = (e, t) => {
  const {
    obj: n,
    k: i
  } = xr(e, t);
  if (n)
    return n[i];
}, k_ = (e, t, n) => {
  const i = Pa(e, n);
  return i !== void 0 ? i : Pa(t, n);
}, tm = (e, t, n) => {
  for (const i in t)
    i !== "__proto__" && i !== "constructor" && (i in e ? typeof e[i] == "string" || e[i] instanceof String || typeof t[i] == "string" || t[i] instanceof String ? n && (e[i] = t[i]) : tm(e[i], t[i], n) : e[i] = t[i]);
  return e;
}, Oi = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var L_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const I_ = (e) => typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => L_[t]) : e;
class N_ {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const i = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, i), this.regExpQueue.push(t), i;
  }
}
const T_ = [" ", ",", "?", "!", ";"], R_ = new N_(20), A_ = (e, t, n) => {
  t = t || "", n = n || "";
  const i = T_.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (i.length === 0) return !0;
  const r = R_.getRegExp(`(${i.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let a = !r.test(e);
  if (!a) {
    const s = e.indexOf(n);
    s > 0 && !r.test(e.substring(0, s)) && (a = !0);
  }
  return a;
}, _o = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const i = t.split(n);
  let r = e;
  for (let a = 0; a < i.length; ) {
    if (!r || typeof r != "object")
      return;
    let s, l = "";
    for (let c = a; c < i.length; ++c)
      if (c !== a && (l += n), l += i[c], s = r[l], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && c < i.length - 1)
          continue;
        a += c - a + 1;
        break;
      }
    r = s;
  }
  return r;
}, Ma = (e) => e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
class wd extends us {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, s = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    t.indexOf(".") > -1 ? l = t.split(".") : (l = [t, n], i && (Array.isArray(i) ? l.push(...i) : typeof i == "string" && a ? l.push(...i.split(a)) : l.push(i)));
    const c = Pa(this.data, l);
    return !c && !n && !i && t.indexOf(".") > -1 && (t = l[0], n = l[1], i = l.slice(2).join(".")), c || !s || typeof i != "string" ? c : _o(this.data && this.data[t] && this.data[t][n], i, a);
  }
  addResource(t, n, i, r) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [t, n];
    i && (l = l.concat(s ? i.split(s) : i)), t.indexOf(".") > -1 && (l = t.split("."), r = n, n = l[1]), this.addNamespaces(n), xd(this.data, l, r), a.silent || this.emit("added", t, n, i, r);
  }
  addResources(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const a in i)
      (typeof i[a] == "string" || Array.isArray(i[a])) && this.addResource(t, n, a, i[a], {
        silent: !0
      });
    r.silent || this.emit("added", t, n, i);
  }
  addResourceBundle(t, n, i, r, a) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [t, n];
    t.indexOf(".") > -1 && (l = t.split("."), r = i, i = n, n = l[1]), this.addNamespaces(n);
    let c = Pa(this.data, l) || {};
    s.skipCopy || (i = JSON.parse(JSON.stringify(i))), r ? tm(c, i, a) : c = {
      ...c,
      ...i
    }, xd(this.data, l, c), s.silent || this.emit("added", t, n, i);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((r) => n[r] && Object.keys(n[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var nm = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, i, r) {
    return e.forEach((a) => {
      this.processors[a] && (t = this.processors[a].process(t, n, i, r));
    }), t;
  }
};
const Od = {};
class Da extends us {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), __(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Qt.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const i = this.resolve(t, n);
    return i && i.res !== void 0;
  }
  extractFromKey(t, n) {
    let i = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = n.ns || this.options.defaultNS || [];
    const s = i && t.indexOf(i) > -1, l = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !A_(t, i, r);
    if (s && !l) {
      const c = t.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: t,
          namespaces: a
        };
      const d = t.split(i);
      (i !== r || i === r && this.options.ns.indexOf(d[0]) > -1) && (a = d.shift()), t = d.join(r);
    }
    return typeof a == "string" && (a = [a]), {
      key: t,
      namespaces: a
    };
  }
  translate(t, n, i) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const r = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], n), c = l[l.length - 1], d = n.lng || this.language, f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (d && d.toLowerCase() === "cimode") {
      if (f) {
        const I = n.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${c}${I}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: d,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(n)
        } : `${c}${I}${s}`;
      }
      return r ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const u = this.resolve(t, n);
    let p = u && u.res;
    const m = u && u.usedKey || s, g = u && u.exactUsedKey || s, v = Object.prototype.toString.apply(p), x = ["[object Number]", "[object Function]", "[object RegExp]"], w = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (_ && p && (typeof p != "string" && typeof p != "boolean" && typeof p != "number") && x.indexOf(v) < 0 && !(typeof w == "string" && Array.isArray(p))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const I = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, p, {
          ...n,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return r ? (u.res = I, u.usedParams = this.getUsedParamsDetails(n), u) : I;
      }
      if (a) {
        const I = Array.isArray(p), E = I ? [] : {}, R = I ? g : m;
        for (const k in p)
          if (Object.prototype.hasOwnProperty.call(p, k)) {
            const N = `${R}${a}${k}`;
            E[k] = this.translate(N, {
              ...n,
              joinArrays: !1,
              ns: l
            }), E[k] === N && (E[k] = p[k]);
          }
        p = E;
      }
    } else if (_ && typeof w == "string" && Array.isArray(p))
      p = p.join(w), p && (p = this.extendTranslation(p, t, n, i));
    else {
      let I = !1, E = !1;
      const R = n.count !== void 0 && typeof n.count != "string", k = Da.hasDefaultValue(n), N = R ? this.pluralResolver.getSuffix(d, n.count, n) : "", M = n.ordinal && R ? this.pluralResolver.getSuffix(d, n.count, {
        ordinal: !1
      }) : "", $ = R && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), D = $ && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${N}`] || n[`defaultValue${M}`] || n.defaultValue;
      !this.isValidLookup(p) && k && (I = !0, p = D), this.isValidLookup(p) || (E = !0, p = s);
      const L = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : p, j = k && D !== p && this.options.updateMissing;
      if (E || I || j) {
        if (this.logger.log(j ? "updateKey" : "missingKey", d, c, s, j ? D : p), a) {
          const B = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let C = [];
        const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && P && P[0])
          for (let B = 0; B < P.length; B++)
            C.push(P[B]);
        else this.options.saveMissingTo === "all" ? C = this.languageUtils.toResolveHierarchy(n.lng || this.language) : C.push(n.lng || this.language);
        const G = (B, J, b) => {
          const F = k && b !== p ? b : L;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(B, c, J, F, j, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(B, c, J, F, j, n), this.emit("missingKey", B, c, J, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && R ? C.forEach((B) => {
          const J = this.pluralResolver.getSuffixes(B, n);
          $ && n[`defaultValue${this.options.pluralSeparator}zero`] && J.indexOf(`${this.options.pluralSeparator}zero`) < 0 && J.push(`${this.options.pluralSeparator}zero`), J.forEach((b) => {
            G([B], s + b, n[`defaultValue${b}`] || D);
          });
        }) : G(C, s, D));
      }
      p = this.extendTranslation(p, t, n, u, i), E && p === s && this.options.appendNamespaceToMissingKey && (p = `${c}:${s}`), (E || I) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, I ? p : void 0) : p = this.options.parseMissingKeyHandler(p));
    }
    return r ? (u.res = p, u.usedParams = this.getUsedParamsDetails(n), u) : p;
  }
  extendTranslation(t, n, i, r, a) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const d = typeof t == "string" && (i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (d) {
        const p = t.match(this.interpolator.nestingRegexp);
        f = p && p.length;
      }
      let u = i.replace && typeof i.replace != "string" ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), t = this.interpolator.interpolate(t, u, i.lng || this.language || r.usedLng, i), d) {
        const p = t.match(this.interpolator.nestingRegexp), m = p && p.length;
        f < m && (i.nest = !1);
      }
      !i.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (i.lng = this.language || r.usedLng), i.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var p = arguments.length, m = new Array(p), g = 0; g < p; g++)
          m[g] = arguments[g];
        return a && a[0] === m[0] && !i.context ? (s.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`), null) : s.translate(...m, n);
      }, i)), i.interpolation && this.interpolator.reset();
    }
    const l = i.postProcess || this.options.postProcess, c = typeof l == "string" ? [l] : l;
    return t != null && c && c.length && i.applyPostProcessor !== !1 && (t = nm.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, r, a, s, l;
    return typeof t == "string" && (t = [t]), t.forEach((c) => {
      if (this.isValidLookup(i)) return;
      const d = this.extractFromKey(c, n), f = d.key;
      r = f;
      let u = d.namespaces;
      this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
      const p = n.count !== void 0 && typeof n.count != "string", m = p && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), g = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", v = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      u.forEach((x) => {
        this.isValidLookup(i) || (l = x, !Od[`${v[0]}-${x}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (Od[`${v[0]}-${x}`] = !0, this.logger.warn(`key "${r}" for languages "${v.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((w) => {
          if (this.isValidLookup(i)) return;
          s = w;
          const _ = [f];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, f, w, x, n);
          else {
            let I;
            p && (I = this.pluralResolver.getSuffix(w, n.count, n));
            const E = `${this.options.pluralSeparator}zero`, R = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (_.push(f + I), n.ordinal && I.indexOf(R) === 0 && _.push(f + I.replace(R, this.options.pluralSeparator)), m && _.push(f + E)), g) {
              const k = `${f}${this.options.contextSeparator}${n.context}`;
              _.push(k), p && (_.push(k + I), n.ordinal && I.indexOf(R) === 0 && _.push(k + I.replace(R, this.options.pluralSeparator)), m && _.push(k + E));
            }
          }
          let S;
          for (; S = _.pop(); )
            this.isValidLookup(i) || (a = S, i = this.getResource(w, x, S, n));
        }));
      });
    }), {
      res: i,
      usedKey: r,
      exactUsedKey: a,
      usedLng: s,
      usedNS: l
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, i, r) : this.resourceStore.getResource(t, n, i, r);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = t.replace && typeof t.replace != "string";
    let r = i ? t.replace : t;
    if (i && typeof t.count < "u" && (r.count = t.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !i) {
      r = {
        ...r
      };
      for (const a of n)
        delete r[a];
    }
    return r;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const i in t)
      if (Object.prototype.hasOwnProperty.call(t, i) && n === i.substring(0, n.length) && t[i] !== void 0)
        return !0;
    return !1;
  }
}
const zs = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class Cd {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Qt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Ma(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Ma(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let i = t.split("-");
      return this.options.lowerCaseLng ? i = i.map((r) => r.toLowerCase()) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = zs(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = zs(i[1].toLowerCase())), n.indexOf(i[2].toLowerCase()) > -1 && (i[2] = zs(i[2].toLowerCase()))), i.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((i) => {
      if (n) return;
      const r = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (n = r);
    }), !n && this.options.supportedLngs && t.forEach((i) => {
      if (n) return;
      const r = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(r)) return n = r;
      n = this.options.supportedLngs.find((a) => {
        if (a === r) return a;
        if (!(a.indexOf("-") < 0 && r.indexOf("-") < 0) && (a.indexOf("-") > 0 && r.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === r || a.indexOf(r) === 0 && r.length > 1))
          return a;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let i = t[n];
    return i || (i = t[this.getScriptPartFromCode(n)]), i || (i = t[this.formatLanguageCode(n)]), i || (i = t[this.getLanguagePartFromCode(n)]), i || (i = t.default), i || [];
  }
  toResolveHierarchy(t, n) {
    const i = this.getFallbackCodes(n || this.options.fallbackLng || [], t), r = [], a = (s) => {
      s && (this.isSupportedCode(s) ? r.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(t))) : typeof t == "string" && a(this.formatLanguageCode(t)), i.forEach((s) => {
      r.indexOf(s) < 0 && a(this.formatLanguageCode(s));
    }), r;
  }
}
let P_ = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], M_ = {
  1: (e) => +(e > 1),
  2: (e) => +(e != 1),
  3: (e) => 0,
  4: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  5: (e) => e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5,
  6: (e) => e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2,
  7: (e) => e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  8: (e) => e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3,
  9: (e) => +(e >= 2),
  10: (e) => e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4,
  11: (e) => e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
  12: (e) => +(e % 10 != 1 || e % 100 == 11),
  13: (e) => +(e !== 0),
  14: (e) => e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3,
  15: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  16: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2,
  17: (e) => e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1,
  18: (e) => e == 0 ? 0 : e == 1 ? 1 : 2,
  19: (e) => e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3,
  20: (e) => e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2,
  21: (e) => e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0,
  22: (e) => e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
};
const D_ = ["v1", "v2", "v3"], F_ = ["v4"], _d = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, $_ = () => {
  const e = {};
  return P_.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: M_[t.fc]
      };
    });
  }), e;
};
class B_ {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Qt.create("pluralResolver"), (!this.options.compatibilityJSON || F_.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = $_(), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const i = Ma(t === "dev" ? "en" : t), r = n.ordinal ? "ordinal" : "cardinal", a = JSON.stringify({
          cleanedCode: i,
          type: r
        });
        if (a in this.pluralRulesCache)
          return this.pluralRulesCache[a];
        const s = new Intl.PluralRules(i, {
          type: r
        });
        return this.pluralRulesCache[a] = s, s;
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(t, n);
    return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, i).map((r) => `${n}${r}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(t, n);
    return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort((r, a) => _d[r] - _d[a]).map((r) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : i.numbers.map((r) => this.getSuffix(t, r, n)) : [];
  }
  getSuffix(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(t, i);
    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(n)}` : this.getSuffixRetroCompatible(r, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const i = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let r = t.numbers[i];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (r === 2 ? r = "plural" : r === 1 && (r = ""));
    const a = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
    return this.options.compatibilityJSON === "v1" ? r === 1 ? "" : typeof r == "number" ? `_plural_${r.toString()}` : a() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
  }
  shouldUseIntlApi() {
    return !D_.includes(this.options.compatibilityJSON);
  }
}
const Ed = function(e, t, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = k_(e, t, n);
  return !a && r && typeof n == "string" && (a = _o(e, n, i), a === void 0 && (a = _o(t, n, i))), a;
}, Ws = (e) => e.replace(/\$/g, "$$$$");
class j_ {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Qt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: i,
      useRawValueToEscape: r,
      prefix: a,
      prefixEscaped: s,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: f,
      unescapePrefix: u,
      nestingPrefix: p,
      nestingPrefixEscaped: m,
      nestingSuffix: g,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: x,
      maxReplaces: w,
      alwaysFormat: _
    } = t.interpolation;
    this.escape = n !== void 0 ? n : I_, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = a ? Oi(a) : s || "{{", this.suffix = l ? Oi(l) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = f ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = p ? Oi(p) : m || Oi("$t("), this.nestingSuffix = g ? Oi(g) : v || Oi(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = _ !== void 0 ? _ : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, i) => n && n.source === i ? (n.lastIndex = 0, n) : new RegExp(i, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, i, r) {
    let a, s, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const w = Ed(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, i, {
          ...r,
          ...n,
          interpolationkey: m
        }) : w;
      }
      const g = m.split(this.formatSeparator), v = g.shift().trim(), x = g.join(this.formatSeparator).trim();
      return this.format(Ed(n, c, v, this.options.keySeparator, this.options.ignoreJSONStructure), x, i, {
        ...r,
        ...n,
        interpolationkey: v
      });
    };
    this.resetRegExp();
    const f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, u = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => Ws(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? Ws(this.escape(m)) : Ws(m)
    }].forEach((m) => {
      for (l = 0; a = m.regex.exec(t); ) {
        const g = a[1].trim();
        if (s = d(g), s === void 0)
          if (typeof f == "function") {
            const x = f(t, a, r);
            s = typeof x == "string" ? x : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, g))
            s = "";
          else if (u) {
            s = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = bd(s));
        const v = m.safeValue(s);
        if (t = t.replace(a[0], v), u ? (m.regex.lastIndex += s.length, m.regex.lastIndex -= a[0].length) : m.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, s;
    const l = (c, d) => {
      const f = this.nestingOptionsSeparator;
      if (c.indexOf(f) < 0) return c;
      const u = c.split(new RegExp(`${f}[ ]*{`));
      let p = `{${u[1]}`;
      c = u[0], p = this.interpolate(p, s);
      const m = p.match(/'/g), g = p.match(/"/g);
      (m && m.length % 2 === 0 && !g || g.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        s = JSON.parse(p), d && (s = {
          ...d,
          ...s
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, v), `${c}${f}${p}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, c;
    };
    for (; r = this.nestingRegexp.exec(t); ) {
      let c = [];
      s = {
        ...i
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let d = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const f = r[1].split(this.formatSeparator).map((u) => u.trim());
        r[1] = f.shift(), c = f, d = !0;
      }
      if (a = n(l.call(this, r[1].trim(), s), s), a && r[0] === t && typeof a != "string") return a;
      typeof a != "string" && (a = bd(a)), a || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${t}`), a = ""), d && (a = c.reduce((f, u) => this.format(f, u, i.lng, {
        ...i,
        interpolationkey: r[1].trim()
      }), a.trim())), t = t.replace(r[0], a), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const V_ = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const i = e.split("(");
    t = i[0].toLowerCase().trim();
    const r = i[1].substring(0, i[1].length - 1);
    t === "currency" && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : t === "relativetime" && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach((s) => {
      if (s) {
        const [l, ...c] = s.split(":"), d = c.join(":").trim().replace(/^'+|'+$/g, ""), f = l.trim();
        n[f] || (n[f] = d), d === "false" && (n[f] = !1), d === "true" && (n[f] = !0), isNaN(d) || (n[f] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, Ci = (e) => {
  const t = {};
  return (n, i, r) => {
    let a = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (a = {
      ...a,
      [r.interpolationkey]: void 0
    });
    const s = i + JSON.stringify(a);
    let l = t[s];
    return l || (l = e(Ma(i), r), t[s] = l), l(n);
  };
};
class H_ {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Qt.create("formatter"), this.options = t, this.formats = {
      number: Ci((n, i) => {
        const r = new Intl.NumberFormat(n, {
          ...i
        });
        return (a) => r.format(a);
      }),
      currency: Ci((n, i) => {
        const r = new Intl.NumberFormat(n, {
          ...i,
          style: "currency"
        });
        return (a) => r.format(a);
      }),
      datetime: Ci((n, i) => {
        const r = new Intl.DateTimeFormat(n, {
          ...i
        });
        return (a) => r.format(a);
      }),
      relativetime: Ci((n, i) => {
        const r = new Intl.RelativeTimeFormat(n, {
          ...i
        });
        return (a) => r.format(a, i.range || "day");
      }),
      list: Ci((n, i) => {
        const r = new Intl.ListFormat(n, {
          ...i
        });
        return (a) => r.format(a);
      })
    }, this.init(t);
  }
  init(t) {
    const i = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Ci(n);
  }
  format(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = n.split(this.formatSeparator);
    if (a.length > 1 && a[0].indexOf("(") > 1 && a[0].indexOf(")") < 0 && a.find((l) => l.indexOf(")") > -1)) {
      const l = a.findIndex((c) => c.indexOf(")") > -1);
      a[0] = [a[0], ...a.splice(1, l)].join(this.formatSeparator);
    }
    return a.reduce((l, c) => {
      const {
        formatName: d,
        formatOptions: f
      } = V_(c);
      if (this.formats[d]) {
        let u = l;
        try {
          const p = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, m = p.locale || p.lng || r.locale || r.lng || i;
          u = this.formats[d](l, m, {
            ...f,
            ...r,
            ...p
          });
        } catch (p) {
          this.logger.warn(p);
        }
        return u;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, t);
  }
}
const U_ = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class z_ extends us {
  constructor(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = i, this.languageUtils = i.languageUtils, this.options = r, this.logger = Qt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(i, r.backend, r);
  }
  queueLoad(t, n, i, r) {
    const a = {}, s = {}, l = {}, c = {};
    return t.forEach((d) => {
      let f = !0;
      n.forEach((u) => {
        const p = `${d}|${u}`;
        !i.reload && this.store.hasResourceBundle(d, u) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? s[p] === void 0 && (s[p] = !0) : (this.state[p] = 1, f = !1, s[p] === void 0 && (s[p] = !0), a[p] === void 0 && (a[p] = !0), c[u] === void 0 && (c[u] = !0)));
      }), f || (l[d] = !0);
    }), (Object.keys(a).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(a),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(t, n, i) {
    const r = t.split("|"), a = r[0], s = r[1];
    n && this.emit("failedLoading", a, s, n), !n && i && this.store.addResourceBundle(a, s, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && i && (this.state[t] = 0);
    const l = {};
    this.queue.forEach((c) => {
      S_(c.loaded, [a], s), U_(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const f = c.loaded[d];
        f.length && f.forEach((u) => {
          l[d][u] === void 0 && (l[d][u] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(t, n, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: i,
        tried: r,
        wait: a,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const l = (d, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const u = this.waitingReads.shift();
        this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
      }
      if (d && f && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, i, r + 1, a * 2, s);
        }, a);
        return;
      }
      s(d, f);
    }, c = this.backend[i].bind(this.backend);
    if (c.length === 2) {
      try {
        const d = c(t, n);
        d && typeof d.then == "function" ? d.then((f) => l(null, f)).catch(l) : l(null, d);
      } catch (d) {
        l(d);
      }
      return;
    }
    return c(t, n, l);
  }
  prepareLoading(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const a = this.queueLoad(t, n, i, r);
    if (!a.toLoad.length)
      return a.pending.length || r(), null;
    a.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, i) {
    this.prepareLoading(t, n, {}, i);
  }
  reload(t, n, i) {
    this.prepareLoading(t, n, {
      reload: !0
    }, i);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = t.split("|"), r = i[0], a = i[1];
    this.read(r, a, "read", void 0, void 0, (s, l) => {
      s && this.logger.warn(`${n}loading namespace ${a} for language ${r} failed`, s), !s && l && this.logger.log(`${n}loaded namespace ${a} for language ${r}`, l), this.loaded(t, s, l);
    });
  }
  saveMissing(t, n, i, r, a) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...s,
          isUpdate: a
        }, d = this.backend.create.bind(this.backend);
        if (d.length < 6)
          try {
            let f;
            d.length === 5 ? f = d(t, n, i, r, c) : f = d(t, n, i, r), f && typeof f.then == "function" ? f.then((u) => l(null, u)).catch(l) : l(null, f);
          } catch (f) {
            l(f);
          }
        else
          d(t, n, i, r, l, c);
      }
      !t || !t[0] || this.store.addResource(t[0], n, i, r);
    }
  }
}
const Sd = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((i) => {
        t[i] = n[i];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), kd = (e) => (typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), ra = () => {
}, W_ = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class Mr extends us {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = kd(t), this.services = {}, this.logger = Qt, this.modules = {
      external: []
    }, W_(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (i = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const r = Sd();
    this.options = {
      ...r,
      ...this.options,
      ...kd(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const a = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? Qt.init(a(this.modules.logger), this.options) : Qt.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : typeof Intl < "u" && (f = H_);
      const u = new Cd(this.options);
      this.store = new wd(this.options.resources, this.options);
      const p = this.services;
      p.logger = Qt, p.resourceStore = this.store, p.languageUtils = u, p.pluralResolver = new B_(u, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (p.formatter = a(f), p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new j_(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new z_(a(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", function(m) {
        for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          v[x - 1] = arguments[x];
        t.emit(m, ...v);
      }), this.modules.languageDetector && (p.languageDetector = a(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = a(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Da(this.services, this.options), this.translator.on("*", function(m) {
        for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          v[x - 1] = arguments[x];
        t.emit(m, ...v);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, i || (i = ra), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return t.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return t.store[f](...arguments), t;
      };
    });
    const c = fr(), d = () => {
      const f = (u, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(p), i(u, p);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0), c;
  }
  loadResources(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ra;
    const r = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (i = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (r && r.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const a = [], s = (l) => {
        if (!l || l === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((d) => {
          d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
        });
      };
      r ? s(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => s(c)), this.options.preload && this.options.preload.forEach((l) => s(l)), this.services.backendConnector.load(a, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(l);
      });
    } else
      i(null);
  }
  reloadResources(t, n, i) {
    const r = fr();
    return typeof t == "function" && (i = t, t = void 0), typeof n == "function" && (i = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), i || (i = ra), this.services.backendConnector.reload(t, n, (a) => {
      r.resolve(), i(a);
    }), r;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && nm.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const i = this.languages[n];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var i = this;
    this.isLanguageChangingTo = t;
    const r = fr();
    this.emit("languageChanging", t);
    const a = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, s = (c, d) => {
      d ? (a(d), this.translator.changeLanguage(d), this.isLanguageChangingTo = void 0, this.emit("languageChanged", d), this.logger.log("languageChanged", d)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
        return i.t(...arguments);
      }), n && n(c, function() {
        return i.t(...arguments);
      });
    }, l = (c) => {
      !t && !c && this.services.languageDetector && (c = []);
      const d = typeof c == "string" ? c : this.services.languageUtils.getBestMatchFromCodes(c);
      d && (this.language || a(d), this.translator.language || this.translator.changeLanguage(d), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(d)), this.loadResources(d, (f) => {
        s(f, d);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(t), r;
  }
  getFixedT(t, n, i) {
    var r = this;
    const a = function(s, l) {
      let c;
      if (typeof l != "object") {
        for (var d = arguments.length, f = new Array(d > 2 ? d - 2 : 0), u = 2; u < d; u++)
          f[u - 2] = arguments[u];
        c = r.options.overloadTranslationOptionHandler([s, l].concat(f));
      } else
        c = {
          ...l
        };
      c.lng = c.lng || a.lng, c.lngs = c.lngs || a.lngs, c.ns = c.ns || a.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || i || a.keyPrefix);
      const p = r.options.keySeparator || ".";
      let m;
      return c.keyPrefix && Array.isArray(s) ? m = s.map((g) => `${c.keyPrefix}${p}${g}`) : m = c.keyPrefix ? `${c.keyPrefix}${p}${s}` : s, r.t(m, c);
    };
    return typeof t == "string" ? a.lng = t : a.lngs = t, a.ns = n, a.keyPrefix = i, a;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = n.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const s = (l, c) => {
      const d = this.services.backendConnector.state[`${l}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (n.precheck) {
      const l = n.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(i, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(i, t) && (!r || s(a, t)));
  }
  loadNamespaces(t, n) {
    const i = fr();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      i.resolve(), n && n(r);
    }), i) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const i = fr();
    typeof t == "string" && (t = [t]);
    const r = this.options.preload || [], a = t.filter((s) => r.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return a.length ? (this.options.preload = r.concat(a), this.loadResources((s) => {
      i.resolve(), n && n(s);
    }), i) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = this.services && this.services.languageUtils || new Cd(Sd());
    return n.indexOf(i.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Mr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ra;
    const i = t.forkResourceStore;
    i && delete t.forkResourceStore;
    const r = {
      ...this.options,
      ...t,
      isClone: !0
    }, a = new Mr(r);
    return (t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, i && (a.store = new wd(this.store.data, r), a.services.resourceStore = a.store), a.translator = new Da(a.services, r), a.translator.on("*", function(l) {
      for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
        d[f - 1] = arguments[f];
      a.emit(l, ...d);
    }), a.init(r, n), a.translator.options = r, a.translator.backendConnector.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, a;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ut = Mr.createInstance();
ut.createInstance = Mr.createInstance;
const G_ = ut.createInstance;
ut.dir;
ut.init;
ut.loadResources;
ut.reloadResources;
ut.use;
ut.changeLanguage;
ut.getFixedT;
ut.t;
ut.exists;
ut.setDefaultNamespace;
ut.hasLoadedNamespace;
ut.loadNamespaces;
ut.loadLanguages;
function Eo(e) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e);
}
function im() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Eo(XMLHttpRequest)) === "object";
}
function K_(e) {
  return !!e && typeof e.then == "function";
}
function X_(e) {
  return K_(e) ? e : Promise.resolve(e);
}
function q_(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var So = { exports: {} }, aa = { exports: {} }, Ld;
function J_() {
  return Ld || (Ld = 1, function(e, t) {
    var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof hn < "u" && hn, i = function() {
      function a() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return a.prototype = n, new a();
    }();
    (function(a) {
      (function(s) {
        var l = typeof a < "u" && a || typeof self < "u" && self || typeof l < "u" && l, c = {
          searchParams: "URLSearchParams" in l,
          iterable: "Symbol" in l && "iterator" in Symbol,
          blob: "FileReader" in l && "Blob" in l && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in l,
          arrayBuffer: "ArrayBuffer" in l
        };
        function d(C) {
          return C && DataView.prototype.isPrototypeOf(C);
        }
        if (c.arrayBuffer)
          var f = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], u = ArrayBuffer.isView || function(C) {
            return C && f.indexOf(Object.prototype.toString.call(C)) > -1;
          };
        function p(C) {
          if (typeof C != "string" && (C = String(C)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(C) || C === "")
            throw new TypeError('Invalid character in header field name: "' + C + '"');
          return C.toLowerCase();
        }
        function m(C) {
          return typeof C != "string" && (C = String(C)), C;
        }
        function g(C) {
          var P = {
            next: function() {
              var G = C.shift();
              return { done: G === void 0, value: G };
            }
          };
          return c.iterable && (P[Symbol.iterator] = function() {
            return P;
          }), P;
        }
        function v(C) {
          this.map = {}, C instanceof v ? C.forEach(function(P, G) {
            this.append(G, P);
          }, this) : Array.isArray(C) ? C.forEach(function(P) {
            this.append(P[0], P[1]);
          }, this) : C && Object.getOwnPropertyNames(C).forEach(function(P) {
            this.append(P, C[P]);
          }, this);
        }
        v.prototype.append = function(C, P) {
          C = p(C), P = m(P);
          var G = this.map[C];
          this.map[C] = G ? G + ", " + P : P;
        }, v.prototype.delete = function(C) {
          delete this.map[p(C)];
        }, v.prototype.get = function(C) {
          return C = p(C), this.has(C) ? this.map[C] : null;
        }, v.prototype.has = function(C) {
          return this.map.hasOwnProperty(p(C));
        }, v.prototype.set = function(C, P) {
          this.map[p(C)] = m(P);
        }, v.prototype.forEach = function(C, P) {
          for (var G in this.map)
            this.map.hasOwnProperty(G) && C.call(P, this.map[G], G, this);
        }, v.prototype.keys = function() {
          var C = [];
          return this.forEach(function(P, G) {
            C.push(G);
          }), g(C);
        }, v.prototype.values = function() {
          var C = [];
          return this.forEach(function(P) {
            C.push(P);
          }), g(C);
        }, v.prototype.entries = function() {
          var C = [];
          return this.forEach(function(P, G) {
            C.push([G, P]);
          }), g(C);
        }, c.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
        function x(C) {
          if (C.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          C.bodyUsed = !0;
        }
        function w(C) {
          return new Promise(function(P, G) {
            C.onload = function() {
              P(C.result);
            }, C.onerror = function() {
              G(C.error);
            };
          });
        }
        function _(C) {
          var P = new FileReader(), G = w(P);
          return P.readAsArrayBuffer(C), G;
        }
        function S(C) {
          var P = new FileReader(), G = w(P);
          return P.readAsText(C), G;
        }
        function I(C) {
          for (var P = new Uint8Array(C), G = new Array(P.length), B = 0; B < P.length; B++)
            G[B] = String.fromCharCode(P[B]);
          return G.join("");
        }
        function E(C) {
          if (C.slice)
            return C.slice(0);
          var P = new Uint8Array(C.byteLength);
          return P.set(new Uint8Array(C)), P.buffer;
        }
        function R() {
          return this.bodyUsed = !1, this._initBody = function(C) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = C, C ? typeof C == "string" ? this._bodyText = C : c.blob && Blob.prototype.isPrototypeOf(C) ? this._bodyBlob = C : c.formData && FormData.prototype.isPrototypeOf(C) ? this._bodyFormData = C : c.searchParams && URLSearchParams.prototype.isPrototypeOf(C) ? this._bodyText = C.toString() : c.arrayBuffer && c.blob && d(C) ? (this._bodyArrayBuffer = E(C.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(C) || u(C)) ? this._bodyArrayBuffer = E(C) : this._bodyText = C = Object.prototype.toString.call(C) : this._bodyText = "", this.headers.get("content-type") || (typeof C == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(C) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, c.blob && (this.blob = function() {
            var C = x(this);
            if (C)
              return C;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var C = x(this);
              return C || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else
              return this.blob().then(_);
          }), this.text = function() {
            var C = x(this);
            if (C)
              return C;
            if (this._bodyBlob)
              return S(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(I(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, c.formData && (this.formData = function() {
            return this.text().then($);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var k = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function N(C) {
          var P = C.toUpperCase();
          return k.indexOf(P) > -1 ? P : C;
        }
        function M(C, P) {
          if (!(this instanceof M))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          P = P || {};
          var G = P.body;
          if (C instanceof M) {
            if (C.bodyUsed)
              throw new TypeError("Already read");
            this.url = C.url, this.credentials = C.credentials, P.headers || (this.headers = new v(C.headers)), this.method = C.method, this.mode = C.mode, this.signal = C.signal, !G && C._bodyInit != null && (G = C._bodyInit, C.bodyUsed = !0);
          } else
            this.url = String(C);
          if (this.credentials = P.credentials || this.credentials || "same-origin", (P.headers || !this.headers) && (this.headers = new v(P.headers)), this.method = N(P.method || this.method || "GET"), this.mode = P.mode || this.mode || null, this.signal = P.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && G)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(G), (this.method === "GET" || this.method === "HEAD") && (P.cache === "no-store" || P.cache === "no-cache")) {
            var B = /([?&])_=[^&]*/;
            if (B.test(this.url))
              this.url = this.url.replace(B, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            else {
              var J = /\?/;
              this.url += (J.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
        M.prototype.clone = function() {
          return new M(this, { body: this._bodyInit });
        };
        function $(C) {
          var P = new FormData();
          return C.trim().split("&").forEach(function(G) {
            if (G) {
              var B = G.split("="), J = B.shift().replace(/\+/g, " "), b = B.join("=").replace(/\+/g, " ");
              P.append(decodeURIComponent(J), decodeURIComponent(b));
            }
          }), P;
        }
        function D(C) {
          var P = new v(), G = C.replace(/\r?\n[\t ]+/g, " ");
          return G.split("\r").map(function(B) {
            return B.indexOf(`
`) === 0 ? B.substr(1, B.length) : B;
          }).forEach(function(B) {
            var J = B.split(":"), b = J.shift().trim();
            if (b) {
              var F = J.join(":").trim();
              P.append(b, F);
            }
          }), P;
        }
        R.call(M.prototype);
        function O(C, P) {
          if (!(this instanceof O))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          P || (P = {}), this.type = "default", this.status = P.status === void 0 ? 200 : P.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = P.statusText === void 0 ? "" : "" + P.statusText, this.headers = new v(P.headers), this.url = P.url || "", this._initBody(C);
        }
        R.call(O.prototype), O.prototype.clone = function() {
          return new O(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new v(this.headers),
            url: this.url
          });
        }, O.error = function() {
          var C = new O(null, { status: 0, statusText: "" });
          return C.type = "error", C;
        };
        var L = [301, 302, 303, 307, 308];
        O.redirect = function(C, P) {
          if (L.indexOf(P) === -1)
            throw new RangeError("Invalid status code");
          return new O(null, { status: P, headers: { location: C } });
        }, s.DOMException = l.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function(P, G) {
            this.message = P, this.name = G;
            var B = Error(P);
            this.stack = B.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function j(C, P) {
          return new Promise(function(G, B) {
            var J = new M(C, P);
            if (J.signal && J.signal.aborted)
              return B(new s.DOMException("Aborted", "AbortError"));
            var b = new XMLHttpRequest();
            function F() {
              b.abort();
            }
            b.onload = function() {
              var V = {
                status: b.status,
                statusText: b.statusText,
                headers: D(b.getAllResponseHeaders() || "")
              };
              V.url = "responseURL" in b ? b.responseURL : V.headers.get("X-Request-URL");
              var U = "response" in b ? b.response : b.responseText;
              setTimeout(function() {
                G(new O(U, V));
              }, 0);
            }, b.onerror = function() {
              setTimeout(function() {
                B(new TypeError("Network request failed"));
              }, 0);
            }, b.ontimeout = function() {
              setTimeout(function() {
                B(new TypeError("Network request failed"));
              }, 0);
            }, b.onabort = function() {
              setTimeout(function() {
                B(new s.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function K(V) {
              try {
                return V === "" && l.location.href ? l.location.href : V;
              } catch {
                return V;
              }
            }
            b.open(J.method, K(J.url), !0), J.credentials === "include" ? b.withCredentials = !0 : J.credentials === "omit" && (b.withCredentials = !1), "responseType" in b && (c.blob ? b.responseType = "blob" : c.arrayBuffer && J.headers.get("Content-Type") && J.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (b.responseType = "arraybuffer")), P && typeof P.headers == "object" && !(P.headers instanceof v) ? Object.getOwnPropertyNames(P.headers).forEach(function(V) {
              b.setRequestHeader(V, m(P.headers[V]));
            }) : J.headers.forEach(function(V, U) {
              b.setRequestHeader(U, V);
            }), J.signal && (J.signal.addEventListener("abort", F), b.onreadystatechange = function() {
              b.readyState === 4 && J.signal.removeEventListener("abort", F);
            }), b.send(typeof J._bodyInit > "u" ? null : J._bodyInit);
          });
        }
        return j.polyfill = !0, l.fetch || (l.fetch = j, l.Headers = v, l.Request = M, l.Response = O), s.Headers = v, s.Request = M, s.Response = O, s.fetch = j, s;
      })({});
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var r = n.fetch ? n : i;
    t = r.fetch, t.default = r.fetch, t.fetch = r.fetch, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, e.exports = t;
  }(aa, aa.exports)), aa.exports;
}
(function(e, t) {
  var n;
  if (typeof fetch == "function" && (typeof hn < "u" && hn.fetch ? n = hn.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof q_ < "u" && typeof window > "u") {
    var i = n || J_();
    i.default && (i = i.default), t.default = i, e.exports = t.default;
  }
})(So, So.exports);
var rm = So.exports;
const am = /* @__PURE__ */ pu(rm), Id = /* @__PURE__ */ Im({
  __proto__: null,
  default: am
}, [rm]);
function Nd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nd(Object(n), !0).forEach(function(i) {
      Y_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Y_(e, t, n) {
  return (t = Z_(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Z_(e) {
  var t = Q_(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function Q_(e, t) {
  if (gi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (gi(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
var On;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? On = global.fetch : typeof window < "u" && window.fetch ? On = window.fetch : On = fetch);
var Dr;
im() && (typeof global < "u" && global.XMLHttpRequest ? Dr = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Dr = window.XMLHttpRequest));
var Fa;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Fa = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Fa = window.ActiveXObject));
!On && Id && !Dr && !Fa && (On = am || Id);
typeof On != "function" && (On = void 0);
var ko = function(t, n) {
  if (n && gi(n) === "object") {
    var i = "";
    for (var r in n)
      i += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(n[r]);
    if (!i) return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + i.slice(1);
  }
  return t;
}, Rd = function(t, n, i, r) {
  var a = function(c) {
    if (!c.ok) return i(c.statusText || "Error", {
      status: c.status
    });
    c.text().then(function(d) {
      i(null, {
        status: c.status,
        data: d
      });
    }).catch(i);
  };
  if (r) {
    var s = r(t, n);
    if (s instanceof Promise) {
      s.then(a).catch(i);
      return;
    }
  }
  typeof fetch == "function" ? fetch(t, n).then(a).catch(i) : On(t, n).then(a).catch(i);
}, Ad = !1, e4 = function(t, n, i, r) {
  t.queryStringParams && (n = ko(n, t.queryStringParams));
  var a = Td({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (a["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), i && (a["Content-Type"] = "application/json");
  var s = typeof t.requestOptions == "function" ? t.requestOptions(i) : t.requestOptions, l = Td({
    method: i ? "POST" : "GET",
    body: i ? t.stringify(i) : void 0,
    headers: a
  }, Ad ? {} : s), c = typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
  try {
    Rd(n, l, r, c);
  } catch (d) {
    if (!s || Object.keys(s).length === 0 || !d.message || d.message.indexOf("not implemented") < 0)
      return r(d);
    try {
      Object.keys(s).forEach(function(f) {
        delete l[f];
      }), Rd(n, l, r, c), Ad = !0;
    } catch (f) {
      r(f);
    }
  }
}, t4 = function(t, n, i, r) {
  i && gi(i) === "object" && (i = ko("", i).slice(1)), t.queryStringParams && (n = ko(n, t.queryStringParams));
  try {
    var a;
    Dr ? a = new Dr() : a = new Fa("MSXML2.XMLHTTP.3.0"), a.open(i ? "POST" : "GET", n, 1), t.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!t.withCredentials, i && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var s = t.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var l in s)
        a.setRequestHeader(l, s[l]);
    a.onreadystatechange = function() {
      a.readyState > 3 && r(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(i);
  } catch (c) {
    console && console.log(c);
  }
}, n4 = function(t, n, i, r) {
  if (typeof i == "function" && (r = i, i = void 0), r = r || function() {
  }, On && n.indexOf("file:") !== 0)
    return e4(t, n, i, r);
  if (im() || typeof ActiveXObject == "function")
    return t4(t, n, i, r);
  r(new Error("No fetch and no xhr implementation found!"));
};
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
}
function Pd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(n), !0).forEach(function(i) {
      sm(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function i4(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function r4(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, om(i.key), i);
  }
}
function a4(e, t, n) {
  return t && r4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sm(e, t, n) {
  return (t = om(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function om(e) {
  var t = s4(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function s4(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (Gi(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var o4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, i, r) {
      return sm({}, i, r || "");
    },
    parseLoadPayload: function(n, i) {
    },
    request: n4,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, lm = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    i4(this, e), this.services = t, this.options = n, this.allOptions = i, this.type = "backend", this.init(t, n, i);
  }
  return a4(e, [{
    key: "init",
    value: function(n) {
      var i = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (this.services = n, this.options = Gs(Gs(Gs({}, o4()), this.options || {}), r), this.allOptions = a, this.services && this.options.reloadInterval) {
        var s = setInterval(function() {
          return i.reload();
        }, this.options.reloadInterval);
        Gi(s) === "object" && typeof s.unref == "function" && s.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function(n, i, r) {
      this._readAny(n, n, i, i, r);
    }
  }, {
    key: "read",
    value: function(n, i, r) {
      this._readAny([n], n, [i], i, r);
    }
  }, {
    key: "_readAny",
    value: function(n, i, r, a, s) {
      var l = this, c = this.options.loadPath;
      typeof this.options.loadPath == "function" && (c = this.options.loadPath(n, r)), c = X_(c), c.then(function(d) {
        if (!d) return s(null, {});
        var f = l.services.interpolator.interpolate(d, {
          lng: n.join("+"),
          ns: r.join("+")
        });
        l.loadUrl(f, s, i, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(n, i, r, a) {
      var s = this, l = typeof r == "string" ? [r] : r, c = typeof a == "string" ? [a] : a, d = this.options.parseLoadPayload(l, c);
      this.options.request(this.options, n, d, function(f, u) {
        if (u && (u.status >= 500 && u.status < 600 || !u.status)) return i("failed loading " + n + "; status code: " + u.status, !0);
        if (u && u.status >= 400 && u.status < 500) return i("failed loading " + n + "; status code: " + u.status, !1);
        if (!u && f && f.message && f.message.toLowerCase().indexOf("failed") > -1 && (f.message.indexOf("fetch") > -1 || f.message.toLowerCase().indexOf("network") > -1)) return i("failed loading " + n + ": " + f.message, !0);
        if (f) return i(f, !1);
        var p, m;
        try {
          typeof u.data == "string" ? p = s.options.parse(u.data, r, a) : p = u.data;
        } catch {
          m = "failed parsing " + n + " to json";
        }
        if (m) return i(m, !1);
        i(null, p);
      });
    }
  }, {
    key: "create",
    value: function(n, i, r, a, s) {
      var l = this;
      if (this.options.addPath) {
        typeof n == "string" && (n = [n]);
        var c = this.options.parsePayload(i, r, a), d = 0, f = [], u = [];
        n.forEach(function(p) {
          var m = l.options.addPath;
          typeof l.options.addPath == "function" && (m = l.options.addPath(p, i));
          var g = l.services.interpolator.interpolate(m, {
            lng: p,
            ns: i
          });
          l.options.request(l.options, g, c, function(v, x) {
            d += 1, f.push(v), u.push(x), d === n.length && typeof s == "function" && s(f, u);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var n = this, i = this.services, r = i.backendConnector, a = i.languageUtils, s = i.logger, l = r.language;
      if (!(l && l.toLowerCase() === "cimode")) {
        var c = [], d = function(u) {
          var p = a.toResolveHierarchy(u);
          p.forEach(function(m) {
            c.indexOf(m) < 0 && c.push(m);
          });
        };
        d(l), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return d(f);
        }), c.forEach(function(f) {
          n.allOptions.ns.forEach(function(u) {
            r.read(f, u, "read", null, null, function(p, m) {
              p && s.warn("loading namespace ".concat(u, " for language ").concat(f, " failed"), p), !p && m && s.log("loaded namespace ".concat(u, " for language ").concat(f), m), r.loaded("".concat(f, "|").concat(u), p, m);
            });
          });
        });
      }
    }
  }]);
}();
lm.type = "backend";
const Bn = C3(), l4 = "en", c4 = {
  type: "languageDetector",
  detect() {
    return Bn.locale;
  }
}, Yr = G_({
  fallbackLng: l4,
  interpolation: {
    escapeValue: !1
  },
  backend: {
    loadPath: Sn(
      Bn.serverBaseUrl,
      `resources/${Bn.realm}/account/{{lng}}`
    ),
    parse: (e) => {
      const t = JSON.parse(e), n = {};
      return t.forEach((i) => n[i.key] = i.value), n;
    }
  }
});
Yr.use(lm);
Yr.use(c4);
Yr.use(Om);
function Qn() {
  const { t: e } = je(), { addAlert: t, addError: n } = m3(), i = Pi(
    (r, a) => {
      if (!(a instanceof em)) {
        n(r, a);
        return;
      }
      const s = e(r, { error: a.message });
      t(s, Gn.danger, a.description);
    },
    [t, n, e]
  );
  return lt(
    () => ({ addAlert: t, addError: i }),
    [i, t]
  );
}
function Wt(e, t, n = []) {
  const [i, r] = me();
  if (Nt(() => {
    const a = new AbortController(), { signal: s } = a;
    async function l() {
      try {
        t(await e(s));
      } catch (c) {
        if (c instanceof Error && c.name === "AbortError")
          return;
        r(c);
      }
    }
    return l(), () => a.abort();
  }, n), i)
    throw i;
}
const D4 = () => {
  const { t: e } = je(), t = at(), [n, i] = me(), [r, a] = me([]), s = wl({ mode: "onChange" }), { handleSubmit: l, reset: c, setValue: d, setError: f } = s, { addAlert: u } = Qn();
  Wt(
    (_) => Promise.all([
      u_({ signal: _, context: t }),
      p_({ signal: _, context: t })
    ]),
    ([_, S]) => {
      i(_.userProfileMetadata), a(S), c(_), Object.entries(_.attributes || {}).forEach(
        ([I, E]) => d(`attributes[${U3(I)}]`, E)
      );
    }
  );
  const p = async (_) => {
    try {
      const S = Object.fromEntries(
        Object.entries(_.attributes || {}).map(([E, R]) => [
          z3(E),
          R
        ])
      );
      await m_(t, { ..._, attributes: S });
      const I = S.locale?.toString();
      I && Yr.changeLanguage(I, (E) => {
        E && console.warn("Error(s) loading locale", I, E);
      }), t.keycloak.updateToken(), u(e("accountUpdatedMessage"));
    } catch (S) {
      u(e("accountUpdatedError"), Gn.danger), W3(
        { responseData: { errors: S } },
        (I, E) => f(I, E),
        (I, E) => e(I, E)
      );
    }
  };
  if (!n)
    return /* @__PURE__ */ h(Xt, {});
  const m = () => n?.attributes?.map((_) => _.readOnly).reduce((_, S) => _ && S, !0), {
    updateEmailFeatureEnabled: g,
    updateEmailActionEnabled: v,
    isRegistrationEmailAsUsername: x,
    isEditUserNameAllowed: w
  } = t.environment.features;
  return /* @__PURE__ */ h(Zn, { title: e("personalInfo"), description: e("personalInfoDescription"), children: /* @__PURE__ */ Z(Gr, { isHorizontal: !0, onSubmit: l(p), children: [
    /* @__PURE__ */ h(
      Q3,
      {
        form: s,
        userProfileMetadata: n,
        supportedLocales: r,
        currentLocale: t.environment.locale,
        t: (_, S) => e(_, S),
        renderer: (_) => _.name === "email" && g && v && (!x || w) ? /* @__PURE__ */ h(
          ce,
          {
            id: "update-email-btn",
            variant: "link",
            onClick: () => t.keycloak.login({ action: "UPDATE_EMAIL" }),
            icon: /* @__PURE__ */ h(Mu, {}),
            iconPosition: "right",
            children: e("updateEmail")
          }
        ) : void 0
      }
    ),
    !m() && /* @__PURE__ */ Z(il, { children: [
      /* @__PURE__ */ h(
        ce,
        {
          "data-testid": "save",
          type: "submit",
          id: "save-btn",
          variant: "primary",
          children: e("save")
        }
      ),
      /* @__PURE__ */ h(
        ce,
        {
          "data-testid": "cancel",
          id: "cancel-btn",
          variant: "link",
          onClick: () => c(),
          children: e("cancel")
        }
      )
    ] }),
    t.environment.features.deleteAccountAllowed && /* @__PURE__ */ h(
      sl,
      {
        "data-testid": "delete-account",
        toggleText: e("deleteAccount"),
        children: /* @__PURE__ */ h(
          Va,
          {
            isInline: !0,
            title: e("deleteAccount"),
            variant: "danger",
            actionLinks: /* @__PURE__ */ h(
              ce,
              {
                id: "delete-account-btn",
                variant: "danger",
                onClick: () => t.keycloak.login({
                  action: "delete_account"
                }),
                className: "delete-button",
                children: e("delete")
              }
            ),
            children: e("deleteAccountWarning")
          }
        )
      }
    )
  ] }) });
}, F4 = (e) => {
  const { t } = je(), n = Cm() ?? e.error, i = d4(n);
  function r() {
    location.href = location.origin + location.pathname;
  }
  return /* @__PURE__ */ h(Ja, { children: /* @__PURE__ */ h(
    At,
    {
      variant: kr.small,
      title: t("somethingWentWrong"),
      titleIconVariant: "danger",
      showClose: !1,
      isOpen: !0,
      actions: [
        /* @__PURE__ */ h(ce, { variant: "primary", onClick: r, children: t("tryAgain") }, "tryAgain")
      ],
      children: /* @__PURE__ */ Z(qa, { children: [
        /* @__PURE__ */ h(En, { children: t("somethingWentWrongDescription") }),
        i && /* @__PURE__ */ h(En, { component: Vi.small, children: i })
      ] })
    }
  ) });
};
function d4(e) {
  return typeof e == "string" ? e : _m(e) ? e.statusText : e instanceof Error ? e.message : null;
}
const f4 = "_brand_1gmge_1", u4 = {
  brand: f4
}, p4 = () => {
  const { t: e } = je();
  return Bn.referrerUrl ? /* @__PURE__ */ h(
    ce,
    {
      "data-testid": "referrer-link",
      component: "a",
      href: Bn.referrerUrl.replace("_hash_", "#"),
      variant: "link",
      icon: /* @__PURE__ */ h(Mu, {}),
      iconPosition: "right",
      isInline: !0,
      children: e("backTo", {
        app: zt(e, Bn.referrerName, Bn.referrerUrl)
      })
    }
  ) : null;
}, $4 = () => {
  const { environment: e, keycloak: t } = at(), { t: n } = je(), i = e.logo || "logo.svg", r = e.logoUrl ? e.logoUrl : "/", a = zd(r), s = r.startsWith("/") ? a : r;
  return /* @__PURE__ */ h(
    o_,
    {
      "data-testid": "page-header",
      keycloak: t,
      features: { hasManageAccount: !1 },
      brand: {
        href: s,
        src: Sn(e.resourceUrl, i),
        alt: n("logo"),
        className: u4.brand
      },
      toolbarItems: [/* @__PURE__ */ h(p4, {}, "link")]
    }
  );
};
async function cm(e) {
  return await (await fetch(
    Sn(e.context.environment.resourceUrl, "/content.json"),
    e
  )).json();
}
const B4 = () => {
  const [e, t] = me(), n = at();
  return Wt((i) => cm({ signal: i, context: n }), t), /* @__PURE__ */ h(wu, { children: /* @__PURE__ */ h(Su, { children: /* @__PURE__ */ h(Bi, { children: /* @__PURE__ */ h(Xa, { children: /* @__PURE__ */ h(Hd, { fallback: /* @__PURE__ */ h(Xt, {}), children: e?.filter(
    (i) => i.isVisible ? n.environment.features[i.isVisible] : !0
  ).map((i) => /* @__PURE__ */ h(
    dm,
    {
      menuItem: i
    },
    i.label
  )) }) }) }) }) });
};
function dm({ menuItem: e }) {
  const { t } = je(), {
    environment: { features: n }
  } = at(), { pathname: i } = Em(), r = lt(
    () => um(i, e),
    [i, e]
  );
  return "path" in e ? /* @__PURE__ */ h(m4, { path: e.path, isActive: r, children: t(e.label) }) : /* @__PURE__ */ h(
    ji,
    {
      "data-testid": e.label,
      title: t(e.label),
      isActive: r,
      isExpanded: r,
      children: e.children.filter(
        (a) => a.isVisible ? n[a.isVisible] : !0
      ).map((a) => /* @__PURE__ */ h(dm, { menuItem: a }, a.label))
    }
  );
}
function fm(e) {
  return `${new URL(Bn.baseUrl).pathname}${e}`;
}
function um(e, t) {
  return "path" in t ? !!Sm(fm(t.path), e) : t.children.some((n) => um(e, n));
}
const m4 = ({
  path: e,
  isActive: t,
  children: n
}) => {
  const i = fm(e) + `?${location.search}`, r = zd(i), a = km(i);
  return /* @__PURE__ */ h(
    cl,
    {
      "data-testid": e,
      to: r,
      isActive: t,
      onClick: (s) => (
        // PatternFly does not have the correct type for this event, so we need to cast it.
        a(s)
      ),
      children: n
    }
  );
}, h4 = {
  dateStyle: "long"
}, g4 = {
  timeStyle: "short"
}, b4 = {
  ...h4,
  ...g4
};
function wr(e, t = b4) {
  return e.toLocaleString(Yr.languages, t);
}
const j4 = () => {
  const { t: e } = je(), t = at(), { addAlert: n, addError: i } = Qn(), [r, a] = me(), [s, l] = me(0), c = () => l(s + 1);
  Wt((m) => g_({ signal: m, context: t }), (m) => {
    let g = m[0];
    const v = m.findIndex((_) => _.current);
    g = m.splice(v, 1)[0], m.unshift(g);
    const x = g.sessions.findIndex((_) => _.current), w = g.sessions.splice(x, 1)[0];
    g.sessions.unshift(w), a(m);
  }, [
    s
  ]);
  const f = async () => {
    await hd(t), t.keycloak.logout();
  }, u = async (m, g) => {
    try {
      await hd(t, m.id), n(
        e("signedOutSession", { browser: m.browser, os: g.os })
      ), c();
    } catch (v) {
      i("errorSignOutMessage", v);
    }
  }, p = (m) => {
    let g = "";
    return m.forEach((v, x) => {
      let w;
      v.clientName !== "" ? w = zt(e, v.clientName) : w = v.clientId, g += w, m.length > x + 1 && (g += ", ");
    }), g;
  };
  return r ? /* @__PURE__ */ Z(
    Zn,
    {
      title: e("deviceActivity"),
      description: e("signedInDevicesExplanation"),
      children: [
        /* @__PURE__ */ Z(Ni, { hasGutter: !0, className: "pf-v5-u-mb-lg", children: [
          /* @__PURE__ */ h(bn, { isFilled: !0, children: /* @__PURE__ */ h(Cn, { headingLevel: "h2", size: "xl", children: e("signedInDevices") }) }),
          /* @__PURE__ */ Z(bn, { children: [
            /* @__PURE__ */ h(
              ce,
              {
                id: "refresh-page",
                variant: "link",
                onClick: () => c(),
                icon: /* @__PURE__ */ h(g1, {}),
                children: e("refreshPage")
              }
            ),
            (r.length > 1 || r[0].sessions.length > 1) && /* @__PURE__ */ h(
              Pr,
              {
                buttonTitle: e("signOutAllDevices"),
                modalTitle: e("signOutAllDevices"),
                continueLabel: e("confirm"),
                cancelLabel: e("cancel"),
                onContinue: () => f(),
                children: e("signOutAllDevicesWarning")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ h(
          ui,
          {
            className: "signed-in-device-list",
            "aria-label": e("signedInDevices"),
            children: /* @__PURE__ */ h(Bt, { "aria-labelledby": `sessions-${s}`, children: r.map(
              (m) => m.sessions.map((g, v) => /* @__PURE__ */ h(nn, { "data-testid": `row-${v}`, children: /* @__PURE__ */ h(
                qo,
                {
                  "aria-label": "device-sessions-content",
                  className: "pf-v5-u-flex-grow-1",
                  children: /* @__PURE__ */ Z(Qa, { hasGutter: !0, children: [
                    /* @__PURE__ */ h(gn, { span: 1, rowSpan: 2, children: m.mobile ? /* @__PURE__ */ h(r1, {}) : /* @__PURE__ */ h(Sv, {}) }),
                    /* @__PURE__ */ Z(gn, { sm: 8, md: 9, span: 10, children: [
                      /* @__PURE__ */ Z("span", { className: "pf-v5-u-mr-md session-title", children: [
                        m.os.toLowerCase().includes("unknown") ? e("unknownOperatingSystem") : m.os,
                        " ",
                        !m.osVersion.toLowerCase().includes("unknown") && m.osVersion,
                        " ",
                        "/ ",
                        g.browser
                      ] }),
                      g.current && /* @__PURE__ */ h(ll, { color: "green", children: e("currentSession") })
                    ] }),
                    /* @__PURE__ */ h(
                      gn,
                      {
                        className: "pf-v5-u-text-align-right",
                        sm: 3,
                        md: 2,
                        span: 1,
                        children: !g.current && /* @__PURE__ */ h(
                          Pr,
                          {
                            buttonTitle: e("signOut"),
                            modalTitle: e("signOut"),
                            continueLabel: e("confirm"),
                            cancelLabel: e("cancel"),
                            buttonVariant: "secondary",
                            onContinue: () => u(g, m),
                            children: e("signOutWarning")
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ h(gn, { span: 11, children: /* @__PURE__ */ Z(
                      Qo,
                      {
                        className: "signed-in-device-grid",
                        columnModifier: { sm: "2Col", lg: "3Col" },
                        cols: 5,
                        rows: 1,
                        children: [
                          /* @__PURE__ */ Z(ht, { children: [
                            /* @__PURE__ */ h(gt, { children: e("ipAddress") }),
                            /* @__PURE__ */ h(mt, { children: g.ipAddress })
                          ] }),
                          /* @__PURE__ */ Z(ht, { children: [
                            /* @__PURE__ */ h(gt, { children: e("lastAccessedOn") }),
                            /* @__PURE__ */ h(mt, { children: wr(new Date(g.lastAccess * 1e3)) })
                          ] }),
                          /* @__PURE__ */ Z(ht, { children: [
                            /* @__PURE__ */ h(gt, { children: e("clients") }),
                            /* @__PURE__ */ h(mt, { children: p(g.clients) })
                          ] }),
                          /* @__PURE__ */ Z(ht, { children: [
                            /* @__PURE__ */ h(gt, { children: e("started") }),
                            /* @__PURE__ */ h(mt, { children: wr(new Date(g.started * 1e3)) })
                          ] }),
                          /* @__PURE__ */ Z(ht, { children: [
                            /* @__PURE__ */ h(gt, { children: e("expires") }),
                            /* @__PURE__ */ h(mt, { children: wr(new Date(g.expires * 1e3)) })
                          ] })
                        ]
                      }
                    ) })
                  ] })
                }
              ) }, m.id))
            ) })
          }
        )
      ]
    }
  ) : /* @__PURE__ */ h(Xt, {});
}, Lo = ({ message: e, ...t }) => /* @__PURE__ */ h(Bt, { className: "pf-v5-u-align-items-center pf-p-b-0", children: /* @__PURE__ */ h(nn, { children: /* @__PURE__ */ h(
  xn,
  {
    dataListCells: [
      /* @__PURE__ */ h(qe, { ...t, children: e }, "0")
    ]
  }
) }) }), Md = ({
  account: e,
  isLinked: t = !1,
  refresh: n
}) => {
  const { t: i } = je(), r = at(), { addAlert: a, addError: s } = Qn(), l = async (d) => {
    try {
      await x_(r, d), a(i("unLinkSuccess")), n();
    } catch (f) {
      s("unLinkError", f);
    }
  }, c = async (d) => {
    try {
      const { accountLinkUri: f } = await w_(r, d);
      location.href = f;
    } catch (f) {
      s("linkError", f);
    }
  };
  return /* @__PURE__ */ h(
    Bt,
    {
      id: `${e.providerAlias}-idp`,
      "aria-label": i("linkedAccounts"),
      children: /* @__PURE__ */ Z(
        nn,
        {
          "data-testid": `linked-accounts/${e.providerName}`,
          children: [
            /* @__PURE__ */ h(
              xn,
              {
                dataListCells: [
                  /* @__PURE__ */ h(qe, { children: /* @__PURE__ */ Z(Ni, { children: [
                    /* @__PURE__ */ h(bn, { className: "pf-v5-u-mr-sm", children: /* @__PURE__ */ h(N3, { icon: e.providerName }) }),
                    /* @__PURE__ */ h(bn, { className: "pf-v5-u-my-xs", isFilled: !0, children: /* @__PURE__ */ h("span", { id: `${e.providerAlias}-idp-name`, children: e.displayName }) })
                  ] }) }, "idp"),
                  /* @__PURE__ */ h(qe, { children: /* @__PURE__ */ h(Ni, { children: /* @__PURE__ */ h(bn, { className: "pf-v5-u-my-xs", isFilled: !0, children: /* @__PURE__ */ h("span", { id: `${e.providerAlias}-idp-label`, children: /* @__PURE__ */ h(ll, { color: e.social ? "blue" : "green", children: i(e.social ? "socialLogin" : "systemDefined") }) }) }) }) }, "label"),
                  /* @__PURE__ */ h(qe, { width: 5, children: /* @__PURE__ */ h(Ni, { children: /* @__PURE__ */ h(bn, { className: "pf-v5-u-my-xs", isFilled: !0, children: /* @__PURE__ */ h("span", { id: `${e.providerAlias}-idp-username`, children: e.linkedUsername }) }) }) }, "username")
                ]
              }
            ),
            /* @__PURE__ */ Z(
              Xo,
              {
                "aria-labelledby": i("link"),
                "aria-label": i("unLink"),
                id: "setPasswordAction",
                children: [
                  t && /* @__PURE__ */ Z(
                    ce,
                    {
                      id: `${e.providerAlias}-idp-unlink`,
                      variant: "link",
                      onClick: () => l(e),
                      children: [
                        /* @__PURE__ */ h(Xn, { size: "sm", children: /* @__PURE__ */ h(x1, {}) }),
                        " ",
                        i("unLink")
                      ]
                    }
                  ),
                  !t && /* @__PURE__ */ Z(
                    ce,
                    {
                      id: `${e.providerAlias}-idp-link`,
                      variant: "link",
                      onClick: () => c(e),
                      children: [
                        /* @__PURE__ */ h(Xn, { size: "sm", children: /* @__PURE__ */ h(Gv, {}) }),
                        " ",
                        i("link")
                      ]
                    }
                  )
                ]
              }
            )
          ]
        },
        e.providerName
      )
    },
    e.providerName
  );
}, Dd = ({
  count: e,
  first: t,
  max: n,
  onNextClick: i,
  onPreviousClick: r,
  onPerPageSelect: a,
  onFilter: s,
  hasNext: l
}) => {
  const { t: c } = je(), [d, f] = me(""), u = Math.round(t / n) + 1;
  return /* @__PURE__ */ h(mi, { children: /* @__PURE__ */ Z(Jn, { children: [
    /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h(
      al,
      {
        placeholder: c("filterByName"),
        "aria-label": c("filterByName"),
        value: d,
        onChange: (p, m) => {
          f(m);
        },
        onSearch: () => s(d),
        onKeyDown: (p) => {
          p.key === "Enter" && s(d);
        },
        onClear: () => {
          f(""), s("");
        }
      }
    ) }),
    /* @__PURE__ */ h(Ft, { variant: "pagination", children: /* @__PURE__ */ h(
      Ya,
      {
        isCompact: !0,
        perPageOptions: [
          { title: "5", value: 6 },
          { title: "10", value: 11 },
          { title: "20", value: 21 }
        ],
        toggleTemplate: ({
          firstIndex: p,
          lastIndex: m
        }) => /* @__PURE__ */ Z("b", { children: [
          p && p > 1 ? p - 1 : p,
          " -",
          " ",
          m && m > 1 ? m - 1 : m
        ] }),
        itemCount: e + (u - 1) * n + (l ? 1 : 0),
        page: u,
        perPage: n,
        onNextClick: (p, m) => i((m - 1) * n),
        onPreviousClick: (p, m) => r((m - 1) * n),
        onPerPageSelect: (p, m, g) => a(g - 1, m)
      }
    ) })
  ] }) });
}, V4 = () => {
  const { t: e } = je(), t = at(), [n, i] = me([]), [r, a] = me([]), [s, l] = me({
    first: 0,
    max: 6,
    linked: !1
  }), [c, d] = me({
    first: 0,
    max: 6,
    linked: !0
  }), [f, u] = me(1), p = () => u(f + 1);
  return Wt(
    (m) => gd({ signal: m, context: t }, s),
    a,
    [s, f]
  ), Wt(
    (m) => gd({ signal: m, context: t }, c),
    i,
    [c, f]
  ), /* @__PURE__ */ h(
    Zn,
    {
      title: e("linkedAccounts"),
      description: e("linkedAccountsIntroMessage"),
      children: /* @__PURE__ */ Z(Ru, { hasGutter: !0, children: [
        /* @__PURE__ */ Z(po, { children: [
          /* @__PURE__ */ h(Cn, { headingLevel: "h2", className: "pf-v5-u-mb-lg", size: "xl", children: e("linkedLoginProviders") }),
          /* @__PURE__ */ h(
            Dd,
            {
              onFilter: (m) => d({ ...c, first: 0, search: m }),
              count: n.length,
              first: c.first,
              max: c.max,
              onNextClick: () => {
                d({
                  ...c,
                  first: c.first + c.max - 1
                });
              },
              onPreviousClick: () => d({
                ...c,
                first: c.first - c.max + 1
              }),
              onPerPageSelect: (m, g) => d({
                ...c,
                first: m,
                max: g
              }),
              hasNext: n.length > c.max - 1
            }
          ),
          /* @__PURE__ */ h(ui, { id: "linked-idps", "aria-label": e("linkedLoginProviders"), children: n.length > 0 ? n.map(
            (m, g) => g !== c.max - 1 && /* @__PURE__ */ h(
              Md,
              {
                account: m,
                isLinked: !0,
                refresh: p
              },
              m.providerName
            )
          ) : /* @__PURE__ */ h(Lo, { message: e("linkedEmpty") }) })
        ] }),
        /* @__PURE__ */ Z(po, { children: [
          /* @__PURE__ */ h(
            Cn,
            {
              headingLevel: "h2",
              className: "pf-v5-u-mt-xl pf-v5-u-mb-lg",
              size: "xl",
              children: e("unlinkedLoginProviders")
            }
          ),
          /* @__PURE__ */ h(
            Dd,
            {
              onFilter: (m) => l({ ...s, first: 0, search: m }),
              count: r.length,
              first: s.first,
              max: s.max,
              onNextClick: () => {
                l({
                  ...s,
                  first: s.first + s.max - 1
                });
              },
              onPreviousClick: () => l({
                ...s,
                first: s.first - s.max + 1
              }),
              onPerPageSelect: (m, g) => l({
                ...s,
                first: m,
                max: g
              }),
              hasNext: r.length > s.max - 1
            }
          ),
          /* @__PURE__ */ h(ui, { id: "unlinked-idps", "aria-label": e("unlinkedLoginProviders"), children: r.length > 0 ? r.map(
            (m, g) => g !== s.max - 1 && /* @__PURE__ */ h(
              Md,
              {
                account: m,
                refresh: p
              },
              m.providerName
            )
          ) : /* @__PURE__ */ h(Lo, { message: e("unlinkedEmpty") }) })
        ] })
      ] })
    }
  );
}, v4 = ({ title: e, onClick: t, testid: n }) => {
  const [i, r] = me(!1);
  return /* @__PURE__ */ Z(wt, { children: [
    /* @__PURE__ */ h(
      pi,
      {
        popperProps: {
          position: "right"
        },
        onOpenChange: (a) => r(a),
        toggle: (a) => /* @__PURE__ */ h(
          yt,
          {
            className: "pf-v5-u-display-none-on-lg",
            ref: a,
            variant: "plain",
            onClick: () => r(!i),
            isExpanded: i,
            children: /* @__PURE__ */ h(Tr, {})
          }
        ),
        isOpen: i,
        children: /* @__PURE__ */ h(_n, { onClick: t, children: e }, "1")
      }
    ),
    /* @__PURE__ */ h(
      ce,
      {
        variant: "link",
        onClick: t,
        className: "pf-v5-u-display-none pf-v5-u-display-inline-flex-on-lg",
        "data-testid": n,
        children: e
      }
    )
  ] });
}, H4 = () => {
  const { t: e } = je(), t = at(), { login: n } = t.keycloak, [i, r] = me();
  Wt(
    (l) => y_({ signal: l, context: t }),
    r,
    []
  );
  const a = (l) => {
    const c = l.credential, f = [
      /* @__PURE__ */ h(
        qe,
        {
          "data-testrole": "label",
          className: "pf-v5-u-max-width",
          style: {
            "--pf-v5-u-max-width--MaxWidth": "300px"
          },
          children: e(c.userLabel) || e(c.type)
        },
        "title"
      )
    ];
    return c.createdDate && f.push(
      /* @__PURE__ */ h(
        qe,
        {
          "data-testrole": "created-at",
          children: /* @__PURE__ */ Z(Ud, { i18nKey: "credentialCreatedAt", children: [
            /* @__PURE__ */ h("strong", { className: "pf-v5-u-mr-md" }),
            { date: wr(new Date(c.createdDate)) }
          ] })
        },
        "created" + c.id
      )
    ), f;
  };
  if (!i)
    return /* @__PURE__ */ h(Xt, {});
  const s = [
    ...new Set(i.map((l) => l.category))
  ];
  return /* @__PURE__ */ h(Zn, { title: e("signingIn"), description: e("signingInDescription"), children: s.map((l) => /* @__PURE__ */ Z(Hi, { variant: "light", className: "pf-v5-u-px-0", children: [
    /* @__PURE__ */ h(Cn, { headingLevel: "h2", size: "xl", id: `${l}-categ-title`, children: e(l) }),
    i.filter((c) => c.category == l).map((c) => /* @__PURE__ */ Z(wt, { children: [
      /* @__PURE__ */ Z(Ni, { className: "pf-v5-u-mt-lg pf-v5-u-mb-lg", children: [
        /* @__PURE__ */ Z(bn, { children: [
          /* @__PURE__ */ h(
            Cn,
            {
              headingLevel: "h3",
              size: "md",
              className: "pf-v5-u-mb-md",
              "data-testid": `${c.type}/help`,
              children: /* @__PURE__ */ h(
                "span",
                {
                  className: "cred-title pf-v5-u-display-block",
                  "data-testid": `${c.type}/title`,
                  children: e(c.displayName)
                }
              )
            }
          ),
          /* @__PURE__ */ h("span", { "data-testid": `${c.type}/help-text`, children: e(c.helptext) })
        ] }),
        c.createAction && /* @__PURE__ */ h(bn, { isFilled: !0, children: /* @__PURE__ */ h("div", { className: "pf-v5-u-float-right", children: /* @__PURE__ */ h(
          v4,
          {
            onClick: () => n({
              action: c.createAction
            }),
            title: e("setUpNew", {
              name: e(
                `${c.type}-display-name`
              )
            }),
            testid: `${c.type}/create`
          }
        ) }) })
      ] }),
      /* @__PURE__ */ Z(
        ui,
        {
          "aria-label": "credential list",
          className: "pf-v5-u-mb-xl",
          "data-testid": `${c.type}/credential-list`,
          children: [
            c.userCredentialMetadatas.length === 0 && /* @__PURE__ */ h(
              Lo,
              {
                message: e("notSetUp", {
                  name: e(c.displayName)
                }),
                "data-testid": `${c.type}/not-set-up`
              }
            ),
            c.userCredentialMetadatas.map((d) => /* @__PURE__ */ h(Bt, { children: /* @__PURE__ */ h(nn, { id: `cred-${d.credential.id}`, children: /* @__PURE__ */ h(
              xn,
              {
                className: "pf-v5-u-py-0",
                dataListCells: [
                  ...a(d),
                  /* @__PURE__ */ h(
                    Xo,
                    {
                      id: `action-${d.credential.id}`,
                      "aria-label": e("updateCredAriaLabel"),
                      "aria-labelledby": `cred-${d.credential.id}`,
                      children: c.removeable ? /* @__PURE__ */ h(
                        ce,
                        {
                          variant: "danger",
                          "data-testrole": "remove",
                          onClick: () => {
                            n({
                              action: "delete_credential:" + d.credential.id
                            });
                          },
                          children: e("delete")
                        }
                      ) : /* @__PURE__ */ h(
                        ce,
                        {
                          variant: "secondary",
                          onClick: () => {
                            c.updateAction && n({ action: c.updateAction });
                          },
                          "data-testrole": "update",
                          children: e("update")
                        }
                      )
                    },
                    "action"
                  )
                ]
              }
            ) }) }, d.credential.id))
          ]
        }
      )
    ] }))
  ] }, l)) });
}, U4 = () => {
  const { t: e } = je(), t = at(), { addAlert: n, addError: i } = Qn(), [r, a] = me(), [s, l] = me(1), c = () => l(s + 1);
  Wt(
    (u) => b_({ signal: u, context: t }),
    (u) => a(u.map((p) => ({ ...p, open: !1 }))),
    [s]
  );
  const d = (u) => {
    a([
      ...r.map(
        (p) => p.clientId === u ? { ...p, open: !p.open } : p
      )
    ]);
  }, f = async (u) => {
    try {
      await v_(t, u), c(), n(e("removeConsentSuccess"));
    } catch (p) {
      i("removeConsentError", p);
    }
  };
  return r ? /* @__PURE__ */ h(Zn, { title: e("application"), description: e("applicationsIntroMessage"), children: /* @__PURE__ */ Z(ui, { id: "applications-list", "aria-label": e("application"), children: [
    /* @__PURE__ */ h(
      Bt,
      {
        id: "applications-list-header",
        "aria-labelledby": "Columns names",
        children: /* @__PURE__ */ Z(nn, { children: [
          /* @__PURE__ */ h("span", { style: { visibility: "hidden", height: 55 }, children: /* @__PURE__ */ h(
            ro,
            {
              id: "applications-list-header-invisible-toggle",
              "aria-controls": "applications-list-content"
            }
          ) }),
          /* @__PURE__ */ h(
            xn,
            {
              dataListCells: [
                /* @__PURE__ */ h(
                  qe,
                  {
                    width: 2,
                    className: "pf-v5-u-pt-md",
                    children: /* @__PURE__ */ h("strong", { children: e("name") })
                  },
                  "applications-list-client-id-header"
                ),
                /* @__PURE__ */ h(
                  qe,
                  {
                    width: 2,
                    className: "pf-v5-u-pt-md",
                    children: /* @__PURE__ */ h("strong", { children: e("applicationType") })
                  },
                  "applications-list-app-type-header"
                ),
                /* @__PURE__ */ h(
                  qe,
                  {
                    width: 2,
                    className: "pf-v5-u-pt-md",
                    children: /* @__PURE__ */ h("strong", { children: e("status") })
                  },
                  "applications-list-status"
                )
              ]
            }
          )
        ] })
      }
    ),
    r.map((u) => /* @__PURE__ */ Z(
      Bt,
      {
        "aria-labelledby": "applications-list",
        "data-testid": "applications-list-item",
        isExpanded: u.open,
        children: [
          /* @__PURE__ */ Z(nn, { className: "pf-v5-u-align-items-center", children: [
            /* @__PURE__ */ h(
              ro,
              {
                onClick: () => d(u.clientId),
                isExpanded: u.open,
                id: `toggle-${u.clientId}`,
                "aria-controls": `content-${u.clientId}`
              }
            ),
            /* @__PURE__ */ h(
              xn,
              {
                className: "pf-v5-u-align-items-center",
                dataListCells: [
                  /* @__PURE__ */ Z(qe, { width: 2, children: [
                    u.effectiveUrl && /* @__PURE__ */ Z(
                      ce,
                      {
                        className: "pf-v5-u-pl-0 title-case",
                        component: "a",
                        variant: "link",
                        onClick: () => window.open(u.effectiveUrl),
                        children: [
                          zt(
                            e,
                            u.clientName || u.clientId
                          ),
                          " ",
                          /* @__PURE__ */ h(zo, {})
                        ]
                      }
                    ),
                    !u.effectiveUrl && /* @__PURE__ */ h(wt, { children: zt(
                      e,
                      u.clientName || u.clientId
                    ) })
                  ] }, `client${u.clientId}`),
                  /* @__PURE__ */ Z(
                    qe,
                    {
                      width: 2,
                      children: [
                        u.userConsentRequired ? e("thirdPartyApp") : e("internalApp"),
                        u.offlineAccess ? ", " + e("offlineAccess") : ""
                      ]
                    },
                    `internal${u.clientId}`
                  ),
                  /* @__PURE__ */ h(qe, { width: 2, children: u.inUse ? e("inUse") : e("notInUse") }, `status${u.clientId}`)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ Z(
            qo,
            {
              id: `content-${u.clientId}`,
              className: "pf-v5-u-pl-4xl",
              "aria-label": e("applicationDetails", {
                clientId: u.clientId
              }),
              isHidden: !u.open,
              children: [
                /* @__PURE__ */ Z(Qo, { children: [
                  /* @__PURE__ */ Z(ht, { children: [
                    /* @__PURE__ */ h(gt, { children: e("client") }),
                    /* @__PURE__ */ h(mt, { children: u.clientId })
                  ] }),
                  u.description && /* @__PURE__ */ Z(ht, { children: [
                    /* @__PURE__ */ h(gt, { children: e("description") }),
                    /* @__PURE__ */ h(mt, { children: u.description })
                  ] }),
                  u.effectiveUrl && /* @__PURE__ */ Z(ht, { children: [
                    /* @__PURE__ */ h(gt, { children: "URL" }),
                    /* @__PURE__ */ h(mt, { children: u.effectiveUrl.split('"') })
                  ] }),
                  u.consent && /* @__PURE__ */ Z(wt, { children: [
                    /* @__PURE__ */ Z(ht, { children: [
                      /* @__PURE__ */ h(gt, { children: e("hasAccessTo") }),
                      u.consent.grantedScopes.map((p) => /* @__PURE__ */ Z(mt, { children: [
                        /* @__PURE__ */ h(Rf, {}),
                        " ",
                        e(p.name)
                      ] }, `scope${p.id}`))
                    ] }),
                    u.tosUri && /* @__PURE__ */ Z(ht, { children: [
                      /* @__PURE__ */ h(gt, { children: e("termsOfService") }),
                      /* @__PURE__ */ h(mt, { children: u.tosUri })
                    ] }),
                    u.policyUri && /* @__PURE__ */ Z(ht, { children: [
                      /* @__PURE__ */ h(gt, { children: e("privacyPolicy") }),
                      /* @__PURE__ */ h(mt, { children: u.policyUri })
                    ] }),
                    u.logoUri && /* @__PURE__ */ Z(ht, { children: [
                      /* @__PURE__ */ h(gt, { children: e("logo") }),
                      /* @__PURE__ */ h(mt, { children: /* @__PURE__ */ h("img", { src: u.logoUri }) })
                    ] }),
                    /* @__PURE__ */ Z(ht, { children: [
                      /* @__PURE__ */ h(gt, { children: e("accessGrantedOn") }),
                      /* @__PURE__ */ h(mt, { children: wr(new Date(u.consent.createdDate)) })
                    ] })
                  ] })
                ] }),
                (u.consent || u.offlineAccess) && /* @__PURE__ */ Z(Qa, { hasGutter: !0, children: [
                  /* @__PURE__ */ h("hr", {}),
                  /* @__PURE__ */ h(gn, { children: /* @__PURE__ */ h(
                    Pr,
                    {
                      buttonTitle: e("removeAccess"),
                      modalTitle: e("removeAccess"),
                      continueLabel: e("confirm"),
                      cancelLabel: e("cancel"),
                      buttonVariant: "secondary",
                      onContinue: () => f(u.clientId),
                      children: e("removeModalMessage", { name: u.clientId })
                    }
                  ) }),
                  /* @__PURE__ */ Z(gn, { children: [
                    /* @__PURE__ */ h(Hv, {}),
                    " ",
                    e("infoMessage")
                  ] })
                ] })
              ]
            }
          )
        ]
      },
      u.clientId
    ))
  ] }) }) : /* @__PURE__ */ h(Xt, {});
};
function pm(e, t) {
  for (const n of e) {
    if ("path" in n && n.path.endsWith(t) && "modulePath" in n)
      return n.modulePath;
    if ("children" in n)
      return pm(n.children, t);
  }
}
const z4 = () => {
  const e = at(), [t, n] = me(), { componentId: i } = Lm();
  Wt((a) => cm({ signal: a, context: e }), n);
  const r = lt(
    () => pm(t || [], i),
    [t, i]
  );
  return r && /* @__PURE__ */ h(y4, { modulePath: r });
}, y4 = ({ modulePath: e }) => {
  const { environment: t } = at(), n = wm(
    () => import(Sn(t.resourceUrl, e))
  );
  return /* @__PURE__ */ h(Hd, { fallback: /* @__PURE__ */ h(Xt, {}), children: /* @__PURE__ */ h(n, {}) });
}, W4 = () => {
  const { t: e } = je(), t = at(), [n, i] = me([]), [r, a] = me(!1);
  Wt(
    (l) => O_({ signal: l, context: t }),
    (l) => {
      r || l.forEach(
        (c) => s(
          c,
          l,
          l.map(({ path: d }) => d)
        )
      ), i(l);
    },
    [r]
  );
  const s = (l, c, d) => {
    const f = l.path.slice(0, l.path.lastIndexOf("/"));
    f && !d.includes(f) && (l = {
      name: f.slice(f.lastIndexOf("/") + 1),
      path: f
    }, c.push(l), d.push(f), s(l, c, d));
  };
  return /* @__PURE__ */ h(Zn, { title: e("groups"), description: e("groupDescriptionLabel"), children: /* @__PURE__ */ Z(ui, { id: "groups-list", "aria-label": e("groups"), isCompact: !0, children: [
    /* @__PURE__ */ h(
      Bt,
      {
        id: "groups-list-header",
        "aria-label": e("groupsListHeader"),
        children: /* @__PURE__ */ h(nn, { children: /* @__PURE__ */ h(
          xn,
          {
            dataListCells: [
              /* @__PURE__ */ h(qe, { children: /* @__PURE__ */ h(
                Ht,
                {
                  label: e("directMembership"),
                  id: "directMembership-checkbox",
                  "data-testid": "directMembership-checkbox",
                  isChecked: r,
                  onChange: (l, c) => a(c)
                }
              ) }, "directMembership-header")
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ h(
      Bt,
      {
        id: "groups-list-columns-names",
        "aria-label": e("groupsListColumnsNames"),
        children: /* @__PURE__ */ h(nn, { children: /* @__PURE__ */ h(
          xn,
          {
            dataListCells: [
              /* @__PURE__ */ h(qe, { width: 2, children: /* @__PURE__ */ h("strong", { children: e("name") }) }, "group-name-header"),
              /* @__PURE__ */ h(qe, { width: 2, children: /* @__PURE__ */ h("strong", { children: e("path") }) }, "group-path-header"),
              /* @__PURE__ */ h(qe, { width: 2, children: /* @__PURE__ */ h("strong", { children: e("directMembership") }) }, "group-direct-membership-header")
            ]
          }
        ) })
      }
    ),
    n.map((l, c) => /* @__PURE__ */ h(
      Bt,
      {
        id: `${c}-group`,
        "aria-labelledby": "groups-list",
        children: /* @__PURE__ */ h(nn, { children: /* @__PURE__ */ h(
          xn,
          {
            dataListCells: [
              /* @__PURE__ */ h(
                qe,
                {
                  "data-testid": `group[${c}].name`,
                  width: 2,
                  children: l.name
                },
                "name-" + c
              ),
              /* @__PURE__ */ h(
                qe,
                {
                  id: `${c}-group-path`,
                  width: 2,
                  children: l.path
                },
                "path-" + c
              ),
              /* @__PURE__ */ h(
                qe,
                {
                  id: `${c}-group-directMembership`,
                  width: 2,
                  children: /* @__PURE__ */ h(
                    Ht,
                    {
                      id: `${c}-checkbox-directMembership`,
                      isChecked: l.id != null,
                      isDisabled: !0
                    }
                  )
                },
                "directMembership-" + c
              )
            ]
          }
        ) })
      },
      "group-" + c
    ))
  ] }) });
};
function x4(e) {
  const t = e.headers.get("link");
  return t ? t.split(/,\s*</).reduce((i, r) => {
    const a = /<?([^>]*)>(.*)/.exec(r);
    if (!a) return {};
    const s = a[1], l = /\s*(.+)\s*=\s*"?([^"]+)"?/.exec(a[2]);
    if (l) {
      const c = {};
      for (const [d, f] of new URL(s).searchParams.entries())
        c[d] = f;
      i[l[2]] = c;
    }
    return i;
  }, {}) : {};
}
const w4 = async ({ signal: e, context: t }, n, i = !1) => {
  const r = await Qe(
    `/resources${i ? "/shared-with-me?" : "?"}`,
    t,
    { searchParams: i ? n : void 0, signal: e }
  ), a = x4(r);
  return {
    data: O4(await r.json()),
    links: a
  };
}, mm = async ({ signal: e, context: t }, n) => {
  const i = await Qe(
    `/resources/${n}/permissions`,
    t,
    { signal: e }
  );
  return Pt(i);
}, hm = (e, t, n, i) => Qe(`/resources/${t}/permissions`, e, {
  method: "PUT",
  body: [{ username: n, scopes: i }]
}), gm = (e, t, n) => Qe(`/resources/${t}/permissions`, e, {
  method: "PUT",
  body: n
});
function O4(e) {
  if (!e) throw new Error("Could not fetch");
  return e;
}
async function C4(e) {
  const t = await Qe(
    Sn(
      "/realms/",
      e.environment.realm,
      "/.well-known/openid-credential-issuer"
    ),
    e,
    {},
    new URL(
      Sn(
        e.environment.serverBaseUrl,
        "/realms/",
        e.environment.realm,
        "/.well-known/openid-credential-issuer"
      )
    )
  );
  return Pt(t);
}
async function _4(e, t, n) {
  return (await Qe(
    "/protocol/oid4vc/credential-offer-uri",
    e,
    {
      searchParams: {
        credential_configuration_id: t.id,
        type: "qr-code",
        width: "500",
        height: "500"
      }
    },
    new URL(
      Sn(
        n.credential_issuer + "/protocol/oid4vc/credential-offer-uri"
      )
    )
  )).blob();
}
const E4 = ({
  resource: e,
  permissions: t,
  onClose: n
}) => {
  const { t: i } = je(), r = at(), { addAlert: a, addError: s } = Qn(), l = wl(), { control: c, reset: d, handleSubmit: f } = l, { fields: u } = qu({
    control: c,
    name: "permissions"
  });
  Nt(() => d({ permissions: t }), []);
  const p = async ({ permissions: m }) => {
    try {
      await Promise.all(
        m.map(
          (g) => gm(r, e._id, [g])
        )
      ), a(i("updateSuccess")), n();
    } catch (g) {
      s("updateError", g);
    }
  };
  return /* @__PURE__ */ h(
    At,
    {
      title: i("editTheResource", { name: e.name }),
      variant: "medium",
      isOpen: !0,
      onClose: n,
      actions: [
        /* @__PURE__ */ h(
          ce,
          {
            variant: "primary",
            id: "done",
            type: "submit",
            form: "edit-form",
            children: i("done")
          },
          "confirm"
        )
      ],
      children: /* @__PURE__ */ h(Gr, { id: "edit-form", onSubmit: f(p), children: /* @__PURE__ */ h(bl, { ...l, children: u.map((m, g) => /* @__PURE__ */ Z(Io, { children: [
        /* @__PURE__ */ h(
          L3,
          {
            name: `permissions.${g}.username`,
            label: i("user"),
            isDisabled: !0
          }
        ),
        /* @__PURE__ */ h(
          Fl,
          {
            id: `permissions-${m.id}`,
            name: `permissions.${g}.scopes`,
            label: "permissions",
            variant: "typeaheadMulti",
            controller: { defaultValue: [] },
            options: e.scopes.map(({ name: v, displayName: x }) => ({
              key: v,
              value: x || v
            }))
          }
        )
      ] }, m.id)) }) })
    }
  );
}, S4 = ({
  resource: e,
  refresh: t
}) => {
  const { t: n } = je(), i = at(), { addAlert: r, addError: a } = Qn(), [s, l] = me(!1), c = () => l(!s), d = async (f, u = !1) => {
    try {
      const p = await mm({ context: i }, e._id), { scopes: m, username: g } = p.find(
        (v) => v.username === f.username
      ) || { scopes: [], username: f.username };
      await hm(
        i,
        e._id,
        g,
        u ? [...m, ...f.scopes] : m
      ), r(n("shareSuccess")), c(), t();
    } catch (p) {
      a("shareError", p);
    }
  };
  return /* @__PURE__ */ Z(wt, { children: [
    /* @__PURE__ */ Z(ce, { variant: "link", onClick: c, children: [
      /* @__PURE__ */ h(Xn, { size: "lg", children: /* @__PURE__ */ h(O1, {}) }),
      /* @__PURE__ */ h(ja, { children: e.shareRequests?.length })
    ] }),
    /* @__PURE__ */ h(
      At,
      {
        title: n("permissionRequest", { name: e.name }),
        variant: kr.large,
        isOpen: s,
        onClose: c,
        actions: [
          /* @__PURE__ */ h(ce, { variant: "link", onClick: c, children: n("close") }, "close")
        ],
        children: /* @__PURE__ */ Z(Sl, { "aria-label": n("resources"), children: [
          /* @__PURE__ */ h(kl, { children: /* @__PURE__ */ Z(Ri, { children: [
            /* @__PURE__ */ h(Fn, { children: n("requestor") }),
            /* @__PURE__ */ h(Fn, { children: n("permissionRequests") }),
            /* @__PURE__ */ h(Fn, { "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ h(Ll, { children: e.shareRequests?.map((f) => /* @__PURE__ */ Z(Ri, { children: [
            /* @__PURE__ */ Z(Dt, { children: [
              f.firstName,
              " ",
              f.lastName,
              " ",
              f.lastName ? "" : f.username,
              /* @__PURE__ */ h("br", {}),
              /* @__PURE__ */ h(En, { component: "small", children: f.email })
            ] }),
            /* @__PURE__ */ h(Dt, { children: f.scopes.map((u) => /* @__PURE__ */ h(Ut, { isReadOnly: !0, children: u }, u.toString())) }),
            /* @__PURE__ */ Z(Dt, { children: [
              /* @__PURE__ */ h(
                ce,
                {
                  onClick: () => {
                    d(f, !0);
                  },
                  children: n("accept")
                }
              ),
              /* @__PURE__ */ h(
                ce,
                {
                  onClick: () => {
                    d(f);
                  },
                  className: "pf-v5-u-ml-sm",
                  variant: "danger",
                  children: n("deny")
                }
              )
            ] })
          ] }, f.username)) })
        ] })
      }
    )
  ] });
}, k4 = ({
  count: e,
  first: t,
  max: n,
  onNextClick: i,
  onPreviousClick: r,
  onPerPageSelect: a,
  onFilter: s,
  hasNext: l
}) => {
  const { t: c } = je(), [d, f] = me(""), u = Math.round(t / n) + 1;
  return /* @__PURE__ */ h(mi, { children: /* @__PURE__ */ Z(Jn, { children: [
    /* @__PURE__ */ h(Ft, { children: /* @__PURE__ */ h(
      al,
      {
        placeholder: c("filterByName"),
        "aria-label": c("filterByName"),
        value: d,
        onChange: (p, m) => {
          f(m);
        },
        onSearch: () => s(d),
        onKeyDown: (p) => {
          p.key === "Enter" && s(d);
        },
        onClear: () => {
          f(""), s("");
        }
      }
    ) }),
    /* @__PURE__ */ h(Ft, { variant: "pagination", children: /* @__PURE__ */ h(
      Ya,
      {
        isCompact: !0,
        perPageOptions: [
          { title: "5", value: 5 },
          { title: "10", value: 10 },
          { title: "20", value: 20 }
        ],
        toggleTemplate: ({
          firstIndex: p,
          lastIndex: m
        }) => /* @__PURE__ */ Z("b", { children: [
          p,
          " - ",
          m
        ] }),
        itemCount: e + (u - 1) * n + (l ? 1 : 0),
        page: u,
        perPage: n,
        onNextClick: (p, m) => i((m - 1) * n),
        onPreviousClick: (p, m) => r((m - 1) * n),
        onPerPageSelect: (p, m, g) => a(g - 1, m)
      }
    ) })
  ] }) });
}, bm = ({ permissions: e = [] }) => /* @__PURE__ */ h(
  "div",
  {
    "data-testid": `shared-with-${e.length ? e.map((t) => t.username) : "none"}`,
    children: /* @__PURE__ */ Z(Ud, { i18nKey: "resourceSharedWith", count: e.length, children: [
      /* @__PURE__ */ h("strong", { children: {
        username: e[0] ? e[0].username : void 0
      } }),
      /* @__PURE__ */ h("strong", { children: {
        other: e.length - 1
      } })
    ] })
  }
), L4 = ({
  resource: e,
  permissions: t,
  open: n,
  onClose: i
}) => {
  const { t: r } = je(), a = at(), { addAlert: s, addError: l } = Qn(), c = wl(), {
    control: d,
    register: f,
    reset: u,
    formState: { errors: p, isValid: m },
    setError: g,
    clearErrors: v,
    handleSubmit: x
  } = c, { fields: w, append: _, remove: S } = qu({
    control: d,
    name: "usernames"
  });
  Nt(() => {
    w.length === 0 && _({ value: "" });
  }, [w]);
  const E = vl({
    control: d,
    name: "usernames",
    defaultValue: []
  }).every(
    ({ value: N }) => N.trim().length === 0
  ), R = async ({ usernames: N, permissions: M }) => {
    try {
      await Promise.all(
        N.filter(({ value: $ }) => $ !== "").map(
          ({ value: $ }) => hm(a, e._id, $, M)
        )
      ), s(r("shareSuccess")), i();
    } catch ($) {
      l("shareError", $);
    }
    u({});
  }, k = async () => {
    const N = w.map((O) => O.value).filter((O) => O !== ""), M = t?.map((O) => [O.username, O.email]).flat(), $ = N.length > 0, D = N.filter((O) => M?.includes(O)).length !== 0;
    return !$ || D ? g("usernames", {
      message: r($ ? "resourceAlreadyShared" : "required")
    }) : v(), $ && !D;
  };
  return /* @__PURE__ */ h(
    At,
    {
      title: r("shareTheResource", { name: e.name }),
      variant: "medium",
      isOpen: n,
      onClose: i,
      actions: [
        /* @__PURE__ */ h(
          ce,
          {
            variant: "primary",
            "data-testid": "done",
            isDisabled: !m,
            type: "submit",
            form: "share-form",
            children: r("done")
          },
          "confirm"
        ),
        /* @__PURE__ */ h(ce, { variant: "link", onClick: i, children: r("cancel") }, "cancel")
      ],
      children: /* @__PURE__ */ Z(Gr, { id: "share-form", onSubmit: x(R), children: [
        /* @__PURE__ */ Z(
          wn,
          {
            label: r("shareUser"),
            type: "string",
            fieldId: "users",
            isRequired: !0,
            children: [
              /* @__PURE__ */ Z(Hn, { children: [
                /* @__PURE__ */ h(xt, { children: /* @__PURE__ */ h(
                  $t,
                  {
                    id: "users",
                    "data-testid": "users",
                    placeholder: r("usernamePlaceholder"),
                    validated: p.usernames ? zn.error : zn.default,
                    ...f(`usernames.${w.length - 1}.value`, {
                      validate: k
                    })
                  }
                ) }),
                /* @__PURE__ */ h(xt, { children: /* @__PURE__ */ h(
                  ce,
                  {
                    variant: "primary",
                    "data-testid": "add",
                    onClick: () => _({ value: "" }),
                    isDisabled: E,
                    children: r("add")
                  },
                  "add-user"
                ) })
              ] }),
              w.length > 1 && /* @__PURE__ */ h(qn, { categoryName: r("shareWith"), children: w.map(
                (N, M) => M !== w.length - 1 && /* @__PURE__ */ h(Ut, { onClick: () => S(M), children: N.value }, N.id)
              ) }),
              p.usernames && /* @__PURE__ */ h(Pl, { message: p.usernames.message })
            ]
          }
        ),
        /* @__PURE__ */ h(bl, { ...c, children: /* @__PURE__ */ h(
          wn,
          {
            label: "",
            fieldId: "permissions-selected",
            "data-testid": "permissions",
            children: /* @__PURE__ */ h(
              Fl,
              {
                name: "permissions",
                variant: "typeaheadMulti",
                controller: { defaultValue: [] },
                options: e.scopes.map(({ name: N, displayName: M }) => ({
                  key: N,
                  value: M || N
                }))
              }
            )
          }
        ) }),
        /* @__PURE__ */ h(wn, { children: /* @__PURE__ */ h(bm, { permissions: t }) })
      ] })
    }
  );
}, Fd = ({ isShared: e = !1 }) => {
  const { t } = je(), n = at(), { addAlert: i, addError: r } = Qn(), [a, s] = me({
    first: "0",
    max: "5"
  }), [l, c] = me(), [d, f] = me(), [u, p] = me({}), [m, g] = me(1), v = () => g(m + 1);
  if (Wt(
    async (S) => {
      const I = await w4(
        { signal: S, context: n },
        a,
        e
      );
      return e || await Promise.all(
        I.data.map(
          async (E) => E.shareRequests = await h_(E._id, {
            signal: S,
            context: n
          })
        )
      ), I;
    },
    ({ data: S, links: I }) => {
      f(S), c(I);
    },
    [a, m]
  ), !d)
    return /* @__PURE__ */ h(Xt, {});
  const x = async (S) => {
    let I = u[S]?.permissions || [];
    return u[S] || (I = await mm({ context: n }, S)), I;
  }, w = async (S) => {
    try {
      const I = (await x(S._id)).map(
        ({ username: E }) => ({
          username: E,
          scopes: []
        })
      );
      await gm(n, S._id, I), p({}), i(t("unShareSuccess"));
    } catch (I) {
      r("unShareError", I);
    }
  }, _ = async (S, I, E) => {
    const R = await x(S);
    p({
      ...u,
      [S]: { ...u[S], [I]: E, permissions: R }
    });
  };
  return /* @__PURE__ */ Z(wt, { children: [
    /* @__PURE__ */ h(
      k4,
      {
        onFilter: (S) => s({ ...a, name: S }),
        count: d.length,
        first: parseInt(a.first),
        max: parseInt(a.max),
        onNextClick: () => s(l?.next || {}),
        onPreviousClick: () => s(l?.prev || {}),
        onPerPageSelect: (S, I) => s({ first: `${S}`, max: `${I}` }),
        hasNext: !!l?.next
      }
    ),
    /* @__PURE__ */ Z(Sl, { "aria-label": t("resources"), children: [
      /* @__PURE__ */ h(kl, { children: /* @__PURE__ */ Z(Ri, { children: [
        /* @__PURE__ */ h(Fn, { "aria-hidden": "true" }),
        /* @__PURE__ */ h(Fn, { children: t("resourceName") }),
        /* @__PURE__ */ h(Fn, { children: t("application") }),
        /* @__PURE__ */ h(Fn, { "aria-hidden": e, children: e ? "" : t("permissionRequests") })
      ] }) }),
      d.map((S, I) => /* @__PURE__ */ Z(
        Ll,
        {
          isExpanded: u[S._id]?.rowOpen,
          children: [
            /* @__PURE__ */ Z(Ri, { children: [
              /* @__PURE__ */ h(
                Dt,
                {
                  "data-testid": `expand-${S.name}`,
                  expand: e ? void 0 : {
                    isExpanded: u[S._id]?.rowOpen || !1,
                    rowIndex: I,
                    onToggle: () => _(
                      S._id,
                      "rowOpen",
                      !u[S._id]?.rowOpen
                    )
                  }
                }
              ),
              /* @__PURE__ */ h(
                Dt,
                {
                  dataLabel: t("resourceName"),
                  "data-testid": `row[${I}].name`,
                  children: S.name
                }
              ),
              /* @__PURE__ */ h(Dt, { dataLabel: t("application"), children: /* @__PURE__ */ Z("a", { href: S.client.baseUrl, children: [
                S.client.name || S.client.clientId,
                " ",
                /* @__PURE__ */ h(zo, {})
              ] }) }),
              /* @__PURE__ */ Z(Dt, { dataLabel: t("permissionRequests"), children: [
                S.shareRequests && S.shareRequests.length > 0 && /* @__PURE__ */ h(
                  S4,
                  {
                    resource: S,
                    refresh: () => v()
                  }
                ),
                /* @__PURE__ */ h(
                  L4,
                  {
                    resource: S,
                    permissions: u[S._id]?.permissions,
                    open: u[S._id]?.shareDialogOpen || !1,
                    onClose: () => p({})
                  }
                ),
                u[S._id]?.editDialogOpen && /* @__PURE__ */ h(
                  E4,
                  {
                    resource: S,
                    permissions: u[S._id]?.permissions,
                    onClose: () => p({})
                  }
                )
              ] }),
              e ? /* @__PURE__ */ h(Dt, { children: S.scopes.length > 0 && /* @__PURE__ */ h(qn, { categoryName: t("permissions"), children: S.scopes.map((E) => /* @__PURE__ */ h(Ut, { isReadOnly: !0, children: E.displayName || E.name }, E.name)) }) }) : /* @__PURE__ */ h(Dt, { isActionCell: !0, children: /* @__PURE__ */ Z(dl, { breakpoint: "lg", children: [
                /* @__PURE__ */ h(Cu, { children: /* @__PURE__ */ Z(_u, { groupType: "button", children: [
                  /* @__PURE__ */ h(lo, { children: /* @__PURE__ */ Z(
                    ce,
                    {
                      "data-testid": `share-${S.name}`,
                      variant: "link",
                      onClick: () => _(S._id, "shareDialogOpen", !0),
                      children: [
                        /* @__PURE__ */ h(Ic, {}),
                        " ",
                        t("share")
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ h(lo, { children: /* @__PURE__ */ h(
                    pi,
                    {
                      popperProps: {
                        position: "right"
                      },
                      onOpenChange: (E) => _(S._id, "contextOpen", E),
                      toggle: (E) => /* @__PURE__ */ h(
                        yt,
                        {
                          variant: "plain",
                          ref: E,
                          onClick: () => _(
                            S._id,
                            "contextOpen",
                            !u[S._id]?.contextOpen
                          ),
                          isExpanded: u[S._id]?.contextOpen,
                          children: /* @__PURE__ */ h(Tr, {})
                        }
                      ),
                      isOpen: !!u[S._id]?.contextOpen,
                      children: /* @__PURE__ */ Z(Lr, { children: [
                        /* @__PURE__ */ Z(
                          _n,
                          {
                            isDisabled: u[S._id]?.permissions?.length === 0,
                            onClick: () => _(
                              S._id,
                              "editDialogOpen",
                              !0
                            ),
                            children: [
                              /* @__PURE__ */ h(kc, {}),
                              " ",
                              t("edit")
                            ]
                          }
                        ),
                        /* @__PURE__ */ h(
                          Pr,
                          {
                            buttonTitle: /* @__PURE__ */ Z(wt, { children: [
                              /* @__PURE__ */ h(Lc, {}),
                              " ",
                              t("unShare")
                            ] }),
                            modalTitle: t("unShare"),
                            continueLabel: t("confirm"),
                            cancelLabel: t("cancel"),
                            component: _n,
                            onContinue: () => w(S),
                            isDisabled: u[S._id]?.permissions?.length === 0,
                            children: t("unShareAllConfirm")
                          }
                        )
                      ] })
                    }
                  ) })
                ] }) }),
                /* @__PURE__ */ h(Ou, { children: /* @__PURE__ */ h(
                  pi,
                  {
                    popperProps: {
                      position: "right"
                    },
                    onOpenChange: (E) => _(S._id, "contextOpen", E),
                    toggle: (E) => /* @__PURE__ */ h(
                      yt,
                      {
                        variant: "plain",
                        ref: E,
                        isExpanded: u[S._id]?.contextOpen,
                        onClick: () => _(
                          S._id,
                          "contextOpen",
                          !u[S._id]?.contextOpen
                        ),
                        children: /* @__PURE__ */ h(Tr, {})
                      }
                    ),
                    isOpen: !!u[S._id]?.contextOpen,
                    children: /* @__PURE__ */ Z(Lr, { children: [
                      /* @__PURE__ */ Z(
                        da,
                        {
                          isShared: !0,
                          onClick: () => _(S._id, "shareDialogOpen", !0),
                          children: [
                            /* @__PURE__ */ h(Ic, {}),
                            " ",
                            t("share")
                          ]
                        },
                        "share"
                      ),
                      /* @__PURE__ */ Z(
                        da,
                        {
                          isShared: !0,
                          onClick: () => _(S._id, "editDialogOpen", !0),
                          isDisabled: u[S._id]?.permissions?.length === 0,
                          children: [
                            /* @__PURE__ */ h(kc, {}),
                            " ",
                            t("edit")
                          ]
                        },
                        "edit"
                      ),
                      /* @__PURE__ */ h(
                        Pr,
                        {
                          buttonTitle: /* @__PURE__ */ Z(wt, { children: [
                            /* @__PURE__ */ h(Lc, {}),
                            " ",
                            t("unShare")
                          ] }),
                          modalTitle: t("unShare"),
                          continueLabel: t("confirm"),
                          cancelLabel: t("cancel"),
                          component: da,
                          onContinue: () => w(S),
                          isDisabled: u[S._id]?.permissions?.length === 0,
                          children: t("unShareAllConfirm")
                        },
                        "unShare"
                      )
                    ] })
                  }
                ) })
              ] }) })
            ] }),
            /* @__PURE__ */ h(Ri, { isExpanded: u[S._id]?.rowOpen || !1, children: /* @__PURE__ */ h(Dt, { colSpan: 4, textCenter: !0, children: /* @__PURE__ */ h(lp, { children: /* @__PURE__ */ h(
              bm,
              {
                permissions: u[S._id]?.permissions
              }
            ) }) }) })
          ]
        },
        S.name
      ))
    ] })
  ] });
}, G4 = () => {
  const { t: e } = je(), [t, n] = me(0);
  return /* @__PURE__ */ h(Zn, { title: e("resources"), description: e("resourceIntroMessage"), children: /* @__PURE__ */ Z(
    zi,
    {
      activeKey: t,
      onSelect: (i, r) => n(r),
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: [
        /* @__PURE__ */ h(
          co,
          {
            "data-testid": "myResources",
            eventKey: 0,
            title: /* @__PURE__ */ h(ya, { children: e("myResources") }),
            children: /* @__PURE__ */ h(Fd, {})
          }
        ),
        /* @__PURE__ */ h(
          co,
          {
            "data-testid": "sharedWithMe",
            eventKey: 1,
            title: /* @__PURE__ */ h(ya, { children: e("sharedWithMe") }),
            children: /* @__PURE__ */ h(Fd, { isShared: !0 })
          }
        )
      ]
    }
  ) });
}, K4 = () => {
  const e = at(), { t } = je(), n = t("verifiableCredentialsSelectionDefault"), [i, r] = me(n), [a, s] = me(""), [l, c] = me(!1), [d, f] = me(!1), [u, p] = me();
  Wt(() => C4(e), p);
  const m = lt(() => typeof u < "u" ? u.credential_configurations_supported : {}, [u]), g = lt(() => typeof m < "u" ? Array.from(Object.keys(m)) : [], [m]);
  Nt(() => {
    n !== i && u !== void 0 && _4(e, m[i], u).then(
      (w) => {
        const _ = new FileReader();
        _.readAsDataURL(w), _.onloadend = function() {
          const S = _.result;
          typeof S == "string" && (s(S), f(!0), c(!1));
        };
      }
    );
  }, [i]);
  const v = () => {
    c(!l);
  }, x = (w) => /* @__PURE__ */ h(
    yt,
    {
      ref: w,
      onClick: v,
      isExpanded: l,
      "data-testid": "menu-toggle",
      children: i
    }
  );
  return /* @__PURE__ */ h(
    Zn,
    {
      title: t("verifiableCredentialsTitle"),
      description: t("verifiableCredentialsDescription"),
      children: /* @__PURE__ */ h(Hi, { isFilled: !0, variant: ai.light, children: /* @__PURE__ */ Z(hu, { isPlain: !0, children: [
        /* @__PURE__ */ h(oo, { children: /* @__PURE__ */ h(
          Kn,
          {
            "data-testid": "credential-select",
            onOpenChange: (w) => c(w),
            onSelect: (w, _) => r(_),
            isOpen: l,
            selected: i,
            toggle: x,
            shouldFocusToggleOnSelect: !0,
            children: /* @__PURE__ */ h(Xi, { children: g.map((w) => /* @__PURE__ */ h(
              Wr,
              {
                value: w,
                "data-testid": w,
                children: w
              },
              w
            )) })
          }
        ) }),
        /* @__PURE__ */ h(oo, { children: /* @__PURE__ */ h(Cf, { children: d && /* @__PURE__ */ h(_f, { children: /* @__PURE__ */ h(
          "img",
          {
            width: "500",
            height: "500",
            src: a,
            "data-testid": "qr-code"
          }
        ) }) }) })
      ] }) })
    }
  );
};
export {
  U4 as Applications,
  z4 as ContentComponent,
  j4 as DeviceActivity,
  E4 as EditTheResource,
  Lo as EmptyRow,
  F4 as ErrorPage,
  W4 as Groups,
  $4 as Header,
  M4 as KeycloakProvider,
  V4 as LinkedAccounts,
  K4 as Oid4Vci,
  Zn as Page,
  B4 as PageNav,
  S4 as PermissionRequest,
  D4 as PersonalInfo,
  k4 as ResourceToolbar,
  G4 as Resources,
  Fd as ResourcesTab,
  L4 as ShareTheResource,
  bm as SharedWith,
  H4 as SigningIn,
  v_ as deleteConsent,
  hd as deleteSession,
  b_ as getApplications,
  y_ as getCredentials,
  g_ as getDevices,
  O_ as getGroups,
  gd as getLinkedAccounts,
  h_ as getPermissionRequests,
  u_ as getPersonalInfo,
  p_ as getSupportedLocales,
  w_ as linkAccount,
  m_ as savePersonalInfo,
  x_ as unLinkAccount,
  Qn as useAccountAlerts,
  at as useEnvironment,
  Wt as usePromise
};
//# sourceMappingURL=keycloak-account-ui.js.map
