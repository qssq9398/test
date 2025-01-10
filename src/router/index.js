import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list.vue'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
import Home from '@/views/layout/home'
import CateGory from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login},
    { path: '/', component: Layout, redirect: '/home',
      children: [
        { path: 'home', component: Home }, 
        { path: 'category', component: CateGory },
        { path: 'cart', component: Cart },
        { path: 'user', component: User },
      ]
    },
    { path: '/search', component: Search},
    { path: '/searchList', component: SearchList},
    { path: '/prodetail/:id', component: ProDetail},
    { path: '/pay', component: Pay},
    { path: '/myorder', component: MyOrder},

  ]
})

export default router
