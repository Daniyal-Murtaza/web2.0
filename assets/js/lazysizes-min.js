!function(e) {
    var t = function(e, t, a) {
        "use strict";
        var n, i;
        if (function() {
            var t, a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 0,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (t in i = e.lazySizesConfig || e.lazysizesConfig || {},
            a)
                t in i || (i[t] = a[t])
        }(),
        !t || !t.getElementsByClassName)
            return {
                init: function() {},
                cfg: i,
                noSupport: !0
            };
        var o = t.documentElement
          , r = e.HTMLPictureElement
          , s = "addEventListener"
          , l = "getAttribute"
          , c = e[s].bind(e)
          , d = e.setTimeout
          , u = e.requestAnimationFrame || d
          , f = e.requestIdleCallback
          , m = /^picture$/i
          , y = ["load", "error", "lazyincluded", "_lazyloaded"]
          , z = {}
          , h = Array.prototype.forEach
          , v = function(e, t) {
            return z[t] || (z[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            z[t].test(e[l]("class") || "") && z[t]
        }
          , g = function(e, t) {
            v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
        }
          , p = function(e, t) {
            var a;
            (a = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(a, " "))
        }
          , C = function(e, t, a) {
            var n = a ? s : "removeEventListener";
            a && C(e, t),
            y.forEach(function(a) {
                e[n](a, t)
            })
        }
          , b = function(e, a, i, o, r) {
            var s = t.createEvent("Event");
            return i || (i = {}),
            i.instance = n,
            s.initEvent(a, !o, !r),
            s.detail = i,
            e.dispatchEvent(s),
            s
        }
          , A = function(t, a) {
            var n;
            !r && (n = e.picturefill || i.pf) ? (a && a.src && !t[l]("srcset") && t.setAttribute("srcset", a.src),
            n({
                reevaluate: !0,
                elements: [t]
            })) : a && a.src && (t.src = a.src)
        }
          , E = function(e, t) {
            return (getComputedStyle(e, null) || {})[t]
        }
          , _ = function(e, t, a) {
            for (a = a || e.offsetWidth; a < i.minSize && t && !e._lazysizesWidth; )
                a = t.offsetWidth,
                t = t.parentNode;
            return a
        }
          , w = function() {
            var e, a, n = [], i = [], o = n, r = function() {
                var t = o;
                for (o = n.length ? i : n,
                e = !0,
                a = !1; t.length; )
                    t.shift()();
                e = !1
            }, s = function(n, i) {
                e && !i ? n.apply(this, arguments) : (o.push(n),
                a || (a = !0,
                (t.hidden ? d : u)(r)))
            };
            return s._lsFlush = r,
            s
        }()
          , M = function(e, t) {
            return t ? function() {
                w(e)
            }
            : function() {
                var t = this
                  , a = arguments;
                w(function() {
                    e.apply(t, a)
                })
            }
        }
          , N = function(e) {
            var t, n = 0, o = i.throttleDelay, r = i.ricTimeout, s = function() {
                t = !1,
                n = a.now(),
                e()
            }, l = f && r > 49 ? function() {
                f(s, {
                    timeout: r
                }),
                r !== i.ricTimeout && (r = i.ricTimeout)
            }
            : M(function() {
                d(s)
            }, !0);
            return function(e) {
                var i;
                (e = !0 === e) && (r = 33),
                t || (t = !0,
                (i = o - (a.now() - n)) < 0 && (i = 0),
                e || i < 9 ? l() : d(l, i))
            }
        }
          , L = function(e) {
            var t, n, i = function() {
                t = null,
                e()
            }, o = function() {
                var e = a.now() - n;
                e < 99 ? d(o, 99 - e) : (f || i)(i)
            };
            return function() {
                n = a.now(),
                t || (t = d(o, 99))
            }
        }
          , x = function() {
            var r, f, y, z, _, x, S, B, T, F, R, D, k = /^img$/i, H = /^iframe$/i, O = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent), P = 0, $ = 0, q = -1, I = function(e) {
                $--,
                (!e || $ < 0 || !e.target) && ($ = 0)
            }, U = function(e) {
                return null == D && (D = "hidden" == E(t.body, "visibility")),
                D || !("hidden" == E(e.parentNode, "visibility") && "hidden" == E(e, "visibility"))
            }, j = function(e, a) {
                var n, i = e, r = U(e);
                for (B -= a,
                R += a,
                T -= a,
                F += a; r && (i = i.offsetParent) && i != t.body && i != o; )
                    (r = (E(i, "opacity") || 1) > 0) && "visible" != E(i, "overflow") && (n = i.getBoundingClientRect(),
                    r = F > n.left && T < n.right && R > n.top - 1 && B < n.bottom + 1);
                return r
            }, G = function() {
                var e, a, s, c, d, u, m, y, h, v, g, p, C = n.elements;
                if ((z = i.loadMode) && $ < 8 && (e = C.length)) {
                    for (a = 0,
                    q++; a < e; a++)
                        if (C[a] && !C[a]._lazyRace)
                            if (!O || n.prematureUnveil && n.prematureUnveil(C[a]))
                                Z(C[a]);
                            else if ((y = C[a][l]("data-expand")) && (u = 1 * y) || (u = P),
                            v || (v = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand,
                            n._defEx = v,
                            g = v * i.expFactor,
                            p = i.hFac,
                            D = null,
                            P < g && $ < 1 && q > 2 && z > 2 && !t.hidden ? (P = g,
                            q = 0) : P = z > 1 && q > 1 && $ < 6 ? v : 0),
                            h !== u && (x = innerWidth + u * p,
                            S = innerHeight + u,
                            m = -1 * u,
                            h = u),
                            s = C[a].getBoundingClientRect(),
                            (R = s.bottom) >= m && (B = s.top) <= S && (F = s.right) >= m * p && (T = s.left) <= x && (R || F || T || B) && (i.loadHidden || U(C[a])) && (f && $ < 3 && !y && (z < 3 || q < 4) || j(C[a], u))) {
                                if (Z(C[a]),
                                d = !0,
                                $ > 9)
                                    break
                            } else
                                !d && f && !c && $ < 4 && q < 4 && z > 2 && (r[0] || i.preloadAfterLoad) && (r[0] || !y && (R || F || T || B || "auto" != C[a][l](i.sizesAttr))) && (c = r[0] || C[a]);
                    c && !d && Z(c)
                }
            }, J = N(G), K = function(e) {
                var t = e.target;
                t._lazyCache ? delete t._lazyCache : (I(e),
                g(t, i.loadedClass),
                p(t, i.loadingClass),
                C(t, V),
                b(t, "lazyloaded"))
            }, Q = M(K), V = function(e) {
                Q({
                    target: e.target
                })
            }, X = function(e) {
                var t, a = e[l](i.srcsetAttr);
                (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t),
                a && e.setAttribute("srcset", a)
            }, Y = M(function(e, t, a, n, o) {
                var r, s, c, u, f, z;
                (f = b(e, "lazybeforeunveil", t)).defaultPrevented || (n && (a ? g(e, i.autosizesClass) : e.setAttribute("sizes", n)),
                s = e[l](i.srcsetAttr),
                r = e[l](i.srcAttr),
                o && (u = (c = e.parentNode) && m.test(c.nodeName || "")),
                z = t.firesLoad || "src"in e && (s || r || u),
                f = {
                    target: e
                },
                g(e, i.loadingClass),
                z && (clearTimeout(y),
                y = d(I, 2500),
                C(e, V, !0)),
                u && h.call(c.getElementsByTagName("source"), X),
                s ? e.setAttribute("srcset", s) : r && !u && (H.test(e.nodeName) ? function(e, t) {
                    var a = e.getAttribute("data-load-mode") || i.iframeLoadMode;
                    0 == a ? e.contentWindow.location.replace(t) : 1 == a && (e.src = t)
                }(e, r) : e.src = r),
                o && (s || u) && A(e, {
                    src: r
                })),
                e._lazyRace && delete e._lazyRace,
                p(e, i.lazyClass),
                w(function() {
                    var t = e.complete && e.naturalWidth > 1;
                    z && !t || (t && g(e, i.fastLoadedClass),
                    K(f),
                    e._lazyCache = !0,
                    d(function() {
                        "_lazyCache"in e && delete e._lazyCache
                    }, 9)),
                    "lazy" == e.loading && $--
                }, !0)
            }), Z = function(e) {
                if (!e._lazyRace) {
                    var t, a = k.test(e.nodeName), n = a && (e[l](i.sizesAttr) || e[l]("sizes")), o = "auto" == n;
                    (!o && f || !a || !e[l]("src") && !e.srcset || e.complete || v(e, i.errorClass) || !v(e, i.lazyClass)) && (t = b(e, "lazyunveilread").detail,
                    o && W.updateElem(e, !0, e.offsetWidth),
                    e._lazyRace = !0,
                    $++,
                    Y(e, t, o, n, a))
                }
            }, ee = L(function() {
                i.loadMode = 3,
                J()
            }), te = function() {
                3 == i.loadMode && (i.loadMode = 2),
                ee()
            }, ae = function() {
                f || (a.now() - _ < 999 ? d(ae, 999) : (f = !0,
                i.loadMode = 3,
                J(),
                c("scroll", te, !0)))
            };
            return {
                _: function() {
                    _ = a.now(),
                    n.elements = t.getElementsByClassName(i.lazyClass),
                    r = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                    c("scroll", J, !0),
                    c("resize", J, !0),
                    c("pageshow", function(e) {
                        if (e.persisted) {
                            var a = t.querySelectorAll("." + i.loadingClass);
                            a.length && a.forEach && u(function() {
                                a.forEach(function(e) {
                                    e.complete && Z(e)
                                })
                            })
                        }
                    }),
                    e.MutationObserver ? new MutationObserver(J).observe(o, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (o[s]("DOMNodeInserted", J, !0),
                    o[s]("DOMAttrModified", J, !0),
                    setInterval(J, 999)),
                    c("hashchange", J, !0),
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                        t[s](e, J, !0)
                    }),
                    /d$|^c/.test(t.readyState) ? ae() : (c("load", ae),
                    t[s]("DOMContentLoaded", J),
                    d(ae, 2e4)),
                    n.elements.length ? (G(),
                    w._lsFlush()) : J()
                },
                checkElems: J,
                unveil: Z,
                _aLSL: te
            }
        }()
          , W = function() {
            var e, a = M(function(e, t, a, n) {
                var i, o, r;
                if (e._lazysizesWidth = n,
                n += "px",
                e.setAttribute("sizes", n),
                m.test(t.nodeName || ""))
                    for (o = 0,
                    r = (i = t.getElementsByTagName("source")).length; o < r; o++)
                        i[o].setAttribute("sizes", n);
                a.detail.dataAttr || A(e, a.detail)
            }), n = function(e, t, n) {
                var i, o = e.parentNode;
                o && (n = _(e, o, n),
                (i = b(e, "lazybeforesizes", {
                    width: n,
                    dataAttr: !!t
                })).defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && a(e, o, i, n))
            }, o = L(function() {
                var t, a = e.length;
                if (a)
                    for (t = 0; t < a; t++)
                        n(e[t])
            });
            return {
                _: function() {
                    e = t.getElementsByClassName(i.autosizesClass),
                    c("resize", o)
                },
                checkElems: o,
                updateElem: n
            }
        }()
          , S = function() {
            !S.i && t.getElementsByClassName && (S.i = !0,
            W._(),
            x._())
        };
        return d(function() {
            i.init && S()
        }),
        n = {
            cfg: i,
            autoSizer: W,
            loader: x,
            init: S,
            uP: A,
            aC: g,
            rC: p,
            hC: v,
            fire: b,
            gW: _,
            rAF: w
        }
    }(e, e.document, Date);
    e.lazySizes = t,
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
