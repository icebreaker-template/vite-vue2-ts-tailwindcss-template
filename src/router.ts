import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import Demo2 from './components/Demo2.vue'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  { path: '/', component: HelloWorld, props: { msg: 'Home' } },
  { path: '/bar', component: HelloWorld, props: { msg: 'Bar' } },
  { path: '/demo', component: Demo, props: { msg: 'Bar' } },
  { path: '/demo2', component: Demo2, props: { msg: 'Bar' } },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
