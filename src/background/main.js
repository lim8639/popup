import {nanoid} from "nanoid";



function getData(data) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(data, e => {
            resolve(e)
        })
    });
}

function setData(TodoList,Config) {
    return new Promise((resolve, reject) => {
        resolve(chrome.storage.sync.set({
            "TodoList":TodoList,
            "Config":Config
        }))
    });
}
async function getData2(TodoList,Config){
    try {
        const  initData = await  getData('TodoList');
        if (initData.TodoList == undefined){
            await  setData(TodoList,Config);
        }
    }catch (e){
        console.error('e',e)
    }
}

// Init data in Installed;
chrome.runtime.onInstalled.addListener(()=>{
     let Config = {
         keywords:['今天','文档'],
         AutoHighLight:true
     };
     let TodoList = [{
        uuid:nanoid()
       ,todoItem:'©linpengfei7'
       ,done:false
       ,time:null
    }]
    getData2(TodoList,Config);
});
