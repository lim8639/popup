<template>
  <div>
    <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInRight"
        leave-active-class="animate__backOutRight"
        appear>


      <div class="body">
       <h3>声明</h3>
        <p>&nbsp;&nbsp;本插件仅以优化工作流程使用,且仅适用于创意审核商品组。代码开源，遵守MIT协议，遵守京东公司规定，不得作其他用途。</p>
        <p>&nbsp;&nbsp;本插件也代表我在工作中，对优化工作流程的探讨，在开发插件的过程中，对工作有所思考，在开发上，锻炼了开发能力。</p>

        <p class="highlight">&nbsp;&nbsp;谨以此插件送给最好的朋友wangman，希望她工作顺利！</p>
        <p class="author">&nbsp;&nbsp;@linpengfei7</p>
      </div>
    </transition>
    <div class="setting">
      <router-link to="/"><h3>点击返回</h3></router-link>
    </div>

  </div>
</template>

<script>
export default {

  name: "declare.vue"

}
</script>
<style scoped>
.highlight{
  font-weight: 600;
  /*color: #e1251b;*/
}
.author{
  text-align: right;
}
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