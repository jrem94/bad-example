import { amendmentAttributeData } from '@/api/data/amendmentAttributeData'

export const getAmendmentAttributeById = (id: number) => {
  return amendmentAttributeData.find(x => x.id === id)
}

export const getAllAmendmentAttributes= () => {
  return amendmentAttributeData
}

export const getAmendmentAttributesByAmendmentId = (amendmentId: number) => {
  return amendmentAttributeData.find(x => x.amendmentId === amendmentId)
}