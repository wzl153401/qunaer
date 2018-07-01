// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/iconfont/iconfont.css'
import 'assets/style/base/border.css'
import 'assets/style/base/reset.css'

import VueLazyload from 'vue-lazyload'

import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'

import store from './store/index'

Vue.use(VueSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
  attempt: 1
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
