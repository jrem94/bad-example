import type { IStatus } from '@/api/data_models/IStatus'

export const statusData: IStatus[] = [
  {
    id: 1,
    name: 'Init',
    primaryStatusName: 'Init',
    primaryStatusNumber: 0,
    secondaryStatusName: null,
    secondaryStatusNumber: null,
  },
  {
    id: 2,
    name: 'New',
    primaryStatusName: 'New',
    primaryStatusNumber: 1,
    secondaryStatusName: null,
    secondaryStatusNumber: null,
  },
  {
    id: 3,
    name: 'New - Pending Approval',
    primaryStatusName: 'New',
    primaryStatusNumber: 1,
    secondaryStatusName: 'Pending Approval',
    secondaryStatusNumber: 10,
  },
  {
    id: 4,
    name: 'Committed',
    primaryStatusName: 'Committed',
    primaryStatusNumber: 2,
    secondaryStatusName: null,
    secondaryStatusNumber: null,
  },
  {
    id: 5,
    name: 'Committed - Pending Approval',
    primaryStatusName: 'Committed',
    primaryStatusNumber: 2,
    secondaryStatusName: 'Pending Approval',
    secondaryStatusNumber: 10,
  },
]