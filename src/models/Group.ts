export interface IGroupDto {
  id: number
  perimeterHierarchyNodeId: number
  amendmentId: number
  tierId: number
  isAutoAdd: boolean
  participantIds: number[];
}

export class Group implements IGroupDto {
  id: number
  perimeterHierarchyNodeId: number
  amendmentId: number
  tierId: number
  isAutoAdd: boolean
  participantIds: number[]
}