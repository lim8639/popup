<template>
  <div>
    <div class="body">
      <div class="fixed">
        <input  id="data" ref='addcontent' type="text"><button @click='addTodoItem()'   id="add-btn">添加</button>
      </div>
      <div id="body_list">
        <toDoList  ref='todolist'></toDoList>
      </div>
    </div>
    <div class="setting">
      <router-link to="/bar"><h3>{{hellowork()}}</h3></router-link>
    </div>
  </div>

</template>

<script>
import toDoList  from './todolist';
import {nanoid} from 'nanoid'
export default {
   mounted() {

   },
  data() {
    return {
      TodoList:[]
    };
  },
  methods:{
    hellowork(){
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
    addTodoItem(){
      let $value = this.$refs.addcontent.value
      if ($value == ''||$value == null){
        return ;
      }
      let item = {
        uuid:nanoid()
        ,todoItem:$value
        ,done:false
        ,time:null
      };
      this.$refs.todolist.TodoList.push(item)
      chrome.storage.sync.set({"TodoList": this.$refs.todolist.TodoList})
      this.$refs.addcontent.value =''
    }
  },
  components: {
    toDoList
  },
}
</script>
<style scoped>

</style>
