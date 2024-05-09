import Vue from 'vue'
import './style.css'
import App from './App.vue'
import type { AnchorHTMLAttributes } from 'vue'
import * as ds from './assets/ds.png'
console.log(ds)
export type xx = AnchorHTMLAttributes
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: (h) => h(App)
})
