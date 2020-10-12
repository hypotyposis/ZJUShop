<template>
  <div id="app">
    <div class="logHeader">
      <p>欢迎来到SHOPZJU</p>
      <p v-show="!isLogin">，请登录哦亲</p>
      <p v-show="isLogin">，{{currentUser}}</p>
      <div class="cartHeader"><router-link to="/cart"><i class="el-icon-shopping-cart-2"></i>购物车</router-link></div>
      <div class="loginUser">
        <div class="logAndReg" v-show="!isLogin">
          <router-link to="/login" >登录</router-link>
          <router-link to="/Register" >注册</router-link>
<!--          <router-link to="/commodity">商品管理</router-link>-->
        </div>
        <div class="userHome" v-show="isLogin">
          <router-link to="/login">【退出】</router-link>
          <router-link v-bind:to="'/home/'+currentUser+'/basic'">
            <img src="./assets/img/defaultImg.jpeg" alt="userimg">
          </router-link>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <header>
      <div class="logo"><router-link to="/"><img src="./assets/img/logo.png"/></router-link></div>
      <div class="search">
        <el-input prefix-icon="el-icon-search" @keyup.enter.native="searchItem(searchKey)" v-model="searchKey" placeholder="请输入内容" style="margin-top: 15px">
          <el-button slot="append" @click="searchItem(searchKey)">搜索</el-button>
        </el-input>
      </div>
    </header>
    <div class="container" :style="{'min-height': minHeight}">
      <router-view/>
    </div>
    <footer>
      <p class="fp2">地址：浙江大学玉泉校区    &nbsp;电话：400-2016-123</p>
      <p class="fp3">技术支持：2016-软件</p>
    </footer>
  </div>
</template>

<script>
  export default {
  name: 'App',
    data(){
      return{
        searchKey:'',
        defaultImageUrl:"./assets/img/defaultImg.jpeg",
        minHeight:0
      }
    },
  methods:{
    searchItem: function(key){
      this.$router.push({path:"/search",query:{words:key}});
      this.searchKey="";
      this.$router.go(0);
    }
  },
  computed:{
    currentUser(){
      return this.$store.getters.currentUser;
    },
    isLogin(){
      if(sessionStorage.getItem("userName")&&sessionStorage.getItem("userToken")){
        this.$store.commit("userStatus",sessionStorage.getItem("userName"));
      }else{
        this.$store.commit("userStatus",null);
      }
      return this.$store.getters.isLogin;
    },
  },
    mounted() {
      this.minHeight=document.documentElement.clientHeight-260+"px";
      let that=this;
      window.onresize=function(){
        that.minHeight=document.documentElement.clientHeight-260+"px";
      }
    }
  }
</script>

<style>
  template{
    margin:0;
    padding: 0;
    height: 100%;
  }
  header{
    width:100%;
    height:100px;
    margin: 40px auto auto;
  }
  .logo{
    float:left;
    position:relative;
    left:5%;
    width:20%;
    height:100px;
  }
  .logo img{
    cursor: pointer;
    display:block;
    height:80px;
    margin-top:10px;
  }
  .logHeader{
    width:100%;
    height:40px;
    background: orangered;
    position:absolute;
    top:0;
    left: 0;
    right: 0;
    cursor:default;
  }
  .logHeader p{
    font-size:15px;
    color:#cccccc;
    position:relative;
    left:5%;
    float:left;
    margin:10px 0 0 0;
    letter-spacing: 3px;
  }
  .loginUser{
    float:right;
    position:relative;
    right:10%;
    margin-top: 10px;
  }
  .loginUser .logAndReg a{
    color: #cccccc;
    font-size: 15px;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 3px;
  }
  .cartHeader{
    float:right;
    margin-top:10px;
    position:relative;
    right:5%;
  }
  .cartHeader a{
    font-size: 15px;
    color: #cccccc;
    text-decoration: none;
    letter-spacing: 3px;
  }
  .userHome img{
    border-radius: 50px;
    height:30px;
    width:30px;
    float: right;
    margin:0 10px 0 0;

  }
  .userHome a{
    color: #cccccc;
    font-size:15px;
    text-decoration: none;
    float:right;
  }
  .search{
    width:50%;
    height:50px;
    float: right;
    padding:10px;
    position:relative;
    top:10px;
    right:10%;
  }
  .search .el-input .el-button{
    background: orangered;
    color: white;
    border-radius: 0;
    border-color: orangered;
    border-style: solid;
    border-width: 1px;
  }
  .container{
    width:90%;
    margin:auto;
  }

  footer {
    position:absolute;
    width:100%;
    left:0;
    right:0;
    height:120px;
    background:orangered;
    margin:0 auto;
    text-align:center;
  }
  .footer p {
    font:12px/12px 宋体;
    color:#fce1a5;
  }
  .fp2 {
    font:12px/12px 宋体;
    color:#fce1a5;
    padding-top:25px;
  }
  .fp3 {
    font:12px/12px 宋体;
    color:#fce1a5;
    padding-top:25px;
  }
</style>
