/**
 * An amendment can have certain attributes or questions that the supplier would like members to answer
 * or fill out. This links the question text to the amendment.
 */

export interface IAmendmentAttribute {
  id: number;
  amendmentId: number; // FK
  questionText: string;
}