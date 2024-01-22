import type { IRevision } from '@/api/data_models/IRevision'
import { revisionData } from '@/api/data/revisionData'

export const revisionRepo = () => {

  const add = (revision: IRevision): IRevision => {
    if (!revision.id) {
      if (revisionData.length) {
        revision.id = revisionData[revisionData.length - 1].id
      } else {
        revision.id = 1
      }
    }

    revisionData.push(revision)

    return revision;
  }

  const discardRevision = (revision: IRevision) => {
    revision.isDiscarded = true
    const index = revisionData.indexOf(revision)
    revisionData[index] = revision
  }

  const getCurrentRevisionByLetterOfAgreementId = (letterOfAgreementId: number): IRevision => {
    // It is a pending revision if its part of the LOA, not discarded, has a start date not in the future
    // and was the last to be approved.

    return revisionData
      .filter((x: IRevision) => x.letterOfAgreementId === letterOfAgreementId)
      .filter((x: IRevision) => !x.isDiscarded)
      .filter((x: IRevision) => x.startDate as Date <= new Date())
      .filter((x: IRevision) => x.approvedDate)
      .sort((a: IRevision, b: IRevision) => (a.approvedDate as Date).getTime() - (b.approvedDate as Date).getTime())[0]
  }

  const getPendingRevisionByLetterOfAgreementId = (letterOfAgreementId: number): IRevision | undefined => {
    // It is a pending revision if its part of the LOA, not discarded, has a start date not in the future
    // and has yet to be approved.

    return revisionData
      .filter((x: IRevision) => x.letterOfAgreementId === letterOfAgreementId)
      .filter((x: IRevision) => !x.isDiscarded)
      .filter((x: IRevision) => (x.startDate as Date).getTime() <= new Date().getTime())
      .find((x: IRevision) => !x.approvedDate)
  }

  return {
    add,
    discardRevision,
    getCurrentRevisionByLetterOfAgreementId,
    getPendingRevisionByLetterOfAgreementId,
  }
}