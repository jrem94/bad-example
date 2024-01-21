/**
 * A letter of agreement is automatically generated for all locations that have access to a given contract / amendment.
 * Because of the fluid nature of the letter of agreement most of the data is stored in a revision which references this record.
 */

export interface ILetterOfAgreement {
  id: number;
  locationId: number; // FK
}