/**
 * Group actions only apply specifically to the group itself, not the individual LOAs
 * So when we create a manual group, this only applies, to when we actually create it.
 * Upon doing so, any initial participating LOAs will have been given a corresponding status
 * such as Pending Approval. The supplier will see these packaged within a group however, but the
 * individual LOAs have their own actions.
 */

export enum GroupActions {
  CreateManual,
  CreateAutoAdd,
  Dissolve,
  AddParticipants,
  RemoveParticipants,
  ReviseParticipants
}