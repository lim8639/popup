<template>
  <div>
    <h2>
      WorkInDay<small>©linpengfei7 </small>
    </h2>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      page:'/bar'
    }
  },
  components: {

  },
  methods:{

  }
}
</script>
<style>
/*滚动条整体样式*/
::-webkit-scrollbar {
  width: 5px;
  /*竖向滚动条的宽度*/
  height: 5px;
  /*横向滚动条的高度*/
}
::-webkit-scrollbar-thumb {
  /*滚动条里面的小方块*/
  background: #c4c4c4;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  /*滚动条轨道的样式*/
  background: #ececec;
  border-radius: 5px;
}
button {
  height: 30px;
  width: 30%;
  outline: none;
}
.btn-img{
  margin-top: -2px;
  margin-left: -3px;
  padding: 0;
  width: 120%;
  height: 120%;
}
.setting {
  border-top: #e0e0e0 1px solid;
  position: relative;
  height: 30px;
  width: 100%;
}
.tui-checkbox:checked {
  background:#2aa81a
}
.tui-checkbox {
  width: 20px;
  height: 20px;
  background-color:#ffffff;
  border:solid 1px #dddddd;
  -webkit-border-radius:50%;
  border-radius:50%;
  font-size:0.8rem;
  margin:5px 0;
  padding:0;
  position:relative;
  display:inline-block;
  vertical-align:top;
  cursor:default;
  -webkit-appearance:none;
  -webkit-user-select:none;
  user-select:none;
  -webkit-transition:background-color ease 0.1s;
  transition:background-color ease 0.1s;
  outline: none;
}
.tui-checkbox:checked::after {
  content:'';
  top: 3px;
  left: 4px;
  position:absolute;
  background:transparent;
  border:#fff solid 2px;
  border-top:none;
  border-right:none;
  height:6px;
  width:10px;
  -moz-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  -webkit-transform:rotate(-45deg);
  transform:rotate(-45deg);
}

/* 系统样式*/
html,body{
  background-color: #fbfbff;
}
.body {
  height: 370px;
  width: 300px;
}
ul,
li {
  margin: 0;
  padding: 0;
}

.fixed button {
  width: 50px;
  line-height: 20px;
  height: 24px;
  color: #8e8e8e;
  background: #e3e3e8;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 8%);
  border-radius: 0 15px 15px 0;
  border-right: 1px solid #e3e3e8 !important;
  border-top: 1px solid #e3e3e8 !important;
  border-bottom: 1px solid #e3e3e8 !important;
  border-left: 1px solid #ffffff !important;
}

.fixed button:hover {
  height: 26px;
}

#data {

  color: #000000;
  outline: none;
  padding-left: 10px;
  background: #e3e3e8;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 4%);
  margin-left: 10px;
  height: 20px;
  width: 210px;
  line-height: 20px;
  border: 1px solid #e3e3e8 !important;
  border-radius: 15px 0 0 15px;
}


h2 {
  /*border-bottom: #f3e6c8 1px solid;*/
  color: #000000;
  margin: 10px 10px  0;
  text-align: center;
  padding: 0 0 10px;
}
h3{
  margin: 0;
  height: 37px;
  line-height: 37px;
  color: #999999;
  padding-left: 10px;
  font-family: 'youyuan';
  text-shadow: 0.1em 0.1em #e7e7e7
}
h3:hover{
  color: #bbbbbb;
  text-shadow: 0.1em 0.1em #fff8eb
}
a{
  text-decoration: none;
}
small {
  font-size: 10px;
  color: #c2c0c0;
}

@font-face{
  font-family: 'youyuan';
  src : url('./../../assets/FengYu-HuaWenYuanTi-2.ttf');
}


@keyframes one-in {

  from {
    margin-top: 20px;
    margin-left: 100px;
    /* height: 100%; */
  }
  to {
    margin-top: 1px;
    margin-left: -2px;
    /* height: 100%; */
  }
}

.wangman5-enter,
.wangman5-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-top: 20px;
  margin-left: 100px;
}

.wangman5-enter-to,
.wangman5-leave /* .fade-leave-active below version 2.1.8 */ {
  margin-top: 1px;
  margin-left: -2px;
}
.come-in{
  animation: one-in 0.6s ease ;
}
.go-up{
  animation: one-in 1s reverse;
}
</style>
