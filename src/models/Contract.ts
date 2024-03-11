import type { Amendment, IAmendmentDto } from '@/models/Amendment'

export interface IContractDto {
  id: number
  amendment: IAmendmentDto
}

export class Contract implements IContractDto {
  id: number
  amendment: Amendment

  constructor(id: number, amendment: Amendment) {
    this.id = id
    this.amendment = amendment
  }
}