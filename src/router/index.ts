import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'list',
    path: '/',
    component: () => import('../views/List.vue')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('../views/Search.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
