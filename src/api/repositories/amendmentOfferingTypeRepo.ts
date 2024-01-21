import { amendmentOfferingTypeData } from '@/api/data/amendmentOfferingTypeData'
import type { IAmendmentOfferingType } from '@/api/data_models/IAmendmentOfferingType'


export const getAmendmentOfferingTypeById = (id: number): IAmendmentOfferingType | undefined => {
  return amendmentOfferingTypeData.find(x => x.id === id)
}

export const getAllAmendmentOfferingTypes = (): IAmendmentOfferingType[] => {
  return amendmentOfferingTypeData
}

export const getAmendmentOfferingTypesByAmendmentId = (amendmentId: number): IAmendmentOfferingType[] => {
  return amendmentOfferingTypeData.filter(x => x.amendmentId === amendmentId)
}