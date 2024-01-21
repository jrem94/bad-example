/**
 * An amendment visibility is a record that determines certain exceptions to the default access / visibility a location
 * has to a contract and therefore the creation of a letter of agreement. The amendment is referenced alongside a specific
 * hierarchy node that determines whether it and its descendants have access to the amendment and should therefore have a
 * letter of agreement available. The visibility type determines if we are including or excluding the specified branch of
 * the hierarchy. There can be many amendment visibly records that help to specify exactly who can and can't access the
 * amendment. A Division might be excluded, but a Market or Location below the excluded division could be included, resulting
 * in only included hierarchy node and its descendants receiving letters of agreement for the amendment.
 *
 * NOTE: Inclusions always override Exclusions.
 */

export interface IAmendmentVisibility {
  id: number;
  amendmentId: number; // FK
  perimeterHierarchyNodeId: number; // FK
  visibilityTypeId: number; // FK
}