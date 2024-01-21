/**
 * A revision is not only the current state of a letter of agreement, but it also serves as a historical record by which
 * users can see how a letter of agreement changed over time. It status and transition status give a clear indication of
 * what the state the revision is or was in. It also contains a start and end date so that we can determine
 * if the revision is currently active or not. There are no updates to the revision, just new inserts.
 */

export interface IRevision {
  id: number;
  letterOfAgreementId: number; // FK
  revisionStatusId: number; // FK
  revisionCommentId: number; // FK
  previousRevisionId: number; // Reference
  amendmentId: number;  // FK
  groupId?: number;  // FK
  submittedUserId: number;  // FK
  approvedUserId: number;  // FK
  startDate: Date;
  endDate: Date;
  createdDate: Date;
}