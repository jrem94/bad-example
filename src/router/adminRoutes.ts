import type { RouteRecordRaw } from 'vue-router'
import AdminView from '@/views/AdminView.vue'

export default [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [

    ]
  }
] as RouteRecordRaw[]