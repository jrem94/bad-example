/**
 * An amendment is not only the current state of a contract, but it also serves as a historical record by which
 * users can see how a contract changed over time. It also contains a start and end date so that we can determine
 * if the amendment is currently active or not. There are no updates to the amendment, just new inserts. The "text"
 * column is literally the legal agreement text (stored as stringified html).
 */

export interface IAmendment {
  id: number;
  contractId: number; // FK
  previousAmendmentId: number; // Reference
  text: string;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
}