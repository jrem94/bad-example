export interface IAttributeDto {
  id: number;
  amendmentId: number;
  questionText: string;
}

export class Attribute implements IAttributeDto{
  id: number;
  amendmentId: number;
  questionText: string;

  constructor(id: number, amendmentId: number, questionText: string) {
    this.id = id
    this.amendmentId = amendmentId
    this.questionText = questionText
  }
}