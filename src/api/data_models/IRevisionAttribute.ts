/**
 * When an amendment has an attribute that the supplier would like the member to fill out prior to
 * submitting a letter of agreement, the member must be able to provide an answer. This links the revision
 * to the amendment attributes and provides the answer / data requested.
 */

export interface IRevisionAttribute {
  id: number;
  amendmentAttributeId: number;  // FK
  revisionId: number;  // FK
  answerText: string;
}