import type { IAmendmentVisibility } from '@/api/data_models/IAmendmentVisibility'

export const amendmentVisibilityData: IAmendmentVisibility[] = [
  {
    id: 1,
    amendmentId: 1, // FK
    perimeterHierarchyNodeId: 2, // FK
    visibilityTypeId: 2, // FK
  },
  {
    id: 2,
    amendmentId: 2, // FK
    perimeterHierarchyNodeId: 2, // FK
    visibilityTypeId: 2, // FK
  },
  {
    id: 3,
    amendmentId: 2, // FK
    perimeterHierarchyNodeId: 4, // FK
    visibilityTypeId: 1, // FK
  },
]