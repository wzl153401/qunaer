import Vue from 'vue'
import Router from 'vue-router'
import IndexHeader from '../components/home/index/'
import city from '../components/home/city/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexHeader',
      component: IndexHeader
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
