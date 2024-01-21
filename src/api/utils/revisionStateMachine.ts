import type { IRevision } from '@/api/data_models/IRevision'
import type { IStatus } from '@/api/data_models/IStatus'
import { statusRepo } from '@/api/repositories/statusRepo'

export enum StateTrigger {
  AddToGroup
}

export enum StatusType {
  Init = 1,
  New,
  New_PendingApproval,
  Committed,
  Committed_PendingApproval
}

export enum PrimaryStatusNumber {
  Init,
  New,
  Committed
}

export enum SecondaryStatusNumber {
  None,
  PendingApproval
}

export const revisionStateMachine = () => {
  const StatusRepo = statusRepo()

  const getChangedStateIdWithTrigger = (revision: IRevision, trigger: StateTrigger): StatusType => {
    const revisionStatus: IStatus = StatusRepo.getStatusById(revision.statusId)

    switch (trigger) {
      case StateTrigger.AddToGroup:
        return handleAddToGroupTransition(revisionStatus)
      default:
        revisionStatus.id
    }
  }

  const handleAddToGroupTransition = (revisionStatus: IStatus): StatusType => {
    switch (revisionStatus.primaryStatusNumber) {
      case PrimaryStatusNumber.New:
        return StatusType.New_PendingApproval
      case PrimaryStatusNumber.Committed:
        return StatusType.Committed_PendingApproval
      default:
        return revisionStatus.id
    }
  }

  return {
    getChangedStateWithTrigger: getChangedStateIdWithTrigger
  }
}