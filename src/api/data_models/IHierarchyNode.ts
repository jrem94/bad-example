/**
 * A hierarchy node represents a single point of an organization's hierarchical structure and includes
 * the id of the hierarchy node above it, the hierarchy level of this node, and the name associated
 * with this point of the org's hierarchy tree.
 */

export interface IHierarchyNode {
  id: number;
  parentHierarchyNodeId: number; // Reference
  hierarchyLevelId: number; // FK
  name: string;
}