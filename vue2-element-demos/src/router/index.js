import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Components.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/FormDemo.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/TableDemo.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/AddressDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
