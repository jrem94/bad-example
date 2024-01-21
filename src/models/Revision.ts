import type { ICommentDto } from '@/models/Comment'
import { Comment } from '@/models/Comment'


export interface IRevisionDto {
  id: number
  letterOfAgreementId: number
  statusId: number
  revisionComments: ICommentDto[]
  previousRevisionId: number
  amendmentId: number
  groupId?: number
  submittedUserId: number
  approvedUserId: number
  startDate: Date
  endDate: Date
  createdDate: Date
}

export class Revision implements IRevisionDto {
  id: number
  letterOfAgreementId: number
  statusId: number
  revisionComments: Comment[]
  previousRevisionId: number
  amendmentId: number
  groupId?: number
  submittedUserId: number
  approvedUserId: number
  startDate: Date
  endDate: Date
  createdDate: Date
}