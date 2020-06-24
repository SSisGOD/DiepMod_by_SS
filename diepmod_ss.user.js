// ==UserScript==
// @name        DiepMOD by SS
// @include     *://diep.io/*
// @author      SSisGOD
// @description Tabキーでサーバーリスト表示
// @connect     diep.io
// @version @  1.0
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_setClipboard
// @grant       GM_notification
// @grant       unsafeWindow
// @require     http://code.jquery.com/jquery-3.2.1.slim.min.js
// @require     http://code.jquery.com/jquery-latest.js
// @resource    diepCSS https://raw.githubusercontent.com/SSisGOD/DiepMod_by_SS/master/diepmod.css
// ==/UserScript==

var info_container = document.createElement("div");
info_container.style = "pointer-events: none; position: fixed; top:10px; left:10px; font-family: Ubuntu; color: #FFFFFF; font-size: 30px;";
document.body.appendChild(info_container);

var cx = window.innerWidth, cy = window.innerHeight, r = 5;
var nx,ny;
var positionX=0,positionY=0;
var a = 0, u = 0;
var tx = 0, ty = 0, mx = cx, my = cy;

var _createClass = function() {
    function n(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}! function o(s, u, a) {
    function f(e, t) {
        //console.log(e);
        if (!u[e]) {
            if (!s[e]) {
                var r = "function" == typeof require && require;
                if (!t && r) return r(e, !0);
                if (h) return h(e, !0);
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = u[e] = {
                exports: {}
            };
            s[e][0].call(i.exports, function(t) {
                return f(s[e][1][t] || t)
            }, i, i.exports, o, s, u, a)
        }
        return u[e].exports
    }
    //console.log
    for (var h = "function" == typeof require && require, t = 0; t < a.length; t++) f(a[t]);

    return f
}({
    1: [function(t, e, r) {
        "use strict";
        r.byteLength = function(t) {
            var e = c(t),
                r = e[0],
                n = e[1];
            return 3 * (r + n) / 4 - n
        }, r.toByteArray = function(t) {
            var e, r, n = c(t),
                i = n[0],
                o = n[1],
                s = new h(function(t, e, r) {
                    return 3 * (e + r) / 4 - r
                }(0, i, o)),
                u = 0,
                a = 0 < o ? i - 4 : i;
            for (r = 0; r < a; r += 4) e = f[t.charCodeAt(r)] << 18 | f[t.charCodeAt(r + 1)] << 12 | f[t.charCodeAt(r + 2)] << 6 | f[t.charCodeAt(r + 3)], s[u++] = e >> 16 & 255, s[u++] = e >> 8 & 255, s[u++] = 255 & e;
            2 === o && (e = f[t.charCodeAt(r)] << 2 | f[t.charCodeAt(r + 1)] >> 4, s[u++] = 255 & e);
            1 === o && (e = f[t.charCodeAt(r)] << 10 | f[t.charCodeAt(r + 1)] << 4 | f[t.charCodeAt(r + 2)] >> 2, s[u++] = e >> 8 & 255, s[u++] = 255 & e);
            return s
        }, r.fromByteArray = function(t) {
            for (var e, r = t.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383) i.push(a(t, o, s < o + 16383 ? s : o + 16383));
            1 == n ? (e = t[r - 1], i.push(u[e >> 2] + u[e << 4 & 63] + "==")) : 2 == n && (e = (t[r - 2] << 8) + t[r - 1], i.push(u[e >> 10] + u[e >> 4 & 63] + u[e << 2 & 63] + "="));
            return i.join("")
        };
        for (var u = [], f = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = n.length; i < o; ++i) u[i] = n[i], f[n.charCodeAt(i)] = i;

        function c(t) {
            var e = t.length;
            if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
        }

        function a(t, e, r) {
            for (var n, i, o = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(u[(i = n) >> 18 & 63] + u[i >> 12 & 63] + u[i >> 6 & 63] + u[63 & i]);
            return o.join("")
        }
        f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
    }, {}],
    2: [function(L, t, R) {
        (function(c) {
            "use strict";
            var n = L("base64-js"),
                o = L("ieee754"),
                t = "function" == typeof Symbol ? Symbol.for("nodejs.util.inspect.custom") : null;
            R.Buffer = c, R.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return c.alloc(+t)
            }, R.INSPECT_MAX_BYTES = 50;
            var r = 2147483647;

            function s(t) {
                if (r < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, c.prototype), e
            }

            function c(t, e, r) {
                if ("number" != typeof t) return i(t, e, r);
                if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                return a(t)
            }

            function i(t, e, r) {
                if ("string" == typeof t) return function(t, e) {
                    "string" == typeof e && "" !== e || (e = "utf8");
                    if (!c.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    var r = 0 | l(t, e),
                        n = s(r),
                        i = n.write(t, e);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(t, e);
                if (ArrayBuffer.isView(t)) return f(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : _typeof(t)));
                if (x(t, ArrayBuffer) || t && x(t.buffer, ArrayBuffer)) return function(t, e, r) {
                    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r);
                    return Object.setPrototypeOf(n, c.prototype), n
                }(t, e, r);
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return c.from(n, e, r);
                var i = function(t) {
                    if (c.isBuffer(t)) {
                        var e = 0 | h(t.length),
                            r = s(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    if (void 0 !== t.length) return "number" != typeof t.length || K(t.length) ? s(0) : f(t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data)
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return c.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : _typeof(t)))
            }

            function u(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function a(t) {
                return u(t), s(t < 0 ? 0 : 0 | h(t))
            }

            function f(t) {
                for (var e = t.length < 0 ? 0 : 0 | h(t.length), r = s(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function h(t) {
                if (r <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
                return 0 | t
            }

            function l(t, e) {
                if (c.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || x(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === t ? "undefined" : _typeof(t)));
                var r = t.length,
                    n = 2 < arguments.length && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return B(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return C(t).length;
                    default:
                        if (i) return n ? -1 : B(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function p(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function y(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : d(t, e, r, n, i);
                if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : d(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function d(t, e, r, n, i) {
                var o, s = 1,
                    u = t.length,
                    a = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    u /= s = 2, a /= 2, r /= 2
                }

                function f(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    var h = -1;
                    for (o = r; o < u; o++)
                        if (f(t, o) === f(e, -1 === h ? 0 : o - h)) {
                            if (-1 === h && (h = o), o - h + 1 === a) return h * s
                        } else -1 !== h && (o -= o - h), h = -1
                } else
                    for (u < r + a && (r = u - a), o = r; 0 <= o; o--) {
                        for (var c = !0, l = 0; l < a; l++)
                            if (f(t, o + l) !== f(e, l)) {
                                c = !1;
                                break
                            } if (c) return o
                    }
                return -1
            }

            function v(t, e, r, n) {
                r = Number(r) || 0;
                var i = t.length - r;
                n ? i < (n = Number(n)) && (n = i) : n = i;
                var o = e.length;
                o / 2 < n && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                    var u = parseInt(e.substr(2 * s, 2), 16);
                    if (K(u)) return s;
                    t[r + s] = u
                }
                return s
            }

            function g(t, e, r, n) {
                return _(function(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function w(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function b(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r;) {
                    var o, s, u, a, f = t[i],
                        h = null,
                        c = 239 < f ? 4 : 223 < f ? 3 : 191 < f ? 2 : 1;
                    if (i + c <= r) switch (c) {
                        case 1:
                            f < 128 && (h = f);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && 127 < (a = (31 & f) << 6 | 63 & o) && (h = a);
                            break;
                        case 3:
                            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && 2047 < (a = (15 & f) << 12 | (63 & o) << 6 | 63 & s) && (a < 55296 || 57343 < a) && (h = a);
                            break;
                        case 4:
                            o = t[i + 1], s = t[i + 2], u = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & u) && 65535 < (a = (15 & f) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & u) && a < 1114112 && (h = a)
                    }
                    null === h ? (h = 65533, c = 1) : 65535 < h && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += c
                }
                return function(t) {
                    var e = t.length;
                    if (e <= E) return String.fromCharCode.apply(String, t);
                    var r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += E));
                    return r
                }(n)
            }
            R.kMaxLength = r, (c.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(c.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.byteOffset
                }
            }), "undefined" != typeof Symbol && null != Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), c.poolSize = 8192, c.from = function(t, e, r) {
                return i(t, e, r)
            }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t, e, r) {
                return function(t, e, r) {
                    return u(t), t <= 0 ? s(t) : void 0 !== e ? "string" == typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
                }(t, e, r)
            }, c.allocUnsafe = function(t) {
                return a(t)
            }, c.allocUnsafeSlow = function(t) {
                return a(t)
            }, c.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== c.prototype
            }, c.compare = function(t, e) {
                if (x(t, Uint8Array) && (t = c.from(t, 0, t.byteLength)), x(e, Uint8Array) && (e = c.from(e, 0, e.byteLength)), !c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, c.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return c.alloc(0);
                var r;
                if (void 0 === e)
                    for (r = e = 0; r < t.length; ++r) e += t[r].length;
                var n = c.allocUnsafe(e),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (x(o, Uint8Array) && (o = c.from(o)), !c.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i), i += o.length
                }
                return n
            }, c.byteLength = l, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) p(this, e, e + 1);
                return this
            }, c.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) p(this, e, e + 3), p(this, e + 1, e + 2);
                return this
            }, c.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
                return this
            }, c.prototype.toLocaleString = c.prototype.toString = function() {
                var t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? b(this, 0, t) : function(t, e, r) {
                    var n = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t = t || "utf8";;) switch (t) {
                        case "hex":
                            return A(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, e, r);
                        case "ascii":
                            return T(this, e, r);
                        case "latin1":
                        case "binary":
                            return k(this, e, r);
                        case "base64":
                            return w(this, e, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return m(this, e, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, c.prototype.equals = function(t) {
                if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === c.compare(this, t)
            }, c.prototype.inspect = function() {
                var t = "",
                    e = R.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
            }, t && (c.prototype[t] = c.prototype.inspect), c.prototype.compare = function(t, e, r, n, i) {
                if (x(t, Uint8Array) && (t = c.from(t, 0, t.byteLength)), !c.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + (void 0 === t ? "undefined" : _typeof(t)));
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= n && r <= e) return 0;
                if (i <= n) return -1;
                if (r <= e) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), u = Math.min(o, s), a = this.slice(n, i), f = t.slice(e, r), h = 0; h < u; ++h)
                    if (a[h] !== f[h]) {
                        o = a[h], s = f[h];
                        break
                    } return o < s ? -1 : s < o ? 1 : 0
            }, c.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, c.prototype.indexOf = function(t, e, r) {
                return y(this, t, e, r, !0)
            }, c.prototype.lastIndexOf = function(t, e, r) {
                return y(this, t, e, r, !1)
            }, c.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - e;
                if ((void 0 === r || i < r) && (r = i), 0 < t.length && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n = n || "utf8";
                for (var o, s, u, a, f, h, c, l, p, y = !1;;) switch (n) {
                    case "hex":
                        return v(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return l = e, p = r, _(B(t, (c = this).length - l), c, l, p);
                    case "ascii":
                        return g(this, t, e, r);
                    case "latin1":
                    case "binary":
                        return g(this, t, e, r);
                    case "base64":
                        return a = this, f = e, h = r, _(C(t), a, f, h);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return s = e, u = r, _(function(t, e) {
                            for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                            return o
                        }(t, (o = this).length - s), o, s, u);
                    default:
                        if (y) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), y = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var E = 4096;

            function T(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function k(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function A(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || n < r) && (r = n);
                for (var i = "", o = e; o < r; ++o) i += N(t[o]);
                return i
            }

            function m(t, e, r) {
                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function U(t, e, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (r < t + e) throw new RangeError("Trying to access beyond buffer length")
            }

            function O(t, e, r, n, i, o) {
                if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < e || e < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function I(t, e, r, n) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function P(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
            }

            function S(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
            }
            c.prototype.slice = function(t, e) {
                var r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t);
                var n = this.subarray(t, e);
                return Object.setPrototypeOf(n, c.prototype), n
            }, c.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, c.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                for (var n = this[t + --e], i = 1; 0 < e && (i *= 256);) n += this[t + --e] * i;
                return n
            }, c.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || U(t, 1, this.length), this[t]
            }, c.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || U(t, 2, this.length), this[t] | this[t + 1] << 8
            }, c.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || U(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, c.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, c.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, c.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return (i *= 128) <= n && (n -= Math.pow(2, 8 * e)), n
            }, c.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || U(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; 0 < n && (i *= 256);) o += this[t + --n] * i;
                return (i *= 128) <= o && (o -= Math.pow(2, 8 * e)), o
            }, c.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, c.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || U(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || U(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, c.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, c.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, c.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || U(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || U(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, c.prototype.writeUIntBE = function(t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    o = 1;
                for (this[e + i] = 255 & t; 0 <= --i && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, c.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, c.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, c.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, c.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, c.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, c.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    O(this, t, e, r, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    u = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), this[e + o] = (t / s >> 0) - u & 255;
                return e + r
            }, c.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    O(this, t, e, r, i - 1, -i)
                }
                var o = r - 1,
                    s = 1,
                    u = 0;
                for (this[e + o] = 255 & t; 0 <= --o && (s *= 256);) t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), this[e + o] = (t / s >> 0) - u & 255;
                return e + r
            }, c.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, c.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, c.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, c.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, c.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, c.prototype.writeFloatLE = function(t, e, r) {
                return P(this, t, e, !0, r)
            }, c.prototype.writeFloatBE = function(t, e, r) {
                return P(this, t, e, !1, r)
            }, c.prototype.writeDoubleLE = function(t, e, r) {
                return S(this, t, e, !0, r)
            }, c.prototype.writeDoubleBE = function(t, e, r) {
                return S(this, t, e, !1, r)
            }, c.prototype.copy = function(t, e, r, n) {
                if (!c.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r = r || 0, n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < n && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                var i = n - r;
                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                else if (this === t && r < e && e < n)
                    for (var o = i - 1; 0 <= o; --o) t[o + e] = this[o + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                return i
            }, c.prototype.fill = function(t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        var i = t.charCodeAt(0);
                        ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                    }
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                var o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof(t = t || 0))
                    for (o = e; o < r; ++o) this[o] = t;
                else {
                    var s = c.isBuffer(t) ? t : c.from(t, n),
                        u = s.length;
                    if (0 === u) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (o = 0; o < r - e; ++o) this[o + e] = s[o % u]
                }
                return this
            };
            var e = /[^+/0-9A-Za-z-_]/g;

            function N(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function B(t, e) {
                var r;
                e = e || 1 / 0;
                for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                    if (55295 < (r = t.charCodeAt(s)) && r < 57344) {
                        if (!i) {
                            if (56319 < r) {
                                -1 < (e -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                -1 < (e -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            -1 < (e -= 3) && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && -1 < (e -= 3) && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function C(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(e, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function _(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function x(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function K(t) {
                return t != t
            }
        }).call(this, L("buffer").Buffer)
    }, {
        "base64-js": 1,
        buffer: 2,
        ieee754: 3
    }],
    3: [function(t, e, r) {
        r.read = function(t, e, r, n, i) {
            var o, s, u = 8 * i - n - 1,
                a = (1 << u) - 1,
                f = a >> 1,
                h = -7,
                c = r ? i - 1 : 0,
                l = r ? -1 : 1,
                p = t[e + c];
            for (c += l, o = p & (1 << -h) - 1, p >>= -h, h += u; 0 < h; o = 256 * o + t[e + c], c += l, h -= 8);
            for (s = o & (1 << -h) - 1, o >>= -h, h += n; 0 < h; s = 256 * s + t[e + c], c += l, h -= 8);
            if (0 === o) o = 1 - f;
            else {
                if (o === a) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), o -= f
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n)
        }, r.write = function(t, e, r, n, i, o) {
            var s, u, a, f = 8 * o - i - 1,
                h = (1 << f) - 1,
                c = h >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                y = n ? 1 : -1,
                d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), 2 <= (e += 1 <= s + c ? l / a : l * Math.pow(2, 1 - c)) * a && (s++, a /= 2), h <= s + c ? (u = 0, s = h) : 1 <= s + c ? (u = (e * a - 1) * Math.pow(2, i), s += c) : (u = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); 8 <= i; t[r + p] = 255 & u, p += y, u /= 256, i -= 8);
            for (s = s << i | u, f += i; 0 < f; t[r + p] = 255 & s, p += y, s /= 256, f -= 8);
            t[r + p - y] |= 128 * d
        }
    }, {}],
    4: [function(t, e, r) {
        var n = {
            objPosX: 3,
            objPosY: 1,
            objAngle: 2,
            agentPosX: 66,
            agentPosY: 23,
            agentPosX2: 18,
            agentPosY2: 44,
            fade: 64,
            opacity: 65,
            counter: 29,
            weirdBytes1: 19,
            weirdBytes2: 29,
            expPointsOthert: 20,
            maxHealth: 35,
            health: 37,
            timeAliveThis: 28,
            tankMass: 25,
            tankSpeed: 31,
            tankLevel: 38,
            expPointsThis: 39
        },
            i = {},
            o = !0,
            s = !1,
            u = void 0;
        try {
            for (var a, f = Object.keys(n)[Symbol.iterator](); !(o = (a = f.next()).done); o = !0) {
                var h = a.value;
                i[n[h]] = h
            }
        } catch (t) {
            s = !0, u = t
        } finally {
            try {
                !o && f.return && f.return()
            } finally {
                if (s) throw u
            }
        }
        var c = {
            LEFT_MOUSE: 1,
            UP: 2,
            LEFT: 4,
            DOWN: 8,
            RIGHT: 16,
            GOD_MODE: 32,
            SUICIDE: 64,
            RIGHT_MOUSE: 128,
            INSTANT_UPGRADE: 256,
            USE_GAMEPAD: 512,
            SWITCH_CLASS: 1024,
            TRUE_CONST: 2048
        },
            l = {
                UP: c.UP,
                RIGHT_UP: c.RIGHT | c.UP,
                RIGHT: c.RIGHT,
                RIGHT_DOWN: c.RIGHT | c.DOWN,
                DOWN: c.DOWN,
                LEFT_DOWN: c.LEFT | c.DOWN,
                LEFT: c.LEFT,
                LEFT_UP: c.LEFT | c.UP
            },
            p = (_createClass(y, [{
                key: "get",
                value: function(t) {
                    return this.lookup[t]
                }
            }, {
                key: "find",
                value: function(t) {
                    if (!this.reverse.hasOwnProperty(t)) throw t;
                    return this.reverse[t]
                }
            }]), y);

        function y() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            _classCallCheck(this, y);
            var r = "function" === e ? e : function(t) {
                return t ^ e
            };
            this.table = t, this.length = t.length, this.lookup = {}, this.reverse = {};
            for (var n = 0; n < t.length; n++) this.lookup[r(n)] = t[n], this.reverse[t[n]] = r(n)
        }
        var d = new p([8, 7, 6, 5, 4, 3, 2, 1], 0),
            v = new p(["Tank", "Twin", "Triplet", "Triple Shot", "Quad Tank", "Octo Tank", "Sniper", "Machine Gun", "Flank Guard", "Tri-Angle", "Destroyer", "Overseer", "Overlord", "Twin-Flank", "Penta Shot", "Assassin", "Arena Closer", "Necromancer", "Triple Twin", "Hunter", "Gunner", "Stalker", "Ranger", "Booster", "Fighter", "Hybrid", "Manager", "Mothership", "Predator", "Sprayer", "", "Trapper", "Gunner Trapper", "Overtrapper", "Mega Trapper", "Tri-Trapper", "Smasher", "", "Landmine", "Auto Gunner", "Auto 5", "Auto 3", "Spread Shot", "Streamliner", "Auto Trapper", "Dominator", "Dominator", "Dominator", "Battleship", "Annihilator", "Auto Smasher", "Spike", "Factory", "", "Skimmer", "Rocketeer"], 0);
        e.exports = {
            updateKinds: {
                CREATE: 1,
                UPDATE: 2
            },
            inPacketKinds: {
                UPDATE: 0,
                UPDATE_COMPRESSED: 2,
                IGNORE: -1
            },
            entityTypes: {
                UNKNOWN: "UNKNOWN",
                TANK: "TANK",
                BULLET: "BULLET",
                SHAPE: "SHAPE",
                BOT: "BOT",
                OWN_TANK: "OWN_TANK",
                LEADER_TANK: "LEADER_TANK",
                MASTER_TANK: "MASTER_TANK"
            },
            fieldIdToType: {
                1: "vi",
                2: "vi",
                3: "vi",
                23: "float",
                66: "float",
                18: "float",
                44: "float",
                64: "float",
                65: "float",
                29: "float",
                19: "vu",
                57: "vu",
                20: "float",
                35: "float",
                37: "float",
                28: "float",
                25: "vi",
                26: "float",
                27: "float",
                31: "float",
                38: "vi",
                39: "float",
                59: "float",
                63: "vu",
                67: "vu",
                53: "vu"
            },
            fieldIdToName: i,
            tankTable: v,
            statTable: d,
            outPacketKinds: {
                INIT: 0,
                INPUT: 1,
                SPAWN: 2,
                UPDATE_STAT: 3,
                UPDATE_TANK: 4,
                HEARTBEAT: 5,
                UNKNOWN: 6,
                EXT_FOUND: 7,
                CLEAR_DEATH: 8,
                TAKE_TANK: 9
            },
            keyInput: c,
            directionAccelerations: {
                UP: {
                    x: 0,
                    y: -1
                },
                RIGHT_UP: {
                    x: .707,
                    y: -.707
                },
                RIGHT: {
                    x: 1,
                    y: 0
                },
                RIGHT_DOWN: {
                    x: .707,
                    y: .707
                },
                DOWN: {
                    x: 0,
                    y: 1
                },
                LEFT_DOWN: {
                    x: -.707,
                    y: .707
                },
                LEFT: {
                    x: -1,
                    y: 0
                },
                LEFT_UP: {
                    x: -.707,
                    y: -.707
                }
            },
            directionKeys: l
        }
    }, {}],
    5: [function(a, f, t) {
        (function(r) {
            var e = a("./data.js"),
                t = new ArrayBuffer(4),
                n = new Uint8Array(t),
                i = new Uint32Array(t),
                o = new Float32Array(t),
                s = (_createClass(u, [{
                    key: "i8",
                    value: function(t) {
                        return this.buffer[this.length] = t, this.length += 1, this
                    }
                }, {
                    key: "i32",
                    value: function(t) {
                        return i[0] = t, this.buffer.set(n, this.length), this.length += 4, this
                    }
                }, {
                    key: "float",
                    value: function(t) {
                        return o[0] = t, this.buffer.set(n, this.length), this.length += 4, this
                    }
                }, {
                    key: "vu",
                    value: function(t) {
                        do {
                            var e = t;
                            (t >>>= 7) && (e |= 128), this.buffer[this.length++] = e
                        } while (t);
                        return this
                    }
                }, {
                    key: "vi",
                    value: function(t) {
                        var e = (2147483648 & t) >>> 31;
                        e && (t = ~t);
                        var r = t << 1 | e;
                        return this.vu(r), this
                    }
                }, {
                    key: "vf",
                    value: function(t) {
                        return o[0] = t, this.vi(function(t) {
                            return (255 & t) << 24 | (65280 & t) << 8 | t >> 8 & 65280 | t >> 24 & 255
                        }(i[0])), this
                    }
                }, {
                    key: "string",
                    value: function(t) {
                        if (t) {
                            var e = new Uint8Array(r.from(t));
                            this.buffer.set(e, this.length), this.length += e.length
                        }
                        return this.buffer[this.length++] = 0, this
                    }
                }, {
                    key: "out",
                    value: function() {
                        return this.buffer.buffer.slice(0, this.length)
                    }
                }, {
                    key: "dump",
                    value: function() {
                        return Array.from(this.buffer.subarray(0, this.length)).map(function(t) {
                            return t.toString(16).padStart(2, 0)
                        }).join(" ")
                    }
                }, {
                    key: "encodeOutbound",
                    value: function(t) {
                        switch (t.kind) {
                            case e.outPacketKinds.INIT:
                                return this.encodeInit(t);
                            case e.outPacketKinds.INPUT:
                                return this.encodeInput(t);
                            case e.outPacketKinds.SPAWN:
                                return this.encodeSpawn(t);
                            case e.outPacketKinds.UPDATE_STAT:
                                return this.encodeUpdateStat(t);
                            case e.outPacketKinds.UPDATE_TANK:
                                return this.encodeUpdateTank(t);
                            case e.outPacketKinds.EXT_FOUND:
                                return !1;
                            default:
                                return t.data ? t.data : this.vu(t.kind).out()
                        }
                    }
                }, {
                    key: "encodeInput",
                    value: function(t) {
                        return this.vu(t.kind).vu(t.key).vf(t.x).vf(t.y).out()
                    }
                }, {
                    key: "encodeInit",
                    value: function(t) {
                        return this.vu(t.kind).string(t.build).string(t.unk1).string(t.partyId).string(t.unk2).out()
                    }
                }, {
                    key: "encodeSpawn",
                    value: function(t) {
                        return this.vu(t.kind).string(t.name).out()
                    }
                }, {
                    key: "encodeUpdateStat",
                    value: function(t) {
                        return this.vu(t.kind).vu(t.statId).vu(t.upto).out()
                    }
                }, {
                    key: "encodeUpdateTank",
                    value: function(t) {
                        return this.vu(t.kind).vu(t.tankId).out()
                    }
                }]), u);

            function u() {
                _classCallCheck(this, u), this.length = 0, this.buffer = new Uint8Array(4096)
            }
            f.exports = {
                Encoder: s
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./data.js": 4,
        buffer: 2
    }],
    6: [function(t, e, r) {
        e.exports = {
            //サーバー接続時に実行
            inject: function(n, i) {
                var o = new Set,
                    s = window.WebSocket.prototype.send;
                return window.WebSocket.prototype.send = function(t) {
                    var e = new Uint8Array(t);
                    if (!o.has(this)) {
                        console.log("新しいwebsocketを使用しています。"), o.add(this);
                        var r = this.onmessage;
                        this.onmessage = function(t) {
                            if (n && (t.data = n.call(this, new Uint8Array(t.data))), t.data) return r.call(this, t)
                        }
                    }
                    try {
                        i && (e = i.call(this, e))
                    } catch (t) {
                        console.log(t)
                    }
                    if (e) return s.call(this, e)
                }, console.log("injection ok"), s
            }
        }
    }, {}],
    7: [function(t, e, r) {
        var n = t("./data.js"),
            i = new ArrayBuffer(4),
            o = new Uint8Array(i),
            s = new Uint32Array(i),
            u = new Float32Array(i),
            a = (_createClass(f, [{
                key: "i8",
                value: function() {
                    var t = this.buffer[this.at++];
                    return this.assertNotOOB(), t
                }
            }, {
                key: "endianSwap",
                value: function(t) {
                    //console.log(t);
                    return (255 & t) << 24 | (65280 & t) << 8 | t >> 8 & 65280 | t >> 24 & 255
                }
            }, {
                key: "i32",
                value: function() {
                    return o.set(this.buffer.subarray(this.at, this.at += 4)), this.assertNotOOB(), s[0]
                }
            }, {
                key: "float",
                value: function() {
                    return o.set(this.buffer.subarray(this.at, this.at += 4)), this.assertNotOOB(), u[0]
                }
            }, {
                key: "vleft",
                value: function() {
                    this.at--;
                    for (var t = 1; 128 & this.buffer[this.at - 1] && t < 4;) this.at--, t++
                }
            }, {
                key: "vu",
                value: function() {
                    for (var t = 0, e = 0; 128 & this.buffer[this.at];) t |= (127 & this.buffer[this.at++]) << e, e += 7;
                    return t |= this.buffer[this.at++] << e, this.assertNotOOB(), t
                }
            }, {
                key: "vi",
                value: function() {
                    var t = this.vu(),
                        e = 1 & t;
                        //console.log();
                    return t >>= 1, e && (t = ~t), this.assertNotOOB(), t
                }
            }, {
                key: "vf",
                value: function() {
                    //console.log(u[0]);
                    return s[0] = this.endianSwap(this.vi()), this.assertNotOOB(), u[0]
                }
            }, {
                key: "string",
                value: function() {
                    for (var t = ""; this.buffer[this.at];) t += String.fromCharCode(this.buffer[this.at]), this.at++;
                    return this.at++, this.assertNotOOB(), t
                }
            }, {
                key: "getByteString",
                value: function(t, e) {
                    for (var r = ""; t < e && t < this.buffer.length;) {
                        var n = this.buffer[t];
                        r += (n < 16 ? "0" : "") + n.toString(16) + " ", t++
                    }
                    return r
                }
            }, {
                key: "isEOF",
                value: function() {
                    return this.at === this.buffer.length
                }
            }, {
                key: "raiseUnexpected",
                value: function(t, e) {
                    var r = "Error at pos " + this.at + ": " + t;
                    "tolerate" !== e && console.log(r);
                    var n = new Error(r);
                    throw n.payload = e, n
                }
            }, {
                key: "assertEOF",
                value: function() {
                    this.isEOF() || this.raiseUnexpected("Expected end of packet.")
                }
            }, {
                key: "assertNotOOB",
                value: function() {
                    this.at > this.buffer.length && this.raiseUnexpected("Unexpected end of packet.")
                }
            }, {
                key: "assertNoIntersectingKeys",
                value: function(t, e) {}
            }, {
                key: "parseOutbound",
                value: function() {
                    var t = this.i8();
                    //var ddd = this.i8();
                    //console.log(t);
                    switch (t) {
                        //0
                        case n.outPacketKinds.INIT:
                            return this.parseInit();
                        //1
                        case n.outPacketKinds.INPUT:
                            //マウス座標
                            return this.parseInput();
                        //2
                        case n.outPacketKinds.SPAWN:
                            return this.parseSpawn();
                        //3
                        case n.outPacketKinds.UPDATE_STAT:
                            return this.parseUpdateStat();
                        //4
                        case n.outPacketKinds.UPDATE_TANK:
                            return this.parseUpdateTank();
                        default:
                            //偽データ
                            return {
                                kind: t, data: this.buffer
                            }
                    }
                }
            },
            {

            },


            {
                //ここマウスの座標
                key: "parseInput",
                value:  function() {
                    var t = {
                        kind: n.outPacketKinds.INPUT,
                        key: this.vu(),
                        x: this.vf(),
                        y: this.vf()
                        };

                    //console.log(typeof this.vf());
                    return this.isEOF() || console.log("Unexpected end of output 'input' packet."), this.assertEOF(), t
                }
            }, {
                //接続時にどのような形で入ったか？　buildのurlとパーティーIDとかのデータ
                key: "parseInit",
                value: function() {
                    if (this.isEOF()) return {
                        kind: n.outPacketKinds.INIT
                    };
                    var t = {
                        kind: n.outPacketKinds.INIT,
                        build: this.string(),
                        unk1: this.string(),
                        partyId: this.string(),
                        unk2: this.string()
                    };
                    //console.log(t);
                    return this.assertEOF(), t
                }
            }, {
                //リスポーンとか新規とかで参加するときの名前
                key: "parseSpawn",
                value: function() {
                    var t = {
                        kind: n.outPacketKinds.SPAWN,
                        name: this.string()
                    };
                    //console.log(t);
                    return this.assertEOF(), t
                }
            }, {
                //ステータス変更時、何にどのぐらい振ったか　statIdが各ステータス　uptoは基本1
                key: "parseUpdateStat",
                value: function() {
                    var t = {
                        kind: n.outPacketKinds.UPDATE_STAT,
                        statId: this.vu(),
                        upto: this.vu()
                    };
                    //console.log(t);
                    return this.assertEOF(), t
                }
            }, {
                //タンク変更時　何にタンクを進化したのか
                key: "parseUpdateTank",
                value: function() {
                    var t = {
                        kind: n.outPacketKinds.UPDATE_TANK,
                        tankId: this.vu()
                    };
                    //console.log(t);
                    return this.assertEOF(), t
                }
            }, {
                key: "parseInbound",
                value: function() {
                    var t = this.i8();
                    //console.log(t);
                    return t === n.inPacketKinds.UPDATE ? this.buffer.length < 2 ? this.ignorePacket("?") : this.updatePacket() : t === n.inPacketKinds.UPDATE_COMPRESSED ? this.updateCompressedPacket() : this.ignorePacket(t)
                }
            }, {
                key: "updatePacket",
                value: function() {
                    var t = this.vu(),
                        e = {
                            kind: n.inPacketKinds.UPDATE,
                            updateId: t,
                            deletes: this.multiEntityDeletes(),
                            upcreates: this.multiEntityUpcreates()
                        };
                        //console.log(e);
                    return this.assertEOF(), e
                }
            }, {
                key: "updateCompressedPacket",
                value: function() {
                    this.raiseUnexpected("UPDATE_COMPRESSED not supported", "compressed")
                }
            }, {
                key: "ignorePacket",
                value: function(t) {
                    return {
                        kind: n.inPacketKinds.IGNORE,
                        ignore_reason: t
                    }
                }
            }, {
                key: "entityId",
                value: function() {
                    var t = this.vu() + "#" + this.vu();
                    return this.curEntityId = t
                }
            }, {
                key: "isMatch",
                value: function(t) {
                    if (this.at + t.length > this.buffer.length) return !1;
                    for (var e = 0; e < t.length; e++)
                        if (this.buffer[e + this.at] !== t[e]) return !1;
                    return !0
                }
            }, {
                key: "moveToNextCreate",
                value: function() {
                    for (; ++this.at < this.buffer.length;)
                        if (this.entityCreateTypeId() !== n.entityTypes.UNKNOWN && 0 === this.buffer[this.at - 1] && 1 === this.buffer[this.at - 2]) return this.vleft(), this.vleft(), this.vleft(), void this.vleft();
                    this.assertEOF()
                }
            }, {
                key: "entityCreateTypeId",
                value: function() {
                    return this.isMatch([2, 0, 5, 3, 0, 3]) ? n.entityTypes.TANK : this.isMatch([2, 0, 7, 0, 1]) ? n.entityTypes.BULLET : this.isMatch([2, 0, 5, 3, 0, 1]) ? n.entityTypes.SHAPE : n.entityTypes.UNKNOWN
                }
            }, {
                key: "fieldIdSpec",
                value: function() {
                    return 1 ^ this.vu()
                }
            }, {
                key: "updateKind",
                value: function() {
                    var t = this.vu(),
                        e = this.vu();
                    return 1 === t && 0 === e ? n.updateKinds.CREATE : 0 === t && 1 === e ? n.updateKinds.UPDATE : (console.log(), void this.raiseUnexpected("Unknown update type: " + t + " " + e, 9 === e ? "tolerate" : null))
                }
            }, {
                key: "multiEntityDeletes",
                value: function() {
                    for (var t = this.vu(), e = [], r = 0; r < t; r++) e.push(this.entityId());
                    return e
                }
            }, {
                key: "multiEntityUpcreates",
                value: function() {
                    for (var t = this.vu(), e = [], r = 0; r < t; r++) {
                        if (this.isEOF()) {
                            console.log("unexpected eof...");
                            break
                        }
                        e.push(this.entityUpcreate())
                    }
                    return this.assertEOF(), e
                }
            }, {
                key: "entityUpcreate",
                value: function() {
                    var t = this.entityId(),
                        e = this.updateKind(),
                        r = {
                            entityId: t,
                            updateKind: e
                        };
                    return e === n.updateKinds.CREATE ? Object.assign(r, this.entityCreate()) : e === n.updateKinds.UPDATE ? Object.assign(r, this.entityUpdate()) : this.raiseUnexpected("Internal error"), r
                }
            }, {
                key: "parseField",
                value: function(t) {
                    n.fieldIdToType.hasOwnProperty(t) || this.raiseUnexpected("Unknown property field_id: " + t + " @ " + this.curEntityId, t);
                    var e = n.fieldIdToType[t];
                    if (!(e in this)) return this.raiseUnexpected("Internal error: method to parse field_type " + field_name + " not implemented"), {};
                    var r = {};
                    return r[n.fieldIdToName.hasOwnProperty(t) ? n.fieldIdToName[t] : "unk_" + e + "_" + t] = this[e](), r
                }
            }, {
                key: "entityUpdate",
                value: function() {
                    for (var t = this.fieldIdSpec(), e = {};;) {
                        var r = this.parseField(t);
                        this.assertNoIntersectingKeys(e, r), Object.assign(e, r);
                        var n = this.fieldIdSpec();
                        if (0 === n) break;
                        t += n
                    }
                    return e
                }
            }, {
                key: "entityCreate",
                value: function() {
                    var t = this.entityCreateTypeId();
                    t === n.entityTypes.UNKNOWN && this.raiseUnexpected("Entity create: " + this.curEntityId + ", " + t + ".", "create");
                    var e = {
                        entityType: t
                    };
                    return this.moveToNextCreate(), e
                }
            }]), f);

        function f(t) {
            _classCallCheck(this, f), this.at = 0, this.buffer = new Uint8Array(t), this.curEntityId = ""
        }

        function h(t) {
            var e = new ArrayBuffer(t.length),
                r = new Uint8Array(e),
                n = 0,
                i = !0,
                o = !1,
                s = void 0;
            try {
                for (var u, a = t[Symbol.iterator](); !(i = (u = a.next()).done); i = !0) {
                    var f = u.value;
                    r[n++] = f
                }
            } catch (t) {
                o = !0, s = t
            } finally {
                try {
                    !i && a.return && a.return()
                } finally {
                    if (o) throw s
                }
            }
            return e
        }
        e.exports = {
            Parser: a,
            byteStringToBuffer: function(t) {
                var e = t.split(" "),
                    r = [],
                    n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, u = e[Symbol.iterator](); !(n = (s = u.next()).done); n = !0) {
                        var a = s.value;
                        r.push(parseInt(a, 16))
                    }
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return h(r)
            },
            bytesToBuffer: h
        }
    }, {
        "./data.js": 4
    }],
    8: [function(t, e, r) {
        var i = t("./data.js"),
            o = t("./parser.js").Parser,
            f = t("./encoder.js").Encoder,
            n = t("./injection.js").inject;

        function s(t, e) {
            var r = !0,
                n = !1,
                i = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                    var u = o.value,
                        a = new f;
                    h.call(t, a.encodeOutbound(u))
                }
            } catch (t) {
                n = !0, i = t
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (n) throw i
                }
            }
            return null
        }
        // ***  *** //
        var h = n(null, function(t) {
            var e = this;
            // ***  *** //
            window.sendPackets = function(t) {
                return s(e, t)
            };
            // *** マウス座標 *** //
            //parseOutbound
            var r = new o(t).parseOutbound();
            //console.log(t);
            if (r.kind == 1) {
                tx = r.x;
                ty = r.y;
            }


            // *** ƒƒjƒ…[‚Ì•`‰æ *** //
            var scriptBotFlag_dead_Get = GM_getValue("GM_deadFlag");
            info_container.innerHTML = `<p>(x,y) = (${tx},${ty})</p>`;
            // *** リスポーンしたときに実行 //
            if (r.kind != i.outPacketKinds.SPAWN) {
                window.isOn = 0;
                a = 0;
                u = 0;
            }
            /*
            if (r.kind === i.outPacketKinds.SPAWN && (window.isOn = !1), r.kind === i.outPacketKinds.UPDATE_TANK && console.log(r), r.kind !== i.outPacketKinds.INPUT) {
                return t;
            }
            */



            return t;
        })
        }, {
            "./data.js": 4,
            "./encoder.js": 5,
            "./injection.js": 6,
            "./parser.js": 7
        }]
}, {}, [8]);

//----------------------------- Diep MOD 2020 --------------------------------------
/* eslint-disable */
let diepCSS = GM_getResourceText("diepCSS");
GM_addStyle(diepCSS);
/* eslint-enable */

(function () {
    "use strict";

    let defaultConfig = {
        "hotkey": {
            "connectUI": "\t" // TAB
        },
        "gameModeName": {
            "ffa": "FFA",
            "survival": "Survival",
            "teams": "2TDM",
            "4teams": "4TDM",
            "dom": "Domination",
            "maze": "Maze",
            "tag": "Tag",
            "sandbox": "Sandbox"
        },
        "team": {
            "blue": [[0, 178, 225, 255], [76, 201, 234, 255]],
            "red": [[241, 78, 84, 255], [245, 131, 135, 255]],
            "green": [[0, 225, 110, 255], [76, 234, 153, 255]],
            "purple": [[191, 127, 245, 255], [210, 165, 248, 255]]
        },
        "settings": {
            "firstRunDisable": false
        },
        "script": {
            "currentServer": {},
            "debugging": false
        }
    };

    const isObject = (obj) => {
        return obj instanceof Object && obj.constructor === Object;
    };

    const dataStorage = {
        set (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get (key) {
            const value = localStorage.getItem(key);
            return value && JSON.parse(value);
        }
    };

    (function () {
        let privateConfig;
        unsafeWindow.Config = {};
        const proxify = (obj) => {
            for (const subkey in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, subkey)) {
                    unsafeWindow.Config[subkey] = new Proxy(obj[subkey], {
                        get (target, propKey, receiver) {
                            if (propKey in target) {
                                return Reflect.get(target, propKey, receiver);
                            }
                            throw new ReferenceError("Unknown property: " + propKey);
                        },
                        set (target, propKey, value, receiver) {
                            target[propKey] = value;
                            dataStorage.set("spadepublic", obj);
                            return Reflect.set(target, propKey, value, receiver);
                        }
                    });
                }
            }
        };

        if (dataStorage.get("spadepublic")) {
            privateConfig = dataStorage.get("spadepublic");
        } else {
            dataStorage.set("spadepublic", defaultConfig);
            privateConfig = defaultConfig;
        }

        proxify(privateConfig);

        unsafeWindow.resetConfig = () => {
            dataStorage.set("spadepublic", defaultConfig);
            unsafeWindow.Config = {};
            privateConfig = defaultConfig;
            proxify(privateConfig);
        };
    })();

    let playing = () => {
        return false;
    };

    $(window).on("load", () => {
        (function setBack () {
            try {
                if (unsafeWindow.input.should_prevent_unload) {
                    playing = () => {
                        return !!unsafeWindow.input.should_prevent_unload();
                    };
                }
            } catch (error) {
                setTimeout(() => {
                    setBack();
                }, 100);
            }
        })();
    });

    let canvas, ctx;
    $(() => {
        canvas = $("#canvas").get(0);
        ctx = canvas.getContext("2d");
    });

    HTMLElement.prototype.focus = () => {};
    HTMLElement.prototype.blur = () => {};

    const capitalizeFirstLetter = (string) => {
        return string && string[0].toUpperCase() + string.slice(1);
    };

    const createEl = (elObj, parent) => {
        let element;
        if (typeof elObj === "string") {
            element = $(document.createTextNode(elObj));
        } else {
            element = $(`<${elObj.node}>`);
            if (elObj.att) {
                let attributes = elObj.att;
                for (let key in attributes) {
                    if (attributes.hasOwnProperty(key)) {
                        if (key.charAt(0) === "@") {
                            element.attr(key.substring(1), attributes[key]);
                        } else {
                            element.text(attributes[key]);
                        }
                    }
                }
            }
            if (elObj.evl) {
                element.on(elObj.evl.type, elObj.evl.f);
            }
            if (elObj.child) {
                elObj.child.forEach((node) => {
                    createEl(node, element.get(0));
                });
            }
        }
        if (parent) {
            parent.append(element.get(0));
        }
        return element;
    };

    const scriptBody = $("<body>").get(0);
    createEl({
        node: "div", att: {"@id": "main", "@class": "base"},
        child: [ {
            node: "div", att: {"@class": "top"},
            child: [ {
                node: "h2", att: {"@class": "title"},
                child: [ {
                    node: "span", att: {"@class": "symbol", textContent: ""}
                }, " DiepMod Server Selector ", {
                    node: "span", att: {"@class": "symbol", textContent: ""}
                }, {
                } ]
            }, {
                node: "span", att: {"@class": "menu"},
                child: [ {
                    node: "a", att: {"@class": "menuButton close", textContent: "X"},
                    evl: {
                        type: "click",
                        f: () => {
                            $(".appear").removeClass("appear");
                        }}
                } ]
            }]
        }, {
            node: "lable", att: {textContent: "Gamemode"},
            child: [ {
                node: "select", att: {"@id": "gamemode"}
            } ]
        }, {
            node: "lable", att: {textContent: "Server"},
            child: [ {
                node: "select", att: {"@id": "server"}
            } ]
        }, {
            node: "span", att: {"@id": "more", textContent: ""}
        }, {
            node: "div",
            child: [ {
                node: "button", att: {"@type": "button", "@id": "connect", "@class": "commandButton", textContent: "Connect"},
                evl: {
                    type: "click",
                    f: () => {
                        connectServer();
                        setTimeout(() => {
                            $(".appear").removeClass( "appear" );
                        }, 800);
                    }}
            }, {
                node: "button", att: {"@type": "button", "@id": "disconnect", "@class": "commandButton", textContent: "Disconnect"},
                evl: {
                    type: "click",
                    f: () => {
                        unsafeWindow.m28nOverride = false;
                        unsafeWindow.input.execute("lb_reconnect");
                    }}
            } ]
        }, {
            node: "p", att: {"@class": "ctag", textContent: ""},
            child: [ {
            } ]
        } ]
    }, scriptBody);

    $(() => {});

    $("body").after(scriptBody);

    /* jshint ignore:start */
    const fetchServer = async (mode, times, ids = []) => {
        const url = "https://api.n.m28.io";
        const $serverSelect = $("#server");
        const $moreButton = $("#more");
        $moreButton.addClass("spin");

        for (let i = 0; i < times; i++) {
            try {
                const response = await fetch(`${url}/endpoint/diepio-${mode}/findEach/`);
                const body = await response.json();
                if (body.hasOwnProperty("servers")) {
                    Object.entries(body.servers).forEach(([key, val]) => {
                        if (!ids.some((id) => {
                            return id === val.id;
                        })) {
                            ids.push(val.id);
                            const txt = key.replace(/(linode-|vultr-)/, "") + ` - ${val.id.toUpperCase()}`;
                            $serverSelect.append($("<option>", {
                                "value": JSON.stringify(val),
                                "text": capitalizeFirstLetter(txt)
                            }));
                        }
                    });
                }
            } catch (err) {
                console.error(err);
            }
        }
        $("#server option").detach().sort((a, b) => {
            a = $(a);
            b = $(b);
            return ((a.text() > b.text()) ?
                1 :
                (a.text() < b.text()) ?
                    -1 :
                    0);
        }).appendTo($serverSelect).filter(":first").attr("selected", true);
        $moreButton.on("click", () => {
            fetchServer(mode, 4, ids);
        }).removeClass("spin");
    };
    /* jshint ignore:end */

    $(() => {
        const $gamemode = $("#gamemode");
        Object.entries(unsafeWindow.Config.gameModeName).forEach(([key, val]) => {
            $gamemode.append($("<option>", {
                "value": key,
                "text": val
            }));
        });
        $gamemode.change((event) => {
            $("#server").empty();
            fetchServer($(event.currentTarget).val(), 8, []);
        }).trigger("change");
    });

    $(() => {
        unsafeWindow.m28n.findServerPreference = (endpoint, options, cb) => {
            if (unsafeWindow.m28nOverride)
                options(null, [JSON.parse($( "#server option:selected" ).val())]);
            if (typeof options == "function") {
                cb = options;
                options = {};
            }
            unsafeWindow.m28n.findServers(endpoint, (err, r) => {
                if (err)
                    return cb(err);
                var availableRegions = [];
                for (var region in r.servers) {
                    availableRegions.push(region);
                }
                if (availableRegions.length === 0) {
                    cb("Couldn't find any servers in any region");
                    return;
                }
                if (availableRegions.length === 1) {
                    for (var region in r.servers) {
                        cb(null, [r.servers[region]]);
                        return;
                    }
                }
                unsafeWindow.m28n.findRegionPreference(availableRegions, options, (err, regionList) => {
                    if (err)
                        return cb(err);
                    var serverList = regionList.map((region) => {
                        return r.servers[region];
                    });
                    cb(null, serverList);
                });
            });
        };
    });

    const connectServer = () => {
        if ($("#server option:selected").length === 1) {
            const $autojoin = $("#autojoin");
            const $connect = $("#connect");

            let Observer = new MutationObserver(mutation => {
                mutation.forEach(mutation => {
                    if (mutation.target.style.display === "block") {
                        if ($autojoin.prop("checked")) {
                            const sequence = ["keydown", "keyup"];
                            sequence.forEach(event => {
                                $(canvas).trigger($.Event(event, {
                                    "keyCode": "\r".charCodeAt(0)
                                }));
                            });
                            $(".appear").removeClass("appear");
                        }
                        $connect.removeClass("connecting");
                    } else if (mutation.target.style.display === "none") {
                        if (playing()) {
                            Observer.disconnect();
                        }
                        unsafeWindow.m28nOverride = false;
                    }
                });
            });
            $connect.addClass("connecting");
            unsafeWindow.m28nOverride = true;
            unsafeWindow.input.execute("lb_reconnect");
            Observer.observe($("#textInputContainer").get(0), {
                "attributes": true,
                "attributeFilter": ["style"]
            });
        }
    };

    const WebSocketProxy = new Proxy(unsafeWindow.WebSocket, {
        construct (Target, args) {
            const instance = new Target(...args);

            const messageHandler = (event) => {
                const buffer = new DataView(event.data);
                const opcode = buffer.getUint8(0);
                switch (opcode) {
                case 4:
                    if (typeof unsafeWindow.Config.script.currentServer === "object") {
                        const decoded = new TextDecoder("utf-8").decode(event.data);
                        unsafeWindow.Config.script.currentServer = (/\W*(\w+).?((linode|)-(\w+))/).exec(decoded);
                        unsafeWindow.Config.script.currentServer[4] = capitalizeFirstLetter(unsafeWindow.Config.script.currentServer[4]);
                    }
                    break;
                default:
                    break;
                }
            };

            instance.addEventListener("message", messageHandler);
            return instance;
        }
    });

    unsafeWindow.WebSocket = WebSocketProxy;

    const drawServer = () => {
        const x = window.innerWidth * window.devicePixelRatio / 2;
        const y = window.innerHeight * window.devicePixelRatio * 0.575;
        if (unsafeWindow.Config.script.currentServer.length === 5) {
            ctx.textAlign = "center";
            ctx.font = "25px Ubuntu";
            ctx.lineWidth = 5;
            ctx.strokeStyle = "rgba(0, 0, 0, 1)";
            ctx.strokeText("Server:", x, y);
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fillText("Server:", x, y);

            ctx.font = "35px Ubuntu";
            ctx.lineWidth = 5;
            ctx.strokeStyle = "rgba(0, 0, 0, 1)";
            ctx.strokeText(unsafeWindow.Config.script.currentServer[2], x, y + 45);
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fillText(unsafeWindow.Config.script.currentServer[2], x, y + 45);
        }
    };

    unsafeWindow.requestAnimFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    $(window).on("load", function animate () {
        if ($("#textInputContainer").css("display") === "block" && !playing()) {
            drawServer();
        }
        unsafeWindow.requestAnimFrame(animate);
    });

    const handleKeypress = (event) => {
        const key = String.fromCharCode(event.keyCode);
        switch (key) {
        case unsafeWindow.Config.hotkey.connectUI:
            event.preventDefault();
            event.stopPropagation();
            $("#main").toggleClass("appear");
            break;
        }
    };

    $(document).keydown((event) => {
        handleKeypress(event);
    });

})();






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function(){//info
    if(window.updateInfo) return;


    var info = {};
    var info_container = document.createElement("div");
    info_container.style.position = "fixed";
    info_container.style.color = "white";
    info_container.style["pointer-events"] = "none";
    document.body.appendChild(info_container);

    function toggle_info_container(e){
        if(e.key == "i"){
            info_container.style.display = info_container.style.display=="block" ? "none" : "block";
        }
    }
    window.addEventListener("keyup", toggle_info_container);

    window.updateInfo = function(key, value){
        if(!value) delete info[key];
        else info[key] = value;
        var s = "";
        for(var _key in info){
            s += info[_key] + "\n";
        }
        info_container.innerText = s;
    };
})();


(function(){
    var cycleRate = 0.003125; // ms^-1
    var maxAngle = Math.PI * 45 / 180;
    var NCANNON = 3;
    var angleUnit = maxAngle / (NCANNON - 1);

    var tankData = [
        {name: "Tri-angle", cycleRate: 0.003095, maxAngle: Math.PI * 135 / 180, NCANNON: 2},
        {name: "Penta", cycleRate: 0.003095, maxAngle: Math.PI * 45 / 180, NCANNON: 3},
        {name: "SpreadShot", cycleRate: 0.001515, maxAngle: Math.PI * 75 / 180, NCANNON: 6},
        {name: "Octo", cycleRate: 0.003095, maxAngle: Math.PI * 45 / 180, NCANNON: 2},
        {name: "GunnerTrapper",cycleRate: 0.015, maxAngle: Math.PI, NCANNON: 2},
        {name: "TripleTwin", cycleRate: 0.003125, maxAngle: Math.PI * 180 / 180, NCANNON: 2},
        {name: "Streamliner", cycleRate: 0.0625, maxAngle: Math.PI * 15 / 180, NCANNON: 3},
    ];
    var tankIndex = 0;

    var measuring = false;

    var effective = false;
    var frameRequest;

    var canvas = window.document.getElementById("canvas");

    var mouseX;
    var mouseY;
    var a = 0;
    var startA = 0;
    var artificialMouseMove = false;

    var disabled = false;

    function onMouseDown(e){
        if(e.button == 2){
            if(!effective){
                startA = a - 50;
                mouseX = e.clientX;
                mouseY = e.clientY;
                canvas.dispatchEvent(new MouseEvent("mousedown", {clientX: mouseX, clientY: mouseY}));
            }
            effective = true;
        }
    }

    function onMouseUp(e){
        if(e.button == 2){
            if(effective){
                canvas.dispatchEvent(new MouseEvent("mouseup", {clientX: mouseX, clientY: mouseY}));
            }
            effective = false;
        }
    }

    function onMouseMove(e){
        if(effective){
            if(!artificialMouseMove){
                e.stopPropagation();
                mouseX = e.clientX;
                mouseY = e.clientY;
            }
        }else{
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    }

    function update(_a){
        frameRequest = window.requestAnimationFrame(update);
        a = _a;

        if(effective){
            var da = a - startA;
            var state = Math.floor(cycleRate * da * NCANNON) % (NCANNON * 2);
            var state1 = state % NCANNON;
            var state2 = Math.floor(state / NCANNON);
            var angle = angleUnit * state1 * (state1 % 2 == state2 ? 1 : -1);

            var cx = window.innerWidth / 2;
            var cy = window.innerHeight / 2;
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);

            var x = mouseX - cx;
            var y = mouseY - cy;
            var _x = cos * x - sin * y;
            var _y = sin * x + cos * y;
            x = _x + cx;
            y = _y + cy;

            artificialMouseMove = true;
            canvas.dispatchEvent(new MouseEvent("mousemove", {clientX: x, clientY: y}));
            artificialMouseMove = false;
        }
    }

    function onKeyUp(e){
        if(e.key == "Q"){
            disabled = !disabled;
            if(disabled){
                if(measuring){
                    cycleRate = 1 / measuring.terminate();
                    measuring = false;
                } else stop();
            }else start();
            window.updateInfo && window.updateInfo("off", disabled ? "Disabled." : null);
            return;
        }

        if(disabled) return;

        if(e.key == "R"){
            nextTank();
        }
    }
    function nextTank(){
        changeTank((tankIndex + 1) % tankData.length);
    }
    function changeTank(index){
        var data = tankData[index];
        tankIndex = index;

        cycleRate = data.cycleRate; // ms^-1
        maxAngle = data.maxAngle;
        NCANNON = data.NCANNON;
        angleUnit = maxAngle / (NCANNON - 1);
        window.updateInfo && window.updateInfo("changeTank", "Tank: " + data.name);
    }

    function init(){
        window.addEventListener("keyup", onKeyUp);
        start();
        changeTank(0);
    }

    function start(){
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mousemove", onMouseMove, true);
        frameRequest = window.requestAnimationFrame(update);
    }

    function stop(){
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("mousemove", onMouseMove, true);
        window.cancelAnimationFrame(frameRequest);
        effective = false;
    }


    init();

})();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//asdasd add line here

  var disabled = false;
   var aimLine = document.createElement("div");
   var centerX;
   var centerY;
   var lineTog = 0;
   var mouseX;
   var mouseY;
   var winX = document.documentElement.clientWidth;
   var winY = document.documentElement.clientHeight;
   var wDown = 0;
   aimresult = false;
   aimLine.setAttribute("id", "divLine");

   document.body.appendChild(createLine( 0, 0, 0, 0));
   aimLine = 0;
   
   function onKeyUp(e){

        if(e.key == "J"){
      // Line on
        aimresult = true;
        winX = document.documentElement.clientWidth;
        winY = document.documentElement.clientHeight;

            aimLine = document.getElementById("divLine");

         centerX = winX / 2;
         centerY = winY / 2;
         if(aimresult == true){
            document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
         }
        }
        if(e.key == "j"){
      // Line off
         aimresult = false;
         
         document.body.appendChild(createLine( 0, 0, 0, 0));
         
         aimLine = 0;
         
        }
         if(e.key == "w"){

        centerY = winY / 2;
        if(aimresult == true){
            document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
        }

        }
        if(e.key == "a"){

        centerX = winX / 2;
        if(aimresult == true){
            document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
        }
        }
        if(e.key == "s"){

        centerY = winY / 2;
        if(aimresult == true){
            document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
        }

        }
        if(e.key == "d"){

        centerX = winX / 2;
        if(aimresult == true){
            document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
        }
        }

   }

   function onKeyDown(e){
        if(e.key == "w"){
        centerY = ((winY / 2) - (winY / 20));
            if(aimresult == true){
                document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
            }

        }

        if(e.key == "a"){
        centerX = ((winX / 2) - (winX / 40));
            if(aimresult == true){
                document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
            }

        }
        if(e.key == "s"){


        centerY = ((winY / 2) + (winY / 20));
            if(aimresult == true){
                document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
            }


        }
        if(e.key == "d"){
        centerX = ((winX / 2) + (winX / 40));
            if(aimresult == true){
                document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
            }


        }


   }




function createLineElement(x, y, length, angle) {

    var styles = 'border: 1px dashed #eb8f34; '
               + 'width: ' + length + 'px; '
               + 'height: 0px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '
               + '-ms-transform: rotate(' + angle + 'rad); '
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    aimLine.setAttribute('style', styles);
    return aimLine;
}


function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);
    return createLineElement(x, y, c, alpha);

  }



    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {

        if (lineTog = true){
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
//       // Use event.pageX / event.pageY here

               mouseX = event.pageX;
               mouseY = event.pageY;
               if(aimresult == true){
                    document.body.appendChild(createLine(centerX, centerY, mouseX-5, mouseY+5));
               }


       }
    }


   window.addEventListener("keyup", onKeyUp);
   window.addEventListener("keydown", onKeyDown);

//asdasd
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // *** 変数宣言 *** //

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var diepModMenu = document.createElement('div');
    var diepModConsole = "";
    var diepModCommandError = true;
    var lineGen = document.createElement('div');

    // *** 初期化 *** //
    document.title = ( 'DiepMod' );
    styleInit();
    jsInit();
    bodyInit();

    // *** CSSの初期化 *** //
    function styleInit() {
        addGlobalStyle(`div::-webkit-scrollbar{width: 8px;} div::-webkit-scrollbar-track{background: #FFFFFFEE; border: none; border-radius: 10px; box-shadow: inset 0 0 2px #ffc87a55;}div::-webkit-scrollbar-thumb{background: #ffc87a; border-radius: 10px; box-shadow: none;}`);
        addGlobalStyle(`.diepMod-menu{position:absolute; top:55px; left:-770px; padding: 0.5em 1em; margin: 2em 0; width: 400px; background: #FFFFFFEE; border: solid 0px #0082A155; border-radius: 0px;
                        margin: 10px; padding: 10px; line-height: 1.3; overflow: auto; text-align: left; width: 750px; height: 300px;
                        transition-duration: 0.1s;} .diepMod-menu:hover{position:absolute; left:-20px;}`);
        addGlobalStyle(`.diepMod-pretitle{font-size: 34px;}`);
        addGlobalStyle(`.diepMod-subtitle{font-size: 19px;}`);
        addGlobalStyle(`.diepMod-description{font-size: 16px;}`);
        addGlobalStyle(`.diepMod-warning{font-size: 16px; color:#ff9999}`);
        addGlobalStyle(`a {text-decoration: none;} a.diepMod-url:link{color:#FFFFFF} a.diepMod-url:visited{color:#FFFFFF;} a.diepMod-url:hover{color:#ffc87a;text-decoration: underline;} a.diepMod-url:active{color:#FFE66C;}`);
        addGlobalStyle(`.diepHack-hr{position: relative; height: 1px; border-width: 0; background-image: -webkit-linear-gradient(left, transparent 0%,#00B2E1 50%,transparent 100%); background-image: linear-gradient(90deg, transparent 0%,#00B2E1 50%,transparent 100%);}`);
        addGlobalStyle(`.diepMod-Regen{font-size: 16px; color:#EFB28D}`);
        addGlobalStyle(`.diepMod-Health{font-size: 16px; color:#EC66EB}`);
        addGlobalStyle(`.diepMod-Bump{font-size: 16px; color:#9A66EB}`);
        addGlobalStyle(`.diepMod-Speed{font-size: 16px; color:#6D92ED}`);
        addGlobalStyle(`.diepMod-Pen{font-size: 16px; color:#F0D367}`);
        addGlobalStyle(`.diepMod-Damage{font-size: 16px; color:#F16869}`);
        addGlobalStyle(`.diepMod-Reload{font-size: 16px; color:#99EC69}`);
        addGlobalStyle(`.diepMod-Move{font-size: 16px; color:#6DECE9}`);
        addGlobalStyle(`.diepMod-Tanktype{font-size: 22px; color:#fc7f2b}`);
        addGlobalStyle(`.diepMod-Stack{font-size: 18px; color:#eb8f34}`);
        addGlobalStyle(`.diepMod-bigtitle{font-size: 22px;}`);
        addGlobalStyle(`.diepMod-tabInfo{font-size: 18px; color:#99ffcc}`);



        addGlobalStyle(`
                        a.diepMod-button {
                            display: inline-block;
                            margin: 15px 15px 0;
                            padding: .6em 1.1em;
                            font-size: 14px;
                            font-weight: bold;
                            text-decoration: none;
                            outline: none;
                            color: #FFFFFF;
                            text-align center;
                            background-color: #ffc87a;
                            border-radius: 32px;
                            -webkit-background-clip: padding-box;
                            background-clip: padding-box;
                            -webkit-box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #ffc87a;
                            box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #ffc87a;
                            border: none;
                            -webkit-transition: -webkit-box-shadow .3s;
                            transition: box-shadow .3s;
                            cursor: pointer
                        }
                        a.diepMod-button:hover, a.diepMod-button:focus {
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #ffc87a;
                            box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #ffc87a;
                                -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
                            transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
                            -webkit-animation: gelatine 0.5s 1;
                            animation: gelatine 0.5s 1;
                        }
                        a.diepMod-button-secondary {
                            background: #FFFFFF;
                            -webkit-box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #FFFFFF;
                            box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #FFFFFF;
                        }
                        a.diepMod-button-secondary:hover {
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                            box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                        }
                        a.diepMod-button:active, a.diepMod-button-secondary:active {
                            background: #FFFFFF;
                            -webkit-transition-duration: 0;
                            transition-duration: 0;
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                            box-shadow: 0 0 0 2px #ffc87a, 0 0 0 4px #FFFFFF;
                            color: #ffc87a;
                        }
                        @keyframes gelatine {
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                        }
                        @-webkit-keyframes gelatine {
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                       }
                `);
        function addGlobalStyle(css) {
            var head, style;
            head = document.getElementsByTagName('head')[0];
            if (!head) {
                return;
            }
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = css;
            head.appendChild(style);
        }
    }

    // *** JSの初期化 *** //
    function jsInit() {
        addGlobalJavaScript(`
            function achievementFlag(aflag){
                var achievementCode = JSON.parse('{"A::1ba4250a398116e7_1":"' + String(aflag) + '","A::1c00693fbf538316_1":"' + String(aflag) + '","A::22d84fdc78b1f1ae_1":"' + String(aflag) + '","A::22fd2ee6d05881d6_1":"' + String(aflag) + '","A::256245339c3742d2_1":"10000","A::2780b5743fe93789_1":"' + String(aflag) + '","A::300ddd6f1fb3d69d_1":"500","A::33e4cb47afd5602f_1":"10","A::3fd17b5d35c36670_1":"' + String(aflag) + '","A::4d545ac615beec40_1":"' + String(aflag) + '","A::4eebb78f4ee19cba_1":"' + String(aflag) + '","A::54084a4936c7e37_1":"' + String(aflag) + '","A::5613de303c7e06f0_1":"' + String(aflag) + '","A::5892e09831854ad2_1":"' + String(aflag) + '","A::5dbb422e510cec75_1":"' + String(aflag) + '","A::6502bcb56dfbc0e3_1":"' + String(aflag) + '","A::6520a970c68efb85_1":"' + String(aflag) + '","A::6d07f075d9877ab_1":"' + String(aflag) + '","A::6d671cfa6dceb09_1":"500","A::71c663fb258f5243_1":"' + String(aflag) + '","A::723c26b6a37fccbb_1":"100","A::76646f423e5d6bc4_1":"' + String(aflag) + '","A::8221180ec6d53232_1":"10000","A::87e48332e9161b3d_1":"' + String(aflag) + '","A::8abd923027114f9e_1":"1000","A::8b83f81f510fd136_1":"10","A::8b8fe153a4965c63_1":"' + String(aflag) + '","A::8eeec8c270ef92be_1":"' + String(aflag) + '","A::9898db9ff6d3c1b3_1":"' + String(aflag) + '","A::9953423e884422b6_1":"100","A::9f0edada2bd7cd6_1":"' + String(aflag) + '","A::a402fdb3f5cebf99_1":"' + String(aflag) + '","A::a81a738312c7705d_1":"' + String(aflag) + '","A::b8b3e7fd58ff6706_1":"' + String(aflag) + '","A::b95a9621ccccad3c_1":"' + String(aflag) + '","A::bb9188cddc9d5b1f_1":"100","A::bdf3e0a1c4ebcaee_1":"' + String(aflag) + '","A::cdf66074bb5ce7fa_1":"' + String(aflag) + '","A::d3e4829583362b48_1":"3000","A::d583013681f15fcc_1":"' + String(aflag) + '","A::d932ec7312510a14_1":"10","A::e1f4f3e6a5c9bacb_1":"' + String(aflag) + '","A::e6111736c85494e9_1":"' + String(aflag) + '","A::eb9792219de8f755_1":"' + String(aflag) + '","A::ecea90c4be06d999_1":"' + String(aflag) + '","A::eef89695be793c7f_1":"100","A::f3618c60205d7ded_1":"' + String(aflag) + '","A::f73016825baab042_1":"100","A::fc3b3faf73bae216_1":"' + String(aflag) + '","A::bae942e2191270e_1":"' + String(aflag) + '"}');
                Object.keys(achievementCode).forEach((k) => {localStorage.setItem(k, achievementCode[k])});
                location.reload(true);
            };
        `);
        function addGlobalJavaScript(js) {
            var head, script;
            head = document.getElementsByTagName('head')[0];
            if (!head) {
                return;
            }
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = js;
            head.appendChild(script);
        }
    }

    // *** HTMLの初期化 ***//
    function bodyInit() {


        document.getElementsByTagName('body')[0].appendChild(diepModMenu);
        diepModMenu.style = "position:absolute; top:55px; left:0px; font-family: Ubuntu; color: #FFFFFF; font-style: normal; font-variant: normal; text-shadow: black 2px 0px, black -2px 0px, black 0px -2px, black 0px 2px, black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px, black 1px 2px, black -1px 2px, black 1px -2px, black -1px -2px, black 2px 1px, black -2px 1px, black 2px -1px, black -2px -1px;";
        diepModMenu.innerHTML = `
        <div class="diepMod-menu" oncopy="return false;" onselectstart="return false;" oncontextmenu="return false;">
               <td><a class="diepMod-Stack">&nbsp;&nbsp;Press Tab to open server selector.&nbsp;&nbsp;&nbsp;</a></td>
               <td><a href="https://spade-squad.com/" class="diepMod-Speed">Spade Squad Discord</a></td>
               <hr class="diepMod-hr" />
               <div class="diepMod-subtitle">&nbsp;&nbsp;Themes
               <td><a class="diepMod-button" onclick="input.execute('net_replace_color 0 0x555555');input.execute('net_replace_color 1 0x999999');input.execute('net_replace_color 2 0x00B1DE');input.execute('net_replace_color 3 0x00B1DE');input.execute('net_replace_color 4 0xF14E54');input.execute('net_replace_color 5 0xBE7FF5');input.execute('net_replace_color 6 0x00F46C');input.execute('net_replace_color 7 0x89FF69');input.execute('net_replace_color 8 0xFFE869');input.execute('net_replace_color 9 0xFC7677');input.execute('net_replace_color 10 0x768DFC');input.execute('net_replace_color 11 0xFF77DC');input.execute('net_replace_color 12 0xFFE869');input.execute('net_replace_color 13 0x44FFA0');input.execute('net_replace_color 14 0xBBBBBB');input.execute('net_replace_color 15 0xFF0000');input.execute('net_replace_color 16 0xFF0000');input.execute('net_replace_color 17 0xC0C0C0');input.execute('ren_background_color 0xCDCDCD');input.execute('ren_border_color 0x666666');input.execute('ren_minimap_background_color 0xCDCDCD');input.execute('ren_minimap_border_color 0x555555');input.execute('ren_health_background_color 0x555555');input.execute('ren_xp_bar_fill_color 0xF0D96C');input.execute('ren_score_bar_fill_color 0x6CEFA2');input.execute('ren_stroke_solid_color 0x555555');input.execute('ren_grid_color 0x000000');return false;">Default</a></td>
               <td><a class="diepMod-button" onclick="input.execute('net_replace_color 0 0x000000');input.execute('net_replace_color 1 0x000000');input.execute('net_replace_color 2 0x99FF99');input.execute('net_replace_color 3 0x0000FF');input.execute('net_replace_color 4 0xFF0000');input.execute('net_replace_color 5 0x990099');input.execute('net_replace_color 6 0x00FF00');input.execute('net_replace_color 7 0xFFFFFF');input.execute('net_replace_color 8 0xFFFFFF');input.execute('net_replace_color 9 0xFFBBBB');input.execute('net_replace_color 10 0xCCCCFF');input.execute('net_replace_color 11 0xFF69B4');input.execute('net_replace_color 12 0xFFFF00');input.execute('net_replace_color 13 0xFFFF00');input.execute('net_replace_color 14 0x888888');input.execute('net_replace_color 15 0x0000FF');input.execute('net_replace_color 16 0xBBBB00');input.execute('net_replace_color 17 0x777777');input.execute('ren_background_color 0xCDCDCD');input.execute('ren_border_color 0x666666');input.execute('ren_minimap_background_color 0xCDCDCD');input.execute('ren_minimap_border_color 0x555555');input.execute('ren_health_background_color 0x555555');input.execute('ren_xp_bar_fill_color 0xF0D96C');input.execute('ren_score_bar_fill_color 0x6CEFA2');input.execute('ren_stroke_solid_color 0x555555');input.execute('ren_grid_color 0x000000');return false;">Dark</a></td>
               <td><a class="diepMod-button" onclick="input.execute('net_replace_color 0 4737096');input.execute('net_replace_color 1 10987439');input.execute('net_replace_color 2 10987439');input.execute('net_replace_color 3 10987439');input.execute('net_replace_color 4 13461149');input.execute('net_replace_color 5 13461149');input.execute('net_replace_color 6 13461149');input.execute('net_replace_color 7 0x89FF69');input.execute('net_replace_color 8 15714123');input.execute('net_replace_color 9 15714123');input.execute('net_replace_color 10 15714123');input.execute('net_replace_color 11 15714123');input.execute('net_replace_color 12 0xFFE869');input.execute('net_replace_color 13 9092159');input.execute('net_replace_color 14 9092159');input.execute('net_replace_color 15 9092159');input.execute('net_replace_color 16 0xFF0000');input.execute('net_replace_color 17 0xC0C0C0');input.execute('ren_background_color 14408667');input.execute('ren_border_color 0x666666');input.execute('ren_minimap_background_color 12499903');input.execute('ren_minimap_border_color 4737096');input.execute('ren_health_background_color 4737096');input.execute('ren_xp_bar_fill_color 15714123');input.execute('ren_score_bar_fill_color 9092159');input.execute('ren_stroke_solid_color 0x555555');input.execute('ren_grid_color 10987439');input.execute('ui_replace_colors 3974347 12183678 14696001 16642944');return false;">Arras</a></td>
               <td><a class="diepMod-button" onclick="input.execute('net_replace_color 0 0x555555');input.execute('net_replace_color 1 0x999999');input.execute('net_replace_color 2 0x00e1ff');input.execute('net_replace_color 3 0x00e1ff');input.execute('net_replace_color 4 0xff0c00');input.execute('net_replace_color 5 0x7200ff');input.execute('net_replace_color 6 0x04ff00');input.execute('net_replace_color 7 0x04ff00');input.execute('net_replace_color 8 0xeeff00');input.execute('net_replace_color 9 0xFC7677');input.execute('net_replace_color 10 0x0000ff');input.execute('net_replace_color 11 0xf600ff');input.execute('net_replace_color 12 0xeeff00');input.execute('net_replace_color 13 0x00ff00');input.execute('net_replace_color 14 0xa3a3a3');input.execute('net_replace_color 15 0xff0c00');input.execute('net_replace_color 16 0xeeff00');input.execute('net_replace_color 17 0xa3a3a3');input.execute('net_replace_color 18 0xa3a3a3');input.execute('ren_background_color 0xd9d9d9');input.execute('net_replace_color 18 0xa3a3a3');input.execute('ren_minimap_background_color 0xCDCDCD');input.execute('ren_minimap_border_color 0x555555');input.execute('ren_health_background_color 0x555555');input.execute('ren_xp_bar_fill_color 0xF0D96C');input.execute('ren_score_bar_fill_color 0x6CEFA2');input.execute('ren_stroke_solid_color 0x555555');input.execute('ren_stroke_soft_color_intensity 1');return false;">Simple</a></td>

               <hr class="diepMod-hr" />

               <div class="diepMod-subtitle">&nbsp;&nbsp;Health Values
                 <td><a class="diepMod-button" onclick="input.execute('ren_raw_health_values = true');input.execute('ren_health_background_color 0x000000');return false;">Show</a></td>
                 <td><a class="diepMod-subtitle">Client FPS</td>
                 <td><a class="diepMod-button" onclick="input.execute('ren_fps = true');return false;">Show</a></td>
                 <td><a class="diepMod-subtitle">Map ViewRange</td>
                 <td><a class="diepMod-button" onclick="input.execute('ren_minimap_viewport = true');return false;">Show</a></td>
                   <br>
               <hr class="diepMod-hr" />



                <td><a class="diepMod-Stack">&nbsp;&nbsp;Use Right click to stack bullets, make sure auto fire and rotate are off.</td><br />


                 <td><a class="diepMod-subtitle"> &nbsp;&nbsp;Toggle Stack Shoot: &nbsp;&nbsp; </td>
                 <td><a class="diepMod-Tanktype"> Shift + Q &nbsp;&nbsp;&nbsp;&nbsp;</td>
                 <td><a class="diepMod-subtitle"> Change Stack Type: &nbsp;&nbsp; </td>
                 <td><a class="diepMod-Tanktype"> Shift + R &nbsp;&nbsp</td> <br>
             <hr class="diepMod-hr" />
                 <td><a class="diepMod-subtitle"> &nbsp;&nbsp;&nbsp;Enable Bullet Line: &nbsp;&nbsp; </td>
                 <td><a class="diepMod-Tanktype"> &nbsp;Shift + J &nbsp;&nbsp;&nbsp;&nbsp;</td>

                 <td><a class="diepMod-subtitle"> &nbsp;&nbsp;&nbsp;Disable Bullet Line: &nbsp;&nbsp; </td>
                 <td><a class="diepMod-Tanktype"> &nbsp;&nbsp;&nbsp;J &nbsp;&nbsp;&nbsp;&nbsp;</td>


             <hr class="diepMod-hr" />
             <td><a class="diepMod-bigtitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auto Builds</a></td>
                 <td><a class="diepMod-button" onclick="input.execute('game_stats_build 999999999999999999999999999999999');return false;">Reset</a></td>

            <table>
                  <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 1111111');return false;"><span class="diepMod-Regen">Health Regen</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 2222222');return false;"><span class="diepMod-Health">Max Health</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 3333333');return false;"><span class="diepMod-Bump">Body Dmg</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 4444444');return false;"><span class="diepMod-Speed">Bullet Speed</span></a></td>
                  </tr>
                  <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 5555555');return false;"><span class="diepMod-Pen">Bullet Pen</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 6666666');return false;"><span class="diepMod-Damage">Bullet Dmg</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 7777777');return false;"><span class="diepMod-Reload">Reload</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 8888888');return false;"><span class="diepMod-Move">Move Speed</span></a></td>
                  </tr>
            </table>
          </div>


            <table>

                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456784567845678456745674567456788');return false;">Attacker</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">0</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">5</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456456845684563458642586485638328');return false;">Drone</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">2</span> / <span class="diepMod-Bump">3</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>


                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 332231332323121228881888187777777');return false;">Booster</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">5</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">7</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">0</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 458845457784785576546768678456768');return false;">Fighter</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">0</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">6</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">6</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 567567567567567567567222222288113');return false;">Mineer</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">2</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">1</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">2</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 123232323232321818838888238238238');return false;">Smasher</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">3</span> / <span class="diepMod-Health">10</span> / <span class="diepMod-Bump">10</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">0</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">10</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 222113333333222211111686886868688');return false;">BaitSter</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">7</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">7</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">5</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">7</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456741567425671456742567526754674');return false;">Penta</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">2</span> / <span class="diepMod-Health">3</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">0</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456456456845168456845684562211888');return false;">Manager</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">3</span> / <span class="diepMod-Health">2</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">7</span></span></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 567567567567567567567822222288881');return false;">Multi</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">1</span> / <span class="diepMod-Health">6</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">5</span></span></td>

</tr>


            </table>
              <hr class="diepMod-hr" />
              <div class="diepMod-subtitle">&nbsp;&nbsp;&nbsp;&nbsp;Achievements</div>
              <table>
                  <tr>
                     <td><a class="diepMod-button" onclick="achievementFlag(1);return false;">Get all achievements</a></td>
                      <td><a class="diepMod-button" onclick="achievementFlag(0);return false;">Remove all achievements</a></td>
                  </tr>
                 <div>
                  <tr>
                       <td><span class="diepMod-warning">&nbsp;&nbsp;This will reload the page.</span></td>
                  </tr>
             </table>

         </div>
        `;
   }
