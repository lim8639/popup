<template>
  <div>
    <div class="body">
      <div class="fixed">
        <input  id="data" ref='addcontent' type="text"><button @click='addTodoItem(matchName)'   id="add-btn">添加</button>
      </div>
      <div id="body_list">
        <toDoList  ref='todolist'></toDoList>
        <script></script>
      </div>
    </div>
    <div class="setting">
      <router-link to="/bar"><h3>{{greet0328()}}</h3></router-link>
    </div>
  </div>

</template>

<script>
import toDoList  from './todolist';
import {nanoid} from 'nanoid'
export default {
   mounted() {
     chrome.storage.sync.get('Setting',(item)=>{
       this.$data.matchName = item.Setting.UserName;
     })
   },
  data() {
    return {
      matchName: ""
    };
  },
  methods:{
    greet0328(){
      let H = new Date().getHours();
      let W = new Date().getDay();
      let greet ;

      if (H <18){
        if (H < 10){
          greet = '早安呀~';
        }else {
          greet = '不负每一份热爱！';
        }
      }else {
         return  "下班注意安全，辛苦啦~"
      }
      if (W == 6||W == 0){
        greet = greet+ ' 周末愉快~';
      }
      return  greet;
    },
    addTodoItem(UserName){
      let $value = this.$refs.addcontent.value
      if ($value == ''||$value == null){
        return ;
      }
      // // \d{1,2}((:|：)\d{1,2}){0,2}-\d{1,2}((:|：)\d{1,2}){0,2}.{0,}林鹏飞
      let patt = new RegExp("\\d{1,2}((:|：)\\d{1,2}){0,2}-\\d{1,2}((:|：)\\d{1,2}){0,2}.{0,5}" + UserName, 'g');

      let list = $value.match(patt);
      if(list==null){

        let item = {
          uuid:nanoid()
          ,todoItem:$value
          ,done:false
          ,time:null
        };
        this.$refs.todolist.list.push(item)
        chrome.storage.sync.set({"TodoList":this.$refs.todolist.list})
        this.$refs.addcontent.value =''
      }else{

        for (var i = 0; i < list.length; i++) {

          let value = list[i];
          // 替换vlue
          if (/17:50-18:00|17:40-17:50/g.test(value)) {
            var patt2 = new RegExp("\\d{1,2}((:|：)\\d{1,2}){0,2}-\\d{1,2}((:|：)\\d{1,2}){0,2}\\s*" + UserName, 'g');
            if (patt2.test(value)) {

              if (/-18:00/g.test(value)) {
                value = value.replace(/-18:00/g, '-17:55');
              } else {
                value = value.replace(/-17:50/g, '-17:45');
              }
            } else {
              //  后面五分钟
              if (/-18:00/g.test(value)) {
                value = "17:55-18:00 " + UserName;
              } else {
                value = "17:45-17:50 " + UserName;
              }
            }
          }
          let timeData = value.match(/\d{1,2}/ig);
          let item = {
            uuid:nanoid(),
            time:{
              hh:timeData[0],
              mm:timeData[1]
            }
            ,todoItem:value
            ,done:false
          };

          this.$refs.todolist.list.push(item)
        }
        chrome.storage.sync.set({"TodoList":this.$refs.todolist.list})

        this.$refs.addcontent.value =''
      }
    }
  },
  components: {
    toDoList
  },
}
</script>

<style>

</style>
