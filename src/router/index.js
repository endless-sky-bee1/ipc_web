import { createRouter, createWebHistory } from 'vue-router'
import LiveView from '@/views/LiveView.vue'
import ConfigView from '@/views/ConfigView.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Live',
    component: LiveView,
    meta: { requiresAuth: true }
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router