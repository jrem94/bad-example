/**
 * Metadata that informs what type of facility a location is, and helps determine what locations (given the facility type)
 * are allowed to agree to a contract / amendment.
 */

export interface IFacilityType {
  id: number;
  name: string;
}