<template>
 <div>
   <transition
       name="animate__animated animate__bounce"
       enter-active-class="animate__bounceInRight"
       leave-active-class="animate__backOutRight"

   appear>


   <div class="body">
     <div style="margin-bottom: 5px;">
       <span style="color: #666;">Deadline match the name</span>
       <span class=""><input style="width: 45px;margin-right: 4px; float:right;border: #5D576B 1px dashed;color: #666;"
                             type="text" name="User" @blur="savaSetting" v-model="Setting.UserName">
        </span>
     </div>
     <div class="autokill">
       <span>Auto remove some page </span>

       <span class="title">Enable<input type="checkbox" @click="changeAutoKillPage"  :checked="Setting.AutoKillPage">
        </span>
     </div>
     <div class="autokill">
       <span>Auto hidden the header </span>
       <span class="title">Enable<input type="checkbox"  @click="changeAutoHiddenHeader"  :checked="Setting.AutoHiddenHeader">
        </span>
     </div>
     <div id="app">
     </div>
   </div>
   </transition>
   <div class="setting">
     <router-link to="/"><h3>Click to back!</h3></router-link>
   </div>

 </div>
</template>

<script>
export default {
  mounted() {
    const oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = 'js/vendors.js';
    document.body.appendChild(oScript);
    chrome.storage.sync.get("Setting",(item)=>{
      this.$data.Setting = item.Setting;
      console.log("读取数据成功")
    })
  },
  name: "setting",
  methods:{
    changeAutoKillPage(){
       this.$data.Setting.AutoKillPage = !this.$data.Setting.AutoKillPage;
       this.savaSetting();
    },
    changeAutoHiddenHeader(){
      this.$data.Setting.AutoHiddenHeader = !this.$data.Setting.AutoHiddenHeader;
      this.savaSetting();
    },

    savaSetting(){
      chrome.storage.sync.set({"Setting":this.$data.Setting})
    },
  },
  data(){
      return {
        Setting:{}
      }
  },

}
</script>
<style scoped>
.body {
  height: 310px!important;
  width: 275px;
  overflow-y: hidden;
}

h2 {
  /*border-bottom: #f3e6c8 1px solid;*/
  color: #5D576B;
  margin: 10px 10px 0;
  padding: 0 0 10px;
}


a, a:checked {
  color: #b2f6ac;
  text-decoration: none;
}

a:hover {
  color: #71e766;
}

small {
  font-size: 10px;
  color: #c2c0c0;
}

.title {
  float: right;
}

.autokill {
  position: relative;
  color: #666;
  margin-bottom: 5px;
}

#title {
  margin: 0;
  height: 37px;
  line-height: 37px;
}

input:focus {
  border: #5D576B solid 1px;
  outline: #5D576B;
}
</style>