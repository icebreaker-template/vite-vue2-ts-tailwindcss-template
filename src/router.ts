import type { RouteConfig } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  { path: '/', component: HelloWorld, props: { msg: 'Home' } },
  { path: '/bar', component: HelloWorld, props: { msg: 'Bar' } },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
