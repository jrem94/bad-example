/**
 * A contract is created by a supplier (after negotiation) and the creation of letters of agreement for members to sign
 * and agree to. Because of the fluid nature of contracts most of the data is stored in an amendment which references this record.
 */

export interface IContract {
  id: number;
  contractNumber: number;
  supplierId: number; // FK
}