import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import memberRoutes from '@/router/memberRoutes'
import supplierRoutes from '@/router/supplierRoutes'
import adminRoutes from '@/router/adminRoutes'
import { useAuthStore } from '@/stores/useAuthStore'
import { storeToRefs } from 'pinia'

/*
  Routes
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    ...memberRoutes,
    ...supplierRoutes,
    ...adminRoutes
  ]
})

/*
  Guards
*/

router.beforeEach(async (to, from) => {
  const { isAuthenticated } = storeToRefs(useAuthStore())

  if (!isAuthenticated.value && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
