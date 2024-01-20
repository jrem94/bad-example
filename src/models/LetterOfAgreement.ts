export default class LetterOfAgreement {
  id: string
  contractNumber: number
  tierNumber: number
  groupId: string
  locationId: string
  primaryLocationId: string
  status: string
  tag?: string

  constructor(id: string, contractNumber: number, tierNumber: number, groupId: string, locationId: string,
    primaryLocationId: string, status: string, tag?: string) {
    this.id = id
    this.contractNumber = contractNumber
    this.tierNumber = tierNumber
    this.groupId = groupId
    this.locationId = locationId
    this.primaryLocationId = primaryLocationId
    this.status = status
    this.tag = tag
  }

  isPrimaryLocation(): boolean {
    return this.locationId === this.primaryLocationId
  }

  isLocationOf(primaryId: string): boolean {
    return this.primaryLocationId === primaryId
  }
}