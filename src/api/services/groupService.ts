import type { IGroup } from '@/api/data_models/IGroup'
import type { IGroupDto } from '@/models/Group'
import { groupRepo } from '@/api/repositories/groupRepo'
import { revisionRepo } from '@/api/repositories/revisionRepo'
import type { IRevision } from '@/api/data_models/IRevision'
import type { IAmendment } from '@/api/data_models/IAmendment'
import { amendmentRepo } from '@/api/repositories/amendmentRepo'
import { revisionStateMachine, StateTrigger } from '@/api/utils/revisionStateMachine'

export const groupService = () => {
  const GroupRepo = groupRepo()
  const RevisionRepo = revisionRepo()
  const AmendmentRepo = amendmentRepo()
  const RevisionStatusStateMachine = revisionStateMachine()

  const createNewGroup = (groupDto: IGroupDto): number => {
    const group: IGroup = {
      perimeterHierarchyNodeId: groupDto.perimeterHierarchyNodeId,
      amendmentId: groupDto.amendmentId,
      tierId: groupDto.tierId,
      isAutoAdd: groupDto.isAutoAdd
    }

    const createdGroup = GroupRepo.add(group)
    const amendment: IAmendment = AmendmentRepo.getAmendmentById(createdGroup.amendmentId)

    for (let i = 0; i < groupDto.participantIds.length; i++) {
      const loaId = groupDto.participantIds[i]
      const currentRevision: IRevision = RevisionRepo.getCurrentRevisionByLetterOfAgreementId(loaId)
      const pendingRevision: IRevision | undefined = RevisionRepo.getPendingRevisionByLetterOfAgreementId(loaId)

      if (pendingRevision) {
        RevisionRepo.discardRevision(pendingRevision)
      }

      const newPendingRevision: IRevision = {
        letterOfAgreementId: loaId,
        statusId: RevisionStatusStateMachine.getChangedStateWithTrigger(currentRevision, StateTrigger.AddToGroup),
        previousRevisionId: currentRevision.id,
        amendmentId: group.amendmentId,
        groupId: createdGroup.id,
        tierId: createdGroup.tierId,
        submittedDate: new Date(),
        startDate: amendment.startDate,
        endDate: amendment.endDate,
        createdDate: new Date(),
        isDiscarded: false
      }

      RevisionRepo.add(newPendingRevision)
    }

    if (!createdGroup.id) {
      throw Error(`Something when wrong creating new group.`)
    }

    return createdGroup.id
  }

  return {
    createNewGroup
  }
}