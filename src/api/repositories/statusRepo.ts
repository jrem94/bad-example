import type { IStatus } from '@/api/data_models/IStatus'
import { statusData } from '@/api/data/statusData'

export const statusRepo = () => {

  const getStatusById = (id: number): IStatus | undefined => {
    return statusData.find(x => x.id === id)
  }

  return {
    getStatusById
  }
}