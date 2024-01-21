/**
 * Facility types that are applicable to the amendment.
 */

export interface IAmendmentFacilityType {
  id: number;
  amendmentId: number; // FK
  facilityTypeId: number; // FK
}