/**
 * Facility types that are applicable to the amendment. If excludeFromAmendment is true, then we exclude locations with
 * that given facility type from visibility on the contract.
 */

export interface IAmendmentFacilityType {
  id: number;
  amendmentId: number; // FK
  facilityTypeId: number; // FK
  excludeFromAmendment: boolean;
}