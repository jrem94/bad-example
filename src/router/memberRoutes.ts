import type { RouteRecordRaw } from 'vue-router'
import MemberView from '@/views/MemberView.vue'
import StatusTable from '@/components/member/StatusTable.vue'

export default [
  {
    path: '/member',
    name: 'member',
    component: MemberView,
    children: [
      {
        path: '',
        name: 'redirect-to-status',
        redirect: { name: 'status' }
      },
      {
        path: 'status',
        name: 'status',
        component: StatusTable
      }
    ]
  }
] as RouteRecordRaw[]