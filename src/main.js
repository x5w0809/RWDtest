import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false


import HomeView from './components/HomeView/HomeView.vue'

//定義路由
var routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:HomeView
    },
]

//創建路由對象
var router = new VueRouter({
    routes
})

//切換路由後自動回到頂部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  render: h => h(App),
  //加路由管理器
  router

}).$mount('#app')
