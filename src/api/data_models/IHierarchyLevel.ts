/**
 * A hierarchy level is simple the level or sequential position of any hierarchy node in the organization's hierarchy tree
 * structure. The level helps determine what hierarchy nodes are at, above, or below the current one. It is especially helpful
 * when we need to select or update multiple locations based on a shared ancestor or specifically target one node from the
 * entire tree.
 * 0 - Organization
 * 1 - Company
 * 2 - Group
 * 3 - Division
 * 4 - Market
 * 5 - Primary Location AKA Facility
 * 6 - Location
 */

export interface IHierarchyLevel {
  id: number;
  level: number;
  name: string;
}