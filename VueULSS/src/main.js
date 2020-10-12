// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { routes } from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {userToken} from "./vuex/mutations"
import store from './vuex/store'


Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router=new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
});
const store1={
  state:{
    token:sessionStorage.getItem('userToken')||''
  },
};
router.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.requireAuth)){
    if(sessionStorage.getItem("userName")==="null"){
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }else{
      next();
    }
  }
  else{
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
