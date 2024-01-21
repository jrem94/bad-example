import type { IAmendmentVisibility } from '@/api/data_models/IAmendmentVisibility'
import { amendmentVisibilityData } from '@/api/data/amendmentVisibilityData'

export const getAmendmentVisibilityById = (id: number): IAmendmentVisibility | undefined => {
  return amendmentVisibilityData.find(x => x.id === id)
}

export const getAllAmendmentVisibilities = (): IAmendmentVisibility[] => {
  return amendmentVisibilityData
}

export const getAmendmentVisibilitiesByAmendmentId = (amendmentId: number): IAmendmentVisibility[] => {
  return amendmentVisibilityData.filter(x => x.amendmentId === amendmentId)
}

export const getAmendmentVisibilitiesByVisibilityTypeId = (visibilityTypeId: number): IAmendmentVisibility[] => {
  return amendmentVisibilityData.filter(x => x.visibilityTypeId === visibilityTypeId)
}

export const getAmendmentVisibilitiesByPerimeterHierarchyNodeId = (perimeterHierarchyNodeId: number): IAmendmentVisibility[] => {
  return amendmentVisibilityData.filter(x => x.perimeterHierarchyNodeId === perimeterHierarchyNodeId)
}