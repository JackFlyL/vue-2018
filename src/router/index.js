import Vue from 'vue'
import Router from 'vue-router'
import NewsChannel from '../components/NewsChannel'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news_channel',
      name: 'news_channel',
      component: NewsChannel
    }
  ]
})
