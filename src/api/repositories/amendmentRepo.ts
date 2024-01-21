import type { IAmendment } from '@/api/data_models/IAmendment'
import { amendmentData } from '@/api/data/amendmentData'

export const amendmentRepo = () => {
  const getAmendmentById = (id: number): IAmendment | undefined => {
    return amendmentData.find(x => x.id === id)
  }

  const getAllAmendments = (): IAmendment[] => {
    return amendmentData
  }

  const getAmendmentsByContractId = (contractId: number): IAmendment[] => {
    return amendmentData.filter(x => x.contractId === contractId)
  }

  return {
    getAmendmentById,
    getAllAmendments,
    getAmendmentsByContractId
  }
}