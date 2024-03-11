import type { IRevisionDto } from '@/models/Revision'
import { Revision } from '@/models/Revision'

export interface ILetterOfAgreementDto {
  id: number
  contractId: number
  locationId: number
  currentRevision: IRevisionDto
  pendingRevision: IRevisionDto
  status: string
}

export class LetterOfAgreement implements ILetterOfAgreementDto {
  id: number
  contractId: number
  locationId: number
  currentRevision: Revision
  pendingRevision: Revision
  status: string

  constructor(id: number, contractId: number, locationId: number, currentRevision: Revision, pendingRevision: Revision, status: string) {
    this.id = id
    this.contractId = contractId
    this.locationId = locationId
    this.currentRevision = currentRevision
    this.pendingRevision = pendingRevision
    this.status = status
  }

}


// export default class LetterOfAgreement {
//   id: string
//   contractNumber: number
//   tierNumber: number
//   groupId: string
//   locationId: string
//   primaryLocationId: string
//   status: string
//   tag?: string
//
//   constructor(id: string, contractNumber: number, tierNumber: number, groupId: string, locationId: string,
//     primaryLocationId: string, status: string, tag?: string) {
//     this.id = id
//     this.contractNumber = contractNumber
//     this.tierNumber = tierNumber
//     this.groupId = groupId
//     this.locationId = locationId
//     this.primaryLocationId = primaryLocationId
//     this.status = status
//     this.tag = tag
//   }
//
//   isPrimaryLocation(): boolean {
//     return this.locationId === this.primaryLocationId
//   }
//
//   isLocationOf(primaryId: string): boolean {
//     return this.primaryLocationId === primaryId
//   }
// }