import  Vue  from 'vue'
import app from './components/app.vue'


function joinContent () {
    const div = document.createElement('div')
    div.id = 'myApp'
    document.body.appendChild(div)
}
joinContent ()
new Vue({
    render: h => h(app),
}).$mount('#myApp')

function  getConfig(data){
    return new Promise((resolve,reject) => {
        chrome.storage.sync.get(data, e => {
            resolve( e)
        })
    })
}
function  hl(taget,keywords){
    let settings = { className: 'chrome-workInDay chrome-workInDay-style-', element: 'span', caseSensitive: false, wordsOnly: false };
    for (let i = 0;i<keywords.length;i++){
        let className = "chrome-workInDay chrome-workInDay-style-";
        settings.className = `${className+i%20}`
        $(taget).highlight(keywords[i],settings);
    }
}
async function  initLight(){
    const config = await getConfig('Config');
    if (config.Config.AutoHighLight){
        hl(document.body,config.Config.keywords)
        // Firefox和Chrome早期版本中带有前缀
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        // 选择目标节点
        var target = document.querySelector('body')
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.type=='childList') {
                    if (mutation.addedNodes.length > 0) {
                        console.log(mutation)
                        hl(mutation.target, config.Config.keywords)
                    }
                }
                if(mutation.type=='characterData'){
                    hl(mutation.target,config.Config.keywords)
                    console.log("dom 发生了变化")
                    console.log("target",mutation.target)
                }
            });
        });
        // 传入目标节点和观察选项
        observer.observe(target, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }else {
        return;
    }
}
$(()=>{
    initLight()
})

