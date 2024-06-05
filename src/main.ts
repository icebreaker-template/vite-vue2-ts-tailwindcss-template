import Vue from 'vue'
import './style.css'
import { PiniaVuePlugin, createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false

const pinia = createPinia()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  pinia,
})
