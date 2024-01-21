/**
 * The revision status brings the status and transition together for the revision to reference.
 */

export interface IRevisionStatus {
  id: number;
  statusId: number; // FK
  transitionId?: number; // FK
}