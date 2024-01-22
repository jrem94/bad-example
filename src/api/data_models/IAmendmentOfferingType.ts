/**
 * Offering types that are applicable to the amendment. If excludeFromAmendment is true, then we exclude locations with
 * that given offering type from visibility on the contract.
 */

export interface IAmendmentOfferingType {
  id: number;
  amendmentId: number; // FK
  offeringTypeId: number; // FK
  excludeFromAmendment: boolean;
}