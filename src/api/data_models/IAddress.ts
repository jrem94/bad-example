/**
 * The physical address of a location.
 */

export interface IAddress {
  id: number;
  country: string;
  city: string;
  stateOrProvince: string;
  streetAddress1: string;
  streetAddress2: string;
  zipcode: string;
}