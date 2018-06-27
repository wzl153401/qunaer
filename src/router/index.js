import Vue from 'vue'
import Router from 'vue-router'
import IndexHeader from '../components/home/index/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexHeader',
      component: IndexHeader
    }
  ]
})
