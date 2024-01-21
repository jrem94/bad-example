/**
 * A comment is simply a message left on a letter of agreement as a form of communication between members
 * and suppliers as they work to solidify an agreement.
 */

export interface IComment {
  id: number;
  text: string;
  userId: number; // FK
}