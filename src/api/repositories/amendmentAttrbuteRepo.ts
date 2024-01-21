import { amendmentAttributeData } from '@/api/data/amendmentAttributeData'
import type { IAmendmentAttribute } from '@/api/data_models/IAmendmentAttribute'

export const getAmendmentAttributeById = (id: number): IAmendmentAttribute | undefined => {
  return amendmentAttributeData.find(x => x.id === id)
}

export const getAllAmendmentAttributes = (): IAmendmentAttribute[] => {
  return amendmentAttributeData
}

export const getAmendmentAttributesByAmendmentId = (amendmentId: number): IAmendmentAttribute[] => {
  return amendmentAttributeData.filter(x => x.amendmentId === amendmentId)
}