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
      <li @click='copy(item.todoItem)'  :key='item.uuid' v-for='(item,index) in list' v-if='item.done'>
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

        <button :class="getCurrentStatus(item.time,myDate,item.done).STATUS +' show-info'">
          {{ getCurrentStatus(item.time, myDate, item.done).INFO }}
        </button>

      </li>
       <li @click='copy(item.todoItem)'  :key='item.uuid' v-for='(item,index) in list' v-if='!item.done'>
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
        <button :class="getCurrentStatus(item.time,myDate,item.done).STATUS +' show-info'">
          {{ getCurrentStatus(item.time, myDate, item.done).INFO }}
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

    let myDate = new Date();
    return {
      list: [],
      myDate: myDate
    }
  },
  mounted() {
    chrome.storage.sync.get("TodoList", (item) => {
      this.$data.list = item.TodoList;
    })
    this.timer = setInterval(this.reflashDate, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    changeStyle() {

    },
    changeStatus(index) {
      this.$data.list[index].done = !this.$data.list[index].done;
      chrome.storage.sync.set({'TodoList': this.$data.list});
    },
    changeList(index) {
      if (index != 0) {
        let arr = this.$data.list;
        arr[index] = arr.splice(index - 1, 1, arr[index])[0];
      }
    },
    reflashDate() {
      this.$data.myDate = new Date();
    },

    /**
     *  获取状态
     * @returns {string}
     * @param Minutes
     * @param s
     */
    transTime(Minutes, s) {
      let h = parseInt(Minutes / 60);
      let m = Minutes % 60;
      return `${h}:${m}:${60-s}`;
    },
    getCurrentStatus(time, myDate, done) {
      let CurrentStatus = {
        STATUS: '',
        INFO: '等待'
      }
      if (done) {
        CurrentStatus.INFO = '完成';
        return CurrentStatus;
      }
      if (time == null) {
        return CurrentStatus;
      } else {
        let nodeHours = time.hh * 1;
        let nodeMinutes = time.mm * 1;
        let NowHours = myDate.getHours();
        let NowMinutes = myDate.getMinutes();
        // 计算时差
        if (nodeHours > 8 && nodeHours < 21) {

          // 计算正常时段的倒计时
          var min = nodeHours * 60 + nodeMinutes + 180 - (myDate.getHours() * 60 + myDate.getMinutes())
          let current = this.transTime(min, myDate.getSeconds());
          if (min > 180) {
            CurrentStatus.INFO = '等待'
          } else if (min < 180 && min > 30) {
            CurrentStatus.INFO = current;
            CurrentStatus.STATUS = 'doing-up'
          } else if (min < 0) {
            CurrentStatus.INFO = '超时!!'
            CurrentStatus.STATUS = 'error-up'
          } else {
            CurrentStatus.INFO = current;
            CurrentStatus.STATUS = 'warn-up'
          }
          return CurrentStatus;
        } else {
          // 9点前的素材 12点清空
          var min2 = 12 * 60 - (myDate.getHours() * 60 + myDate.getMinutes());
          if (min2 < 0){
            CurrentStatus.INFO = '超时!!';
            CurrentStatus.STATUS = 'error-up'

          }else if (min2 < 30){
            CurrentStatus.INFO = this.transTime(min2,myDate.getSeconds());
            CurrentStatus.STATUS = 'error-up'
          }else {
            CurrentStatus.INFO = this.transTime(min2,myDate.getSeconds());
            CurrentStatus.STATUS = 'doing-up'
          }
          return  CurrentStatus;
        }
      }
    },
    Countdown() {
      // new Date().getSeconds();
      return this.$data.myDate.getSeconds();
    },
    removeItem(id) {
      let newArray = [];
      let array = this.$data.list;
      let j = 0;
      for(let i = 0;i<this.$data.list.length;i++){
        if (id != i){
            newArray[j] = array[i];
            j++;
        }
      }
      this.$data.list = newArray;
      // let array = this.$data.list;
      // this.$data.list =  array.filter((item)=>{
      //   return  item.uuid != id;
      // })

      chrome.storage.sync.set({'TodoList': this.$data.list})
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
      //console.log('复制成功');
      document.body.removeChild(transfer);
    },
  },
}
</script>
<style scoped>
.hello{
  animation: ease 0.6s;
}
</style>