import { amendmentFacilityTypeData } from '@/api/data/amendmentFacilityTypeData'
import type { IAmendmentFacilityType } from '@/api/data_models/IAmendmentFacilityType'


export const getAmendmentFacilityTypeById = (id: number): IAmendmentFacilityType | undefined => {
  return amendmentFacilityTypeData.find(x => x.id === id)
}

export const getAllAmendmentFacilityTypes = (): IAmendmentFacilityType[] => {
  return amendmentFacilityTypeData
}

export const getAmendmentFacilityTypesByAmendmentId = (amendmentId: number): IAmendmentFacilityType[] => {
  return amendmentFacilityTypeData.filter(x => x.amendmentId === amendmentId)
}