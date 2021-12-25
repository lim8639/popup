!function (e) {
    function t(t) {
        for (var r, a, u = t[0], l = t[1], c = t[2], s = 0, f = []; s < u.length; s++) a = u[s], o[a] && f.push(o[a][0]), o[a] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        for (h && h(t); f.length;) f.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, u = 1; u < n.length; u++) {
                var l = n[u];
                0 !== o[l] && (r = !1)
            }
            r && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }

    var r = {}, o = {2: 0}, i = [];

    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }

    a.m = e, a.c = r, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) a.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var u = window.webpackJsonp = window.webpackJsonp || [], l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var c = 0; c < u.length; c++) t(u[c]);
    var h = l;
    i.push([16, 3]), n()
}({
    1: function (e, t, n) {
        "use strict";

        function r(e, t = 200) {
            let n;
            return (...r) => {
                n && clearTimeout(n), n = setTimeout(() => {
                    clearTimeout(n), n = null, e(...r)
                }, t)
            }
        }

        function o(e = []) {
            let t, n = [];
            if (e.length > 0) for (t = e.shift(); e.length;) {
                let r = e.shift();
                t.contains(r) || (r.contains(t) ? t = r : (t = r).parentNode ? e.push(t.parentNode) : n.push(t))
            }
            return t && n.push(t), n
        }

        function i(e) {
            let t = document.createElement("div");
            t.innerHTML = e;
            let n = document.createDocumentFragment();
            return t.childNodes.forEach(e => n.appendChild(e.cloneNode(!0))), n
        }

        function a(e = [], t = []) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0
        }

        n.d(t, "d", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        }), n.d(t, "c", function () {
            return i
        }), n.d(t, "a", function () {
            return a
        })
    }, 12: function (e, t, n) {
        (t = e.exports = n(13)(!1)).push([e.i, "._30Pn9713U8lYfxFOXU-HAY {\n    position: relative;\n\n    color: #666;\n    margin-bottom: 5px;\n}\n._1AxwZ0K9IIP-lj01rq1et0 {\n    float: right;\n}\n\n._3IZPKC4zHXrT7ZV0WFdoDl {\n    border-radius: 2px;\n    border: 1px dashed #aaa;\n    box-shadow: 0 0 5px rgba(247, 114, 114, 0.1) inset;\n\n    color: #666;\n\n    font-size: 12px;\n    line-height: 16px;\n}\n._3IZPKC4zHXrT7ZV0WFdoDl textarea {\n    display: block;\n    box-sizing: border-box;\n    height: 215px;\n    width: 358px;\n    max-width: 272px;\n    min-height: 50px;\n    padding: 5px;\n    border: 0;\n    outline: 0;\n\n    background-color: #fff;\n\n    resize: none;\n}", ""]), t.locals = {
            tip: "_30Pn9713U8lYfxFOXU-HAY",
            switch: "_1AxwZ0K9IIP-lj01rq1et0",
            "highlight-words": "_3IZPKC4zHXrT7ZV0WFdoDl"
        }
    }, 16: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0), o = n.n(r), i = n(5), a = n.n(i), u = n(3), l = n.n(u);

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var g = function (e) {
            function t(e) {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), s(this, f(t).call(this, e))
            }

            var n, r, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(t, o.a.Component), n = t, (r = [{
                key: "render", value: function () {
                    var e = this;
                    return o.a.createElement("div", null, o.a.createElement("div", {className: l.a.tip}, o.a.createElement("span", null, "Highlight words below "), o.a.createElement("span", null), o.a.createElement("span", {className: l.a.switch}, "Enable", o.a.createElement("input", {
                        type: "checkbox",
                        onChange: function (t) {
                            return e.props.enableHighlightChange(t.target.checked)
                        },
                        checked: this.props.enableHighlight
                    }))), o.a.createElement("div", {className: l.a["highlight-words"]}, o.a.createElement("textarea", {
                        placeholder: "type highlight words here ...",
                        onChange: function (t) {
                            return e.props.highlightWordsChange(t.target.value)
                        },
                        value: this.props.highlightWords||"林鹏飞 秒杀 特级 专家 房事 性爱 爱爱 老年三轮车 老年四轮车 老年代步车 范冰冰 防病毒 防飞沫传播 广审 免责 授权 声明 专利 专利证书 广审表 广告审核表 一段 进口 澳洲进口 一段奶粉 医疗 医用 保健 有效 除菌 灭菌率  一段 1段 0-6岁 体检 泛生子健康 泛生子 体检体验卡 早期筛查 爱康国宾 特供 专供 牛皮 真皮 肝癌 筛查 京东首发 首发  奶粉 情趣 小天才 延时 快感 高潮 高考 免补考 国旗 国徽 党旗 党徽 随时涨价 明日涨价 润滑 袁隆平 建党百年 习撒币 新疆 慈铭体检 高朝 欲望 性冷谈 持久 男性延迟 肿瘤 癌 保湿 祛黄褐斑 延缓衰老 薇娅 护理 减肥 紧致 预筛查 增强免疫 正品保障 贴心服务 修复 矫正 活络 补血养气 性用品 补水 增大 增粗 增长 补钙 瘦腿 减肚子 调理肠胃 养胃 促生长 养肾 滋补 养身 去湿气 滋润 增加骨密度 勃起 免疫力 六四 躺平 食疗 清肠道 润肠通便 夫妻 坚挺 延迟 袁隆平 速愈素 祛痘 美白 增肌粉 育发 染发 烫发 脱毛 美乳 健美 除臭 祛斑 防晒 pre段 维他 圣鸽车手 恒青车手 雅诗兰黛",
                        disabled: !this.props.enableHighlight
                    })))
                }
            }]) && h(n.prototype, r), i && h(n, i), t
        }(), b = n(2), d = n(1);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function v(e) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function w(e, t) {
            return (w = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function O(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function x(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var _ = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, o = v(t).call(this, e), n = !o || "object" !== y(o) && "function" != typeof o ? O(r) : o, x(O(O(n)), "highlightWordsChange", function (e) {
                    n.changeConfig({highlightWords: e})
                }), x(O(O(n)), "enableHighlightChange", function (e) {
                    n.changeConfig({enableHighlight: e})
                }), n.state = {
                    highlightWords: "",
                    enableHighlight: !0
                }, n.debounceSendMessage = Object(d.d)(function () {
                    chrome.tabs.query({active: !0, currentWindow: !0}, function (e) {
                        chrome.tabs.sendMessage(e[0].id, "")
                    })
                }, 500), n
            }

            var n, r, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && w(e, t)
            }(t, o.a.Component), n = t, (r = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    Object(b.a)().then(function (t) {
                        e.setState({
                            highlightWords: t.highlightWords || "",
                            enableHighlight: void 0 === t.enableHighlight || t.enableHighlight
                        })
                    })
                }
            }, {
                key: "changeConfig", value: function (e) {
                    var t = this;
                    return this.setState(e, function () {
                        Object(b.b)(t.state).then(t.debounceSendMessage)
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = {
                        highlightWords: this.state.highlightWords,
                        enableHighlight: this.state.enableHighlight,
                        highlightWordsChange: this.highlightWordsChange,
                        enableHighlightChange: this.enableHighlightChange
                    };
                    return o.a.createElement(g, e)
                }
            }]) && m(n.prototype, r), i && m(n, i), t
        }();
        a.a.render(o.a.createElement(_, null), document.getElementById("app"))
    }, 2: function (e, t, n) {
        "use strict";

        async function r(e) {
            return await new Promise((t, n) => {
                chrome.storage.sync.get(e, e => {
                    t(e || {})
                })
            })
        }

        async function o(e = {}) {
            return await new Promise((t, n) => {
                chrome.storage.sync.set(e, t)
            })
        }

        n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        })
    }, 3: function (e, t, n) {
        var r = n(12);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {hmr: !0, transform: void 0, insertInto: void 0};
        n(14)(r, o);
        r.locals && (e.exports = r.locals)
    }
});

