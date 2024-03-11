import type { IClassOfTradeDto } from '@/models/ClassOfTrade'
import { ClassOfTrade } from '@/models/ClassOfTrade'


export interface IFacilityTypeDto {
  id: number
  name: string
  classOfTrade: IClassOfTradeDto
  excludeFromAmendment: boolean
}

export class FacilityType implements IFacilityTypeDto {
  id: number
  name: string
  classOfTrade: ClassOfTrade
  excludeFromAmendment: boolean

  constructor(id: number, name: string, classOfTrade: ClassOfTrade, excludeFromAmendment: boolean) {
    this.id = id
    this.name = name
    this.classOfTrade = classOfTrade
    this.excludeFromAmendment = excludeFromAmendment
  }
}