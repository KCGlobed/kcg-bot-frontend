function Kh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Sf = { exports: {} }, da = {};
var Xy;
function JE() {
  if (Xy) return da;
  Xy = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(l, o, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      c = {};
      for (var h in o)
        h !== "key" && (c[h] = o[h]);
    } else c = o;
    return o = c.ref, {
      $$typeof: t,
      type: l,
      key: u,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return da.Fragment = n, da.jsx = r, da.jsxs = r, da;
}
var Iy;
function $E() {
  return Iy || (Iy = 1, Sf.exports = JE()), Sf.exports;
}
var ft = $E(), Tf = { exports: {} }, St = {};
var Ky;
function WE() {
  if (Ky) return St;
  Ky = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), u = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), v = Symbol.iterator;
  function x(R) {
    return R === null || typeof R != "object" ? null : (R = v && R[v] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, A = {};
  function C(R, F, E) {
    this.props = R, this.context = F, this.refs = A, this.updater = E || S;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, F) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, F, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function L() {
  }
  L.prototype = C.prototype;
  function M(R, F, E) {
    this.props = R, this.context = F, this.refs = A, this.updater = E || S;
  }
  var Y = M.prototype = new L();
  Y.constructor = M, w(Y, C.prototype), Y.isPureReactComponent = !0;
  var Q = Array.isArray;
  function _() {
  }
  var Z = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function lt(R, F, E) {
    var at = E.ref;
    return {
      $$typeof: t,
      type: R,
      key: F,
      ref: at !== void 0 ? at : null,
      props: E
    };
  }
  function B(R, F) {
    return lt(R.type, F, R.props);
  }
  function et(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function nt(R) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(E) {
      return F[E];
    });
  }
  var xt = /\/+/g;
  function st(R, F) {
    return typeof R == "object" && R !== null && R.key != null ? nt("" + R.key) : F.toString(36);
  }
  function W(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(_, _) : (R.status = "pending", R.then(
          function(F) {
            R.status === "pending" && (R.status = "fulfilled", R.value = F);
          },
          function(F) {
            R.status === "pending" && (R.status = "rejected", R.reason = F);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function N(R, F, E, at, mt) {
    var ht = typeof R;
    (ht === "undefined" || ht === "boolean") && (R = null);
    var Rt = !1;
    if (R === null) Rt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          Rt = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case n:
              Rt = !0;
              break;
            case g:
              return Rt = R._init, N(
                Rt(R._payload),
                F,
                E,
                at,
                mt
              );
          }
      }
    if (Rt)
      return mt = mt(R), Rt = at === "" ? "." + st(R, 0) : at, Q(mt) ? (E = "", Rt != null && (E = Rt.replace(xt, "$&/") + "/"), N(mt, F, E, "", function(rn) {
        return rn;
      })) : mt != null && (et(mt) && (mt = B(
        mt,
        E + (mt.key == null || R && R.key === mt.key ? "" : ("" + mt.key).replace(
          xt,
          "$&/"
        ) + "/") + Rt
      )), F.push(mt)), 1;
    Rt = 0;
    var Jt = at === "" ? "." : at + ":";
    if (Q(R))
      for (var Ht = 0; Ht < R.length; Ht++)
        at = R[Ht], ht = Jt + st(at, Ht), Rt += N(
          at,
          F,
          E,
          ht,
          mt
        );
    else if (Ht = x(R), typeof Ht == "function")
      for (R = Ht.call(R), Ht = 0; !(at = R.next()).done; )
        at = at.value, ht = Jt + st(at, Ht++), Rt += N(
          at,
          F,
          E,
          ht,
          mt
        );
    else if (ht === "object") {
      if (typeof R.then == "function")
        return N(
          W(R),
          F,
          E,
          at,
          mt
        );
      throw F = String(R), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Rt;
  }
  function I(R, F, E) {
    if (R == null) return R;
    var at = [], mt = 0;
    return N(R, at, "", "", function(ht) {
      return F.call(E, ht, mt++);
    }), at;
  }
  function it(R) {
    if (R._status === -1) {
      var F = R._result;
      F = F(), F.then(
        function(E) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = E);
        },
        function(E) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = E);
        }
      ), R._status === -1 && (R._status = 0, R._result = F);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var yt = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  }, k = {
    map: I,
    forEach: function(R, F, E) {
      I(
        R,
        function() {
          F.apply(this, arguments);
        },
        E
      );
    },
    count: function(R) {
      var F = 0;
      return I(R, function() {
        F++;
      }), F;
    },
    toArray: function(R) {
      return I(R, function(F) {
        return F;
      }) || [];
    },
    only: function(R) {
      if (!et(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  };
  return St.Activity = y, St.Children = k, St.Component = C, St.Fragment = r, St.Profiler = o, St.PureComponent = M, St.StrictMode = l, St.Suspense = m, St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, St.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return Z.H.useMemoCache(R);
    }
  }, St.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, St.cacheSignal = function() {
    return null;
  }, St.cloneElement = function(R, F, E) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var at = w({}, R.props), mt = R.key;
    if (F != null)
      for (ht in F.key !== void 0 && (mt = "" + F.key), F)
        !J.call(F, ht) || ht === "key" || ht === "__self" || ht === "__source" || ht === "ref" && F.ref === void 0 || (at[ht] = F[ht]);
    var ht = arguments.length - 2;
    if (ht === 1) at.children = E;
    else if (1 < ht) {
      for (var Rt = Array(ht), Jt = 0; Jt < ht; Jt++)
        Rt[Jt] = arguments[Jt + 2];
      at.children = Rt;
    }
    return lt(R.type, mt, at);
  }, St.createContext = function(R) {
    return R = {
      $$typeof: u,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: c,
      _context: R
    }, R;
  }, St.createElement = function(R, F, E) {
    var at, mt = {}, ht = null;
    if (F != null)
      for (at in F.key !== void 0 && (ht = "" + F.key), F)
        J.call(F, at) && at !== "key" && at !== "__self" && at !== "__source" && (mt[at] = F[at]);
    var Rt = arguments.length - 2;
    if (Rt === 1) mt.children = E;
    else if (1 < Rt) {
      for (var Jt = Array(Rt), Ht = 0; Ht < Rt; Ht++)
        Jt[Ht] = arguments[Ht + 2];
      mt.children = Jt;
    }
    if (R && R.defaultProps)
      for (at in Rt = R.defaultProps, Rt)
        mt[at] === void 0 && (mt[at] = Rt[at]);
    return lt(R, ht, mt);
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(R) {
    return { $$typeof: h, render: R };
  }, St.isValidElement = et, St.lazy = function(R) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: R },
      _init: it
    };
  }, St.memo = function(R, F) {
    return {
      $$typeof: d,
      type: R,
      compare: F === void 0 ? null : F
    };
  }, St.startTransition = function(R) {
    var F = Z.T, E = {};
    Z.T = E;
    try {
      var at = R(), mt = Z.S;
      mt !== null && mt(E, at), typeof at == "object" && at !== null && typeof at.then == "function" && at.then(_, yt);
    } catch (ht) {
      yt(ht);
    } finally {
      F !== null && E.types !== null && (F.types = E.types), Z.T = F;
    }
  }, St.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, St.use = function(R) {
    return Z.H.use(R);
  }, St.useActionState = function(R, F, E) {
    return Z.H.useActionState(R, F, E);
  }, St.useCallback = function(R, F) {
    return Z.H.useCallback(R, F);
  }, St.useContext = function(R) {
    return Z.H.useContext(R);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(R, F) {
    return Z.H.useDeferredValue(R, F);
  }, St.useEffect = function(R, F) {
    return Z.H.useEffect(R, F);
  }, St.useEffectEvent = function(R) {
    return Z.H.useEffectEvent(R);
  }, St.useId = function() {
    return Z.H.useId();
  }, St.useImperativeHandle = function(R, F, E) {
    return Z.H.useImperativeHandle(R, F, E);
  }, St.useInsertionEffect = function(R, F) {
    return Z.H.useInsertionEffect(R, F);
  }, St.useLayoutEffect = function(R, F) {
    return Z.H.useLayoutEffect(R, F);
  }, St.useMemo = function(R, F) {
    return Z.H.useMemo(R, F);
  }, St.useOptimistic = function(R, F) {
    return Z.H.useOptimistic(R, F);
  }, St.useReducer = function(R, F, E) {
    return Z.H.useReducer(R, F, E);
  }, St.useRef = function(R) {
    return Z.H.useRef(R);
  }, St.useState = function(R) {
    return Z.H.useState(R);
  }, St.useSyncExternalStore = function(R, F, E) {
    return Z.H.useSyncExternalStore(
      R,
      F,
      E
    );
  }, St.useTransition = function() {
    return Z.H.useTransition();
  }, St.version = "19.2.4", St;
}
var Qy;
function Qh() {
  return Qy || (Qy = 1, Tf.exports = WE()), Tf.exports;
}
var tt = Qh();
const Cb = /* @__PURE__ */ Kh(tt);
var Ef = { exports: {} }, ma = {}, Af = { exports: {} }, wf = {};
var Zy;
function tA() {
  return Zy || (Zy = 1, (function(t) {
    function n(N, I) {
      var it = N.length;
      N.push(I);
      t: for (; 0 < it; ) {
        var yt = it - 1 >>> 1, k = N[yt];
        if (0 < o(k, I))
          N[yt] = I, N[it] = k, it = yt;
        else break t;
      }
    }
    function r(N) {
      return N.length === 0 ? null : N[0];
    }
    function l(N) {
      if (N.length === 0) return null;
      var I = N[0], it = N.pop();
      if (it !== I) {
        N[0] = it;
        t: for (var yt = 0, k = N.length, R = k >>> 1; yt < R; ) {
          var F = 2 * (yt + 1) - 1, E = N[F], at = F + 1, mt = N[at];
          if (0 > o(E, it))
            at < k && 0 > o(mt, E) ? (N[yt] = mt, N[at] = it, yt = at) : (N[yt] = E, N[F] = it, yt = F);
          else if (at < k && 0 > o(mt, it))
            N[yt] = mt, N[at] = it, yt = at;
          else break t;
        }
      }
      return I;
    }
    function o(N, I) {
      var it = N.sortIndex - I.sortIndex;
      return it !== 0 ? it : N.id - I.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, h = u.now();
      t.unstable_now = function() {
        return u.now() - h;
      };
    }
    var m = [], d = [], g = 1, y = null, v = 3, x = !1, S = !1, w = !1, A = !1, C = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function Y(N) {
      for (var I = r(d); I !== null; ) {
        if (I.callback === null) l(d);
        else if (I.startTime <= N)
          l(d), I.sortIndex = I.expirationTime, n(m, I);
        else break;
        I = r(d);
      }
    }
    function Q(N) {
      if (w = !1, Y(N), !S)
        if (r(m) !== null)
          S = !0, _ || (_ = !0, nt());
        else {
          var I = r(d);
          I !== null && W(Q, I.startTime - N);
        }
    }
    var _ = !1, Z = -1, J = 5, lt = -1;
    function B() {
      return A ? !0 : !(t.unstable_now() - lt < J);
    }
    function et() {
      if (A = !1, _) {
        var N = t.unstable_now();
        lt = N;
        var I = !0;
        try {
          t: {
            S = !1, w && (w = !1, L(Z), Z = -1), x = !0;
            var it = v;
            try {
              e: {
                for (Y(N), y = r(m); y !== null && !(y.expirationTime > N && B()); ) {
                  var yt = y.callback;
                  if (typeof yt == "function") {
                    y.callback = null, v = y.priorityLevel;
                    var k = yt(
                      y.expirationTime <= N
                    );
                    if (N = t.unstable_now(), typeof k == "function") {
                      y.callback = k, Y(N), I = !0;
                      break e;
                    }
                    y === r(m) && l(m), Y(N);
                  } else l(m);
                  y = r(m);
                }
                if (y !== null) I = !0;
                else {
                  var R = r(d);
                  R !== null && W(
                    Q,
                    R.startTime - N
                  ), I = !1;
                }
              }
              break t;
            } finally {
              y = null, v = it, x = !1;
            }
            I = void 0;
          }
        } finally {
          I ? nt() : _ = !1;
        }
      }
    }
    var nt;
    if (typeof M == "function")
      nt = function() {
        M(et);
      };
    else if (typeof MessageChannel < "u") {
      var xt = new MessageChannel(), st = xt.port2;
      xt.port1.onmessage = et, nt = function() {
        st.postMessage(null);
      };
    } else
      nt = function() {
        C(et, 0);
      };
    function W(N, I) {
      Z = C(function() {
        N(t.unstable_now());
      }, I);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, t.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < N ? Math.floor(1e3 / N) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, t.unstable_next = function(N) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = v;
      }
      var it = v;
      v = I;
      try {
        return N();
      } finally {
        v = it;
      }
    }, t.unstable_requestPaint = function() {
      A = !0;
    }, t.unstable_runWithPriority = function(N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var it = v;
      v = N;
      try {
        return I();
      } finally {
        v = it;
      }
    }, t.unstable_scheduleCallback = function(N, I, it) {
      var yt = t.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? yt + it : yt) : it = yt, N) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = it + k, N = {
        id: g++,
        callback: I,
        priorityLevel: N,
        startTime: it,
        expirationTime: k,
        sortIndex: -1
      }, it > yt ? (N.sortIndex = it, n(d, N), r(m) === null && N === r(d) && (w ? (L(Z), Z = -1) : w = !0, W(Q, it - yt))) : (N.sortIndex = k, n(m, N), S || x || (S = !0, _ || (_ = !0, nt()))), N;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(N) {
      var I = v;
      return function() {
        var it = v;
        v = I;
        try {
          return N.apply(this, arguments);
        } finally {
          v = it;
        }
      };
    };
  })(wf)), wf;
}
var Jy;
function eA() {
  return Jy || (Jy = 1, Af.exports = tA()), Af.exports;
}
var Cf = { exports: {} }, Ae = {};
var $y;
function nA() {
  if ($y) return Ae;
  $y = 1;
  var t = Qh();
  function n(m) {
    var d = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        d += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + m + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var l = {
    d: {
      f: r,
      r: function() {
        throw Error(n(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function c(m, d, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: d,
      implementation: g
    };
  }
  var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, d) {
    if (m === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Ae.createPortal = function(m, d) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(n(299));
    return c(m, d, null, g);
  }, Ae.flushSync = function(m) {
    var d = u.T, g = l.p;
    try {
      if (u.T = null, l.p = 2, m) return m();
    } finally {
      u.T = d, l.p = g, l.d.f();
    }
  }, Ae.preconnect = function(m, d) {
    typeof m == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, l.d.C(m, d));
  }, Ae.prefetchDNS = function(m) {
    typeof m == "string" && l.d.D(m);
  }, Ae.preinit = function(m, d) {
    if (typeof m == "string" && d && typeof d.as == "string") {
      var g = d.as, y = h(g, d.crossOrigin), v = typeof d.integrity == "string" ? d.integrity : void 0, x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      g === "style" ? l.d.S(
        m,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: y,
          integrity: v,
          fetchPriority: x
        }
      ) : g === "script" && l.d.X(m, {
        crossOrigin: y,
        integrity: v,
        fetchPriority: x,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, Ae.preinitModule = function(m, d) {
    if (typeof m == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var g = h(
            d.as,
            d.crossOrigin
          );
          l.d.M(m, {
            crossOrigin: g,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && l.d.M(m);
  }, Ae.preload = function(m, d) {
    if (typeof m == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var g = d.as, y = h(g, d.crossOrigin);
      l.d.L(m, g, {
        crossOrigin: y,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, Ae.preloadModule = function(m, d) {
    if (typeof m == "string")
      if (d) {
        var g = h(d.as, d.crossOrigin);
        l.d.m(m, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: g,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else l.d.m(m);
  }, Ae.requestFormReset = function(m) {
    l.d.r(m);
  }, Ae.unstable_batchedUpdates = function(m, d) {
    return m(d);
  }, Ae.useFormState = function(m, d, g) {
    return u.H.useFormState(m, d, g);
  }, Ae.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, Ae.version = "19.2.4", Ae;
}
var Wy;
function iA() {
  if (Wy) return Cf.exports;
  Wy = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), Cf.exports = nA(), Cf.exports;
}
var t0;
function rA() {
  if (t0) return ma;
  t0 = 1;
  var t = eA(), n = Qh(), r = iA();
  function l(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        i += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var i = e, a = e;
    if (e.alternate) for (; i.return; ) i = i.return;
    else {
      e = i;
      do
        i = e, (i.flags & 4098) !== 0 && (a = i.return), e = i.return;
      while (e);
    }
    return i.tag === 3 ? a : null;
  }
  function u(e) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(l(188));
  }
  function d(e) {
    var i = e.alternate;
    if (!i) {
      if (i = c(e), i === null) throw Error(l(188));
      return i !== e ? null : e;
    }
    for (var a = e, s = i; ; ) {
      var f = a.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (s = f.return, s !== null) {
          a = s;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === a) return m(f), e;
          if (p === s) return m(f), i;
          p = p.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== s.return) a = f, s = p;
      else {
        for (var b = !1, T = f.child; T; ) {
          if (T === a) {
            b = !0, a = f, s = p;
            break;
          }
          if (T === s) {
            b = !0, s = f, a = p;
            break;
          }
          T = T.sibling;
        }
        if (!b) {
          for (T = p.child; T; ) {
            if (T === a) {
              b = !0, a = p, s = f;
              break;
            }
            if (T === s) {
              b = !0, s = p, a = f;
              break;
            }
            T = T.sibling;
          }
          if (!b) throw Error(l(189));
        }
      }
      if (a.alternate !== s) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? e : i;
  }
  function g(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e;
    for (e = e.child; e !== null; ) {
      if (i = g(e), i !== null) return i;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, v = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), lt = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), et = Symbol.iterator;
  function nt(e) {
    return e === null || typeof e != "object" ? null : (e = et && e[et] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var xt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function st(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case w:
        return "Fragment";
      case C:
        return "Profiler";
      case A:
        return "StrictMode";
      case Q:
        return "Suspense";
      case _:
        return "SuspenseList";
      case lt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case M:
          return e.displayName || "Context";
        case L:
          return (e._context.displayName || "Context") + ".Consumer";
        case Y:
          var i = e.render;
          return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return i = e.displayName || null, i !== null ? i : st(e.type) || "Memo";
        case J:
          i = e._payload, e = e._init;
          try {
            return st(e(i));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, N = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], k = -1;
  function R(e) {
    return { current: e };
  }
  function F(e) {
    0 > k || (e.current = yt[k], yt[k] = null, k--);
  }
  function E(e, i) {
    k++, yt[k] = e.current, e.current = i;
  }
  var at = R(null), mt = R(null), ht = R(null), Rt = R(null);
  function Jt(e, i) {
    switch (E(ht, i), E(mt, e), E(at, null), i.nodeType) {
      case 9:
      case 11:
        e = (e = i.documentElement) && (e = e.namespaceURI) ? py(e) : 0;
        break;
      default:
        if (e = i.tagName, i = i.namespaceURI)
          i = py(i), e = gy(i, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    F(at), E(at, e);
  }
  function Ht() {
    F(at), F(mt), F(ht);
  }
  function rn(e) {
    e.memoizedState !== null && E(Rt, e);
    var i = at.current, a = gy(i, e.type);
    i !== a && (E(mt, e), E(at, a));
  }
  function Bn(e) {
    mt.current === e && (F(at), F(mt)), Rt.current === e && (F(Rt), ua._currentValue = it);
  }
  var xl, Qa;
  function Un(e) {
    if (xl === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        xl = i && i[1] || "", Qa = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xl + e + Qa;
  }
  var dr = !1;
  function mr(e, i) {
    if (!e || dr) return "";
    dr = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (i) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (H) {
                  var j = H;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (H) {
                  j = H;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                j = H;
              }
              (K = e()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (H) {
            if (H && j && typeof H.stack == "string")
              return [H.stack, j.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var p = s.DetermineComponentFrameRoot(), b = p[0], T = p[1];
      if (b && T) {
        var D = b.split(`
`), V = T.split(`
`);
        for (f = s = 0; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; f < V.length && !V[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (s === D.length || f === V.length)
          for (s = D.length - 1, f = V.length - 1; 1 <= s && 0 <= f && D[s] !== V[f]; )
            f--;
        for (; 1 <= s && 0 <= f; s--, f--)
          if (D[s] !== V[f]) {
            if (s !== 1 || f !== 1)
              do
                if (s--, f--, 0 > f || D[s] !== V[f]) {
                  var P = `
` + D[s].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                }
              while (1 <= s && 0 <= f);
            break;
          }
      }
    } finally {
      dr = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Un(a) : "";
  }
  function Za(e, i) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Un(e.type);
      case 16:
        return Un("Lazy");
      case 13:
        return e.child !== i && i !== null ? Un("Suspense Fallback") : Un("Suspense");
      case 19:
        return Un("SuspenseList");
      case 0:
      case 15:
        return mr(e.type, !1);
      case 11:
        return mr(e.type.render, !1);
      case 1:
        return mr(e.type, !0);
      case 31:
        return Un("Activity");
      default:
        return "";
    }
  }
  function Ja(e) {
    try {
      var i = "", a = null;
      do
        i += Za(e, a), a = e, e = e.return;
      while (e);
      return i;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var pr = Object.prototype.hasOwnProperty, gr = t.unstable_scheduleCallback, Sl = t.unstable_cancelCallback, lu = t.unstable_shouldYield, au = t.unstable_requestPaint, Re = t.unstable_now, su = t.unstable_getCurrentPriorityLevel, G = t.unstable_ImmediatePriority, rt = t.unstable_UserBlockingPriority, bt = t.unstable_NormalPriority, wt = t.unstable_LowPriority, Ut = t.unstable_IdlePriority, Ie = t.log, Vn = t.unstable_setDisableYieldValue, Me = null, he = null;
  function Ne(e) {
    if (typeof Ie == "function" && Vn(e), he && typeof he.setStrictMode == "function")
      try {
        he.setStrictMode(Me, e);
      } catch {
      }
  }
  var Yt = Math.clz32 ? Math.clz32 : US, ai = Math.log, vn = Math.LN2;
  function US(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ai(e) / vn | 0) | 0;
  }
  var $a = 256, Wa = 262144, ts = 4194304;
  function Vi(e) {
    var i = e & 42;
    if (i !== 0) return i;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function es(e, i, a) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var f = 0, p = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var T = s & 134217727;
    return T !== 0 ? (s = T & ~p, s !== 0 ? f = Vi(s) : (b &= T, b !== 0 ? f = Vi(b) : a || (a = T & ~e, a !== 0 && (f = Vi(a))))) : (T = s & ~p, T !== 0 ? f = Vi(T) : b !== 0 ? f = Vi(b) : a || (a = s & ~e, a !== 0 && (f = Vi(a)))), f === 0 ? 0 : i !== 0 && i !== f && (i & p) === 0 && (p = f & -f, a = i & -i, p >= a || p === 32 && (a & 4194048) !== 0) ? i : f;
  }
  function Tl(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function VS(e, i) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zd() {
    var e = ts;
    return ts <<= 1, (ts & 62914560) === 0 && (ts = 4194304), e;
  }
  function ou(e) {
    for (var i = [], a = 0; 31 > a; a++) i.push(e);
    return i;
  }
  function El(e, i) {
    e.pendingLanes |= i, i !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function jS(e, i, a, s, f, p) {
    var b = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var T = e.entanglements, D = e.expirationTimes, V = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var P = 31 - Yt(a), K = 1 << P;
      T[P] = 0, D[P] = -1;
      var j = V[P];
      if (j !== null)
        for (V[P] = null, P = 0; P < j.length; P++) {
          var H = j[P];
          H !== null && (H.lane &= -536870913);
        }
      a &= ~K;
    }
    s !== 0 && Jd(e, s, 0), p !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(b & ~i));
  }
  function Jd(e, i, a) {
    e.pendingLanes |= i, e.suspendedLanes &= ~i;
    var s = 31 - Yt(i);
    e.entangledLanes |= i, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930;
  }
  function $d(e, i) {
    var a = e.entangledLanes |= i;
    for (e = e.entanglements; a; ) {
      var s = 31 - Yt(a), f = 1 << s;
      f & i | e[s] & i && (e[s] |= i), a &= ~f;
    }
  }
  function Wd(e, i) {
    var a = i & -i;
    return a = (a & 42) !== 0 ? 1 : uu(a), (a & (e.suspendedLanes | i)) !== 0 ? 0 : a;
  }
  function uu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function cu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tm() {
    var e = I.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jy(e.type));
  }
  function em(e, i) {
    var a = I.p;
    try {
      return I.p = e, i();
    } finally {
      I.p = a;
    }
  }
  var si = Math.random().toString(36).slice(2), ye = "__reactFiber$" + si, Be = "__reactProps$" + si, yr = "__reactContainer$" + si, fu = "__reactEvents$" + si, HS = "__reactListeners$" + si, qS = "__reactHandles$" + si, nm = "__reactResources$" + si, Al = "__reactMarker$" + si;
  function hu(e) {
    delete e[ye], delete e[Be], delete e[fu], delete e[HS], delete e[qS];
  }
  function br(e) {
    var i = e[ye];
    if (i) return i;
    for (var a = e.parentNode; a; ) {
      if (i = a[yr] || a[ye]) {
        if (a = i.alternate, i.child !== null || a !== null && a.child !== null)
          for (e = Ey(e); e !== null; ) {
            if (a = e[ye]) return a;
            e = Ey(e);
          }
        return i;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function vr(e) {
    if (e = e[ye] || e[yr]) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3)
        return e;
    }
    return null;
  }
  function wl(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(l(33));
  }
  function xr(e) {
    var i = e[nm];
    return i || (i = e[nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function pe(e) {
    e[Al] = !0;
  }
  var im = /* @__PURE__ */ new Set(), rm = {};
  function ji(e, i) {
    Sr(e, i), Sr(e + "Capture", i);
  }
  function Sr(e, i) {
    for (rm[e] = i, e = 0; e < i.length; e++)
      im.add(i[e]);
  }
  var FS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lm = {}, am = {};
  function PS(e) {
    return pr.call(am, e) ? !0 : pr.call(lm, e) ? !1 : FS.test(e) ? am[e] = !0 : (lm[e] = !0, !1);
  }
  function ns(e, i, a) {
    if (PS(i))
      if (a === null) e.removeAttribute(i);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(i);
            return;
          case "boolean":
            var s = i.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(i);
              return;
            }
        }
        e.setAttribute(i, "" + a);
      }
  }
  function is(e, i, a) {
    if (a === null) e.removeAttribute(i);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, "" + a);
    }
  }
  function jn(e, i, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(i, a, "" + s);
    }
  }
  function ln(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function sm(e) {
    var i = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function YS(e, i, a) {
    var s = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      i
    );
    if (!e.hasOwnProperty(i) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var f = s.get, p = s.set;
      return Object.defineProperty(e, i, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(b) {
          a = "" + b, p.call(this, b);
        }
      }), Object.defineProperty(e, i, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(b) {
          a = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[i];
        }
      };
    }
  }
  function du(e) {
    if (!e._valueTracker) {
      var i = sm(e) ? "checked" : "value";
      e._valueTracker = YS(
        e,
        i,
        "" + e[i]
      );
    }
  }
  function om(e) {
    if (!e) return !1;
    var i = e._valueTracker;
    if (!i) return !0;
    var a = i.getValue(), s = "";
    return e && (s = sm(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (i.setValue(e), !0) : !1;
  }
  function rs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var GS = /[\n"\\]/g;
  function an(e) {
    return e.replace(
      GS,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mu(e, i, a, s, f, p, b, T) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), i != null ? b === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + ln(i)) : e.value !== "" + ln(i) && (e.value = "" + ln(i)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), i != null ? pu(e, b, ln(i)) : a != null ? pu(e, b, ln(a)) : s != null && e.removeAttribute("value"), f == null && p != null && (e.defaultChecked = !!p), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + ln(T) : e.removeAttribute("name");
  }
  function um(e, i, a, s, f, p, b, T) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.type = p), i != null || a != null) {
      if (!(p !== "submit" && p !== "reset" || i != null)) {
        du(e);
        return;
      }
      a = a != null ? "" + ln(a) : "", i = i != null ? "" + ln(i) : a, T || i === e.value || (e.value = i), e.defaultValue = i;
    }
    s = s ?? f, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = T ? e.checked : !!s, e.defaultChecked = !!s, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b), du(e);
  }
  function pu(e, i, a) {
    i === "number" && rs(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Tr(e, i, a, s) {
    if (e = e.options, i) {
      i = {};
      for (var f = 0; f < a.length; f++)
        i["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        f = i.hasOwnProperty("$" + e[a].value), e[a].selected !== f && (e[a].selected = f), f && s && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + ln(a), i = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          e[f].selected = !0, s && (e[f].defaultSelected = !0);
          return;
        }
        i !== null || e[f].disabled || (i = e[f]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function cm(e, i, a) {
    if (i != null && (i = "" + ln(i), i !== e.value && (e.value = i), a == null)) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = a != null ? "" + ln(a) : "";
  }
  function fm(e, i, a, s) {
    if (i == null) {
      if (s != null) {
        if (a != null) throw Error(l(92));
        if (W(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), i = a;
    }
    a = ln(i), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s), du(e);
  }
  function Er(e, i) {
    if (i) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var XS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hm(e, i, a) {
    var s = i.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "" : s ? e.setProperty(i, a) : typeof a != "number" || a === 0 || XS.has(i) ? i === "float" ? e.cssFloat = a : e[i] = ("" + a).trim() : e[i] = a + "px";
  }
  function dm(e, i, a) {
    if (i != null && typeof i != "object")
      throw Error(l(62));
    if (e = e.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || i != null && i.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
      for (var f in i)
        s = i[f], i.hasOwnProperty(f) && a[f] !== s && hm(e, f, s);
    } else
      for (var p in i)
        i.hasOwnProperty(p) && hm(e, p, i[p]);
  }
  function gu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var IS = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), KS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ls(e) {
    return KS.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Hn() {
  }
  var yu = null;
  function bu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ar = null, wr = null;
  function mm(e) {
    var i = vr(e);
    if (i && (e = i.stateNode)) {
      var a = e[Be] || null;
      t: switch (e = i.stateNode, i.type) {
        case "input":
          if (mu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), i = a.name, a.type === "radio" && i != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + an(
                "" + i
              ) + '"][type="radio"]'
            ), i = 0; i < a.length; i++) {
              var s = a[i];
              if (s !== e && s.form === e.form) {
                var f = s[Be] || null;
                if (!f) throw Error(l(90));
                mu(
                  s,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (i = 0; i < a.length; i++)
              s = a[i], s.form === e.form && om(s);
          }
          break t;
        case "textarea":
          cm(e, a.value, a.defaultValue);
          break t;
        case "select":
          i = a.value, i != null && Tr(e, !!a.multiple, i, !1);
      }
    }
  }
  var vu = !1;
  function pm(e, i, a) {
    if (vu) return e(i, a);
    vu = !0;
    try {
      var s = e(i);
      return s;
    } finally {
      if (vu = !1, (Ar !== null || wr !== null) && (Xs(), Ar && (i = Ar, e = wr, wr = Ar = null, mm(i), e)))
        for (i = 0; i < e.length; i++) mm(e[i]);
    }
  }
  function Cl(e, i) {
    var a = e.stateNode;
    if (a === null) return null;
    var s = a[Be] || null;
    if (s === null) return null;
    a = s[i];
    t: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        l(231, i, typeof a)
      );
    return a;
  }
  var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xu = !1;
  if (qn)
    try {
      var kl = {};
      Object.defineProperty(kl, "passive", {
        get: function() {
          xu = !0;
        }
      }), window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl);
    } catch {
      xu = !1;
    }
  var oi = null, Su = null, as = null;
  function gm() {
    if (as) return as;
    var e, i = Su, a = i.length, s, f = "value" in oi ? oi.value : oi.textContent, p = f.length;
    for (e = 0; e < a && i[e] === f[e]; e++) ;
    var b = a - e;
    for (s = 1; s <= b && i[a - s] === f[p - s]; s++) ;
    return as = f.slice(e, 1 < s ? 1 - s : void 0);
  }
  function ss(e) {
    var i = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && i === 13 && (e = 13)) : e = i, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function os() {
    return !0;
  }
  function ym() {
    return !1;
  }
  function Ue(e) {
    function i(a, s, f, p, b) {
      this._reactName = a, this._targetInst = f, this.type = s, this.nativeEvent = p, this.target = b, this.currentTarget = null;
      for (var T in e)
        e.hasOwnProperty(T) && (a = e[T], this[T] = a ? a(p) : p[T]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? os : ym, this.isPropagationStopped = ym, this;
    }
    return y(i.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = os);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = os);
      },
      persist: function() {
      },
      isPersistent: os
    }), i;
  }
  var Hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, us = Ue(Hi), Dl = y({}, Hi, { view: 0, detail: 0 }), QS = Ue(Dl), Tu, Eu, Rl, cs = y({}, Dl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Rl && (Rl && e.type === "mousemove" ? (Tu = e.screenX - Rl.screenX, Eu = e.screenY - Rl.screenY) : Eu = Tu = 0, Rl = e), Tu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Eu;
    }
  }), bm = Ue(cs), ZS = y({}, cs, { dataTransfer: 0 }), JS = Ue(ZS), $S = y({}, Dl, { relatedTarget: 0 }), Au = Ue($S), WS = y({}, Hi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tT = Ue(WS), eT = y({}, Hi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), nT = Ue(eT), iT = y({}, Hi, { data: 0 }), vm = Ue(iT), rT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, lT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, aT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sT(e) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(e) : (e = aT[e]) ? !!i[e] : !1;
  }
  function wu() {
    return sT;
  }
  var oT = y({}, Dl, {
    key: function(e) {
      if (e.key) {
        var i = rT[e.key] || e.key;
        if (i !== "Unidentified") return i;
      }
      return e.type === "keypress" ? (e = ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lT[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wu,
    charCode: function(e) {
      return e.type === "keypress" ? ss(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), uT = Ue(oT), cT = y({}, cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xm = Ue(cT), fT = y({}, Dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wu
  }), hT = Ue(fT), dT = y({}, Hi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mT = Ue(dT), pT = y({}, cs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gT = Ue(pT), yT = y({}, Hi, {
    newState: 0,
    oldState: 0
  }), bT = Ue(yT), vT = [9, 13, 27, 32], Cu = qn && "CompositionEvent" in window, Ml = null;
  qn && "documentMode" in document && (Ml = document.documentMode);
  var xT = qn && "TextEvent" in window && !Ml, Sm = qn && (!Cu || Ml && 8 < Ml && 11 >= Ml), Tm = " ", Em = !1;
  function Am(e, i) {
    switch (e) {
      case "keyup":
        return vT.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cr = !1;
  function ST(e, i) {
    switch (e) {
      case "compositionend":
        return wm(i);
      case "keypress":
        return i.which !== 32 ? null : (Em = !0, Tm);
      case "textInput":
        return e = i.data, e === Tm && Em ? null : e;
      default:
        return null;
    }
  }
  function TT(e, i) {
    if (Cr)
      return e === "compositionend" || !Cu && Am(e, i) ? (e = gm(), as = Su = oi = null, Cr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length)
            return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Sm && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var ET = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Cm(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!ET[e.type] : i === "textarea";
  }
  function km(e, i, a, s) {
    Ar ? wr ? wr.push(s) : wr = [s] : Ar = s, i = Ws(i, "onChange"), 0 < i.length && (a = new us(
      "onChange",
      "change",
      null,
      a,
      s
    ), e.push({ event: a, listeners: i }));
  }
  var Ol = null, zl = null;
  function AT(e) {
    uy(e, 0);
  }
  function fs(e) {
    var i = wl(e);
    if (om(i)) return e;
  }
  function Dm(e, i) {
    if (e === "change") return i;
  }
  var Rm = !1;
  if (qn) {
    var ku;
    if (qn) {
      var Du = "oninput" in document;
      if (!Du) {
        var Mm = document.createElement("div");
        Mm.setAttribute("oninput", "return;"), Du = typeof Mm.oninput == "function";
      }
      ku = Du;
    } else ku = !1;
    Rm = ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Om() {
    Ol && (Ol.detachEvent("onpropertychange", zm), zl = Ol = null);
  }
  function zm(e) {
    if (e.propertyName === "value" && fs(zl)) {
      var i = [];
      km(
        i,
        zl,
        e,
        bu(e)
      ), pm(AT, i);
    }
  }
  function wT(e, i, a) {
    e === "focusin" ? (Om(), Ol = i, zl = a, Ol.attachEvent("onpropertychange", zm)) : e === "focusout" && Om();
  }
  function CT(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return fs(zl);
  }
  function kT(e, i) {
    if (e === "click") return fs(i);
  }
  function DT(e, i) {
    if (e === "input" || e === "change")
      return fs(i);
  }
  function RT(e, i) {
    return e === i && (e !== 0 || 1 / e === 1 / i) || e !== e && i !== i;
  }
  var Ke = typeof Object.is == "function" ? Object.is : RT;
  function _l(e, i) {
    if (Ke(e, i)) return !0;
    if (typeof e != "object" || e === null || typeof i != "object" || i === null)
      return !1;
    var a = Object.keys(e), s = Object.keys(i);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var f = a[s];
      if (!pr.call(i, f) || !Ke(e[f], i[f]))
        return !1;
    }
    return !0;
  }
  function _m(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lm(e, i) {
    var a = _m(e);
    e = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (s = e + a.textContent.length, e <= i && s >= i)
          return { node: a, offset: i - e };
        e = s;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = _m(a);
    }
  }
  function Nm(e, i) {
    return e && i ? e === i ? !0 : e && e.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Nm(e, i.parentNode) : "contains" in e ? e.contains(i) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Bm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var i = rs(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = i.contentWindow;
      else break;
      i = rs(e.document);
    }
    return i;
  }
  function Ru(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i && (i === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || i === "textarea" || e.contentEditable === "true");
  }
  var MT = qn && "documentMode" in document && 11 >= document.documentMode, kr = null, Mu = null, Ll = null, Ou = !1;
  function Um(e, i, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ou || kr == null || kr !== rs(s) || (s = kr, "selectionStart" in s && Ru(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Ll && _l(Ll, s) || (Ll = s, s = Ws(Mu, "onSelect"), 0 < s.length && (i = new us(
      "onSelect",
      "select",
      null,
      i,
      a
    ), e.push({ event: i, listeners: s }), i.target = kr)));
  }
  function qi(e, i) {
    var a = {};
    return a[e.toLowerCase()] = i.toLowerCase(), a["Webkit" + e] = "webkit" + i, a["Moz" + e] = "moz" + i, a;
  }
  var Dr = {
    animationend: qi("Animation", "AnimationEnd"),
    animationiteration: qi("Animation", "AnimationIteration"),
    animationstart: qi("Animation", "AnimationStart"),
    transitionrun: qi("Transition", "TransitionRun"),
    transitionstart: qi("Transition", "TransitionStart"),
    transitioncancel: qi("Transition", "TransitionCancel"),
    transitionend: qi("Transition", "TransitionEnd")
  }, zu = {}, Vm = {};
  qn && (Vm = document.createElement("div").style, "AnimationEvent" in window || (delete Dr.animationend.animation, delete Dr.animationiteration.animation, delete Dr.animationstart.animation), "TransitionEvent" in window || delete Dr.transitionend.transition);
  function Fi(e) {
    if (zu[e]) return zu[e];
    if (!Dr[e]) return e;
    var i = Dr[e], a;
    for (a in i)
      if (i.hasOwnProperty(a) && a in Vm)
        return zu[e] = i[a];
    return e;
  }
  var jm = Fi("animationend"), Hm = Fi("animationiteration"), qm = Fi("animationstart"), OT = Fi("transitionrun"), zT = Fi("transitionstart"), _T = Fi("transitioncancel"), Fm = Fi("transitionend"), Pm = /* @__PURE__ */ new Map(), _u = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _u.push("scrollEnd");
  function xn(e, i) {
    Pm.set(e, i), ji(i, [e]);
  }
  var hs = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var i = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(i)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, sn = [], Rr = 0, Lu = 0;
  function ds() {
    for (var e = Rr, i = Lu = Rr = 0; i < e; ) {
      var a = sn[i];
      sn[i++] = null;
      var s = sn[i];
      sn[i++] = null;
      var f = sn[i];
      sn[i++] = null;
      var p = sn[i];
      if (sn[i++] = null, s !== null && f !== null) {
        var b = s.pending;
        b === null ? f.next = f : (f.next = b.next, b.next = f), s.pending = f;
      }
      p !== 0 && Ym(a, f, p);
    }
  }
  function ms(e, i, a, s) {
    sn[Rr++] = e, sn[Rr++] = i, sn[Rr++] = a, sn[Rr++] = s, Lu |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function Nu(e, i, a, s) {
    return ms(e, i, a, s), ps(e);
  }
  function Pi(e, i) {
    return ms(e, null, null, i), ps(e);
  }
  function Ym(e, i, a) {
    e.lanes |= a;
    var s = e.alternate;
    s !== null && (s.lanes |= a);
    for (var f = !1, p = e.return; p !== null; )
      p.childLanes |= a, s = p.alternate, s !== null && (s.childLanes |= a), p.tag === 22 && (e = p.stateNode, e === null || e._visibility & 1 || (f = !0)), e = p, p = p.return;
    return e.tag === 3 ? (p = e.stateNode, f && i !== null && (f = 31 - Yt(a), e = p.hiddenUpdates, s = e[f], s === null ? e[f] = [i] : s.push(i), i.lane = a | 536870912), p) : null;
  }
  function ps(e) {
    if (50 < na)
      throw na = 0, Yc = null, Error(l(185));
    for (var i = e.return; i !== null; )
      e = i, i = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Mr = {};
  function LT(e, i, a, s) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qe(e, i, a, s) {
    return new LT(e, i, a, s);
  }
  function Bu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Fn(e, i) {
    var a = e.alternate;
    return a === null ? (a = Qe(
      e.tag,
      i,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = i, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, i = e.dependencies, a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Gm(e, i) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = i, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, i = a.dependencies, e.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), e;
  }
  function gs(e, i, a, s, f, p) {
    var b = 0;
    if (s = e, typeof e == "function") Bu(e) && (b = 1);
    else if (typeof e == "string")
      b = jE(
        e,
        a,
        at.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      t: switch (e) {
        case lt:
          return e = Qe(31, a, i, f), e.elementType = lt, e.lanes = p, e;
        case w:
          return Yi(a.children, f, p, i);
        case A:
          b = 8, f |= 24;
          break;
        case C:
          return e = Qe(12, a, i, f | 2), e.elementType = C, e.lanes = p, e;
        case Q:
          return e = Qe(13, a, i, f), e.elementType = Q, e.lanes = p, e;
        case _:
          return e = Qe(19, a, i, f), e.elementType = _, e.lanes = p, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
                b = 10;
                break t;
              case L:
                b = 9;
                break t;
              case Y:
                b = 11;
                break t;
              case Z:
                b = 14;
                break t;
              case J:
                b = 16, s = null;
                break t;
            }
          b = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return i = Qe(b, a, i, f), i.elementType = e, i.type = s, i.lanes = p, i;
  }
  function Yi(e, i, a, s) {
    return e = Qe(7, e, s, i), e.lanes = a, e;
  }
  function Uu(e, i, a) {
    return e = Qe(6, e, null, i), e.lanes = a, e;
  }
  function Xm(e) {
    var i = Qe(18, null, null, 0);
    return i.stateNode = e, i;
  }
  function Vu(e, i, a) {
    return i = Qe(
      4,
      e.children !== null ? e.children : [],
      e.key,
      i
    ), i.lanes = a, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, i;
  }
  var Im = /* @__PURE__ */ new WeakMap();
  function on(e, i) {
    if (typeof e == "object" && e !== null) {
      var a = Im.get(e);
      return a !== void 0 ? a : (i = {
        value: e,
        source: i,
        stack: Ja(i)
      }, Im.set(e, i), i);
    }
    return {
      value: e,
      source: i,
      stack: Ja(i)
    };
  }
  var Or = [], zr = 0, ys = null, Nl = 0, un = [], cn = 0, ui = null, kn = 1, Dn = "";
  function Pn(e, i) {
    Or[zr++] = Nl, Or[zr++] = ys, ys = e, Nl = i;
  }
  function Km(e, i, a) {
    un[cn++] = kn, un[cn++] = Dn, un[cn++] = ui, ui = e;
    var s = kn;
    e = Dn;
    var f = 32 - Yt(s) - 1;
    s &= ~(1 << f), a += 1;
    var p = 32 - Yt(i) + f;
    if (30 < p) {
      var b = f - f % 5;
      p = (s & (1 << b) - 1).toString(32), s >>= b, f -= b, kn = 1 << 32 - Yt(i) + f | a << f | s, Dn = p + e;
    } else
      kn = 1 << p | a << f | s, Dn = e;
  }
  function ju(e) {
    e.return !== null && (Pn(e, 1), Km(e, 1, 0));
  }
  function Hu(e) {
    for (; e === ys; )
      ys = Or[--zr], Or[zr] = null, Nl = Or[--zr], Or[zr] = null;
    for (; e === ui; )
      ui = un[--cn], un[cn] = null, Dn = un[--cn], un[cn] = null, kn = un[--cn], un[cn] = null;
  }
  function Qm(e, i) {
    un[cn++] = kn, un[cn++] = Dn, un[cn++] = ui, kn = i.id, Dn = i.overflow, ui = e;
  }
  var be = null, Kt = null, zt = !1, ci = null, fn = !1, qu = Error(l(519));
  function fi(e) {
    var i = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Bl(on(i, e)), qu;
  }
  function Zm(e) {
    var i = e.stateNode, a = e.type, s = e.memoizedProps;
    switch (i[ye] = e, i[Be] = s, a) {
      case "dialog":
        kt("cancel", i), kt("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        kt("load", i);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ra.length; a++)
          kt(ra[a], i);
        break;
      case "source":
        kt("error", i);
        break;
      case "img":
      case "image":
      case "link":
        kt("error", i), kt("load", i);
        break;
      case "details":
        kt("toggle", i);
        break;
      case "input":
        kt("invalid", i), um(
          i,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        );
        break;
      case "select":
        kt("invalid", i);
        break;
      case "textarea":
        kt("invalid", i), fm(i, s.value, s.defaultValue, s.children);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || i.textContent === "" + a || s.suppressHydrationWarning === !0 || dy(i.textContent, a) ? (s.popover != null && (kt("beforetoggle", i), kt("toggle", i)), s.onScroll != null && kt("scroll", i), s.onScrollEnd != null && kt("scrollend", i), s.onClick != null && (i.onclick = Hn), i = !0) : i = !1, i || fi(e, !0);
  }
  function Jm(e) {
    for (be = e.return; be; )
      switch (be.tag) {
        case 5:
        case 31:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          be = be.return;
      }
  }
  function _r(e) {
    if (e !== be) return !1;
    if (!zt) return Jm(e), zt = !0, !1;
    var i = e.tag, a;
    if ((a = i !== 3 && i !== 27) && ((a = i === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || af(e.type, e.memoizedProps)), a = !a), a && Kt && fi(e), Jm(e), i === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Kt = Ty(e);
    } else if (i === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Kt = Ty(e);
    } else
      i === 27 ? (i = Kt, wi(e.type) ? (e = ff, ff = null, Kt = e) : Kt = i) : Kt = be ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gi() {
    Kt = be = null, zt = !1;
  }
  function Fu() {
    var e = ci;
    return e !== null && (qe === null ? qe = e : qe.push.apply(
      qe,
      e
    ), ci = null), e;
  }
  function Bl(e) {
    ci === null ? ci = [e] : ci.push(e);
  }
  var Pu = R(null), Xi = null, Yn = null;
  function hi(e, i, a) {
    E(Pu, i._currentValue), i._currentValue = a;
  }
  function Gn(e) {
    e._currentValue = Pu.current, F(Pu);
  }
  function Yu(e, i, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & i) !== i ? (e.childLanes |= i, s !== null && (s.childLanes |= i)) : s !== null && (s.childLanes & i) !== i && (s.childLanes |= i), e === a) break;
      e = e.return;
    }
  }
  function Gu(e, i, a, s) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var b = f.child;
        p = p.firstContext;
        t: for (; p !== null; ) {
          var T = p;
          p = f;
          for (var D = 0; D < i.length; D++)
            if (T.context === i[D]) {
              p.lanes |= a, T = p.alternate, T !== null && (T.lanes |= a), Yu(
                p.return,
                a,
                e
              ), s || (b = null);
              break t;
            }
          p = T.next;
        }
      } else if (f.tag === 18) {
        if (b = f.return, b === null) throw Error(l(341));
        b.lanes |= a, p = b.alternate, p !== null && (p.lanes |= a), Yu(b, a, e), b = null;
      } else b = f.child;
      if (b !== null) b.return = f;
      else
        for (b = f; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (f = b.sibling, f !== null) {
            f.return = b.return, b = f;
            break;
          }
          b = b.return;
        }
      f = b;
    }
  }
  function Lr(e, i, a, s) {
    e = null;
    for (var f = i, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var b = f.alternate;
        if (b === null) throw Error(l(387));
        if (b = b.memoizedProps, b !== null) {
          var T = f.type;
          Ke(f.pendingProps.value, b.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (f === Rt.current) {
        if (b = f.alternate, b === null) throw Error(l(387));
        b.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(ua) : e = [ua]);
      }
      f = f.return;
    }
    e !== null && Gu(
      i,
      e,
      a,
      s
    ), i.flags |= 262144;
  }
  function bs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ke(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ii(e) {
    Xi = e, Yn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ve(e) {
    return $m(Xi, e);
  }
  function vs(e, i) {
    return Xi === null && Ii(e), $m(e, i);
  }
  function $m(e, i) {
    var a = i._currentValue;
    if (i = { context: i, memoizedValue: a, next: null }, Yn === null) {
      if (e === null) throw Error(l(308));
      Yn = i, e.dependencies = { lanes: 0, firstContext: i }, e.flags |= 524288;
    } else Yn = Yn.next = i;
    return a;
  }
  var NT = typeof AbortController < "u" ? AbortController : function() {
    var e = [], i = this.signal = {
      aborted: !1,
      addEventListener: function(a, s) {
        e.push(s);
      }
    };
    this.abort = function() {
      i.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, BT = t.unstable_scheduleCallback, UT = t.unstable_NormalPriority, ae = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xu() {
    return {
      controller: new NT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ul(e) {
    e.refCount--, e.refCount === 0 && BT(UT, function() {
      e.controller.abort();
    });
  }
  var Vl = null, Iu = 0, Nr = 0, Br = null;
  function VT(e, i) {
    if (Vl === null) {
      var a = Vl = [];
      Iu = 0, Nr = Zc(), Br = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return Iu++, i.then(Wm, Wm), i;
  }
  function Wm() {
    if (--Iu === 0 && Vl !== null) {
      Br !== null && (Br.status = "fulfilled");
      var e = Vl;
      Vl = null, Nr = 0, Br = null;
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function jT(e, i) {
    var a = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        a.push(f);
      }
    };
    return e.then(
      function() {
        s.status = "fulfilled", s.value = i;
        for (var f = 0; f < a.length; f++) (0, a[f])(i);
      },
      function(f) {
        for (s.status = "rejected", s.reason = f, f = 0; f < a.length; f++)
          (0, a[f])(void 0);
      }
    ), s;
  }
  var tp = N.S;
  N.S = function(e, i) {
    Ug = Re(), typeof i == "object" && i !== null && typeof i.then == "function" && VT(e, i), tp !== null && tp(e, i);
  };
  var Ki = R(null);
  function Ku() {
    var e = Ki.current;
    return e !== null ? e : Gt.pooledCache;
  }
  function xs(e, i) {
    i === null ? E(Ki, Ki.current) : E(Ki, i.pool);
  }
  function ep() {
    var e = Ku();
    return e === null ? null : { parent: ae._currentValue, pool: e };
  }
  var Ur = Error(l(460)), Qu = Error(l(474)), Ss = Error(l(542)), Ts = { then: function() {
  } };
  function np(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ip(e, i, a) {
    switch (a = e[a], a === void 0 ? e.push(i) : a !== i && (i.then(Hn, Hn), i = a), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw e = i.reason, lp(e), e;
      default:
        if (typeof i.status == "string") i.then(Hn, Hn);
        else {
          if (e = Gt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = i, e.status = "pending", e.then(
            function(s) {
              if (i.status === "pending") {
                var f = i;
                f.status = "fulfilled", f.value = s;
              }
            },
            function(s) {
              if (i.status === "pending") {
                var f = i;
                f.status = "rejected", f.reason = s;
              }
            }
          );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw e = i.reason, lp(e), e;
        }
        throw Zi = i, Ur;
    }
  }
  function Qi(e) {
    try {
      var i = e._init;
      return i(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Zi = a, Ur) : a;
    }
  }
  var Zi = null;
  function rp() {
    if (Zi === null) throw Error(l(459));
    var e = Zi;
    return Zi = null, e;
  }
  function lp(e) {
    if (e === Ur || e === Ss)
      throw Error(l(483));
  }
  var Vr = null, jl = 0;
  function Es(e) {
    var i = jl;
    return jl += 1, Vr === null && (Vr = []), ip(Vr, e, i);
  }
  function Hl(e, i) {
    i = i.props.ref, e.ref = i !== void 0 ? i : null;
  }
  function As(e, i) {
    throw i.$$typeof === v ? Error(l(525)) : (e = Object.prototype.toString.call(i), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e
      )
    ));
  }
  function ap(e) {
    function i(z, O) {
      if (e) {
        var U = z.deletions;
        U === null ? (z.deletions = [O], z.flags |= 16) : U.push(O);
      }
    }
    function a(z, O) {
      if (!e) return null;
      for (; O !== null; )
        i(z, O), O = O.sibling;
      return null;
    }
    function s(z) {
      for (var O = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? O.set(z.key, z) : O.set(z.index, z), z = z.sibling;
      return O;
    }
    function f(z, O) {
      return z = Fn(z, O), z.index = 0, z.sibling = null, z;
    }
    function p(z, O, U) {
      return z.index = U, e ? (U = z.alternate, U !== null ? (U = U.index, U < O ? (z.flags |= 67108866, O) : U) : (z.flags |= 67108866, O)) : (z.flags |= 1048576, O);
    }
    function b(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function T(z, O, U, X) {
      return O === null || O.tag !== 6 ? (O = Uu(U, z.mode, X), O.return = z, O) : (O = f(O, U), O.return = z, O);
    }
    function D(z, O, U, X) {
      var dt = U.type;
      return dt === w ? P(
        z,
        O,
        U.props.children,
        X,
        U.key
      ) : O !== null && (O.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === J && Qi(dt) === O.type) ? (O = f(O, U.props), Hl(O, U), O.return = z, O) : (O = gs(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        X
      ), Hl(O, U), O.return = z, O);
    }
    function V(z, O, U, X) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = Vu(U, z.mode, X), O.return = z, O) : (O = f(O, U.children || []), O.return = z, O);
    }
    function P(z, O, U, X, dt) {
      return O === null || O.tag !== 7 ? (O = Yi(
        U,
        z.mode,
        X,
        dt
      ), O.return = z, O) : (O = f(O, U), O.return = z, O);
    }
    function K(z, O, U) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = Uu(
          "" + O,
          z.mode,
          U
        ), O.return = z, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return U = gs(
              O.type,
              O.key,
              O.props,
              null,
              z.mode,
              U
            ), Hl(U, O), U.return = z, U;
          case S:
            return O = Vu(
              O,
              z.mode,
              U
            ), O.return = z, O;
          case J:
            return O = Qi(O), K(z, O, U);
        }
        if (W(O) || nt(O))
          return O = Yi(
            O,
            z.mode,
            U,
            null
          ), O.return = z, O;
        if (typeof O.then == "function")
          return K(z, Es(O), U);
        if (O.$$typeof === M)
          return K(
            z,
            vs(z, O),
            U
          );
        As(z, O);
      }
      return null;
    }
    function j(z, O, U, X) {
      var dt = O !== null ? O.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return dt !== null ? null : T(z, O, "" + U, X);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return U.key === dt ? D(z, O, U, X) : null;
          case S:
            return U.key === dt ? V(z, O, U, X) : null;
          case J:
            return U = Qi(U), j(z, O, U, X);
        }
        if (W(U) || nt(U))
          return dt !== null ? null : P(z, O, U, X, null);
        if (typeof U.then == "function")
          return j(
            z,
            O,
            Es(U),
            X
          );
        if (U.$$typeof === M)
          return j(
            z,
            O,
            vs(z, U),
            X
          );
        As(z, U);
      }
      return null;
    }
    function H(z, O, U, X, dt) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return z = z.get(U) || null, T(O, z, "" + X, dt);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case x:
            return z = z.get(
              X.key === null ? U : X.key
            ) || null, D(O, z, X, dt);
          case S:
            return z = z.get(
              X.key === null ? U : X.key
            ) || null, V(O, z, X, dt);
          case J:
            return X = Qi(X), H(
              z,
              O,
              U,
              X,
              dt
            );
        }
        if (W(X) || nt(X))
          return z = z.get(U) || null, P(O, z, X, dt, null);
        if (typeof X.then == "function")
          return H(
            z,
            O,
            U,
            Es(X),
            dt
          );
        if (X.$$typeof === M)
          return H(
            z,
            O,
            U,
            vs(O, X),
            dt
          );
        As(O, X);
      }
      return null;
    }
    function ot(z, O, U, X) {
      for (var dt = null, Lt = null, ct = O, Et = O = 0, Ot = null; ct !== null && Et < U.length; Et++) {
        ct.index > Et ? (Ot = ct, ct = null) : Ot = ct.sibling;
        var Nt = j(
          z,
          ct,
          U[Et],
          X
        );
        if (Nt === null) {
          ct === null && (ct = Ot);
          break;
        }
        e && ct && Nt.alternate === null && i(z, ct), O = p(Nt, O, Et), Lt === null ? dt = Nt : Lt.sibling = Nt, Lt = Nt, ct = Ot;
      }
      if (Et === U.length)
        return a(z, ct), zt && Pn(z, Et), dt;
      if (ct === null) {
        for (; Et < U.length; Et++)
          ct = K(z, U[Et], X), ct !== null && (O = p(
            ct,
            O,
            Et
          ), Lt === null ? dt = ct : Lt.sibling = ct, Lt = ct);
        return zt && Pn(z, Et), dt;
      }
      for (ct = s(ct); Et < U.length; Et++)
        Ot = H(
          ct,
          z,
          Et,
          U[Et],
          X
        ), Ot !== null && (e && Ot.alternate !== null && ct.delete(
          Ot.key === null ? Et : Ot.key
        ), O = p(
          Ot,
          O,
          Et
        ), Lt === null ? dt = Ot : Lt.sibling = Ot, Lt = Ot);
      return e && ct.forEach(function(Mi) {
        return i(z, Mi);
      }), zt && Pn(z, Et), dt;
    }
    function gt(z, O, U, X) {
      if (U == null) throw Error(l(151));
      for (var dt = null, Lt = null, ct = O, Et = O = 0, Ot = null, Nt = U.next(); ct !== null && !Nt.done; Et++, Nt = U.next()) {
        ct.index > Et ? (Ot = ct, ct = null) : Ot = ct.sibling;
        var Mi = j(z, ct, Nt.value, X);
        if (Mi === null) {
          ct === null && (ct = Ot);
          break;
        }
        e && ct && Mi.alternate === null && i(z, ct), O = p(Mi, O, Et), Lt === null ? dt = Mi : Lt.sibling = Mi, Lt = Mi, ct = Ot;
      }
      if (Nt.done)
        return a(z, ct), zt && Pn(z, Et), dt;
      if (ct === null) {
        for (; !Nt.done; Et++, Nt = U.next())
          Nt = K(z, Nt.value, X), Nt !== null && (O = p(Nt, O, Et), Lt === null ? dt = Nt : Lt.sibling = Nt, Lt = Nt);
        return zt && Pn(z, Et), dt;
      }
      for (ct = s(ct); !Nt.done; Et++, Nt = U.next())
        Nt = H(ct, z, Et, Nt.value, X), Nt !== null && (e && Nt.alternate !== null && ct.delete(Nt.key === null ? Et : Nt.key), O = p(Nt, O, Et), Lt === null ? dt = Nt : Lt.sibling = Nt, Lt = Nt);
      return e && ct.forEach(function(ZE) {
        return i(z, ZE);
      }), zt && Pn(z, Et), dt;
    }
    function Pt(z, O, U, X) {
      if (typeof U == "object" && U !== null && U.type === w && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            t: {
              for (var dt = U.key; O !== null; ) {
                if (O.key === dt) {
                  if (dt = U.type, dt === w) {
                    if (O.tag === 7) {
                      a(
                        z,
                        O.sibling
                      ), X = f(
                        O,
                        U.props.children
                      ), X.return = z, z = X;
                      break t;
                    }
                  } else if (O.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === J && Qi(dt) === O.type) {
                    a(
                      z,
                      O.sibling
                    ), X = f(O, U.props), Hl(X, U), X.return = z, z = X;
                    break t;
                  }
                  a(z, O);
                  break;
                } else i(z, O);
                O = O.sibling;
              }
              U.type === w ? (X = Yi(
                U.props.children,
                z.mode,
                X,
                U.key
              ), X.return = z, z = X) : (X = gs(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                X
              ), Hl(X, U), X.return = z, z = X);
            }
            return b(z);
          case S:
            t: {
              for (dt = U.key; O !== null; ) {
                if (O.key === dt)
                  if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                    a(
                      z,
                      O.sibling
                    ), X = f(O, U.children || []), X.return = z, z = X;
                    break t;
                  } else {
                    a(z, O);
                    break;
                  }
                else i(z, O);
                O = O.sibling;
              }
              X = Vu(U, z.mode, X), X.return = z, z = X;
            }
            return b(z);
          case J:
            return U = Qi(U), Pt(
              z,
              O,
              U,
              X
            );
        }
        if (W(U))
          return ot(
            z,
            O,
            U,
            X
          );
        if (nt(U)) {
          if (dt = nt(U), typeof dt != "function") throw Error(l(150));
          return U = dt.call(U), gt(
            z,
            O,
            U,
            X
          );
        }
        if (typeof U.then == "function")
          return Pt(
            z,
            O,
            Es(U),
            X
          );
        if (U.$$typeof === M)
          return Pt(
            z,
            O,
            vs(z, U),
            X
          );
        As(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, O !== null && O.tag === 6 ? (a(z, O.sibling), X = f(O, U), X.return = z, z = X) : (a(z, O), X = Uu(U, z.mode, X), X.return = z, z = X), b(z)) : a(z, O);
    }
    return function(z, O, U, X) {
      try {
        jl = 0;
        var dt = Pt(
          z,
          O,
          U,
          X
        );
        return Vr = null, dt;
      } catch (ct) {
        if (ct === Ur || ct === Ss) throw ct;
        var Lt = Qe(29, ct, null, z.mode);
        return Lt.lanes = X, Lt.return = z, Lt;
      }
    };
  }
  var Ji = ap(!0), sp = ap(!1), di = !1;
  function Zu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ju(e, i) {
    e = e.updateQueue, i.updateQueue === e && (i.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function mi(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function pi(e, i, a) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Bt & 2) !== 0) {
      var f = s.pending;
      return f === null ? i.next = i : (i.next = f.next, f.next = i), s.pending = i, i = ps(e), Ym(e, null, a), i;
    }
    return ms(e, s, i, a), ps(e);
  }
  function ql(e, i, a) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (a & 4194048) !== 0)) {
      var s = i.lanes;
      s &= e.pendingLanes, a |= s, i.lanes = a, $d(e, a);
    }
  }
  function $u(e, i) {
    var a = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
      var f = null, p = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          p === null ? f = p = b : p = p.next = b, a = a.next;
        } while (a !== null);
        p === null ? f = p = i : p = p.next = i;
      } else f = p = i;
      a = {
        baseState: s.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: s.shared,
        callbacks: s.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = i : e.next = i, a.lastBaseUpdate = i;
  }
  var Wu = !1;
  function Fl() {
    if (Wu) {
      var e = Br;
      if (e !== null) throw e;
    }
  }
  function Pl(e, i, a, s) {
    Wu = !1;
    var f = e.updateQueue;
    di = !1;
    var p = f.firstBaseUpdate, b = f.lastBaseUpdate, T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var D = T, V = D.next;
      D.next = null, b === null ? p = V : b.next = V, b = D;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, T = P.lastBaseUpdate, T !== b && (T === null ? P.firstBaseUpdate = V : T.next = V, P.lastBaseUpdate = D));
    }
    if (p !== null) {
      var K = f.baseState;
      b = 0, P = V = D = null, T = p;
      do {
        var j = T.lane & -536870913, H = j !== T.lane;
        if (H ? (Mt & j) === j : (s & j) === j) {
          j !== 0 && j === Nr && (Wu = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          t: {
            var ot = e, gt = T;
            j = i;
            var Pt = a;
            switch (gt.tag) {
              case 1:
                if (ot = gt.payload, typeof ot == "function") {
                  K = ot.call(Pt, K, j);
                  break t;
                }
                K = ot;
                break t;
              case 3:
                ot.flags = ot.flags & -65537 | 128;
              case 0:
                if (ot = gt.payload, j = typeof ot == "function" ? ot.call(Pt, K, j) : ot, j == null) break t;
                K = y({}, K, j);
                break t;
              case 2:
                di = !0;
            }
          }
          j = T.callback, j !== null && (e.flags |= 64, H && (e.flags |= 8192), H = f.callbacks, H === null ? f.callbacks = [j] : H.push(j));
        } else
          H = {
            lane: j,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, P === null ? (V = P = H, D = K) : P = P.next = H, b |= j;
        if (T = T.next, T === null) {
          if (T = f.shared.pending, T === null)
            break;
          H = T, T = H.next, H.next = null, f.lastBaseUpdate = H, f.shared.pending = null;
        }
      } while (!0);
      P === null && (D = K), f.baseState = D, f.firstBaseUpdate = V, f.lastBaseUpdate = P, p === null && (f.shared.lanes = 0), xi |= b, e.lanes = b, e.memoizedState = K;
    }
  }
  function op(e, i) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(i);
  }
  function up(e, i) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        op(a[e], i);
  }
  var jr = R(null), ws = R(0);
  function cp(e, i) {
    e = ti, E(ws, e), E(jr, i), ti = e | i.baseLanes;
  }
  function tc() {
    E(ws, ti), E(jr, jr.current);
  }
  function ec() {
    ti = ws.current, F(jr), F(ws);
  }
  var Ze = R(null), hn = null;
  function gi(e) {
    var i = e.alternate;
    E(ie, ie.current & 1), E(Ze, e), hn === null && (i === null || jr.current !== null || i.memoizedState !== null) && (hn = e);
  }
  function nc(e) {
    E(ie, ie.current), E(Ze, e), hn === null && (hn = e);
  }
  function fp(e) {
    e.tag === 22 ? (E(ie, ie.current), E(Ze, e), hn === null && (hn = e)) : yi();
  }
  function yi() {
    E(ie, ie.current), E(Ze, Ze.current);
  }
  function Je(e) {
    F(Ze), hn === e && (hn = null), F(ie);
  }
  var ie = R(0);
  function Cs(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || uf(a) || cf(a)))
          return i;
      } else if (i.tag === 19 && (i.memoizedProps.revealOrder === "forwards" || i.memoizedProps.revealOrder === "backwards" || i.memoizedProps.revealOrder === "unstable_legacy-backwards" || i.memoizedProps.revealOrder === "together")) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === e) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Xn = 0, Tt = null, qt = null, se = null, ks = !1, Hr = !1, $i = !1, Ds = 0, Yl = 0, qr = null, HT = 0;
  function te() {
    throw Error(l(321));
  }
  function ic(e, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < e.length; a++)
      if (!Ke(e[a], i[a])) return !1;
    return !0;
  }
  function rc(e, i, a, s, f, p) {
    return Xn = p, Tt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, N.H = e === null || e.memoizedState === null ? Kp : vc, $i = !1, p = a(s, f), $i = !1, Hr && (p = dp(
      i,
      a,
      s,
      f
    )), hp(e), p;
  }
  function hp(e) {
    N.H = Il;
    var i = qt !== null && qt.next !== null;
    if (Xn = 0, se = qt = Tt = null, ks = !1, Yl = 0, qr = null, i) throw Error(l(300));
    e === null || oe || (e = e.dependencies, e !== null && bs(e) && (oe = !0));
  }
  function dp(e, i, a, s) {
    Tt = e;
    var f = 0;
    do {
      if (Hr && (qr = null), Yl = 0, Hr = !1, 25 <= f) throw Error(l(301));
      if (f += 1, se = qt = null, e.updateQueue != null) {
        var p = e.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      N.H = Qp, p = i(a, s);
    } while (Hr);
    return p;
  }
  function qT() {
    var e = N.H, i = e.useState()[0];
    return i = typeof i.then == "function" ? Gl(i) : i, e = e.useState()[0], (qt !== null ? qt.memoizedState : null) !== e && (Tt.flags |= 1024), i;
  }
  function lc() {
    var e = Ds !== 0;
    return Ds = 0, e;
  }
  function ac(e, i, a) {
    i.updateQueue = e.updateQueue, i.flags &= -2053, e.lanes &= ~a;
  }
  function sc(e) {
    if (ks) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), e = e.next;
      }
      ks = !1;
    }
    Xn = 0, se = qt = Tt = null, Hr = !1, Yl = Ds = 0, qr = null;
  }
  function Oe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return se === null ? Tt.memoizedState = se = e : se = se.next = e, se;
  }
  function re() {
    if (qt === null) {
      var e = Tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qt.next;
    var i = se === null ? Tt.memoizedState : se.next;
    if (i !== null)
      se = i, qt = e;
    else {
      if (e === null)
        throw Tt.alternate === null ? Error(l(467)) : Error(l(310));
      qt = e, e = {
        memoizedState: qt.memoizedState,
        baseState: qt.baseState,
        baseQueue: qt.baseQueue,
        queue: qt.queue,
        next: null
      }, se === null ? Tt.memoizedState = se = e : se = se.next = e;
    }
    return se;
  }
  function Rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gl(e) {
    var i = Yl;
    return Yl += 1, qr === null && (qr = []), e = ip(qr, e, i), i = Tt, (se === null ? i.memoizedState : se.next) === null && (i = i.alternate, N.H = i === null || i.memoizedState === null ? Kp : vc), e;
  }
  function Ms(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Gl(e);
      if (e.$$typeof === M) return ve(e);
    }
    throw Error(l(438, String(e)));
  }
  function oc(e) {
    var i = null, a = Tt.updateQueue;
    if (a !== null && (i = a.memoCache), i == null) {
      var s = Tt.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (i = {
        data: s.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = { data: [], index: 0 }), a === null && (a = Rs(), Tt.updateQueue = a), a.memoCache = i, a = i.data[i.index], a === void 0)
      for (a = i.data[i.index] = Array(e), s = 0; s < e; s++)
        a[s] = B;
    return i.index++, a;
  }
  function In(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function Os(e) {
    var i = re();
    return uc(i, qt, e);
  }
  function uc(e, i, a) {
    var s = e.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = a;
    var f = e.baseQueue, p = s.pending;
    if (p !== null) {
      if (f !== null) {
        var b = f.next;
        f.next = p.next, p.next = b;
      }
      i.baseQueue = f = p, s.pending = null;
    }
    if (p = e.baseState, f === null) e.memoizedState = p;
    else {
      i = f.next;
      var T = b = null, D = null, V = i, P = !1;
      do {
        var K = V.lane & -536870913;
        if (K !== V.lane ? (Mt & K) === K : (Xn & K) === K) {
          var j = V.revertLane;
          if (j === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }), K === Nr && (P = !0);
          else if ((Xn & j) === j) {
            V = V.next, j === Nr && (P = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }, D === null ? (T = D = K, b = p) : D = D.next = K, Tt.lanes |= j, xi |= j;
          K = V.action, $i && a(p, K), p = V.hasEagerState ? V.eagerState : a(p, K);
        } else
          j = {
            lane: K,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          }, D === null ? (T = D = j, b = p) : D = D.next = j, Tt.lanes |= K, xi |= K;
        V = V.next;
      } while (V !== null && V !== i);
      if (D === null ? b = p : D.next = T, !Ke(p, e.memoizedState) && (oe = !0, P && (a = Br, a !== null)))
        throw a;
      e.memoizedState = p, e.baseState = b, e.baseQueue = D, s.lastRenderedState = p;
    }
    return f === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function cc(e) {
    var i = re(), a = i.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var s = a.dispatch, f = a.pending, p = i.memoizedState;
    if (f !== null) {
      a.pending = null;
      var b = f = f.next;
      do
        p = e(p, b.action), b = b.next;
      while (b !== f);
      Ke(p, i.memoizedState) || (oe = !0), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), a.lastRenderedState = p;
    }
    return [p, s];
  }
  function mp(e, i, a) {
    var s = Tt, f = re(), p = zt;
    if (p) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = i();
    var b = !Ke(
      (qt || f).memoizedState,
      a
    );
    if (b && (f.memoizedState = a, oe = !0), f = f.queue, dc(yp.bind(null, s, f, e), [
      e
    ]), f.getSnapshot !== i || b || se !== null && se.memoizedState.tag & 1) {
      if (s.flags |= 2048, Fr(
        9,
        { destroy: void 0 },
        gp.bind(
          null,
          s,
          f,
          a,
          i
        ),
        null
      ), Gt === null) throw Error(l(349));
      p || (Xn & 127) !== 0 || pp(s, i, a);
    }
    return a;
  }
  function pp(e, i, a) {
    e.flags |= 16384, e = { getSnapshot: i, value: a }, i = Tt.updateQueue, i === null ? (i = Rs(), Tt.updateQueue = i, i.stores = [e]) : (a = i.stores, a === null ? i.stores = [e] : a.push(e));
  }
  function gp(e, i, a, s) {
    i.value = a, i.getSnapshot = s, bp(i) && vp(e);
  }
  function yp(e, i, a) {
    return a(function() {
      bp(i) && vp(e);
    });
  }
  function bp(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var a = i();
      return !Ke(e, a);
    } catch {
      return !0;
    }
  }
  function vp(e) {
    var i = Pi(e, 2);
    i !== null && Fe(i, e, 2);
  }
  function fc(e) {
    var i = Oe();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), $i) {
        Ne(!0);
        try {
          a();
        } finally {
          Ne(!1);
        }
      }
    }
    return i.memoizedState = i.baseState = e, i.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: In,
      lastRenderedState: e
    }, i;
  }
  function xp(e, i, a, s) {
    return e.baseState = a, uc(
      e,
      qt,
      typeof s == "function" ? s : In
    );
  }
  function FT(e, i, a, s, f) {
    if (Ls(e)) throw Error(l(485));
    if (e = i.action, e !== null) {
      var p = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          p.listeners.push(b);
        }
      };
      N.T !== null ? a(!0) : p.isTransition = !1, s(p), a = i.pending, a === null ? (p.next = i.pending = p, Sp(i, p)) : (p.next = a.next, i.pending = a.next = p);
    }
  }
  function Sp(e, i) {
    var a = i.action, s = i.payload, f = e.state;
    if (i.isTransition) {
      var p = N.T, b = {};
      N.T = b;
      try {
        var T = a(f, s), D = N.S;
        D !== null && D(b, T), Tp(e, i, T);
      } catch (V) {
        hc(e, i, V);
      } finally {
        p !== null && b.types !== null && (p.types = b.types), N.T = p;
      }
    } else
      try {
        p = a(f, s), Tp(e, i, p);
      } catch (V) {
        hc(e, i, V);
      }
  }
  function Tp(e, i, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        Ep(e, i, s);
      },
      function(s) {
        return hc(e, i, s);
      }
    ) : Ep(e, i, a);
  }
  function Ep(e, i, a) {
    i.status = "fulfilled", i.value = a, Ap(i), e.state = a, i = e.pending, i !== null && (a = i.next, a === i ? e.pending = null : (a = a.next, i.next = a, Sp(e, a)));
  }
  function hc(e, i, a) {
    var s = e.pending;
    if (e.pending = null, s !== null) {
      s = s.next;
      do
        i.status = "rejected", i.reason = a, Ap(i), i = i.next;
      while (i !== s);
    }
    e.action = null;
  }
  function Ap(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function wp(e, i) {
    return i;
  }
  function Cp(e, i) {
    if (zt) {
      var a = Gt.formState;
      if (a !== null) {
        t: {
          var s = Tt;
          if (zt) {
            if (Kt) {
              e: {
                for (var f = Kt, p = fn; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break e;
                  }
                  if (f = dn(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break e;
                  }
                }
                p = f.data, f = p === "F!" || p === "F" ? f : null;
              }
              if (f) {
                Kt = dn(
                  f.nextSibling
                ), s = f.data === "F!";
                break t;
              }
            }
            fi(s);
          }
          s = !1;
        }
        s && (i = a[0]);
      }
    }
    return a = Oe(), a.memoizedState = a.baseState = i, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wp,
      lastRenderedState: i
    }, a.queue = s, a = Gp.bind(
      null,
      Tt,
      s
    ), s.dispatch = a, s = fc(!1), p = bc.bind(
      null,
      Tt,
      !1,
      s.queue
    ), s = Oe(), f = {
      state: i,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = f, a = FT.bind(
      null,
      Tt,
      f,
      p,
      a
    ), f.dispatch = a, s.memoizedState = e, [i, a, !1];
  }
  function kp(e) {
    var i = re();
    return Dp(i, qt, e);
  }
  function Dp(e, i, a) {
    if (i = uc(
      e,
      i,
      wp
    )[0], e = Os(In)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var s = Gl(i);
      } catch (b) {
        throw b === Ur ? Ss : b;
      }
    else s = i;
    i = re();
    var f = i.queue, p = f.dispatch;
    return a !== i.memoizedState && (Tt.flags |= 2048, Fr(
      9,
      { destroy: void 0 },
      PT.bind(null, f, a),
      null
    )), [s, p, e];
  }
  function PT(e, i) {
    e.action = i;
  }
  function Rp(e) {
    var i = re(), a = qt;
    if (a !== null)
      return Dp(i, a, e);
    re(), i = i.memoizedState, a = re();
    var s = a.queue.dispatch;
    return a.memoizedState = e, [i, s, !1];
  }
  function Fr(e, i, a, s) {
    return e = { tag: e, create: a, deps: s, inst: i, next: null }, i = Tt.updateQueue, i === null && (i = Rs(), Tt.updateQueue = i), a = i.lastEffect, a === null ? i.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, i.lastEffect = e), e;
  }
  function Mp() {
    return re().memoizedState;
  }
  function zs(e, i, a, s) {
    var f = Oe();
    Tt.flags |= e, f.memoizedState = Fr(
      1 | i,
      { destroy: void 0 },
      a,
      s === void 0 ? null : s
    );
  }
  function _s(e, i, a, s) {
    var f = re();
    s = s === void 0 ? null : s;
    var p = f.memoizedState.inst;
    qt !== null && s !== null && ic(s, qt.memoizedState.deps) ? f.memoizedState = Fr(i, p, a, s) : (Tt.flags |= e, f.memoizedState = Fr(
      1 | i,
      p,
      a,
      s
    ));
  }
  function Op(e, i) {
    zs(8390656, 8, e, i);
  }
  function dc(e, i) {
    _s(2048, 8, e, i);
  }
  function YT(e) {
    Tt.flags |= 4;
    var i = Tt.updateQueue;
    if (i === null)
      i = Rs(), Tt.updateQueue = i, i.events = [e];
    else {
      var a = i.events;
      a === null ? i.events = [e] : a.push(e);
    }
  }
  function zp(e) {
    var i = re().memoizedState;
    return YT({ ref: i, nextImpl: e }), function() {
      if ((Bt & 2) !== 0) throw Error(l(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function _p(e, i) {
    return _s(4, 2, e, i);
  }
  function Lp(e, i) {
    return _s(4, 4, e, i);
  }
  function Np(e, i) {
    if (typeof i == "function") {
      e = e();
      var a = i(e);
      return function() {
        typeof a == "function" ? a() : i(null);
      };
    }
    if (i != null)
      return e = e(), i.current = e, function() {
        i.current = null;
      };
  }
  function Bp(e, i, a) {
    a = a != null ? a.concat([e]) : null, _s(4, 4, Np.bind(null, i, e), a);
  }
  function mc() {
  }
  function Up(e, i) {
    var a = re();
    i = i === void 0 ? null : i;
    var s = a.memoizedState;
    return i !== null && ic(i, s[1]) ? s[0] : (a.memoizedState = [e, i], e);
  }
  function Vp(e, i) {
    var a = re();
    i = i === void 0 ? null : i;
    var s = a.memoizedState;
    if (i !== null && ic(i, s[1]))
      return s[0];
    if (s = e(), $i) {
      Ne(!0);
      try {
        e();
      } finally {
        Ne(!1);
      }
    }
    return a.memoizedState = [s, i], s;
  }
  function pc(e, i, a) {
    return a === void 0 || (Xn & 1073741824) !== 0 && (Mt & 261930) === 0 ? e.memoizedState = i : (e.memoizedState = a, e = jg(), Tt.lanes |= e, xi |= e, a);
  }
  function jp(e, i, a, s) {
    return Ke(a, i) ? a : jr.current !== null ? (e = pc(e, a, s), Ke(e, i) || (oe = !0), e) : (Xn & 42) === 0 || (Xn & 1073741824) !== 0 && (Mt & 261930) === 0 ? (oe = !0, e.memoizedState = a) : (e = jg(), Tt.lanes |= e, xi |= e, i);
  }
  function Hp(e, i, a, s, f) {
    var p = I.p;
    I.p = p !== 0 && 8 > p ? p : 8;
    var b = N.T, T = {};
    N.T = T, bc(e, !1, i, a);
    try {
      var D = f(), V = N.S;
      if (V !== null && V(T, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var P = jT(
          D,
          s
        );
        Xl(
          e,
          i,
          P,
          tn(e)
        );
      } else
        Xl(
          e,
          i,
          s,
          tn(e)
        );
    } catch (K) {
      Xl(
        e,
        i,
        { then: function() {
        }, status: "rejected", reason: K },
        tn()
      );
    } finally {
      I.p = p, b !== null && T.types !== null && (b.types = T.types), N.T = b;
    }
  }
  function GT() {
  }
  function gc(e, i, a, s) {
    if (e.tag !== 5) throw Error(l(476));
    var f = qp(e).queue;
    Hp(
      e,
      f,
      i,
      it,
      a === null ? GT : function() {
        return Fp(e), a(s);
      }
    );
  }
  function qp(e) {
    var i = e.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: it,
      baseState: it,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: it
      },
      next: null
    };
    var a = {};
    return i.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = i, e = e.alternate, e !== null && (e.memoizedState = i), i;
  }
  function Fp(e) {
    var i = qp(e);
    i.next === null && (i = e.alternate.memoizedState), Xl(
      e,
      i.next.queue,
      {},
      tn()
    );
  }
  function yc() {
    return ve(ua);
  }
  function Pp() {
    return re().memoizedState;
  }
  function Yp() {
    return re().memoizedState;
  }
  function XT(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var a = tn();
          e = mi(a);
          var s = pi(i, e, a);
          s !== null && (Fe(s, i, a), ql(s, i, a)), i = { cache: Xu() }, e.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function IT(e, i, a) {
    var s = tn();
    a = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ls(e) ? Xp(i, a) : (a = Nu(e, i, a, s), a !== null && (Fe(a, e, s), Ip(a, i, s)));
  }
  function Gp(e, i, a) {
    var s = tn();
    Xl(e, i, a, s);
  }
  function Xl(e, i, a, s) {
    var f = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ls(e)) Xp(i, f);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = i.lastRenderedReducer, p !== null))
        try {
          var b = i.lastRenderedState, T = p(b, a);
          if (f.hasEagerState = !0, f.eagerState = T, Ke(T, b))
            return ms(e, i, f, 0), Gt === null && ds(), !1;
        } catch {
        }
      if (a = Nu(e, i, f, s), a !== null)
        return Fe(a, e, s), Ip(a, i, s), !0;
    }
    return !1;
  }
  function bc(e, i, a, s) {
    if (s = {
      lane: 2,
      revertLane: Zc(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ls(e)) {
      if (i) throw Error(l(479));
    } else
      i = Nu(
        e,
        a,
        s,
        2
      ), i !== null && Fe(i, e, 2);
  }
  function Ls(e) {
    var i = e.alternate;
    return e === Tt || i !== null && i === Tt;
  }
  function Xp(e, i) {
    Hr = ks = !0;
    var a = e.pending;
    a === null ? i.next = i : (i.next = a.next, a.next = i), e.pending = i;
  }
  function Ip(e, i, a) {
    if ((a & 4194048) !== 0) {
      var s = i.lanes;
      s &= e.pendingLanes, a |= s, i.lanes = a, $d(e, a);
    }
  }
  var Il = {
    readContext: ve,
    use: Ms,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useLayoutEffect: te,
    useInsertionEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useSyncExternalStore: te,
    useId: te,
    useHostTransitionStatus: te,
    useFormState: te,
    useActionState: te,
    useOptimistic: te,
    useMemoCache: te,
    useCacheRefresh: te
  };
  Il.useEffectEvent = te;
  var Kp = {
    readContext: ve,
    use: Ms,
    useCallback: function(e, i) {
      return Oe().memoizedState = [
        e,
        i === void 0 ? null : i
      ], e;
    },
    useContext: ve,
    useEffect: Op,
    useImperativeHandle: function(e, i, a) {
      a = a != null ? a.concat([e]) : null, zs(
        4194308,
        4,
        Np.bind(null, i, e),
        a
      );
    },
    useLayoutEffect: function(e, i) {
      return zs(4194308, 4, e, i);
    },
    useInsertionEffect: function(e, i) {
      zs(4, 2, e, i);
    },
    useMemo: function(e, i) {
      var a = Oe();
      i = i === void 0 ? null : i;
      var s = e();
      if ($i) {
        Ne(!0);
        try {
          e();
        } finally {
          Ne(!1);
        }
      }
      return a.memoizedState = [s, i], s;
    },
    useReducer: function(e, i, a) {
      var s = Oe();
      if (a !== void 0) {
        var f = a(i);
        if ($i) {
          Ne(!0);
          try {
            a(i);
          } finally {
            Ne(!1);
          }
        }
      } else f = i;
      return s.memoizedState = s.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, s.queue = e, e = e.dispatch = IT.bind(
        null,
        Tt,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var i = Oe();
      return e = { current: e }, i.memoizedState = e;
    },
    useState: function(e) {
      e = fc(e);
      var i = e.queue, a = Gp.bind(null, Tt, i);
      return i.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: mc,
    useDeferredValue: function(e, i) {
      var a = Oe();
      return pc(a, e, i);
    },
    useTransition: function() {
      var e = fc(!1);
      return e = Hp.bind(
        null,
        Tt,
        e.queue,
        !0,
        !1
      ), Oe().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, i, a) {
      var s = Tt, f = Oe();
      if (zt) {
        if (a === void 0)
          throw Error(l(407));
        a = a();
      } else {
        if (a = i(), Gt === null)
          throw Error(l(349));
        (Mt & 127) !== 0 || pp(s, i, a);
      }
      f.memoizedState = a;
      var p = { value: a, getSnapshot: i };
      return f.queue = p, Op(yp.bind(null, s, p, e), [
        e
      ]), s.flags |= 2048, Fr(
        9,
        { destroy: void 0 },
        gp.bind(
          null,
          s,
          p,
          a,
          i
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Oe(), i = Gt.identifierPrefix;
      if (zt) {
        var a = Dn, s = kn;
        a = (s & ~(1 << 32 - Yt(s) - 1)).toString(32) + a, i = "_" + i + "R_" + a, a = Ds++, 0 < a && (i += "H" + a.toString(32)), i += "_";
      } else
        a = HT++, i = "_" + i + "r_" + a.toString(32) + "_";
      return e.memoizedState = i;
    },
    useHostTransitionStatus: yc,
    useFormState: Cp,
    useActionState: Cp,
    useOptimistic: function(e) {
      var i = Oe();
      i.memoizedState = i.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return i.queue = a, i = bc.bind(
        null,
        Tt,
        !0,
        a
      ), a.dispatch = i, [e, i];
    },
    useMemoCache: oc,
    useCacheRefresh: function() {
      return Oe().memoizedState = XT.bind(
        null,
        Tt
      );
    },
    useEffectEvent: function(e) {
      var i = Oe(), a = { impl: e };
      return i.memoizedState = a, function() {
        if ((Bt & 2) !== 0)
          throw Error(l(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, vc = {
    readContext: ve,
    use: Ms,
    useCallback: Up,
    useContext: ve,
    useEffect: dc,
    useImperativeHandle: Bp,
    useInsertionEffect: _p,
    useLayoutEffect: Lp,
    useMemo: Vp,
    useReducer: Os,
    useRef: Mp,
    useState: function() {
      return Os(In);
    },
    useDebugValue: mc,
    useDeferredValue: function(e, i) {
      var a = re();
      return jp(
        a,
        qt.memoizedState,
        e,
        i
      );
    },
    useTransition: function() {
      var e = Os(In)[0], i = re().memoizedState;
      return [
        typeof e == "boolean" ? e : Gl(e),
        i
      ];
    },
    useSyncExternalStore: mp,
    useId: Pp,
    useHostTransitionStatus: yc,
    useFormState: kp,
    useActionState: kp,
    useOptimistic: function(e, i) {
      var a = re();
      return xp(a, qt, e, i);
    },
    useMemoCache: oc,
    useCacheRefresh: Yp
  };
  vc.useEffectEvent = zp;
  var Qp = {
    readContext: ve,
    use: Ms,
    useCallback: Up,
    useContext: ve,
    useEffect: dc,
    useImperativeHandle: Bp,
    useInsertionEffect: _p,
    useLayoutEffect: Lp,
    useMemo: Vp,
    useReducer: cc,
    useRef: Mp,
    useState: function() {
      return cc(In);
    },
    useDebugValue: mc,
    useDeferredValue: function(e, i) {
      var a = re();
      return qt === null ? pc(a, e, i) : jp(
        a,
        qt.memoizedState,
        e,
        i
      );
    },
    useTransition: function() {
      var e = cc(In)[0], i = re().memoizedState;
      return [
        typeof e == "boolean" ? e : Gl(e),
        i
      ];
    },
    useSyncExternalStore: mp,
    useId: Pp,
    useHostTransitionStatus: yc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e, i) {
      var a = re();
      return qt !== null ? xp(a, qt, e, i) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: oc,
    useCacheRefresh: Yp
  };
  Qp.useEffectEvent = zp;
  function xc(e, i, a, s) {
    i = e.memoizedState, a = a(s, i), a = a == null ? i : y({}, i, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Sc = {
    enqueueSetState: function(e, i, a) {
      e = e._reactInternals;
      var s = tn(), f = mi(s);
      f.payload = i, a != null && (f.callback = a), i = pi(e, f, s), i !== null && (Fe(i, e, s), ql(i, e, s));
    },
    enqueueReplaceState: function(e, i, a) {
      e = e._reactInternals;
      var s = tn(), f = mi(s);
      f.tag = 1, f.payload = i, a != null && (f.callback = a), i = pi(e, f, s), i !== null && (Fe(i, e, s), ql(i, e, s));
    },
    enqueueForceUpdate: function(e, i) {
      e = e._reactInternals;
      var a = tn(), s = mi(a);
      s.tag = 2, i != null && (s.callback = i), i = pi(e, s, a), i !== null && (Fe(i, e, a), ql(i, e, a));
    }
  };
  function Zp(e, i, a, s, f, p, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, b) : i.prototype && i.prototype.isPureReactComponent ? !_l(a, s) || !_l(f, p) : !0;
  }
  function Jp(e, i, a, s) {
    e = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(a, s), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(a, s), i.state !== e && Sc.enqueueReplaceState(i, i.state, null);
  }
  function Wi(e, i) {
    var a = i;
    if ("ref" in i) {
      a = {};
      for (var s in i)
        s !== "ref" && (a[s] = i[s]);
    }
    if (e = e.defaultProps) {
      a === i && (a = y({}, a));
      for (var f in e)
        a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  function $p(e) {
    hs(e);
  }
  function Wp(e) {
    console.error(e);
  }
  function tg(e) {
    hs(e);
  }
  function Ns(e, i) {
    try {
      var a = e.onUncaughtError;
      a(i.value, { componentStack: i.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function eg(e, i, a) {
    try {
      var s = e.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Tc(e, i, a) {
    return a = mi(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ns(e, i);
    }, a;
  }
  function ng(e) {
    return e = mi(e), e.tag = 3, e;
  }
  function ig(e, i, a, s) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = s.value;
      e.payload = function() {
        return f(p);
      }, e.callback = function() {
        eg(i, a, s);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      eg(i, a, s), typeof f != "function" && (Si === null ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function KT(e, i, a, s, f) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (i = a.alternate, i !== null && Lr(
        i,
        a,
        f,
        !0
      ), a = Ze.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return hn === null ? Is() : a.alternate === null && ee === 0 && (ee = 3), a.flags &= -257, a.flags |= 65536, a.lanes = f, s === Ts ? a.flags |= 16384 : (i = a.updateQueue, i === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : i.add(s), Ic(e, s, f)), !1;
          case 22:
            return a.flags |= 65536, s === Ts ? a.flags |= 16384 : (i = a.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = i) : (a = i.retryQueue, a === null ? i.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), Ic(e, s, f)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return Ic(e, s, f), Is(), !1;
    }
    if (zt)
      return i = Ze.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = f, s !== qu && (e = Error(l(422), { cause: s }), Bl(on(e, a)))) : (s !== qu && (i = Error(l(423), {
        cause: s
      }), Bl(
        on(i, a)
      )), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, s = on(s, a), f = Tc(
        e.stateNode,
        s,
        f
      ), $u(e, f), ee !== 4 && (ee = 2)), !1;
    var p = Error(l(520), { cause: s });
    if (p = on(p, a), ea === null ? ea = [p] : ea.push(p), ee !== 4 && (ee = 2), i === null) return !0;
    s = on(s, a), a = i;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = f & -f, a.lanes |= e, e = Tc(a.stateNode, s, e), $u(a, e), !1;
        case 1:
          if (i = a.type, p = a.stateNode, (a.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Si === null || !Si.has(p))))
            return a.flags |= 65536, f &= -f, a.lanes |= f, f = ng(f), ig(
              f,
              e,
              a,
              s
            ), $u(a, f), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ec = Error(l(461)), oe = !1;
  function xe(e, i, a, s) {
    i.child = e === null ? sp(i, null, a, s) : Ji(
      i,
      e.child,
      a,
      s
    );
  }
  function rg(e, i, a, s, f) {
    a = a.render;
    var p = i.ref;
    if ("ref" in s) {
      var b = {};
      for (var T in s)
        T !== "ref" && (b[T] = s[T]);
    } else b = s;
    return Ii(i), s = rc(
      e,
      i,
      a,
      b,
      p,
      f
    ), T = lc(), e !== null && !oe ? (ac(e, i, f), Kn(e, i, f)) : (zt && T && ju(i), i.flags |= 1, xe(e, i, s, f), i.child);
  }
  function lg(e, i, a, s, f) {
    if (e === null) {
      var p = a.type;
      return typeof p == "function" && !Bu(p) && p.defaultProps === void 0 && a.compare === null ? (i.tag = 15, i.type = p, ag(
        e,
        i,
        p,
        s,
        f
      )) : (e = gs(
        a.type,
        null,
        s,
        i,
        i.mode,
        f
      ), e.ref = i.ref, e.return = i, i.child = e);
    }
    if (p = e.child, !Oc(e, f)) {
      var b = p.memoizedProps;
      if (a = a.compare, a = a !== null ? a : _l, a(b, s) && e.ref === i.ref)
        return Kn(e, i, f);
    }
    return i.flags |= 1, e = Fn(p, s), e.ref = i.ref, e.return = i, i.child = e;
  }
  function ag(e, i, a, s, f) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (_l(p, s) && e.ref === i.ref)
        if (oe = !1, i.pendingProps = s = p, Oc(e, f))
          (e.flags & 131072) !== 0 && (oe = !0);
        else
          return i.lanes = e.lanes, Kn(e, i, f);
    }
    return Ac(
      e,
      i,
      a,
      s,
      f
    );
  }
  function sg(e, i, a, s) {
    var f = s.children, p = e !== null ? e.memoizedState : null;
    if (e === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (p = p !== null ? p.baseLanes | a : a, e !== null) {
          for (s = i.child = e.child, f = 0; s !== null; )
            f = f | s.lanes | s.childLanes, s = s.sibling;
          s = f & ~p;
        } else s = 0, i.child = null;
        return og(
          e,
          i,
          p,
          a,
          s
        );
      }
      if ((a & 536870912) !== 0)
        i.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && xs(
          i,
          p !== null ? p.cachePool : null
        ), p !== null ? cp(i, p) : tc(), fp(i);
      else
        return s = i.lanes = 536870912, og(
          e,
          i,
          p !== null ? p.baseLanes | a : a,
          a,
          s
        );
    } else
      p !== null ? (xs(i, p.cachePool), cp(i, p), yi(), i.memoizedState = null) : (e !== null && xs(i, null), tc(), yi());
    return xe(e, i, f, a), i.child;
  }
  function Kl(e, i) {
    return e !== null && e.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function og(e, i, a, s, f) {
    var p = Ku();
    return p = p === null ? null : { parent: ae._currentValue, pool: p }, i.memoizedState = {
      baseLanes: a,
      cachePool: p
    }, e !== null && xs(i, null), tc(), fp(i), e !== null && Lr(e, i, s, !0), i.childLanes = f, null;
  }
  function Bs(e, i) {
    return i = Vs(
      { mode: i.mode, children: i.children },
      e.mode
    ), i.ref = e.ref, e.child = i, i.return = e, i;
  }
  function ug(e, i, a) {
    return Ji(i, e.child, null, a), e = Bs(i, i.pendingProps), e.flags |= 2, Je(i), i.memoizedState = null, e;
  }
  function QT(e, i, a) {
    var s = i.pendingProps, f = (i.flags & 128) !== 0;
    if (i.flags &= -129, e === null) {
      if (zt) {
        if (s.mode === "hidden")
          return e = Bs(i, s), i.lanes = 536870912, Kl(null, e);
        if (nc(i), (e = Kt) ? (e = Sy(
          e,
          fn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (i.memoizedState = {
          dehydrated: e,
          treeContext: ui !== null ? { id: kn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xm(e), a.return = i, i.child = a, be = i, Kt = null)) : e = null, e === null) throw fi(i);
        return i.lanes = 536870912, null;
      }
      return Bs(i, s);
    }
    var p = e.memoizedState;
    if (p !== null) {
      var b = p.dehydrated;
      if (nc(i), f)
        if (i.flags & 256)
          i.flags &= -257, i = ug(
            e,
            i,
            a
          );
        else if (i.memoizedState !== null)
          i.child = e.child, i.flags |= 128, i = null;
        else throw Error(l(558));
      else if (oe || Lr(e, i, a, !1), f = (a & e.childLanes) !== 0, oe || f) {
        if (s = Gt, s !== null && (b = Wd(s, a), b !== 0 && b !== p.retryLane))
          throw p.retryLane = b, Pi(e, b), Fe(s, e, b), Ec;
        Is(), i = ug(
          e,
          i,
          a
        );
      } else
        e = p.treeContext, Kt = dn(b.nextSibling), be = i, zt = !0, ci = null, fn = !1, e !== null && Qm(i, e), i = Bs(i, s), i.flags |= 4096;
      return i;
    }
    return e = Fn(e.child, {
      mode: s.mode,
      children: s.children
    }), e.ref = i.ref, i.child = e, e.return = i, e;
  }
  function Us(e, i) {
    var a = i.ref;
    if (a === null)
      e !== null && e.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(l(284));
      (e === null || e.ref !== a) && (i.flags |= 4194816);
    }
  }
  function Ac(e, i, a, s, f) {
    return Ii(i), a = rc(
      e,
      i,
      a,
      s,
      void 0,
      f
    ), s = lc(), e !== null && !oe ? (ac(e, i, f), Kn(e, i, f)) : (zt && s && ju(i), i.flags |= 1, xe(e, i, a, f), i.child);
  }
  function cg(e, i, a, s, f, p) {
    return Ii(i), i.updateQueue = null, a = dp(
      i,
      s,
      a,
      f
    ), hp(e), s = lc(), e !== null && !oe ? (ac(e, i, p), Kn(e, i, p)) : (zt && s && ju(i), i.flags |= 1, xe(e, i, a, p), i.child);
  }
  function fg(e, i, a, s, f) {
    if (Ii(i), i.stateNode === null) {
      var p = Mr, b = a.contextType;
      typeof b == "object" && b !== null && (p = ve(b)), p = new a(s, p), i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Sc, i.stateNode = p, p._reactInternals = i, p = i.stateNode, p.props = s, p.state = i.memoizedState, p.refs = {}, Zu(i), b = a.contextType, p.context = typeof b == "object" && b !== null ? ve(b) : Mr, p.state = i.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (xc(
        i,
        a,
        b,
        s
      ), p.state = i.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (b = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), b !== p.state && Sc.enqueueReplaceState(p, p.state, null), Pl(i, s, p, f), Fl(), p.state = i.memoizedState), typeof p.componentDidMount == "function" && (i.flags |= 4194308), s = !0;
    } else if (e === null) {
      p = i.stateNode;
      var T = i.memoizedProps, D = Wi(a, T);
      p.props = D;
      var V = p.context, P = a.contextType;
      b = Mr, typeof P == "object" && P !== null && (b = ve(P));
      var K = a.getDerivedStateFromProps;
      P = typeof K == "function" || typeof p.getSnapshotBeforeUpdate == "function", T = i.pendingProps !== T, P || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (T || V !== b) && Jp(
        i,
        p,
        s,
        b
      ), di = !1;
      var j = i.memoizedState;
      p.state = j, Pl(i, s, p, f), Fl(), V = i.memoizedState, T || j !== V || di ? (typeof K == "function" && (xc(
        i,
        a,
        K,
        s
      ), V = i.memoizedState), (D = di || Zp(
        i,
        a,
        D,
        s,
        j,
        V,
        b
      )) ? (P || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = s, i.memoizedState = V), p.props = s, p.state = V, p.context = b, s = D) : (typeof p.componentDidMount == "function" && (i.flags |= 4194308), s = !1);
    } else {
      p = i.stateNode, Ju(e, i), b = i.memoizedProps, P = Wi(a, b), p.props = P, K = i.pendingProps, j = p.context, V = a.contextType, D = Mr, typeof V == "object" && V !== null && (D = ve(V)), T = a.getDerivedStateFromProps, (V = typeof T == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (b !== K || j !== D) && Jp(
        i,
        p,
        s,
        D
      ), di = !1, j = i.memoizedState, p.state = j, Pl(i, s, p, f), Fl();
      var H = i.memoizedState;
      b !== K || j !== H || di || e !== null && e.dependencies !== null && bs(e.dependencies) ? (typeof T == "function" && (xc(
        i,
        a,
        T,
        s
      ), H = i.memoizedState), (P = di || Zp(
        i,
        a,
        P,
        s,
        j,
        H,
        D
      ) || e !== null && e.dependencies !== null && bs(e.dependencies)) ? (V || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, H, D), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(
        s,
        H,
        D
      )), typeof p.componentDidUpdate == "function" && (i.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || b === e.memoizedProps && j === e.memoizedState || (i.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && j === e.memoizedState || (i.flags |= 1024), i.memoizedProps = s, i.memoizedState = H), p.props = s, p.state = H, p.context = D, s = P) : (typeof p.componentDidUpdate != "function" || b === e.memoizedProps && j === e.memoizedState || (i.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && j === e.memoizedState || (i.flags |= 1024), s = !1);
    }
    return p = s, Us(e, i), s = (i.flags & 128) !== 0, p || s ? (p = i.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : p.render(), i.flags |= 1, e !== null && s ? (i.child = Ji(
      i,
      e.child,
      null,
      f
    ), i.child = Ji(
      i,
      null,
      a,
      f
    )) : xe(e, i, a, f), i.memoizedState = p.state, e = i.child) : e = Kn(
      e,
      i,
      f
    ), e;
  }
  function hg(e, i, a, s) {
    return Gi(), i.flags |= 256, xe(e, i, a, s), i.child;
  }
  var wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Cc(e) {
    return { baseLanes: e, cachePool: ep() };
  }
  function kc(e, i, a) {
    return e = e !== null ? e.childLanes & ~a : 0, i && (e |= We), e;
  }
  function dg(e, i, a) {
    var s = i.pendingProps, f = !1, p = (i.flags & 128) !== 0, b;
    if ((b = p) || (b = e !== null && e.memoizedState === null ? !1 : (ie.current & 2) !== 0), b && (f = !0, i.flags &= -129), b = (i.flags & 32) !== 0, i.flags &= -33, e === null) {
      if (zt) {
        if (f ? gi(i) : yi(), (e = Kt) ? (e = Sy(
          e,
          fn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (i.memoizedState = {
          dehydrated: e,
          treeContext: ui !== null ? { id: kn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xm(e), a.return = i, i.child = a, be = i, Kt = null)) : e = null, e === null) throw fi(i);
        return cf(e) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var T = s.children;
      return s = s.fallback, f ? (yi(), f = i.mode, T = Vs(
        { mode: "hidden", children: T },
        f
      ), s = Yi(
        s,
        f,
        a,
        null
      ), T.return = i, s.return = i, T.sibling = s, i.child = T, s = i.child, s.memoizedState = Cc(a), s.childLanes = kc(
        e,
        b,
        a
      ), i.memoizedState = wc, Kl(null, s)) : (gi(i), Dc(i, T));
    }
    var D = e.memoizedState;
    if (D !== null && (T = D.dehydrated, T !== null)) {
      if (p)
        i.flags & 256 ? (gi(i), i.flags &= -257, i = Rc(
          e,
          i,
          a
        )) : i.memoizedState !== null ? (yi(), i.child = e.child, i.flags |= 128, i = null) : (yi(), T = s.fallback, f = i.mode, s = Vs(
          { mode: "visible", children: s.children },
          f
        ), T = Yi(
          T,
          f,
          a,
          null
        ), T.flags |= 2, s.return = i, T.return = i, s.sibling = T, i.child = s, Ji(
          i,
          e.child,
          null,
          a
        ), s = i.child, s.memoizedState = Cc(a), s.childLanes = kc(
          e,
          b,
          a
        ), i.memoizedState = wc, i = Kl(null, s));
      else if (gi(i), cf(T)) {
        if (b = T.nextSibling && T.nextSibling.dataset, b) var V = b.dgst;
        b = V, s = Error(l(419)), s.stack = "", s.digest = b, Bl({ value: s, source: null, stack: null }), i = Rc(
          e,
          i,
          a
        );
      } else if (oe || Lr(e, i, a, !1), b = (a & e.childLanes) !== 0, oe || b) {
        if (b = Gt, b !== null && (s = Wd(b, a), s !== 0 && s !== D.retryLane))
          throw D.retryLane = s, Pi(e, s), Fe(b, e, s), Ec;
        uf(T) || Is(), i = Rc(
          e,
          i,
          a
        );
      } else
        uf(T) ? (i.flags |= 192, i.child = e.child, i = null) : (e = D.treeContext, Kt = dn(
          T.nextSibling
        ), be = i, zt = !0, ci = null, fn = !1, e !== null && Qm(i, e), i = Dc(
          i,
          s.children
        ), i.flags |= 4096);
      return i;
    }
    return f ? (yi(), T = s.fallback, f = i.mode, D = e.child, V = D.sibling, s = Fn(D, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = D.subtreeFlags & 65011712, V !== null ? T = Fn(
      V,
      T
    ) : (T = Yi(
      T,
      f,
      a,
      null
    ), T.flags |= 2), T.return = i, s.return = i, s.sibling = T, i.child = s, Kl(null, s), s = i.child, T = e.child.memoizedState, T === null ? T = Cc(a) : (f = T.cachePool, f !== null ? (D = ae._currentValue, f = f.parent !== D ? { parent: D, pool: D } : f) : f = ep(), T = {
      baseLanes: T.baseLanes | a,
      cachePool: f
    }), s.memoizedState = T, s.childLanes = kc(
      e,
      b,
      a
    ), i.memoizedState = wc, Kl(e.child, s)) : (gi(i), a = e.child, e = a.sibling, a = Fn(a, {
      mode: "visible",
      children: s.children
    }), a.return = i, a.sibling = null, e !== null && (b = i.deletions, b === null ? (i.deletions = [e], i.flags |= 16) : b.push(e)), i.child = a, i.memoizedState = null, a);
  }
  function Dc(e, i) {
    return i = Vs(
      { mode: "visible", children: i },
      e.mode
    ), i.return = e, e.child = i;
  }
  function Vs(e, i) {
    return e = Qe(22, e, null, i), e.lanes = 0, e;
  }
  function Rc(e, i, a) {
    return Ji(i, e.child, null, a), e = Dc(
      i,
      i.pendingProps.children
    ), e.flags |= 2, i.memoizedState = null, e;
  }
  function mg(e, i, a) {
    e.lanes |= i;
    var s = e.alternate;
    s !== null && (s.lanes |= i), Yu(e.return, i, a);
  }
  function Mc(e, i, a, s, f, p) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: a,
      tailMode: f,
      treeForkCount: p
    } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = s, b.tail = a, b.tailMode = f, b.treeForkCount = p);
  }
  function pg(e, i, a) {
    var s = i.pendingProps, f = s.revealOrder, p = s.tail;
    s = s.children;
    var b = ie.current, T = (b & 2) !== 0;
    if (T ? (b = b & 1 | 2, i.flags |= 128) : b &= 1, E(ie, b), xe(e, i, s, a), s = zt ? Nl : 0, !T && e !== null && (e.flags & 128) !== 0)
      t: for (e = i.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && mg(e, a, i);
        else if (e.tag === 19)
          mg(e, a, i);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === i) break t;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === i)
            break t;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (f) {
      case "forwards":
        for (a = i.child, f = null; a !== null; )
          e = a.alternate, e !== null && Cs(e) === null && (f = a), a = a.sibling;
        a = f, a === null ? (f = i.child, i.child = null) : (f = a.sibling, a.sibling = null), Mc(
          i,
          !1,
          f,
          a,
          p,
          s
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, f = i.child, i.child = null; f !== null; ) {
          if (e = f.alternate, e !== null && Cs(e) === null) {
            i.child = f;
            break;
          }
          e = f.sibling, f.sibling = a, a = f, f = e;
        }
        Mc(
          i,
          !0,
          a,
          null,
          p,
          s
        );
        break;
      case "together":
        Mc(
          i,
          !1,
          null,
          null,
          void 0,
          s
        );
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Kn(e, i, a) {
    if (e !== null && (i.dependencies = e.dependencies), xi |= i.lanes, (a & i.childLanes) === 0)
      if (e !== null) {
        if (Lr(
          e,
          i,
          a,
          !1
        ), (a & i.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && i.child !== e.child)
      throw Error(l(153));
    if (i.child !== null) {
      for (e = i.child, a = Fn(e, e.pendingProps), i.child = a, a.return = i; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Fn(e, e.pendingProps), a.return = i;
      a.sibling = null;
    }
    return i.child;
  }
  function Oc(e, i) {
    return (e.lanes & i) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && bs(e)));
  }
  function ZT(e, i, a) {
    switch (i.tag) {
      case 3:
        Jt(i, i.stateNode.containerInfo), hi(i, ae, e.memoizedState.cache), Gi();
        break;
      case 27:
      case 5:
        rn(i);
        break;
      case 4:
        Jt(i, i.stateNode.containerInfo);
        break;
      case 10:
        hi(
          i,
          i.type,
          i.memoizedProps.value
        );
        break;
      case 31:
        if (i.memoizedState !== null)
          return i.flags |= 128, nc(i), null;
        break;
      case 13:
        var s = i.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (gi(i), i.flags |= 128, null) : (a & i.child.childLanes) !== 0 ? dg(e, i, a) : (gi(i), e = Kn(
            e,
            i,
            a
          ), e !== null ? e.sibling : null);
        gi(i);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (s = (a & i.childLanes) !== 0, s || (Lr(
          e,
          i,
          a,
          !1
        ), s = (a & i.childLanes) !== 0), f) {
          if (s)
            return pg(
              e,
              i,
              a
            );
          i.flags |= 128;
        }
        if (f = i.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), E(ie, ie.current), s) break;
        return null;
      case 22:
        return i.lanes = 0, sg(
          e,
          i,
          a,
          i.pendingProps
        );
      case 24:
        hi(i, ae, e.memoizedState.cache);
    }
    return Kn(e, i, a);
  }
  function gg(e, i, a) {
    if (e !== null)
      if (e.memoizedProps !== i.pendingProps)
        oe = !0;
      else {
        if (!Oc(e, a) && (i.flags & 128) === 0)
          return oe = !1, ZT(
            e,
            i,
            a
          );
        oe = (e.flags & 131072) !== 0;
      }
    else
      oe = !1, zt && (i.flags & 1048576) !== 0 && Km(i, Nl, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        t: {
          var s = i.pendingProps;
          if (e = Qi(i.elementType), i.type = e, typeof e == "function")
            Bu(e) ? (s = Wi(e, s), i.tag = 1, i = fg(
              null,
              i,
              e,
              s,
              a
            )) : (i.tag = 0, i = Ac(
              null,
              i,
              e,
              s,
              a
            ));
          else {
            if (e != null) {
              var f = e.$$typeof;
              if (f === Y) {
                i.tag = 11, i = rg(
                  null,
                  i,
                  e,
                  s,
                  a
                );
                break t;
              } else if (f === Z) {
                i.tag = 14, i = lg(
                  null,
                  i,
                  e,
                  s,
                  a
                );
                break t;
              }
            }
            throw i = st(e) || e, Error(l(306, i, ""));
          }
        }
        return i;
      case 0:
        return Ac(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 1:
        return s = i.type, f = Wi(
          s,
          i.pendingProps
        ), fg(
          e,
          i,
          s,
          f,
          a
        );
      case 3:
        t: {
          if (Jt(
            i,
            i.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          s = i.pendingProps;
          var p = i.memoizedState;
          f = p.element, Ju(e, i), Pl(i, s, null, a);
          var b = i.memoizedState;
          if (s = b.cache, hi(i, ae, s), s !== p.cache && Gu(
            i,
            [ae],
            a,
            !0
          ), Fl(), s = b.element, p.isDehydrated)
            if (p = {
              element: s,
              isDehydrated: !1,
              cache: b.cache
            }, i.updateQueue.baseState = p, i.memoizedState = p, i.flags & 256) {
              i = hg(
                e,
                i,
                s,
                a
              );
              break t;
            } else if (s !== f) {
              f = on(
                Error(l(424)),
                i
              ), Bl(f), i = hg(
                e,
                i,
                s,
                a
              );
              break t;
            } else
              for (e = i.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Kt = dn(e.firstChild), be = i, zt = !0, ci = null, fn = !0, a = sp(
                i,
                null,
                s,
                a
              ), i.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Gi(), s === f) {
              i = Kn(
                e,
                i,
                a
              );
              break t;
            }
            xe(e, i, s, a);
          }
          i = i.child;
        }
        return i;
      case 26:
        return Us(e, i), e === null ? (a = ky(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = a : zt || (a = i.type, e = i.pendingProps, s = to(
          ht.current
        ).createElement(a), s[ye] = i, s[Be] = e, Se(s, a, e), pe(s), i.stateNode = s) : i.memoizedState = ky(
          i.type,
          e.memoizedProps,
          i.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rn(i), e === null && zt && (s = i.stateNode = Ay(
          i.type,
          i.pendingProps,
          ht.current
        ), be = i, fn = !0, f = Kt, wi(i.type) ? (ff = f, Kt = dn(s.firstChild)) : Kt = f), xe(
          e,
          i,
          i.pendingProps.children,
          a
        ), Us(e, i), e === null && (i.flags |= 4194304), i.child;
      case 5:
        return e === null && zt && ((f = s = Kt) && (s = CE(
          s,
          i.type,
          i.pendingProps,
          fn
        ), s !== null ? (i.stateNode = s, be = i, Kt = dn(s.firstChild), fn = !1, f = !0) : f = !1), f || fi(i)), rn(i), f = i.type, p = i.pendingProps, b = e !== null ? e.memoizedProps : null, s = p.children, af(f, p) ? s = null : b !== null && af(f, b) && (i.flags |= 32), i.memoizedState !== null && (f = rc(
          e,
          i,
          qT,
          null,
          null,
          a
        ), ua._currentValue = f), Us(e, i), xe(e, i, s, a), i.child;
      case 6:
        return e === null && zt && ((e = a = Kt) && (a = kE(
          a,
          i.pendingProps,
          fn
        ), a !== null ? (i.stateNode = a, be = i, Kt = null, e = !0) : e = !1), e || fi(i)), null;
      case 13:
        return dg(e, i, a);
      case 4:
        return Jt(
          i,
          i.stateNode.containerInfo
        ), s = i.pendingProps, e === null ? i.child = Ji(
          i,
          null,
          s,
          a
        ) : xe(e, i, s, a), i.child;
      case 11:
        return rg(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 7:
        return xe(
          e,
          i,
          i.pendingProps,
          a
        ), i.child;
      case 8:
        return xe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 12:
        return xe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 10:
        return s = i.pendingProps, hi(i, i.type, s.value), xe(e, i, s.children, a), i.child;
      case 9:
        return f = i.type._context, s = i.pendingProps.children, Ii(i), f = ve(f), s = s(f), i.flags |= 1, xe(e, i, s, a), i.child;
      case 14:
        return lg(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 15:
        return ag(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 19:
        return pg(e, i, a);
      case 31:
        return QT(e, i, a);
      case 22:
        return sg(
          e,
          i,
          a,
          i.pendingProps
        );
      case 24:
        return Ii(i), s = ve(ae), e === null ? (f = Ku(), f === null && (f = Gt, p = Xu(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= a), f = p), i.memoizedState = { parent: s, cache: f }, Zu(i), hi(i, ae, f)) : ((e.lanes & a) !== 0 && (Ju(e, i), Pl(i, null, null, a), Fl()), f = e.memoizedState, p = i.memoizedState, f.parent !== s ? (f = { parent: s, cache: s }, i.memoizedState = f, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = f), hi(i, ae, s)) : (s = p.cache, hi(i, ae, s), s !== f.cache && Gu(
          i,
          [ae],
          a,
          !0
        ))), xe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(l(156, i.tag));
  }
  function Qn(e) {
    e.flags |= 4;
  }
  function zc(e, i, a, s, f) {
    if ((i = (e.mode & 32) !== 0) && (i = !1), i) {
      if (e.flags |= 16777216, (f & 335544128) === f)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Pg()) e.flags |= 8192;
        else
          throw Zi = Ts, Qu;
    } else e.flags &= -16777217;
  }
  function yg(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !zy(i))
      if (Pg()) e.flags |= 8192;
      else
        throw Zi = Ts, Qu;
  }
  function js(e, i) {
    i !== null && (e.flags |= 4), e.flags & 16384 && (i = e.tag !== 22 ? Zd() : 536870912, e.lanes |= i, Xr |= i);
  }
  function Ql(e, i) {
    if (!zt)
      switch (e.tailMode) {
        case "hidden":
          i = e.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), i = i.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var s = null; a !== null; )
            a.alternate !== null && (s = a), a = a.sibling;
          s === null ? i || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
  }
  function Qt(e) {
    var i = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
    if (i)
      for (var f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, s |= f.subtreeFlags & 65011712, s |= f.flags & 65011712, f.return = e, f = f.sibling;
    else
      for (f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = e, f = f.sibling;
    return e.subtreeFlags |= s, e.childLanes = a, i;
  }
  function JT(e, i, a) {
    var s = i.pendingProps;
    switch (Hu(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(i), null;
      case 1:
        return Qt(i), null;
      case 3:
        return a = i.stateNode, s = null, e !== null && (s = e.memoizedState.cache), i.memoizedState.cache !== s && (i.flags |= 2048), Gn(ae), Ht(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (_r(i) ? Qn(i) : e === null || e.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Fu())), Qt(i), null;
      case 26:
        var f = i.type, p = i.memoizedState;
        return e === null ? (Qn(i), p !== null ? (Qt(i), yg(i, p)) : (Qt(i), zc(
          i,
          f,
          null,
          s,
          a
        ))) : p ? p !== e.memoizedState ? (Qn(i), Qt(i), yg(i, p)) : (Qt(i), i.flags &= -16777217) : (e = e.memoizedProps, e !== s && Qn(i), Qt(i), zc(
          i,
          f,
          e,
          s,
          a
        )), null;
      case 27:
        if (Bn(i), a = ht.current, f = i.type, e !== null && i.stateNode != null)
          e.memoizedProps !== s && Qn(i);
        else {
          if (!s) {
            if (i.stateNode === null)
              throw Error(l(166));
            return Qt(i), null;
          }
          e = at.current, _r(i) ? Zm(i) : (e = Ay(f, s, a), i.stateNode = e, Qn(i));
        }
        return Qt(i), null;
      case 5:
        if (Bn(i), f = i.type, e !== null && i.stateNode != null)
          e.memoizedProps !== s && Qn(i);
        else {
          if (!s) {
            if (i.stateNode === null)
              throw Error(l(166));
            return Qt(i), null;
          }
          if (p = at.current, _r(i))
            Zm(i);
          else {
            var b = to(
              ht.current
            );
            switch (p) {
              case 1:
                p = b.createElementNS(
                  "http://www.w3.org/2000/svg",
                  f
                );
                break;
              case 2:
                p = b.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  f
                );
                break;
              default:
                switch (f) {
                  case "svg":
                    p = b.createElementNS(
                      "http://www.w3.org/2000/svg",
                      f
                    );
                    break;
                  case "math":
                    p = b.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f
                    );
                    break;
                  case "script":
                    p = b.createElement("div"), p.innerHTML = "<script><\/script>", p = p.removeChild(
                      p.firstChild
                    );
                    break;
                  case "select":
                    p = typeof s.is == "string" ? b.createElement("select", {
                      is: s.is
                    }) : b.createElement("select"), s.multiple ? p.multiple = !0 : s.size && (p.size = s.size);
                    break;
                  default:
                    p = typeof s.is == "string" ? b.createElement(f, { is: s.is }) : b.createElement(f);
                }
            }
            p[ye] = i, p[Be] = s;
            t: for (b = i.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6)
                p.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === i) break t;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === i)
                  break t;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            i.stateNode = p;
            t: switch (Se(p, f, s), f) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break t;
              case "img":
                s = !0;
                break t;
              default:
                s = !1;
            }
            s && Qn(i);
          }
        }
        return Qt(i), zc(
          i,
          i.type,
          e === null ? null : e.memoizedProps,
          i.pendingProps,
          a
        ), null;
      case 6:
        if (e && i.stateNode != null)
          e.memoizedProps !== s && Qn(i);
        else {
          if (typeof s != "string" && i.stateNode === null)
            throw Error(l(166));
          if (e = ht.current, _r(i)) {
            if (e = i.stateNode, a = i.memoizedProps, s = null, f = be, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
            e[ye] = i, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || dy(e.nodeValue, a)), e || fi(i, !0);
          } else
            e = to(e).createTextNode(
              s
            ), e[ye] = i, i.stateNode = e;
        }
        return Qt(i), null;
      case 31:
        if (a = i.memoizedState, e === null || e.memoizedState !== null) {
          if (s = _r(i), a !== null) {
            if (e === null) {
              if (!s) throw Error(l(318));
              if (e = i.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[ye] = i;
            } else
              Gi(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            Qt(i), e = !1;
          } else
            a = Fu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return i.flags & 256 ? (Je(i), i) : (Je(i), null);
          if ((i.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Qt(i), null;
      case 13:
        if (s = i.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (f = _r(i), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (f = i.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(l(317));
              f[ye] = i;
            } else
              Gi(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            Qt(i), f = !1;
          } else
            f = Fu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return i.flags & 256 ? (Je(i), i) : (Je(i), null);
        }
        return Je(i), (i.flags & 128) !== 0 ? (i.lanes = a, i) : (a = s !== null, e = e !== null && e.memoizedState !== null, a && (s = i.child, f = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (f = s.alternate.memoizedState.cachePool.pool), p = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== f && (s.flags |= 2048)), a !== e && a && (i.child.flags |= 8192), js(i, i.updateQueue), Qt(i), null);
      case 4:
        return Ht(), e === null && tf(i.stateNode.containerInfo), Qt(i), null;
      case 10:
        return Gn(i.type), Qt(i), null;
      case 19:
        if (F(ie), s = i.memoizedState, s === null) return Qt(i), null;
        if (f = (i.flags & 128) !== 0, p = s.rendering, p === null)
          if (f) Ql(s, !1);
          else {
            if (ee !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = i.child; e !== null; ) {
                if (p = Cs(e), p !== null) {
                  for (i.flags |= 128, Ql(s, !1), e = p.updateQueue, i.updateQueue = e, js(i, e), i.subtreeFlags = 0, e = a, a = i.child; a !== null; )
                    Gm(a, e), a = a.sibling;
                  return E(
                    ie,
                    ie.current & 1 | 2
                  ), zt && Pn(i, s.treeForkCount), i.child;
                }
                e = e.sibling;
              }
            s.tail !== null && Re() > Ys && (i.flags |= 128, f = !0, Ql(s, !1), i.lanes = 4194304);
          }
        else {
          if (!f)
            if (e = Cs(p), e !== null) {
              if (i.flags |= 128, f = !0, e = e.updateQueue, i.updateQueue = e, js(i, e), Ql(s, !0), s.tail === null && s.tailMode === "hidden" && !p.alternate && !zt)
                return Qt(i), null;
            } else
              2 * Re() - s.renderingStartTime > Ys && a !== 536870912 && (i.flags |= 128, f = !0, Ql(s, !1), i.lanes = 4194304);
          s.isBackwards ? (p.sibling = i.child, i.child = p) : (e = s.last, e !== null ? e.sibling = p : i.child = p, s.last = p);
        }
        return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = Re(), e.sibling = null, a = ie.current, E(
          ie,
          f ? a & 1 | 2 : a & 1
        ), zt && Pn(i, s.treeForkCount), e) : (Qt(i), null);
      case 22:
      case 23:
        return Je(i), ec(), s = i.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (i.flags |= 8192) : s && (i.flags |= 8192), s ? (a & 536870912) !== 0 && (i.flags & 128) === 0 && (Qt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : Qt(i), a = i.updateQueue, a !== null && js(i, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== a && (i.flags |= 2048), e !== null && F(Ki), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), i.memoizedState.cache !== a && (i.flags |= 2048), Gn(ae), Qt(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, i.tag));
  }
  function $T(e, i) {
    switch (Hu(i), i.tag) {
      case 1:
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 3:
        return Gn(ae), Ht(), e = i.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (i.flags = e & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return Bn(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (Je(i), i.alternate === null)
            throw Error(l(340));
          Gi();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 13:
        if (Je(i), e = i.memoizedState, e !== null && e.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(l(340));
          Gi();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 19:
        return F(ie), null;
      case 4:
        return Ht(), null;
      case 10:
        return Gn(i.type), null;
      case 22:
      case 23:
        return Je(i), ec(), e !== null && F(Ki), e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 24:
        return Gn(ae), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bg(e, i) {
    switch (Hu(i), i.tag) {
      case 3:
        Gn(ae), Ht();
        break;
      case 26:
      case 27:
      case 5:
        Bn(i);
        break;
      case 4:
        Ht();
        break;
      case 31:
        i.memoizedState !== null && Je(i);
        break;
      case 13:
        Je(i);
        break;
      case 19:
        F(ie);
        break;
      case 10:
        Gn(i.type);
        break;
      case 22:
      case 23:
        Je(i), ec(), e !== null && F(Ki);
        break;
      case 24:
        Gn(ae);
    }
  }
  function Zl(e, i) {
    try {
      var a = i.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            s = void 0;
            var p = a.create, b = a.inst;
            s = p(), b.destroy = s;
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (T) {
      jt(i, i.return, T);
    }
  }
  function bi(e, i, a) {
    try {
      var s = i.updateQueue, f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        s = p;
        do {
          if ((s.tag & e) === e) {
            var b = s.inst, T = b.destroy;
            if (T !== void 0) {
              b.destroy = void 0, f = i;
              var D = a, V = T;
              try {
                V();
              } catch (P) {
                jt(
                  f,
                  D,
                  P
                );
              }
            }
          }
          s = s.next;
        } while (s !== p);
      }
    } catch (P) {
      jt(i, i.return, P);
    }
  }
  function vg(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var a = e.stateNode;
      try {
        up(i, a);
      } catch (s) {
        jt(e, e.return, s);
      }
    }
  }
  function xg(e, i, a) {
    a.props = Wi(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (s) {
      jt(e, i, s);
    }
  }
  function Jl(e, i) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(s) : a.current = s;
      }
    } catch (f) {
      jt(e, i, f);
    }
  }
  function Rn(e, i) {
    var a = e.ref, s = e.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (f) {
          jt(e, i, f);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          jt(e, i, f);
        }
      else a.current = null;
  }
  function Sg(e) {
    var i = e.type, a = e.memoizedProps, s = e.stateNode;
    try {
      t: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break t;
        case "img":
          a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (f) {
      jt(e, e.return, f);
    }
  }
  function _c(e, i, a) {
    try {
      var s = e.stateNode;
      xE(s, e.type, a, i), s[Be] = i;
    } catch (f) {
      jt(e, e.return, f);
    }
  }
  function Tg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wi(e.type) || e.tag === 4;
  }
  function Lc(e) {
    t: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && wi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue t;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Nc(e, i, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, i ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, i) : (i = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, i.appendChild(e), a = a._reactRootContainer, a != null || i.onclick !== null || (i.onclick = Hn));
    else if (s !== 4 && (s === 27 && wi(e.type) && (a = e.stateNode, i = null), e = e.child, e !== null))
      for (Nc(e, i, a), e = e.sibling; e !== null; )
        Nc(e, i, a), e = e.sibling;
  }
  function Hs(e, i, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, i ? a.insertBefore(e, i) : a.appendChild(e);
    else if (s !== 4 && (s === 27 && wi(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Hs(e, i, a), e = e.sibling; e !== null; )
        Hs(e, i, a), e = e.sibling;
  }
  function Eg(e) {
    var i = e.stateNode, a = e.memoizedProps;
    try {
      for (var s = e.type, f = i.attributes; f.length; )
        i.removeAttributeNode(f[0]);
      Se(i, s, a), i[ye] = e, i[Be] = a;
    } catch (p) {
      jt(e, e.return, p);
    }
  }
  var Zn = !1, ue = !1, Bc = !1, Ag = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function WT(e, i) {
    if (e = e.containerInfo, rf = so, e = Bm(e), Ru(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        t: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var f = s.anchorOffset, p = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, p.nodeType;
            } catch {
              a = null;
              break t;
            }
            var b = 0, T = -1, D = -1, V = 0, P = 0, K = e, j = null;
            e: for (; ; ) {
              for (var H; K !== a || f !== 0 && K.nodeType !== 3 || (T = b + f), K !== p || s !== 0 && K.nodeType !== 3 || (D = b + s), K.nodeType === 3 && (b += K.nodeValue.length), (H = K.firstChild) !== null; )
                j = K, K = H;
              for (; ; ) {
                if (K === e) break e;
                if (j === a && ++V === f && (T = b), j === p && ++P === s && (D = b), (H = K.nextSibling) !== null) break;
                K = j, j = K.parentNode;
              }
              K = H;
            }
            a = T === -1 || D === -1 ? null : { start: T, end: D };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (lf = { focusedElem: e, selectionRange: a }, so = !1, ge = i; ge !== null; )
      if (i = ge, e = i.child, (i.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = i, ge = e;
      else
        for (; ge !== null; ) {
          switch (i = ge, p = i.alternate, e = i.flags, i.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = i.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  f = e[a], f.ref.impl = f.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                e = void 0, a = i, f = p.memoizedProps, p = p.memoizedState, s = a.stateNode;
                try {
                  var ot = Wi(
                    a.type,
                    f
                  );
                  e = s.getSnapshotBeforeUpdate(
                    ot,
                    p
                  ), s.__reactInternalSnapshotBeforeUpdate = e;
                } catch (gt) {
                  jt(
                    a,
                    a.return,
                    gt
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = i.stateNode.containerInfo, a = e.nodeType, a === 9)
                  of(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      of(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = i.sibling, e !== null) {
            e.return = i.return, ge = e;
            break;
          }
          ge = i.return;
        }
  }
  function wg(e, i, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        $n(e, a), s & 4 && Zl(5, a);
        break;
      case 1:
        if ($n(e, a), s & 4)
          if (e = a.stateNode, i === null)
            try {
              e.componentDidMount();
            } catch (b) {
              jt(a, a.return, b);
            }
          else {
            var f = Wi(
              a.type,
              i.memoizedProps
            );
            i = i.memoizedState;
            try {
              e.componentDidUpdate(
                f,
                i,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              jt(
                a,
                a.return,
                b
              );
            }
          }
        s & 64 && vg(a), s & 512 && Jl(a, a.return);
        break;
      case 3:
        if ($n(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
          if (i = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                i = a.child.stateNode;
                break;
              case 1:
                i = a.child.stateNode;
            }
          try {
            up(e, i);
          } catch (b) {
            jt(a, a.return, b);
          }
        }
        break;
      case 27:
        i === null && s & 4 && Eg(a);
      case 26:
      case 5:
        $n(e, a), i === null && s & 4 && Sg(a), s & 512 && Jl(a, a.return);
        break;
      case 12:
        $n(e, a);
        break;
      case 31:
        $n(e, a), s & 4 && Dg(e, a);
        break;
      case 13:
        $n(e, a), s & 4 && Rg(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = oE.bind(
          null,
          a
        ), DE(e, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || Zn, !s) {
          i = i !== null && i.memoizedState !== null || ue, f = Zn;
          var p = ue;
          Zn = s, (ue = i) && !p ? Wn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : $n(e, a), Zn = f, ue = p;
        }
        break;
      case 30:
        break;
      default:
        $n(e, a);
    }
  }
  function Cg(e) {
    var i = e.alternate;
    i !== null && (e.alternate = null, Cg(i)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (i = e.stateNode, i !== null && hu(i)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var $t = null, Ve = !1;
  function Jn(e, i, a) {
    for (a = a.child; a !== null; )
      kg(e, i, a), a = a.sibling;
  }
  function kg(e, i, a) {
    if (he && typeof he.onCommitFiberUnmount == "function")
      try {
        he.onCommitFiberUnmount(Me, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        ue || Rn(a, i), Jn(
          e,
          i,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ue || Rn(a, i);
        var s = $t, f = Ve;
        wi(a.type) && ($t = a.stateNode, Ve = !1), Jn(
          e,
          i,
          a
        ), aa(a.stateNode), $t = s, Ve = f;
        break;
      case 5:
        ue || Rn(a, i);
      case 6:
        if (s = $t, f = Ve, $t = null, Jn(
          e,
          i,
          a
        ), $t = s, Ve = f, $t !== null)
          if (Ve)
            try {
              ($t.nodeType === 9 ? $t.body : $t.nodeName === "HTML" ? $t.ownerDocument.body : $t).removeChild(a.stateNode);
            } catch (p) {
              jt(
                a,
                i,
                p
              );
            }
          else
            try {
              $t.removeChild(a.stateNode);
            } catch (p) {
              jt(
                a,
                i,
                p
              );
            }
        break;
      case 18:
        $t !== null && (Ve ? (e = $t, vy(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), tl(e)) : vy($t, a.stateNode));
        break;
      case 4:
        s = $t, f = Ve, $t = a.stateNode.containerInfo, Ve = !0, Jn(
          e,
          i,
          a
        ), $t = s, Ve = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bi(2, a, i), ue || bi(4, a, i), Jn(
          e,
          i,
          a
        );
        break;
      case 1:
        ue || (Rn(a, i), s = a.stateNode, typeof s.componentWillUnmount == "function" && xg(
          a,
          i,
          s
        )), Jn(
          e,
          i,
          a
        );
        break;
      case 21:
        Jn(
          e,
          i,
          a
        );
        break;
      case 22:
        ue = (s = ue) || a.memoizedState !== null, Jn(
          e,
          i,
          a
        ), ue = s;
        break;
      default:
        Jn(
          e,
          i,
          a
        );
    }
  }
  function Dg(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        tl(e);
      } catch (a) {
        jt(i, i.return, a);
      }
    }
  }
  function Rg(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        tl(e);
      } catch (a) {
        jt(i, i.return, a);
      }
  }
  function tE(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new Ag()), i;
      case 22:
        return e = e.stateNode, i = e._retryCache, i === null && (i = e._retryCache = new Ag()), i;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function qs(e, i) {
    var a = tE(e);
    i.forEach(function(s) {
      if (!a.has(s)) {
        a.add(s);
        var f = uE.bind(null, e, s);
        s.then(f, f);
      }
    });
  }
  function je(e, i) {
    var a = i.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var f = a[s], p = e, b = i, T = b;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (wi(T.type)) {
                $t = T.stateNode, Ve = !1;
                break t;
              }
              break;
            case 5:
              $t = T.stateNode, Ve = !1;
              break t;
            case 3:
            case 4:
              $t = T.stateNode.containerInfo, Ve = !0;
              break t;
          }
          T = T.return;
        }
        if ($t === null) throw Error(l(160));
        kg(p, b, f), $t = null, Ve = !1, p = f.alternate, p !== null && (p.return = null), f.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        Mg(i, e), i = i.sibling;
  }
  var Sn = null;
  function Mg(e, i) {
    var a = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        je(i, e), He(e), s & 4 && (bi(3, e, e.return), Zl(3, e), bi(5, e, e.return));
        break;
      case 1:
        je(i, e), He(e), s & 512 && (ue || a === null || Rn(a, a.return)), s & 64 && Zn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
        break;
      case 26:
        var f = Sn;
        if (je(i, e), He(e), s & 512 && (ue || a === null || Rn(a, a.return)), s & 4) {
          var p = a !== null ? a.memoizedState : null;
          if (s = e.memoizedState, a === null)
            if (s === null)
              if (e.stateNode === null) {
                t: {
                  s = e.type, a = e.memoizedProps, f = f.ownerDocument || f;
                  e: switch (s) {
                    case "title":
                      p = f.getElementsByTagName("title")[0], (!p || p[Al] || p[ye] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = f.createElement(s), f.head.insertBefore(
                        p,
                        f.querySelector("head > title")
                      )), Se(p, s, a), p[ye] = e, pe(p), s = p;
                      break t;
                    case "link":
                      var b = My(
                        "link",
                        "href",
                        f
                      ).get(s + (a.href || ""));
                      if (b) {
                        for (var T = 0; T < b.length; T++)
                          if (p = b[T], p.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && p.getAttribute("rel") === (a.rel == null ? null : a.rel) && p.getAttribute("title") === (a.title == null ? null : a.title) && p.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            b.splice(T, 1);
                            break e;
                          }
                      }
                      p = f.createElement(s), Se(p, s, a), f.head.appendChild(p);
                      break;
                    case "meta":
                      if (b = My(
                        "meta",
                        "content",
                        f
                      ).get(s + (a.content || ""))) {
                        for (T = 0; T < b.length; T++)
                          if (p = b[T], p.getAttribute("content") === (a.content == null ? null : "" + a.content) && p.getAttribute("name") === (a.name == null ? null : a.name) && p.getAttribute("property") === (a.property == null ? null : a.property) && p.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && p.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            b.splice(T, 1);
                            break e;
                          }
                      }
                      p = f.createElement(s), Se(p, s, a), f.head.appendChild(p);
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  p[ye] = e, pe(p), s = p;
                }
                e.stateNode = s;
              } else
                Oy(
                  f,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ry(
                f,
                s,
                e.memoizedProps
              );
          else
            p !== s ? (p === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : p.count--, s === null ? Oy(
              f,
              e.type,
              e.stateNode
            ) : Ry(
              f,
              s,
              e.memoizedProps
            )) : s === null && e.stateNode !== null && _c(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        je(i, e), He(e), s & 512 && (ue || a === null || Rn(a, a.return)), a !== null && s & 4 && _c(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (je(i, e), He(e), s & 512 && (ue || a === null || Rn(a, a.return)), e.flags & 32) {
          f = e.stateNode;
          try {
            Er(f, "");
          } catch (ot) {
            jt(e, e.return, ot);
          }
        }
        s & 4 && e.stateNode != null && (f = e.memoizedProps, _c(
          e,
          f,
          a !== null ? a.memoizedProps : f
        )), s & 1024 && (Bc = !0);
        break;
      case 6:
        if (je(i, e), He(e), s & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          s = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = s;
          } catch (ot) {
            jt(e, e.return, ot);
          }
        }
        break;
      case 3:
        if (io = null, f = Sn, Sn = eo(i.containerInfo), je(i, e), Sn = f, He(e), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            tl(i.containerInfo);
          } catch (ot) {
            jt(e, e.return, ot);
          }
        Bc && (Bc = !1, Og(e));
        break;
      case 4:
        s = Sn, Sn = eo(
          e.stateNode.containerInfo
        ), je(i, e), He(e), Sn = s;
        break;
      case 12:
        je(i, e), He(e);
        break;
      case 31:
        je(i, e), He(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, qs(e, s)));
        break;
      case 13:
        je(i, e), He(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ps = Re()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, qs(e, s)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var D = a !== null && a.memoizedState !== null, V = Zn, P = ue;
        if (Zn = V || f, ue = P || D, je(i, e), ue = P, Zn = V, He(e), s & 8192)
          t: for (i = e.stateNode, i._visibility = f ? i._visibility & -2 : i._visibility | 1, f && (a === null || D || Zn || ue || tr(e)), a = null, i = e; ; ) {
            if (i.tag === 5 || i.tag === 26) {
              if (a === null) {
                D = a = i;
                try {
                  if (p = D.stateNode, f)
                    b = p.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    T = D.stateNode;
                    var K = D.memoizedProps.style, j = K != null && K.hasOwnProperty("display") ? K.display : null;
                    T.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (ot) {
                  jt(D, D.return, ot);
                }
              }
            } else if (i.tag === 6) {
              if (a === null) {
                D = i;
                try {
                  D.stateNode.nodeValue = f ? "" : D.memoizedProps;
                } catch (ot) {
                  jt(D, D.return, ot);
                }
              }
            } else if (i.tag === 18) {
              if (a === null) {
                D = i;
                try {
                  var H = D.stateNode;
                  f ? xy(H, !0) : xy(D.stateNode, !1);
                } catch (ot) {
                  jt(D, D.return, ot);
                }
              }
            } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === e) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === e) break t;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e) break t;
              a === i && (a = null), i = i.return;
            }
            a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
          }
        s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, qs(e, a))));
        break;
      case 19:
        je(i, e), He(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, qs(e, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        je(i, e), He(e);
    }
  }
  function He(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        for (var a, s = e.return; s !== null; ) {
          if (Tg(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var f = a.stateNode, p = Lc(e);
            Hs(e, p, f);
            break;
          case 5:
            var b = a.stateNode;
            a.flags & 32 && (Er(b, ""), a.flags &= -33);
            var T = Lc(e);
            Hs(e, T, b);
            break;
          case 3:
          case 4:
            var D = a.stateNode.containerInfo, V = Lc(e);
            Nc(
              e,
              V,
              D
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (P) {
        jt(e, e.return, P);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function Og(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var i = e;
        Og(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), e = e.sibling;
      }
  }
  function $n(e, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        wg(e, i.alternate, i), i = i.sibling;
  }
  function tr(e) {
    for (e = e.child; e !== null; ) {
      var i = e;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bi(4, i, i.return), tr(i);
          break;
        case 1:
          Rn(i, i.return);
          var a = i.stateNode;
          typeof a.componentWillUnmount == "function" && xg(
            i,
            i.return,
            a
          ), tr(i);
          break;
        case 27:
          aa(i.stateNode);
        case 26:
        case 5:
          Rn(i, i.return), tr(i);
          break;
        case 22:
          i.memoizedState === null && tr(i);
          break;
        case 30:
          tr(i);
          break;
        default:
          tr(i);
      }
      e = e.sibling;
    }
  }
  function Wn(e, i, a) {
    for (a = a && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var s = i.alternate, f = e, p = i, b = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Wn(
            f,
            p,
            a
          ), Zl(4, p);
          break;
        case 1:
          if (Wn(
            f,
            p,
            a
          ), s = p, f = s.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (V) {
              jt(s, s.return, V);
            }
          if (s = p, f = s.updateQueue, f !== null) {
            var T = s.stateNode;
            try {
              var D = f.shared.hiddenCallbacks;
              if (D !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < D.length; f++)
                  op(D[f], T);
            } catch (V) {
              jt(s, s.return, V);
            }
          }
          a && b & 64 && vg(p), Jl(p, p.return);
          break;
        case 27:
          Eg(p);
        case 26:
        case 5:
          Wn(
            f,
            p,
            a
          ), a && s === null && b & 4 && Sg(p), Jl(p, p.return);
          break;
        case 12:
          Wn(
            f,
            p,
            a
          );
          break;
        case 31:
          Wn(
            f,
            p,
            a
          ), a && b & 4 && Dg(f, p);
          break;
        case 13:
          Wn(
            f,
            p,
            a
          ), a && b & 4 && Rg(f, p);
          break;
        case 22:
          p.memoizedState === null && Wn(
            f,
            p,
            a
          ), Jl(p, p.return);
          break;
        case 30:
          break;
        default:
          Wn(
            f,
            p,
            a
          );
      }
      i = i.sibling;
    }
  }
  function Uc(e, i) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (e = i.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ul(a));
  }
  function Vc(e, i) {
    e = null, i.alternate !== null && (e = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== e && (i.refCount++, e != null && Ul(e));
  }
  function Tn(e, i, a, s) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; )
        zg(
          e,
          i,
          a,
          s
        ), i = i.sibling;
  }
  function zg(e, i, a, s) {
    var f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Tn(
          e,
          i,
          a,
          s
        ), f & 2048 && Zl(9, i);
        break;
      case 1:
        Tn(
          e,
          i,
          a,
          s
        );
        break;
      case 3:
        Tn(
          e,
          i,
          a,
          s
        ), f & 2048 && (e = null, i.alternate !== null && (e = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== e && (i.refCount++, e != null && Ul(e)));
        break;
      case 12:
        if (f & 2048) {
          Tn(
            e,
            i,
            a,
            s
          ), e = i.stateNode;
          try {
            var p = i.memoizedProps, b = p.id, T = p.onPostCommit;
            typeof T == "function" && T(
              b,
              i.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (D) {
            jt(i, i.return, D);
          }
        } else
          Tn(
            e,
            i,
            a,
            s
          );
        break;
      case 31:
        Tn(
          e,
          i,
          a,
          s
        );
        break;
      case 13:
        Tn(
          e,
          i,
          a,
          s
        );
        break;
      case 23:
        break;
      case 22:
        p = i.stateNode, b = i.alternate, i.memoizedState !== null ? p._visibility & 2 ? Tn(
          e,
          i,
          a,
          s
        ) : $l(e, i) : p._visibility & 2 ? Tn(
          e,
          i,
          a,
          s
        ) : (p._visibility |= 2, Pr(
          e,
          i,
          a,
          s,
          (i.subtreeFlags & 10256) !== 0 || !1
        )), f & 2048 && Uc(b, i);
        break;
      case 24:
        Tn(
          e,
          i,
          a,
          s
        ), f & 2048 && Vc(i.alternate, i);
        break;
      default:
        Tn(
          e,
          i,
          a,
          s
        );
    }
  }
  function Pr(e, i, a, s, f) {
    for (f = f && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var p = e, b = i, T = a, D = s, V = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Pr(
            p,
            b,
            T,
            D,
            f
          ), Zl(8, b);
          break;
        case 23:
          break;
        case 22:
          var P = b.stateNode;
          b.memoizedState !== null ? P._visibility & 2 ? Pr(
            p,
            b,
            T,
            D,
            f
          ) : $l(
            p,
            b
          ) : (P._visibility |= 2, Pr(
            p,
            b,
            T,
            D,
            f
          )), f && V & 2048 && Uc(
            b.alternate,
            b
          );
          break;
        case 24:
          Pr(
            p,
            b,
            T,
            D,
            f
          ), f && V & 2048 && Vc(b.alternate, b);
          break;
        default:
          Pr(
            p,
            b,
            T,
            D,
            f
          );
      }
      i = i.sibling;
    }
  }
  function $l(e, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var a = e, s = i, f = s.flags;
        switch (s.tag) {
          case 22:
            $l(a, s), f & 2048 && Uc(
              s.alternate,
              s
            );
            break;
          case 24:
            $l(a, s), f & 2048 && Vc(s.alternate, s);
            break;
          default:
            $l(a, s);
        }
        i = i.sibling;
      }
  }
  var Wl = 8192;
  function Yr(e, i, a) {
    if (e.subtreeFlags & Wl)
      for (e = e.child; e !== null; )
        _g(
          e,
          i,
          a
        ), e = e.sibling;
  }
  function _g(e, i, a) {
    switch (e.tag) {
      case 26:
        Yr(
          e,
          i,
          a
        ), e.flags & Wl && e.memoizedState !== null && HE(
          a,
          Sn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Yr(
          e,
          i,
          a
        );
        break;
      case 3:
      case 4:
        var s = Sn;
        Sn = eo(e.stateNode.containerInfo), Yr(
          e,
          i,
          a
        ), Sn = s;
        break;
      case 22:
        e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = Wl, Wl = 16777216, Yr(
          e,
          i,
          a
        ), Wl = s) : Yr(
          e,
          i,
          a
        ));
        break;
      default:
        Yr(
          e,
          i,
          a
        );
    }
  }
  function Lg(e) {
    var i = e.alternate;
    if (i !== null && (e = i.child, e !== null)) {
      i.child = null;
      do
        i = e.sibling, e.sibling = null, e = i;
      while (e !== null);
    }
  }
  function ta(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var s = i[a];
          ge = s, Bg(
            s,
            e
          );
        }
      Lg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ng(e), e = e.sibling;
  }
  function Ng(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ta(e), e.flags & 2048 && bi(9, e, e.return);
        break;
      case 3:
        ta(e);
        break;
      case 12:
        ta(e);
        break;
      case 22:
        var i = e.stateNode;
        e.memoizedState !== null && i._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (i._visibility &= -3, Fs(e)) : ta(e);
        break;
      default:
        ta(e);
    }
  }
  function Fs(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var s = i[a];
          ge = s, Bg(
            s,
            e
          );
        }
      Lg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (i = e, i.tag) {
        case 0:
        case 11:
        case 15:
          bi(8, i, i.return), Fs(i);
          break;
        case 22:
          a = i.stateNode, a._visibility & 2 && (a._visibility &= -3, Fs(i));
          break;
        default:
          Fs(i);
      }
      e = e.sibling;
    }
  }
  function Bg(e, i) {
    for (; ge !== null; ) {
      var a = ge;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          bi(8, a, i);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Ul(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, ge = s;
      else
        t: for (a = e; ge !== null; ) {
          s = ge;
          var f = s.sibling, p = s.return;
          if (Cg(s), s === a) {
            ge = null;
            break t;
          }
          if (f !== null) {
            f.return = p, ge = f;
            break t;
          }
          ge = p;
        }
    }
  }
  var eE = {
    getCacheForType: function(e) {
      var i = ve(ae), a = i.data.get(e);
      return a === void 0 && (a = e(), i.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ve(ae).controller.signal;
    }
  }, nE = typeof WeakMap == "function" ? WeakMap : Map, Bt = 0, Gt = null, Ct = null, Mt = 0, Vt = 0, $e = null, vi = !1, Gr = !1, jc = !1, ti = 0, ee = 0, xi = 0, er = 0, Hc = 0, We = 0, Xr = 0, ea = null, qe = null, qc = !1, Ps = 0, Ug = 0, Ys = 1 / 0, Gs = null, Si = null, de = 0, Ti = null, Ir = null, ei = 0, Fc = 0, Pc = null, Vg = null, na = 0, Yc = null;
  function tn() {
    return (Bt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : N.T !== null ? Zc() : tm();
  }
  function jg() {
    if (We === 0)
      if ((Mt & 536870912) === 0 || zt) {
        var e = Wa;
        Wa <<= 1, (Wa & 3932160) === 0 && (Wa = 262144), We = e;
      } else We = 536870912;
    return e = Ze.current, e !== null && (e.flags |= 32), We;
  }
  function Fe(e, i, a) {
    (e === Gt && (Vt === 2 || Vt === 9) || e.cancelPendingCommit !== null) && (Kr(e, 0), Ei(
      e,
      Mt,
      We,
      !1
    )), El(e, a), ((Bt & 2) === 0 || e !== Gt) && (e === Gt && ((Bt & 2) === 0 && (er |= a), ee === 4 && Ei(
      e,
      Mt,
      We,
      !1
    )), Mn(e));
  }
  function Hg(e, i, a) {
    if ((Bt & 6) !== 0) throw Error(l(327));
    var s = !a && (i & 127) === 0 && (i & e.expiredLanes) === 0 || Tl(e, i), f = s ? lE(e, i) : Xc(e, i, !0), p = s;
    do {
      if (f === 0) {
        Gr && !s && Ei(e, i, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, p && !iE(a)) {
          f = Xc(e, i, !1), p = !1;
          continue;
        }
        if (f === 2) {
          if (p = i, e.errorRecoveryDisabledLanes & p)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            i = b;
            t: {
              var T = e;
              f = ea;
              var D = T.current.memoizedState.isDehydrated;
              if (D && (Kr(T, b).flags |= 256), b = Xc(
                T,
                b,
                !1
              ), b !== 2) {
                if (jc && !D) {
                  T.errorRecoveryDisabledLanes |= p, er |= p, f = 4;
                  break t;
                }
                p = qe, qe = f, p !== null && (qe === null ? qe = p : qe.push.apply(
                  qe,
                  p
                ));
              }
              f = b;
            }
            if (p = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Kr(e, 0), Ei(e, i, 0, !0);
          break;
        }
        t: {
          switch (s = e, p = f, p) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              Ei(
                s,
                i,
                We,
                !vi
              );
              break t;
            case 2:
              qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((i & 62914560) === i && (f = Ps + 300 - Re(), 10 < f)) {
            if (Ei(
              s,
              i,
              We,
              !vi
            ), es(s, 0, !0) !== 0) break t;
            ei = i, s.timeoutHandle = yy(
              qg.bind(
                null,
                s,
                a,
                qe,
                Gs,
                qc,
                i,
                We,
                er,
                Xr,
                vi,
                p,
                "Throttled",
                -0,
                0
              ),
              f
            );
            break t;
          }
          qg(
            s,
            a,
            qe,
            Gs,
            qc,
            i,
            We,
            er,
            Xr,
            vi,
            p,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function qg(e, i, a, s, f, p, b, T, D, V, P, K, j, H) {
    if (e.timeoutHandle = -1, K = i.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
      K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hn
      }, _g(
        i,
        p,
        K
      );
      var ot = (p & 62914560) === p ? Ps - Re() : (p & 4194048) === p ? Ug - Re() : 0;
      if (ot = qE(
        K,
        ot
      ), ot !== null) {
        ei = p, e.cancelPendingCommit = ot(
          Qg.bind(
            null,
            e,
            i,
            p,
            a,
            s,
            f,
            b,
            T,
            D,
            P,
            K,
            null,
            j,
            H
          )
        ), Ei(e, p, b, !V);
        return;
      }
    }
    Qg(
      e,
      i,
      p,
      a,
      s,
      f,
      b,
      T,
      D
    );
  }
  function iE(e) {
    for (var i = e; ; ) {
      var a = i.tag;
      if ((a === 0 || a === 11 || a === 15) && i.flags & 16384 && (a = i.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var s = 0; s < a.length; s++) {
          var f = a[s], p = f.getSnapshot;
          f = f.value;
          try {
            if (!Ke(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = i.child, i.subtreeFlags & 16384 && a !== null)
        a.return = i, i = a;
      else {
        if (i === e) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function Ei(e, i, a, s) {
    i &= ~Hc, i &= ~er, e.suspendedLanes |= i, e.pingedLanes &= ~i, s && (e.warmLanes |= i), s = e.expirationTimes;
    for (var f = i; 0 < f; ) {
      var p = 31 - Yt(f), b = 1 << p;
      s[p] = -1, f &= ~b;
    }
    a !== 0 && Jd(e, a, i);
  }
  function Xs() {
    return (Bt & 6) === 0 ? (ia(0), !1) : !0;
  }
  function Gc() {
    if (Ct !== null) {
      if (Vt === 0)
        var e = Ct.return;
      else
        e = Ct, Yn = Xi = null, sc(e), Vr = null, jl = 0, e = Ct;
      for (; e !== null; )
        bg(e.alternate, e), e = e.return;
      Ct = null;
    }
  }
  function Kr(e, i) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, EE(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ei = 0, Gc(), Gt = e, Ct = a = Fn(e.current, null), Mt = i, Vt = 0, $e = null, vi = !1, Gr = Tl(e, i), jc = !1, Xr = We = Hc = er = xi = ee = 0, qe = ea = null, qc = !1, (i & 8) !== 0 && (i |= i & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= i; 0 < s; ) {
        var f = 31 - Yt(s), p = 1 << f;
        i |= e[f], s &= ~p;
      }
    return ti = i, ds(), a;
  }
  function Fg(e, i) {
    Tt = null, N.H = Il, i === Ur || i === Ss ? (i = rp(), Vt = 3) : i === Qu ? (i = rp(), Vt = 4) : Vt = i === Ec ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, $e = i, Ct === null && (ee = 1, Ns(
      e,
      on(i, e.current)
    ));
  }
  function Pg() {
    var e = Ze.current;
    return e === null ? !0 : (Mt & 4194048) === Mt ? hn === null : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0 ? e === hn : !1;
  }
  function Yg() {
    var e = N.H;
    return N.H = Il, e === null ? Il : e;
  }
  function Gg() {
    var e = N.A;
    return N.A = eE, e;
  }
  function Is() {
    ee = 4, vi || (Mt & 4194048) !== Mt && Ze.current !== null || (Gr = !0), (xi & 134217727) === 0 && (er & 134217727) === 0 || Gt === null || Ei(
      Gt,
      Mt,
      We,
      !1
    );
  }
  function Xc(e, i, a) {
    var s = Bt;
    Bt |= 2;
    var f = Yg(), p = Gg();
    (Gt !== e || Mt !== i) && (Gs = null, Kr(e, i)), i = !1;
    var b = ee;
    t: do
      try {
        if (Vt !== 0 && Ct !== null) {
          var T = Ct, D = $e;
          switch (Vt) {
            case 8:
              Gc(), b = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ze.current === null && (i = !0);
              var V = Vt;
              if (Vt = 0, $e = null, Qr(e, T, D, V), a && Gr) {
                b = 0;
                break t;
              }
              break;
            default:
              V = Vt, Vt = 0, $e = null, Qr(e, T, D, V);
          }
        }
        rE(), b = ee;
        break;
      } catch (P) {
        Fg(e, P);
      }
    while (!0);
    return i && e.shellSuspendCounter++, Yn = Xi = null, Bt = s, N.H = f, N.A = p, Ct === null && (Gt = null, Mt = 0, ds()), b;
  }
  function rE() {
    for (; Ct !== null; ) Xg(Ct);
  }
  function lE(e, i) {
    var a = Bt;
    Bt |= 2;
    var s = Yg(), f = Gg();
    Gt !== e || Mt !== i ? (Gs = null, Ys = Re() + 500, Kr(e, i)) : Gr = Tl(
      e,
      i
    );
    t: do
      try {
        if (Vt !== 0 && Ct !== null) {
          i = Ct;
          var p = $e;
          e: switch (Vt) {
            case 1:
              Vt = 0, $e = null, Qr(e, i, p, 1);
              break;
            case 2:
            case 9:
              if (np(p)) {
                Vt = 0, $e = null, Ig(i);
                break;
              }
              i = function() {
                Vt !== 2 && Vt !== 9 || Gt !== e || (Vt = 7), Mn(e);
              }, p.then(i, i);
              break t;
            case 3:
              Vt = 7;
              break t;
            case 4:
              Vt = 5;
              break t;
            case 7:
              np(p) ? (Vt = 0, $e = null, Ig(i)) : (Vt = 0, $e = null, Qr(e, i, p, 7));
              break;
            case 5:
              var b = null;
              switch (Ct.tag) {
                case 26:
                  b = Ct.memoizedState;
                case 5:
                case 27:
                  var T = Ct;
                  if (b ? zy(b) : T.stateNode.complete) {
                    Vt = 0, $e = null;
                    var D = T.sibling;
                    if (D !== null) Ct = D;
                    else {
                      var V = T.return;
                      V !== null ? (Ct = V, Ks(V)) : Ct = null;
                    }
                    break e;
                  }
              }
              Vt = 0, $e = null, Qr(e, i, p, 5);
              break;
            case 6:
              Vt = 0, $e = null, Qr(e, i, p, 6);
              break;
            case 8:
              Gc(), ee = 6;
              break t;
            default:
              throw Error(l(462));
          }
        }
        aE();
        break;
      } catch (P) {
        Fg(e, P);
      }
    while (!0);
    return Yn = Xi = null, N.H = s, N.A = f, Bt = a, Ct !== null ? 0 : (Gt = null, Mt = 0, ds(), ee);
  }
  function aE() {
    for (; Ct !== null && !lu(); )
      Xg(Ct);
  }
  function Xg(e) {
    var i = gg(e.alternate, e, ti);
    e.memoizedProps = e.pendingProps, i === null ? Ks(e) : Ct = i;
  }
  function Ig(e) {
    var i = e, a = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = cg(
          a,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Mt
        );
        break;
      case 11:
        i = cg(
          a,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Mt
        );
        break;
      case 5:
        sc(i);
      default:
        bg(a, i), i = Ct = Gm(i, ti), i = gg(a, i, ti);
    }
    e.memoizedProps = e.pendingProps, i === null ? Ks(e) : Ct = i;
  }
  function Qr(e, i, a, s) {
    Yn = Xi = null, sc(i), Vr = null, jl = 0;
    var f = i.return;
    try {
      if (KT(
        e,
        f,
        i,
        a,
        Mt
      )) {
        ee = 1, Ns(
          e,
          on(a, e.current)
        ), Ct = null;
        return;
      }
    } catch (p) {
      if (f !== null) throw Ct = f, p;
      ee = 1, Ns(
        e,
        on(a, e.current)
      ), Ct = null;
      return;
    }
    i.flags & 32768 ? (zt || s === 1 ? e = !0 : Gr || (Mt & 536870912) !== 0 ? e = !1 : (vi = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Ze.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Kg(i, e)) : Ks(i);
  }
  function Ks(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        Kg(
          i,
          vi
        );
        return;
      }
      e = i.return;
      var a = JT(
        i.alternate,
        i,
        ti
      );
      if (a !== null) {
        Ct = a;
        return;
      }
      if (i = i.sibling, i !== null) {
        Ct = i;
        return;
      }
      Ct = i = e;
    } while (i !== null);
    ee === 0 && (ee = 5);
  }
  function Kg(e, i) {
    do {
      var a = $T(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ct = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !i && (e = e.sibling, e !== null)) {
        Ct = e;
        return;
      }
      Ct = e = a;
    } while (e !== null);
    ee = 6, Ct = null;
  }
  function Qg(e, i, a, s, f, p, b, T, D) {
    e.cancelPendingCommit = null;
    do
      Qs();
    while (de !== 0);
    if ((Bt & 6) !== 0) throw Error(l(327));
    if (i !== null) {
      if (i === e.current) throw Error(l(177));
      if (p = i.lanes | i.childLanes, p |= Lu, jS(
        e,
        a,
        p,
        b,
        T,
        D
      ), e === Gt && (Ct = Gt = null, Mt = 0), Ir = i, Ti = e, ei = a, Fc = p, Pc = f, Vg = s, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cE(bt, function() {
        return ty(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || s) {
        s = N.T, N.T = null, f = I.p, I.p = 2, b = Bt, Bt |= 4;
        try {
          WT(e, i, a);
        } finally {
          Bt = b, I.p = f, N.T = s;
        }
      }
      de = 1, Zg(), Jg(), $g();
    }
  }
  function Zg() {
    if (de === 1) {
      de = 0;
      var e = Ti, i = Ir, a = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null;
        var s = I.p;
        I.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          Mg(i, e);
          var p = lf, b = Bm(e.containerInfo), T = p.focusedElem, D = p.selectionRange;
          if (b !== T && T && T.ownerDocument && Nm(
            T.ownerDocument.documentElement,
            T
          )) {
            if (D !== null && Ru(T)) {
              var V = D.start, P = D.end;
              if (P === void 0 && (P = V), "selectionStart" in T)
                T.selectionStart = V, T.selectionEnd = Math.min(
                  P,
                  T.value.length
                );
              else {
                var K = T.ownerDocument || document, j = K && K.defaultView || window;
                if (j.getSelection) {
                  var H = j.getSelection(), ot = T.textContent.length, gt = Math.min(D.start, ot), Pt = D.end === void 0 ? gt : Math.min(D.end, ot);
                  !H.extend && gt > Pt && (b = Pt, Pt = gt, gt = b);
                  var z = Lm(
                    T,
                    gt
                  ), O = Lm(
                    T,
                    Pt
                  );
                  if (z && O && (H.rangeCount !== 1 || H.anchorNode !== z.node || H.anchorOffset !== z.offset || H.focusNode !== O.node || H.focusOffset !== O.offset)) {
                    var U = K.createRange();
                    U.setStart(z.node, z.offset), H.removeAllRanges(), gt > Pt ? (H.addRange(U), H.extend(O.node, O.offset)) : (U.setEnd(O.node, O.offset), H.addRange(U));
                  }
                }
              }
            }
            for (K = [], H = T; H = H.parentNode; )
              H.nodeType === 1 && K.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < K.length; T++) {
              var X = K[T];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          so = !!rf, lf = rf = null;
        } finally {
          Bt = f, I.p = s, N.T = a;
        }
      }
      e.current = i, de = 2;
    }
  }
  function Jg() {
    if (de === 2) {
      de = 0;
      var e = Ti, i = Ir, a = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || a) {
        a = N.T, N.T = null;
        var s = I.p;
        I.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          wg(e, i.alternate, i);
        } finally {
          Bt = f, I.p = s, N.T = a;
        }
      }
      de = 3;
    }
  }
  function $g() {
    if (de === 4 || de === 3) {
      de = 0, au();
      var e = Ti, i = Ir, a = ei, s = Vg;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? de = 5 : (de = 0, Ir = Ti = null, Wg(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (f === 0 && (Si = null), cu(a), i = i.stateNode, he && typeof he.onCommitFiberRoot == "function")
        try {
          he.onCommitFiberRoot(
            Me,
            i,
            void 0,
            (i.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        i = N.T, f = I.p, I.p = 2, N.T = null;
        try {
          for (var p = e.onRecoverableError, b = 0; b < s.length; b++) {
            var T = s[b];
            p(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          N.T = i, I.p = f;
        }
      }
      (ei & 3) !== 0 && Qs(), Mn(e), f = e.pendingLanes, (a & 261930) !== 0 && (f & 42) !== 0 ? e === Yc ? na++ : (na = 0, Yc = e) : na = 0, ia(0);
    }
  }
  function Wg(e, i) {
    (e.pooledCacheLanes &= i) === 0 && (i = e.pooledCache, i != null && (e.pooledCache = null, Ul(i)));
  }
  function Qs() {
    return Zg(), Jg(), $g(), ty();
  }
  function ty() {
    if (de !== 5) return !1;
    var e = Ti, i = Fc;
    Fc = 0;
    var a = cu(ei), s = N.T, f = I.p;
    try {
      I.p = 32 > a ? 32 : a, N.T = null, a = Pc, Pc = null;
      var p = Ti, b = ei;
      if (de = 0, Ir = Ti = null, ei = 0, (Bt & 6) !== 0) throw Error(l(331));
      var T = Bt;
      if (Bt |= 4, Ng(p.current), zg(
        p,
        p.current,
        b,
        a
      ), Bt = T, ia(0, !1), he && typeof he.onPostCommitFiberRoot == "function")
        try {
          he.onPostCommitFiberRoot(Me, p);
        } catch {
        }
      return !0;
    } finally {
      I.p = f, N.T = s, Wg(e, i);
    }
  }
  function ey(e, i, a) {
    i = on(a, i), i = Tc(e.stateNode, i, 2), e = pi(e, i, 2), e !== null && (El(e, 2), Mn(e));
  }
  function jt(e, i, a) {
    if (e.tag === 3)
      ey(e, e, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          ey(
            i,
            e,
            a
          );
          break;
        } else if (i.tag === 1) {
          var s = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Si === null || !Si.has(s))) {
            e = on(a, e), a = ng(2), s = pi(i, a, 2), s !== null && (ig(
              a,
              s,
              i,
              e
            ), El(s, 2), Mn(s));
            break;
          }
        }
        i = i.return;
      }
  }
  function Ic(e, i, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new nE();
      var f = /* @__PURE__ */ new Set();
      s.set(i, f);
    } else
      f = s.get(i), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(i, f));
    f.has(a) || (jc = !0, f.add(a), e = sE.bind(null, e, i, a), i.then(e, e));
  }
  function sE(e, i, a) {
    var s = e.pingCache;
    s !== null && s.delete(i), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Gt === e && (Mt & a) === a && (ee === 4 || ee === 3 && (Mt & 62914560) === Mt && 300 > Re() - Ps ? (Bt & 2) === 0 && Kr(e, 0) : Hc |= a, Xr === Mt && (Xr = 0)), Mn(e);
  }
  function ny(e, i) {
    i === 0 && (i = Zd()), e = Pi(e, i), e !== null && (El(e, i), Mn(e));
  }
  function oE(e) {
    var i = e.memoizedState, a = 0;
    i !== null && (a = i.retryLane), ny(e, a);
  }
  function uE(e, i) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var s = e.stateNode, f = e.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    s !== null && s.delete(i), ny(e, a);
  }
  function cE(e, i) {
    return gr(e, i);
  }
  var Zs = null, Zr = null, Kc = !1, Js = !1, Qc = !1, Ai = 0;
  function Mn(e) {
    e !== Zr && e.next === null && (Zr === null ? Zs = Zr = e : Zr = Zr.next = e), Js = !0, Kc || (Kc = !0, hE());
  }
  function ia(e, i) {
    if (!Qc && Js) {
      Qc = !0;
      do
        for (var a = !1, s = Zs; s !== null; ) {
          if (e !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var b = s.suspendedLanes, T = s.pingedLanes;
              p = (1 << 31 - Yt(42 | e) + 1) - 1, p &= f & ~(b & ~T), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (a = !0, ay(s, p));
          } else
            p = Mt, p = es(
              s,
              s === Gt ? p : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (p & 3) === 0 || Tl(s, p) || (a = !0, ay(s, p));
          s = s.next;
        }
      while (a);
      Qc = !1;
    }
  }
  function fE() {
    iy();
  }
  function iy() {
    Js = Kc = !1;
    var e = 0;
    Ai !== 0 && TE() && (e = Ai);
    for (var i = Re(), a = null, s = Zs; s !== null; ) {
      var f = s.next, p = ry(s, i);
      p === 0 ? (s.next = null, a === null ? Zs = f : a.next = f, f === null && (Zr = a)) : (a = s, (e !== 0 || (p & 3) !== 0) && (Js = !0)), s = f;
    }
    de !== 0 && de !== 5 || ia(e), Ai !== 0 && (Ai = 0);
  }
  function ry(e, i) {
    for (var a = e.suspendedLanes, s = e.pingedLanes, f = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p; ) {
      var b = 31 - Yt(p), T = 1 << b, D = f[b];
      D === -1 ? ((T & a) === 0 || (T & s) !== 0) && (f[b] = VS(T, i)) : D <= i && (e.expiredLanes |= T), p &= ~T;
    }
    if (i = Gt, a = Mt, a = es(
      e,
      e === i ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, a === 0 || e === i && (Vt === 2 || Vt === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && Sl(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Tl(e, a)) {
      if (i = a & -a, i === e.callbackPriority) return i;
      switch (s !== null && Sl(s), cu(a)) {
        case 2:
        case 8:
          a = rt;
          break;
        case 32:
          a = bt;
          break;
        case 268435456:
          a = Ut;
          break;
        default:
          a = bt;
      }
      return s = ly.bind(null, e), a = gr(a, s), e.callbackPriority = i, e.callbackNode = a, i;
    }
    return s !== null && s !== null && Sl(s), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ly(e, i) {
    if (de !== 0 && de !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Qs() && e.callbackNode !== a)
      return null;
    var s = Mt;
    return s = es(
      e,
      e === Gt ? s : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s === 0 ? null : (Hg(e, s, i), ry(e, Re()), e.callbackNode != null && e.callbackNode === a ? ly.bind(null, e) : null);
  }
  function ay(e, i) {
    if (Qs()) return null;
    Hg(e, i, !0);
  }
  function hE() {
    AE(function() {
      (Bt & 6) !== 0 ? gr(
        G,
        fE
      ) : iy();
    });
  }
  function Zc() {
    if (Ai === 0) {
      var e = Nr;
      e === 0 && (e = $a, $a <<= 1, ($a & 261888) === 0 && ($a = 256)), Ai = e;
    }
    return Ai;
  }
  function sy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ls("" + e);
  }
  function oy(e, i) {
    var a = i.ownerDocument.createElement("input");
    return a.name = i.name, a.value = i.value, e.id && a.setAttribute("form", e.id), i.parentNode.insertBefore(a, i), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function dE(e, i, a, s, f) {
    if (i === "submit" && a && a.stateNode === f) {
      var p = sy(
        (f[Be] || null).action
      ), b = s.submitter;
      b && (i = (i = b[Be] || null) ? sy(i.formAction) : b.getAttribute("formAction"), i !== null && (p = i, b = null));
      var T = new us(
        "action",
        "action",
        null,
        s,
        f
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (Ai !== 0) {
                  var D = b ? oy(f, b) : new FormData(f);
                  gc(
                    a,
                    {
                      pending: !0,
                      data: D,
                      method: f.method,
                      action: p
                    },
                    null,
                    D
                  );
                }
              } else
                typeof p == "function" && (T.preventDefault(), D = b ? oy(f, b) : new FormData(f), gc(
                  a,
                  {
                    pending: !0,
                    data: D,
                    method: f.method,
                    action: p
                  },
                  p,
                  D
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < _u.length; Jc++) {
    var $c = _u[Jc], mE = $c.toLowerCase(), pE = $c[0].toUpperCase() + $c.slice(1);
    xn(
      mE,
      "on" + pE
    );
  }
  xn(jm, "onAnimationEnd"), xn(Hm, "onAnimationIteration"), xn(qm, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(OT, "onTransitionRun"), xn(zT, "onTransitionStart"), xn(_T, "onTransitionCancel"), xn(Fm, "onTransitionEnd"), Sr("onMouseEnter", ["mouseout", "mouseover"]), Sr("onMouseLeave", ["mouseout", "mouseover"]), Sr("onPointerEnter", ["pointerout", "pointerover"]), Sr("onPointerLeave", ["pointerout", "pointerover"]), ji(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ji(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ji("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ji(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ji(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ji(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ra = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gE = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ra)
  );
  function uy(e, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var s = e[a], f = s.event;
      s = s.listeners;
      t: {
        var p = void 0;
        if (i)
          for (var b = s.length - 1; 0 <= b; b--) {
            var T = s[b], D = T.instance, V = T.currentTarget;
            if (T = T.listener, D !== p && f.isPropagationStopped())
              break t;
            p = T, f.currentTarget = V;
            try {
              p(f);
            } catch (P) {
              hs(P);
            }
            f.currentTarget = null, p = D;
          }
        else
          for (b = 0; b < s.length; b++) {
            if (T = s[b], D = T.instance, V = T.currentTarget, T = T.listener, D !== p && f.isPropagationStopped())
              break t;
            p = T, f.currentTarget = V;
            try {
              p(f);
            } catch (P) {
              hs(P);
            }
            f.currentTarget = null, p = D;
          }
      }
    }
  }
  function kt(e, i) {
    var a = i[fu];
    a === void 0 && (a = i[fu] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    a.has(s) || (cy(i, e, 2, !1), a.add(s));
  }
  function Wc(e, i, a) {
    var s = 0;
    i && (s |= 4), cy(
      a,
      e,
      s,
      i
    );
  }
  var $s = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(e) {
    if (!e[$s]) {
      e[$s] = !0, im.forEach(function(a) {
        a !== "selectionchange" && (gE.has(a) || Wc(a, !1, e), Wc(a, !0, e));
      });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[$s] || (i[$s] = !0, Wc("selectionchange", !1, i));
    }
  }
  function cy(e, i, a, s) {
    switch (jy(i)) {
      case 2:
        var f = YE;
        break;
      case 8:
        f = GE;
        break;
      default:
        f = gf;
    }
    a = f.bind(
      null,
      i,
      a,
      e
    ), f = void 0, !xu || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (f = !0), s ? f !== void 0 ? e.addEventListener(i, a, {
      capture: !0,
      passive: f
    }) : e.addEventListener(i, a, !0) : f !== void 0 ? e.addEventListener(i, a, {
      passive: f
    }) : e.addEventListener(i, a, !1);
  }
  function ef(e, i, a, s, f) {
    var p = s;
    if ((i & 1) === 0 && (i & 2) === 0 && s !== null)
      t: for (; ; ) {
        if (s === null) return;
        var b = s.tag;
        if (b === 3 || b === 4) {
          var T = s.stateNode.containerInfo;
          if (T === f) break;
          if (b === 4)
            for (b = s.return; b !== null; ) {
              var D = b.tag;
              if ((D === 3 || D === 4) && b.stateNode.containerInfo === f)
                return;
              b = b.return;
            }
          for (; T !== null; ) {
            if (b = br(T), b === null) return;
            if (D = b.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              s = p = b;
              continue t;
            }
            T = T.parentNode;
          }
        }
        s = s.return;
      }
    pm(function() {
      var V = p, P = bu(a), K = [];
      t: {
        var j = Pm.get(e);
        if (j !== void 0) {
          var H = us, ot = e;
          switch (e) {
            case "keypress":
              if (ss(a) === 0) break t;
            case "keydown":
            case "keyup":
              H = uT;
              break;
            case "focusin":
              ot = "focus", H = Au;
              break;
            case "focusout":
              ot = "blur", H = Au;
              break;
            case "beforeblur":
            case "afterblur":
              H = Au;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = bm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = JS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = hT;
              break;
            case jm:
            case Hm:
            case qm:
              H = tT;
              break;
            case Fm:
              H = mT;
              break;
            case "scroll":
            case "scrollend":
              H = QS;
              break;
            case "wheel":
              H = gT;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = nT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = xm;
              break;
            case "toggle":
            case "beforetoggle":
              H = bT;
          }
          var gt = (i & 4) !== 0, Pt = !gt && (e === "scroll" || e === "scrollend"), z = gt ? j !== null ? j + "Capture" : null : j;
          gt = [];
          for (var O = V, U; O !== null; ) {
            var X = O;
            if (U = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || U === null || z === null || (X = Cl(O, z), X != null && gt.push(
              la(O, X, U)
            )), Pt) break;
            O = O.return;
          }
          0 < gt.length && (j = new H(
            j,
            ot,
            null,
            a,
            P
          ), K.push({ event: j, listeners: gt }));
        }
      }
      if ((i & 7) === 0) {
        t: {
          if (j = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", j && a !== yu && (ot = a.relatedTarget || a.fromElement) && (br(ot) || ot[yr]))
            break t;
          if ((H || j) && (j = P.window === P ? P : (j = P.ownerDocument) ? j.defaultView || j.parentWindow : window, H ? (ot = a.relatedTarget || a.toElement, H = V, ot = ot ? br(ot) : null, ot !== null && (Pt = c(ot), gt = ot.tag, ot !== Pt || gt !== 5 && gt !== 27 && gt !== 6) && (ot = null)) : (H = null, ot = V), H !== ot)) {
            if (gt = bm, X = "onMouseLeave", z = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (gt = xm, X = "onPointerLeave", z = "onPointerEnter", O = "pointer"), Pt = H == null ? j : wl(H), U = ot == null ? j : wl(ot), j = new gt(
              X,
              O + "leave",
              H,
              a,
              P
            ), j.target = Pt, j.relatedTarget = U, X = null, br(P) === V && (gt = new gt(
              z,
              O + "enter",
              ot,
              a,
              P
            ), gt.target = U, gt.relatedTarget = Pt, X = gt), Pt = X, H && ot)
              e: {
                for (gt = yE, z = H, O = ot, U = 0, X = z; X; X = gt(X))
                  U++;
                X = 0;
                for (var dt = O; dt; dt = gt(dt))
                  X++;
                for (; 0 < U - X; )
                  z = gt(z), U--;
                for (; 0 < X - U; )
                  O = gt(O), X--;
                for (; U--; ) {
                  if (z === O || O !== null && z === O.alternate) {
                    gt = z;
                    break e;
                  }
                  z = gt(z), O = gt(O);
                }
                gt = null;
              }
            else gt = null;
            H !== null && fy(
              K,
              j,
              H,
              gt,
              !1
            ), ot !== null && Pt !== null && fy(
              K,
              Pt,
              ot,
              gt,
              !0
            );
          }
        }
        t: {
          if (j = V ? wl(V) : window, H = j.nodeName && j.nodeName.toLowerCase(), H === "select" || H === "input" && j.type === "file")
            var Lt = Dm;
          else if (Cm(j))
            if (Rm)
              Lt = DT;
            else {
              Lt = CT;
              var ct = wT;
            }
          else
            H = j.nodeName, !H || H.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? V && gu(V.elementType) && (Lt = Dm) : Lt = kT;
          if (Lt && (Lt = Lt(e, V))) {
            km(
              K,
              Lt,
              a,
              P
            );
            break t;
          }
          ct && ct(e, j, V), e === "focusout" && V && j.type === "number" && V.memoizedProps.value != null && pu(j, "number", j.value);
        }
        switch (ct = V ? wl(V) : window, e) {
          case "focusin":
            (Cm(ct) || ct.contentEditable === "true") && (kr = ct, Mu = V, Ll = null);
            break;
          case "focusout":
            Ll = Mu = kr = null;
            break;
          case "mousedown":
            Ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ou = !1, Um(K, a, P);
            break;
          case "selectionchange":
            if (MT) break;
          case "keydown":
          case "keyup":
            Um(K, a, P);
        }
        var Et;
        if (Cu)
          t: {
            switch (e) {
              case "compositionstart":
                var Ot = "onCompositionStart";
                break t;
              case "compositionend":
                Ot = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Ot = "onCompositionUpdate";
                break t;
            }
            Ot = void 0;
          }
        else
          Cr ? Am(e, a) && (Ot = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ot = "onCompositionStart");
        Ot && (Sm && a.locale !== "ko" && (Cr || Ot !== "onCompositionStart" ? Ot === "onCompositionEnd" && Cr && (Et = gm()) : (oi = P, Su = "value" in oi ? oi.value : oi.textContent, Cr = !0)), ct = Ws(V, Ot), 0 < ct.length && (Ot = new vm(
          Ot,
          e,
          null,
          a,
          P
        ), K.push({ event: Ot, listeners: ct }), Et ? Ot.data = Et : (Et = wm(a), Et !== null && (Ot.data = Et)))), (Et = xT ? ST(e, a) : TT(e, a)) && (Ot = Ws(V, "onBeforeInput"), 0 < Ot.length && (ct = new vm(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          P
        ), K.push({
          event: ct,
          listeners: Ot
        }), ct.data = Et)), dE(
          K,
          e,
          V,
          a,
          P
        );
      }
      uy(K, i);
    });
  }
  function la(e, i, a) {
    return {
      instance: e,
      listener: i,
      currentTarget: a
    };
  }
  function Ws(e, i) {
    for (var a = i + "Capture", s = []; e !== null; ) {
      var f = e, p = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || p === null || (f = Cl(e, a), f != null && s.unshift(
        la(e, f, p)
      ), f = Cl(e, i), f != null && s.push(
        la(e, f, p)
      )), e.tag === 3) return s;
      e = e.return;
    }
    return [];
  }
  function yE(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fy(e, i, a, s, f) {
    for (var p = i._reactName, b = []; a !== null && a !== s; ) {
      var T = a, D = T.alternate, V = T.stateNode;
      if (T = T.tag, D !== null && D === s) break;
      T !== 5 && T !== 26 && T !== 27 || V === null || (D = V, f ? (V = Cl(a, p), V != null && b.unshift(
        la(a, V, D)
      )) : f || (V = Cl(a, p), V != null && b.push(
        la(a, V, D)
      ))), a = a.return;
    }
    b.length !== 0 && e.push({ event: i, listeners: b });
  }
  var bE = /\r\n?/g, vE = /\u0000|\uFFFD/g;
  function hy(e) {
    return (typeof e == "string" ? e : "" + e).replace(bE, `
`).replace(vE, "");
  }
  function dy(e, i) {
    return i = hy(i), hy(e) === i;
  }
  function Ft(e, i, a, s, f, p) {
    switch (a) {
      case "children":
        typeof s == "string" ? i === "body" || i === "textarea" && s === "" || Er(e, s) : (typeof s == "number" || typeof s == "bigint") && i !== "body" && Er(e, "" + s);
        break;
      case "className":
        is(e, "class", s);
        break;
      case "tabIndex":
        is(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        is(e, a, s);
        break;
      case "style":
        dm(e, s, p);
        break;
      case "data":
        if (i !== "object") {
          is(e, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (i !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = ls("" + s), e.setAttribute(a, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" && (a === "formAction" ? (i !== "input" && Ft(e, i, "name", f.name, f, null), Ft(
            e,
            i,
            "formEncType",
            f.formEncType,
            f,
            null
          ), Ft(
            e,
            i,
            "formMethod",
            f.formMethod,
            f,
            null
          ), Ft(
            e,
            i,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (Ft(e, i, "encType", f.encType, f, null), Ft(e, i, "method", f.method, f, null), Ft(e, i, "target", f.target, f, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = ls("" + s), e.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (e.onclick = Hn);
        break;
      case "onScroll":
        s != null && kt("scroll", e);
        break;
      case "onScrollEnd":
        s != null && kt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        e.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = ls("" + s), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
        break;
      case "popover":
        kt("beforetoggle", e), kt("toggle", e), ns(e, "popover", s);
        break;
      case "xlinkActuate":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        ns(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = IS.get(a) || a, ns(e, a, s));
    }
  }
  function nf(e, i, a, s, f, p) {
    switch (a) {
      case "style":
        dm(e, s, p);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof s == "string" ? Er(e, s) : (typeof s == "number" || typeof s == "bigint") && Er(e, "" + s);
        break;
      case "onScroll":
        s != null && kt("scroll", e);
        break;
      case "onScrollEnd":
        s != null && kt("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!rm.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (f = a.endsWith("Capture"), i = a.slice(2, f ? a.length - 7 : void 0), p = e[Be] || null, p = p != null ? p[a] : null, typeof p == "function" && e.removeEventListener(i, p, f), typeof s == "function")) {
              typeof p != "function" && p !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(i, s, f);
              break t;
            }
            a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : ns(e, a, s);
          }
    }
  }
  function Se(e, i, a) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        kt("error", e), kt("load", e);
        var s = !1, f = !1, p;
        for (p in a)
          if (a.hasOwnProperty(p)) {
            var b = a[p];
            if (b != null)
              switch (p) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, i));
                default:
                  Ft(e, i, p, b, a, null);
              }
          }
        f && Ft(e, i, "srcSet", a.srcSet, a, null), s && Ft(e, i, "src", a.src, a, null);
        return;
      case "input":
        kt("invalid", e);
        var T = p = b = f = null, D = null, V = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var P = a[s];
            if (P != null)
              switch (s) {
                case "name":
                  f = P;
                  break;
                case "type":
                  b = P;
                  break;
                case "checked":
                  D = P;
                  break;
                case "defaultChecked":
                  V = P;
                  break;
                case "value":
                  p = P;
                  break;
                case "defaultValue":
                  T = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(l(137, i));
                  break;
                default:
                  Ft(e, i, s, P, a, null);
              }
          }
        um(
          e,
          p,
          T,
          D,
          V,
          b,
          f,
          !1
        );
        return;
      case "select":
        kt("invalid", e), s = b = p = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (T = a[f], T != null))
            switch (f) {
              case "value":
                p = T;
                break;
              case "defaultValue":
                b = T;
                break;
              case "multiple":
                s = T;
              default:
                Ft(e, i, f, T, a, null);
            }
        i = p, a = b, e.multiple = !!s, i != null ? Tr(e, !!s, i, !1) : a != null && Tr(e, !!s, a, !0);
        return;
      case "textarea":
        kt("invalid", e), p = f = s = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (T = a[b], T != null))
            switch (b) {
              case "value":
                s = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
                p = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(l(91));
                break;
              default:
                Ft(e, i, b, T, a, null);
            }
        fm(e, s, f, p);
        return;
      case "option":
        for (D in a)
          a.hasOwnProperty(D) && (s = a[D], s != null) && (D === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Ft(e, i, D, s, a, null));
        return;
      case "dialog":
        kt("beforetoggle", e), kt("toggle", e), kt("cancel", e), kt("close", e);
        break;
      case "iframe":
      case "object":
        kt("load", e);
        break;
      case "video":
      case "audio":
        for (s = 0; s < ra.length; s++)
          kt(ra[s], e);
        break;
      case "image":
        kt("error", e), kt("load", e);
        break;
      case "details":
        kt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        kt("error", e), kt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (V in a)
          if (a.hasOwnProperty(V) && (s = a[V], s != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, i));
              default:
                Ft(e, i, V, s, a, null);
            }
        return;
      default:
        if (gu(i)) {
          for (P in a)
            a.hasOwnProperty(P) && (s = a[P], s !== void 0 && nf(
              e,
              i,
              P,
              s,
              a,
              void 0
            ));
          return;
        }
    }
    for (T in a)
      a.hasOwnProperty(T) && (s = a[T], s != null && Ft(e, i, T, s, a, null));
  }
  function xE(e, i, a, s) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null, p = null, b = null, T = null, D = null, V = null, P = null;
        for (H in a) {
          var K = a[H];
          if (a.hasOwnProperty(H) && K != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = K;
              default:
                s.hasOwnProperty(H) || Ft(e, i, H, null, s, K);
            }
        }
        for (var j in s) {
          var H = s[j];
          if (K = a[j], s.hasOwnProperty(j) && (H != null || K != null))
            switch (j) {
              case "type":
                p = H;
                break;
              case "name":
                f = H;
                break;
              case "checked":
                V = H;
                break;
              case "defaultChecked":
                P = H;
                break;
              case "value":
                b = H;
                break;
              case "defaultValue":
                T = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(l(137, i));
                break;
              default:
                H !== K && Ft(
                  e,
                  i,
                  j,
                  H,
                  s,
                  K
                );
            }
        }
        mu(
          e,
          b,
          T,
          D,
          V,
          P,
          p,
          f
        );
        return;
      case "select":
        H = b = T = j = null;
        for (p in a)
          if (D = a[p], a.hasOwnProperty(p) && D != null)
            switch (p) {
              case "value":
                break;
              case "multiple":
                H = D;
              default:
                s.hasOwnProperty(p) || Ft(
                  e,
                  i,
                  p,
                  null,
                  s,
                  D
                );
            }
        for (f in s)
          if (p = s[f], D = a[f], s.hasOwnProperty(f) && (p != null || D != null))
            switch (f) {
              case "value":
                j = p;
                break;
              case "defaultValue":
                T = p;
                break;
              case "multiple":
                b = p;
              default:
                p !== D && Ft(
                  e,
                  i,
                  f,
                  p,
                  s,
                  D
                );
            }
        i = T, a = b, s = H, j != null ? Tr(e, !!a, j, !1) : !!s != !!a && (i != null ? Tr(e, !!a, i, !0) : Tr(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        H = j = null;
        for (T in a)
          if (f = a[T], a.hasOwnProperty(T) && f != null && !s.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ft(e, i, T, null, s, f);
            }
        for (b in s)
          if (f = s[b], p = a[b], s.hasOwnProperty(b) && (f != null || p != null))
            switch (b) {
              case "value":
                j = f;
                break;
              case "defaultValue":
                H = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== p && Ft(e, i, b, f, s, p);
            }
        cm(e, j, H);
        return;
      case "option":
        for (var ot in a)
          j = a[ot], a.hasOwnProperty(ot) && j != null && !s.hasOwnProperty(ot) && (ot === "selected" ? e.selected = !1 : Ft(
            e,
            i,
            ot,
            null,
            s,
            j
          ));
        for (D in s)
          j = s[D], H = a[D], s.hasOwnProperty(D) && j !== H && (j != null || H != null) && (D === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : Ft(
            e,
            i,
            D,
            j,
            s,
            H
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var gt in a)
          j = a[gt], a.hasOwnProperty(gt) && j != null && !s.hasOwnProperty(gt) && Ft(e, i, gt, null, s, j);
        for (V in s)
          if (j = s[V], H = a[V], s.hasOwnProperty(V) && j !== H && (j != null || H != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(l(137, i));
                break;
              default:
                Ft(
                  e,
                  i,
                  V,
                  j,
                  s,
                  H
                );
            }
        return;
      default:
        if (gu(i)) {
          for (var Pt in a)
            j = a[Pt], a.hasOwnProperty(Pt) && j !== void 0 && !s.hasOwnProperty(Pt) && nf(
              e,
              i,
              Pt,
              void 0,
              s,
              j
            );
          for (P in s)
            j = s[P], H = a[P], !s.hasOwnProperty(P) || j === H || j === void 0 && H === void 0 || nf(
              e,
              i,
              P,
              j,
              s,
              H
            );
          return;
        }
    }
    for (var z in a)
      j = a[z], a.hasOwnProperty(z) && j != null && !s.hasOwnProperty(z) && Ft(e, i, z, null, s, j);
    for (K in s)
      j = s[K], H = a[K], !s.hasOwnProperty(K) || j === H || j == null && H == null || Ft(e, i, K, j, s, H);
  }
  function my(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function SE() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, i = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
        var f = a[s], p = f.transferSize, b = f.initiatorType, T = f.duration;
        if (p && T && my(b)) {
          for (b = 0, T = f.responseEnd, s += 1; s < a.length; s++) {
            var D = a[s], V = D.startTime;
            if (V > T) break;
            var P = D.transferSize, K = D.initiatorType;
            P && my(K) && (D = D.responseEnd, b += P * (D < T ? 1 : (T - V) / (D - V)));
          }
          if (--s, i += 8 * (p + b) / (f.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return i / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var rf = null, lf = null;
  function to(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function py(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gy(e, i) {
    if (e === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && i === "foreignObject" ? 0 : e;
  }
  function af(e, i) {
    return e === "textarea" || e === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var sf = null;
  function TE() {
    var e = window.event;
    return e && e.type === "popstate" ? e === sf ? !1 : (sf = e, !0) : (sf = null, !1);
  }
  var yy = typeof setTimeout == "function" ? setTimeout : void 0, EE = typeof clearTimeout == "function" ? clearTimeout : void 0, by = typeof Promise == "function" ? Promise : void 0, AE = typeof queueMicrotask == "function" ? queueMicrotask : typeof by < "u" ? function(e) {
    return by.resolve(null).then(e).catch(wE);
  } : yy;
  function wE(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wi(e) {
    return e === "head";
  }
  function vy(e, i) {
    var a = i, s = 0;
    do {
      var f = a.nextSibling;
      if (e.removeChild(a), f && f.nodeType === 8)
        if (a = f.data, a === "/$" || a === "/&") {
          if (s === 0) {
            e.removeChild(f), tl(i);
            return;
          }
          s--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          s++;
        else if (a === "html")
          aa(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, aa(a);
          for (var p = a.firstChild; p; ) {
            var b = p.nextSibling, T = p.nodeName;
            p[Al] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && p.rel.toLowerCase() === "stylesheet" || a.removeChild(p), p = b;
          }
        } else
          a === "body" && aa(e.ownerDocument.body);
      a = f;
    } while (a);
    tl(i);
  }
  function xy(e, i) {
    var a = e;
    e = 0;
    do {
      var s = a.nextSibling;
      if (a.nodeType === 1 ? i ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (i ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), s && s.nodeType === 8)
        if (a = s.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = s;
    } while (a);
  }
  function of(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var a = i;
      switch (i = i.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          of(a), hu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function CE(e, i, a, s) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (s) {
        if (!e[Al])
          switch (i) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (p = e.getAttribute("rel"), p === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (p !== f.rel || e.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (p = e.getAttribute("src"), (p !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && p && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (i === "input" && e.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === p)
          return e;
      } else return e;
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function kE(e, i, a) {
    if (i === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Sy(e, i) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function uf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function cf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function DE(e, i) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = i;
    else if (e.data !== "$?" || a.readyState !== "loading")
      i();
    else {
      var s = function() {
        i(), a.removeEventListener("DOMContentLoaded", s);
      };
      a.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
    }
  }
  function dn(e) {
    for (; e != null; e = e.nextSibling) {
      var i = e.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = e.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F")
          break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return e;
  }
  var ff = null;
  function Ty(e) {
    e = e.nextSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (i === 0)
            return dn(e.nextSibling);
          i--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || i++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ey(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (i === 0) return e;
          i--;
        } else a !== "/$" && a !== "/&" || i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ay(e, i, a) {
    switch (i = to(a), e) {
      case "html":
        if (e = i.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = i.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = i.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function aa(e) {
    for (var i = e.attributes; i.length; )
      e.removeAttributeNode(i[0]);
    hu(e);
  }
  var mn = /* @__PURE__ */ new Map(), wy = /* @__PURE__ */ new Set();
  function eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ni = I.d;
  I.d = {
    f: RE,
    r: ME,
    D: OE,
    C: zE,
    L: _E,
    m: LE,
    X: BE,
    S: NE,
    M: UE
  };
  function RE() {
    var e = ni.f(), i = Xs();
    return e || i;
  }
  function ME(e) {
    var i = vr(e);
    i !== null && i.tag === 5 && i.type === "form" ? Fp(i) : ni.r(e);
  }
  var Jr = typeof document > "u" ? null : document;
  function Cy(e, i, a) {
    var s = Jr;
    if (s && typeof i == "string" && i) {
      var f = an(i);
      f = 'link[rel="' + e + '"][href="' + f + '"]', typeof a == "string" && (f += '[crossorigin="' + a + '"]'), wy.has(f) || (wy.add(f), e = { rel: e, crossOrigin: a, href: i }, s.querySelector(f) === null && (i = s.createElement("link"), Se(i, "link", e), pe(i), s.head.appendChild(i)));
    }
  }
  function OE(e) {
    ni.D(e), Cy("dns-prefetch", e, null);
  }
  function zE(e, i) {
    ni.C(e, i), Cy("preconnect", e, i);
  }
  function _E(e, i, a) {
    ni.L(e, i, a);
    var s = Jr;
    if (s && e && i) {
      var f = 'link[rel="preload"][as="' + an(i) + '"]';
      i === "image" && a && a.imageSrcSet ? (f += '[imagesrcset="' + an(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (f += '[imagesizes="' + an(
        a.imageSizes
      ) + '"]')) : f += '[href="' + an(e) + '"]';
      var p = f;
      switch (i) {
        case "style":
          p = $r(e);
          break;
        case "script":
          p = Wr(e);
      }
      mn.has(p) || (e = y(
        {
          rel: "preload",
          href: i === "image" && a && a.imageSrcSet ? void 0 : e,
          as: i
        },
        a
      ), mn.set(p, e), s.querySelector(f) !== null || i === "style" && s.querySelector(sa(p)) || i === "script" && s.querySelector(oa(p)) || (i = s.createElement("link"), Se(i, "link", e), pe(i), s.head.appendChild(i)));
    }
  }
  function LE(e, i) {
    ni.m(e, i);
    var a = Jr;
    if (a && e) {
      var s = i && typeof i.as == "string" ? i.as : "script", f = 'link[rel="modulepreload"][as="' + an(s) + '"][href="' + an(e) + '"]', p = f;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Wr(e);
      }
      if (!mn.has(p) && (e = y({ rel: "modulepreload", href: e }, i), mn.set(p, e), a.querySelector(f) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(oa(p)))
              return;
        }
        s = a.createElement("link"), Se(s, "link", e), pe(s), a.head.appendChild(s);
      }
    }
  }
  function NE(e, i, a) {
    ni.S(e, i, a);
    var s = Jr;
    if (s && e) {
      var f = xr(s).hoistableStyles, p = $r(e);
      i = i || "default";
      var b = f.get(p);
      if (!b) {
        var T = { loading: 0, preload: null };
        if (b = s.querySelector(
          sa(p)
        ))
          T.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": i },
            a
          ), (a = mn.get(p)) && hf(e, a);
          var D = b = s.createElement("link");
          pe(D), Se(D, "link", e), D._p = new Promise(function(V, P) {
            D.onload = V, D.onerror = P;
          }), D.addEventListener("load", function() {
            T.loading |= 1;
          }), D.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, no(b, i, s);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: T
        }, f.set(p, b);
      }
    }
  }
  function BE(e, i) {
    ni.X(e, i);
    var a = Jr;
    if (a && e) {
      var s = xr(a).hoistableScripts, f = Wr(e), p = s.get(f);
      p || (p = a.querySelector(oa(f)), p || (e = y({ src: e, async: !0 }, i), (i = mn.get(f)) && df(e, i), p = a.createElement("script"), pe(p), Se(p, "link", e), a.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, s.set(f, p));
    }
  }
  function UE(e, i) {
    ni.M(e, i);
    var a = Jr;
    if (a && e) {
      var s = xr(a).hoistableScripts, f = Wr(e), p = s.get(f);
      p || (p = a.querySelector(oa(f)), p || (e = y({ src: e, async: !0, type: "module" }, i), (i = mn.get(f)) && df(e, i), p = a.createElement("script"), pe(p), Se(p, "link", e), a.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, s.set(f, p));
    }
  }
  function ky(e, i, a, s) {
    var f = (f = ht.current) ? eo(f) : null;
    if (!f) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (i = $r(a.href), a = xr(
          f
        ).hoistableStyles, s = a.get(i), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(i, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = $r(a.href);
          var p = xr(
            f
          ).hoistableStyles, b = p.get(e);
          if (b || (f = f.ownerDocument || f, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, p.set(e, b), (p = f.querySelector(
            sa(e)
          )) && !p._p && (b.instance = p, b.state.loading = 5), mn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, mn.set(e, a), p || VE(
            f,
            e,
            a,
            b.state
          ))), i && s === null)
            throw Error(l(528, ""));
          return b;
        }
        if (i && s !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return i = a.async, a = a.src, typeof a == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = Wr(a), a = xr(
          f
        ).hoistableScripts, s = a.get(i), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(i, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function $r(e) {
    return 'href="' + an(e) + '"';
  }
  function sa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Dy(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function VE(e, i, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + i + "]") ? s.loading = 1 : (i = e.createElement("link"), s.preload = i, i.addEventListener("load", function() {
      return s.loading |= 1;
    }), i.addEventListener("error", function() {
      return s.loading |= 2;
    }), Se(i, "link", a), pe(i), e.head.appendChild(i));
  }
  function Wr(e) {
    return '[src="' + an(e) + '"]';
  }
  function oa(e) {
    return "script[async]" + e;
  }
  function Ry(e, i, a) {
    if (i.count++, i.instance === null)
      switch (i.type) {
        case "style":
          var s = e.querySelector(
            'style[data-href~="' + an(a.href) + '"]'
          );
          if (s)
            return i.instance = s, pe(s), s;
          var f = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (e.ownerDocument || e).createElement(
            "style"
          ), pe(s), Se(s, "style", f), no(s, a.precedence, e), i.instance = s;
        case "stylesheet":
          f = $r(a.href);
          var p = e.querySelector(
            sa(f)
          );
          if (p)
            return i.state.loading |= 4, i.instance = p, pe(p), p;
          s = Dy(a), (f = mn.get(f)) && hf(s, f), p = (e.ownerDocument || e).createElement("link"), pe(p);
          var b = p;
          return b._p = new Promise(function(T, D) {
            b.onload = T, b.onerror = D;
          }), Se(p, "link", s), i.state.loading |= 4, no(p, a.precedence, e), i.instance = p;
        case "script":
          return p = Wr(a.src), (f = e.querySelector(
            oa(p)
          )) ? (i.instance = f, pe(f), f) : (s = a, (f = mn.get(p)) && (s = y({}, a), df(s, f)), e = e.ownerDocument || e, f = e.createElement("script"), pe(f), Se(f, "link", s), e.head.appendChild(f), i.instance = f);
        case "void":
          return null;
        default:
          throw Error(l(443, i.type));
      }
    else
      i.type === "stylesheet" && (i.state.loading & 4) === 0 && (s = i.instance, i.state.loading |= 4, no(s, a.precedence, e));
    return i.instance;
  }
  function no(e, i, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = s.length ? s[s.length - 1] : null, p = f, b = 0; b < s.length; b++) {
      var T = s[b];
      if (T.dataset.precedence === i) p = T;
      else if (p !== f) break;
    }
    p ? p.parentNode.insertBefore(e, p.nextSibling) : (i = a.nodeType === 9 ? a.head : a, i.insertBefore(e, i.firstChild));
  }
  function hf(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.title == null && (e.title = i.title);
  }
  function df(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.integrity == null && (e.integrity = i.integrity);
  }
  var io = null;
  function My(e, i, a) {
    if (io === null) {
      var s = /* @__PURE__ */ new Map(), f = io = /* @__PURE__ */ new Map();
      f.set(a, s);
    } else
      f = io, s = f.get(a), s || (s = /* @__PURE__ */ new Map(), f.set(a, s));
    if (s.has(e)) return s;
    for (s.set(e, null), a = a.getElementsByTagName(e), f = 0; f < a.length; f++) {
      var p = a[f];
      if (!(p[Al] || p[ye] || e === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = p.getAttribute(i) || "";
        b = e + b;
        var T = s.get(b);
        T ? T.push(p) : s.set(b, [p]);
      }
    }
    return s;
  }
  function Oy(e, i, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      i === "title" ? e.querySelector("head > title") : null
    );
  }
  function jE(e, i, a) {
    if (a === 1 || i.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "")
          break;
        return !0;
      case "link":
        if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError)
          break;
        return i.rel === "stylesheet" ? (e = i.disabled, typeof i.precedence == "string" && e == null) : !0;
      case "script":
        if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string")
          return !0;
    }
    return !1;
  }
  function zy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function HE(e, i, a, s) {
    if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var f = $r(s.href), p = i.querySelector(
          sa(f)
        );
        if (p) {
          i = p._p, i !== null && typeof i == "object" && typeof i.then == "function" && (e.count++, e = ro.bind(e), i.then(e, e)), a.state.loading |= 4, a.instance = p, pe(p);
          return;
        }
        p = i.ownerDocument || i, s = Dy(s), (f = mn.get(f)) && hf(s, f), p = p.createElement("link"), pe(p);
        var b = p;
        b._p = new Promise(function(T, D) {
          b.onload = T, b.onerror = D;
        }), Se(p, "link", s), a.instance = p;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, i), (i = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = ro.bind(e), i.addEventListener("load", a), i.addEventListener("error", a));
    }
  }
  var mf = 0;
  function qE(e, i) {
    return e.stylesheets && e.count === 0 && ao(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var s = setTimeout(function() {
        if (e.stylesheets && ao(e, e.stylesheets), e.unsuspend) {
          var p = e.unsuspend;
          e.unsuspend = null, p();
        }
      }, 6e4 + i);
      0 < e.imgBytes && mf === 0 && (mf = 62500 * SE());
      var f = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ao(e, e.stylesheets), e.unsuspend)) {
            var p = e.unsuspend;
            e.unsuspend = null, p();
          }
        },
        (e.imgBytes > mf ? 50 : 800) + i
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(s), clearTimeout(f);
      };
    } : null;
  }
  function ro() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ao(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var lo = null;
  function ao(e, i) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, lo = /* @__PURE__ */ new Map(), i.forEach(FE, e), lo = null, ro.call(e));
  }
  function FE(e, i) {
    if (!(i.state.loading & 4)) {
      var a = lo.get(e);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), lo.set(e, a);
        for (var f = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), p = 0; p < f.length; p++) {
          var b = f[p];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), s = b);
        }
        s && a.set(null, s);
      }
      f = i.instance, b = f.getAttribute("data-precedence"), p = a.get(b) || s, p === s && a.set(null, f), a.set(b, f), this.count++, s = ro.bind(this), f.addEventListener("load", s), f.addEventListener("error", s), p ? p.parentNode.insertBefore(f, p.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), i.state.loading |= 4;
    }
  }
  var ua = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: it,
    _currentValue2: it,
    _threadCount: 0
  };
  function PE(e, i, a, s, f, p, b, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ou(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.hiddenUpdates = ou(null), this.identifierPrefix = s, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _y(e, i, a, s, f, p, b, T, D, V, P, K) {
    return e = new PE(
      e,
      i,
      a,
      b,
      D,
      V,
      P,
      K,
      T
    ), i = 1, p === !0 && (i |= 24), p = Qe(3, null, null, i), e.current = p, p.stateNode = e, i = Xu(), i.refCount++, e.pooledCache = i, i.refCount++, p.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: i
    }, Zu(p), e;
  }
  function Ly(e) {
    return e ? (e = Mr, e) : Mr;
  }
  function Ny(e, i, a, s, f, p) {
    f = Ly(f), s.context === null ? s.context = f : s.pendingContext = f, s = mi(i), s.payload = { element: a }, p = p === void 0 ? null : p, p !== null && (s.callback = p), a = pi(e, s, i), a !== null && (Fe(a, e, i), ql(a, e, i));
  }
  function By(e, i) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function pf(e, i) {
    By(e, i), (e = e.alternate) && By(e, i);
  }
  function Uy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = Pi(e, 67108864);
      i !== null && Fe(i, e, 67108864), pf(e, 67108864);
    }
  }
  function Vy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = tn();
      i = uu(i);
      var a = Pi(e, i);
      a !== null && Fe(a, e, i), pf(e, i);
    }
  }
  var so = !0;
  function YE(e, i, a, s) {
    var f = N.T;
    N.T = null;
    var p = I.p;
    try {
      I.p = 2, gf(e, i, a, s);
    } finally {
      I.p = p, N.T = f;
    }
  }
  function GE(e, i, a, s) {
    var f = N.T;
    N.T = null;
    var p = I.p;
    try {
      I.p = 8, gf(e, i, a, s);
    } finally {
      I.p = p, N.T = f;
    }
  }
  function gf(e, i, a, s) {
    if (so) {
      var f = yf(s);
      if (f === null)
        ef(
          e,
          i,
          s,
          oo,
          a
        ), Hy(e, s);
      else if (IE(
        f,
        e,
        i,
        a,
        s
      ))
        s.stopPropagation();
      else if (Hy(e, s), i & 4 && -1 < XE.indexOf(e)) {
        for (; f !== null; ) {
          var p = vr(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                  var b = Vi(p.pendingLanes);
                  if (b !== 0) {
                    var T = p;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; b; ) {
                      var D = 1 << 31 - Yt(b);
                      T.entanglements[1] |= D, b &= ~D;
                    }
                    Mn(p), (Bt & 6) === 0 && (Ys = Re() + 500, ia(0));
                  }
                }
                break;
              case 31:
              case 13:
                T = Pi(p, 2), T !== null && Fe(T, p, 2), Xs(), pf(p, 2);
            }
          if (p = yf(s), p === null && ef(
            e,
            i,
            s,
            oo,
            a
          ), p === f) break;
          f = p;
        }
        f !== null && s.stopPropagation();
      } else
        ef(
          e,
          i,
          s,
          null,
          a
        );
    }
  }
  function yf(e) {
    return e = bu(e), bf(e);
  }
  var oo = null;
  function bf(e) {
    if (oo = null, e = br(e), e !== null) {
      var i = c(e);
      if (i === null) e = null;
      else {
        var a = i.tag;
        if (a === 13) {
          if (e = u(i), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = h(i), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return oo = e, null;
  }
  function jy(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (su()) {
          case G:
            return 2;
          case rt:
            return 8;
          case bt:
          case wt:
            return 32;
          case Ut:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1, Ci = null, ki = null, Di = null, ca = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), Ri = [], XE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hy(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ci = null;
        break;
      case "dragenter":
      case "dragleave":
        ki = null;
        break;
      case "mouseover":
      case "mouseout":
        Di = null;
        break;
      case "pointerover":
      case "pointerout":
        ca.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fa.delete(i.pointerId);
    }
  }
  function ha(e, i, a, s, f, p) {
    return e === null || e.nativeEvent !== p ? (e = {
      blockedOn: i,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: p,
      targetContainers: [f]
    }, i !== null && (i = vr(i), i !== null && Uy(i)), e) : (e.eventSystemFlags |= s, i = e.targetContainers, f !== null && i.indexOf(f) === -1 && i.push(f), e);
  }
  function IE(e, i, a, s, f) {
    switch (i) {
      case "focusin":
        return Ci = ha(
          Ci,
          e,
          i,
          a,
          s,
          f
        ), !0;
      case "dragenter":
        return ki = ha(
          ki,
          e,
          i,
          a,
          s,
          f
        ), !0;
      case "mouseover":
        return Di = ha(
          Di,
          e,
          i,
          a,
          s,
          f
        ), !0;
      case "pointerover":
        var p = f.pointerId;
        return ca.set(
          p,
          ha(
            ca.get(p) || null,
            e,
            i,
            a,
            s,
            f
          )
        ), !0;
      case "gotpointercapture":
        return p = f.pointerId, fa.set(
          p,
          ha(
            fa.get(p) || null,
            e,
            i,
            a,
            s,
            f
          )
        ), !0;
    }
    return !1;
  }
  function qy(e) {
    var i = br(e.target);
    if (i !== null) {
      var a = c(i);
      if (a !== null) {
        if (i = a.tag, i === 13) {
          if (i = u(a), i !== null) {
            e.blockedOn = i, em(e.priority, function() {
              Vy(a);
            });
            return;
          }
        } else if (i === 31) {
          if (i = h(a), i !== null) {
            e.blockedOn = i, em(e.priority, function() {
              Vy(a);
            });
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var a = yf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        yu = s, a.target.dispatchEvent(s), yu = null;
      } else
        return i = vr(a), i !== null && Uy(i), e.blockedOn = a, !1;
      i.shift();
    }
    return !0;
  }
  function Fy(e, i, a) {
    uo(e) && a.delete(i);
  }
  function KE() {
    vf = !1, Ci !== null && uo(Ci) && (Ci = null), ki !== null && uo(ki) && (ki = null), Di !== null && uo(Di) && (Di = null), ca.forEach(Fy), fa.forEach(Fy);
  }
  function co(e, i) {
    e.blockedOn === i && (e.blockedOn = null, vf || (vf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      KE
    )));
  }
  var fo = null;
  function Py(e) {
    fo !== e && (fo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        fo === e && (fo = null);
        for (var i = 0; i < e.length; i += 3) {
          var a = e[i], s = e[i + 1], f = e[i + 2];
          if (typeof s != "function") {
            if (bf(s || a) === null)
              continue;
            break;
          }
          var p = vr(a);
          p !== null && (e.splice(i, 3), i -= 3, gc(
            p,
            {
              pending: !0,
              data: f,
              method: a.method,
              action: s
            },
            s,
            f
          ));
        }
      }
    ));
  }
  function tl(e) {
    function i(D) {
      return co(D, e);
    }
    Ci !== null && co(Ci, e), ki !== null && co(ki, e), Di !== null && co(Di, e), ca.forEach(i), fa.forEach(i);
    for (var a = 0; a < Ri.length; a++) {
      var s = Ri[a];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < Ri.length && (a = Ri[0], a.blockedOn === null); )
      qy(a), a.blockedOn === null && Ri.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var f = a[s], p = a[s + 1], b = f[Be] || null;
        if (typeof p == "function")
          b || Py(a);
        else if (b) {
          var T = null;
          if (p && p.hasAttribute("formAction")) {
            if (f = p, b = p[Be] || null)
              T = b.formAction;
            else if (bf(f) !== null) continue;
          } else T = b.action;
          typeof T == "function" ? a[s + 1] = T : (a.splice(s, 3), s -= 3), Py(a);
        }
      }
  }
  function Yy() {
    function e(p) {
      p.canIntercept && p.info === "react-transition" && p.intercept({
        handler: function() {
          return new Promise(function(b) {
            return f = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function i() {
      f !== null && (f(), f = null), s || setTimeout(a, 20);
    }
    function a() {
      if (!s && !navigation.transition) {
        var p = navigation.currentEntry;
        p && p.url != null && navigation.navigate(p.url, {
          state: p.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, f = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(a, 100), function() {
        s = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), f !== null && (f(), f = null);
      };
    }
  }
  function xf(e) {
    this._internalRoot = e;
  }
  ho.prototype.render = xf.prototype.render = function(e) {
    var i = this._internalRoot;
    if (i === null) throw Error(l(409));
    var a = i.current, s = tn();
    Ny(a, s, e, i, null, null);
  }, ho.prototype.unmount = xf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var i = e.containerInfo;
      Ny(e.current, 2, null, e, null, null), Xs(), i[yr] = null;
    }
  };
  function ho(e) {
    this._internalRoot = e;
  }
  ho.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var i = tm();
      e = { blockedOn: null, target: e, priority: i };
      for (var a = 0; a < Ri.length && i !== 0 && i < Ri[a].priority; a++) ;
      Ri.splice(a, 0, e), a === 0 && qy(e);
    }
  };
  var Gy = n.version;
  if (Gy !== "19.2.4")
    throw Error(
      l(
        527,
        Gy,
        "19.2.4"
      )
    );
  I.findDOMNode = function(e) {
    var i = e._reactInternals;
    if (i === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = d(i), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var QE = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mo.isDisabled && mo.supportsFiber)
      try {
        Me = mo.inject(
          QE
        ), he = mo;
      } catch {
      }
  }
  return ma.createRoot = function(e, i) {
    if (!o(e)) throw Error(l(299));
    var a = !1, s = "", f = $p, p = Wp, b = tg;
    return i != null && (i.unstable_strictMode === !0 && (a = !0), i.identifierPrefix !== void 0 && (s = i.identifierPrefix), i.onUncaughtError !== void 0 && (f = i.onUncaughtError), i.onCaughtError !== void 0 && (p = i.onCaughtError), i.onRecoverableError !== void 0 && (b = i.onRecoverableError)), i = _y(
      e,
      1,
      !1,
      null,
      null,
      a,
      s,
      null,
      f,
      p,
      b,
      Yy
    ), e[yr] = i.current, tf(e), new xf(i);
  }, ma.hydrateRoot = function(e, i, a) {
    if (!o(e)) throw Error(l(299));
    var s = !1, f = "", p = $p, b = Wp, T = tg, D = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (f = a.identifierPrefix), a.onUncaughtError !== void 0 && (p = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (T = a.onRecoverableError), a.formState !== void 0 && (D = a.formState)), i = _y(
      e,
      1,
      !0,
      i,
      a ?? null,
      s,
      f,
      D,
      p,
      b,
      T,
      Yy
    ), i.context = Ly(null), a = i.current, s = tn(), s = uu(s), f = mi(s), f.callback = null, pi(a, f, s), a = s, i.current.lanes = a, El(i, a), Mn(i), e[yr] = i.current, tf(e), new ho(i);
  }, ma.version = "19.2.4", ma;
}
var e0;
function lA() {
  if (e0) return Ef.exports;
  e0 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), Ef.exports = rA(), Ef.exports;
}
var aA = lA();
const kb = (...t) => t.filter((n, r, l) => !!n && n.trim() !== "" && l.indexOf(n) === r).join(" ").trim();
const sA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const oA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, r, l) => l ? l.toUpperCase() : r.toLowerCase()
);
const n0 = (t) => {
  const n = oA(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
var uA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const cA = (t) => {
  for (const n in t)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
};
const fA = tt.forwardRef(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: c,
    iconNode: u,
    ...h
  }, m) => tt.createElement(
    "svg",
    {
      ref: m,
      ...uA,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: l ? Number(r) * 24 / Number(n) : r,
      className: kb("lucide", o),
      ...!c && !cA(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...u.map(([d, g]) => tt.createElement(d, g)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
const dl = (t, n) => {
  const r = tt.forwardRef(
    ({ className: l, ...o }, c) => tt.createElement(fA, {
      ref: c,
      iconNode: n,
      className: kb(
        `lucide-${sA(n0(t))}`,
        `lucide-${t}`,
        l
      ),
      ...o
    })
  );
  return r.displayName = n0(t), r;
};
const hA = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], dA = dl("bot", hA);
const mA = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], pA = dl("message-circle", mA);
const gA = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], yA = dl("refresh-cw", gA);
const bA = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], vA = dl("send", bA);
const xA = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], SA = dl("user", xA);
const TA = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], EA = dl("x", TA);
function Db(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: AA } = Object.prototype, { getPrototypeOf: Zh } = Object, { iterator: Go, toStringTag: Rb } = Symbol, Xo = /* @__PURE__ */ ((t) => (n) => {
  const r = AA.call(n);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Cn = (t) => (t = t.toLowerCase(), (n) => Xo(n) === t), Io = (t) => (n) => typeof n === t, { isArray: ml } = Array, cl = Io("undefined");
function Ua(t) {
  return t !== null && !cl(t) && t.constructor !== null && !cl(t.constructor) && Ye(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Mb = Cn("ArrayBuffer");
function wA(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Mb(t.buffer), n;
}
const CA = Io("string"), Ye = Io("function"), Ob = Io("number"), Va = (t) => t !== null && typeof t == "object", kA = (t) => t === !0 || t === !1, Ao = (t) => {
  if (Xo(t) !== "object")
    return !1;
  const n = Zh(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Rb in t) && !(Go in t);
}, DA = (t) => {
  if (!Va(t) || Ua(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, RA = Cn("Date"), MA = Cn("File"), OA = Cn("Blob"), zA = Cn("FileList"), _A = (t) => Va(t) && Ye(t.pipe), LA = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || Ye(t.append) && ((n = Xo(t)) === "formdata" || // detect form-data instance
  n === "object" && Ye(t.toString) && t.toString() === "[object FormData]"));
}, NA = Cn("URLSearchParams"), [BA, UA, VA, jA] = ["ReadableStream", "Request", "Response", "Headers"].map(Cn), HA = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ja(t, n, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let l, o;
  if (typeof t != "object" && (t = [t]), ml(t))
    for (l = 0, o = t.length; l < o; l++)
      n.call(null, t[l], l, t);
  else {
    if (Ua(t))
      return;
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), u = c.length;
    let h;
    for (l = 0; l < u; l++)
      h = c[l], n.call(null, t[h], h, t);
  }
}
function zb(t, n) {
  if (Ua(t))
    return null;
  n = n.toLowerCase();
  const r = Object.keys(t);
  let l = r.length, o;
  for (; l-- > 0; )
    if (o = r[l], n === o.toLowerCase())
      return o;
  return null;
}
const lr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _b = (t) => !cl(t) && t !== lr;
function ch() {
  const { caseless: t, skipUndefined: n } = _b(this) && this || {}, r = {}, l = (o, c) => {
    const u = t && zb(r, c) || c;
    Ao(r[u]) && Ao(o) ? r[u] = ch(r[u], o) : Ao(o) ? r[u] = ch({}, o) : ml(o) ? r[u] = o.slice() : (!n || !cl(o)) && (r[u] = o);
  };
  for (let o = 0, c = arguments.length; o < c; o++)
    arguments[o] && ja(arguments[o], l);
  return r;
}
const qA = (t, n, r, { allOwnKeys: l } = {}) => (ja(n, (o, c) => {
  r && Ye(o) ? Object.defineProperty(t, c, {
    value: Db(o, r),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(t, c, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: l }), t), FA = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), PA = (t, n, r, l) => {
  t.prototype = Object.create(n.prototype, l), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: n.prototype
  }), r && Object.assign(t.prototype, r);
}, YA = (t, n, r, l) => {
  let o, c, u;
  const h = {};
  if (n = n || {}, t == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(t), c = o.length; c-- > 0; )
      u = o[c], (!l || l(u, t, n)) && !h[u] && (n[u] = t[u], h[u] = !0);
    t = r !== !1 && Zh(t);
  } while (t && (!r || r(t, n)) && t !== Object.prototype);
  return n;
}, GA = (t, n, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= n.length;
  const l = t.indexOf(n, r);
  return l !== -1 && l === r;
}, XA = (t) => {
  if (!t) return null;
  if (ml(t)) return t;
  let n = t.length;
  if (!Ob(n)) return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = t[n];
  return r;
}, IA = /* @__PURE__ */ ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && Zh(Uint8Array)), KA = (t, n) => {
  const l = (t && t[Go]).call(t);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const c = o.value;
    n.call(t, c[0], c[1]);
  }
}, QA = (t, n) => {
  let r;
  const l = [];
  for (; (r = t.exec(n)) !== null; )
    l.push(r);
  return l;
}, ZA = Cn("HTMLFormElement"), JA = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, l, o) {
    return l.toUpperCase() + o;
  }
), i0 = (({ hasOwnProperty: t }) => (n, r) => t.call(n, r))(Object.prototype), $A = Cn("RegExp"), Lb = (t, n) => {
  const r = Object.getOwnPropertyDescriptors(t), l = {};
  ja(r, (o, c) => {
    let u;
    (u = n(o, c, t)) !== !1 && (l[c] = u || o);
  }), Object.defineProperties(t, l);
}, WA = (t) => {
  Lb(t, (n, r) => {
    if (Ye(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const l = t[r];
    if (Ye(l)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, tw = (t, n) => {
  const r = {}, l = (o) => {
    o.forEach((c) => {
      r[c] = !0;
    });
  };
  return ml(t) ? l(t) : l(String(t).split(n)), r;
}, ew = () => {
}, nw = (t, n) => t != null && Number.isFinite(t = +t) ? t : n;
function iw(t) {
  return !!(t && Ye(t.append) && t[Rb] === "FormData" && t[Go]);
}
const rw = (t) => {
  const n = new Array(10), r = (l, o) => {
    if (Va(l)) {
      if (n.indexOf(l) >= 0)
        return;
      if (Ua(l))
        return l;
      if (!("toJSON" in l)) {
        n[o] = l;
        const c = ml(l) ? [] : {};
        return ja(l, (u, h) => {
          const m = r(u, o + 1);
          !cl(m) && (c[h] = m);
        }), n[o] = void 0, c;
      }
    }
    return l;
  };
  return r(t, 0);
}, lw = Cn("AsyncFunction"), aw = (t) => t && (Va(t) || Ye(t)) && Ye(t.then) && Ye(t.catch), Nb = ((t, n) => t ? setImmediate : n ? ((r, l) => (lr.addEventListener("message", ({ source: o, data: c }) => {
  o === lr && c === r && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), lr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ye(lr.postMessage)
), sw = typeof queueMicrotask < "u" ? queueMicrotask.bind(lr) : typeof process < "u" && process.nextTick || Nb, ow = (t) => t != null && Ye(t[Go]), q = {
  isArray: ml,
  isArrayBuffer: Mb,
  isBuffer: Ua,
  isFormData: LA,
  isArrayBufferView: wA,
  isString: CA,
  isNumber: Ob,
  isBoolean: kA,
  isObject: Va,
  isPlainObject: Ao,
  isEmptyObject: DA,
  isReadableStream: BA,
  isRequest: UA,
  isResponse: VA,
  isHeaders: jA,
  isUndefined: cl,
  isDate: RA,
  isFile: MA,
  isBlob: OA,
  isRegExp: $A,
  isFunction: Ye,
  isStream: _A,
  isURLSearchParams: NA,
  isTypedArray: IA,
  isFileList: zA,
  forEach: ja,
  merge: ch,
  extend: qA,
  trim: HA,
  stripBOM: FA,
  inherits: PA,
  toFlatObject: YA,
  kindOf: Xo,
  kindOfTest: Cn,
  endsWith: GA,
  toArray: XA,
  forEachEntry: KA,
  matchAll: QA,
  isHTMLForm: ZA,
  hasOwnProperty: i0,
  hasOwnProp: i0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Lb,
  freezeMethods: WA,
  toObjectSet: tw,
  toCamelCase: JA,
  noop: ew,
  toFiniteNumber: nw,
  findKey: zb,
  global: lr,
  isContextDefined: _b,
  isSpecCompliantForm: iw,
  toJSONObject: rw,
  isAsyncFn: lw,
  isThenable: aw,
  setImmediate: Nb,
  asap: sw,
  isIterable: ow
};
let vt = class Bb extends Error {
  static from(n, r, l, o, c, u) {
    const h = new Bb(n.message, r || n.code, l, o, c);
    return h.cause = n, h.name = n.name, u && Object.assign(h, u), h;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(n, r, l, o, c) {
    super(n), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), l && (this.config = l), o && (this.request = o), c && (this.response = c, this.status = c.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
vt.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
vt.ERR_BAD_OPTION = "ERR_BAD_OPTION";
vt.ECONNABORTED = "ECONNABORTED";
vt.ETIMEDOUT = "ETIMEDOUT";
vt.ERR_NETWORK = "ERR_NETWORK";
vt.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
vt.ERR_DEPRECATED = "ERR_DEPRECATED";
vt.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
vt.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
vt.ERR_CANCELED = "ERR_CANCELED";
vt.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
vt.ERR_INVALID_URL = "ERR_INVALID_URL";
const uw = null;
function fh(t) {
  return q.isPlainObject(t) || q.isArray(t);
}
function Ub(t) {
  return q.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function r0(t, n, r) {
  return t ? t.concat(n).map(function(o, c) {
    return o = Ub(o), !r && c ? "[" + o + "]" : o;
  }).join(r ? "." : "") : n;
}
function cw(t) {
  return q.isArray(t) && !t.some(fh);
}
const fw = q.toFlatObject(q, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Ko(t, n, r) {
  if (!q.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = q.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, A) {
    return !q.isUndefined(A[w]);
  });
  const l = r.metaTokens, o = r.visitor || g, c = r.dots, u = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(n);
  if (!q.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(S) {
    if (S === null) return "";
    if (q.isDate(S))
      return S.toISOString();
    if (q.isBoolean(S))
      return S.toString();
    if (!m && q.isBlob(S))
      throw new vt("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(S) || q.isTypedArray(S) ? m && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function g(S, w, A) {
    let C = S;
    if (S && !A && typeof S == "object") {
      if (q.endsWith(w, "{}"))
        w = l ? w : w.slice(0, -2), S = JSON.stringify(S);
      else if (q.isArray(S) && cw(S) || (q.isFileList(S) || q.endsWith(w, "[]")) && (C = q.toArray(S)))
        return w = Ub(w), C.forEach(function(M, Y) {
          !(q.isUndefined(M) || M === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? r0([w], Y, c) : u === null ? w : w + "[]",
            d(M)
          );
        }), !1;
    }
    return fh(S) ? !0 : (n.append(r0(A, w, c), d(S)), !1);
  }
  const y = [], v = Object.assign(fw, {
    defaultVisitor: g,
    convertValue: d,
    isVisitable: fh
  });
  function x(S, w) {
    if (!q.isUndefined(S)) {
      if (y.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      y.push(S), q.forEach(S, function(C, L) {
        (!(q.isUndefined(C) || C === null) && o.call(
          n,
          C,
          q.isString(L) ? L.trim() : L,
          w,
          v
        )) === !0 && x(C, w ? w.concat(L) : [L]);
      }), y.pop();
    }
  }
  if (!q.isObject(t))
    throw new TypeError("data must be an object");
  return x(t), n;
}
function l0(t) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(l) {
    return n[l];
  });
}
function Jh(t, n) {
  this._pairs = [], t && Ko(t, this, n);
}
const Vb = Jh.prototype;
Vb.append = function(n, r) {
  this._pairs.push([n, r]);
};
Vb.toString = function(n) {
  const r = n ? function(l) {
    return n.call(this, l, l0);
  } : l0;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function hw(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function jb(t, n, r) {
  if (!n)
    return t;
  const l = r && r.encode || hw, o = q.isFunction(r) ? {
    serialize: r
  } : r, c = o && o.serialize;
  let u;
  if (c ? u = c(n, o) : u = q.isURLSearchParams(n) ? n.toString() : new Jh(n, o).toString(l), u) {
    const h = t.indexOf("#");
    h !== -1 && (t = t.slice(0, h)), t += (t.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return t;
}
class a0 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(n, r, l) {
    return this.handlers.push({
      fulfilled: n,
      rejected: r,
      synchronous: l ? l.synchronous : !1,
      runWhen: l ? l.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(n) {
    q.forEach(this.handlers, function(l) {
      l !== null && n(l);
    });
  }
}
const Hb = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dw = typeof URLSearchParams < "u" ? URLSearchParams : Jh, mw = typeof FormData < "u" ? FormData : null, pw = typeof Blob < "u" ? Blob : null, gw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dw,
    FormData: mw,
    Blob: pw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $h = typeof window < "u" && typeof document < "u", hh = typeof navigator == "object" && navigator || void 0, yw = $h && (!hh || ["ReactNative", "NativeScript", "NS"].indexOf(hh.product) < 0), bw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vw = $h && window.location.href || "http://localhost", xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $h,
  hasStandardBrowserEnv: yw,
  hasStandardBrowserWebWorkerEnv: bw,
  navigator: hh,
  origin: vw
}, Symbol.toStringTag, { value: "Module" })), we = {
  ...xw,
  ...gw
};
function Sw(t, n) {
  return Ko(t, new we.classes.URLSearchParams(), {
    visitor: function(r, l, o, c) {
      return we.isNode && q.isBuffer(r) ? (this.append(l, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    },
    ...n
  });
}
function Tw(t) {
  return q.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Ew(t) {
  const n = {}, r = Object.keys(t);
  let l;
  const o = r.length;
  let c;
  for (l = 0; l < o; l++)
    c = r[l], n[c] = t[c];
  return n;
}
function qb(t) {
  function n(r, l, o, c) {
    let u = r[c++];
    if (u === "__proto__") return !0;
    const h = Number.isFinite(+u), m = c >= r.length;
    return u = !u && q.isArray(o) ? o.length : u, m ? (q.hasOwnProp(o, u) ? o[u] = [o[u], l] : o[u] = l, !h) : ((!o[u] || !q.isObject(o[u])) && (o[u] = []), n(r, l, o[u], c) && q.isArray(o[u]) && (o[u] = Ew(o[u])), !h);
  }
  if (q.isFormData(t) && q.isFunction(t.entries)) {
    const r = {};
    return q.forEachEntry(t, (l, o) => {
      n(Tw(l), o, r, 0);
    }), r;
  }
  return null;
}
function Aw(t, n, r) {
  if (q.isString(t))
    try {
      return (n || JSON.parse)(t), q.trim(t);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(t);
}
const Ha = {
  transitional: Hb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, r) {
    const l = r.getContentType() || "", o = l.indexOf("application/json") > -1, c = q.isObject(n);
    if (c && q.isHTMLForm(n) && (n = new FormData(n)), q.isFormData(n))
      return o ? JSON.stringify(qb(n)) : n;
    if (q.isArrayBuffer(n) || q.isBuffer(n) || q.isStream(n) || q.isFile(n) || q.isBlob(n) || q.isReadableStream(n))
      return n;
    if (q.isArrayBufferView(n))
      return n.buffer;
    if (q.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let h;
    if (c) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return Sw(n, this.formSerializer).toString();
      if ((h = q.isFileList(n)) || l.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Ko(
          h ? { "files[]": n } : n,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return c || o ? (r.setContentType("application/json", !1), Aw(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || Ha.transitional, l = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (q.isResponse(n) || q.isReadableStream(n))
      return n;
    if (n && q.isString(n) && (l && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(n, this.parseReviver);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? vt.from(h, vt.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return n;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: we.classes.FormData,
    Blob: we.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
q.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ha.headers[t] = {};
});
const ww = q.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Cw = (t) => {
  const n = {};
  let r, l, o;
  return t && t.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), l = u.substring(o + 1).trim(), !(!r || n[r] && ww[r]) && (r === "set-cookie" ? n[r] ? n[r].push(l) : n[r] = [l] : n[r] = n[r] ? n[r] + ", " + l : l);
  }), n;
}, s0 = /* @__PURE__ */ Symbol("internals");
function pa(t) {
  return t && String(t).trim().toLowerCase();
}
function wo(t) {
  return t === !1 || t == null ? t : q.isArray(t) ? t.map(wo) : String(t);
}
function kw(t) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = r.exec(t); )
    n[l[1]] = l[2];
  return n;
}
const Dw = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function kf(t, n, r, l, o) {
  if (q.isFunction(l))
    return l.call(this, n, r);
  if (o && (n = r), !!q.isString(n)) {
    if (q.isString(l))
      return n.indexOf(l) !== -1;
    if (q.isRegExp(l))
      return l.test(n);
  }
}
function Rw(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, l) => r.toUpperCase() + l);
}
function Mw(t, n) {
  const r = q.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(t, l + r, {
      value: function(o, c, u) {
        return this[l].call(this, n, o, c, u);
      },
      configurable: !0
    });
  });
}
let Ge = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, l) {
    const o = this;
    function c(h, m, d) {
      const g = pa(m);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const y = q.findKey(o, g);
      (!y || o[y] === void 0 || d === !0 || d === void 0 && o[y] !== !1) && (o[y || m] = wo(h));
    }
    const u = (h, m) => q.forEach(h, (d, g) => c(d, g, m));
    if (q.isPlainObject(n) || n instanceof this.constructor)
      u(n, r);
    else if (q.isString(n) && (n = n.trim()) && !Dw(n))
      u(Cw(n), r);
    else if (q.isObject(n) && q.isIterable(n)) {
      let h = {}, m, d;
      for (const g of n) {
        if (!q.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        h[d = g[0]] = (m = h[d]) ? q.isArray(m) ? [...m, g[1]] : [m, g[1]] : g[1];
      }
      u(h, r);
    } else
      n != null && c(r, n, l);
    return this;
  }
  get(n, r) {
    if (n = pa(n), n) {
      const l = q.findKey(this, n);
      if (l) {
        const o = this[l];
        if (!r)
          return o;
        if (r === !0)
          return kw(o);
        if (q.isFunction(r))
          return r.call(this, o, l);
        if (q.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = pa(n), n) {
      const l = q.findKey(this, n);
      return !!(l && this[l] !== void 0 && (!r || kf(this, this[l], l, r)));
    }
    return !1;
  }
  delete(n, r) {
    const l = this;
    let o = !1;
    function c(u) {
      if (u = pa(u), u) {
        const h = q.findKey(l, u);
        h && (!r || kf(l, l[h], h, r)) && (delete l[h], o = !0);
      }
    }
    return q.isArray(n) ? n.forEach(c) : c(n), o;
  }
  clear(n) {
    const r = Object.keys(this);
    let l = r.length, o = !1;
    for (; l--; ) {
      const c = r[l];
      (!n || kf(this, this[c], c, n, !0)) && (delete this[c], o = !0);
    }
    return o;
  }
  normalize(n) {
    const r = this, l = {};
    return q.forEach(this, (o, c) => {
      const u = q.findKey(l, c);
      if (u) {
        r[u] = wo(o), delete r[c];
        return;
      }
      const h = n ? Rw(c) : String(c).trim();
      h !== c && delete r[c], r[h] = wo(o), l[h] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (l, o) => {
      l != null && l !== !1 && (r[o] = n && q.isArray(l) ? l.join(", ") : l);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const l = new this(n);
    return r.forEach((o) => l.set(o)), l;
  }
  static accessor(n) {
    const l = (this[s0] = this[s0] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function c(u) {
      const h = pa(u);
      l[h] || (Mw(o, u), l[h] = !0);
    }
    return q.isArray(n) ? n.forEach(c) : c(n), this;
  }
};
Ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(Ge.prototype, ({ value: t }, n) => {
  let r = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(l) {
      this[r] = l;
    }
  };
});
q.freezeMethods(Ge);
function Df(t, n) {
  const r = this || Ha, l = n || r, o = Ge.from(l.headers);
  let c = l.data;
  return q.forEach(t, function(h) {
    c = h.call(r, c, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), c;
}
function Fb(t) {
  return !!(t && t.__CANCEL__);
}
let qa = class extends vt {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(n, r, l) {
    super(n ?? "canceled", vt.ERR_CANCELED, r, l), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Pb(t, n, r) {
  const l = r.config.validateStatus;
  !r.status || !l || l(r.status) ? t(r) : n(new vt(
    "Request failed with status code " + r.status,
    [vt.ERR_BAD_REQUEST, vt.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ow(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n && n[1] || "";
}
function zw(t, n) {
  t = t || 10;
  const r = new Array(t), l = new Array(t);
  let o = 0, c = 0, u;
  return n = n !== void 0 ? n : 1e3, function(m) {
    const d = Date.now(), g = l[c];
    u || (u = d), r[o] = m, l[o] = d;
    let y = c, v = 0;
    for (; y !== o; )
      v += r[y++], y = y % t;
    if (o = (o + 1) % t, o === c && (c = (c + 1) % t), d - u < n)
      return;
    const x = g && d - g;
    return x ? Math.round(v * 1e3 / x) : void 0;
  };
}
function _w(t, n) {
  let r = 0, l = 1e3 / n, o, c;
  const u = (d, g = Date.now()) => {
    r = g, o = null, c && (clearTimeout(c), c = null), t(...d);
  };
  return [(...d) => {
    const g = Date.now(), y = g - r;
    y >= l ? u(d, g) : (o = d, c || (c = setTimeout(() => {
      c = null, u(o);
    }, l - y)));
  }, () => o && u(o)];
}
const zo = (t, n, r = 3) => {
  let l = 0;
  const o = zw(50, 250);
  return _w((c) => {
    const u = c.loaded, h = c.lengthComputable ? c.total : void 0, m = u - l, d = o(m), g = u <= h;
    l = u;
    const y = {
      loaded: u,
      total: h,
      progress: h ? u / h : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && h && g ? (h - u) / d : void 0,
      event: c,
      lengthComputable: h != null,
      [n ? "download" : "upload"]: !0
    };
    t(y);
  }, r);
}, o0 = (t, n) => {
  const r = t != null;
  return [(l) => n[0]({
    lengthComputable: r,
    total: t,
    loaded: l
  }), n[1]];
}, u0 = (t) => (...n) => q.asap(() => t(...n)), Lw = we.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (r) => (r = new URL(r, we.origin), t.protocol === r.protocol && t.host === r.host && (n || t.port === r.port)))(
  new URL(we.origin),
  we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)
) : () => !0, Nw = we.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, r, l, o, c, u) {
      if (typeof document > "u") return;
      const h = [`${t}=${encodeURIComponent(n)}`];
      q.isNumber(r) && h.push(`expires=${new Date(r).toUTCString()}`), q.isString(l) && h.push(`path=${l}`), q.isString(o) && h.push(`domain=${o}`), c === !0 && h.push("secure"), q.isString(u) && h.push(`SameSite=${u}`), document.cookie = h.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const n = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return n ? decodeURIComponent(n[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Bw(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Uw(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function Yb(t, n, r) {
  let l = !Bw(n);
  return t && (l || r == !1) ? Uw(t, n) : n;
}
const c0 = (t) => t instanceof Ge ? { ...t } : t;
function cr(t, n) {
  n = n || {};
  const r = {};
  function l(d, g, y, v) {
    return q.isPlainObject(d) && q.isPlainObject(g) ? q.merge.call({ caseless: v }, d, g) : q.isPlainObject(g) ? q.merge({}, g) : q.isArray(g) ? g.slice() : g;
  }
  function o(d, g, y, v) {
    if (q.isUndefined(g)) {
      if (!q.isUndefined(d))
        return l(void 0, d, y, v);
    } else return l(d, g, y, v);
  }
  function c(d, g) {
    if (!q.isUndefined(g))
      return l(void 0, g);
  }
  function u(d, g) {
    if (q.isUndefined(g)) {
      if (!q.isUndefined(d))
        return l(void 0, d);
    } else return l(void 0, g);
  }
  function h(d, g, y) {
    if (y in n)
      return l(d, g);
    if (y in t)
      return l(void 0, d);
  }
  const m = {
    url: c,
    method: c,
    data: c,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: h,
    headers: (d, g, y) => o(c0(d), c0(g), y, !0)
  };
  return q.forEach(Object.keys({ ...t, ...n }), function(g) {
    const y = m[g] || o, v = y(t[g], n[g], g);
    q.isUndefined(v) && y !== h || (r[g] = v);
  }), r;
}
const Gb = (t) => {
  const n = cr({}, t);
  let { data: r, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: c, headers: u, auth: h } = n;
  if (n.headers = u = Ge.from(u), n.url = jb(Yb(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), h && u.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  ), q.isFormData(r)) {
    if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if (q.isFunction(r.getHeaders)) {
      const m = r.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(m).forEach(([g, y]) => {
        d.includes(g.toLowerCase()) && u.set(g, y);
      });
    }
  }
  if (we.hasStandardBrowserEnv && (l && q.isFunction(l) && (l = l(n)), l || l !== !1 && Lw(n.url))) {
    const m = o && c && Nw.read(c);
    m && u.set(o, m);
  }
  return n;
}, Vw = typeof XMLHttpRequest < "u", jw = Vw && function(t) {
  return new Promise(function(r, l) {
    const o = Gb(t);
    let c = o.data;
    const u = Ge.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: m, onDownloadProgress: d } = o, g, y, v, x, S;
    function w() {
      x && x(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let A = new XMLHttpRequest();
    A.open(o.method.toUpperCase(), o.url, !0), A.timeout = o.timeout;
    function C() {
      if (!A)
        return;
      const M = Ge.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), Q = {
        data: !h || h === "text" || h === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: M,
        config: t,
        request: A
      };
      Pb(function(Z) {
        r(Z), w();
      }, function(Z) {
        l(Z), w();
      }, Q), A = null;
    }
    "onloadend" in A ? A.onloadend = C : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(C);
    }, A.onabort = function() {
      A && (l(new vt("Request aborted", vt.ECONNABORTED, t, A)), A = null);
    }, A.onerror = function(Y) {
      const Q = Y && Y.message ? Y.message : "Network Error", _ = new vt(Q, vt.ERR_NETWORK, t, A);
      _.event = Y || null, l(_), A = null;
    }, A.ontimeout = function() {
      let Y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const Q = o.transitional || Hb;
      o.timeoutErrorMessage && (Y = o.timeoutErrorMessage), l(new vt(
        Y,
        Q.clarifyTimeoutError ? vt.ETIMEDOUT : vt.ECONNABORTED,
        t,
        A
      )), A = null;
    }, c === void 0 && u.setContentType(null), "setRequestHeader" in A && q.forEach(u.toJSON(), function(Y, Q) {
      A.setRequestHeader(Q, Y);
    }), q.isUndefined(o.withCredentials) || (A.withCredentials = !!o.withCredentials), h && h !== "json" && (A.responseType = o.responseType), d && ([v, S] = zo(d, !0), A.addEventListener("progress", v)), m && A.upload && ([y, x] = zo(m), A.upload.addEventListener("progress", y), A.upload.addEventListener("loadend", x)), (o.cancelToken || o.signal) && (g = (M) => {
      A && (l(!M || M.type ? new qa(null, t, A) : M), A.abort(), A = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const L = Ow(o.url);
    if (L && we.protocols.indexOf(L) === -1) {
      l(new vt("Unsupported protocol " + L + ":", vt.ERR_BAD_REQUEST, t));
      return;
    }
    A.send(c || null);
  });
}, Hw = (t, n) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (n || r) {
    let l = new AbortController(), o;
    const c = function(d) {
      if (!o) {
        o = !0, h();
        const g = d instanceof Error ? d : this.reason;
        l.abort(g instanceof vt ? g : new qa(g instanceof Error ? g.message : g));
      }
    };
    let u = n && setTimeout(() => {
      u = null, c(new vt(`timeout of ${n}ms exceeded`, vt.ETIMEDOUT));
    }, n);
    const h = () => {
      t && (u && clearTimeout(u), u = null, t.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(c) : d.removeEventListener("abort", c);
      }), t = null);
    };
    t.forEach((d) => d.addEventListener("abort", c));
    const { signal: m } = l;
    return m.unsubscribe = () => q.asap(h), m;
  }
}, qw = function* (t, n) {
  let r = t.byteLength;
  if (r < n) {
    yield t;
    return;
  }
  let l = 0, o;
  for (; l < r; )
    o = l + n, yield t.slice(l, o), l = o;
}, Fw = async function* (t, n) {
  for await (const r of Pw(t))
    yield* qw(r, n);
}, Pw = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const n = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: l } = await n.read();
      if (r)
        break;
      yield l;
    }
  } finally {
    await n.cancel();
  }
}, f0 = (t, n, r, l) => {
  const o = Fw(t, n);
  let c = 0, u, h = (m) => {
    u || (u = !0, l && l(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: d, value: g } = await o.next();
        if (d) {
          h(), m.close();
          return;
        }
        let y = g.byteLength;
        if (r) {
          let v = c += y;
          r(v);
        }
        m.enqueue(new Uint8Array(g));
      } catch (d) {
        throw h(d), d;
      }
    },
    cancel(m) {
      return h(m), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, h0 = 64 * 1024, { isFunction: po } = q, Yw = (({ Request: t, Response: n }) => ({
  Request: t,
  Response: n
}))(q.global), {
  ReadableStream: d0,
  TextEncoder: m0
} = q.global, p0 = (t, ...n) => {
  try {
    return !!t(...n);
  } catch {
    return !1;
  }
}, Gw = (t) => {
  t = q.merge.call({
    skipUndefined: !0
  }, Yw, t);
  const { fetch: n, Request: r, Response: l } = t, o = n ? po(n) : typeof fetch == "function", c = po(r), u = po(l);
  if (!o)
    return !1;
  const h = o && po(d0), m = o && (typeof m0 == "function" ? /* @__PURE__ */ ((S) => (w) => S.encode(w))(new m0()) : async (S) => new Uint8Array(await new r(S).arrayBuffer())), d = c && h && p0(() => {
    let S = !1;
    const w = new r(we.origin, {
      body: new d0(),
      method: "POST",
      get duplex() {
        return S = !0, "half";
      }
    }).headers.has("Content-Type");
    return S && !w;
  }), g = u && h && p0(() => q.isReadableStream(new l("").body)), y = {
    stream: g && ((S) => S.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((S) => {
    !y[S] && (y[S] = (w, A) => {
      let C = w && w[S];
      if (C)
        return C.call(w);
      throw new vt(`Response type '${S}' is not supported`, vt.ERR_NOT_SUPPORT, A);
    });
  });
  const v = async (S) => {
    if (S == null)
      return 0;
    if (q.isBlob(S))
      return S.size;
    if (q.isSpecCompliantForm(S))
      return (await new r(we.origin, {
        method: "POST",
        body: S
      }).arrayBuffer()).byteLength;
    if (q.isArrayBufferView(S) || q.isArrayBuffer(S))
      return S.byteLength;
    if (q.isURLSearchParams(S) && (S = S + ""), q.isString(S))
      return (await m(S)).byteLength;
  }, x = async (S, w) => {
    const A = q.toFiniteNumber(S.getContentLength());
    return A ?? v(w);
  };
  return async (S) => {
    let {
      url: w,
      method: A,
      data: C,
      signal: L,
      cancelToken: M,
      timeout: Y,
      onDownloadProgress: Q,
      onUploadProgress: _,
      responseType: Z,
      headers: J,
      withCredentials: lt = "same-origin",
      fetchOptions: B
    } = Gb(S), et = n || fetch;
    Z = Z ? (Z + "").toLowerCase() : "text";
    let nt = Hw([L, M && M.toAbortSignal()], Y), xt = null;
    const st = nt && nt.unsubscribe && (() => {
      nt.unsubscribe();
    });
    let W;
    try {
      if (_ && d && A !== "get" && A !== "head" && (W = await x(J, C)) !== 0) {
        let R = new r(w, {
          method: "POST",
          body: C,
          duplex: "half"
        }), F;
        if (q.isFormData(C) && (F = R.headers.get("content-type")) && J.setContentType(F), R.body) {
          const [E, at] = o0(
            W,
            zo(u0(_))
          );
          C = f0(R.body, h0, E, at);
        }
      }
      q.isString(lt) || (lt = lt ? "include" : "omit");
      const N = c && "credentials" in r.prototype, I = {
        ...B,
        signal: nt,
        method: A.toUpperCase(),
        headers: J.normalize().toJSON(),
        body: C,
        duplex: "half",
        credentials: N ? lt : void 0
      };
      xt = c && new r(w, I);
      let it = await (c ? et(xt, B) : et(w, I));
      const yt = g && (Z === "stream" || Z === "response");
      if (g && (Q || yt && st)) {
        const R = {};
        ["status", "statusText", "headers"].forEach((mt) => {
          R[mt] = it[mt];
        });
        const F = q.toFiniteNumber(it.headers.get("content-length")), [E, at] = Q && o0(
          F,
          zo(u0(Q), !0)
        ) || [];
        it = new l(
          f0(it.body, h0, E, () => {
            at && at(), st && st();
          }),
          R
        );
      }
      Z = Z || "text";
      let k = await y[q.findKey(y, Z) || "text"](it, S);
      return !yt && st && st(), await new Promise((R, F) => {
        Pb(R, F, {
          data: k,
          headers: Ge.from(it.headers),
          status: it.status,
          statusText: it.statusText,
          config: S,
          request: xt
        });
      });
    } catch (N) {
      throw st && st(), N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message) ? Object.assign(
        new vt("Network Error", vt.ERR_NETWORK, S, xt),
        {
          cause: N.cause || N
        }
      ) : vt.from(N, N && N.code, S, xt);
    }
  };
}, Xw = /* @__PURE__ */ new Map(), Xb = (t) => {
  let n = t && t.env || {};
  const { fetch: r, Request: l, Response: o } = n, c = [
    l,
    o,
    r
  ];
  let u = c.length, h = u, m, d, g = Xw;
  for (; h--; )
    m = c[h], d = g.get(m), d === void 0 && g.set(m, d = h ? /* @__PURE__ */ new Map() : Gw(n)), g = d;
  return d;
};
Xb();
const Wh = {
  http: uw,
  xhr: jw,
  fetch: {
    get: Xb
  }
};
q.forEach(Wh, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const g0 = (t) => `- ${t}`, Iw = (t) => q.isFunction(t) || t === null || t === !1;
function Kw(t, n) {
  t = q.isArray(t) ? t : [t];
  const { length: r } = t;
  let l, o;
  const c = {};
  for (let u = 0; u < r; u++) {
    l = t[u];
    let h;
    if (o = l, !Iw(l) && (o = Wh[(h = String(l)).toLowerCase()], o === void 0))
      throw new vt(`Unknown adapter '${h}'`);
    if (o && (q.isFunction(o) || (o = o.get(n))))
      break;
    c[h || "#" + u] = o;
  }
  if (!o) {
    const u = Object.entries(c).map(
      ([m, d]) => `adapter ${m} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let h = r ? u.length > 1 ? `since :
` + u.map(g0).join(`
`) : " " + g0(u[0]) : "as no adapter specified";
    throw new vt(
      "There is no suitable adapter to dispatch the request " + h,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Ib = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Kw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Wh
};
function Rf(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new qa(null, t);
}
function y0(t) {
  return Rf(t), t.headers = Ge.from(t.headers), t.data = Df.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ib.getAdapter(t.adapter || Ha.adapter, t)(t).then(function(l) {
    return Rf(t), l.data = Df.call(
      t,
      t.transformResponse,
      l
    ), l.headers = Ge.from(l.headers), l;
  }, function(l) {
    return Fb(l) || (Rf(t), l && l.response && (l.response.data = Df.call(
      t,
      t.transformResponse,
      l.response
    ), l.response.headers = Ge.from(l.response.headers))), Promise.reject(l);
  });
}
const Kb = "1.13.4", Qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  Qo[t] = function(l) {
    return typeof l === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const b0 = {};
Qo.transitional = function(n, r, l) {
  function o(c, u) {
    return "[Axios v" + Kb + "] Transitional option '" + c + "'" + u + (l ? ". " + l : "");
  }
  return (c, u, h) => {
    if (n === !1)
      throw new vt(
        o(u, " has been removed" + (r ? " in " + r : "")),
        vt.ERR_DEPRECATED
      );
    return r && !b0[u] && (b0[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(c, u, h) : !0;
  };
};
Qo.spelling = function(n) {
  return (r, l) => (console.warn(`${l} is likely a misspelling of ${n}`), !0);
};
function Qw(t, n, r) {
  if (typeof t != "object")
    throw new vt("options must be an object", vt.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(t);
  let o = l.length;
  for (; o-- > 0; ) {
    const c = l[o], u = n[c];
    if (u) {
      const h = t[c], m = h === void 0 || u(h, c, t);
      if (m !== !0)
        throw new vt("option " + c + " must be " + m, vt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new vt("Unknown option " + c, vt.ERR_BAD_OPTION);
  }
}
const Co = {
  assertOptions: Qw,
  validators: Qo
}, On = Co.validators;
let or = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new a0(),
      response: new a0()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(n, r) {
    try {
      return await this._request(n, r);
    } catch (l) {
      if (l instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const c = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack ? c && !String(l.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + c) : l.stack = c;
        } catch {
        }
      }
      throw l;
    }
  }
  _request(n, r) {
    typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = cr(this.defaults, r);
    const { transitional: l, paramsSerializer: o, headers: c } = r;
    l !== void 0 && Co.assertOptions(l, {
      silentJSONParsing: On.transitional(On.boolean),
      forcedJSONParsing: On.transitional(On.boolean),
      clarifyTimeoutError: On.transitional(On.boolean)
    }, !1), o != null && (q.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Co.assertOptions(o, {
      encode: On.function,
      serialize: On.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Co.assertOptions(r, {
      baseUrl: On.spelling("baseURL"),
      withXsrfToken: On.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let u = c && q.merge(
      c.common,
      c[r.method]
    );
    c && q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete c[S];
      }
    ), r.headers = Ge.concat(u, c);
    const h = [];
    let m = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (m = m && w.synchronous, h.unshift(w.fulfilled, w.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(w) {
      d.push(w.fulfilled, w.rejected);
    });
    let g, y = 0, v;
    if (!m) {
      const S = [y0.bind(this), void 0];
      for (S.unshift(...h), S.push(...d), v = S.length, g = Promise.resolve(r); y < v; )
        g = g.then(S[y++], S[y++]);
      return g;
    }
    v = h.length;
    let x = r;
    for (; y < v; ) {
      const S = h[y++], w = h[y++];
      try {
        x = S(x);
      } catch (A) {
        w.call(this, A);
        break;
      }
    }
    try {
      g = y0.call(this, x);
    } catch (S) {
      return Promise.reject(S);
    }
    for (y = 0, v = d.length; y < v; )
      g = g.then(d[y++], d[y++]);
    return g;
  }
  getUri(n) {
    n = cr(this.defaults, n);
    const r = Yb(n.baseURL, n.url, n.allowAbsoluteUrls);
    return jb(r, n.params, n.paramsSerializer);
  }
};
q.forEach(["delete", "get", "head", "options"], function(n) {
  or.prototype[n] = function(r, l) {
    return this.request(cr(l || {}, {
      method: n,
      url: r,
      data: (l || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(n) {
  function r(l) {
    return function(c, u, h) {
      return this.request(cr(h || {}, {
        method: n,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: u
      }));
    };
  }
  or.prototype[n] = r(), or.prototype[n + "Form"] = r(!0);
});
let Zw = class Qb {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const l = this;
    this.promise.then((o) => {
      if (!l._listeners) return;
      let c = l._listeners.length;
      for (; c-- > 0; )
        l._listeners[c](o);
      l._listeners = null;
    }), this.promise.then = (o) => {
      let c;
      const u = new Promise((h) => {
        l.subscribe(h), c = h;
      }).then(o);
      return u.cancel = function() {
        l.unsubscribe(c);
      }, u;
    }, n(function(c, u, h) {
      l.reason || (l.reason = new qa(c, u, h), r(l.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const n = new AbortController(), r = (l) => {
      n.abort(l);
    };
    return this.subscribe(r), n.signal.unsubscribe = () => this.unsubscribe(r), n.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Qb(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function Jw(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function $w(t) {
  return q.isObject(t) && t.isAxiosError === !0;
}
const dh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(dh).forEach(([t, n]) => {
  dh[n] = t;
});
function Zb(t) {
  const n = new or(t), r = Db(or.prototype.request, n);
  return q.extend(r, or.prototype, n, { allOwnKeys: !0 }), q.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Zb(cr(t, o));
  }, r;
}
const le = Zb(Ha);
le.Axios = or;
le.CanceledError = qa;
le.CancelToken = Zw;
le.isCancel = Fb;
le.VERSION = Kb;
le.toFormData = Ko;
le.AxiosError = vt;
le.Cancel = le.CanceledError;
le.all = function(n) {
  return Promise.all(n);
};
le.spread = Jw;
le.isAxiosError = $w;
le.mergeConfig = cr;
le.AxiosHeaders = Ge;
le.formToJSON = (t) => qb(q.isHTMLForm(t) ? new FormData(t) : t);
le.getAdapter = Ib.getAdapter;
le.HttpStatusCode = dh;
le.default = le;
const {
  Axios: gL,
  AxiosError: yL,
  CanceledError: bL,
  isCancel: vL,
  CancelToken: xL,
  VERSION: SL,
  all: TL,
  Cancel: EL,
  isAxiosError: AL,
  spread: wL,
  toFormData: CL,
  AxiosHeaders: kL,
  HttpStatusCode: DL,
  formToJSON: RL,
  getAdapter: ML,
  mergeConfig: OL
} = le, td = tt.createContext({});
function ed(t) {
  const n = tt.useRef(null);
  return n.current === null && (n.current = t()), n.current;
}
const Jb = typeof window < "u", $b = Jb ? tt.useLayoutEffect : tt.useEffect, Zo = /* @__PURE__ */ tt.createContext(null);
function nd(t, n) {
  t.indexOf(n) === -1 && t.push(n);
}
function id(t, n) {
  const r = t.indexOf(n);
  r > -1 && t.splice(r, 1);
}
const Ln = (t, n, r) => r > n ? n : r < t ? t : r;
let rd = () => {
};
const ri = {}, Wb = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function tv(t) {
  return typeof t == "object" && t !== null;
}
const ev = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function ld(t) {
  let n;
  return () => (n === void 0 && (n = t()), n);
}
const bn = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Ww = (t, n) => (r) => n(t(r)), Fa = (...t) => t.reduce(Ww), Ma = /* @__NO_SIDE_EFFECTS__ */ (t, n, r) => {
  const l = n - t;
  return l === 0 ? 1 : (r - t) / l;
};
class ad {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return nd(this.subscriptions, n), () => id(this.subscriptions, n);
  }
  notify(n, r, l) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](n, r, l);
      else
        for (let c = 0; c < o; c++) {
          const u = this.subscriptions[c];
          u && u(n, r, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ii = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, yn = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function nv(t, n) {
  return n ? t * (1e3 / n) : 0;
}
const iv = (t, n, r) => (((1 - 3 * r + 3 * n) * t + (3 * r - 6 * n)) * t + 3 * n) * t, tC = 1e-7, eC = 12;
function nC(t, n, r, l, o) {
  let c, u, h = 0;
  do
    u = n + (r - n) / 2, c = iv(u, l, o) - t, c > 0 ? r = u : n = u;
  while (Math.abs(c) > tC && ++h < eC);
  return u;
}
function Pa(t, n, r, l) {
  if (t === n && r === l)
    return bn;
  const o = (c) => nC(c, 0, 1, t, r);
  return (c) => c === 0 || c === 1 ? c : iv(o(c), n, l);
}
const rv = (t) => (n) => n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2, lv = (t) => (n) => 1 - t(1 - n), av = /* @__PURE__ */ Pa(0.33, 1.53, 0.69, 0.99), sd = /* @__PURE__ */ lv(av), sv = /* @__PURE__ */ rv(sd), ov = (t) => (t *= 2) < 1 ? 0.5 * sd(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), od = (t) => 1 - Math.sin(Math.acos(t)), uv = lv(od), cv = rv(od), iC = /* @__PURE__ */ Pa(0.42, 0, 1, 1), rC = /* @__PURE__ */ Pa(0, 0, 0.58, 1), fv = /* @__PURE__ */ Pa(0.42, 0, 0.58, 1), lC = (t) => Array.isArray(t) && typeof t[0] != "number", hv = (t) => Array.isArray(t) && typeof t[0] == "number", aC = {
  linear: bn,
  easeIn: iC,
  easeInOut: fv,
  easeOut: rC,
  circIn: od,
  circInOut: cv,
  circOut: uv,
  backIn: sd,
  backInOut: sv,
  backOut: av,
  anticipate: ov
}, sC = (t) => typeof t == "string", v0 = (t) => {
  if (hv(t)) {
    rd(t.length === 4);
    const [n, r, l, o] = t;
    return Pa(n, r, l, o);
  } else if (sC(t))
    return aC[t];
  return t;
}, go = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function oC(t, n) {
  let r = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), o = !1, c = !1;
  const u = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(g) {
    u.has(g) && (d.schedule(g), t()), g(h);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (g, y = !1, v = !1) => {
      const S = v && o ? r : l;
      return y && u.add(g), S.has(g) || S.add(g), g;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (g) => {
      l.delete(g), u.delete(g);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (g) => {
      if (h = g, o) {
        c = !0;
        return;
      }
      o = !0, [r, l] = [l, r], r.forEach(m), r.clear(), o = !1, c && (c = !1, d.process(g));
    }
  };
  return d;
}
const uC = 40;
function dv(t, n) {
  let r = !1, l = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, u = go.reduce((M, Y) => (M[Y] = oC(c), M), {}), { setup: h, read: m, resolveKeyframes: d, preUpdate: g, update: y, preRender: v, render: x, postRender: S } = u, w = () => {
    const M = ri.useManualTiming ? o.timestamp : performance.now();
    r = !1, ri.useManualTiming || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(M - o.timestamp, uC), 1)), o.timestamp = M, o.isProcessing = !0, h.process(o), m.process(o), d.process(o), g.process(o), y.process(o), v.process(o), x.process(o), S.process(o), o.isProcessing = !1, r && n && (l = !1, t(w));
  }, A = () => {
    r = !0, l = !0, o.isProcessing || t(w);
  };
  return { schedule: go.reduce((M, Y) => {
    const Q = u[Y];
    return M[Y] = (_, Z = !1, J = !1) => (r || A(), Q.schedule(_, Z, J)), M;
  }, {}), cancel: (M) => {
    for (let Y = 0; Y < go.length; Y++)
      u[go[Y]].cancel(M);
  }, state: o, steps: u };
}
const { schedule: Zt, cancel: Li, state: Ee, steps: Mf } = /* @__PURE__ */ dv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : bn, !0);
let ko;
function cC() {
  ko = void 0;
}
const _e = {
  now: () => (ko === void 0 && _e.set(Ee.isProcessing || ri.useManualTiming ? Ee.timestamp : performance.now()), ko),
  set: (t) => {
    ko = t, queueMicrotask(cC);
  }
}, mv = (t) => (n) => typeof n == "string" && n.startsWith(t), pv = /* @__PURE__ */ mv("--"), fC = /* @__PURE__ */ mv("var(--"), ud = (t) => fC(t) ? hC.test(t.split("/*")[0].trim()) : !1, hC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function x0(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const pl = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Oa = {
  ...pl,
  transform: (t) => Ln(0, 1, t)
}, yo = {
  ...pl,
  default: 1
}, Ea = (t) => Math.round(t * 1e5) / 1e5, cd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dC(t) {
  return t == null;
}
const mC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, fd = (t, n) => (r) => !!(typeof r == "string" && mC.test(r) && r.startsWith(t) || n && !dC(r) && Object.prototype.hasOwnProperty.call(r, n)), gv = (t, n, r) => (l) => {
  if (typeof l != "string")
    return l;
  const [o, c, u, h] = l.match(cd);
  return {
    [t]: parseFloat(o),
    [n]: parseFloat(c),
    [r]: parseFloat(u),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, pC = (t) => Ln(0, 255, t), Of = {
  ...pl,
  transform: (t) => Math.round(pC(t))
}, ar = {
  test: /* @__PURE__ */ fd("rgb", "red"),
  parse: /* @__PURE__ */ gv("red", "green", "blue"),
  transform: ({ red: t, green: n, blue: r, alpha: l = 1 }) => "rgba(" + Of.transform(t) + ", " + Of.transform(n) + ", " + Of.transform(r) + ", " + Ea(Oa.transform(l)) + ")"
};
function gC(t) {
  let n = "", r = "", l = "", o = "";
  return t.length > 5 ? (n = t.substring(1, 3), r = t.substring(3, 5), l = t.substring(5, 7), o = t.substring(7, 9)) : (n = t.substring(1, 2), r = t.substring(2, 3), l = t.substring(3, 4), o = t.substring(4, 5), n += n, r += r, l += l, o += o), {
    red: parseInt(n, 16),
    green: parseInt(r, 16),
    blue: parseInt(l, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const mh = {
  test: /* @__PURE__ */ fd("#"),
  parse: gC,
  transform: ar.transform
}, Ya = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (n) => typeof n == "string" && n.endsWith(t) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${t}`
}), zi = /* @__PURE__ */ Ya("deg"), _n = /* @__PURE__ */ Ya("%"), ut = /* @__PURE__ */ Ya("px"), yC = /* @__PURE__ */ Ya("vh"), bC = /* @__PURE__ */ Ya("vw"), S0 = {
  ..._n,
  parse: (t) => _n.parse(t) / 100,
  transform: (t) => _n.transform(t * 100)
}, rl = {
  test: /* @__PURE__ */ fd("hsl", "hue"),
  parse: /* @__PURE__ */ gv("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: n, lightness: r, alpha: l = 1 }) => "hsla(" + Math.round(t) + ", " + _n.transform(Ea(n)) + ", " + _n.transform(Ea(r)) + ", " + Ea(Oa.transform(l)) + ")"
}, fe = {
  test: (t) => ar.test(t) || mh.test(t) || rl.test(t),
  parse: (t) => ar.test(t) ? ar.parse(t) : rl.test(t) ? rl.parse(t) : mh.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? ar.transform(t) : rl.transform(t),
  getAnimatableNone: (t) => {
    const n = fe.parse(t);
    return n.alpha = 0, fe.transform(n);
  }
}, vC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xC(t) {
  return isNaN(t) && typeof t == "string" && (t.match(cd)?.length || 0) + (t.match(vC)?.length || 0) > 0;
}
const yv = "number", bv = "color", SC = "var", TC = "var(", T0 = "${}", EC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function za(t) {
  const n = t.toString(), r = [], l = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let c = 0;
  const h = n.replace(EC, (m) => (fe.test(m) ? (l.color.push(c), o.push(bv), r.push(fe.parse(m))) : m.startsWith(TC) ? (l.var.push(c), o.push(SC), r.push(m)) : (l.number.push(c), o.push(yv), r.push(parseFloat(m))), ++c, T0)).split(T0);
  return { values: r, split: h, indexes: l, types: o };
}
function vv(t) {
  return za(t).values;
}
function xv(t) {
  const { split: n, types: r } = za(t), l = n.length;
  return (o) => {
    let c = "";
    for (let u = 0; u < l; u++)
      if (c += n[u], o[u] !== void 0) {
        const h = r[u];
        h === yv ? c += Ea(o[u]) : h === bv ? c += fe.transform(o[u]) : c += o[u];
      }
    return c;
  };
}
const AC = (t) => typeof t == "number" ? 0 : fe.test(t) ? fe.getAnimatableNone(t) : t;
function wC(t) {
  const n = vv(t);
  return xv(t)(n.map(AC));
}
const Ni = {
  test: xC,
  parse: vv,
  createTransformer: xv,
  getAnimatableNone: wC
};
function zf(t, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
}
function CC({ hue: t, saturation: n, lightness: r, alpha: l }) {
  t /= 360, n /= 100, r /= 100;
  let o = 0, c = 0, u = 0;
  if (!n)
    o = c = u = r;
  else {
    const h = r < 0.5 ? r * (1 + n) : r + n - r * n, m = 2 * r - h;
    o = zf(m, h, t + 1 / 3), c = zf(m, h, t), u = zf(m, h, t - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(c * 255),
    blue: Math.round(u * 255),
    alpha: l
  };
}
function _o(t, n) {
  return (r) => r > 0 ? n : t;
}
const Wt = (t, n, r) => t + (n - t) * r, _f = (t, n, r) => {
  const l = t * t, o = r * (n * n - l) + l;
  return o < 0 ? 0 : Math.sqrt(o);
}, kC = [mh, ar, rl], DC = (t) => kC.find((n) => n.test(t));
function E0(t) {
  const n = DC(t);
  if (!n)
    return !1;
  let r = n.parse(t);
  return n === rl && (r = CC(r)), r;
}
const A0 = (t, n) => {
  const r = E0(t), l = E0(n);
  if (!r || !l)
    return _o(t, n);
  const o = { ...r };
  return (c) => (o.red = _f(r.red, l.red, c), o.green = _f(r.green, l.green, c), o.blue = _f(r.blue, l.blue, c), o.alpha = Wt(r.alpha, l.alpha, c), ar.transform(o));
}, ph = /* @__PURE__ */ new Set(["none", "hidden"]);
function RC(t, n) {
  return ph.has(t) ? (r) => r <= 0 ? t : n : (r) => r >= 1 ? n : t;
}
function MC(t, n) {
  return (r) => Wt(t, n, r);
}
function hd(t) {
  return typeof t == "number" ? MC : typeof t == "string" ? ud(t) ? _o : fe.test(t) ? A0 : _C : Array.isArray(t) ? Sv : typeof t == "object" ? fe.test(t) ? A0 : OC : _o;
}
function Sv(t, n) {
  const r = [...t], l = r.length, o = t.map((c, u) => hd(c)(c, n[u]));
  return (c) => {
    for (let u = 0; u < l; u++)
      r[u] = o[u](c);
    return r;
  };
}
function OC(t, n) {
  const r = { ...t, ...n }, l = {};
  for (const o in r)
    t[o] !== void 0 && n[o] !== void 0 && (l[o] = hd(t[o])(t[o], n[o]));
  return (o) => {
    for (const c in l)
      r[c] = l[c](o);
    return r;
  };
}
function zC(t, n) {
  const r = [], l = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < n.values.length; o++) {
    const c = n.types[o], u = t.indexes[c][l[c]], h = t.values[u] ?? 0;
    r[o] = h, l[c]++;
  }
  return r;
}
const _C = (t, n) => {
  const r = Ni.createTransformer(n), l = za(t), o = za(n);
  return l.indexes.var.length === o.indexes.var.length && l.indexes.color.length === o.indexes.color.length && l.indexes.number.length >= o.indexes.number.length ? ph.has(t) && !o.values.length || ph.has(n) && !l.values.length ? RC(t, n) : Fa(Sv(zC(l, o), o.values), r) : _o(t, n);
};
function Tv(t, n, r) {
  return typeof t == "number" && typeof n == "number" && typeof r == "number" ? Wt(t, n, r) : hd(t)(t, n);
}
const LC = (t) => {
  const n = ({ timestamp: r }) => t(r);
  return {
    start: (r = !0) => Zt.update(n, r),
    stop: () => Li(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ee.isProcessing ? Ee.timestamp : _e.now()
  };
}, Ev = (t, n, r = 10) => {
  let l = "";
  const o = Math.max(Math.round(n / r), 2);
  for (let c = 0; c < o; c++)
    l += Math.round(t(c / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${l.substring(0, l.length - 2)})`;
}, Lo = 2e4;
function dd(t) {
  let n = 0;
  const r = 50;
  let l = t.next(n);
  for (; !l.done && n < Lo; )
    n += r, l = t.next(n);
  return n >= Lo ? 1 / 0 : n;
}
function NC(t, n = 100, r) {
  const l = r({ ...t, keyframes: [0, n] }), o = Math.min(dd(l), Lo);
  return {
    type: "keyframes",
    ease: (c) => l.next(o * c).value / n,
    duration: /* @__PURE__ */ yn(o)
  };
}
const BC = 5;
function Av(t, n, r) {
  const l = Math.max(n - BC, 0);
  return nv(r - t(l), n - l);
}
const ne = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Lf = 1e-3;
function UC({ duration: t = ne.duration, bounce: n = ne.bounce, velocity: r = ne.velocity, mass: l = ne.mass }) {
  let o, c, u = 1 - n;
  u = Ln(ne.minDamping, ne.maxDamping, u), t = Ln(ne.minDuration, ne.maxDuration, /* @__PURE__ */ yn(t)), u < 1 ? (o = (d) => {
    const g = d * u, y = g * t, v = g - r, x = gh(d, u), S = Math.exp(-y);
    return Lf - v / x * S;
  }, c = (d) => {
    const y = d * u * t, v = y * r + r, x = Math.pow(u, 2) * Math.pow(d, 2) * t, S = Math.exp(-y), w = gh(Math.pow(d, 2), u);
    return (-o(d) + Lf > 0 ? -1 : 1) * ((v - x) * S) / w;
  }) : (o = (d) => {
    const g = Math.exp(-d * t), y = (d - r) * t + 1;
    return -Lf + g * y;
  }, c = (d) => {
    const g = Math.exp(-d * t), y = (r - d) * (t * t);
    return g * y;
  });
  const h = 5 / t, m = jC(o, c, h);
  if (t = /* @__PURE__ */ ii(t), isNaN(m))
    return {
      stiffness: ne.stiffness,
      damping: ne.damping,
      duration: t
    };
  {
    const d = Math.pow(m, 2) * l;
    return {
      stiffness: d,
      damping: u * 2 * Math.sqrt(l * d),
      duration: t
    };
  }
}
const VC = 12;
function jC(t, n, r) {
  let l = r;
  for (let o = 1; o < VC; o++)
    l = l - t(l) / n(l);
  return l;
}
function gh(t, n) {
  return t * Math.sqrt(1 - n * n);
}
const HC = ["duration", "bounce"], qC = ["stiffness", "damping", "mass"];
function w0(t, n) {
  return n.some((r) => t[r] !== void 0);
}
function FC(t) {
  let n = {
    velocity: ne.velocity,
    stiffness: ne.stiffness,
    damping: ne.damping,
    mass: ne.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!w0(t, qC) && w0(t, HC))
    if (t.visualDuration) {
      const r = t.visualDuration, l = 2 * Math.PI / (r * 1.2), o = l * l, c = 2 * Ln(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
      n = {
        ...n,
        mass: ne.mass,
        stiffness: o,
        damping: c
      };
    } else {
      const r = UC(t);
      n = {
        ...n,
        ...r,
        mass: ne.mass
      }, n.isResolvedFromDuration = !0;
    }
  return n;
}
function No(t = ne.visualDuration, n = ne.bounce) {
  const r = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: n
  } : t;
  let { restSpeed: l, restDelta: o } = r;
  const c = r.keyframes[0], u = r.keyframes[r.keyframes.length - 1], h = { done: !1, value: c }, { stiffness: m, damping: d, mass: g, duration: y, velocity: v, isResolvedFromDuration: x } = FC({
    ...r,
    velocity: -/* @__PURE__ */ yn(r.velocity || 0)
  }), S = v || 0, w = d / (2 * Math.sqrt(m * g)), A = u - c, C = /* @__PURE__ */ yn(Math.sqrt(m / g)), L = Math.abs(A) < 5;
  l || (l = L ? ne.restSpeed.granular : ne.restSpeed.default), o || (o = L ? ne.restDelta.granular : ne.restDelta.default);
  let M;
  if (w < 1) {
    const Q = gh(C, w);
    M = (_) => {
      const Z = Math.exp(-w * C * _);
      return u - Z * ((S + w * C * A) / Q * Math.sin(Q * _) + A * Math.cos(Q * _));
    };
  } else if (w === 1)
    M = (Q) => u - Math.exp(-C * Q) * (A + (S + C * A) * Q);
  else {
    const Q = C * Math.sqrt(w * w - 1);
    M = (_) => {
      const Z = Math.exp(-w * C * _), J = Math.min(Q * _, 300);
      return u - Z * ((S + w * C * A) * Math.sinh(J) + Q * A * Math.cosh(J)) / Q;
    };
  }
  const Y = {
    calculatedDuration: x && y || null,
    next: (Q) => {
      const _ = M(Q);
      if (x)
        h.done = Q >= y;
      else {
        let Z = Q === 0 ? S : 0;
        w < 1 && (Z = Q === 0 ? /* @__PURE__ */ ii(S) : Av(M, Q, _));
        const J = Math.abs(Z) <= l, lt = Math.abs(u - _) <= o;
        h.done = J && lt;
      }
      return h.value = h.done ? u : _, h;
    },
    toString: () => {
      const Q = Math.min(dd(Y), Lo), _ = Ev((Z) => Y.next(Q * Z).value, Q, 30);
      return Q + "ms " + _;
    },
    toTransition: () => {
    }
  };
  return Y;
}
No.applyToOptions = (t) => {
  const n = NC(t, 100, No);
  return t.ease = n.ease, t.duration = /* @__PURE__ */ ii(n.duration), t.type = "keyframes", t;
};
function yh({ keyframes: t, velocity: n = 0, power: r = 0.8, timeConstant: l = 325, bounceDamping: o = 10, bounceStiffness: c = 500, modifyTarget: u, min: h, max: m, restDelta: d = 0.5, restSpeed: g }) {
  const y = t[0], v = {
    done: !1,
    value: y
  }, x = (J) => h !== void 0 && J < h || m !== void 0 && J > m, S = (J) => h === void 0 ? m : m === void 0 || Math.abs(h - J) < Math.abs(m - J) ? h : m;
  let w = r * n;
  const A = y + w, C = u === void 0 ? A : u(A);
  C !== A && (w = C - y);
  const L = (J) => -w * Math.exp(-J / l), M = (J) => C + L(J), Y = (J) => {
    const lt = L(J), B = M(J);
    v.done = Math.abs(lt) <= d, v.value = v.done ? C : B;
  };
  let Q, _;
  const Z = (J) => {
    x(v.value) && (Q = J, _ = No({
      keyframes: [v.value, S(v.value)],
      velocity: Av(M, J, v.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: c,
      restDelta: d,
      restSpeed: g
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (J) => {
      let lt = !1;
      return !_ && Q === void 0 && (lt = !0, Y(J), Z(J)), Q !== void 0 && J >= Q ? _.next(J - Q) : (!lt && Y(J), v);
    }
  };
}
function PC(t, n, r) {
  const l = [], o = r || ri.mix || Tv, c = t.length - 1;
  for (let u = 0; u < c; u++) {
    let h = o(t[u], t[u + 1]);
    if (n) {
      const m = Array.isArray(n) ? n[u] || bn : n;
      h = Fa(m, h);
    }
    l.push(h);
  }
  return l;
}
function YC(t, n, { clamp: r = !0, ease: l, mixer: o } = {}) {
  const c = t.length;
  if (rd(c === n.length), c === 1)
    return () => n[0];
  if (c === 2 && n[0] === n[1])
    return () => n[1];
  const u = t[0] === t[1];
  t[0] > t[c - 1] && (t = [...t].reverse(), n = [...n].reverse());
  const h = PC(n, l, o), m = h.length, d = (g) => {
    if (u && g < t[0])
      return n[0];
    let y = 0;
    if (m > 1)
      for (; y < t.length - 2 && !(g < t[y + 1]); y++)
        ;
    const v = /* @__PURE__ */ Ma(t[y], t[y + 1], g);
    return h[y](v);
  };
  return r ? (g) => d(Ln(t[0], t[c - 1], g)) : d;
}
function GC(t, n) {
  const r = t[t.length - 1];
  for (let l = 1; l <= n; l++) {
    const o = /* @__PURE__ */ Ma(0, n, l);
    t.push(Wt(r, 1, o));
  }
}
function XC(t) {
  const n = [0];
  return GC(n, t.length - 1), n;
}
function IC(t, n) {
  return t.map((r) => r * n);
}
function KC(t, n) {
  return t.map(() => n || fv).splice(0, t.length - 1);
}
function Aa({ duration: t = 300, keyframes: n, times: r, ease: l = "easeInOut" }) {
  const o = lC(l) ? l.map(v0) : v0(l), c = {
    done: !1,
    value: n[0]
  }, u = IC(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === n.length ? r : XC(n),
    t
  ), h = YC(u, n, {
    ease: Array.isArray(o) ? o : KC(n, o)
  });
  return {
    calculatedDuration: t,
    next: (m) => (c.value = h(m), c.done = m >= t, c)
  };
}
const QC = (t) => t !== null;
function md(t, { repeat: n, repeatType: r = "loop" }, l, o = 1) {
  const c = t.filter(QC), h = o < 0 || n && r !== "loop" && n % 2 === 1 ? 0 : c.length - 1;
  return !h || l === void 0 ? c[h] : l;
}
const ZC = {
  decay: yh,
  inertia: yh,
  tween: Aa,
  keyframes: Aa,
  spring: No
};
function wv(t) {
  typeof t.type == "string" && (t.type = ZC[t.type]);
}
class pd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((n) => {
      this.resolve = n;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(n, r) {
    return this.finished.then(n, r);
  }
}
const JC = (t) => t / 100;
class gd extends pd {
  constructor(n) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== _e.now() && this.tick(_e.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = n, this.initAnimation(), this.play(), n.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: n } = this;
    wv(n);
    const { type: r = Aa, repeat: l = 0, repeatDelay: o = 0, repeatType: c, velocity: u = 0 } = n;
    let { keyframes: h } = n;
    const m = r || Aa;
    m !== Aa && typeof h[0] != "number" && (this.mixKeyframes = Fa(JC, Tv(h[0], h[1])), h = [0, 100]);
    const d = m({ ...n, keyframes: h });
    c === "mirror" && (this.mirroredGenerator = m({
      ...n,
      keyframes: [...h].reverse(),
      velocity: -u
    })), d.calculatedDuration === null && (d.calculatedDuration = dd(d));
    const { calculatedDuration: g } = d;
    this.calculatedDuration = g, this.resolvedDuration = g + o, this.totalDuration = this.resolvedDuration * (l + 1) - o, this.generator = d;
  }
  updateTime(n) {
    const r = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(n, r = !1) {
    const { generator: l, totalDuration: o, mixKeyframes: c, mirroredGenerator: u, resolvedDuration: h, calculatedDuration: m } = this;
    if (this.startTime === null)
      return l.next(0);
    const { delay: d = 0, keyframes: g, repeat: y, repeatType: v, repeatDelay: x, type: S, onUpdate: w, finalKeyframe: A } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - o / this.speed, this.startTime)), r ? this.currentTime = n : this.updateTime(n);
    const C = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), L = this.playbackSpeed >= 0 ? C < 0 : C > o;
    this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let M = this.currentTime, Y = l;
    if (y) {
      const J = Math.min(this.currentTime, o) / h;
      let lt = Math.floor(J), B = J % 1;
      !B && J >= 1 && (B = 1), B === 1 && lt--, lt = Math.min(lt, y + 1), lt % 2 && (v === "reverse" ? (B = 1 - B, x && (B -= x / h)) : v === "mirror" && (Y = u)), M = Ln(0, 1, B) * h;
    }
    const Q = L ? { done: !1, value: g[0] } : Y.next(M);
    c && (Q.value = c(Q.value));
    let { done: _ } = Q;
    !L && m !== null && (_ = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && _);
    return Z && S !== yh && (Q.value = md(g, this.options, A, this.speed)), w && w(Q.value), Z && this.finish(), Q;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(n, r) {
    return this.finished.then(n, r);
  }
  get duration() {
    return /* @__PURE__ */ yn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ yn(n);
  }
  get time() {
    return /* @__PURE__ */ yn(this.currentTime);
  }
  set time(n) {
    n = /* @__PURE__ */ ii(n), this.currentTime = n, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(_e.now());
    const r = this.playbackSpeed !== n;
    this.playbackSpeed = n, r && (this.time = /* @__PURE__ */ yn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: n = LC, startTime: r } = this.options;
    this.driver || (this.driver = n((o) => this.tick(o))), this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = r ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(_e.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(n) {
    return this.startTime = 0, this.tick(n, !0);
  }
  attachTimeline(n) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), n.observe(this);
  }
}
function $C(t) {
  for (let n = 1; n < t.length; n++)
    t[n] ?? (t[n] = t[n - 1]);
}
const sr = (t) => t * 180 / Math.PI, bh = (t) => {
  const n = sr(Math.atan2(t[1], t[0]));
  return vh(n);
}, WC = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: bh,
  rotateZ: bh,
  skewX: (t) => sr(Math.atan(t[1])),
  skewY: (t) => sr(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, vh = (t) => (t = t % 360, t < 0 && (t += 360), t), C0 = bh, k0 = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), D0 = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), t2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: k0,
  scaleY: D0,
  scale: (t) => (k0(t) + D0(t)) / 2,
  rotateX: (t) => vh(sr(Math.atan2(t[6], t[5]))),
  rotateY: (t) => vh(sr(Math.atan2(-t[2], t[0]))),
  rotateZ: C0,
  rotate: C0,
  skewX: (t) => sr(Math.atan(t[4])),
  skewY: (t) => sr(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function xh(t) {
  return t.includes("scale") ? 1 : 0;
}
function Sh(t, n) {
  if (!t || t === "none")
    return xh(n);
  const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, o;
  if (r)
    l = t2, o = r;
  else {
    const h = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    l = WC, o = h;
  }
  if (!o)
    return xh(n);
  const c = l[n], u = o[1].split(",").map(n2);
  return typeof c == "function" ? c(u) : u[c];
}
const e2 = (t, n) => {
  const { transform: r = "none" } = getComputedStyle(t);
  return Sh(r, n);
};
function n2(t) {
  return parseFloat(t.trim());
}
const gl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], yl = new Set(gl), R0 = (t) => t === pl || t === ut, i2 = /* @__PURE__ */ new Set(["x", "y", "z"]), r2 = gl.filter((t) => !i2.has(t));
function l2(t) {
  const n = [];
  return r2.forEach((r) => {
    const l = t.getValue(r);
    l !== void 0 && (n.push([r, l.get()]), l.set(r.startsWith("scale") ? 1 : 0));
  }), n;
}
const _i = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: n = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(n) - parseFloat(r),
  height: ({ y: t }, { paddingTop: n = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(n) - parseFloat(r),
  top: (t, { top: n }) => parseFloat(n),
  left: (t, { left: n }) => parseFloat(n),
  bottom: ({ y: t }, { top: n }) => parseFloat(n) + (t.max - t.min),
  right: ({ x: t }, { left: n }) => parseFloat(n) + (t.max - t.min),
  // Transform
  x: (t, { transform: n }) => Sh(n, "x"),
  y: (t, { transform: n }) => Sh(n, "y")
};
_i.translateX = _i.x;
_i.translateY = _i.y;
const ur = /* @__PURE__ */ new Set();
let Th = !1, Eh = !1, Ah = !1;
function Cv() {
  if (Eh) {
    const t = Array.from(ur).filter((l) => l.needsMeasurement), n = new Set(t.map((l) => l.element)), r = /* @__PURE__ */ new Map();
    n.forEach((l) => {
      const o = l2(l);
      o.length && (r.set(l, o), l.render());
    }), t.forEach((l) => l.measureInitialState()), n.forEach((l) => {
      l.render();
      const o = r.get(l);
      o && o.forEach(([c, u]) => {
        l.getValue(c)?.set(u);
      });
    }), t.forEach((l) => l.measureEndState()), t.forEach((l) => {
      l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
    });
  }
  Eh = !1, Th = !1, ur.forEach((t) => t.complete(Ah)), ur.clear();
}
function kv() {
  ur.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Eh = !0);
  });
}
function a2() {
  Ah = !0, kv(), Cv(), Ah = !1;
}
class yd {
  constructor(n, r, l, o, c, u = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = r, this.name = l, this.motionValue = o, this.element = c, this.isAsync = u;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ur.add(this), Th || (Th = !0, Zt.read(kv), Zt.resolveKeyframes(Cv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, name: r, element: l, motionValue: o } = this;
    if (n[0] === null) {
      const c = o?.get(), u = n[n.length - 1];
      if (c !== void 0)
        n[0] = c;
      else if (l && r) {
        const h = l.readValue(r, u);
        h != null && (n[0] = h);
      }
      n[0] === void 0 && (n[0] = u), o && c === void 0 && o.set(n[0]);
    }
    $C(n);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(n = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), ur.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ur.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const s2 = (t) => t.startsWith("--");
function o2(t, n, r) {
  s2(n) ? t.style.setProperty(n, r) : t.style[n] = r;
}
const u2 = /* @__PURE__ */ ld(() => window.ScrollTimeline !== void 0), c2 = {};
function f2(t, n) {
  const r = /* @__PURE__ */ ld(t);
  return () => c2[n] ?? r();
}
const Dv = /* @__PURE__ */ f2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Sa = ([t, n, r, l]) => `cubic-bezier(${t}, ${n}, ${r}, ${l})`, M0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Sa([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Sa([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Sa([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Sa([0.33, 1.53, 0.69, 0.99])
};
function Rv(t, n) {
  if (t)
    return typeof t == "function" ? Dv() ? Ev(t, n) : "ease-out" : hv(t) ? Sa(t) : Array.isArray(t) ? t.map((r) => Rv(r, n) || M0.easeOut) : M0[t];
}
function h2(t, n, r, { delay: l = 0, duration: o = 300, repeat: c = 0, repeatType: u = "loop", ease: h = "easeOut", times: m } = {}, d = void 0) {
  const g = {
    [n]: r
  };
  m && (g.offset = m);
  const y = Rv(h, o);
  Array.isArray(y) && (g.easing = y);
  const v = {
    delay: l,
    duration: o,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: c + 1,
    direction: u === "reverse" ? "alternate" : "normal"
  };
  return d && (v.pseudoElement = d), t.animate(g, v);
}
function Mv(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function d2({ type: t, ...n }) {
  return Mv(t) && Dv() ? t.applyToOptions(n) : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = "easeOut"), n);
}
class m2 extends pd {
  constructor(n) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !n)
      return;
    const { element: r, name: l, keyframes: o, pseudoElement: c, allowFlatten: u = !1, finalKeyframe: h, onComplete: m } = n;
    this.isPseudoElement = !!c, this.allowFlatten = u, this.options = n, rd(typeof n.type != "string");
    const d = d2(n);
    this.animation = h2(r, l, o, d, c), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !c) {
        const g = md(o, this.options, h, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : o2(r, l, g), this.animation.cancel();
      }
      m?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: n } = this;
    n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const n = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ yn(Number(n));
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ yn(n);
  }
  get time() {
    return /* @__PURE__ */ yn(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ii(n);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(n) {
    n < 0 && (this.finishedTime = null), this.animation.playbackRate = n;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(n) {
    this.manualStartTime = this.animation.startTime = n;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: n, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, n && u2() ? (this.animation.timeline = n, bn) : r(this);
  }
}
const Ov = {
  anticipate: ov,
  backInOut: sv,
  circInOut: cv
};
function p2(t) {
  return t in Ov;
}
function g2(t) {
  typeof t.ease == "string" && p2(t.ease) && (t.ease = Ov[t.ease]);
}
const Nf = 10;
class y2 extends m2 {
  constructor(n) {
    g2(n), wv(n), super(n), n.startTime !== void 0 && (this.startTime = n.startTime), this.options = n;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(n) {
    const { motionValue: r, onUpdate: l, onComplete: o, element: c, ...u } = this.options;
    if (!r)
      return;
    if (n !== void 0) {
      r.set(n);
      return;
    }
    const h = new gd({
      ...u,
      autoplay: !1
    }), m = Math.max(Nf, _e.now() - this.startTime), d = Ln(0, Nf, m - Nf);
    r.setWithVelocity(h.sample(Math.max(0, m - d)).value, h.sample(m).value, d), h.stop();
  }
}
const O0 = (t, n) => n === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Ni.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function b2(t) {
  const n = t[0];
  if (t.length === 1)
    return !0;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== n)
      return !0;
}
function v2(t, n, r, l) {
  const o = t[0];
  if (o === null)
    return !1;
  if (n === "display" || n === "visibility")
    return !0;
  const c = t[t.length - 1], u = O0(o, n), h = O0(c, n);
  return !u || !h ? !1 : b2(t) || (r === "spring" || Mv(r)) && l;
}
function wh(t) {
  t.duration = 0, t.type = "keyframes";
}
const x2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), S2 = /* @__PURE__ */ ld(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function T2(t) {
  const { motionValue: n, name: r, repeatDelay: l, repeatType: o, damping: c, type: u } = t;
  if (!(n?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: m, transformTemplate: d } = n.owner.getProps();
  return S2() && r && x2.has(r) && (r !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !l && o !== "mirror" && c !== 0 && u !== "inertia";
}
const E2 = 40;
class A2 extends pd {
  constructor({ autoplay: n = !0, delay: r = 0, type: l = "keyframes", repeat: o = 0, repeatDelay: c = 0, repeatType: u = "loop", keyframes: h, name: m, motionValue: d, element: g, ...y }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = _e.now();
    const v = {
      autoplay: n,
      delay: r,
      type: l,
      repeat: o,
      repeatDelay: c,
      repeatType: u,
      name: m,
      motionValue: d,
      element: g,
      ...y
    }, x = g?.KeyframeResolver || yd;
    this.keyframeResolver = new x(h, (S, w, A) => this.onKeyframesResolved(S, w, v, !A), m, d, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(n, r, l, o) {
    this.keyframeResolver = void 0;
    const { name: c, type: u, velocity: h, delay: m, isHandoff: d, onUpdate: g } = l;
    this.resolvedAt = _e.now(), v2(n, c, u, h) || ((ri.instantAnimations || !m) && g?.(md(n, l, r)), n[0] = n[n.length - 1], wh(l), l.repeat = 0);
    const v = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > E2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...l,
      keyframes: n
    }, x = !d && T2(v), S = v.motionValue?.owner?.current, w = x ? new y2({
      ...v,
      element: S
    }) : new gd(v);
    w.finished.then(() => {
      this.notifyFinished();
    }).catch(bn), this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, r) {
    return this.finished.finally(n).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), a2()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(n) {
    this.animation.time = n;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(n) {
    this.animation.speed = n;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(n) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function zv(t, n, r, l = 0, o = 1) {
  const c = Array.from(t).sort((d, g) => d.sortNodePosition(g)).indexOf(n), u = t.size, h = (u - 1) * l;
  return typeof r == "function" ? r(c, u) : o === 1 ? c * l : h - c * l;
}
const w2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function C2(t) {
  const n = w2.exec(t);
  if (!n)
    return [,];
  const [, r, l, o] = n;
  return [`--${r ?? l}`, o];
}
function _v(t, n, r = 1) {
  const [l, o] = C2(t);
  if (!l)
    return;
  const c = window.getComputedStyle(n).getPropertyValue(l);
  if (c) {
    const u = c.trim();
    return Wb(u) ? parseFloat(u) : u;
  }
  return ud(o) ? _v(o, n, r + 1) : o;
}
const k2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, D2 = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), R2 = {
  type: "keyframes",
  duration: 0.8
}, M2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, O2 = (t, { keyframes: n }) => n.length > 2 ? R2 : yl.has(t) ? t.startsWith("scale") ? D2(n[1]) : k2 : M2, z2 = (t) => t !== null;
function _2(t, { repeat: n, repeatType: r = "loop" }, l) {
  const o = t.filter(z2), c = n && r !== "loop" && n % 2 === 1 ? 0 : o.length - 1;
  return o[c];
}
function bd(t, n) {
  return t?.[n] ?? t?.default ?? t;
}
function L2({ when: t, delay: n, delayChildren: r, staggerChildren: l, staggerDirection: o, repeat: c, repeatType: u, repeatDelay: h, from: m, elapsed: d, ...g }) {
  return !!Object.keys(g).length;
}
const vd = (t, n, r, l = {}, o, c) => (u) => {
  const h = bd(l, t) || {}, m = h.delay || l.delay || 0;
  let { elapsed: d = 0 } = l;
  d = d - /* @__PURE__ */ ii(m);
  const g = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: n.getVelocity(),
    ...h,
    delay: -d,
    onUpdate: (v) => {
      n.set(v), h.onUpdate && h.onUpdate(v);
    },
    onComplete: () => {
      u(), h.onComplete && h.onComplete();
    },
    name: t,
    motionValue: n,
    element: c ? void 0 : o
  };
  L2(h) || Object.assign(g, O2(t, g)), g.duration && (g.duration = /* @__PURE__ */ ii(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ ii(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (wh(g), g.delay === 0 && (y = !0)), (ri.instantAnimations || ri.skipAnimations) && (y = !0, wh(g), g.delay = 0), g.allowFlatten = !h.type && !h.ease, y && !c && n.get() !== void 0) {
    const v = _2(g.keyframes, h);
    if (v !== void 0) {
      Zt.update(() => {
        g.onUpdate(v), g.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new gd(g) : new A2(g);
};
function z0(t) {
  const n = [{}, {}];
  return t?.values.forEach((r, l) => {
    n[0][l] = r.get(), n[1][l] = r.getVelocity();
  }), n;
}
function xd(t, n, r, l) {
  if (typeof n == "function") {
    const [o, c] = z0(l);
    n = n(r !== void 0 ? r : t.custom, o, c);
  }
  if (typeof n == "string" && (n = t.variants && t.variants[n]), typeof n == "function") {
    const [o, c] = z0(l);
    n = n(r !== void 0 ? r : t.custom, o, c);
  }
  return n;
}
function ol(t, n, r) {
  const l = t.getProps();
  return xd(l, n, r !== void 0 ? r : l.custom, t);
}
const Lv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...gl
]), _0 = 30, N2 = (t) => !isNaN(parseFloat(t));
class B2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(n, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l) => {
      const o = _e.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
    }, this.hasAnimated = !1, this.setCurrent(n), this.owner = r.owner;
  }
  setCurrent(n) {
    this.current = n, this.updatedAt = _e.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = N2(this.current));
  }
  setPrevFrameValue(n = this.current) {
    this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(n) {
    return this.on("change", n);
  }
  on(n, r) {
    this.events[n] || (this.events[n] = new ad());
    const l = this.events[n].add(r);
    return n === "change" ? () => {
      l(), Zt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : l;
  }
  clearListeners() {
    for (const n in this.events)
      this.events[n].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(n, r) {
    this.passiveEffect = n, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(n) {
    this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n);
  }
  setWithVelocity(n, r, l) {
    this.set(r), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - l;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n, r = !0) {
    this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(n) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(n);
  }
  removeDependent(n) {
    this.dependents && this.dependents.delete(n);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const n = _e.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > _0)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, _0);
    return nv(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(n) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = n(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function fl(t, n) {
  return new B2(t, n);
}
const Ch = (t) => Array.isArray(t);
function U2(t, n, r) {
  t.hasValue(n) ? t.getValue(n).set(r) : t.addValue(n, fl(r));
}
function V2(t) {
  return Ch(t) ? t[t.length - 1] || 0 : t;
}
function j2(t, n) {
  const r = ol(t, n);
  let { transitionEnd: l = {}, transition: o = {}, ...c } = r || {};
  c = { ...c, ...l };
  for (const u in c) {
    const h = V2(c[u]);
    U2(t, u, h);
  }
}
const Ce = (t) => !!(t && t.getVelocity);
function H2(t) {
  return !!(Ce(t) && t.add);
}
function kh(t, n) {
  const r = t.getValue("willChange");
  if (H2(r))
    return r.add(n);
  if (!r && ri.WillChange) {
    const l = new ri.WillChange("auto");
    t.addValue("willChange", l), l.add(n);
  }
}
function Sd(t) {
  return t.replace(/([A-Z])/g, (n) => `-${n.toLowerCase()}`);
}
const q2 = "framerAppearId", Nv = "data-" + Sd(q2);
function Bv(t) {
  return t.props[Nv];
}
function F2({ protectedKeys: t, needsAnimating: n }, r) {
  const l = t.hasOwnProperty(r) && n[r] !== !0;
  return n[r] = !1, l;
}
function Uv(t, n, { delay: r = 0, transitionOverride: l, type: o } = {}) {
  let { transition: c = t.getDefaultTransition(), transitionEnd: u, ...h } = n;
  const m = c?.reduceMotion;
  l && (c = l);
  const d = [], g = o && t.animationState && t.animationState.getState()[o];
  for (const y in h) {
    const v = t.getValue(y, t.latestValues[y] ?? null), x = h[y];
    if (x === void 0 || g && F2(g, y))
      continue;
    const S = {
      delay: r,
      ...bd(c || {}, y)
    }, w = v.get();
    if (w !== void 0 && !v.isAnimating && !Array.isArray(x) && x === w && !S.velocity)
      continue;
    let A = !1;
    if (window.MotionHandoffAnimation) {
      const M = Bv(t);
      if (M) {
        const Y = window.MotionHandoffAnimation(M, y, Zt);
        Y !== null && (S.startTime = Y, A = !0);
      }
    }
    kh(t, y);
    const C = m ?? t.shouldReduceMotion;
    v.start(vd(y, v, x, C && Lv.has(y) ? { type: !1 } : S, t, A));
    const L = v.animation;
    L && d.push(L);
  }
  return u && Promise.all(d).then(() => {
    Zt.update(() => {
      u && j2(t, u);
    });
  }), d;
}
function Dh(t, n, r = {}) {
  const l = ol(t, n, r.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = l || {};
  r.transitionOverride && (o = r.transitionOverride);
  const c = l ? () => Promise.all(Uv(t, l, r)) : () => Promise.resolve(), u = t.variantChildren && t.variantChildren.size ? (m = 0) => {
    const { delayChildren: d = 0, staggerChildren: g, staggerDirection: y } = o;
    return P2(t, n, m, d, g, y, r);
  } : () => Promise.resolve(), { when: h } = o;
  if (h) {
    const [m, d] = h === "beforeChildren" ? [c, u] : [u, c];
    return m().then(() => d());
  } else
    return Promise.all([c(), u(r.delay)]);
}
function P2(t, n, r = 0, l = 0, o = 0, c = 1, u) {
  const h = [];
  for (const m of t.variantChildren)
    m.notify("AnimationStart", n), h.push(Dh(m, n, {
      ...u,
      delay: r + (typeof l == "function" ? 0 : l) + zv(t.variantChildren, m, l, o, c)
    }).then(() => m.notify("AnimationComplete", n)));
  return Promise.all(h);
}
function Y2(t, n, r = {}) {
  t.notify("AnimationStart", n);
  let l;
  if (Array.isArray(n)) {
    const o = n.map((c) => Dh(t, c, r));
    l = Promise.all(o);
  } else if (typeof n == "string")
    l = Dh(t, n, r);
  else {
    const o = typeof n == "function" ? ol(t, n, r.custom) : n;
    l = Promise.all(Uv(t, o, r));
  }
  return l.then(() => {
    t.notify("AnimationComplete", n);
  });
}
const G2 = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Vv = (t) => (n) => n.test(t), jv = [pl, ut, _n, zi, bC, yC, G2], L0 = (t) => jv.find(Vv(t));
function X2(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ev(t) : !0;
}
const I2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function K2(t) {
  const [n, r] = t.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return t;
  const [l] = r.match(cd) || [];
  if (!l)
    return t;
  const o = r.replace(l, "");
  let c = I2.has(n) ? 1 : 0;
  return l !== r && (c *= 100), n + "(" + c + o + ")";
}
const Q2 = /\b([a-z-]*)\(.*?\)/gu, Rh = {
  ...Ni,
  getAnimatableNone: (t) => {
    const n = t.match(Q2);
    return n ? n.map(K2).join(" ") : t;
  }
}, N0 = {
  ...pl,
  transform: Math.round
}, Z2 = {
  rotate: zi,
  rotateX: zi,
  rotateY: zi,
  rotateZ: zi,
  scale: yo,
  scaleX: yo,
  scaleY: yo,
  scaleZ: yo,
  skew: zi,
  skewX: zi,
  skewY: zi,
  distance: ut,
  translateX: ut,
  translateY: ut,
  translateZ: ut,
  x: ut,
  y: ut,
  z: ut,
  perspective: ut,
  transformPerspective: ut,
  opacity: Oa,
  originX: S0,
  originY: S0,
  originZ: ut
}, Td = {
  // Border props
  borderWidth: ut,
  borderTopWidth: ut,
  borderRightWidth: ut,
  borderBottomWidth: ut,
  borderLeftWidth: ut,
  borderRadius: ut,
  borderTopLeftRadius: ut,
  borderTopRightRadius: ut,
  borderBottomRightRadius: ut,
  borderBottomLeftRadius: ut,
  // Positioning props
  width: ut,
  maxWidth: ut,
  height: ut,
  maxHeight: ut,
  top: ut,
  right: ut,
  bottom: ut,
  left: ut,
  inset: ut,
  insetBlock: ut,
  insetBlockStart: ut,
  insetBlockEnd: ut,
  insetInline: ut,
  insetInlineStart: ut,
  insetInlineEnd: ut,
  // Spacing props
  padding: ut,
  paddingTop: ut,
  paddingRight: ut,
  paddingBottom: ut,
  paddingLeft: ut,
  paddingBlock: ut,
  paddingBlockStart: ut,
  paddingBlockEnd: ut,
  paddingInline: ut,
  paddingInlineStart: ut,
  paddingInlineEnd: ut,
  margin: ut,
  marginTop: ut,
  marginRight: ut,
  marginBottom: ut,
  marginLeft: ut,
  marginBlock: ut,
  marginBlockStart: ut,
  marginBlockEnd: ut,
  marginInline: ut,
  marginInlineStart: ut,
  marginInlineEnd: ut,
  // Typography
  fontSize: ut,
  // Misc
  backgroundPositionX: ut,
  backgroundPositionY: ut,
  ...Z2,
  zIndex: N0,
  // SVG
  fillOpacity: Oa,
  strokeOpacity: Oa,
  numOctaves: N0
}, J2 = {
  ...Td,
  // Color props
  color: fe,
  backgroundColor: fe,
  outlineColor: fe,
  fill: fe,
  stroke: fe,
  // Border props
  borderColor: fe,
  borderTopColor: fe,
  borderRightColor: fe,
  borderBottomColor: fe,
  borderLeftColor: fe,
  filter: Rh,
  WebkitFilter: Rh
}, Hv = (t) => J2[t];
function qv(t, n) {
  let r = Hv(t);
  return r !== Rh && (r = Ni), r.getAnimatableNone ? r.getAnimatableNone(n) : void 0;
}
const $2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function W2(t, n, r) {
  let l = 0, o;
  for (; l < t.length && !o; ) {
    const c = t[l];
    typeof c == "string" && !$2.has(c) && za(c).values.length && (o = t[l]), l++;
  }
  if (o && r)
    for (const c of n)
      t[c] = qv(r, o);
}
class tk extends yd {
  constructor(n, r, l, o, c) {
    super(n, r, l, o, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: r, name: l } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < n.length; g++) {
      let y = n[g];
      if (typeof y == "string" && (y = y.trim(), ud(y))) {
        const v = _v(y, r.current);
        v !== void 0 && (n[g] = v), g === n.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !Lv.has(l) || n.length !== 2)
      return;
    const [o, c] = n, u = L0(o), h = L0(c), m = x0(o), d = x0(c);
    if (m !== d && _i[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (u !== h)
      if (R0(u) && R0(h))
        for (let g = 0; g < n.length; g++) {
          const y = n[g];
          typeof y == "string" && (n[g] = parseFloat(y));
        }
      else _i[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: r } = this, l = [];
    for (let o = 0; o < n.length; o++)
      (n[o] === null || X2(n[o])) && l.push(o);
    l.length && W2(n, l, r);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: r, name: l } = this;
    if (!n || !n.current)
      return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = _i[l](n.measureViewportBox(), window.getComputedStyle(n.current)), r[0] = this.measuredOrigin;
    const o = r[r.length - 1];
    o !== void 0 && n.getValue(l, o).jump(o, !1);
  }
  measureEndState() {
    const { element: n, name: r, unresolvedKeyframes: l } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const c = l.length - 1, u = l[c];
    l[c] = _i[r](n.measureViewportBox(), window.getComputedStyle(n.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), this.removedTransforms?.length && this.removedTransforms.forEach(([h, m]) => {
      n.getValue(h).set(m);
    }), this.resolveNoneKeyframes();
  }
}
function ek(t, n, r) {
  if (t == null)
    return [];
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let l = document;
    const o = r?.[t] ?? l.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t).filter((l) => l != null);
}
const Fv = (t, n) => n && typeof t == "number" ? n.transform(t) : t;
function Mh(t) {
  return tv(t) && "offsetHeight" in t;
}
const { schedule: Ed } = /* @__PURE__ */ dv(queueMicrotask, !1), An = {
  x: !1,
  y: !1
};
function Pv() {
  return An.x || An.y;
}
function nk(t) {
  return t === "x" || t === "y" ? An[t] ? null : (An[t] = !0, () => {
    An[t] = !1;
  }) : An.x || An.y ? null : (An.x = An.y = !0, () => {
    An.x = An.y = !1;
  });
}
function Yv(t, n) {
  const r = ek(t), l = new AbortController(), o = {
    passive: !0,
    ...n,
    signal: l.signal
  };
  return [r, o, () => l.abort()];
}
function B0(t) {
  return !(t.pointerType === "touch" || Pv());
}
function ik(t, n, r = {}) {
  const [l, o, c] = Yv(t, r), u = (h) => {
    if (!B0(h))
      return;
    const { target: m } = h, d = n(m, h);
    if (typeof d != "function" || !m)
      return;
    const g = (y) => {
      B0(y) && (d(y), m.removeEventListener("pointerleave", g));
    };
    m.addEventListener("pointerleave", g, o);
  };
  return l.forEach((h) => {
    h.addEventListener("pointerenter", u, o);
  }), c;
}
const Gv = (t, n) => n ? t === n ? !0 : Gv(t, n.parentElement) : !1, Ad = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, rk = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Xv(t) {
  return rk.has(t.tagName) || t.isContentEditable === !0;
}
const Do = /* @__PURE__ */ new WeakSet();
function U0(t) {
  return (n) => {
    n.key === "Enter" && t(n);
  };
}
function Bf(t, n) {
  t.dispatchEvent(new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }));
}
const lk = (t, n) => {
  const r = t.currentTarget;
  if (!r)
    return;
  const l = U0(() => {
    if (Do.has(r))
      return;
    Bf(r, "down");
    const o = U0(() => {
      Bf(r, "up");
    }), c = () => Bf(r, "cancel");
    r.addEventListener("keyup", o, n), r.addEventListener("blur", c, n);
  });
  r.addEventListener("keydown", l, n), r.addEventListener("blur", () => r.removeEventListener("keydown", l), n);
};
function V0(t) {
  return Ad(t) && !Pv();
}
function ak(t, n, r = {}) {
  const [l, o, c] = Yv(t, r), u = (h) => {
    const m = h.currentTarget;
    if (!V0(h))
      return;
    Do.add(m);
    const d = n(m, h), g = (x, S) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", v), Do.has(m) && Do.delete(m), V0(x) && typeof d == "function" && d(x, { success: S });
    }, y = (x) => {
      g(x, m === window || m === document || r.useGlobalTarget || Gv(m, x.target));
    }, v = (x) => {
      g(x, !1);
    };
    window.addEventListener("pointerup", y, o), window.addEventListener("pointercancel", v, o);
  };
  return l.forEach((h) => {
    (r.useGlobalTarget ? window : h).addEventListener("pointerdown", u, o), Mh(h) && (h.addEventListener("focus", (d) => lk(d, o)), !Xv(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), c;
}
function Iv(t) {
  return tv(t) && "ownerSVGElement" in t;
}
function sk(t) {
  return Iv(t) && t.tagName === "svg";
}
const ok = [...jv, fe, Ni], uk = (t) => ok.find(Vv(t)), j0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ll = () => ({
  x: j0(),
  y: j0()
}), H0 = () => ({ min: 0, max: 0 }), me = () => ({
  x: H0(),
  y: H0()
}), Oh = { current: null }, Kv = { current: !1 }, ck = typeof window < "u";
function fk() {
  if (Kv.current = !0, !!ck)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), n = () => Oh.current = t.matches;
      t.addEventListener("change", n), n();
    } else
      Oh.current = !1;
}
const hk = /* @__PURE__ */ new WeakMap();
function Jo(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function _a(t) {
  return typeof t == "string" || Array.isArray(t);
}
const wd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Cd = ["initial", ...wd];
function $o(t) {
  return Jo(t.animate) || Cd.some((n) => _a(t[n]));
}
function Qv(t) {
  return !!($o(t) || t.variants);
}
function dk(t, n, r) {
  for (const l in n) {
    const o = n[l], c = r[l];
    if (Ce(o))
      t.addValue(l, o);
    else if (Ce(c))
      t.addValue(l, fl(o, { owner: t }));
    else if (c !== o)
      if (t.hasValue(l)) {
        const u = t.getValue(l);
        u.liveStyle === !0 ? u.jump(o) : u.hasAnimated || u.set(o);
      } else {
        const u = t.getStaticValue(l);
        t.addValue(l, fl(u !== void 0 ? u : o, { owner: t }));
      }
  }
  for (const l in r)
    n[l] === void 0 && t.removeValue(l);
  return n;
}
const q0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Bo = {};
function Zv(t) {
  Bo = t;
}
function mk() {
  return Bo;
}
class pk {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, r, l) {
    return {};
  }
  constructor({ parent: n, props: r, presenceContext: l, reducedMotionConfig: o, blockInitialAnimation: c, visualState: u }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = yd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const v = _e.now();
      this.renderScheduledAt < v && (this.renderScheduledAt = v, Zt.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: d } = u;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = r.initial ? { ...m } : {}, this.renderState = d, this.parent = n, this.props = r, this.presenceContext = l, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = o, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = $o(r), this.isVariantNode = Qv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: g, ...y } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const v in y) {
      const x = y[v];
      m[v] !== void 0 && Ce(x) && x.set(m[v]);
    }
  }
  mount(n) {
    this.current = n, hk.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, l) => this.bindToMotionValue(l, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Kv.current || fk(), this.shouldReduceMotion = Oh.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Li(this.notifyUpdate), Li(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(n) {
    this.children.add(n), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(n);
  }
  removeChild(n) {
    this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n);
  }
  bindToMotionValue(n, r) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const l = yl.has(n);
    l && this.onBindTransform && this.onBindTransform();
    const o = r.on("change", (u) => {
      this.latestValues[n] = u, this.props.onUpdate && Zt.preRender(this.notifyUpdate), l && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let c;
    typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, r)), this.valueSubscriptions.set(n, () => {
      o(), c && c(), r.owner && r.stop();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in Bo) {
      const r = Bo[n];
      if (!r)
        continue;
      const { isEnabled: l, Feature: o } = r;
      if (!this.features[n] && o && l(this.props) && (this.features[n] = new o(this)), this.features[n]) {
        const c = this.features[n];
        c.isMounted ? c.update() : (c.mount(), c.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : me();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, r) {
    this.latestValues[n] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, r) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let l = 0; l < q0.length; l++) {
      const o = q0[l];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const c = "on" + o, u = n[c];
      u && (this.propEventSubscriptions[o] = this.on(o, u));
    }
    this.prevMotionValues = dk(this, this.scrapeMotionValuesFromProps(n, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(n) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(n), () => r.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, r) {
    const l = this.values.get(n);
    r !== l && (l && this.removeValue(n), this.bindToMotionValue(n, r), this.values.set(n, r), this.latestValues[n] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const r = this.valueSubscriptions.get(n);
    r && (r(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, r) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let l = this.values.get(n);
    return l === void 0 && r !== void 0 && (l = fl(r === null ? void 0 : r, { owner: this }), this.addValue(n, l)), l;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n, r) {
    let l = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
    return l != null && (typeof l == "string" && (Wb(l) || ev(l)) ? l = parseFloat(l) : !uk(l) && Ni.test(r) && (l = qv(n, r)), this.setBaseTarget(n, Ce(l) ? l.get() : l)), Ce(l) ? l.get() : l;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, r) {
    this.baseTarget[n] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    const { initial: r } = this.props;
    let l;
    if (typeof r == "string" || typeof r == "object") {
      const c = xd(this.props, r, this.presenceContext?.custom);
      c && (l = c[n]);
    }
    if (r && l !== void 0)
      return l;
    const o = this.getBaseTargetFromProps(this.props, n);
    return o !== void 0 && !Ce(o) ? o : this.initialValues[n] !== void 0 && l === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, r) {
    return this.events[n] || (this.events[n] = new ad()), this.events[n].add(r);
  }
  notify(n, ...r) {
    this.events[n] && this.events[n].notify(...r);
  }
  scheduleRenderMicrotask() {
    Ed.render(this.render);
  }
}
class Jv extends pk {
  constructor() {
    super(...arguments), this.KeyframeResolver = tk;
  }
  sortInstanceNodePosition(n, r) {
    return n.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, r) {
    const l = n.style;
    return l ? l[r] : void 0;
  }
  removeValueFromRenderState(n, { vars: r, style: l }) {
    delete r[n], delete l[n];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Ce(n) && (this.childSubscription = n.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class Bi {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
function $v({ top: t, left: n, right: r, bottom: l }) {
  return {
    x: { min: n, max: r },
    y: { min: t, max: l }
  };
}
function gk({ x: t, y: n }) {
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function yk(t, n) {
  if (!n)
    return t;
  const r = n({ x: t.left, y: t.top }), l = n({ x: t.right, y: t.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: l.y,
    right: l.x
  };
}
function Uf(t) {
  return t === void 0 || t === 1;
}
function zh({ scale: t, scaleX: n, scaleY: r }) {
  return !Uf(t) || !Uf(n) || !Uf(r);
}
function rr(t) {
  return zh(t) || Wv(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Wv(t) {
  return F0(t.x) || F0(t.y);
}
function F0(t) {
  return t && t !== "0%";
}
function Uo(t, n, r) {
  const l = t - r, o = n * l;
  return r + o;
}
function P0(t, n, r, l, o) {
  return o !== void 0 && (t = Uo(t, o, l)), Uo(t, r, l) + n;
}
function _h(t, n = 0, r = 1, l, o) {
  t.min = P0(t.min, n, r, l, o), t.max = P0(t.max, n, r, l, o);
}
function tx(t, { x: n, y: r }) {
  _h(t.x, n.translate, n.scale, n.originPoint), _h(t.y, r.translate, r.scale, r.originPoint);
}
const Y0 = 0.999999999999, G0 = 1.0000000000001;
function bk(t, n, r, l = !1) {
  const o = r.length;
  if (!o)
    return;
  n.x = n.y = 1;
  let c, u;
  for (let h = 0; h < o; h++) {
    c = r[h], u = c.projectionDelta;
    const { visualElement: m } = c.options;
    m && m.props.style && m.props.style.display === "contents" || (l && c.options.layoutScroll && c.scroll && c !== c.root && sl(t, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), u && (n.x *= u.x.scale, n.y *= u.y.scale, tx(t, u)), l && rr(c.latestValues) && sl(t, c.latestValues));
  }
  n.x < G0 && n.x > Y0 && (n.x = 1), n.y < G0 && n.y > Y0 && (n.y = 1);
}
function al(t, n) {
  t.min = t.min + n, t.max = t.max + n;
}
function X0(t, n, r, l, o = 0.5) {
  const c = Wt(t.min, t.max, o);
  _h(t, n, r, c, l);
}
function sl(t, n) {
  X0(t.x, n.x, n.scaleX, n.scale, n.originX), X0(t.y, n.y, n.scaleY, n.scale, n.originY);
}
function ex(t, n) {
  return $v(yk(t.getBoundingClientRect(), n));
}
function vk(t, n, r) {
  const l = ex(t, r), { scroll: o } = n;
  return o && (al(l.x, o.offset.x), al(l.y, o.offset.y)), l;
}
const xk = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Sk = gl.length;
function Tk(t, n, r) {
  let l = "", o = !0;
  for (let c = 0; c < Sk; c++) {
    const u = gl[c], h = t[u];
    if (h === void 0)
      continue;
    let m = !0;
    if (typeof h == "number")
      m = h === (u.startsWith("scale") ? 1 : 0);
    else {
      const d = parseFloat(h);
      m = u.startsWith("scale") ? d === 1 : d === 0;
    }
    if (!m || r) {
      const d = Fv(h, Td[u]);
      if (!m) {
        o = !1;
        const g = xk[u] || u;
        l += `${g}(${d}) `;
      }
      r && (n[u] = d);
    }
  }
  return l = l.trim(), r ? l = r(n, o ? "" : l) : o && (l = "none"), l;
}
function kd(t, n, r) {
  const { style: l, vars: o, transformOrigin: c } = t;
  let u = !1, h = !1;
  for (const m in n) {
    const d = n[m];
    if (yl.has(m)) {
      u = !0;
      continue;
    } else if (pv(m)) {
      o[m] = d;
      continue;
    } else {
      const g = Fv(d, Td[m]);
      m.startsWith("origin") ? (h = !0, c[m] = g) : l[m] = g;
    }
  }
  if (n.transform || (u || r ? l.transform = Tk(n, t.transform, r) : l.transform && (l.transform = "none")), h) {
    const { originX: m = "50%", originY: d = "50%", originZ: g = 0 } = c;
    l.transformOrigin = `${m} ${d} ${g}`;
  }
}
function nx(t, { style: n, vars: r }, l, o) {
  const c = t.style;
  let u;
  for (u in n)
    c[u] = n[u];
  o?.applyProjectionStyles(c, l);
  for (u in r)
    c.setProperty(u, r[u]);
}
function I0(t, n) {
  return n.max === n.min ? 0 : t / (n.max - n.min) * 100;
}
const ga = {
  correct: (t, n) => {
    if (!n.target)
      return t;
    if (typeof t == "string")
      if (ut.test(t))
        t = parseFloat(t);
      else
        return t;
    const r = I0(t, n.target.x), l = I0(t, n.target.y);
    return `${r}% ${l}%`;
  }
}, Ek = {
  correct: (t, { treeScale: n, projectionDelta: r }) => {
    const l = t, o = Ni.parse(t);
    if (o.length > 5)
      return l;
    const c = Ni.createTransformer(t), u = typeof o[0] != "number" ? 1 : 0, h = r.x.scale * n.x, m = r.y.scale * n.y;
    o[0 + u] /= h, o[1 + u] /= m;
    const d = Wt(h, m, 0.5);
    return typeof o[2 + u] == "number" && (o[2 + u] /= d), typeof o[3 + u] == "number" && (o[3 + u] /= d), c(o);
  }
}, Lh = {
  borderRadius: {
    ...ga,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ga,
  borderTopRightRadius: ga,
  borderBottomLeftRadius: ga,
  borderBottomRightRadius: ga,
  boxShadow: Ek
};
function ix(t, { layout: n, layoutId: r }) {
  return yl.has(t) || t.startsWith("origin") || (n || r !== void 0) && (!!Lh[t] || t === "opacity");
}
function Dd(t, n, r) {
  const l = t.style, o = n?.style, c = {};
  if (!l)
    return c;
  for (const u in l)
    (Ce(l[u]) || o && Ce(o[u]) || ix(u, t) || r?.getValue(u)?.liveStyle !== void 0) && (c[u] = l[u]);
  return c;
}
function Ak(t) {
  return window.getComputedStyle(t);
}
class wk extends Jv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = nx;
  }
  readValueFromInstance(n, r) {
    if (yl.has(r))
      return this.projection?.isProjecting ? xh(r) : e2(n, r);
    {
      const l = Ak(n), o = (pv(r) ? l.getPropertyValue(r) : l[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: r }) {
    return ex(n, r);
  }
  build(n, r, l) {
    kd(n, r, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, r, l) {
    return Dd(n, r, l);
  }
}
const Ck = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, kk = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Dk(t, n, r = 1, l = 0, o = !0) {
  t.pathLength = 1;
  const c = o ? Ck : kk;
  t[c.offset] = `${-l}`, t[c.array] = `${n} ${r}`;
}
const Rk = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function rx(t, {
  attrX: n,
  attrY: r,
  attrScale: l,
  pathLength: o,
  pathSpacing: c = 1,
  pathOffset: u = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, m, d, g) {
  if (kd(t, h, d), m) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: y, style: v } = t;
  y.transform && (v.transform = y.transform, delete y.transform), (v.transform || y.transformOrigin) && (v.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), v.transform && (v.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox);
  for (const x of Rk)
    y[x] !== void 0 && (v[x] = y[x], delete y[x]);
  n !== void 0 && (y.x = n), r !== void 0 && (y.y = r), l !== void 0 && (y.scale = l), o !== void 0 && Dk(y, o, c, u, !1);
}
const lx = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), ax = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Mk(t, n, r, l) {
  nx(t, n, void 0, l);
  for (const o in n.attrs)
    t.setAttribute(lx.has(o) ? o : Sd(o), n.attrs[o]);
}
function sx(t, n, r) {
  const l = Dd(t, n, r);
  for (const o in t)
    if (Ce(t[o]) || Ce(n[o])) {
      const c = gl.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      l[c] = t[o];
    }
  return l;
}
class Ok extends Jv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = me;
  }
  getBaseTargetFromProps(n, r) {
    return n[r];
  }
  readValueFromInstance(n, r) {
    if (yl.has(r)) {
      const l = Hv(r);
      return l && l.default || 0;
    }
    return r = lx.has(r) ? r : Sd(r), n.getAttribute(r);
  }
  scrapeMotionValuesFromProps(n, r, l) {
    return sx(n, r, l);
  }
  build(n, r, l) {
    rx(n, r, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(n, r, l, o) {
    Mk(n, r, l, o);
  }
  mount(n) {
    this.isSVGTag = ax(n.tagName), super.mount(n);
  }
}
const zk = Cd.length;
function ox(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const r = t.parent ? ox(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const n = {};
  for (let r = 0; r < zk; r++) {
    const l = Cd[r], o = t.props[l];
    (_a(o) || o === !1) && (n[l] = o);
  }
  return n;
}
function ux(t, n) {
  if (!Array.isArray(n))
    return !1;
  const r = n.length;
  if (r !== t.length)
    return !1;
  for (let l = 0; l < r; l++)
    if (n[l] !== t[l])
      return !1;
  return !0;
}
const _k = [...wd].reverse(), Lk = wd.length;
function Nk(t) {
  return (n) => Promise.all(n.map(({ animation: r, options: l }) => Y2(t, r, l)));
}
function Bk(t) {
  let n = Nk(t), r = K0(), l = !0;
  const o = (m) => (d, g) => {
    const y = ol(t, g, m === "exit" ? t.presenceContext?.custom : void 0);
    if (y) {
      const { transition: v, transitionEnd: x, ...S } = y;
      d = { ...d, ...S, ...x };
    }
    return d;
  };
  function c(m) {
    n = m(t);
  }
  function u(m) {
    const { props: d } = t, g = ox(t.parent) || {}, y = [], v = /* @__PURE__ */ new Set();
    let x = {}, S = 1 / 0;
    for (let A = 0; A < Lk; A++) {
      const C = _k[A], L = r[C], M = d[C] !== void 0 ? d[C] : g[C], Y = _a(M), Q = C === m ? L.isActive : null;
      Q === !1 && (S = A);
      let _ = M === g[C] && M !== d[C] && Y;
      if (_ && l && t.manuallyAnimateOnMount && (_ = !1), L.protectedKeys = { ...x }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && Q === null || // If we didn't and don't have any defined prop for this animation type
      !M && !L.prevProp || // Or if the prop doesn't define an animation
      Jo(M) || typeof M == "boolean")
        continue;
      const Z = Uk(L.prevProp, M);
      let J = Z || // If we're making this variant active, we want to always make it active
      C === m && L.isActive && !_ && Y || // If we removed a higher-priority variant (i is in reverse order)
      A > S && Y, lt = !1;
      const B = Array.isArray(M) ? M : [M];
      let et = B.reduce(o(C), {});
      Q === !1 && (et = {});
      const { prevResolvedValues: nt = {} } = L, xt = {
        ...nt,
        ...et
      }, st = (I) => {
        J = !0, v.has(I) && (lt = !0, v.delete(I)), L.needsAnimating[I] = !0;
        const it = t.getValue(I);
        it && (it.liveStyle = !1);
      };
      for (const I in xt) {
        const it = et[I], yt = nt[I];
        if (x.hasOwnProperty(I))
          continue;
        let k = !1;
        Ch(it) && Ch(yt) ? k = !ux(it, yt) : k = it !== yt, k ? it != null ? st(I) : v.add(I) : it !== void 0 && v.has(I) ? st(I) : L.protectedKeys[I] = !0;
      }
      L.prevProp = M, L.prevResolvedValues = et, L.isActive && (x = { ...x, ...et }), l && t.blockInitialAnimation && (J = !1);
      const W = _ && Z;
      J && (!W || lt) && y.push(...B.map((I) => {
        const it = { type: C };
        if (typeof I == "string" && l && !W && t.manuallyAnimateOnMount && t.parent) {
          const { parent: yt } = t, k = ol(yt, I);
          if (yt.enteringChildren && k) {
            const { delayChildren: R } = k.transition || {};
            it.delay = zv(yt.enteringChildren, t, R);
          }
        }
        return {
          animation: I,
          options: it
        };
      }));
    }
    if (v.size) {
      const A = {};
      if (typeof d.initial != "boolean") {
        const C = ol(t, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        C && C.transition && (A.transition = C.transition);
      }
      v.forEach((C) => {
        const L = t.getBaseTarget(C), M = t.getValue(C);
        M && (M.liveStyle = !0), A[C] = L ?? null;
      }), y.push({ animation: A });
    }
    let w = !!y.length;
    return l && (d.initial === !1 || d.initial === d.animate) && !t.manuallyAnimateOnMount && (w = !1), l = !1, w ? n(y) : Promise.resolve();
  }
  function h(m, d) {
    if (r[m].isActive === d)
      return Promise.resolve();
    t.variantChildren?.forEach((y) => y.animationState?.setActive(m, d)), r[m].isActive = d;
    const g = u(m);
    for (const y in r)
      r[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: u,
    setActive: h,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = K0();
    }
  };
}
function Uk(t, n) {
  return typeof n == "string" ? n !== t : Array.isArray(n) ? !ux(n, t) : !1;
}
function nr(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function K0() {
  return {
    animate: nr(!0),
    whileInView: nr(),
    whileHover: nr(),
    whileTap: nr(),
    whileDrag: nr(),
    whileFocus: nr(),
    exit: nr()
  };
}
function Q0(t, n) {
  t.min = n.min, t.max = n.max;
}
function En(t, n) {
  Q0(t.x, n.x), Q0(t.y, n.y);
}
function Z0(t, n) {
  t.translate = n.translate, t.scale = n.scale, t.originPoint = n.originPoint, t.origin = n.origin;
}
const cx = 1e-4, Vk = 1 - cx, jk = 1 + cx, fx = 0.01, Hk = 0 - fx, qk = 0 + fx;
function Le(t) {
  return t.max - t.min;
}
function Fk(t, n, r) {
  return Math.abs(t - n) <= r;
}
function J0(t, n, r, l = 0.5) {
  t.origin = l, t.originPoint = Wt(n.min, n.max, t.origin), t.scale = Le(r) / Le(n), t.translate = Wt(r.min, r.max, t.origin) - t.originPoint, (t.scale >= Vk && t.scale <= jk || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Hk && t.translate <= qk || isNaN(t.translate)) && (t.translate = 0);
}
function wa(t, n, r, l) {
  J0(t.x, n.x, r.x, l ? l.originX : void 0), J0(t.y, n.y, r.y, l ? l.originY : void 0);
}
function $0(t, n, r) {
  t.min = r.min + n.min, t.max = t.min + Le(n);
}
function Pk(t, n, r) {
  $0(t.x, n.x, r.x), $0(t.y, n.y, r.y);
}
function W0(t, n, r) {
  t.min = n.min - r.min, t.max = t.min + Le(n);
}
function Vo(t, n, r) {
  W0(t.x, n.x, r.x), W0(t.y, n.y, r.y);
}
function t1(t, n, r, l, o) {
  return t -= n, t = Uo(t, 1 / r, l), o !== void 0 && (t = Uo(t, 1 / o, l)), t;
}
function Yk(t, n = 0, r = 1, l = 0.5, o, c = t, u = t) {
  if (_n.test(n) && (n = parseFloat(n), n = Wt(u.min, u.max, n / 100) - u.min), typeof n != "number")
    return;
  let h = Wt(c.min, c.max, l);
  t === c && (h -= n), t.min = t1(t.min, n, r, h, o), t.max = t1(t.max, n, r, h, o);
}
function e1(t, n, [r, l, o], c, u) {
  Yk(t, n[r], n[l], n[o], n.scale, c, u);
}
const Gk = ["x", "scaleX", "originX"], Xk = ["y", "scaleY", "originY"];
function n1(t, n, r, l) {
  e1(t.x, n, Gk, r ? r.x : void 0, l ? l.x : void 0), e1(t.y, n, Xk, r ? r.y : void 0, l ? l.y : void 0);
}
function i1(t) {
  return t.translate === 0 && t.scale === 1;
}
function hx(t) {
  return i1(t.x) && i1(t.y);
}
function r1(t, n) {
  return t.min === n.min && t.max === n.max;
}
function Ik(t, n) {
  return r1(t.x, n.x) && r1(t.y, n.y);
}
function l1(t, n) {
  return Math.round(t.min) === Math.round(n.min) && Math.round(t.max) === Math.round(n.max);
}
function dx(t, n) {
  return l1(t.x, n.x) && l1(t.y, n.y);
}
function a1(t) {
  return Le(t.x) / Le(t.y);
}
function s1(t, n) {
  return t.translate === n.translate && t.scale === n.scale && t.originPoint === n.originPoint;
}
function pn(t) {
  return [t("x"), t("y")];
}
function Kk(t, n, r) {
  let l = "";
  const o = t.x.translate / n.x, c = t.y.translate / n.y, u = r?.z || 0;
  if ((o || c || u) && (l = `translate3d(${o}px, ${c}px, ${u}px) `), (n.x !== 1 || n.y !== 1) && (l += `scale(${1 / n.x}, ${1 / n.y}) `), r) {
    const { transformPerspective: d, rotate: g, rotateX: y, rotateY: v, skewX: x, skewY: S } = r;
    d && (l = `perspective(${d}px) ${l}`), g && (l += `rotate(${g}deg) `), y && (l += `rotateX(${y}deg) `), v && (l += `rotateY(${v}deg) `), x && (l += `skewX(${x}deg) `), S && (l += `skewY(${S}deg) `);
  }
  const h = t.x.scale * n.x, m = t.y.scale * n.y;
  return (h !== 1 || m !== 1) && (l += `scale(${h}, ${m})`), l || "none";
}
const mx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Qk = mx.length, o1 = (t) => typeof t == "string" ? parseFloat(t) : t, u1 = (t) => typeof t == "number" || ut.test(t);
function Zk(t, n, r, l, o, c) {
  o ? (t.opacity = Wt(0, r.opacity ?? 1, Jk(l)), t.opacityExit = Wt(n.opacity ?? 1, 0, $k(l))) : c && (t.opacity = Wt(n.opacity ?? 1, r.opacity ?? 1, l));
  for (let u = 0; u < Qk; u++) {
    const h = `border${mx[u]}Radius`;
    let m = c1(n, h), d = c1(r, h);
    if (m === void 0 && d === void 0)
      continue;
    m || (m = 0), d || (d = 0), m === 0 || d === 0 || u1(m) === u1(d) ? (t[h] = Math.max(Wt(o1(m), o1(d), l), 0), (_n.test(d) || _n.test(m)) && (t[h] += "%")) : t[h] = d;
  }
  (n.rotate || r.rotate) && (t.rotate = Wt(n.rotate || 0, r.rotate || 0, l));
}
function c1(t, n) {
  return t[n] !== void 0 ? t[n] : t.borderRadius;
}
const Jk = /* @__PURE__ */ px(0, 0.5, uv), $k = /* @__PURE__ */ px(0.5, 0.95, bn);
function px(t, n, r) {
  return (l) => l < t ? 0 : l > n ? 1 : r(/* @__PURE__ */ Ma(t, n, l));
}
function Wk(t, n, r) {
  const l = Ce(t) ? t : fl(t);
  return l.start(vd("", l, n, r)), l.animation;
}
function La(t, n, r, l = { passive: !0 }) {
  return t.addEventListener(n, r, l), () => t.removeEventListener(n, r);
}
const tD = (t, n) => t.depth - n.depth;
class eD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    nd(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    id(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(tD), this.isDirty = !1, this.children.forEach(n);
  }
}
function nD(t, n) {
  const r = _e.now(), l = ({ timestamp: o }) => {
    const c = o - r;
    c >= n && (Li(l), t(c - n));
  };
  return Zt.setup(l, !0), () => Li(l);
}
function Ro(t) {
  return Ce(t) ? t.get() : t;
}
class iD {
  constructor() {
    this.members = [];
  }
  add(n) {
    nd(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (id(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(n) {
    const r = this.members.findIndex((o) => n === o);
    if (r === 0)
      return !1;
    let l;
    for (let o = r; o >= 0; o--) {
      const c = this.members[o];
      if (c.isPresent !== !1) {
        l = c;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(n, r) {
    const l = this.lead;
    if (n !== l && (this.prevLead = l, this.lead = n, n.show(), l)) {
      l.instance && l.scheduleRender(), n.scheduleRender();
      const o = l.options.layoutDependency, c = n.options.layoutDependency;
      o !== void 0 && c !== void 0 && o === c || (n.resumeFrom = l, r && (n.resumeFrom.preserveOpacity = !0), l.snapshot && (n.snapshot = l.snapshot, n.snapshot.latestValues = l.animationValues || l.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0));
      const { crossfade: h } = n.options;
      h === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: r, resumingFrom: l } = n;
      r.onExitComplete && r.onExitComplete(), l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Mo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Vf = ["", "X", "Y", "Z"], rD = 1e3;
let lD = 0;
function jf(t, n, r, l) {
  const { latestValues: o } = n;
  o[t] && (r[t] = o[t], n.setStaticValue(t, 0), l && (l[t] = 0));
}
function gx(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: n } = t.options;
  if (!n)
    return;
  const r = Bv(n);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: o, layoutId: c } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Zt, !(o || c));
  }
  const { parent: l } = t;
  l && !l.hasCheckedOptimisedAppear && gx(l);
}
function yx({ attachResizeListener: t, defaultParent: n, measureScroll: r, checkIsScrollRoot: l, resetTransform: o }) {
  return class {
    constructor(u = {}, h = n?.()) {
      this.id = lD++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(oD), this.nodes.forEach(hD), this.nodes.forEach(dD), this.nodes.forEach(uD);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = u, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eD());
    }
    addEventListener(u, h) {
      return this.eventHandlers.has(u) || this.eventHandlers.set(u, new ad()), this.eventHandlers.get(u).add(h);
    }
    notifyListeners(u, ...h) {
      const m = this.eventHandlers.get(u);
      m && m.notify(...h);
    }
    hasListeners(u) {
      return this.eventHandlers.has(u);
    }
    /**
     * Lifecycles
     */
    mount(u) {
      if (this.instance)
        return;
      this.isSVG = Iv(u) && !sk(u), this.instance = u;
      const { layoutId: h, layout: m, visualElement: d } = this.options;
      if (d && !d.current && d.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0), t) {
        let g, y = 0;
        const v = () => this.root.updateBlockedByResize = !1;
        Zt.read(() => {
          y = window.innerWidth;
        }), t(u, () => {
          const x = window.innerWidth;
          x !== y && (y = x, this.root.updateBlockedByResize = !0, g && g(), g = nD(v, 250), Mo.hasAnimatedSinceResize && (Mo.hasAnimatedSinceResize = !1, this.nodes.forEach(d1)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && d && (h || m) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: v, layout: x }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || d.getDefaultTransition() || bD, { onLayoutAnimationStart: w, onLayoutAnimationComplete: A } = d.getProps(), C = !this.targetLayout || !dx(this.targetLayout, x), L = !y && v;
        if (this.options.layoutRoot || this.resumeFrom || L || y && (C || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const M = {
            ...bd(S, "layout"),
            onPlay: w,
            onComplete: A
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0, M.type = !1), this.startAnimation(M), this.setAnimationOrigin(g, L);
        } else
          y || d1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = x;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const u = this.getStack();
      u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Li(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(mD), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: u } = this.options;
      return u && u.getProps().transformTemplate;
    }
    willUpdate(u = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(f1);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(h1);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(fD), this.nodes.forEach(aD), this.nodes.forEach(sD)) : this.nodes.forEach(h1), this.clearAllSnapshots();
      const h = _e.now();
      Ee.delta = Ln(0, 1e3 / 60, h - Ee.timestamp), Ee.timestamp = h, Ee.isProcessing = !0, Mf.update.process(Ee), Mf.preRender.process(Ee), Mf.render.process(Ee), Ee.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ed.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cD), this.sharedNodes.forEach(pD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Zt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Zt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Le(this.snapshot.measuredBox.x) && !Le(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++)
          this.path[m].updateScroll();
      const u = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = me(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0);
    }
    updateScroll(u = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (h = !1), h && this.instance) {
        const m = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: u,
          isRoot: m,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !hx(this.projectionDelta), m = this.getTransformTemplate(), d = m ? m(this.latestValues, "") : void 0, g = d !== this.prevTransformTemplateValue;
      u && this.instance && (h || rr(this.latestValues) || g) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(u = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return u && (m = this.removeTransform(m)), vD(m), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: m,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: u } = this.options;
      if (!u)
        return me();
      const h = u.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(xD))) {
        const { scroll: d } = this.root;
        d && (al(h.x, d.offset.x), al(h.y, d.offset.y));
      }
      return h;
    }
    removeElementScroll(u) {
      const h = me();
      if (En(h, u), this.scroll?.wasRoot)
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const d = this.path[m], { scroll: g, options: y } = d;
        d !== this.root && g && y.layoutScroll && (g.wasRoot && En(h, u), al(h.x, g.offset.x), al(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(u, h = !1) {
      const m = me();
      En(m, u);
      for (let d = 0; d < this.path.length; d++) {
        const g = this.path[d];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && sl(m, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), rr(g.latestValues) && sl(m, g.latestValues);
      }
      return rr(this.latestValues) && sl(m, this.latestValues), m;
    }
    removeTransform(u) {
      const h = me();
      En(h, u);
      for (let m = 0; m < this.path.length; m++) {
        const d = this.path[m];
        if (!d.instance || !rr(d.latestValues))
          continue;
        zh(d.latestValues) && d.updateSnapshot();
        const g = me(), y = d.measurePageBox();
        En(g, y), n1(h, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, g);
      }
      return rr(this.latestValues) && n1(h, this.latestValues), h;
    }
    setTargetDelta(u) {
      this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(u) {
      this.options = {
        ...this.options,
        ...u,
        crossfade: u.crossfade !== void 0 ? u.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(u = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (!(u || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!this.layout || !(g || y))
        return;
      this.resolvedRelativeTargetAt = Ee.timestamp;
      const v = this.getClosestProjectingParent();
      v && this.linkedParentVersion !== v.layoutVersion && !v.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (v && v.layout ? this.createRelativeTarget(v, this.layout.layoutBox, v.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = me(), this.targetWithTransforms = me()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Pk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : En(this.target, this.layout.layoutBox), tx(this.target, this.targetDelta)) : En(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? this.createRelativeTarget(v, this.target, v.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zh(this.parent.latestValues) || Wv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(u, h, m) {
      this.relativeParent = u, this.linkedParentVersion = u.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = me(), this.relativeTargetOrigin = me(), Vo(this.relativeTargetOrigin, h, m), En(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const u = this.getLead(), h = !!this.resumingFrom || this !== u;
      let m = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Ee.timestamp && (m = !1), m)
        return;
      const { layout: d, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || g))
        return;
      En(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, v = this.treeScale.y;
      bk(this.layoutCorrected, this.treeScale, this.path, h), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = me());
      const { target: x } = u;
      if (!x) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Z0(this.prevProjectionDelta.x, this.projectionDelta.x), Z0(this.prevProjectionDelta.y, this.projectionDelta.y)), wa(this.projectionDelta, this.layoutCorrected, x, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== v || !s1(this.projectionDelta.x, this.prevProjectionDelta.x) || !s1(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", x));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(u = !0) {
      if (this.options.visualElement?.scheduleRender(), u) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ll(), this.projectionDelta = ll(), this.projectionDeltaWithTransform = ll();
    }
    setAnimationOrigin(u, h = !1) {
      const m = this.snapshot, d = m ? m.latestValues : {}, g = { ...this.latestValues }, y = ll();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const v = me(), x = m ? m.source : void 0, S = this.layout ? this.layout.source : void 0, w = x !== S, A = this.getStack(), C = !A || A.members.length <= 1, L = !!(w && !C && this.options.crossfade === !0 && !this.path.some(yD));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (Y) => {
        const Q = Y / 1e3;
        m1(y.x, u.x, Q), m1(y.y, u.y, Q), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vo(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), gD(this.relativeTarget, this.relativeTargetOrigin, v, Q), M && Ik(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = me()), En(M, this.relativeTarget)), w && (this.animationValues = g, Zk(g, d, this.latestValues, Q, L, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(u) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Li(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Zt.update(() => {
        Mo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = fl(0)), this.currentAnimation = Wk(this.motionValue, [0, 1e3], {
          ...u,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), u.onUpdate && u.onUpdate(h);
          },
          onStop: () => {
          },
          onComplete: () => {
            u.onComplete && u.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const u = this.getStack();
      u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(rD), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const u = this.getLead();
      let { targetWithTransforms: h, target: m, layout: d, latestValues: g } = u;
      if (!(!h || !m || !d)) {
        if (this !== u && this.layout && d && bx(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          m = this.target || me();
          const y = Le(this.layout.layoutBox.x);
          m.x.min = u.target.x.min, m.x.max = m.x.min + y;
          const v = Le(this.layout.layoutBox.y);
          m.y.min = u.target.y.min, m.y.max = m.y.min + v;
        }
        En(h, m), sl(h, g), wa(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(u, h) {
      this.sharedNodes.has(u) || this.sharedNodes.set(u, new iD()), this.sharedNodes.get(u).add(h);
      const d = h.options.initialPromotionConfig;
      h.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const u = this.getStack();
      return u ? u.lead === this : !0;
    }
    getLead() {
      const { layoutId: u } = this.options;
      return u ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: u } = this.options;
      return u ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: u } = this.options;
      if (u)
        return this.root.sharedNodes.get(u);
    }
    promote({ needsReset: u, transition: h, preserveFollowOpacity: m } = {}) {
      const d = this.getStack();
      d && d.promote(this, m), u && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const u = this.getStack();
      return u ? u.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: u } = this.options;
      if (!u)
        return;
      let h = !1;
      const { latestValues: m } = u;
      if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (h = !0), !h)
        return;
      const d = {};
      m.z && jf("z", u, d, this.animationValues);
      for (let g = 0; g < Vf.length; g++)
        jf(`rotate${Vf[g]}`, u, d, this.animationValues), jf(`skew${Vf[g]}`, u, d, this.animationValues);
      u.render();
      for (const g in d)
        u.setStaticValue(g, d[g]), this.animationValues && (this.animationValues[g] = d[g]);
      u.scheduleRender();
    }
    applyProjectionStyles(u, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        u.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, u.visibility = "", u.opacity = "", u.pointerEvents = Ro(h?.pointerEvents) || "", u.transform = m ? m(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (u.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, u.pointerEvents = Ro(h?.pointerEvents) || ""), this.hasProjected && !rr(this.latestValues) && (u.transform = m ? m({}, "") : "none", this.hasProjected = !1);
        return;
      }
      u.visibility = "";
      const g = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let y = Kk(this.projectionDeltaWithTransform, this.treeScale, g);
      m && (y = m(g, y)), u.transform = y;
      const { x: v, y: x } = this.projectionDelta;
      u.transformOrigin = `${v.origin * 100}% ${x.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : u.opacity = d === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const S in Lh) {
        if (g[S] === void 0)
          continue;
        const { correct: w, applyTo: A, isCSSVariable: C } = Lh[S], L = y === "none" ? g[S] : w(g[S], d);
        if (A) {
          const M = A.length;
          for (let Y = 0; Y < M; Y++)
            u[A[Y]] = L;
        } else
          C ? this.options.visualElement.renderState.vars[S] = L : u[S] = L;
      }
      this.options.layoutId && (u.pointerEvents = d === this ? Ro(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((u) => u.currentAnimation?.stop()), this.root.nodes.forEach(f1), this.root.sharedNodes.clear();
    }
  };
}
function aD(t) {
  t.updateLayout();
}
function sD(t) {
  const n = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: l } = t.layout, { animationType: o } = t.options, c = n.source !== t.layout.source;
    o === "size" ? pn((g) => {
      const y = c ? n.measuredBox[g] : n.layoutBox[g], v = Le(y);
      y.min = r[g].min, y.max = y.min + v;
    }) : bx(o, n.layoutBox, r) && pn((g) => {
      const y = c ? n.measuredBox[g] : n.layoutBox[g], v = Le(r[g]);
      y.max = y.min + v, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[g].max = t.relativeTarget[g].min + v);
    });
    const u = ll();
    wa(u, r, n.layoutBox);
    const h = ll();
    c ? wa(h, t.applyTransform(l, !0), n.measuredBox) : wa(h, r, n.layoutBox);
    const m = !hx(u);
    let d = !1;
    if (!t.resumeFrom) {
      const g = t.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: v } = g;
        if (y && v) {
          const x = me();
          Vo(x, n.layoutBox, y.layoutBox);
          const S = me();
          Vo(S, r, v.layoutBox), dx(x, S) || (d = !0), g.options.layoutRoot && (t.relativeTarget = S, t.relativeTargetOrigin = x, t.relativeParent = g);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: h,
      layoutDelta: u,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: d
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function oD(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function uD(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function cD(t) {
  t.clearSnapshot();
}
function f1(t) {
  t.clearMeasurements();
}
function h1(t) {
  t.isLayoutDirty = !1;
}
function fD(t) {
  const { visualElement: n } = t.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function d1(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function hD(t) {
  t.resolveTargetDelta();
}
function dD(t) {
  t.calcProjection();
}
function mD(t) {
  t.resetSkewAndRotation();
}
function pD(t) {
  t.removeLeadSnapshot();
}
function m1(t, n, r) {
  t.translate = Wt(n.translate, 0, r), t.scale = Wt(n.scale, 1, r), t.origin = n.origin, t.originPoint = n.originPoint;
}
function p1(t, n, r, l) {
  t.min = Wt(n.min, r.min, l), t.max = Wt(n.max, r.max, l);
}
function gD(t, n, r, l) {
  p1(t.x, n.x, r.x, l), p1(t.y, n.y, r.y, l);
}
function yD(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const bD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, g1 = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), y1 = g1("applewebkit/") && !g1("chrome/") ? Math.round : bn;
function b1(t) {
  t.min = y1(t.min), t.max = y1(t.max);
}
function vD(t) {
  b1(t.x), b1(t.y);
}
function bx(t, n, r) {
  return t === "position" || t === "preserve-aspect" && !Fk(a1(n), a1(r), 0.2);
}
function xD(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const SD = yx({
  attachResizeListener: (t, n) => La(t, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Hf = {
  current: void 0
}, vx = yx({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Hf.current) {
      const t = new SD({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Hf.current = t;
    }
    return Hf.current;
  },
  resetTransform: (t, n) => {
    t.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Rd = tt.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function v1(t, n) {
  if (typeof t == "function")
    return t(n);
  t != null && (t.current = n);
}
function TD(...t) {
  return (n) => {
    let r = !1;
    const l = t.map((o) => {
      const c = v1(o, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < l.length; o++) {
          const c = l[o];
          typeof c == "function" ? c() : v1(t[o], null);
        }
      };
  };
}
function ED(...t) {
  return tt.useCallback(TD(...t), t);
}
class AD extends tt.Component {
  getSnapshotBeforeUpdate(n) {
    const r = this.props.childRef.current;
    if (r && n.isPresent && !this.props.isPresent) {
      const l = r.offsetParent, o = Mh(l) && l.offsetWidth || 0, c = Mh(l) && l.offsetHeight || 0, u = this.props.sizeRef.current;
      u.height = r.offsetHeight || 0, u.width = r.offsetWidth || 0, u.top = r.offsetTop, u.left = r.offsetLeft, u.right = o - u.width - u.left, u.bottom = c - u.height - u.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function wD({ children: t, isPresent: n, anchorX: r, anchorY: l, root: o }) {
  const c = tt.useId(), u = tt.useRef(null), h = tt.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }), { nonce: m } = tt.useContext(Rd), d = t.props?.ref ?? t?.ref, g = ED(u, d);
  return tt.useInsertionEffect(() => {
    const { width: y, height: v, top: x, left: S, right: w, bottom: A } = h.current;
    if (n || !u.current || !y || !v)
      return;
    const C = r === "left" ? `left: ${S}` : `right: ${w}`, L = l === "bottom" ? `bottom: ${A}` : `top: ${x}`;
    u.current.dataset.motionPopId = c;
    const M = document.createElement("style");
    m && (M.nonce = m);
    const Y = o ?? document.head;
    return Y.appendChild(M), M.sheet && M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${v}px !important;
            ${C}px !important;
            ${L}px !important;
          }
        `), () => {
      Y.contains(M) && Y.removeChild(M);
    };
  }, [n]), ft.jsx(AD, { isPresent: n, childRef: u, sizeRef: h, children: tt.cloneElement(t, { ref: g }) });
}
const CD = ({ children: t, initial: n, isPresent: r, onExitComplete: l, custom: o, presenceAffectsLayout: c, mode: u, anchorX: h, anchorY: m, root: d }) => {
  const g = ed(kD), y = tt.useId();
  let v = !0, x = tt.useMemo(() => (v = !1, {
    id: y,
    initial: n,
    isPresent: r,
    custom: o,
    onExitComplete: (S) => {
      g.set(S, !0);
      for (const w of g.values())
        if (!w)
          return;
      l && l();
    },
    register: (S) => (g.set(S, !1), () => g.delete(S))
  }), [r, g, l]);
  return c && v && (x = { ...x }), tt.useMemo(() => {
    g.forEach((S, w) => g.set(w, !1));
  }, [r]), tt.useEffect(() => {
    !r && !g.size && l && l();
  }, [r]), u === "popLayout" && (t = ft.jsx(wD, { isPresent: r, anchorX: h, anchorY: m, root: d, children: t })), ft.jsx(Zo.Provider, { value: x, children: t });
};
function kD() {
  return /* @__PURE__ */ new Map();
}
function xx(t = !0) {
  const n = tt.useContext(Zo);
  if (n === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: l, register: o } = n, c = tt.useId();
  tt.useEffect(() => {
    if (t)
      return o(c);
  }, [t]);
  const u = tt.useCallback(() => t && l && l(c), [c, l, t]);
  return !r && l ? [!1, u] : [!0];
}
const bo = (t) => t.key || "";
function x1(t) {
  const n = [];
  return tt.Children.forEach(t, (r) => {
    tt.isValidElement(r) && n.push(r);
  }), n;
}
const DD = ({ children: t, custom: n, initial: r = !0, onExitComplete: l, presenceAffectsLayout: o = !0, mode: c = "sync", propagate: u = !1, anchorX: h = "left", anchorY: m = "top", root: d }) => {
  const [g, y] = xx(u), v = tt.useMemo(() => x1(t), [t]), x = u && !g ? [] : v.map(bo), S = tt.useRef(!0), w = tt.useRef(v), A = ed(() => /* @__PURE__ */ new Map()), C = tt.useRef(/* @__PURE__ */ new Set()), [L, M] = tt.useState(v), [Y, Q] = tt.useState(v);
  $b(() => {
    S.current = !1, w.current = v;
    for (let J = 0; J < Y.length; J++) {
      const lt = bo(Y[J]);
      x.includes(lt) ? (A.delete(lt), C.current.delete(lt)) : A.get(lt) !== !0 && A.set(lt, !1);
    }
  }, [Y, x.length, x.join("-")]);
  const _ = [];
  if (v !== L) {
    let J = [...v];
    for (let lt = 0; lt < Y.length; lt++) {
      const B = Y[lt], et = bo(B);
      x.includes(et) || (J.splice(lt, 0, B), _.push(B));
    }
    return c === "wait" && _.length && (J = _), Q(x1(J)), M(v), null;
  }
  const { forceRender: Z } = tt.useContext(td);
  return ft.jsx(ft.Fragment, { children: Y.map((J) => {
    const lt = bo(J), B = u && !g ? !1 : v === Y || x.includes(lt), et = () => {
      if (C.current.has(lt))
        return;
      if (C.current.add(lt), A.has(lt))
        A.set(lt, !0);
      else
        return;
      let nt = !0;
      A.forEach((xt) => {
        xt || (nt = !1);
      }), nt && (Z?.(), Q(w.current), u && y?.(), l && l());
    };
    return ft.jsx(CD, { isPresent: B, initial: !S.current || r ? void 0 : !1, custom: n, presenceAffectsLayout: o, mode: c, root: d, onExitComplete: B ? void 0 : et, anchorX: h, anchorY: m, children: J }, lt);
  }) });
}, Sx = tt.createContext({ strict: !1 }), S1 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let T1 = !1;
function RD() {
  if (T1)
    return;
  const t = {};
  for (const n in S1)
    t[n] = {
      isEnabled: (r) => S1[n].some((l) => !!r[l])
    };
  Zv(t), T1 = !0;
}
function Tx() {
  return RD(), mk();
}
function MD(t) {
  const n = Tx();
  for (const r in t)
    n[r] = {
      ...n[r],
      ...t[r]
    };
  Zv(n);
}
const OD = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function jo(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || OD.has(t);
}
let Ex = (t) => !jo(t);
function zD(t) {
  typeof t == "function" && (Ex = (n) => n.startsWith("on") ? !jo(n) : t(n));
}
try {
  zD(require("@emotion/is-prop-valid").default);
} catch {
}
function _D(t, n, r) {
  const l = {};
  for (const o in t)
    o === "values" && typeof t.values == "object" || (Ex(o) || r === !0 && jo(o) || !n && !jo(o) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && o.startsWith("onDrag")) && (l[o] = t[o]);
  return l;
}
const Wo = /* @__PURE__ */ tt.createContext({});
function LD(t, n) {
  if ($o(t)) {
    const { initial: r, animate: l } = t;
    return {
      initial: r === !1 || _a(r) ? r : void 0,
      animate: _a(l) ? l : void 0
    };
  }
  return t.inherit !== !1 ? n : {};
}
function ND(t) {
  const { initial: n, animate: r } = LD(t, tt.useContext(Wo));
  return tt.useMemo(() => ({ initial: n, animate: r }), [E1(n), E1(r)]);
}
function E1(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Md = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ax(t, n, r) {
  for (const l in n)
    !Ce(n[l]) && !ix(l, r) && (t[l] = n[l]);
}
function BD({ transformTemplate: t }, n) {
  return tt.useMemo(() => {
    const r = Md();
    return kd(r, n, t), Object.assign({}, r.vars, r.style);
  }, [n]);
}
function UD(t, n) {
  const r = t.style || {}, l = {};
  return Ax(l, r, t), Object.assign(l, BD(t, n)), l;
}
function VD(t, n) {
  const r = {}, l = UD(t, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = l, r;
}
const wx = () => ({
  ...Md(),
  attrs: {}
});
function jD(t, n, r, l) {
  const o = tt.useMemo(() => {
    const c = wx();
    return rx(c, n, ax(l), t.transformTemplate, t.style), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [n]);
  if (t.style) {
    const c = {};
    Ax(c, t.style, t), o.style = { ...c, ...o.style };
  }
  return o;
}
const HD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Od(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(HD.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function qD(t, n, r, { latestValues: l }, o, c = !1, u) {
  const m = (u ?? Od(t) ? jD : VD)(n, l, o, t), d = _D(n, typeof t == "string", c), g = t !== tt.Fragment ? { ...d, ...m, ref: r } : {}, { children: y } = n, v = tt.useMemo(() => Ce(y) ? y.get() : y, [y]);
  return tt.createElement(t, {
    ...g,
    children: v
  });
}
function FD({ scrapeMotionValuesFromProps: t, createRenderState: n }, r, l, o) {
  return {
    latestValues: PD(r, l, o, t),
    renderState: n()
  };
}
function PD(t, n, r, l) {
  const o = {}, c = l(t, {});
  for (const v in c)
    o[v] = Ro(c[v]);
  let { initial: u, animate: h } = t;
  const m = $o(t), d = Qv(t);
  n && d && !m && t.inherit !== !1 && (u === void 0 && (u = n.initial), h === void 0 && (h = n.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || u === !1;
  const y = g ? h : u;
  if (y && typeof y != "boolean" && !Jo(y)) {
    const v = Array.isArray(y) ? y : [y];
    for (let x = 0; x < v.length; x++) {
      const S = xd(t, v[x]);
      if (S) {
        const { transitionEnd: w, transition: A, ...C } = S;
        for (const L in C) {
          let M = C[L];
          if (Array.isArray(M)) {
            const Y = g ? M.length - 1 : 0;
            M = M[Y];
          }
          M !== null && (o[L] = M);
        }
        for (const L in w)
          o[L] = w[L];
      }
    }
  }
  return o;
}
const Cx = (t) => (n, r) => {
  const l = tt.useContext(Wo), o = tt.useContext(Zo), c = () => FD(t, n, l, o);
  return r ? c() : ed(c);
}, YD = /* @__PURE__ */ Cx({
  scrapeMotionValuesFromProps: Dd,
  createRenderState: Md
}), GD = /* @__PURE__ */ Cx({
  scrapeMotionValuesFromProps: sx,
  createRenderState: wx
}), XD = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function ID(t, n, r) {
  const l = tt.useRef(r);
  tt.useInsertionEffect(() => {
    l.current = r;
  });
  const o = tt.useRef(null);
  return tt.useCallback((c) => {
    c && t.onMount?.(c), n && (c ? n.mount(c) : n.unmount());
    const u = l.current;
    if (typeof u == "function")
      if (c) {
        const h = u(c);
        typeof h == "function" && (o.current = h);
      } else o.current ? (o.current(), o.current = null) : u(c);
    else u && (u.current = c);
  }, [n]);
}
const kx = tt.createContext({});
function Ta(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function KD(t, n, r, l, o, c) {
  const { visualElement: u } = tt.useContext(Wo), h = tt.useContext(Sx), m = tt.useContext(Zo), d = tt.useContext(Rd).reducedMotion, g = tt.useRef(null), y = tt.useRef(!1);
  l = l || h.renderer, !g.current && l && (g.current = l(t, {
    visualState: n,
    parent: u,
    props: r,
    presenceContext: m,
    blockInitialAnimation: m ? m.initial === !1 : !1,
    reducedMotionConfig: d,
    isSVG: c
  }), y.current && g.current && (g.current.manuallyAnimateOnMount = !0));
  const v = g.current, x = tt.useContext(kx);
  v && !v.projection && o && (v.type === "html" || v.type === "svg") && QD(g.current, r, o, x);
  const S = tt.useRef(!1);
  tt.useInsertionEffect(() => {
    v && S.current && v.update(r, m);
  });
  const w = r[Nv], A = tt.useRef(!!w && !window.MotionHandoffIsComplete?.(w) && window.MotionHasOptimisedAnimation?.(w));
  return $b(() => {
    y.current = !0, v && (S.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), A.current && v.animationState && v.animationState.animateChanges());
  }), tt.useEffect(() => {
    v && (!A.current && v.animationState && v.animationState.animateChanges(), A.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(w);
    }), A.current = !1), v.enteringChildren = void 0);
  }), v;
}
function QD(t, n, r, l) {
  const { layoutId: o, layout: c, drag: u, dragConstraints: h, layoutScroll: m, layoutRoot: d, layoutCrossfade: g } = n;
  t.projection = new r(t.latestValues, n["data-framer-portal-id"] ? void 0 : Dx(t.parent)), t.projection.setOptions({
    layoutId: o,
    layout: c,
    alwaysMeasureLayout: !!u || h && Ta(h),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: l,
    crossfade: g,
    layoutScroll: m,
    layoutRoot: d
  });
}
function Dx(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Dx(t.parent);
}
function qf(t, { forwardMotionProps: n = !1, type: r } = {}, l, o) {
  l && MD(l);
  const c = r ? r === "svg" : Od(t), u = c ? GD : YD;
  function h(d, g) {
    let y;
    const v = {
      ...tt.useContext(Rd),
      ...d,
      layoutId: ZD(d)
    }, { isStatic: x } = v, S = ND(d), w = u(d, x);
    if (!x && Jb) {
      JD();
      const A = $D(v);
      y = A.MeasureLayout, S.visualElement = KD(t, w, v, o, A.ProjectionNode, c);
    }
    return ft.jsxs(Wo.Provider, { value: S, children: [y && S.visualElement ? ft.jsx(y, { visualElement: S.visualElement, ...v }) : null, qD(t, d, ID(w, S.visualElement, g), w, x, n, c)] });
  }
  h.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const m = tt.forwardRef(h);
  return m[XD] = t, m;
}
function ZD({ layoutId: t }) {
  const n = tt.useContext(td).id;
  return n && t !== void 0 ? n + "-" + t : t;
}
function JD(t, n) {
  tt.useContext(Sx).strict;
}
function $D(t) {
  const n = Tx(), { drag: r, layout: l } = n;
  if (!r && !l)
    return {};
  const o = { ...r, ...l };
  return {
    MeasureLayout: r?.isEnabled(t) || l?.isEnabled(t) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
function WD(t, n) {
  if (typeof Proxy > "u")
    return qf;
  const r = /* @__PURE__ */ new Map(), l = (c, u) => qf(c, u, t, n), o = (c, u) => l(c, u);
  return new Proxy(o, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (c, u) => u === "create" ? l : (r.has(u) || r.set(u, qf(u, void 0, t, n)), r.get(u))
  });
}
const tR = (t, n) => n.isSVG ?? Od(t) ? new Ok(n) : new wk(n, {
  allowProjection: t !== tt.Fragment
});
class eR extends Bi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = Bk(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    Jo(n) && (this.unmountControls = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    n !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let nR = 0;
class iR extends Bi {
  constructor() {
    super(...arguments), this.id = nR++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: r } = this.node.presenceContext, { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === l)
      return;
    const o = this.node.animationState.setActive("exit", !n);
    r && !n && o.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: n, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const rR = {
  animation: {
    Feature: eR
  },
  exit: {
    Feature: iR
  }
};
function Ga(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const lR = (t) => (n) => Ad(n) && t(n, Ga(n));
function Ca(t, n, r, l) {
  return La(t, n, lR(r), l);
}
const Rx = ({ current: t }) => t ? t.ownerDocument.defaultView : null, A1 = (t, n) => Math.abs(t - n);
function aR(t, n) {
  const r = A1(t.x, n.x), l = A1(t.y, n.y);
  return Math.sqrt(r ** 2 + l ** 2);
}
const w1 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Mx {
  constructor(n, r, { transformPagePoint: l, contextWindow: o = window, dragSnapToOrigin: c = !1, distanceThreshold: u = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (x) => {
      this.handleScroll(x.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Pf(this.lastMoveEventInfo, this.history), S = this.startEvent !== null, w = aR(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!S && !w)
        return;
      const { point: A } = x, { timestamp: C } = Ee;
      this.history.push({ ...A, timestamp: C });
      const { onStart: L, onMove: M } = this.handlers;
      S || (L && L(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, S) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = Ff(S, this.transformPagePoint), Zt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, S) => {
      this.end();
      const { onEnd: w, onSessionEnd: A, resumeAnimation: C } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && C && C(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const L = Pf(x.type === "pointercancel" ? this.lastMoveEventInfo : Ff(S, this.transformPagePoint), this.history);
      this.startEvent && w && w(x, L), A && A(x, L);
    }, !Ad(n))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = l, this.distanceThreshold = u, this.contextWindow = o || window;
    const m = Ga(n), d = Ff(m, this.transformPagePoint), { point: g } = d, { timestamp: y } = Ee;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: v } = r;
    v && v(n, Pf(d, this.history)), this.removeListeners = Fa(Ca(this.contextWindow, "pointermove", this.handlePointerMove), Ca(this.contextWindow, "pointerup", this.handlePointerUp), Ca(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(n) {
    let r = n.parentElement;
    for (; r; ) {
      const l = getComputedStyle(r);
      (w1.has(l.overflowX) || w1.has(l.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0,
      passive: !0
    }), window.addEventListener("scroll", this.onWindowScroll, {
      passive: !0
    }), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(n) {
    const r = this.scrollPositions.get(n);
    if (!r)
      return;
    const l = n === window, o = l ? { x: window.scrollX, y: window.scrollY } : {
      x: n.scrollLeft,
      y: n.scrollTop
    }, c = { x: o.x - r.x, y: o.y - r.y };
    c.x === 0 && c.y === 0 || (l ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x, this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x, this.history[0].y -= c.y), this.scrollPositions.set(n, o), Zt.update(this.updatePoint, !0));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Li(this.updatePoint);
  }
}
function Ff(t, n) {
  return n ? { point: n(t.point) } : t;
}
function C1(t, n) {
  return { x: t.x - n.x, y: t.y - n.y };
}
function Pf({ point: t }, n) {
  return {
    point: t,
    delta: C1(t, Ox(n)),
    offset: C1(t, sR(n)),
    velocity: oR(n, 0.1)
  };
}
function sR(t) {
  return t[0];
}
function Ox(t) {
  return t[t.length - 1];
}
function oR(t, n) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let r = t.length - 1, l = null;
  const o = Ox(t);
  for (; r >= 0 && (l = t[r], !(o.timestamp - l.timestamp > /* @__PURE__ */ ii(n))); )
    r--;
  if (!l)
    return { x: 0, y: 0 };
  const c = /* @__PURE__ */ yn(o.timestamp - l.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const u = {
    x: (o.x - l.x) / c,
    y: (o.y - l.y) / c
  };
  return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u;
}
function uR(t, { min: n, max: r }, l) {
  return n !== void 0 && t < n ? t = l ? Wt(n, t, l.min) : Math.max(t, n) : r !== void 0 && t > r && (t = l ? Wt(r, t, l.max) : Math.min(t, r)), t;
}
function k1(t, n, r) {
  return {
    min: n !== void 0 ? t.min + n : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
  };
}
function cR(t, { top: n, left: r, bottom: l, right: o }) {
  return {
    x: k1(t.x, r, o),
    y: k1(t.y, n, l)
  };
}
function D1(t, n) {
  let r = n.min - t.min, l = n.max - t.max;
  return n.max - n.min < t.max - t.min && ([r, l] = [l, r]), { min: r, max: l };
}
function fR(t, n) {
  return {
    x: D1(t.x, n.x),
    y: D1(t.y, n.y)
  };
}
function hR(t, n) {
  let r = 0.5;
  const l = Le(t), o = Le(n);
  return o > l ? r = /* @__PURE__ */ Ma(n.min, n.max - l, t.min) : l > o && (r = /* @__PURE__ */ Ma(t.min, t.max - o, n.min)), Ln(0, 1, r);
}
function dR(t, n) {
  const r = {};
  return n.min !== void 0 && (r.min = n.min - t.min), n.max !== void 0 && (r.max = n.max - t.min), r;
}
const Nh = 0.35;
function mR(t = Nh) {
  return t === !1 ? t = 0 : t === !0 && (t = Nh), {
    x: R1(t, "left", "right"),
    y: R1(t, "top", "bottom")
  };
}
function R1(t, n, r) {
  return {
    min: M1(t, n),
    max: M1(t, r)
  };
}
function M1(t, n) {
  return typeof t == "number" ? t : t[n] || 0;
}
const pR = /* @__PURE__ */ new WeakMap();
class gR {
  constructor(n) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = me(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n;
  }
  start(n, { snapToCursor: r = !1, distanceThreshold: l } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const c = (y) => {
      r ? (this.stopAnimation(), this.snapToCursor(Ga(y).point)) : this.pauseAnimation();
    }, u = (y, v) => {
      this.stopAnimation();
      const { drag: x, dragPropagation: S, onDragStart: w } = this.getProps();
      if (x && !S && (this.openDragLock && this.openDragLock(), this.openDragLock = nk(x), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = v, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pn((C) => {
        let L = this.getAxisMotionValue(C).get() || 0;
        if (_n.test(L)) {
          const { projection: M } = this.visualElement;
          if (M && M.layout) {
            const Y = M.layout.layoutBox[C];
            Y && (L = Le(Y) * (parseFloat(L) / 100));
          }
        }
        this.originPoint[C] = L;
      }), w && Zt.postRender(() => w(y, v)), kh(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, h = (y, v) => {
      this.latestPointerEvent = y, this.latestPanInfo = v;
      const { dragPropagation: x, dragDirectionLock: S, onDirectionLock: w, onDrag: A } = this.getProps();
      if (!x && !this.openDragLock)
        return;
      const { offset: C } = v;
      if (S && this.currentDirection === null) {
        this.currentDirection = yR(C), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, C), this.updateAxis("y", v.point, C), this.visualElement.render(), A && A(y, v);
    }, m = (y, v) => {
      this.latestPointerEvent = y, this.latestPanInfo = v, this.stop(y, v), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => pn((y) => this.getAnimationState(y) === "paused" && this.getAxisMotionValue(y).animation?.play()), { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Mx(n, {
      onSessionStart: c,
      onStart: u,
      onMove: h,
      onSessionEnd: m,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: l,
      contextWindow: Rx(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(n, r) {
    const l = n || this.latestPointerEvent, o = r || this.latestPanInfo, c = this.isDragging;
    if (this.cancel(), !c || !o || !l)
      return;
    const { velocity: u } = o;
    this.startAnimation(u);
    const { onDragEnd: h } = this.getProps();
    h && Zt.postRender(() => h(l, o));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: r } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: l } = this.getProps();
    !l && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(n, r, l) {
    const { drag: o } = this.getProps();
    if (!l || !vo(n, o, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(n);
    let u = this.originPoint[n] + l[n];
    this.constraints && this.constraints[n] && (u = uR(u, this.constraints[n], this.elastic[n])), c.set(u);
  }
  resolveConstraints() {
    const { dragConstraints: n, dragElastic: r } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, o = this.constraints;
    n && Ta(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && l ? this.constraints = cR(l.layoutBox, n) : this.constraints = !1, this.elastic = mR(r), o !== this.constraints && l && this.constraints && !this.hasMutatedConstraints && pn((c) => {
      this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = dR(l.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: r } = this.getProps();
    if (!n || !Ta(n))
      return !1;
    const l = n.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const c = vk(l, o.root, this.visualElement.getTransformPagePoint());
    let u = fR(o.layout.layoutBox, c);
    if (r) {
      const h = r(gk(u));
      this.hasMutatedConstraints = !!h, h && (u = $v(h));
    }
    return u;
  }
  startAnimation(n) {
    const { drag: r, dragMomentum: l, dragElastic: o, dragTransition: c, dragSnapToOrigin: u, onDragTransitionEnd: h } = this.getProps(), m = this.constraints || {}, d = pn((g) => {
      if (!vo(g, r, this.currentDirection))
        return;
      let y = m && m[g] || {};
      u && (y = { min: 0, max: 0 });
      const v = o ? 200 : 1e6, x = o ? 40 : 1e7, S = {
        type: "inertia",
        velocity: l ? n[g] : 0,
        bounceStiffness: v,
        bounceDamping: x,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...y
      };
      return this.startAxisValueAnimation(g, S);
    });
    return Promise.all(d).then(h);
  }
  startAxisValueAnimation(n, r) {
    const l = this.getAxisMotionValue(n);
    return kh(this.visualElement, n), l.start(vd(n, l, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    pn((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    pn((n) => this.getAxisMotionValue(n).animation?.pause());
  }
  getAnimationState(n) {
    return this.getAxisMotionValue(n).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(n) {
    const r = `_drag${n.toUpperCase()}`, l = this.visualElement.getProps(), o = l[r];
    return o || this.visualElement.getValue(n, (l.initial ? l.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    pn((r) => {
      const { drag: l } = this.getProps();
      if (!vo(r, l, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, c = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: u, max: h } = o.layout.layoutBox[r], m = c.get() || 0;
        c.set(n[r] - Wt(u, h, 0.5) + m);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: l } = this.visualElement;
    if (!Ta(r) || !l || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    pn((u) => {
      const h = this.getAxisMotionValue(u);
      if (h && this.constraints !== !1) {
        const m = h.get();
        o[u] = hR({ min: m, max: m }, this.constraints[u]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), pn((u) => {
      if (!vo(u, n, null))
        return;
      const h = this.getAxisMotionValue(u), { min: m, max: d } = this.constraints[u];
      h.set(Wt(m, d, o[u]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    pR.set(this.visualElement, this);
    const n = this.visualElement.current, r = Ca(n, "pointerdown", (m) => {
      const { drag: d, dragListener: g = !0 } = this.getProps(), y = m.target, v = y !== n && Xv(y);
      d && g && !v && this.start(m);
    }), l = () => {
      const { dragConstraints: m } = this.getProps();
      Ta(m) && m.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, c = o.addEventListener("measure", l);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Zt.read(l);
    const u = La(window, "resize", () => this.scalePositionWithinConstraints()), h = o.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: d }) => {
      this.isDragging && d && (pn((g) => {
        const y = this.getAxisMotionValue(g);
        y && (this.originPoint[g] += m[g].translate, y.set(y.get() + m[g].translate));
      }), this.visualElement.render());
    }));
    return () => {
      u(), r(), c(), h && h();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: l = !1, dragPropagation: o = !1, dragConstraints: c = !1, dragElastic: u = Nh, dragMomentum: h = !0 } = n;
    return {
      ...n,
      drag: r,
      dragDirectionLock: l,
      dragPropagation: o,
      dragConstraints: c,
      dragElastic: u,
      dragMomentum: h
    };
  }
}
function vo(t, n, r) {
  return (n === !0 || n === t) && (r === null || r === t);
}
function yR(t, n = 10) {
  let r = null;
  return Math.abs(t.y) > n ? r = "y" : Math.abs(t.x) > n && (r = "x"), r;
}
class bR extends Bi {
  constructor(n) {
    super(n), this.removeGroupControls = bn, this.removeListeners = bn, this.controls = new gR(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || bn;
  }
  update() {
    const { dragControls: n } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    n !== r && (this.removeGroupControls(), n && (this.removeGroupControls = n.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const O1 = (t) => (n, r) => {
  t && Zt.postRender(() => t(n, r));
};
class vR extends Bi {
  constructor() {
    super(...arguments), this.removePointerDownListener = bn;
  }
  onPointerDown(n) {
    this.session = new Mx(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Rx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: r, onPan: l, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: O1(n),
      onStart: O1(r),
      onMove: l,
      onEnd: (c, u) => {
        delete this.session, o && Zt.postRender(() => o(c, u));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ca(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Yf = !1;
class xR extends tt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: l, layoutId: o } = this.props, { projection: c } = n;
    c && (r.group && r.group.add(c), l && l.register && o && l.register(c), Yf && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Mo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: r, visualElement: l, drag: o, isPresent: c } = this.props, { projection: u } = l;
    return u && (u.isPresent = c, n.layoutDependency !== r && u.setOptions({
      ...u.options,
      layoutDependency: r
    }), Yf = !0, o || n.layoutDependency !== r || r === void 0 || n.isPresent !== c ? u.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? u.promote() : u.relegate() || Zt.postRender(() => {
      const h = u.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), Ed.postRender(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: l } = this.props, { projection: o } = n;
    Yf = !0, o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), l && l.deregister && l.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function zx(t) {
  const [n, r] = xx(), l = tt.useContext(td);
  return ft.jsx(xR, { ...t, layoutGroup: l, switchLayoutGroup: tt.useContext(kx), isPresent: n, safeToRemove: r });
}
const SR = {
  pan: {
    Feature: vR
  },
  drag: {
    Feature: bR,
    ProjectionNode: vx,
    MeasureLayout: zx
  }
};
function z1(t, n, r) {
  const { props: l } = t;
  t.animationState && l.whileHover && t.animationState.setActive("whileHover", r === "Start");
  const o = "onHover" + r, c = l[o];
  c && Zt.postRender(() => c(n, Ga(n)));
}
class TR extends Bi {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = ik(n, (r, l) => (z1(this.node, l, "Start"), (o) => z1(this.node, o, "End"))));
  }
  unmount() {
  }
}
class ER extends Bi {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Fa(La(this.node.current, "focus", () => this.onFocus()), La(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function _1(t, n, r) {
  const { props: l } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && l.whileTap && t.animationState.setActive("whileTap", r === "Start");
  const o = "onTap" + (r === "End" ? "" : r), c = l[o];
  c && Zt.postRender(() => c(n, Ga(n)));
}
class AR extends Bi {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = ak(n, (r, l) => (_1(this.node, l, "Start"), (o, { success: c }) => _1(this.node, o, c ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Bh = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), wR = (t) => {
  const n = Bh.get(t.target);
  n && n(t);
}, CR = (t) => {
  t.forEach(wR);
};
function kR({ root: t, ...n }) {
  const r = t || document;
  Gf.has(r) || Gf.set(r, {});
  const l = Gf.get(r), o = JSON.stringify(n);
  return l[o] || (l[o] = new IntersectionObserver(CR, { root: t, ...n })), l[o];
}
function DR(t, n, r) {
  const l = kR(n);
  return Bh.set(t, r), l.observe(t), () => {
    Bh.delete(t), l.unobserve(t);
  };
}
const RR = {
  some: 0,
  all: 1
};
class MR extends Bi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: r, margin: l, amount: o = "some", once: c } = n, u = {
      root: r ? r.current : void 0,
      rootMargin: l,
      threshold: typeof o == "number" ? o : RR[o]
    }, h = (m) => {
      const { isIntersecting: d } = m;
      if (this.isInView === d || (this.isInView = d, c && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), v = d ? g : y;
      v && v(m);
    };
    return DR(this.node.current, u, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(OR(n, r)) && this.startObserver();
  }
  unmount() {
  }
}
function OR({ viewport: t = {} }, { viewport: n = {} } = {}) {
  return (r) => t[r] !== n[r];
}
const zR = {
  inView: {
    Feature: MR
  },
  tap: {
    Feature: AR
  },
  focus: {
    Feature: ER
  },
  hover: {
    Feature: TR
  }
}, _R = {
  layout: {
    ProjectionNode: vx,
    MeasureLayout: zx
  }
}, LR = {
  ...rR,
  ...zR,
  ...SR,
  ..._R
}, Ho = /* @__PURE__ */ WD(LR, tR);
function NR(t, n) {
  const r = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const BR = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, UR = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, VR = {};
function L1(t, n) {
  return (VR.jsx ? UR : BR).test(t);
}
const jR = /[ \t\n\f\r]/g;
function HR(t) {
  return typeof t == "object" ? t.type === "text" ? N1(t.value) : !1 : N1(t);
}
function N1(t) {
  return t.replace(jR, "") === "";
}
class Xa {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(n, r, l) {
    this.normal = r, this.property = n, l && (this.space = l);
  }
}
Xa.prototype.normal = {};
Xa.prototype.property = {};
Xa.prototype.space = void 0;
function _x(t, n) {
  const r = {}, l = {};
  for (const o of t)
    Object.assign(r, o.property), Object.assign(l, o.normal);
  return new Xa(r, l, n);
}
function Uh(t) {
  return t.toLowerCase();
}
class Xe {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(n, r) {
    this.attribute = r, this.property = n;
  }
}
Xe.prototype.attribute = "";
Xe.prototype.booleanish = !1;
Xe.prototype.boolean = !1;
Xe.prototype.commaOrSpaceSeparated = !1;
Xe.prototype.commaSeparated = !1;
Xe.prototype.defined = !1;
Xe.prototype.mustUseProperty = !1;
Xe.prototype.number = !1;
Xe.prototype.overloadedBoolean = !1;
Xe.prototype.property = "";
Xe.prototype.spaceSeparated = !1;
Xe.prototype.space = void 0;
let qR = 0;
const At = hr(), ce = hr(), Vh = hr(), $ = hr(), It = hr(), ul = hr(), en = hr();
function hr() {
  return 2 ** ++qR;
}
const jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: At,
  booleanish: ce,
  commaOrSpaceSeparated: en,
  commaSeparated: ul,
  number: $,
  overloadedBoolean: Vh,
  spaceSeparated: It
}, Symbol.toStringTag, { value: "Module" })), Xf = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(jh)
);
class zd extends Xe {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(n, r, l, o) {
    let c = -1;
    if (super(n, r), B1(this, "space", o), typeof l == "number")
      for (; ++c < Xf.length; ) {
        const u = Xf[c];
        B1(this, Xf[c], (l & jh[u]) === jh[u]);
      }
  }
}
zd.prototype.defined = !0;
function B1(t, n, r) {
  r && (t[n] = r);
}
function bl(t) {
  const n = {}, r = {};
  for (const [l, o] of Object.entries(t.properties)) {
    const c = new zd(
      l,
      t.transform(t.attributes || {}, l),
      o,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(l) && (c.mustUseProperty = !0), n[l] = c, r[Uh(l)] = l, r[Uh(c.attribute)] = l;
  }
  return new Xa(n, r, t.space);
}
const Lx = bl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ce,
    ariaAutoComplete: null,
    ariaBusy: ce,
    ariaChecked: ce,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: It,
    ariaCurrent: null,
    ariaDescribedBy: It,
    ariaDetails: null,
    ariaDisabled: ce,
    ariaDropEffect: It,
    ariaErrorMessage: null,
    ariaExpanded: ce,
    ariaFlowTo: It,
    ariaGrabbed: ce,
    ariaHasPopup: null,
    ariaHidden: ce,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: It,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: ce,
    ariaMultiLine: ce,
    ariaMultiSelectable: ce,
    ariaOrientation: null,
    ariaOwns: It,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: ce,
    ariaReadOnly: ce,
    ariaRelevant: null,
    ariaRequired: ce,
    ariaRoleDescription: It,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: ce,
    ariaSetSize: $,
    ariaSort: null,
    ariaValueMax: $,
    ariaValueMin: $,
    ariaValueNow: $,
    ariaValueText: null,
    role: null
  },
  transform(t, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function Nx(t, n) {
  return n in t ? t[n] : n;
}
function Bx(t, n) {
  return Nx(t, n.toLowerCase());
}
const FR = bl({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: ul,
    acceptCharset: It,
    accessKey: It,
    action: null,
    allow: null,
    allowFullScreen: At,
    allowPaymentRequest: At,
    allowUserMedia: At,
    alt: null,
    as: null,
    async: At,
    autoCapitalize: null,
    autoComplete: It,
    autoFocus: At,
    autoPlay: At,
    blocking: It,
    capture: null,
    charSet: null,
    checked: At,
    cite: null,
    className: It,
    cols: $,
    colSpan: null,
    content: null,
    contentEditable: ce,
    controls: At,
    controlsList: It,
    coords: $ | ul,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: At,
    defer: At,
    dir: null,
    dirName: null,
    disabled: At,
    download: Vh,
    draggable: ce,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: At,
    formTarget: null,
    headers: It,
    height: $,
    hidden: Vh,
    high: $,
    href: null,
    hrefLang: null,
    htmlFor: It,
    httpEquiv: It,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: At,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: At,
    itemId: null,
    itemProp: It,
    itemRef: It,
    itemScope: At,
    itemType: It,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: At,
    low: $,
    manifest: null,
    max: null,
    maxLength: $,
    media: null,
    method: null,
    min: null,
    minLength: $,
    multiple: At,
    muted: At,
    name: null,
    nonce: null,
    noModule: At,
    noValidate: At,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: At,
    optimum: $,
    pattern: null,
    ping: It,
    placeholder: null,
    playsInline: At,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: At,
    referrerPolicy: null,
    rel: It,
    required: At,
    reversed: At,
    rows: $,
    rowSpan: $,
    sandbox: It,
    scope: null,
    scoped: At,
    seamless: At,
    selected: At,
    shadowRootClonable: At,
    shadowRootDelegatesFocus: At,
    shadowRootMode: null,
    shape: null,
    size: $,
    sizes: null,
    slot: null,
    span: $,
    spellCheck: ce,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: $,
    step: null,
    style: null,
    tabIndex: $,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: At,
    useMap: null,
    value: ce,
    width: $,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: It,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: $,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: $,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: At,
    // Lists. Use CSS to reduce space between items instead
    declare: At,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: $,
    // `<img>` and `<object>`
    leftMargin: $,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: $,
    // `<body>`
    marginWidth: $,
    // `<body>`
    noResize: At,
    // `<frame>`
    noHref: At,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: At,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: At,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: $,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ce,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: $,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: $,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: At,
    disableRemotePlayback: At,
    prefix: null,
    property: null,
    results: $,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Bx
}), PR = bl({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: en,
    accentHeight: $,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: $,
    amplitude: $,
    arabicForm: null,
    ascent: $,
    attributeName: null,
    attributeType: null,
    azimuth: $,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: $,
    by: null,
    calcMode: null,
    capHeight: $,
    className: It,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: $,
    diffuseConstant: $,
    direction: null,
    display: null,
    dur: null,
    divisor: $,
    dominantBaseline: null,
    download: At,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: $,
    enableBackground: null,
    end: null,
    event: null,
    exponent: $,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: $,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: ul,
    g2: ul,
    glyphName: ul,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: $,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: $,
    horizOriginX: $,
    horizOriginY: $,
    id: null,
    ideographic: $,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: $,
    k: $,
    k1: $,
    k2: $,
    k3: $,
    k4: $,
    kernelMatrix: en,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: $,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: $,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: $,
    overlineThickness: $,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: $,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: It,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: $,
    pointsAtY: $,
    pointsAtZ: $,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: en,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: en,
    rev: en,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: en,
    requiredFeatures: en,
    requiredFonts: en,
    requiredFormats: en,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: $,
    specularExponent: $,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: $,
    strikethroughThickness: $,
    string: null,
    stroke: null,
    strokeDashArray: en,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: $,
    strokeOpacity: $,
    strokeWidth: null,
    style: null,
    surfaceScale: $,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: en,
    tabIndex: $,
    tableValues: null,
    target: null,
    targetX: $,
    targetY: $,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: en,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: $,
    underlineThickness: $,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: $,
    values: null,
    vAlphabetic: $,
    vMathematical: $,
    vectorEffect: null,
    vHanging: $,
    vIdeographic: $,
    version: null,
    vertAdvY: $,
    vertOriginX: $,
    vertOriginY: $,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: $,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Nx
}), Ux = bl({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
}), Vx = bl({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Bx
}), jx = bl({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), YR = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, GR = /[A-Z]/g, U1 = /-[a-z]/g, XR = /^data[-\w.:]+$/i;
function IR(t, n) {
  const r = Uh(n);
  let l = n, o = Xe;
  if (r in t.normal)
    return t.property[t.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && XR.test(n)) {
    if (n.charAt(4) === "-") {
      const c = n.slice(5).replace(U1, QR);
      l = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = n.slice(4);
      if (!U1.test(c)) {
        let u = c.replace(GR, KR);
        u.charAt(0) !== "-" && (u = "-" + u), n = "data" + u;
      }
    }
    o = zd;
  }
  return new o(l, n);
}
function KR(t) {
  return "-" + t.toLowerCase();
}
function QR(t) {
  return t.charAt(1).toUpperCase();
}
const ZR = _x([Lx, FR, Ux, Vx, jx], "html"), _d = _x([Lx, PR, Ux, Vx, jx], "svg");
function JR(t) {
  return t.join(" ").trim();
}
var el = {}, If, V1;
function $R() {
  if (V1) return If;
  V1 = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, r = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, h = /^\s+|\s+$/g, m = `
`, d = "/", g = "*", y = "", v = "comment", x = "declaration";
  function S(A, C) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    C = C || {};
    var L = 1, M = 1;
    function Y(st) {
      var W = st.match(n);
      W && (L += W.length);
      var N = st.lastIndexOf(m);
      M = ~N ? st.length - N : M + st.length;
    }
    function Q() {
      var st = { line: L, column: M };
      return function(W) {
        return W.position = new _(st), lt(), W;
      };
    }
    function _(st) {
      this.start = st, this.end = { line: L, column: M }, this.source = C.source;
    }
    _.prototype.content = A;
    function Z(st) {
      var W = new Error(
        C.source + ":" + L + ":" + M + ": " + st
      );
      if (W.reason = st, W.filename = C.source, W.line = L, W.column = M, W.source = A, !C.silent) throw W;
    }
    function J(st) {
      var W = st.exec(A);
      if (W) {
        var N = W[0];
        return Y(N), A = A.slice(N.length), W;
      }
    }
    function lt() {
      J(r);
    }
    function B(st) {
      var W;
      for (st = st || []; W = et(); )
        W !== !1 && st.push(W);
      return st;
    }
    function et() {
      var st = Q();
      if (!(d != A.charAt(0) || g != A.charAt(1))) {
        for (var W = 2; y != A.charAt(W) && (g != A.charAt(W) || d != A.charAt(W + 1)); )
          ++W;
        if (W += 2, y === A.charAt(W - 1))
          return Z("End of comment missing");
        var N = A.slice(2, W - 2);
        return M += 2, Y(N), A = A.slice(W), M += 2, st({
          type: v,
          comment: N
        });
      }
    }
    function nt() {
      var st = Q(), W = J(l);
      if (W) {
        if (et(), !J(o)) return Z("property missing ':'");
        var N = J(c), I = st({
          type: x,
          property: w(W[0].replace(t, y)),
          value: N ? w(N[0].replace(t, y)) : y
        });
        return J(u), I;
      }
    }
    function xt() {
      var st = [];
      B(st);
      for (var W; W = nt(); )
        W !== !1 && (st.push(W), B(st));
      return st;
    }
    return lt(), xt();
  }
  function w(A) {
    return A ? A.replace(h, y) : y;
  }
  return If = S, If;
}
var j1;
function WR() {
  if (j1) return el;
  j1 = 1;
  var t = el && el.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(el, "__esModule", { value: !0 }), el.default = r;
  const n = t($R());
  function r(l, o) {
    let c = null;
    if (!l || typeof l != "string")
      return c;
    const u = (0, n.default)(l), h = typeof o == "function";
    return u.forEach((m) => {
      if (m.type !== "declaration")
        return;
      const { property: d, value: g } = m;
      h ? o(d, g, m) : g && (c = c || {}, c[d] = g);
    }), c;
  }
  return el;
}
var ya = {}, H1;
function tM() {
  if (H1) return ya;
  H1 = 1, Object.defineProperty(ya, "__esModule", { value: !0 }), ya.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, o = /^-(ms)-/, c = function(d) {
    return !d || r.test(d) || t.test(d);
  }, u = function(d, g) {
    return g.toUpperCase();
  }, h = function(d, g) {
    return "".concat(g, "-");
  }, m = function(d, g) {
    return g === void 0 && (g = {}), c(d) ? d : (d = d.toLowerCase(), g.reactCompat ? d = d.replace(o, h) : d = d.replace(l, h), d.replace(n, u));
  };
  return ya.camelCase = m, ya;
}
var ba, q1;
function eM() {
  if (q1) return ba;
  q1 = 1;
  var t = ba && ba.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  }, n = t(WR()), r = tM();
  function l(o, c) {
    var u = {};
    return !o || typeof o != "string" || (0, n.default)(o, function(h, m) {
      h && m && (u[(0, r.camelCase)(h, c)] = m);
    }), u;
  }
  return l.default = l, ba = l, ba;
}
var nM = eM();
const iM = /* @__PURE__ */ Kh(nM), Hx = qx("end"), Ld = qx("start");
function qx(t) {
  return n;
  function n(r) {
    const l = r && r.position && r.position[t] || {};
    if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0)
      return {
        line: l.line,
        column: l.column,
        offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0
      };
  }
}
function rM(t) {
  const n = Ld(t), r = Hx(t);
  if (n && r)
    return { start: n, end: r };
}
function ka(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? F1(t.position) : "start" in t || "end" in t ? F1(t) : "line" in t || "column" in t ? Hh(t) : "";
}
function Hh(t) {
  return P1(t && t.line) + ":" + P1(t && t.column);
}
function F1(t) {
  return Hh(t && t.start) + "-" + Hh(t && t.end);
}
function P1(t) {
  return t && typeof t == "number" ? t : 1;
}
class De extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, r, l) {
    super(), typeof r == "string" && (l = r, r = void 0);
    let o = "", c = {}, u = !1;
    if (r && ("line" in r && "column" in r ? c = { place: r } : "start" in r && "end" in r ? c = { place: r } : "type" in r ? c = {
      ancestors: [r],
      place: r.position
    } : c = { ...r }), typeof n == "string" ? o = n : !c.cause && n && (u = !0, o = n.message, c.cause = n), !c.ruleId && !c.source && typeof l == "string") {
      const m = l.indexOf(":");
      m === -1 ? c.ruleId = l : (c.source = l.slice(0, m), c.ruleId = l.slice(m + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const m = c.ancestors[c.ancestors.length - 1];
      m && (c.place = m.position);
    }
    const h = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = h ? h.column : void 0, this.fatal = void 0, this.file = "", this.message = o, this.line = h ? h.line : void 0, this.name = ka(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = u && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
De.prototype.file = "";
De.prototype.name = "";
De.prototype.reason = "";
De.prototype.message = "";
De.prototype.stack = "";
De.prototype.column = void 0;
De.prototype.line = void 0;
De.prototype.ancestors = void 0;
De.prototype.cause = void 0;
De.prototype.fatal = void 0;
De.prototype.place = void 0;
De.prototype.ruleId = void 0;
De.prototype.source = void 0;
const Nd = {}.hasOwnProperty, lM = /* @__PURE__ */ new Map(), aM = /[A-Z]/g, sM = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), oM = /* @__PURE__ */ new Set(["td", "th"]), Fx = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function uM(t, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = n.filePath || void 0;
  let l;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    l = yM(r, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    l = gM(r, n.jsx, n.jsxs);
  }
  const o = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: l,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? _d : ZR,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, c = Px(o, t, void 0);
  return c && typeof c != "string" ? c : o.create(
    t,
    o.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function Px(t, n, r) {
  if (n.type === "element")
    return cM(t, n, r);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return fM(t, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return dM(t, n, r);
  if (n.type === "mdxjsEsm")
    return hM(t, n);
  if (n.type === "root")
    return mM(t, n, r);
  if (n.type === "text")
    return pM(t, n);
}
function cM(t, n, r) {
  const l = t.schema;
  let o = l;
  n.tagName.toLowerCase() === "svg" && l.space === "html" && (o = _d, t.schema = o), t.ancestors.push(n);
  const c = Gx(t, n.tagName, !1), u = bM(t, n);
  let h = Ud(t, n);
  return sM.has(n.tagName) && (h = h.filter(function(m) {
    return typeof m == "string" ? !HR(m) : !0;
  })), Yx(t, u, c, n), Bd(u, h), t.ancestors.pop(), t.schema = l, t.create(n, c, u, r);
}
function fM(t, n) {
  if (n.data && n.data.estree && t.evaluater) {
    const l = n.data.estree.body[0];
    return l.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(l.expression);
  }
  Na(t, n.position);
}
function hM(t, n) {
  if (n.data && n.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(n.data.estree)
    );
  Na(t, n.position);
}
function dM(t, n, r) {
  const l = t.schema;
  let o = l;
  n.name === "svg" && l.space === "html" && (o = _d, t.schema = o), t.ancestors.push(n);
  const c = n.name === null ? t.Fragment : Gx(t, n.name, !0), u = vM(t, n), h = Ud(t, n);
  return Yx(t, u, c, n), Bd(u, h), t.ancestors.pop(), t.schema = l, t.create(n, c, u, r);
}
function mM(t, n, r) {
  const l = {};
  return Bd(l, Ud(t, n)), t.create(n, t.Fragment, l, r);
}
function pM(t, n) {
  return n.value;
}
function Yx(t, n, r, l) {
  typeof r != "string" && r !== t.Fragment && t.passNode && (n.node = l);
}
function Bd(t, n) {
  if (n.length > 0) {
    const r = n.length > 1 ? n : n[0];
    r && (t.children = r);
  }
}
function gM(t, n, r) {
  return l;
  function l(o, c, u, h) {
    const d = Array.isArray(u.children) ? r : n;
    return h ? d(c, u, h) : d(c, u);
  }
}
function yM(t, n) {
  return r;
  function r(l, o, c, u) {
    const h = Array.isArray(c.children), m = Ld(l);
    return n(
      o,
      c,
      u,
      h,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: t,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function bM(t, n) {
  const r = {};
  let l, o;
  for (o in n.properties)
    if (o !== "children" && Nd.call(n.properties, o)) {
      const c = xM(t, o, n.properties[o]);
      if (c) {
        const [u, h] = c;
        t.tableCellAlignToStyle && u === "align" && typeof h == "string" && oM.has(n.tagName) ? l = h : r[u] = h;
      }
    }
  if (l) {
    const c = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    c[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
  }
  return r;
}
function vM(t, n) {
  const r = {};
  for (const l of n.attributes)
    if (l.type === "mdxJsxExpressionAttribute")
      if (l.data && l.data.estree && t.evaluater) {
        const c = l.data.estree.body[0];
        c.type;
        const u = c.expression;
        u.type;
        const h = u.properties[0];
        h.type, Object.assign(
          r,
          t.evaluater.evaluateExpression(h.argument)
        );
      } else
        Na(t, n.position);
    else {
      const o = l.name;
      let c;
      if (l.value && typeof l.value == "object")
        if (l.value.data && l.value.data.estree && t.evaluater) {
          const h = l.value.data.estree.body[0];
          h.type, c = t.evaluater.evaluateExpression(h.expression);
        } else
          Na(t, n.position);
      else
        c = l.value === null ? !0 : l.value;
      r[o] = /** @type {Props[keyof Props]} */
      c;
    }
  return r;
}
function Ud(t, n) {
  const r = [];
  let l = -1;
  const o = t.passKeys ? /* @__PURE__ */ new Map() : lM;
  for (; ++l < n.children.length; ) {
    const c = n.children[l];
    let u;
    if (t.passKeys) {
      const m = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (m) {
        const d = o.get(m) || 0;
        u = m + "-" + d, o.set(m, d + 1);
      }
    }
    const h = Px(t, c, u);
    h !== void 0 && r.push(h);
  }
  return r;
}
function xM(t, n, r) {
  const l = IR(t.schema, n);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = l.commaSeparated ? NR(r) : JR(r)), l.property === "style") {
      let o = typeof r == "object" ? r : SM(t, String(r));
      return t.stylePropertyNameCase === "css" && (o = TM(o)), ["style", o];
    }
    return [
      t.elementAttributeNameCase === "react" && l.space ? YR[l.property] || l.property : l.attribute,
      r
    ];
  }
}
function SM(t, n) {
  try {
    return iM(n, { reactCompat: !0 });
  } catch (r) {
    if (t.ignoreInvalidStyle)
      return {};
    const l = (
      /** @type {Error} */
      r
    ), o = new De("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: l,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = t.filePath || void 0, o.url = Fx + "#cannot-parse-style-attribute", o;
  }
}
function Gx(t, n, r) {
  let l;
  if (!r)
    l = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const o = n.split(".");
    let c = -1, u;
    for (; ++c < o.length; ) {
      const h = L1(o[c]) ? { type: "Identifier", name: o[c] } : { type: "Literal", value: o[c] };
      u = u ? {
        type: "MemberExpression",
        object: u,
        property: h,
        computed: !!(c && h.type === "Literal"),
        optional: !1
      } : h;
    }
    l = u;
  } else
    l = L1(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (l.type === "Literal") {
    const o = (
      /** @type {string | number} */
      l.value
    );
    return Nd.call(t.components, o) ? t.components[o] : o;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(l);
  Na(t);
}
function Na(t, n) {
  const r = new De(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = t.filePath || void 0, r.url = Fx + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function TM(t) {
  const n = {};
  let r;
  for (r in t)
    Nd.call(t, r) && (n[EM(r)] = t[r]);
  return n;
}
function EM(t) {
  let n = t.replace(aM, AM);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function AM(t) {
  return "-" + t.toLowerCase();
}
const Kf = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, wM = {};
function Vd(t, n) {
  const r = wM, l = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return Xx(t, l, o);
}
function Xx(t, n, r) {
  if (CM(t)) {
    if ("value" in t)
      return t.type === "html" && !r ? "" : t.value;
    if (n && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return Y1(t.children, n, r);
  }
  return Array.isArray(t) ? Y1(t, n, r) : "";
}
function Y1(t, n, r) {
  const l = [];
  let o = -1;
  for (; ++o < t.length; )
    l[o] = Xx(t[o], n, r);
  return l.join("");
}
function CM(t) {
  return !!(t && typeof t == "object");
}
const G1 = document.createElement("i");
function jd(t) {
  const n = "&" + t + ";";
  G1.innerHTML = n;
  const r = G1.textContent;
  return r.charCodeAt(r.length - 1) === 59 && t !== "semi" || r === n ? !1 : r;
}
function nn(t, n, r, l) {
  const o = t.length;
  let c = 0, u;
  if (n < 0 ? n = -n > o ? 0 : o + n : n = n > o ? o : n, r = r > 0 ? r : 0, l.length < 1e4)
    u = Array.from(l), u.unshift(n, r), t.splice(...u);
  else
    for (r && t.splice(n, r); c < l.length; )
      u = l.slice(c, c + 1e4), u.unshift(n, 0), t.splice(...u), c += 1e4, n += 1e4;
}
function gn(t, n) {
  return t.length > 0 ? (nn(t, t.length, 0, n), t) : n;
}
const X1 = {}.hasOwnProperty;
function Ix(t) {
  const n = {};
  let r = -1;
  for (; ++r < t.length; )
    kM(n, t[r]);
  return n;
}
function kM(t, n) {
  let r;
  for (r in n) {
    const o = (X1.call(t, r) ? t[r] : void 0) || (t[r] = {}), c = n[r];
    let u;
    if (c)
      for (u in c) {
        X1.call(o, u) || (o[u] = []);
        const h = c[u];
        DM(
          // @ts-expect-error Looks like a list.
          o[u],
          Array.isArray(h) ? h : h ? [h] : []
        );
      }
  }
}
function DM(t, n) {
  let r = -1;
  const l = [];
  for (; ++r < n.length; )
    (n[r].add === "after" ? t : l).push(n[r]);
  nn(t, 0, 0, l);
}
function Kx(t, n) {
  const r = Number.parseInt(t, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function wn(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ze = Ui(/[A-Za-z]/), ke = Ui(/[\dA-Za-z]/), RM = Ui(/[#-'*+\--9=?A-Z^-~]/);
function qo(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const qh = Ui(/\d/), MM = Ui(/[\dA-Fa-f]/), OM = Ui(/[!-/:-@[-`{-~]/);
function pt(t) {
  return t !== null && t < -2;
}
function Xt(t) {
  return t !== null && (t < 0 || t === 32);
}
function Dt(t) {
  return t === -2 || t === -1 || t === 32;
}
const tu = Ui(new RegExp("\\p{P}|\\p{S}", "u")), fr = Ui(/\s/);
function Ui(t) {
  return n;
  function n(r) {
    return r !== null && r > -1 && t.test(String.fromCharCode(r));
  }
}
function vl(t) {
  const n = [];
  let r = -1, l = 0, o = 0;
  for (; ++r < t.length; ) {
    const c = t.charCodeAt(r);
    let u = "";
    if (c === 37 && ke(t.charCodeAt(r + 1)) && ke(t.charCodeAt(r + 2)))
      o = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (u = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const h = t.charCodeAt(r + 1);
      c < 56320 && h > 56319 && h < 57344 ? (u = String.fromCharCode(c, h), o = 1) : u = "�";
    } else
      u = String.fromCharCode(c);
    u && (n.push(t.slice(l, r), encodeURIComponent(u)), l = r + o + 1, u = ""), o && (r += o, o = 0);
  }
  return n.join("") + t.slice(l);
}
function _t(t, n, r, l) {
  const o = l ? l - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return u;
  function u(m) {
    return Dt(m) ? (t.enter(r), h(m)) : n(m);
  }
  function h(m) {
    return Dt(m) && c++ < o ? (t.consume(m), h) : (t.exit(r), n(m));
  }
}
const zM = {
  tokenize: _M
};
function _M(t) {
  const n = t.attempt(this.parser.constructs.contentInitial, l, o);
  let r;
  return n;
  function l(h) {
    if (h === null) {
      t.consume(h);
      return;
    }
    return t.enter("lineEnding"), t.consume(h), t.exit("lineEnding"), _t(t, n, "linePrefix");
  }
  function o(h) {
    return t.enter("paragraph"), c(h);
  }
  function c(h) {
    const m = t.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = m), r = m, u(h);
  }
  function u(h) {
    if (h === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(h);
      return;
    }
    return pt(h) ? (t.consume(h), t.exit("chunkText"), c) : (t.consume(h), u);
  }
}
const LM = {
  tokenize: NM
}, I1 = {
  tokenize: BM
};
function NM(t) {
  const n = this, r = [];
  let l = 0, o, c, u;
  return h;
  function h(M) {
    if (l < r.length) {
      const Y = r[l];
      return n.containerState = Y[1], t.attempt(Y[0].continuation, m, d)(M);
    }
    return d(M);
  }
  function m(M) {
    if (l++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, o && L();
      const Y = n.events.length;
      let Q = Y, _;
      for (; Q--; )
        if (n.events[Q][0] === "exit" && n.events[Q][1].type === "chunkFlow") {
          _ = n.events[Q][1].end;
          break;
        }
      C(l);
      let Z = Y;
      for (; Z < n.events.length; )
        n.events[Z][1].end = {
          ..._
        }, Z++;
      return nn(n.events, Q + 1, 0, n.events.slice(Y)), n.events.length = Z, d(M);
    }
    return h(M);
  }
  function d(M) {
    if (l === r.length) {
      if (!o)
        return v(M);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return S(M);
      n.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, t.check(I1, g, y)(M);
  }
  function g(M) {
    return o && L(), C(l), v(M);
  }
  function y(M) {
    return n.parser.lazy[n.now().line] = l !== r.length, u = n.now().offset, S(M);
  }
  function v(M) {
    return n.containerState = {}, t.attempt(I1, x, S)(M);
  }
  function x(M) {
    return l++, r.push([n.currentConstruct, n.containerState]), v(M);
  }
  function S(M) {
    if (M === null) {
      o && L(), C(0), t.consume(M);
      return;
    }
    return o = o || n.parser.flow(n.now()), t.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: c
    }), w(M);
  }
  function w(M) {
    if (M === null) {
      A(t.exit("chunkFlow"), !0), C(0), t.consume(M);
      return;
    }
    return pt(M) ? (t.consume(M), A(t.exit("chunkFlow")), l = 0, n.interrupt = void 0, h) : (t.consume(M), w);
  }
  function A(M, Y) {
    const Q = n.sliceStream(M);
    if (Y && Q.push(null), M.previous = c, c && (c.next = M), c = M, o.defineSkip(M.start), o.write(Q), n.parser.lazy[M.start.line]) {
      let _ = o.events.length;
      for (; _--; )
        if (
          // The token starts before the line ending…
          o.events[_][1].start.offset < u && // …and either is not ended yet…
          (!o.events[_][1].end || // …or ends after it.
          o.events[_][1].end.offset > u)
        )
          return;
      const Z = n.events.length;
      let J = Z, lt, B;
      for (; J--; )
        if (n.events[J][0] === "exit" && n.events[J][1].type === "chunkFlow") {
          if (lt) {
            B = n.events[J][1].end;
            break;
          }
          lt = !0;
        }
      for (C(l), _ = Z; _ < n.events.length; )
        n.events[_][1].end = {
          ...B
        }, _++;
      nn(n.events, J + 1, 0, n.events.slice(Z)), n.events.length = _;
    }
  }
  function C(M) {
    let Y = r.length;
    for (; Y-- > M; ) {
      const Q = r[Y];
      n.containerState = Q[1], Q[0].exit.call(n, t);
    }
    r.length = M;
  }
  function L() {
    o.write([null]), c = void 0, o = void 0, n.containerState._closeFlow = void 0;
  }
}
function BM(t, n, r) {
  return _t(t, t.attempt(this.parser.constructs.document, n, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function hl(t) {
  if (t === null || Xt(t) || fr(t))
    return 1;
  if (tu(t))
    return 2;
}
function eu(t, n, r) {
  const l = [];
  let o = -1;
  for (; ++o < t.length; ) {
    const c = t[o].resolveAll;
    c && !l.includes(c) && (n = c(n, r), l.push(c));
  }
  return n;
}
const Fh = {
  name: "attention",
  resolveAll: UM,
  tokenize: VM
};
function UM(t, n) {
  let r = -1, l, o, c, u, h, m, d, g;
  for (; ++r < t.length; )
    if (t[r][0] === "enter" && t[r][1].type === "attentionSequence" && t[r][1]._close) {
      for (l = r; l--; )
        if (t[l][0] === "exit" && t[l][1].type === "attentionSequence" && t[l][1]._open && // If the markers are the same:
        n.sliceSerialize(t[l][1]).charCodeAt(0) === n.sliceSerialize(t[r][1]).charCodeAt(0)) {
          if ((t[l][1]._close || t[r][1]._open) && (t[r][1].end.offset - t[r][1].start.offset) % 3 && !((t[l][1].end.offset - t[l][1].start.offset + t[r][1].end.offset - t[r][1].start.offset) % 3))
            continue;
          m = t[l][1].end.offset - t[l][1].start.offset > 1 && t[r][1].end.offset - t[r][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...t[l][1].end
          }, v = {
            ...t[r][1].start
          };
          K1(y, -m), K1(v, m), u = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...t[l][1].end
            }
          }, h = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[r][1].start
            },
            end: v
          }, c = {
            type: m > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[l][1].end
            },
            end: {
              ...t[r][1].start
            }
          }, o = {
            type: m > 1 ? "strong" : "emphasis",
            start: {
              ...u.start
            },
            end: {
              ...h.end
            }
          }, t[l][1].end = {
            ...u.start
          }, t[r][1].start = {
            ...h.end
          }, d = [], t[l][1].end.offset - t[l][1].start.offset && (d = gn(d, [["enter", t[l][1], n], ["exit", t[l][1], n]])), d = gn(d, [["enter", o, n], ["enter", u, n], ["exit", u, n], ["enter", c, n]]), d = gn(d, eu(n.parser.constructs.insideSpan.null, t.slice(l + 1, r), n)), d = gn(d, [["exit", c, n], ["enter", h, n], ["exit", h, n], ["exit", o, n]]), t[r][1].end.offset - t[r][1].start.offset ? (g = 2, d = gn(d, [["enter", t[r][1], n], ["exit", t[r][1], n]])) : g = 0, nn(t, l - 1, r - l + 3, d), r = l + d.length - g - 2;
          break;
        }
    }
  for (r = -1; ++r < t.length; )
    t[r][1].type === "attentionSequence" && (t[r][1].type = "data");
  return t;
}
function VM(t, n) {
  const r = this.parser.constructs.attentionMarkers.null, l = this.previous, o = hl(l);
  let c;
  return u;
  function u(m) {
    return c = m, t.enter("attentionSequence"), h(m);
  }
  function h(m) {
    if (m === c)
      return t.consume(m), h;
    const d = t.exit("attentionSequence"), g = hl(m), y = !g || g === 2 && o || r.includes(m), v = !o || o === 2 && g || r.includes(l);
    return d._open = !!(c === 42 ? y : y && (o || !v)), d._close = !!(c === 42 ? v : v && (g || !y)), n(m);
  }
}
function K1(t, n) {
  t.column += n, t.offset += n, t._bufferIndex += n;
}
const jM = {
  name: "autolink",
  tokenize: HM
};
function HM(t, n, r) {
  let l = 0;
  return o;
  function o(x) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(x) {
    return ze(x) ? (t.consume(x), u) : x === 64 ? r(x) : d(x);
  }
  function u(x) {
    return x === 43 || x === 45 || x === 46 || ke(x) ? (l = 1, h(x)) : d(x);
  }
  function h(x) {
    return x === 58 ? (t.consume(x), l = 0, m) : (x === 43 || x === 45 || x === 46 || ke(x)) && l++ < 32 ? (t.consume(x), h) : (l = 0, d(x));
  }
  function m(x) {
    return x === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.exit("autolink"), n) : x === null || x === 32 || x === 60 || qo(x) ? r(x) : (t.consume(x), m);
  }
  function d(x) {
    return x === 64 ? (t.consume(x), g) : RM(x) ? (t.consume(x), d) : r(x);
  }
  function g(x) {
    return ke(x) ? y(x) : r(x);
  }
  function y(x) {
    return x === 46 ? (t.consume(x), l = 0, g) : x === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(x), t.exit("autolinkMarker"), t.exit("autolink"), n) : v(x);
  }
  function v(x) {
    if ((x === 45 || ke(x)) && l++ < 63) {
      const S = x === 45 ? v : y;
      return t.consume(x), S;
    }
    return r(x);
  }
}
const Ia = {
  partial: !0,
  tokenize: qM
};
function qM(t, n, r) {
  return l;
  function l(c) {
    return Dt(c) ? _t(t, o, "linePrefix")(c) : o(c);
  }
  function o(c) {
    return c === null || pt(c) ? n(c) : r(c);
  }
}
const Qx = {
  continuation: {
    tokenize: PM
  },
  exit: YM,
  name: "blockQuote",
  tokenize: FM
};
function FM(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    if (u === 62) {
      const h = l.containerState;
      return h.open || (t.enter("blockQuote", {
        _container: !0
      }), h.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(u), t.exit("blockQuoteMarker"), c;
    }
    return r(u);
  }
  function c(u) {
    return Dt(u) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(u), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), n) : (t.exit("blockQuotePrefix"), n(u));
  }
}
function PM(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return Dt(u) ? _t(t, c, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u) : c(u);
  }
  function c(u) {
    return t.attempt(Qx, n, r)(u);
  }
}
function YM(t) {
  t.exit("blockQuote");
}
const Zx = {
  name: "characterEscape",
  tokenize: GM
};
function GM(t, n, r) {
  return l;
  function l(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), o;
  }
  function o(c) {
    return OM(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), n) : r(c);
  }
}
const Jx = {
  name: "characterReference",
  tokenize: XM
};
function XM(t, n, r) {
  const l = this;
  let o = 0, c, u;
  return h;
  function h(y) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), m;
  }
  function m(y) {
    return y === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(y), t.exit("characterReferenceMarkerNumeric"), d) : (t.enter("characterReferenceValue"), c = 31, u = ke, g(y));
  }
  function d(y) {
    return y === 88 || y === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(y), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, u = MM, g) : (t.enter("characterReferenceValue"), c = 7, u = qh, g(y));
  }
  function g(y) {
    if (y === 59 && o) {
      const v = t.exit("characterReferenceValue");
      return u === ke && !jd(l.sliceSerialize(v)) ? r(y) : (t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), t.exit("characterReference"), n);
    }
    return u(y) && o++ < c ? (t.consume(y), g) : r(y);
  }
}
const Q1 = {
  partial: !0,
  tokenize: KM
}, Z1 = {
  concrete: !0,
  name: "codeFenced",
  tokenize: IM
};
function IM(t, n, r) {
  const l = this, o = {
    partial: !0,
    tokenize: Q
  };
  let c = 0, u = 0, h;
  return m;
  function m(_) {
    return d(_);
  }
  function d(_) {
    const Z = l.events[l.events.length - 1];
    return c = Z && Z[1].type === "linePrefix" ? Z[2].sliceSerialize(Z[1], !0).length : 0, h = _, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), g(_);
  }
  function g(_) {
    return _ === h ? (u++, t.consume(_), g) : u < 3 ? r(_) : (t.exit("codeFencedFenceSequence"), Dt(_) ? _t(t, y, "whitespace")(_) : y(_));
  }
  function y(_) {
    return _ === null || pt(_) ? (t.exit("codeFencedFence"), l.interrupt ? n(_) : t.check(Q1, w, Y)(_)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), v(_));
  }
  function v(_) {
    return _ === null || pt(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(_)) : Dt(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), _t(t, x, "whitespace")(_)) : _ === 96 && _ === h ? r(_) : (t.consume(_), v);
  }
  function x(_) {
    return _ === null || pt(_) ? y(_) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(_));
  }
  function S(_) {
    return _ === null || pt(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(_)) : _ === 96 && _ === h ? r(_) : (t.consume(_), S);
  }
  function w(_) {
    return t.attempt(o, Y, A)(_);
  }
  function A(_) {
    return t.enter("lineEnding"), t.consume(_), t.exit("lineEnding"), C;
  }
  function C(_) {
    return c > 0 && Dt(_) ? _t(t, L, "linePrefix", c + 1)(_) : L(_);
  }
  function L(_) {
    return _ === null || pt(_) ? t.check(Q1, w, Y)(_) : (t.enter("codeFlowValue"), M(_));
  }
  function M(_) {
    return _ === null || pt(_) ? (t.exit("codeFlowValue"), L(_)) : (t.consume(_), M);
  }
  function Y(_) {
    return t.exit("codeFenced"), n(_);
  }
  function Q(_, Z, J) {
    let lt = 0;
    return B;
    function B(W) {
      return _.enter("lineEnding"), _.consume(W), _.exit("lineEnding"), et;
    }
    function et(W) {
      return _.enter("codeFencedFence"), Dt(W) ? _t(_, nt, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(W) : nt(W);
    }
    function nt(W) {
      return W === h ? (_.enter("codeFencedFenceSequence"), xt(W)) : J(W);
    }
    function xt(W) {
      return W === h ? (lt++, _.consume(W), xt) : lt >= u ? (_.exit("codeFencedFenceSequence"), Dt(W) ? _t(_, st, "whitespace")(W) : st(W)) : J(W);
    }
    function st(W) {
      return W === null || pt(W) ? (_.exit("codeFencedFence"), Z(W)) : J(W);
    }
  }
}
function KM(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return u === null ? r(u) : (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), c);
  }
  function c(u) {
    return l.parser.lazy[l.now().line] ? r(u) : n(u);
  }
}
const Qf = {
  name: "codeIndented",
  tokenize: ZM
}, QM = {
  partial: !0,
  tokenize: JM
};
function ZM(t, n, r) {
  const l = this;
  return o;
  function o(d) {
    return t.enter("codeIndented"), _t(t, c, "linePrefix", 5)(d);
  }
  function c(d) {
    const g = l.events[l.events.length - 1];
    return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], !0).length >= 4 ? u(d) : r(d);
  }
  function u(d) {
    return d === null ? m(d) : pt(d) ? t.attempt(QM, u, m)(d) : (t.enter("codeFlowValue"), h(d));
  }
  function h(d) {
    return d === null || pt(d) ? (t.exit("codeFlowValue"), u(d)) : (t.consume(d), h);
  }
  function m(d) {
    return t.exit("codeIndented"), n(d);
  }
}
function JM(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return l.parser.lazy[l.now().line] ? r(u) : pt(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), o) : _t(t, c, "linePrefix", 5)(u);
  }
  function c(u) {
    const h = l.events[l.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? n(u) : pt(u) ? o(u) : r(u);
  }
}
const $M = {
  name: "codeText",
  previous: tO,
  resolve: WM,
  tokenize: eO
};
function WM(t) {
  let n = t.length - 4, r = 3, l, o;
  if ((t[r][1].type === "lineEnding" || t[r][1].type === "space") && (t[n][1].type === "lineEnding" || t[n][1].type === "space")) {
    for (l = r; ++l < n; )
      if (t[l][1].type === "codeTextData") {
        t[r][1].type = "codeTextPadding", t[n][1].type = "codeTextPadding", r += 2, n -= 2;
        break;
      }
  }
  for (l = r - 1, n++; ++l <= n; )
    o === void 0 ? l !== n && t[l][1].type !== "lineEnding" && (o = l) : (l === n || t[l][1].type === "lineEnding") && (t[o][1].type = "codeTextData", l !== o + 2 && (t[o][1].end = t[l - 1][1].end, t.splice(o + 2, l - o - 2), n -= l - o - 2, l = o + 2), o = void 0);
  return t;
}
function tO(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function eO(t, n, r) {
  let l = 0, o, c;
  return u;
  function u(y) {
    return t.enter("codeText"), t.enter("codeTextSequence"), h(y);
  }
  function h(y) {
    return y === 96 ? (t.consume(y), l++, h) : (t.exit("codeTextSequence"), m(y));
  }
  function m(y) {
    return y === null ? r(y) : y === 32 ? (t.enter("space"), t.consume(y), t.exit("space"), m) : y === 96 ? (c = t.enter("codeTextSequence"), o = 0, g(y)) : pt(y) ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), m) : (t.enter("codeTextData"), d(y));
  }
  function d(y) {
    return y === null || y === 32 || y === 96 || pt(y) ? (t.exit("codeTextData"), m(y)) : (t.consume(y), d);
  }
  function g(y) {
    return y === 96 ? (t.consume(y), o++, g) : o === l ? (t.exit("codeTextSequence"), t.exit("codeText"), n(y)) : (c.type = "codeTextData", d(y));
  }
}
class nO {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, r) {
    const l = r ?? Number.POSITIVE_INFINITY;
    return l < this.left.length ? this.left.slice(n, l) : n > this.left.length ? this.right.slice(this.right.length - l + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - l + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, r, l) {
    const o = r || 0;
    this.setCursor(Math.trunc(n));
    const c = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return l && va(this.left, l), c.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), va(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), va(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const r = this.left.splice(n, Number.POSITIVE_INFINITY);
        va(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        va(this.left, r.reverse());
      }
  }
}
function va(t, n) {
  let r = 0;
  if (n.length < 1e4)
    t.push(...n);
  else
    for (; r < n.length; )
      t.push(...n.slice(r, r + 1e4)), r += 1e4;
}
function $x(t) {
  const n = {};
  let r = -1, l, o, c, u, h, m, d;
  const g = new nO(t);
  for (; ++r < g.length; ) {
    for (; r in n; )
      r = n[r];
    if (l = g.get(r), r && l[1].type === "chunkFlow" && g.get(r - 1)[1].type === "listItemPrefix" && (m = l[1]._tokenizer.events, c = 0, c < m.length && m[c][1].type === "lineEndingBlank" && (c += 2), c < m.length && m[c][1].type === "content"))
      for (; ++c < m.length && m[c][1].type !== "content"; )
        m[c][1].type === "chunkText" && (m[c][1]._isInFirstContentOfListItem = !0, c++);
    if (l[0] === "enter")
      l[1].contentType && (Object.assign(n, iO(g, r)), r = n[r], d = !0);
    else if (l[1]._container) {
      for (c = r, o = void 0; c--; )
        if (u = g.get(c), u[1].type === "lineEnding" || u[1].type === "lineEndingBlank")
          u[0] === "enter" && (o && (g.get(o)[1].type = "lineEndingBlank"), u[1].type = "lineEnding", o = c);
        else if (!(u[1].type === "linePrefix" || u[1].type === "listItemIndent")) break;
      o && (l[1].end = {
        ...g.get(o)[1].start
      }, h = g.slice(o, r), h.unshift(l), g.splice(o, r - o + 1, h));
    }
  }
  return nn(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !d;
}
function iO(t, n) {
  const r = t.get(n)[1], l = t.get(n)[2];
  let o = n - 1;
  const c = [];
  let u = r._tokenizer;
  u || (u = l.parser[r.contentType](r.start), r._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
  const h = u.events, m = [], d = {};
  let g, y, v = -1, x = r, S = 0, w = 0;
  const A = [w];
  for (; x; ) {
    for (; t.get(++o)[1] !== x; )
      ;
    c.push(o), x._tokenizer || (g = l.sliceStream(x), x.next || g.push(null), y && u.defineSkip(x.start), x._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(g), x._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), y = x, x = x.next;
  }
  for (x = r; ++v < h.length; )
    // Find a void token that includes a break.
    h[v][0] === "exit" && h[v - 1][0] === "enter" && h[v][1].type === h[v - 1][1].type && h[v][1].start.line !== h[v][1].end.line && (w = v + 1, A.push(w), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (u.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : A.pop(), v = A.length; v--; ) {
    const C = h.slice(A[v], A[v + 1]), L = c.pop();
    m.push([L, L + C.length - 1]), t.splice(L, 2, C);
  }
  for (m.reverse(), v = -1; ++v < m.length; )
    d[S + m[v][0]] = S + m[v][1], S += m[v][1] - m[v][0] - 1;
  return d;
}
const rO = {
  resolve: aO,
  tokenize: sO
}, lO = {
  partial: !0,
  tokenize: oO
};
function aO(t) {
  return $x(t), t;
}
function sO(t, n) {
  let r;
  return l;
  function l(h) {
    return t.enter("content"), r = t.enter("chunkContent", {
      contentType: "content"
    }), o(h);
  }
  function o(h) {
    return h === null ? c(h) : pt(h) ? t.check(lO, u, c)(h) : (t.consume(h), o);
  }
  function c(h) {
    return t.exit("chunkContent"), t.exit("content"), n(h);
  }
  function u(h) {
    return t.consume(h), t.exit("chunkContent"), r.next = t.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, o;
  }
}
function oO(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), _t(t, c, "linePrefix");
  }
  function c(u) {
    if (u === null || pt(u))
      return r(u);
    const h = l.events[l.events.length - 1];
    return !l.parser.constructs.disable.null.includes("codeIndented") && h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? n(u) : t.interrupt(l.parser.constructs.flow, r, n)(u);
  }
}
function Wx(t, n, r, l, o, c, u, h, m) {
  const d = m || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(C) {
    return C === 60 ? (t.enter(l), t.enter(o), t.enter(c), t.consume(C), t.exit(c), v) : C === null || C === 32 || C === 41 || qo(C) ? r(C) : (t.enter(l), t.enter(u), t.enter(h), t.enter("chunkString", {
      contentType: "string"
    }), w(C));
  }
  function v(C) {
    return C === 62 ? (t.enter(c), t.consume(C), t.exit(c), t.exit(o), t.exit(l), n) : (t.enter(h), t.enter("chunkString", {
      contentType: "string"
    }), x(C));
  }
  function x(C) {
    return C === 62 ? (t.exit("chunkString"), t.exit(h), v(C)) : C === null || C === 60 || pt(C) ? r(C) : (t.consume(C), C === 92 ? S : x);
  }
  function S(C) {
    return C === 60 || C === 62 || C === 92 ? (t.consume(C), x) : x(C);
  }
  function w(C) {
    return !g && (C === null || C === 41 || Xt(C)) ? (t.exit("chunkString"), t.exit(h), t.exit(u), t.exit(l), n(C)) : g < d && C === 40 ? (t.consume(C), g++, w) : C === 41 ? (t.consume(C), g--, w) : C === null || C === 32 || C === 40 || qo(C) ? r(C) : (t.consume(C), C === 92 ? A : w);
  }
  function A(C) {
    return C === 40 || C === 41 || C === 92 ? (t.consume(C), w) : w(C);
  }
}
function tS(t, n, r, l, o, c) {
  const u = this;
  let h = 0, m;
  return d;
  function d(x) {
    return t.enter(l), t.enter(o), t.consume(x), t.exit(o), t.enter(c), g;
  }
  function g(x) {
    return h > 999 || x === null || x === 91 || x === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !h && "_hiddenFootnoteSupport" in u.parser.constructs ? r(x) : x === 93 ? (t.exit(c), t.enter(o), t.consume(x), t.exit(o), t.exit(l), n) : pt(x) ? (t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), g) : (t.enter("chunkString", {
      contentType: "string"
    }), y(x));
  }
  function y(x) {
    return x === null || x === 91 || x === 93 || pt(x) || h++ > 999 ? (t.exit("chunkString"), g(x)) : (t.consume(x), m || (m = !Dt(x)), x === 92 ? v : y);
  }
  function v(x) {
    return x === 91 || x === 92 || x === 93 ? (t.consume(x), h++, y) : y(x);
  }
}
function eS(t, n, r, l, o, c) {
  let u;
  return h;
  function h(v) {
    return v === 34 || v === 39 || v === 40 ? (t.enter(l), t.enter(o), t.consume(v), t.exit(o), u = v === 40 ? 41 : v, m) : r(v);
  }
  function m(v) {
    return v === u ? (t.enter(o), t.consume(v), t.exit(o), t.exit(l), n) : (t.enter(c), d(v));
  }
  function d(v) {
    return v === u ? (t.exit(c), m(u)) : v === null ? r(v) : pt(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), _t(t, d, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), g(v));
  }
  function g(v) {
    return v === u || v === null || pt(v) ? (t.exit("chunkString"), d(v)) : (t.consume(v), v === 92 ? y : g);
  }
  function y(v) {
    return v === u || v === 92 ? (t.consume(v), g) : g(v);
  }
}
function Da(t, n) {
  let r;
  return l;
  function l(o) {
    return pt(o) ? (t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), r = !0, l) : Dt(o) ? _t(t, l, r ? "linePrefix" : "lineSuffix")(o) : n(o);
  }
}
const uO = {
  name: "definition",
  tokenize: fO
}, cO = {
  partial: !0,
  tokenize: hO
};
function fO(t, n, r) {
  const l = this;
  let o;
  return c;
  function c(x) {
    return t.enter("definition"), u(x);
  }
  function u(x) {
    return tS.call(
      l,
      t,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function h(x) {
    return o = wn(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), x === 58 ? (t.enter("definitionMarker"), t.consume(x), t.exit("definitionMarker"), m) : r(x);
  }
  function m(x) {
    return Xt(x) ? Da(t, d)(x) : d(x);
  }
  function d(x) {
    return Wx(
      t,
      g,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(x);
  }
  function g(x) {
    return t.attempt(cO, y, y)(x);
  }
  function y(x) {
    return Dt(x) ? _t(t, v, "whitespace")(x) : v(x);
  }
  function v(x) {
    return x === null || pt(x) ? (t.exit("definition"), l.parser.defined.push(o), n(x)) : r(x);
  }
}
function hO(t, n, r) {
  return l;
  function l(h) {
    return Xt(h) ? Da(t, o)(h) : r(h);
  }
  function o(h) {
    return eS(t, c, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(h);
  }
  function c(h) {
    return Dt(h) ? _t(t, u, "whitespace")(h) : u(h);
  }
  function u(h) {
    return h === null || pt(h) ? n(h) : r(h);
  }
}
const dO = {
  name: "hardBreakEscape",
  tokenize: mO
};
function mO(t, n, r) {
  return l;
  function l(c) {
    return t.enter("hardBreakEscape"), t.consume(c), o;
  }
  function o(c) {
    return pt(c) ? (t.exit("hardBreakEscape"), n(c)) : r(c);
  }
}
const pO = {
  name: "headingAtx",
  resolve: gO,
  tokenize: yO
};
function gO(t, n) {
  let r = t.length - 2, l = 3, o, c;
  return t[l][1].type === "whitespace" && (l += 2), r - 2 > l && t[r][1].type === "whitespace" && (r -= 2), t[r][1].type === "atxHeadingSequence" && (l === r - 1 || r - 4 > l && t[r - 2][1].type === "whitespace") && (r -= l + 1 === r ? 2 : 4), r > l && (o = {
    type: "atxHeadingText",
    start: t[l][1].start,
    end: t[r][1].end
  }, c = {
    type: "chunkText",
    start: t[l][1].start,
    end: t[r][1].end,
    contentType: "text"
  }, nn(t, l, r - l + 1, [["enter", o, n], ["enter", c, n], ["exit", c, n], ["exit", o, n]])), t;
}
function yO(t, n, r) {
  let l = 0;
  return o;
  function o(g) {
    return t.enter("atxHeading"), c(g);
  }
  function c(g) {
    return t.enter("atxHeadingSequence"), u(g);
  }
  function u(g) {
    return g === 35 && l++ < 6 ? (t.consume(g), u) : g === null || Xt(g) ? (t.exit("atxHeadingSequence"), h(g)) : r(g);
  }
  function h(g) {
    return g === 35 ? (t.enter("atxHeadingSequence"), m(g)) : g === null || pt(g) ? (t.exit("atxHeading"), n(g)) : Dt(g) ? _t(t, h, "whitespace")(g) : (t.enter("atxHeadingText"), d(g));
  }
  function m(g) {
    return g === 35 ? (t.consume(g), m) : (t.exit("atxHeadingSequence"), h(g));
  }
  function d(g) {
    return g === null || g === 35 || Xt(g) ? (t.exit("atxHeadingText"), h(g)) : (t.consume(g), d);
  }
}
const bO = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], J1 = ["pre", "script", "style", "textarea"], vO = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: TO,
  tokenize: EO
}, xO = {
  partial: !0,
  tokenize: wO
}, SO = {
  partial: !0,
  tokenize: AO
};
function TO(t) {
  let n = t.length;
  for (; n-- && !(t[n][0] === "enter" && t[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && t[n - 2][1].type === "linePrefix" && (t[n][1].start = t[n - 2][1].start, t[n + 1][1].start = t[n - 2][1].start, t.splice(n - 2, 2)), t;
}
function EO(t, n, r) {
  const l = this;
  let o, c, u, h, m;
  return d;
  function d(E) {
    return g(E);
  }
  function g(E) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(E), y;
  }
  function y(E) {
    return E === 33 ? (t.consume(E), v) : E === 47 ? (t.consume(E), c = !0, w) : E === 63 ? (t.consume(E), o = 3, l.interrupt ? n : k) : ze(E) ? (t.consume(E), u = String.fromCharCode(E), A) : r(E);
  }
  function v(E) {
    return E === 45 ? (t.consume(E), o = 2, x) : E === 91 ? (t.consume(E), o = 5, h = 0, S) : ze(E) ? (t.consume(E), o = 4, l.interrupt ? n : k) : r(E);
  }
  function x(E) {
    return E === 45 ? (t.consume(E), l.interrupt ? n : k) : r(E);
  }
  function S(E) {
    const at = "CDATA[";
    return E === at.charCodeAt(h++) ? (t.consume(E), h === at.length ? l.interrupt ? n : nt : S) : r(E);
  }
  function w(E) {
    return ze(E) ? (t.consume(E), u = String.fromCharCode(E), A) : r(E);
  }
  function A(E) {
    if (E === null || E === 47 || E === 62 || Xt(E)) {
      const at = E === 47, mt = u.toLowerCase();
      return !at && !c && J1.includes(mt) ? (o = 1, l.interrupt ? n(E) : nt(E)) : bO.includes(u.toLowerCase()) ? (o = 6, at ? (t.consume(E), C) : l.interrupt ? n(E) : nt(E)) : (o = 7, l.interrupt && !l.parser.lazy[l.now().line] ? r(E) : c ? L(E) : M(E));
    }
    return E === 45 || ke(E) ? (t.consume(E), u += String.fromCharCode(E), A) : r(E);
  }
  function C(E) {
    return E === 62 ? (t.consume(E), l.interrupt ? n : nt) : r(E);
  }
  function L(E) {
    return Dt(E) ? (t.consume(E), L) : B(E);
  }
  function M(E) {
    return E === 47 ? (t.consume(E), B) : E === 58 || E === 95 || ze(E) ? (t.consume(E), Y) : Dt(E) ? (t.consume(E), M) : B(E);
  }
  function Y(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || ke(E) ? (t.consume(E), Y) : Q(E);
  }
  function Q(E) {
    return E === 61 ? (t.consume(E), _) : Dt(E) ? (t.consume(E), Q) : M(E);
  }
  function _(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? r(E) : E === 34 || E === 39 ? (t.consume(E), m = E, Z) : Dt(E) ? (t.consume(E), _) : J(E);
  }
  function Z(E) {
    return E === m ? (t.consume(E), m = null, lt) : E === null || pt(E) ? r(E) : (t.consume(E), Z);
  }
  function J(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Xt(E) ? Q(E) : (t.consume(E), J);
  }
  function lt(E) {
    return E === 47 || E === 62 || Dt(E) ? M(E) : r(E);
  }
  function B(E) {
    return E === 62 ? (t.consume(E), et) : r(E);
  }
  function et(E) {
    return E === null || pt(E) ? nt(E) : Dt(E) ? (t.consume(E), et) : r(E);
  }
  function nt(E) {
    return E === 45 && o === 2 ? (t.consume(E), N) : E === 60 && o === 1 ? (t.consume(E), I) : E === 62 && o === 4 ? (t.consume(E), R) : E === 63 && o === 3 ? (t.consume(E), k) : E === 93 && o === 5 ? (t.consume(E), yt) : pt(E) && (o === 6 || o === 7) ? (t.exit("htmlFlowData"), t.check(xO, F, xt)(E)) : E === null || pt(E) ? (t.exit("htmlFlowData"), xt(E)) : (t.consume(E), nt);
  }
  function xt(E) {
    return t.check(SO, st, F)(E);
  }
  function st(E) {
    return t.enter("lineEnding"), t.consume(E), t.exit("lineEnding"), W;
  }
  function W(E) {
    return E === null || pt(E) ? xt(E) : (t.enter("htmlFlowData"), nt(E));
  }
  function N(E) {
    return E === 45 ? (t.consume(E), k) : nt(E);
  }
  function I(E) {
    return E === 47 ? (t.consume(E), u = "", it) : nt(E);
  }
  function it(E) {
    if (E === 62) {
      const at = u.toLowerCase();
      return J1.includes(at) ? (t.consume(E), R) : nt(E);
    }
    return ze(E) && u.length < 8 ? (t.consume(E), u += String.fromCharCode(E), it) : nt(E);
  }
  function yt(E) {
    return E === 93 ? (t.consume(E), k) : nt(E);
  }
  function k(E) {
    return E === 62 ? (t.consume(E), R) : E === 45 && o === 2 ? (t.consume(E), k) : nt(E);
  }
  function R(E) {
    return E === null || pt(E) ? (t.exit("htmlFlowData"), F(E)) : (t.consume(E), R);
  }
  function F(E) {
    return t.exit("htmlFlow"), n(E);
  }
}
function AO(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return pt(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), c) : r(u);
  }
  function c(u) {
    return l.parser.lazy[l.now().line] ? r(u) : n(u);
  }
}
function wO(t, n, r) {
  return l;
  function l(o) {
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), t.attempt(Ia, n, r);
  }
}
const CO = {
  name: "htmlText",
  tokenize: kO
};
function kO(t, n, r) {
  const l = this;
  let o, c, u;
  return h;
  function h(k) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(k), m;
  }
  function m(k) {
    return k === 33 ? (t.consume(k), d) : k === 47 ? (t.consume(k), Q) : k === 63 ? (t.consume(k), M) : ze(k) ? (t.consume(k), J) : r(k);
  }
  function d(k) {
    return k === 45 ? (t.consume(k), g) : k === 91 ? (t.consume(k), c = 0, S) : ze(k) ? (t.consume(k), L) : r(k);
  }
  function g(k) {
    return k === 45 ? (t.consume(k), x) : r(k);
  }
  function y(k) {
    return k === null ? r(k) : k === 45 ? (t.consume(k), v) : pt(k) ? (u = y, I(k)) : (t.consume(k), y);
  }
  function v(k) {
    return k === 45 ? (t.consume(k), x) : y(k);
  }
  function x(k) {
    return k === 62 ? N(k) : k === 45 ? v(k) : y(k);
  }
  function S(k) {
    const R = "CDATA[";
    return k === R.charCodeAt(c++) ? (t.consume(k), c === R.length ? w : S) : r(k);
  }
  function w(k) {
    return k === null ? r(k) : k === 93 ? (t.consume(k), A) : pt(k) ? (u = w, I(k)) : (t.consume(k), w);
  }
  function A(k) {
    return k === 93 ? (t.consume(k), C) : w(k);
  }
  function C(k) {
    return k === 62 ? N(k) : k === 93 ? (t.consume(k), C) : w(k);
  }
  function L(k) {
    return k === null || k === 62 ? N(k) : pt(k) ? (u = L, I(k)) : (t.consume(k), L);
  }
  function M(k) {
    return k === null ? r(k) : k === 63 ? (t.consume(k), Y) : pt(k) ? (u = M, I(k)) : (t.consume(k), M);
  }
  function Y(k) {
    return k === 62 ? N(k) : M(k);
  }
  function Q(k) {
    return ze(k) ? (t.consume(k), _) : r(k);
  }
  function _(k) {
    return k === 45 || ke(k) ? (t.consume(k), _) : Z(k);
  }
  function Z(k) {
    return pt(k) ? (u = Z, I(k)) : Dt(k) ? (t.consume(k), Z) : N(k);
  }
  function J(k) {
    return k === 45 || ke(k) ? (t.consume(k), J) : k === 47 || k === 62 || Xt(k) ? lt(k) : r(k);
  }
  function lt(k) {
    return k === 47 ? (t.consume(k), N) : k === 58 || k === 95 || ze(k) ? (t.consume(k), B) : pt(k) ? (u = lt, I(k)) : Dt(k) ? (t.consume(k), lt) : N(k);
  }
  function B(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ke(k) ? (t.consume(k), B) : et(k);
  }
  function et(k) {
    return k === 61 ? (t.consume(k), nt) : pt(k) ? (u = et, I(k)) : Dt(k) ? (t.consume(k), et) : lt(k);
  }
  function nt(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? r(k) : k === 34 || k === 39 ? (t.consume(k), o = k, xt) : pt(k) ? (u = nt, I(k)) : Dt(k) ? (t.consume(k), nt) : (t.consume(k), st);
  }
  function xt(k) {
    return k === o ? (t.consume(k), o = void 0, W) : k === null ? r(k) : pt(k) ? (u = xt, I(k)) : (t.consume(k), xt);
  }
  function st(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? r(k) : k === 47 || k === 62 || Xt(k) ? lt(k) : (t.consume(k), st);
  }
  function W(k) {
    return k === 47 || k === 62 || Xt(k) ? lt(k) : r(k);
  }
  function N(k) {
    return k === 62 ? (t.consume(k), t.exit("htmlTextData"), t.exit("htmlText"), n) : r(k);
  }
  function I(k) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(k), t.exit("lineEnding"), it;
  }
  function it(k) {
    return Dt(k) ? _t(t, yt, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : yt(k);
  }
  function yt(k) {
    return t.enter("htmlTextData"), u(k);
  }
}
const Hd = {
  name: "labelEnd",
  resolveAll: OO,
  resolveTo: zO,
  tokenize: _O
}, DO = {
  tokenize: LO
}, RO = {
  tokenize: NO
}, MO = {
  tokenize: BO
};
function OO(t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) {
    const l = t[n][1];
    if (r.push(t[n]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
      const o = l.type === "labelImage" ? 4 : 2;
      l.type = "data", n += o;
    }
  }
  return t.length !== r.length && nn(t, 0, t.length, r), t;
}
function zO(t, n) {
  let r = t.length, l = 0, o, c, u, h;
  for (; r--; )
    if (o = t[r][1], c) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      t[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (u) {
      if (t[r][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (c = r, o.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else o.type === "labelEnd" && (u = r);
  const m = {
    type: t[c][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[c][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, d = {
    type: "label",
    start: {
      ...t[c][1].start
    },
    end: {
      ...t[u][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...t[c + l + 2][1].end
    },
    end: {
      ...t[u - 2][1].start
    }
  };
  return h = [["enter", m, n], ["enter", d, n]], h = gn(h, t.slice(c + 1, c + l + 3)), h = gn(h, [["enter", g, n]]), h = gn(h, eu(n.parser.constructs.insideSpan.null, t.slice(c + l + 4, u - 3), n)), h = gn(h, [["exit", g, n], t[u - 2], t[u - 1], ["exit", d, n]]), h = gn(h, t.slice(u + 1)), h = gn(h, [["exit", m, n]]), nn(t, c, t.length, h), t;
}
function _O(t, n, r) {
  const l = this;
  let o = l.events.length, c, u;
  for (; o--; )
    if ((l.events[o][1].type === "labelImage" || l.events[o][1].type === "labelLink") && !l.events[o][1]._balanced) {
      c = l.events[o][1];
      break;
    }
  return h;
  function h(v) {
    return c ? c._inactive ? y(v) : (u = l.parser.defined.includes(wn(l.sliceSerialize({
      start: c.end,
      end: l.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(v), t.exit("labelMarker"), t.exit("labelEnd"), m) : r(v);
  }
  function m(v) {
    return v === 40 ? t.attempt(DO, g, u ? g : y)(v) : v === 91 ? t.attempt(RO, g, u ? d : y)(v) : u ? g(v) : y(v);
  }
  function d(v) {
    return t.attempt(MO, g, y)(v);
  }
  function g(v) {
    return n(v);
  }
  function y(v) {
    return c._balanced = !0, r(v);
  }
}
function LO(t, n, r) {
  return l;
  function l(y) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), o;
  }
  function o(y) {
    return Xt(y) ? Da(t, c)(y) : c(y);
  }
  function c(y) {
    return y === 41 ? g(y) : Wx(t, u, h, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function u(y) {
    return Xt(y) ? Da(t, m)(y) : g(y);
  }
  function h(y) {
    return r(y);
  }
  function m(y) {
    return y === 34 || y === 39 || y === 40 ? eS(t, d, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
  }
  function d(y) {
    return Xt(y) ? Da(t, g)(y) : g(y);
  }
  function g(y) {
    return y === 41 ? (t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), t.exit("resource"), n) : r(y);
  }
}
function NO(t, n, r) {
  const l = this;
  return o;
  function o(h) {
    return tS.call(l, t, c, u, "reference", "referenceMarker", "referenceString")(h);
  }
  function c(h) {
    return l.parser.defined.includes(wn(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? n(h) : r(h);
  }
  function u(h) {
    return r(h);
  }
}
function BO(t, n, r) {
  return l;
  function l(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), o;
  }
  function o(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), n) : r(c);
  }
}
const UO = {
  name: "labelStartImage",
  resolveAll: Hd.resolveAll,
  tokenize: VO
};
function VO(t, n, r) {
  const l = this;
  return o;
  function o(h) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(h), t.exit("labelImageMarker"), c;
  }
  function c(h) {
    return h === 91 ? (t.enter("labelMarker"), t.consume(h), t.exit("labelMarker"), t.exit("labelImage"), u) : r(h);
  }
  function u(h) {
    return h === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? r(h) : n(h);
  }
}
const jO = {
  name: "labelStartLink",
  resolveAll: Hd.resolveAll,
  tokenize: HO
};
function HO(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(u), t.exit("labelMarker"), t.exit("labelLink"), c;
  }
  function c(u) {
    return u === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? r(u) : n(u);
  }
}
const Zf = {
  name: "lineEnding",
  tokenize: qO
};
function qO(t, n) {
  return r;
  function r(l) {
    return t.enter("lineEnding"), t.consume(l), t.exit("lineEnding"), _t(t, n, "linePrefix");
  }
}
const Oo = {
  name: "thematicBreak",
  tokenize: FO
};
function FO(t, n, r) {
  let l = 0, o;
  return c;
  function c(d) {
    return t.enter("thematicBreak"), u(d);
  }
  function u(d) {
    return o = d, h(d);
  }
  function h(d) {
    return d === o ? (t.enter("thematicBreakSequence"), m(d)) : l >= 3 && (d === null || pt(d)) ? (t.exit("thematicBreak"), n(d)) : r(d);
  }
  function m(d) {
    return d === o ? (t.consume(d), l++, m) : (t.exit("thematicBreakSequence"), Dt(d) ? _t(t, h, "whitespace")(d) : h(d));
  }
}
const Pe = {
  continuation: {
    tokenize: XO
  },
  exit: KO,
  name: "list",
  tokenize: GO
}, PO = {
  partial: !0,
  tokenize: QO
}, YO = {
  partial: !0,
  tokenize: IO
};
function GO(t, n, r) {
  const l = this, o = l.events[l.events.length - 1];
  let c = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, u = 0;
  return h;
  function h(x) {
    const S = l.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !l.containerState.marker || x === l.containerState.marker : qh(x)) {
      if (l.containerState.type || (l.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), x === 42 || x === 45 ? t.check(Oo, r, d)(x) : d(x);
      if (!l.interrupt || x === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(x);
    }
    return r(x);
  }
  function m(x) {
    return qh(x) && ++u < 10 ? (t.consume(x), m) : (!l.interrupt || u < 2) && (l.containerState.marker ? x === l.containerState.marker : x === 41 || x === 46) ? (t.exit("listItemValue"), d(x)) : r(x);
  }
  function d(x) {
    return t.enter("listItemMarker"), t.consume(x), t.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || x, t.check(
      Ia,
      // Can’t be empty when interrupting.
      l.interrupt ? r : g,
      t.attempt(PO, v, y)
    );
  }
  function g(x) {
    return l.containerState.initialBlankLine = !0, c++, v(x);
  }
  function y(x) {
    return Dt(x) ? (t.enter("listItemPrefixWhitespace"), t.consume(x), t.exit("listItemPrefixWhitespace"), v) : r(x);
  }
  function v(x) {
    return l.containerState.size = c + l.sliceSerialize(t.exit("listItemPrefix"), !0).length, n(x);
  }
}
function XO(t, n, r) {
  const l = this;
  return l.containerState._closeFlow = void 0, t.check(Ia, o, c);
  function o(h) {
    return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, _t(t, n, "listItemIndent", l.containerState.size + 1)(h);
  }
  function c(h) {
    return l.containerState.furtherBlankLines || !Dt(h) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, u(h)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, t.attempt(YO, n, u)(h));
  }
  function u(h) {
    return l.containerState._closeFlow = !0, l.interrupt = void 0, _t(t, t.attempt(Pe, n, r), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h);
  }
}
function IO(t, n, r) {
  const l = this;
  return _t(t, o, "listItemIndent", l.containerState.size + 1);
  function o(c) {
    const u = l.events[l.events.length - 1];
    return u && u[1].type === "listItemIndent" && u[2].sliceSerialize(u[1], !0).length === l.containerState.size ? n(c) : r(c);
  }
}
function KO(t) {
  t.exit(this.containerState.type);
}
function QO(t, n, r) {
  const l = this;
  return _t(t, o, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(c) {
    const u = l.events[l.events.length - 1];
    return !Dt(c) && u && u[1].type === "listItemPrefixWhitespace" ? n(c) : r(c);
  }
}
const $1 = {
  name: "setextUnderline",
  resolveTo: ZO,
  tokenize: JO
};
function ZO(t, n) {
  let r = t.length, l, o, c;
  for (; r--; )
    if (t[r][0] === "enter") {
      if (t[r][1].type === "content") {
        l = r;
        break;
      }
      t[r][1].type === "paragraph" && (o = r);
    } else
      t[r][1].type === "content" && t.splice(r, 1), !c && t[r][1].type === "definition" && (c = r);
  const u = {
    type: "setextHeading",
    start: {
      ...t[l][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[o][1].type = "setextHeadingText", c ? (t.splice(o, 0, ["enter", u, n]), t.splice(c + 1, 0, ["exit", t[l][1], n]), t[l][1].end = {
    ...t[c][1].end
  }) : t[l][1] = u, t.push(["exit", u, n]), t;
}
function JO(t, n, r) {
  const l = this;
  let o;
  return c;
  function c(d) {
    let g = l.events.length, y;
    for (; g--; )
      if (l.events[g][1].type !== "lineEnding" && l.events[g][1].type !== "linePrefix" && l.events[g][1].type !== "content") {
        y = l.events[g][1].type === "paragraph";
        break;
      }
    return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (t.enter("setextHeadingLine"), o = d, u(d)) : r(d);
  }
  function u(d) {
    return t.enter("setextHeadingLineSequence"), h(d);
  }
  function h(d) {
    return d === o ? (t.consume(d), h) : (t.exit("setextHeadingLineSequence"), Dt(d) ? _t(t, m, "lineSuffix")(d) : m(d));
  }
  function m(d) {
    return d === null || pt(d) ? (t.exit("setextHeadingLine"), n(d)) : r(d);
  }
}
const $O = {
  tokenize: WO
};
function WO(t) {
  const n = this, r = t.attempt(
    // Try to parse a blank line.
    Ia,
    l,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, o, _t(t, t.attempt(this.parser.constructs.flow, o, t.attempt(rO, o)), "linePrefix"))
  );
  return r;
  function l(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(c), t.exit("lineEndingBlank"), n.currentConstruct = void 0, r;
  }
  function o(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), n.currentConstruct = void 0, r;
  }
}
const tz = {
  resolveAll: iS()
}, ez = nS("string"), nz = nS("text");
function nS(t) {
  return {
    resolveAll: iS(t === "text" ? iz : void 0),
    tokenize: n
  };
  function n(r) {
    const l = this, o = this.parser.constructs[t], c = r.attempt(o, u, h);
    return u;
    function u(g) {
      return d(g) ? c(g) : h(g);
    }
    function h(g) {
      if (g === null) {
        r.consume(g);
        return;
      }
      return r.enter("data"), r.consume(g), m;
    }
    function m(g) {
      return d(g) ? (r.exit("data"), c(g)) : (r.consume(g), m);
    }
    function d(g) {
      if (g === null)
        return !0;
      const y = o[g];
      let v = -1;
      if (y)
        for (; ++v < y.length; ) {
          const x = y[v];
          if (!x.previous || x.previous.call(l, l.previous))
            return !0;
        }
      return !1;
    }
  }
}
function iS(t) {
  return n;
  function n(r, l) {
    let o = -1, c;
    for (; ++o <= r.length; )
      c === void 0 ? r[o] && r[o][1].type === "data" && (c = o, o++) : (!r[o] || r[o][1].type !== "data") && (o !== c + 2 && (r[c][1].end = r[o - 1][1].end, r.splice(c + 2, o - c - 2), o = c + 2), c = void 0);
    return t ? t(r, l) : r;
  }
}
function iz(t, n) {
  let r = 0;
  for (; ++r <= t.length; )
    if ((r === t.length || t[r][1].type === "lineEnding") && t[r - 1][1].type === "data") {
      const l = t[r - 1][1], o = n.sliceStream(l);
      let c = o.length, u = -1, h = 0, m;
      for (; c--; ) {
        const d = o[c];
        if (typeof d == "string") {
          for (u = d.length; d.charCodeAt(u - 1) === 32; )
            h++, u--;
          if (u) break;
          u = -1;
        } else if (d === -2)
          m = !0, h++;
        else if (d !== -1) {
          c++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && r === t.length && (h = 0), h) {
        const d = {
          type: r === t.length || m || h < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: c ? u : l.start._bufferIndex + u,
            _index: l.start._index + c,
            line: l.end.line,
            column: l.end.column - h,
            offset: l.end.offset - h
          },
          end: {
            ...l.end
          }
        };
        l.end = {
          ...d.start
        }, l.start.offset === l.end.offset ? Object.assign(l, d) : (t.splice(r, 0, ["enter", d, n], ["exit", d, n]), r += 2);
      }
      r++;
    }
  return t;
}
const rz = {
  42: Pe,
  43: Pe,
  45: Pe,
  48: Pe,
  49: Pe,
  50: Pe,
  51: Pe,
  52: Pe,
  53: Pe,
  54: Pe,
  55: Pe,
  56: Pe,
  57: Pe,
  62: Qx
}, lz = {
  91: uO
}, az = {
  [-2]: Qf,
  [-1]: Qf,
  32: Qf
}, sz = {
  35: pO,
  42: Oo,
  45: [$1, Oo],
  60: vO,
  61: $1,
  95: Oo,
  96: Z1,
  126: Z1
}, oz = {
  38: Jx,
  92: Zx
}, uz = {
  [-5]: Zf,
  [-4]: Zf,
  [-3]: Zf,
  33: UO,
  38: Jx,
  42: Fh,
  60: [jM, CO],
  91: jO,
  92: [dO, Zx],
  93: Hd,
  95: Fh,
  96: $M
}, cz = {
  null: [Fh, tz]
}, fz = {
  null: [42, 95]
}, hz = {
  null: []
}, dz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: fz,
  contentInitial: lz,
  disable: hz,
  document: rz,
  flow: sz,
  flowInitial: az,
  insideSpan: cz,
  string: oz,
  text: uz
}, Symbol.toStringTag, { value: "Module" }));
function mz(t, n, r) {
  let l = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const o = {}, c = [];
  let u = [], h = [];
  const m = {
    attempt: Z(Q),
    check: Z(_),
    consume: L,
    enter: M,
    exit: Y,
    interrupt: Z(_, {
      interrupt: !0
    })
  }, d = {
    code: null,
    containerState: {},
    defineSkip: w,
    events: [],
    now: S,
    parser: t,
    previous: null,
    sliceSerialize: v,
    sliceStream: x,
    write: y
  };
  let g = n.tokenize.call(d, m);
  return n.resolveAll && c.push(n), d;
  function y(et) {
    return u = gn(u, et), A(), u[u.length - 1] !== null ? [] : (J(n, 0), d.events = eu(c, d.events, d), d.events);
  }
  function v(et, nt) {
    return gz(x(et), nt);
  }
  function x(et) {
    return pz(u, et);
  }
  function S() {
    const {
      _bufferIndex: et,
      _index: nt,
      line: xt,
      column: st,
      offset: W
    } = l;
    return {
      _bufferIndex: et,
      _index: nt,
      line: xt,
      column: st,
      offset: W
    };
  }
  function w(et) {
    o[et.line] = et.column, B();
  }
  function A() {
    let et;
    for (; l._index < u.length; ) {
      const nt = u[l._index];
      if (typeof nt == "string")
        for (et = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === et && l._bufferIndex < nt.length; )
          C(nt.charCodeAt(l._bufferIndex));
      else
        C(nt);
    }
  }
  function C(et) {
    g = g(et);
  }
  function L(et) {
    pt(et) ? (l.line++, l.column = 1, l.offset += et === -3 ? 2 : 1, B()) : et !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    u[l._index].length && (l._bufferIndex = -1, l._index++)), d.previous = et;
  }
  function M(et, nt) {
    const xt = nt || {};
    return xt.type = et, xt.start = S(), d.events.push(["enter", xt, d]), h.push(xt), xt;
  }
  function Y(et) {
    const nt = h.pop();
    return nt.end = S(), d.events.push(["exit", nt, d]), nt;
  }
  function Q(et, nt) {
    J(et, nt.from);
  }
  function _(et, nt) {
    nt.restore();
  }
  function Z(et, nt) {
    return xt;
    function xt(st, W, N) {
      let I, it, yt, k;
      return Array.isArray(st) ? (
        /* c8 ignore next 1 */
        F(st)
      ) : "tokenize" in st ? (
        // Looks like a construct.
        F([
          /** @type {Construct} */
          st
        ])
      ) : R(st);
      function R(ht) {
        return Rt;
        function Rt(Jt) {
          const Ht = Jt !== null && ht[Jt], rn = Jt !== null && ht.null, Bn = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ht) ? Ht : Ht ? [Ht] : [],
            ...Array.isArray(rn) ? rn : rn ? [rn] : []
          ];
          return F(Bn)(Jt);
        }
      }
      function F(ht) {
        return I = ht, it = 0, ht.length === 0 ? N : E(ht[it]);
      }
      function E(ht) {
        return Rt;
        function Rt(Jt) {
          return k = lt(), yt = ht, ht.partial || (d.currentConstruct = ht), ht.name && d.parser.constructs.disable.null.includes(ht.name) ? mt() : ht.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            nt ? Object.assign(Object.create(d), nt) : d,
            m,
            at,
            mt
          )(Jt);
        }
      }
      function at(ht) {
        return et(yt, k), W;
      }
      function mt(ht) {
        return k.restore(), ++it < I.length ? E(I[it]) : N;
      }
    }
  }
  function J(et, nt) {
    et.resolveAll && !c.includes(et) && c.push(et), et.resolve && nn(d.events, nt, d.events.length - nt, et.resolve(d.events.slice(nt), d)), et.resolveTo && (d.events = et.resolveTo(d.events, d));
  }
  function lt() {
    const et = S(), nt = d.previous, xt = d.currentConstruct, st = d.events.length, W = Array.from(h);
    return {
      from: st,
      restore: N
    };
    function N() {
      l = et, d.previous = nt, d.currentConstruct = xt, d.events.length = st, h = W, B();
    }
  }
  function B() {
    l.line in o && l.column < 2 && (l.column = o[l.line], l.offset += o[l.line] - 1);
  }
}
function pz(t, n) {
  const r = n.start._index, l = n.start._bufferIndex, o = n.end._index, c = n.end._bufferIndex;
  let u;
  if (r === o)
    u = [t[r].slice(l, c)];
  else {
    if (u = t.slice(r, o), l > -1) {
      const h = u[0];
      typeof h == "string" ? u[0] = h.slice(l) : u.shift();
    }
    c > 0 && u.push(t[o].slice(0, c));
  }
  return u;
}
function gz(t, n) {
  let r = -1;
  const l = [];
  let o;
  for (; ++r < t.length; ) {
    const c = t[r];
    let u;
    if (typeof c == "string")
      u = c;
    else switch (c) {
      case -5: {
        u = "\r";
        break;
      }
      case -4: {
        u = `
`;
        break;
      }
      case -3: {
        u = `\r
`;
        break;
      }
      case -2: {
        u = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && o) continue;
        u = " ";
        break;
      }
      default:
        u = String.fromCharCode(c);
    }
    o = c === -2, l.push(u);
  }
  return l.join("");
}
function yz(t) {
  const l = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Ix([dz, ...(t || {}).extensions || []])
    ),
    content: o(zM),
    defined: [],
    document: o(LM),
    flow: o($O),
    lazy: {},
    string: o(ez),
    text: o(nz)
  };
  return l;
  function o(c) {
    return u;
    function u(h) {
      return mz(l, c, h);
    }
  }
}
function bz(t) {
  for (; !$x(t); )
    ;
  return t;
}
const W1 = /[\0\t\n\r]/g;
function vz() {
  let t = 1, n = "", r = !0, l;
  return o;
  function o(c, u, h) {
    const m = [];
    let d, g, y, v, x;
    for (c = n + (typeof c == "string" ? c.toString() : new TextDecoder(u || void 0).decode(c)), y = 0, n = "", r && (c.charCodeAt(0) === 65279 && y++, r = void 0); y < c.length; ) {
      if (W1.lastIndex = y, d = W1.exec(c), v = d && d.index !== void 0 ? d.index : c.length, x = c.charCodeAt(v), !d) {
        n = c.slice(y);
        break;
      }
      if (x === 10 && y === v && l)
        m.push(-3), l = void 0;
      else
        switch (l && (m.push(-5), l = void 0), y < v && (m.push(c.slice(y, v)), t += v - y), x) {
          case 0: {
            m.push(65533), t++;
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, m.push(-2); t++ < g; ) m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), t = 1;
            break;
          }
          default:
            l = !0, t = 1;
        }
      y = v + 1;
    }
    return h && (l && m.push(-5), n && m.push(n), m.push(null)), m;
  }
}
const xz = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Sz(t) {
  return t.replace(xz, Tz);
}
function Tz(t, n, r) {
  if (n)
    return n;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1), c = o === 120 || o === 88;
    return Kx(r.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return jd(r) || t;
}
const rS = {}.hasOwnProperty;
function Ez(t, n, r) {
  return typeof n != "string" && (r = n, n = void 0), Az(r)(bz(yz(r).document().write(vz()(t, n, !0))));
}
function Az(t) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(pr),
      autolinkProtocol: lt,
      autolinkEmail: lt,
      atxHeading: c(dr),
      blockQuote: c(rn),
      characterEscape: lt,
      characterReference: lt,
      codeFenced: c(Bn),
      codeFencedFenceInfo: u,
      codeFencedFenceMeta: u,
      codeIndented: c(Bn, u),
      codeText: c(xl, u),
      codeTextData: lt,
      data: lt,
      codeFlowValue: lt,
      definition: c(Qa),
      definitionDestinationString: u,
      definitionLabelString: u,
      definitionTitleString: u,
      emphasis: c(Un),
      hardBreakEscape: c(mr),
      hardBreakTrailing: c(mr),
      htmlFlow: c(Za, u),
      htmlFlowData: lt,
      htmlText: c(Za, u),
      htmlTextData: lt,
      image: c(Ja),
      label: u,
      link: c(pr),
      listItem: c(Sl),
      listItemValue: v,
      listOrdered: c(gr, y),
      listUnordered: c(gr),
      paragraph: c(lu),
      reference: E,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: c(dr),
      strong: c(au),
      thematicBreak: c(su)
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: Q,
      autolink: m(),
      autolinkEmail: Ht,
      autolinkProtocol: Jt,
      blockQuote: m(),
      characterEscapeValue: B,
      characterReferenceMarkerHexadecimal: mt,
      characterReferenceMarkerNumeric: mt,
      characterReferenceValue: ht,
      characterReference: Rt,
      codeFenced: m(A),
      codeFencedFence: w,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: S,
      codeFlowValue: B,
      codeIndented: m(C),
      codeText: m(W),
      codeTextData: B,
      data: B,
      definition: m(),
      definitionDestinationString: Y,
      definitionLabelString: L,
      definitionTitleString: M,
      emphasis: m(),
      hardBreakEscape: m(nt),
      hardBreakTrailing: m(nt),
      htmlFlow: m(xt),
      htmlFlowData: B,
      htmlText: m(st),
      htmlTextData: B,
      image: m(I),
      label: yt,
      labelText: it,
      lineEnding: et,
      link: m(N),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: at,
      resourceDestinationString: k,
      resourceTitleString: R,
      resource: F,
      setextHeading: m(J),
      setextHeadingLineSequence: Z,
      setextHeadingText: _,
      strong: m(),
      thematicBreak: m()
    }
  };
  lS(n, (t || {}).mdastExtensions || []);
  const r = {};
  return l;
  function l(G) {
    let rt = {
      type: "root",
      children: []
    };
    const bt = {
      stack: [rt],
      tokenStack: [],
      config: n,
      enter: h,
      exit: d,
      buffer: u,
      resume: g,
      data: r
    }, wt = [];
    let Ut = -1;
    for (; ++Ut < G.length; )
      if (G[Ut][1].type === "listOrdered" || G[Ut][1].type === "listUnordered")
        if (G[Ut][0] === "enter")
          wt.push(Ut);
        else {
          const Ie = wt.pop();
          Ut = o(G, Ie, Ut);
        }
    for (Ut = -1; ++Ut < G.length; ) {
      const Ie = n[G[Ut][0]];
      rS.call(Ie, G[Ut][1].type) && Ie[G[Ut][1].type].call(Object.assign({
        sliceSerialize: G[Ut][2].sliceSerialize
      }, bt), G[Ut][1]);
    }
    if (bt.tokenStack.length > 0) {
      const Ie = bt.tokenStack[bt.tokenStack.length - 1];
      (Ie[1] || tb).call(bt, void 0, Ie[0]);
    }
    for (rt.position = {
      start: Oi(G.length > 0 ? G[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Oi(G.length > 0 ? G[G.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Ut = -1; ++Ut < n.transforms.length; )
      rt = n.transforms[Ut](rt) || rt;
    return rt;
  }
  function o(G, rt, bt) {
    let wt = rt - 1, Ut = -1, Ie = !1, Vn, Me, he, Ne;
    for (; ++wt <= bt; ) {
      const Yt = G[wt];
      switch (Yt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Yt[0] === "enter" ? Ut++ : Ut--, Ne = void 0;
          break;
        }
        case "lineEndingBlank": {
          Yt[0] === "enter" && (Vn && !Ne && !Ut && !he && (he = wt), Ne = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ne = void 0;
      }
      if (!Ut && Yt[0] === "enter" && Yt[1].type === "listItemPrefix" || Ut === -1 && Yt[0] === "exit" && (Yt[1].type === "listUnordered" || Yt[1].type === "listOrdered")) {
        if (Vn) {
          let ai = wt;
          for (Me = void 0; ai--; ) {
            const vn = G[ai];
            if (vn[1].type === "lineEnding" || vn[1].type === "lineEndingBlank") {
              if (vn[0] === "exit") continue;
              Me && (G[Me][1].type = "lineEndingBlank", Ie = !0), vn[1].type = "lineEnding", Me = ai;
            } else if (!(vn[1].type === "linePrefix" || vn[1].type === "blockQuotePrefix" || vn[1].type === "blockQuotePrefixWhitespace" || vn[1].type === "blockQuoteMarker" || vn[1].type === "listItemIndent")) break;
          }
          he && (!Me || he < Me) && (Vn._spread = !0), Vn.end = Object.assign({}, Me ? G[Me][1].start : Yt[1].end), G.splice(Me || wt, 0, ["exit", Vn, Yt[2]]), wt++, bt++;
        }
        if (Yt[1].type === "listItemPrefix") {
          const ai = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Yt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Vn = ai, G.splice(wt, 0, ["enter", ai, Yt[2]]), wt++, bt++, he = void 0, Ne = !0;
        }
      }
    }
    return G[rt][1]._spread = Ie, bt;
  }
  function c(G, rt) {
    return bt;
    function bt(wt) {
      h.call(this, G(wt), wt), rt && rt.call(this, wt);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function h(G, rt, bt) {
    this.stack[this.stack.length - 1].children.push(G), this.stack.push(G), this.tokenStack.push([rt, bt || void 0]), G.position = {
      start: Oi(rt.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function m(G) {
    return rt;
    function rt(bt) {
      G && G.call(this, bt), d.call(this, bt);
    }
  }
  function d(G, rt) {
    const bt = this.stack.pop(), wt = this.tokenStack.pop();
    if (wt)
      wt[0].type !== G.type && (rt ? rt.call(this, G, wt[0]) : (wt[1] || tb).call(this, G, wt[0]));
    else throw new Error("Cannot close `" + G.type + "` (" + ka({
      start: G.start,
      end: G.end
    }) + "): it’s not open");
    bt.position.end = Oi(G.end);
  }
  function g() {
    return Vd(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(G) {
    if (this.data.expectingFirstListItemValue) {
      const rt = this.stack[this.stack.length - 2];
      rt.start = Number.parseInt(this.sliceSerialize(G), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.lang = G;
  }
  function S() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.meta = G;
  }
  function w() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function A() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.value = G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function C() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.value = G.replace(/(\r?\n|\r)$/g, "");
  }
  function L(G) {
    const rt = this.resume(), bt = this.stack[this.stack.length - 1];
    bt.label = rt, bt.identifier = wn(this.sliceSerialize(G)).toLowerCase();
  }
  function M() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.title = G;
  }
  function Y() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.url = G;
  }
  function Q(G) {
    const rt = this.stack[this.stack.length - 1];
    if (!rt.depth) {
      const bt = this.sliceSerialize(G).length;
      rt.depth = bt;
    }
  }
  function _() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function Z(G) {
    const rt = this.stack[this.stack.length - 1];
    rt.depth = this.sliceSerialize(G).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function lt(G) {
    const bt = this.stack[this.stack.length - 1].children;
    let wt = bt[bt.length - 1];
    (!wt || wt.type !== "text") && (wt = Re(), wt.position = {
      start: Oi(G.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, bt.push(wt)), this.stack.push(wt);
  }
  function B(G) {
    const rt = this.stack.pop();
    rt.value += this.sliceSerialize(G), rt.position.end = Oi(G.end);
  }
  function et(G) {
    const rt = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const bt = rt.children[rt.children.length - 1];
      bt.position.end = Oi(G.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(rt.type) && (lt.call(this, G), B.call(this, G));
  }
  function nt() {
    this.data.atHardBreak = !0;
  }
  function xt() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.value = G;
  }
  function st() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.value = G;
  }
  function W() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.value = G;
  }
  function N() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const rt = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = rt, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function I() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const rt = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = rt, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function it(G) {
    const rt = this.sliceSerialize(G), bt = this.stack[this.stack.length - 2];
    bt.label = Sz(rt), bt.identifier = wn(rt).toLowerCase();
  }
  function yt() {
    const G = this.stack[this.stack.length - 1], rt = this.resume(), bt = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, bt.type === "link") {
      const wt = G.children;
      bt.children = wt;
    } else
      bt.alt = rt;
  }
  function k() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.url = G;
  }
  function R() {
    const G = this.resume(), rt = this.stack[this.stack.length - 1];
    rt.title = G;
  }
  function F() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function at(G) {
    const rt = this.resume(), bt = this.stack[this.stack.length - 1];
    bt.label = rt, bt.identifier = wn(this.sliceSerialize(G)).toLowerCase(), this.data.referenceType = "full";
  }
  function mt(G) {
    this.data.characterReferenceType = G.type;
  }
  function ht(G) {
    const rt = this.sliceSerialize(G), bt = this.data.characterReferenceType;
    let wt;
    bt ? (wt = Kx(rt, bt === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : wt = jd(rt);
    const Ut = this.stack[this.stack.length - 1];
    Ut.value += wt;
  }
  function Rt(G) {
    const rt = this.stack.pop();
    rt.position.end = Oi(G.end);
  }
  function Jt(G) {
    B.call(this, G);
    const rt = this.stack[this.stack.length - 1];
    rt.url = this.sliceSerialize(G);
  }
  function Ht(G) {
    B.call(this, G);
    const rt = this.stack[this.stack.length - 1];
    rt.url = "mailto:" + this.sliceSerialize(G);
  }
  function rn() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Bn() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function xl() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Qa() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Un() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function dr() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function mr() {
    return {
      type: "break"
    };
  }
  function Za() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ja() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function pr() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function gr(G) {
    return {
      type: "list",
      ordered: G.type === "listOrdered",
      start: null,
      spread: G._spread,
      children: []
    };
  }
  function Sl(G) {
    return {
      type: "listItem",
      spread: G._spread,
      checked: null,
      children: []
    };
  }
  function lu() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function au() {
    return {
      type: "strong",
      children: []
    };
  }
  function Re() {
    return {
      type: "text",
      value: ""
    };
  }
  function su() {
    return {
      type: "thematicBreak"
    };
  }
}
function Oi(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function lS(t, n) {
  let r = -1;
  for (; ++r < n.length; ) {
    const l = n[r];
    Array.isArray(l) ? lS(t, l) : wz(t, l);
  }
}
function wz(t, n) {
  let r;
  for (r in n)
    if (rS.call(n, r))
      switch (r) {
        case "canContainEols": {
          const l = n[r];
          l && t[r].push(...l);
          break;
        }
        case "transforms": {
          const l = n[r];
          l && t[r].push(...l);
          break;
        }
        case "enter":
        case "exit": {
          const l = n[r];
          l && Object.assign(t[r], l);
          break;
        }
      }
}
function tb(t, n) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + ka({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + n.type + "`, " + ka({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + ka({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function Cz(t) {
  const n = this;
  n.parser = r;
  function r(l) {
    return Ez(l, {
      ...n.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function kz(t, n) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(n), !0)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function Dz(t, n) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(n, r), [t.applyData(n, r), { type: "text", value: `
` }];
}
function Rz(t, n) {
  const r = n.value ? n.value + `
` : "", l = {}, o = n.lang ? n.lang.split(/\s+/) : [];
  o.length > 0 && (l.className = ["language-" + o[0]]);
  let c = {
    type: "element",
    tagName: "code",
    properties: l,
    children: [{ type: "text", value: r }]
  };
  return n.meta && (c.data = { meta: n.meta }), t.patch(n, c), c = t.applyData(n, c), c = { type: "element", tagName: "pre", properties: {}, children: [c] }, t.patch(n, c), c;
}
function Mz(t, n) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function Oz(t, n) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function zz(t, n) {
  const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", l = String(n.identifier).toUpperCase(), o = vl(l.toLowerCase()), c = t.footnoteOrder.indexOf(l);
  let u, h = t.footnoteCounts.get(l);
  h === void 0 ? (h = 0, t.footnoteOrder.push(l), u = t.footnoteOrder.length) : u = c + 1, h += 1, t.footnoteCounts.set(l, h);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + o,
      id: r + "fnref-" + o + (h > 1 ? "-" + h : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(u) }]
  };
  t.patch(n, m);
  const d = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return t.patch(n, d), t.applyData(n, d);
}
function _z(t, n) {
  const r = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function Lz(t, n) {
  if (t.options.allowDangerousHtml) {
    const r = { type: "raw", value: n.value };
    return t.patch(n, r), t.applyData(n, r);
  }
}
function aS(t, n) {
  const r = n.referenceType;
  let l = "]";
  if (r === "collapsed" ? l += "[]" : r === "full" && (l += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + l }];
  const o = t.all(n), c = o[0];
  c && c.type === "text" ? c.value = "[" + c.value : o.unshift({ type: "text", value: "[" });
  const u = o[o.length - 1];
  return u && u.type === "text" ? u.value += l : o.push({ type: "text", value: l }), o;
}
function Nz(t, n) {
  const r = String(n.identifier).toUpperCase(), l = t.definitionById.get(r);
  if (!l)
    return aS(t, n);
  const o = { src: vl(l.url || ""), alt: n.alt };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const c = { type: "element", tagName: "img", properties: o, children: [] };
  return t.patch(n, c), t.applyData(n, c);
}
function Bz(t, n) {
  const r = { src: vl(n.url) };
  n.alt !== null && n.alt !== void 0 && (r.alt = n.alt), n.title !== null && n.title !== void 0 && (r.title = n.title);
  const l = { type: "element", tagName: "img", properties: r, children: [] };
  return t.patch(n, l), t.applyData(n, l);
}
function Uz(t, n) {
  const r = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  t.patch(n, r);
  const l = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return t.patch(n, l), t.applyData(n, l);
}
function Vz(t, n) {
  const r = String(n.identifier).toUpperCase(), l = t.definitionById.get(r);
  if (!l)
    return aS(t, n);
  const o = { href: vl(l.url || "") };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: o,
    children: t.all(n)
  };
  return t.patch(n, c), t.applyData(n, c);
}
function jz(t, n) {
  const r = { href: vl(n.url) };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: r,
    children: t.all(n)
  };
  return t.patch(n, l), t.applyData(n, l);
}
function Hz(t, n, r) {
  const l = t.all(n), o = r ? qz(r) : sS(n), c = {}, u = [];
  if (typeof n.checked == "boolean") {
    const g = l[0];
    let y;
    g && g.type === "element" && g.tagName === "p" ? y = g : (y = { type: "element", tagName: "p", properties: {}, children: [] }, l.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let h = -1;
  for (; ++h < l.length; ) {
    const g = l[h];
    (o || h !== 0 || g.type !== "element" || g.tagName !== "p") && u.push({ type: "text", value: `
` }), g.type === "element" && g.tagName === "p" && !o ? u.push(...g.children) : u.push(g);
  }
  const m = l[l.length - 1];
  m && (o || m.type !== "element" || m.tagName !== "p") && u.push({ type: "text", value: `
` });
  const d = { type: "element", tagName: "li", properties: c, children: u };
  return t.patch(n, d), t.applyData(n, d);
}
function qz(t) {
  let n = !1;
  if (t.type === "list") {
    n = t.spread || !1;
    const r = t.children;
    let l = -1;
    for (; !n && ++l < r.length; )
      n = sS(r[l]);
  }
  return n;
}
function sS(t) {
  const n = t.spread;
  return n ?? t.children.length > 1;
}
function Fz(t, n) {
  const r = {}, l = t.all(n);
  let o = -1;
  for (typeof n.start == "number" && n.start !== 1 && (r.start = n.start); ++o < l.length; ) {
    const u = l[o];
    if (u.type === "element" && u.tagName === "li" && u.properties && Array.isArray(u.properties.className) && u.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: r,
    children: t.wrap(l, !0)
  };
  return t.patch(n, c), t.applyData(n, c);
}
function Pz(t, n) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function Yz(t, n) {
  const r = { type: "root", children: t.wrap(t.all(n)) };
  return t.patch(n, r), t.applyData(n, r);
}
function Gz(t, n) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
function Xz(t, n) {
  const r = t.all(n), l = r.shift(), o = [];
  if (l) {
    const u = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([l], !0)
    };
    t.patch(n.children[0], u), o.push(u);
  }
  if (r.length > 0) {
    const u = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(r, !0)
    }, h = Ld(n.children[1]), m = Hx(n.children[n.children.length - 1]);
    h && m && (u.position = { start: h, end: m }), o.push(u);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(o, !0)
  };
  return t.patch(n, c), t.applyData(n, c);
}
function Iz(t, n, r) {
  const l = r ? r.children : void 0, c = (l ? l.indexOf(n) : 1) === 0 ? "th" : "td", u = r && r.type === "table" ? r.align : void 0, h = u ? u.length : n.children.length;
  let m = -1;
  const d = [];
  for (; ++m < h; ) {
    const y = n.children[m], v = {}, x = u ? u[m] : void 0;
    x && (v.align = x);
    let S = { type: "element", tagName: c, properties: v, children: [] };
    y && (S.children = t.all(y), t.patch(y, S), S = t.applyData(y, S)), d.push(S);
  }
  const g = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(d, !0)
  };
  return t.patch(n, g), t.applyData(n, g);
}
function Kz(t, n) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, r), t.applyData(n, r);
}
const eb = 9, nb = 32;
function Qz(t) {
  const n = String(t), r = /\r?\n|\r/g;
  let l = r.exec(n), o = 0;
  const c = [];
  for (; l; )
    c.push(
      ib(n.slice(o, l.index), o > 0, !0),
      l[0]
    ), o = l.index + l[0].length, l = r.exec(n);
  return c.push(ib(n.slice(o), o > 0, !1)), c.join("");
}
function ib(t, n, r) {
  let l = 0, o = t.length;
  if (n) {
    let c = t.codePointAt(l);
    for (; c === eb || c === nb; )
      l++, c = t.codePointAt(l);
  }
  if (r) {
    let c = t.codePointAt(o - 1);
    for (; c === eb || c === nb; )
      o--, c = t.codePointAt(o - 1);
  }
  return o > l ? t.slice(l, o) : "";
}
function Zz(t, n) {
  const r = { type: "text", value: Qz(String(n.value)) };
  return t.patch(n, r), t.applyData(n, r);
}
function Jz(t, n) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(n, r), t.applyData(n, r);
}
const $z = {
  blockquote: kz,
  break: Dz,
  code: Rz,
  delete: Mz,
  emphasis: Oz,
  footnoteReference: zz,
  heading: _z,
  html: Lz,
  imageReference: Nz,
  image: Bz,
  inlineCode: Uz,
  linkReference: Vz,
  link: jz,
  listItem: Hz,
  list: Fz,
  paragraph: Pz,
  // @ts-expect-error: root is different, but hard to type.
  root: Yz,
  strong: Gz,
  table: Xz,
  tableCell: Kz,
  tableRow: Iz,
  text: Zz,
  thematicBreak: Jz,
  toml: xo,
  yaml: xo,
  definition: xo,
  footnoteDefinition: xo
};
function xo() {
}
const oS = -1, nu = 0, Ra = 1, Fo = 2, qd = 3, Fd = 4, Pd = 5, Yd = 6, uS = 7, cS = 8, rb = typeof self == "object" ? self : globalThis, Wz = (t, n) => {
  const r = (o, c) => (t.set(c, o), o), l = (o) => {
    if (t.has(o))
      return t.get(o);
    const [c, u] = n[o];
    switch (c) {
      case nu:
      case oS:
        return r(u, o);
      case Ra: {
        const h = r([], o);
        for (const m of u)
          h.push(l(m));
        return h;
      }
      case Fo: {
        const h = r({}, o);
        for (const [m, d] of u)
          h[l(m)] = l(d);
        return h;
      }
      case qd:
        return r(new Date(u), o);
      case Fd: {
        const { source: h, flags: m } = u;
        return r(new RegExp(h, m), o);
      }
      case Pd: {
        const h = r(/* @__PURE__ */ new Map(), o);
        for (const [m, d] of u)
          h.set(l(m), l(d));
        return h;
      }
      case Yd: {
        const h = r(/* @__PURE__ */ new Set(), o);
        for (const m of u)
          h.add(l(m));
        return h;
      }
      case uS: {
        const { name: h, message: m } = u;
        return r(new rb[h](m), o);
      }
      case cS:
        return r(BigInt(u), o);
      case "BigInt":
        return r(Object(BigInt(u)), o);
      case "ArrayBuffer":
        return r(new Uint8Array(u).buffer, u);
      case "DataView": {
        const { buffer: h } = new Uint8Array(u);
        return r(new DataView(h), u);
      }
    }
    return r(new rb[c](u), o);
  };
  return l;
}, lb = (t) => Wz(/* @__PURE__ */ new Map(), t)(0), nl = "", { toString: t3 } = {}, { keys: e3 } = Object, xa = (t) => {
  const n = typeof t;
  if (n !== "object" || !t)
    return [nu, n];
  const r = t3.call(t).slice(8, -1);
  switch (r) {
    case "Array":
      return [Ra, nl];
    case "Object":
      return [Fo, nl];
    case "Date":
      return [qd, nl];
    case "RegExp":
      return [Fd, nl];
    case "Map":
      return [Pd, nl];
    case "Set":
      return [Yd, nl];
    case "DataView":
      return [Ra, r];
  }
  return r.includes("Array") ? [Ra, r] : r.includes("Error") ? [uS, r] : [Fo, r];
}, So = ([t, n]) => t === nu && (n === "function" || n === "symbol"), n3 = (t, n, r, l) => {
  const o = (u, h) => {
    const m = l.push(u) - 1;
    return r.set(h, m), m;
  }, c = (u) => {
    if (r.has(u))
      return r.get(u);
    let [h, m] = xa(u);
    switch (h) {
      case nu: {
        let g = u;
        switch (m) {
          case "bigint":
            h = cS, g = u.toString();
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            g = null;
            break;
          case "undefined":
            return o([oS], u);
        }
        return o([h, g], u);
      }
      case Ra: {
        if (m) {
          let v = u;
          return m === "DataView" ? v = new Uint8Array(u.buffer) : m === "ArrayBuffer" && (v = new Uint8Array(u)), o([m, [...v]], u);
        }
        const g = [], y = o([h, g], u);
        for (const v of u)
          g.push(c(v));
        return y;
      }
      case Fo: {
        if (m)
          switch (m) {
            case "BigInt":
              return o([m, u.toString()], u);
            case "Boolean":
            case "Number":
            case "String":
              return o([m, u.valueOf()], u);
          }
        if (n && "toJSON" in u)
          return c(u.toJSON());
        const g = [], y = o([h, g], u);
        for (const v of e3(u))
          (t || !So(xa(u[v]))) && g.push([c(v), c(u[v])]);
        return y;
      }
      case qd:
        return o([h, u.toISOString()], u);
      case Fd: {
        const { source: g, flags: y } = u;
        return o([h, { source: g, flags: y }], u);
      }
      case Pd: {
        const g = [], y = o([h, g], u);
        for (const [v, x] of u)
          (t || !(So(xa(v)) || So(xa(x)))) && g.push([c(v), c(x)]);
        return y;
      }
      case Yd: {
        const g = [], y = o([h, g], u);
        for (const v of u)
          (t || !So(xa(v))) && g.push(c(v));
        return y;
      }
    }
    const { message: d } = u;
    return o([h, { name: m, message: d }], u);
  };
  return c;
}, ab = (t, { json: n, lossy: r } = {}) => {
  const l = [];
  return n3(!(n || r), !!n, /* @__PURE__ */ new Map(), l)(t), l;
}, Po = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, n) => n && ("json" in n || "lossy" in n) ? lb(ab(t, n)) : structuredClone(t)
) : (t, n) => lb(ab(t, n));
function i3(t, n) {
  const r = [{ type: "text", value: "↩" }];
  return n > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), r;
}
function r3(t, n) {
  return "Back to reference " + (t + 1) + (n > 1 ? "-" + n : "");
}
function l3(t) {
  const n = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", r = t.options.footnoteBackContent || i3, l = t.options.footnoteBackLabel || r3, o = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", u = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, h = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const d = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!d)
      continue;
    const g = t.all(d), y = String(d.identifier).toUpperCase(), v = vl(y.toLowerCase());
    let x = 0;
    const S = [], w = t.footnoteCounts.get(y);
    for (; w !== void 0 && ++x <= w; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let L = typeof r == "string" ? r : r(m, x);
      typeof L == "string" && (L = { type: "text", value: L }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + v + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof l == "string" ? l : l(m, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(L) ? L : [L]
      });
    }
    const A = g[g.length - 1];
    if (A && A.type === "element" && A.tagName === "p") {
      const L = A.children[A.children.length - 1];
      L && L.type === "text" ? L.value += " " : A.children.push({ type: "text", value: " " }), A.children.push(...S);
    } else
      g.push(...S);
    const C = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + v },
      children: t.wrap(g, !0)
    };
    t.patch(d, C), h.push(C);
  }
  if (h.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: {
            ...Po(u),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(h, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const iu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(t) {
    if (t == null)
      return u3;
    if (typeof t == "function")
      return ru(t);
    if (typeof t == "object")
      return Array.isArray(t) ? a3(t) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        s3(
          /** @type {Props} */
          t
        )
      );
    if (typeof t == "string")
      return o3(t);
    throw new Error("Expected function, string, or object as test");
  })
);
function a3(t) {
  const n = [];
  let r = -1;
  for (; ++r < t.length; )
    n[r] = iu(t[r]);
  return ru(l);
  function l(...o) {
    let c = -1;
    for (; ++c < n.length; )
      if (n[c].apply(this, o)) return !0;
    return !1;
  }
}
function s3(t) {
  const n = (
    /** @type {Record<string, unknown>} */
    t
  );
  return ru(r);
  function r(l) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      l
    );
    let c;
    for (c in t)
      if (o[c] !== n[c]) return !1;
    return !0;
  }
}
function o3(t) {
  return ru(n);
  function n(r) {
    return r && r.type === t;
  }
}
function ru(t) {
  return n;
  function n(r, l, o) {
    return !!(c3(r) && t.call(
      this,
      r,
      typeof l == "number" ? l : void 0,
      o || void 0
    ));
  }
}
function u3() {
  return !0;
}
function c3(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const fS = [], f3 = !0, Ph = !1, h3 = "skip";
function hS(t, n, r, l) {
  let o;
  typeof n == "function" && typeof r != "function" ? (l = r, r = n) : o = n;
  const c = iu(o), u = l ? -1 : 1;
  h(t, void 0, [])();
  function h(m, d, g) {
    const y = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof y.type == "string") {
      const x = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(v, "name", {
        value: "node (" + (m.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return v;
    function v() {
      let x = fS, S, w, A;
      if ((!n || c(m, d, g[g.length - 1] || void 0)) && (x = d3(r(m, g)), x[0] === Ph))
        return x;
      if ("children" in m && m.children) {
        const C = (
          /** @type {UnistParent} */
          m
        );
        if (C.children && x[0] !== h3)
          for (w = (l ? C.children.length : -1) + u, A = g.concat(C); w > -1 && w < C.children.length; ) {
            const L = C.children[w];
            if (S = h(L, w, A)(), S[0] === Ph)
              return S;
            w = typeof S[1] == "number" ? S[1] : w + u;
          }
      }
      return x;
    }
  }
}
function d3(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [f3, t] : t == null ? fS : [t];
}
function Gd(t, n, r, l) {
  let o, c, u;
  typeof n == "function" && typeof r != "function" ? (c = void 0, u = n, o = r) : (c = n, u = r, o = l), hS(t, c, h, o);
  function h(m, d) {
    const g = d[d.length - 1], y = g ? g.children.indexOf(m) : void 0;
    return u(m, y, g);
  }
}
const Yh = {}.hasOwnProperty, m3 = {};
function p3(t, n) {
  const r = n || m3, l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = { ...$z, ...r.handlers }, h = {
    all: d,
    applyData: y3,
    definitionById: l,
    footnoteById: o,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: u,
    one: m,
    options: r,
    patch: g3,
    wrap: v3
  };
  return Gd(t, function(g) {
    if (g.type === "definition" || g.type === "footnoteDefinition") {
      const y = g.type === "definition" ? l : o, v = String(g.identifier).toUpperCase();
      y.has(v) || y.set(v, g);
    }
  }), h;
  function m(g, y) {
    const v = g.type, x = h.handlers[v];
    if (Yh.call(h.handlers, v) && x)
      return x(h, g, y);
    if (h.options.passThrough && h.options.passThrough.includes(v)) {
      if ("children" in g) {
        const { children: w, ...A } = g, C = Po(A);
        return C.children = h.all(g), C;
      }
      return Po(g);
    }
    return (h.options.unknownHandler || b3)(h, g, y);
  }
  function d(g) {
    const y = [];
    if ("children" in g) {
      const v = g.children;
      let x = -1;
      for (; ++x < v.length; ) {
        const S = h.one(v[x], g);
        if (S) {
          if (x && v[x - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = sb(S.value)), !Array.isArray(S) && S.type === "element")) {
            const w = S.children[0];
            w && w.type === "text" && (w.value = sb(w.value));
          }
          Array.isArray(S) ? y.push(...S) : y.push(S);
        }
      }
    }
    return y;
  }
}
function g3(t, n) {
  t.position && (n.position = rM(t));
}
function y3(t, n) {
  let r = n;
  if (t && t.data) {
    const l = t.data.hName, o = t.data.hChildren, c = t.data.hProperties;
    if (typeof l == "string")
      if (r.type === "element")
        r.tagName = l;
      else {
        const u = "children" in r ? r.children : [r];
        r = { type: "element", tagName: l, properties: {}, children: u };
      }
    r.type === "element" && c && Object.assign(r.properties, Po(c)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function b3(t, n) {
  const r = n.data || {}, l = "value" in n && !(Yh.call(r, "hProperties") || Yh.call(r, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(n)
  };
  return t.patch(n, l), t.applyData(n, l);
}
function v3(t, n) {
  const r = [];
  let l = -1;
  for (n && r.push({ type: "text", value: `
` }); ++l < t.length; )
    l && r.push({ type: "text", value: `
` }), r.push(t[l]);
  return n && t.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function sb(t) {
  let n = 0, r = t.charCodeAt(n);
  for (; r === 9 || r === 32; )
    n++, r = t.charCodeAt(n);
  return t.slice(n);
}
function ob(t, n) {
  const r = p3(t, n), l = r.one(t, void 0), o = l3(r), c = Array.isArray(l) ? { type: "root", children: l } : l || { type: "root", children: [] };
  return o && c.children.push({ type: "text", value: `
` }, o), c;
}
function x3(t, n) {
  return t && "run" in t ? async function(r, l) {
    const o = (
      /** @type {HastRoot} */
      ob(r, { file: l, ...n })
    );
    await t.run(o, l);
  } : function(r, l) {
    return (
      /** @type {HastRoot} */
      ob(r, { file: l, ...t || n })
    );
  };
}
function ub(t) {
  if (t)
    throw t;
}
var Jf, cb;
function S3() {
  if (cb) return Jf;
  cb = 1;
  var t = Object.prototype.hasOwnProperty, n = Object.prototype.toString, r = Object.defineProperty, l = Object.getOwnPropertyDescriptor, o = function(d) {
    return typeof Array.isArray == "function" ? Array.isArray(d) : n.call(d) === "[object Array]";
  }, c = function(d) {
    if (!d || n.call(d) !== "[object Object]")
      return !1;
    var g = t.call(d, "constructor"), y = d.constructor && d.constructor.prototype && t.call(d.constructor.prototype, "isPrototypeOf");
    if (d.constructor && !g && !y)
      return !1;
    var v;
    for (v in d)
      ;
    return typeof v > "u" || t.call(d, v);
  }, u = function(d, g) {
    r && g.name === "__proto__" ? r(d, g.name, {
      enumerable: !0,
      configurable: !0,
      value: g.newValue,
      writable: !0
    }) : d[g.name] = g.newValue;
  }, h = function(d, g) {
    if (g === "__proto__")
      if (t.call(d, g)) {
        if (l)
          return l(d, g).value;
      } else return;
    return d[g];
  };
  return Jf = function m() {
    var d, g, y, v, x, S, w = arguments[0], A = 1, C = arguments.length, L = !1;
    for (typeof w == "boolean" && (L = w, w = arguments[1] || {}, A = 2), (w == null || typeof w != "object" && typeof w != "function") && (w = {}); A < C; ++A)
      if (d = arguments[A], d != null)
        for (g in d)
          y = h(w, g), v = h(d, g), w !== v && (L && v && (c(v) || (x = o(v))) ? (x ? (x = !1, S = y && o(y) ? y : []) : S = y && c(y) ? y : {}, u(w, { name: g, newValue: m(L, S, v) })) : typeof v < "u" && u(w, { name: g, newValue: v }));
    return w;
  }, Jf;
}
var T3 = S3();
const $f = /* @__PURE__ */ Kh(T3);
function Gh(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function E3() {
  const t = [], n = { run: r, use: l };
  return n;
  function r(...o) {
    let c = -1;
    const u = o.pop();
    if (typeof u != "function")
      throw new TypeError("Expected function as last argument, not " + u);
    h(null, ...o);
    function h(m, ...d) {
      const g = t[++c];
      let y = -1;
      if (m) {
        u(m);
        return;
      }
      for (; ++y < o.length; )
        (d[y] === null || d[y] === void 0) && (d[y] = o[y]);
      o = d, g ? A3(g, h)(...d) : u(null, ...d);
    }
  }
  function l(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return t.push(o), n;
  }
}
function A3(t, n) {
  let r;
  return l;
  function l(...u) {
    const h = t.length > u.length;
    let m;
    h && u.push(o);
    try {
      m = t.apply(this, u);
    } catch (d) {
      const g = (
        /** @type {Error} */
        d
      );
      if (h && r)
        throw g;
      return o(g);
    }
    h || (m && m.then && typeof m.then == "function" ? m.then(c, o) : m instanceof Error ? o(m) : c(m));
  }
  function o(u, ...h) {
    r || (r = !0, n(u, ...h));
  }
  function c(u) {
    o(null, u);
  }
}
const zn = { basename: w3, dirname: C3, extname: k3, join: D3, sep: "/" };
function w3(t, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Ka(t);
  let r = 0, l = -1, o = t.length, c;
  if (n === void 0 || n.length === 0 || n.length > t.length) {
    for (; o--; )
      if (t.codePointAt(o) === 47) {
        if (c) {
          r = o + 1;
          break;
        }
      } else l < 0 && (c = !0, l = o + 1);
    return l < 0 ? "" : t.slice(r, l);
  }
  if (n === t)
    return "";
  let u = -1, h = n.length - 1;
  for (; o--; )
    if (t.codePointAt(o) === 47) {
      if (c) {
        r = o + 1;
        break;
      }
    } else
      u < 0 && (c = !0, u = o + 1), h > -1 && (t.codePointAt(o) === n.codePointAt(h--) ? h < 0 && (l = o) : (h = -1, l = u));
  return r === l ? l = u : l < 0 && (l = t.length), t.slice(r, l);
}
function C3(t) {
  if (Ka(t), t.length === 0)
    return ".";
  let n = -1, r = t.length, l;
  for (; --r; )
    if (t.codePointAt(r) === 47) {
      if (l) {
        n = r;
        break;
      }
    } else l || (l = !0);
  return n < 0 ? t.codePointAt(0) === 47 ? "/" : "." : n === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, n);
}
function k3(t) {
  Ka(t);
  let n = t.length, r = -1, l = 0, o = -1, c = 0, u;
  for (; n--; ) {
    const h = t.codePointAt(n);
    if (h === 47) {
      if (u) {
        l = n + 1;
        break;
      }
      continue;
    }
    r < 0 && (u = !0, r = n + 1), h === 46 ? o < 0 ? o = n : c !== 1 && (c = 1) : o > -1 && (c = -1);
  }
  return o < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && o === r - 1 && o === l + 1 ? "" : t.slice(o, r);
}
function D3(...t) {
  let n = -1, r;
  for (; ++n < t.length; )
    Ka(t[n]), t[n] && (r = r === void 0 ? t[n] : r + "/" + t[n]);
  return r === void 0 ? "." : R3(r);
}
function R3(t) {
  Ka(t);
  const n = t.codePointAt(0) === 47;
  let r = M3(t, !n);
  return r.length === 0 && !n && (r = "."), r.length > 0 && t.codePointAt(t.length - 1) === 47 && (r += "/"), n ? "/" + r : r;
}
function M3(t, n) {
  let r = "", l = 0, o = -1, c = 0, u = -1, h, m;
  for (; ++u <= t.length; ) {
    if (u < t.length)
      h = t.codePointAt(u);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(o === u - 1 || c === 1)) if (o !== u - 1 && c === 2) {
        if (r.length < 2 || l !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (m = r.lastIndexOf("/"), m !== r.length - 1) {
              m < 0 ? (r = "", l = 0) : (r = r.slice(0, m), l = r.length - 1 - r.lastIndexOf("/")), o = u, c = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", l = 0, o = u, c = 0;
            continue;
          }
        }
        n && (r = r.length > 0 ? r + "/.." : "..", l = 2);
      } else
        r.length > 0 ? r += "/" + t.slice(o + 1, u) : r = t.slice(o + 1, u), l = u - o - 1;
      o = u, c = 0;
    } else h === 46 && c > -1 ? c++ : c = -1;
  }
  return r;
}
function Ka(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const O3 = { cwd: z3 };
function z3() {
  return "/";
}
function Xh(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function _3(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!Xh(t)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (t.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return L3(t);
}
function L3(t) {
  if (t.hostname !== "") {
    const l = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
  }
  const n = t.pathname;
  let r = -1;
  for (; ++r < n.length; )
    if (n.codePointAt(r) === 37 && n.codePointAt(r + 1) === 50) {
      const l = n.codePointAt(r + 2);
      if (l === 70 || l === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(n);
}
const Wf = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class dS {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let r;
    n ? Xh(n) ? r = { path: n } : typeof n == "string" || N3(n) ? r = { value: n } : r = n : r = {}, this.cwd = "cwd" in r ? "" : O3.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let l = -1;
    for (; ++l < Wf.length; ) {
      const c = Wf[l];
      c in r && r[c] !== void 0 && r[c] !== null && (this[c] = c === "history" ? [...r[c]] : r[c]);
    }
    let o;
    for (o in r)
      Wf.includes(o) || (this[o] = r[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? zn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    eh(n, "basename"), th(n, "basename"), this.path = zn.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? zn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    fb(this.basename, "dirname"), this.path = zn.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? zn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (th(n, "extname"), fb(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = zn.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    Xh(n) && (n = _3(n)), eh(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? zn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    eh(n, "stem"), th(n, "stem"), this.path = zn.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, r, l) {
    const o = this.message(n, r, l);
    throw o.fatal = !0, o;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, r, l) {
    const o = this.message(n, r, l);
    return o.fatal = void 0, o;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, r, l) {
    const o = new De(
      // @ts-expect-error: the overloads are fine.
      n,
      r,
      l
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function th(t, n) {
  if (t && t.includes(zn.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + zn.sep + "`"
    );
}
function eh(t, n) {
  if (!t)
    throw new Error("`" + n + "` cannot be empty");
}
function fb(t, n) {
  if (!t)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function N3(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const B3 = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(t) {
    const l = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = l[t], c = function() {
      return o.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, l), c;
  })
), U3 = {}.hasOwnProperty;
class Xd extends B3 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = E3();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Xd()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const l = this.attachers[r];
      n.use(...l);
    }
    return n.data($f(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, r) {
    return typeof n == "string" ? arguments.length === 2 ? (rh("data", this.frozen), this.namespace[n] = r, this) : U3.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (rh("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...l] = this.attachers[this.freezeIndex];
      if (l[0] === !1)
        continue;
      l[0] === !0 && (l[0] = void 0);
      const o = r.call(n, ...l);
      typeof o == "function" && this.transformers.use(o);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const r = To(n), l = this.parser || this.Parser;
    return nh("parse", l), l(String(r), r);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, r) {
    const l = this;
    return this.freeze(), nh("process", this.parser || this.Parser), ih("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
    function o(c, u) {
      const h = To(n), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        l.parse(h)
      );
      l.run(m, h, function(g, y, v) {
        if (g || !y || !v)
          return d(g);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), S = l.stringify(x, v);
        H3(S) ? v.value = S : v.result = S, d(
          g,
          /** @type {VFileWithOutput<CompileResult>} */
          v
        );
      });
      function d(g, y) {
        g || !y ? u(g) : c ? c(y) : r(void 0, y);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let r = !1, l;
    return this.freeze(), nh("processSync", this.parser || this.Parser), ih("processSync", this.compiler || this.Compiler), this.process(n, o), db("processSync", "process", r), l;
    function o(c, u) {
      r = !0, ub(c), l = u;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, r, l) {
    hb(n), this.freeze();
    const o = this.transformers;
    return !l && typeof r == "function" && (l = r, r = void 0), l ? c(void 0, l) : new Promise(c);
    function c(u, h) {
      const m = To(r);
      o.run(n, m, d);
      function d(g, y, v) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || n
        );
        g ? h(g) : u ? u(x) : l(void 0, x, v);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, r) {
    let l = !1, o;
    return this.run(n, r, c), db("runSync", "run", l), o;
    function c(u, h) {
      ub(u), o = h, l = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, r) {
    this.freeze();
    const l = To(r), o = this.compiler || this.Compiler;
    return ih("stringify", o), hb(n), o(n, l);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...r) {
    const l = this.attachers, o = this.namespace;
    if (rh("use", this.frozen), n != null) if (typeof n == "function")
      m(n, r);
    else if (typeof n == "object")
      Array.isArray(n) ? h(n) : u(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function c(d) {
      if (typeof d == "function")
        m(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [g, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            d
          );
          m(g, y);
        } else
          u(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function u(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      h(d.plugins), d.settings && (o.settings = $f(!0, o.settings, d.settings));
    }
    function h(d) {
      let g = -1;
      if (d != null) if (Array.isArray(d))
        for (; ++g < d.length; ) {
          const y = d[g];
          c(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function m(d, g) {
      let y = -1, v = -1;
      for (; ++y < l.length; )
        if (l[y][0] === d) {
          v = y;
          break;
        }
      if (v === -1)
        l.push([d, ...g]);
      else if (g.length > 0) {
        let [x, ...S] = g;
        const w = l[v][1];
        Gh(w) && Gh(x) && (x = $f(!0, w, x)), l[v] = [d, x, ...S];
      }
    }
  }
}
const V3 = new Xd().freeze();
function nh(t, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function ih(t, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function rh(t, n) {
  if (n)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function hb(t) {
  if (!Gh(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function db(t, n, r) {
  if (!r)
    throw new Error(
      "`" + t + "` finished async. Use `" + n + "` instead"
    );
}
function To(t) {
  return j3(t) ? t : new dS(t);
}
function j3(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function H3(t) {
  return typeof t == "string" || q3(t);
}
function q3(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const F3 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", mb = [], pb = { allowDangerousHtml: !0 }, P3 = /^(https?|ircs?|mailto|xmpp)$/i, Y3 = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function G3(t) {
  const n = X3(t), r = I3(t);
  return K3(n.runSync(n.parse(r), r), t);
}
function X3(t) {
  const n = t.rehypePlugins || mb, r = t.remarkPlugins || mb, l = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...pb } : pb;
  return V3().use(Cz).use(r).use(x3, l).use(n);
}
function I3(t) {
  const n = t.children || "", r = new dS();
  return typeof n == "string" && (r.value = n), r;
}
function K3(t, n) {
  const r = n.allowedElements, l = n.allowElement, o = n.components, c = n.disallowedElements, u = n.skipHtml, h = n.unwrapDisallowed, m = n.urlTransform || Q3;
  for (const g of Y3)
    Object.hasOwn(n, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + F3 + g.id, void 0);
  return Gd(t, d), uM(t, {
    Fragment: ft.Fragment,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: ft.jsx,
    jsxs: ft.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function d(g, y, v) {
    if (g.type === "raw" && v && typeof y == "number")
      return u ? v.children.splice(y, 1) : v.children[y] = { type: "text", value: g.value }, y;
    if (g.type === "element") {
      let x;
      for (x in Kf)
        if (Object.hasOwn(Kf, x) && Object.hasOwn(g.properties, x)) {
          const S = g.properties[x], w = Kf[x];
          (w === null || w.includes(g.tagName)) && (g.properties[x] = m(String(S || ""), x, g));
        }
    }
    if (g.type === "element") {
      let x = r ? !r.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if (!x && l && typeof y == "number" && (x = !l(g, y, v)), x && v && typeof y == "number")
        return h && g.children ? v.children.splice(y, 1, ...g.children) : v.children.splice(y, 1), y;
    }
  }
}
function Q3(t) {
  const n = t.indexOf(":"), r = t.indexOf("?"), l = t.indexOf("#"), o = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && n > o || r !== -1 && n > r || l !== -1 && n > l || // It is a protocol, it should be allowed.
    P3.test(t.slice(0, n)) ? t : ""
  );
}
function gb(t, n) {
  const r = String(t);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let l = 0, o = r.indexOf(n);
  for (; o !== -1; )
    l++, o = r.indexOf(n, o + n.length);
  return l;
}
function Z3(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function J3(t, n, r) {
  const o = iu((r || {}).ignore || []), c = $3(n);
  let u = -1;
  for (; ++u < c.length; )
    hS(t, "text", h);
  function h(d, g) {
    let y = -1, v;
    for (; ++y < g.length; ) {
      const x = g[y], S = v ? v.children : void 0;
      if (o(
        x,
        S ? S.indexOf(x) : void 0,
        v
      ))
        return;
      v = x;
    }
    if (v)
      return m(d, g);
  }
  function m(d, g) {
    const y = g[g.length - 1], v = c[u][0], x = c[u][1];
    let S = 0;
    const A = y.children.indexOf(d);
    let C = !1, L = [];
    v.lastIndex = 0;
    let M = v.exec(d.value);
    for (; M; ) {
      const Y = M.index, Q = {
        index: M.index,
        input: M.input,
        stack: [...g, d]
      };
      let _ = x(...M, Q);
      if (typeof _ == "string" && (_ = _.length > 0 ? { type: "text", value: _ } : void 0), _ === !1 ? v.lastIndex = Y + 1 : (S !== Y && L.push({
        type: "text",
        value: d.value.slice(S, Y)
      }), Array.isArray(_) ? L.push(..._) : _ && L.push(_), S = Y + M[0].length, C = !0), !v.global)
        break;
      M = v.exec(d.value);
    }
    return C ? (S < d.value.length && L.push({ type: "text", value: d.value.slice(S) }), y.children.splice(A, 1, ...L)) : L = [d], A + L.length;
  }
}
function $3(t) {
  const n = [];
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const r = !t[0] || Array.isArray(t[0]) ? t : [t];
  let l = -1;
  for (; ++l < r.length; ) {
    const o = r[l];
    n.push([W3(o[0]), t_(o[1])]);
  }
  return n;
}
function W3(t) {
  return typeof t == "string" ? new RegExp(Z3(t), "g") : t;
}
function t_(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const lh = "phrasing", ah = ["autolink", "link", "image", "label"];
function e_() {
  return {
    transforms: [o_],
    enter: {
      literalAutolink: i_,
      literalAutolinkEmail: sh,
      literalAutolinkHttp: sh,
      literalAutolinkWww: sh
    },
    exit: {
      literalAutolink: s_,
      literalAutolinkEmail: a_,
      literalAutolinkHttp: r_,
      literalAutolinkWww: l_
    }
  };
}
function n_() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: lh,
        notInConstruct: ah
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: lh,
        notInConstruct: ah
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: lh,
        notInConstruct: ah
      }
    ]
  };
}
function i_(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function sh(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function r_(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function l_(t) {
  this.config.exit.data.call(this, t);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(t);
}
function a_(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function s_(t) {
  this.exit(t);
}
function o_(t) {
  J3(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, u_],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), c_]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function u_(t, n, r, l, o) {
  let c = "";
  if (!mS(o) || (/^w/i.test(n) && (r = n + r, n = "", c = "http://"), !f_(r)))
    return !1;
  const u = h_(r + l);
  if (!u[0]) return !1;
  const h = {
    type: "link",
    title: null,
    url: c + n + u[0],
    children: [{ type: "text", value: n + u[0] }]
  };
  return u[1] ? [h, { type: "text", value: u[1] }] : h;
}
function c_(t, n, r, l) {
  return (
    // Not an expected previous character.
    !mS(l, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(r) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + r,
      children: [{ type: "text", value: n + "@" + r }]
    }
  );
}
function f_(t) {
  const n = t.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function h_(t) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!n)
    return [t, void 0];
  t = t.slice(0, n.index);
  let r = n[0], l = r.indexOf(")");
  const o = gb(t, "(");
  let c = gb(t, ")");
  for (; l !== -1 && o > c; )
    t += r.slice(0, l + 1), r = r.slice(l + 1), l = r.indexOf(")"), c++;
  return [t, r];
}
function mS(t, n) {
  const r = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || fr(r) || tu(r)) && // If it’s an email, the previous character should not be a slash.
  (!n || r !== 47);
}
pS.peek = S_;
function d_() {
  this.buffer();
}
function m_(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function p_() {
  this.buffer();
}
function g_(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function y_(t) {
  const n = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = wn(
    this.sliceSerialize(t)
  ).toLowerCase(), r.label = n;
}
function b_(t) {
  this.exit(t);
}
function v_(t) {
  const n = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = wn(
    this.sliceSerialize(t)
  ).toLowerCase(), r.label = n;
}
function x_(t) {
  this.exit(t);
}
function S_() {
  return "[";
}
function pS(t, n, r, l) {
  const o = r.createTracker(l);
  let c = o.move("[^");
  const u = r.enter("footnoteReference"), h = r.enter("reference");
  return c += o.move(
    r.safe(r.associationId(t), { after: "]", before: c })
  ), h(), u(), c += o.move("]"), c;
}
function T_() {
  return {
    enter: {
      gfmFootnoteCallString: d_,
      gfmFootnoteCall: m_,
      gfmFootnoteDefinitionLabelString: p_,
      gfmFootnoteDefinition: g_
    },
    exit: {
      gfmFootnoteCallString: y_,
      gfmFootnoteCall: b_,
      gfmFootnoteDefinitionLabelString: v_,
      gfmFootnoteDefinition: x_
    }
  };
}
function E_(t) {
  let n = !1;
  return t && t.firstLineBlank && (n = !0), {
    handlers: { footnoteDefinition: r, footnoteReference: pS },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function r(l, o, c, u) {
    const h = c.createTracker(u);
    let m = h.move("[^");
    const d = c.enter("footnoteDefinition"), g = c.enter("label");
    return m += h.move(
      c.safe(c.associationId(l), { before: m, after: "]" })
    ), g(), m += h.move("]:"), l.children && l.children.length > 0 && (h.shift(4), m += h.move(
      (n ? `
` : " ") + c.indentLines(
        c.containerFlow(l, h.current()),
        n ? gS : A_
      )
    )), d(), m;
  }
}
function A_(t, n, r) {
  return n === 0 ? t : gS(t, n, r);
}
function gS(t, n, r) {
  return (r ? "" : "    ") + t;
}
const w_ = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
yS.peek = M_;
function C_() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: D_ },
    exit: { strikethrough: R_ }
  };
}
function k_() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: w_
      }
    ],
    handlers: { delete: yS }
  };
}
function D_(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function R_(t) {
  this.exit(t);
}
function yS(t, n, r, l) {
  const o = r.createTracker(l), c = r.enter("strikethrough");
  let u = o.move("~~");
  return u += r.containerPhrasing(t, {
    ...o.current(),
    before: u,
    after: "~"
  }), u += o.move("~~"), c(), u;
}
function M_() {
  return "~";
}
function O_(t) {
  return t.length;
}
function z_(t, n) {
  const r = n || {}, l = (r.align || []).concat(), o = r.stringLength || O_, c = [], u = [], h = [], m = [];
  let d = 0, g = -1;
  for (; ++g < t.length; ) {
    const w = [], A = [];
    let C = -1;
    for (t[g].length > d && (d = t[g].length); ++C < t[g].length; ) {
      const L = __(t[g][C]);
      if (r.alignDelimiters !== !1) {
        const M = o(L);
        A[C] = M, (m[C] === void 0 || M > m[C]) && (m[C] = M);
      }
      w.push(L);
    }
    u[g] = w, h[g] = A;
  }
  let y = -1;
  if (typeof l == "object" && "length" in l)
    for (; ++y < d; )
      c[y] = yb(l[y]);
  else {
    const w = yb(l);
    for (; ++y < d; )
      c[y] = w;
  }
  y = -1;
  const v = [], x = [];
  for (; ++y < d; ) {
    const w = c[y];
    let A = "", C = "";
    w === 99 ? (A = ":", C = ":") : w === 108 ? A = ":" : w === 114 && (C = ":");
    let L = r.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[y] - A.length - C.length
    );
    const M = A + "-".repeat(L) + C;
    r.alignDelimiters !== !1 && (L = A.length + L + C.length, L > m[y] && (m[y] = L), x[y] = L), v[y] = M;
  }
  u.splice(1, 0, v), h.splice(1, 0, x), g = -1;
  const S = [];
  for (; ++g < u.length; ) {
    const w = u[g], A = h[g];
    y = -1;
    const C = [];
    for (; ++y < d; ) {
      const L = w[y] || "";
      let M = "", Y = "";
      if (r.alignDelimiters !== !1) {
        const Q = m[y] - (A[y] || 0), _ = c[y];
        _ === 114 ? M = " ".repeat(Q) : _ === 99 ? Q % 2 ? (M = " ".repeat(Q / 2 + 0.5), Y = " ".repeat(Q / 2 - 0.5)) : (M = " ".repeat(Q / 2), Y = M) : Y = " ".repeat(Q);
      }
      r.delimiterStart !== !1 && !y && C.push("|"), r.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(r.alignDelimiters === !1 && L === "") && (r.delimiterStart !== !1 || y) && C.push(" "), r.alignDelimiters !== !1 && C.push(M), C.push(L), r.alignDelimiters !== !1 && C.push(Y), r.padding !== !1 && C.push(" "), (r.delimiterEnd !== !1 || y !== d - 1) && C.push("|");
    }
    S.push(
      r.delimiterEnd === !1 ? C.join("").replace(/ +$/, "") : C.join("")
    );
  }
  return S.join(`
`);
}
function __(t) {
  return t == null ? "" : String(t);
}
function yb(t) {
  const n = typeof t == "string" ? t.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function L_(t, n, r, l) {
  const o = r.enter("blockquote"), c = r.createTracker(l);
  c.move("> "), c.shift(2);
  const u = r.indentLines(
    r.containerFlow(t, c.current()),
    N_
  );
  return o(), u;
}
function N_(t, n, r) {
  return ">" + (r ? "" : " ") + t;
}
function B_(t, n) {
  return bb(t, n.inConstruct, !0) && !bb(t, n.notInConstruct, !1);
}
function bb(t, n, r) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return r;
  let l = -1;
  for (; ++l < n.length; )
    if (t.includes(n[l]))
      return !0;
  return !1;
}
function vb(t, n, r, l) {
  let o = -1;
  for (; ++o < r.unsafe.length; )
    if (r.unsafe[o].character === `
` && B_(r.stack, r.unsafe[o]))
      return /[ \t]/.test(l.before) ? "" : " ";
  return `\\
`;
}
function U_(t, n) {
  const r = String(t);
  let l = r.indexOf(n), o = l, c = 0, u = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; l !== -1; )
    l === o ? ++c > u && (u = c) : c = 1, o = l + n.length, l = r.indexOf(n, o);
  return u;
}
function V_(t, n) {
  return !!(n.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value));
}
function j_(t) {
  const n = t.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function H_(t, n, r, l) {
  const o = j_(r), c = t.value || "", u = o === "`" ? "GraveAccent" : "Tilde";
  if (V_(t, r)) {
    const y = r.enter("codeIndented"), v = r.indentLines(c, q_);
    return y(), v;
  }
  const h = r.createTracker(l), m = o.repeat(Math.max(U_(c, o) + 1, 3)), d = r.enter("codeFenced");
  let g = h.move(m);
  if (t.lang) {
    const y = r.enter(`codeFencedLang${u}`);
    g += h.move(
      r.safe(t.lang, {
        before: g,
        after: " ",
        encode: ["`"],
        ...h.current()
      })
    ), y();
  }
  if (t.lang && t.meta) {
    const y = r.enter(`codeFencedMeta${u}`);
    g += h.move(" "), g += h.move(
      r.safe(t.meta, {
        before: g,
        after: `
`,
        encode: ["`"],
        ...h.current()
      })
    ), y();
  }
  return g += h.move(`
`), c && (g += h.move(c + `
`)), g += h.move(m), d(), g;
}
function q_(t, n, r) {
  return (r ? "" : "    ") + t;
}
function Id(t) {
  const n = t.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function F_(t, n, r, l) {
  const o = Id(r), c = o === '"' ? "Quote" : "Apostrophe", u = r.enter("definition");
  let h = r.enter("label");
  const m = r.createTracker(l);
  let d = m.move("[");
  return d += m.move(
    r.safe(r.associationId(t), {
      before: d,
      after: "]",
      ...m.current()
    })
  ), d += m.move("]: "), h(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (h = r.enter("destinationLiteral"), d += m.move("<"), d += m.move(
    r.safe(t.url, { before: d, after: ">", ...m.current() })
  ), d += m.move(">")) : (h = r.enter("destinationRaw"), d += m.move(
    r.safe(t.url, {
      before: d,
      after: t.title ? " " : `
`,
      ...m.current()
    })
  )), h(), t.title && (h = r.enter(`title${c}`), d += m.move(" " + o), d += m.move(
    r.safe(t.title, {
      before: d,
      after: o,
      ...m.current()
    })
  ), d += m.move(o), h()), u(), d;
}
function P_(t) {
  const n = t.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
function Ba(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function Yo(t, n, r) {
  const l = hl(t), o = hl(n);
  return l === void 0 ? o === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    r === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : o === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : l === 1 ? o === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : o === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : o === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : o === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
bS.peek = Y_;
function bS(t, n, r, l) {
  const o = P_(r), c = r.enter("emphasis"), u = r.createTracker(l), h = u.move(o);
  let m = u.move(
    r.containerPhrasing(t, {
      after: o,
      before: h,
      ...u.current()
    })
  );
  const d = m.charCodeAt(0), g = Yo(
    l.before.charCodeAt(l.before.length - 1),
    d,
    o
  );
  g.inside && (m = Ba(d) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), v = Yo(l.after.charCodeAt(0), y, o);
  v.inside && (m = m.slice(0, -1) + Ba(y));
  const x = u.move(o);
  return c(), r.attentionEncodeSurroundingInfo = {
    after: v.outside,
    before: g.outside
  }, h + m + x;
}
function Y_(t, n, r) {
  return r.options.emphasis || "*";
}
function G_(t, n) {
  let r = !1;
  return Gd(t, function(l) {
    if ("value" in l && /\r?\n|\r/.test(l.value) || l.type === "break")
      return r = !0, Ph;
  }), !!((!t.depth || t.depth < 3) && Vd(t) && (n.options.setext || r));
}
function X_(t, n, r, l) {
  const o = Math.max(Math.min(6, t.depth || 1), 1), c = r.createTracker(l);
  if (G_(t, r)) {
    const g = r.enter("headingSetext"), y = r.enter("phrasing"), v = r.containerPhrasing(t, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return y(), g(), v + `
` + (o === 1 ? "=" : "-").repeat(
      // The whole size…
      v.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(v.lastIndexOf("\r"), v.lastIndexOf(`
`)) + 1)
    );
  }
  const u = "#".repeat(o), h = r.enter("headingAtx"), m = r.enter("phrasing");
  c.move(u + " ");
  let d = r.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  return /^[\t ]/.test(d) && (d = Ba(d.charCodeAt(0)) + d.slice(1)), d = d ? u + " " + d : u, r.options.closeAtx && (d += " " + u), m(), h(), d;
}
vS.peek = I_;
function vS(t) {
  return t.value || "";
}
function I_() {
  return "<";
}
xS.peek = K_;
function xS(t, n, r, l) {
  const o = Id(r), c = o === '"' ? "Quote" : "Apostrophe", u = r.enter("image");
  let h = r.enter("label");
  const m = r.createTracker(l);
  let d = m.move("![");
  return d += m.move(
    r.safe(t.alt, { before: d, after: "]", ...m.current() })
  ), d += m.move("]("), h(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (h = r.enter("destinationLiteral"), d += m.move("<"), d += m.move(
    r.safe(t.url, { before: d, after: ">", ...m.current() })
  ), d += m.move(">")) : (h = r.enter("destinationRaw"), d += m.move(
    r.safe(t.url, {
      before: d,
      after: t.title ? " " : ")",
      ...m.current()
    })
  )), h(), t.title && (h = r.enter(`title${c}`), d += m.move(" " + o), d += m.move(
    r.safe(t.title, {
      before: d,
      after: o,
      ...m.current()
    })
  ), d += m.move(o), h()), d += m.move(")"), u(), d;
}
function K_() {
  return "!";
}
SS.peek = Q_;
function SS(t, n, r, l) {
  const o = t.referenceType, c = r.enter("imageReference");
  let u = r.enter("label");
  const h = r.createTracker(l);
  let m = h.move("![");
  const d = r.safe(t.alt, {
    before: m,
    after: "]",
    ...h.current()
  });
  m += h.move(d + "]["), u();
  const g = r.stack;
  r.stack = [], u = r.enter("reference");
  const y = r.safe(r.associationId(t), {
    before: m,
    after: "]",
    ...h.current()
  });
  return u(), r.stack = g, c(), o === "full" || !d || d !== y ? m += h.move(y + "]") : o === "shortcut" ? m = m.slice(0, -1) : m += h.move("]"), m;
}
function Q_() {
  return "!";
}
TS.peek = Z_;
function TS(t, n, r) {
  let l = t.value || "", o = "`", c = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(l); )
    o += "`";
  for (/[^ \r\n]/.test(l) && (/^[ \r\n]/.test(l) && /[ \r\n]$/.test(l) || /^`|`$/.test(l)) && (l = " " + l + " "); ++c < r.unsafe.length; ) {
    const u = r.unsafe[c], h = r.compilePattern(u);
    let m;
    if (u.atBreak)
      for (; m = h.exec(l); ) {
        let d = m.index;
        l.charCodeAt(d) === 10 && l.charCodeAt(d - 1) === 13 && d--, l = l.slice(0, d) + " " + l.slice(m.index + 1);
      }
  }
  return o + l + o;
}
function Z_() {
  return "`";
}
function ES(t, n) {
  const r = Vd(t);
  return !!(!n.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (r === t.url || "mailto:" + r === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
AS.peek = J_;
function AS(t, n, r, l) {
  const o = Id(r), c = o === '"' ? "Quote" : "Apostrophe", u = r.createTracker(l);
  let h, m;
  if (ES(t, r)) {
    const g = r.stack;
    r.stack = [], h = r.enter("autolink");
    let y = u.move("<");
    return y += u.move(
      r.containerPhrasing(t, {
        before: y,
        after: ">",
        ...u.current()
      })
    ), y += u.move(">"), h(), r.stack = g, y;
  }
  h = r.enter("link"), m = r.enter("label");
  let d = u.move("[");
  return d += u.move(
    r.containerPhrasing(t, {
      before: d,
      after: "](",
      ...u.current()
    })
  ), d += u.move("]("), m(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (m = r.enter("destinationLiteral"), d += u.move("<"), d += u.move(
    r.safe(t.url, { before: d, after: ">", ...u.current() })
  ), d += u.move(">")) : (m = r.enter("destinationRaw"), d += u.move(
    r.safe(t.url, {
      before: d,
      after: t.title ? " " : ")",
      ...u.current()
    })
  )), m(), t.title && (m = r.enter(`title${c}`), d += u.move(" " + o), d += u.move(
    r.safe(t.title, {
      before: d,
      after: o,
      ...u.current()
    })
  ), d += u.move(o), m()), d += u.move(")"), h(), d;
}
function J_(t, n, r) {
  return ES(t, r) ? "<" : "[";
}
wS.peek = $_;
function wS(t, n, r, l) {
  const o = t.referenceType, c = r.enter("linkReference");
  let u = r.enter("label");
  const h = r.createTracker(l);
  let m = h.move("[");
  const d = r.containerPhrasing(t, {
    before: m,
    after: "]",
    ...h.current()
  });
  m += h.move(d + "]["), u();
  const g = r.stack;
  r.stack = [], u = r.enter("reference");
  const y = r.safe(r.associationId(t), {
    before: m,
    after: "]",
    ...h.current()
  });
  return u(), r.stack = g, c(), o === "full" || !d || d !== y ? m += h.move(y + "]") : o === "shortcut" ? m = m.slice(0, -1) : m += h.move("]"), m;
}
function $_() {
  return "[";
}
function Kd(t) {
  const n = t.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function W_(t) {
  const n = Kd(t), r = t.options.bulletOther;
  if (!r)
    return n === "*" ? "-" : "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (r === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + r + "`) to be different"
    );
  return r;
}
function t4(t) {
  const n = t.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function CS(t) {
  const n = t.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function e4(t, n, r, l) {
  const o = r.enter("list"), c = r.bulletCurrent;
  let u = t.ordered ? t4(r) : Kd(r);
  const h = t.ordered ? u === "." ? ")" : "." : W_(r);
  let m = n && r.bulletLastUsed ? u === r.bulletLastUsed : !1;
  if (!t.ordered) {
    const g = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (u === "*" || u === "-") && // Empty first list item:
      g && (!g.children || !g.children[0]) && // Directly in two other list items:
      r.stack[r.stack.length - 1] === "list" && r.stack[r.stack.length - 2] === "listItem" && r.stack[r.stack.length - 3] === "list" && r.stack[r.stack.length - 4] === "listItem" && // That are each the first child.
      r.indexStack[r.indexStack.length - 1] === 0 && r.indexStack[r.indexStack.length - 2] === 0 && r.indexStack[r.indexStack.length - 3] === 0 && (m = !0), CS(r) === u && g
    ) {
      let y = -1;
      for (; ++y < t.children.length; ) {
        const v = t.children[y];
        if (v && v.type === "listItem" && v.children && v.children[0] && v.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (u = h), r.bulletCurrent = u;
  const d = r.containerFlow(t, l);
  return r.bulletLastUsed = u, r.bulletCurrent = c, o(), d;
}
function n4(t) {
  const n = t.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function i4(t, n, r, l) {
  const o = n4(r);
  let c = r.bulletCurrent || Kd(r);
  n && n.type === "list" && n.ordered && (c = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (r.options.incrementListMarker === !1 ? 0 : n.children.indexOf(t)) + c);
  let u = c.length + 1;
  (o === "tab" || o === "mixed" && (n && n.type === "list" && n.spread || t.spread)) && (u = Math.ceil(u / 4) * 4);
  const h = r.createTracker(l);
  h.move(c + " ".repeat(u - c.length)), h.shift(u);
  const m = r.enter("listItem"), d = r.indentLines(
    r.containerFlow(t, h.current()),
    g
  );
  return m(), d;
  function g(y, v, x) {
    return v ? (x ? "" : " ".repeat(u)) + y : (x ? c : c + " ".repeat(u - c.length)) + y;
  }
}
function r4(t, n, r, l) {
  const o = r.enter("paragraph"), c = r.enter("phrasing"), u = r.containerPhrasing(t, l);
  return c(), o(), u;
}
const l4 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  iu([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function a4(t, n, r, l) {
  return (t.children.some(function(u) {
    return l4(u);
  }) ? r.containerPhrasing : r.containerFlow).call(r, t, l);
}
function s4(t) {
  const n = t.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
kS.peek = o4;
function kS(t, n, r, l) {
  const o = s4(r), c = r.enter("strong"), u = r.createTracker(l), h = u.move(o + o);
  let m = u.move(
    r.containerPhrasing(t, {
      after: o,
      before: h,
      ...u.current()
    })
  );
  const d = m.charCodeAt(0), g = Yo(
    l.before.charCodeAt(l.before.length - 1),
    d,
    o
  );
  g.inside && (m = Ba(d) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), v = Yo(l.after.charCodeAt(0), y, o);
  v.inside && (m = m.slice(0, -1) + Ba(y));
  const x = u.move(o + o);
  return c(), r.attentionEncodeSurroundingInfo = {
    after: v.outside,
    before: g.outside
  }, h + m + x;
}
function o4(t, n, r) {
  return r.options.strong || "*";
}
function u4(t, n, r, l) {
  return r.safe(t.value, l);
}
function c4(t) {
  const n = t.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function f4(t, n, r) {
  const l = (CS(r) + (r.options.ruleSpaces ? " " : "")).repeat(c4(r));
  return r.options.ruleSpaces ? l.slice(0, -1) : l;
}
const DS = {
  blockquote: L_,
  break: vb,
  code: H_,
  definition: F_,
  emphasis: bS,
  hardBreak: vb,
  heading: X_,
  html: vS,
  image: xS,
  imageReference: SS,
  inlineCode: TS,
  link: AS,
  linkReference: wS,
  list: e4,
  listItem: i4,
  paragraph: r4,
  root: a4,
  strong: kS,
  text: u4,
  thematicBreak: f4
};
function h4() {
  return {
    enter: {
      table: d4,
      tableData: xb,
      tableHeader: xb,
      tableRow: p4
    },
    exit: {
      codeText: g4,
      table: m4,
      tableData: oh,
      tableHeader: oh,
      tableRow: oh
    }
  };
}
function d4(t) {
  const n = t._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(r) {
        return r === "none" ? null : r;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function m4(t) {
  this.exit(t), this.data.inTable = void 0;
}
function p4(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function oh(t) {
  this.exit(t);
}
function xb(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function g4(t) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, y4));
  const r = this.stack[this.stack.length - 1];
  r.type, r.value = n, this.exit(t);
}
function y4(t, n) {
  return n === "|" ? n : t;
}
function b4(t) {
  const n = t || {}, r = n.tableCellPadding, l = n.tablePipeAlign, o = n.stringLength, c = r ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: v,
      table: u,
      tableCell: m,
      tableRow: h
    }
  };
  function u(x, S, w, A) {
    return d(g(x, w, A), x.align);
  }
  function h(x, S, w, A) {
    const C = y(x, w, A), L = d([C]);
    return L.slice(0, L.indexOf(`
`));
  }
  function m(x, S, w, A) {
    const C = w.enter("tableCell"), L = w.enter("phrasing"), M = w.containerPhrasing(x, {
      ...A,
      before: c,
      after: c
    });
    return L(), C(), M;
  }
  function d(x, S) {
    return z_(x, {
      align: S,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: l,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: o
    });
  }
  function g(x, S, w) {
    const A = x.children;
    let C = -1;
    const L = [], M = S.enter("table");
    for (; ++C < A.length; )
      L[C] = y(A[C], S, w);
    return M(), L;
  }
  function y(x, S, w) {
    const A = x.children;
    let C = -1;
    const L = [], M = S.enter("tableRow");
    for (; ++C < A.length; )
      L[C] = m(A[C], x, S, w);
    return M(), L;
  }
  function v(x, S, w) {
    let A = DS.inlineCode(x, S, w);
    return w.stack.includes("tableCell") && (A = A.replace(/\|/g, "\\$&")), A;
  }
}
function v4() {
  return {
    exit: {
      taskListCheckValueChecked: Sb,
      taskListCheckValueUnchecked: Sb,
      paragraph: S4
    }
  };
}
function x4() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: T4 }
  };
}
function Sb(t) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = t.type === "taskListCheckValueChecked";
}
function S4(t) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const r = this.stack[this.stack.length - 1];
    r.type;
    const l = r.children[0];
    if (l && l.type === "text") {
      const o = n.children;
      let c = -1, u;
      for (; ++c < o.length; ) {
        const h = o[c];
        if (h.type === "paragraph") {
          u = h;
          break;
        }
      }
      u === r && (l.value = l.value.slice(1), l.value.length === 0 ? r.children.shift() : r.position && l.position && typeof l.position.start.offset == "number" && (l.position.start.column++, l.position.start.offset++, r.position.start = Object.assign({}, l.position.start)));
    }
  }
  this.exit(t);
}
function T4(t, n, r, l) {
  const o = t.children[0], c = typeof t.checked == "boolean" && o && o.type === "paragraph", u = "[" + (t.checked ? "x" : " ") + "] ", h = r.createTracker(l);
  c && h.move(u);
  let m = DS.listItem(t, n, r, {
    ...l,
    ...h.current()
  });
  return c && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, d)), m;
  function d(g) {
    return g + u;
  }
}
function E4() {
  return [
    e_(),
    T_(),
    C_(),
    h4(),
    v4()
  ];
}
function A4(t) {
  return {
    extensions: [
      n_(),
      E_(t),
      k_(),
      b4(t),
      x4()
    ]
  };
}
const w4 = {
  tokenize: O4,
  partial: !0
}, RS = {
  tokenize: z4,
  partial: !0
}, MS = {
  tokenize: _4,
  partial: !0
}, OS = {
  tokenize: L4,
  partial: !0
}, C4 = {
  tokenize: N4,
  partial: !0
}, zS = {
  name: "wwwAutolink",
  tokenize: R4,
  previous: LS
}, _S = {
  name: "protocolAutolink",
  tokenize: M4,
  previous: NS
}, li = {
  name: "emailAutolink",
  tokenize: D4,
  previous: BS
}, Nn = {};
function k4() {
  return {
    text: Nn
  };
}
let ir = 48;
for (; ir < 123; )
  Nn[ir] = li, ir++, ir === 58 ? ir = 65 : ir === 91 && (ir = 97);
Nn[43] = li;
Nn[45] = li;
Nn[46] = li;
Nn[95] = li;
Nn[72] = [li, _S];
Nn[104] = [li, _S];
Nn[87] = [li, zS];
Nn[119] = [li, zS];
function D4(t, n, r) {
  const l = this;
  let o, c;
  return u;
  function u(y) {
    return !Ih(y) || !BS.call(l, l.previous) || Qd(l.events) ? r(y) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), h(y));
  }
  function h(y) {
    return Ih(y) ? (t.consume(y), h) : y === 64 ? (t.consume(y), m) : r(y);
  }
  function m(y) {
    return y === 46 ? t.check(C4, g, d)(y) : y === 45 || y === 95 || ke(y) ? (c = !0, t.consume(y), m) : g(y);
  }
  function d(y) {
    return t.consume(y), o = !0, m;
  }
  function g(y) {
    return c && o && ze(l.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), n(y)) : r(y);
  }
}
function R4(t, n, r) {
  const l = this;
  return o;
  function o(u) {
    return u !== 87 && u !== 119 || !LS.call(l, l.previous) || Qd(l.events) ? r(u) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(w4, t.attempt(RS, t.attempt(MS, c), r), r)(u));
  }
  function c(u) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), n(u);
  }
}
function M4(t, n, r) {
  const l = this;
  let o = "", c = !1;
  return u;
  function u(y) {
    return (y === 72 || y === 104) && NS.call(l, l.previous) && !Qd(l.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), o += String.fromCodePoint(y), t.consume(y), h) : r(y);
  }
  function h(y) {
    if (ze(y) && o.length < 5)
      return o += String.fromCodePoint(y), t.consume(y), h;
    if (y === 58) {
      const v = o.toLowerCase();
      if (v === "http" || v === "https")
        return t.consume(y), m;
    }
    return r(y);
  }
  function m(y) {
    return y === 47 ? (t.consume(y), c ? d : (c = !0, m)) : r(y);
  }
  function d(y) {
    return y === null || qo(y) || Xt(y) || fr(y) || tu(y) ? r(y) : t.attempt(RS, t.attempt(MS, g), r)(y);
  }
  function g(y) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), n(y);
  }
}
function O4(t, n, r) {
  let l = 0;
  return o;
  function o(u) {
    return (u === 87 || u === 119) && l < 3 ? (l++, t.consume(u), o) : u === 46 && l === 3 ? (t.consume(u), c) : r(u);
  }
  function c(u) {
    return u === null ? r(u) : n(u);
  }
}
function z4(t, n, r) {
  let l, o, c;
  return u;
  function u(d) {
    return d === 46 || d === 95 ? t.check(OS, m, h)(d) : d === null || Xt(d) || fr(d) || d !== 45 && tu(d) ? m(d) : (c = !0, t.consume(d), u);
  }
  function h(d) {
    return d === 95 ? l = !0 : (o = l, l = void 0), t.consume(d), u;
  }
  function m(d) {
    return o || l || !c ? r(d) : n(d);
  }
}
function _4(t, n) {
  let r = 0, l = 0;
  return o;
  function o(u) {
    return u === 40 ? (r++, t.consume(u), o) : u === 41 && l < r ? c(u) : u === 33 || u === 34 || u === 38 || u === 39 || u === 41 || u === 42 || u === 44 || u === 46 || u === 58 || u === 59 || u === 60 || u === 63 || u === 93 || u === 95 || u === 126 ? t.check(OS, n, c)(u) : u === null || Xt(u) || fr(u) ? n(u) : (t.consume(u), o);
  }
  function c(u) {
    return u === 41 && l++, t.consume(u), o;
  }
}
function L4(t, n, r) {
  return l;
  function l(h) {
    return h === 33 || h === 34 || h === 39 || h === 41 || h === 42 || h === 44 || h === 46 || h === 58 || h === 59 || h === 63 || h === 95 || h === 126 ? (t.consume(h), l) : h === 38 ? (t.consume(h), c) : h === 93 ? (t.consume(h), o) : (
      // `<` is an end.
      h === 60 || // So is whitespace.
      h === null || Xt(h) || fr(h) ? n(h) : r(h)
    );
  }
  function o(h) {
    return h === null || h === 40 || h === 91 || Xt(h) || fr(h) ? n(h) : l(h);
  }
  function c(h) {
    return ze(h) ? u(h) : r(h);
  }
  function u(h) {
    return h === 59 ? (t.consume(h), l) : ze(h) ? (t.consume(h), u) : r(h);
  }
}
function N4(t, n, r) {
  return l;
  function l(c) {
    return t.consume(c), o;
  }
  function o(c) {
    return ke(c) ? r(c) : n(c);
  }
}
function LS(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || Xt(t);
}
function NS(t) {
  return !ze(t);
}
function BS(t) {
  return !(t === 47 || Ih(t));
}
function Ih(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || ke(t);
}
function Qd(t) {
  let n = t.length, r = !1;
  for (; n--; ) {
    const l = t[n][1];
    if ((l.type === "labelLink" || l.type === "labelImage") && !l._balanced) {
      r = !0;
      break;
    }
    if (l._gfmAutolinkLiteralWalkedInto) {
      r = !1;
      break;
    }
  }
  return t.length > 0 && !r && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), r;
}
const B4 = {
  tokenize: Y4,
  partial: !0
};
function U4() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: q4,
        continuation: {
          tokenize: F4
        },
        exit: P4
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: H4
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: V4,
        resolveTo: j4
      }
    }
  };
}
function V4(t, n, r) {
  const l = this;
  let o = l.events.length;
  const c = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let u;
  for (; o--; ) {
    const m = l.events[o][1];
    if (m.type === "labelImage") {
      u = m;
      break;
    }
    if (m.type === "gfmFootnoteCall" || m.type === "labelLink" || m.type === "label" || m.type === "image" || m.type === "link")
      break;
  }
  return h;
  function h(m) {
    if (!u || !u._balanced)
      return r(m);
    const d = wn(l.sliceSerialize({
      start: u.end,
      end: l.now()
    }));
    return d.codePointAt(0) !== 94 || !c.includes(d.slice(1)) ? r(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), n(m));
  }
}
function j4(t, n) {
  let r = t.length;
  for (; r--; )
    if (t[r][1].type === "labelImage" && t[r][0] === "enter") {
      t[r][1];
      break;
    }
  t[r + 1][1].type = "data", t[r + 3][1].type = "gfmFootnoteCallLabelMarker";
  const l = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[r + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, o = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[r + 3][1].end),
    end: Object.assign({}, t[r + 3][1].end)
  };
  o.end.column++, o.end.offset++, o.end._bufferIndex++;
  const c = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, o.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, u = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, c.start),
    end: Object.assign({}, c.end)
  }, h = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[r + 1],
    t[r + 2],
    ["enter", l, n],
    // The `[`
    t[r + 3],
    t[r + 4],
    // The `^`.
    ["enter", o, n],
    ["exit", o, n],
    // Everything in between.
    ["enter", c, n],
    ["enter", u, n],
    ["exit", u, n],
    ["exit", c, n],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", l, n]
  ];
  return t.splice(r, t.length - r + 1, ...h), t;
}
function H4(t, n, r) {
  const l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let c = 0, u;
  return h;
  function h(y) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(y) {
    return y !== 94 ? r(y) : (t.enter("gfmFootnoteCallMarker"), t.consume(y), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", d);
  }
  function d(y) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      y === 93 && !u || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || Xt(y)
    )
      return r(y);
    if (y === 93) {
      t.exit("chunkString");
      const v = t.exit("gfmFootnoteCallString");
      return o.includes(wn(l.sliceSerialize(v))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), n) : r(y);
    }
    return Xt(y) || (u = !0), c++, t.consume(y), y === 92 ? g : d;
  }
  function g(y) {
    return y === 91 || y === 92 || y === 93 ? (t.consume(y), c++, d) : d(y);
  }
}
function q4(t, n, r) {
  const l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []);
  let c, u = 0, h;
  return m;
  function m(S) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), d;
  }
  function d(S) {
    return S === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", g) : r(S);
  }
  function g(S) {
    if (
      // Too long.
      u > 999 || // Closing brace with nothing.
      S === 93 && !h || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      S === null || S === 91 || Xt(S)
    )
      return r(S);
    if (S === 93) {
      t.exit("chunkString");
      const w = t.exit("gfmFootnoteDefinitionLabelString");
      return c = wn(l.sliceSerialize(w)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), v;
    }
    return Xt(S) || (h = !0), u++, t.consume(S), S === 92 ? y : g;
  }
  function y(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), u++, g) : g(S);
  }
  function v(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), o.includes(c) || o.push(c), _t(t, x, "gfmFootnoteDefinitionWhitespace")) : r(S);
  }
  function x(S) {
    return n(S);
  }
}
function F4(t, n, r) {
  return t.check(Ia, n, t.attempt(B4, n, r));
}
function P4(t) {
  t.exit("gfmFootnoteDefinition");
}
function Y4(t, n, r) {
  const l = this;
  return _t(t, o, "gfmFootnoteDefinitionIndent", 5);
  function o(c) {
    const u = l.events[l.events.length - 1];
    return u && u[1].type === "gfmFootnoteDefinitionIndent" && u[2].sliceSerialize(u[1], !0).length === 4 ? n(c) : r(c);
  }
}
function G4(t) {
  let r = (t || {}).singleTilde;
  const l = {
    name: "strikethrough",
    tokenize: c,
    resolveAll: o
  };
  return r == null && (r = !0), {
    text: {
      126: l
    },
    insideSpan: {
      null: [l]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function o(u, h) {
    let m = -1;
    for (; ++m < u.length; )
      if (u[m][0] === "enter" && u[m][1].type === "strikethroughSequenceTemporary" && u[m][1]._close) {
        let d = m;
        for (; d--; )
          if (u[d][0] === "exit" && u[d][1].type === "strikethroughSequenceTemporary" && u[d][1]._open && // If the sizes are the same:
          u[m][1].end.offset - u[m][1].start.offset === u[d][1].end.offset - u[d][1].start.offset) {
            u[m][1].type = "strikethroughSequence", u[d][1].type = "strikethroughSequence";
            const g = {
              type: "strikethrough",
              start: Object.assign({}, u[d][1].start),
              end: Object.assign({}, u[m][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, u[d][1].end),
              end: Object.assign({}, u[m][1].start)
            }, v = [["enter", g, h], ["enter", u[d][1], h], ["exit", u[d][1], h], ["enter", y, h]], x = h.parser.constructs.insideSpan.null;
            x && nn(v, v.length, 0, eu(x, u.slice(d + 1, m), h)), nn(v, v.length, 0, [["exit", y, h], ["enter", u[m][1], h], ["exit", u[m][1], h], ["exit", g, h]]), nn(u, d - 1, m - d + 3, v), m = d + v.length - 2;
            break;
          }
      }
    for (m = -1; ++m < u.length; )
      u[m][1].type === "strikethroughSequenceTemporary" && (u[m][1].type = "data");
    return u;
  }
  function c(u, h, m) {
    const d = this.previous, g = this.events;
    let y = 0;
    return v;
    function v(S) {
      return d === 126 && g[g.length - 1][1].type !== "characterEscape" ? m(S) : (u.enter("strikethroughSequenceTemporary"), x(S));
    }
    function x(S) {
      const w = hl(d);
      if (S === 126)
        return y > 1 ? m(S) : (u.consume(S), y++, x);
      if (y < 2 && !r) return m(S);
      const A = u.exit("strikethroughSequenceTemporary"), C = hl(S);
      return A._open = !C || C === 2 && !!w, A._close = !w || w === 2 && !!C, h(S);
    }
  }
}
class X4 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, r, l) {
    I4(this, n, r, l);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(c, u) {
      return c[0] - u[0];
    }), this.map.length === 0)
      return;
    let r = this.map.length;
    const l = [];
    for (; r > 0; )
      r -= 1, l.push(n.slice(this.map[r][0] + this.map[r][1]), this.map[r][2]), n.length = this.map[r][0];
    l.push(n.slice()), n.length = 0;
    let o = l.pop();
    for (; o; ) {
      for (const c of o)
        n.push(c);
      o = l.pop();
    }
    this.map.length = 0;
  }
}
function I4(t, n, r, l) {
  let o = 0;
  if (!(r === 0 && l.length === 0)) {
    for (; o < t.map.length; ) {
      if (t.map[o][0] === n) {
        t.map[o][1] += r, t.map[o][2].push(...l);
        return;
      }
      o += 1;
    }
    t.map.push([n, r, l]);
  }
}
function K4(t, n) {
  let r = !1;
  const l = [];
  for (; n < t.length; ) {
    const o = t[n];
    if (r) {
      if (o[0] === "enter")
        o[1].type === "tableContent" && l.push(t[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (o[1].type === "tableContent") {
        if (t[n - 1][1].type === "tableDelimiterMarker") {
          const c = l.length - 1;
          l[c] = l[c] === "left" ? "center" : "right";
        }
      } else if (o[1].type === "tableDelimiterRow")
        break;
    } else o[0] === "enter" && o[1].type === "tableDelimiterRow" && (r = !0);
    n += 1;
  }
  return l;
}
function Q4() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Z4,
        resolveAll: J4
      }
    }
  };
}
function Z4(t, n, r) {
  const l = this;
  let o = 0, c = 0, u;
  return h;
  function h(B) {
    let et = l.events.length - 1;
    for (; et > -1; ) {
      const st = l.events[et][1].type;
      if (st === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      st === "linePrefix") et--;
      else break;
    }
    const nt = et > -1 ? l.events[et][1].type : null, xt = nt === "tableHead" || nt === "tableRow" ? _ : m;
    return xt === _ && l.parser.lazy[l.now().line] ? r(B) : xt(B);
  }
  function m(B) {
    return t.enter("tableHead"), t.enter("tableRow"), d(B);
  }
  function d(B) {
    return B === 124 || (u = !0, c += 1), g(B);
  }
  function g(B) {
    return B === null ? r(B) : pt(B) ? c > 1 ? (c = 0, l.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(B), t.exit("lineEnding"), x) : r(B) : Dt(B) ? _t(t, g, "whitespace")(B) : (c += 1, u && (u = !1, o += 1), B === 124 ? (t.enter("tableCellDivider"), t.consume(B), t.exit("tableCellDivider"), u = !0, g) : (t.enter("data"), y(B)));
  }
  function y(B) {
    return B === null || B === 124 || Xt(B) ? (t.exit("data"), g(B)) : (t.consume(B), B === 92 ? v : y);
  }
  function v(B) {
    return B === 92 || B === 124 ? (t.consume(B), y) : y(B);
  }
  function x(B) {
    return l.interrupt = !1, l.parser.lazy[l.now().line] ? r(B) : (t.enter("tableDelimiterRow"), u = !1, Dt(B) ? _t(t, S, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : S(B));
  }
  function S(B) {
    return B === 45 || B === 58 ? A(B) : B === 124 ? (u = !0, t.enter("tableCellDivider"), t.consume(B), t.exit("tableCellDivider"), w) : Q(B);
  }
  function w(B) {
    return Dt(B) ? _t(t, A, "whitespace")(B) : A(B);
  }
  function A(B) {
    return B === 58 ? (c += 1, u = !0, t.enter("tableDelimiterMarker"), t.consume(B), t.exit("tableDelimiterMarker"), C) : B === 45 ? (c += 1, C(B)) : B === null || pt(B) ? Y(B) : Q(B);
  }
  function C(B) {
    return B === 45 ? (t.enter("tableDelimiterFiller"), L(B)) : Q(B);
  }
  function L(B) {
    return B === 45 ? (t.consume(B), L) : B === 58 ? (u = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(B), t.exit("tableDelimiterMarker"), M) : (t.exit("tableDelimiterFiller"), M(B));
  }
  function M(B) {
    return Dt(B) ? _t(t, Y, "whitespace")(B) : Y(B);
  }
  function Y(B) {
    return B === 124 ? S(B) : B === null || pt(B) ? !u || o !== c ? Q(B) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), n(B)) : Q(B);
  }
  function Q(B) {
    return r(B);
  }
  function _(B) {
    return t.enter("tableRow"), Z(B);
  }
  function Z(B) {
    return B === 124 ? (t.enter("tableCellDivider"), t.consume(B), t.exit("tableCellDivider"), Z) : B === null || pt(B) ? (t.exit("tableRow"), n(B)) : Dt(B) ? _t(t, Z, "whitespace")(B) : (t.enter("data"), J(B));
  }
  function J(B) {
    return B === null || B === 124 || Xt(B) ? (t.exit("data"), Z(B)) : (t.consume(B), B === 92 ? lt : J);
  }
  function lt(B) {
    return B === 92 || B === 124 ? (t.consume(B), J) : J(B);
  }
}
function J4(t, n) {
  let r = -1, l = !0, o = 0, c = [0, 0, 0, 0], u = [0, 0, 0, 0], h = !1, m = 0, d, g, y;
  const v = new X4();
  for (; ++r < t.length; ) {
    const x = t[r], S = x[1];
    x[0] === "enter" ? S.type === "tableHead" ? (h = !1, m !== 0 && (Tb(v, n, m, d, g), g = void 0, m = 0), d = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, v.add(r, 0, [["enter", d, n]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (l = !0, y = void 0, c = [0, 0, 0, 0], u = [0, r + 1, 0, 0], h && (h = !1, g = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, v.add(r, 0, [["enter", g, n]])), o = S.type === "tableDelimiterRow" ? 2 : g ? 3 : 1) : o && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (l = !1, u[2] === 0 && (c[1] !== 0 && (u[0] = u[1], y = Eo(v, n, c, o, void 0, y), c = [0, 0, 0, 0]), u[2] = r)) : S.type === "tableCellDivider" && (l ? l = !1 : (c[1] !== 0 && (u[0] = u[1], y = Eo(v, n, c, o, void 0, y)), c = u, u = [c[1], r, 0, 0])) : S.type === "tableHead" ? (h = !0, m = r) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (m = r, c[1] !== 0 ? (u[0] = u[1], y = Eo(v, n, c, o, r, y)) : u[1] !== 0 && (y = Eo(v, n, u, o, r, y)), o = 0) : o && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (u[3] = r);
  }
  for (m !== 0 && Tb(v, n, m, d, g), v.consume(n.events), r = -1; ++r < n.events.length; ) {
    const x = n.events[r];
    x[0] === "enter" && x[1].type === "table" && (x[1]._align = K4(n.events, r));
  }
  return t;
}
function Eo(t, n, r, l, o, c) {
  const u = l === 1 ? "tableHeader" : l === 2 ? "tableDelimiter" : "tableData", h = "tableContent";
  r[0] !== 0 && (c.end = Object.assign({}, il(n.events, r[0])), t.add(r[0], 0, [["exit", c, n]]));
  const m = il(n.events, r[1]);
  if (c = {
    type: u,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(r[1], 0, [["enter", c, n]]), r[2] !== 0) {
    const d = il(n.events, r[2]), g = il(n.events, r[3]), y = {
      type: h,
      start: Object.assign({}, d),
      end: Object.assign({}, g)
    };
    if (t.add(r[2], 0, [["enter", y, n]]), l !== 2) {
      const v = n.events[r[2]], x = n.events[r[3]];
      if (v[1].end = Object.assign({}, x[1].end), v[1].type = "chunkText", v[1].contentType = "text", r[3] > r[2] + 1) {
        const S = r[2] + 1, w = r[3] - r[2] - 1;
        t.add(S, w, []);
      }
    }
    t.add(r[3] + 1, 0, [["exit", y, n]]);
  }
  return o !== void 0 && (c.end = Object.assign({}, il(n.events, o)), t.add(o, 0, [["exit", c, n]]), c = void 0), c;
}
function Tb(t, n, r, l, o) {
  const c = [], u = il(n.events, r);
  o && (o.end = Object.assign({}, u), c.push(["exit", o, n])), l.end = Object.assign({}, u), c.push(["exit", l, n]), t.add(r + 1, 0, c);
}
function il(t, n) {
  const r = t[n], l = r[0] === "enter" ? "start" : "end";
  return r[1][l];
}
const $4 = {
  name: "tasklistCheck",
  tokenize: tL
};
function W4() {
  return {
    text: {
      91: $4
    }
  };
}
function tL(t, n, r) {
  const l = this;
  return o;
  function o(m) {
    return (
      // Exit if there’s stuff before.
      l.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !l._gfmTasklistFirstContentOfListItem ? r(m) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), c)
    );
  }
  function c(m) {
    return Xt(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), u) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), u) : r(m);
  }
  function u(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), h) : r(m);
  }
  function h(m) {
    return pt(m) ? n(m) : Dt(m) ? t.check({
      tokenize: eL
    }, n, r)(m) : r(m);
  }
}
function eL(t, n, r) {
  return _t(t, l, "whitespace");
  function l(o) {
    return o === null ? r(o) : n(o);
  }
}
function nL(t) {
  return Ix([
    k4(),
    U4(),
    G4(t),
    Q4(),
    W4()
  ]);
}
const iL = {};
function rL(t) {
  const n = (
    /** @type {Processor<Root>} */
    this
  ), r = t || iL, l = n.data(), o = l.micromarkExtensions || (l.micromarkExtensions = []), c = l.fromMarkdownExtensions || (l.fromMarkdownExtensions = []), u = l.toMarkdownExtensions || (l.toMarkdownExtensions = []);
  o.push(nL(r)), c.push(E4()), u.push(A4(r));
}
const lL = ({ role: t, content: n, options: r, onOptionClick: l, onContentUpdate: o }) => {
  const c = t === "assistant", [u, h] = tt.useState(c ? "" : n), m = Cb.useRef(o);
  return tt.useEffect(() => {
    m.current = o;
  }, [o]), tt.useEffect(() => {
    if (!c) {
      h(n);
      return;
    }
    h("");
    let d = 0;
    const y = setInterval(() => {
      d < n.length ? (h(() => n.substring(0, d + 1)), d++, m.current?.()) : clearInterval(y);
    }, 10);
    return () => clearInterval(y);
  }, [n, c]), /* @__PURE__ */ ft.jsx(
    Ho.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: `flex w-full mb-4 ${c ? "justify-start" : "justify-end"}`,
      children: /* @__PURE__ */ ft.jsxs("div", { className: `flex max-w-[95%] ${c ? "flex-row" : "flex-row-reverse"}`, children: [
        /* @__PURE__ */ ft.jsx("div", { className: `flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${c ? "bg-kcg-blue text-white shadow-md" : "bg-gray-200"}`, children: c ? /* @__PURE__ */ ft.jsx(dA, { size: 14 }) : /* @__PURE__ */ ft.jsx(SA, { size: 14 }) }),
        /* @__PURE__ */ ft.jsxs("div", { className: `mx-1 p-2 rounded-lg shadow-sm text-sm ${c ? "bg-white border border-gray-100 text-slate-700 rounded-tl-none" : "bg-kcg-blue text-white rounded-tr-none"}`, children: [
          /* @__PURE__ */ ft.jsx("div", { className: `leading-relaxed text-[12px] font-sans ${c ? "prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0" : "whitespace-pre-wrap"}`, children: c ? /* @__PURE__ */ ft.jsx(G3, { remarkPlugins: [rL], children: u }) : n }),
          c && r && r.length > 0 && /* @__PURE__ */ ft.jsx(
            Ho.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              className: "mt-3 flex flex-wrap gap-2",
              children: r?.map((d, g) => /* @__PURE__ */ ft.jsx(
                "button",
                {
                  onClick: () => l?.(d),
                  className: "px-2 py-1 text-xs font-medium text-kcg-blue bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-colors",
                  children: d
                },
                g
              ))
            }
          )
        ] })
      ] })
    }
  );
}, Te = [];
for (let t = 0; t < 256; ++t)
  Te.push((t + 256).toString(16).slice(1));
function aL(t, n = 0) {
  return (Te[t[n + 0]] + Te[t[n + 1]] + Te[t[n + 2]] + Te[t[n + 3]] + "-" + Te[t[n + 4]] + Te[t[n + 5]] + "-" + Te[t[n + 6]] + Te[t[n + 7]] + "-" + Te[t[n + 8]] + Te[t[n + 9]] + "-" + Te[t[n + 10]] + Te[t[n + 11]] + Te[t[n + 12]] + Te[t[n + 13]] + Te[t[n + 14]] + Te[t[n + 15]]).toLowerCase();
}
let uh;
const sL = new Uint8Array(16);
function oL() {
  if (!uh) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    uh = crypto.getRandomValues.bind(crypto);
  }
  return uh(sL);
}
const uL = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Eb = { randomUUID: uL };
function cL(t, n, r) {
  t = t || {};
  const l = t.random ?? t.rng?.() ?? oL();
  if (l.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, aL(l);
}
function Ab(t, n, r) {
  return Eb.randomUUID && !t ? Eb.randomUUID() : cL(t);
}
const fL = ({ onClose: t }) => {
  const [n, r] = tt.useState([]), [l, o] = tt.useState(""), [c, u] = tt.useState(!1), [h, m] = tt.useState(""), d = tt.useRef(null), g = tt.useRef(null), y = tt.useRef(!1);
  tt.useEffect(() => {
    if (y.current) return;
    y.current = !0;
    let A = localStorage.getItem("kcg_chat_session");
    A || (A = Ab(), localStorage.setItem("kcg_chat_session", A)), m(A), n.length === 0 && x("", A);
  }, []);
  const v = Cb.useCallback(() => {
    g.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  tt.useEffect(() => {
    v();
  }, [n, v]), tt.useEffect(() => {
    c || setTimeout(() => {
      d.current?.focus();
    }, 100);
  }, [c]);
  const x = async (A, C = h) => {
    if (!(!C || c)) {
      A.trim() && (r((L) => [...L, { role: "user", content: A }]), o("")), u(!0);
      try {
        const M = (await le.post("https://kcg-bot-backend-dev-289759207357.asia-south1.run.app/api/chat", {
          sessionId: C,
          message: A
        })).data;
        r((Y) => [...Y, {
          role: "assistant",
          content: M.message,
          options: M.options
        }]);
      } catch (L) {
        console.error("Chat error", L), r((M) => [...M, { role: "assistant", content: "Sorry, I'm having trouble connecting to the server. Please check your connection." }]);
      } finally {
        u(!1);
      }
    }
  }, S = (A) => {
    c || x(A);
  }, w = () => {
    if (c) return;
    const A = Ab();
    localStorage.setItem("kcg_chat_session", A), m(A), r([]), x("", A);
  };
  return /* @__PURE__ */ ft.jsxs("div", { className: "fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden font-sans z-50 animate-fade-in-up", children: [
    /* @__PURE__ */ ft.jsxs("div", { className: "bg-gradient-to-r from-kcg-blue to-slate-900 p-4 flex items-center justify-between text-white shrink-0 shadow-md", children: [
      /* @__PURE__ */ ft.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ ft.jsx("div", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" }),
        /* @__PURE__ */ ft.jsxs("div", { children: [
          /* @__PURE__ */ ft.jsx("h3", { className: "font-serif font-bold text-lg tracking-wide text-kcg-gold", children: "KC GlobEd" }),
          /* @__PURE__ */ ft.jsx("p", { className: "text-xs text-blue-200", children: "AI Assistant • Online" })
        ] })
      ] }),
      /* @__PURE__ */ ft.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ ft.jsx("button", { onClick: w, className: "p-1.5 hover:bg-white/10 rounded-full transition-colors", title: "Start New Chat", children: /* @__PURE__ */ ft.jsx(yA, { size: 16 }) }),
        /* @__PURE__ */ ft.jsx("button", { onClick: t, className: "p-1.5 hover:bg-white/10 rounded-full transition-colors", children: /* @__PURE__ */ ft.jsx(EA, { size: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ ft.jsxs("div", { className: "flex-1 overflow-y-auto px-2 py-4 bg-gray-50/80 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent", children: [
      n.map((A, C) => /* @__PURE__ */ ft.jsx(
        lL,
        {
          role: A.role,
          content: A.content,
          options: A.options,
          onOptionClick: S,
          onContentUpdate: v
        },
        C
      )),
      c && /* @__PURE__ */ ft.jsx("div", { className: "flex justify-start mb-4", children: /* @__PURE__ */ ft.jsxs("div", { className: "bg-white border border-gray-100 p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center h-10", children: [
        /* @__PURE__ */ ft.jsx("div", { className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
        /* @__PURE__ */ ft.jsx("div", { className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
        /* @__PURE__ */ ft.jsx("div", { className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
      ] }) }),
      /* @__PURE__ */ ft.jsx("div", { ref: g })
    ] }),
    /* @__PURE__ */ ft.jsxs("div", { className: "p-4 bg-white border-t border-gray-100 shrink-0 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]", children: [
      /* @__PURE__ */ ft.jsxs(
        "form",
        {
          onSubmit: (A) => {
            A.preventDefault(), c || x(l);
          },
          className: "flex gap-2 relative",
          children: [
            /* @__PURE__ */ ft.jsx(
              "input",
              {
                ref: d,
                type: "text",
                value: l,
                onChange: (A) => o(A.target.value),
                placeholder: c ? "Please wait..." : "Type your question...",
                className: "flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-kcg-blue/20 focus:border-kcg-blue transition-all placeholder:text-gray-400"
              }
            ),
            /* @__PURE__ */ ft.jsx(
              "button",
              {
                type: "submit",
                disabled: !l.trim() || c,
                className: "p-3 bg-kcg-blue text-white rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center",
                children: /* @__PURE__ */ ft.jsx(vA, { size: 18 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ ft.jsx("div", { className: "text-center mt-2 flex items-center justify-center gap-1 opacity-60", children: /* @__PURE__ */ ft.jsx("span", { className: "text-[10px] text-gray-500 uppercase tracking-widest", children: "Powered by KC GlobEd AI" }) })
    ] })
  ] });
}, hL = () => {
  const [t, n] = tt.useState(!1);
  return /* @__PURE__ */ ft.jsxs(ft.Fragment, { children: [
    /* @__PURE__ */ ft.jsx(DD, { children: t && /* @__PURE__ */ ft.jsx(
      Ho.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        transition: { type: "spring", stiffness: 300, damping: 25 },
        className: "fixed z-50 bottom-0 right-0",
        children: /* @__PURE__ */ ft.jsx(fL, { onClose: () => n(!1) })
      }
    ) }),
    /* @__PURE__ */ ft.jsx(
      Ho.button,
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        onClick: () => n(!t),
        className: `fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 transition-colors flex items-center justify-center ${t ? "bg-slate-800 rotate-90 text-red-400" : "bg-kcg-blue text-white hover:bg-blue-800"}`,
        children: t ? /* @__PURE__ */ ft.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ ft.jsx("path", { d: "M18 6 6 18" }),
          /* @__PURE__ */ ft.jsx("path", { d: "m6 6 12 12" })
        ] }) : /* @__PURE__ */ ft.jsx(pA, { size: 32 })
      }
    )
  ] });
}, wb = "kcg-chat-widget-container";
if (!document.getElementById(wb)) {
  const t = document.createElement("div");
  t.id = wb, document.body.appendChild(t), aA.createRoot(t).render(
    /* @__PURE__ */ ft.jsx(tt.StrictMode, { children: /* @__PURE__ */ ft.jsx(hL, {}) })
  );
}
