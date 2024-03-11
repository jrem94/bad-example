export interface IClassOfTradeDto {
  id: number;
  name: string;
  excludeFromAmendment: boolean;
}

export class ClassOfTrade implements IClassOfTradeDto {
  id: number;
  name: string;
  excludeFromAmendment: boolean;

  constructor(id: number, name: string, excludeFromAmendment: boolean) {
    this.id = id;
    this.name = name;
    this.excludeFromAmendment = excludeFromAmendment;
  }
}