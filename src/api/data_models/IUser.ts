/**
 * A user recorded taking an action. We don't have each user of the system stored in the database, but we do record a user's
 * info when certain actions are taken. If we already have a record matching the user's name, phone, and email we don't add
 * a new record, but rather just reference the existing id.
 */

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}