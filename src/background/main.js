import {nanoid} from "nanoid";

var KillerPage = {
    pageData: new Map(),
    KILLPAGETIME:60,
    currentPageId:1,
    CycleTime:2,
    MatchString:"",
    AutoKillPage:true,
    matchPage:(url)=>{
        var patt = new RegExp(KillerPage.MatchString,"ig")
        if (patt.test(url)){
            return true;
        }else {
            return patt.test(url)
        }
    },
    Killer:()=>{
        if (KillerPage.pageData.size === 0||!KillerPage.AutoKillPage){
            return;
        }
        KillerPage.pageData.forEach((value,key)=>{
            if (key == KillerPage.currentPageId){
                KillerPage.pageData.set(key,60)
                //console.log("设置活跃页面"+key)
                return;
            }
            value-=KillerPage.CycleTime;
            if (value<0){
                chrome.tabs.remove(key,()=>{
                    KillerPage.pageData.delete(key)
                });
            }else {
                KillerPage.pageData.set(key,value)
            }
        })
        //console.log(KillerPage.pageData)
    },


    __init__:()=>{


        chrome.storage.sync.get("Setting",function (item) {
            KillerPage.AutoKillPage = item.Setting.AutoKillPage;
            KillerPage.MatchString =  item.Setting.MatchString;
            KillerPage.pageData = new Map();
            setInterval(KillerPage.Killer,KillerPage.CycleTime*1000);
            chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
                if(info.menuItemId == 'addKw'){
                    item.Setting.KwsData.push(info.selectionText);
                    chrome.storage.sync.set({"Setting":item.Setting},()=>{
                        alert("添加成功，刷新后显示");
                    })
                }

                if(info.menuItemId == 'removeKw'){
                    var array = item.Setting.KwsData;
                    for( var i = 0; i < array.length-1; i++){
                        if ( array[i] == info.selectionText) {
                            array.splice(i, 1);
                        }
                    }
                    chrome.storage.sync.set({"Setting":item.Setting},()=>{
                        alert("删除成功，刷新后显示");
                    })
                }
            });

        });

        /** * 切换标签的时候，涉及到，活跃页面的转换 */
        chrome.tabs.onActivated.addListener(function(tab) {
            setTimeout(function() {
                KillerPage.currentPageId = tab.tabId;
            },400);

        });

        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if (changeInfo.status =='complete'){
                //console.log("页面正在加载："+tabId)
                if (KillerPage.matchPage(tab.url)){
                    KillerPage.pageData.set(tabId,KillerPage.KILLPAGETIME)
                }
            }
        })


        chrome.tabs.onRemoved.addListener(function(tabId) {
            KillerPage.pageData.delete(tabId)
        })

    }
}
console.log("this is bgc page")
chrome.runtime.onInstalled.addListener(()=>{

    //console.log("安装监听执行")
    let Setting = {
        AutoKillPage:true,
        AutoHiddenHeader:true,
        MatchString:"item.*.com|adq.jd.com|jd.hk|360buyimg.com|www.jd.com|mall.jd.com|prodev.jd.com|lives.jd.com|miaosha.jd.com",
        UserName:'林鹏飞',
        CLockINCLockInDateTime:'',
        AutoClockIn:false
    };

    let item = {
        uuid:nanoid()
        ,todoItem:'©linpengfei7'
        ,done:false
        ,time:null
    };
    let TodoList = [];
        TodoList[0] = item;
    chrome.storage.sync.set({"Setting":Setting,"TodoList":TodoList},()=> {
        KillerPage.AutoKillPage = Setting.AutoKillPage;
    });
    chrome.tabs.query({},(tabs)=>{
        for (var i =0;i<tabs.length;i++){
            if (KillerPage.matchPage(tabs[i].url)){
                KillerPage.pageData.set(tabs[i].id,KillerPage.KILLPAGETIME)
            }
        }
    });
});

KillerPage.__init__();
// add context menu item
chrome.contextMenus.create({
    title: 'Remove Keyword',
    id: 'removeKw', // you'll use this in the handler function to identify this context menu item
    contexts: ['selection'],
});
chrome.contextMenus.create({
    title: 'Add Keyword',
    id: 'addKw', // you'll use this in the handler function to identify this context menu item
    contexts: ['selection'],
});


/**
 * 高亮
 */
!function (e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) r.d(o, n, function (t) {
            return e[t]
        }.bind(null, n));
        return o
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 6)
}({
    6: function (e, t) {
        const r = [[/(https:\/\/community\.kaola\.com\/api)(\/good-thing\/\d+)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/idea\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/discussion\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/novels\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/album\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/video\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/billboard\/\d+\.html\?isPreview=1)$/, "$1/manage$2"], [/(https:\/\/community\.kaola\.com)(\/topic\/\d+\.html\?isPreview=1)$/, "$1/manage$2"]];

        function o(e, t = {}) {
            return Object.entries(t).forEach(([t, r]) => {
                let o = !1;
                for (let n = 0; n < e.length; ++n) if (o = e[n].name.toLowerCase() == t.toLowerCase()) {
                    e[n].value = r;
                    break
                }
                o || e.push({name: t, value: r})
            }), e
        }

        chrome.webRequest.onBeforeRequest.addListener(function (e) {
            let t;
            return (t = function (e) {
                if ("OPTIONS" !== e.method && 0 !== e.frameId && 0 === e.parentFrameId) for (const [t, o] of r) if (t.test(e.url)) return {redirectUrl: e.url.replace(t, o)}
            }(e)) || {}
        }, {urls: ["*://*/*"]}, ["blocking", "requestBody"]);
        const n = [[/https?:\/\/(community|zone)\.kaola\.com.*$/, {Referer: "https://kol-ms.kaola.com"}]];

        chrome.webRequest.onBeforeSendHeaders.addListener(function (e) {
            let t;
            return (t = function (e) {
                if ("OPTIONS" !== e.method && 0 !== e.frameId && 0 === e.parentFrameId) for (const [t, r = {}] of n) if (t.test(e.url)) return {requestHeaders: o(e.requestHeaders, r)}
            }(e)) || {}
        }, {urls: ["*://*/*"]}, ["blocking", "requestHeaders", "extraHeaders"])
    }
});
