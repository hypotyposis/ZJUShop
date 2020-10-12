import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Index from '../components/Index'
import Change from "../components/Change"
import detail from "../components/detail"
import Search from "../components/Search"
import catalog from "../components/catalog"
import commodity from "../components/commodity"
import addcom from "../components/addcom"


Vue.use(Router);

export default new Router(
  {
    base:'/',
    mode:'history'
  }
)

export const routes=[
  {
    path: '/',
    name:Index,
    component:Index
  },{
    path:'/addcom',
    name:addcom,
    component:addcom
  },

  {
    path:'/catalog',
    name:catalog,
    component:catalog
  },{
    path:'/commodity',
    name:commodity,
    component:commodity
  },
  {
    path: '/login',
    name:Login,
    component: Login
  },
  {
    path:'/register',
    name:Register,
    component:Register
  },
  {
    path:'/detail/:spuId',
    name:detail,
    component:detail
  },
  {
    path:'/retrieve',
    name:Change,
    component:Change
  },
  {
    path:'/search',
    name:Search,
    component:Search
  }
  ];

