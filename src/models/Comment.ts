export interface ICommentDto {
  id: number
  text: string
  user: IUserDto
}

export class Comment implements ICommentDto {
  id: number
  text: string
  user: User
}