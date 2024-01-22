import type { RouteRecordRaw } from 'vue-router'
import AdminView from '@/views/AdminView.vue'
import ContractTable from '@/components/admin/ContractTable.vue'

export default [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '',
        name: 'redirect-to-contracts',
        redirect: { name: 'contracts' }
      },
      {
        path: 'contracts',
        name: 'contracts',
        component: ContractTable
      }
    ]
  }
] as RouteRecordRaw[]