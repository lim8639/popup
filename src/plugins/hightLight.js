/**
 * 高亮函数
 */
!function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 17)
}({
    1: function (e, t, i) {
        "use strict";

        function n(e, t = 200) {
            let i;
            return (...n) => {
                i && clearTimeout(i), i = setTimeout(() => {
                    clearTimeout(i), i = null, e(...n)
                }, t)
            }
        }

        function o(e = []) {
            let t, i = [];
            if (e.length > 0) for (t = e.shift(); e.length;) {
                let n = e.shift();
                t.contains(n) || (n.contains(t) ? t = n : (t = n).parentNode ? e.push(t.parentNode) : i.push(t))
            }
            return t && i.push(t), i
        }

        function r(e) {
            let t = document.createElement("div");
            t.innerHTML = e;
            let i = document.createDocumentFragment();
            return t.childNodes.forEach(e => i.appendChild(e.cloneNode(!0))), i
        }

        function s(e = [], t = []) {
            if (e.length !== t.length) return !1;
            for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
            return !0
        }

        i.d(t, "d", function () {
            return n
        }), i.d(t, "b", function () {
            return o
        }), i.d(t, "c", function () {
            return r
        }), i.d(t, "a", function () {
            return s
        })
    }, 17: function (e, t, i) {
        "use strict";
        i.r(t);
        var n = i(2), o = i(1);
        //const r = ["0","1", "2", "3", "4", "5", "6", "7","8","9","10","11","12","13","14","15"];
        let s = new class {
            constructor() {
                this.node = document.body, this.config, this.keywords, this.keywordsReg, this.observer, this.init()
            }

            init() {
                this._getConfig().then(() => {
                    this.config.enableHighlight && (this._loopHighlight(), this._startObserve())
                })
            }

            _startObserve() {
                this.observer && this.observer.disconnect(), this.observer = new MutationObserver(e => {
                    e.forEach(e => {
                        "characterData" === e.type && this._textChangeHighlight(e.target), "childList" === e.type && this._loopHighlight(Object(o.b)([...e.addedNodes]))
                    })
                }), this.observer.observe(this.node, {attributes: !1, childList: !0, characterData: !0, subtree: !0})
            }

            destory() {
                this.observer && (this.observer.disconnect(), this.observer = null), this._removeAllHighlight()
            }

            async _getConfig() {
                this.config = await Object(n.a)() || {}, this.keywords = (this.config.highlightWords || "").split(/\s+/), this.keywords = this.keywords.filter(e => e.length > 0), this.keywords.length && (this.keywordsReg = new RegExp(`(${this.keywords.join("|")})`, "gi"))
            }

            _highlight(e) {
                if (!this.config.enableHighlight || !this.keywords.length || e.nodeType !== Node.TEXT_NODE) return;
                let t = e.nodeValue;
                if (!this.keywordsReg.test(t)) return;
                let i, n = t.replace(this.keywordsReg, (e, t) => {
                    let i = this.keywords.findIndex(e => e.toLowerCase() === t.toLowerCase());
                    return i > -1 ? `<i class="chrome-extensions-multi-highlight chrome-ads-check-style-${i%20}">${t}</i>` : t
                }), r = Object(o.c)(n);
                e._originTextNode ? i = e._originTextNode : (e._isOriginTextNode = !0, i = e), r.childNodes.forEach(e => {
                    e._originTextNode = i
                }), e.parentNode.insertBefore(r, e), e._isOriginTextNode ? e.nodeValue = "" : e.parentNode.removeChild(e)
            }

            _loopHighlight(e = [this.node]) {
                for (; e.length;) {
                    let t = e.shift();
                    t && t.nodeType === Node.ELEMENT_NODE ? t.classList.contains("chrome-extensions-multi-highlight") || t.childNodes.length && e.push(...t.childNodes) : t && t.nodeType === Node.TEXT_NODE && this._highlight(t)
                }
            }

            _reLoopHighlight() {
                this._removeAllHighlight(), setTimeout(() => {
                    this._loopHighlight()
                }, 100)
            }

            _removeAllHighlight() {
                document.querySelectorAll(".chrome-extensions-multi-highlight").forEach(e => {
                    let t = e._originTextNode, i = t.previousSibling, n = [], o = t.nodeValue;
                    for (; i && i._originTextNode === t;) n.push(i), o = (i.nodeValue || i.innerText || "") + o, i = i.previousSibling;
                    n.forEach(e => e.parentNode.removeChild(e)), t.nodeValue = o
                })
            }

            _textChangeHighlight(e) {
                if (e._isOriginTextNode && e.nodeValue) {
                    let t = e.previousSibling, i = [];
                    for (; t && t._originTextNode === e;) i.push(t), t = t.previousSibling;
                    i.forEach(e => e.parentNode.removeChild(e))
                }
                this._highlight(e)
            }

            async changeConfig() {
                let e = this.keywords, t = this.config.enableHighlight;
                await this._getConfig();
                let i = this.keywords, n = this.config.enableHighlight;
                t !== n && (n ? this.init() : this.destory()), Object(o.a)(e, i) || this._reLoopHighlight()
            }
        };
        chrome.runtime.onMessage.addListener(function (e, t) {
            s.changeConfig()
        })
    }, 2: function (e, t, i) {
        "use strict";

        async function n(e) {
            return await new Promise((t, i) => {
                chrome.storage.sync.get(e, e => {
                    t(e || {})
                })
            })
        }

        async function o(e = {}) {
            return await new Promise((t, i) => {
                chrome.storage.sync.set(e, t)
            })
        }

        i.d(t, "a", function () {
            return n
        }), i.d(t, "b", function () {
            return o
        })
    }
});