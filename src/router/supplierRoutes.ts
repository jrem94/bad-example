import type { RouteRecordRaw } from 'vue-router'
import SupplierView from '@/views/SupplierView.vue'

export default [
  {
    path: '/supplier',
    name: 'supplier',
    component: SupplierView,
    children: [

    ]
  }
] as RouteRecordRaw[]