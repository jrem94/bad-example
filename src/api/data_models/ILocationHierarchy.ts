/**
 * A location hierarchy is sequential collection of hierarchy nodes that form path through the hierarchical tree structure of organizations.
 * It is used to determine where a location is positioned within any organization and to create commonality between siblings
 * and cousins for easy control.
 *
 * NOTE: It may make more sense to flatten each of these nodes out, and have each one's id, level, and name recorded here.
 */

export interface ILocationHierarchy {
  id: number;
  organizationHierarchyNodeId: number; // FK
  companyHierarchyNodeId: number; // FK
  groupHierarchyNodeId: number; // FK
  divisionHierarchyNodeId: number; // FK
  marketHierarchyNodeId: number; // FK
  primaryLocationHierarchyNodeId: number; // FK
  locationHierarchyNodeId: number; // FK
}