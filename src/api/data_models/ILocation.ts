/**
 * A location represents a single location that is managed by a member. Locations have facility and offering types which
 * help to determine when a letter of agreement is created for a specific location. Additionally, a letter of agreement
 * impacts this specific physical location.
 */

export interface ILocation {
  id: number;
  locationHierarchyId: number; // FK
  facilityTypeId: number; // FK
  offeringTypeId: number; // FK
  addressId: number; // FK
  dea: string;
  hin: string;
  phoneNumber: string;
  name: string;
}