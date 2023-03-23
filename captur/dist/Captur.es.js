var lw = Object.defineProperty;
var sw = (e, t, n) => t in e ? lw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ip = (e, t, n) => (sw(e, typeof t != "symbol" ? t + "" : t, n), n);
function Dm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fo = {}, uw = {
  get exports() {
    return Fo;
  },
  set exports(e) {
    Fo = e;
  }
}, ms = {}, d = {}, cw = {
  get exports() {
    return d;
  },
  set exports(e) {
    d = e;
  }
}, he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = Symbol.for("react.element"), fw = Symbol.for("react.portal"), dw = Symbol.for("react.fragment"), pw = Symbol.for("react.strict_mode"), vw = Symbol.for("react.profiler"), hw = Symbol.for("react.provider"), mw = Symbol.for("react.context"), gw = Symbol.for("react.forward_ref"), yw = Symbol.for("react.suspense"), Cw = Symbol.for("react.memo"), ww = Symbol.for("react.lazy"), Np = Symbol.iterator;
function Sw(e) {
  return e === null || typeof e != "object" ? null : (e = Np && e[Np] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Vm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zm = Object.assign, $m = {};
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = $m, this.updater = n || Vm;
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jm() {
}
jm.prototype = Bi.prototype;
function Gf(e, t, n) {
  this.props = e, this.context = t, this.refs = $m, this.updater = n || Vm;
}
var Kf = Gf.prototype = new jm();
Kf.constructor = Gf;
zm(Kf, Bi.prototype);
Kf.isPureReactComponent = !0;
var Tp = Array.isArray, Wm = Object.prototype.hasOwnProperty, Yf = { current: null }, Bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Um(e, t, n) {
  var r, i = {}, o = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Wm.call(t, r) && !Bm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
      i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: sa, type: e, key: o, ref: a, props: i, _owner: Yf.current };
}
function bw(e, t) {
  return { $$typeof: sa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sa;
}
function xw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pp = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xw("" + e.key) : t.toString(36);
}
function cl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sa:
          case fw:
            a = !0;
        }
    }
  if (a)
    return a = e, i = i(a), e = r === "" ? "." + Js(a, 0) : r, Tp(i) ? (n = "", e != null && (n = e.replace(Pp, "$&/") + "/"), cl(i, t, n, "", function(u) {
      return u;
    })) : i != null && (Zf(i) && (i = bw(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Pp, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Tp(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + Js(o, l);
      a += cl(o, t, n, s, i);
    }
  else if (s = Sw(e), typeof s == "function")
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      o = o.value, s = r + Js(o, l++), a += cl(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ka(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return cl(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Ew(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ht = { current: null }, fl = { transition: null }, kw = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: fl, ReactCurrentOwner: Yf };
he.Children = { map: ka, forEach: function(e, t, n) {
  ka(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ka(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ka(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zf(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
he.Component = Bi;
he.Fragment = dw;
he.Profiler = vw;
he.PureComponent = Gf;
he.StrictMode = pw;
he.Suspense = yw;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kw;
he.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zm({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = Yf.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (s in t)
      Wm.call(t, s) && !Bm.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: sa, type: e.type, key: i, ref: o, props: r, _owner: a };
};
he.createContext = function(e) {
  return e = { $$typeof: mw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hw, _context: e }, e.Consumer = e;
};
he.createElement = Um;
he.createFactory = function(e) {
  var t = Um.bind(null, e);
  return t.type = e, t;
};
he.createRef = function() {
  return { current: null };
};
he.forwardRef = function(e) {
  return { $$typeof: gw, render: e };
};
he.isValidElement = Zf;
he.lazy = function(e) {
  return { $$typeof: ww, _payload: { _status: -1, _result: e }, _init: Ew };
};
he.memo = function(e, t) {
  return { $$typeof: Cw, type: e, compare: t === void 0 ? null : t };
};
he.startTransition = function(e) {
  var t = fl.transition;
  fl.transition = {};
  try {
    e();
  } finally {
    fl.transition = t;
  }
};
he.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
he.useCallback = function(e, t) {
  return ht.current.useCallback(e, t);
};
he.useContext = function(e) {
  return ht.current.useContext(e);
};
he.useDebugValue = function() {
};
he.useDeferredValue = function(e) {
  return ht.current.useDeferredValue(e);
};
he.useEffect = function(e, t) {
  return ht.current.useEffect(e, t);
};
he.useId = function() {
  return ht.current.useId();
};
he.useImperativeHandle = function(e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
he.useInsertionEffect = function(e, t) {
  return ht.current.useInsertionEffect(e, t);
};
he.useLayoutEffect = function(e, t) {
  return ht.current.useLayoutEffect(e, t);
};
he.useMemo = function(e, t) {
  return ht.current.useMemo(e, t);
};
he.useReducer = function(e, t, n) {
  return ht.current.useReducer(e, t, n);
};
he.useRef = function(e) {
  return ht.current.useRef(e);
};
he.useState = function(e) {
  return ht.current.useState(e);
};
he.useSyncExternalStore = function(e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
he.useTransition = function() {
  return ht.current.useTransition();
};
he.version = "18.2.0";
(function(e) {
  e.exports = he;
})(cw);
const ee = /* @__PURE__ */ Dm(d);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iw = d, Nw = Symbol.for("react.element"), Tw = Symbol.for("react.fragment"), Pw = Object.prototype.hasOwnProperty, Ow = Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hm(e, t, n) {
  var r, i = {}, o = null, a = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    Pw.call(t, r) && !Rw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Nw, type: e, key: o, ref: a, props: i, _owner: Ow.current };
}
ms.Fragment = Tw;
ms.jsx = Hm;
ms.jsxs = Hm;
(function(e) {
  e.exports = ms;
})(uw);
const On = Fo.Fragment, Y = Fo.jsx, Ve = Fo.jsxs;
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(this, arguments);
}
function de(e) {
  return de = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, de(e);
}
function Gm(e) {
  if (Array.isArray(e))
    return e;
}
function _w(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, a, l = [], s = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0)
          ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return l;
  }
}
function uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function qf(e, t) {
  if (e) {
    if (typeof e == "string")
      return uc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return uc(e, t);
  }
}
function Km() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q(e, t) {
  return Gm(e) || _w(e, t) || qf(e, t) || Km();
}
function Aw(e, t) {
  if (de(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (de(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ym(e) {
  var t = Aw(e, "string");
  return de(t) === "symbol" ? t : String(t);
}
function L(e, t, n) {
  return t = Ym(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var cc = {}, Mw = {
  get exports() {
    return cc;
  },
  set exports(e) {
    cc = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var s in o)
              t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Mw);
const X = cc;
function Fw(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yt(e, t) {
  if (e == null)
    return {};
  var n = Fw(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Op(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Op(Object(n), !0).forEach(function(r) {
      L(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Op(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Lw(e) {
  if (Array.isArray(e))
    return uc(e);
}
function Zm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(e) {
  return Lw(e) || Zm(e) || qf(e) || Dw();
}
function Ke(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ym(r.key), r);
  }
}
function Ye(e, t, n) {
  return t && Rp(e.prototype, t), n && Rp(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function te(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fc(e, t) {
  return fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, fc(e, t);
}
function mt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && fc(e, t);
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _l(e);
}
function Vw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zw(e, t) {
  if (t && (de(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return te(e);
}
function gt(e) {
  var t = Vw();
  return function() {
    var r = _l(e), i;
    if (t) {
      var o = _l(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else
      i = r.apply(this, arguments);
    return zw(this, i);
  };
}
var Al = {}, $w = {
  get exports() {
    return Al;
  },
  set exports(e) {
    Al = e;
  }
}, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je = typeof Symbol == "function" && Symbol.for, Qf = Je ? Symbol.for("react.element") : 60103, Xf = Je ? Symbol.for("react.portal") : 60106, gs = Je ? Symbol.for("react.fragment") : 60107, ys = Je ? Symbol.for("react.strict_mode") : 60108, Cs = Je ? Symbol.for("react.profiler") : 60114, ws = Je ? Symbol.for("react.provider") : 60109, Ss = Je ? Symbol.for("react.context") : 60110, Jf = Je ? Symbol.for("react.async_mode") : 60111, bs = Je ? Symbol.for("react.concurrent_mode") : 60111, xs = Je ? Symbol.for("react.forward_ref") : 60112, Es = Je ? Symbol.for("react.suspense") : 60113, jw = Je ? Symbol.for("react.suspense_list") : 60120, ks = Je ? Symbol.for("react.memo") : 60115, Is = Je ? Symbol.for("react.lazy") : 60116, Ww = Je ? Symbol.for("react.block") : 60121, Bw = Je ? Symbol.for("react.fundamental") : 60117, Uw = Je ? Symbol.for("react.responder") : 60118, Hw = Je ? Symbol.for("react.scope") : 60119;
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qf:
        switch (e = e.type, e) {
          case Jf:
          case bs:
          case gs:
          case Cs:
          case ys:
          case Es:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ss:
              case xs:
              case Is:
              case ks:
              case ws:
                return e;
              default:
                return t;
            }
        }
      case Xf:
        return t;
    }
  }
}
function qm(e) {
  return At(e) === bs;
}
be.AsyncMode = Jf;
be.ConcurrentMode = bs;
be.ContextConsumer = Ss;
be.ContextProvider = ws;
be.Element = Qf;
be.ForwardRef = xs;
be.Fragment = gs;
be.Lazy = Is;
be.Memo = ks;
be.Portal = Xf;
be.Profiler = Cs;
be.StrictMode = ys;
be.Suspense = Es;
be.isAsyncMode = function(e) {
  return qm(e) || At(e) === Jf;
};
be.isConcurrentMode = qm;
be.isContextConsumer = function(e) {
  return At(e) === Ss;
};
be.isContextProvider = function(e) {
  return At(e) === ws;
};
be.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qf;
};
be.isForwardRef = function(e) {
  return At(e) === xs;
};
be.isFragment = function(e) {
  return At(e) === gs;
};
be.isLazy = function(e) {
  return At(e) === Is;
};
be.isMemo = function(e) {
  return At(e) === ks;
};
be.isPortal = function(e) {
  return At(e) === Xf;
};
be.isProfiler = function(e) {
  return At(e) === Cs;
};
be.isStrictMode = function(e) {
  return At(e) === ys;
};
be.isSuspense = function(e) {
  return At(e) === Es;
};
be.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === gs || e === bs || e === Cs || e === ys || e === Es || e === jw || typeof e == "object" && e !== null && (e.$$typeof === Is || e.$$typeof === ks || e.$$typeof === ws || e.$$typeof === Ss || e.$$typeof === xs || e.$$typeof === Bw || e.$$typeof === Uw || e.$$typeof === Hw || e.$$typeof === Ww);
};
be.typeOf = At;
(function(e) {
  e.exports = be;
})($w);
function Ml(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return ee.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Ml(r)) : Al.isFragment(r) && r.props ? n = n.concat(Ml(r.props.children, t)) : n.push(r));
  }), n;
}
var _p = {};
function Gw(e, t) {
}
function Kw(e, t, n) {
  !t && !_p[n] && (e(!1, n), _p[n] = !0);
}
function an(e, t) {
  Kw(Gw, e, t);
}
var ei = "RC_FORM_INTERNAL_HOOKS", Ie = function() {
  an(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Pi = /* @__PURE__ */ d.createContext({
  getFieldValue: Ie,
  getFieldsValue: Ie,
  getFieldError: Ie,
  getFieldWarning: Ie,
  getFieldsError: Ie,
  isFieldsTouched: Ie,
  isFieldTouched: Ie,
  isFieldValidating: Ie,
  isFieldsValidating: Ie,
  resetFields: Ie,
  setFields: Ie,
  setFieldsValue: Ie,
  validateFields: Ie,
  submit: Ie,
  getInternalHooks: function() {
    return Ie(), {
      dispatch: Ie,
      initEntityValue: Ie,
      registerField: Ie,
      useSubscribe: Ie,
      setInitialValues: Ie,
      setCallbacks: Ie,
      getFields: Ie,
      setValidateMessages: Ie,
      setPreserve: Ie,
      getInitialValue: Ie
    };
  }
});
function dc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
var pc = {}, Yw = {
  get exports() {
    return pc;
  },
  set exports(e) {
    pc = e;
  }
}, vc = {}, Zw = {
  get exports() {
    return vc;
  },
  set exports(e) {
    vc = e;
  }
};
(function(e) {
  function t(n) {
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Zw);
(function(e) {
  var t = vc.default;
  function n() {
    e.exports = n = function() {
      return r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports;
    var r = {}, i = Object.prototype, o = i.hasOwnProperty, a = Object.defineProperty || function(P, k, O) {
      P[k] = O.value;
    }, l = typeof Symbol == "function" ? Symbol : {}, s = l.iterator || "@@iterator", u = l.asyncIterator || "@@asyncIterator", c = l.toStringTag || "@@toStringTag";
    function f(P, k, O) {
      return Object.defineProperty(P, k, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), P[k];
    }
    try {
      f({}, "");
    } catch {
      f = function(O, N, M) {
        return O[N] = M;
      };
    }
    function p(P, k, O, N) {
      var M = k && k.prototype instanceof y ? k : y, A = Object.create(M.prototype), $ = new R(N || []);
      return a(A, "_invoke", {
        value: E(P, O, $)
      }), A;
    }
    function g(P, k, O) {
      try {
        return {
          type: "normal",
          arg: P.call(k, O)
        };
      } catch (N) {
        return {
          type: "throw",
          arg: N
        };
      }
    }
    r.wrap = p;
    var h = {};
    function y() {
    }
    function w() {
    }
    function m() {
    }
    var v = {};
    f(v, s, function() {
      return this;
    });
    var C = Object.getPrototypeOf, S = C && C(C(x([])));
    S && S !== i && o.call(S, s) && (v = S);
    var b = m.prototype = y.prototype = Object.create(v);
    function I(P) {
      ["next", "throw", "return"].forEach(function(k) {
        f(P, k, function(O) {
          return this._invoke(k, O);
        });
      });
    }
    function T(P, k) {
      function O(M, A, $, V) {
        var B = g(P[M], P, A);
        if (B.type !== "throw") {
          var H = B.arg, K = H.value;
          return K && t(K) == "object" && o.call(K, "__await") ? k.resolve(K.__await).then(function(G) {
            O("next", G, $, V);
          }, function(G) {
            O("throw", G, $, V);
          }) : k.resolve(K).then(function(G) {
            H.value = G, $(H);
          }, function(G) {
            return O("throw", G, $, V);
          });
        }
        V(B.arg);
      }
      var N;
      a(this, "_invoke", {
        value: function(A, $) {
          function V() {
            return new k(function(B, H) {
              O(A, $, B, H);
            });
          }
          return N = N ? N.then(V, V) : V();
        }
      });
    }
    function E(P, k, O) {
      var N = "suspendedStart";
      return function(M, A) {
        if (N === "executing")
          throw new Error("Generator is already running");
        if (N === "completed") {
          if (M === "throw")
            throw A;
          return _();
        }
        for (O.method = M, O.arg = A; ; ) {
          var $ = O.delegate;
          if ($) {
            var V = D($, O);
            if (V) {
              if (V === h)
                continue;
              return V;
            }
          }
          if (O.method === "next")
            O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (N === "suspendedStart")
              throw N = "completed", O.arg;
            O.dispatchException(O.arg);
          } else
            O.method === "return" && O.abrupt("return", O.arg);
          N = "executing";
          var B = g(P, k, O);
          if (B.type === "normal") {
            if (N = O.done ? "completed" : "suspendedYield", B.arg === h)
              continue;
            return {
              value: B.arg,
              done: O.done
            };
          }
          B.type === "throw" && (N = "completed", O.method = "throw", O.arg = B.arg);
        }
      };
    }
    function D(P, k) {
      var O = k.method, N = P.iterator[O];
      if (N === void 0)
        return k.delegate = null, O === "throw" && P.iterator.return && (k.method = "return", k.arg = void 0, D(P, k), k.method === "throw") || O !== "return" && (k.method = "throw", k.arg = new TypeError("The iterator does not provide a '" + O + "' method")), h;
      var M = g(N, P.iterator, k.arg);
      if (M.type === "throw")
        return k.method = "throw", k.arg = M.arg, k.delegate = null, h;
      var A = M.arg;
      return A ? A.done ? (k[P.resultName] = A.value, k.next = P.nextLoc, k.method !== "return" && (k.method = "next", k.arg = void 0), k.delegate = null, h) : A : (k.method = "throw", k.arg = new TypeError("iterator result is not an object"), k.delegate = null, h);
    }
    function F(P) {
      var k = {
        tryLoc: P[0]
      };
      1 in P && (k.catchLoc = P[1]), 2 in P && (k.finallyLoc = P[2], k.afterLoc = P[3]), this.tryEntries.push(k);
    }
    function z(P) {
      var k = P.completion || {};
      k.type = "normal", delete k.arg, P.completion = k;
    }
    function R(P) {
      this.tryEntries = [{
        tryLoc: "root"
      }], P.forEach(F, this), this.reset(!0);
    }
    function x(P) {
      if (P) {
        var k = P[s];
        if (k)
          return k.call(P);
        if (typeof P.next == "function")
          return P;
        if (!isNaN(P.length)) {
          var O = -1, N = function M() {
            for (; ++O < P.length; )
              if (o.call(P, O))
                return M.value = P[O], M.done = !1, M;
            return M.value = void 0, M.done = !0, M;
          };
          return N.next = N;
        }
      }
      return {
        next: _
      };
    }
    function _() {
      return {
        value: void 0,
        done: !0
      };
    }
    return w.prototype = m, a(b, "constructor", {
      value: m,
      configurable: !0
    }), a(m, "constructor", {
      value: w,
      configurable: !0
    }), w.displayName = f(m, c, "GeneratorFunction"), r.isGeneratorFunction = function(P) {
      var k = typeof P == "function" && P.constructor;
      return !!k && (k === w || (k.displayName || k.name) === "GeneratorFunction");
    }, r.mark = function(P) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(P, m) : (P.__proto__ = m, f(P, c, "GeneratorFunction")), P.prototype = Object.create(b), P;
    }, r.awrap = function(P) {
      return {
        __await: P
      };
    }, I(T.prototype), f(T.prototype, u, function() {
      return this;
    }), r.AsyncIterator = T, r.async = function(P, k, O, N, M) {
      M === void 0 && (M = Promise);
      var A = new T(p(P, k, O, N), M);
      return r.isGeneratorFunction(k) ? A : A.next().then(function($) {
        return $.done ? $.value : A.next();
      });
    }, I(b), f(b, c, "Generator"), f(b, s, function() {
      return this;
    }), f(b, "toString", function() {
      return "[object Generator]";
    }), r.keys = function(P) {
      var k = Object(P), O = [];
      for (var N in k)
        O.push(N);
      return O.reverse(), function M() {
        for (; O.length; ) {
          var A = O.pop();
          if (A in k)
            return M.value = A, M.done = !1, M;
        }
        return M.done = !0, M;
      };
    }, r.values = x, R.prototype = {
      constructor: R,
      reset: function(k) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(z), !k)
          for (var O in this)
            O.charAt(0) === "t" && o.call(this, O) && !isNaN(+O.slice(1)) && (this[O] = void 0);
      },
      stop: function() {
        this.done = !0;
        var k = this.tryEntries[0].completion;
        if (k.type === "throw")
          throw k.arg;
        return this.rval;
      },
      dispatchException: function(k) {
        if (this.done)
          throw k;
        var O = this;
        function N(H, K) {
          return $.type = "throw", $.arg = k, O.next = H, K && (O.method = "next", O.arg = void 0), !!K;
        }
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var A = this.tryEntries[M], $ = A.completion;
          if (A.tryLoc === "root")
            return N("end");
          if (A.tryLoc <= this.prev) {
            var V = o.call(A, "catchLoc"), B = o.call(A, "finallyLoc");
            if (V && B) {
              if (this.prev < A.catchLoc)
                return N(A.catchLoc, !0);
              if (this.prev < A.finallyLoc)
                return N(A.finallyLoc);
            } else if (V) {
              if (this.prev < A.catchLoc)
                return N(A.catchLoc, !0);
            } else {
              if (!B)
                throw new Error("try statement without catch or finally");
              if (this.prev < A.finallyLoc)
                return N(A.finallyLoc);
            }
          }
        }
      },
      abrupt: function(k, O) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var M = this.tryEntries[N];
          if (M.tryLoc <= this.prev && o.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
            var A = M;
            break;
          }
        }
        A && (k === "break" || k === "continue") && A.tryLoc <= O && O <= A.finallyLoc && (A = null);
        var $ = A ? A.completion : {};
        return $.type = k, $.arg = O, A ? (this.method = "next", this.next = A.finallyLoc, h) : this.complete($);
      },
      complete: function(k, O) {
        if (k.type === "throw")
          throw k.arg;
        return k.type === "break" || k.type === "continue" ? this.next = k.arg : k.type === "return" ? (this.rval = this.arg = k.arg, this.method = "return", this.next = "end") : k.type === "normal" && O && (this.next = O), h;
      },
      finish: function(k) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var N = this.tryEntries[O];
          if (N.finallyLoc === k)
            return this.complete(N.completion, N.afterLoc), z(N), h;
        }
      },
      catch: function(k) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var N = this.tryEntries[O];
          if (N.tryLoc === k) {
            var M = N.completion;
            if (M.type === "throw") {
              var A = M.arg;
              z(N);
            }
            return A;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(k, O, N) {
        return this.delegate = {
          iterator: x(k),
          resultName: O,
          nextLoc: N
        }, this.method === "next" && (this.arg = void 0), h;
      }
    }, r;
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Yw);
var dl = pc(), ar = dl;
try {
  regeneratorRuntime = dl;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = dl : Function("r", "regeneratorRuntime = r")(dl);
}
function Ap(e, t, n, r, i, o, a) {
  try {
    var l = e[o](a), s = l.value;
  } catch (u) {
    n(u);
    return;
  }
  l.done ? t(s) : Promise.resolve(s).then(r, i);
}
function ua(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var o = e.apply(t, n);
      function a(s) {
        Ap(o, r, i, a, l, "next", s);
      }
      function l(s) {
        Ap(o, r, i, a, l, "throw", s);
      }
      a(void 0);
    });
  };
}
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, br.apply(this, arguments);
}
function qw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lo(e, t);
}
function hc(e) {
  return hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hc(e);
}
function Lo(e, t) {
  return Lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Lo(e, t);
}
function Qw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pl(e, t, n) {
  return Qw() ? pl = Reflect.construct.bind() : pl = function(i, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var s = Function.bind.apply(i, l), u = new s();
    return a && Lo(u, a.prototype), u;
  }, pl.apply(null, arguments);
}
function Xw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function mc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return mc = function(r) {
    if (r === null || !Xw(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return pl(r, arguments, hc(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Lo(i, r);
  }, mc(e);
}
var Jw = /%[sdj%]/g, eS = function() {
};
typeof process < "u" && process.env;
function gc(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(Jw, function(l) {
      if (l === "%%")
        return "%";
      if (i >= o)
        return l;
      switch (l) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function tS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ge(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || tS(t) && typeof e == "string" && !e);
}
function nS(e, t, n) {
  var r = [], i = 0, o = e.length;
  function a(l) {
    r.push.apply(r, l || []), i++, i === o && n(r);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function Mp(e, t, n) {
  var r = 0, i = e.length;
  function o(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    r = r + 1, l < i ? t(e[l], o) : n([]);
  }
  o([]);
}
function rS(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Fp = /* @__PURE__ */ function(e) {
  qw(t, e);
  function t(n, r) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(/* @__PURE__ */ mc(Error));
function iS(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function(p, g) {
      var h = function(m) {
        return r(m), m.length ? g(new Fp(m, gc(m))) : p(i);
      }, y = rS(e);
      Mp(y, n, h);
    });
    return o.catch(function(p) {
      return p;
    }), o;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, u = 0, c = [], f = new Promise(function(p, g) {
    var h = function(w) {
      if (c.push.apply(c, w), u++, u === s)
        return r(c), c.length ? g(new Fp(c, gc(c))) : p(i);
    };
    l.length || (r(c), p(i)), l.forEach(function(y) {
      var w = e[y];
      a.indexOf(y) !== -1 ? Mp(w, n, h) : nS(w, n, h);
    });
  });
  return f.catch(function(p) {
    return p;
  }), f;
}
function oS(e) {
  return !!(e && e.message !== void 0);
}
function aS(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Lp(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = aS(t, e.fullFields) : r = t[n.field || e.fullField], oS(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Dp(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = br({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Qm = function(t, n, r, i, o, a) {
  t.required && (!r.hasOwnProperty(t.field) || Ge(n, a || t.type)) && i.push(Pt(o.messages.required, t.fullField));
}, lS = function(t, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(Pt(o.messages.whitespace, t.fullField));
}, Ia, sS = function() {
  if (Ia)
    return Ia;
  var e = "[a-fA-F\\d:]", t = function(S) {
    return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + i + "$"), s = function(S) {
    return S && S.exact ? o : new RegExp("(?:" + t(S) + n + t(S) + ")|(?:" + t(S) + i + t(S) + ")", "g");
  };
  s.v4 = function(C) {
    return C && C.exact ? a : new RegExp("" + t(C) + n + t(C), "g");
  }, s.v6 = function(C) {
    return C && C.exact ? l : new RegExp("" + t(C) + i + t(C), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = s.v4().source, p = s.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", w = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', v = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + f + "|" + p + "|" + g + h + y + ")" + w + m;
  return Ia = new RegExp("(?:^" + v + "$)", "i"), Ia;
}, Vp = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, uo = {
  integer: function(t) {
    return uo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return uo.number(t) && !uo.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !uo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Vp.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(sS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Vp.hex);
  }
}, uS = function(t, n, r, i, o) {
  if (t.required && n === void 0) {
    Qm(t, n, r, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? uo[l](n) || i.push(Pt(o.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && i.push(Pt(o.messages.types[l], t.fullField, t.type));
}, cS = function(t, n, r, i, o) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, f = null, p = typeof n == "number", g = typeof n == "string", h = Array.isArray(n);
  if (p ? f = "number" : g ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (c = n.length), g && (c = n.replace(u, "_").length), a ? c !== t.len && i.push(Pt(o.messages[f].len, t.fullField, t.len)) : l && !s && c < t.min ? i.push(Pt(o.messages[f].min, t.fullField, t.min)) : s && !l && c > t.max ? i.push(Pt(o.messages[f].max, t.fullField, t.max)) : l && s && (c < t.min || c > t.max) && i.push(Pt(o.messages[f].range, t.fullField, t.min, t.max));
}, Ur = "enum", fS = function(t, n, r, i, o) {
  t[Ur] = Array.isArray(t[Ur]) ? t[Ur] : [], t[Ur].indexOf(n) === -1 && i.push(Pt(o.messages[Ur], t.fullField, t[Ur].join(", ")));
}, dS = function(t, n, r, i, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(Pt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || i.push(Pt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ve = {
  required: Qm,
  whitespace: lS,
  type: uS,
  range: cS,
  enum: fS,
  pattern: dS
}, pS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n, "string") && !t.required)
      return r();
    ve.required(t, n, i, a, o, "string"), Ge(n, "string") || (ve.type(t, n, i, a, o), ve.range(t, n, i, a, o), ve.pattern(t, n, i, a, o), t.whitespace === !0 && ve.whitespace(t, n, i, a, o));
  }
  r(a);
}, vS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && ve.type(t, n, i, a, o);
  }
  r(a);
}, hS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && (ve.type(t, n, i, a, o), ve.range(t, n, i, a, o));
  }
  r(a);
}, mS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && ve.type(t, n, i, a, o);
  }
  r(a);
}, gS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), Ge(n) || ve.type(t, n, i, a, o);
  }
  r(a);
}, yS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && (ve.type(t, n, i, a, o), ve.range(t, n, i, a, o));
  }
  r(a);
}, CS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && (ve.type(t, n, i, a, o), ve.range(t, n, i, a, o));
  }
  r(a);
}, wS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    ve.required(t, n, i, a, o, "array"), n != null && (ve.type(t, n, i, a, o), ve.range(t, n, i, a, o));
  }
  r(a);
}, SS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && ve.type(t, n, i, a, o);
  }
  r(a);
}, bS = "enum", xS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o), n !== void 0 && ve[bS](t, n, i, a, o);
  }
  r(a);
}, ES = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n, "string") && !t.required)
      return r();
    ve.required(t, n, i, a, o), Ge(n, "string") || ve.pattern(t, n, i, a, o);
  }
  r(a);
}, kS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n, "date") && !t.required)
      return r();
    if (ve.required(t, n, i, a, o), !Ge(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), ve.type(t, s, i, a, o), s && ve.range(t, s.getTime(), i, a, o);
    }
  }
  r(a);
}, IS = function(t, n, r, i, o) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  ve.required(t, n, i, a, o, l), r(a);
}, eu = function(t, n, r, i, o) {
  var a = t.type, l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Ge(n, a) && !t.required)
      return r();
    ve.required(t, n, i, l, o, a), Ge(n, a) || ve.type(t, n, i, l, o);
  }
  r(l);
}, NS = function(t, n, r, i, o) {
  var a = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ge(n) && !t.required)
      return r();
    ve.required(t, n, i, a, o);
  }
  r(a);
}, yo = {
  string: pS,
  method: vS,
  number: hS,
  boolean: mS,
  regexp: gS,
  integer: yS,
  float: CS,
  array: wS,
  object: SS,
  enum: xS,
  pattern: ES,
  date: kS,
  url: eu,
  hex: eu,
  email: eu,
  required: IS,
  any: NS
};
function yc() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Cc = yc(), ca = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Cc, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var a = r[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Dp(yc(), r)), this._messages;
  }, t.validate = function(r, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var l = r, s = i, u = o;
    if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, l), Promise.resolve(l);
    function c(y) {
      var w = [], m = {};
      function v(S) {
        if (Array.isArray(S)) {
          var b;
          w = (b = w).concat.apply(b, S);
        } else
          w.push(S);
      }
      for (var C = 0; C < y.length; C++)
        v(y[C]);
      w.length ? (m = gc(w), u(w, m)) : u(null, l);
    }
    if (s.messages) {
      var f = this.messages();
      f === Cc && (f = yc()), Dp(f, s.messages), s.messages = f;
    } else
      s.messages = this.messages();
    var p = {}, g = s.keys || Object.keys(this.rules);
    g.forEach(function(y) {
      var w = a.rules[y], m = l[y];
      w.forEach(function(v) {
        var C = v;
        typeof C.transform == "function" && (l === r && (l = br({}, l)), m = l[y] = C.transform(m)), typeof C == "function" ? C = {
          validator: C
        } : C = br({}, C), C.validator = a.getValidationMethod(C), C.validator && (C.field = y, C.fullField = C.fullField || y, C.type = a.getType(C), p[y] = p[y] || [], p[y].push({
          rule: C,
          value: m,
          source: l,
          field: y
        }));
      });
    });
    var h = {};
    return iS(p, s, function(y, w) {
      var m = y.rule, v = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      v = v && (m.required || !m.required && y.value), m.field = y.field;
      function C(I, T) {
        return br({}, T, {
          fullField: m.fullField + "." + I,
          fullFields: m.fullFields ? [].concat(m.fullFields, [I]) : [I]
        });
      }
      function S(I) {
        I === void 0 && (I = []);
        var T = Array.isArray(I) ? I : [I];
        !s.suppressWarning && T.length && e.warning("async-validator:", T), T.length && m.message !== void 0 && (T = [].concat(m.message));
        var E = T.map(Lp(m, l));
        if (s.first && E.length)
          return h[m.field] = 1, w(E);
        if (!v)
          w(E);
        else {
          if (m.required && !y.value)
            return m.message !== void 0 ? E = [].concat(m.message).map(Lp(m, l)) : s.error && (E = [s.error(m, Pt(s.messages.required, m.field))]), w(E);
          var D = {};
          m.defaultField && Object.keys(y.value).map(function(R) {
            D[R] = m.defaultField;
          }), D = br({}, D, y.rule.fields);
          var F = {};
          Object.keys(D).forEach(function(R) {
            var x = D[R], _ = Array.isArray(x) ? x : [x];
            F[R] = _.map(C.bind(null, R));
          });
          var z = new e(F);
          z.messages(s.messages), y.rule.options && (y.rule.options.messages = s.messages, y.rule.options.error = s.error), z.validate(y.value, y.rule.options || s, function(R) {
            var x = [];
            E && E.length && x.push.apply(x, E), R && R.length && x.push.apply(x, R), w(x.length ? x : null);
          });
        }
      }
      var b;
      if (m.asyncValidator)
        b = m.asyncValidator(m, y.value, S, y.source, s);
      else if (m.validator) {
        try {
          b = m.validator(m, y.value, S, y.source, s);
        } catch (I) {
          console.error == null || console.error(I), s.suppressValidatorError || setTimeout(function() {
            throw I;
          }, 0), S(I.message);
        }
        b === !0 ? S() : b === !1 ? S(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : b instanceof Array ? S(b) : b instanceof Error && S(b.message);
      }
      b && b.then && b.then(function() {
        return S();
      }, function(I) {
        return S(I);
      });
    }, function(y) {
      c(y);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !yo.hasOwnProperty(r.type))
      throw new Error(Pt("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? yo.required : yo[this.getType(r)] || void 0;
  }, e;
}();
ca.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  yo[t] = n;
};
ca.warning = eS;
ca.messages = Cc;
ca.validators = yo;
var kt = "'${name}' is not a valid ${type}", Xm = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: kt,
    method: kt,
    array: kt,
    object: kt,
    number: kt,
    date: kt,
    boolean: kt,
    integer: kt,
    float: kt,
    regexp: kt,
    email: kt,
    url: kt,
    hex: kt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
function Jm(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function TS(e) {
  return Gm(e) || Zm(e) || qf(e) || Km();
}
function eg(e, t, n, r) {
  if (!t.length)
    return n;
  var i = TS(t), o = i[0], a = i.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Q(e) : l = W({}, e), r && n === void 0 && a.length === 1 ? delete l[o][a[0]] : l[o] = eg(l[o], a, n, r), l;
}
function PS(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Jm(e, t.slice(0, -1)) ? e : eg(e, t, n, r);
}
function Ns(e) {
  return Array.isArray(e) ? RS(e) : de(e) === "object" && e !== null ? OS(e) : e;
}
function OS(e) {
  if (Object.getPrototypeOf(e) === Object.prototype) {
    var t = {};
    for (var n in e)
      t[n] = Ns(e[n]);
    return t;
  }
  return e;
}
function RS(e) {
  return e.map(function(t) {
    return Ns(t);
  });
}
function $e(e) {
  return dc(e);
}
function Co(e, t) {
  var n = Jm(e, t);
  return n;
}
function yr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = PS(e, t, n, r);
  return i;
}
function zp(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var i = Co(e, r);
    n = yr(n, r, i);
  }), n;
}
function wo(e, t) {
  return e && e.some(function(n) {
    return ng(n, t);
  });
}
function $p(e) {
  return de(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function tg(e, t) {
  var n = Array.isArray(e) ? Q(e) : W({}, e);
  return t && Object.keys(t).forEach(function(r) {
    var i = n[r], o = t[r], a = $p(i) && $p(o);
    n[r] = a ? tg(i, o || {}) : Ns(o);
  }), n;
}
function vl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(i, o) {
    return tg(i, o);
  }, e);
}
function ng(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(n, r) {
    return t[r] === n;
  });
}
function _S(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || de(e) !== "object" || de(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = new Set([].concat(Q(n), Q(r)));
  return Q(i).every(function(o) {
    var a = e[o], l = t[o];
    return typeof a == "function" && typeof l == "function" ? !0 : a === l;
  });
}
function AS(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && de(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function jp(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var i = e[t], o = t - n;
  return o > 0 ? [].concat(Q(e.slice(0, n)), [i], Q(e.slice(n, t)), Q(e.slice(t + 1, r))) : o < 0 ? [].concat(Q(e.slice(0, t)), Q(e.slice(t + 1, n + 1)), [i], Q(e.slice(n + 1, r))) : e;
}
var MS = ca;
function FS(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
function wc(e, t, n, r, i) {
  return Sc.apply(this, arguments);
}
function Sc() {
  return Sc = ua(/* @__PURE__ */ ar.mark(function e(t, n, r, i, o) {
    var a, l, s, u, c, f, p, g;
    return ar.wrap(function(y) {
      for (; ; )
        switch (y.prev = y.next) {
          case 0:
            return a = W({}, r), delete a.ruleIndex, l = null, a && a.type === "array" && a.defaultField && (l = a.defaultField, delete a.defaultField), s = new MS(L({}, t, [a])), u = vl({}, Xm, i.validateMessages), s.messages(u), c = [], y.prev = 8, y.next = 11, Promise.resolve(s.validate(L({}, t, n), W({}, i)));
          case 11:
            y.next = 16;
            break;
          case 13:
            y.prev = 13, y.t0 = y.catch(8), y.t0.errors ? c = y.t0.errors.map(function(w, m) {
              var v = w.message;
              return (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ d.isValidElement(v) ? /* @__PURE__ */ d.cloneElement(v, {
                  key: "error_".concat(m)
                }) : v
              );
            }) : (console.error(y.t0), c = [u.default]);
          case 16:
            if (!(!c.length && l)) {
              y.next = 21;
              break;
            }
            return y.next = 19, Promise.all(n.map(function(w, m) {
              return wc("".concat(t, ".").concat(m), w, l, i, o);
            }));
          case 19:
            return f = y.sent, y.abrupt("return", f.reduce(function(w, m) {
              return [].concat(Q(w), Q(m));
            }, []));
          case 21:
            return p = W(W({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, o), g = c.map(function(w) {
              return typeof w == "string" ? FS(w, p) : w;
            }), y.abrupt("return", g);
          case 24:
          case "end":
            return y.stop();
        }
    }, e, null, [[8, 13]]);
  })), Sc.apply(this, arguments);
}
function LS(e, t, n, r, i, o) {
  var a = e.join("."), l = n.map(function(c, f) {
    var p = c.validator, g = W(W({}, c), {}, {
      ruleIndex: f
    });
    return p && (g.validator = function(h, y, w) {
      var m = !1, v = function() {
        for (var b = arguments.length, I = new Array(b), T = 0; T < b; T++)
          I[T] = arguments[T];
        Promise.resolve().then(function() {
          an(!m, "Your validator function has already return a promise. `callback` will be ignored."), m || w.apply(void 0, I);
        });
      }, C = p(h, y, v);
      m = C && typeof C.then == "function" && typeof C.catch == "function", an(m, "`callback` is deprecated. Please return a promise instead."), m && C.then(function() {
        w();
      }).catch(function(S) {
        w(S || " ");
      });
    }), g;
  }).sort(function(c, f) {
    var p = c.warningOnly, g = c.ruleIndex, h = f.warningOnly, y = f.ruleIndex;
    return !!p == !!h ? g - y : p ? 1 : -1;
  }), s;
  if (i === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var c = ua(/* @__PURE__ */ ar.mark(function f(p, g) {
        var h, y, w;
        return ar.wrap(function(v) {
          for (; ; )
            switch (v.prev = v.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < l.length)) {
                  v.next = 12;
                  break;
                }
                return y = l[h], v.next = 5, wc(a, t, y, r, o);
              case 5:
                if (w = v.sent, !w.length) {
                  v.next = 9;
                  break;
                }
                return g([{
                  errors: w,
                  rule: y
                }]), v.abrupt("return");
              case 9:
                h += 1, v.next = 1;
                break;
              case 12:
                p([]);
              case 13:
              case "end":
                return v.stop();
            }
        }, f);
      }));
      return function(f, p) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var u = l.map(function(c) {
      return wc(a, t, c, r, o).then(function(f) {
        return {
          errors: f,
          rule: c
        };
      });
    });
    s = (i ? VS(u) : DS(u)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return s.catch(function(c) {
    return c;
  }), s;
}
function DS(e) {
  return bc.apply(this, arguments);
}
function bc() {
  return bc = ua(/* @__PURE__ */ ar.mark(function e(t) {
    return ar.wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(i) {
              var o, a = (o = []).concat.apply(o, Q(i));
              return a;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), bc.apply(this, arguments);
}
function VS(e) {
  return xc.apply(this, arguments);
}
function xc() {
  return xc = ua(/* @__PURE__ */ ar.mark(function e(t) {
    var n;
    return ar.wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return n = 0, i.abrupt("return", new Promise(function(o) {
              t.forEach(function(a) {
                a.then(function(l) {
                  l.errors.length && o([l]), n += 1, n === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e);
  })), xc.apply(this, arguments);
}
var zS = ["name"], Vt = [];
function Wp(e, t, n, r, i, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== i;
}
var ed = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    if (Ke(this, n), i = t.call(this, r), i.state = {
      resetCount: 0
    }, i.cancelRegisterFunc = null, i.mounted = !1, i.touched = !1, i.dirty = !1, i.validatePromise = null, i.prevValidating = void 0, i.errors = Vt, i.warnings = Vt, i.cancelRegister = function() {
      var s = i.props, u = s.preserve, c = s.isListField, f = s.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, $e(f)), i.cancelRegisterFunc = null;
    }, i.getNamePath = function() {
      var s = i.props, u = s.name, c = s.fieldContext, f = c.prefixName, p = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(Q(p), Q(u)) : [];
    }, i.getRules = function() {
      var s = i.props, u = s.rules, c = u === void 0 ? [] : u, f = s.fieldContext;
      return c.map(function(p) {
        return typeof p == "function" ? p(f) : p;
      });
    }, i.refresh = function() {
      i.mounted && i.setState(function(s) {
        var u = s.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }, i.triggerMetaEvent = function(s) {
      var u = i.props.onMetaChange;
      u == null || u(W(W({}, i.getMeta()), {}, {
        destroy: s
      }));
    }, i.onStoreChange = function(s, u, c) {
      var f = i.props, p = f.shouldUpdate, g = f.dependencies, h = g === void 0 ? [] : g, y = f.onReset, w = c.store, m = i.getNamePath(), v = i.getValue(s), C = i.getValue(w), S = u && wo(u, m);
      switch (c.type === "valueUpdate" && c.source === "external" && v !== C && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = Vt, i.warnings = Vt, i.triggerMetaEvent()), c.type) {
        case "reset":
          if (!u || S) {
            i.touched = !1, i.dirty = !1, i.validatePromise = null, i.errors = Vt, i.warnings = Vt, i.triggerMetaEvent(), y == null || y(), i.refresh();
            return;
          }
          break;
        case "remove": {
          if (p) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (S) {
            var b = c.data;
            "touched" in b && (i.touched = b.touched), "validating" in b && !("originRCField" in b) && (i.validatePromise = b.validating ? Promise.resolve([]) : null), "errors" in b && (i.errors = b.errors || Vt), "warnings" in b && (i.warnings = b.warnings || Vt), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          }
          if (p && !m.length && Wp(p, s, w, v, C, c)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var I = h.map($e);
          if (I.some(function(T) {
            return wo(c.relatedFields, T);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!h.length || m.length || p) && Wp(p, s, w, v, C, c)) {
            i.reRender();
            return;
          }
          break;
      }
      p === !0 && i.reRender();
    }, i.validateRules = function(s) {
      var u = i.getNamePath(), c = i.getValue(), f = Promise.resolve().then(function() {
        if (!i.mounted)
          return [];
        var p = i.props, g = p.validateFirst, h = g === void 0 ? !1 : g, y = p.messageVariables, w = s || {}, m = w.triggerName, v = i.getRules();
        m && (v = v.filter(function(S) {
          var b = S.validateTrigger;
          if (!b)
            return !0;
          var I = dc(b);
          return I.includes(m);
        }));
        var C = LS(u, c, v, s, h, y);
        return C.catch(function(S) {
          return S;
        }).then(function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vt;
          if (i.validatePromise === f) {
            i.validatePromise = null;
            var b = [], I = [];
            S.forEach(function(T) {
              var E = T.rule.warningOnly, D = T.errors, F = D === void 0 ? Vt : D;
              E ? I.push.apply(I, Q(F)) : b.push.apply(b, Q(F));
            }), i.errors = b, i.warnings = I, i.triggerMetaEvent(), i.reRender();
          }
        }), C;
      });
      return i.validatePromise = f, i.dirty = !0, i.errors = Vt, i.warnings = Vt, i.triggerMetaEvent(), i.reRender(), f;
    }, i.isFieldValidating = function() {
      return !!i.validatePromise;
    }, i.isFieldTouched = function() {
      return i.touched;
    }, i.isFieldDirty = function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var s = i.props.fieldContext, u = s.getInternalHooks(ei), c = u.getInitialValue;
      return c(i.getNamePath()) !== void 0;
    }, i.getErrors = function() {
      return i.errors;
    }, i.getWarnings = function() {
      return i.warnings;
    }, i.isListField = function() {
      return i.props.isListField;
    }, i.isList = function() {
      return i.props.isList;
    }, i.isPreserve = function() {
      return i.props.preserve;
    }, i.getMeta = function() {
      i.prevValidating = i.isFieldValidating();
      var s = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath()
      };
      return s;
    }, i.getOnlyChild = function(s) {
      if (typeof s == "function") {
        var u = i.getMeta();
        return W(W({}, i.getOnlyChild(s(i.getControlled(), u, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = Ml(s);
      return c.length !== 1 || !/* @__PURE__ */ d.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }, i.getValue = function(s) {
      var u = i.props.fieldContext.getFieldsValue, c = i.getNamePath();
      return Co(s || u(!0), c);
    }, i.getControlled = function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = i.props, c = u.trigger, f = u.validateTrigger, p = u.getValueFromEvent, g = u.normalize, h = u.valuePropName, y = u.getValueProps, w = u.fieldContext, m = f !== void 0 ? f : w.validateTrigger, v = i.getNamePath(), C = w.getInternalHooks, S = w.getFieldsValue, b = C(ei), I = b.dispatch, T = i.getValue(), E = y || function(R) {
        return L({}, h, R);
      }, D = s[c], F = W(W({}, s), E(T));
      F[c] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var R, x = arguments.length, _ = new Array(x), P = 0; P < x; P++)
          _[P] = arguments[P];
        p ? R = p.apply(void 0, _) : R = AS.apply(void 0, [h].concat(_)), g && (R = g(R, T, S(!0))), I({
          type: "updateValue",
          namePath: v,
          value: R
        }), D && D.apply(void 0, _);
      };
      var z = dc(m || []);
      return z.forEach(function(R) {
        var x = F[R];
        F[R] = function() {
          x && x.apply(void 0, arguments);
          var _ = i.props.rules;
          _ && _.length && I({
            type: "validateField",
            namePath: v,
            triggerName: R
          });
        };
      }), F;
    }, r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, a = o(ei), l = a.initEntityValue;
      l(te(i));
    }
    return i;
  }
  return Ye(n, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, o = i.shouldUpdate, a = i.fieldContext;
      if (this.mounted = !0, a) {
        var l = a.getInternalHooks, s = l(ei), u = s.registerField;
        this.cancelRegisterFunc = u(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.state.resetCount, o = this.props.children, a = this.getOnlyChild(o), l = a.child, s = a.isFunction, u;
      return s ? u = l : /* @__PURE__ */ d.isValidElement(l) ? u = /* @__PURE__ */ d.cloneElement(l, this.getControlled(l.props)) : (an(!l, "`children` of Field is not validate ReactElement."), u = l), /* @__PURE__ */ d.createElement(d.Fragment, {
        key: i
      }, u);
    }
  }]), n;
}(d.Component);
ed.contextType = Pi;
ed.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function td(e) {
  var t = e.name, n = Yt(e, zS), r = d.useContext(Pi), i = t !== void 0 ? $e(t) : void 0, o = "keep";
  return n.isListField || (o = "_".concat((i || []).join("_"))), /* @__PURE__ */ d.createElement(ed, j({
    key: o,
    name: i
  }, n, {
    fieldContext: r
  }));
}
var rg = /* @__PURE__ */ d.createContext(null), ig = function(t) {
  var n = t.name, r = t.initialValue, i = t.children, o = t.rules, a = t.validateTrigger, l = d.useContext(Pi), s = d.useRef({
    keys: [],
    id: 0
  }), u = s.current, c = d.useMemo(function() {
    var h = $e(l.prefixName) || [];
    return [].concat(Q(h), Q($e(n)));
  }, [l.prefixName, n]), f = d.useMemo(function() {
    return W(W({}, l), {}, {
      prefixName: c
    });
  }, [l, c]), p = d.useMemo(function() {
    return {
      getKey: function(y) {
        var w = c.length, m = y[w];
        return [u.keys[m], y.slice(w + 1)];
      }
    };
  }, [c]);
  if (typeof i != "function")
    return an(!1, "Form.List only accepts function as children."), null;
  var g = function(y, w, m) {
    var v = m.source;
    return v === "internal" ? !1 : y !== w;
  };
  return /* @__PURE__ */ d.createElement(rg.Provider, {
    value: p
  }, /* @__PURE__ */ d.createElement(Pi.Provider, {
    value: f
  }, /* @__PURE__ */ d.createElement(td, {
    name: [],
    shouldUpdate: g,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0
  }, function(h, y) {
    var w = h.value, m = w === void 0 ? [] : w, v = h.onChange, C = l.getFieldValue, S = function() {
      var E = C(c || []);
      return E || [];
    }, b = {
      add: function(E, D) {
        var F = S();
        D >= 0 && D <= F.length ? (u.keys = [].concat(Q(u.keys.slice(0, D)), [u.id], Q(u.keys.slice(D))), v([].concat(Q(F.slice(0, D)), [E], Q(F.slice(D))))) : (u.keys = [].concat(Q(u.keys), [u.id]), v([].concat(Q(F), [E]))), u.id += 1;
      },
      remove: function(E) {
        var D = S(), F = new Set(Array.isArray(E) ? E : [E]);
        F.size <= 0 || (u.keys = u.keys.filter(function(z, R) {
          return !F.has(R);
        }), v(D.filter(function(z, R) {
          return !F.has(R);
        })));
      },
      move: function(E, D) {
        if (E !== D) {
          var F = S();
          E < 0 || E >= F.length || D < 0 || D >= F.length || (u.keys = jp(u.keys, E, D), v(jp(F, E, D)));
        }
      }
    }, I = m || [];
    return Array.isArray(I) || (I = []), i(I.map(function(T, E) {
      var D = u.keys[E];
      return D === void 0 && (u.keys[E] = u.id, D = u.keys[E], u.id += 1), {
        name: E,
        key: D,
        isListField: !0
      };
    }), b, y);
  })));
};
function $S(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(i, o) {
    e.forEach(function(a, l) {
      a.catch(function(s) {
        return t = !0, s;
      }).then(function(s) {
        n -= 1, r[l] = s, !(n > 0) && (t && o(r), i(r));
      });
    });
  }) : Promise.resolve([]);
}
var og = "__@field_split__";
function tu(e) {
  return e.map(function(t) {
    return "".concat(de(t), ":").concat(t);
  }).join(og);
}
var Xi = /* @__PURE__ */ function() {
  function e() {
    Ke(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return Ye(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(tu(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(tu(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var i = this.get(n), o = r(i);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(tu(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return Q(this.kvs.entries()).map(function(r) {
        var i = q(r, 2), o = i[0], a = i[1], l = o.split(og);
        return n({
          key: l.map(function(s) {
            var u = s.match(/^([^:]*):(.*)$/), c = q(u, 3), f = c[1], p = c[2];
            return f === "number" ? Number(p) : p;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var i = r.key, o = r.value;
        return n[i.join(".")] = o, null;
      }), n;
    }
  }]), e;
}(), jS = ["name", "errors"], WS = /* @__PURE__ */ Ye(function e(t) {
  var n = this;
  Ke(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      getInternalHooks: n.getInternalHooks
    };
  }, this.getInternalHooks = function(r) {
    return r === ei ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue
    }) : (an(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(r) {
    n.subscribable = r;
  }, this.setInitialValues = function(r, i) {
    n.initialValues = r || {}, i && (n.store = vl({}, n.store, r));
  }, this.getInitialValue = function(r) {
    return Ns(Co(n.initialValues, r));
  }, this.setCallbacks = function(r) {
    n.callbacks = r;
  }, this.setValidateMessages = function(r) {
    n.validateMessages = r;
  }, this.setPreserve = function(r) {
    n.preserve = r;
  }, this.timeoutId = null, this.warningUnhooked = function() {
  }, this.getFieldEntities = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : n.fieldEntities;
  }, this.getFieldsMap = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new Xi();
    return n.getFieldEntities(r).forEach(function(o) {
      var a = o.getNamePath();
      i.set(a, o);
    }), i;
  }, this.getFieldEntitiesForNamePathList = function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var i = n.getFieldsMap(!0);
    return r.map(function(o) {
      var a = $e(o);
      return i.get(a) || {
        INVALIDATE_NAME_PATH: $e(o)
      };
    });
  }, this.getFieldsValue = function(r, i) {
    if (n.warningUnhooked(), r === !0 && !i)
      return n.store;
    var o = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), a = [];
    return o.forEach(function(l) {
      var s, u = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (!(!r && (!((s = l.isListField) === null || s === void 0) && s.call(l))))
        if (!i)
          a.push(u);
        else {
          var c = "getMeta" in l ? l.getMeta() : null;
          i(c) && a.push(u);
        }
    }), zp(n.store, a.map($e));
  }, this.getFieldValue = function(r) {
    n.warningUnhooked();
    var i = $e(r);
    return Co(n.store, i);
  }, this.getFieldsError = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntitiesForNamePathList(r);
    return i.map(function(o, a) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: $e(r[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(r) {
    n.warningUnhooked();
    var i = $e(r), o = n.getFieldsError([i])[0];
    return o.errors;
  }, this.getFieldWarning = function(r) {
    n.warningUnhooked();
    var i = $e(r), o = n.getFieldsError([i])[0];
    return o.warnings;
  }, this.isFieldsTouched = function() {
    n.warningUnhooked();
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    var a = i[0], l = i[1], s, u = !1;
    i.length === 0 ? s = null : i.length === 1 ? Array.isArray(a) ? (s = a.map($e), u = !1) : (s = null, u = a) : (s = a.map($e), u = l);
    var c = n.getFieldEntities(!0), f = function(w) {
      return w.isFieldTouched();
    };
    if (!s)
      return u ? c.every(f) : c.some(f);
    var p = new Xi();
    s.forEach(function(y) {
      p.set(y, []);
    }), c.forEach(function(y) {
      var w = y.getNamePath();
      s.forEach(function(m) {
        m.every(function(v, C) {
          return w[C] === v;
        }) && p.update(m, function(v) {
          return [].concat(Q(v), [y]);
        });
      });
    });
    var g = function(w) {
      return w.some(f);
    }, h = p.map(function(y) {
      var w = y.value;
      return w;
    });
    return u ? h.every(g) : h.some(g);
  }, this.isFieldTouched = function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }, this.isFieldsValidating = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntities();
    if (!r)
      return i.some(function(a) {
        return a.isFieldValidating();
      });
    var o = r.map($e);
    return i.some(function(a) {
      var l = a.getNamePath();
      return wo(o, l) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }, this.resetWithFieldInitialValue = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new Xi(), o = n.getFieldEntities(!0);
    o.forEach(function(s) {
      var u = s.props.initialValue, c = s.getNamePath();
      if (u !== void 0) {
        var f = i.get(c) || /* @__PURE__ */ new Set();
        f.add({
          entity: s,
          value: u
        }), i.set(c, f);
      }
    });
    var a = function(u) {
      u.forEach(function(c) {
        var f = c.props.initialValue;
        if (f !== void 0) {
          var p = c.getNamePath(), g = n.getInitialValue(p);
          if (g !== void 0)
            an(!1, "Form already set 'initialValues' with path '".concat(p.join("."), "'. Field can not overwrite it."));
          else {
            var h = i.get(p);
            if (h && h.size > 1)
              an(!1, "Multiple Field with path '".concat(p.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var y = n.getFieldValue(p);
              (!r.skipExist || y === void 0) && (n.store = yr(n.store, p, Q(h)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(s) {
      var u = i.get(s);
      if (u) {
        var c;
        (c = l).push.apply(c, Q(Q(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = o, a(l);
  }, this.resetFields = function(r) {
    n.warningUnhooked();
    var i = n.store;
    if (!r) {
      n.store = vl({}, n.initialValues), n.resetWithFieldInitialValue(), n.notifyObservers(i, null, {
        type: "reset"
      });
      return;
    }
    var o = r.map($e);
    o.forEach(function(a) {
      var l = n.getInitialValue(a);
      n.store = yr(n.store, a, l);
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(i, o, {
      type: "reset"
    });
  }, this.setFields = function(r) {
    n.warningUnhooked();
    var i = n.store;
    r.forEach(function(o) {
      var a = o.name;
      o.errors;
      var l = Yt(o, jS), s = $e(a);
      "value" in l && (n.store = yr(n.store, s, l.value)), n.notifyObservers(i, [s], {
        type: "setField",
        data: o
      });
    });
  }, this.getFields = function() {
    var r = n.getFieldEntities(!0), i = r.map(function(o) {
      var a = o.getNamePath(), l = o.getMeta(), s = W(W({}, l), {}, {
        name: a,
        value: n.getFieldValue(a)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return i;
  }, this.initEntityValue = function(r) {
    var i = r.props.initialValue;
    if (i !== void 0) {
      var o = r.getNamePath(), a = Co(n.store, o);
      a === void 0 && (n.store = yr(n.store, o, i));
    }
  }, this.registerField = function(r) {
    if (n.fieldEntities.push(r), r.props.initialValue !== void 0) {
      var i = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(i, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, a) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      n.fieldEntities = n.fieldEntities.filter(function(p) {
        return p !== r;
      });
      var s = a !== void 0 ? a : n.preserve;
      if (s === !1 && (!o || l.length > 1)) {
        var u = r.getNamePath(), c = o ? void 0 : n.getInitialValue(u);
        if (u.length && n.getFieldValue(u) !== c && n.fieldEntities.every(function(p) {
          return (
            // Only reset when no namePath exist
            !ng(p.getNamePath(), u)
          );
        })) {
          var f = n.store;
          n.store = yr(f, u, c, !0), n.notifyObservers(f, [u], {
            type: "remove"
          }), n.triggerDependenciesUpdate(f, u);
        }
      }
    };
  }, this.dispatch = function(r) {
    switch (r.type) {
      case "updateValue": {
        var i = r.namePath, o = r.value;
        n.updateValue(i, o);
        break;
      }
      case "validateField": {
        var a = r.namePath, l = r.triggerName;
        n.validateFields([a], {
          triggerName: l
        });
        break;
      }
    }
  }, this.notifyObservers = function(r, i, o) {
    if (n.subscribable) {
      var a = W(W({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var s = l.onStoreChange;
        s(r, i, a);
      });
    } else
      n.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(r, i) {
    var o = n.getDependencyChildrenFields(i);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(Q(o))
    }), o;
  }, this.updateValue = function(r, i) {
    var o = $e(r), a = n.store;
    n.store = yr(n.store, o, i), n.notifyObservers(a, [o], {
      type: "valueUpdate",
      source: "internal"
    });
    var l = n.triggerDependenciesUpdate(a, o), s = n.callbacks.onValuesChange;
    if (s) {
      var u = zp(n.store, [o]);
      s(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(Q(l)));
  }, this.setFieldsValue = function(r) {
    n.warningUnhooked();
    var i = n.store;
    r && (n.store = vl(n.store, r)), n.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    });
  }, this.getDependencyChildrenFields = function(r) {
    var i = /* @__PURE__ */ new Set(), o = [], a = new Xi();
    n.getFieldEntities().forEach(function(s) {
      var u = s.props.dependencies;
      (u || []).forEach(function(c) {
        var f = $e(c);
        a.update(f, function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return p.add(s), p;
        });
      });
    });
    var l = function s(u) {
      var c = a.get(u) || /* @__PURE__ */ new Set();
      c.forEach(function(f) {
        if (!i.has(f)) {
          i.add(f);
          var p = f.getNamePath();
          f.isFieldDirty() && p.length && (o.push(p), s(p));
        }
      });
    };
    return l(r), o;
  }, this.triggerOnFieldsChange = function(r, i) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var a = n.getFields();
      if (i) {
        var l = new Xi();
        i.forEach(function(u) {
          var c = u.name, f = u.errors;
          l.set(c, f);
        }), a.forEach(function(u) {
          u.errors = l.get(u.name) || u.errors;
        });
      }
      var s = a.filter(function(u) {
        var c = u.name;
        return wo(r, c);
      });
      o(s, a);
    }
  }, this.validateFields = function(r, i) {
    n.warningUnhooked();
    var o = !!r, a = o ? r.map($e) : [], l = [];
    n.getFieldEntities(!0).forEach(function(c) {
      if (o || a.push(c.getNamePath()), i != null && i.recursive && o) {
        var f = c.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        f.every(function(h, y) {
          return r[y] === h || r[y] === void 0;
        }) && a.push(f);
      }
      if (!(!c.props.rules || !c.props.rules.length)) {
        var p = c.getNamePath();
        if (!o || wo(a, p)) {
          var g = c.validateRules(W({
            validateMessages: W(W({}, Xm), n.validateMessages)
          }, i));
          l.push(g.then(function() {
            return {
              name: p,
              errors: [],
              warnings: []
            };
          }).catch(function(h) {
            var y = [], w = [];
            return h.forEach(function(m) {
              var v = m.rule.warningOnly, C = m.errors;
              v ? w.push.apply(w, Q(C)) : y.push.apply(y, Q(C));
            }), y.length ? Promise.reject({
              name: p,
              errors: y,
              warnings: w
            }) : {
              name: p,
              errors: y,
              warnings: w
            };
          }));
        }
      }
    });
    var s = $S(l);
    n.lastValidatePromise = s, s.catch(function(c) {
      return c;
    }).then(function(c) {
      var f = c.map(function(p) {
        var g = p.name;
        return g;
      });
      n.notifyObservers(n.store, f, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(f, c);
    });
    var u = s.then(function() {
      return n.lastValidatePromise === s ? Promise.resolve(n.getFieldsValue(a)) : Promise.reject([]);
    }).catch(function(c) {
      var f = c.filter(function(p) {
        return p && p.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(a),
        errorFields: f,
        outOfDate: n.lastValidatePromise !== s
      });
    });
    return u.catch(function(c) {
      return c;
    }), u;
  }, this.submit = function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var i = n.callbacks.onFinish;
      if (i)
        try {
          i(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var i = n.callbacks.onFinishFailed;
      i && i(r);
    });
  }, this.forceRootUpdate = t;
});
function nd(e) {
  var t = d.useRef(), n = d.useState({}), r = q(n, 2), i = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        i({});
      }, a = new WS(o);
      t.current = a.getForm();
    }
  return [t.current];
}
var Ec = /* @__PURE__ */ d.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), rd = function(t) {
  var n = t.validateMessages, r = t.onFormChange, i = t.onFormFinish, o = t.children, a = d.useContext(Ec), l = d.useRef({});
  return /* @__PURE__ */ d.createElement(Ec.Provider, {
    value: W(W({}, a), {}, {
      validateMessages: W(W({}, a.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, c) {
        r && r(u, {
          changedFields: c,
          forms: l.current
        }), a.triggerFormChange(u, c);
      },
      triggerFormFinish: function(u, c) {
        i && i(u, {
          values: c,
          forms: l.current
        }), a.triggerFormFinish(u, c);
      },
      registerForm: function(u, c) {
        u && (l.current = W(W({}, l.current), {}, L({}, u, c))), a.registerForm(u, c);
      },
      unregisterForm: function(u) {
        var c = W({}, l.current);
        delete c[u], l.current = c, a.unregisterForm(u);
      }
    })
  }, o);
}, BS = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], US = function(t, n) {
  var r = t.name, i = t.initialValues, o = t.fields, a = t.form, l = t.preserve, s = t.children, u = t.component, c = u === void 0 ? "form" : u, f = t.validateMessages, p = t.validateTrigger, g = p === void 0 ? "onChange" : p, h = t.onValuesChange, y = t.onFieldsChange, w = t.onFinish, m = t.onFinishFailed, v = Yt(t, BS), C = d.useContext(Ec), S = nd(a), b = q(S, 1), I = b[0], T = I.getInternalHooks(ei), E = T.useSubscribe, D = T.setInitialValues, F = T.setCallbacks, z = T.setValidateMessages, R = T.setPreserve;
  d.useImperativeHandle(n, function() {
    return I;
  }), d.useEffect(function() {
    return C.registerForm(r, I), function() {
      C.unregisterForm(r);
    };
  }, [C, I, r]), z(W(W({}, C.validateMessages), f)), F({
    onValuesChange: h,
    onFieldsChange: function($) {
      if (C.triggerFormChange(r, $), y) {
        for (var V = arguments.length, B = new Array(V > 1 ? V - 1 : 0), H = 1; H < V; H++)
          B[H - 1] = arguments[H];
        y.apply(void 0, [$].concat(B));
      }
    },
    onFinish: function($) {
      C.triggerFormFinish(r, $), w && w($);
    },
    onFinishFailed: m
  }), R(l);
  var x = d.useRef(null);
  D(i, !x.current), x.current || (x.current = !0);
  var _ = s, P = typeof s == "function";
  if (P) {
    var k = I.getFieldsValue(!0);
    _ = s(k, I);
  }
  E(!P);
  var O = d.useRef();
  d.useEffect(function() {
    _S(O.current || [], o || []) || I.setFields(o || []), O.current = o;
  }, [o, I]);
  var N = d.useMemo(function() {
    return W(W({}, I), {}, {
      validateTrigger: g
    });
  }, [I, g]), M = /* @__PURE__ */ d.createElement(Pi.Provider, {
    value: N
  }, _);
  return c === !1 ? M : /* @__PURE__ */ d.createElement(c, j({}, v, {
    onSubmit: function($) {
      $.preventDefault(), $.stopPropagation(), I.submit();
    },
    onReset: function($) {
      var V;
      $.preventDefault(), I.resetFields(), (V = v.onReset) === null || V === void 0 || V.call(v, $);
    }
  }), M);
}, HS = /* @__PURE__ */ d.forwardRef(US), fa = HS;
fa.FormProvider = rd;
fa.Field = td;
fa.List = ig;
fa.useForm = nd;
var GS = /* @__PURE__ */ d.createContext({});
const id = GS;
function KS(e, t, n) {
  var r = d.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Bp = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function YS(e, t) {
  return !!(e === t || Bp(e) && Bp(t));
}
function ZS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!YS(e[n], t[n]))
      return !1;
  return !0;
}
function qS(e, t) {
  t === void 0 && (t = ZS);
  var n = null;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (n && n.lastThis === this && t(i, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, i);
    return n = {
      lastResult: a,
      lastArgs: i,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
const qe = function(e, t, n) {
  an(e, "[antd: ".concat(t, "] ").concat(n));
}, QS = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var XS = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, JS = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const ag = JS;
var eb = {
  lang: j({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, XS),
  timePickerLocale: j({}, ag)
};
const Up = eb;
var It = "${label} is not a valid ${type}", tb = {
  locale: "en",
  Pagination: QS,
  DatePicker: Up,
  TimePicker: ag,
  Calendar: Up,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: It,
        method: It,
        array: It,
        object: It,
        number: It,
        date: It,
        boolean: It,
        integer: It,
        float: It,
        regexp: It,
        email: It,
        url: It,
        hex: It
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const lr = tb;
var hl = j({}, lr.Modal);
function Na(e) {
  e ? hl = j(j({}, hl), e) : hl = j({}, lr.Modal);
}
function lg() {
  return hl;
}
var nb = /* @__PURE__ */ d.createContext(void 0);
const od = nb;
var sg = "internalMark", ug = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    return Ke(this, n), i = t.call(this, r), i.getMemoizedContextValue = qS(function(o) {
      return j(j({}, o), {
        exist: !0
      });
    }), Na(r.locale && r.locale.Modal), qe(r._ANT_MARK__ === sg, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), i;
  }
  return Ye(n, [{
    key: "componentDidMount",
    value: function() {
      Na(this.props.locale && this.props.locale.Modal);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var o = this.props.locale;
      i.locale !== o && Na(o && o.Modal);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      Na();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, o = i.locale, a = i.children, l = this.getMemoizedContextValue(o);
      return /* @__PURE__ */ d.createElement(od.Provider, {
        value: l
      }, a);
    }
  }]), n;
}(d.Component);
ug.defaultProps = {
  locale: {}
};
var Ui = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    return Ke(this, n), t.apply(this, arguments);
  }
  return Ye(n, [{
    key: "getLocale",
    value: function() {
      var i = this.props, o = i.componentName, a = i.defaultLocale, l = a || lr[o ?? "global"], s = this.context, u = o && s ? s[o] : {};
      return j(j({}, l instanceof Function ? l() : l), u || {});
    }
  }, {
    key: "getLocaleCode",
    value: function() {
      var i = this.context, o = i && i.locale;
      return i && i.exist && !o ? lr.locale : o;
    }
  }, {
    key: "render",
    value: function() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]), n;
}(d.Component);
Ui.defaultProps = {
  componentName: "global"
};
Ui.contextType = od;
function rb(e, t) {
  var n = d.useContext(od), r = d.useMemo(function() {
    var i = t || lr[e || "global"], o = e && n ? n[e] : {};
    return j(j({}, typeof i == "function" ? i() : i), o || {});
  }, [e, t, n]);
  return [r];
}
var ib = function() {
  var t = d.useContext(Fe), n = t.getPrefixCls, r = n("empty-img-default");
  return /* @__PURE__ */ d.createElement("svg", {
    className: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ d.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ d.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    className: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ d.createElement("path", {
    className: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /* @__PURE__ */ d.createElement("path", {
    className: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ d.createElement("path", {
    className: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /* @__PURE__ */ d.createElement("path", {
    className: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /* @__PURE__ */ d.createElement("path", {
    className: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /* @__PURE__ */ d.createElement("g", {
    className: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
const ob = ib;
var ab = function() {
  var t = d.useContext(Fe), n = t.getPrefixCls, r = n("empty-img-simple");
  return /* @__PURE__ */ d.createElement("svg", {
    className: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ d.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    className: "".concat(r, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ d.createElement("g", {
    className: "".concat(r, "-g"),
    fillRule: "nonzero"
  }, /* @__PURE__ */ d.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(r, "-path")
  }))));
};
const lb = ab;
var sb = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, cg = /* @__PURE__ */ d.createElement(ob, null), fg = /* @__PURE__ */ d.createElement(lb, null), ad = function(t) {
  var n = t.className, r = t.prefixCls, i = t.image, o = i === void 0 ? cg : i, a = t.description, l = t.children, s = t.imageStyle, u = sb(t, ["className", "prefixCls", "image", "description", "children", "imageStyle"]), c = d.useContext(Fe), f = c.getPrefixCls, p = c.direction;
  return /* @__PURE__ */ d.createElement(Ui, {
    componentName: "Empty"
  }, function(g) {
    var h, y = f("empty", r), w = typeof a < "u" ? a : g.description, m = typeof w == "string" ? w : "empty", v = null;
    return typeof o == "string" ? v = /* @__PURE__ */ d.createElement("img", {
      alt: m,
      src: o
    }) : v = o, /* @__PURE__ */ d.createElement("div", j({
      className: X(y, (h = {}, L(h, "".concat(y, "-normal"), o === fg), L(h, "".concat(y, "-rtl"), p === "rtl"), h), n)
    }, u), /* @__PURE__ */ d.createElement("div", {
      className: "".concat(y, "-image"),
      style: s
    }, v), w && /* @__PURE__ */ d.createElement("div", {
      className: "".concat(y, "-description")
    }, w), l && /* @__PURE__ */ d.createElement("div", {
      className: "".concat(y, "-footer")
    }, l));
  });
};
ad.PRESENTED_IMAGE_DEFAULT = cg;
ad.PRESENTED_IMAGE_SIMPLE = fg;
const Ji = ad;
var ub = function(t) {
  return /* @__PURE__ */ d.createElement(Vr, null, function(n) {
    var r = n.getPrefixCls, i = r("empty");
    switch (t) {
      case "Table":
      case "List":
        return /* @__PURE__ */ d.createElement(Ji, {
          image: Ji.PRESENTED_IMAGE_SIMPLE
        });
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return /* @__PURE__ */ d.createElement(Ji, {
          image: Ji.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(i, "-small")
        });
      default:
        return /* @__PURE__ */ d.createElement(Ji, null);
    }
  });
};
const cb = ub;
var fb = function(t, n) {
  return n || (t ? "ant-".concat(t) : "ant");
}, Fe = /* @__PURE__ */ d.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: fb,
  renderEmpty: cb
}), Vr = Fe.Consumer, kc = /* @__PURE__ */ d.createContext(void 0), dg = function(t) {
  var n = t.children, r = t.size;
  return /* @__PURE__ */ d.createElement(kc.Consumer, null, function(i) {
    return /* @__PURE__ */ d.createElement(kc.Provider, {
      value: r || i
    }, n);
  });
};
const Hi = kc;
var Do = {}, db = {
  get exports() {
    return Do;
  },
  set exports(e) {
    Do = e;
  }
}, Mt = {}, Ic = {}, pb = {
  get exports() {
    return Ic;
  },
  set exports(e) {
    Ic = e;
  }
}, pg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(N, M) {
    var A = N.length;
    N.push(M);
    e:
      for (; 0 < A; ) {
        var $ = A - 1 >>> 1, V = N[$];
        if (0 < i(V, M))
          N[$] = M, N[A] = V, A = $;
        else
          break e;
      }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0)
      return null;
    var M = N[0], A = N.pop();
    if (A !== M) {
      N[0] = A;
      e:
        for (var $ = 0, V = N.length, B = V >>> 1; $ < B; ) {
          var H = 2 * ($ + 1) - 1, K = N[H], G = H + 1, le = N[G];
          if (0 > i(K, A))
            G < V && 0 > i(le, K) ? (N[$] = le, N[G] = A, $ = G) : (N[$] = K, N[H] = A, $ = H);
          else if (G < V && 0 > i(le, A))
            N[$] = le, N[G] = A, $ = G;
          else
            break e;
        }
    }
    return M;
  }
  function i(N, M) {
    var A = N.sortIndex - M.sortIndex;
    return A !== 0 ? A : N.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, l = a.now();
    e.unstable_now = function() {
      return a.now() - l;
    };
  }
  var s = [], u = [], c = 1, f = null, p = 3, g = !1, h = !1, y = !1, w = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function C(N) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null)
        r(u);
      else if (M.startTime <= N)
        r(u), M.sortIndex = M.expirationTime, t(s, M);
      else
        break;
      M = n(u);
    }
  }
  function S(N) {
    if (y = !1, C(N), !h)
      if (n(s) !== null)
        h = !0, k(b);
      else {
        var M = n(u);
        M !== null && O(S, M.startTime - N);
      }
  }
  function b(N, M) {
    h = !1, y && (y = !1, m(E), E = -1), g = !0;
    var A = p;
    try {
      for (C(M), f = n(s); f !== null && (!(f.expirationTime > M) || N && !z()); ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          f.callback = null, p = f.priorityLevel;
          var V = $(f.expirationTime <= M);
          M = e.unstable_now(), typeof V == "function" ? f.callback = V : f === n(s) && r(s), C(M);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var B = !0;
      else {
        var H = n(u);
        H !== null && O(S, H.startTime - M), B = !1;
      }
      return B;
    } finally {
      f = null, p = A, g = !1;
    }
  }
  var I = !1, T = null, E = -1, D = 5, F = -1;
  function z() {
    return !(e.unstable_now() - F < D);
  }
  function R() {
    if (T !== null) {
      var N = e.unstable_now();
      F = N;
      var M = !0;
      try {
        M = T(!0, N);
      } finally {
        M ? x() : (I = !1, T = null);
      }
    } else
      I = !1;
  }
  var x;
  if (typeof v == "function")
    x = function() {
      v(R);
    };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), P = _.port2;
    _.port1.onmessage = R, x = function() {
      P.postMessage(null);
    };
  } else
    x = function() {
      w(R, 0);
    };
  function k(N) {
    T = N, I || (I = !0, x());
  }
  function O(N, M) {
    E = w(function() {
      N(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    h || g || (h = !0, k(b));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = p;
    }
    var A = p;
    p = M;
    try {
      return N();
    } finally {
      p = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, M) {
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
    var A = p;
    p = N;
    try {
      return M();
    } finally {
      p = A;
    }
  }, e.unstable_scheduleCallback = function(N, M, A) {
    var $ = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? $ + A : $) : A = $, N) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = A + V, N = { id: c++, callback: M, priorityLevel: N, startTime: A, expirationTime: V, sortIndex: -1 }, A > $ ? (N.sortIndex = A, t(u, N), n(s) === null && N === n(u) && (y ? (m(E), E = -1) : y = !0, O(S, A - $))) : (N.sortIndex = V, t(s, N), h || g || (h = !0, k(b))), N;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(N) {
    var M = p;
    return function() {
      var A = p;
      p = M;
      try {
        return N.apply(this, arguments);
      } finally {
        p = A;
      }
    };
  };
})(pg);
(function(e) {
  e.exports = pg;
})(pb);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg = d, _t = Ic;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hg = /* @__PURE__ */ new Set(), Vo = {};
function zr(e, t) {
  Oi(e, t), Oi(e + "Capture", t);
}
function Oi(e, t) {
  for (Vo[e] = t, e = 0; e < t.length; e++)
    hg.add(t[e]);
}
var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nc = Object.prototype.hasOwnProperty, vb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hp = {}, Gp = {};
function hb(e) {
  return Nc.call(Gp, e) ? !0 : Nc.call(Hp, e) ? !1 : vb.test(e) ? Gp[e] = !0 : (Hp[e] = !0, !1);
}
function mb(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gb(e, t, n, r) {
  if (t === null || typeof t > "u" || mb(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function yt(e, t, n, r, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  rt[e] = new yt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  rt[t] = new yt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  rt[e] = new yt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  rt[e] = new yt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  rt[e] = new yt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  rt[e] = new yt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  rt[e] = new yt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  rt[e] = new yt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  rt[e] = new yt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ld = /[\-:]([a-z])/g;
function sd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ld,
    sd
  );
  rt[t] = new yt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ld, sd);
  rt[t] = new yt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ld, sd);
  rt[t] = new yt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  rt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  rt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ud(e, t, n, r) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gb(t, n, i, r) && (n = null), r || i === null ? hb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ln = vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ta = Symbol.for("react.element"), ti = Symbol.for("react.portal"), ni = Symbol.for("react.fragment"), cd = Symbol.for("react.strict_mode"), Tc = Symbol.for("react.profiler"), mg = Symbol.for("react.provider"), gg = Symbol.for("react.context"), fd = Symbol.for("react.forward_ref"), Pc = Symbol.for("react.suspense"), Oc = Symbol.for("react.suspense_list"), dd = Symbol.for("react.memo"), jn = Symbol.for("react.lazy"), yg = Symbol.for("react.offscreen"), Kp = Symbol.iterator;
function eo(e) {
  return e === null || typeof e != "object" ? null : (e = Kp && e[Kp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Me = Object.assign, nu;
function co(e) {
  if (nu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nu = t && t[1] || "";
    }
  return `
` + nu + e;
}
var ru = !1;
function iu(e, t) {
  if (!e || ru)
    return "";
  ru = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, l = o.length - 1; 1 <= a && 0 <= l && i[a] !== o[l]; )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if (a--, l--, 0 > l || i[a] !== o[l]) {
                var s = `
` + i[a].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    ru = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? co(e) : "";
}
function yb(e) {
  switch (e.tag) {
    case 5:
      return co(e.type);
    case 16:
      return co("Lazy");
    case 13:
      return co("Suspense");
    case 19:
      return co("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = iu(e.type, !1), e;
    case 11:
      return e = iu(e.type.render, !1), e;
    case 1:
      return e = iu(e.type, !0), e;
    default:
      return "";
  }
}
function Rc(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case ni:
      return "Fragment";
    case ti:
      return "Portal";
    case Tc:
      return "Profiler";
    case cd:
      return "StrictMode";
    case Pc:
      return "Suspense";
    case Oc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gg:
        return (e.displayName || "Context") + ".Consumer";
      case mg:
        return (e._context.displayName || "Context") + ".Provider";
      case fd:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case dd:
        return t = e.displayName || null, t !== null ? t : Rc(e.type) || "Memo";
      case jn:
        t = e._payload, e = e._init;
        try {
          return Rc(e(t));
        } catch {
        }
    }
  return null;
}
function Cb(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Rc(t);
    case 8:
      return t === cd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function sr(e) {
  switch (typeof e) {
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
function Cg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function wb(e) {
  var t = Cg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      r = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Pa(e) {
  e._valueTracker || (e._valueTracker = wb(e));
}
function wg(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _c(e, t) {
  var n = t.checked;
  return Me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sg(e, t) {
  t = t.checked, t != null && ud(e, "checked", t, !1);
}
function Ac(e, t) {
  Sg(e, t);
  var n = sr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Mc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mc(e, t.type, sr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Mc(e, t, n) {
  (t !== "number" || Fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fo = Array.isArray;
function Ci(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fc(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(U(91));
  return Me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(U(92));
      if (fo(n)) {
        if (1 < n.length)
          throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sr(n) };
}
function bg(e, t) {
  var n = sr(t.value), r = sr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Oa, Eg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Oa = Oa || document.createElement("div"), Oa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Oa.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function zo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var So = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Sb = ["Webkit", "ms", "Moz", "O"];
Object.keys(So).forEach(function(e) {
  Sb.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), So[t] = So[e];
  });
});
function kg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || So.hasOwnProperty(e) && So[e] ? ("" + t).trim() : t + "px";
}
function Ig(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = kg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var bb = Me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Dc(e, t) {
  if (t) {
    if (bb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(U(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(U(62));
  }
}
function Vc(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
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
var zc = null;
function pd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $c = null, wi = null, Si = null;
function Xp(e) {
  if (e = va(e)) {
    if (typeof $c != "function")
      throw Error(U(280));
    var t = e.stateNode;
    t && (t = _s(t), $c(e.stateNode, e.type, t));
  }
}
function Ng(e) {
  wi ? Si ? Si.push(e) : Si = [e] : wi = e;
}
function Tg() {
  if (wi) {
    var e = wi, t = Si;
    if (Si = wi = null, Xp(e), t)
      for (e = 0; e < t.length; e++)
        Xp(t[e]);
  }
}
function Pg(e, t) {
  return e(t);
}
function Og() {
}
var ou = !1;
function Rg(e, t, n) {
  if (ou)
    return e(t, n);
  ou = !0;
  try {
    return Pg(e, t, n);
  } finally {
    ou = !1, (wi !== null || Si !== null) && (Og(), Tg());
  }
}
function $o(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = _s(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(U(231, t, typeof n));
  return n;
}
var jc = !1;
if (Rn)
  try {
    var to = {};
    Object.defineProperty(to, "passive", { get: function() {
      jc = !0;
    } }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to);
  } catch {
    jc = !1;
  }
function xb(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bo = !1, Ll = null, Dl = !1, Wc = null, Eb = { onError: function(e) {
  bo = !0, Ll = e;
} };
function kb(e, t, n, r, i, o, a, l, s) {
  bo = !1, Ll = null, xb.apply(Eb, arguments);
}
function Ib(e, t, n, r, i, o, a, l, s) {
  if (kb.apply(this, arguments), bo) {
    if (bo) {
      var u = Ll;
      bo = !1, Ll = null;
    } else
      throw Error(U(198));
    Dl || (Dl = !0, Wc = u);
  }
}
function $r(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _g(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Jp(e) {
  if ($r(e) !== e)
    throw Error(U(188));
}
function Nb(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $r(e), t === null)
      throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n)
          return Jp(i), e;
        if (o === r)
          return Jp(i), t;
        o = o.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          a = !0, n = i, r = o;
          break;
        }
        if (l === r) {
          a = !0, r = i, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            a = !0, n = o, r = i;
            break;
          }
          if (l === r) {
            a = !0, r = o, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!a)
          throw Error(U(189));
      }
    }
    if (n.alternate !== r)
      throw Error(U(190));
  }
  if (n.tag !== 3)
    throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function Ag(e) {
  return e = Nb(e), e !== null ? Mg(e) : null;
}
function Mg(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Mg(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Fg = _t.unstable_scheduleCallback, ev = _t.unstable_cancelCallback, Tb = _t.unstable_shouldYield, Pb = _t.unstable_requestPaint, ze = _t.unstable_now, Ob = _t.unstable_getCurrentPriorityLevel, vd = _t.unstable_ImmediatePriority, Lg = _t.unstable_UserBlockingPriority, Vl = _t.unstable_NormalPriority, Rb = _t.unstable_LowPriority, Dg = _t.unstable_IdlePriority, Ts = null, gn = null;
function _b(e) {
  if (gn && typeof gn.onCommitFiberRoot == "function")
    try {
      gn.onCommitFiberRoot(Ts, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var ln = Math.clz32 ? Math.clz32 : Fb, Ab = Math.log, Mb = Math.LN2;
function Fb(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ab(e) / Mb | 0) | 0;
}
var Ra = 64, _a = 4194304;
function po(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? r = po(l) : (o &= a, o !== 0 && (r = po(o)));
  } else
    a = n & ~i, a !== 0 ? r = po(a) : o !== 0 && (r = po(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - ln(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Lb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Db(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - ln(o), l = 1 << a, s = i[a];
    s === -1 ? (!(l & n) || l & r) && (i[a] = Lb(l, t)) : s <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function Bc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Vg() {
  var e = Ra;
  return Ra <<= 1, !(Ra & 4194240) && (Ra = 64), e;
}
function au(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function da(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ln(t), e[t] = n;
}
function Vb(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ln(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function hd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ln(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var Se = 0;
function zg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $g, md, jg, Wg, Bg, Uc = !1, Aa = [], Xn = null, Jn = null, er = null, jo = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), Hn = [], zb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xn = null;
      break;
    case "dragenter":
    case "dragleave":
      Jn = null;
      break;
    case "mouseover":
    case "mouseout":
      er = null;
      break;
    case "pointerover":
    case "pointerout":
      jo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wo.delete(t.pointerId);
  }
}
function no(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = va(t), t !== null && md(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function $b(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Xn = no(Xn, e, t, n, r, i), !0;
    case "dragenter":
      return Jn = no(Jn, e, t, n, r, i), !0;
    case "mouseover":
      return er = no(er, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return jo.set(o, no(jo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Wo.set(o, no(Wo.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Ug(e) {
  var t = xr(e.target);
  if (t !== null) {
    var n = $r(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _g(n), t !== null) {
          e.blockedOn = t, Bg(e.priority, function() {
            jg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ml(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zc = r, n.target.dispatchEvent(r), zc = null;
    } else
      return t = va(n), t !== null && md(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function nv(e, t, n) {
  ml(e) && n.delete(t);
}
function jb() {
  Uc = !1, Xn !== null && ml(Xn) && (Xn = null), Jn !== null && ml(Jn) && (Jn = null), er !== null && ml(er) && (er = null), jo.forEach(nv), Wo.forEach(nv);
}
function ro(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Uc || (Uc = !0, _t.unstable_scheduleCallback(_t.unstable_NormalPriority, jb)));
}
function Bo(e) {
  function t(i) {
    return ro(i, e);
  }
  if (0 < Aa.length) {
    ro(Aa[0], e);
    for (var n = 1; n < Aa.length; n++) {
      var r = Aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xn !== null && ro(Xn, e), Jn !== null && ro(Jn, e), er !== null && ro(er, e), jo.forEach(t), Wo.forEach(t), n = 0; n < Hn.length; n++)
    r = Hn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); )
    Ug(n), n.blockedOn === null && Hn.shift();
}
var bi = Ln.ReactCurrentBatchConfig, $l = !0;
function Wb(e, t, n, r) {
  var i = Se, o = bi.transition;
  bi.transition = null;
  try {
    Se = 1, gd(e, t, n, r);
  } finally {
    Se = i, bi.transition = o;
  }
}
function Bb(e, t, n, r) {
  var i = Se, o = bi.transition;
  bi.transition = null;
  try {
    Se = 4, gd(e, t, n, r);
  } finally {
    Se = i, bi.transition = o;
  }
}
function gd(e, t, n, r) {
  if ($l) {
    var i = Hc(e, t, n, r);
    if (i === null)
      mu(e, t, r, jl, n), tv(e, r);
    else if ($b(i, e, t, n, r))
      r.stopPropagation();
    else if (tv(e, r), t & 4 && -1 < zb.indexOf(e)) {
      for (; i !== null; ) {
        var o = va(i);
        if (o !== null && $g(o), o = Hc(e, t, n, r), o === null && mu(e, t, r, jl, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      mu(e, t, r, null, n);
  }
}
var jl = null;
function Hc(e, t, n, r) {
  if (jl = null, e = pd(r), e = xr(e), e !== null)
    if (t = $r(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = _g(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return jl = e, null;
}
function Hg(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ob()) {
        case vd:
          return 1;
        case Lg:
          return 4;
        case Vl:
        case Rb:
          return 16;
        case Dg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kn = null, yd = null, gl = null;
function Gg() {
  if (gl)
    return gl;
  var e, t = yd, n = t.length, r, i = "value" in Kn ? Kn.value : Kn.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++)
    ;
  return gl = i.slice(e, 1 < r ? 1 - r : void 0);
}
function yl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ma() {
  return !0;
}
function rv() {
  return !1;
}
function Ft(e) {
  function t(n, r, i, o, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ma : rv, this.isPropagationStopped = rv, this;
  }
  return Me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ma);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ma);
  }, persist: function() {
  }, isPersistent: Ma }), t;
}
var Gi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cd = Ft(Gi), pa = Me({}, Gi, { view: 0, detail: 0 }), Ub = Ft(pa), lu, su, io, Ps = Me({}, pa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== io && (io && e.type === "mousemove" ? (lu = e.screenX - io.screenX, su = e.screenY - io.screenY) : su = lu = 0, io = e), lu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : su;
} }), iv = Ft(Ps), Hb = Me({}, Ps, { dataTransfer: 0 }), Gb = Ft(Hb), Kb = Me({}, pa, { relatedTarget: 0 }), uu = Ft(Kb), Yb = Me({}, Gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zb = Ft(Yb), qb = Me({}, Gi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qb = Ft(qb), Xb = Me({}, Gi, { data: 0 }), ov = Ft(Xb), Jb = {
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
}, e2 = {
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
}, t2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function n2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t2[e]) ? !!t[e] : !1;
}
function wd() {
  return n2;
}
var r2 = Me({}, pa, { key: function(e) {
  if (e.key) {
    var t = Jb[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = yl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e2[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wd, charCode: function(e) {
  return e.type === "keypress" ? yl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), i2 = Ft(r2), o2 = Me({}, Ps, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = Ft(o2), a2 = Me({}, pa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wd }), l2 = Ft(a2), s2 = Me({}, Gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), u2 = Ft(s2), c2 = Me({}, Ps, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), f2 = Ft(c2), d2 = [9, 13, 27, 32], Sd = Rn && "CompositionEvent" in window, xo = null;
Rn && "documentMode" in document && (xo = document.documentMode);
var p2 = Rn && "TextEvent" in window && !xo, Kg = Rn && (!Sd || xo && 8 < xo && 11 >= xo), lv = String.fromCharCode(32), sv = !1;
function Yg(e, t) {
  switch (e) {
    case "keyup":
      return d2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ri = !1;
function v2(e, t) {
  switch (e) {
    case "compositionend":
      return Zg(t);
    case "keypress":
      return t.which !== 32 ? null : (sv = !0, lv);
    case "textInput":
      return e = t.data, e === lv && sv ? null : e;
    default:
      return null;
  }
}
function h2(e, t) {
  if (ri)
    return e === "compositionend" || !Sd && Yg(e, t) ? (e = Gg(), gl = yd = Kn = null, ri = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var m2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function uv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!m2[e.type] : t === "textarea";
}
function qg(e, t, n, r) {
  Ng(r), t = Wl(t, "onChange"), 0 < t.length && (n = new Cd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Eo = null, Uo = null;
function g2(e) {
  l0(e, 0);
}
function Os(e) {
  var t = ai(e);
  if (wg(t))
    return e;
}
function y2(e, t) {
  if (e === "change")
    return t;
}
var Qg = !1;
if (Rn) {
  var cu;
  if (Rn) {
    var fu = "oninput" in document;
    if (!fu) {
      var cv = document.createElement("div");
      cv.setAttribute("oninput", "return;"), fu = typeof cv.oninput == "function";
    }
    cu = fu;
  } else
    cu = !1;
  Qg = cu && (!document.documentMode || 9 < document.documentMode);
}
function fv() {
  Eo && (Eo.detachEvent("onpropertychange", Xg), Uo = Eo = null);
}
function Xg(e) {
  if (e.propertyName === "value" && Os(Uo)) {
    var t = [];
    qg(t, Uo, e, pd(e)), Rg(g2, t);
  }
}
function C2(e, t, n) {
  e === "focusin" ? (fv(), Eo = t, Uo = n, Eo.attachEvent("onpropertychange", Xg)) : e === "focusout" && fv();
}
function w2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(Uo);
}
function S2(e, t) {
  if (e === "click")
    return Os(t);
}
function b2(e, t) {
  if (e === "input" || e === "change")
    return Os(t);
}
function x2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var un = typeof Object.is == "function" ? Object.is : x2;
function Ho(e, t) {
  if (un(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Nc.call(t, i) || !un(e[i], t[i]))
      return !1;
  }
  return !0;
}
function dv(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function pv(e, t) {
  var n = dv(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = dv(n);
  }
}
function Jg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function e0() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Fl(e.document);
  }
  return t;
}
function bd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function E2(e) {
  var t = e0(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jg(n.ownerDocument.documentElement, n)) {
    if (r !== null && bd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = pv(n, o);
        var a = pv(
          n,
          r
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var k2 = Rn && "documentMode" in document && 11 >= document.documentMode, ii = null, Gc = null, ko = null, Kc = !1;
function vv(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kc || ii == null || ii !== Fl(r) || (r = ii, "selectionStart" in r && bd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ko && Ho(ko, r) || (ko = r, r = Wl(Gc, "onSelect"), 0 < r.length && (t = new Cd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ii)));
}
function Fa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var oi = { animationend: Fa("Animation", "AnimationEnd"), animationiteration: Fa("Animation", "AnimationIteration"), animationstart: Fa("Animation", "AnimationStart"), transitionend: Fa("Transition", "TransitionEnd") }, du = {}, t0 = {};
Rn && (t0 = document.createElement("div").style, "AnimationEvent" in window || (delete oi.animationend.animation, delete oi.animationiteration.animation, delete oi.animationstart.animation), "TransitionEvent" in window || delete oi.transitionend.transition);
function Rs(e) {
  if (du[e])
    return du[e];
  if (!oi[e])
    return e;
  var t = oi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in t0)
      return du[e] = t[n];
  return e;
}
var n0 = Rs("animationend"), r0 = Rs("animationiteration"), i0 = Rs("animationstart"), o0 = Rs("transitionend"), a0 = /* @__PURE__ */ new Map(), hv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fr(e, t) {
  a0.set(e, t), zr(t, [e]);
}
for (var pu = 0; pu < hv.length; pu++) {
  var vu = hv[pu], I2 = vu.toLowerCase(), N2 = vu[0].toUpperCase() + vu.slice(1);
  fr(I2, "on" + N2);
}
fr(n0, "onAnimationEnd");
fr(r0, "onAnimationIteration");
fr(i0, "onAnimationStart");
fr("dblclick", "onDoubleClick");
fr("focusin", "onFocus");
fr("focusout", "onBlur");
fr(o0, "onTransitionEnd");
Oi("onMouseEnter", ["mouseout", "mouseover"]);
Oi("onMouseLeave", ["mouseout", "mouseover"]);
Oi("onPointerEnter", ["pointerout", "pointerover"]);
Oi("onPointerLeave", ["pointerout", "pointerover"]);
zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), T2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function mv(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ib(r, t, void 0, e), e.currentTarget = null;
}
function l0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a], s = l.instance, u = l.currentTarget;
          if (l = l.listener, s !== o && i.isPropagationStopped())
            break e;
          mv(i, l, u), o = s;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (l = r[a], s = l.instance, u = l.currentTarget, l = l.listener, s !== o && i.isPropagationStopped())
            break e;
          mv(i, l, u), o = s;
        }
    }
  }
  if (Dl)
    throw e = Wc, Dl = !1, Wc = null, e;
}
function Ne(e, t) {
  var n = t[Xc];
  n === void 0 && (n = t[Xc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (s0(t, e, 2, !1), n.add(r));
}
function hu(e, t, n) {
  var r = 0;
  t && (r |= 4), s0(n, e, r, t);
}
var La = "_reactListening" + Math.random().toString(36).slice(2);
function Go(e) {
  if (!e[La]) {
    e[La] = !0, hg.forEach(function(n) {
      n !== "selectionchange" && (T2.has(n) || hu(n, !1, e), hu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[La] || (t[La] = !0, hu("selectionchange", !1, t));
  }
}
function s0(e, t, n, r) {
  switch (Hg(t)) {
    case 1:
      var i = Wb;
      break;
    case 4:
      i = Bb;
      break;
    default:
      i = gd;
  }
  n = i.bind(null, t, n, e), i = void 0, !jc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function mu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var l = r.stateNode.containerInfo;
          if (l === i || l.nodeType === 8 && l.parentNode === i)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var s = a.tag;
              if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i))
                return;
              a = a.return;
            }
          for (; l !== null; ) {
            if (a = xr(l), a === null)
              return;
            if (s = a.tag, s === 5 || s === 6) {
              r = o = a;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
  Rg(function() {
    var u = o, c = pd(n), f = [];
    e: {
      var p = a0.get(e);
      if (p !== void 0) {
        var g = Cd, h = e;
        switch (e) {
          case "keypress":
            if (yl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = i2;
            break;
          case "focusin":
            h = "focus", g = uu;
            break;
          case "focusout":
            h = "blur", g = uu;
            break;
          case "beforeblur":
          case "afterblur":
            g = uu;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = iv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Gb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = l2;
            break;
          case n0:
          case r0:
          case i0:
            g = Zb;
            break;
          case o0:
            g = u2;
            break;
          case "scroll":
            g = Ub;
            break;
          case "wheel":
            g = f2;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Qb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = av;
        }
        var y = (t & 4) !== 0, w = !y && e === "scroll", m = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var v = u, C; v !== null; ) {
          C = v;
          var S = C.stateNode;
          if (C.tag === 5 && S !== null && (C = S, m !== null && (S = $o(v, m), S != null && y.push(Ko(v, S, C)))), w)
            break;
          v = v.return;
        }
        0 < y.length && (p = new g(p, h, null, n, c), f.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== zc && (h = n.relatedTarget || n.fromElement) && (xr(h) || h[_n]))
          break e;
        if ((g || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? xr(h) : null, h !== null && (w = $r(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (y = iv, S = "onMouseLeave", m = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (y = av, S = "onPointerLeave", m = "onPointerEnter", v = "pointer"), w = g == null ? p : ai(g), C = h == null ? p : ai(h), p = new y(S, v + "leave", g, n, c), p.target = w, p.relatedTarget = C, S = null, xr(c) === u && (y = new y(m, v + "enter", h, n, c), y.target = C, y.relatedTarget = w, S = y), w = S, g && h)
            t: {
              for (y = g, m = h, v = 0, C = y; C; C = Hr(C))
                v++;
              for (C = 0, S = m; S; S = Hr(S))
                C++;
              for (; 0 < v - C; )
                y = Hr(y), v--;
              for (; 0 < C - v; )
                m = Hr(m), C--;
              for (; v--; ) {
                if (y === m || m !== null && y === m.alternate)
                  break t;
                y = Hr(y), m = Hr(m);
              }
              y = null;
            }
          else
            y = null;
          g !== null && gv(f, p, g, y, !1), h !== null && w !== null && gv(f, w, h, y, !0);
        }
      }
      e: {
        if (p = u ? ai(u) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var b = y2;
        else if (uv(p))
          if (Qg)
            b = b2;
          else {
            b = w2;
            var I = C2;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = S2);
        if (b && (b = b(e, u))) {
          qg(f, b, n, c);
          break e;
        }
        I && I(e, p, u), e === "focusout" && (I = p._wrapperState) && I.controlled && p.type === "number" && Mc(p, "number", p.value);
      }
      switch (I = u ? ai(u) : window, e) {
        case "focusin":
          (uv(I) || I.contentEditable === "true") && (ii = I, Gc = u, ko = null);
          break;
        case "focusout":
          ko = Gc = ii = null;
          break;
        case "mousedown":
          Kc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kc = !1, vv(f, n, c);
          break;
        case "selectionchange":
          if (k2)
            break;
        case "keydown":
        case "keyup":
          vv(f, n, c);
      }
      var T;
      if (Sd)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        ri ? Yg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Kg && n.locale !== "ko" && (ri || E !== "onCompositionStart" ? E === "onCompositionEnd" && ri && (T = Gg()) : (Kn = c, yd = "value" in Kn ? Kn.value : Kn.textContent, ri = !0)), I = Wl(u, E), 0 < I.length && (E = new ov(E, e, null, n, c), f.push({ event: E, listeners: I }), T ? E.data = T : (T = Zg(n), T !== null && (E.data = T)))), (T = p2 ? v2(e, n) : h2(e, n)) && (u = Wl(u, "onBeforeInput"), 0 < u.length && (c = new ov("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
    }
    l0(f, t);
  });
}
function Ko(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = $o(e, n), o != null && r.unshift(Ko(e, o, i)), o = $o(e, t), o != null && r.push(Ko(e, o, i))), e = e.return;
  }
  return r;
}
function Hr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gv(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n, s = l.alternate, u = l.stateNode;
    if (s !== null && s === r)
      break;
    l.tag === 5 && u !== null && (l = u, i ? (s = $o(n, o), s != null && a.unshift(Ko(n, s, l))) : i || (s = $o(n, o), s != null && a.push(Ko(n, s, l)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var P2 = /\r\n?/g, O2 = /\u0000|\uFFFD/g;
function yv(e) {
  return (typeof e == "string" ? e : "" + e).replace(P2, `
`).replace(O2, "");
}
function Da(e, t, n) {
  if (t = yv(t), yv(e) !== t && n)
    throw Error(U(425));
}
function Bl() {
}
var Yc = null, Zc = null;
function qc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qc = typeof setTimeout == "function" ? setTimeout : void 0, R2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Cv = typeof Promise == "function" ? Promise : void 0, _2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cv < "u" ? function(e) {
  return Cv.resolve(null).then(e).catch(A2);
} : Qc;
function A2(e) {
  setTimeout(function() {
    throw e;
  });
}
function gu(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Bo(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Bo(t);
}
function tr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function wv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ki = Math.random().toString(36).slice(2), hn = "__reactFiber$" + Ki, Yo = "__reactProps$" + Ki, _n = "__reactContainer$" + Ki, Xc = "__reactEvents$" + Ki, M2 = "__reactListeners$" + Ki, F2 = "__reactHandles$" + Ki;
function xr(e) {
  var t = e[hn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[_n] || n[hn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = wv(e); e !== null; ) {
          if (n = e[hn])
            return n;
          e = wv(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function va(e) {
  return e = e[hn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ai(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(U(33));
}
function _s(e) {
  return e[Yo] || null;
}
var Jc = [], li = -1;
function dr(e) {
  return { current: e };
}
function Pe(e) {
  0 > li || (e.current = Jc[li], Jc[li] = null, li--);
}
function ke(e, t) {
  li++, Jc[li] = e.current, e.current = t;
}
var ur = {}, st = dr(ur), St = dr(!1), Or = ur;
function Ri(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return ur;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function bt(e) {
  return e = e.childContextTypes, e != null;
}
function Ul() {
  Pe(St), Pe(st);
}
function Sv(e, t, n) {
  if (st.current !== ur)
    throw Error(U(168));
  ke(st, t), ke(St, n);
}
function u0(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(U(108, Cb(e) || "Unknown", i));
  return Me({}, n, r);
}
function Hl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ur, Or = st.current, ke(st, e), ke(St, St.current), !0;
}
function bv(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(U(169));
  n ? (e = u0(e, t, Or), r.__reactInternalMemoizedMergedChildContext = e, Pe(St), Pe(st), ke(st, e)) : Pe(St), ke(St, n);
}
var En = null, As = !1, yu = !1;
function c0(e) {
  En === null ? En = [e] : En.push(e);
}
function L2(e) {
  As = !0, c0(e);
}
function pr() {
  if (!yu && En !== null) {
    yu = !0;
    var e = 0, t = Se;
    try {
      var n = En;
      for (Se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      En = null, As = !1;
    } catch (i) {
      throw En !== null && (En = En.slice(e + 1)), Fg(vd, pr), i;
    } finally {
      Se = t, yu = !1;
    }
  }
  return null;
}
var si = [], ui = 0, Gl = null, Kl = 0, Bt = [], Ut = 0, Rr = null, In = 1, Nn = "";
function Cr(e, t) {
  si[ui++] = Kl, si[ui++] = Gl, Gl = e, Kl = t;
}
function f0(e, t, n) {
  Bt[Ut++] = In, Bt[Ut++] = Nn, Bt[Ut++] = Rr, Rr = e;
  var r = In;
  e = Nn;
  var i = 32 - ln(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - ln(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, In = 1 << 32 - ln(t) + i | n << i | r, Nn = o + e;
  } else
    In = 1 << o | n << i | r, Nn = e;
}
function xd(e) {
  e.return !== null && (Cr(e, 1), f0(e, 1, 0));
}
function Ed(e) {
  for (; e === Gl; )
    Gl = si[--ui], si[ui] = null, Kl = si[--ui], si[ui] = null;
  for (; e === Rr; )
    Rr = Bt[--Ut], Bt[Ut] = null, Nn = Bt[--Ut], Bt[Ut] = null, In = Bt[--Ut], Bt[Ut] = null;
}
var Rt = null, Ot = null, Oe = !1, on = null;
function d0(e, t) {
  var n = Ht(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Rt = e, Ot = tr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Rt = e, Ot = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rr !== null ? { id: In, overflow: Nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Rt = e, Ot = null, !0) : !1;
    default:
      return !1;
  }
}
function ef(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tf(e) {
  if (Oe) {
    var t = Ot;
    if (t) {
      var n = t;
      if (!xv(e, t)) {
        if (ef(e))
          throw Error(U(418));
        t = tr(n.nextSibling);
        var r = Rt;
        t && xv(e, t) ? d0(r, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Rt = e);
      }
    } else {
      if (ef(e))
        throw Error(U(418));
      e.flags = e.flags & -4097 | 2, Oe = !1, Rt = e;
    }
  }
}
function Ev(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Rt = e;
}
function Va(e) {
  if (e !== Rt)
    return !1;
  if (!Oe)
    return Ev(e), Oe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qc(e.type, e.memoizedProps)), t && (t = Ot)) {
    if (ef(e))
      throw p0(), Error(U(418));
    for (; t; )
      d0(e, t), t = tr(t.nextSibling);
  }
  if (Ev(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ot = tr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else
    Ot = Rt ? tr(e.stateNode.nextSibling) : null;
  return !0;
}
function p0() {
  for (var e = Ot; e; )
    e = tr(e.nextSibling);
}
function _i() {
  Ot = Rt = null, Oe = !1;
}
function kd(e) {
  on === null ? on = [e] : on.push(e);
}
var D2 = Ln.ReactCurrentBatchConfig;
function nn(e, t) {
  if (e && e.defaultProps) {
    t = Me({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Yl = dr(null), Zl = null, ci = null, Id = null;
function Nd() {
  Id = ci = Zl = null;
}
function Td(e) {
  var t = Yl.current;
  Pe(Yl), e._currentValue = t;
}
function nf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function xi(e, t) {
  Zl = e, Id = ci = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (wt = !0), e.firstContext = null);
}
function Zt(e) {
  var t = e._currentValue;
  if (Id !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ci === null) {
      if (Zl === null)
        throw Error(U(308));
      ci = e, Zl.dependencies = { lanes: 0, firstContext: e };
    } else
      ci = ci.next = e;
  return t;
}
var Er = null;
function Pd(e) {
  Er === null ? Er = [e] : Er.push(e);
}
function v0(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Pd(t)) : (n.next = i.next, i.next = n), t.interleaved = n, An(e, r);
}
function An(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Wn = !1;
function Od(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function h0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ge & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, An(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Pd(r)) : (t.next = i.next, i.next = t), r.interleaved = t, An(e, n);
}
function Cl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hd(e, n);
  }
}
function kv(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = a : o = o.next = a, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ql(e, t, n, r) {
  var i = e.updateQueue;
  Wn = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l, u = s.next;
    s.next = null, a === null ? o = u : a.next = u, a = s;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== a && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
  }
  if (o !== null) {
    var f = i.baseState;
    a = 0, c = u = s = null, l = o;
    do {
      var p = l.lane, g = l.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var h = e, y = l;
          switch (p = t, g = n, y.tag) {
            case 1:
              if (h = y.payload, typeof h == "function") {
                f = h.call(g, f, p);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = y.payload, p = typeof h == "function" ? h.call(g, f, p) : h, p == null)
                break e;
              f = Me({}, f, p);
              break e;
            case 2:
              Wn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [l] : p.push(l));
      } else
        g = { eventTime: g, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = g, s = f) : c = c.next = g, a |= p;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null)
          break;
        p = l, l = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (1);
    if (c === null && (s = f), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    Ar |= a, e.lanes = a, e.memoizedState = f;
  }
}
function Iv(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(U(191, i));
        i.call(r);
      }
    }
}
var m0 = new vg.Component().refs;
function rf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? $r(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = vt(), i = ir(e), o = Tn(r, i);
  o.payload = t, n != null && (o.callback = n), t = nr(e, o, i), t !== null && (sn(t, e, i, r), Cl(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = vt(), i = ir(e), o = Tn(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = nr(e, o, i), t !== null && (sn(t, e, i, r), Cl(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = vt(), r = ir(e), i = Tn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = nr(e, i, r), t !== null && (sn(t, e, r, n), Cl(t, e, r));
} };
function Nv(e, t, n, r, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Ho(n, r) || !Ho(i, o) : !0;
}
function g0(e, t, n) {
  var r = !1, i = ur, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Zt(o) : (i = bt(t) ? Or : st.current, r = t.contextTypes, o = (r = r != null) ? Ri(e, i) : ur), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Tv(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ms.enqueueReplaceState(t, t.state, null);
}
function of(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = m0, Od(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Zt(o) : (o = bt(t) ? Or : st.current, i.context = Ri(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (rf(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ms.enqueueReplaceState(i, i.state, null), ql(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function oo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(U(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var l = i.refs;
        l === m0 && (l = i.refs = {}), a === null ? delete l[o] : l[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(U(284));
    if (!n._owner)
      throw Error(U(290, e));
  }
  return e;
}
function za(e, t) {
  throw e = Object.prototype.toString.call(t), Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Pv(e) {
  var t = e._init;
  return t(e._payload);
}
function y0(e) {
  function t(m, v) {
    if (e) {
      var C = m.deletions;
      C === null ? (m.deletions = [v], m.flags |= 16) : C.push(v);
    }
  }
  function n(m, v) {
    if (!e)
      return null;
    for (; v !== null; )
      t(m, v), v = v.sibling;
    return null;
  }
  function r(m, v) {
    for (m = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
    return m;
  }
  function i(m, v) {
    return m = or(m, v), m.index = 0, m.sibling = null, m;
  }
  function o(m, v, C) {
    return m.index = C, e ? (C = m.alternate, C !== null ? (C = C.index, C < v ? (m.flags |= 2, v) : C) : (m.flags |= 2, v)) : (m.flags |= 1048576, v);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, v, C, S) {
    return v === null || v.tag !== 6 ? (v = ku(C, m.mode, S), v.return = m, v) : (v = i(v, C), v.return = m, v);
  }
  function s(m, v, C, S) {
    var b = C.type;
    return b === ni ? c(m, v, C.props.children, S, C.key) : v !== null && (v.elementType === b || typeof b == "object" && b !== null && b.$$typeof === jn && Pv(b) === v.type) ? (S = i(v, C.props), S.ref = oo(m, v, C), S.return = m, S) : (S = kl(C.type, C.key, C.props, null, m.mode, S), S.ref = oo(m, v, C), S.return = m, S);
  }
  function u(m, v, C, S) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== C.containerInfo || v.stateNode.implementation !== C.implementation ? (v = Iu(C, m.mode, S), v.return = m, v) : (v = i(v, C.children || []), v.return = m, v);
  }
  function c(m, v, C, S, b) {
    return v === null || v.tag !== 7 ? (v = Pr(C, m.mode, S, b), v.return = m, v) : (v = i(v, C), v.return = m, v);
  }
  function f(m, v, C) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = ku("" + v, m.mode, C), v.return = m, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ta:
          return C = kl(v.type, v.key, v.props, null, m.mode, C), C.ref = oo(m, null, v), C.return = m, C;
        case ti:
          return v = Iu(v, m.mode, C), v.return = m, v;
        case jn:
          var S = v._init;
          return f(m, S(v._payload), C);
      }
      if (fo(v) || eo(v))
        return v = Pr(v, m.mode, C, null), v.return = m, v;
      za(m, v);
    }
    return null;
  }
  function p(m, v, C, S) {
    var b = v !== null ? v.key : null;
    if (typeof C == "string" && C !== "" || typeof C == "number")
      return b !== null ? null : l(m, v, "" + C, S);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Ta:
          return C.key === b ? s(m, v, C, S) : null;
        case ti:
          return C.key === b ? u(m, v, C, S) : null;
        case jn:
          return b = C._init, p(
            m,
            v,
            b(C._payload),
            S
          );
      }
      if (fo(C) || eo(C))
        return b !== null ? null : c(m, v, C, S, null);
      za(m, C);
    }
    return null;
  }
  function g(m, v, C, S, b) {
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return m = m.get(C) || null, l(v, m, "" + S, b);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ta:
          return m = m.get(S.key === null ? C : S.key) || null, s(v, m, S, b);
        case ti:
          return m = m.get(S.key === null ? C : S.key) || null, u(v, m, S, b);
        case jn:
          var I = S._init;
          return g(m, v, C, I(S._payload), b);
      }
      if (fo(S) || eo(S))
        return m = m.get(C) || null, c(v, m, S, b, null);
      za(v, S);
    }
    return null;
  }
  function h(m, v, C, S) {
    for (var b = null, I = null, T = v, E = v = 0, D = null; T !== null && E < C.length; E++) {
      T.index > E ? (D = T, T = null) : D = T.sibling;
      var F = p(m, T, C[E], S);
      if (F === null) {
        T === null && (T = D);
        break;
      }
      e && T && F.alternate === null && t(m, T), v = o(F, v, E), I === null ? b = F : I.sibling = F, I = F, T = D;
    }
    if (E === C.length)
      return n(m, T), Oe && Cr(m, E), b;
    if (T === null) {
      for (; E < C.length; E++)
        T = f(m, C[E], S), T !== null && (v = o(T, v, E), I === null ? b = T : I.sibling = T, I = T);
      return Oe && Cr(m, E), b;
    }
    for (T = r(m, T); E < C.length; E++)
      D = g(T, m, E, C[E], S), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? E : D.key), v = o(D, v, E), I === null ? b = D : I.sibling = D, I = D);
    return e && T.forEach(function(z) {
      return t(m, z);
    }), Oe && Cr(m, E), b;
  }
  function y(m, v, C, S) {
    var b = eo(C);
    if (typeof b != "function")
      throw Error(U(150));
    if (C = b.call(C), C == null)
      throw Error(U(151));
    for (var I = b = null, T = v, E = v = 0, D = null, F = C.next(); T !== null && !F.done; E++, F = C.next()) {
      T.index > E ? (D = T, T = null) : D = T.sibling;
      var z = p(m, T, F.value, S);
      if (z === null) {
        T === null && (T = D);
        break;
      }
      e && T && z.alternate === null && t(m, T), v = o(z, v, E), I === null ? b = z : I.sibling = z, I = z, T = D;
    }
    if (F.done)
      return n(
        m,
        T
      ), Oe && Cr(m, E), b;
    if (T === null) {
      for (; !F.done; E++, F = C.next())
        F = f(m, F.value, S), F !== null && (v = o(F, v, E), I === null ? b = F : I.sibling = F, I = F);
      return Oe && Cr(m, E), b;
    }
    for (T = r(m, T); !F.done; E++, F = C.next())
      F = g(T, m, E, F.value, S), F !== null && (e && F.alternate !== null && T.delete(F.key === null ? E : F.key), v = o(F, v, E), I === null ? b = F : I.sibling = F, I = F);
    return e && T.forEach(function(R) {
      return t(m, R);
    }), Oe && Cr(m, E), b;
  }
  function w(m, v, C, S) {
    if (typeof C == "object" && C !== null && C.type === ni && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Ta:
          e: {
            for (var b = C.key, I = v; I !== null; ) {
              if (I.key === b) {
                if (b = C.type, b === ni) {
                  if (I.tag === 7) {
                    n(m, I.sibling), v = i(I, C.props.children), v.return = m, m = v;
                    break e;
                  }
                } else if (I.elementType === b || typeof b == "object" && b !== null && b.$$typeof === jn && Pv(b) === I.type) {
                  n(m, I.sibling), v = i(I, C.props), v.ref = oo(m, I, C), v.return = m, m = v;
                  break e;
                }
                n(m, I);
                break;
              } else
                t(m, I);
              I = I.sibling;
            }
            C.type === ni ? (v = Pr(C.props.children, m.mode, S, C.key), v.return = m, m = v) : (S = kl(C.type, C.key, C.props, null, m.mode, S), S.ref = oo(m, v, C), S.return = m, m = S);
          }
          return a(m);
        case ti:
          e: {
            for (I = C.key; v !== null; ) {
              if (v.key === I)
                if (v.tag === 4 && v.stateNode.containerInfo === C.containerInfo && v.stateNode.implementation === C.implementation) {
                  n(m, v.sibling), v = i(v, C.children || []), v.return = m, m = v;
                  break e;
                } else {
                  n(m, v);
                  break;
                }
              else
                t(m, v);
              v = v.sibling;
            }
            v = Iu(C, m.mode, S), v.return = m, m = v;
          }
          return a(m);
        case jn:
          return I = C._init, w(m, v, I(C._payload), S);
      }
      if (fo(C))
        return h(m, v, C, S);
      if (eo(C))
        return y(m, v, C, S);
      za(m, C);
    }
    return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, v !== null && v.tag === 6 ? (n(m, v.sibling), v = i(v, C), v.return = m, m = v) : (n(m, v), v = ku(C, m.mode, S), v.return = m, m = v), a(m)) : n(m, v);
  }
  return w;
}
var Ai = y0(!0), C0 = y0(!1), ha = {}, yn = dr(ha), Zo = dr(ha), qo = dr(ha);
function kr(e) {
  if (e === ha)
    throw Error(U(174));
  return e;
}
function Rd(e, t) {
  switch (ke(qo, t), ke(Zo, e), ke(yn, ha), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Lc(t, e);
  }
  Pe(yn), ke(yn, t);
}
function Mi() {
  Pe(yn), Pe(Zo), Pe(qo);
}
function w0(e) {
  kr(qo.current);
  var t = kr(yn.current), n = Lc(t, e.type);
  t !== n && (ke(Zo, e), ke(yn, n));
}
function _d(e) {
  Zo.current === e && (Pe(yn), Pe(Zo));
}
var _e = dr(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Cu = [];
function Ad() {
  for (var e = 0; e < Cu.length; e++)
    Cu[e]._workInProgressVersionPrimary = null;
  Cu.length = 0;
}
var wl = Ln.ReactCurrentDispatcher, wu = Ln.ReactCurrentBatchConfig, _r = 0, Ae = null, Ue = null, Ze = null, Xl = !1, Io = !1, Qo = 0, V2 = 0;
function it() {
  throw Error(U(321));
}
function Md(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!un(e[n], t[n]))
      return !1;
  return !0;
}
function Fd(e, t, n, r, i, o) {
  if (_r = o, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wl.current = e === null || e.memoizedState === null ? W2 : B2, e = n(r, i), Io) {
    o = 0;
    do {
      if (Io = !1, Qo = 0, 25 <= o)
        throw Error(U(301));
      o += 1, Ze = Ue = null, t.updateQueue = null, wl.current = U2, e = n(r, i);
    } while (Io);
  }
  if (wl.current = Jl, t = Ue !== null && Ue.next !== null, _r = 0, Ze = Ue = Ae = null, Xl = !1, t)
    throw Error(U(300));
  return e;
}
function Ld() {
  var e = Qo !== 0;
  return Qo = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ze === null ? Ae.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
}
function qt() {
  if (Ue === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ue.next;
  var t = Ze === null ? Ae.memoizedState : Ze.next;
  if (t !== null)
    Ze = t, Ue = e;
  else {
    if (e === null)
      throw Error(U(310));
    Ue = e, e = { memoizedState: Ue.memoizedState, baseState: Ue.baseState, baseQueue: Ue.baseQueue, queue: Ue.queue, next: null }, Ze === null ? Ae.memoizedState = Ze = e : Ze = Ze.next = e;
  }
  return Ze;
}
function Xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Su(e) {
  var t = qt(), n = t.queue;
  if (n === null)
    throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = Ue, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var l = a = null, s = null, u = o;
    do {
      var c = u.lane;
      if ((_r & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (l = s = f, a = r) : s = s.next = f, Ae.lanes |= c, Ar |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? a = r : s.next = l, un(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Ae.lanes |= o, Ar |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bu(e) {
  var t = qt(), n = t.queue;
  if (n === null)
    throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    un(o, t.memoizedState) || (wt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function S0() {
}
function b0(e, t) {
  var n = Ae, r = qt(), i = t(), o = !un(r.memoizedState, i);
  if (o && (r.memoizedState = i, wt = !0), r = r.queue, Dd(k0.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ze !== null && Ze.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jo(9, E0.bind(null, n, r, i, t), void 0, null), Xe === null)
      throw Error(U(349));
    _r & 30 || x0(n, t, i);
  }
  return i;
}
function x0(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function E0(e, t, n, r) {
  t.value = n, t.getSnapshot = r, I0(t) && N0(e);
}
function k0(e, t, n) {
  return n(function() {
    I0(t) && N0(e);
  });
}
function I0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !un(e, n);
  } catch {
    return !0;
  }
}
function N0(e) {
  var t = An(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function Ov(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xo, lastRenderedState: e }, t.queue = e, e = e.dispatch = j2.bind(null, Ae, e), [t.memoizedState, e];
}
function Jo(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function T0() {
  return qt().memoizedState;
}
function Sl(e, t, n, r) {
  var i = vn();
  Ae.flags |= e, i.memoizedState = Jo(1 | t, n, void 0, r === void 0 ? null : r);
}
function Fs(e, t, n, r) {
  var i = qt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ue !== null) {
    var a = Ue.memoizedState;
    if (o = a.destroy, r !== null && Md(r, a.deps)) {
      i.memoizedState = Jo(t, n, o, r);
      return;
    }
  }
  Ae.flags |= e, i.memoizedState = Jo(1 | t, n, o, r);
}
function Rv(e, t) {
  return Sl(8390656, 8, e, t);
}
function Dd(e, t) {
  return Fs(2048, 8, e, t);
}
function P0(e, t) {
  return Fs(4, 2, e, t);
}
function O0(e, t) {
  return Fs(4, 4, e, t);
}
function R0(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function _0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fs(4, 4, R0.bind(null, t, e), n);
}
function Vd() {
}
function A0(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function M0(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function F0(e, t, n) {
  return _r & 21 ? (un(n, t) || (n = Vg(), Ae.lanes |= n, Ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n);
}
function z2(e, t) {
  var n = Se;
  Se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wu.transition;
  wu.transition = {};
  try {
    e(!1), t();
  } finally {
    Se = n, wu.transition = r;
  }
}
function L0() {
  return qt().memoizedState;
}
function $2(e, t, n) {
  var r = ir(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, D0(e))
    V0(t, n);
  else if (n = v0(e, t, n, r), n !== null) {
    var i = vt();
    sn(n, e, r, i), z0(n, t, r);
  }
}
function j2(e, t, n) {
  var r = ir(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (D0(e))
    V0(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var a = t.lastRenderedState, l = o(a, n);
        if (i.hasEagerState = !0, i.eagerState = l, un(l, a)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Pd(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = v0(e, t, i, r), n !== null && (i = vt(), sn(n, e, r, i), z0(n, t, r));
  }
}
function D0(e) {
  var t = e.alternate;
  return e === Ae || t !== null && t === Ae;
}
function V0(e, t) {
  Io = Xl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function z0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hd(e, n);
  }
}
var Jl = { readContext: Zt, useCallback: it, useContext: it, useEffect: it, useImperativeHandle: it, useInsertionEffect: it, useLayoutEffect: it, useMemo: it, useReducer: it, useRef: it, useState: it, useDebugValue: it, useDeferredValue: it, useTransition: it, useMutableSource: it, useSyncExternalStore: it, useId: it, unstable_isNewReconciler: !1 }, W2 = { readContext: Zt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Zt, useEffect: Rv, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(
    4194308,
    4,
    R0.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Sl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Sl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $2.bind(null, Ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ov, useDebugValue: Vd, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = Ov(!1), t = e[0];
  return e = z2.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ae, i = vn();
  if (Oe) {
    if (n === void 0)
      throw Error(U(407));
    n = n();
  } else {
    if (n = t(), Xe === null)
      throw Error(U(349));
    _r & 30 || x0(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Rv(k0.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Jo(9, E0.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Xe.identifierPrefix;
  if (Oe) {
    var n = Nn, r = In;
    n = (r & ~(1 << 32 - ln(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = V2++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, B2 = {
  readContext: Zt,
  useCallback: A0,
  useContext: Zt,
  useEffect: Dd,
  useImperativeHandle: _0,
  useInsertionEffect: P0,
  useLayoutEffect: O0,
  useMemo: M0,
  useReducer: Su,
  useRef: T0,
  useState: function() {
    return Su(Xo);
  },
  useDebugValue: Vd,
  useDeferredValue: function(e) {
    var t = qt();
    return F0(t, Ue.memoizedState, e);
  },
  useTransition: function() {
    var e = Su(Xo)[0], t = qt().memoizedState;
    return [e, t];
  },
  useMutableSource: S0,
  useSyncExternalStore: b0,
  useId: L0,
  unstable_isNewReconciler: !1
}, U2 = { readContext: Zt, useCallback: A0, useContext: Zt, useEffect: Dd, useImperativeHandle: _0, useInsertionEffect: P0, useLayoutEffect: O0, useMemo: M0, useReducer: bu, useRef: T0, useState: function() {
  return bu(Xo);
}, useDebugValue: Vd, useDeferredValue: function(e) {
  var t = qt();
  return Ue === null ? t.memoizedState = e : F0(t, Ue.memoizedState, e);
}, useTransition: function() {
  var e = bu(Xo)[0], t = qt().memoizedState;
  return [e, t];
}, useMutableSource: S0, useSyncExternalStore: b0, useId: L0, unstable_isNewReconciler: !1 };
function Fi(e, t) {
  try {
    var n = "", r = t;
    do
      n += yb(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function xu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function af(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var H2 = typeof WeakMap == "function" ? WeakMap : Map;
function $0(e, t, n) {
  n = Tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ts || (ts = !0, mf = r), af(e, t);
  }, n;
}
function j0(e, t, n) {
  n = Tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      af(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    af(e, t), typeof r != "function" && (rr === null ? rr = /* @__PURE__ */ new Set([this]) : rr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function _v(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H2();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ox.bind(null, e, t, n), t.then(e, e));
}
function Av(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mv(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1), t.tag = 2, nr(n, t, 1))), n.lanes |= 1), e);
}
var G2 = Ln.ReactCurrentOwner, wt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? C0(t, null, n, r) : Ai(t, e.child, n, r);
}
function Fv(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return xi(t, i), r = Fd(e, t, n, r, o, i), n = Ld(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mn(e, t, i)) : (Oe && n && xd(t), t.flags |= 1, ct(e, t, r, i), t.child);
}
function Lv(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Gd(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, W0(e, t, o, r, i)) : (e = kl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ho, n(a, r) && e.ref === t.ref)
      return Mn(e, t, i);
  }
  return t.flags |= 1, e = or(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function W0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ho(o, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (wt = !0);
      else
        return t.lanes = e.lanes, Mn(e, t, i);
  }
  return lf(e, t, n, r, i);
}
function B0(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(di, Tt), Tt |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ke(di, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ke(di, Tt), Tt |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ke(di, Tt), Tt |= r;
  return ct(e, t, i, n), t.child;
}
function U0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lf(e, t, n, r, i) {
  var o = bt(n) ? Or : st.current;
  return o = Ri(t, o), xi(t, i), n = Fd(e, t, n, r, o, i), r = Ld(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mn(e, t, i)) : (Oe && r && xd(t), t.flags |= 1, ct(e, t, n, i), t.child);
}
function Dv(e, t, n, r, i) {
  if (bt(n)) {
    var o = !0;
    Hl(t);
  } else
    o = !1;
  if (xi(t, i), t.stateNode === null)
    bl(e, t), g0(t, n, r), of(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, l = t.memoizedProps;
    a.props = l;
    var s = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Zt(u) : (u = bt(n) ? Or : st.current, u = Ri(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || s !== u) && Tv(t, a, r, u), Wn = !1;
    var p = t.memoizedState;
    a.state = p, ql(t, r, a, i), s = t.memoizedState, l !== r || p !== s || St.current || Wn ? (typeof c == "function" && (rf(t, n, c, r), s = t.memoizedState), (l = Wn || Nv(t, n, l, r, p, s, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = u, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, h0(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : nn(t.type, l), a.props = u, f = t.pendingProps, p = a.context, s = n.contextType, typeof s == "object" && s !== null ? s = Zt(s) : (s = bt(n) ? Or : st.current, s = Ri(t, s));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== f || p !== s) && Tv(t, a, r, s), Wn = !1, p = t.memoizedState, a.state = p, ql(t, r, a, i);
    var h = t.memoizedState;
    l !== f || p !== h || St.current || Wn ? (typeof g == "function" && (rf(t, n, g, r), h = t.memoizedState), (u = Wn || Nv(t, n, u, r, p, h, s) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, h, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, h, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = s, r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return sf(e, t, n, r, o, i);
}
function sf(e, t, n, r, i, o) {
  U0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return i && bv(t, n, !1), Mn(e, t, o);
  r = t.stateNode, G2.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ai(t, e.child, null, o), t.child = Ai(t, null, l, o)) : ct(e, t, l, o), t.memoizedState = r.state, i && bv(t, n, !0), t.child;
}
function H0(e) {
  var t = e.stateNode;
  t.pendingContext ? Sv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sv(e, t.context, !1), Rd(e, t.containerInfo);
}
function Vv(e, t, n, r, i) {
  return _i(), kd(i), t.flags |= 256, ct(e, t, n, r), t.child;
}
var uf = { dehydrated: null, treeContext: null, retryLane: 0 };
function cf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function G0(e, t, n) {
  var r = t.pendingProps, i = _e.current, o = !1, a = (t.flags & 128) !== 0, l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ke(_e, i & 1), e === null)
    return tf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Vs(a, r, 0, null), e = Pr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = cf(n), t.memoizedState = uf, e) : zd(t, a));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null))
    return K2(e, t, a, r, l, i, n);
  if (o) {
    o = r.fallback, a = t.mode, i = e.child, l = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = or(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = or(l, o) : (o = Pr(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? cf(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = uf, r;
  }
  return o = e.child, e = o.sibling, r = or(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function zd(e, t) {
  return t = Vs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $a(e, t, n, r) {
  return r !== null && kd(r), Ai(t, e.child, null, n), e = zd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function K2(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = xu(Error(U(422))), $a(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Vs({ mode: "visible", children: r.children }, i, 0, null), o = Pr(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ai(t, e.child, null, a), t.child.memoizedState = cf(a), t.memoizedState = uf, o);
  if (!(t.mode & 1))
    return $a(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, o = Error(U(419)), r = xu(o, r, void 0), $a(e, t, a, r);
  }
  if (l = (a & e.childLanes) !== 0, wt || l) {
    if (r = Xe, r !== null) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, An(e, i), sn(r, e, i, -1));
    }
    return Hd(), r = xu(Error(U(421))), $a(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ax.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ot = tr(i.nextSibling), Rt = t, Oe = !0, on = null, e !== null && (Bt[Ut++] = In, Bt[Ut++] = Nn, Bt[Ut++] = Rr, In = e.id, Nn = e.overflow, Rr = t), t = zd(t, r.children), t.flags |= 4096, t);
}
function zv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nf(e.return, t, n);
}
function Eu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function K0(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ct(e, t, r.children, n), r = _e.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zv(e, n, t);
          else if (e.tag === 19)
            zv(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ke(_e, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Ql(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Eu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ql(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Eu(t, !0, n, null, o);
        break;
      case "together":
        Eu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Mn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ar |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(U(153));
  if (t.child !== null) {
    for (e = t.child, n = or(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = or(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Y2(e, t, n) {
  switch (t.tag) {
    case 3:
      H0(t), _i();
      break;
    case 5:
      w0(t);
      break;
    case 1:
      bt(t.type) && Hl(t);
      break;
    case 4:
      Rd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ke(Yl, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ke(_e, _e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? G0(e, t, n) : (ke(_e, _e.current & 1), e = Mn(e, t, n), e !== null ? e.sibling : null);
      ke(_e, _e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return K0(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ke(_e, _e.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, B0(e, t, n);
  }
  return Mn(e, t, n);
}
var Y0, ff, Z0, q0;
Y0 = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ff = function() {
};
Z0 = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, kr(yn.current);
    var o = null;
    switch (n) {
      case "input":
        i = _c(e, i), r = _c(e, r), o = [];
        break;
      case "select":
        i = Me({}, i, { value: void 0 }), r = Me({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Fc(e, i), r = Fc(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Bl);
    }
    Dc(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (a in l)
            l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && s !== l && (s != null || l != null))
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in s)
              s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = s;
        else
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vo.hasOwnProperty(u) ? (s != null && u === "onScroll" && Ne("scroll", e), o || l === s || (o = [])) : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
q0 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ao(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ot(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Z2(e, t, n) {
  var r = t.pendingProps;
  switch (Ed(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ot(t), null;
    case 1:
      return bt(t.type) && Ul(), ot(t), null;
    case 3:
      return r = t.stateNode, Mi(), Pe(St), Pe(st), Ad(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Va(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, on !== null && (Cf(on), on = null))), ff(e, t), ot(t), null;
    case 5:
      _d(t);
      var i = kr(qo.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Z0(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(U(166));
          return ot(t), null;
        }
        if (e = kr(yn.current), Va(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[hn] = t, r[Yo] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ne("cancel", r), Ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vo.length; i++)
                Ne(vo[i], r);
              break;
            case "source":
              Ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ne(
                "error",
                r
              ), Ne("load", r);
              break;
            case "details":
              Ne("toggle", r);
              break;
            case "input":
              Yp(r, o), Ne("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Ne("invalid", r);
              break;
            case "textarea":
              qp(r, o), Ne("invalid", r);
          }
          Dc(n, o), i = null;
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Da(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Da(
                r.textContent,
                l,
                e
              ), i = ["children", "" + l]) : Vo.hasOwnProperty(a) && l != null && a === "onScroll" && Ne("scroll", r);
            }
          switch (n) {
            case "input":
              Pa(r), Zp(r, o, !0);
              break;
            case "textarea":
              Pa(r), Qp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bl);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[hn] = t, e[Yo] = r, Y0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Vc(n, r), n) {
              case "dialog":
                Ne("cancel", e), Ne("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < vo.length; i++)
                  Ne(vo[i], e);
                i = r;
                break;
              case "source":
                Ne("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Ne(
                  "error",
                  e
                ), Ne("load", e), i = r;
                break;
              case "details":
                Ne("toggle", e), i = r;
                break;
              case "input":
                Yp(e, r), i = _c(e, r), Ne("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Me({}, r, { value: void 0 }), Ne("invalid", e);
                break;
              case "textarea":
                qp(e, r), i = Fc(e, r), Ne("invalid", e);
                break;
              default:
                i = r;
            }
            Dc(n, i), l = i;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === "style" ? Ig(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Eg(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && zo(e, s) : typeof s == "number" && zo(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vo.hasOwnProperty(o) ? s != null && o === "onScroll" && Ne("scroll", e) : s != null && ud(e, o, s, a));
              }
            switch (n) {
              case "input":
                Pa(e), Zp(e, r, !1);
                break;
              case "textarea":
                Pa(e), Qp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Ci(e, !!r.multiple, o, !1) : r.defaultValue != null && Ci(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Bl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ot(t), null;
    case 6:
      if (e && t.stateNode != null)
        q0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(U(166));
        if (n = kr(qo.current), kr(yn.current), Va(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[hn] = t, (o = r.nodeValue !== n) && (e = Rt, e !== null))
            switch (e.tag) {
              case 3:
                Da(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Da(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[hn] = t, t.stateNode = r;
      }
      return ot(t), null;
    case 13:
      if (Pe(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Oe && Ot !== null && t.mode & 1 && !(t.flags & 128))
          p0(), _i(), t.flags |= 98560, o = !1;
        else if (o = Va(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(U(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(U(317));
            o[hn] = t;
          } else
            _i(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ot(t), o = !1;
        } else
          on !== null && (Cf(on), on = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? He === 0 && (He = 3) : Hd())), t.updateQueue !== null && (t.flags |= 4), ot(t), null);
    case 4:
      return Mi(), ff(e, t), e === null && Go(t.stateNode.containerInfo), ot(t), null;
    case 10:
      return Td(t.type._context), ot(t), null;
    case 17:
      return bt(t.type) && Ul(), ot(t), null;
    case 19:
      if (Pe(_e), o = t.memoizedState, o === null)
        return ot(t), null;
      if (r = (t.flags & 128) !== 0, a = o.rendering, a === null)
        if (r)
          ao(o, !1);
        else {
          if (He !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Ql(e), a !== null) {
                for (t.flags |= 128, ao(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ke(_e, _e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ze() > Li && (t.flags |= 128, r = !0, ao(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ql(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ao(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !Oe)
              return ot(t), null;
          } else
            2 * ze() - o.renderingStartTime > Li && n !== 1073741824 && (t.flags |= 128, r = !0, ao(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ze(), t.sibling = null, n = _e.current, ke(_e, r ? n & 1 | 2 : n & 1), t) : (ot(t), null);
    case 22:
    case 23:
      return Ud(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function q2(e, t) {
  switch (Ed(t), t.tag) {
    case 1:
      return bt(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Mi(), Pe(St), Pe(st), Ad(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _d(t), null;
    case 13:
      if (Pe(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(U(340));
        _i();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(_e), null;
    case 4:
      return Mi(), null;
    case 10:
      return Td(t.type._context), null;
    case 22:
    case 23:
      return Ud(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ja = !1, at = !1, Q2 = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function fi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Le(e, t, r);
      }
    else
      n.current = null;
}
function df(e, t, n) {
  try {
    n();
  } catch (r) {
    Le(e, t, r);
  }
}
var $v = !1;
function X2(e, t) {
  if (Yc = $l, e = e0(), bd(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, l = -1, s = -1, u = 0, c = 0, f = e, p = null;
          t:
            for (; ; ) {
              for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = a + i), f !== o || r !== 0 && f.nodeType !== 3 || (s = a + r), f.nodeType === 3 && (a += f.nodeValue.length), (g = f.firstChild) !== null; )
                p = f, f = g;
              for (; ; ) {
                if (f === e)
                  break t;
                if (p === n && ++u === i && (l = a), p === o && ++c === r && (s = a), (g = f.nextSibling) !== null)
                  break;
                f = p, p = f.parentNode;
              }
              f = g;
            }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Zc = { focusedElem: e, selectionRange: n }, $l = !1, Z = t; Z !== null; )
    if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, Z = e;
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var y = h.memoizedProps, w = h.memoizedState, m = t.stateNode, v = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : nn(t.type, y), w);
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var C = t.stateNode.containerInfo;
                C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (S) {
          Le(t, t.return, S);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Z = e;
          break;
        }
        Z = t.return;
      }
  return h = $v, $v = !1, h;
}
function No(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && df(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ls(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Q0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Q0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[hn], delete t[Yo], delete t[Xc], delete t[M2], delete t[F2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function X0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jv(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || X0(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function vf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (vf(e, t, n), e = e.sibling; e !== null; )
      vf(e, t, n), e = e.sibling;
}
function hf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (hf(e, t, n), e = e.sibling; e !== null; )
      hf(e, t, n), e = e.sibling;
}
var et = null, rn = !1;
function Vn(e, t, n) {
  for (n = n.child; n !== null; )
    J0(e, t, n), n = n.sibling;
}
function J0(e, t, n) {
  if (gn && typeof gn.onCommitFiberUnmount == "function")
    try {
      gn.onCommitFiberUnmount(Ts, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      at || fi(n, t);
    case 6:
      var r = et, i = rn;
      et = null, Vn(e, t, n), et = r, rn = i, et !== null && (rn ? (e = et, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null && (rn ? (e = et, n = n.stateNode, e.nodeType === 8 ? gu(e.parentNode, n) : e.nodeType === 1 && gu(e, n), Bo(e)) : gu(et, n.stateNode));
      break;
    case 4:
      r = et, i = rn, et = n.stateNode.containerInfo, rn = !0, Vn(e, t, n), et = r, rn = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!at && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && df(n, t, a), i = i.next;
        } while (i !== r);
      }
      Vn(e, t, n);
      break;
    case 1:
      if (!at && (fi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          Le(n, t, l);
        }
      Vn(e, t, n);
      break;
    case 21:
      Vn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (at = (r = at) || n.memoizedState !== null, Vn(e, t, n), at = r) : Vn(e, t, n);
      break;
    default:
      Vn(e, t, n);
  }
}
function Wv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Q2()), t.forEach(function(r) {
      var i = lx.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, a = t, l = a;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                et = l.stateNode, rn = !1;
                break e;
              case 3:
                et = l.stateNode.containerInfo, rn = !0;
                break e;
              case 4:
                et = l.stateNode.containerInfo, rn = !0;
                break e;
            }
            l = l.return;
          }
        if (et === null)
          throw Error(U(160));
        J0(o, a, i), et = null, rn = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (u) {
        Le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ey(t, e), t = t.sibling;
}
function ey(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xt(t, e), pn(e), r & 4) {
        try {
          No(3, e, e.return), Ls(3, e);
        } catch (y) {
          Le(e, e.return, y);
        }
        try {
          No(5, e, e.return);
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      break;
    case 1:
      Xt(t, e), pn(e), r & 512 && n !== null && fi(n, n.return);
      break;
    case 5:
      if (Xt(t, e), pn(e), r & 512 && n !== null && fi(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          zo(i, "");
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, l = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && Sg(i, o), Vc(l, a);
            var u = Vc(l, o);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a], f = s[a + 1];
              c === "style" ? Ig(i, f) : c === "dangerouslySetInnerHTML" ? Eg(i, f) : c === "children" ? zo(i, f) : ud(i, c, f, u);
            }
            switch (l) {
              case "input":
                Ac(i, o);
                break;
              case "textarea":
                bg(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Ci(i, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Ci(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ci(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Yo] = o;
          } catch (y) {
            Le(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Xt(t, e), pn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(U(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Xt(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Bo(t.containerInfo);
        } catch (y) {
          Le(e, e.return, y);
        }
      break;
    case 4:
      Xt(t, e), pn(e);
      break;
    case 13:
      Xt(t, e), pn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Wd = ze())), r & 4 && Wv(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (at = (u = at) || c, Xt(t, e), at = u) : Xt(t, e), pn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (Z = e, c = e.child; c !== null; ) {
            for (f = Z = c; Z !== null; ) {
              switch (p = Z, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, p, p.return);
                  break;
                case 1:
                  fi(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                    } catch (y) {
                      Le(r, n, y);
                    }
                  }
                  break;
                case 5:
                  fi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Uv(f);
                    continue;
                  }
              }
              g !== null ? (g.return = p, Z = g) : Uv(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, s = f.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = kg("display", a));
                } catch (y) {
                  Le(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (y) {
                  Le(e, e.return, y);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Xt(t, e), pn(e), r & 4 && Wv(e);
      break;
    case 21:
      break;
    default:
      Xt(
        t,
        e
      ), pn(e);
  }
}
function pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (X0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zo(i, ""), r.flags &= -33);
          var o = jv(e);
          hf(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, l = jv(e);
          vf(e, l, a);
          break;
        default:
          throw Error(U(161));
      }
    } catch (s) {
      Le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function J2(e, t, n) {
  Z = e, ty(e);
}
function ty(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var i = Z, o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ja;
      if (!a) {
        var l = i.alternate, s = l !== null && l.memoizedState !== null || at;
        l = ja;
        var u = at;
        if (ja = a, (at = s) && !u)
          for (Z = i; Z !== null; )
            a = Z, s = a.child, a.tag === 22 && a.memoizedState !== null ? Hv(i) : s !== null ? (s.return = a, Z = s) : Hv(i);
        for (; o !== null; )
          Z = o, ty(o), o = o.sibling;
        Z = i, ja = l, at = u;
      }
      Bv(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, Z = o) : Bv(e);
  }
}
function Bv(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              at || Ls(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !at)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : nn(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Iv(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Iv(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Bo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        at || t.flags & 512 && pf(t);
      } catch (p) {
        Le(t, t.return, p);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Uv(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Hv(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ls(4, t);
          } catch (s) {
            Le(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Le(t, i, s);
            }
          }
          var o = t.return;
          try {
            pf(t);
          } catch (s) {
            Le(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pf(t);
          } catch (s) {
            Le(t, a, s);
          }
      }
    } catch (s) {
      Le(t, t.return, s);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, Z = l;
      break;
    }
    Z = t.return;
  }
}
var ex = Math.ceil, es = Ln.ReactCurrentDispatcher, $d = Ln.ReactCurrentOwner, Kt = Ln.ReactCurrentBatchConfig, ge = 0, Xe = null, je = null, tt = 0, Tt = 0, di = dr(0), He = 0, ea = null, Ar = 0, Ds = 0, jd = 0, To = null, Ct = null, Wd = 0, Li = 1 / 0, xn = null, ts = !1, mf = null, rr = null, Wa = !1, Yn = null, ns = 0, Po = 0, gf = null, xl = -1, El = 0;
function vt() {
  return ge & 6 ? ze() : xl !== -1 ? xl : xl = ze();
}
function ir(e) {
  return e.mode & 1 ? ge & 2 && tt !== 0 ? tt & -tt : D2.transition !== null ? (El === 0 && (El = Vg()), El) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hg(e.type)), e) : 1;
}
function sn(e, t, n, r) {
  if (50 < Po)
    throw Po = 0, gf = null, Error(U(185));
  da(e, n, r), (!(ge & 2) || e !== Xe) && (e === Xe && (!(ge & 2) && (Ds |= n), He === 4 && Gn(e, tt)), xt(e, r), n === 1 && ge === 0 && !(t.mode & 1) && (Li = ze() + 500, As && pr()));
}
function xt(e, t) {
  var n = e.callbackNode;
  Db(e, t);
  var r = zl(e, e === Xe ? tt : 0);
  if (r === 0)
    n !== null && ev(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ev(n), t === 1)
      e.tag === 0 ? L2(Gv.bind(null, e)) : c0(Gv.bind(null, e)), _2(function() {
        !(ge & 6) && pr();
      }), n = null;
    else {
      switch (zg(r)) {
        case 1:
          n = vd;
          break;
        case 4:
          n = Lg;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = Dg;
          break;
        default:
          n = Vl;
      }
      n = uy(n, ny.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ny(e, t) {
  if (xl = -1, El = 0, ge & 6)
    throw Error(U(327));
  var n = e.callbackNode;
  if (Ei() && e.callbackNode !== n)
    return null;
  var r = zl(e, e === Xe ? tt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = rs(e, r);
  else {
    t = r;
    var i = ge;
    ge |= 2;
    var o = iy();
    (Xe !== e || tt !== t) && (xn = null, Li = ze() + 500, Tr(e, t));
    do
      try {
        rx();
        break;
      } catch (l) {
        ry(e, l);
      }
    while (1);
    Nd(), es.current = o, ge = i, je !== null ? t = 0 : (Xe = null, tt = 0, t = He);
  }
  if (t !== 0) {
    if (t === 2 && (i = Bc(e), i !== 0 && (r = i, t = yf(e, i))), t === 1)
      throw n = ea, Tr(e, 0), Gn(e, r), xt(e, ze()), n;
    if (t === 6)
      Gn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !tx(i) && (t = rs(e, r), t === 2 && (o = Bc(e), o !== 0 && (r = o, t = yf(e, o))), t === 1))
        throw n = ea, Tr(e, 0), Gn(e, r), xt(e, ze()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          wr(e, Ct, xn);
          break;
        case 3:
          if (Gn(e, r), (r & 130023424) === r && (t = Wd + 500 - ze(), 10 < t)) {
            if (zl(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              vt(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Qc(wr.bind(null, e, Ct, xn), t);
            break;
          }
          wr(e, Ct, xn);
          break;
        case 4:
          if (Gn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - ln(r);
            o = 1 << a, a = t[a], a > i && (i = a), r &= ~o;
          }
          if (r = i, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ex(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qc(wr.bind(null, e, Ct, xn), r);
            break;
          }
          wr(e, Ct, xn);
          break;
        case 5:
          wr(e, Ct, xn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return xt(e, ze()), e.callbackNode === n ? ny.bind(null, e) : null;
}
function yf(e, t) {
  var n = To;
  return e.current.memoizedState.isDehydrated && (Tr(e, t).flags |= 256), e = rs(e, t), e !== 2 && (t = Ct, Ct = n, t !== null && Cf(t)), e;
}
function Cf(e) {
  Ct === null ? Ct = e : Ct.push.apply(Ct, e);
}
function tx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!un(o(), i))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Gn(e, t) {
  for (t &= ~jd, t &= ~Ds, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ln(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gv(e) {
  if (ge & 6)
    throw Error(U(327));
  Ei();
  var t = zl(e, 0);
  if (!(t & 1))
    return xt(e, ze()), null;
  var n = rs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bc(e);
    r !== 0 && (t = r, n = yf(e, r));
  }
  if (n === 1)
    throw n = ea, Tr(e, 0), Gn(e, t), xt(e, ze()), n;
  if (n === 6)
    throw Error(U(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wr(e, Ct, xn), xt(e, ze()), null;
}
function Bd(e, t) {
  var n = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    ge = n, ge === 0 && (Li = ze() + 500, As && pr());
  }
}
function Mr(e) {
  Yn !== null && Yn.tag === 0 && !(ge & 6) && Ei();
  var t = ge;
  ge |= 1;
  var n = Kt.transition, r = Se;
  try {
    if (Kt.transition = null, Se = 1, e)
      return e();
  } finally {
    Se = r, Kt.transition = n, ge = t, !(ge & 6) && pr();
  }
}
function Ud() {
  Tt = di.current, Pe(di);
}
function Tr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, R2(n)), je !== null)
    for (n = je.return; n !== null; ) {
      var r = n;
      switch (Ed(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ul();
          break;
        case 3:
          Mi(), Pe(St), Pe(st), Ad();
          break;
        case 5:
          _d(r);
          break;
        case 4:
          Mi();
          break;
        case 13:
          Pe(_e);
          break;
        case 19:
          Pe(_e);
          break;
        case 10:
          Td(r.type._context);
          break;
        case 22:
        case 23:
          Ud();
      }
      n = n.return;
    }
  if (Xe = e, je = e = or(e.current, null), tt = Tt = t, He = 0, ea = null, jd = Ds = Ar = 0, Ct = To = null, Er !== null) {
    for (t = 0; t < Er.length; t++)
      if (n = Er[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var a = o.next;
          o.next = i, r.next = a;
        }
        n.pending = r;
      }
    Er = null;
  }
  return e;
}
function ry(e, t) {
  do {
    var n = je;
    try {
      if (Nd(), wl.current = Jl, Xl) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Xl = !1;
      }
      if (_r = 0, Ze = Ue = Ae = null, Io = !1, Qo = 0, $d.current = null, n === null || n.return === null) {
        He = 1, ea = t, je = null;
        break;
      }
      e: {
        var o = e, a = n.return, l = n, s = t;
        if (t = tt, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = Av(a);
          if (g !== null) {
            g.flags &= -257, Mv(g, a, l, o, t), g.mode & 1 && _v(o, u, t), t = g, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _v(o, u, t), Hd();
              break e;
            }
            s = Error(U(426));
          }
        } else if (Oe && l.mode & 1) {
          var w = Av(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Mv(w, a, l, o, t), kd(Fi(s, l));
            break e;
          }
        }
        o = s = Fi(s, l), He !== 4 && (He = 2), To === null ? To = [o] : To.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = $0(o, s, t);
              kv(o, m);
              break e;
            case 1:
              l = s;
              var v = o.type, C = o.stateNode;
              if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (rr === null || !rr.has(C)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = j0(o, l, t);
                kv(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ay(n);
    } catch (b) {
      t = b, je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function iy() {
  var e = es.current;
  return es.current = Jl, e === null ? Jl : e;
}
function Hd() {
  (He === 0 || He === 3 || He === 2) && (He = 4), Xe === null || !(Ar & 268435455) && !(Ds & 268435455) || Gn(Xe, tt);
}
function rs(e, t) {
  var n = ge;
  ge |= 2;
  var r = iy();
  (Xe !== e || tt !== t) && (xn = null, Tr(e, t));
  do
    try {
      nx();
      break;
    } catch (i) {
      ry(e, i);
    }
  while (1);
  if (Nd(), ge = n, es.current = r, je !== null)
    throw Error(U(261));
  return Xe = null, tt = 0, He;
}
function nx() {
  for (; je !== null; )
    oy(je);
}
function rx() {
  for (; je !== null && !Tb(); )
    oy(je);
}
function oy(e) {
  var t = sy(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? ay(e) : je = t, $d.current = null;
}
function ay(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = q2(n, t), n !== null) {
        n.flags &= 32767, je = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        He = 6, je = null;
        return;
      }
    } else if (n = Z2(n, t, Tt), n !== null) {
      je = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  He === 0 && (He = 5);
}
function wr(e, t, n) {
  var r = Se, i = Kt.transition;
  try {
    Kt.transition = null, Se = 1, ix(e, t, n, r);
  } finally {
    Kt.transition = i, Se = r;
  }
  return null;
}
function ix(e, t, n, r) {
  do
    Ei();
  while (Yn !== null);
  if (ge & 6)
    throw Error(U(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(U(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Vb(e, o), e === Xe && (je = Xe = null, tt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Wa || (Wa = !0, uy(Vl, function() {
    return Ei(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Kt.transition, Kt.transition = null;
    var a = Se;
    Se = 1;
    var l = ge;
    ge |= 4, $d.current = null, X2(e, n), ey(n, e), E2(Zc), $l = !!Yc, Zc = Yc = null, e.current = n, J2(n), Pb(), ge = l, Se = a, Kt.transition = o;
  } else
    e.current = n;
  if (Wa && (Wa = !1, Yn = e, ns = i), o = e.pendingLanes, o === 0 && (rr = null), _b(n.stateNode), xt(e, ze()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ts)
    throw ts = !1, e = mf, mf = null, e;
  return ns & 1 && e.tag !== 0 && Ei(), o = e.pendingLanes, o & 1 ? e === gf ? Po++ : (Po = 0, gf = e) : Po = 0, pr(), null;
}
function Ei() {
  if (Yn !== null) {
    var e = zg(ns), t = Kt.transition, n = Se;
    try {
      if (Kt.transition = null, Se = 16 > e ? 16 : e, Yn === null)
        var r = !1;
      else {
        if (e = Yn, Yn = null, ns = 0, ge & 6)
          throw Error(U(331));
        var i = ge;
        for (ge |= 4, Z = e.current; Z !== null; ) {
          var o = Z, a = o.child;
          if (Z.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, Z = f;
                  else
                    for (; Z !== null; ) {
                      c = Z;
                      var p = c.sibling, g = c.return;
                      if (Q0(c), c === u) {
                        Z = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, Z = p;
                        break;
                      }
                      Z = g;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var w = y.sibling;
                    y.sibling = null, y = w;
                  } while (y !== null);
                }
              }
              Z = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null)
            a.return = o, Z = a;
          else
            e:
              for (; Z !== null; ) {
                if (o = Z, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  m.return = o.return, Z = m;
                  break e;
                }
                Z = o.return;
              }
        }
        var v = e.current;
        for (Z = v; Z !== null; ) {
          a = Z;
          var C = a.child;
          if (a.subtreeFlags & 2064 && C !== null)
            C.return = a, Z = C;
          else
            e:
              for (a = v; Z !== null; ) {
                if (l = Z, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(9, l);
                    }
                  } catch (b) {
                    Le(l, l.return, b);
                  }
                if (l === a) {
                  Z = null;
                  break e;
                }
                var S = l.sibling;
                if (S !== null) {
                  S.return = l.return, Z = S;
                  break e;
                }
                Z = l.return;
              }
        }
        if (ge = i, pr(), gn && typeof gn.onPostCommitFiberRoot == "function")
          try {
            gn.onPostCommitFiberRoot(Ts, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Se = n, Kt.transition = t;
    }
  }
  return !1;
}
function Kv(e, t, n) {
  t = Fi(n, t), t = $0(e, t, 1), e = nr(e, t, 1), t = vt(), e !== null && (da(e, 1, t), xt(e, t));
}
function Le(e, t, n) {
  if (e.tag === 3)
    Kv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rr === null || !rr.has(r))) {
          e = Fi(n, e), e = j0(t, e, 1), t = nr(t, e, 1), e = vt(), t !== null && (da(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ox(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (tt & n) === n && (He === 4 || He === 3 && (tt & 130023424) === tt && 500 > ze() - Wd ? Tr(e, 0) : jd |= n), xt(e, t);
}
function ly(e, t) {
  t === 0 && (e.mode & 1 ? (t = _a, _a <<= 1, !(_a & 130023424) && (_a = 4194304)) : t = 1);
  var n = vt();
  e = An(e, t), e !== null && (da(e, t, n), xt(e, n));
}
function ax(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ly(e, n);
}
function lx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), ly(e, n);
}
var sy;
sy = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || St.current)
      wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return wt = !1, Y2(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else
    wt = !1, Oe && t.flags & 1048576 && f0(t, Kl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      bl(e, t), e = t.pendingProps;
      var i = Ri(t, st.current);
      xi(t, n), i = Fd(null, t, r, e, i, n);
      var o = Ld();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(r) ? (o = !0, Hl(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Od(t), i.updater = Ms, t.stateNode = i, i._reactInternals = t, of(t, r, e, n), t = sf(null, t, r, !0, o, n)) : (t.tag = 0, Oe && o && xd(t), ct(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (bl(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = ux(r), e = nn(r, e), i) {
          case 0:
            t = lf(null, t, r, e, n);
            break e;
          case 1:
            t = Dv(null, t, r, e, n);
            break e;
          case 11:
            t = Fv(null, t, r, e, n);
            break e;
          case 14:
            t = Lv(null, t, r, nn(r.type, e), n);
            break e;
        }
        throw Error(U(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), lf(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), Dv(e, t, r, i, n);
    case 3:
      e: {
        if (H0(t), e === null)
          throw Error(U(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, h0(e, t), ql(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = Fi(Error(U(423)), t), t = Vv(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = Fi(Error(U(424)), t), t = Vv(e, t, r, n, i);
            break e;
          } else
            for (Ot = tr(t.stateNode.containerInfo.firstChild), Rt = t, Oe = !0, on = null, n = C0(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_i(), r === i) {
            t = Mn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return w0(t), e === null && tf(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, qc(r, i) ? a = null : o !== null && qc(r, o) && (t.flags |= 32), U0(e, t), ct(e, t, a, n), t.child;
    case 6:
      return e === null && tf(t), null;
    case 13:
      return G0(e, t, n);
    case 4:
      return Rd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ai(t, null, r, n) : ct(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), Fv(e, t, r, i, n);
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, ke(Yl, r._currentValue), r._currentValue = a, o !== null)
          if (un(o.value, a)) {
            if (o.children === i.children && !St.current) {
              t = Mn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Tn(-1, n & -n), s.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), nf(
                      o.return,
                      n,
                      t
                    ), l.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (a = o.return, a === null)
                  throw Error(U(341));
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), nf(a, n, t), a = o.sibling;
              } else
                a = o.child;
              if (a !== null)
                a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (o = a.sibling, o !== null) {
                    o.return = a.return, a = o;
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        ct(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, xi(t, n), i = Zt(i), r = r(i), t.flags |= 1, ct(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = nn(r, t.pendingProps), i = nn(r.type, i), Lv(e, t, r, i, n);
    case 15:
      return W0(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), bl(e, t), t.tag = 1, bt(r) ? (e = !0, Hl(t)) : e = !1, xi(t, n), g0(t, r, i), of(t, r, i, n), sf(null, t, r, !0, e, n);
    case 19:
      return K0(e, t, n);
    case 22:
      return B0(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function uy(e, t) {
  return Fg(e, t);
}
function sx(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ht(e, t, n, r) {
  return new sx(e, t, n, r);
}
function Gd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ux(e) {
  if (typeof e == "function")
    return Gd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fd)
      return 11;
    if (e === dd)
      return 14;
  }
  return 2;
}
function or(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function kl(e, t, n, r, i, o) {
  var a = 2;
  if (r = e, typeof e == "function")
    Gd(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case ni:
          return Pr(n.children, i, o, t);
        case cd:
          a = 8, i |= 8;
          break;
        case Tc:
          return e = Ht(12, n, t, i | 2), e.elementType = Tc, e.lanes = o, e;
        case Pc:
          return e = Ht(13, n, t, i), e.elementType = Pc, e.lanes = o, e;
        case Oc:
          return e = Ht(19, n, t, i), e.elementType = Oc, e.lanes = o, e;
        case yg:
          return Vs(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case mg:
                a = 10;
                break e;
              case gg:
                a = 9;
                break e;
              case fd:
                a = 11;
                break e;
              case dd:
                a = 14;
                break e;
              case jn:
                a = 16, r = null;
                break e;
            }
          throw Error(U(130, e == null ? e : typeof e, ""));
      }
  return t = Ht(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Pr(e, t, n, r) {
  return e = Ht(7, e, r, t), e.lanes = n, e;
}
function Vs(e, t, n, r) {
  return e = Ht(22, e, r, t), e.elementType = yg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ku(e, t, n) {
  return e = Ht(6, e, null, t), e.lanes = n, e;
}
function Iu(e, t, n) {
  return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cx(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = au(0), this.expirationTimes = au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = au(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Kd(e, t, n, r, i, o, a, l, s) {
  return e = new cx(e, t, n, l, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ht(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Od(o), e;
}
function fx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ti, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cy(e) {
  if (!e)
    return ur;
  e = e._reactInternals;
  e: {
    if ($r(e) !== e || e.tag !== 1)
      throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n))
      return u0(e, n, t);
  }
  return t;
}
function fy(e, t, n, r, i, o, a, l, s) {
  return e = Kd(n, r, !0, e, i, o, a, l, s), e.context = cy(null), n = e.current, r = vt(), i = ir(n), o = Tn(r, i), o.callback = t ?? null, nr(n, o, i), e.current.lanes = i, da(e, i, r), xt(e, r), e;
}
function zs(e, t, n, r) {
  var i = t.current, o = vt(), a = ir(i);
  return n = cy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tn(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nr(i, t, a), e !== null && (sn(e, i, a, o), Cl(e, i, a)), a;
}
function is(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yd(e, t) {
  Yv(e, t), (e = e.alternate) && Yv(e, t);
}
function dx() {
  return null;
}
var dy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zd(e) {
  this._internalRoot = e;
}
$s.prototype.render = Zd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(U(409));
  zs(e, t, null, null);
};
$s.prototype.unmount = Zd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mr(function() {
      zs(null, e, null, null);
    }), t[_n] = null;
  }
};
function $s(e) {
  this._internalRoot = e;
}
$s.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++)
      ;
    Hn.splice(n, 0, e), n === 0 && Ug(e);
  }
};
function qd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function js(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zv() {
}
function px(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = is(a);
        o.call(u);
      };
    }
    var a = fy(t, r, e, 0, null, !1, !1, "", Zv);
    return e._reactRootContainer = a, e[_n] = a.current, Go(e.nodeType === 8 ? e.parentNode : e), Mr(), a;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = is(s);
      l.call(u);
    };
  }
  var s = Kd(e, 0, !1, null, null, !1, !1, "", Zv);
  return e._reactRootContainer = s, e[_n] = s.current, Go(e.nodeType === 8 ? e.parentNode : e), Mr(function() {
    zs(t, s, n, r);
  }), s;
}
function Ws(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var s = is(a);
        l.call(s);
      };
    }
    zs(t, a, e, i);
  } else
    a = px(n, t, e, i, r);
  return is(a);
}
$g = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = po(t.pendingLanes);
        n !== 0 && (hd(t, n | 1), xt(t, ze()), !(ge & 6) && (Li = ze() + 500, pr()));
      }
      break;
    case 13:
      Mr(function() {
        var r = An(e, 1);
        if (r !== null) {
          var i = vt();
          sn(r, e, 1, i);
        }
      }), Yd(e, 1);
  }
};
md = function(e) {
  if (e.tag === 13) {
    var t = An(e, 134217728);
    if (t !== null) {
      var n = vt();
      sn(t, e, 134217728, n);
    }
    Yd(e, 134217728);
  }
};
jg = function(e) {
  if (e.tag === 13) {
    var t = ir(e), n = An(e, t);
    if (n !== null) {
      var r = vt();
      sn(n, e, t, r);
    }
    Yd(e, t);
  }
};
Wg = function() {
  return Se;
};
Bg = function(e, t) {
  var n = Se;
  try {
    return Se = e, t();
  } finally {
    Se = n;
  }
};
$c = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ac(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _s(r);
            if (!i)
              throw Error(U(90));
            wg(r), Ac(r, i);
          }
        }
      }
      break;
    case "textarea":
      bg(e, n);
      break;
    case "select":
      t = n.value, t != null && Ci(e, !!n.multiple, t, !1);
  }
};
Pg = Bd;
Og = Mr;
var vx = { usingClientEntryPoint: !1, Events: [va, ai, _s, Ng, Tg, Bd] }, lo = { findFiberByHostInstance: xr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, hx = { bundleType: lo.bundleType, version: lo.version, rendererPackageName: lo.rendererPackageName, rendererConfig: lo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ag(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: lo.findFiberByHostInstance || dx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ba.isDisabled && Ba.supportsFiber)
    try {
      Ts = Ba.inject(hx), gn = Ba;
    } catch {
    }
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vx;
Mt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qd(t))
    throw Error(U(200));
  return fx(e, t, null, n);
};
Mt.createRoot = function(e, t) {
  if (!qd(e))
    throw Error(U(299));
  var n = !1, r = "", i = dy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Kd(e, 1, !1, null, null, n, !1, r, i), e[_n] = t.current, Go(e.nodeType === 8 ? e.parentNode : e), new Zd(t);
};
Mt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : (e = Object.keys(e).join(","), Error(U(268, e)));
  return e = Ag(t), e = e === null ? null : e.stateNode, e;
};
Mt.flushSync = function(e) {
  return Mr(e);
};
Mt.hydrate = function(e, t, n) {
  if (!js(t))
    throw Error(U(200));
  return Ws(null, e, t, !0, n);
};
Mt.hydrateRoot = function(e, t, n) {
  if (!qd(e))
    throw Error(U(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", a = dy;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = fy(t, null, e, 1, n ?? null, i, !1, o, a), e[_n] = t.current, Go(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new $s(t);
};
Mt.render = function(e, t, n) {
  if (!js(t))
    throw Error(U(200));
  return Ws(null, e, t, !1, n);
};
Mt.unmountComponentAtNode = function(e) {
  if (!js(e))
    throw Error(U(40));
  return e._reactRootContainer ? (Mr(function() {
    Ws(null, null, e, !1, function() {
      e._reactRootContainer = null, e[_n] = null;
    });
  }), !0) : !1;
};
Mt.unstable_batchedUpdates = Bd;
Mt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!js(n))
    throw Error(U(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(U(38));
  return Ws(e, t, n, !1, r);
};
Mt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = Mt;
})(db);
const cr = /* @__PURE__ */ Dm(Do);
function mx(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function os(e) {
  return mx(e) ? e : e instanceof ee.Component ? cr.findDOMNode(e) : null;
}
function py(e, t) {
  typeof e == "function" ? e(t) : de(e) === "object" && e && "current" in e && (e.current = t);
}
function jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(i) {
    return i;
  });
  return r.length <= 1 ? r[0] : function(i) {
    t.forEach(function(o) {
      py(o, i);
    });
  };
}
function ma(e) {
  var t, n, r = Al.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
function Dn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qv(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function gx(e, t) {
  var n = {
    animationend: qv("Animation", "AnimationEnd"),
    transitionend: qv("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var yx = gx(Dn(), typeof window < "u" ? window : {}), vy = {};
if (Dn()) {
  var Cx = document.createElement("div");
  vy = Cx.style;
}
var Ua = {};
function hy(e) {
  if (Ua[e])
    return Ua[e];
  var t = yx[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in vy)
        return Ua[e] = t[o], Ua[e];
    }
  return "";
}
var my = hy("animationend"), gy = hy("transitionend"), yy = !!(my && gy), Qv = my || "animationend", Xv = gy || "transitionend";
function Jv(e, t) {
  if (!e)
    return null;
  if (de(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
var Zr = "none", Ha = "appear", Ga = "enter", Ka = "leave", eh = "none", kn = "prepare", pi = "start", vi = "active", Qd = "end";
function Pn(e) {
  var t = d.useRef(!1), n = d.useState(e), r = q(n, 2), i = r[0], o = r[1];
  d.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(l, s) {
    s && t.current || o(l);
  }
  return [i, a];
}
var Cy = function(t) {
  return +setTimeout(t, 16);
}, wy = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Cy = function(t) {
  return window.requestAnimationFrame(t);
}, wy = function(t) {
  return window.cancelAnimationFrame(t);
});
var th = 0, Xd = /* @__PURE__ */ new Map();
function Sy(e) {
  Xd.delete(e);
}
var lt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  th += 1;
  var r = th;
  function i(o) {
    if (o === 0)
      Sy(r), t();
    else {
      var a = Cy(function() {
        i(o - 1);
      });
      Xd.set(r, a);
    }
  }
  return i(n), r;
};
lt.cancel = function(e) {
  var t = Xd.get(e);
  return Sy(t), wy(t);
};
const wx = function() {
  var e = d.useRef(null);
  function t() {
    lt.cancel(e.current);
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = lt(function() {
      i <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, i - 1);
    });
    e.current = o;
  }
  return d.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var by = Dn() ? d.useLayoutEffect : d.useEffect, nh = [kn, pi, vi, Qd], xy = !1, Sx = !0;
function Ey(e) {
  return e === vi || e === Qd;
}
const bx = function(e, t) {
  var n = Pn(eh), r = q(n, 2), i = r[0], o = r[1], a = wx(), l = q(a, 2), s = l[0], u = l[1];
  function c() {
    o(kn, !0);
  }
  return by(function() {
    if (i !== eh && i !== Qd) {
      var f = nh.indexOf(i), p = nh[f + 1], g = t(i);
      g === xy ? o(p, !0) : s(function(h) {
        function y() {
          h.isCanceled() || o(p, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), d.useEffect(function() {
    return function() {
      u();
    };
  }, []), [c, i];
}, xx = function(e) {
  var t = d.useRef(), n = d.useRef(e);
  n.current = e;
  var r = d.useCallback(function(a) {
    n.current(a);
  }, []);
  function i(a) {
    a && (a.removeEventListener(Xv, r), a.removeEventListener(Qv, r));
  }
  function o(a) {
    t.current && t.current !== a && i(t.current), a && a !== t.current && (a.addEventListener(Xv, r), a.addEventListener(Qv, r), t.current = a);
  }
  return d.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [o, i];
};
function Ex(e, t, n, r) {
  var i = r.motionEnter, o = i === void 0 ? !0 : i, a = r.motionAppear, l = a === void 0 ? !0 : a, s = r.motionLeave, u = s === void 0 ? !0 : s, c = r.motionDeadline, f = r.motionLeaveImmediately, p = r.onAppearPrepare, g = r.onEnterPrepare, h = r.onLeavePrepare, y = r.onAppearStart, w = r.onEnterStart, m = r.onLeaveStart, v = r.onAppearActive, C = r.onEnterActive, S = r.onLeaveActive, b = r.onAppearEnd, I = r.onEnterEnd, T = r.onLeaveEnd, E = r.onVisibleChanged, D = Pn(), F = q(D, 2), z = F[0], R = F[1], x = Pn(Zr), _ = q(x, 2), P = _[0], k = _[1], O = Pn(null), N = q(O, 2), M = N[0], A = N[1], $ = d.useRef(!1), V = d.useRef(null);
  function B() {
    return n();
  }
  var H = d.useRef(!1);
  function K(re) {
    var ce = B();
    if (!(re && !re.deadline && re.target !== ce)) {
      var Ce = H.current, ut;
      P === Ha && Ce ? ut = b == null ? void 0 : b(ce, re) : P === Ga && Ce ? ut = I == null ? void 0 : I(ce, re) : P === Ka && Ce && (ut = T == null ? void 0 : T(ce, re)), P !== Zr && Ce && ut !== !1 && (k(Zr, !0), A(null, !0));
    }
  }
  var G = xx(K), le = q(G, 1), oe = le[0], J = d.useMemo(function() {
    var re, ce, Ce;
    switch (P) {
      case Ha:
        return re = {}, L(re, kn, p), L(re, pi, y), L(re, vi, v), re;
      case Ga:
        return ce = {}, L(ce, kn, g), L(ce, pi, w), L(ce, vi, C), ce;
      case Ka:
        return Ce = {}, L(Ce, kn, h), L(Ce, pi, m), L(Ce, vi, S), Ce;
      default:
        return {};
    }
  }, [P]), pe = bx(P, function(re) {
    if (re === kn) {
      var ce = J[kn];
      return ce ? ce(B()) : xy;
    }
    if (se in J) {
      var Ce;
      A(((Ce = J[se]) === null || Ce === void 0 ? void 0 : Ce.call(J, B(), null)) || null);
    }
    return se === vi && (oe(B()), c > 0 && (clearTimeout(V.current), V.current = setTimeout(function() {
      K({
        deadline: !0
      });
    }, c))), Sx;
  }), ae = q(pe, 2), ye = ae[0], se = ae[1], fe = Ey(se);
  H.current = fe, by(function() {
    R(t);
    var re = $.current;
    if ($.current = !0, !!e) {
      var ce;
      !re && t && l && (ce = Ha), re && t && o && (ce = Ga), (re && !t && u || !re && f && !t && u) && (ce = Ka), ce && (k(ce), ye());
    }
  }, [t]), d.useEffect(function() {
    // Cancel appear
    (P === Ha && !l || // Cancel enter
    P === Ga && !o || // Cancel leave
    P === Ka && !u) && k(Zr);
  }, [l, o, u]), d.useEffect(function() {
    return function() {
      $.current = !1, clearTimeout(V.current);
    };
  }, []);
  var xe = d.useRef(!1);
  d.useEffect(function() {
    z && (xe.current = !0), z !== void 0 && P === Zr && ((xe.current || z) && (E == null || E(z)), xe.current = !0);
  }, [z, P]);
  var ne = M;
  return J[kn] && se === pi && (ne = W({
    transition: "none"
  }, ne)), [P, se, ne, z ?? t];
}
var kx = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    return Ke(this, n), t.apply(this, arguments);
  }
  return Ye(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(d.Component);
function Ix(e) {
  var t = e;
  de(e) === "object" && (t = e.transitionSupport);
  function n(i) {
    return !!(i.motionName && t);
  }
  var r = /* @__PURE__ */ d.forwardRef(function(i, o) {
    var a = i.visible, l = a === void 0 ? !0 : a, s = i.removeOnLeave, u = s === void 0 ? !0 : s, c = i.forceRender, f = i.children, p = i.motionName, g = i.leavedClassName, h = i.eventProps, y = n(i), w = d.useRef(), m = d.useRef();
    function v() {
      try {
        return w.current instanceof HTMLElement ? w.current : os(m.current);
      } catch {
        return null;
      }
    }
    var C = Ex(y, l, v, i), S = q(C, 4), b = S[0], I = S[1], T = S[2], E = S[3], D = d.useRef(E);
    E && (D.current = !0);
    var F = d.useCallback(function(O) {
      w.current = O, py(o, O);
    }, [o]), z, R = W(W({}, h), {}, {
      visible: l
    });
    if (!f)
      z = null;
    else if (b === Zr || !n(i))
      E ? z = f(W({}, R), F) : !u && D.current && g ? z = f(W(W({}, R), {}, {
        className: g
      }), F) : c || !u && !g ? z = f(W(W({}, R), {}, {
        style: {
          display: "none"
        }
      }), F) : z = null;
    else {
      var x, _;
      I === kn ? _ = "prepare" : Ey(I) ? _ = "active" : I === pi && (_ = "start"), z = f(W(W({}, R), {}, {
        className: X(Jv(p, b), (x = {}, L(x, Jv(p, "".concat(b, "-").concat(_)), _), L(x, p, typeof p == "string"), x)),
        style: T
      }), F);
    }
    if (/* @__PURE__ */ d.isValidElement(z) && ma(z)) {
      var P = z, k = P.ref;
      k || (z = /* @__PURE__ */ d.cloneElement(z, {
        ref: F
      }));
    }
    return /* @__PURE__ */ d.createElement(kx, {
      ref: m
    }, z);
  });
  return r.displayName = "CSSMotion", r;
}
const vr = Ix(yy);
var wf = "add", Sf = "keep", bf = "remove", Nu = "removed";
function Nx(e) {
  var t;
  return e && de(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, W(W({}, t), {}, {
    key: String(t.key)
  });
}
function xf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Nx);
}
function Tx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, i = t.length, o = xf(e), a = xf(t);
  o.forEach(function(u) {
    for (var c = !1, f = r; f < i; f += 1) {
      var p = a[f];
      if (p.key === u.key) {
        r < f && (n = n.concat(a.slice(r, f).map(function(g) {
          return W(W({}, g), {}, {
            status: wf
          });
        })), r = f), n.push(W(W({}, p), {}, {
          status: Sf
        })), r += 1, c = !0;
        break;
      }
    }
    c || n.push(W(W({}, u), {}, {
      status: bf
    }));
  }), r < i && (n = n.concat(a.slice(r).map(function(u) {
    return W(W({}, u), {}, {
      status: wf
    });
  })));
  var l = {};
  n.forEach(function(u) {
    var c = u.key;
    l[c] = (l[c] || 0) + 1;
  });
  var s = Object.keys(l).filter(function(u) {
    return l[u] > 1;
  });
  return s.forEach(function(u) {
    n = n.filter(function(c) {
      var f = c.key, p = c.status;
      return f !== u || p !== bf;
    }), n.forEach(function(c) {
      c.key === u && (c.status = Sf);
    });
  }), n;
}
var Px = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ox = ["status"], Rx = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function _x(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vr, n = /* @__PURE__ */ function(r) {
    mt(o, r);
    var i = gt(o);
    function o() {
      var a;
      Ke(this, o);
      for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
        s[u] = arguments[u];
      return a = i.call.apply(i, [this].concat(s)), L(te(a), "state", {
        keyEntities: []
      }), L(te(a), "removeKey", function(c) {
        var f = a.state.keyEntities, p = f.map(function(g) {
          return g.key !== c ? g : W(W({}, g), {}, {
            status: Nu
          });
        });
        return a.setState({
          keyEntities: p
        }), p.filter(function(g) {
          var h = g.status;
          return h !== Nu;
        }).length;
      }), a;
    }
    return Ye(o, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, u = this.props, c = u.component, f = u.children, p = u.onVisibleChanged, g = u.onAllRemoved, h = Yt(u, Px), y = c || d.Fragment, w = {};
        return Rx.forEach(function(m) {
          w[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ d.createElement(y, h, s.map(function(m) {
          var v = m.status, C = Yt(m, Ox), S = v === wf || v === Sf;
          return /* @__PURE__ */ d.createElement(t, j({}, w, {
            key: C.key,
            visible: S,
            eventProps: C,
            onVisibleChanged: function(I) {
              if (p == null || p(I, {
                key: C.key
              }), !I) {
                var T = l.removeKey(C.key);
                T === 0 && g && g();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var u = l.keys, c = s.keyEntities, f = xf(u), p = Tx(c, f);
        return {
          keyEntities: p.filter(function(g) {
            var h = c.find(function(y) {
              var w = y.key;
              return g.key === w;
            });
            return !(h && h.status === Nu && g.status === bf);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), o;
  }(d.Component);
  return L(n, "defaultProps", {
    component: "div"
  }), n;
}
const ky = _x(yy);
var Jd = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    var r;
    Ke(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(o)), r.closeTimer = null, r.close = function(l) {
      l && l.stopPropagation(), r.clearCloseTimer();
      var s = r.props, u = s.onClose, c = s.noticeKey;
      u && u(c);
    }, r.startCloseTimer = function() {
      r.props.duration && (r.closeTimer = window.setTimeout(function() {
        r.close();
      }, r.props.duration * 1e3));
    }, r.clearCloseTimer = function() {
      r.closeTimer && (clearTimeout(r.closeTimer), r.closeTimer = null);
    }, r;
  }
  return Ye(n, [{
    key: "componentDidMount",
    value: function() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      (this.props.duration !== i.duration || this.props.updateMark !== i.updateMark || // Visible again need reset timer
      this.props.visible !== i.visible && this.props.visible) && this.restartCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function() {
      this.clearCloseTimer(), this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function() {
      var i = this, o = this.props, a = o.prefixCls, l = o.className, s = o.closable, u = o.closeIcon, c = o.style, f = o.onClick, p = o.children, g = o.holder, h = "".concat(a, "-notice"), y = Object.keys(this.props).reduce(function(m, v) {
        return (v.substr(0, 5) === "data-" || v.substr(0, 5) === "aria-" || v === "role") && (m[v] = i.props[v]), m;
      }, {}), w = /* @__PURE__ */ d.createElement("div", j({
        className: X(h, l, L({}, "".concat(h, "-closable"), s)),
        style: c,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: f
      }, y), /* @__PURE__ */ d.createElement("div", {
        className: "".concat(h, "-content")
      }, p), s ? /* @__PURE__ */ d.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(h, "-close")
      }, u || /* @__PURE__ */ d.createElement("span", {
        className: "".concat(h, "-close-x")
      })) : null);
      return g ? /* @__PURE__ */ cr.createPortal(w, g) : w;
    }
  }]), n;
}(d.Component);
Jd.defaultProps = {
  onClose: function() {
  },
  duration: 1.5
};
function ep(e) {
  var t = d.useRef({}), n = d.useState([]), r = q(n, 2), i = r[0], o = r[1];
  function a(l) {
    var s = !0;
    e.add(l, function(u, c) {
      var f = c.key;
      if (u && (!t.current[f] || s)) {
        var p = /* @__PURE__ */ d.createElement(Jd, j({}, c, {
          holder: u
        }));
        t.current[f] = p, o(function(g) {
          var h = g.findIndex(function(w) {
            return w.key === c.key;
          });
          if (h === -1)
            return [].concat(Q(g), [p]);
          var y = Q(g);
          return y[h] = p, y;
        });
      }
      s = !1;
    });
  }
  return [a, /* @__PURE__ */ d.createElement(d.Fragment, null, i)];
}
var rh = 0, Ax = Date.now();
function ih() {
  var e = rh;
  return rh += 1, "rcNotification_".concat(Ax, "_").concat(e);
}
var Di = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    var r;
    Ke(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(o)), r.state = {
      notices: []
    }, r.hookRefs = /* @__PURE__ */ new Map(), r.add = function(l, s) {
      var u = l.key || ih(), c = W(W({}, l), {}, {
        key: u
      }), f = r.props.maxCount;
      r.setState(function(p) {
        var g = p.notices, h = g.map(function(w) {
          return w.notice.key;
        }).indexOf(u), y = g.concat();
        return h !== -1 ? y.splice(h, 1, {
          notice: c,
          holderCallback: s
        }) : (f && g.length >= f && (c.key = y[0].notice.key, c.updateMark = ih(), c.userPassKey = u, y.shift()), y.push({
          notice: c,
          holderCallback: s
        })), {
          notices: y
        };
      });
    }, r.remove = function(l) {
      r.setState(function(s) {
        var u = s.notices;
        return {
          notices: u.filter(function(c) {
            var f = c.notice, p = f.key, g = f.userPassKey, h = g || p;
            return h !== l;
          })
        };
      });
    }, r.noticePropsMap = {}, r;
  }
  return Ye(n, [{
    key: "getTransitionName",
    value: function() {
      var i = this.props, o = i.prefixCls, a = i.animation, l = this.props.transitionName;
      return !l && a && (l = "".concat(o, "-").concat(a)), l;
    }
  }, {
    key: "render",
    value: function() {
      var i = this, o = this.state.notices, a = this.props, l = a.prefixCls, s = a.className, u = a.closeIcon, c = a.style, f = [];
      return o.forEach(function(p, g) {
        var h = p.notice, y = p.holderCallback, w = g === o.length - 1 ? h.updateMark : void 0, m = h.key, v = h.userPassKey, C = W(W(W({
          prefixCls: l,
          closeIcon: u
        }, h), h.props), {}, {
          key: m,
          noticeKey: v || m,
          updateMark: w,
          onClose: function(b) {
            var I;
            i.remove(b), (I = h.onClose) === null || I === void 0 || I.call(h);
          },
          onClick: h.onClick,
          children: h.content
        });
        f.push(m), i.noticePropsMap[m] = {
          props: C,
          holderCallback: y
        };
      }), /* @__PURE__ */ d.createElement("div", {
        className: X(l, s),
        style: c
      }, /* @__PURE__ */ d.createElement(ky, {
        keys: f,
        motionName: this.getTransitionName(),
        onVisibleChanged: function(g, h) {
          var y = h.key;
          g || delete i.noticePropsMap[y];
        }
      }, function(p) {
        var g = p.key, h = p.className, y = p.style, w = p.visible, m = i.noticePropsMap[g], v = m.props, C = m.holderCallback;
        return C ? /* @__PURE__ */ d.createElement("div", {
          key: g,
          className: X(h, "".concat(l, "-hook-holder")),
          style: W({}, y),
          ref: function(b) {
            typeof g > "u" || (b ? (i.hookRefs.set(g, b), C(b, v)) : i.hookRefs.delete(g));
          }
        }) : /* @__PURE__ */ d.createElement(Jd, j({}, v, {
          className: X(h, v == null ? void 0 : v.className),
          style: W(W({}, y), v == null ? void 0 : v.style),
          visible: w
        }));
      }));
    }
  }]), n;
}(d.Component);
Di.newInstance = void 0;
Di.defaultProps = {
  prefixCls: "rc-notification",
  animation: "fade",
  style: {
    top: 65,
    left: "50%"
  }
};
Di.newInstance = function(t, n) {
  var r = t || {}, i = r.getContainer, o = Yt(r, ["getContainer"]), a = document.createElement("div");
  if (i) {
    var l = i();
    l.appendChild(a);
  } else
    document.body.appendChild(a);
  var s = !1;
  function u(c) {
    s || (s = !0, n({
      notice: function(p) {
        c.add(p);
      },
      removeNotice: function(p) {
        c.remove(p);
      },
      component: c,
      destroy: function() {
        cr.unmountComponentAtNode(a), a.parentNode && a.parentNode.removeChild(a);
      },
      // Hooks
      useNotification: function() {
        return ep(c);
      }
    }));
  }
  cr.render(/* @__PURE__ */ d.createElement(Di, j({}, o, {
    ref: u
  })), a);
};
var Mx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Fx = Mx;
function nt(e, t) {
  Lx(e) && (e = "100%");
  var n = Dx(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ya(e) {
  return Math.min(1, Math.max(0, e));
}
function Lx(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Dx(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Iy(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Za(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ir(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Vx(e, t, n) {
  return {
    r: nt(e, 255) * 255,
    g: nt(t, 255) * 255,
    b: nt(n, 255) * 255
  };
}
function oh(e, t, n) {
  e = nt(e, 255), t = nt(t, 255), n = nt(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), o = 0, a = 0, l = (r + i) / 2;
  if (r === i)
    a = 0, o = 0;
  else {
    var s = r - i;
    switch (a = l > 0.5 ? s / (2 - r - i) : s / (r + i), r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / s + 2;
        break;
      case n:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l };
}
function Tu(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function zx(e, t, n) {
  var r, i, o;
  if (e = nt(e, 360), t = nt(t, 100), n = nt(n, 100), t === 0)
    i = n, o = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = Tu(l, a, e + 1 / 3), i = Tu(l, a, e), o = Tu(l, a, e - 1 / 3);
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function Ef(e, t, n) {
  e = nt(e, 255), t = nt(t, 255), n = nt(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), o = 0, a = r, l = r - i, s = r === 0 ? 0 : l / r;
  if (r === i)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: a };
}
function $x(e, t, n) {
  e = nt(e, 360) * 6, t = nt(t, 100), n = nt(n, 100);
  var r = Math.floor(e), i = e - r, o = n * (1 - t), a = n * (1 - i * t), l = n * (1 - (1 - i) * t), s = r % 6, u = [n, a, o, o, l, n][s], c = [l, n, n, a, o, o][s], f = [o, o, l, n, n, a][s];
  return { r: u * 255, g: c * 255, b: f * 255 };
}
function kf(e, t, n, r) {
  var i = [
    Ir(Math.round(e).toString(16)),
    Ir(Math.round(t).toString(16)),
    Ir(Math.round(n).toString(16))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function jx(e, t, n, r, i) {
  var o = [
    Ir(Math.round(e).toString(16)),
    Ir(Math.round(t).toString(16)),
    Ir(Math.round(n).toString(16)),
    Ir(Wx(r))
  ];
  return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Wx(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ah(e) {
  return Nt(e) / 255;
}
function Nt(e) {
  return parseInt(e, 16);
}
function Bx(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var If = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function qr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, i = null, o = null, a = !1, l = !1;
  return typeof e == "string" && (e = Gx(e)), typeof e == "object" && (Sn(e.r) && Sn(e.g) && Sn(e.b) ? (t = Vx(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Sn(e.h) && Sn(e.s) && Sn(e.v) ? (r = Za(e.s), i = Za(e.v), t = $x(e.h, r, i), a = !0, l = "hsv") : Sn(e.h) && Sn(e.s) && Sn(e.l) && (r = Za(e.s), o = Za(e.l), t = zx(e.h, r, o), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Iy(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Ux = "[-\\+]?\\d+%?", Hx = "[-\\+]?\\d*\\.\\d+%?", Zn = "(?:".concat(Hx, ")|(?:").concat(Ux, ")"), Pu = "[\\s|\\(]+(".concat(Zn, ")[,|\\s]+(").concat(Zn, ")[,|\\s]+(").concat(Zn, ")\\s*\\)?"), Ou = "[\\s|\\(]+(".concat(Zn, ")[,|\\s]+(").concat(Zn, ")[,|\\s]+(").concat(Zn, ")[,|\\s]+(").concat(Zn, ")\\s*\\)?"), en = {
  CSS_UNIT: new RegExp(Zn),
  rgb: new RegExp("rgb" + Pu),
  rgba: new RegExp("rgba" + Ou),
  hsl: new RegExp("hsl" + Pu),
  hsla: new RegExp("hsla" + Ou),
  hsv: new RegExp("hsv" + Pu),
  hsva: new RegExp("hsva" + Ou),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Gx(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (If[e])
    e = If[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = en.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = en.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = en.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = en.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = en.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = en.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = en.hex8.exec(e), n ? {
    r: Nt(n[1]),
    g: Nt(n[2]),
    b: Nt(n[3]),
    a: ah(n[4]),
    format: t ? "name" : "hex8"
  } : (n = en.hex6.exec(e), n ? {
    r: Nt(n[1]),
    g: Nt(n[2]),
    b: Nt(n[3]),
    format: t ? "name" : "hex"
  } : (n = en.hex4.exec(e), n ? {
    r: Nt(n[1] + n[1]),
    g: Nt(n[2] + n[2]),
    b: Nt(n[3] + n[3]),
    a: ah(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = en.hex3.exec(e), n ? {
    r: Nt(n[1] + n[1]),
    g: Nt(n[2] + n[2]),
    b: Nt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Sn(e) {
  return !!en.CSS_UNIT.exec(String(e));
}
var Ru = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Bx(t)), this.originalInput = t;
      var i = qr(t);
      this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : i.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, i, o = t.r / 255, a = t.g / 255, l = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? i = l / 12.92 : i = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Iy(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ef(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ef(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = oh(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = oh(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), kf(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), jx(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(nt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(nt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + kf(this.r, this.g, this.b, !1), n = 0, r = Object.entries(If); n < r.length; n++) {
        var i = r[n], o = i[0], a = i[1];
        if (t === a)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, i = this.a < 1 && this.a >= 0, o = !n && i && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Ya(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Ya(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Ya(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Ya(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), i = new e(t).toRgb(), o = n / 100, a = {
        r: (i.r - r.r) * o + r.r,
        g: (i.g - r.g) * o + r.g,
        b: (i.b - r.b) * o + r.b,
        a: (i.a - r.a) * o + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), i = 360 / n, o = [this];
      for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + i) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: r, s: i, v: o })), o = (o + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), i = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1; a < t; a++)
        i.push(new e({ h: (r + a * o) % 360, s: n.s, l: n.l }));
      return i;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), qa = 2, lh = 0.16, Kx = 0.05, Yx = 0.05, Zx = 0.15, Ny = 5, Ty = 4, qx = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function sh(e) {
  var t = e.r, n = e.g, r = e.b, i = Ef(t, n, r);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v
  };
}
function Qa(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(kf(t, n, r, !1));
}
function Qx(e, t, n) {
  var r = n / 100, i = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return i;
}
function uh(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - qa * t : Math.round(e.h) + qa * t : r = n ? Math.round(e.h) + qa * t : Math.round(e.h) - qa * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ch(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - lh * t : t === Ty ? r = e.s + lh : r = e.s + Kx * t, r > 1 && (r = 1), n && t === Ny && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function fh(e, t, n) {
  var r;
  return n ? r = e.v + Yx * t : r = e.v - Zx * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function ta(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = qr(e), i = Ny; i > 0; i -= 1) {
    var o = sh(r), a = Qa(qr({
      h: uh(o, i, !0),
      s: ch(o, i, !0),
      v: fh(o, i, !0)
    }));
    n.push(a);
  }
  n.push(Qa(r));
  for (var l = 1; l <= Ty; l += 1) {
    var s = sh(r), u = Qa(qr({
      h: uh(s, l),
      s: ch(s, l),
      v: fh(s, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? qx.map(function(c) {
    var f = c.index, p = c.opacity, g = Qa(Qx(qr(t.backgroundColor || "#141414"), qr(n[f]), p * 100));
    return g;
  }) : n;
}
var _u = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Au = {}, Mu = {};
Object.keys(_u).forEach(function(e) {
  Au[e] = ta(_u[e]), Au[e].primary = Au[e][5], Mu[e] = ta(_u[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Mu[e].primary = Mu[e][5];
});
function ki(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var dh = "data-rc-order", Xx = "rc-util-key", Nf = /* @__PURE__ */ new Map();
function Py() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Xx;
}
function tp(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Jx(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Oy(e) {
  return Array.from((Nf.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ry(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Dn())
    return null;
  var n = t.csp, r = t.prepend, i = document.createElement("style");
  i.setAttribute(dh, Jx(r)), n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce), i.innerHTML = e;
  var o = tp(t), a = o.firstChild;
  if (r) {
    if (r === "queue") {
      var l = Oy(o).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(dh));
      });
      if (l.length)
        return o.insertBefore(i, l[l.length - 1].nextSibling), i;
    }
    o.insertBefore(i, a);
  } else
    o.appendChild(i);
  return i;
}
function eE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = tp(t);
  return Oy(n).find(function(r) {
    return r.getAttribute(Py(t)) === e;
  });
}
function tE(e, t) {
  var n = Nf.get(e);
  if (!n || !ki(document, n)) {
    var r = Ry("", t), i = r.parentNode;
    Nf.set(e, i), e.removeChild(r);
  }
}
function np(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = tp(n);
  tE(r, n);
  var i = eE(t, n);
  if (i) {
    var o, a;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && i.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var l;
      i.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var s = Ry(e, n);
  return s.setAttribute(Py(n), t), s;
}
function nE(e, t) {
  an(e, "[@ant-design/icons] ".concat(t));
}
function ph(e) {
  return de(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (de(e.icon) === "object" || typeof e.icon == "function");
}
function vh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        t[n] = r;
    }
    return t;
  }, {});
}
function Tf(e, t, n) {
  return n ? /* @__PURE__ */ ee.createElement(e.tag, W(W({
    key: t
  }, vh(e.attrs)), n), (e.children || []).map(function(r, i) {
    return Tf(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
  })) : /* @__PURE__ */ ee.createElement(e.tag, W({
    key: t
  }, vh(e.attrs)), (e.children || []).map(function(r, i) {
    return Tf(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
  }));
}
function _y(e) {
  return ta(e)[0];
}
function Ay(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var rE = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, iE = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rE, n = d.useContext(id), r = n.csp;
  d.useEffect(function() {
    np(t, "@ant-design-icons", {
      prepend: !0,
      csp: r
    });
  }, []);
}, oE = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Oo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function aE(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Oo.primaryColor = t, Oo.secondaryColor = n || _y(t), Oo.calculated = !!n;
}
function lE() {
  return W({}, Oo);
}
var Bs = function(t) {
  var n = t.icon, r = t.className, i = t.onClick, o = t.style, a = t.primaryColor, l = t.secondaryColor, s = Yt(t, oE), u = Oo;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: l || _y(a)
  }), iE(), nE(ph(n), "icon should be icon definiton, but got ".concat(n)), !ph(n))
    return null;
  var c = n;
  return c && typeof c.icon == "function" && (c = W(W({}, c), {}, {
    icon: c.icon(u.primaryColor, u.secondaryColor)
  })), Tf(c.icon, "svg-".concat(c.name), W({
    className: r,
    onClick: i,
    style: o,
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s));
};
Bs.displayName = "IconReact";
Bs.getTwoToneColors = lE;
Bs.setTwoToneColors = aE;
const rp = Bs;
function My(e) {
  var t = Ay(e), n = q(t, 2), r = n[0], i = n[1];
  return rp.setTwoToneColors({
    primaryColor: r,
    secondaryColor: i
  });
}
function sE() {
  var e = rp.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var uE = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
My("#1890ff");
var Us = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e.className, i = e.icon, o = e.spin, a = e.rotate, l = e.tabIndex, s = e.onClick, u = e.twoToneColor, c = Yt(e, uE), f = d.useContext(id), p = f.prefixCls, g = p === void 0 ? "anticon" : p, h = f.rootClassName, y = X(h, g, (n = {}, L(n, "".concat(g, "-").concat(i.name), !!i.name), L(n, "".concat(g, "-spin"), !!o || i.name === "loading"), n), r), w = l;
  w === void 0 && s && (w = -1);
  var m = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, v = Ay(u), C = q(v, 2), S = C[0], b = C[1];
  return /* @__PURE__ */ d.createElement("span", W(W({
    role: "img",
    "aria-label": i.name
  }, c), {}, {
    ref: t,
    tabIndex: w,
    onClick: s,
    className: y
  }), /* @__PURE__ */ d.createElement(rp, {
    icon: i,
    primaryColor: S,
    secondaryColor: b,
    style: m
  }));
});
Us.displayName = "AntdIcon";
Us.getTwoToneColor = sE;
Us.setTwoToneColor = My;
const Et = Us;
var Fy = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: Fx
  }));
};
Fy.displayName = "LoadingOutlined";
const as = /* @__PURE__ */ d.forwardRef(Fy);
var cE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const fE = cE;
var Ly = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: fE
  }));
};
Ly.displayName = "ExclamationCircleFilled";
const Dy = /* @__PURE__ */ d.forwardRef(Ly);
var dE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const pE = dE;
var Vy = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: pE
  }));
};
Vy.displayName = "CloseCircleFilled";
const Hs = /* @__PURE__ */ d.forwardRef(Vy);
var vE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const hE = vE;
var zy = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: hE
  }));
};
zy.displayName = "CheckCircleFilled";
const $y = /* @__PURE__ */ d.forwardRef(zy);
var mE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const gE = mE;
var jy = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: gE
  }));
};
jy.displayName = "InfoCircleFilled";
const yE = /* @__PURE__ */ d.forwardRef(jy);
function CE(e, t) {
  var n = function() {
    var i, o, a = null, l = {
      add: function(y, w) {
        a == null || a.component.add(y, w);
      }
    }, s = ep(l), u = q(s, 2), c = u[0], f = u[1];
    function p(h) {
      var y = h.prefixCls, w = i("message", y), m = i(), v = h.key || Zy(), C = new Promise(function(b) {
        var I = function() {
          return typeof h.onClose == "function" && h.onClose(), b(!0);
        };
        e(j(j({}, h), {
          prefixCls: w,
          rootPrefixCls: m,
          getPopupContainer: o
        }), function(T) {
          var E = T.prefixCls, D = T.instance;
          a = D, c(t(j(j({}, h), {
            key: v,
            onClose: I
          }), E));
        });
      }), S = function() {
        a && a.removeNotice(v);
      };
      return S.then = function(b, I) {
        return C.then(b, I);
      }, S.promise = C, S;
    }
    var g = d.useRef({});
    return g.current.open = p, ["success", "info", "warning", "error", "loading"].forEach(function(h) {
      return Xy(g.current, h);
    }), [g.current, /* @__PURE__ */ d.createElement(Vr, {
      key: "holder"
    }, function(h) {
      return i = h.getPrefixCls, o = h.getPopupContainer, f;
    })];
  };
  return n;
}
var ft, Wy = 3, By, wE = 1, Uy = "", Pf = "move-up", Hy = !1, Gy, Ky, Yy = !1;
function Zy() {
  return wE++;
}
function SE(e) {
  e.top !== void 0 && (By = e.top, ft = null), e.duration !== void 0 && (Wy = e.duration), e.prefixCls !== void 0 && (Uy = e.prefixCls), e.getContainer !== void 0 && (Gy = e.getContainer, ft = null), e.transitionName !== void 0 && (Pf = e.transitionName, ft = null, Hy = !0), e.maxCount !== void 0 && (Ky = e.maxCount, ft = null), e.rtl !== void 0 && (Yy = e.rtl);
}
function qy(e, t) {
  var n = e.prefixCls, r = e.getPopupContainer, i = op(), o = i.getPrefixCls, a = i.getRootPrefixCls, l = i.getIconPrefixCls, s = o("message", n || Uy), u = a(e.rootPrefixCls, s), c = l();
  if (ft) {
    t({
      prefixCls: s,
      rootPrefixCls: u,
      iconPrefixCls: c,
      instance: ft
    });
    return;
  }
  var f = {
    prefixCls: s,
    transitionName: Hy ? Pf : "".concat(u, "-").concat(Pf),
    style: {
      top: By
    },
    getContainer: Gy || r,
    maxCount: Ky
  };
  Di.newInstance(f, function(p) {
    if (ft) {
      t({
        prefixCls: s,
        rootPrefixCls: u,
        iconPrefixCls: c,
        instance: ft
      });
      return;
    }
    ft = p, t({
      prefixCls: s,
      rootPrefixCls: u,
      iconPrefixCls: c,
      instance: p
    });
  });
}
var bE = {
  info: yE,
  success: $y,
  error: Hs,
  warning: Dy,
  loading: as
};
function Qy(e, t, n) {
  var r, i = e.duration !== void 0 ? e.duration : Wy, o = bE[e.type], a = X("".concat(t, "-custom-content"), (r = {}, L(r, "".concat(t, "-").concat(e.type), e.type), L(r, "".concat(t, "-rtl"), Yy === !0), r));
  return {
    key: e.key,
    duration: i,
    style: e.style || {},
    className: e.className,
    content: /* @__PURE__ */ d.createElement(Yi, {
      iconPrefixCls: n
    }, /* @__PURE__ */ d.createElement("div", {
      className: a
    }, e.icon || o && /* @__PURE__ */ d.createElement(o, null), /* @__PURE__ */ d.createElement("span", null, e.content))),
    onClose: e.onClose,
    onClick: e.onClick
  };
}
function xE(e) {
  var t = e.key || Zy(), n = new Promise(function(i) {
    var o = function() {
      return typeof e.onClose == "function" && e.onClose(), i(!0);
    };
    qy(e, function(a) {
      var l = a.prefixCls, s = a.iconPrefixCls, u = a.instance;
      u.notice(Qy(j(j({}, e), {
        key: t,
        onClose: o
      }), l, s));
    });
  }), r = function() {
    ft && ft.removeNotice(t);
  };
  return r.then = function(i, o) {
    return n.then(i, o);
  }, r.promise = n, r;
}
function EE(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var na = {
  open: xE,
  config: SE,
  destroy: function(t) {
    if (ft)
      if (t) {
        var n = ft, r = n.removeNotice;
        r(t);
      } else {
        var i = ft, o = i.destroy;
        o(), ft = null;
      }
  }
};
function Xy(e, t) {
  e[t] = function(n, r, i) {
    return EE(n) ? e.open(j(j({}, n), {
      type: t
    })) : (typeof r == "function" && (i = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: i
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  return Xy(na, e);
});
na.warn = na.warning;
na.useMessage = CE(qy, Qy);
const Jy = na;
var kE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const IE = kE;
var e1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: IE
  }));
};
e1.displayName = "CloseOutlined";
const t1 = /* @__PURE__ */ d.forwardRef(e1);
var NE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const TE = NE;
var n1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: TE
  }));
};
n1.displayName = "CheckCircleOutlined";
const r1 = /* @__PURE__ */ d.forwardRef(n1);
var PE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const OE = PE;
var i1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: OE
  }));
};
i1.displayName = "CloseCircleOutlined";
const o1 = /* @__PURE__ */ d.forwardRef(i1);
var RE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const _E = RE;
var a1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: _E
  }));
};
a1.displayName = "ExclamationCircleOutlined";
const ip = /* @__PURE__ */ d.forwardRef(a1);
var AE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const ME = AE;
var l1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: ME
  }));
};
l1.displayName = "InfoCircleOutlined";
const s1 = /* @__PURE__ */ d.forwardRef(l1);
function FE(e, t) {
  var n = function() {
    var i, o = null, a = {
      add: function(h, y) {
        o == null || o.component.add(h, y);
      }
    }, l = ep(a), s = q(l, 2), u = s[0], c = s[1];
    function f(g) {
      var h = g.prefixCls, y = i("notification", h);
      e(j(j({}, g), {
        prefixCls: y
      }), function(w) {
        var m = w.prefixCls, v = w.instance;
        o = v, u(t(g, m));
      });
    }
    var p = d.useRef({});
    return p.current.open = f, ["success", "info", "warning", "error"].forEach(function(g) {
      p.current[g] = function(h) {
        return p.current.open(j(j({}, h), {
          type: g
        }));
      };
    }), [p.current, /* @__PURE__ */ d.createElement(Vr, {
      key: "holder"
    }, function(g) {
      return i = g.getPrefixCls, c;
    })];
  };
  return n;
}
globalThis && globalThis.__awaiter;
var Sr = {}, u1 = 4.5, c1 = 24, f1 = 24, d1 = "", Of = "topRight", p1, v1, h1 = !1, m1;
function LE(e) {
  var t = e.duration, n = e.placement, r = e.bottom, i = e.top, o = e.getContainer, a = e.closeIcon, l = e.prefixCls;
  l !== void 0 && (d1 = l), t !== void 0 && (u1 = t), n !== void 0 ? Of = n : e.rtl && (Of = "topLeft"), r !== void 0 && (f1 = r), i !== void 0 && (c1 = i), o !== void 0 && (p1 = o), a !== void 0 && (v1 = a), e.rtl !== void 0 && (h1 = e.rtl), e.maxCount !== void 0 && (m1 = e.maxCount);
}
function DE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f1, r;
  switch (e) {
    case "top":
      r = {
        left: 0,
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: 0,
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function g1(e, t) {
  var n = e.placement, r = n === void 0 ? Of : n, i = e.top, o = e.bottom, a = e.getContainer, l = a === void 0 ? p1 : a, s = e.prefixCls, u = op(), c = u.getPrefixCls, f = u.getIconPrefixCls, p = c("notification", s || d1), g = f(), h = "".concat(p, "-").concat(r), y = Sr[h];
  if (y) {
    Promise.resolve(y).then(function(m) {
      t({
        prefixCls: "".concat(p, "-notice"),
        iconPrefixCls: g,
        instance: m
      });
    });
    return;
  }
  var w = X("".concat(p, "-").concat(r), L({}, "".concat(p, "-rtl"), h1 === !0));
  Sr[h] = new Promise(function(m) {
    Di.newInstance({
      prefixCls: p,
      className: w,
      style: DE(r, i, o),
      getContainer: l,
      maxCount: m1
    }, function(v) {
      m(v), t({
        prefixCls: "".concat(p, "-notice"),
        iconPrefixCls: g,
        instance: v
      });
    });
  });
}
var VE = {
  success: r1,
  info: s1,
  error: o1,
  warning: ip
};
function y1(e, t, n) {
  var r = e.duration, i = e.icon, o = e.type, a = e.description, l = e.message, s = e.btn, u = e.onClose, c = e.onClick, f = e.key, p = e.style, g = e.className, h = e.closeIcon, y = h === void 0 ? v1 : h, w = r === void 0 ? u1 : r, m = null;
  i ? m = /* @__PURE__ */ d.createElement("span", {
    className: "".concat(t, "-icon")
  }, e.icon) : o && (m = /* @__PURE__ */ d.createElement(VE[o] || null, {
    className: "".concat(t, "-icon ").concat(t, "-icon-").concat(o)
  }));
  var v = /* @__PURE__ */ d.createElement("span", {
    className: "".concat(t, "-close-x")
  }, y || /* @__PURE__ */ d.createElement(t1, {
    className: "".concat(t, "-close-icon")
  })), C = !a && m ? /* @__PURE__ */ d.createElement("span", {
    className: "".concat(t, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /* @__PURE__ */ d.createElement(Yi, {
      iconPrefixCls: n
    }, /* @__PURE__ */ d.createElement("div", {
      className: m ? "".concat(t, "-with-icon") : "",
      role: "alert"
    }, m, /* @__PURE__ */ d.createElement("div", {
      className: "".concat(t, "-message")
    }, C, l), /* @__PURE__ */ d.createElement("div", {
      className: "".concat(t, "-description")
    }, a), s ? /* @__PURE__ */ d.createElement("span", {
      className: "".concat(t, "-btn")
    }, s) : null)),
    duration: w,
    closable: !0,
    closeIcon: v,
    onClose: u,
    onClick: c,
    key: f,
    style: p || {},
    className: X(g, L({}, "".concat(t, "-").concat(o), !!o))
  };
}
function zE(e) {
  g1(e, function(t) {
    var n = t.prefixCls, r = t.iconPrefixCls, i = t.instance;
    i.notice(y1(e, n, r));
  });
}
var Vi = {
  open: zE,
  close: function(t) {
    Object.keys(Sr).forEach(function(n) {
      return Promise.resolve(Sr[n]).then(function(r) {
        r.removeNotice(t);
      });
    });
  },
  config: LE,
  destroy: function() {
    Object.keys(Sr).forEach(function(t) {
      Promise.resolve(Sr[t]).then(function(n) {
        n.destroy();
      }), delete Sr[t];
    });
  }
};
["success", "info", "warning", "error"].forEach(function(e) {
  Vi[e] = function(t) {
    return Vi.open(j(j({}, t), {
      type: e
    }));
  };
});
Vi.warn = Vi.warning;
Vi.useNotification = FE(g1, y1);
const $E = Vi;
var jE = "-ant-".concat(Date.now(), "-").concat(Math.random());
function WE(e, t) {
  var n = {}, r = function(c, f) {
    var p = c.clone();
    return p = (f == null ? void 0 : f(p)) || p, p.toRgbString();
  }, i = function(c, f) {
    var p = new Ru(c), g = ta(p.toRgbString());
    n["".concat(f, "-color")] = r(p), n["".concat(f, "-color-disabled")] = g[1], n["".concat(f, "-color-hover")] = g[4], n["".concat(f, "-color-active")] = g[7], n["".concat(f, "-color-outline")] = p.clone().setAlpha(0.2).toRgbString(), n["".concat(f, "-color-deprecated-bg")] = g[1], n["".concat(f, "-color-deprecated-border")] = g[3];
  };
  if (t.primaryColor) {
    i(t.primaryColor, "primary");
    var o = new Ru(t.primaryColor), a = ta(o.toRgbString());
    a.forEach(function(u, c) {
      n["primary-".concat(c + 1)] = u;
    }), n["primary-color-deprecated-l-35"] = r(o, function(u) {
      return u.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(o, function(u) {
      return u.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(o, function(u) {
      return u.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(o, function(u) {
      return u.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(o, function(u) {
      return u.setAlpha(u.getAlpha() * 0.12);
    });
    var l = new Ru(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, function(u) {
      return u.setAlpha(u.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(l, function(u) {
      return u.darken(2);
    });
  }
  t.successColor && i(t.successColor, "success"), t.warningColor && i(t.warningColor, "warning"), t.errorColor && i(t.errorColor, "error"), t.infoColor && i(t.infoColor, "info");
  var s = Object.keys(n).map(function(u) {
    return "--".concat(e, "-").concat(u, ": ").concat(n[u], ";");
  });
  return `
  :root {
    `.concat(s.join(`
`), `
  }
  `).trim();
}
function BE(e, t) {
  var n = WE(e, t);
  Dn() ? np(n, "".concat(jE, "-dynamic-theme")) : qe(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var UE = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "form"], HE = "ant", GE = "anticon", ls, C1;
function Il() {
  return ls || HE;
}
function KE() {
  return C1 || GE;
}
var YE = function(t) {
  var n = t.prefixCls, r = t.iconPrefixCls, i = t.theme;
  n !== void 0 && (ls = n), r !== void 0 && (C1 = r), i && BE(Il(), i);
}, op = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(Il(), "-").concat(n) : Il());
    },
    getIconPrefixCls: KE,
    getRootPrefixCls: function(n, r) {
      return n || ls || (r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : Il());
    }
  };
}, ZE = function(t) {
  var n, r, i = t.children, o = t.csp, a = t.autoInsertSpaceInButton, l = t.form, s = t.locale, u = t.componentSize, c = t.direction, f = t.space, p = t.virtual, g = t.dropdownMatchSelectWidth, h = t.legacyLocale, y = t.parentContext, w = t.iconPrefixCls, m = d.useCallback(function(T, E) {
    var D = t.prefixCls;
    if (E)
      return E;
    var F = D || y.getPrefixCls("");
    return T ? "".concat(F, "-").concat(T) : F;
  }, [y.getPrefixCls, t.prefixCls]), v = j(j({}, y), {
    csp: o,
    autoInsertSpaceInButton: a,
    locale: s || h,
    direction: c,
    space: f,
    virtual: p,
    dropdownMatchSelectWidth: g,
    getPrefixCls: m
  });
  UE.forEach(function(T) {
    var E = t[T];
    E && (v[T] = E);
  });
  var C = KS(function() {
    return v;
  }, v, function(T, E) {
    var D = Object.keys(T), F = Object.keys(E);
    return D.length !== F.length || D.some(function(z) {
      return T[z] !== E[z];
    });
  }), S = d.useMemo(function() {
    return {
      prefixCls: w,
      csp: o
    };
  }, [w, o]), b = i, I = {};
  return s && (I = ((n = s.Form) === null || n === void 0 ? void 0 : n.defaultValidateMessages) || ((r = lr.Form) === null || r === void 0 ? void 0 : r.defaultValidateMessages) || {}), l && l.validateMessages && (I = j(j({}, I), l.validateMessages)), Object.keys(I).length > 0 && (b = /* @__PURE__ */ d.createElement(rd, {
    validateMessages: I
  }, i)), s && (b = /* @__PURE__ */ d.createElement(ug, {
    locale: s,
    _ANT_MARK__: sg
  }, b)), (w || o) && (b = /* @__PURE__ */ d.createElement(id.Provider, {
    value: S
  }, b)), u && (b = /* @__PURE__ */ d.createElement(dg, {
    size: u
  }, b)), /* @__PURE__ */ d.createElement(Fe.Provider, {
    value: C
  }, b);
}, Yi = function(t) {
  return d.useEffect(function() {
    t.direction && (Jy.config({
      rtl: t.direction === "rtl"
    }), $E.config({
      rtl: t.direction === "rtl"
    }));
  }, [t.direction]), /* @__PURE__ */ d.createElement(Ui, null, function(n, r, i) {
    return /* @__PURE__ */ d.createElement(Vr, null, function(o) {
      return /* @__PURE__ */ d.createElement(ZE, j({
        parentContext: o,
        legacyLocale: i
      }, t));
    });
  });
};
Yi.ConfigContext = Fe;
Yi.SizeContext = Hi;
Yi.config = YE;
function hr(e, t) {
  var n = W({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
var zi = /* @__PURE__ */ d.createContext({
  labelAlign: "right",
  vertical: !1,
  itemRef: function() {
  }
}), hh = /* @__PURE__ */ d.createContext(null), qE = function(t) {
  var n = hr(t, ["prefixCls"]);
  return /* @__PURE__ */ d.createElement(rd, n);
}, ap = /* @__PURE__ */ d.createContext({
  prefixCls: ""
}), ga = /* @__PURE__ */ d.createContext({}), mh = function(t) {
  var n = t.children, r = d.useMemo(function() {
    return {};
  }, []);
  return /* @__PURE__ */ d.createElement(ga.Provider, {
    value: r
  }, n);
};
function gh(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function yh(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Fu(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return yh(n.overflowY, t) || yh(n.overflowX, t) || function(r) {
      var i = function(o) {
        if (!o.ownerDocument || !o.ownerDocument.defaultView)
          return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!i && (i.clientHeight < r.scrollHeight || i.clientWidth < r.scrollWidth);
    }(e);
  }
  return !1;
}
function Xa(e, t, n, r, i, o, a, l) {
  return o < e && a > t || o > e && a < t ? 0 : o <= e && l <= n || a >= t && l >= n ? o - e - r : a > t && l < n || o < e && l > n ? a - t + i : 0;
}
var Ch = function(e, t) {
  var n = window, r = t.scrollMode, i = t.block, o = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(fe) {
    return fe !== a;
  };
  if (!gh(e))
    throw new TypeError("Invalid target");
  for (var u, c, f = document.scrollingElement || document.documentElement, p = [], g = e; gh(g) && s(g); ) {
    if ((g = (c = (u = g).parentElement) == null ? u.getRootNode().host || null : c) === f) {
      p.push(g);
      break;
    }
    g != null && g === document.body && Fu(g) && !Fu(document.documentElement) || g != null && Fu(g, l) && p.push(g);
  }
  for (var h = n.visualViewport ? n.visualViewport.width : innerWidth, y = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, m = window.scrollY || pageYOffset, v = e.getBoundingClientRect(), C = v.height, S = v.width, b = v.top, I = v.right, T = v.bottom, E = v.left, D = i === "start" || i === "nearest" ? b : i === "end" ? T : b + C / 2, F = o === "center" ? E + S / 2 : o === "end" ? I : E, z = [], R = 0; R < p.length; R++) {
    var x = p[R], _ = x.getBoundingClientRect(), P = _.height, k = _.width, O = _.top, N = _.right, M = _.bottom, A = _.left;
    if (r === "if-needed" && b >= 0 && E >= 0 && T <= y && I <= h && b >= O && T <= M && E >= A && I <= N)
      return z;
    var $ = getComputedStyle(x), V = parseInt($.borderLeftWidth, 10), B = parseInt($.borderTopWidth, 10), H = parseInt($.borderRightWidth, 10), K = parseInt($.borderBottomWidth, 10), G = 0, le = 0, oe = "offsetWidth" in x ? x.offsetWidth - x.clientWidth - V - H : 0, J = "offsetHeight" in x ? x.offsetHeight - x.clientHeight - B - K : 0, pe = "offsetWidth" in x ? x.offsetWidth === 0 ? 0 : k / x.offsetWidth : 0, ae = "offsetHeight" in x ? x.offsetHeight === 0 ? 0 : P / x.offsetHeight : 0;
    if (f === x)
      G = i === "start" ? D : i === "end" ? D - y : i === "nearest" ? Xa(m, m + y, y, B, K, m + D, m + D + C, C) : D - y / 2, le = o === "start" ? F : o === "center" ? F - h / 2 : o === "end" ? F - h : Xa(w, w + h, h, V, H, w + F, w + F + S, S), G = Math.max(0, G + m), le = Math.max(0, le + w);
    else {
      G = i === "start" ? D - O - B : i === "end" ? D - M + K + J : i === "nearest" ? Xa(O, M, P, B, K + J, D, D + C, C) : D - (O + P / 2) + J / 2, le = o === "start" ? F - A - V : o === "center" ? F - (A + k / 2) + oe / 2 : o === "end" ? F - N + H + oe : Xa(A, N, k, V, H + oe, F, F + S, S);
      var ye = x.scrollLeft, se = x.scrollTop;
      D += se - (G = Math.max(0, Math.min(se + G / ae, x.scrollHeight - P / ae + J))), F += ye - (le = Math.max(0, Math.min(ye + le / pe, x.scrollWidth - k / pe + oe)));
    }
    z.push({ el: x, top: G, left: le });
  }
  return z;
};
function w1(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function QE(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(r) {
    var i = r.el, o = r.top, a = r.left;
    i.scroll && n ? i.scroll({
      top: o,
      left: a,
      behavior: t
    }) : (i.scrollTop = o, i.scrollLeft = a);
  });
}
function XE(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : w1(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function JE(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (w1(t) && typeof t.behavior == "function")
    return t.behavior(n ? Ch(e, t) : []);
  if (n) {
    var r = XE(t);
    return QE(Ch(e, r), r.behavior);
  }
}
var ek = ["parentNode"], tk = "form_item";
function Ro(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function S1(e, t) {
  if (e.length) {
    var n = e.join("_");
    if (t)
      return "".concat(t, "_").concat(n);
    var r = ek.indexOf(n) >= 0;
    return r ? "".concat(tk, "_").concat(n) : n;
  }
}
function wh(e) {
  var t = Ro(e);
  return t.join("_");
}
function b1(e) {
  var t = nd(), n = q(t, 1), r = n[0], i = d.useRef({}), o = d.useMemo(function() {
    return e ?? j(j({}, r), {
      __INTERNAL__: {
        itemRef: function(l) {
          return function(s) {
            var u = wh(l);
            s ? i.current[u] = s : delete i.current[u];
          };
        }
      },
      scrollToField: function(l) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = Ro(l), c = S1(u, o.__INTERNAL__.name), f = c ? document.getElementById(c) : null;
        f && JE(f, j({
          scrollMode: "if-needed",
          block: "nearest"
        }, s));
      },
      getFieldInstance: function(l) {
        var s = wh(l);
        return i.current[s];
      }
    });
  }, [e, r]);
  return [o];
}
var nk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, rk = function(t, n) {
  var r, i = d.useContext(Hi), o = d.useContext(Fe), a = o.getPrefixCls, l = o.direction, s = o.form, u = t.prefixCls, c = t.className, f = c === void 0 ? "" : c, p = t.size, g = p === void 0 ? i : p, h = t.form, y = t.colon, w = t.labelAlign, m = t.labelWrap, v = t.labelCol, C = t.wrapperCol, S = t.hideRequiredMark, b = t.layout, I = b === void 0 ? "horizontal" : b, T = t.scrollToFirstError, E = t.requiredMark, D = t.onFinishFailed, F = t.name, z = nk(t, ["prefixCls", "className", "size", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]), R = d.useMemo(function() {
    return E !== void 0 ? E : s && s.requiredMark !== void 0 ? s.requiredMark : !S;
  }, [S, E, s]), x = y ?? (s == null ? void 0 : s.colon), _ = a("form", u), P = X(_, (r = {}, L(r, "".concat(_, "-").concat(I), !0), L(r, "".concat(_, "-hide-required-mark"), R === !1), L(r, "".concat(_, "-rtl"), l === "rtl"), L(r, "".concat(_, "-").concat(g), g), r), f), k = b1(h), O = q(k, 1), N = O[0], M = N.__INTERNAL__;
  M.name = F;
  var A = d.useMemo(function() {
    return {
      name: F,
      labelAlign: w,
      labelCol: v,
      labelWrap: m,
      wrapperCol: C,
      vertical: I === "vertical",
      colon: x,
      requiredMark: R,
      itemRef: M.itemRef
    };
  }, [F, w, v, C, I, x, R]);
  d.useImperativeHandle(n, function() {
    return N;
  });
  var $ = function(B) {
    D == null || D(B);
    var H = {
      block: "nearest"
    };
    T && B.errorFields.length && (de(T) === "object" && (H = T), N.scrollToField(B.errorFields[0].name, H));
  };
  return /* @__PURE__ */ d.createElement(dg, {
    size: g
  }, /* @__PURE__ */ d.createElement(zi.Provider, {
    value: A
  }, /* @__PURE__ */ d.createElement(fa, j({
    id: F
  }, z, {
    name: F,
    onFinishFailed: $,
    form: N,
    className: P
  }))));
}, ik = /* @__PURE__ */ d.forwardRef(rk);
const ok = ik;
var ak = /* @__PURE__ */ d.createContext({});
const x1 = ak;
var cn = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n;
}, Sh = ["xxl", "xl", "lg", "md", "sm", "xs"], Ja = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
}, mr = /* @__PURE__ */ new Map(), Lu = -1, el = {}, lk = {
  matchHandlers: {},
  dispatch: function(t) {
    return el = t, mr.forEach(function(n) {
      return n(el);
    }), mr.size >= 1;
  },
  subscribe: function(t) {
    return mr.size || this.register(), Lu += 1, mr.set(Lu, t), t(el), Lu;
  },
  unsubscribe: function(t) {
    mr.delete(t), mr.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(Ja).forEach(function(n) {
      var r = Ja[n], i = t.matchHandlers[r];
      i == null || i.mql.removeListener(i == null ? void 0 : i.listener);
    }), mr.clear();
  },
  register: function() {
    var t = this;
    Object.keys(Ja).forEach(function(n) {
      var r = Ja[n], i = function(l) {
        var s = l.matches;
        t.dispatch(j(j({}, el), L({}, n, s)));
      }, o = window.matchMedia(r);
      o.addListener(i), t.matchHandlers[r] = {
        mql: o,
        listener: i
      }, i(o);
    });
  }
};
const bh = lk;
var E1 = function() {
  return Dn() && window.document.documentElement;
}, tl, sk = function() {
  if (!E1())
    return !1;
  if (tl !== void 0)
    return tl;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), tl = t.scrollHeight === 1, document.body.removeChild(t), tl;
};
const uk = function() {
  var e = d.useState(!1), t = q(e, 2), n = t[0], r = t[1];
  return d.useEffect(function() {
    r(sk());
  }, []), n;
};
var ck = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
cn("top", "middle", "bottom", "stretch");
cn("start", "end", "center", "space-around", "space-between");
var k1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e.prefixCls, i = e.justify, o = e.align, a = e.className, l = e.style, s = e.children, u = e.gutter, c = u === void 0 ? 0 : u, f = e.wrap, p = ck(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), g = d.useContext(Fe), h = g.getPrefixCls, y = g.direction, w = d.useState({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), m = q(w, 2), v = m[0], C = m[1], S = uk(), b = d.useRef(c);
  d.useEffect(function() {
    var N = bh.subscribe(function(M) {
      var A = b.current || 0;
      (!Array.isArray(A) && de(A) === "object" || Array.isArray(A) && (de(A[0]) === "object" || de(A[1]) === "object")) && C(M);
    });
    return function() {
      return bh.unsubscribe(N);
    };
  }, []);
  var I = function() {
    var M = [0, 0], A = Array.isArray(c) ? c : [c, 0];
    return A.forEach(function($, V) {
      if (de($) === "object")
        for (var B = 0; B < Sh.length; B++) {
          var H = Sh[B];
          if (v[H] && $[H] !== void 0) {
            M[V] = $[H];
            break;
          }
        }
      else
        M[V] = $ || 0;
    }), M;
  }, T = h("row", r), E = I(), D = X(T, (n = {}, L(n, "".concat(T, "-no-wrap"), f === !1), L(n, "".concat(T, "-").concat(i), i), L(n, "".concat(T, "-").concat(o), o), L(n, "".concat(T, "-rtl"), y === "rtl"), n), a), F = {}, z = E[0] > 0 ? E[0] / -2 : void 0, R = E[1] > 0 ? E[1] / -2 : void 0;
  if (z && (F.marginLeft = z, F.marginRight = z), S) {
    var x = q(E, 2);
    F.rowGap = x[1];
  } else
    R && (F.marginTop = R, F.marginBottom = R);
  var _ = q(E, 2), P = _[0], k = _[1], O = d.useMemo(function() {
    return {
      gutter: [P, k],
      wrap: f,
      supportFlexGap: S
    };
  }, [P, k, f, S]);
  return /* @__PURE__ */ d.createElement(x1.Provider, {
    value: O
  }, /* @__PURE__ */ d.createElement("div", j({}, p, {
    className: D,
    style: j(j({}, F), l),
    ref: t
  }), s));
});
k1.displayName = "Row";
const fk = k1;
var dk = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
const pk = dk;
var I1 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: pk
  }));
};
I1.displayName = "QuestionCircleOutlined";
const vk = /* @__PURE__ */ d.forwardRef(I1);
var hk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function mk(e) {
  return typeof e == "number" ? "".concat(e, " ").concat(e, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? "0 0 ".concat(e) : e;
}
var gk = ["xs", "sm", "md", "lg", "xl", "xxl"], N1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = d.useContext(Fe), i = r.getPrefixCls, o = r.direction, a = d.useContext(x1), l = a.gutter, s = a.wrap, u = a.supportFlexGap, c = e.prefixCls, f = e.span, p = e.order, g = e.offset, h = e.push, y = e.pull, w = e.className, m = e.children, v = e.flex, C = e.style, S = hk(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), b = i("col", c), I = {};
  gk.forEach(function(z) {
    var R, x = {}, _ = e[z];
    typeof _ == "number" ? x.span = _ : de(_) === "object" && (x = _ || {}), delete S[z], I = j(j({}, I), (R = {}, L(R, "".concat(b, "-").concat(z, "-").concat(x.span), x.span !== void 0), L(R, "".concat(b, "-").concat(z, "-order-").concat(x.order), x.order || x.order === 0), L(R, "".concat(b, "-").concat(z, "-offset-").concat(x.offset), x.offset || x.offset === 0), L(R, "".concat(b, "-").concat(z, "-push-").concat(x.push), x.push || x.push === 0), L(R, "".concat(b, "-").concat(z, "-pull-").concat(x.pull), x.pull || x.pull === 0), L(R, "".concat(b, "-rtl"), o === "rtl"), R));
  });
  var T = X(b, (n = {}, L(n, "".concat(b, "-").concat(f), f !== void 0), L(n, "".concat(b, "-order-").concat(p), p), L(n, "".concat(b, "-offset-").concat(g), g), L(n, "".concat(b, "-push-").concat(h), h), L(n, "".concat(b, "-pull-").concat(y), y), n), w, I), E = {};
  if (l && l[0] > 0) {
    var D = l[0] / 2;
    E.paddingLeft = D, E.paddingRight = D;
  }
  if (l && l[1] > 0 && !u) {
    var F = l[1] / 2;
    E.paddingTop = F, E.paddingBottom = F;
  }
  return v && (E.flex = mk(v), s === !1 && !E.minWidth && (E.minWidth = 0)), /* @__PURE__ */ d.createElement("div", j({}, S, {
    style: j(j({}, E), C),
    className: T,
    ref: t
  }), m);
});
N1.displayName = "Col";
const T1 = N1;
function ho(e, t, n, r) {
  var i = cr.unstable_batchedUpdates ? function(a) {
    cr.unstable_batchedUpdates(n, a);
  } : n;
  return e.addEventListener && e.addEventListener(t, i, r), {
    remove: function() {
      e.removeEventListener && e.removeEventListener(t, i, r);
    }
  };
}
var P1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.didUpdate, r = e.getContainer, i = e.children, o = d.useRef(), a = d.useRef();
  d.useImperativeHandle(t, function() {
    return {};
  });
  var l = d.useRef(!1);
  return !l.current && Dn() && (a.current = r(), o.current = a.current.parentNode, l.current = !0), d.useEffect(function() {
    n == null || n(e);
  }), d.useEffect(function() {
    return a.current.parentNode === null && o.current !== null && o.current.appendChild(a.current), function() {
      var s, u;
      (s = a.current) === null || s === void 0 || (u = s.parentNode) === null || u === void 0 || u.removeChild(a.current);
    };
  }, []), a.current ? /* @__PURE__ */ cr.createPortal(i, a.current) : null;
});
function yk(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Ck(e, t, n) {
  var r = e[t] || {};
  return W(W({}, r), n);
}
function wk(e, t, n, r) {
  for (var i = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
    var l = o[a];
    if (yk(e[l].points, i, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
const Sk = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function O1(e) {
  var t = e.prefixCls, n = e.motion, r = e.animation, i = e.transitionName;
  return n || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : i ? {
    motionName: i
  } : null);
}
function bk(e) {
  var t = e.prefixCls, n = e.visible, r = e.zIndex, i = e.mask, o = e.maskMotion, a = e.maskAnimation, l = e.maskTransitionName;
  if (!i)
    return null;
  var s = {};
  return (o || l || a) && (s = W({
    motionAppear: !0
  }, O1({
    motion: o,
    prefixCls: t,
    transitionName: l,
    animation: a
  }))), /* @__PURE__ */ d.createElement(vr, j({}, s, {
    visible: n,
    removeOnLeave: !0
  }), function(u) {
    var c = u.className;
    return /* @__PURE__ */ d.createElement("div", {
      style: {
        zIndex: r
      },
      className: X("".concat(t, "-mask"), c)
    });
  });
}
function xh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xh(Object(n), !0).forEach(function(r) {
      xk(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rf(e) {
  return Rf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rf(e);
}
function xk(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var so, Ek = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function ss() {
  if (so !== void 0)
    return so;
  so = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Ek)
    n + t in e && (so = n);
  return so;
}
function R1() {
  return ss() ? "".concat(ss(), "TransitionProperty") : "transitionProperty";
}
function Gs() {
  return ss() ? "".concat(ss(), "Transform") : "transform";
}
function kh(e, t) {
  var n = R1();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function Du(e, t) {
  var n = Gs();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function kk(e) {
  return e.style.transitionProperty || e.style[R1()];
}
function Ik(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(Gs());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var Nk = /matrix\((.*)\)/, Tk = /matrix3d\((.*)\)/;
function Pk(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(Gs());
  if (r && r !== "none") {
    var i, o = r.match(Nk);
    if (o)
      o = o[1], i = o.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), i[4] = t.x, i[5] = t.y, Du(e, "matrix(".concat(i.join(","), ")"));
    else {
      var a = r.match(Tk)[1];
      i = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), i[12] = t.x, i[13] = t.y, Du(e, "matrix3d(".concat(i.join(","), ")"));
    }
  } else
    Du(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Ok = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ya;
function Ih(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Ii(e, t, n) {
  var r = n;
  if (Rf(t) === "object") {
    for (var i in t)
      t.hasOwnProperty(i) && Ii(e, i, t[i]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return ya(e, t);
}
function Rk(e) {
  var t, n, r, i = e.ownerDocument, o = i.body, a = i && i.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || o.clientLeft || 0, r -= a.clientTop || o.clientTop || 0, {
    left: n,
    top: r
  };
}
function _1(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var i = e.document;
    n = i.documentElement[r], typeof n != "number" && (n = i.body[r]);
  }
  return n;
}
function A1(e) {
  return _1(e);
}
function M1(e) {
  return _1(e, !0);
}
function ra(e) {
  var t = Rk(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += A1(r), t.top += M1(r), t;
}
function lp(e) {
  return e != null && e == e.window;
}
function F1(e) {
  return lp(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function _k(e, t, n) {
  var r = n, i = "", o = F1(e);
  return r = r || o.defaultView.getComputedStyle(e, null), r && (i = r.getPropertyValue(t) || r[t]), i;
}
var Ak = new RegExp("^(".concat(Ok, ")(?!px)[a-z%]+$"), "i"), Mk = /^(top|right|bottom|left)$/, Vu = "currentStyle", zu = "runtimeStyle", gr = "left", Fk = "px";
function Lk(e, t) {
  var n = e[Vu] && e[Vu][t];
  if (Ak.test(n) && !Mk.test(t)) {
    var r = e.style, i = r[gr], o = e[zu][gr];
    e[zu][gr] = e[Vu][gr], r[gr] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + Fk, r[gr] = i, e[zu][gr] = o;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (ya = window.getComputedStyle ? _k : Lk);
function nl(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Nh(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Th(e, t, n) {
  Ii(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, i = -999, o = nl("left", n), a = nl("top", n), l = Nh(o), s = Nh(a);
  o !== "left" && (r = 999), a !== "top" && (i = 999);
  var u = "", c = ra(e);
  ("left" in t || "top" in t) && (u = kk(e) || "", kh(e, "none")), "left" in t && (e.style[l] = "", e.style[o] = "".concat(r, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(i, "px")), Ih(e);
  var f = ra(e), p = {};
  for (var g in t)
    if (t.hasOwnProperty(g)) {
      var h = nl(g, n), y = g === "left" ? r : i, w = c[g] - f[g];
      h === g ? p[h] = y + w : p[h] = y - w;
    }
  Ii(e, p), Ih(e), ("left" in t || "top" in t) && kh(e, u);
  var m = {};
  for (var v in t)
    if (t.hasOwnProperty(v)) {
      var C = nl(v, n), S = t[v] - c[v];
      v === C ? m[C] = p[C] + S : m[C] = p[C] - S;
    }
  Ii(e, m);
}
function Dk(e, t) {
  var n = ra(e), r = Ik(e), i = {
    x: r.x,
    y: r.y
  };
  "left" in t && (i.x = r.x + t.left - n.left), "top" in t && (i.y = r.y + t.top - n.top), Pk(e, i);
}
function Vk(e, t, n) {
  if (n.ignoreShake) {
    var r = ra(e), i = r.left.toFixed(0), o = r.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (i === a && o === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? Th(e, t, n) : n.useCssTransform && Gs() in document.body.style ? Dk(e, t) : Th(e, t, n);
}
function sp(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function L1(e) {
  return ya(e, "boxSizing") === "border-box";
}
var zk = ["margin", "border", "padding"], _f = -1, $k = 2, Af = 1, jk = 0;
function Wk(e, t, n) {
  var r = {}, i = e.style, o;
  for (o in t)
    t.hasOwnProperty(o) && (r[o] = i[o], i[o] = t[o]);
  n.call(e);
  for (o in t)
    t.hasOwnProperty(o) && (i[o] = r[o]);
}
function mo(e, t, n) {
  var r = 0, i, o, a;
  for (o = 0; o < t.length; o++)
    if (i = t[o], i)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        i === "border" ? l = "".concat(i).concat(n[a], "Width") : l = i + n[a], r += parseFloat(ya(e, l)) || 0;
      }
  return r;
}
var mn = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
sp(["Width", "Height"], function(e) {
  mn["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      mn["viewport".concat(e)](n)
    );
  }, mn["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, i = r.body, o = r.documentElement, a = o[n];
    return r.compatMode === "CSS1Compat" && a || i && i[n] || a;
  };
});
function Ph(e, t, n) {
  var r = n;
  if (lp(e))
    return t === "width" ? mn.viewportWidth(e) : mn.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? mn.docWidth(e) : mn.docHeight(e);
  var i = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], o = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = L1(e), l = 0;
  (o == null || o <= 0) && (o = void 0, l = ya(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = a ? Af : _f);
  var s = o !== void 0 || a, u = o || l;
  return r === _f ? s ? u - mo(e, ["border", "padding"], i) : l : s ? r === Af ? u : u + (r === $k ? -mo(e, ["border"], i) : mo(e, ["margin"], i)) : l + mo(e, zk.slice(r), i);
}
var Bk = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Oh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, i = t[0];
  return i.offsetWidth !== 0 ? r = Ph.apply(void 0, t) : Wk(i, Bk, function() {
    r = Ph.apply(void 0, t);
  }), r;
}
sp(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  mn["outer".concat(t)] = function(r, i) {
    return r && Oh(r, e, i ? jk : Af);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  mn[e] = function(r, i) {
    var o = i;
    if (o !== void 0) {
      if (r) {
        var a = L1(r);
        return a && (o += mo(r, ["padding", "border"], n)), Ii(r, e, o);
      }
      return;
    }
    return r && Oh(r, e, _f);
  };
});
function D1(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var ue = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: F1,
  offset: function(t, n, r) {
    if (typeof n < "u")
      Vk(t, n, r || {});
    else
      return ra(t);
  },
  isWindow: lp,
  each: sp,
  css: Ii,
  clone: function(t) {
    var n, r = {};
    for (n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    var i = t.overflow;
    if (i)
      for (n in t)
        t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
    return r;
  },
  mix: D1,
  getWindowScrollLeft: function(t) {
    return A1(t);
  },
  getWindowScrollTop: function(t) {
    return M1(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      ue.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
D1(ue, mn);
var $u = ue.getParent;
function Mf(e) {
  if (ue.isWindow(e) || e.nodeType === 9)
    return null;
  var t = ue.getDocument(e), n = t.body, r, i = ue.css(e, "position"), o = i === "fixed" || i === "absolute";
  if (!o)
    return e.nodeName.toLowerCase() === "html" ? null : $u(e);
  for (r = $u(e); r && r !== n && r.nodeType !== 9; r = $u(r))
    if (i = ue.css(r, "position"), i !== "static")
      return r;
  return null;
}
var Rh = ue.getParent;
function Uk(e) {
  if (ue.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = ue.getDocument(e), n = t.body, r = null;
  for (
    r = Rh(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = Rh(r)
  ) {
    var i = ue.css(r, "position");
    if (i === "fixed")
      return !0;
  }
  return !1;
}
function up(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Mf(e), i = ue.getDocument(e), o = i.defaultView || i.parentWindow, a = i.body, l = i.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== l && ue.css(r, "overflow") !== "visible") {
      var s = ue.offset(r);
      s.left += r.clientLeft, s.top += r.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + r.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (r === a || r === l)
      break;
    r = Mf(r);
  }
  var u = null;
  if (!ue.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var c = ue.css(e, "position");
    c === "absolute" && (e.style.position = "fixed");
  }
  var f = ue.getWindowScrollLeft(o), p = ue.getWindowScrollTop(o), g = ue.viewportWidth(o), h = ue.viewportHeight(o), y = l.scrollWidth, w = l.scrollHeight, m = window.getComputedStyle(a);
  if (m.overflowX === "hidden" && (y = o.innerWidth), m.overflowY === "hidden" && (w = o.innerHeight), e.style && (e.style.position = u), t || Uk(e))
    n.left = Math.max(n.left, f), n.top = Math.max(n.top, p), n.right = Math.min(n.right, f + g), n.bottom = Math.min(n.bottom, p + h);
  else {
    var v = Math.max(y, f + g);
    n.right = Math.min(n.right, v);
    var C = Math.max(w, p + h);
    n.bottom = Math.min(n.bottom, C);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Hk(e, t, n, r) {
  var i = ue.clone(e), o = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && i.left < n.left && (i.left = n.left), r.resizeWidth && i.left >= n.left && i.left + o.width > n.right && (o.width -= i.left + o.width - n.right), r.adjustX && i.left + o.width > n.right && (i.left = Math.max(n.right - o.width, n.left)), r.adjustY && i.top < n.top && (i.top = n.top), r.resizeHeight && i.top >= n.top && i.top + o.height > n.bottom && (o.height -= i.top + o.height - n.bottom), r.adjustY && i.top + o.height > n.bottom && (i.top = Math.max(n.bottom - o.height, n.top)), ue.mix(i, o);
}
function cp(e) {
  var t, n, r;
  if (!ue.isWindow(e) && e.nodeType !== 9)
    t = ue.offset(e), n = ue.outerWidth(e), r = ue.outerHeight(e);
  else {
    var i = ue.getWindow(e);
    t = {
      left: ue.getWindowScrollLeft(i),
      top: ue.getWindowScrollTop(i)
    }, n = ue.viewportWidth(i), r = ue.viewportHeight(i);
  }
  return t.width = n, t.height = r, t;
}
function _h(e, t) {
  var n = t.charAt(0), r = t.charAt(1), i = e.width, o = e.height, a = e.left, l = e.top;
  return n === "c" ? l += o / 2 : n === "b" && (l += o), r === "c" ? a += i / 2 : r === "r" && (a += i), {
    left: a,
    top: l
  };
}
function rl(e, t, n, r, i) {
  var o = _h(t, n[1]), a = _h(e, n[0]), l = [a.left - o.left, a.top - o.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - i[0]),
    top: Math.round(e.top - l[1] + r[1] - i[1])
  };
}
function Ah(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Mh(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Gk(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Kk(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function il(e, t, n) {
  var r = [];
  return ue.each(e, function(i) {
    r.push(i.replace(t, function(o) {
      return n[o];
    }));
  }), r;
}
function ol(e, t) {
  return e[t] = -e[t], e;
}
function Fh(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Lh(e, t) {
  e[0] = Fh(e[0], t.width), e[1] = Fh(e[1], t.height);
}
function V1(e, t, n, r) {
  var i = n.points, o = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  o = [].concat(o), a = [].concat(a), l = l || {};
  var u = {}, c = 0, f = !!(l && l.alwaysByViewport), p = up(s, f), g = cp(s);
  Lh(o, g), Lh(a, t);
  var h = rl(g, t, i, o, a), y = ue.merge(g, h);
  if (p && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && Ah(h, g, p)) {
      var w = il(i, /[lr]/gi, {
        l: "r",
        r: "l"
      }), m = ol(o, 0), v = ol(a, 0), C = rl(g, t, w, m, v);
      Gk(C, g, p) || (c = 1, i = w, o = m, a = v);
    }
    if (l.adjustY && Mh(h, g, p)) {
      var S = il(i, /[tb]/gi, {
        t: "b",
        b: "t"
      }), b = ol(o, 1), I = ol(a, 1), T = rl(g, t, S, b, I);
      Kk(T, g, p) || (c = 1, i = S, o = b, a = I);
    }
    c && (h = rl(g, t, i, o, a), ue.mix(y, h));
    var E = Ah(h, g, p), D = Mh(h, g, p);
    if (E || D) {
      var F = i;
      E && (F = il(i, /[lr]/gi, {
        l: "r",
        r: "l"
      })), D && (F = il(i, /[tb]/gi, {
        t: "b",
        b: "t"
      })), i = F, o = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    u.adjustX = l.adjustX && E, u.adjustY = l.adjustY && D, (u.adjustX || u.adjustY) && (y = Hk(h, g, p, u));
  }
  return y.width !== g.width && ue.css(s, "width", ue.width(s) + y.width - g.width), y.height !== g.height && ue.css(s, "height", ue.height(s) + y.height - g.height), ue.offset(s, {
    left: y.left,
    top: y.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: i,
    offset: o,
    targetOffset: a,
    overflow: u
  };
}
function Yk(e, t) {
  var n = up(e, t), r = cp(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function fp(e, t, n) {
  var r = n.target || t, i = cp(r), o = !Yk(r, n.overflow && n.overflow.alwaysByViewport);
  return V1(e, i, n, o);
}
fp.__getOffsetParent = Mf;
fp.__getVisibleRectForElement = up;
function Zk(e, t, n) {
  var r, i, o = ue.getDocument(e), a = o.defaultView || o.parentWindow, l = ue.getWindowScrollLeft(a), s = ue.getWindowScrollTop(a), u = ue.viewportWidth(a), c = ue.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = l + t.clientX, "pageY" in t ? i = t.pageY : i = s + t.clientY;
  var f = {
    left: r,
    top: i,
    width: 0,
    height: 0
  }, p = r >= 0 && r <= l + u && i >= 0 && i <= s + c, g = [n.points[0], "cc"];
  return V1(e, f, Eh(Eh({}, n), {}, {
    points: g
  }), p);
}
function qk(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function i(o, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(o);
    if (an(!s, "Warning: There may be circular references"), s)
      return !1;
    if (o === a)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(o);
    var u = l + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length)
        return !1;
      for (var c = 0; c < o.length; c++)
        if (!i(o[c], a[c], u))
          return !1;
      return !0;
    }
    if (o && a && de(o) === "object" && de(a) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(p) {
        return i(o[p], a[p], u);
      });
    }
    return !1;
  }
  return i(e, t);
}
const Qk = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect(), o = i.width, a = i.height;
      if (o || a)
        return !0;
    }
  }
  return !1;
};
var ia = Dn() ? d.useLayoutEffect : d.useEffect, Dh = function(t, n) {
  var r = d.useRef(!0);
  ia(function() {
    if (!r.current)
      return t();
  }, n), ia(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
};
const Xk = function(e, t) {
  var n = ee.useRef(!1), r = ee.useRef(null);
  function i() {
    window.clearTimeout(r.current);
  }
  function o(a) {
    if (i(), !n.current || a === !0) {
      if (e(a) === !1)
        return;
      n.current = !0, r.current = window.setTimeout(function() {
        n.current = !1;
      }, t);
    } else
      r.current = window.setTimeout(function() {
        n.current = !1, o();
      }, t);
  }
  return [o, function() {
    n.current = !1, i();
  }];
};
var z1 = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, t.prototype.set = function(n, r) {
        var i = e(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, i = e(r, n);
        ~i && r.splice(i, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var a = o[i];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Ff = typeof window < "u" && typeof document < "u" && window.document === document, us = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Jk = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(us) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), eI = 2;
function tI(e, t) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, e()), r && l();
  }
  function a() {
    Jk(o);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - i < eI)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    i = s;
  }
  return l;
}
var nI = 20, rI = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], iI = typeof MutationObserver < "u", oI = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = tI(this.refresh.bind(this), nI);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ff || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), iI ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ff || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, i = rI.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), $1 = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, $i = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || us;
}, j1 = Ks(0, 0, 0, 0);
function cs(e) {
  return parseFloat(e) || 0;
}
function Vh(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, i) {
    var o = e["border-" + i + "-width"];
    return r + cs(o);
  }, 0);
}
function aI(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
    var o = i[r], a = e["padding-" + o];
    n[o] = cs(a);
  }
  return n;
}
function lI(e) {
  var t = e.getBBox();
  return Ks(0, 0, t.width, t.height);
}
function sI(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return j1;
  var r = $i(e).getComputedStyle(e), i = aI(r), o = i.left + i.right, a = i.top + i.bottom, l = cs(r.width), s = cs(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= Vh(r, "left", "right") + o), Math.round(s + a) !== n && (s -= Vh(r, "top", "bottom") + a)), !cI(e)) {
    var u = Math.round(l + o) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Ks(i.left, i.top, l, s);
}
var uI = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof $i(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof $i(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function cI(e) {
  return e === $i(e).document.documentElement;
}
function fI(e) {
  return Ff ? uI(e) ? lI(e) : sI(e) : j1;
}
function dI(e) {
  var t = e.x, n = e.y, r = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return $1(a, {
    x: t,
    y: n,
    width: r,
    height: i,
    top: n,
    right: t + r,
    bottom: i + n,
    left: t
  }), a;
}
function Ks(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var pI = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ks(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = fI(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), vI = (
  /** @class */
  function() {
    function e(t, n) {
      var r = dI(n);
      $1(this, { target: t, contentRect: r });
    }
    return e;
  }()
), hI = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new z1(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof $i(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new pI(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof $i(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new vI(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), W1 = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new z1(), B1 = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = oI.getInstance(), r = new hI(t, n, this);
      W1.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  B1.prototype[e] = function() {
    var t;
    return (t = W1.get(this))[e].apply(t, arguments);
  };
});
var U1 = function() {
  return typeof us.ResizeObserver < "u" ? us.ResizeObserver : B1;
}();
function mI(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function gI(e, t) {
  e !== document.activeElement && ki(t, e) && typeof e.focus == "function" && e.focus();
}
function zh(e, t) {
  var n = null, r = null;
  function i(a) {
    var l = q(a, 1), s = l[0].target;
    if (document.documentElement.contains(s)) {
      var u = s.getBoundingClientRect(), c = u.width, f = u.height, p = Math.floor(c), g = Math.floor(f);
      (n !== p || r !== g) && Promise.resolve().then(function() {
        t({
          width: p,
          height: g
        });
      }), n = p, r = g;
    }
  }
  var o = new U1(i);
  return e && o.observe(e), function() {
    o.disconnect();
  };
}
function $h(e) {
  return typeof e != "function" ? null : e();
}
function jh(e) {
  return de(e) !== "object" || !e ? null : e;
}
var yI = function(t, n) {
  var r = t.children, i = t.disabled, o = t.target, a = t.align, l = t.onAlign, s = t.monitorWindowResize, u = t.monitorBufferTime, c = u === void 0 ? 0 : u, f = ee.useRef({}), p = ee.useRef(), g = ee.Children.only(r), h = ee.useRef({});
  h.current.disabled = i, h.current.target = o, h.current.align = a, h.current.onAlign = l;
  var y = Xk(function() {
    var z = h.current, R = z.disabled, x = z.target, _ = z.align, P = z.onAlign, k = p.current;
    if (!R && x && k) {
      var O, N = $h(x), M = jh(x);
      f.current.element = N, f.current.point = M, f.current.align = _;
      var A = document, $ = A.activeElement;
      return N && Qk(N) ? O = fp(k, N, _) : M && (O = Zk(k, M, _)), gI($, k), P && O && P(k, O), !0;
    }
    return !1;
  }, c), w = q(y, 2), m = w[0], v = w[1], C = ee.useState(), S = q(C, 2), b = S[0], I = S[1], T = ee.useState(), E = q(T, 2), D = E[0], F = E[1];
  return ia(function() {
    I($h(o)), F(jh(o));
  }), ee.useEffect(function() {
    (f.current.element !== b || !mI(f.current.point, D) || !qk(f.current.align, a)) && m();
  }), ee.useEffect(function() {
    var z = zh(p.current, m);
    return z;
  }, [p.current]), ee.useEffect(function() {
    var z = zh(b, m);
    return z;
  }, [b]), ee.useEffect(function() {
    i ? v() : m();
  }, [i]), ee.useEffect(function() {
    if (s) {
      var z = ho(window, "resize", m);
      return z.remove;
    }
  }, [s]), ee.useEffect(function() {
    return function() {
      v();
    };
  }, []), ee.useImperativeHandle(n, function() {
    return {
      forceAlign: function() {
        return m(!0);
      }
    };
  }), /* @__PURE__ */ ee.isValidElement(g) && (g = /* @__PURE__ */ ee.cloneElement(g, {
    ref: jr(g.ref, p)
  })), g;
}, H1 = /* @__PURE__ */ ee.forwardRef(yI);
H1.displayName = "Align";
function Lf() {
  Lf = function() {
    return e;
  };
  var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(R, x, _) {
    R[x] = _.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", l = i.toStringTag || "@@toStringTag";
  function s(R, x, _) {
    return Object.defineProperty(R, x, {
      value: _,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[x];
  }
  try {
    s({}, "");
  } catch {
    s = function(_, P, k) {
      return _[P] = k;
    };
  }
  function u(R, x, _, P) {
    var k = x && x.prototype instanceof p ? x : p, O = Object.create(k.prototype), N = new D(P || []);
    return r(O, "_invoke", {
      value: b(R, _, N)
    }), O;
  }
  function c(R, x, _) {
    try {
      return {
        type: "normal",
        arg: R.call(x, _)
      };
    } catch (P) {
      return {
        type: "throw",
        arg: P
      };
    }
  }
  e.wrap = u;
  var f = {};
  function p() {
  }
  function g() {
  }
  function h() {
  }
  var y = {};
  s(y, o, function() {
    return this;
  });
  var w = Object.getPrototypeOf, m = w && w(w(F([])));
  m && m !== t && n.call(m, o) && (y = m);
  var v = h.prototype = p.prototype = Object.create(y);
  function C(R) {
    ["next", "throw", "return"].forEach(function(x) {
      s(R, x, function(_) {
        return this._invoke(x, _);
      });
    });
  }
  function S(R, x) {
    function _(k, O, N, M) {
      var A = c(R[k], R, O);
      if (A.type !== "throw") {
        var $ = A.arg, V = $.value;
        return V && de(V) == "object" && n.call(V, "__await") ? x.resolve(V.__await).then(function(B) {
          _("next", B, N, M);
        }, function(B) {
          _("throw", B, N, M);
        }) : x.resolve(V).then(function(B) {
          $.value = B, N($);
        }, function(B) {
          return _("throw", B, N, M);
        });
      }
      M(A.arg);
    }
    var P;
    r(this, "_invoke", {
      value: function(O, N) {
        function M() {
          return new x(function(A, $) {
            _(O, N, A, $);
          });
        }
        return P = P ? P.then(M, M) : M();
      }
    });
  }
  function b(R, x, _) {
    var P = "suspendedStart";
    return function(k, O) {
      if (P === "executing")
        throw new Error("Generator is already running");
      if (P === "completed") {
        if (k === "throw")
          throw O;
        return z();
      }
      for (_.method = k, _.arg = O; ; ) {
        var N = _.delegate;
        if (N) {
          var M = I(N, _);
          if (M) {
            if (M === f)
              continue;
            return M;
          }
        }
        if (_.method === "next")
          _.sent = _._sent = _.arg;
        else if (_.method === "throw") {
          if (P === "suspendedStart")
            throw P = "completed", _.arg;
          _.dispatchException(_.arg);
        } else
          _.method === "return" && _.abrupt("return", _.arg);
        P = "executing";
        var A = c(R, x, _);
        if (A.type === "normal") {
          if (P = _.done ? "completed" : "suspendedYield", A.arg === f)
            continue;
          return {
            value: A.arg,
            done: _.done
          };
        }
        A.type === "throw" && (P = "completed", _.method = "throw", _.arg = A.arg);
      }
    };
  }
  function I(R, x) {
    var _ = x.method, P = R.iterator[_];
    if (P === void 0)
      return x.delegate = null, _ === "throw" && R.iterator.return && (x.method = "return", x.arg = void 0, I(R, x), x.method === "throw") || _ !== "return" && (x.method = "throw", x.arg = new TypeError("The iterator does not provide a '" + _ + "' method")), f;
    var k = c(P, R.iterator, x.arg);
    if (k.type === "throw")
      return x.method = "throw", x.arg = k.arg, x.delegate = null, f;
    var O = k.arg;
    return O ? O.done ? (x[R.resultName] = O.value, x.next = R.nextLoc, x.method !== "return" && (x.method = "next", x.arg = void 0), x.delegate = null, f) : O : (x.method = "throw", x.arg = new TypeError("iterator result is not an object"), x.delegate = null, f);
  }
  function T(R) {
    var x = {
      tryLoc: R[0]
    };
    1 in R && (x.catchLoc = R[1]), 2 in R && (x.finallyLoc = R[2], x.afterLoc = R[3]), this.tryEntries.push(x);
  }
  function E(R) {
    var x = R.completion || {};
    x.type = "normal", delete x.arg, R.completion = x;
  }
  function D(R) {
    this.tryEntries = [{
      tryLoc: "root"
    }], R.forEach(T, this), this.reset(!0);
  }
  function F(R) {
    if (R) {
      var x = R[o];
      if (x)
        return x.call(R);
      if (typeof R.next == "function")
        return R;
      if (!isNaN(R.length)) {
        var _ = -1, P = function k() {
          for (; ++_ < R.length; )
            if (n.call(R, _))
              return k.value = R[_], k.done = !1, k;
          return k.value = void 0, k.done = !0, k;
        };
        return P.next = P;
      }
    }
    return {
      next: z
    };
  }
  function z() {
    return {
      value: void 0,
      done: !0
    };
  }
  return g.prototype = h, r(v, "constructor", {
    value: h,
    configurable: !0
  }), r(h, "constructor", {
    value: g,
    configurable: !0
  }), g.displayName = s(h, l, "GeneratorFunction"), e.isGeneratorFunction = function(R) {
    var x = typeof R == "function" && R.constructor;
    return !!x && (x === g || (x.displayName || x.name) === "GeneratorFunction");
  }, e.mark = function(R) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(R, h) : (R.__proto__ = h, s(R, l, "GeneratorFunction")), R.prototype = Object.create(v), R;
  }, e.awrap = function(R) {
    return {
      __await: R
    };
  }, C(S.prototype), s(S.prototype, a, function() {
    return this;
  }), e.AsyncIterator = S, e.async = function(R, x, _, P, k) {
    k === void 0 && (k = Promise);
    var O = new S(u(R, x, _, P), k);
    return e.isGeneratorFunction(x) ? O : O.next().then(function(N) {
      return N.done ? N.value : O.next();
    });
  }, C(v), s(v, l, "Generator"), s(v, o, function() {
    return this;
  }), s(v, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(R) {
    var x = Object(R), _ = [];
    for (var P in x)
      _.push(P);
    return _.reverse(), function k() {
      for (; _.length; ) {
        var O = _.pop();
        if (O in x)
          return k.value = O, k.done = !1, k;
      }
      return k.done = !0, k;
    };
  }, e.values = F, D.prototype = {
    constructor: D,
    reset: function(x) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !x)
        for (var _ in this)
          _.charAt(0) === "t" && n.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = void 0);
    },
    stop: function() {
      this.done = !0;
      var x = this.tryEntries[0].completion;
      if (x.type === "throw")
        throw x.arg;
      return this.rval;
    },
    dispatchException: function(x) {
      if (this.done)
        throw x;
      var _ = this;
      function P($, V) {
        return N.type = "throw", N.arg = x, _.next = $, V && (_.method = "next", _.arg = void 0), !!V;
      }
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var O = this.tryEntries[k], N = O.completion;
        if (O.tryLoc === "root")
          return P("end");
        if (O.tryLoc <= this.prev) {
          var M = n.call(O, "catchLoc"), A = n.call(O, "finallyLoc");
          if (M && A) {
            if (this.prev < O.catchLoc)
              return P(O.catchLoc, !0);
            if (this.prev < O.finallyLoc)
              return P(O.finallyLoc);
          } else if (M) {
            if (this.prev < O.catchLoc)
              return P(O.catchLoc, !0);
          } else {
            if (!A)
              throw new Error("try statement without catch or finally");
            if (this.prev < O.finallyLoc)
              return P(O.finallyLoc);
          }
        }
      }
    },
    abrupt: function(x, _) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var k = this.tryEntries[P];
        if (k.tryLoc <= this.prev && n.call(k, "finallyLoc") && this.prev < k.finallyLoc) {
          var O = k;
          break;
        }
      }
      O && (x === "break" || x === "continue") && O.tryLoc <= _ && _ <= O.finallyLoc && (O = null);
      var N = O ? O.completion : {};
      return N.type = x, N.arg = _, O ? (this.method = "next", this.next = O.finallyLoc, f) : this.complete(N);
    },
    complete: function(x, _) {
      if (x.type === "throw")
        throw x.arg;
      return x.type === "break" || x.type === "continue" ? this.next = x.arg : x.type === "return" ? (this.rval = this.arg = x.arg, this.method = "return", this.next = "end") : x.type === "normal" && _ && (this.next = _), f;
    },
    finish: function(x) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var P = this.tryEntries[_];
        if (P.finallyLoc === x)
          return this.complete(P.completion, P.afterLoc), E(P), f;
      }
    },
    catch: function(x) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var P = this.tryEntries[_];
        if (P.tryLoc === x) {
          var k = P.completion;
          if (k.type === "throw") {
            var O = k.arg;
            E(P);
          }
          return O;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(x, _, P) {
      return this.delegate = {
        iterator: F(x),
        resultName: _,
        nextLoc: P
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
var Wh = ["measure", "alignPre", "align", null, "motion"];
const CI = function(e, t) {
  var n = Pn(null), r = q(n, 2), i = r[0], o = r[1], a = d.useRef();
  function l(c) {
    o(c, !0);
  }
  function s() {
    lt.cancel(a.current);
  }
  function u(c) {
    s(), a.current = lt(function() {
      l(function(f) {
        switch (i) {
          case "align":
            return "motion";
          case "motion":
            return "stable";
        }
        return f;
      }), c == null || c();
    });
  }
  return d.useEffect(function() {
    l("measure");
  }, [e]), d.useEffect(function() {
    switch (i) {
      case "measure":
        t();
        break;
    }
    i && (a.current = lt(/* @__PURE__ */ ua(/* @__PURE__ */ Lf().mark(function c() {
      var f, p;
      return Lf().wrap(function(h) {
        for (; ; )
          switch (h.prev = h.next) {
            case 0:
              f = Wh.indexOf(i), p = Wh[f + 1], p && f !== -1 && l(p);
            case 3:
            case "end":
              return h.stop();
          }
      }, c);
    }))));
  }, [i]), d.useEffect(function() {
    return function() {
      s();
    };
  }, []), [i, u];
}, wI = function(e) {
  var t = d.useState({
    width: 0,
    height: 0
  }), n = q(t, 2), r = n[0], i = n[1];
  function o(l) {
    var s = l.offsetWidth, u = l.offsetHeight, c = l.getBoundingClientRect(), f = c.width, p = c.height;
    Math.abs(s - f) < 1 && Math.abs(u - p) < 1 && (s = f, u = p), i({
      width: s,
      height: u
    });
  }
  var a = d.useMemo(function() {
    var l = {};
    if (e) {
      var s = r.width, u = r.height;
      e.indexOf("height") !== -1 && u ? l.height = u : e.indexOf("minHeight") !== -1 && u && (l.minHeight = u), e.indexOf("width") !== -1 && s ? l.width = s : e.indexOf("minWidth") !== -1 && s && (l.minWidth = s);
    }
    return l;
  }, [e, r]);
  return [a, o];
};
var G1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.visible, r = e.prefixCls, i = e.className, o = e.style, a = e.children, l = e.zIndex, s = e.stretch, u = e.destroyPopupOnHide, c = e.forceRender, f = e.align, p = e.point, g = e.getRootDomNode, h = e.getClassNameFromAlign, y = e.onAlign, w = e.onMouseEnter, m = e.onMouseLeave, v = e.onMouseDown, C = e.onTouchStart, S = e.onClick, b = d.useRef(), I = d.useRef(), T = d.useState(), E = q(T, 2), D = E[0], F = E[1], z = wI(s), R = q(z, 2), x = R[0], _ = R[1];
  function P() {
    s && _(g());
  }
  var k = CI(n, P), O = q(k, 2), N = O[0], M = O[1], A = d.useState(0), $ = q(A, 2), V = $[0], B = $[1], H = d.useRef();
  ia(function() {
    N === "alignPre" && B(0);
  }, [N]);
  function K() {
    return p || g;
  }
  function G() {
    var se;
    (se = b.current) === null || se === void 0 || se.forceAlign();
  }
  function le(se, fe) {
    var xe = h(fe);
    D !== xe && F(xe), B(function(ne) {
      return ne + 1;
    }), N === "align" && (y == null || y(se, fe));
  }
  ia(function() {
    N === "align" && (V < 3 ? G() : M(function() {
      var se;
      (se = H.current) === null || se === void 0 || se.call(H);
    }));
  }, [V]);
  var oe = W({}, O1(e));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function(se) {
    var fe = oe[se];
    oe[se] = function(xe, ne) {
      return M(), fe == null ? void 0 : fe(xe, ne);
    };
  });
  function J() {
    return new Promise(function(se) {
      H.current = se;
    });
  }
  d.useEffect(function() {
    !oe.motionName && N === "motion" && M();
  }, [oe.motionName, N]), d.useImperativeHandle(t, function() {
    return {
      forceAlign: G,
      getElement: function() {
        return I.current;
      }
    };
  });
  var pe = W(W({}, x), {}, {
    zIndex: l,
    opacity: N === "motion" || N === "stable" || !n ? void 0 : 0,
    // Cannot interact with disappearing elements
    // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
    pointerEvents: !n && N !== "stable" ? "none" : void 0
  }, o), ae = !0;
  f != null && f.points && (N === "align" || N === "stable") && (ae = !1);
  var ye = a;
  return d.Children.count(a) > 1 && (ye = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-content")
  }, a)), /* @__PURE__ */ d.createElement(vr, j({
    visible: n,
    ref: I,
    leavedClassName: "".concat(r, "-hidden")
  }, oe, {
    onAppearPrepare: J,
    onEnterPrepare: J,
    removeOnLeave: u,
    forceRender: c
  }), function(se, fe) {
    var xe = se.className, ne = se.style, re = X(r, i, D, xe);
    return /* @__PURE__ */ d.createElement(H1, {
      target: K(),
      key: "popup",
      ref: b,
      monitorWindowResize: !0,
      disabled: ae,
      align: f,
      onAlign: le
    }, /* @__PURE__ */ d.createElement("div", {
      ref: fe,
      className: re,
      onMouseEnter: w,
      onMouseLeave: m,
      onMouseDownCapture: v,
      onTouchStartCapture: C,
      onClick: S,
      style: W(W({}, ne), pe)
    }, ye));
  });
});
G1.displayName = "PopupInner";
var K1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.visible, i = e.zIndex, o = e.children, a = e.mobile;
  a = a === void 0 ? {} : a;
  var l = a.popupClassName, s = a.popupStyle, u = a.popupMotion, c = u === void 0 ? {} : u, f = a.popupRender, p = e.onClick, g = d.useRef();
  d.useImperativeHandle(t, function() {
    return {
      forceAlign: function() {
      },
      getElement: function() {
        return g.current;
      }
    };
  });
  var h = W({
    zIndex: i
  }, s), y = o;
  return d.Children.count(o) > 1 && (y = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(n, "-content")
  }, o)), f && (y = f(y)), /* @__PURE__ */ d.createElement(vr, j({
    visible: r,
    ref: g,
    removeOnLeave: !0
  }, c), function(w, m) {
    var v = w.className, C = w.style, S = X(n, l, v);
    return /* @__PURE__ */ d.createElement("div", {
      ref: m,
      className: S,
      onClick: p,
      style: W(W({}, C), h)
    }, y);
  });
});
K1.displayName = "MobilePopupInner";
var SI = ["visible", "mobile"], Y1 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.visible, r = e.mobile, i = Yt(e, SI), o = d.useState(n), a = q(o, 2), l = a[0], s = a[1], u = d.useState(!1), c = q(u, 2), f = c[0], p = c[1], g = W(W({}, i), {}, {
    visible: l
  });
  d.useEffect(function() {
    s(n), n && r && p(Sk());
  }, [n, r]);
  var h = f ? /* @__PURE__ */ d.createElement(K1, j({}, g, {
    mobile: r,
    ref: t
  })) : /* @__PURE__ */ d.createElement(G1, j({}, g, {
    ref: t
  }));
  return /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(bk, g), h);
});
Y1.displayName = "Popup";
var Bh = /* @__PURE__ */ d.createContext(null);
function ju() {
}
function bI() {
  return "";
}
function xI(e) {
  return e ? e.ownerDocument : window.document;
}
var EI = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function kI(e) {
  var t = /* @__PURE__ */ function(n) {
    mt(i, n);
    var r = gt(i);
    function i(o) {
      var a;
      Ke(this, i), a = r.call(this, o), L(te(a), "popupRef", /* @__PURE__ */ d.createRef()), L(te(a), "triggerRef", /* @__PURE__ */ d.createRef()), L(te(a), "portalContainer", void 0), L(te(a), "attachId", void 0), L(te(a), "clickOutsideHandler", void 0), L(te(a), "touchOutsideHandler", void 0), L(te(a), "contextMenuOutsideHandler1", void 0), L(te(a), "contextMenuOutsideHandler2", void 0), L(te(a), "mouseDownTimeout", void 0), L(te(a), "focusTime", void 0), L(te(a), "preClickTime", void 0), L(te(a), "preTouchTime", void 0), L(te(a), "delayTimer", void 0), L(te(a), "hasPopupMouseDown", void 0), L(te(a), "onMouseEnter", function(s) {
        var u = a.props.mouseEnterDelay;
        a.fireEvents("onMouseEnter", s), a.delaySetPopupVisible(!0, u, u ? null : s);
      }), L(te(a), "onMouseMove", function(s) {
        a.fireEvents("onMouseMove", s), a.setPoint(s);
      }), L(te(a), "onMouseLeave", function(s) {
        a.fireEvents("onMouseLeave", s), a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
      }), L(te(a), "onPopupMouseEnter", function() {
        a.clearDelayTimer();
      }), L(te(a), "onPopupMouseLeave", function(s) {
        var u;
        s.relatedTarget && !s.relatedTarget.setTimeout && ki((u = a.popupRef.current) === null || u === void 0 ? void 0 : u.getElement(), s.relatedTarget) || a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
      }), L(te(a), "onFocus", function(s) {
        a.fireEvents("onFocus", s), a.clearDelayTimer(), a.isFocusToShow() && (a.focusTime = Date.now(), a.delaySetPopupVisible(!0, a.props.focusDelay));
      }), L(te(a), "onMouseDown", function(s) {
        a.fireEvents("onMouseDown", s), a.preClickTime = Date.now();
      }), L(te(a), "onTouchStart", function(s) {
        a.fireEvents("onTouchStart", s), a.preTouchTime = Date.now();
      }), L(te(a), "onBlur", function(s) {
        a.fireEvents("onBlur", s), a.clearDelayTimer(), a.isBlurToHide() && a.delaySetPopupVisible(!1, a.props.blurDelay);
      }), L(te(a), "onContextMenu", function(s) {
        s.preventDefault(), a.fireEvents("onContextMenu", s), a.setPopupVisible(!0, s);
      }), L(te(a), "onContextMenuClose", function() {
        a.isContextMenuToShow() && a.close();
      }), L(te(a), "onClick", function(s) {
        if (a.fireEvents("onClick", s), a.focusTime) {
          var u;
          if (a.preClickTime && a.preTouchTime ? u = Math.min(a.preClickTime, a.preTouchTime) : a.preClickTime ? u = a.preClickTime : a.preTouchTime && (u = a.preTouchTime), Math.abs(u - a.focusTime) < 20)
            return;
          a.focusTime = 0;
        }
        a.preClickTime = 0, a.preTouchTime = 0, a.isClickToShow() && (a.isClickToHide() || a.isBlurToHide()) && s && s.preventDefault && s.preventDefault();
        var c = !a.state.popupVisible;
        (a.isClickToHide() && !c || c && a.isClickToShow()) && a.setPopupVisible(!a.state.popupVisible, s);
      }), L(te(a), "onPopupMouseDown", function() {
        if (a.hasPopupMouseDown = !0, clearTimeout(a.mouseDownTimeout), a.mouseDownTimeout = window.setTimeout(function() {
          a.hasPopupMouseDown = !1;
        }, 0), a.context) {
          var s;
          (s = a.context).onPopupMouseDown.apply(s, arguments);
        }
      }), L(te(a), "onDocumentClick", function(s) {
        if (!(a.props.mask && !a.props.maskClosable)) {
          var u = s.target, c = a.getRootDomNode(), f = a.getPopupDomNode();
          // mousedown on the target should also close popup when action is contextMenu.
          // https://github.com/ant-design/ant-design/issues/29853
          (!ki(c, u) || a.isContextMenuOnly()) && !ki(f, u) && !a.hasPopupMouseDown && a.close();
        }
      }), L(te(a), "getRootDomNode", function() {
        var s = a.props.getTriggerDOMNode;
        if (s)
          return s(a.triggerRef.current);
        try {
          var u = os(a.triggerRef.current);
          if (u)
            return u;
        } catch {
        }
        return cr.findDOMNode(te(a));
      }), L(te(a), "getPopupClassNameFromAlign", function(s) {
        var u = [], c = a.props, f = c.popupPlacement, p = c.builtinPlacements, g = c.prefixCls, h = c.alignPoint, y = c.getPopupClassNameFromAlign;
        return f && p && u.push(wk(p, g, s, h)), y && u.push(y(s)), u.join(" ");
      }), L(te(a), "getComponent", function() {
        var s = a.props, u = s.prefixCls, c = s.destroyPopupOnHide, f = s.popupClassName, p = s.onPopupAlign, g = s.popupMotion, h = s.popupAnimation, y = s.popupTransitionName, w = s.popupStyle, m = s.mask, v = s.maskAnimation, C = s.maskTransitionName, S = s.maskMotion, b = s.zIndex, I = s.popup, T = s.stretch, E = s.alignPoint, D = s.mobile, F = s.forceRender, z = s.onPopupClick, R = a.state, x = R.popupVisible, _ = R.point, P = a.getPopupAlign(), k = {};
        return a.isMouseEnterToShow() && (k.onMouseEnter = a.onPopupMouseEnter), a.isMouseLeaveToHide() && (k.onMouseLeave = a.onPopupMouseLeave), k.onMouseDown = a.onPopupMouseDown, k.onTouchStart = a.onPopupMouseDown, /* @__PURE__ */ d.createElement(Y1, j({
          prefixCls: u,
          destroyPopupOnHide: c,
          visible: x,
          point: E && _,
          className: f,
          align: P,
          onAlign: p,
          animation: h,
          getClassNameFromAlign: a.getPopupClassNameFromAlign
        }, k, {
          stretch: T,
          getRootDomNode: a.getRootDomNode,
          style: w,
          mask: m,
          zIndex: b,
          transitionName: y,
          maskAnimation: v,
          maskTransitionName: C,
          maskMotion: S,
          ref: a.popupRef,
          motion: g,
          mobile: D,
          forceRender: F,
          onClick: z
        }), typeof I == "function" ? I() : I);
      }), L(te(a), "attachParent", function(s) {
        lt.cancel(a.attachId);
        var u = a.props, c = u.getPopupContainer, f = u.getDocument, p = a.getRootDomNode(), g;
        c ? (p || c.length === 0) && (g = c(p)) : g = f(a.getRootDomNode()).body, g ? g.appendChild(s) : a.attachId = lt(function() {
          a.attachParent(s);
        });
      }), L(te(a), "getContainer", function() {
        if (!a.portalContainer) {
          var s = a.props.getDocument, u = s(a.getRootDomNode()).createElement("div");
          u.style.position = "absolute", u.style.top = "0", u.style.left = "0", u.style.width = "100%", a.portalContainer = u;
        }
        return a.attachParent(a.portalContainer), a.portalContainer;
      }), L(te(a), "setPoint", function(s) {
        var u = a.props.alignPoint;
        !u || !s || a.setState({
          point: {
            pageX: s.pageX,
            pageY: s.pageY
          }
        });
      }), L(te(a), "handlePortalUpdate", function() {
        a.state.prevPopupVisible !== a.state.popupVisible && a.props.afterPopupVisibleChange(a.state.popupVisible);
      }), L(te(a), "triggerContextValue", {
        onPopupMouseDown: a.onPopupMouseDown
      });
      var l;
      return "popupVisible" in o ? l = !!o.popupVisible : l = !!o.defaultPopupVisible, a.state = {
        prevPopupVisible: l,
        popupVisible: l
      }, EI.forEach(function(s) {
        a["fire".concat(s)] = function(u) {
          a.fireEvents(s, u);
        };
      }), a;
    }
    return Ye(i, [{
      key: "componentDidMount",
      value: function() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        var a = this.props, l = this.state;
        if (l.popupVisible) {
          var s;
          !this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow()) && (s = a.getDocument(this.getRootDomNode()), this.clickOutsideHandler = ho(s, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (s = s || a.getDocument(this.getRootDomNode()), this.touchOutsideHandler = ho(s, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (s = s || a.getDocument(this.getRootDomNode()), this.contextMenuOutsideHandler1 = ho(s, "scroll", this.onContextMenuClose)), !this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = ho(window, "blur", this.onContextMenuClose));
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), lt.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function() {
        var a;
        return ((a = this.popupRef.current) === null || a === void 0 ? void 0 : a.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function() {
        var a = this.props, l = a.popupPlacement, s = a.popupAlign, u = a.builtinPlacements;
        return l && u ? Ck(u, l, s) : s;
      }
    }, {
      key: "setPopupVisible",
      value: (
        /**
         * @param popupVisible    Show or not the popup element
         * @param event           SyntheticEvent, used for `pointAlign`
         */
        function(a, l) {
          var s = this.props.alignPoint, u = this.state.popupVisible;
          this.clearDelayTimer(), u !== a && ("popupVisible" in this.props || this.setState({
            popupVisible: a,
            prevPopupVisible: u
          }), this.props.onPopupVisibleChange(a)), s && l && a && this.setPoint(l);
        }
      )
    }, {
      key: "delaySetPopupVisible",
      value: function(a, l, s) {
        var u = this, c = l * 1e3;
        if (this.clearDelayTimer(), c) {
          var f = s ? {
            pageX: s.pageX,
            pageY: s.pageY
          } : null;
          this.delayTimer = window.setTimeout(function() {
            u.setPopupVisible(a, f), u.clearDelayTimer();
          }, c);
        } else
          this.setPopupVisible(a, s);
      }
    }, {
      key: "clearDelayTimer",
      value: function() {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
      }
    }, {
      key: "clearOutsideHandler",
      value: function() {
        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
      }
    }, {
      key: "createTwoChains",
      value: function(a) {
        var l = this.props.children.props, s = this.props;
        return l[a] && s[a] ? this["fire".concat(a)] : l[a] || s[a];
      }
    }, {
      key: "isClickToShow",
      value: function() {
        var a = this.props, l = a.action, s = a.showAction;
        return l.indexOf("click") !== -1 || s.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function() {
        var a = this.props.action;
        return a === "contextMenu" || a.length === 1 && a[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function() {
        var a = this.props, l = a.action, s = a.showAction;
        return l.indexOf("contextMenu") !== -1 || s.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function() {
        var a = this.props, l = a.action, s = a.hideAction;
        return l.indexOf("click") !== -1 || s.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function() {
        var a = this.props, l = a.action, s = a.showAction;
        return l.indexOf("hover") !== -1 || s.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function() {
        var a = this.props, l = a.action, s = a.hideAction;
        return l.indexOf("hover") !== -1 || s.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function() {
        var a = this.props, l = a.action, s = a.showAction;
        return l.indexOf("focus") !== -1 || s.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function() {
        var a = this.props, l = a.action, s = a.hideAction;
        return l.indexOf("focus") !== -1 || s.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function() {
        if (this.state.popupVisible) {
          var a;
          (a = this.popupRef.current) === null || a === void 0 || a.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function(a, l) {
        var s = this.props.children.props[a];
        s && s(l);
        var u = this.props[a];
        u && u(l);
      }
    }, {
      key: "close",
      value: function() {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function() {
        var a = this.state.popupVisible, l = this.props, s = l.children, u = l.forceRender, c = l.alignPoint, f = l.className, p = l.autoDestroy, g = d.Children.only(s), h = {
          key: "trigger"
        };
        this.isContextMenuToShow() ? h.onContextMenu = this.onContextMenu : h.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (h.onClick = this.onClick, h.onMouseDown = this.onMouseDown, h.onTouchStart = this.onTouchStart) : (h.onClick = this.createTwoChains("onClick"), h.onMouseDown = this.createTwoChains("onMouseDown"), h.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (h.onMouseEnter = this.onMouseEnter, c && (h.onMouseMove = this.onMouseMove)) : h.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? h.onMouseLeave = this.onMouseLeave : h.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (h.onFocus = this.onFocus, h.onBlur = this.onBlur) : (h.onFocus = this.createTwoChains("onFocus"), h.onBlur = this.createTwoChains("onBlur"));
        var y = X(g && g.props && g.props.className, f);
        y && (h.className = y);
        var w = W({}, h);
        ma(g) && (w.ref = jr(this.triggerRef, g.ref));
        var m = /* @__PURE__ */ d.cloneElement(g, w), v;
        return (a || this.popupRef.current || u) && (v = /* @__PURE__ */ d.createElement(e, {
          key: "portal",
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        }, this.getComponent())), !a && p && (v = null), /* @__PURE__ */ d.createElement(Bh.Provider, {
          value: this.triggerContextValue
        }, m, v);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, l) {
        var s = a.popupVisible, u = {};
        return s !== void 0 && l.popupVisible !== s && (u.popupVisible = s, u.prevPopupVisible = l.popupVisible), u;
      }
    }]), i;
  }(d.Component);
  return L(t, "contextType", Bh), L(t, "defaultProps", {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: bI,
    getDocument: xI,
    onPopupVisibleChange: ju,
    afterPopupVisibleChange: ju,
    onPopupAlign: ju,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  }), t;
}
const II = kI(P1);
var zt = {
  adjustX: 1,
  adjustY: 1
}, $t = [0, 0], Z1 = {
  left: {
    points: ["cr", "cl"],
    overflow: zt,
    offset: [-4, 0],
    targetOffset: $t
  },
  right: {
    points: ["cl", "cr"],
    overflow: zt,
    offset: [4, 0],
    targetOffset: $t
  },
  top: {
    points: ["bc", "tc"],
    overflow: zt,
    offset: [0, -4],
    targetOffset: $t
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: zt,
    offset: [0, 4],
    targetOffset: $t
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: zt,
    offset: [0, -4],
    targetOffset: $t
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: zt,
    offset: [-4, 0],
    targetOffset: $t
  },
  topRight: {
    points: ["br", "tr"],
    overflow: zt,
    offset: [0, -4],
    targetOffset: $t
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: zt,
    offset: [4, 0],
    targetOffset: $t
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: zt,
    offset: [0, 4],
    targetOffset: $t
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: zt,
    offset: [4, 0],
    targetOffset: $t
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: zt,
    offset: [0, 4],
    targetOffset: $t
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: zt,
    offset: [-4, 0],
    targetOffset: $t
  }
}, NI = function(t) {
  var n = t.overlay, r = t.prefixCls, i = t.id, o = t.overlayInnerStyle;
  return /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-inner"),
    id: i,
    role: "tooltip",
    style: o
  }, typeof n == "function" ? n() : n);
}, TI = function(t, n) {
  var r = t.overlayClassName, i = t.trigger, o = i === void 0 ? ["hover"] : i, a = t.mouseEnterDelay, l = a === void 0 ? 0 : a, s = t.mouseLeaveDelay, u = s === void 0 ? 0.1 : s, c = t.overlayStyle, f = t.prefixCls, p = f === void 0 ? "rc-tooltip" : f, g = t.children, h = t.onVisibleChange, y = t.afterVisibleChange, w = t.transitionName, m = t.animation, v = t.motion, C = t.placement, S = C === void 0 ? "right" : C, b = t.align, I = b === void 0 ? {} : b, T = t.destroyTooltipOnHide, E = T === void 0 ? !1 : T, D = t.defaultVisible, F = t.getTooltipContainer, z = t.overlayInnerStyle, R = Yt(t, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]), x = d.useRef(null);
  d.useImperativeHandle(n, function() {
    return x.current;
  });
  var _ = W({}, R);
  "visible" in t && (_.popupVisible = t.visible);
  var P = function() {
    var A = t.arrowContent, $ = A === void 0 ? null : A, V = t.overlay, B = t.id;
    return [/* @__PURE__ */ d.createElement("div", {
      className: "".concat(p, "-arrow"),
      key: "arrow"
    }, $), /* @__PURE__ */ d.createElement(NI, {
      key: "content",
      prefixCls: p,
      id: B,
      overlay: V,
      overlayInnerStyle: z
    })];
  }, k = !1, O = !1;
  if (typeof E == "boolean")
    k = E;
  else if (E && de(E) === "object") {
    var N = E.keepParent;
    k = N === !0, O = N === !1;
  }
  return /* @__PURE__ */ d.createElement(II, j({
    popupClassName: r,
    prefixCls: p,
    popup: P,
    action: o,
    builtinPlacements: Z1,
    popupPlacement: S,
    ref: x,
    popupAlign: I,
    getPopupContainer: F,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: y,
    popupTransitionName: w,
    popupAnimation: m,
    popupMotion: v,
    defaultPopupVisible: D,
    destroyPopupOnHide: k,
    autoDestroy: O,
    mouseLeaveDelay: u,
    popupStyle: c,
    mouseEnterDelay: l
  }, _), g);
};
const PI = /* @__PURE__ */ d.forwardRef(TI);
function Uh(e) {
  var t = d.useRef();
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Wu(e) {
  return e !== void 0;
}
function dp(e, t) {
  var n = t || {}, r = n.defaultValue, i = n.value, o = n.onChange, a = n.postState, l = Pn(function() {
    return Wu(i) ? i : Wu(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), s = q(l, 2), u = s[0], c = s[1], f = i !== void 0 ? i : u, p = a ? a(f) : f, g = Uh(o), h = Pn([f]), y = q(h, 2), w = y[0], m = y[1];
  Dh(function() {
    var C = w[0];
    u !== C && g(u, C);
  }, [w]), Dh(function() {
    Wu(i) || c(i);
  }, [i]);
  var v = Uh(function(C, S) {
    c(C, S), m([f], S);
  });
  return [p, v];
}
var OI = {
  adjustX: 1,
  adjustY: 1
}, Hh = {
  adjustX: 0,
  adjustY: 0
}, RI = [0, 0];
function Gh(e) {
  return typeof e == "boolean" ? e ? OI : Hh : j(j({}, Hh), e);
}
function _I(e) {
  var t = e.arrowWidth, n = t === void 0 ? 4 : t, r = e.horizontalArrowShift, i = r === void 0 ? 16 : r, o = e.verticalArrowShift, a = o === void 0 ? 8 : o, l = e.autoAdjustOverflow, s = e.arrowPointAtCenter, u = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(i + n), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(a + n)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [i + n, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(a + n)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [i + n, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, a + n]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(i + n), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, a + n]
    }
  };
  return Object.keys(u).forEach(function(c) {
    u[c] = s ? j(j({}, u[c]), {
      overflow: Gh(l),
      targetOffset: RI
    }) : j(j({}, Z1[c]), {
      overflow: Gh(l)
    }), u[c].ignoreShake = !0;
  }), u;
}
var pp = d.isValidElement;
function AI(e, t, n) {
  return pp(e) ? /* @__PURE__ */ d.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
}
function Fn(e, t) {
  return AI(e, e, t);
}
cn("success", "processing", "error", "default", "warning");
var MI = cn("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"), Bu = function() {
  return {
    height: 0,
    opacity: 0
  };
}, Kh = function(t) {
  var n = t.scrollHeight;
  return {
    height: n,
    opacity: 1
  };
}, FI = function(t) {
  return {
    height: t ? t.offsetHeight : 0
  };
}, Uu = function(t, n) {
  return (n == null ? void 0 : n.deadline) === !0 || n.propertyName === "height";
}, LI = {
  motionName: "ant-motion-collapse",
  onAppearStart: Bu,
  onEnterStart: Bu,
  onAppearActive: Kh,
  onEnterActive: Kh,
  onLeaveStart: FI,
  onLeaveActive: Bu,
  onAppearEnd: Uu,
  onEnterEnd: Uu,
  onLeaveEnd: Uu,
  motionDeadline: 500
};
cn("bottomLeft", "bottomRight", "topLeft", "topRight");
var oa = function(t, n, r) {
  return r !== void 0 ? r : "".concat(t, "-").concat(n);
};
const Yh = LI;
var DI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, VI = function(t, n) {
  var r = {}, i = j({}, t);
  return n.forEach(function(o) {
    t && o in t && (r[o] = t[o], delete i[o]);
  }), {
    picked: r,
    omitted: i
  };
}, Zh = new RegExp("^(".concat(MI.join("|"), ")(-inverse)?$"));
function zI(e, t) {
  var n = e.type;
  if ((n.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled || n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) {
    var r = VI(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), i = r.picked, o = r.omitted, a = j(j({
      display: "inline-block"
    }, i), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : null
    }), l = j(j({}, o), {
      pointerEvents: "none"
    }), s = Fn(e, {
      style: l,
      className: null
    });
    return /* @__PURE__ */ d.createElement("span", {
      style: a,
      className: X(e.props.className, "".concat(t, "-disabled-compatible-wrapper"))
    }, s);
  }
  return e;
}
var vp = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = d.useContext(Fe), i = r.getPopupContainer, o = r.getPrefixCls, a = r.direction, l = dp(!1, {
    value: e.visible,
    defaultValue: e.defaultVisible
  }), s = q(l, 2), u = s[0], c = s[1], f = function() {
    var M = e.title, A = e.overlay;
    return !M && !A && M !== 0;
  }, p = function(M) {
    var A;
    c(f() ? !1 : M), f() || (A = e.onVisibleChange) === null || A === void 0 || A.call(e, M);
  }, g = function() {
    var M = e.builtinPlacements, A = e.arrowPointAtCenter, $ = e.autoAdjustOverflow;
    return M || _I({
      arrowPointAtCenter: A,
      autoAdjustOverflow: $
    });
  }, h = function(M, A) {
    var $ = g(), V = Object.keys($).find(function(K) {
      return $[K].points[0] === A.points[0] && $[K].points[1] === A.points[1];
    });
    if (V) {
      var B = M.getBoundingClientRect(), H = {
        top: "50%",
        left: "50%"
      };
      V.indexOf("top") >= 0 || V.indexOf("Bottom") >= 0 ? H.top = "".concat(B.height - A.offset[1], "px") : (V.indexOf("Top") >= 0 || V.indexOf("bottom") >= 0) && (H.top = "".concat(-A.offset[1], "px")), V.indexOf("left") >= 0 || V.indexOf("Right") >= 0 ? H.left = "".concat(B.width - A.offset[0], "px") : (V.indexOf("right") >= 0 || V.indexOf("Left") >= 0) && (H.left = "".concat(-A.offset[0], "px")), M.style.transformOrigin = "".concat(H.left, " ").concat(H.top);
    }
  }, y = function() {
    var M = e.title, A = e.overlay;
    return M === 0 ? M : A || M || "";
  }, w = e.getPopupContainer, m = DI(e, ["getPopupContainer"]), v = e.prefixCls, C = e.openClassName, S = e.getTooltipContainer, b = e.overlayClassName, I = e.color, T = e.overlayInnerStyle, E = e.children, D = o("tooltip", v), F = o(), z = u;
  !("visible" in e) && f() && (z = !1);
  var R = zI(pp(E) ? E : /* @__PURE__ */ d.createElement("span", null, E), D), x = R.props, _ = X(x.className, L({}, C || "".concat(D, "-open"), !0)), P = X(b, (n = {}, L(n, "".concat(D, "-rtl"), a === "rtl"), L(n, "".concat(D, "-").concat(I), I && Zh.test(I)), n)), k = T, O;
  return I && !Zh.test(I) && (k = j(j({}, T), {
    background: I
  }), O = {
    "--antd-arrow-background-color": I
  }), /* @__PURE__ */ d.createElement(PI, j({}, m, {
    prefixCls: D,
    overlayClassName: P,
    getTooltipContainer: w || S || i,
    ref: t,
    builtinPlacements: g(),
    overlay: y(),
    visible: z,
    onVisibleChange: p,
    onPopupAlign: h,
    overlayInnerStyle: k,
    arrowContent: /* @__PURE__ */ d.createElement("span", {
      className: "".concat(D, "-arrow-content"),
      style: O
    }),
    motion: {
      motionName: oa(F, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    }
  }), z ? Fn(R, {
    className: _
  }) : R);
});
vp.displayName = "Tooltip";
vp.defaultProps = {
  placement: "top",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
};
const $I = vp;
var jI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function WI(e) {
  return e ? de(e) === "object" && !/* @__PURE__ */ d.isValidElement(e) ? e : {
    title: e
  } : null;
}
var BI = function(t) {
  var n = t.prefixCls, r = t.label, i = t.htmlFor, o = t.labelCol, a = t.labelAlign, l = t.colon, s = t.required, u = t.requiredMark, c = t.tooltip, f = rb("Form"), p = q(f, 1), g = p[0];
  return r ? /* @__PURE__ */ d.createElement(zi.Consumer, {
    key: "label"
  }, function(h) {
    var y, w = h.vertical, m = h.labelAlign, v = h.labelCol, C = h.labelWrap, S = h.colon, b, I = o || v || {}, T = a || m, E = "".concat(n, "-item-label"), D = X(E, T === "left" && "".concat(E, "-left"), I.className, L({}, "".concat(E, "-wrap"), !!C)), F = r, z = l === !0 || S !== !1 && l !== !1, R = z && !w;
    R && typeof r == "string" && r.trim() !== "" && (F = r.replace(/[:|：]\s*$/, ""));
    var x = WI(c);
    if (x) {
      var _ = x.icon, P = _ === void 0 ? /* @__PURE__ */ d.createElement(vk, null) : _, k = jI(x, ["icon"]), O = /* @__PURE__ */ d.createElement($I, k, /* @__PURE__ */ d.cloneElement(P, {
        className: "".concat(n, "-item-tooltip"),
        title: ""
      }));
      F = /* @__PURE__ */ d.createElement(d.Fragment, null, F, O);
    }
    u === "optional" && !s && (F = /* @__PURE__ */ d.createElement(d.Fragment, null, F, /* @__PURE__ */ d.createElement("span", {
      className: "".concat(n, "-item-optional"),
      title: ""
    }, (g == null ? void 0 : g.optional) || ((b = lr.Form) === null || b === void 0 ? void 0 : b.optional))));
    var N = X((y = {}, L(y, "".concat(n, "-item-required"), s), L(y, "".concat(n, "-item-required-mark-optional"), u === "optional"), L(y, "".concat(n, "-item-no-colon"), !z), y));
    return /* @__PURE__ */ d.createElement(T1, j({}, I, {
      className: D
    }), /* @__PURE__ */ d.createElement("label", {
      htmlFor: i,
      className: N,
      title: typeof r == "string" ? r : ""
    }, F));
  }) : null;
};
const UI = BI;
var qh = [];
function Hu(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return {
    key: typeof e == "string" ? e : "".concat(n, "-").concat(r),
    error: e,
    errorStatus: t
  };
}
function q1(e) {
  var t = e.help, n = e.helpStatus, r = e.errors, i = r === void 0 ? qh : r, o = e.warnings, a = o === void 0 ? qh : o, l = e.className, s = d.useContext(ap), u = s.prefixCls, c = d.useContext(Fe), f = c.getPrefixCls, p = "".concat(u, "-item-explain"), g = f(), h = d.useMemo(function() {
    return t != null ? [Hu(t, n, "help")] : [].concat(Q(i.map(function(y, w) {
      return Hu(y, "error", "error", w);
    })), Q(a.map(function(y, w) {
      return Hu(y, "warning", "warning", w);
    })));
  }, [t, n, i, a]);
  return /* @__PURE__ */ d.createElement(vr, j({}, Yh, {
    motionName: "".concat(g, "-show-help"),
    motionAppear: !1,
    motionEnter: !1,
    visible: !!h.length,
    onLeaveStart: function(w) {
      return w.style.height = "auto", {
        height: w.offsetHeight
      };
    }
  }), function(y) {
    var w = y.className, m = y.style;
    return /* @__PURE__ */ d.createElement("div", {
      className: X(p, w, l),
      style: m
    }, /* @__PURE__ */ d.createElement(ky, j({
      keys: h
    }, Yh, {
      motionName: "".concat(g, "-show-help-item"),
      component: !1
    }), function(v) {
      var C = v.key, S = v.error, b = v.errorStatus, I = v.className, T = v.style;
      return /* @__PURE__ */ d.createElement("div", {
        key: C,
        role: "alert",
        className: X(I, L({}, "".concat(p, "-").concat(b), b)),
        style: T
      }, S);
    }));
  });
}
var HI = function(t) {
  var n = t.prefixCls, r = t.status, i = t.wrapperCol, o = t.children, a = t.errors, l = t.warnings, s = t._internalItemRender, u = t.extra, c = t.help, f = "".concat(n, "-item"), p = d.useContext(zi), g = i || p.wrapperCol || {}, h = X("".concat(f, "-control"), g.className), y = d.useMemo(function() {
    return j({}, p);
  }, [p]);
  delete y.labelCol, delete y.wrapperCol;
  var w = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(f, "-control-input")
  }, /* @__PURE__ */ d.createElement("div", {
    className: "".concat(f, "-control-input-content")
  }, o)), m = d.useMemo(function() {
    return {
      prefixCls: n,
      status: r
    };
  }, [n, r]), v = /* @__PURE__ */ d.createElement(ap.Provider, {
    value: m
  }, /* @__PURE__ */ d.createElement(q1, {
    errors: a,
    warnings: l,
    help: c,
    helpStatus: r,
    className: "".concat(f, "-explain-connected")
  })), C = u ? /* @__PURE__ */ d.createElement("div", {
    className: "".concat(f, "-extra")
  }, u) : null, S = s && s.mark === "pro_table_render" && s.render ? s.render(t, {
    input: w,
    errorList: v,
    extra: C
  }) : /* @__PURE__ */ d.createElement(d.Fragment, null, w, v, C);
  return /* @__PURE__ */ d.createElement(zi.Provider, {
    value: y
  }, /* @__PURE__ */ d.createElement(T1, j({}, g, {
    className: h
  }), S));
};
const GI = HI;
function KI(e) {
  var t = d.useState(e), n = q(t, 2), r = n[0], i = n[1], o = d.useRef(null), a = d.useRef([]), l = d.useRef(!1);
  d.useEffect(function() {
    return function() {
      l.current = !0, lt.cancel(o.current);
    };
  }, []);
  function s(u) {
    l.current || (o.current === null && (a.current = [], o.current = lt(function() {
      o.current = null, i(function(c) {
        var f = c;
        return a.current.forEach(function(p) {
          f = p(f);
        }), f;
      });
    })), a.current.push(u));
  }
  return [r, s];
}
function Qh(e) {
  var t = d.useState(e), n = q(t, 2), r = n[0], i = n[1];
  return d.useEffect(function() {
    var o = setTimeout(function() {
      i(e);
    }, e.length ? 0 : 10);
    return function() {
      clearTimeout(o);
    };
  }, [e]), r;
}
function YI() {
  var e = d.useContext(zi), t = e.itemRef, n = d.useRef({});
  function r(i, o) {
    var a = o && de(o) === "object" && o.ref, l = i.join("_");
    return (n.current.name !== l || n.current.originRef !== a) && (n.current.name = l, n.current.originRef = a, n.current.ref = jr(t(i), a)), n.current.ref;
  }
  return r;
}
var ZI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, qI = "__SPLIT__";
cn("success", "warning", "error", "validating", "");
var QI = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return e.value === t.value && e.update === t.update;
});
function XI(e) {
  return e === null && qe(!1, "Form.Item", "`null` is passed as `name` property"), e != null;
}
function Xh() {
  return {
    errors: [],
    warnings: [],
    touched: !1,
    validating: !1,
    name: []
  };
}
function JI(e) {
  var t = e.name, n = e.noStyle, r = e.dependencies, i = e.prefixCls, o = e.style, a = e.className, l = e.shouldUpdate, s = e.hasFeedback, u = e.help, c = e.rules, f = e.validateStatus, p = e.children, g = e.required, h = e.label, y = e.messageVariables, w = e.trigger, m = w === void 0 ? "onChange" : w, v = e.validateTrigger, C = e.hidden, S = ZI(e, ["name", "noStyle", "dependencies", "prefixCls", "style", "className", "shouldUpdate", "hasFeedback", "help", "rules", "validateStatus", "children", "required", "label", "messageVariables", "trigger", "validateTrigger", "hidden"]), b = d.useContext(Fe), I = b.getPrefixCls, T = d.useContext(zi), E = T.name, D = T.requiredMark, F = typeof p == "function", z = d.useContext(hh), R = d.useContext(Pi), x = R.validateTrigger, _ = v !== void 0 ? v : x, P = XI(t), k = I("form", i), O = d.useContext(rg), N = d.useRef(), M = KI({}), A = q(M, 2), $ = A[0], V = A[1], B = Pn(function() {
    return Xh();
  }), H = q(B, 2), K = H[0], G = H[1], le = function(We) {
    var Dt = O == null ? void 0 : O.getKey(We.name);
    if (G(We.destroy ? Xh() : We, !0), n && z) {
      var Re = We.name;
      if (We.destroy)
        Re = N.current || Re;
      else if (Dt !== void 0) {
        var Qt = q(Dt, 2), Zi = Qt[0], wn = Qt[1];
        Re = [Zi].concat(Q(wn)), N.current = Re;
      }
      z(We, Re);
    }
  }, oe = function(We, Dt) {
    V(function(Re) {
      var Qt = j({}, Re), Zi = [].concat(Q(We.name.slice(0, -1)), Q(Dt)), wn = Zi.join(qI);
      return We.destroy ? delete Qt[wn] : Qt[wn] = We, Qt;
    });
  }, J = d.useMemo(function() {
    var ut = Q(K.errors), We = Q(K.warnings);
    return Object.values($).forEach(function(Dt) {
      ut.push.apply(ut, Q(Dt.errors || [])), We.push.apply(We, Q(Dt.warnings || []));
    }), [ut, We];
  }, [$, K.errors, K.warnings]), pe = q(J, 2), ae = pe[0], ye = pe[1], se = Qh(ae), fe = Qh(ye), xe = YI(), ne = "";
  f !== void 0 ? ne = f : K != null && K.validating ? ne = "validating" : se.length ? ne = "error" : fe.length ? ne = "warning" : K != null && K.touched && (ne = "success");
  var re = d.useMemo(function() {
    return {
      status: ne,
      hasFeedback: s
    };
  }, [ne, s]);
  function ce(ut, We, Dt) {
    var Re;
    if (n && !C)
      return ut;
    var Qt = (Re = {}, L(Re, "".concat(k, "-item"), !0), L(Re, "".concat(k, "-item-with-help"), u != null || se.length || fe.length), L(Re, "".concat(a), !!a), L(Re, "".concat(k, "-item-has-feedback"), ne && s), L(Re, "".concat(k, "-item-has-success"), ne === "success"), L(Re, "".concat(k, "-item-has-warning"), ne === "warning"), L(Re, "".concat(k, "-item-has-error"), ne === "error"), L(Re, "".concat(k, "-item-is-validating"), ne === "validating"), L(Re, "".concat(k, "-item-hidden"), C), Re);
    return /* @__PURE__ */ d.createElement(fk, j({
      className: X(Qt),
      style: o,
      key: "row"
    }, hr(S, ["colon", "extra", "fieldKey", "requiredMark", "getValueFromEvent", "getValueProps", "htmlFor", "id", "initialValue", "isListField", "labelAlign", "labelWrap", "labelCol", "normalize", "preserve", "tooltip", "validateFirst", "valuePropName", "wrapperCol", "_internalItemRender"])), /* @__PURE__ */ d.createElement(UI, j({
      htmlFor: We,
      required: Dt,
      requiredMark: D
    }, e, {
      prefixCls: k
    })), /* @__PURE__ */ d.createElement(GI, j({}, e, K, {
      errors: se,
      warnings: fe,
      prefixCls: k,
      status: ne,
      help: u
    }), /* @__PURE__ */ d.createElement(hh.Provider, {
      value: oe
    }, /* @__PURE__ */ d.createElement(ga.Provider, {
      value: re
    }, ut))));
  }
  if (!P && !F && !r)
    return ce(p);
  var Ce = {};
  return typeof h == "string" ? Ce.label = h : t && (Ce.label = String(t)), y && (Ce = j(j({}, Ce), y)), /* @__PURE__ */ d.createElement(td, j({}, e, {
    messageVariables: Ce,
    trigger: m,
    validateTrigger: _,
    onMetaChange: le
  }), function(ut, We, Dt) {
    var Re = Ro(t).length && We ? We.name : [], Qt = S1(Re, E), Zi = g !== void 0 ? g : !!(c && c.some(function(dn) {
      if (dn && de(dn) === "object" && dn.required && !dn.warningOnly)
        return !0;
      if (typeof dn == "function") {
        var Br = dn(Dt);
        return Br && Br.required && !Br.warningOnly;
      }
      return !1;
    })), wn = j({}, ut), qi = null;
    if (qe(!(l && r), "Form.Item", "`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."), Array.isArray(p) && P)
      qe(!1, "Form.Item", "`children` is array of render props cannot have `name`."), qi = p;
    else if (F && (!(l || r) || P))
      qe(!!(l || r), "Form.Item", "`children` of render props only work with `shouldUpdate` or `dependencies`."), qe(!P, "Form.Item", "Do not use `name` with `children` of render props since it's not a field.");
    else if (r && !F && !P)
      qe(!1, "Form.Item", "Must set `name` or use render props when `dependencies` is set.");
    else if (pp(p)) {
      qe(p.props.defaultValue === void 0, "Form.Item", "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");
      var Qi = j(j({}, p.props), wn);
      Qi.id || (Qi.id = Qt), ma(p) && (Qi.ref = xe(Re, p));
      var aw = new Set([].concat(Q(Ro(m)), Q(Ro(_))));
      aw.forEach(function(dn) {
        Qi[dn] = function() {
          for (var Br, xp, qs, Ep, Qs, kp = arguments.length, Xs = new Array(kp), Ea = 0; Ea < kp; Ea++)
            Xs[Ea] = arguments[Ea];
          (qs = wn[dn]) === null || qs === void 0 || (Br = qs).call.apply(Br, [wn].concat(Xs)), (Qs = (Ep = p.props)[dn]) === null || Qs === void 0 || (xp = Qs).call.apply(xp, [Ep].concat(Xs));
        };
      }), qi = /* @__PURE__ */ d.createElement(QI, {
        value: wn[e.valuePropName || "value"],
        update: p
      }, Fn(p, Qi));
    } else
      F && (l || r) && !P ? qi = p(Dt) : (qe(!Re.length, "Form.Item", "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."), qi = p);
    return ce(qi, Qt, Zi);
  });
}
var eN = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, tN = function(t) {
  var n = t.prefixCls, r = t.children, i = eN(t, ["prefixCls", "children"]);
  qe(!!i.name, "Form.List", "Miss `name` prop.");
  var o = d.useContext(Fe), a = o.getPrefixCls, l = a("form", n), s = d.useMemo(function() {
    return {
      prefixCls: l,
      status: "error"
    };
  }, [l]);
  return /* @__PURE__ */ d.createElement(ig, i, function(u, c, f) {
    return /* @__PURE__ */ d.createElement(ap.Provider, {
      value: s
    }, r(u.map(function(p) {
      return j(j({}, p), {
        fieldKey: p.key
      });
    }), c, {
      errors: f.errors,
      warnings: f.warnings
    }));
  });
};
const nN = tN;
var Wr = ok;
Wr.Item = JI;
Wr.List = nN;
Wr.ErrorList = q1;
Wr.useForm = b1;
Wr.Provider = qE;
Wr.create = function() {
  qe(!1, "Form", "antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.");
};
const Qr = Wr;
var Qe;
(function(e) {
  e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
})(Qe || (Qe = {}));
function rN(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function _o(e) {
  var t = e == null ? void 0 : e.host;
  return (t == null ? void 0 : t.shadowRoot) === e;
}
function Ao(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function iN(e) {
  return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), e;
}
function Df(e) {
  try {
    var t = e.rules || e.cssRules;
    return t ? iN(Array.from(t).map(Q1).join("")) : null;
  } catch {
    return null;
  }
}
function Q1(e) {
  var t = e.cssText;
  if (oN(e))
    try {
      t = Df(e.styleSheet) || t;
    } catch {
    }
  return t;
}
function oN(e) {
  return "styleSheet" in e;
}
var X1 = function() {
  function e() {
    this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
  return e.prototype.getId = function(t) {
    var n;
    if (!t)
      return -1;
    var r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
    return r ?? -1;
  }, e.prototype.getNode = function(t) {
    return this.idNodeMap.get(t) || null;
  }, e.prototype.getIds = function() {
    return Array.from(this.idNodeMap.keys());
  }, e.prototype.getMeta = function(t) {
    return this.nodeMetaMap.get(t) || null;
  }, e.prototype.removeNodeFromMap = function(t) {
    var n = this, r = this.getId(t);
    this.idNodeMap.delete(r), t.childNodes && t.childNodes.forEach(function(i) {
      return n.removeNodeFromMap(i);
    });
  }, e.prototype.has = function(t) {
    return this.idNodeMap.has(t);
  }, e.prototype.hasNode = function(t) {
    return this.nodeMetaMap.has(t);
  }, e.prototype.add = function(t, n) {
    var r = n.id;
    this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n);
  }, e.prototype.replace = function(t, n) {
    var r = this.getNode(t);
    if (r) {
      var i = this.nodeMetaMap.get(r);
      i && this.nodeMetaMap.set(n, i);
    }
    this.idNodeMap.set(t, n);
  }, e.prototype.reset = function() {
    this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }, e;
}();
function aN() {
  return new X1();
}
function hp(e) {
  var t = e.maskInputOptions, n = e.tagName, r = e.type, i = e.value, o = e.maskInputFn, a = i || "";
  return (t[n.toLowerCase()] || t[r]) && (o ? a = o(a) : a = "*".repeat(a.length)), a;
}
var Jh = "__rrweb_original__";
function lN(e) {
  var t = e.getContext("2d");
  if (!t)
    return !0;
  for (var n = 50, r = 0; r < e.width; r += n)
    for (var i = 0; i < e.height; i += n) {
      var o = t.getImageData, a = Jh in o ? o[Jh] : o, l = new Uint32Array(a.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i)).data.buffer);
      if (l.some(function(s) {
        return s !== 0;
      }))
        return !1;
    }
  return !0;
}
var sN = 1, uN = new RegExp("[^a-z0-9-_:]"), aa = -2;
function J1() {
  return sN++;
}
function cN(e) {
  if (e instanceof HTMLFormElement)
    return "form";
  var t = e.tagName.toLowerCase().trim();
  return uN.test(t) ? "div" : t;
}
function fN(e) {
  return e.cssRules ? Array.from(e.cssRules).map(function(t) {
    return t.cssText || "";
  }).join("") : "";
}
function dN(e) {
  var t = "";
  return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0], t = t.split("?")[0], t;
}
var Gr, em, pN = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, vN = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/, hN = /^(data:)([^,]*),(.*)/i;
function fs(e, t) {
  return (e || "").replace(pN, function(n, r, i, o, a, l) {
    var s = i || a || l, u = r || o || "";
    if (!s)
      return n;
    if (!vN.test(s) || hN.test(s))
      return "url(".concat(u).concat(s).concat(u, ")");
    if (s[0] === "/")
      return "url(".concat(u).concat(dN(t) + s).concat(u, ")");
    var c = t.split("/"), f = s.split("/");
    c.pop();
    for (var p = 0, g = f; p < g.length; p++) {
      var h = g[p];
      h !== "." && (h === ".." ? c.pop() : c.push(h));
    }
    return "url(".concat(u).concat(c.join("/")).concat(u, ")");
  });
}
var mN = /^[^ \t\n\r\u000c]+/, gN = /^[, \t\n\r\u000c]+/;
function yN(e, t) {
  if (t.trim() === "")
    return t;
  var n = 0;
  function r(u) {
    var c, f = u.exec(t.substring(n));
    return f ? (c = f[0], n += c.length, c) : "";
  }
  for (var i = []; r(gN), !(n >= t.length); ) {
    var o = r(mN);
    if (o.slice(-1) === ",")
      o = hi(e, o.substring(0, o.length - 1)), i.push(o);
    else {
      var a = "";
      o = hi(e, o);
      for (var l = !1; ; ) {
        var s = t.charAt(n);
        if (s === "") {
          i.push((o + a).trim());
          break;
        } else if (l)
          s === ")" && (l = !1);
        else if (s === ",") {
          n += 1, i.push((o + a).trim());
          break;
        } else
          s === "(" && (l = !0);
        a += s, n += 1;
      }
    }
  }
  return i.join(", ");
}
function hi(e, t) {
  if (!t || t.trim() === "")
    return t;
  var n = e.createElement("a");
  return n.href = t, n.href;
}
function CN(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function mp() {
  var e = document.createElement("a");
  return e.href = "", e.href;
}
function eC(e, t, n, r) {
  return n === "src" || n === "href" && r && !(t === "use" && r[0] === "#") || n === "xlink:href" && r && r[0] !== "#" || n === "background" && r && (t === "table" || t === "td" || t === "th") ? hi(e, r) : n === "srcset" && r ? yN(e, r) : n === "style" && r ? fs(r, mp()) : t === "object" && n === "data" && r ? hi(e, r) : r;
}
function wN(e, t, n) {
  if (typeof t == "string") {
    if (e.classList.contains(t))
      return !0;
  } else
    for (var r = e.classList.length; r--; ) {
      var i = e.classList[r];
      if (t.test(i))
        return !0;
    }
  return n ? e.matches(n) : !1;
}
function ds(e, t, n) {
  if (!e)
    return !1;
  if (e.nodeType !== e.ELEMENT_NODE)
    return n ? ds(e.parentNode, t, n) : !1;
  for (var r = e.classList.length; r--; ) {
    var i = e.classList[r];
    if (t.test(i))
      return !0;
  }
  return n ? ds(e.parentNode, t, n) : !1;
}
function tC(e, t, n) {
  var r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  if (r === null)
    return !1;
  if (typeof t == "string") {
    if (r.classList.contains(t) || r.closest(".".concat(t)))
      return !0;
  } else if (ds(r, t, !0))
    return !0;
  return !!(n && (r.matches(n) || r.closest(n)));
}
function SN(e, t, n) {
  var r = e.contentWindow;
  if (r) {
    var i = !1, o;
    try {
      o = r.document.readyState;
    } catch {
      return;
    }
    if (o !== "complete") {
      var a = setTimeout(function() {
        i || (t(), i = !0);
      }, n);
      e.addEventListener("load", function() {
        clearTimeout(a), i = !0, t();
      });
      return;
    }
    var l = "about:blank";
    if (r.location.href !== l || e.src === l || e.src === "")
      return setTimeout(t, 0), e.addEventListener("load", t);
    e.addEventListener("load", t);
  }
}
function bN(e, t, n) {
  var r = !1, i;
  try {
    i = e.sheet;
  } catch {
    return;
  }
  if (!i) {
    var o = setTimeout(function() {
      r || (t(), r = !0);
    }, n);
    e.addEventListener("load", function() {
      clearTimeout(o), r = !0, t();
    });
  }
}
function xN(e, t) {
  var n = t.doc, r = t.mirror, i = t.blockClass, o = t.blockSelector, a = t.maskTextClass, l = t.maskTextSelector, s = t.inlineStylesheet, u = t.maskInputOptions, c = u === void 0 ? {} : u, f = t.maskTextFn, p = t.maskInputFn, g = t.dataURLOptions, h = g === void 0 ? {} : g, y = t.inlineImages, w = t.recordCanvas, m = t.keepIframeSrcFn, v = t.newlyAddedElement, C = v === void 0 ? !1 : v, S = EN(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat" ? {
        type: Qe.Document,
        childNodes: [],
        compatMode: e.compatMode
      } : {
        type: Qe.Document,
        childNodes: []
      };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: Qe.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: S
      };
    case e.ELEMENT_NODE:
      return IN(e, {
        doc: n,
        blockClass: i,
        blockSelector: o,
        inlineStylesheet: s,
        maskInputOptions: c,
        maskInputFn: p,
        dataURLOptions: h,
        inlineImages: y,
        recordCanvas: w,
        keepIframeSrcFn: m,
        newlyAddedElement: C,
        rootId: S
      });
    case e.TEXT_NODE:
      return kN(e, {
        maskTextClass: a,
        maskTextSelector: l,
        maskTextFn: f,
        rootId: S
      });
    case e.CDATA_SECTION_NODE:
      return {
        type: Qe.CDATA,
        textContent: "",
        rootId: S
      };
    case e.COMMENT_NODE:
      return {
        type: Qe.Comment,
        textContent: e.textContent || "",
        rootId: S
      };
    default:
      return !1;
  }
}
function EN(e, t) {
  if (t.hasNode(e)) {
    var n = t.getId(e);
    return n === 1 ? void 0 : n;
  }
}
function kN(e, t) {
  var n, r = t.maskTextClass, i = t.maskTextSelector, o = t.maskTextFn, a = t.rootId, l = e.parentNode && e.parentNode.tagName, s = e.textContent, u = l === "STYLE" ? !0 : void 0, c = l === "SCRIPT" ? !0 : void 0;
  if (u && s) {
    try {
      e.nextSibling || e.previousSibling || !((n = e.parentNode.sheet) === null || n === void 0) && n.cssRules && (s = fN(e.parentNode.sheet));
    } catch (f) {
      console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(f), e);
    }
    s = fs(s, mp());
  }
  return c && (s = "SCRIPT_PLACEHOLDER"), !u && !c && s && tC(e, r, i) && (s = o ? o(s) : s.replace(/[\S]/g, "*")), {
    type: Qe.Text,
    textContent: s || "",
    isStyle: u,
    rootId: a
  };
}
function IN(e, t) {
  for (var n = t.doc, r = t.blockClass, i = t.blockSelector, o = t.inlineStylesheet, a = t.maskInputOptions, l = a === void 0 ? {} : a, s = t.maskInputFn, u = t.dataURLOptions, c = u === void 0 ? {} : u, f = t.inlineImages, p = t.recordCanvas, g = t.keepIframeSrcFn, h = t.newlyAddedElement, y = h === void 0 ? !1 : h, w = t.rootId, m = wN(e, r, i), v = cN(e), C = {}, S = e.attributes.length, b = 0; b < S; b++) {
    var I = e.attributes[b];
    C[I.name] = eC(n, v, I.name, I.value);
  }
  if (v === "link" && o) {
    var T = Array.from(n.styleSheets).find(function(A) {
      return A.href === e.href;
    }), E = null;
    T && (E = Df(T)), E && (delete C.rel, delete C.href, C._cssText = fs(E, T.href));
  }
  if (v === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
    var E = Df(e.sheet);
    E && (C._cssText = fs(E, mp()));
  }
  if (v === "input" || v === "textarea" || v === "select") {
    var D = e.value, F = e.checked;
    C.type !== "radio" && C.type !== "checkbox" && C.type !== "submit" && C.type !== "button" && D ? C.value = hp({
      type: C.type,
      tagName: v,
      value: D,
      maskInputOptions: l,
      maskInputFn: s
    }) : F && (C.checked = F);
  }
  if (v === "option" && (e.selected && !l.select ? C.selected = !0 : delete C.selected), v === "canvas" && p) {
    if (e.__context === "2d")
      lN(e) || (C.rr_dataURL = e.toDataURL(c.type, c.quality));
    else if (!("__context" in e)) {
      var z = e.toDataURL(c.type, c.quality), R = document.createElement("canvas");
      R.width = e.width, R.height = e.height;
      var x = R.toDataURL(c.type, c.quality);
      z !== x && (C.rr_dataURL = z);
    }
  }
  if (v === "img" && f) {
    Gr || (Gr = n.createElement("canvas"), em = Gr.getContext("2d"));
    var _ = e, P = _.crossOrigin;
    _.crossOrigin = "anonymous";
    var k = function() {
      try {
        Gr.width = _.naturalWidth, Gr.height = _.naturalHeight, em.drawImage(_, 0, 0), C.rr_dataURL = Gr.toDataURL(c.type, c.quality);
      } catch (A) {
        console.warn("Cannot inline img src=".concat(_.currentSrc, "! Error: ").concat(A));
      }
      P ? C.crossOrigin = P : _.removeAttribute("crossorigin");
    };
    _.complete && _.naturalWidth !== 0 ? k() : _.onload = k;
  }
  if ((v === "audio" || v === "video") && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), y || (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), m) {
    var O = e.getBoundingClientRect(), N = O.width, M = O.height;
    C = {
      class: C.class,
      rr_width: "".concat(N, "px"),
      rr_height: "".concat(M, "px")
    };
  }
  return v === "iframe" && !g(C.src) && (e.contentDocument || (C.rr_src = C.src), delete C.src), {
    type: Qe.Element,
    tagName: v,
    attributes: C,
    childNodes: [],
    isSVG: CN(e) || void 0,
    needBlock: m,
    rootId: w
  };
}
function Ee(e) {
  return e === void 0 ? "" : e.toLowerCase();
}
function NN(e, t) {
  if (t.comment && e.type === Qe.Comment)
    return !0;
  if (e.type === Qe.Element) {
    if (t.script && (e.tagName === "script" || e.tagName === "link" && e.attributes.rel === "preload" && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && e.attributes.href.endsWith(".js")))
      return !0;
    if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (Ee(e.attributes.name).match(/^msapplication-tile(image|color)$/) || Ee(e.attributes.name) === "application-name" || Ee(e.attributes.rel) === "icon" || Ee(e.attributes.rel) === "apple-touch-icon" || Ee(e.attributes.rel) === "shortcut icon")))
      return !0;
    if (e.tagName === "meta") {
      if (t.headMetaDescKeywords && Ee(e.attributes.name).match(/^description|keywords$/))
        return !0;
      if (t.headMetaSocial && (Ee(e.attributes.property).match(/^(og|twitter|fb):/) || Ee(e.attributes.name).match(/^(og|twitter):/) || Ee(e.attributes.name) === "pinterest"))
        return !0;
      if (t.headMetaRobots && (Ee(e.attributes.name) === "robots" || Ee(e.attributes.name) === "googlebot" || Ee(e.attributes.name) === "bingbot"))
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (t.headMetaAuthorship && (Ee(e.attributes.name) === "author" || Ee(e.attributes.name) === "generator" || Ee(e.attributes.name) === "framework" || Ee(e.attributes.name) === "publisher" || Ee(e.attributes.name) === "progid" || Ee(e.attributes.property).match(/^article:/) || Ee(e.attributes.property).match(/^product:/)))
        return !0;
      if (t.headMetaVerification && (Ee(e.attributes.name) === "google-site-verification" || Ee(e.attributes.name) === "yandex-verification" || Ee(e.attributes.name) === "csrf-token" || Ee(e.attributes.name) === "p:domain_verify" || Ee(e.attributes.name) === "verify-v1" || Ee(e.attributes.name) === "verification" || Ee(e.attributes.name) === "shopify-checkout-api-token"))
        return !0;
    }
  }
  return !1;
}
function mi(e, t) {
  var n = t.doc, r = t.mirror, i = t.blockClass, o = t.blockSelector, a = t.maskTextClass, l = t.maskTextSelector, s = t.skipChild, u = s === void 0 ? !1 : s, c = t.inlineStylesheet, f = c === void 0 ? !0 : c, p = t.maskInputOptions, g = p === void 0 ? {} : p, h = t.maskTextFn, y = t.maskInputFn, w = t.slimDOMOptions, m = t.dataURLOptions, v = m === void 0 ? {} : m, C = t.inlineImages, S = C === void 0 ? !1 : C, b = t.recordCanvas, I = b === void 0 ? !1 : b, T = t.onSerialize, E = t.onIframeLoad, D = t.iframeLoadTimeout, F = D === void 0 ? 5e3 : D, z = t.onStylesheetLoad, R = t.stylesheetLoadTimeout, x = R === void 0 ? 5e3 : R, _ = t.keepIframeSrcFn, P = _ === void 0 ? function() {
    return !1;
  } : _, k = t.newlyAddedElement, O = k === void 0 ? !1 : k, N = t.preserveWhiteSpace, M = N === void 0 ? !0 : N, A = xN(e, {
    doc: n,
    mirror: r,
    blockClass: i,
    blockSelector: o,
    maskTextClass: a,
    maskTextSelector: l,
    inlineStylesheet: f,
    maskInputOptions: g,
    maskTextFn: h,
    maskInputFn: y,
    dataURLOptions: v,
    inlineImages: S,
    recordCanvas: I,
    keepIframeSrcFn: P,
    newlyAddedElement: O
  });
  if (!A)
    return console.warn(e, "not serialized"), null;
  var $;
  r.hasNode(e) ? $ = r.getId(e) : NN(A, w) || !M && A.type === Qe.Text && !A.isStyle && !A.textContent.replace(/^\s+|\s+$/gm, "").length ? $ = aa : $ = J1();
  var V = Object.assign(A, { id: $ });
  if (r.add(e, V), $ === aa)
    return null;
  T && T(e);
  var B = !u;
  if (V.type === Qe.Element) {
    B = B && !V.needBlock, delete V.needBlock;
    var H = e.shadowRoot;
    H && Ao(H) && (V.isShadowHost = !0);
  }
  if ((V.type === Qe.Document || V.type === Qe.Element) && B) {
    w.headWhitespace && V.type === Qe.Element && V.tagName === "head" && (M = !1);
    for (var K = {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: o,
      maskTextClass: a,
      maskTextSelector: l,
      skipChild: u,
      inlineStylesheet: f,
      maskInputOptions: g,
      maskTextFn: h,
      maskInputFn: y,
      slimDOMOptions: w,
      dataURLOptions: v,
      inlineImages: S,
      recordCanvas: I,
      preserveWhiteSpace: M,
      onSerialize: T,
      onIframeLoad: E,
      iframeLoadTimeout: F,
      onStylesheetLoad: z,
      stylesheetLoadTimeout: x,
      keepIframeSrcFn: P
    }, G = 0, le = Array.from(e.childNodes); G < le.length; G++) {
      var oe = le[G], J = mi(oe, K);
      J && V.childNodes.push(J);
    }
    if (rN(e) && e.shadowRoot)
      for (var pe = 0, ae = Array.from(e.shadowRoot.childNodes); pe < ae.length; pe++) {
        var oe = ae[pe], J = mi(oe, K);
        J && (Ao(e.shadowRoot) && (J.isShadow = !0), V.childNodes.push(J));
      }
  }
  return e.parentNode && _o(e.parentNode) && Ao(e.parentNode) && (V.isShadow = !0), V.type === Qe.Element && V.tagName === "iframe" && SN(e, function() {
    var ye = e.contentDocument;
    if (ye && E) {
      var se = mi(ye, {
        doc: ye,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputOptions: g,
        maskTextFn: h,
        maskInputFn: y,
        slimDOMOptions: w,
        dataURLOptions: v,
        inlineImages: S,
        recordCanvas: I,
        preserveWhiteSpace: M,
        onSerialize: T,
        onIframeLoad: E,
        iframeLoadTimeout: F,
        onStylesheetLoad: z,
        stylesheetLoadTimeout: x,
        keepIframeSrcFn: P
      });
      se && E(e, se);
    }
  }, F), V.type === Qe.Element && V.tagName === "link" && V.attributes.rel === "stylesheet" && bN(e, function() {
    if (z) {
      var ye = mi(e, {
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputOptions: g,
        maskTextFn: h,
        maskInputFn: y,
        slimDOMOptions: w,
        dataURLOptions: v,
        inlineImages: S,
        recordCanvas: I,
        preserveWhiteSpace: M,
        onSerialize: T,
        onIframeLoad: E,
        iframeLoadTimeout: F,
        onStylesheetLoad: z,
        stylesheetLoadTimeout: x,
        keepIframeSrcFn: P
      });
      ye && z(e, ye);
    }
  }, x), V;
}
function TN(e, t) {
  var n = t || {}, r = n.mirror, i = r === void 0 ? new X1() : r, o = n.blockClass, a = o === void 0 ? "rr-block" : o, l = n.blockSelector, s = l === void 0 ? null : l, u = n.maskTextClass, c = u === void 0 ? "rr-mask" : u, f = n.maskTextSelector, p = f === void 0 ? null : f, g = n.inlineStylesheet, h = g === void 0 ? !0 : g, y = n.inlineImages, w = y === void 0 ? !1 : y, m = n.recordCanvas, v = m === void 0 ? !1 : m, C = n.maskAllInputs, S = C === void 0 ? !1 : C, b = n.maskTextFn, I = n.maskInputFn, T = n.slimDOM, E = T === void 0 ? !1 : T, D = n.dataURLOptions, F = n.preserveWhiteSpace, z = n.onSerialize, R = n.onIframeLoad, x = n.iframeLoadTimeout, _ = n.onStylesheetLoad, P = n.stylesheetLoadTimeout, k = n.keepIframeSrcFn, O = k === void 0 ? function() {
    return !1;
  } : k, N = S === !0 ? {
    color: !0,
    date: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
    textarea: !0,
    select: !0,
    password: !0
  } : S === !1 ? {
    password: !0
  } : S, M = E === !0 || E === "all" ? {
    script: !0,
    comment: !0,
    headFavicon: !0,
    headWhitespace: !0,
    headMetaDescKeywords: E === "all",
    headMetaSocial: !0,
    headMetaRobots: !0,
    headMetaHttpEquiv: !0,
    headMetaAuthorship: !0,
    headMetaVerification: !0
  } : E === !1 ? {} : E;
  return mi(e, {
    doc: e,
    mirror: i,
    blockClass: a,
    blockSelector: s,
    maskTextClass: c,
    maskTextSelector: p,
    skipChild: !1,
    inlineStylesheet: h,
    maskInputOptions: N,
    maskTextFn: b,
    maskInputFn: I,
    slimDOMOptions: M,
    dataURLOptions: D,
    inlineImages: w,
    recordCanvas: v,
    preserveWhiteSpace: F,
    onSerialize: z,
    onIframeLoad: R,
    iframeLoadTimeout: x,
    onStylesheetLoad: _,
    stylesheetLoadTimeout: P,
    keepIframeSrcFn: O,
    newlyAddedElement: !1
  });
}
function dt(e, t, n = document) {
  const r = { capture: !0, passive: !0 };
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
const Xr = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let tm = {
  map: {},
  getId() {
    return console.error(Xr), -1;
  },
  getNode() {
    return console.error(Xr), null;
  },
  removeNodeFromMap() {
    console.error(Xr);
  },
  has() {
    return console.error(Xr), !1;
  },
  reset() {
    console.error(Xr);
  }
};
typeof window < "u" && window.Proxy && window.Reflect && (tm = new Proxy(tm, {
  get(e, t, n) {
    return t === "map" && console.error(Xr), Reflect.get(e, t, n);
  }
}));
function la(e, t, n = {}) {
  let r = null, i = 0;
  return function(...o) {
    const a = Date.now();
    !i && n.leading === !1 && (i = a);
    const l = t - (a - i), s = this;
    l <= 0 || l > t ? (r && (clearTimeout(r), r = null), i = a, e.apply(s, o)) : !r && n.trailing !== !1 && (r = setTimeout(() => {
      i = n.leading === !1 ? 0 : Date.now(), r = null, e.apply(s, o);
    }, l));
  };
}
function Ys(e, t, n, r, i = window) {
  const o = i.Object.getOwnPropertyDescriptor(e, t);
  return i.Object.defineProperty(e, t, r ? n : {
    set(a) {
      setTimeout(() => {
        n.set.call(this, a);
      }, 0), o && o.set && o.set.call(this, a);
    }
  }), () => Ys(e, t, o || {}, !0);
}
function Fr(e, t, n) {
  try {
    if (!(t in e))
      return () => {
      };
    const r = e[t], i = n(r);
    return typeof i == "function" && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
      __rrweb_original__: {
        enumerable: !1,
        value: r
      }
    })), e[t] = i, () => {
      e[t] = r;
    };
  } catch {
    return () => {
    };
  }
}
function nC() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function rC() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function pt(e, t, n, r) {
  if (!e)
    return !1;
  const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  if (!i)
    return !1;
  if (typeof t == "string") {
    if (i.classList.contains(t) || r && i.closest("." + t) !== null)
      return !0;
  } else if (ds(i, t, r))
    return !0;
  return !!(n && (e.matches(n) || r && i.closest(n) !== null));
}
function PN(e, t) {
  return t.getId(e) !== -1;
}
function Gu(e, t) {
  return t.getId(e) === aa;
}
function iC(e, t) {
  if (_o(e))
    return !1;
  const n = t.getId(e);
  return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? iC(e.parentNode, t) : !0 : !0;
}
function oC(e) {
  return !!e.changedTouches;
}
function ON(e = window) {
  "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...t) => {
    let n = t[0];
    if (!(0 in t))
      throw new TypeError("1 argument is required");
    do
      if (this === n)
        return !0;
    while (n = n && n.parentNode);
    return !1;
  });
}
function aC(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function lC(e, t) {
  return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e));
}
function sC(e) {
  return !!(e != null && e.shadowRoot);
}
class RN {
  constructor() {
    this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
  }
  getId(t) {
    var n;
    return (n = this.styleIDMap.get(t)) !== null && n !== void 0 ? n : -1;
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, n) {
    if (this.has(t))
      return this.getId(t);
    let r;
    return n === void 0 ? r = this.id++ : r = n, this.styleIDMap.set(t, r), this.idStyleMap.set(r, t), r;
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
  }
  generateId() {
    return this.id++;
  }
}
var we = /* @__PURE__ */ ((e) => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(we || {}), me = /* @__PURE__ */ ((e) => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e))(me || {}), Vf = /* @__PURE__ */ ((e) => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(Vf || {}), ji = /* @__PURE__ */ ((e) => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(ji || {});
function nm(e) {
  return "__ln" in e;
}
class _N {
  constructor() {
    this.length = 0, this.head = null;
  }
  get(t) {
    if (t >= this.length)
      throw new Error("Position outside of list range");
    let n = this.head;
    for (let r = 0; r < t; r++)
      n = (n == null ? void 0 : n.next) || null;
    return n;
  }
  addNode(t) {
    const n = {
      value: t,
      previous: null,
      next: null
    };
    if (t.__ln = n, t.previousSibling && nm(t.previousSibling)) {
      const r = t.previousSibling.__ln.next;
      n.next = r, n.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = n, r && (r.previous = n);
    } else if (t.nextSibling && nm(t.nextSibling) && t.nextSibling.__ln.previous) {
      const r = t.nextSibling.__ln.previous;
      n.previous = r, n.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = n, r && (r.next = n);
    } else
      this.head && (this.head.previous = n), n.next = this.head, this.head = n;
    this.length++;
  }
  removeNode(t) {
    const n = t.__ln;
    this.head && (n.previous ? (n.previous.next = n.next, n.next && (n.next.previous = n.previous)) : (this.head = n.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--);
  }
}
const rm = (e, t) => `${e}@${t}`;
class AN {
  constructor() {
    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.processMutations = (t) => {
      t.forEach(this.processMutation), this.emit();
    }, this.emit = () => {
      if (this.frozen || this.locked)
        return;
      const t = [], n = new _N(), r = (l) => {
        let s = l, u = aa;
        for (; u === aa; )
          s = s && s.nextSibling, u = s && this.mirror.getId(s);
        return u;
      }, i = (l) => {
        var s, u, c, f;
        let p = null;
        ((u = (s = l.getRootNode) === null || s === void 0 ? void 0 : s.call(l)) === null || u === void 0 ? void 0 : u.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && l.getRootNode().host && (p = l.getRootNode().host);
        let g = p;
        for (; ((f = (c = g == null ? void 0 : g.getRootNode) === null || c === void 0 ? void 0 : c.call(g)) === null || f === void 0 ? void 0 : f.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && g.getRootNode().host; )
          g = g.getRootNode().host;
        const h = !this.doc.contains(l) && (!g || !this.doc.contains(g));
        if (!l.parentNode || h)
          return;
        const y = _o(l.parentNode) ? this.mirror.getId(p) : this.mirror.getId(l.parentNode), w = r(l);
        if (y === -1 || w === -1)
          return n.addNode(l);
        const m = mi(l, {
          doc: this.doc,
          mirror: this.mirror,
          blockClass: this.blockClass,
          blockSelector: this.blockSelector,
          maskTextClass: this.maskTextClass,
          maskTextSelector: this.maskTextSelector,
          skipChild: !0,
          newlyAddedElement: !0,
          inlineStylesheet: this.inlineStylesheet,
          maskInputOptions: this.maskInputOptions,
          maskTextFn: this.maskTextFn,
          maskInputFn: this.maskInputFn,
          slimDOMOptions: this.slimDOMOptions,
          dataURLOptions: this.dataURLOptions,
          recordCanvas: this.recordCanvas,
          inlineImages: this.inlineImages,
          onSerialize: (v) => {
            aC(v, this.mirror) && this.iframeManager.addIframe(v), lC(v, this.mirror) && this.stylesheetManager.trackLinkElement(v), sC(l) && this.shadowDomManager.addShadowRoot(l.shadowRoot, this.doc);
          },
          onIframeLoad: (v, C) => {
            this.iframeManager.attachIframe(v, C), this.shadowDomManager.observeAttachShadow(v);
          },
          onStylesheetLoad: (v, C) => {
            this.stylesheetManager.attachLinkElement(v, C);
          }
        });
        m && t.push({
          parentId: y,
          nextId: w,
          node: m
        });
      };
      for (; this.mapRemoves.length; )
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      for (const l of Array.from(this.movedSet.values()))
        im(this.removes, l, this.mirror) && !this.movedSet.has(l.parentNode) || i(l);
      for (const l of Array.from(this.addedSet.values()))
        !om(this.droppedSet, l) && !im(this.removes, l, this.mirror) || om(this.movedSet, l) ? i(l) : this.droppedSet.add(l);
      let o = null;
      for (; n.length; ) {
        let l = null;
        if (o) {
          const s = this.mirror.getId(o.value.parentNode), u = r(o.value);
          s !== -1 && u !== -1 && (l = o);
        }
        if (!l)
          for (let s = n.length - 1; s >= 0; s--) {
            const u = n.get(s);
            if (u) {
              const c = this.mirror.getId(u.value.parentNode);
              if (r(u.value) === -1)
                continue;
              if (c !== -1) {
                l = u;
                break;
              } else {
                const p = u.value;
                if (p.parentNode && p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const g = p.parentNode.host;
                  if (this.mirror.getId(g) !== -1) {
                    l = u;
                    break;
                  }
                }
              }
            }
          }
        if (!l) {
          for (; n.head; )
            n.removeNode(n.head.value);
          break;
        }
        o = l.previous, n.removeNode(l.value), i(l.value);
      }
      const a = {
        texts: this.texts.map((l) => ({
          id: this.mirror.getId(l.node),
          value: l.value
        })).filter((l) => this.mirror.has(l.id)),
        attributes: this.attributes.map((l) => ({
          id: this.mirror.getId(l.node),
          attributes: l.attributes
        })).filter((l) => this.mirror.has(l.id)),
        removes: this.removes,
        adds: t
      };
      !a.texts.length && !a.attributes.length && !a.removes.length && !a.adds.length || (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.movedMap = {}, this.mutationCb(a));
    }, this.processMutation = (t) => {
      if (!Gu(t.target, this.mirror))
        switch (t.type) {
          case "characterData": {
            const n = t.target.textContent;
            !pt(t.target, this.blockClass, this.blockSelector, !1) && n !== t.oldValue && this.texts.push({
              value: tC(t.target, this.maskTextClass, this.maskTextSelector) && n ? this.maskTextFn ? this.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
              node: t.target
            });
            break;
          }
          case "attributes": {
            const n = t.target;
            let r = t.target.getAttribute(t.attributeName);
            if (t.attributeName === "value" && (r = hp({
              maskInputOptions: this.maskInputOptions,
              tagName: t.target.tagName,
              type: t.target.getAttribute("type"),
              value: r,
              maskInputFn: this.maskInputFn
            })), pt(t.target, this.blockClass, this.blockSelector, !1) || r === t.oldValue)
              return;
            let i = this.attributes.find((o) => o.node === t.target);
            if (n.tagName === "IFRAME" && t.attributeName === "src" && !this.keepIframeSrcFn(r))
              if (!n.contentDocument)
                t.attributeName = "rr_src";
              else
                return;
            if (i || (i = {
              node: t.target,
              attributes: {}
            }, this.attributes.push(i)), t.attributeName === "style") {
              const o = this.doc.createElement("span");
              t.oldValue && o.setAttribute("style", t.oldValue), (i.attributes.style === void 0 || i.attributes.style === null) && (i.attributes.style = {});
              const a = i.attributes.style;
              for (const l of Array.from(n.style)) {
                const s = n.style.getPropertyValue(l), u = n.style.getPropertyPriority(l);
                (s !== o.style.getPropertyValue(l) || u !== o.style.getPropertyPriority(l)) && (u === "" ? a[l] = s : a[l] = [s, u]);
              }
              for (const l of Array.from(o.style))
                n.style.getPropertyValue(l) === "" && (a[l] = !1);
            } else
              i.attributes[t.attributeName] = eC(this.doc, n.tagName, t.attributeName, r);
            break;
          }
          case "childList": {
            if (pt(t.target, this.blockClass, this.blockSelector, !0))
              return;
            t.addedNodes.forEach((n) => this.genAdds(n, t.target)), t.removedNodes.forEach((n) => {
              const r = this.mirror.getId(n), i = _o(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
              pt(t.target, this.blockClass, this.blockSelector, !1) || Gu(n, this.mirror) || !PN(n, this.mirror) || (this.addedSet.has(n) ? (zf(this.addedSet, n), this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || iC(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[rm(r, i)] ? zf(this.movedSet, n) : this.removes.push({
                parentId: i,
                id: r,
                isShadow: _o(t.target) && Ao(t.target) ? !0 : void 0
              })), this.mapRemoves.push(n));
            });
            break;
          }
        }
    }, this.genAdds = (t, n) => {
      if (this.mirror.hasNode(t)) {
        if (Gu(t, this.mirror))
          return;
        this.movedSet.add(t);
        let r = null;
        n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)), r && r !== -1 && (this.movedMap[rm(this.mirror.getId(t), r)] = !0);
      } else
        this.addedSet.add(t), this.droppedSet.delete(t);
      pt(t, this.blockClass, this.blockSelector, !1) || t.childNodes.forEach((r) => this.genAdds(r));
    };
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "maskTextClass",
      "maskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager"
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    this.frozen = !0, this.canvasManager.freeze();
  }
  unfreeze() {
    this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    this.locked = !0, this.canvasManager.lock();
  }
  unlock() {
    this.locked = !1, this.canvasManager.unlock(), this.emit();
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}
function zf(e, t) {
  e.delete(t), t.childNodes.forEach((n) => zf(e, n));
}
function im(e, t, n) {
  return e.length === 0 ? !1 : uC(e, t, n);
}
function uC(e, t, n) {
  const { parentNode: r } = t;
  if (!r)
    return !1;
  const i = n.getId(r);
  return e.some((o) => o.id === i) ? !0 : uC(e, r, n);
}
function om(e, t) {
  return e.size === 0 ? !1 : cC(e, t);
}
function cC(e, t) {
  const { parentNode: n } = t;
  return n ? e.has(n) ? !0 : cC(e, n) : !1;
}
const Nr = [], fC = typeof CSSGroupingRule < "u", dC = typeof CSSMediaRule < "u", pC = typeof CSSSupportsRule < "u", vC = typeof CSSConditionRule < "u";
function Ca(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length)
        return t[0];
    } else if ("path" in e && e.path.length)
      return e.path[0];
    return e.target;
  } catch {
    return e.target;
  }
}
function hC(e, t) {
  var n, r;
  const i = new AN();
  Nr.push(i), i.init(e);
  let o = window.MutationObserver || window.__rrMutationObserver;
  const a = (r = (n = window == null ? void 0 : window.Zone) === null || n === void 0 ? void 0 : n.__symbol__) === null || r === void 0 ? void 0 : r.call(n, "MutationObserver");
  a && window[a] && (o = window[a]);
  const l = new o(i.processMutations.bind(i));
  return l.observe(t, {
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), l;
}
function MN({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
  if (t.mousemove === !1)
    return () => {
    };
  const i = typeof t.mousemove == "number" ? t.mousemove : 50, o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let a = [], l;
  const s = la((f) => {
    const p = Date.now() - l;
    e(a.map((g) => (g.timeOffset -= p, g)), f), a = [], l = null;
  }, o), u = la((f) => {
    const p = Ca(f), { clientX: g, clientY: h } = oC(f) ? f.changedTouches[0] : f;
    l || (l = Date.now()), a.push({
      x: g,
      y: h,
      id: r.getId(p),
      timeOffset: Date.now() - l
    }), s(typeof DragEvent < "u" && f instanceof DragEvent ? me.Drag : f instanceof MouseEvent ? me.MouseMove : me.TouchMove);
  }, i, {
    trailing: !1
  }), c = [
    dt("mousemove", u, n),
    dt("touchmove", u, n),
    dt("drag", u, n)
  ];
  return () => {
    c.forEach((f) => f());
  };
}
function FN({ mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
  if (o.mouseInteraction === !1)
    return () => {
    };
  const a = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, l = [], s = (u) => (c) => {
    const f = Ca(c);
    if (pt(f, r, i, !0))
      return;
    const p = oC(c) ? c.changedTouches[0] : c;
    if (!p)
      return;
    const g = n.getId(f), { clientX: h, clientY: y } = p;
    e({
      type: Vf[u],
      id: g,
      x: h,
      y
    });
  };
  return Object.keys(Vf).filter((u) => Number.isNaN(Number(u)) && !u.endsWith("_Departed") && a[u] !== !1).forEach((u) => {
    const c = u.toLowerCase(), f = s(u);
    l.push(dt(c, f, t));
  }), () => {
    l.forEach((u) => u());
  };
}
function mC({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
  const a = la((l) => {
    const s = Ca(l);
    if (!s || pt(s, r, i, !0))
      return;
    const u = n.getId(s);
    if (s === t) {
      const c = t.scrollingElement || t.documentElement;
      e({
        id: u,
        x: c.scrollLeft,
        y: c.scrollTop
      });
    } else
      e({
        id: u,
        x: s.scrollLeft,
        y: s.scrollTop
      });
  }, o.scroll || 100);
  return dt("scroll", a, t);
}
function LN({ viewportResizeCb: e }) {
  let t = -1, n = -1;
  const r = la(() => {
    const i = nC(), o = rC();
    (t !== i || n !== o) && (e({
      width: Number(o),
      height: Number(i)
    }), t = i, n = o);
  }, 200);
  return dt("resize", r, window);
}
function am(e, t) {
  const n = Object.assign({}, e);
  return t || delete n.userTriggered, n;
}
const DN = ["INPUT", "TEXTAREA", "SELECT"], lm = /* @__PURE__ */ new WeakMap();
function VN({ inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, ignoreClass: o, maskInputOptions: a, maskInputFn: l, sampling: s, userTriggeredOnInput: u }) {
  function c(m) {
    let v = Ca(m);
    const C = m.isTrusted;
    if (v && v.tagName === "OPTION" && (v = v.parentElement), !v || !v.tagName || DN.indexOf(v.tagName) < 0 || pt(v, r, i, !0))
      return;
    const S = v.type;
    if (v.classList.contains(o))
      return;
    let b = v.value, I = !1;
    S === "radio" || S === "checkbox" ? I = v.checked : (a[v.tagName.toLowerCase()] || a[S]) && (b = hp({
      maskInputOptions: a,
      tagName: v.tagName,
      type: S,
      value: b,
      maskInputFn: l
    })), f(v, am({ text: b, isChecked: I, userTriggered: C }, u));
    const T = v.name;
    S === "radio" && T && I && t.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach((E) => {
      E !== v && f(E, am({
        text: E.value,
        isChecked: !I,
        userTriggered: !1
      }, u));
    });
  }
  function f(m, v) {
    const C = lm.get(m);
    if (!C || C.text !== v.text || C.isChecked !== v.isChecked) {
      lm.set(m, v);
      const S = n.getId(m);
      e(Object.assign(Object.assign({}, v), { id: S }));
    }
  }
  const g = (s.input === "last" ? ["change"] : ["input", "change"]).map((m) => dt(m, c, t)), h = t.defaultView;
  if (!h)
    return () => {
      g.forEach((m) => m());
    };
  const y = h.Object.getOwnPropertyDescriptor(h.HTMLInputElement.prototype, "value"), w = [
    [h.HTMLInputElement.prototype, "value"],
    [h.HTMLInputElement.prototype, "checked"],
    [h.HTMLSelectElement.prototype, "value"],
    [h.HTMLTextAreaElement.prototype, "value"],
    [h.HTMLSelectElement.prototype, "selectedIndex"],
    [h.HTMLOptionElement.prototype, "selected"]
  ];
  return y && y.set && g.push(...w.map((m) => Ys(m[0], m[1], {
    set() {
      c({ target: this });
    }
  }, !1, h))), () => {
    g.forEach((m) => m());
  };
}
function ps(e) {
  const t = [];
  function n(r, i) {
    if (fC && r.parentRule instanceof CSSGroupingRule || dC && r.parentRule instanceof CSSMediaRule || pC && r.parentRule instanceof CSSSupportsRule || vC && r.parentRule instanceof CSSConditionRule) {
      const a = Array.from(r.parentRule.cssRules).indexOf(r);
      i.unshift(a);
    } else if (r.parentStyleSheet) {
      const a = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      i.unshift(a);
    }
    return i;
  }
  return n(e, t);
}
function Bn(e, t, n) {
  let r, i;
  return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
    styleId: i,
    id: r
  }) : {};
}
function zN({ styleSheetRuleCb: e, mirror: t, stylesheetManager: n }, { win: r }) {
  const i = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = function(c, f) {
    const { id: p, styleId: g } = Bn(this, t, n.styleMirror);
    return (p && p !== -1 || g && g !== -1) && e({
      id: p,
      styleId: g,
      adds: [{ rule: c, index: f }]
    }), i.apply(this, [c, f]);
  };
  const o = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = function(c) {
    const { id: f, styleId: p } = Bn(this, t, n.styleMirror);
    return (f && f !== -1 || p && p !== -1) && e({
      id: f,
      styleId: p,
      removes: [{ index: c }]
    }), o.apply(this, [c]);
  };
  let a;
  r.CSSStyleSheet.prototype.replace && (a = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = function(c) {
    const { id: f, styleId: p } = Bn(this, t, n.styleMirror);
    return (f && f !== -1 || p && p !== -1) && e({
      id: f,
      styleId: p,
      replace: c
    }), a.apply(this, [c]);
  });
  let l;
  r.CSSStyleSheet.prototype.replaceSync && (l = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = function(c) {
    const { id: f, styleId: p } = Bn(this, t, n.styleMirror);
    return (f && f !== -1 || p && p !== -1) && e({
      id: f,
      styleId: p,
      replaceSync: c
    }), l.apply(this, [c]);
  });
  const s = {};
  fC ? s.CSSGroupingRule = r.CSSGroupingRule : (dC && (s.CSSMediaRule = r.CSSMediaRule), vC && (s.CSSConditionRule = r.CSSConditionRule), pC && (s.CSSSupportsRule = r.CSSSupportsRule));
  const u = {};
  return Object.entries(s).forEach(([c, f]) => {
    u[c] = {
      insertRule: f.prototype.insertRule,
      deleteRule: f.prototype.deleteRule
    }, f.prototype.insertRule = function(p, g) {
      const { id: h, styleId: y } = Bn(this.parentStyleSheet, t, n.styleMirror);
      return (h && h !== -1 || y && y !== -1) && e({
        id: h,
        styleId: y,
        adds: [
          {
            rule: p,
            index: [
              ...ps(this),
              g || 0
            ]
          }
        ]
      }), u[c].insertRule.apply(this, [p, g]);
    }, f.prototype.deleteRule = function(p) {
      const { id: g, styleId: h } = Bn(this.parentStyleSheet, t, n.styleMirror);
      return (g && g !== -1 || h && h !== -1) && e({
        id: g,
        styleId: h,
        removes: [
          { index: [...ps(this), p] }
        ]
      }), u[c].deleteRule.apply(this, [p]);
    };
  }), () => {
    r.CSSStyleSheet.prototype.insertRule = i, r.CSSStyleSheet.prototype.deleteRule = o, a && (r.CSSStyleSheet.prototype.replace = a), l && (r.CSSStyleSheet.prototype.replaceSync = l), Object.entries(s).forEach(([c, f]) => {
      f.prototype.insertRule = u[c].insertRule, f.prototype.deleteRule = u[c].deleteRule;
    });
  };
}
function gC({ mirror: e, stylesheetManager: t }, n) {
  var r, i, o;
  let a = null;
  n.nodeName === "#document" ? a = e.getId(n) : a = e.getId(n.host);
  const l = n.nodeName === "#document" ? (r = n.defaultView) === null || r === void 0 ? void 0 : r.Document : (o = (i = n.ownerDocument) === null || i === void 0 ? void 0 : i.defaultView) === null || o === void 0 ? void 0 : o.ShadowRoot, s = Object.getOwnPropertyDescriptor(l == null ? void 0 : l.prototype, "adoptedStyleSheets");
  return a === null || a === -1 || !l || !s ? () => {
  } : (Object.defineProperty(n, "adoptedStyleSheets", {
    configurable: s.configurable,
    enumerable: s.enumerable,
    get() {
      var u;
      return (u = s.get) === null || u === void 0 ? void 0 : u.call(this);
    },
    set(u) {
      var c;
      const f = (c = s.set) === null || c === void 0 ? void 0 : c.call(this, u);
      if (a !== null && a !== -1)
        try {
          t.adoptStyleSheets(u, a);
        } catch {
        }
      return f;
    }
  }), () => {
    Object.defineProperty(n, "adoptedStyleSheets", {
      configurable: s.configurable,
      enumerable: s.enumerable,
      get: s.get,
      set: s.set
    });
  });
}
function $N({ styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r }, { win: i }) {
  const o = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = function(l, s, u) {
    var c;
    if (n.has(l))
      return o.apply(this, [l, s, u]);
    const { id: f, styleId: p } = Bn((c = this.parentRule) === null || c === void 0 ? void 0 : c.parentStyleSheet, t, r.styleMirror);
    return (f && f !== -1 || p && p !== -1) && e({
      id: f,
      styleId: p,
      set: {
        property: l,
        value: s,
        priority: u
      },
      index: ps(this.parentRule)
    }), o.apply(this, [l, s, u]);
  };
  const a = i.CSSStyleDeclaration.prototype.removeProperty;
  return i.CSSStyleDeclaration.prototype.removeProperty = function(l) {
    var s;
    if (n.has(l))
      return a.apply(this, [l]);
    const { id: u, styleId: c } = Bn((s = this.parentRule) === null || s === void 0 ? void 0 : s.parentStyleSheet, t, r.styleMirror);
    return (u && u !== -1 || c && c !== -1) && e({
      id: u,
      styleId: c,
      remove: {
        property: l
      },
      index: ps(this.parentRule)
    }), a.apply(this, [l]);
  }, () => {
    i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = a;
  };
}
function jN({ mediaInteractionCb: e, blockClass: t, blockSelector: n, mirror: r, sampling: i }) {
  const o = (l) => la((s) => {
    const u = Ca(s);
    if (!u || pt(u, t, n, !0))
      return;
    const { currentTime: c, volume: f, muted: p, playbackRate: g } = u;
    e({
      type: l,
      id: r.getId(u),
      currentTime: c,
      volume: f,
      muted: p,
      playbackRate: g
    });
  }, i.media || 500), a = [
    dt("play", o(0)),
    dt("pause", o(1)),
    dt("seeked", o(2)),
    dt("volumechange", o(3)),
    dt("ratechange", o(4))
  ];
  return () => {
    a.forEach((l) => l());
  };
}
function WN({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n)
    return () => {
    };
  const r = [], i = /* @__PURE__ */ new WeakMap(), o = n.FontFace;
  n.FontFace = function(s, u, c) {
    const f = new o(s, u, c);
    return i.set(f, {
      family: s,
      buffer: typeof u != "string",
      descriptors: c,
      fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
    }), f;
  };
  const a = Fr(t.fonts, "add", function(l) {
    return function(s) {
      return setTimeout(() => {
        const u = i.get(s);
        u && (e(u), i.delete(s));
      }, 0), l.apply(this, [s]);
    };
  });
  return r.push(() => {
    n.FontFace = o;
  }), r.push(a), () => {
    r.forEach((l) => l());
  };
}
function BN(e) {
  const { doc: t, mirror: n, blockClass: r, blockSelector: i, selectionCb: o } = e;
  let a = !0;
  const l = () => {
    const s = t.getSelection();
    if (!s || a && (s != null && s.isCollapsed))
      return;
    a = s.isCollapsed || !1;
    const u = [], c = s.rangeCount || 0;
    for (let f = 0; f < c; f++) {
      const p = s.getRangeAt(f), { startContainer: g, startOffset: h, endContainer: y, endOffset: w } = p;
      pt(g, r, i, !0) || pt(y, r, i, !0) || u.push({
        start: n.getId(g),
        startOffset: h,
        end: n.getId(y),
        endOffset: w
      });
    }
    o({ ranges: u });
  };
  return l(), dt("selectionchange", l);
}
function UN(e, t) {
  const { mutationCb: n, mousemoveCb: r, mouseInteractionCb: i, scrollCb: o, viewportResizeCb: a, inputCb: l, mediaInteractionCb: s, styleSheetRuleCb: u, styleDeclarationCb: c, canvasMutationCb: f, fontCb: p, selectionCb: g } = e;
  e.mutationCb = (...h) => {
    t.mutation && t.mutation(...h), n(...h);
  }, e.mousemoveCb = (...h) => {
    t.mousemove && t.mousemove(...h), r(...h);
  }, e.mouseInteractionCb = (...h) => {
    t.mouseInteraction && t.mouseInteraction(...h), i(...h);
  }, e.scrollCb = (...h) => {
    t.scroll && t.scroll(...h), o(...h);
  }, e.viewportResizeCb = (...h) => {
    t.viewportResize && t.viewportResize(...h), a(...h);
  }, e.inputCb = (...h) => {
    t.input && t.input(...h), l(...h);
  }, e.mediaInteractionCb = (...h) => {
    t.mediaInteaction && t.mediaInteaction(...h), s(...h);
  }, e.styleSheetRuleCb = (...h) => {
    t.styleSheetRule && t.styleSheetRule(...h), u(...h);
  }, e.styleDeclarationCb = (...h) => {
    t.styleDeclaration && t.styleDeclaration(...h), c(...h);
  }, e.canvasMutationCb = (...h) => {
    t.canvasMutation && t.canvasMutation(...h), f(...h);
  }, e.fontCb = (...h) => {
    t.font && t.font(...h), p(...h);
  }, e.selectionCb = (...h) => {
    t.selection && t.selection(...h), g(...h);
  };
}
function HN(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n)
    return () => {
    };
  UN(e, t);
  const r = hC(e, e.doc), i = MN(e), o = FN(e), a = mC(e), l = LN(e), s = VN(e), u = jN(e), c = zN(e, { win: n }), f = gC(e, e.doc), p = $N(e, {
    win: n
  }), g = e.collectFonts ? WN(e) : () => {
  }, h = BN(e), y = [];
  for (const w of e.plugins)
    y.push(w.observer(w.callback, n, w.options));
  return () => {
    Nr.forEach((w) => w.reset()), r.disconnect(), i(), o(), a(), l(), s(), u(), c(), f(), p(), g(), h(), y.forEach((w) => w());
  };
}
class sm {
  constructor(t) {
    this.generateIdFn = t, this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
  }
  getId(t, n, r, i) {
    const o = r || this.getIdToRemoteIdMap(t), a = i || this.getRemoteIdToIdMap(t);
    let l = o.get(n);
    return l || (l = this.generateIdFn(), o.set(n, l), a.set(l, n)), l;
  }
  getIds(t, n) {
    const r = this.getIdToRemoteIdMap(t), i = this.getRemoteIdToIdMap(t);
    return n.map((o) => this.getId(t, o, r, i));
  }
  getRemoteId(t, n, r) {
    const i = r || this.getRemoteIdToIdMap(t);
    if (typeof n != "number")
      return n;
    const o = i.get(n);
    return o || -1;
  }
  getRemoteIds(t, n) {
    const r = this.getRemoteIdToIdMap(t);
    return n.map((i) => this.getRemoteId(t, i, r));
  }
  reset(t) {
    if (!t) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
  }
  getIdToRemoteIdMap(t) {
    let n = this.iframeIdToRemoteIdMap.get(t);
    return n || (n = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(t, n)), n;
  }
  getRemoteIdToIdMap(t) {
    let n = this.iframeRemoteIdToIdMap.get(t);
    return n || (n = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(t, n)), n;
  }
}
class GN {
  constructor(t) {
    this.iframes = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMirror = new sm(J1), this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new sm(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
  }
  addIframe(t) {
    this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    var r;
    this.mutationCb({
      adds: [
        {
          parentId: this.mirror.getId(t),
          nextId: null,
          node: n
        }
      ],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0
    }), (r = this.loadListener) === null || r === void 0 || r.call(this, t), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument));
  }
  handleMessage(t) {
    if (t.data.type === "rrweb") {
      if (!t.source)
        return;
      const r = this.crossOriginIframeMap.get(t.source);
      if (!r)
        return;
      const i = this.transformCrossOriginEvent(r, t.data.event);
      i && this.wrappedEmit(i, t.data.isCheckout);
    }
  }
  transformCrossOriginEvent(t, n) {
    var r;
    switch (n.type) {
      case we.FullSnapshot:
        return this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(n.data.node, t), {
          timestamp: n.timestamp,
          type: we.IncrementalSnapshot,
          data: {
            source: me.Mutation,
            adds: [
              {
                parentId: this.mirror.getId(t),
                nextId: null,
                node: n.data.node
              }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }
        };
      case we.Meta:
      case we.Load:
      case we.DomContentLoaded:
        return !1;
      case we.Plugin:
        return n;
      case we.Custom:
        return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]), n;
      case we.IncrementalSnapshot:
        switch (n.data.source) {
          case me.Mutation:
            return n.data.adds.forEach((i) => {
              this.replaceIds(i, t, [
                "parentId",
                "nextId",
                "previousId"
              ]), this.replaceIdOnNode(i.node, t);
            }), n.data.removes.forEach((i) => {
              this.replaceIds(i, t, ["parentId", "id"]);
            }), n.data.attributes.forEach((i) => {
              this.replaceIds(i, t, ["id"]);
            }), n.data.texts.forEach((i) => {
              this.replaceIds(i, t, ["id"]);
            }), n;
          case me.Drag:
          case me.TouchMove:
          case me.MouseMove:
            return n.data.positions.forEach((i) => {
              this.replaceIds(i, t, ["id"]);
            }), n;
          case me.ViewportResize:
            return !1;
          case me.MediaInteraction:
          case me.MouseInteraction:
          case me.Scroll:
          case me.CanvasMutation:
          case me.Input:
            return this.replaceIds(n.data, t, ["id"]), n;
          case me.StyleSheetRule:
          case me.StyleDeclaration:
            return this.replaceIds(n.data, t, ["id"]), this.replaceStyleIds(n.data, t, ["styleId"]), n;
          case me.Font:
            return n;
          case me.Selection:
            return n.data.ranges.forEach((i) => {
              this.replaceIds(i, t, ["start", "end"]);
            }), n;
          case me.AdoptedStyleSheet:
            return this.replaceIds(n.data, t, ["id"]), this.replaceStyleIds(n.data, t, ["styleIds"]), (r = n.data.styles) === null || r === void 0 || r.forEach((i) => {
              this.replaceStyleIds(i, t, ["styleId"]);
            }), n;
        }
    }
  }
  replace(t, n, r, i) {
    for (const o of i)
      !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = t.getIds(r, n[o]) : n[o] = t.getId(r, n[o]));
    return n;
  }
  replaceIds(t, n, r) {
    return this.replace(this.crossOriginIframeMirror, t, n, r);
  }
  replaceStyleIds(t, n, r) {
    return this.replace(this.crossOriginIframeStyleMirror, t, n, r);
  }
  replaceIdOnNode(t, n) {
    this.replaceIds(t, n, ["id"]), "childNodes" in t && t.childNodes.forEach((r) => {
      this.replaceIdOnNode(r, n);
    });
  }
}
class KN {
  constructor(t) {
    this.shadowDoms = /* @__PURE__ */ new WeakSet(), this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
    const n = this;
    this.restorePatches.push(Fr(Element.prototype, "attachShadow", function(r) {
      return function(i) {
        const o = r.call(this, i);
        return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), o;
      };
    }));
  }
  addShadowRoot(t, n) {
    Ao(t) && (this.shadowDoms.has(t) || (this.shadowDoms.add(t), hC(Object.assign(Object.assign({}, this.bypassOptions), { doc: n, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), t), mC(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: t, mirror: this.mirror })), setTimeout(() => {
      t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), gC({
        mirror: this.mirror,
        stylesheetManager: this.bypassOptions.stylesheetManager
      }, t);
    }, 0)));
  }
  observeAttachShadow(t) {
    if (t.contentWindow) {
      const n = this;
      this.restorePatches.push(Fr(t.contentWindow.HTMLElement.prototype, "attachShadow", function(r) {
        return function(i) {
          const o = r.call(this, i);
          return this.shadowRoot && n.addShadowRoot(this.shadowRoot, t.contentDocument), o;
        };
      }));
    }
  }
  reset() {
    this.restorePatches.forEach((t) => t()), this.shadowDoms = /* @__PURE__ */ new WeakSet();
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function YN(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function ZN(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return new (n || (n = Promise))(function(o, a) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function s(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
var gi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qN = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var al = 0; al < gi.length; al++)
  qN[gi.charCodeAt(al)] = al;
var QN = function(e) {
  var t = new Uint8Array(e), n, r = t.length, i = "";
  for (n = 0; n < r; n += 3)
    i += gi[t[n] >> 2], i += gi[(t[n] & 3) << 4 | t[n + 1] >> 4], i += gi[(t[n + 1] & 15) << 2 | t[n + 2] >> 6], i += gi[t[n + 2] & 63];
  return r % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
};
const um = /* @__PURE__ */ new Map();
function XN(e, t) {
  let n = um.get(e);
  return n || (n = /* @__PURE__ */ new Map(), um.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
}
const yC = (e, t, n) => {
  if (!e || !(wC(e, t) || typeof e == "object"))
    return;
  const r = e.constructor.name, i = XN(n, r);
  let o = i.indexOf(e);
  return o === -1 && (o = i.length, i.push(e)), o;
};
function Nl(e, t, n) {
  if (e instanceof Array)
    return e.map((r) => Nl(r, t, n));
  if (e === null)
    return e;
  if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
    return {
      rr_type: e.constructor.name,
      args: [Object.values(e)]
    };
  if (e instanceof ArrayBuffer) {
    const r = e.constructor.name, i = QN(e);
    return {
      rr_type: r,
      base64: i
    };
  } else {
    if (e instanceof DataView)
      return {
        rr_type: e.constructor.name,
        args: [
          Nl(e.buffer, t, n),
          e.byteOffset,
          e.byteLength
        ]
      };
    if (e instanceof HTMLImageElement) {
      const r = e.constructor.name, { src: i } = e;
      return {
        rr_type: r,
        src: i
      };
    } else if (e instanceof HTMLCanvasElement) {
      const r = "HTMLImageElement", i = e.toDataURL();
      return {
        rr_type: r,
        src: i
      };
    } else {
      if (e instanceof ImageData)
        return {
          rr_type: e.constructor.name,
          args: [Nl(e.data, t, n), e.width, e.height]
        };
      if (wC(e, t) || typeof e == "object") {
        const r = e.constructor.name, i = yC(e, t, n);
        return {
          rr_type: r,
          index: i
        };
      }
    }
  }
  return e;
}
const CC = (e, t, n) => [...e].map((r) => Nl(r, t, n)), wC = (e, t) => !![
  "WebGLActiveInfo",
  "WebGLBuffer",
  "WebGLFramebuffer",
  "WebGLProgram",
  "WebGLRenderbuffer",
  "WebGLShader",
  "WebGLShaderPrecisionFormat",
  "WebGLTexture",
  "WebGLUniformLocation",
  "WebGLVertexArrayObject",
  "WebGLVertexArrayObjectOES"
].filter((i) => typeof t[i] == "function").find((i) => e instanceof t[i]);
function JN(e, t, n, r) {
  const i = [], o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
  for (const a of o)
    try {
      if (typeof t.CanvasRenderingContext2D.prototype[a] != "function")
        continue;
      const l = Fr(t.CanvasRenderingContext2D.prototype, a, function(s) {
        return function(...u) {
          return pt(this.canvas, n, r, !0) || setTimeout(() => {
            const c = CC([...u], t, this);
            e(this.canvas, {
              type: ji["2D"],
              property: a,
              args: c
            });
          }, 0), s.apply(this, u);
        };
      });
      i.push(l);
    } catch {
      const s = Ys(t.CanvasRenderingContext2D.prototype, a, {
        set(u) {
          e(this.canvas, {
            type: ji["2D"],
            property: a,
            args: [u],
            setter: !0
          });
        }
      });
      i.push(s);
    }
  return () => {
    i.forEach((a) => a());
  };
}
function cm(e, t, n) {
  const r = [];
  try {
    const i = Fr(e.HTMLCanvasElement.prototype, "getContext", function(o) {
      return function(a, ...l) {
        return pt(this, t, n, !0) || "__context" in this || (this.__context = a), o.apply(this, [a, ...l]);
      };
    });
    r.push(i);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    r.forEach((i) => i());
  };
}
function fm(e, t, n, r, i, o, a) {
  const l = [], s = Object.getOwnPropertyNames(e);
  for (const u of s)
    if (![
      "isContextLost",
      "canvas",
      "drawingBufferWidth",
      "drawingBufferHeight"
    ].includes(u))
      try {
        if (typeof e[u] != "function")
          continue;
        const c = Fr(e, u, function(f) {
          return function(...p) {
            const g = f.apply(this, p);
            if (yC(g, a, this), !pt(this.canvas, r, i, !0)) {
              const h = CC([...p], a, this), y = {
                type: t,
                property: u,
                args: h
              };
              n(this.canvas, y);
            }
            return g;
          };
        });
        l.push(c);
      } catch {
        const f = Ys(e, u, {
          set(p) {
            n(this.canvas, {
              type: t,
              property: u,
              args: [p],
              setter: !0
            });
          }
        });
        l.push(f);
      }
  return l;
}
function e4(e, t, n, r, i) {
  const o = [];
  return o.push(...fm(t.WebGLRenderingContext.prototype, ji.WebGL, e, n, r, i, t)), typeof t.WebGL2RenderingContext < "u" && o.push(...fm(t.WebGL2RenderingContext.prototype, ji.WebGL2, e, n, r, i, t)), () => {
    o.forEach((a) => a());
  };
}
var SC = null;
try {
  var t4 = typeof module < "u" && typeof module.require == "function" && module.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
  SC = t4.Worker;
} catch {
}
function n4(e, t) {
  return Buffer.from(e, "base64").toString(t ? "utf16" : "utf8");
}
function r4(e, t, n) {
  var r = t === void 0 ? null : t, i = n === void 0 ? !1 : n, o = n4(e, i), a = o.indexOf(`
`, 10) + 1, l = o.substring(a) + (r ? "//# sourceMappingURL=" + r : "");
  return function(u) {
    return new SC(l, Object.assign({}, u, { eval: !0 }));
  };
}
function i4(e, t) {
  var n = atob(e);
  if (t) {
    for (var r = new Uint8Array(n.length), i = 0, o = n.length; i < o; ++i)
      r[i] = n.charCodeAt(i);
    return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
  }
  return n;
}
function o4(e, t, n) {
  var r = t === void 0 ? null : t, i = n === void 0 ? !1 : n, o = i4(e, i), a = o.indexOf(`
`, 10) + 1, l = o.substring(a) + (r ? "//# sourceMappingURL=" + r : ""), s = new Blob([l], { type: "application/javascript" });
  return URL.createObjectURL(s);
}
function a4(e, t, n) {
  var r;
  return function(o) {
    return r = r || o4(e, t, n), new Worker(r, o);
  };
}
var l4 = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
function s4() {
  return l4;
}
function u4(e, t, n) {
  return s4() ? r4(e, t, n) : a4(e, t, n);
}
var c4 = u4("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", null, !1);
class f4 {
  constructor(t) {
    this.pendingCanvasMutations = /* @__PURE__ */ new Map(), this.rafStamps = { latestId: 0, invokeId: null }, this.frozen = !1, this.locked = !1, this.processMutation = (s, u) => {
      (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(s) || this.pendingCanvasMutations.set(s, []), this.pendingCanvasMutations.get(s).push(u);
    };
    const { sampling: n = "all", win: r, blockClass: i, blockSelector: o, recordCanvas: a, dataURLOptions: l } = t;
    this.mutationCb = t.mutationCb, this.mirror = t.mirror, a && n === "all" && this.initCanvasMutationObserver(r, i, o), a && typeof n == "number" && this.initCanvasFPSObserver(n, r, i, o, {
      dataURLOptions: l
    });
  }
  reset() {
    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
  }
  freeze() {
    this.frozen = !0;
  }
  unfreeze() {
    this.frozen = !1;
  }
  lock() {
    this.locked = !0;
  }
  unlock() {
    this.locked = !1;
  }
  initCanvasFPSObserver(t, n, r, i, o) {
    const a = cm(n, r, i), l = /* @__PURE__ */ new Map(), s = new c4();
    s.onmessage = (h) => {
      const { id: y } = h.data;
      if (l.set(y, !1), !("base64" in h.data))
        return;
      const { base64: w, type: m, width: v, height: C } = h.data;
      this.mutationCb({
        id: y,
        type: ji["2D"],
        commands: [
          {
            property: "clearRect",
            args: [0, 0, v, C]
          },
          {
            property: "drawImage",
            args: [
              {
                rr_type: "ImageBitmap",
                args: [
                  {
                    rr_type: "Blob",
                    data: [{ rr_type: "ArrayBuffer", base64: w }],
                    type: m
                  }
                ]
              },
              0,
              0
            ]
          }
        ]
      });
    };
    const u = 1e3 / t;
    let c = 0, f;
    const p = () => {
      const h = [];
      return n.document.querySelectorAll("canvas").forEach((y) => {
        pt(y, r, i, !0) || h.push(y);
      }), h;
    }, g = (h) => {
      if (c && h - c < u) {
        f = requestAnimationFrame(g);
        return;
      }
      c = h, p().forEach((y) => ZN(this, void 0, void 0, function* () {
        var w;
        const m = this.mirror.getId(y);
        if (l.get(m))
          return;
        if (l.set(m, !0), ["webgl", "webgl2"].includes(y.__context)) {
          const C = y.getContext(y.__context);
          ((w = C == null ? void 0 : C.getContextAttributes()) === null || w === void 0 ? void 0 : w.preserveDrawingBuffer) === !1 && (C == null || C.clear(C.COLOR_BUFFER_BIT));
        }
        const v = yield createImageBitmap(y);
        s.postMessage({
          id: m,
          bitmap: v,
          width: y.width,
          height: y.height,
          dataURLOptions: o.dataURLOptions
        }, [v]);
      })), f = requestAnimationFrame(g);
    };
    f = requestAnimationFrame(g), this.resetObservers = () => {
      a(), cancelAnimationFrame(f);
    };
  }
  initCanvasMutationObserver(t, n, r) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    const i = cm(t, n, r), o = JN(this.processMutation.bind(this), t, n, r), a = e4(this.processMutation.bind(this), t, n, r, this.mirror);
    this.resetObservers = () => {
      i(), o(), a();
    };
  }
  startPendingCanvasMutationFlusher() {
    requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
    const t = (n) => {
      this.rafStamps.latestId = n, requestAnimationFrame(t);
    };
    requestAnimationFrame(t);
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach((t, n) => {
      const r = this.mirror.getId(n);
      this.flushPendingCanvasMutationFor(n, r);
    }), requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(t, n) {
    if (this.frozen || this.locked)
      return;
    const r = this.pendingCanvasMutations.get(t);
    if (!r || n === -1)
      return;
    const i = r.map((a) => YN(a, ["type"])), { type: o } = r[0];
    this.mutationCb({ id: n, type: o, commands: i }), this.pendingCanvasMutations.delete(t);
  }
}
class d4 {
  constructor(t) {
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet(), this.styleMirror = new RN(), this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb;
  }
  attachLinkElement(t, n) {
    "_cssText" in n.attributes && this.mutationCb({
      adds: [],
      removes: [],
      texts: [],
      attributes: [
        {
          id: n.id,
          attributes: n.attributes
        }
      ]
    }), this.trackLinkElement(t);
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, n) {
    if (t.length === 0)
      return;
    const r = {
      id: n,
      styleIds: []
    }, i = [];
    for (const o of t) {
      let a;
      if (this.styleMirror.has(o))
        a = this.styleMirror.getId(o);
      else {
        a = this.styleMirror.add(o);
        const l = Array.from(o.rules || CSSRule);
        i.push({
          styleId: a,
          rules: l.map((s, u) => ({
            rule: Q1(s),
            index: u
          }))
        });
      }
      r.styleIds.push(a);
    }
    i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r);
  }
  reset() {
    this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  trackStylesheetInLinkElement(t) {
  }
}
function Be(e) {
  return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
}
let De, Tl, Ku, vs = !1;
const tn = aN();
function wa(e = {}) {
  const { emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: i = "rr-block", blockSelector: o = null, ignoreClass: a = "rr-ignore", maskTextClass: l = "rr-mask", maskTextSelector: s = null, inlineStylesheet: u = !0, maskAllInputs: c, maskInputOptions: f, slimDOMOptions: p, maskInputFn: g, maskTextFn: h, hooks: y, packFn: w, sampling: m = {}, dataURLOptions: v = {}, mousemoveWait: C, recordCanvas: S = !1, recordCrossOriginIframes: b = !1, userTriggeredOnInput: I = !1, collectFonts: T = !1, inlineImages: E = !1, plugins: D, keepIframeSrcFn: F = () => !1, ignoreCSSAttributes: z = /* @__PURE__ */ new Set([]) } = e, R = b ? window.parent === window : !0;
  let x = !1;
  if (!R)
    try {
      window.parent.document, x = !1;
    } catch {
      x = !0;
    }
  if (R && !t)
    throw new Error("emit function is required");
  C !== void 0 && m.mousemove === void 0 && (m.mousemove = C), tn.reset();
  const _ = c === !0 ? {
    color: !0,
    date: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
    textarea: !0,
    select: !0,
    password: !0
  } : f !== void 0 ? f : { password: !0 }, P = p === !0 || p === "all" ? {
    script: !0,
    comment: !0,
    headFavicon: !0,
    headWhitespace: !0,
    headMetaSocial: !0,
    headMetaRobots: !0,
    headMetaHttpEquiv: !0,
    headMetaVerification: !0,
    headMetaAuthorship: p === "all",
    headMetaDescKeywords: p === "all"
  } : p || {};
  ON();
  let k, O = 0;
  const N = (G) => {
    for (const le of D || [])
      le.eventProcessor && (G = le.eventProcessor(G));
    return w && (G = w(G)), G;
  };
  De = (G, le) => {
    var oe;
    if (!((oe = Nr[0]) === null || oe === void 0) && oe.isFrozen() && G.type !== we.FullSnapshot && !(G.type === we.IncrementalSnapshot && G.data.source === me.Mutation) && Nr.forEach((J) => J.unfreeze()), R)
      t == null || t(N(G), le);
    else if (x) {
      const J = {
        type: "rrweb",
        event: N(G),
        isCheckout: le
      };
      window.parent.postMessage(J, "*");
    }
    if (G.type === we.FullSnapshot)
      k = G, O = 0;
    else if (G.type === we.IncrementalSnapshot) {
      if (G.data.source === me.Mutation && G.data.isAttachIframe)
        return;
      O++;
      const J = r && O >= r, pe = n && G.timestamp - k.timestamp > n;
      (J || pe) && Tl(!0);
    }
  };
  const M = (G) => {
    De(Be({
      type: we.IncrementalSnapshot,
      data: Object.assign({ source: me.Mutation }, G)
    }));
  }, A = (G) => De(Be({
    type: we.IncrementalSnapshot,
    data: Object.assign({ source: me.Scroll }, G)
  })), $ = (G) => De(Be({
    type: we.IncrementalSnapshot,
    data: Object.assign({ source: me.CanvasMutation }, G)
  })), V = (G) => De(Be({
    type: we.IncrementalSnapshot,
    data: Object.assign({ source: me.AdoptedStyleSheet }, G)
  })), B = new d4({
    mutationCb: M,
    adoptedStyleSheetCb: V
  }), H = new GN({
    mirror: tn,
    mutationCb: M,
    stylesheetManager: B,
    recordCrossOriginIframes: b,
    wrappedEmit: De
  });
  for (const G of D || [])
    G.getMirror && G.getMirror({
      nodeMirror: tn,
      crossOriginIframeMirror: H.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: H.crossOriginIframeStyleMirror
    });
  Ku = new f4({
    recordCanvas: S,
    mutationCb: $,
    win: window,
    blockClass: i,
    blockSelector: o,
    mirror: tn,
    sampling: m.canvas,
    dataURLOptions: v
  });
  const K = new KN({
    mutationCb: M,
    scrollCb: A,
    bypassOptions: {
      blockClass: i,
      blockSelector: o,
      maskTextClass: l,
      maskTextSelector: s,
      inlineStylesheet: u,
      maskInputOptions: _,
      dataURLOptions: v,
      maskTextFn: h,
      maskInputFn: g,
      recordCanvas: S,
      inlineImages: E,
      sampling: m,
      slimDOMOptions: P,
      iframeManager: H,
      stylesheetManager: B,
      canvasManager: Ku,
      keepIframeSrcFn: F
    },
    mirror: tn
  });
  Tl = (G = !1) => {
    var le, oe, J, pe, ae, ye;
    De(Be({
      type: we.Meta,
      data: {
        href: window.location.href,
        width: rC(),
        height: nC()
      }
    }), G), B.reset(), Nr.forEach((fe) => fe.lock());
    const se = TN(document, {
      mirror: tn,
      blockClass: i,
      blockSelector: o,
      maskTextClass: l,
      maskTextSelector: s,
      inlineStylesheet: u,
      maskAllInputs: _,
      maskTextFn: h,
      slimDOM: P,
      dataURLOptions: v,
      recordCanvas: S,
      inlineImages: E,
      onSerialize: (fe) => {
        aC(fe, tn) && H.addIframe(fe), lC(fe, tn) && B.trackLinkElement(fe), sC(fe) && K.addShadowRoot(fe.shadowRoot, document);
      },
      onIframeLoad: (fe, xe) => {
        H.attachIframe(fe, xe), K.observeAttachShadow(fe);
      },
      onStylesheetLoad: (fe, xe) => {
        B.attachLinkElement(fe, xe);
      },
      keepIframeSrcFn: F
    });
    if (!se)
      return console.warn("Failed to snapshot the document");
    De(Be({
      type: we.FullSnapshot,
      data: {
        node: se,
        initialOffset: {
          left: window.pageXOffset !== void 0 ? window.pageXOffset : (document == null ? void 0 : document.documentElement.scrollLeft) || ((oe = (le = document == null ? void 0 : document.body) === null || le === void 0 ? void 0 : le.parentElement) === null || oe === void 0 ? void 0 : oe.scrollLeft) || ((J = document == null ? void 0 : document.body) === null || J === void 0 ? void 0 : J.scrollLeft) || 0,
          top: window.pageYOffset !== void 0 ? window.pageYOffset : (document == null ? void 0 : document.documentElement.scrollTop) || ((ae = (pe = document == null ? void 0 : document.body) === null || pe === void 0 ? void 0 : pe.parentElement) === null || ae === void 0 ? void 0 : ae.scrollTop) || ((ye = document == null ? void 0 : document.body) === null || ye === void 0 ? void 0 : ye.scrollTop) || 0
        }
      }
    })), Nr.forEach((fe) => fe.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && B.adoptStyleSheets(document.adoptedStyleSheets, tn.getId(document));
  };
  try {
    const G = [];
    G.push(dt("DOMContentLoaded", () => {
      De(Be({
        type: we.DomContentLoaded,
        data: {}
      }));
    }));
    const le = (J) => {
      var pe;
      return HN({
        mutationCb: M,
        mousemoveCb: (ae, ye) => De(Be({
          type: we.IncrementalSnapshot,
          data: {
            source: ye,
            positions: ae
          }
        })),
        mouseInteractionCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.MouseInteraction }, ae)
        })),
        scrollCb: A,
        viewportResizeCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.ViewportResize }, ae)
        })),
        inputCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.Input }, ae)
        })),
        mediaInteractionCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.MediaInteraction }, ae)
        })),
        styleSheetRuleCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.StyleSheetRule }, ae)
        })),
        styleDeclarationCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.StyleDeclaration }, ae)
        })),
        canvasMutationCb: $,
        fontCb: (ae) => De(Be({
          type: we.IncrementalSnapshot,
          data: Object.assign({ source: me.Font }, ae)
        })),
        selectionCb: (ae) => {
          De(Be({
            type: we.IncrementalSnapshot,
            data: Object.assign({ source: me.Selection }, ae)
          }));
        },
        blockClass: i,
        ignoreClass: a,
        maskTextClass: l,
        maskTextSelector: s,
        maskInputOptions: _,
        inlineStylesheet: u,
        sampling: m,
        recordCanvas: S,
        inlineImages: E,
        userTriggeredOnInput: I,
        collectFonts: T,
        doc: J,
        maskInputFn: g,
        maskTextFn: h,
        keepIframeSrcFn: F,
        blockSelector: o,
        slimDOMOptions: P,
        dataURLOptions: v,
        mirror: tn,
        iframeManager: H,
        stylesheetManager: B,
        shadowDomManager: K,
        canvasManager: Ku,
        ignoreCSSAttributes: z,
        plugins: ((pe = D == null ? void 0 : D.filter((ae) => ae.observer)) === null || pe === void 0 ? void 0 : pe.map((ae) => ({
          observer: ae.observer,
          options: ae.options,
          callback: (ye) => De(Be({
            type: we.Plugin,
            data: {
              plugin: ae.name,
              payload: ye
            }
          }))
        }))) || []
      }, y);
    };
    H.addLoadListener((J) => {
      G.push(le(J.contentDocument));
    });
    const oe = () => {
      Tl(), G.push(le(document)), vs = !0;
    };
    return document.readyState === "interactive" || document.readyState === "complete" ? oe() : G.push(dt("load", () => {
      De(Be({
        type: we.Load,
        data: {}
      })), oe();
    }, window)), () => {
      G.forEach((J) => J()), vs = !1;
    };
  } catch (G) {
    console.warn(G);
  }
}
wa.addCustomEvent = (e, t) => {
  if (!vs)
    throw new Error("please add custom event after start recording");
  De(Be({
    type: we.Custom,
    data: {
      tag: e,
      payload: t
    }
  }));
};
wa.freezePage = () => {
  Nr.forEach((e) => e.freeze());
};
wa.takeFullSnapshot = (e) => {
  if (!vs)
    throw new Error("please take full snapshot after start recording");
  Tl(e);
};
wa.mirror = tn;
var Gt = Uint8Array, qn = Uint16Array, $f = Uint32Array, bC = new Gt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), xC = new Gt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), p4 = new Gt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), EC = function(e, t) {
  for (var n = new qn(31), r = 0; r < 31; ++r)
    n[r] = t += 1 << e[r - 1];
  for (var i = new $f(n[30]), r = 1; r < 30; ++r)
    for (var o = n[r]; o < n[r + 1]; ++o)
      i[o] = o - n[r] << 5 | r;
  return [n, i];
}, kC = EC(bC, 2), IC = kC[0], v4 = kC[1];
IC[28] = 258, v4[258] = 28;
var h4 = EC(xC, 0), m4 = h4[0], jf = new qn(32768);
for (var Te = 0; Te < 32768; ++Te) {
  var zn = (Te & 43690) >>> 1 | (Te & 21845) << 1;
  zn = (zn & 52428) >>> 2 | (zn & 13107) << 2, zn = (zn & 61680) >>> 4 | (zn & 3855) << 4, jf[Te] = ((zn & 65280) >>> 8 | (zn & 255) << 8) >>> 1;
}
var Mo = function(e, t, n) {
  for (var r = e.length, i = 0, o = new qn(t); i < r; ++i)
    ++o[e[i] - 1];
  var a = new qn(t);
  for (i = 0; i < t; ++i)
    a[i] = a[i - 1] + o[i - 1] << 1;
  var l;
  if (n) {
    l = new qn(1 << t);
    var s = 15 - t;
    for (i = 0; i < r; ++i)
      if (e[i])
        for (var u = i << 4 | e[i], c = t - e[i], f = a[e[i] - 1]++ << c, p = f | (1 << c) - 1; f <= p; ++f)
          l[jf[f] >>> s] = u;
  } else
    for (l = new qn(r), i = 0; i < r; ++i)
      l[i] = jf[a[e[i] - 1]++] >>> 15 - e[i];
  return l;
}, Sa = new Gt(288);
for (var Te = 0; Te < 144; ++Te)
  Sa[Te] = 8;
for (var Te = 144; Te < 256; ++Te)
  Sa[Te] = 9;
for (var Te = 256; Te < 280; ++Te)
  Sa[Te] = 7;
for (var Te = 280; Te < 288; ++Te)
  Sa[Te] = 8;
var NC = new Gt(32);
for (var Te = 0; Te < 32; ++Te)
  NC[Te] = 5;
var g4 = /* @__PURE__ */ Mo(Sa, 9, 1), y4 = /* @__PURE__ */ Mo(NC, 5, 1), Yu = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Jt = function(e, t, n) {
  var r = t / 8 >> 0;
  return (e[r] | e[r + 1] << 8) >>> (t & 7) & n;
}, Zu = function(e, t) {
  var n = t / 8 >> 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >>> (t & 7);
}, C4 = function(e) {
  return (e / 8 >> 0) + (e & 7 && 1);
}, TC = function(e, t, n) {
  (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length);
  var r = new (e instanceof qn ? qn : e instanceof $f ? $f : Gt)(n - t);
  return r.set(e.subarray(t, n)), r;
}, w4 = function(e, t, n) {
  var r = e.length, i = !t || n, o = !n || n.i;
  n || (n = {}), t || (t = new Gt(r * 3));
  var a = function(G) {
    var le = t.length;
    if (G > le) {
      var oe = new Gt(Math.max(le * 2, G));
      oe.set(t), t = oe;
    }
  }, l = n.f || 0, s = n.p || 0, u = n.b || 0, c = n.l, f = n.d, p = n.m, g = n.n, h = r * 8;
  do {
    if (!c) {
      n.f = l = Jt(e, s, 1);
      var y = Jt(e, s + 1, 3);
      if (s += 3, y)
        if (y == 1)
          c = g4, f = y4, p = 9, g = 5;
        else if (y == 2) {
          var C = Jt(e, s, 31) + 257, S = Jt(e, s + 10, 15) + 4, b = C + Jt(e, s + 5, 31) + 1;
          s += 14;
          for (var I = new Gt(b), T = new Gt(19), E = 0; E < S; ++E)
            T[p4[E]] = Jt(e, s + E * 3, 7);
          s += S * 3;
          var D = Yu(T), F = (1 << D) - 1;
          if (!o && s + b * (D + 7) > h)
            break;
          for (var z = Mo(T, D, 1), E = 0; E < b; ) {
            var R = z[Jt(e, s, F)];
            s += R & 15;
            var w = R >>> 4;
            if (w < 16)
              I[E++] = w;
            else {
              var x = 0, _ = 0;
              for (w == 16 ? (_ = 3 + Jt(e, s, 3), s += 2, x = I[E - 1]) : w == 17 ? (_ = 3 + Jt(e, s, 7), s += 3) : w == 18 && (_ = 11 + Jt(e, s, 127), s += 7); _--; )
                I[E++] = x;
            }
          }
          var P = I.subarray(0, C), k = I.subarray(C);
          p = Yu(P), g = Yu(k), c = Mo(P, p, 1), f = Mo(k, g, 1);
        } else
          throw "invalid block type";
      else {
        var w = C4(s) + 4, m = e[w - 4] | e[w - 3] << 8, v = w + m;
        if (v > r) {
          if (o)
            throw "unexpected EOF";
          break;
        }
        i && a(u + m), t.set(e.subarray(w, v), u), n.b = u += m, n.p = s = v * 8;
        continue;
      }
      if (s > h)
        throw "unexpected EOF";
    }
    i && a(u + 131072);
    for (var O = (1 << p) - 1, N = (1 << g) - 1, M = p + g + 18; o || s + M < h; ) {
      var x = c[Zu(e, s) & O], A = x >>> 4;
      if (s += x & 15, s > h)
        throw "unexpected EOF";
      if (!x)
        throw "invalid length/literal";
      if (A < 256)
        t[u++] = A;
      else if (A == 256) {
        c = null;
        break;
      } else {
        var $ = A - 254;
        if (A > 264) {
          var E = A - 257, V = bC[E];
          $ = Jt(e, s, (1 << V) - 1) + IC[E], s += V;
        }
        var B = f[Zu(e, s) & N], H = B >>> 4;
        if (!B)
          throw "invalid distance";
        s += B & 15;
        var k = m4[H];
        if (H > 3) {
          var V = xC[H];
          k += Zu(e, s) & (1 << V) - 1, s += V;
        }
        if (s > h)
          throw "unexpected EOF";
        i && a(u + 131072);
        for (var K = u + $; u < K; u += 4)
          t[u] = t[u - k], t[u + 1] = t[u + 1 - k], t[u + 2] = t[u + 2 - k], t[u + 3] = t[u + 3 - k];
        u = K;
      }
    }
    n.l = c, n.p = s, n.b = u, c && (l = 1, n.m = p, n.d = f, n.n = g);
  } while (!l);
  return u == t.length ? t : TC(t, 0, u);
}, S4 = function(e) {
  if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31)
    throw "invalid zlib data";
  if (e[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function b4(e, t) {
  return w4((S4(e), e.subarray(2, -4)), t);
}
function x4(e, t) {
  var n = e.length;
  if (!t && typeof TextEncoder < "u")
    return new TextEncoder().encode(e);
  for (var r = new Gt(e.length + (e.length >>> 1)), i = 0, o = function(u) {
    r[i++] = u;
  }, a = 0; a < n; ++a) {
    if (i + 5 > r.length) {
      var l = new Gt(i + 8 + (n - a << 1));
      l.set(r), r = l;
    }
    var s = e.charCodeAt(a);
    s < 128 || t ? o(s) : s < 2048 ? (o(192 | s >>> 6), o(128 | s & 63)) : s > 55295 && s < 57344 ? (s = 65536 + (s & 1023 << 10) | e.charCodeAt(++a) & 1023, o(240 | s >>> 18), o(128 | s >>> 12 & 63), o(128 | s >>> 6 & 63), o(128 | s & 63)) : (o(224 | s >>> 12), o(128 | s >>> 6 & 63), o(128 | s & 63));
  }
  return TC(r, 0, i);
}
function E4(e, t) {
  var n = "";
  if (!t && typeof TextDecoder < "u")
    return new TextDecoder().decode(e);
  for (var r = 0; r < e.length; ) {
    var i = e[r++];
    i < 128 || t ? n += String.fromCharCode(i) : i < 224 ? n += String.fromCharCode((i & 31) << 6 | e[r++] & 63) : i < 240 ? n += String.fromCharCode((i & 15) << 12 | (e[r++] & 63) << 6 | e[r++] & 63) : (i = ((i & 15) << 18 | (e[r++] & 63) << 12 | (e[r++] & 63) << 6 | e[r++] & 63) - 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023));
  }
  return n;
}
const dm = "v1", k4 = (e) => {
  if (typeof e != "string")
    return e;
  try {
    const t = JSON.parse(e);
    if (t.timestamp)
      return t;
  } catch {
  }
  try {
    const t = JSON.parse(E4(b4(x4(e, !0))));
    if (t.v === dm)
      return t;
    throw new Error(`These events were packed with packer ${t.v} which is incompatible with current packer ${dm}.`);
  } catch (t) {
    throw console.error(t), new Error("Unknown data format.");
  }
};
class Kr {
  constructor(t) {
    this.fileName = t.fileName || "", this.functionName = t.functionName || "", this.lineNumber = t.lineNumber, this.columnNumber = t.columnNumber;
  }
  toString() {
    const t = this.lineNumber || "", n = this.columnNumber || "";
    return this.functionName ? `${this.functionName} (${this.fileName}:${t}:${n})` : `${this.fileName}:${t}:${n}`;
  }
}
const I4 = /(^|@)\S+:\d+/, pm = /^\s*at .*(\S+:\d+|\(native\))/m, N4 = /^(eval@)?(\[native code])?$/, vm = {
  parse: function(e) {
    if (!e)
      return [];
    if (typeof e.stacktrace < "u" || typeof e["opera#sourceloc"] < "u")
      return this.parseOpera(e);
    if (e.stack && e.stack.match(pm))
      return this.parseV8OrIE(e);
    if (e.stack)
      return this.parseFFOrSafari(e);
    throw new Error("Cannot parse given Error object");
  },
  extractLocation: function(e) {
    if (e.indexOf(":") === -1)
      return [e];
    const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
    if (!n)
      throw new Error(`Cannot parse given url: ${e}`);
    return [n[1], n[2] || void 0, n[3] || void 0];
  },
  parseV8OrIE: function(e) {
    return e.stack.split(`
`).filter(function(n) {
      return !!n.match(pm);
    }, this).map(function(n) {
      n.indexOf("(eval ") > -1 && (n = n.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
      let r = n.replace(/^\s+/, "").replace(/\(eval code/g, "(");
      const i = r.match(/ (\((.+):(\d+):(\d+)\)$)/);
      r = i ? r.replace(i[0], "") : r;
      const o = r.split(/\s+/).slice(1), a = this.extractLocation(i ? i[1] : o.pop()), l = o.join(" ") || void 0, s = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
      return new Kr({
        functionName: l,
        fileName: s,
        lineNumber: a[1],
        columnNumber: a[2]
      });
    }, this);
  },
  parseFFOrSafari: function(e) {
    return e.stack.split(`
`).filter(function(n) {
      return !n.match(N4);
    }, this).map(function(n) {
      if (n.indexOf(" > eval") > -1 && (n = n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), n.indexOf("@") === -1 && n.indexOf(":") === -1)
        return new Kr({
          functionName: n
        });
      {
        const r = /((.*".+"[^@]*)?[^@]*)(?:@)/, i = n.match(r), o = i && i[1] ? i[1] : void 0, a = this.extractLocation(n.replace(r, ""));
        return new Kr({
          functionName: o,
          fileName: a[0],
          lineNumber: a[1],
          columnNumber: a[2]
        });
      }
    }, this);
  },
  parseOpera: function(e) {
    return !e.stacktrace || e.message.indexOf(`
`) > -1 && e.message.split(`
`).length > e.stacktrace.split(`
`).length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
  },
  parseOpera9: function(e) {
    const t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split(`
`), r = [];
    for (let i = 2, o = n.length; i < o; i += 2) {
      const a = t.exec(n[i]);
      a && r.push(new Kr({
        fileName: a[2],
        lineNumber: parseFloat(a[1])
      }));
    }
    return r;
  },
  parseOpera10: function(e) {
    const t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split(`
`), r = [];
    for (let i = 0, o = n.length; i < o; i += 2) {
      const a = t.exec(n[i]);
      a && r.push(new Kr({
        functionName: a[3] || void 0,
        fileName: a[2],
        lineNumber: parseFloat(a[1])
      }));
    }
    return r;
  },
  parseOpera11: function(e) {
    return e.stack.split(`
`).filter(function(n) {
      return !!n.match(I4) && !n.match(/^Error created at/);
    }, this).map(function(n) {
      const r = n.split("@"), i = this.extractLocation(r.pop()), a = (r.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
      return new Kr({
        functionName: a,
        fileName: i[0],
        lineNumber: i[1],
        columnNumber: i[2]
      });
    }, this);
  }
};
function T4(e) {
  if (!e || !e.outerHTML)
    return "";
  let t = "";
  for (; e.parentElement; ) {
    let n = e.localName;
    if (!n)
      break;
    n = n.toLowerCase();
    const r = e.parentElement, i = [];
    if (r.children && r.children.length > 0)
      for (let o = 0; o < r.children.length; o++) {
        const a = r.children[o];
        a.localName && a.localName.toLowerCase && a.localName.toLowerCase() === n && i.push(a);
      }
    i.length > 1 && (n += `:eq(${i.indexOf(e)})`), t = n + (t ? ">" + t : ""), e = r;
  }
  return t;
}
function Wf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function PC(e, t) {
  if (t === 0)
    return !0;
  const n = Object.keys(e);
  for (const r of n)
    if (Wf(e[r]) && PC(e[r], t - 1))
      return !0;
  return !1;
}
function qu(e, t) {
  const n = {
    numOfKeysLimit: 50,
    depthOfLimit: 4
  };
  Object.assign(n, t);
  const r = [], i = [];
  return JSON.stringify(e, function(l, s) {
    if (r.length > 0) {
      const u = r.indexOf(this);
      ~u ? r.splice(u + 1) : r.push(this), ~u ? i.splice(u, 1 / 0, l) : i.push(l), ~r.indexOf(s) && (r[0] === s ? s = "[Circular ~]" : s = "[Circular ~." + i.slice(0, r.indexOf(s)).join(".") + "]");
    } else
      r.push(s);
    if (s === null)
      return s;
    if (s === void 0)
      return "undefined";
    if (o(s))
      return a(s);
    if (s instanceof Event) {
      const u = {};
      for (const c in s) {
        const f = s[c];
        Array.isArray(f) ? u[c] = T4(f.length ? f[0] : null) : u[c] = f;
      }
      return u;
    } else {
      if (s instanceof Node)
        return s instanceof HTMLElement ? s ? s.outerHTML : "" : s.nodeName;
      if (s instanceof Error)
        return s.stack ? s.stack + `
End of stack for Error object` : s.name + ": " + s.message;
    }
    return s;
  });
  function o(l) {
    return !!(Wf(l) && Object.keys(l).length > n.numOfKeysLimit || typeof l == "function" || Wf(l) && PC(l, n.depthOfLimit));
  }
  function a(l) {
    let s = l.toString();
    return n.stringLengthLimit && s.length > n.stringLengthLimit && (s = `${s.slice(0, n.stringLengthLimit)}...`), s;
  }
}
const hm = {
  level: [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "trace",
    "warn"
  ],
  lengthThreshold: 1e3,
  logger: "console"
};
function P4(e, t, n) {
  const r = n ? Object.assign({}, hm, n) : hm, i = r.logger;
  if (!i)
    return () => {
    };
  let o;
  typeof i == "string" ? o = t[i] : o = i;
  let a = 0;
  const l = [];
  if (r.level.includes("error") && window) {
    const u = (c) => {
      const f = c.message, p = c.error, g = vm.parse(p).map((y) => y.toString()), h = [qu(f, r.stringifyOptions)];
      e({
        level: "error",
        trace: g,
        payload: h
      });
    };
    window.addEventListener("error", u), l.push(() => {
      window && window.removeEventListener("error", u);
    });
  }
  for (const u of r.level)
    l.push(s(o, u));
  return () => {
    l.forEach((u) => u());
  };
  function s(u, c) {
    return u[c] ? Fr(u, c, (f) => (...p) => {
      f.apply(this, p);
      try {
        const g = vm.parse(new Error()).map((y) => y.toString()).splice(1), h = p.map((y) => qu(y, r.stringifyOptions));
        a++, a < r.lengthThreshold ? e({
          level: c,
          trace: g,
          payload: h
        }) : a === r.lengthThreshold && e({
          level: "warn",
          trace: [],
          payload: [
            qu("The number of log records reached the threshold.")
          ]
        });
      } catch (g) {
        f("rrweb logger error:", g, ...p);
      }
    }) : () => {
    };
  }
}
const O4 = "rrweb/console@1", R4 = (e) => ({
  name: O4,
  observer: P4,
  options: e
}), mm = Symbol();
function _4(e) {
  const t = ee.createContext(mm);
  function n(i) {
    const o = e(i.initialState);
    return /* @__PURE__ */ Y(t.Provider, { value: o, children: i.children });
  }
  function r() {
    const i = ee.useContext(t);
    if (i === mm)
      throw new Error("Component must be wrapped with <Container.Provider>");
    return i;
  }
  return {
    Provider: n,
    useContainer: r
  };
}
const OC = "feedback_i18n_language_key", gm = "_feedback_config";
function A4() {
  const [e, t] = d.useState(!0), [n, r] = d.useState(), [i, o] = d.useState(!1), a = d.useRef([]), l = d.useRef(), [s, u] = d.useState(!1), [c, f] = d.useState(), [p, g] = d.useState(!1), [h, y] = d.useState([]), [w, m] = d.useState("bug"), v = d.useRef(), [C] = Qr.useForm(), S = d.useCallback(() => {
    a.current = [];
    const T = wa({
      emit(z) {
        a.current.push(z);
      },
      sampling: {
        input: "last",
        // 连续输入时，只录制最终值
        scroll: 150
        // 每 150ms 最多触发一次
      },
      plugins: [R4({
        level: ["error"],
        logger: window.console
      })]
    }), E = () => {
      if (typeof T == "function")
        try {
          T();
        } catch (z) {
          console.log(z);
        }
      o(!1), g(!1), u(!0), t(!0), y([]), l.current = null, v.current = null;
    }, D = async () => {
      E(), y(a.current);
    }, F = async () => {
      E();
    };
    o(!0), t(!1), f(Date.now()), l.current = D, v.current = F;
  }, []), b = d.useCallback(() => {
    C.setFieldsValue({
      email: void 0,
      description: void 0
    }), m(""), y([]), g(!1), u(!1), a.current = [], f(void 0);
  }, [C]), I = d.useCallback(() => {
    u(!1), g(!0), v.current = () => {
      o(!1), g(!1), u(!0), t(!0);
    };
  }, []);
  return {
    startRecord: S,
    type: w,
    setType: m,
    form: C,
    events: h,
    setEvents: y,
    visible: s,
    setVisible: u,
    startFlag: i,
    setStartFlag: o,
    stopFnRef: l,
    cancelFnRef: v,
    recordToolVisible: p,
    setRecordToolVisible: g,
    feedbackVisible: e,
    setFeedbackVisible: t,
    showRecordTool: I,
    reset: b,
    props: n,
    setProps: r,
    startTime: c
  };
}
const Lt = _4(A4), M4 = {
  "feedback.title": "Feedback",
  "feedback.bug.title": "Error report",
  "feedback.bug.desc": "Please tell us about your problem",
  "feedback.improvment.title": "Suggest improvements",
  "feedback.improvment.desc": "Please kindly let us know how can we improve our services",
  "feedback.record": "Record errors",
  "feedback.module": "Please enter the location of the failure",
  "feedback.desc": "Please describe the operation details when the failure occurred",
  "feedback.tips": "👇 Click here once the operation is completed.",
  "feedback.checkbox": "I have read and agree to the data collection terms",
  "feedback.start": "Start recording",
  "feedback.agree": "I agree",
  "feedback.cancel": "Cancel",
  "feedback.submit": "Submit",
  "feedback.close": "Close",
  "feedback.form.title": "Please enter a title",
  "feedback.form.desc": "Please explain the details of the operation",
  "feedback.stop": "End recording",
  "feedback.form.email": "Please enter your email address",
  "feedback.success": "Thank you for your feedback.",
  "feedback.iknow": "Understood",
  "feedback.record.tips": "Please click the button below to record screen of operation path",
  "feedback.desc.error.tips": "Please describe operational error details (required)",
  "feedback.desc.advise.tips": "Please describe improved error details (required)",
  "feedback.agree.tips": "Please read and agree the privacy agreement.",
  "common.formValidRequired": "Required",
  "common.input.placeholder": "Please enter",
  "common.formValidEmail": "Invalid email address",
  "common.formValidLengthLessThan": "Less than {{length}} characters"
}, F4 = "en", Pl = {};
Pl[F4] = M4;
const Jr = {
  get map() {
    return Pl;
  },
  t: function(e, t) {
    const n = window.localStorage.getItem(OC), i = (Pl[n] || {})[e] || "";
    return t ? Object.entries(t).reduce((o, [a, l]) => o.replace(`{{${a}}}`, l), i) : i;
  },
  locale(e, t) {
    return Pl[e] = t, !0;
  }
}, fn = () => {
  const {
    props: e
  } = Lt.useContainer(), t = d.useMemo(() => Jr.map[e == null ? void 0 : e.lang] || {}, [e == null ? void 0 : e.lang]);
  return {
    t: d.useCallback((r) => t[r], [t])
  };
}, L4 = "_normal_w4w7z_1", D4 = "_feedback_w4w7z_2", V4 = "_chineseFeedback_w4w7z_3", ym = {
  normal: L4,
  feedback: D4,
  chineseFeedback: V4,
  "feedback-icon": "_feedback-icon_w4w7z_4"
}, z4 = () => {
  const {
    feedbackVisible: e,
    setVisible: t
  } = Lt.useContainer(), {
    t: n
  } = fn();
  return /* @__PURE__ */ Y(On, { children: e && /* @__PURE__ */ Ve(On, { children: [
    /* @__PURE__ */ Y("div", { className: ym.feedback, onClick: () => t(!0), children: n("feedback.title") }),
    /* @__PURE__ */ Y("div", { className: ym["feedback-icon"], onClick: () => t(!0), children: /* @__PURE__ */ Y("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", "data-icon": "Bug", children: /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.9 7.1V7a3.9 3.9 0 0 0-7.8 0v.1H6.236a1.1 1.1 0 0 1-.984-.608l-.447-.894a.9.9 0 1 0-1.61.805l.447.894a2.9 2.9 0 0 0 2.458 1.6V12.1H3.5a.9.9 0 1 0 0 1.8h2.6V15c0 .74.136 1.448.385 2.1H5a.9.9 0 0 0-.805.498l-1 2a.9.9 0 0 0 1.61.805l.751-1.503h2.017a5.886 5.886 0 0 0 4.427 2 5.886 5.886 0 0 0 4.427-2h2.017l.751 1.503a.9.9 0 1 0 1.61-.805l-1-2A.9.9 0 0 0 19 17.1h-1.485c.249-.652.385-1.36.385-2.1v-1.1h2.6a.9.9 0 1 0 0-1.8h-2.6V8.897a2.9 2.9 0 0 0 2.458-1.6l.447-.894a.9.9 0 1 0-1.61-.805l-.447.894a1.1 1.1 0 0 1-.984.608H15.9Zm-8 7.9V8.9h8.2V15a4.081 4.081 0 0 1-.832 2.477A4.093 4.093 0 0 1 12 19.1a4.094 4.094 0 0 1-3.293-1.656A4.082 4.082 0 0 1 7.9 15Zm2-8v.1h4.2V7a2.1 2.1 0 1 0-4.2 0Zm3 5a.9.9 0 1 0-1.8 0v4.5a.9.9 0 1 0 1.8 0V12Z" }) }) })
  ] }) });
};
var Qu;
function RC(e) {
  if (typeof document > "u")
    return 0;
  if (e || Qu === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var i = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    i === o && (o = n.clientWidth), document.body.removeChild(n), Qu = i - o;
  }
  return Qu;
}
function Wi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!e)
    return {};
  var n = t.element, r = n === void 0 ? document.body : n, i = {}, o = Object.keys(e);
  return o.forEach(function(a) {
    i[a] = r.style[a];
  }), o.forEach(function(a) {
    r.style[a] = e[a];
  }), i;
}
function $4() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Xu = {};
const Cm = function(e) {
  if (!(!$4() && !e)) {
    var t = "ant-scrolling-effect", n = new RegExp("".concat(t), "g"), r = document.body.className;
    if (e) {
      if (!n.test(r))
        return;
      Wi(Xu), Xu = {}, document.body.className = r.replace(n, "").trim();
      return;
    }
    var i = RC();
    if (i && (Xu = Wi({
      position: "relative",
      width: "calc(100% - ".concat(i, "px)")
    }), !n.test(r))) {
      var o = "".concat(r, " ").concat(t);
      document.body.className = o.trim();
    }
  }
};
var j4 = 0, jt = [], _C = "ant-scrolling-effect", Ju = new RegExp("".concat(_C), "g"), ec = /* @__PURE__ */ new Map(), W4 = /* @__PURE__ */ Ye(function e(t) {
  var n = this;
  Ke(this, e), L(this, "lockTarget", void 0), L(this, "options", void 0), L(this, "getContainer", function() {
    var r;
    return (r = n.options) === null || r === void 0 ? void 0 : r.container;
  }), L(this, "reLock", function(r) {
    var i = jt.find(function(o) {
      var a = o.target;
      return a === n.lockTarget;
    });
    i && n.unLock(), n.options = r, i && (i.options = r, n.lock());
  }), L(this, "lock", function() {
    var r;
    if (!jt.some(function(s) {
      var u = s.target;
      return u === n.lockTarget;
    })) {
      if (jt.some(function(s) {
        var u, c = s.options;
        return (c == null ? void 0 : c.container) === ((u = n.options) === null || u === void 0 ? void 0 : u.container);
      })) {
        jt = [].concat(Q(jt), [{
          target: n.lockTarget,
          options: n.options
        }]);
        return;
      }
      var i = 0, o = ((r = n.options) === null || r === void 0 ? void 0 : r.container) || document.body;
      (o === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || o.scrollHeight > o.clientHeight) && getComputedStyle(o).overflow !== "hidden" && (i = RC());
      var a = o.className;
      if (jt.filter(function(s) {
        var u, c = s.options;
        return (c == null ? void 0 : c.container) === ((u = n.options) === null || u === void 0 ? void 0 : u.container);
      }).length === 0 && ec.set(o, Wi({
        width: i !== 0 ? "calc(100% - ".concat(i, "px)") : void 0,
        overflow: "hidden",
        overflowX: "hidden",
        overflowY: "hidden"
      }, {
        element: o
      })), !Ju.test(a)) {
        var l = "".concat(a, " ").concat(_C);
        o.className = l.trim();
      }
      jt = [].concat(Q(jt), [{
        target: n.lockTarget,
        options: n.options
      }]);
    }
  }), L(this, "unLock", function() {
    var r, i = jt.find(function(l) {
      var s = l.target;
      return s === n.lockTarget;
    });
    if (jt = jt.filter(function(l) {
      var s = l.target;
      return s !== n.lockTarget;
    }), !(!i || jt.some(function(l) {
      var s, u = l.options;
      return (u == null ? void 0 : u.container) === ((s = i.options) === null || s === void 0 ? void 0 : s.container);
    }))) {
      var o = ((r = n.options) === null || r === void 0 ? void 0 : r.container) || document.body, a = o.className;
      Ju.test(a) && (Wi(ec.get(o), {
        element: o
      }), ec.delete(o), o.className = o.className.replace(Ju, "").trim());
    }
  }), this.lockTarget = j4++, this.options = t;
}), bn = 0, go = Dn(), ll = {}, Yr = function(t) {
  if (!go)
    return null;
  if (t) {
    if (typeof t == "string")
      return document.querySelectorAll(t)[0];
    if (typeof t == "function")
      return t();
    if (de(t) === "object" && t instanceof window.HTMLElement)
      return t;
  }
  return document.body;
}, B4 = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    return Ke(this, n), i = t.call(this, r), L(te(i), "container", void 0), L(te(i), "componentRef", /* @__PURE__ */ d.createRef()), L(te(i), "rafId", void 0), L(te(i), "scrollLocker", void 0), L(te(i), "renderComponent", void 0), L(te(i), "updateScrollLocker", function(o) {
      var a = o || {}, l = a.visible, s = i.props, u = s.getContainer, c = s.visible;
      c && c !== l && go && Yr(u) !== i.scrollLocker.getContainer() && i.scrollLocker.reLock({
        container: Yr(u)
      });
    }), L(te(i), "updateOpenCount", function(o) {
      var a = o || {}, l = a.visible, s = a.getContainer, u = i.props, c = u.visible, f = u.getContainer;
      c !== l && go && Yr(f) === document.body && (c && !l ? bn += 1 : o && (bn -= 1));
      var p = typeof f == "function" && typeof s == "function";
      (p ? f.toString() !== s.toString() : f !== s) && i.removeCurrentContainer();
    }), L(te(i), "attachToParent", function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      if (o || i.container && !i.container.parentNode) {
        var a = Yr(i.props.getContainer);
        return a ? (a.appendChild(i.container), !0) : !1;
      }
      return !0;
    }), L(te(i), "getContainer", function() {
      return go ? (i.container || (i.container = document.createElement("div"), i.attachToParent(!0)), i.setWrapperClassName(), i.container) : null;
    }), L(te(i), "setWrapperClassName", function() {
      var o = i.props.wrapperClassName;
      i.container && o && o !== i.container.className && (i.container.className = o);
    }), L(te(i), "removeCurrentContainer", function() {
      var o, a;
      (o = i.container) === null || o === void 0 || (a = o.parentNode) === null || a === void 0 || a.removeChild(i.container);
    }), L(te(i), "switchScrollingEffect", function() {
      bn === 1 && !Object.keys(ll).length ? (Cm(), ll = Wi({
        overflow: "hidden",
        overflowX: "hidden",
        overflowY: "hidden"
      })) : bn || (Wi(ll), ll = {}, Cm(!0));
    }), i.scrollLocker = new W4({
      container: Yr(r.getContainer)
    }), i;
  }
  return Ye(n, [{
    key: "componentDidMount",
    value: function() {
      var i = this;
      this.updateOpenCount(), this.attachToParent() || (this.rafId = lt(function() {
        i.forceUpdate();
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      this.updateOpenCount(i), this.updateScrollLocker(i), this.setWrapperClassName(), this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var i = this.props, o = i.visible, a = i.getContainer;
      go && Yr(a) === document.body && (bn = o && bn ? bn - 1 : bn), this.removeCurrentContainer(), lt.cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, o = i.children, a = i.forceRender, l = i.visible, s = null, u = {
        getOpenCount: function() {
          return bn;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };
      return (a || l || this.componentRef.current) && (s = /* @__PURE__ */ d.createElement(P1, {
        getContainer: this.getContainer,
        ref: this.componentRef
      }, o(u))), s;
    }
  }]), n;
}(d.Component), ie = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= ie.F1 && n <= ie.F12)
      return !1;
    switch (n) {
      case ie.ALT:
      case ie.CAPS_LOCK:
      case ie.CONTEXT_MENU:
      case ie.CTRL:
      case ie.DOWN:
      case ie.END:
      case ie.ESC:
      case ie.HOME:
      case ie.INSERT:
      case ie.LEFT:
      case ie.MAC_FF_META:
      case ie.META:
      case ie.NUMLOCK:
      case ie.NUM_CENTER:
      case ie.PAGE_DOWN:
      case ie.PAGE_UP:
      case ie.PAUSE:
      case ie.PRINT_SCREEN:
      case ie.RIGHT:
      case ie.SHIFT:
      case ie.UP:
      case ie.WIN_KEY:
      case ie.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= ie.ZERO && t <= ie.NINE || t >= ie.NUM_ZERO && t <= ie.NUM_MULTIPLY || t >= ie.A && t <= ie.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case ie.SPACE:
      case ie.QUESTION_MARK:
      case ie.NUM_PLUS:
      case ie.NUM_MINUS:
      case ie.NUM_PERIOD:
      case ie.NUM_DIVISION:
      case ie.SEMICOLON:
      case ie.DASH:
      case ie.EQUALS:
      case ie.COMMA:
      case ie.PERIOD:
      case ie.SLASH:
      case ie.APOSTROPHE:
      case ie.SINGLE_QUOTE:
      case ie.OPEN_SQUARE_BRACKET:
      case ie.BACKSLASH:
      case ie.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, U4 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, H4 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, G4 = "".concat(U4, " ").concat(H4).split(/[\s\n]+/), K4 = "aria-", Y4 = "data-";
function wm(e, t) {
  return e.indexOf(t) === 0;
}
function Z4(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = W({}, t);
  var r = {};
  return Object.keys(e).forEach(function(i) {
    // Aria
    (n.aria && (i === "role" || wm(i, K4)) || // Data
    n.data && wm(i, Y4) || // Attr
    n.attr && G4.includes(i)) && (r[i] = e[i]);
  }), r;
}
function q4(e) {
  var t = e.prefixCls, n = e.style, r = e.visible, i = e.maskProps, o = e.motionName;
  return /* @__PURE__ */ d.createElement(vr, {
    key: "mask",
    visible: r,
    motionName: o,
    leavedClassName: "".concat(t, "-mask-hidden")
  }, function(a) {
    var l = a.className, s = a.style;
    return /* @__PURE__ */ d.createElement("div", j({
      style: W(W({}, s), n),
      className: X("".concat(t, "-mask"), l)
    }, i));
  });
}
function Sm(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
var bm = -1;
function Q4() {
  return bm += 1, bm;
}
function xm(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var i = e.document;
    n = i.documentElement[r], typeof n != "number" && (n = i.body[r]);
  }
  return n;
}
function X4(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, i = r.defaultView || r.parentWindow;
  return n.left += xm(i), n.top += xm(i, !0), n;
}
const J4 = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var Em = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, AC = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.closable, r = e.prefixCls, i = e.width, o = e.height, a = e.footer, l = e.title, s = e.closeIcon, u = e.style, c = e.className, f = e.visible, p = e.forceRender, g = e.bodyStyle, h = e.bodyProps, y = e.children, w = e.destroyOnClose, m = e.modalRender, v = e.motionName, C = e.ariaId, S = e.onClose, b = e.onVisibleChanged, I = e.onMouseDown, T = e.onMouseUp, E = e.mousePosition, D = d.useRef(), F = d.useRef(), z = d.useRef();
  d.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var B;
        (B = D.current) === null || B === void 0 || B.focus();
      },
      changeActive: function(B) {
        var H = document, K = H.activeElement;
        B && K === F.current ? D.current.focus() : !B && K === D.current && F.current.focus();
      }
    };
  });
  var R = d.useState(), x = q(R, 2), _ = x[0], P = x[1], k = {};
  i !== void 0 && (k.width = i), o !== void 0 && (k.height = o), _ && (k.transformOrigin = _);
  function O() {
    var V = X4(z.current);
    P(E ? "".concat(E.x - V.left, "px ").concat(E.y - V.top, "px") : "");
  }
  var N;
  a && (N = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-footer")
  }, a));
  var M;
  l && (M = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-header")
  }, /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-title"),
    id: C
  }, l)));
  var A;
  n && (A = /* @__PURE__ */ d.createElement("button", {
    type: "button",
    onClick: S,
    "aria-label": "Close",
    className: "".concat(r, "-close")
  }, s || /* @__PURE__ */ d.createElement("span", {
    className: "".concat(r, "-close-x")
  })));
  var $ = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-content")
  }, A, M, /* @__PURE__ */ d.createElement("div", j({
    className: "".concat(r, "-body"),
    style: g
  }, h), y), N);
  return /* @__PURE__ */ d.createElement(vr, {
    visible: f,
    onVisibleChanged: b,
    onAppearPrepare: O,
    onEnterPrepare: O,
    forceRender: p,
    motionName: v,
    removeOnLeave: w,
    ref: z
  }, function(V, B) {
    var H = V.className, K = V.style;
    return /* @__PURE__ */ d.createElement("div", {
      key: "dialog-element",
      role: "document",
      ref: B,
      style: W(W(W({}, K), u), k),
      className: X(r, c, H),
      onMouseDown: I,
      onMouseUp: T
    }, /* @__PURE__ */ d.createElement("div", {
      tabIndex: 0,
      ref: D,
      style: Em,
      "aria-hidden": "true"
    }), /* @__PURE__ */ d.createElement(J4, {
      shouldUpdate: f || p
    }, m ? m($) : $), /* @__PURE__ */ d.createElement("div", {
      tabIndex: 0,
      ref: F,
      style: Em,
      "aria-hidden": "true"
    }));
  });
});
AC.displayName = "Content";
function km(e) {
  var t = e.prefixCls, n = t === void 0 ? "rc-dialog" : t, r = e.zIndex, i = e.visible, o = i === void 0 ? !1 : i, a = e.keyboard, l = a === void 0 ? !0 : a, s = e.focusTriggerAfterClose, u = s === void 0 ? !0 : s, c = e.scrollLocker, f = e.title, p = e.wrapStyle, g = e.wrapClassName, h = e.wrapProps, y = e.onClose, w = e.afterClose, m = e.transitionName, v = e.animation, C = e.closable, S = C === void 0 ? !0 : C, b = e.mask, I = b === void 0 ? !0 : b, T = e.maskTransitionName, E = e.maskAnimation, D = e.maskClosable, F = D === void 0 ? !0 : D, z = e.maskStyle, R = e.maskProps, x = d.useRef(), _ = d.useRef(), P = d.useRef(), k = d.useState(o), O = q(k, 2), N = O[0], M = O[1], A = d.useRef();
  A.current || (A.current = "rcDialogTitle".concat(Q4()));
  function $(J) {
    if (J) {
      if (!ki(_.current, document.activeElement)) {
        var pe;
        x.current = document.activeElement, (pe = P.current) === null || pe === void 0 || pe.focus();
      }
    } else {
      if (M(!1), I && x.current && u) {
        try {
          x.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        x.current = null;
      }
      N && (w == null || w());
    }
  }
  function V(J) {
    y == null || y(J);
  }
  var B = d.useRef(!1), H = d.useRef(), K = function() {
    clearTimeout(H.current), B.current = !0;
  }, G = function() {
    H.current = setTimeout(function() {
      B.current = !1;
    });
  }, le = null;
  F && (le = function(pe) {
    B.current ? B.current = !1 : _.current === pe.target && V(pe);
  });
  function oe(J) {
    if (l && J.keyCode === ie.ESC) {
      J.stopPropagation(), V(J);
      return;
    }
    o && J.keyCode === ie.TAB && P.current.changeActive(!J.shiftKey);
  }
  return d.useEffect(function() {
    return o && M(!0), function() {
    };
  }, [o]), d.useEffect(function() {
    return function() {
      clearTimeout(H.current);
    };
  }, []), d.useEffect(function() {
    return N ? (c == null || c.lock(), c == null ? void 0 : c.unLock) : function() {
    };
  }, [N, c]), /* @__PURE__ */ d.createElement("div", j({
    className: "".concat(n, "-root")
  }, Z4(e, {
    data: !0
  })), /* @__PURE__ */ d.createElement(q4, {
    prefixCls: n,
    visible: I && o,
    motionName: Sm(n, T, E),
    style: W({
      zIndex: r
    }, z),
    maskProps: R
  }), /* @__PURE__ */ d.createElement("div", j({
    tabIndex: -1,
    onKeyDown: oe,
    className: X("".concat(n, "-wrap"), g),
    ref: _,
    onClick: le,
    role: "dialog",
    "aria-labelledby": f ? A.current : null,
    style: W(W({
      zIndex: r
    }, p), {}, {
      display: N ? null : "none"
    })
  }, h), /* @__PURE__ */ d.createElement(AC, j({}, e, {
    onMouseDown: K,
    onMouseUp: G,
    ref: P,
    closable: S,
    ariaId: A.current,
    prefixCls: n,
    visible: o,
    onClose: V,
    onVisibleChanged: $,
    motionName: Sm(n, m, v)
  }))));
}
var MC = function(t) {
  var n = t.visible, r = t.getContainer, i = t.forceRender, o = t.destroyOnClose, a = o === void 0 ? !1 : o, l = t.afterClose, s = d.useState(n), u = q(s, 2), c = u[0], f = u[1];
  return d.useEffect(function() {
    n && f(!0);
  }, [n]), r === !1 ? /* @__PURE__ */ d.createElement(km, j({}, t, {
    getOpenCount: function() {
      return 2;
    }
    // 不对 body 做任何操作。。
  })) : !i && a && !c ? null : /* @__PURE__ */ d.createElement(B4, {
    visible: n,
    forceRender: i,
    getContainer: r
  }, function(p) {
    return /* @__PURE__ */ d.createElement(km, j({}, t, {
      destroyOnClose: a,
      afterClose: function() {
        l == null || l(), f(!1);
      }
    }, p));
  });
};
MC.displayName = "Dialog";
var eT = /* @__PURE__ */ Ye(function e(t) {
  Ke(this, e), this.error = new Error("unreachable case: ".concat(JSON.stringify(t)));
}), tT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, nT = function(t) {
  return /* @__PURE__ */ d.createElement(Vr, null, function(n) {
    var r, i = n.getPrefixCls, o = n.direction, a = t.prefixCls, l = t.size, s = t.className, u = tT(t, ["prefixCls", "size", "className"]), c = i("btn-group", a), f = "";
    switch (l) {
      case "large":
        f = "lg";
        break;
      case "small":
        f = "sm";
        break;
      case "middle":
      case void 0:
        break;
      default:
        console.warn(new eT(l).error);
    }
    var p = X(c, (r = {}, L(r, "".concat(c, "-").concat(f), f), L(r, "".concat(c, "-rtl"), o === "rtl"), r), s);
    return /* @__PURE__ */ d.createElement("div", j({}, u, {
      className: p
    }));
  });
};
const rT = nT;
var iT = 0, Ni = {};
function hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = iT++, r = t;
  function i() {
    r -= 1, r <= 0 ? (e(), delete Ni[n]) : Ni[n] = lt(i);
  }
  return Ni[n] = lt(i), n;
}
hs.cancel = function(t) {
  t !== void 0 && (lt.cancel(Ni[t]), delete Ni[t]);
};
hs.ids = Ni;
var tc;
function Im(e) {
  return !e || e.offsetParent === null || e.hidden;
}
function oT(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
var FC = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    var r;
    return Ke(this, n), r = t.apply(this, arguments), r.containerRef = /* @__PURE__ */ d.createRef(), r.animationStart = !1, r.destroyed = !1, r.onClick = function(i, o) {
      var a, l, s = r.props, u = s.insertExtraNode, c = s.disabled;
      if (!(c || !i || Im(i) || i.className.indexOf("-leave") >= 0)) {
        r.extraNode = document.createElement("div");
        var f = te(r), p = f.extraNode, g = r.context.getPrefixCls;
        p.className = "".concat(g(""), "-click-animating-node");
        var h = r.getAttributeName();
        if (i.setAttribute(h, "true"), o && o !== "#ffffff" && o !== "rgb(255, 255, 255)" && oT(o) && !/rgba\((?:\d*, ){3}0\)/.test(o) && // any transparent rgba color
        o !== "transparent") {
          p.style.borderColor = o;
          var y = ((a = i.getRootNode) === null || a === void 0 ? void 0 : a.call(i)) || i.ownerDocument, w = y instanceof Document ? y.body : (l = y.firstChild) !== null && l !== void 0 ? l : y;
          tc = np(`
      [`.concat(g(""), "-click-animating-without-extra-node='true']::after, .").concat(g(""), `-click-animating-node {
        --antd-wave-shadow-color: `).concat(o, `;
      }`), "antd-wave", {
            csp: r.csp,
            attachTo: w
          });
        }
        u && i.appendChild(p), ["transition", "animation"].forEach(function(m) {
          i.addEventListener("".concat(m, "start"), r.onTransitionStart), i.addEventListener("".concat(m, "end"), r.onTransitionEnd);
        });
      }
    }, r.onTransitionStart = function(i) {
      if (!r.destroyed) {
        var o = r.containerRef.current;
        !i || i.target !== o || r.animationStart || r.resetEffect(o);
      }
    }, r.onTransitionEnd = function(i) {
      !i || i.animationName !== "fadeEffect" || r.resetEffect(i.target);
    }, r.bindAnimationEvent = function(i) {
      if (!(!i || !i.getAttribute || i.getAttribute("disabled") || i.className.indexOf("disabled") >= 0)) {
        var o = function(l) {
          if (!(l.target.tagName === "INPUT" || Im(l.target))) {
            r.resetEffect(i);
            var s = getComputedStyle(i).getPropertyValue("border-top-color") || // Firefox Compatible
            getComputedStyle(i).getPropertyValue("border-color") || getComputedStyle(i).getPropertyValue("background-color");
            r.clickWaveTimeoutId = window.setTimeout(function() {
              return r.onClick(i, s);
            }, 0), hs.cancel(r.animationStartId), r.animationStart = !0, r.animationStartId = hs(function() {
              r.animationStart = !1;
            }, 10);
          }
        };
        return i.addEventListener("click", o, !0), {
          cancel: function() {
            i.removeEventListener("click", o, !0);
          }
        };
      }
    }, r.renderWave = function(i) {
      var o = i.csp, a = r.props.children;
      if (r.csp = o, !/* @__PURE__ */ d.isValidElement(a))
        return a;
      var l = r.containerRef;
      return ma(a) && (l = jr(a.ref, r.containerRef)), Fn(a, {
        ref: l
      });
    }, r;
  }
  return Ye(n, [{
    key: "componentDidMount",
    value: function() {
      var i = this.containerRef.current;
      !i || i.nodeType !== 1 || (this.instance = this.bindAnimationEvent(i));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId), this.destroyed = !0;
    }
  }, {
    key: "getAttributeName",
    value: function() {
      var i = this.context.getPrefixCls, o = this.props.insertExtraNode;
      return o ? "".concat(i(""), "-click-animating") : "".concat(i(""), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function(i) {
      var o = this;
      if (!(!i || i === this.extraNode || !(i instanceof Element))) {
        var a = this.props.insertExtraNode, l = this.getAttributeName();
        i.setAttribute(l, "false"), tc && (tc.innerHTML = ""), a && this.extraNode && i.contains(this.extraNode) && i.removeChild(this.extraNode), ["transition", "animation"].forEach(function(s) {
          i.removeEventListener("".concat(s, "start"), o.onTransitionStart), i.removeEventListener("".concat(s, "end"), o.onTransitionEnd);
        });
      }
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ d.createElement(Vr, null, this.renderWave);
    }
  }]), n;
}(d.Component);
FC.contextType = Fe;
var nc = function() {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  };
}, rc = function(t) {
  return {
    width: t.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  };
}, aT = function(t) {
  var n = t.prefixCls, r = t.loading, i = t.existIcon, o = !!r;
  return i ? /* @__PURE__ */ ee.createElement("span", {
    className: "".concat(n, "-loading-icon")
  }, /* @__PURE__ */ ee.createElement(as, null)) : /* @__PURE__ */ ee.createElement(vr, {
    visible: o,
    motionName: "".concat(n, "-loading-icon-motion"),
    removeOnLeave: !0,
    onAppearStart: nc,
    onAppearActive: rc,
    onEnterStart: nc,
    onEnterActive: rc,
    onLeaveStart: rc,
    onLeaveActive: nc
  }, function(a, l) {
    var s = a.className, u = a.style;
    return /* @__PURE__ */ ee.createElement("span", {
      className: "".concat(n, "-loading-icon"),
      style: u,
      ref: l
    }, /* @__PURE__ */ ee.createElement(as, {
      className: s
    }));
  });
};
const lT = aT;
var sT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, Nm = /^[\u4e00-\u9fa5]{2}$/, Bf = Nm.test.bind(Nm);
function uT(e) {
  return typeof e == "string";
}
function sl(e) {
  return e === "text" || e === "link";
}
function cT(e) {
  return /* @__PURE__ */ d.isValidElement(e) && e.type === d.Fragment;
}
function fT(e, t) {
  if (e != null) {
    var n = t ? " " : "";
    return typeof e != "string" && typeof e != "number" && uT(e.type) && Bf(e.props.children) ? Fn(e, {
      children: e.props.children.split("").join(n)
    }) : typeof e == "string" ? Bf(e) ? /* @__PURE__ */ d.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ d.createElement("span", null, e) : cT(e) ? /* @__PURE__ */ d.createElement("span", null, e) : e;
  }
}
function dT(e, t) {
  var n = !1, r = [];
  return d.Children.forEach(e, function(i) {
    var o = de(i), a = o === "string" || o === "number";
    if (n && a) {
      var l = r.length - 1, s = r[l];
      r[l] = "".concat(s).concat(i);
    } else
      r.push(i);
    n = a;
  }), d.Children.map(r, function(i) {
    return fT(i, t);
  });
}
cn("default", "primary", "ghost", "dashed", "link", "text");
cn("default", "circle", "round");
cn("submit", "button", "reset");
function LC(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
var pT = function(t, n) {
  var r, i = t.loading, o = i === void 0 ? !1 : i, a = t.prefixCls, l = t.type, s = l === void 0 ? "default" : l, u = t.danger, c = t.shape, f = c === void 0 ? "default" : c, p = t.size, g = t.className, h = t.children, y = t.icon, w = t.ghost, m = w === void 0 ? !1 : w, v = t.block, C = v === void 0 ? !1 : v, S = t.htmlType, b = S === void 0 ? "button" : S, I = sT(t, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]), T = d.useContext(Hi), E = d.useState(!!o), D = q(E, 2), F = D[0], z = D[1], R = d.useState(!1), x = q(R, 2), _ = x[0], P = x[1], k = d.useContext(Fe), O = k.getPrefixCls, N = k.autoInsertSpaceInButton, M = k.direction, A = n || /* @__PURE__ */ d.createRef(), $ = function() {
    return d.Children.count(h) === 1 && !y && !sl(s);
  }, V = function() {
    if (!(!A || !A.current || N === !1)) {
      var re = A.current.textContent;
      $() && Bf(re) ? _ || P(!0) : _ && P(!1);
    }
  }, B = de(o) === "object" && o.delay ? o.delay || !0 : !!o;
  d.useEffect(function() {
    var ne = null;
    return typeof B == "number" ? ne = window.setTimeout(function() {
      ne = null, z(B);
    }, B) : z(B), function() {
      ne && (window.clearTimeout(ne), ne = null);
    };
  }, [B]), d.useEffect(V, [A]);
  var H = function(re) {
    var ce = t.onClick, Ce = t.disabled;
    if (F || Ce) {
      re.preventDefault();
      return;
    }
    ce == null || ce(re);
  };
  qe(!(typeof y == "string" && y.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y, "` at https://ant.design/components/icon")), qe(!(m && sl(s)), "Button", "`link` or `text` button can't be a `ghost` button.");
  var K = O("btn", a), G = N !== !1, le = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, oe = p || T, J = oe && le[oe] || "", pe = F ? "loading" : y, ae = X(K, (r = {}, L(r, "".concat(K, "-").concat(f), f !== "default" && f), L(r, "".concat(K, "-").concat(s), s), L(r, "".concat(K, "-").concat(J), J), L(r, "".concat(K, "-icon-only"), !h && h !== 0 && !!pe), L(r, "".concat(K, "-background-ghost"), m && !sl(s)), L(r, "".concat(K, "-loading"), F), L(r, "".concat(K, "-two-chinese-chars"), _ && G), L(r, "".concat(K, "-block"), C), L(r, "".concat(K, "-dangerous"), !!u), L(r, "".concat(K, "-rtl"), M === "rtl"), r), g), ye = y && !F ? y : /* @__PURE__ */ d.createElement(lT, {
    existIcon: !!y,
    prefixCls: K,
    loading: !!F
  }), se = h || h === 0 ? dT(h, $() && G) : null, fe = hr(I, ["navigate"]);
  if (fe.href !== void 0)
    return /* @__PURE__ */ d.createElement("a", j({}, fe, {
      className: ae,
      onClick: H,
      ref: A
    }), ye, se);
  var xe = /* @__PURE__ */ d.createElement("button", j({}, I, {
    type: b,
    className: ae,
    onClick: H,
    ref: A
  }), ye, se);
  return sl(s) ? xe : /* @__PURE__ */ d.createElement(FC, {
    disabled: !!F
  }, xe);
}, Zs = /* @__PURE__ */ d.forwardRef(pT);
Zs.displayName = "Button";
Zs.Group = rT;
Zs.__ANT_BUTTON = !0;
const Lr = Zs;
var vT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, Uf, hT = function(t) {
  Uf = {
    x: t.pageX,
    y: t.pageY
  }, setTimeout(function() {
    Uf = null;
  }, 100);
};
E1() && document.documentElement.addEventListener("click", hT, !0);
var DC = function(t) {
  var n, r = d.useContext(Fe), i = r.getPopupContainer, o = r.getPrefixCls, a = r.direction, l = function(F) {
    var z = t.onCancel;
    z == null || z(F);
  }, s = function(F) {
    var z = t.onOk;
    z == null || z(F);
  }, u = function(F) {
    var z = t.okText, R = t.okType, x = t.cancelText, _ = t.confirmLoading;
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Lr, j({
      onClick: l
    }, t.cancelButtonProps), x || F.cancelText), /* @__PURE__ */ d.createElement(Lr, j({}, LC(R), {
      loading: _,
      onClick: s
    }, t.okButtonProps), z || F.okText));
  }, c = t.prefixCls, f = t.footer, p = t.visible, g = t.wrapClassName, h = t.centered, y = t.getContainer, w = t.closeIcon, m = t.focusTriggerAfterClose, v = m === void 0 ? !0 : m, C = vT(t, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), S = o("modal", c), b = o(), I = /* @__PURE__ */ d.createElement(Ui, {
    componentName: "Modal",
    defaultLocale: lg()
  }, u), T = /* @__PURE__ */ d.createElement("span", {
    className: "".concat(S, "-close-x")
  }, w || /* @__PURE__ */ d.createElement(t1, {
    className: "".concat(S, "-close-icon")
  })), E = X(g, (n = {}, L(n, "".concat(S, "-centered"), !!h), L(n, "".concat(S, "-wrap-rtl"), a === "rtl"), n));
  return /* @__PURE__ */ d.createElement(MC, j({}, C, {
    getContainer: y === void 0 ? i : y,
    prefixCls: S,
    wrapClassName: E,
    footer: f === void 0 ? I : f,
    visible: p,
    mousePosition: Uf,
    onClose: l,
    closeIcon: T,
    focusTriggerAfterClose: v,
    transitionName: oa(b, "zoom", t.transitionName),
    maskTransitionName: oa(b, "fade", t.maskTransitionName)
  }));
};
DC.defaultProps = {
  width: 520,
  confirmLoading: !1,
  visible: !1,
  okType: "primary"
};
const VC = DC;
function Tm(e) {
  return !!(e && e.then);
}
var mT = function(t) {
  var n = d.useRef(!1), r = d.useRef(), i = Pn(!1), o = q(i, 2), a = o[0], l = o[1];
  d.useEffect(function() {
    var h;
    if (t.autoFocus) {
      var y = r.current;
      h = setTimeout(function() {
        return y.focus();
      });
    }
    return function() {
      h && clearTimeout(h);
    };
  }, []);
  var s = function(y) {
    var w = t.close;
    Tm(y) && (l(!0), y.then(function() {
      l(!1, !0), w.apply(void 0, arguments), n.current = !1;
    }, function(m) {
      console.error(m), l(!1, !0), n.current = !1;
    }));
  }, u = function(y) {
    var w = t.actionFn, m = t.close;
    if (!n.current) {
      if (n.current = !0, !w) {
        m();
        return;
      }
      var v;
      if (t.emitEvent) {
        if (v = w(y), t.quitOnNullishReturnValue && !Tm(v)) {
          n.current = !1, m(y);
          return;
        }
      } else if (w.length)
        v = w(m), n.current = !1;
      else if (v = w(), !v) {
        m();
        return;
      }
      s(v);
    }
  }, c = t.type, f = t.children, p = t.prefixCls, g = t.buttonProps;
  return /* @__PURE__ */ d.createElement(Lr, j({}, LC(c), {
    onClick: u,
    loading: a,
    prefixCls: p
  }, g, {
    ref: r
  }), f);
};
const Pm = mT;
var gT = function(t) {
  var n = t.icon, r = t.onCancel, i = t.onOk, o = t.close, a = t.zIndex, l = t.afterClose, s = t.visible, u = t.keyboard, c = t.centered, f = t.getContainer, p = t.maskStyle, g = t.okText, h = t.okButtonProps, y = t.cancelText, w = t.cancelButtonProps, m = t.direction, v = t.prefixCls, C = t.wrapClassName, S = t.rootPrefixCls, b = t.iconPrefixCls, I = t.bodyStyle, T = t.closable, E = T === void 0 ? !1 : T, D = t.closeIcon, F = t.modalRender, z = t.focusTriggerAfterClose;
  qe(!(typeof n == "string" && n.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(n, "` at https://ant.design/components/icon"));
  var R = t.okType || "primary", x = "".concat(v, "-confirm"), _ = "okCancel" in t ? t.okCancel : !0, P = t.width || 416, k = t.style || {}, O = t.mask === void 0 ? !0 : t.mask, N = t.maskClosable === void 0 ? !1 : t.maskClosable, M = t.autoFocusButton === null ? !1 : t.autoFocusButton || "ok", A = X(x, "".concat(x, "-").concat(t.type), L({}, "".concat(x, "-rtl"), m === "rtl"), t.className), $ = _ && /* @__PURE__ */ d.createElement(Pm, {
    actionFn: r,
    close: o,
    autoFocus: M === "cancel",
    buttonProps: w,
    prefixCls: "".concat(S, "-btn")
  }, y);
  return /* @__PURE__ */ d.createElement(Yi, {
    prefixCls: S,
    iconPrefixCls: b,
    direction: m
  }, /* @__PURE__ */ d.createElement(VC, {
    prefixCls: v,
    className: A,
    wrapClassName: X(L({}, "".concat(x, "-centered"), !!t.centered), C),
    onCancel: function() {
      return o({
        triggerCancel: !0
      });
    },
    visible: s,
    title: "",
    footer: "",
    transitionName: oa(S, "zoom", t.transitionName),
    maskTransitionName: oa(S, "fade", t.maskTransitionName),
    mask: O,
    maskClosable: N,
    maskStyle: p,
    style: k,
    bodyStyle: I,
    width: P,
    zIndex: a,
    afterClose: l,
    keyboard: u,
    centered: c,
    getContainer: f,
    closable: E,
    closeIcon: D,
    modalRender: F,
    focusTriggerAfterClose: z
  }, /* @__PURE__ */ d.createElement("div", {
    className: "".concat(x, "-body-wrapper")
  }, /* @__PURE__ */ d.createElement("div", {
    className: "".concat(x, "-body")
  }, n, t.title === void 0 ? null : /* @__PURE__ */ d.createElement("span", {
    className: "".concat(x, "-title")
  }, t.title), /* @__PURE__ */ d.createElement("div", {
    className: "".concat(x, "-content")
  }, t.content)), /* @__PURE__ */ d.createElement("div", {
    className: "".concat(x, "-btns")
  }, $, /* @__PURE__ */ d.createElement(Pm, {
    type: R,
    actionFn: i,
    close: o,
    autoFocus: M === "ok",
    buttonProps: h,
    prefixCls: "".concat(S, "-btn")
  }, g)))));
};
const zC = gT;
var yT = [];
const yi = yT;
var CT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, $C = "";
function wT() {
  return $C;
}
function ba(e) {
  var t = document.createDocumentFragment(), n = j(j({}, e), {
    close: o,
    visible: !0
  });
  function r() {
    Do.unmountComponentAtNode(t);
    for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
      s[u] = arguments[u];
    var c = s.some(function(g) {
      return g && g.triggerCancel;
    });
    e.onCancel && c && e.onCancel.apply(e, s);
    for (var f = 0; f < yi.length; f++) {
      var p = yi[f];
      if (p === o) {
        yi.splice(f, 1);
        break;
      }
    }
  }
  function i(l) {
    var s = l.okText, u = l.cancelText, c = l.prefixCls, f = CT(l, ["okText", "cancelText", "prefixCls"]);
    setTimeout(function() {
      var p = lg(), g = op(), h = g.getPrefixCls, y = g.getIconPrefixCls, w = h(void 0, wT()), m = c || "".concat(w, "-modal"), v = y();
      Do.render(/* @__PURE__ */ d.createElement(zC, j({}, f, {
        prefixCls: m,
        rootPrefixCls: w,
        iconPrefixCls: v,
        okText: s || (f.okCancel ? p.okText : p.justOkText),
        cancelText: u || p.cancelText
      })), t);
    });
  }
  function o() {
    for (var l = this, s = arguments.length, u = new Array(s), c = 0; c < s; c++)
      u[c] = arguments[c];
    n = j(j({}, n), {
      visible: !1,
      afterClose: function() {
        typeof e.afterClose == "function" && e.afterClose(), r.apply(l, u);
      }
    }), i(n);
  }
  function a(l) {
    typeof l == "function" ? n = l(n) : n = j(j({}, n), l), i(n);
  }
  return i(n), yi.push(o), {
    destroy: o,
    update: a
  };
}
function jC(e) {
  return j(j({
    icon: /* @__PURE__ */ d.createElement(ip, null),
    okCancel: !1
  }, e), {
    type: "warning"
  });
}
function WC(e) {
  return j(j({
    icon: /* @__PURE__ */ d.createElement(s1, null),
    okCancel: !1
  }, e), {
    type: "info"
  });
}
function BC(e) {
  return j(j({
    icon: /* @__PURE__ */ d.createElement(r1, null),
    okCancel: !1
  }, e), {
    type: "success"
  });
}
function UC(e) {
  return j(j({
    icon: /* @__PURE__ */ d.createElement(o1, null),
    okCancel: !1
  }, e), {
    type: "error"
  });
}
function HC(e) {
  return j(j({
    icon: /* @__PURE__ */ d.createElement(ip, null),
    okCancel: !0
  }, e), {
    type: "confirm"
  });
}
function ST(e) {
  var t = e.rootPrefixCls;
  qe(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), $C = t;
}
function bT() {
  var e = d.useState([]), t = q(e, 2), n = t[0], r = t[1], i = d.useCallback(function(o) {
    return r(function(a) {
      return [].concat(Q(a), [o]);
    }), function() {
      r(function(a) {
        return a.filter(function(l) {
          return l !== o;
        });
      });
    };
  }, []);
  return [n, i];
}
var xT = function(t, n) {
  var r = t.afterClose, i = t.config, o = d.useState(!0), a = q(o, 2), l = a[0], s = a[1], u = d.useState(i), c = q(u, 2), f = c[0], p = c[1], g = d.useContext(Fe), h = g.direction, y = g.getPrefixCls, w = y("modal"), m = y(), v = function() {
    s(!1);
    for (var S = arguments.length, b = new Array(S), I = 0; I < S; I++)
      b[I] = arguments[I];
    var T = b.some(function(E) {
      return E && E.triggerCancel;
    });
    f.onCancel && T && f.onCancel();
  };
  return d.useImperativeHandle(n, function() {
    return {
      destroy: v,
      update: function(S) {
        p(function(b) {
          return j(j({}, b), S);
        });
      }
    };
  }), /* @__PURE__ */ d.createElement(Ui, {
    componentName: "Modal",
    defaultLocale: lr.Modal
  }, function(C) {
    return /* @__PURE__ */ d.createElement(zC, j({
      prefixCls: w,
      rootPrefixCls: m
    }, f, {
      close: v,
      visible: l,
      afterClose: r,
      okText: f.okText || (f.okCancel ? C.okText : C.justOkText),
      direction: h,
      cancelText: f.cancelText || C.cancelText
    }));
  });
};
const ET = /* @__PURE__ */ d.forwardRef(xT);
var Om = 0, kT = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = bT(), r = q(n, 2), i = r[0], o = r[1];
  return d.useImperativeHandle(t, function() {
    return {
      patchElement: o
    };
  }, []), /* @__PURE__ */ d.createElement(d.Fragment, null, i);
}));
function IT() {
  var e = d.useRef(null), t = d.useState([]), n = q(t, 2), r = n[0], i = n[1];
  d.useEffect(function() {
    if (r.length) {
      var l = Q(r);
      l.forEach(function(s) {
        s();
      }), i([]);
    }
  }, [r]);
  var o = d.useCallback(function(l) {
    return function(u) {
      var c;
      Om += 1;
      var f = /* @__PURE__ */ d.createRef(), p, g = /* @__PURE__ */ d.createElement(ET, {
        key: "modal-".concat(Om),
        config: l(u),
        ref: f,
        afterClose: function() {
          p();
        }
      });
      return p = (c = e.current) === null || c === void 0 ? void 0 : c.patchElement(g), {
        destroy: function() {
          function y() {
            var w;
            (w = f.current) === null || w === void 0 || w.destroy();
          }
          f.current ? y() : i(function(w) {
            return [].concat(Q(w), [y]);
          });
        },
        update: function(y) {
          function w() {
            var m;
            (m = f.current) === null || m === void 0 || m.update(y);
          }
          f.current ? w() : i(function(m) {
            return [].concat(Q(m), [w]);
          });
        }
      };
    };
  }, []), a = d.useMemo(function() {
    return {
      info: o(WC),
      success: o(BC),
      error: o(UC),
      warning: o(jC),
      confirm: o(HC)
    };
  }, []);
  return [a, /* @__PURE__ */ d.createElement(kT, {
    ref: e
  })];
}
function GC(e) {
  return ba(jC(e));
}
var Cn = VC;
Cn.useModal = IT;
Cn.info = function(t) {
  return ba(WC(t));
};
Cn.success = function(t) {
  return ba(BC(t));
};
Cn.error = function(t) {
  return ba(UC(t));
};
Cn.warning = GC;
Cn.warn = GC;
Cn.confirm = function(t) {
  return ba(HC(t));
};
Cn.destroyAll = function() {
  for (; yi.length; ) {
    var t = yi.pop();
    t && t();
  }
};
Cn.config = ST;
const NT = Cn;
function TT({
  name: e,
  url: t
}) {
  return new Promise((n, r) => {
    if (t || r(new Error("to load script, url cannot be null")), document.getElementById(e))
      n(!0);
    else {
      const i = document.getElementsByTagName("script")[0], o = document.createElement("script");
      o.setAttribute("id", e), o.setAttribute("src", t), o.onload = function() {
        n(!0);
      }, o.onerror = function(a) {
        o.remove(), r(a);
      }, i.parentNode.insertBefore(o, null);
    }
  });
}
function PT({
  name: e,
  url: t
}) {
  return new Promise((n, r) => {
    if (t || r(new Error("to load style, url cannot be null")), document.getElementById(e))
      n(!0);
    else {
      const i = document.getElementsByTagName("head")[0], o = document.createElement("link");
      o.id = e, o.rel = "stylesheet", o.type = "text/css", o.href = t, o.media = "all", o.onload = function() {
        n(!0);
      }, o.onerror = function(a) {
        o.remove(), r(a);
      }, i.appendChild(o);
    }
  });
}
function Rm(e) {
  const {
    type: t = "script",
    ...n
  } = e;
  return t === "link" ? PT(n) : TT(n);
}
function OT() {
  d.useEffect(() => {
    Rm({
      url: "https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js",
      name: "rrweb-player"
    }), Rm({
      url: "https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css",
      name: "rrweb-player-css",
      type: "link"
    });
  }, []);
}
class RT {
  constructor(t) {
    Ip(this, "uid");
    this.uid = t;
  }
  _getObject() {
    const t = localStorage.getItem(gm);
    try {
      return t ? JSON.parse(t) : {};
    } catch {
      return {};
    }
  }
  get() {
    const t = this._getObject();
    return this.uid ? t[this === null || this === void 0 ? void 0 : this.uid] || {} : t;
  }
  set(t) {
    const n = this._getObject(), r = {
      ...this.get(),
      ...t
    };
    return this.uid ? Object.assign(n, {
      [this.uid]: r
    }) : Object.assign(n, r), localStorage.setItem(gm, JSON.stringify(n)), !0;
  }
}
function gp() {
  const {
    props: e
  } = Lt.useContainer();
  return {
    store: d.useMemo(() => new RT(e == null ? void 0 : e.uid), [e == null ? void 0 : e.uid])
  };
}
const _T = "/ones/api/v1", AT = async (e) => fetch({
  url: `${_T}/create`,
  body: JSON.stringify(e)
}), MT = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
function FT() {
  const [e, t] = d.useState(!1), {
    form: n,
    events: r,
    props: i,
    reset: o,
    type: a
  } = Lt.useContainer(), {
    t: l
  } = fn(), s = d.useCallback(async () => {
    try {
      t(!0);
      const u = await n.validateFields(), c = () => Object.entries((i == null ? void 0 : i.extraParams) || {}).reduce((p, [g, h]) => {
        const y = MT(g);
        return p[y] = h, p;
      }, {});
      delete u.agree;
      const f = {
        ...u,
        uid: i == null ? void 0 : i.uid,
        app_id: i == null ? void 0 : i.appId,
        report_type: a,
        ...c()
      };
      await AT(f), Jy.success(l("feedback.success")), o();
    } catch {
    } finally {
      t(!1);
    }
  }, [r, n, i == null ? void 0 : i.appId, i == null ? void 0 : i.extraParams, i == null ? void 0 : i.uid, o, l, a]);
  return {
    loading: e,
    submit: s
  };
}
const LT = "_powerBy_1qdrn_1", DT = "_modal_1qdrn_14", ic = {
  powerBy: LT,
  modal: DT
};
function Ol(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function KC(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function _m(e, t, n, r) {
  if (n) {
    var i = t;
    if (t.type === "click") {
      var o = e.cloneNode(!0);
      i = Object.create(t, {
        target: {
          value: o
        },
        currentTarget: {
          value: o
        }
      }), o.value = "", n(i);
      return;
    }
    if (r !== void 0) {
      i = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(i);
      return;
    }
    n(i);
  }
}
function VT(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var i = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(i, i);
          break;
        default:
          e.setSelectionRange(0, i);
      }
    }
  }
}
function Am(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
var zT = function(t) {
  var n = t.inputElement, r = t.prefixCls, i = t.prefix, o = t.suffix, a = t.addonBefore, l = t.addonAfter, s = t.className, u = t.style, c = t.affixWrapperClassName, f = t.groupClassName, p = t.wrapperClassName, g = t.disabled, h = t.readOnly, y = t.focused, w = t.triggerFocus, m = t.allowClear, v = t.value, C = t.handleReset, S = t.hidden, b = d.useRef(null), I = function(N) {
    var M;
    !((M = b.current) === null || M === void 0) && M.contains(N.target) && (w == null || w());
  }, T = function() {
    var N;
    if (!m)
      return null;
    var M = !g && !h && v, A = "".concat(r, "-clear-icon"), $ = de(m) === "object" && (m != null && m.clearIcon) ? m.clearIcon : "✖";
    return /* @__PURE__ */ ee.createElement("span", {
      onClick: C,
      // Do not trigger onBlur when clear input
      // https://github.com/ant-design/ant-design/issues/31200
      onMouseDown: function(B) {
        return B.preventDefault();
      },
      className: X(A, (N = {}, L(N, "".concat(A, "-hidden"), !M), L(N, "".concat(A, "-has-suffix"), !!o), N)),
      role: "button",
      tabIndex: -1
    }, $);
  }, E = /* @__PURE__ */ d.cloneElement(n, {
    value: v,
    hidden: S
  });
  if (KC(t)) {
    var D, F = "".concat(r, "-affix-wrapper"), z = X(F, (D = {}, L(D, "".concat(F, "-disabled"), g), L(D, "".concat(F, "-focused"), y), L(D, "".concat(F, "-readonly"), h), L(D, "".concat(F, "-input-with-clear-btn"), o && m && v), D), !Ol(t) && s, c), R = (o || m) && /* @__PURE__ */ ee.createElement("span", {
      className: "".concat(r, "-suffix")
    }, T(), o);
    E = /* @__PURE__ */ ee.createElement("span", {
      className: z,
      style: u,
      hidden: !Ol(t) && S,
      onMouseDown: I,
      ref: b
    }, i && /* @__PURE__ */ ee.createElement("span", {
      className: "".concat(r, "-prefix")
    }, i), /* @__PURE__ */ d.cloneElement(n, {
      style: null,
      value: v,
      hidden: null
    }), R);
  }
  if (Ol(t)) {
    var x = "".concat(r, "-group"), _ = "".concat(x, "-addon"), P = X("".concat(r, "-wrapper"), x, p), k = X("".concat(r, "-group-wrapper"), s, f);
    return /* @__PURE__ */ ee.createElement("span", {
      className: k,
      style: u,
      hidden: S
    }, /* @__PURE__ */ ee.createElement("span", {
      className: P
    }, a && /* @__PURE__ */ ee.createElement("span", {
      className: _
    }, a), /* @__PURE__ */ d.cloneElement(E, {
      style: null,
      hidden: null
    }), l && /* @__PURE__ */ ee.createElement("span", {
      className: _
    }, l)));
  }
  return E;
}, $T = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"], jT = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.autoComplete, r = e.onChange, i = e.onFocus, o = e.onBlur, a = e.onPressEnter, l = e.onKeyDown, s = e.prefixCls, u = s === void 0 ? "rc-input" : s, c = e.disabled, f = e.htmlSize, p = e.className, g = e.maxLength, h = e.suffix, y = e.showCount, w = e.type, m = w === void 0 ? "text" : w, v = e.inputClassName, C = Yt(e, $T), S = dp(e.defaultValue, {
    value: e.value
  }), b = q(S, 2), I = b[0], T = b[1], E = d.useState(!1), D = q(E, 2), F = D[0], z = D[1], R = d.useRef(null), x = function(V) {
    R.current && VT(R.current, V);
  };
  d.useImperativeHandle(t, function() {
    return {
      focus: x,
      blur: function() {
        var V;
        (V = R.current) === null || V === void 0 || V.blur();
      },
      setSelectionRange: function(V, B, H) {
        var K;
        (K = R.current) === null || K === void 0 || K.setSelectionRange(V, B, H);
      },
      select: function() {
        var V;
        (V = R.current) === null || V === void 0 || V.select();
      },
      input: R.current
    };
  }), d.useEffect(function() {
    z(function($) {
      return $ && c ? !1 : $;
    });
  }, [c]);
  var _ = function(V) {
    e.value === void 0 && T(V.target.value), R.current && _m(R.current, V, r);
  }, P = function(V) {
    a && V.key === "Enter" && a(V), l == null || l(V);
  }, k = function(V) {
    z(!0), i == null || i(V);
  }, O = function(V) {
    z(!1), o == null || o(V);
  }, N = function(V) {
    T(""), x(), R.current && _m(R.current, V, r);
  }, M = function() {
    var V = hr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "affixWrapperClassName",
      "groupClassName",
      "inputClassName",
      "wrapperClassName",
      "htmlSize"
    ]);
    return /* @__PURE__ */ ee.createElement("input", W(W({
      autoComplete: n
    }, V), {}, {
      onChange: _,
      onFocus: k,
      onBlur: O,
      onKeyDown: P,
      className: X(u, L({}, "".concat(u, "-disabled"), c), v, !Ol(e) && !KC(e) && p),
      ref: R,
      size: f,
      type: m
    }));
  }, A = function() {
    var V = Number(g) > 0;
    if (h || y) {
      var B = Q(Am(I)).length, H = de(y) === "object" ? y.formatter({
        count: B,
        maxLength: g
      }) : "".concat(B).concat(V ? " / ".concat(g) : "");
      return /* @__PURE__ */ ee.createElement(ee.Fragment, null, !!y && /* @__PURE__ */ ee.createElement("span", {
        className: X("".concat(u, "-show-count-suffix"), L({}, "".concat(u, "-show-count-has-suffix"), !!h))
      }, H), h);
    }
    return null;
  };
  return /* @__PURE__ */ ee.createElement(zT, W(W({}, C), {}, {
    prefixCls: u,
    className: p,
    inputElement: M(),
    handleReset: N,
    value: Am(I),
    focused: F,
    triggerFocus: x,
    suffix: A(),
    disabled: c
  }));
});
cn("warning", "error", "");
var WT = {
  success: $y,
  warning: Dy,
  error: Hs,
  validating: as
}, YC = function(t, n) {
  var r = n && WT[n];
  return r ? /* @__PURE__ */ ee.createElement("span", {
    className: "".concat(t, "-feedback-icon")
  }, /* @__PURE__ */ ee.createElement(r, null)) : null;
};
function Ti(e, t, n) {
  var r;
  return X((r = {}, L(r, "".concat(e, "-status-success"), t === "success"), L(r, "".concat(e, "-status-warning"), t === "warning"), L(r, "".concat(e, "-status-error"), t === "error"), L(r, "".concat(e, "-status-validating"), t === "validating"), L(r, "".concat(e, "-has-feedback"), n), r));
}
var yp = function(t, n) {
  return n || t;
};
function BT(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
var UT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function HT(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function oc(e, t, n, r) {
  if (n) {
    var i = t;
    if (t.type === "click") {
      var o = e.cloneNode(!0);
      i = Object.create(t, {
        target: {
          value: o
        },
        currentTarget: {
          value: o
        }
      }), o.value = "", n(i);
      return;
    }
    if (r !== void 0) {
      i = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(i);
      return;
    }
    n(i);
  }
}
function GT(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var i = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(i, i);
          break;
        default:
          e.setSelectionRange(0, i);
      }
    }
  }
}
var KT = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r, i, o = e.prefixCls, a = e.bordered, l = a === void 0 ? !0 : a, s = e.status, u = e.size, c = e.onBlur, f = e.onFocus, p = e.suffix, g = e.allowClear, h = e.addonAfter, y = e.addonBefore, w = UT(e, ["prefixCls", "bordered", "status", "size", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore"]), m = ee.useContext(Fe), v = m.getPrefixCls, C = m.direction, S = m.input, b = v("input", o), I = d.useRef(null), T = ee.useContext(Hi), E = u || T, D = d.useContext(ga), F = D.status, z = D.hasFeedback, R = yp(F, s), x = BT(e) || !!z, _ = d.useRef(x);
  d.useEffect(function() {
    var $;
    x && !_.current && qe(document.activeElement === (($ = I.current) === null || $ === void 0 ? void 0 : $.input), "Input", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), _.current = x;
  }, [x]);
  var P = d.useRef([]), k = function() {
    P.current.push(window.setTimeout(function() {
      var V, B, H, K;
      !((V = I.current) === null || V === void 0) && V.input && ((B = I.current) === null || B === void 0 ? void 0 : B.input.getAttribute("type")) === "password" && (!((H = I.current) === null || H === void 0) && H.input.hasAttribute("value")) && ((K = I.current) === null || K === void 0 || K.input.removeAttribute("value"));
    }));
  };
  d.useEffect(function() {
    return k(), function() {
      return P.current.forEach(function($) {
        return window.clearTimeout($);
      });
    };
  }, []);
  var O = function(V) {
    k(), c == null || c(V);
  }, N = function(V) {
    k(), f == null || f(V);
  }, M = (z || p) && /* @__PURE__ */ ee.createElement(ee.Fragment, null, p, z && YC(b, R)), A;
  return de(g) === "object" && (g != null && g.clearIcon) ? A = g : g && (A = {
    clearIcon: /* @__PURE__ */ ee.createElement(Hs, null)
  }), /* @__PURE__ */ ee.createElement(jT, j({
    ref: jr(t, I),
    prefixCls: b,
    autoComplete: S == null ? void 0 : S.autoComplete
  }, w, {
    onBlur: O,
    onFocus: N,
    suffix: M,
    allowClear: A,
    addonAfter: h && /* @__PURE__ */ ee.createElement(mh, null, h),
    addonBefore: y && /* @__PURE__ */ ee.createElement(mh, null, y),
    inputClassName: X((n = {}, L(n, "".concat(b, "-sm"), E === "small"), L(n, "".concat(b, "-lg"), E === "large"), L(n, "".concat(b, "-rtl"), C === "rtl"), L(n, "".concat(b, "-borderless"), !l), n), !x && Ti(b, R)),
    affixWrapperClassName: X((r = {}, L(r, "".concat(b, "-affix-wrapper-sm"), E === "small"), L(r, "".concat(b, "-affix-wrapper-lg"), E === "large"), L(r, "".concat(b, "-affix-wrapper-rtl"), C === "rtl"), L(r, "".concat(b, "-affix-wrapper-borderless"), !l), r), Ti("".concat(b, "-affix-wrapper"), R, z)),
    wrapperClassName: X(L({}, "".concat(b, "-group-rtl"), C === "rtl")),
    groupClassName: X((i = {}, L(i, "".concat(b, "-group-wrapper-sm"), E === "small"), L(i, "".concat(b, "-group-wrapper-lg"), E === "large"), L(i, "".concat(b, "-group-wrapper-rtl"), C === "rtl"), i), Ti("".concat(b, "-group-wrapper"), R, z))
  }));
});
const Cp = KT;
var YT = function(t) {
  var n, r = d.useContext(Fe), i = r.getPrefixCls, o = r.direction, a = t.prefixCls, l = t.className, s = l === void 0 ? "" : l, u = i("input-group", a), c = X(u, (n = {}, L(n, "".concat(u, "-lg"), t.size === "large"), L(n, "".concat(u, "-sm"), t.size === "small"), L(n, "".concat(u, "-compact"), t.compact), L(n, "".concat(u, "-rtl"), o === "rtl"), n), s);
  return /* @__PURE__ */ d.createElement("span", {
    className: c,
    style: t.style,
    onMouseEnter: t.onMouseEnter,
    onMouseLeave: t.onMouseLeave,
    onFocus: t.onFocus,
    onBlur: t.onBlur
  }, t.children);
};
const ZT = YT;
var qT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const QT = qT;
var ZC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: QT
  }));
};
ZC.displayName = "SearchOutlined";
const XT = /* @__PURE__ */ d.forwardRef(ZC);
var JT = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, qC = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e.prefixCls, i = e.inputPrefixCls, o = e.className, a = e.size, l = e.suffix, s = e.enterButton, u = s === void 0 ? !1 : s, c = e.addonAfter, f = e.loading, p = e.disabled, g = e.onSearch, h = e.onChange, y = JT(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange"]), w = d.useContext(Fe), m = w.getPrefixCls, v = w.direction, C = d.useContext(Hi), S = a || C, b = d.useRef(null), I = function(N) {
    N && N.target && N.type === "click" && g && g(N.target.value, N), h && h(N);
  }, T = function(N) {
    var M;
    document.activeElement === ((M = b.current) === null || M === void 0 ? void 0 : M.input) && N.preventDefault();
  }, E = function(N) {
    var M, A;
    g && g((A = (M = b.current) === null || M === void 0 ? void 0 : M.input) === null || A === void 0 ? void 0 : A.value, N);
  }, D = m("input-search", r), F = m("input", i), z = typeof u == "boolean" ? /* @__PURE__ */ d.createElement(XT, null) : null, R = "".concat(D, "-button"), x, _ = u || {}, P = _.type && _.type.__ANT_BUTTON === !0;
  P || _.type === "button" ? x = Fn(_, j({
    onMouseDown: T,
    onClick: function(N) {
      var M, A;
      (A = (M = _ == null ? void 0 : _.props) === null || M === void 0 ? void 0 : M.onClick) === null || A === void 0 || A.call(M, N), E(N);
    },
    key: "enterButton"
  }, P ? {
    className: R,
    size: S
  } : {})) : x = /* @__PURE__ */ d.createElement(Lr, {
    className: R,
    type: u ? "primary" : void 0,
    size: S,
    disabled: p,
    key: "enterButton",
    onMouseDown: T,
    onClick: E,
    loading: f,
    icon: z
  }, u), c && (x = [x, Fn(c, {
    key: "addonAfter"
  })]);
  var k = X(D, (n = {}, L(n, "".concat(D, "-rtl"), v === "rtl"), L(n, "".concat(D, "-").concat(S), !!S), L(n, "".concat(D, "-with-button"), !!u), n), o);
  return /* @__PURE__ */ d.createElement(Cp, j({
    ref: jr(b, t),
    onPressEnter: E
  }, y, {
    size: S,
    prefixCls: F,
    addonAfter: x,
    suffix: l,
    onChange: I,
    className: k,
    disabled: p
  }));
});
qC.displayName = "Search";
const eP = qC;
var Qn = /* @__PURE__ */ new Map();
function tP(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Qn.get(r)) === null || n === void 0 || n.forEach(function(i) {
      return i(r);
    });
  });
}
var QC = new U1(tP);
function nP(e, t) {
  Qn.has(e) || (Qn.set(e, /* @__PURE__ */ new Set()), QC.observe(e)), Qn.get(e).add(t);
}
function rP(e, t) {
  Qn.has(e) && (Qn.get(e).delete(t), Qn.get(e).size || (QC.unobserve(e), Qn.delete(e)));
}
var iP = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    return Ke(this, n), t.apply(this, arguments);
  }
  return Ye(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(d.Component), Hf = /* @__PURE__ */ d.createContext(null);
function oP(e) {
  var t = e.children, n = e.onBatchResize, r = d.useRef(0), i = d.useRef([]), o = d.useContext(Hf), a = d.useCallback(function(l, s, u) {
    r.current += 1;
    var c = r.current;
    i.current.push({
      size: l,
      element: s,
      data: u
    }), Promise.resolve().then(function() {
      c === r.current && (n == null || n(i.current), i.current = []);
    }), o == null || o(l, s, u);
  }, [n, o]);
  return /* @__PURE__ */ d.createElement(Hf.Provider, {
    value: a
  }, t);
}
function aP(e, t) {
  var n = e.children, r = e.disabled, i = d.useRef(null), o = d.useRef(null), a = d.useContext(Hf), l = typeof n == "function", s = l ? n(i) : n, u = d.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !l && /* @__PURE__ */ d.isValidElement(s) && ma(s), f = c ? s.ref : null, p = d.useMemo(function() {
    return jr(f, i);
  }, [f, i]), g = function() {
    return os(i.current) || os(o.current);
  };
  d.useImperativeHandle(t, function() {
    return g();
  });
  var h = d.useRef(e);
  h.current = e;
  var y = d.useCallback(function(w) {
    var m = h.current, v = m.onResize, C = m.data, S = w.getBoundingClientRect(), b = S.width, I = S.height, T = w.offsetWidth, E = w.offsetHeight, D = Math.floor(b), F = Math.floor(I);
    if (u.current.width !== D || u.current.height !== F || u.current.offsetWidth !== T || u.current.offsetHeight !== E) {
      var z = {
        width: D,
        height: F,
        offsetWidth: T,
        offsetHeight: E
      };
      u.current = z;
      var R = T === Math.round(b) ? b : T, x = E === Math.round(I) ? I : E, _ = W(W({}, z), {}, {
        offsetWidth: R,
        offsetHeight: x
      });
      a == null || a(_, w, C), v && Promise.resolve().then(function() {
        v(_, w);
      });
    }
  }, []);
  return d.useEffect(function() {
    var w = g();
    return w && !r && nP(w, y), function() {
      return rP(w, y);
    };
  }, [i.current, r]), /* @__PURE__ */ d.createElement(iP, {
    ref: o
  }, c ? /* @__PURE__ */ d.cloneElement(s, {
    ref: p
  }) : s);
}
var lP = /* @__PURE__ */ d.forwardRef(aP), sP = "rc-observer-key";
function uP(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Ml(n);
  return r.map(function(i, o) {
    var a = (i == null ? void 0 : i.key) || "".concat(sP, "-").concat(o);
    return /* @__PURE__ */ d.createElement(lP, j({}, e, {
      key: a,
      ref: o === 0 ? t : void 0
    }), i);
  });
}
var XC = /* @__PURE__ */ d.forwardRef(uP);
XC.Collection = oP;
var cP = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`, fP = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"], ac = {}, Wt;
function dP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && ac[n])
    return ac[n];
  var r = window.getComputedStyle(e), i = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), a = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = fP.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), s = {
    sizingStyle: l,
    paddingSize: o,
    borderSize: a,
    boxSizing: i
  };
  return t && n && (ac[n] = s), s;
}
function pP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Wt || (Wt = document.createElement("textarea"), Wt.setAttribute("tab-index", "-1"), Wt.setAttribute("aria-hidden", "true"), document.body.appendChild(Wt)), e.getAttribute("wrap") ? Wt.setAttribute("wrap", e.getAttribute("wrap")) : Wt.removeAttribute("wrap");
  var i = dP(e, t), o = i.paddingSize, a = i.borderSize, l = i.boxSizing, s = i.sizingStyle;
  Wt.setAttribute("style", "".concat(s, ";").concat(cP)), Wt.value = e.value || e.placeholder || "";
  var u = Number.MIN_SAFE_INTEGER, c = Number.MAX_SAFE_INTEGER, f = Wt.scrollHeight, p;
  if (l === "border-box" ? f += a : l === "content-box" && (f -= o), n !== null || r !== null) {
    Wt.value = " ";
    var g = Wt.scrollHeight - o;
    n !== null && (u = g * n, l === "border-box" && (u = u + o + a), f = Math.max(u, f)), r !== null && (c = g * r, l === "border-box" && (c = c + o + a), p = f > c ? "" : "hidden", f = Math.min(c, f));
  }
  return {
    height: f,
    minHeight: u,
    maxHeight: c,
    overflowY: p,
    resize: "none"
  };
}
var vP = function(t, n, r, i) {
  var o = r ? r.call(i, t, n) : void 0;
  if (o !== void 0)
    return !!o;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var a = Object.keys(t), l = Object.keys(n);
  if (a.length !== l.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(n), u = 0; u < a.length; u++) {
    var c = a[u];
    if (!s(c))
      return !1;
    var f = t[c], p = n[c];
    if (o = r ? r.call(i, f, p, c) : void 0, o === !1 || o === void 0 && f !== p)
      return !1;
  }
  return !0;
}, Un;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.RESIZING = 1] = "RESIZING", e[e.RESIZED = 2] = "RESIZED";
})(Un || (Un = {}));
var hP = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    return Ke(this, n), i = t.call(this, r), i.nextFrameActionId = void 0, i.resizeFrameId = void 0, i.textArea = void 0, i.saveTextArea = function(o) {
      i.textArea = o;
    }, i.handleResize = function(o) {
      var a = i.state.resizeStatus, l = i.props, s = l.autoSize, u = l.onResize;
      a === Un.NONE && (typeof u == "function" && u(o), s && i.resizeOnNextFrame());
    }, i.resizeOnNextFrame = function() {
      cancelAnimationFrame(i.nextFrameActionId), i.nextFrameActionId = requestAnimationFrame(i.resizeTextarea);
    }, i.resizeTextarea = function() {
      var o = i.props.autoSize;
      if (!(!o || !i.textArea)) {
        var a = o.minRows, l = o.maxRows, s = pP(i.textArea, !1, a, l);
        i.setState({
          textareaStyles: s,
          resizeStatus: Un.RESIZING
        }, function() {
          cancelAnimationFrame(i.resizeFrameId), i.resizeFrameId = requestAnimationFrame(function() {
            i.setState({
              resizeStatus: Un.RESIZED
            }, function() {
              i.resizeFrameId = requestAnimationFrame(function() {
                i.setState({
                  resizeStatus: Un.NONE
                }), i.fixFirefoxAutoScroll();
              });
            });
          });
        });
      }
    }, i.renderTextArea = function() {
      var o = i.props, a = o.prefixCls, l = a === void 0 ? "rc-textarea" : a, s = o.autoSize, u = o.onResize, c = o.className, f = o.disabled, p = i.state, g = p.textareaStyles, h = p.resizeStatus, y = hr(i.props, ["prefixCls", "onPressEnter", "autoSize", "defaultValue", "onResize"]), w = X(l, c, L({}, "".concat(l, "-disabled"), f));
      "value" in y && (y.value = y.value || "");
      var m = W(W(W({}, i.props.style), g), h === Un.RESIZING ? (
        // React will warning when mix `overflow` & `overflowY`.
        // We need to define this separately.
        {
          overflowX: "hidden",
          overflowY: "hidden"
        }
      ) : null);
      return /* @__PURE__ */ d.createElement(XC, {
        onResize: i.handleResize,
        disabled: !(s || u)
      }, /* @__PURE__ */ d.createElement("textarea", j({}, y, {
        className: w,
        style: m,
        ref: i.saveTextArea
      })));
    }, i.state = {
      textareaStyles: {},
      resizeStatus: Un.NONE
    }, i;
  }
  return Ye(n, [{
    key: "componentDidUpdate",
    value: function(i) {
      (i.value !== this.props.value || !vP(i.autoSize, this.props.autoSize)) && this.resizeTextarea();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      cancelAnimationFrame(this.nextFrameActionId), cancelAnimationFrame(this.resizeFrameId);
    }
    // https://github.com/ant-design/ant-design/issues/21870
  }, {
    key: "fixFirefoxAutoScroll",
    value: function() {
      try {
        if (document.activeElement === this.textArea) {
          var i = this.textArea.selectionStart, o = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(i, o);
        }
      } catch {
      }
    }
  }, {
    key: "render",
    value: function() {
      return this.renderTextArea();
    }
  }]), n;
}(d.Component), mP = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    Ke(this, n), i = t.call(this, r), i.resizableTextArea = void 0, i.focus = function() {
      i.resizableTextArea.textArea.focus();
    }, i.saveTextArea = function(a) {
      i.resizableTextArea = a;
    }, i.handleChange = function(a) {
      var l = i.props.onChange;
      i.setValue(a.target.value, function() {
        i.resizableTextArea.resizeTextarea();
      }), l && l(a);
    }, i.handleKeyDown = function(a) {
      var l = i.props, s = l.onPressEnter, u = l.onKeyDown;
      a.keyCode === 13 && s && s(a), u && u(a);
    };
    var o = typeof r.value > "u" || r.value === null ? r.defaultValue : r.value;
    return i.state = {
      value: o
    }, i;
  }
  return Ye(n, [{
    key: "setValue",
    value: function(i, o) {
      "value" in this.props || this.setState({
        value: i
      }, o);
    }
  }, {
    key: "blur",
    value: function() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ d.createElement(hP, j({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i) {
      return "value" in i ? {
        value: i.value
      } : null;
    }
  }]), n;
}(d.Component), gP = cn("text", "input");
function yP(e) {
  return !!(e.addonBefore || e.addonAfter);
}
var CP = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n() {
    return Ke(this, n), t.apply(this, arguments);
  }
  return Ye(n, [{
    key: "renderClearIcon",
    value: function(i) {
      var o, a = this.props, l = a.value, s = a.disabled, u = a.readOnly, c = a.handleReset, f = a.suffix, p = !s && !u && l, g = "".concat(i, "-clear-icon");
      return /* @__PURE__ */ d.createElement(Hs, {
        onClick: c,
        onMouseDown: function(y) {
          return y.preventDefault();
        },
        className: X((o = {}, L(o, "".concat(g, "-hidden"), !p), L(o, "".concat(g, "-has-suffix"), !!f), o), g),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function(i, o, a) {
      var l, s = this.props, u = s.value, c = s.allowClear, f = s.className, p = s.style, g = s.direction, h = s.bordered, y = s.hidden, w = s.status, m = a.status, v = a.hasFeedback;
      if (!c)
        return Fn(o, {
          value: u
        });
      var C = X("".concat(i, "-affix-wrapper"), "".concat(i, "-affix-wrapper-textarea-with-clear-btn"), Ti("".concat(i, "-affix-wrapper"), yp(m, w), v), (l = {}, L(l, "".concat(i, "-affix-wrapper-rtl"), g === "rtl"), L(l, "".concat(i, "-affix-wrapper-borderless"), !h), L(l, "".concat(f), !yP(this.props) && f), l));
      return /* @__PURE__ */ d.createElement("span", {
        className: C,
        style: p,
        hidden: y
      }, Fn(o, {
        style: null,
        value: u
      }), this.renderClearIcon(i));
    }
  }, {
    key: "render",
    value: function() {
      var i = this;
      return /* @__PURE__ */ d.createElement(ga.Consumer, null, function(o) {
        var a = i.props, l = a.prefixCls, s = a.inputType, u = a.element;
        if (s === gP[0])
          return i.renderTextAreaWithClearIcon(l, u, o);
      });
    }
  }]), n;
}(d.Component);
const wP = CP;
var SP = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function JC(e, t) {
  return Q(e || "").slice(0, t).join("");
}
function Mm(e, t, n, r) {
  var i = n;
  return e ? i = JC(n, r) : Q(t || "").length < n.length && Q(n || "").length > r && (i = t), i;
}
var bP = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e.prefixCls, i = e.bordered, o = i === void 0 ? !0 : i, a = e.showCount, l = a === void 0 ? !1 : a, s = e.maxLength, u = e.className, c = e.style, f = e.size, p = e.onCompositionStart, g = e.onCompositionEnd, h = e.onChange, y = e.status, w = SP(e, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "onCompositionStart", "onCompositionEnd", "onChange", "status"]), m = d.useContext(Fe), v = m.getPrefixCls, C = m.direction, S = d.useContext(Hi), b = d.useContext(ga), I = b.status, T = b.hasFeedback, E = yp(I, y), D = d.useRef(null), F = d.useRef(null), z = d.useState(!1), R = q(z, 2), x = R[0], _ = R[1], P = d.useRef(), k = d.useRef(0), O = dp(w.defaultValue, {
    value: w.value
  }), N = q(O, 2), M = N[0], A = N[1], $ = w.hidden, V = function(ne, re) {
    w.value === void 0 && (A(ne), re == null || re());
  }, B = Number(s) > 0, H = function(ne) {
    _(!0), P.current = M, k.current = ne.currentTarget.selectionStart, p == null || p(ne);
  }, K = function(ne) {
    var re;
    _(!1);
    var ce = ne.currentTarget.value;
    if (B) {
      var Ce = k.current >= s + 1 || k.current === ((re = P.current) === null || re === void 0 ? void 0 : re.length);
      ce = Mm(Ce, P.current, ce, s);
    }
    ce !== M && (V(ce), oc(ne.currentTarget, ne, h, ce)), g == null || g(ne);
  }, G = function(ne) {
    var re = ne.target.value;
    if (!x && B) {
      var ce = ne.target.selectionStart >= s + 1 || ne.target.selectionStart === re.length || !ne.target.selectionStart;
      re = Mm(ce, M, re, s);
    }
    V(re), oc(ne.currentTarget, ne, h, re);
  }, le = function(ne) {
    var re, ce;
    V("", function() {
      var Ce;
      (Ce = D.current) === null || Ce === void 0 || Ce.focus();
    }), oc((ce = (re = D.current) === null || re === void 0 ? void 0 : re.resizableTextArea) === null || ce === void 0 ? void 0 : ce.textArea, ne, h);
  }, oe = v("input", r);
  d.useImperativeHandle(t, function() {
    var xe;
    return {
      resizableTextArea: (xe = D.current) === null || xe === void 0 ? void 0 : xe.resizableTextArea,
      focus: function(re) {
        var ce, Ce;
        GT((Ce = (ce = D.current) === null || ce === void 0 ? void 0 : ce.resizableTextArea) === null || Ce === void 0 ? void 0 : Ce.textArea, re);
      },
      blur: function() {
        var re;
        return (re = D.current) === null || re === void 0 ? void 0 : re.blur();
      }
    };
  });
  var J = /* @__PURE__ */ d.createElement(mP, j({}, hr(w, ["allowClear"]), {
    className: X((n = {}, L(n, "".concat(oe, "-borderless"), !o), L(n, u, u && !l), L(n, "".concat(oe, "-sm"), S === "small" || f === "small"), L(n, "".concat(oe, "-lg"), S === "large" || f === "large"), n), Ti(oe, E)),
    style: l ? void 0 : c,
    prefixCls: oe,
    onCompositionStart: H,
    onChange: G,
    onCompositionEnd: K,
    ref: D
  })), pe = HT(M);
  !x && B && (w.value === null || w.value === void 0) && (pe = JC(pe, s));
  var ae = /* @__PURE__ */ d.createElement(wP, j({}, w, {
    prefixCls: oe,
    direction: C,
    inputType: "text",
    value: pe,
    element: J,
    handleReset: le,
    ref: F,
    bordered: o,
    status: y,
    style: l ? void 0 : c
  }));
  if (l || T) {
    var ye, se = Q(pe).length, fe = "";
    return de(l) === "object" ? fe = l.formatter({
      count: se,
      maxLength: s
    }) : fe = "".concat(se).concat(B ? " / ".concat(s) : ""), /* @__PURE__ */ d.createElement("div", {
      hidden: $,
      className: X("".concat(oe, "-textarea"), (ye = {}, L(ye, "".concat(oe, "-textarea-rtl"), C === "rtl"), L(ye, "".concat(oe, "-textarea-show-count"), l), ye), Ti("".concat(oe, "-textarea"), E, T), u),
      style: c,
      "data-count": fe
    }, ae, T && YC(oe, E));
  }
  return ae;
});
const xP = bP;
var EP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const kP = EP;
var ew = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: kP
  }));
};
ew.displayName = "EyeOutlined";
const IP = /* @__PURE__ */ d.forwardRef(ew);
var NP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const TP = NP;
var tw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Et, W(W({}, t), {}, {
    ref: n,
    icon: TP
  }));
};
tw.displayName = "EyeInvisibleOutlined";
const PP = /* @__PURE__ */ d.forwardRef(tw);
var OP = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, RP = {
  click: "onClick",
  hover: "onMouseOver"
}, wp = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = d.useState(!1), r = q(n, 2), i = r[0], o = r[1], a = function() {
    var c = e.disabled;
    c || o(!i);
  }, l = function(c) {
    var f, p = e.action, g = e.iconRender, h = g === void 0 ? function() {
      return null;
    } : g, y = RP[p] || "", w = h(i), m = (f = {}, L(f, y, a), L(f, "className", "".concat(c, "-icon")), L(f, "key", "passwordIcon"), L(f, "onMouseDown", function(C) {
      C.preventDefault();
    }), L(f, "onMouseUp", function(C) {
      C.preventDefault();
    }), f);
    return /* @__PURE__ */ d.cloneElement(/* @__PURE__ */ d.isValidElement(w) ? w : /* @__PURE__ */ d.createElement("span", null, w), m);
  }, s = function(c) {
    var f = c.getPrefixCls, p = e.className, g = e.prefixCls, h = e.inputPrefixCls, y = e.size, w = e.visibilityToggle, m = OP(e, ["className", "prefixCls", "inputPrefixCls", "size", "visibilityToggle"]), v = f("input", h), C = f("input-password", g), S = w && l(C), b = X(C, p, L({}, "".concat(C, "-").concat(y), !!y)), I = j(j({}, hr(m, ["suffix", "iconRender"])), {
      type: i ? "text" : "password",
      className: b,
      prefixCls: v,
      suffix: S
    });
    return y && (I.size = y), /* @__PURE__ */ d.createElement(Cp, j({
      ref: t
    }, I));
  };
  return /* @__PURE__ */ d.createElement(Vr, null, s);
});
wp.defaultProps = {
  action: "click",
  visibilityToggle: !0,
  iconRender: function(t) {
    return t ? /* @__PURE__ */ d.createElement(IP, null) : /* @__PURE__ */ d.createElement(PP, null);
  }
};
wp.displayName = "Password";
const _P = wp;
var xa = Cp;
xa.Group = ZT;
xa.Search = eP;
xa.TextArea = xP;
xa.Password = _P;
const Fm = xa, lc = {
  email: [{
    validator: async (e, t) => {
      const n = t == null ? void 0 : t.length;
      if (!n)
        throw Error(Jr.t("common.formValidRequired"));
      if (t && !/^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(t))
        throw Error(Jr.t("common.formValidEmail"));
      if (n > 64)
        throw Error(Jr.t("common.formValidLengthLessThan", {
          length: 64
        }));
      return !0;
    }
  }],
  description: [{
    validator: async (e, t) => {
      if (!t)
        return Promise.reject(Jr.t("common.input.placeholder"));
    }
  }],
  policyRule: [{
    validator: async (e, t) => {
      if (!t)
        return Promise.reject(Jr.t("feedback.agree.tips"));
    }
  }]
}, AP = "_mask_oxoea_1", MP = "_content_oxoea_10", FP = "_closeIcon_oxoea_16", sc = {
  mask: AP,
  content: MP,
  closeIcon: FP
}, LP = ({
  onCancel: e
}) => {
  const {
    events: t
  } = Lt.useContainer();
  return d.useEffect(() => {
    (async () => {
      setTimeout(() => {
        new window.rrwebPlayer({
          target: document.querySelector("#rrplayer"),
          props: {
            events: t,
            unpackFn: k4,
            showController: !0
          }
        });
      });
    })();
  }, []), /* @__PURE__ */ Y(On, { children: /* @__PURE__ */ Ve("div", { className: sc.mask, children: [
    /* @__PURE__ */ Y("span", { className: sc.closeIcon, onClick: e, children: /* @__PURE__ */ Ve("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "rgba(255, 255, 255, 0.7)", viewBox: "0 0 512 512", children: [
      /* @__PURE__ */ Y("g", { children: /* @__PURE__ */ Y("path", { d: "M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249 C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306 C514.019,27.23,514.019,14.135,505.943,6.058z" }) }),
      /* @__PURE__ */ Y("g", { children: /* @__PURE__ */ Y("path", { d: "M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636 c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" }) })
    ] }) }),
    /* @__PURE__ */ Y("div", { className: sc.content, children: /* @__PURE__ */ Y("div", { id: "rrplayer" }) })
  ] }) });
}, DP = "_button_16vfo_1", VP = {
  button: DP
}, zP = (e) => {
  const {
    t
  } = fn();
  return /* @__PURE__ */ Ve(Lr, {
    ...e,
    type: "dashed",
    className: VP.button,
    children: [/* @__PURE__ */ Ve("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      "data-icon": "Video",
      children: [/* @__PURE__ */ Y("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 7.81a4.19 4.19 0 1 0 0 8.38 4.19 4.19 0 0 0 0-8.38ZM9.524 12a2.476 2.476 0 1 1 4.952 0 2.476 2.476 0 0 1-4.952 0Z"
      }), /* @__PURE__ */ Y("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.667 4A4.667 4.667 0 0 0 4 8.667v6.666A4.667 4.667 0 0 0 8.667 20h6.666A4.667 4.667 0 0 0 20 15.333V8.667A4.667 4.667 0 0 0 15.333 4H8.667ZM5.714 8.667a2.952 2.952 0 0 1 2.953-2.953h6.666a2.952 2.952 0 0 1 2.953 2.953v6.666a2.952 2.952 0 0 1-2.953 2.953H8.667a2.952 2.952 0 0 1-2.953-2.953V8.667Z"
      })]
    }), t("feedback.start")]
  });
}, $P = "_recordItem_v1vf4_1", jP = "_replayItem_v1vf4_4", WP = "_replayItemLeft_v1vf4_15", BP = "_replayItemLRight_v1vf4_16", UP = "_fileIcon_v1vf4_20", HP = "_playIcon_v1vf4_24", GP = "_deleteIcon_v1vf4_29", KP = "_recordTips_v1vf4_33", $n = {
  recordItem: $P,
  replayItem: jP,
  replayItemLeft: WP,
  replayItemLRight: BP,
  fileIcon: UP,
  playIcon: HP,
  deleteIcon: GP,
  recordTips: KP
}, YP = (e) => {
  if (!e)
    return "";
  const t = new Date(e), n = t.getFullYear(), r = t.getMonth(), i = t.getDate(), o = t.getHours(), a = t.getMinutes(), l = t.getSeconds(), s = (c) => c.toString().length >= 2 ? c : `0${c}`;
  return `${n}/${s(r)}/${s(i)} ${s(o)}:${s(a)}:${s(l)}`;
}, ZP = () => {
  const {
    setVisible: e,
    events: t,
    setRecordToolVisible: n,
    setEvents: r,
    startRecord: i,
    startTime: o,
    visible: a
  } = Lt.useContainer(), {
    t: l
  } = fn(), [s, u] = d.useState(!1), c = () => {
    e(!1), n(!0), i();
  }, f = () => {
    u(!0);
  };
  return d.useEffect(() => {
    a || u(!1);
  }, [a]), /* @__PURE__ */ Ve(On, { children: [
    /* @__PURE__ */ Ve("div", { className: $n.recordItem, children: [
      t.length === 0 && /* @__PURE__ */ Ve(On, { children: [
        /* @__PURE__ */ Y("div", { className: $n.recordTips, children: l("feedback.record.tips") }),
        /* @__PURE__ */ Y(zP, { onClick: c })
      ] }),
      t.length > 0 && /* @__PURE__ */ Ve("div", { className: $n.replayItem, children: [
        /* @__PURE__ */ Ve("span", { className: $n.replayItemLeft, children: [
          /* @__PURE__ */ Y("svg", { className: $n.fileIcon, width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", "data-icon": "FileText", children: /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.008 3.294a2.614 2.614 0 0 1 1.849-.765h6.857a.9.9 0 0 1 .636.263l5.143 5.143a.9.9 0 0 1 .264.637v10.285a2.614 2.614 0 0 1-2.614 2.614H6.857a2.614 2.614 0 0 1-2.614-2.614V5.143c0-.693.275-1.358.765-1.849ZM6.857 4.33a.814.814 0 0 0-.814.814v13.714a.814.814 0 0 0 .814.815h10.286a.814.814 0 0 0 .814-.815V9.472h-4.243a.9.9 0 0 1-.9-.9V4.329H6.857ZM14.614 5.6l2.07 2.07h-2.07v-2.07ZM7.671 9.43a.9.9 0 0 1 .9-.9h1.715a.9.9 0 1 1 0 1.8H8.57a.9.9 0 0 1-.9-.9Zm0 3.428a.9.9 0 0 1 .9-.9h6.857a.9.9 0 0 1 0 1.8H8.571a.9.9 0 0 1-.9-.9Zm0 3.429a.9.9 0 0 1 .9-.9h6.857a.9.9 0 0 1 0 1.8H8.571a.9.9 0 0 1-.9-.9Z" }) }),
          o ? /* @__PURE__ */ Y("span", { children: YP(o) }) : null
        ] }),
        /* @__PURE__ */ Ve("span", { className: $n.replayItemLRight, children: [
          /* @__PURE__ */ Y("svg", { className: $n.playIcon, onClick: f, width: "1em", height: "1em", viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", "data-icon": "Play", children: /* @__PURE__ */ Y("path", { d: "M13.661 8.155a1 1 0 0 1 0 1.69l-6.627 4.186a1 1 0 0 1-1.534-.845V4.814a1 1 0 0 1 1.534-.845l6.627 4.186Z", "stroke-width": "1.8" }) }),
          /* @__PURE__ */ Y("svg", { className: $n.deleteIcon, onClick: () => r([]), width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", "data-icon": "Trash", children: /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.283 4.4a.826.826 0 0 0-.581.238.791.791 0 0 0-.237.562V6h5.07v-.8a.791.791 0 0 0-.237-.562.826.826 0 0 0-.581-.238h-3.434ZM16.334 6v-.8c0-.692-.278-1.355-.77-1.842a2.626 2.626 0 0 0-1.847-.758h-3.434c-.692 0-1.356.272-1.848.758a2.591 2.591 0 0 0-.77 1.842V6H4.273a.9.9 0 1 0 0 1.8h.817v11c0 .693.278 1.355.77 1.842a2.626 2.626 0 0 0 1.847.758h8.586c.691 0 1.356-.272 1.847-.758.492-.487.77-1.15.77-1.842v-11h.817a.9.9 0 1 0 0-1.8h-3.393ZM6.89 7.8v11c0 .21.084.412.236.563a.826.826 0 0 0 .58.237h8.587c.22 0 .428-.086.58-.237a.791.791 0 0 0 .237-.563v-11H6.89Zm3.393 2.45a.9.9 0 0 1 .9.9v5.1a.9.9 0 0 1-1.8 0v-5.1a.9.9 0 0 1 .9-.9Zm3.434 0a.9.9 0 0 1 .9.9v5.1a.9.9 0 1 1-1.8 0v-5.1a.9.9 0 0 1 .9-.9Z" }) })
        ] })
      ] })
    ] }),
    a && s && /* @__PURE__ */ Y(LP, { onCancel: () => u(!1) })
  ] });
}, qP = "_addButton_4yecc_1", QP = "_formWrap_4yecc_4", XP = "_buttonWrap_4yecc_12", JP = "_recordItem_4yecc_22", eO = "_policyWrap_4yecc_25", Rl = {
  addButton: qP,
  formWrap: QP,
  buttonWrap: XP,
  recordItem: JP,
  policyWrap: eO
};
var nw = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = gt(n);
  function n(r) {
    var i;
    Ke(this, n), i = t.call(this, r), i.handleChange = function(a) {
      var l = i.props, s = l.disabled, u = l.onChange;
      s || ("checked" in i.props || i.setState({
        checked: a.target.checked
      }), u && u({
        target: W(W({}, i.props), {}, {
          checked: a.target.checked
        }),
        stopPropagation: function() {
          a.stopPropagation();
        },
        preventDefault: function() {
          a.preventDefault();
        },
        nativeEvent: a.nativeEvent
      }));
    }, i.saveInput = function(a) {
      i.input = a;
    };
    var o = "checked" in r ? r.checked : r.defaultChecked;
    return i.state = {
      checked: o
    }, i;
  }
  return Ye(n, [{
    key: "focus",
    value: function() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function() {
      var i, o = this.props, a = o.prefixCls, l = o.className, s = o.style, u = o.name, c = o.id, f = o.type, p = o.disabled, g = o.readOnly, h = o.tabIndex, y = o.onClick, w = o.onFocus, m = o.onBlur, v = o.onKeyDown, C = o.onKeyPress, S = o.onKeyUp, b = o.autoFocus, I = o.value, T = o.required, E = Yt(o, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]), D = Object.keys(E).reduce(function(R, x) {
        return (x.substr(0, 5) === "aria-" || x.substr(0, 5) === "data-" || x === "role") && (R[x] = E[x]), R;
      }, {}), F = this.state.checked, z = X(a, l, (i = {}, L(i, "".concat(a, "-checked"), F), L(i, "".concat(a, "-disabled"), p), i));
      return /* @__PURE__ */ ee.createElement("span", {
        className: z,
        style: s
      }, /* @__PURE__ */ ee.createElement("input", j({
        name: u,
        id: c,
        type: f,
        required: T,
        readOnly: g,
        disabled: p,
        tabIndex: h,
        className: "".concat(a, "-input"),
        checked: !!F,
        onClick: y,
        onFocus: w,
        onBlur: m,
        onKeyUp: S,
        onKeyDown: v,
        onKeyPress: C,
        onChange: this.handleChange,
        autoFocus: b,
        ref: this.saveInput,
        value: I
      }, D)), /* @__PURE__ */ ee.createElement("span", {
        className: "".concat(a, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, o) {
      return "checked" in i ? W(W({}, o), {}, {
        checked: i.checked
      }) : null;
    }
  }]), n;
}(d.Component);
nw.defaultProps = {
  prefixCls: "rc-checkbox",
  className: "",
  style: {},
  type: "checkbox",
  defaultChecked: !1,
  onFocus: function() {
  },
  onBlur: function() {
  },
  onChange: function() {
  },
  onKeyDown: function() {
  },
  onKeyPress: function() {
  },
  onKeyUp: function() {
  }
};
var tO = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, rw = /* @__PURE__ */ d.createContext(null), nO = function(t, n) {
  var r = t.defaultValue, i = t.children, o = t.options, a = o === void 0 ? [] : o, l = t.prefixCls, s = t.className, u = t.style, c = t.onChange, f = tO(t, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]), p = d.useContext(Fe), g = p.getPrefixCls, h = p.direction, y = d.useState(f.value || r || []), w = q(y, 2), m = w[0], v = w[1], C = d.useState([]), S = q(C, 2), b = S[0], I = S[1];
  d.useEffect(function() {
    "value" in f && v(f.value || []);
  }, [f.value]);
  var T = function() {
    return a.map(function(O) {
      return typeof O == "string" || typeof O == "number" ? {
        label: O,
        value: O
      } : O;
    });
  }, E = function(O) {
    I(function(N) {
      return N.filter(function(M) {
        return M !== O;
      });
    });
  }, D = function(O) {
    I(function(N) {
      return [].concat(Q(N), [O]);
    });
  }, F = function(O) {
    var N = m.indexOf(O.value), M = Q(m);
    N === -1 ? M.push(O.value) : M.splice(N, 1), "value" in f || v(M);
    var A = T();
    c == null || c(M.filter(function($) {
      return b.indexOf($) !== -1;
    }).sort(function($, V) {
      var B = A.findIndex(function(K) {
        return K.value === $;
      }), H = A.findIndex(function(K) {
        return K.value === V;
      });
      return B - H;
    }));
  }, z = g("checkbox", l), R = "".concat(z, "-group"), x = hr(f, ["value", "disabled"]);
  a && a.length > 0 && (i = T().map(function(k) {
    return /* @__PURE__ */ d.createElement(ow, {
      prefixCls: z,
      key: k.value.toString(),
      disabled: "disabled" in k ? k.disabled : f.disabled,
      value: k.value,
      checked: m.indexOf(k.value) !== -1,
      onChange: k.onChange,
      className: "".concat(R, "-item"),
      style: k.style
    }, k.label);
  }));
  var _ = {
    toggleOption: F,
    value: m,
    disabled: f.disabled,
    name: f.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: D,
    cancelValue: E
  }, P = X(R, L({}, "".concat(R, "-rtl"), h === "rtl"), s);
  return /* @__PURE__ */ d.createElement("div", j({
    className: P,
    style: u
  }, x, {
    ref: n
  }), /* @__PURE__ */ d.createElement(rw.Provider, {
    value: _
  }, i));
}, rO = /* @__PURE__ */ d.forwardRef(nO);
const iO = /* @__PURE__ */ d.memo(rO);
var oO = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, aO = function(t, n) {
  var r, i = t.prefixCls, o = t.className, a = t.children, l = t.indeterminate, s = l === void 0 ? !1 : l, u = t.style, c = t.onMouseEnter, f = t.onMouseLeave, p = t.skipGroup, g = p === void 0 ? !1 : p, h = oO(t, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup"]), y = d.useContext(Fe), w = y.getPrefixCls, m = y.direction, v = d.useContext(rw), C = d.useRef(h.value);
  d.useEffect(function() {
    v == null || v.registerValue(h.value), qe("checked" in h || !!v || !("value" in h), "Checkbox", "`value` is not a valid prop, do you mean `checked`?");
  }, []), d.useEffect(function() {
    if (!g)
      return h.value !== C.current && (v == null || v.cancelValue(C.current), v == null || v.registerValue(h.value), C.current = h.value), function() {
        return v == null ? void 0 : v.cancelValue(h.value);
      };
  }, [h.value]);
  var S = w("checkbox", i), b = j({}, h);
  v && !g && (b.onChange = function() {
    h.onChange && h.onChange.apply(h, arguments), v.toggleOption && v.toggleOption({
      label: a,
      value: h.value
    });
  }, b.name = v.name, b.checked = v.value.indexOf(h.value) !== -1, b.disabled = h.disabled || v.disabled);
  var I = X((r = {}, L(r, "".concat(S, "-wrapper"), !0), L(r, "".concat(S, "-rtl"), m === "rtl"), L(r, "".concat(S, "-wrapper-checked"), b.checked), L(r, "".concat(S, "-wrapper-disabled"), b.disabled), r), o), T = X(L({}, "".concat(S, "-indeterminate"), s));
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    /* @__PURE__ */ d.createElement("label", {
      className: I,
      style: u,
      onMouseEnter: c,
      onMouseLeave: f
    }, /* @__PURE__ */ d.createElement(nw, j({}, b, {
      prefixCls: S,
      className: T,
      ref: n
    })), a !== void 0 && /* @__PURE__ */ d.createElement("span", null, a))
  );
}, iw = /* @__PURE__ */ d.forwardRef(aO);
iw.displayName = "Checkbox";
const ow = iw;
var Sp = ow;
Sp.Group = iO;
Sp.__ANT_CHECKBOX = !0;
const lO = Sp, sO = () => {
  const {
    props: e
  } = Lt.useContainer(), {
    t
  } = fn(), n = d.useMemo(() => e != null && e.checkboxComponentFunction ? e == null ? void 0 : e.checkboxComponentFunction(t("feedback.checkbox")) : t("feedback.checkbox"), [e, t]);
  return /* @__PURE__ */ Y(On, {
    children: /* @__PURE__ */ Y("span", {
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation();
      },
      children: n
    })
  });
}, uO = (e) => {
  const {
    store: t
  } = gp(), n = (r) => {
    const i = r.target.checked;
    e == null || e.onChange(i), t.set({
      checkbox: Number(i)
    });
  };
  return /* @__PURE__ */ Y("div", {
    className: Rl.policyWrap,
    children: /* @__PURE__ */ Y(lO, {
      ...e,
      onChange: n,
      children: /* @__PURE__ */ Y(sO, {})
    })
  });
}, cO = ({
  form: e
}) => {
  var t;
  const {
    reset: n,
    type: r,
    props: i
  } = Lt.useContainer(), {
    t: o
  } = fn(), {
    submit: a,
    loading: l
  } = FT(), {
    store: s
  } = gp(), u = d.useMemo(() => o(r === "bug" ? "feedback.desc.error.tips" : "feedback.desc.advise.tips"), [o, r]);
  return /* @__PURE__ */ Y(On, {
    children: /* @__PURE__ */ Y("div", {
      className: Rl.formWrap,
      children: /* @__PURE__ */ Ve(Qr, {
        form: e,
        initialValues: {
          agree: s == null || (t = s.get()) === null || t === void 0 ? void 0 : t.checkbox
        },
        children: [/* @__PURE__ */ Y(Qr.Item, {
          name: "email",
          rules: lc.email,
          initialValue: i == null ? void 0 : i.email,
          children: /* @__PURE__ */ Y(Fm, {
            size: "large",
            placeholder: o("feedback.form.email"),
            type: "email"
          })
        }), /* @__PURE__ */ Y(Qr.Item, {
          name: "description",
          rules: lc.description,
          children: /* @__PURE__ */ Y(Fm.TextArea, {
            placeholder: u
          })
        }), /* @__PURE__ */ Y(ZP, {}), i != null && i.checkbox ? /* @__PURE__ */ Y(Qr.Item, {
          name: "agree",
          valuePropName: "checked",
          rules: lc.policyRule,
          children: /* @__PURE__ */ Y(uO, {})
        }) : null, /* @__PURE__ */ Y(Qr.Item, {
          className: Rl.submitItem,
          children: /* @__PURE__ */ Ve("div", {
            className: Rl.buttonWrap,
            children: [/* @__PURE__ */ Y(Lr, {
              onClick: n,
              disabled: l,
              children: o("feedback.cancel")
            }), /* @__PURE__ */ Y(Lr, {
              type: "primary",
              onClick: a,
              loading: l,
              children: o("feedback.submit")
            })]
          })
        })]
      })
    })
  });
}, fO = ({
  visible: e,
  onCancel: t
}) => {
  const {
    form: n,
    props: r
  } = Lt.useContainer(), {
    t: i
  } = fn();
  return /* @__PURE__ */ Ve(NT, {
    centered: !0,
    wrapClassName: ic.modal,
    maskClosable: !1,
    title: i("feedback.title"),
    visible: e,
    footer: !1,
    onCancel: t,
    width: "400",
    children: [/* @__PURE__ */ Y("div", {
      className: ic.content,
      children: /* @__PURE__ */ Y(cO, {
        form: n
      })
    }), (r == null ? void 0 : r.brand) && /* @__PURE__ */ Ve("div", {
      className: ic.powerBy,
      children: [/* @__PURE__ */ Y("span", {
        children: "Powered by"
      }), /* @__PURE__ */ Y("span", {
        children: r == null ? void 0 : r.brand
      })]
    })]
  });
}, dO = "_tooltip_1na3s_1", pO = "_title_1na3s_6", Lm = {
  tooltip: dO,
  title: pO
}, bp = ({
  children: e,
  title: t
}) => /* @__PURE__ */ Ve("div", { className: Lm.tooltip, children: [
  /* @__PURE__ */ Y("span", { className: Lm.title, children: t }),
  e
] }), vO = "_recordBtn_15m5z_1", hO = "_stopBtn_15m5z_2", mO = "_closeBtn_15m5z_3", gO = "_mask_15m5z_20", yO = "_closeIcon_15m5z_32", CO = "_btn_15m5z_36", Dr = {
  recordBtn: vO,
  stopBtn: hO,
  closeBtn: mO,
  mask: gO,
  closeIcon: yO,
  btn: CO
}, wO = (e) => {
  const {
    t
  } = fn();
  return /* @__PURE__ */ Y(bp, { title: `${t("feedback.close")} ESC`, children: /* @__PURE__ */ Y("div", { className: X(Dr.closeBtn, Dr.btn), ...e, children: /* @__PURE__ */ Y("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.364 5.364a.9.9 0 0 1 1.272 0L12 10.727l5.364-5.363a.9.9 0 0 1 1.273 1.272L13.273 12l5.364 5.364a.9.9 0 1 1-1.273 1.272L12 13.273l-5.364 5.363a.9.9 0 0 1-1.272-1.272L10.727 12 5.364 6.636a.9.9 0 0 1 0-1.272Z", fill: "#00112F" }) }) }) });
}, SO = (e) => {
  const {
    t
  } = fn();
  return /* @__PURE__ */ Y("div", { children: /* @__PURE__ */ Y(bp, { title: t("feedback.start"), children: /* @__PURE__ */ Y("div", { className: X(Dr.btn, Dr.recordBtn), ...e, children: /* @__PURE__ */ Ve("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: "color: rgb(53, 192, 142); font-size: 24px;", children: [
    /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.6 8.5a4.9 4.9 0 0 1 4.9-4.9h7a4.9 4.9 0 0 1 4.9 4.9v7a4.9 4.9 0 0 1-4.9 4.9h-7a4.9 4.9 0 0 1-4.9-4.9v-7Zm4.9-3.1a3.1 3.1 0 0 0-3.1 3.1v7a3.1 3.1 0 0 0 3.1 3.1h7a3.1 3.1 0 0 0 3.1-3.1v-7a3.1 3.1 0 0 0-3.1-3.1h-7Z", fill: "#415066" }),
    /* @__PURE__ */ Y("path", { d: "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z", fill: "#F86140" })
  ] }) }) }) });
}, bO = (e) => {
  const {
    t
  } = fn();
  return /* @__PURE__ */ Y(bp, { title: t("feedback.stop"), children: /* @__PURE__ */ Y("div", { className: X(Dr.btn, Dr.closeBtn), ...e, children: /* @__PURE__ */ Y("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Y("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM10 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4Z", fill: "#F86140" }) }) }) });
}, xO = "_guideAnimation_179xb_17", EO = "_moveUp_179xb_1", kO = "_button_179xb_54", IO = "_opacity_179xb_1", ul = {
  guideAnimation: xO,
  moveUp: EO,
  "guide-wrap": "_guide-wrap_179xb_20",
  button: kO,
  opacity: IO
}, NO = ({
  onClose: e
}) => {
  const [t, n] = d.useState(ul.guideAnimation), r = () => {
    n(""), setTimeout(() => {
      n(ul.guideAnimation);
    }, 3e3);
  }, {
    t: i
  } = fn();
  return /* @__PURE__ */ Ve("div", { className: X(ul["guide-wrap"], t), onAnimationEnd: r, children: [
    i("feedback.tips"),
    /* @__PURE__ */ Y("div", { children: /* @__PURE__ */ Y("button", { className: ul.button, onClick: e, children: i("feedback.iknow") }) })
  ] });
};
function TO() {
  const {
    recordToolVisible: e
  } = Lt.useContainer(), [t, n] = d.useState(!1), {
    store: r
  } = gp(), i = d.useCallback(() => {
    n(!1), r.set({
      showGuide: 1
    });
  }, [r]);
  return d.useEffect(() => {
    var o;
    e && ((o = r.get()) !== null && o !== void 0 && o.showGuide || n(!0));
  }, [e, r]), {
    shutdownGuidTips: i,
    showGuide: t
  };
}
const PO = () => /* @__PURE__ */ Y("div", { className: Dr.mask }), OO = {
  "tool-wrap": "_tool-wrap_1qb3x_1"
}, RO = 27, _O = () => {
  const {
    stopFnRef: e,
    cancelFnRef: t,
    startFlag: n,
    startRecord: r,
    setVisible: i,
    setRecordToolVisible: o
  } = Lt.useContainer(), {
    showGuide: a,
    shutdownGuidTips: l
  } = TO(), s = d.useCallback(() => {
    var c;
    (c = t.current) === null || c === void 0 || c.call(t);
  }, [t]);
  d.useEffect(() => {
    const c = (f) => {
      f.keyCode === RO && (s(), l());
    };
    return window.addEventListener("keydown", c), () => {
      window.removeEventListener("keydown", c);
    };
  }, [i, o, s, l]);
  const u = d.useCallback((c) => {
    var f;
    c.persist(), (c == null || (f = c.target) === null || f === void 0 ? void 0 : f.nodeName) === "IMG" && l();
  }, [l]);
  return /* @__PURE__ */ Ve(On, { children: [
    !n && /* @__PURE__ */ Y(PO, {}),
    /* @__PURE__ */ Ve("div", { className: `${OO["tool-wrap"]}`, onClick: u, children: [
      a ? /* @__PURE__ */ Y(NO, { onClose: l }) : null,
      n ? /* @__PURE__ */ Y(bO, { onClick: e.current }) : /* @__PURE__ */ Y(SO, { onClick: r }),
      /* @__PURE__ */ Y(wO, { onClick: s })
    ] })
  ] });
}, AO = (e) => {
  const {
    setProps: t,
    visible: n,
    recordToolVisible: r,
    reset: i
  } = Lt.useContainer();
  return OT(), d.useEffect(() => {
    t({
      lang: "en",
      ...e
    }), window.updateConfig = (o) => {
      t((a) => ({
        ...a,
        ...o
      }));
    };
  }, [e, t]), d.useEffect(() => {
    localStorage.setItem(OC, (e == null ? void 0 : e.lang) || "en");
  }, [e == null ? void 0 : e.lang]), /* @__PURE__ */ Ve(On, { children: [
    /* @__PURE__ */ Y(fO, { visible: n, onCancel: i }),
    r && /* @__PURE__ */ Y(_O, {}),
    /* @__PURE__ */ Y(z4, {})
  ] });
}, MO = (e) => /* @__PURE__ */ Y(Lt.Provider, { children: /* @__PURE__ */ Y(AO, { ...e }) });
MO.displayName = "Feedback";
export {
  MO as default
};
