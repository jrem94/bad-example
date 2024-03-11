import type { IHierarchyNodeDto } from '@/models/HierarchyNode'
import { HierarchyNode } from '@/models/HierarchyNode'
import { VisibilityType } from '@/enums/VisibilityType'

export interface IVisibilityDto {
  id: number;
  amendmentId: number;
  perimeterHierarchyNode: IHierarchyNodeDto;
  visibilityType: VisibilityType;
}

export class Visibility implements  IVisibilityDto {
  id: number;
  amendmentId: number;
  perimeterHierarchyNode: HierarchyNode;
  visibilityType: VisibilityType;

  constructor(id: number, amendmentId: number, perimeterHierarchyNode: HierarchyNode, visibilityType: VisibilityType) {
   this.id = id
   this.amendmentId = amendmentId
   this.perimeterHierarchyNode = perimeterHierarchyNode
   this.visibilityType = visibilityType
  }
}