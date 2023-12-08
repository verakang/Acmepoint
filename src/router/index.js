import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/test1',
      component: () => import('../views/Test1Vue.vue')
    },
    {
      path: '/test2',
      component: () => import('../views/Test2Vue.vue')
    }
  ]
})

export default router
