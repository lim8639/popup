<template>
 <div>
   <transition
       name="animate__animated animate__bounce"
       enter-active-class="animate__bounceInRight"
       leave-active-class="animate__backOutRight"
   appear>
   <div class="body">
     <div class="autokill">
       <span>Auto remove some page</span>
       <span class="title">Enable<input type="checkbox" @change="changeConfigAutoHighLight" :checked="Config.AutoHighLight">
        </span>
     </div>
     <div class="autokill">
       <span>the highlight keywords</span>
       <span>
         <textarea @blur="changeConfigKeywords" name="keywords" v-model="keywords" ></textarea>
       </span>
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
    chrome.storage.sync.get("Config", (item) => {
      this.$data.Config = item.Config;
      this.$data.keywords =  item.Config.keywords.join(' ');
    })

  },
  name: "setting",
  methods:{
    saveConfig(){
      chrome.storage.sync.set({"Config": this.$data.Config})
    },
    changeConfigAutoHighLight(){
      this.$data.Config.AutoHighLight = !this.$data.Config.AutoHighLight;
      this.saveConfig()
    },
    changeConfigKeywords(){
       this.$data.Config.keywords = this.keywords.split(" ")
        this.saveConfig()
    }
  },
  data(){
      return {
        Config:{
        },
        keywords:''
      }
  },
}
</script>
<style scoped>

textarea{
  margin-top: 5px;
  width: 294px;
  height: 100px;
  /* border: 1px solid; */
  border: 1px solid #dedede;
  background-color: #fdfdfd;
  color: #8b8b8b;
  font-family: 'youyuan',serif;
  font-size: 14px;
  resize: none;
  outline-color: #a7a7a7;
}
textarea:focus{

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