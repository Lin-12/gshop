// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  // render: h => (App) 这句话没有显示App 原因不明
  components: { App },
  template: '<App/>',
  router
})
