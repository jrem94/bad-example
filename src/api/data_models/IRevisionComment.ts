/**
 * A revision comment is simply a comment tied to a specific reason at a given point in time. These
 * comments exist outside the typical revision as the supplier and member can send many comments
 * back and forth before any substantial changes are made to the letter of agreement. We add certain
 * visibility permissions and viewed by data to ensure internal communication is kept confidential and
 * so that accountability is taken if someone views a comment without dealing with it - taking away
 * excuses like "whoops, I didn't see that".
 */

export interface IRevisionComment {
  id: number;
  commentId: number; // FK
  revisionId: number; // FK
  isVisibleToSupplier: boolean;
  hasBeenViewedBySupplier: boolean;
  isVisibleToMember: boolean;
  hasBeenViewedByMember: boolean;
  viewedByUserId: number; // FK
  viewedByDate: Date;
  createdDate: Date;
}