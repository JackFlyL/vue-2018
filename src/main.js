// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import { Button, Cell, Header, Lazyload, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import App from './components/Home'
import Home from './components/NewsChannel'

Vue.config.productionTip = false // 来关闭生产模式下给出的提示.
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.use(Lazyload)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')

// new Vue({
//   el: '#app', // 一个在页面上已存在的DOM 元素作为Vue 实例的挂载目标 挂载到id为app的元素下面
//   components: { App },
//   template: '<App/>'
// })
