import React, { useContext, useMemo, useRef, useEffect, createElement, useDebugValue, useState } from 'react';

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !reactIs.typeOf(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return (process.env.NODE_ENV !== 'production' ? typeof target === 'string' && target : false) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || process.env.NODE_ENV !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS = process.env.NODE_ENV !== 'production' ? errorMap : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(', ') : ''));
  } else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if (process.env.NODE_ENV !== 'production' && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new stylis_min(options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = React.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = React.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return useContext(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return useContext(StylisContext) || masterStylis;
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (process.env.NODE_ENV !== 'production' && reactIs.isElement(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!reactIs.isValidElementType(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic = process.env.NODE_ENV === 'production' && isStaticRules(rules);
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (process.env.NODE_ENV !== 'production') dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (process.env.NODE_ENV !== 'production') {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useRef();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && (process.env.NODE_ENV !== 'production' ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = React.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = useContext(ThemeContext);
  var themeContext = useMemo(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  useDebugValue(className);

  if (process.env.NODE_ENV !== 'production' && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  useDebugValue(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, useContext(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context, process.env.NODE_ENV !== 'production' ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && index;
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, index)) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return createElement(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = React.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoistNonReactStatics_cjs(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (process.env.NODE_ENV !== 'production') {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = useContext(ThemeContext);
    var instanceRef = useRef(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if (process.env.NODE_ENV !== 'production' && React.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if (process.env.NODE_ENV !== 'production' && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    useEffect(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return React.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}
/* Warning if you've imported this file on React Native */

if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

function getThemeValue(name, props, values) {
  var value = (
    props.theme &&
    props.theme[name]
  );

  var themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

function theme(name, values) {
  return function(props) {
    return getThemeValue(name, props, values);
  };
}

theme.variants = function(name, prop, values) {
  return function(props) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};

var styledTheming = theme;

// COLORS
// ---------------------------------------------------------------------------------------------------------------------

const WHITE = '#fff';
const GALLERY = '#f0f0f0';
const MERCURY = '#E5E5E5';
const EMPEROR = '#535353';
const DUNE = '#252321';
const COD_GRAY = '#1C1917';
const BLACK = '#000';
const BLACK_3 = 'rgba(0, 0, 0, 0.03)';
const BLACK_10 = 'rgba(0, 0, 0, 0.1)';
const BLACK_30 = 'rgba(0, 0, 0, 0.3)';
const YELLOW = '#ff0';
const BLUE = '#00f';
const LIMA = '#75d41d';
const RED = '#f22';
const BLUEVIOLET = 'blueviolet'; // #8A2BE2
// ---------------------------------------------------------------------------------------------------------------------
// FONTS
// ---------------------------------------------------------------------------------------------------------------------

const FONT_INTER = '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif';
const FONT_MONO = '\'Inconsolata\', monospace'; // ---------------------------------------------------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------------------------------------------------

const themes = {
  smooth: 'smooth',
  hiContrast: 'hiContrast'
};
const modes = {
  light: 'light',
  dark: 'dark'
};

const tryToGetArr = (obj, path, def) => {
  if (!path.length) {
    return obj;
  }

  const newObj = obj[path[0]];
  if (newObj === undefined) return def;
  return tryToGetArr(newObj, path.slice(1), def);
};

const buildCustomProp = (group, prop, lightDefault, darkDefault) => darkDefault !== undefined ? styledTheming('mode', {
  [modes.light]: ({
    theme
  }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'light'], lightDefault),
  [modes.dark]: ({
    theme
  }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'dark'], darkDefault)
}) : ({
  theme
}) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop], lightDefault);

var ds = {
  colors: {
    // -----------------------------------------------------------------------------------------------------------------
    // FG & BG
    // -----------------------------------------------------------------------------------------------------------------
    fg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'fg', EMPEROR, GALLERY)
    }),
    fgMuted: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_30,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      custom: buildCustomProp('colors', 'fgMuted', BLACK_30, EMPEROR)
    }),
    bg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'bg', GALLERY, COD_GRAY)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Border
    // -----------------------------------------------------------------------------------------------------------------
    border: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'border', MERCURY, EMPEROR)
    }),
    borderLight: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'borderLight', BLACK_3, DUNE)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Button
    // -----------------------------------------------------------------------------------------------------------------
    buttonFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFg', EMPEROR, GALLERY)
    }),
    buttonFgPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgPlain', EMPEROR, GALLERY)
    }),
    buttonFgHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgHover', EMPEROR, GALLERY)
    }),
    buttonFgHoverPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgHoverPlain', EMPEROR, GALLERY)
    }),
    buttonFgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_30,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      custom: buildCustomProp('colors', 'buttonFgDisabled', BLACK_30, EMPEROR)
    }),
    buttonFgSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgSelected', EMPEROR, GALLERY)
    }),
    buttonBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBg', 'transparent', 'transparent')
    }),
    buttonBgPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgPlain', 'transparent', 'transparent')
    }),
    buttonBgSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: BLACK_30
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      custom: buildCustomProp('colors', 'buttonBgSelected', BLACK_3, BLACK_30)
    }),
    buttonBgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgDisabled', 'transparent', 'transparent')
    }),
    buttonBgHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgHover', 'transparent', 'transparent')
    }),
    buttonBgHoverPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgHoverPlain', 'transparent', 'transparent')
    }),
    buttonBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorder', MERCURY, EMPEROR)
    }),
    buttonBorderPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBorderPlain', 'transparent', 'transparent')
    }),
    buttonBorderDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'buttonBorderDisabled', BLACK_3, DUNE)
    }),
    buttonBorderHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorderHover', EMPEROR, GALLERY)
    }),
    buttonBorderHoverPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorderHoverPlain', EMPEROR, GALLERY)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Controls
    // -----------------------------------------------------------------------------------------------------------------
    controlBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: BLACK_30
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      custom: buildCustomProp('colors', 'controlBg', BLACK_3, BLACK_30)
    }),
    inputBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputBorder', MERCURY, EMPEROR)
    }),
    inputBorderActive: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputBorderActive', EMPEROR, GALLERY)
    }),
    inputBorderDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'inputBorderDisabled', BLACK_3, DUNE)
    }),
    inputBorderInvalid: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: RED,
        [modes.dark]: RED
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: RED,
        [modes.dark]: RED
      }),
      custom: buildCustomProp('colors', 'inputBorderInvalid', RED, RED)
    }),
    inputBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBg', 'transparent', 'transparent')
    }),
    inputBgFocus: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgFocus', 'transparent', 'transparent')
    }),
    inputBgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgDisabled', 'transparent', 'transparent')
    }),
    inputBgHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgHover', 'transparent', 'transparent')
    }),
    inputFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputFg', EMPEROR, GALLERY)
    }),
    inputFgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_30,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      custom: buildCustomProp('colors', 'inputFgDisabled', BLACK_30, EMPEROR)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Card
    // -----------------------------------------------------------------------------------------------------------------
    card: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'card', WHITE, DUNE)
    }),
    cardSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'cardSelected', WHITE, DUNE)
    }),
    cardBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: COD_GRAY,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorder', GALLERY, EMPEROR)
    }),
    cardBorderHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorderHover', EMPEROR, GALLERY)
    }),
    cardBorderSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorderSelected', EMPEROR, GALLERY)
    }),
    cardHeaderBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: COD_GRAY,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardHeaderBorder', GALLERY, EMPEROR)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Shadow
    // -----------------------------------------------------------------------------------------------------------------
    shadow: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_10,
        [modes.dark]: BLACK_10
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'none',
        [modes.dark]: 'none'
      }),
      custom: buildCustomProp('colors', 'shadow', BLACK_10, BLACK_10)
    }),
    buttonShadow: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_10,
        [modes.dark]: BLACK_10
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'none',
        [modes.dark]: 'none'
      }),
      custom: buildCustomProp('colors', 'buttonShadow', BLACK_10, BLACK_10)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Link
    // -----------------------------------------------------------------------------------------------------------------
    link: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLUE,
        [modes.dark]: YELLOW
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLUE,
        [modes.dark]: YELLOW
      }),
      custom: buildCustomProp('colors', 'link', BLUE, YELLOW)
    }),
    linkVisited: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLUEVIOLET,
        [modes.dark]: LIMA
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLUEVIOLET,
        [modes.dark]: LIMA
      }),
      custom: buildCustomProp('colors', 'linkVisited', BLUEVIOLET, LIMA)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Table
    // -----------------------------------------------------------------------------------------------------------------
    tableStripe: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: BLACK_30
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      custom: buildCustomProp('colors', 'tableStripe', BLACK_3, BLACK_30)
    }),
    tableHoverBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'tableHoverBg', MERCURY, EMPEROR)
    }),
    tableHoverFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'tableHoverFg', EMPEROR, GALLERY)
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Fonts
  // -------------------------------------------------------------------------------------------------------------------
  fonts: {
    body: styledTheming('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'body', FONT_INTER)
    }),
    heading: styledTheming('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'heading', FONT_INTER)
    }),
    controls: styledTheming('theme', {
      [themes.smooth]: FONT_MONO,
      [themes.hiContrast]: FONT_MONO,
      custom: buildCustomProp('fonts', 'controls', FONT_MONO)
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Weights
  // -------------------------------------------------------------------------------------------------------------------
  weights: {
    normal: styledTheming('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'normal', '400')
    }),
    strong: styledTheming('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'strong', '600')
    }),
    heading: styledTheming('theme', {
      [themes.smooth]: '200',
      [themes.hiContrast]: '200',
      custom: buildCustomProp('weights', 'heading', '200')
    }),
    preheading: styledTheming('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'preheading', '600')
    }),
    controlLabel: styledTheming('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'controlLabel', '400')
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Measures
  // -------------------------------------------------------------------------------------------------------------------
  measures: {
    radius: styledTheming('theme', {
      [themes.smooth]: '0.5rem',
      [themes.hiContrast]: '0.5rem',
      custom: buildCustomProp('measures', 'radius', '0.5rem')
    }),
    inputRadius: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'inputRadius', '0.25rem')
    }),
    buttonRadius: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadius', '0.25rem')
    }),
    buttonRadiusSmall: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadiusSmall', '0.25rem')
    }),
    font: styledTheming('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'font', '0.875rem')
    }),
    fontSmall: styledTheming('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'fontSmall', '0.66rem')
    }),
    inputFont: styledTheming('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'inputFont', '0.875rem')
    }),
    inputFontSmall: styledTheming('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'inputFontSmall', '0.66rem')
    }),
    unit: styledTheming('theme', {
      [themes.smooth]: '16px',
      [themes.hiContrast]: '16px',
      custom: buildCustomProp('measures', 'unit', '16px')
    }),
    spacer: styledTheming('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'spacer', 1)
    }),
    buttonSpacerH: styledTheming('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'buttonSpacerH', 1)
    }),
    buttonSpacerHSmall: styledTheming('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'buttonSpacerHSmall', 0.5)
    }),
    inputSpacerH: styledTheming('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'inputSpacerH', 0.5)
    })
  }
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

const POSITIONS = ['top', 'right', 'bottom', 'left', 'top left', 'top right', 'bottom right', 'bottom left', 'with text'];
const Dot = styled.div`
  position: absolute;
  background-color: ${props => props.color || ds.colors.link};
  border-radius: ${ds.measures.radius};
  width: ${ds.measures.radius};
  height: ${ds.measures.radius};
  ${props => props.position === 'top' && css(["top:", ";left:50%;margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'right' && css(["top:50%;right:", ";margin-top:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom' && css(["bottom:", ";left:50%;margin-bottom:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'left' && css(["top:50%;left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'top right' && css(["top:", ";right:", ";margin-top:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'top left' && css(["top:", ";left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom right' && css(["bottom:", ";right:", ";margin-bottom:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom left' && css(["bottom:", ";left:", ";margin-bottom:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'with text' && css(["top:calc((", " * 2) + 0.66rem);left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
`; // ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.

const StyledCard = styled.div`
  background-color: ${props => props.selected ? ds.colors.cardSelected : props.hollow ? ds.colors.bg : ds.colors.card};
  box-sizing: border-box;
  border: 1px solid ${props => props.selected ? ds.colors.cardBorderSelected : ds.colors.cardBorder};
  border-radius: ${ds.measures.radius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition-property: 'border-color';
  transition-duration: .1s;
  position: relative;

  ${props => props.color && `border-${props.colorBorderPosition}: ${ds.measures.radius(props)} solid ${props.color} !important;`}

  height: ${props => props.h === 'full' ? '100%' : typeof props.h === 'number' ? `${props.h}rem` : 'auto'};
  min-width: ${props => props.size === 'small' ? '32rem' : 'auto'};
  width: ${props => props.size === 'small' ? '33%' : 'auto'};

  ${props => props.marginBottom && (props.marginBottom === true ? 'margin-bottom: 1rem;' : `margin-bottom: ${props.marginBottom}rem;`)}

  ${props => props.marginTop && (props.marginTop === true ? 'margin-top: 1rem;' : `margin-top: ${props.marginTop}rem;`)}

  ${props => props.margin && (props.margin === true ? 'margin: 1rem;' : `margin: ${props.margin}rem;`)}

  box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow}${p => p.forceShadow ? ' !important' : ''};
  & & {
    box-shadow: none;
  }
  .hollow & {
    box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow};
  }

  .pre-heading {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }

  ${props => props.hoverable === true ? css(["&:hover{border-color:", ";", "}"], ds.colors.cardBorderHover, ({
  extraStyles = {}
}) => extraStyles.hover) : ''}

  ${({
  selected,
  extraStyles = {}
}) => selected && extraStyles.selected}

  ${({
  extraStyles = {}
}) => extraStyles.base}
`;
const StyledCardHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.compactHeader ? '0' : '0.25rem'};
`;
const StyledCardBody = styled.main`
  padding: ${props => props.noPadding ? '0' : props.mini ? '0.5rem' : props.compact ? '1rem' : '2rem'};
  overflow-y: auto;
  height: 100%;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: ${props => props.noPadding ? '0' : '1rem'};
  }
`;
const StyledCardFooter = styled.footer`
  align-items: center;
  border-top: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: auto;
  padding: ${props => props.compactFooter ? '0' : '0.25rem'};
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Card = ({
  size,
  color,
  colorBorderPosition,
  header,
  footer,
  height,
  children,
  noPadding,
  mini,
  compact,
  compactHeader,
  compactFooter,
  hollow,
  low,
  forceShadow,
  hoverable,
  selected,
  margin,
  marginTop,
  marginBottom,
  extraStyles,
  stickers,
  onClick
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React.createElement(StyledCard, {
    size: size,
    color: color,
    colorBorderPosition: colorBorderPosition,
    h: height,
    hoverable: hoverable,
    low: low ? 1 : 0,
    hollow: hollow,
    forceShadow: forceShadow,
    selected: selected,
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
    extraStyles: extraStyles,
    onClick: onClick && (() => onClick()),
    className: hollow ? 'hollow' : null
  }, header && /*#__PURE__*/React.createElement(StyledCardHeader, {
    compactHeader: compactHeader
  }, header), children && /*#__PURE__*/React.createElement(StyledCardBody, {
    noPadding: noPadding,
    compact: compact,
    mini: mini
  }, children), footer && /*#__PURE__*/React.createElement(StyledCardFooter, {
    compactFooter: compactFooter
  }, footer), stickers && stickers.dot && /*#__PURE__*/React.createElement(Dot, {
    position: typeof stickers.dot === 'string' ? stickers.dot : stickers.dot.p,
    color: color,
    separation: noPadding ? '0' : compact ? '0.5rem' : '1rem'
  }));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Card.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  footer: propTypes.node,
  size: propTypes.oneOf(['auto', 'small']),
  color: propTypes.string,
  colorBorderPosition: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
  height: propTypes.oneOfType([propTypes.oneOf(['default', 'full']), propTypes.number]),
  noPadding: propTypes.bool,
  mini: propTypes.bool,
  compact: propTypes.bool,
  compactHeader: propTypes.bool,
  compactFooter: propTypes.bool,
  hollow: propTypes.bool,
  low: propTypes.bool,
  forceShadow: propTypes.bool,
  hoverable: propTypes.bool,
  selected: propTypes.bool,
  margin: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginTop: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginBottom: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  onClick: propTypes.func,
  extraStyles: propTypes.shape({
    base: propTypes.any,
    hover: propTypes.any,
    selected: propTypes.any
  }),
  stickers: propTypes.shape({
    dot: propTypes.oneOfType([// either specify the position as a value for dot…
    propTypes.oneOf(POSITIONS), // …or pass an object with the position (p) and color (c)
    propTypes.shape({
      // p for position
      p: propTypes.oneOf(POSITIONS),
      // c for color
      c: propTypes.string
    })])
  })
};
Card.defaultProps = {
  height: 'default',
  colorBorderPosition: 'top',
  extraStyles: {}
};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Flex = styled.div`
  height: ${({
  fullHeight
}) => fullHeight ? '100%' : 'auto'};
  display: flex;
  flex-direction: ${({
  direction = 'row'
}) => direction};
  justify-content: ${({
  justifyContent = 'normal'
}) => justifyContent};
  justify-items: ${({
  justifyItems = 'normal'
}) => justifyItems};
  align-content: ${({
  alignContent = 'normal'
}) => alignContent};
  align-items: ${({
  alignItems = 'normal'
}) => alignItems};
  flex-wrap: ${({
  flexWrap = 'nowrap'
}) => flexWrap};
  flex-grow: ${({
  flexGrow = 0
}) => flexGrow};
  flex-shrink: ${({
  flexShrink = 1
}) => flexShrink};
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

const iiu = ['inherit', 'initial', 'unset'];
const baseline = ['baseline', 'first baseline', 'last baseline'];
const space = ['space-between', 'space-around', 'space-evenly'];
const safeCenter = ['safe center', 'unsafe center'];
const align = ['normal', 'center', 'start', 'end', 'flex-start', 'flex-end'];
Flex.propTypes = {
  fullHeight: propTypes.bool,
  direction: propTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', ...iiu]),
  justifyContent: propTypes.oneOf(['auto', 'self-start', 'self-end', 'stretch', 'left', 'right', ...align, ...space, ...safeCenter, ...iiu]),
  justifyItems: propTypes.oneOf(['auto', 'self-start', 'self-end', 'stretch', 'left', 'right', ...align, ...baseline, ...safeCenter, ...iiu]),
  alignContent: propTypes.oneOf(['stretch', ...align, ...baseline, ...space, ...safeCenter, ...iiu]),
  alignItems: propTypes.oneOf(['stretch', ...align, ...baseline, ...safeCenter, ...iiu]),
  flexWrap: propTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', ...iiu]),
  flexGrow: propTypes.oneOf([propTypes.objectOf(propTypes.number), ...iiu]),
  flexShrink: propTypes.oneOf([propTypes.objectOf(propTypes.number), ...iiu])
};
Flex.defaultProps = {};

const GOLDEN_RATIO = 1.61803398875;
const convertRemToPixels = rem => {
  return rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
};
const styleValueToPX = value => {
  if (value.indexOf('px') !== -1) {
    return parseFloat(value);
  } else if (value.indexOf('rem') !== -1) {
    return convertRemToPixels(parseFloat(value));
  } else {
    return parseFloat(value);
  }
};

const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledPane = styled.div`
  box-sizing: border-box;
  height: ${props => props.h === 'half' ? '50%' : typeof props.h === 'number' ? `${props.h}rem` : '100%'};
  flex-shrink: 0;
  padding: ${props => props.noPadding ? '0' : '1rem'};
  outline: 1px dashed ${ds.colors.borderLight};
  ${props => props.shadow && css(["box-shadow:0 0 1rem ", ";"], ds.colors.shadow)}
  overflow: auto;
  max-width: 100%;
  width: ${props => props.size === 'full' ? '100%' : props.size === 'small' ? '16rem' : props.size === 'full-minus-small' ? 'calc(100vw - 16rem)' : props.size === 'golden-width' ? `${100 / GOLDEN_RATIO}%` : props.size === 'golden-width-rest' ? `${100 - 100 / GOLDEN_RATIO}%` : props.size === 'half' ? '50%' : props.size === 'third' ? '33.3%' : props.size === 'fourth' ? '25%' // default:
: '50rem'};

  @media (max-width: 768px) {
    ${props => props.size === 'small' ? '' : 'min-width: 100vw;'}
    max-width: 100vw;
  }
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Pane = ({
  size,
  height,
  shadow,
  noPadding,
  children
}) => {
  const uid = React.useRef(`pane-${Math.random().toString(36).substr(2, 9)}`); // -------------------------------------------------------------------------------------------------------------------
  // Effect
  // -------------------------------------------------------------------------------------------------------------------

  React.useEffect(() => {
    let debouncedHandleResize;
    let handleResize;

    if (window && (size === 'square' || size === 'golden-horizontal' || size === 'golden-vertical')) {
      handleResize = () => {
        const el = document.querySelector(`#${uid.current}`);
        const elStyle = window.getComputedStyle(el);
        const h = el.offsetHeight;
        const winW = window.innerWidth;

        switch (size) {
          case 'golden-horizontal':
            el.style.width = `${parseInt(h * GOLDEN_RATIO, 10)}px`;
            break;

          case 'golden-vertical':
            el.style.width = `${parseInt(h / GOLDEN_RATIO, 10)}px`;
            break;

          case 'square':
          default:
            el.style.width = `${Math.min(h, winW)}px`;
            el.style.paddingBottom = `${h - Math.min(h, winW) + styleValueToPX(elStyle.paddingTop)}px`;
        }
      };

      debouncedHandleResize = debounce(handleResize, 250);
      window.addEventListener('resize', debouncedHandleResize);
      handleResize();
    }

    return () => {
      if (debouncedHandleResize) window.removeEventListener('resize', debouncedHandleResize);
    };
  }); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React.createElement(StyledPane, {
    id: uid.current,
    size: size,
    h: height,
    shadow: shadow,
    noPadding: noPadding
  }, children);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Pane.propTypes = {
  size: propTypes.oneOf(['default', 'small', 'full', 'full-minus-small', 'square', 'golden-horizontal', 'golden-vertical', 'golden-width', 'golden-width-rest', 'half', 'third', 'fourth']),
  height: propTypes.oneOfType([propTypes.oneOf(['half', 'full']), propTypes.number]),
  shadow: propTypes.bool,
  noPadding: propTypes.bool,
  children: propTypes.node
};
Pane.defaultProps = {
  size: 'default',
  height: 'full'
};

const headingStyles = css(["font-family:", ";font-weight:", ";"], ds.fonts.heading, ds.weights.heading);
const preHeadingStyles = css(["color:", ";letter-spacing:", "em;text-transform:uppercase;font-size:.8rem;font-weight:", ";"], ds.colors.fgMuted, 1 / 12, ds.weights.preheading);
const labelStyles = css(["line-height:calc(", "rem * 2);height:calc(", "rem * 2);padding:0 ", "rem;display:inline-block;margin:calc(", "rem / 4) calc(", "rem / 4);"], ds.measures.spacer, ds.measures.spacer, ds.measures.spacer, ds.measures.spacer, ds.measures.spacer);
const labelStylesSmall = css(["line-height:calc(", "rem * 3 / 2);height:calc(", "rem * 3 / 2);padding:0 ", "rem;display:inline-block;margin:calc(", "rem / 4) calc(", "rem / 4);"], ds.measures.spacer, ds.measures.spacer, props => ds.measures.spacer(props) / 2, ds.measures.spacer, ds.measures.spacer);

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const Label = styled.span`
  ${props => props.small ? labelStylesSmall : props => props.compact ? `line-height: calc(${ds.measures.spacer(props)}rem * 2);
  height: calc(${ds.measures.spacer(props)}rem * 2);` : labelStyles}
  font-size: ${props => props.small ? ds.measures.fontSmall : ds.measures.font};
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}
  &:first-child {
    padding-left: 0.25rem;
  }
  &:last-child {
    padding-right: 0.25rem;
  }
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Label.propTypes = {
  small: propTypes.bool,
  heading: propTypes.bool,
  compact: propTypes.bool,
  children: propTypes.node
};
Label.defaultProps = {};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const Muted = styled.span`
  color: ${ds.colors.fgMuted};
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Muted.propTypes = {};
Muted.defaultProps = {};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledTableContainer = styled.div`
  overflow-x: auto;
`;
const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: max-content;
  min-width: 100%;
  table-layout: ${props => props.layout};

  thead, tfoot {
    background-color: ${ds.colors.tableStripe};
    color: ${ds.colors.fg};
  }

  th, td {
    border: 1px solid ${ds.colors.border};
    padding: 0.5em;
    word-wrap: break-word;
    min-width: 4em;
    max-width: 20em;
  }

  th {
    ${preHeadingStyles}
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: ${ds.colors.tableStripe};
  }

  ${props => props.hoverable === true && `tbody tr:hover {
    background-color: ${ds.colors.tableHoverBg(props)};
    color: ${ds.colors.tableHoverFg(props)}
  }`}
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Table = ({
  hoverable,
  layout,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React.createElement(StyledTableContainer, null, /*#__PURE__*/React.createElement(StyledTable, {
    hoverable: hoverable
  }, children));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Table.propTypes = {
  children: propTypes.node,
  layout: propTypes.oneOf(['fixed', 'auto']),
  hoverable: propTypes.bool
};
Table.defaultProps = {
  layout: 'auto'
};

const selectedCSS = css(["color:", ";background:", ";transform:perspective(100rem) translateZ(-2rem);box-shadow:inset 0 0 .25rem 0 ", ";"], ds.colors.buttonFgSelected, ds.colors.buttonBgSelected, ds.colors.buttonShadow);
const buttonStyle = css(["", " font-size:", ";vertical-align:bottom;border:1px solid ", ";background:", ";color:", ";border-radius:", ";box-sizing:border-box;", " cursor:pointer;transform:perspective(100rem);&:visited{color:inherit;}&:hover,&:focus,&:active,&.active{", " outline:none;text-decoration:none;", "}&:active,&.active{transform:perspective(100rem) translateZ(-2rem);box-shadow:inset 0 0 .25rem 2px ", ";}&:disabled{color:", ";border-color:", ";background:", ";cursor:default;&:hover,&:focus{border-color:", ";}}", " ", " &.selected{", " ", "}", ""], props => props.small ? labelStylesSmall : labelStyles, props => props.small ? ds.measures.inputFontSmall : ds.measures.inputFont, props => props.variant === 'plain' ? ds.colors.buttonBorderPlain : ds.colors.buttonBorder, props => props.variant === 'plain' ? ds.colors.buttonBgPlain : props.variant === 'inverted' ? ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1 ? ds.colors.fg : ds.colors.buttonFg : ds.colors.buttonBg, props => props.variant === 'plain' ? ds.colors.buttonFgPlain : props.variant === 'inverted' ? ds.colors.buttonBg(props) === 'transparent' ? ds.colors.bg : ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1 ? ds.colors.bg : ds.colors.buttonBg : ds.colors.buttonFg, props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius, props => props.fill ? 'width: 100%; margin-left: 0; margin-right: 0;' : null, props => props.variant === 'plain' ? `color: ${ds.colors.buttonFgHoverPlain(props)};
        background: ${ds.colors.buttonBgHoverPlain(props)};
        border-color: ${ds.colors.buttonBorderHoverPlain(props)};` : `color: ${ds.colors.buttonFgHover(props)};
        background: ${ds.colors.buttonBgHover(props)};
        border-color: ${ds.colors.buttonBorderHover(props)};`, ({
  extraStyles = {}
}) => extraStyles.hover, ds.colors.shadow, ds.colors.buttonFgDisabled, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBgDisabled, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled, props => props.selected ? selectedCSS : null, props => props.selected ? ({
  extraStyles = {}
}) => extraStyles.selected : null, selectedCSS, ({
  extraStyles = {}
}) => extraStyles.selected, ({
  extraStyles = {}
}) => extraStyles.base); // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Button = styled.button // https://github.com/styled-components/styled-components/releases/tag/v5.1.0
.withConfig({
  shouldForwardProp: prop => !['fill', 'small', 'extraStyles'].includes(prop)
})`
  ${buttonStyle}
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Button.propTypes = {
  variant: propTypes.oneOf(['plain', 'inverted', 'default']),
  fill: propTypes.bool,
  small: propTypes.bool,
  selected: propTypes.bool,
  type: propTypes.oneOf(['button', 'submit']),
  extraStyles: propTypes.shape({
    base: propTypes.any,
    hover: propTypes.any,
    selected: propTypes.any
  })
};
Button.defaultProps = {
  variant: 'default',
  type: 'button',
  extraStyles: {}
};

// Local imports
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  margin: ${props => props.pushMargin ? '-1rem' : '0'};
  ${props => props.scroll === 'vertical' ? `
      overflow-y: auto;
      overflow-x: hidden;
      flex-wrap: wrap;
    ` : `
      overflow-y: hidden;
      overflow-x: auto;
      /* Fixes nested overflow scroll: */
      /* https://stackoverflow.com/questions/43539284/overflow-hidden-with-nested-overflow-scroll-not-working */
      height: 100%;
    `}
  ${props => props.h === 'half' ? 'height: 50%;' : 'height: 100%;'}
  min-width: 100%;
`;

const Container = ({
  children,
  pushMargin,
  height,
  scroll
}) => {
  return /*#__PURE__*/React.createElement(StyledContainer, {
    pushMargin: pushMargin,
    h: height,
    scroll: scroll
  }, children);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Container.propTypes = {
  children: propTypes.node,
  pushMargin: propTypes.bool,
  height: propTypes.oneOf(['auto', 'half']),
  scroll: propTypes.oneOf(['horizontal', 'vertical'])
};
Container.defaultProps = {
  pushMargin: false,
  scroll: 'horizontal'
};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledHeader = styled.header`
  background-color: ${ds.colors.card};
  border-bottom: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  align-items: center;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledMain = styled(Container)`
  background-color: ${ds.colors.bg};
`;
const StyledFooter = styled.header`
  background-color: ${ds.colors.card};
  border-top: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  align-items: center;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Layout = ({
  brand,
  children,
  headerSlot,
  toolbar,
  footerSlot,
  menu,
  menuB,
  footerMenu,
  footerMenuB
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React.createElement(StyledLayout, null, (headerSlot || brand || menu || menuB) && /*#__PURE__*/React.createElement(StyledHeader, null, /*#__PURE__*/React.createElement(Label, {
    heading: true
  }, headerSlot || brand), menu, menuB && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, menuB)), toolbar && /*#__PURE__*/React.createElement(StyledHeader, null, toolbar), /*#__PURE__*/React.createElement(StyledMain, null, children), (footerSlot || brand) && /*#__PURE__*/React.createElement(StyledFooter, null, /*#__PURE__*/React.createElement(Label, {
    heading: true
  }, footerSlot || `Copyright © 2020 ${brand}`), footerMenu, footerMenuB && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, footerMenuB)));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Layout.propTypes = {
  brand: propTypes.string,
  menu: propTypes.node,
  menuB: propTypes.node,
  children: propTypes.node,
  headerSlot: propTypes.node,
  toolbar: propTypes.node,
  footerSlot: propTypes.node,
  footerMenu: propTypes.node,
  footerMenuB: propTypes.node
};
Layout.defaultProps = {};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Divider = styled.span`
  ${props => props.horizontal ? css(["display:block;margin:", ";border-top:1px solid ", ";"], props => props.noMargin ? 0 : '1em 0', ds.colors.border) : css(["display:inline-block;margin:", ";border-right:1px solid ", ";height:1.8em;"], props => props.noMargin ? 0 : '0 1em', ds.colors.border)}
  vertical-align: middle;
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Divider.propTypes = {
  noMargin: propTypes.bool,
  horizontal: propTypes.bool
};
Divider.defaultProps = {};

// Styled components
// ---------------------------------------------------------------------------------------------------------------------

const rotate = keyframes(["0%{transform:rotate(0deg);}17%{transform:rotate(180deg);}51%{transform:rotate(180deg);}68%{transform:rotate(360deg);}100%{transform:rotate(360deg);}"]);
const StyledLoadingInline = styled.span`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
`;
const StyledLoading = styled.div`
  font-size: 4em;
  text-align: center;
  color: ${ds.colors.fgMuted};
  padding: 0.5em 0;
  animation: ${rotate} 2s linear infinite;
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Loading = ({
  inline,
  icon
}) => {
  return inline ? /*#__PURE__*/React.createElement(StyledLoadingInline, null, icon) : /*#__PURE__*/React.createElement(StyledLoading, null, icon);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Loading.propTypes = {
  inline: propTypes.bool,
  icon: propTypes.node
};
Loading.defaultProps = {
  icon: '⏳' // ⧗

};

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

const getLabel = (val, options) => {
  let result = val;

  for (const o of options) {
    if (o.value === val) {
      result = o.label;
      break;
    }
  }

  return result;
};

const PROP_VALUE = propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number])), propTypes.oneOfType([propTypes.string, propTypes.number])]);
const PROP_OPTIONS = propTypes.arrayOf(propTypes.shape({
  label: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number])
}));
const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: calc(${ds.measures.spacer}rem / 4);
  right: calc(${ds.measures.spacer}rem / 4);
`;
const Actionable = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`; // ---------------------------------------------------------------------------------------------------------------------
// MultiselectActionable
// ---------------------------------------------------------------------------------------------------------------------

const MultiselectActionable = /*#__PURE__*/React.forwardRef((props, ref) => {
  const popupRef = useRef();
  const actionableRef = useRef();
  const {
    id,
    label,
    value = [],
    onChange,
    disabled,
    options
  } = props;
  const [open, setOpen] = useState(false); // TODO: set top

  const [top] = useState('2.5rem'); // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------

  const _value = React.useMemo(() => {
    return Array.isArray(value) ? value : [];
  }, [value]);

  const openPopup = React.useCallback(val => {
    if (!disabled) {
      setOpen(val);
      if (val) actionableRef.current.focus();
    }
  }, [disabled]); // -------------------------------------------------------------------------------------------------------------------
  // Reducers
  // -------------------------------------------------------------------------------------------------------------------

  const dispatchSelected = React.useCallback(action => {
    let index;
    let result;

    switch (action.type) {
      case 'reset':
        result = [];
        break;

      default:
        // adds or removes action.value from selected
        index = _value.indexOf(action.value);

        if (index === -1) {
          result = [..._value, action.value];
        } else {
          result = [..._value];
          result.splice(index, 1);
        }

    }

    if (ref) ref.current = {
      value: result
    };
    onChange(result);
  }, [_value, onChange, ref]); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, {
    as: "label",
    htmlFor: id,
    onClick: () => {
      openPopup(!open);
    },
    onMouseDown: e => e.preventDefault()
  }, label), /*#__PURE__*/React.createElement(Actionable, {
    ref: actionableRef,
    tabIndex: 0,
    className: `nui-actionable${disabled ? ' disabled' : ''}`,
    onBlur: evt => {
      const contained = popupRef.current.contains(evt.relatedTarget);
      if (!contained) openPopup(false);
    },
    onClick: () => openPopup(!open)
  }, _value.map(x => getLabel(x, options)).join(', ')), /*#__PURE__*/React.createElement(Popup, {
    ref: popupRef,
    style: {
      display: open ? 'block' : 'none',
      width: '32em',
      top: top
    }
  }, /*#__PURE__*/React.createElement(Card, {
    mini: true,
    forceShadow: true,
    low: true,
    selected: true
  }, options.length ? options.map(x => /*#__PURE__*/React.createElement(Button, {
    fill: true,
    small: true,
    key: x.value,
    variant: "plain",
    selected: _value.indexOf(x.value) !== -1,
    extraStyles: {
      base: {
        textAlign: 'left'
      }
    },
    onClick: evt => {
      dispatchSelected({
        value: x.value
      });
      evt.target.blur();
    }
  }, x.label)) : /*#__PURE__*/React.createElement(Label, {
    small: true
  }, /*#__PURE__*/React.createElement(Muted, null, "Empty")))));
});
MultiselectActionable.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  value: PROP_VALUE,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  options: PROP_OPTIONS
};
MultiselectActionable.defaultProps = {
  onChange: () => {}
}; // ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledControl = styled.div`
  border-radius: ${ds.measures.inputRadius};
  display: flex;
  margin: 0 calc(${ds.measures.spacer}rem / 4);
  background-color: ${props => props.withLabel ? ds.colors.controlBg : 'transparent'};
  position: relative;
  padding: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
  min-width: 10em;
  max-width: 32em;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  & > ${Label} {
    ${props => props.small && css(["", " font-size:", ";"], labelStylesSmall, ds.measures.inputFontSmall)}
    padding-left: calc(${ds.measures.spacer}rem / 2);
    padding-right: calc(${ds.measures.spacer}rem / 4);
    font-weight: ${ds.weights.controlLabel};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    ${props => props.labelInside && `
      position: absolute;
      top: -.2em;
      font-size: .8em;
      white-space: nowrap;
      user-select: none;
    `}
    ${props => props.comfort && !props.labelInside && css(["line-height:calc(", "rem * 3);height:calc(", "rem * 3);padding:0 ", "rem;"], ds.measures.spacer, ds.measures.spacer, ds.measures.spacer * (3 / 2))}
  }

  & > input,
  & > select,
  & > div.nui-actionable {
    font-family: ${ds.fonts.controls};
    ${props => props.small && css(["", " font-size:", ";"], labelStylesSmall, ds.measures.inputFontSmall)}
    flex-grow: 1;
    margin: 0;
    max-width: 100%;
    ${props => props.labelInside && `
      padding-top: 0.8em;
    `}
    ${props => props.comfort && css(["line-height:calc(", "rem * 3);height:calc(", "rem * 3);", ""], ds.measures.spacer, ds.measures.spacer, ''
/* padding: 0 ${props => ds.measures.spacer(props) * (3 / 2)}rem; */
)}
  }

  &.invalid > input,
  &.invalid > select,
  &.invalid > div.nui-actionable {
    border-color: ${ds.colors.inputBorderInvalid};
    &:hover,
    &:focus,
    &:active,
    &.active {
      border-color: ${ds.colors.inputBorderActive};
    }
  }

  &.disabled {
    ${Label} {
      color: ${ds.colors.inputFgDisabled};
    }
  }
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Control = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    type,
    label,
    value,
    onChange,
    invalid,
    disabled,
    labelInside,
    comfort,
    small,
    options,
    min,
    max
  } = props;
  const uid = useRef(Math.random().toString(36).substr(2, 9));
  return /*#__PURE__*/React.createElement(StyledControl, {
    withLabel: label,
    className: [invalid && 'invalid', disabled && 'disabled'].join(' '),
    labelInside: labelInside,
    comfort: comfort,
    small: small
  }, type === 'select' ? /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, {
    as: "label",
    htmlFor: uid.current
  }, label), /*#__PURE__*/React.createElement("select", {
    id: uid.current,
    defaultValue: value,
    disabled: disabled,
    onChange: evt => onChange(evt.target.value),
    ref: ref
  }, options.map(x => /*#__PURE__*/React.createElement("option", {
    key: x.value,
    value: x.value
  }, x.label)))) : type === 'multiselect' ? /*#__PURE__*/React.createElement(MultiselectActionable, {
    id: uid.current,
    label: label,
    value: value,
    disabled: disabled,
    onChange: onChange,
    options: options,
    ref: ref
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, {
    as: "label",
    htmlFor: uid.current
  }, label), /*#__PURE__*/React.createElement("input", _extends$1({
    id: uid.current,
    type: type || 'text',
    value: value,
    disabled: disabled,
    onChange: evt => onChange(evt.target.value),
    ref: ref
  }, {
    min,
    max
  }))));
}); // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Control.propTypes = {
  type: propTypes.string,
  label: propTypes.node,
  value: PROP_VALUE,
  onChange: propTypes.func,
  invalid: propTypes.bool,
  disabled: propTypes.bool,
  labelInside: propTypes.bool,
  comfort: propTypes.bool,
  small: propTypes.bool,
  options: PROP_OPTIONS,
  min: propTypes.number,
  max: propTypes.number
};
Control.defaultProps = {
  onChange: () => {},
  options: []
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
styleInject(css_248z);

const NitramUIContext = /*#__PURE__*/React.createContext({
  mode: modes.light,
  setMode: () => {},
  theme: themes.smooth,
  setTheme: () => {}
});

const global = createGlobalStyle`
html, body {
  height: 100%;
}

html {
  font-size: ${ds.measures.unit};
}

body {
  color: ${ds.colors.fg};
  background-color: ${ds.colors.bg};
  font-family: ${ds.fonts.body};
  font-size: ${ds.measures.font};
  font-weight: ${ds.weights.normal};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  ${headingStyles}
  &.pre-heading {
    ${preHeadingStyles}
    margin: 1em 0;
  }
}

p {
  line-height: 1.5em;
}

strong {
  font-weight: ${ds.weights.strong};
}

input,
select,
textarea,
code,
pre {
  font-family: ${ds.fonts.controls};
}

pre {
  overflow-x: auto;
  overflow-y: auto;
  padding: 0.5em;
  background-color: ${ds.colors.tableStripe};
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${ds.colors.bg};
    border-radius: ${ds.measures.radius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ds.colors.fgMuted};
    border-radius: ${ds.measures.radius};
  }
}

p {
  img {
    max-width: 100%;
  }

  & > button:first-child,
  & > .button:first-child,
  & > input:first-child,
  & > select:first-child{
    margin-left: 0;
  }

  & > button:last-child,
  & > .button:last-child,
  & > input:last-child,
  & > select:last-child {
    margin-right: 0;
  }
}

a {
  text-decoration: none;
  color: ${ds.colors.link};

  &:visited {
    color: ${ds.colors.linkVisited};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.button,
button {
  ${buttonStyle}
}

input,
select,
.nui-actionable {
  ${labelStyles}
  padding: 0 ${ds.measures.inputSpacerH}rem;
  font-size: ${ds.measures.inputFont};
  border: 1px solid ${ds.colors.inputBorder};
  background-color: ${ds.colors.inputBg};
  color: ${ds.colors.inputFg};
  border-radius: ${ds.measures.inputRadius};
  box-sizing: border-box;

  &:hover {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgHover};
    outline: none;
  }
  &:focus,
  &:active,
  &.active {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgFocus};
    outline: none;
  }

  &.disabled,
  &:disabled {
    color: ${ds.colors.inputFgDisabled};
    border-color: ${ds.colors.inputBorderDisabled};
    background-color: ${ds.colors.inputBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${ds.colors.inputBorderDisabled};
    }
  }
}

.mt {
  margin-top: 1em !important;
}
.mts {
  margin-top: .5em !important;
}

.mr {
  margin-right: 1em !important;
}
.mrs {
  margin-right: .5em !important;
}

.mb {
  margin-bottom: 1em !important;
}
.mbs {
  margin-bottom: .5em !important;
}

.ml {
  margin-left: 1em !important;
}
.mls {
  margin-left: .5em !important;
}

.fw {
  display: inline-block;
  width: 1em;
}
`;
const GlobalStyle$1 = createGlobalStyle`
  ${css_248z}
  ${global}
`; // ---------------------------------------------------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------------------------------------------------

const isCustomTheme = theme => themes[theme];

const getDefaultTheme = ({
  availableThemes,
  returnOnlyPredef
}) => availableThemes && availableThemes.length ? isCustomTheme(availableThemes[0]) && returnOnlyPredef ? themes.smooth : availableThemes[0] : themes.smooth; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------


const NitramUI = ({
  customThemes,
  availableThemes,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // States
  // -------------------------------------------------------------------------------------------------------------------
  // TODO: use hooks for system/time–aware –saved– dark mode
  const [mode, setMode] = useState(modes.light);
  const [theme, setTheme] = useState(getDefaultTheme({
    availableThemes
  }));
  const [themeAux, setThemeAux] = useState(getDefaultTheme({
    availableThemes,
    returnOnlyPredef: true
  }));
  const [customTheme, setCustomTheme] = useState(getDefaultTheme({
    availableThemes
  })); // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------

  const themeProviderObj = useMemo(() => ({
    theme: themeAux,
    mode,
    customThemes,
    customTheme
  }), [themeAux, mode, customThemes, customTheme]);
  const availableThemesObjects = useMemo(() => {
    let aTs = {};

    if (!availableThemes) {
      aTs = { ...themes,
        ...Object.keys(customThemes || {}).reduce((acc, x) => ({ ...acc,
          x
        }), {})
      };
    } else {
      availableThemes.forEach(x => {
        if (customThemes && customThemes[x] || themes[x]) {
          aTs[x] = x;
        }
      });
    }

    return aTs;
  }, [customThemes, availableThemes]); // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (isCustomTheme(theme)) {
      setThemeAux(theme);
    } else {
      setThemeAux('custom');
      setCustomTheme(theme);
    }
  }, [theme]); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React.createElement(NitramUIContext.Provider, {
    value: {
      mode,
      setMode,
      theme,
      setTheme,
      themes: availableThemesObjects,
      ds,
      getDSVal: x => typeof x === 'function' && x({
        theme: themeProviderObj
      })
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: themeProviderObj
  }, /*#__PURE__*/React.createElement(GlobalStyle$1, null), children));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


NitramUI.propTypes = {
  children: propTypes.node,
  customThemes: propTypes.object,
  availableThemes: propTypes.arrayOf(propTypes.string)
};
NitramUI.defaultProps = {};

export { Button, Card, Container, Control, Divider, Flex, Label, Layout, Loading, Muted, NitramUI, NitramUIContext, Pane, Table, css, ds, modes, styled, themes };
//# sourceMappingURL=nitramui.es.js.map
