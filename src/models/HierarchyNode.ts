import type { HierarchyLevel } from '@/enums/HierarchyLevel'

export interface IHierarchyNodeDto {
  id: number;
  parentHierarchyNode: IHierarchyNodeDto
  hierarchyLevel: HierarchyLevel;
  name: string;
}

export class HierarchyNode implements IHierarchyNodeDto {
  id: number;
  parentHierarchyNode: HierarchyNode;
  hierarchyLevel: HierarchyLevel;
  name: string;

  constructor(  id: number, parentHierarchyNode: HierarchyNode, hierarchyLevel: HierarchyLevel, name: string) {
    this.id = id
    this.parentHierarchyNode = parentHierarchyNode
    this.hierarchyLevel = hierarchyLevel
    this.name = name
  }
}