/**
 * Offering types that are applicable to the amendment.
 */

export interface IAmendmentOfferingType {
  id: number;
  amendmentId: number; // FK
  offeringTypeId: number; // FK
}