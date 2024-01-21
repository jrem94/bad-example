import type { IAmendment } from '@/api/data_models/IAmendment'
import { amendmentData } from '@/api/data/amendmentData'

export const getAmendmentById = (id: number): IAmendment => {
  return amendmentData.find(x => x.id === id)
}

export const getAllAmendments = (): IAmendment[] => {
  return amendmentData
}

export const getAmendmentsByContractId = (contractId: number): IAmendment[] => {
  return amendmentData.filter(x => x.contractId === contractId)
}