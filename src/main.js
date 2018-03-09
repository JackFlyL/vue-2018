// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

/* eslint-disable no-new */
new Vue({
  el: '#app', // 一个在页面上已存在的DOM 元素作为Vue 实例的挂载目标 挂载到id为app的元素下面
  components: { App },
  template: '<App/>'
})
