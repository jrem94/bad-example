/**
 * A group is simply a bucket created for a contract / amendment and tier that letters of agreement can be added to so that
 * they are easier for the end user to manage. Groups can also be marked as Auto Add via the "isAutoAdd" column - this
 * allows all locations that fall at or below the perimeter hierarchy node to be automatically added to the group
 * so long as they had access to the contract / amendment. In such cases, there can only ever be one auto add group in any
 * branch of a hierarchy - meaning that if an auto add group is created on a Division, an auto add group can not be created
 * for that division's market. Auto add groups can be created as high as the company level. Non-auto add groups, also known
 * as "manual groups", can be created at any level and there can be multiple such groups at or below the same hierarchy node.
 *
 * NOTE: We may need to do something similar to revisions and amendments here - where the group persists although the
 * data is able to be fluid. We may want to adjust a group's tier or move it across amendments while retaining the same
 * group id and keeping track of what changes the group went through. Right now, we can track members who where added to and
 * removed from the group by finding revisions with the group's id.
 */

export interface IGroup {
  id: number;
  perimeterHierarchyNodeId: number; // FK
  amendmentId: number; // FK
  tierId: number; // FK
  isAutoAdd: boolean;
}