<template>
  <div>
    <ul class="data-list">
      <transition-group
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeInBottomRight"
          leave-active-class="animate__backOutRight"
          leave-class="animate__swing"
          class="hello"
          :duration="{ enter: 750, leave: 300 }">
                        appear>
      <li @dblclick='copy(item.todoItem)'  :key='item.uuid' v-for='(item,index) in TodoList' v-if='item.done'>
               <span :class="item.done?'text text-done':'text'">
                    <span class='content'>
                        <input @click='changeStatus(index)' :checked='item.done' class='done tui-checkbox'
                               type='checkbox'/>
                    </span>
                   {{ item.todoItem }}
               </span>
        <button class='btn-change pop-btn' @click='changeList(index)'><img src="@/assets/ip.svg" class='btn-img'/>
        </button>
        <button class='pop-btn' @click='removeItem(index)'><img src="@/assets/rabbish.svg" class='btn-img'/></button>

        <button class="btn show-info">
          2022
        </button>
      </li>
       <li @dblclick='copy(item.todoItem)'  :key='item.uuid' v-for='(item,index) in TodoList' v-if='!item.done'>
               <span class='text'>
                    <span class='content'>
                        <input @click='changeStatus(index)' :checked='item.done' class='done tui-checkbox'
                               type='checkbox'/>
                    </span>
                   {{ item.todoItem }}
               </span>
        <button class='btn-change pop-btn' @click='changeList(index)'><img src="@/assets/ip.svg" class='btn-img'/>
        </button>
        <button class=' pop-btn' @click='removeItem(index)'><img src="@/assets/rabbish.svg" class='btn-img'/></button>
        <button class="show-info">
          2022
        </button>
      </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
import 'animate.css'
export default {
  name: 'toDoList',
  data() {
    return {
      TodoList:[],
    }
  },
  mounted() {
    chrome.storage.sync.get("TodoList", (item) => {
      this.$data.TodoList = item.TodoList;
    })
  },
  beforeDestroy() {

  },
  methods: {
    changeStatus(index) {
      this.$data.TodoList[index].done = !this.$data.TodoList[index].done;
      chrome.storage.sync.set({'TodoList': this.$data.TodoList});
    },
    changeList(index) {
      if (index != 0) {
        let arr = this.$data.TodoList;
        arr[index] = arr.splice(index - 1, 1, arr[index])[0];
        chrome.storage.sync.set({'TodoList': this.$data.TodoList});
      }
    },
    /**
     *
     * @param id
     */
    removeItem(id) {
      let newArray = [];
      let array = this.$data.TodoList;
      let j = 0;
      for(let i = 0;i<this.$data.TodoList.length;i++){
        if (id != i){
            newArray[j] = array[i];
            j++;
        }
      }
      this.$data.TodoList = newArray;
      chrome.storage.sync.set({'TodoList':this.$data.TodoList})
    },
    copy(value) {
      let transfer = document.createElement('input');
      document.body.appendChild(transfer);
      transfer.value = value; // 这里表示想要复制的内容
      transfer.focus();
      transfer.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      transfer.blur();
      document.body.removeChild(transfer);
    },
  },
}
</script>
<style scoped>
.data-list {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
  height: 325px;
}

#body_list {
  overflow-x: hidden;
  overflow-y: auto;
  height: 275px;
}
.show-info{
  position: absolute;
  top: 0;
  right: 0px;
  margin-top: 4px;
  height: 22px;
  /*border-radius: 15px;*/
  width: 52px;
  text-align: center;
  color: #8a8a8d;
  background-color: #f2f2f7;
  border:  0;
  border-radius: 10px;
}

.btn-change{
  right: 26px!important;
}


.text {
  width: 240px;
  display: inline-block;
  font-family: "Microsoft YaHei", Consolas;
  letter-spacing: 0.01em;
  line-height: 30px;
  height: 30px!important;
  color: #0D1F2D;
  font-weight: 530;
  overflow: hidden;
}
.text-done{
  color: #8a8a8d;
}

.content{
  padding-right: 6px;
}
.data-list li:hover  .pop-btn {
  display: inline-block;
  color: #FCFCFC;
  min-height: 30px;
}

.data-list li:hover span {
  color: #FCFCFC;
}

.data-list li {
  margin-left: -2px;
  padding-left: 2px;
  line-height: 30px!important;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  height: 30px;
  list-style: none;
  margin-bottom: 1px;
  margin-top: 1px;
  background-color: #ffffff;
}

.data-list li:hover {
  border-radius: 10px;
  margin-top: 1px;
  margin-bottom: 1px;
  background-color: #70706f;
  height: 60px!important;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
}
.data-list li:hover .show-info{
  display: none;
}
.data-list li  .pop-btn {
  position: absolute;
  top: 0;
  right: 0px;
  height: 30px;
  /*border-radius: 15px;*/
  width: 26px;
  text-align: center;
  display: none;
  background-color: #70706f;
  border: #70706f 1px solid;
  border-radius: 10px;
}
.hello{
  animation: ease 0.6s;
}
</style>