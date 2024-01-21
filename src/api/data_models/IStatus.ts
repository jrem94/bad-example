/**
 * A status is simply the state a letter of agreement can be in at any point in time. In between states
 * are handled by a transition record.
 */

export interface IStatus {
  id: number;
  name: string;
}