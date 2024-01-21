/**
 * A status is simply the state a letter of agreement can be in at any point in time.
 * The record is divided between a primary and secondary  status for more granular control
 * and predictability within the system.
 */

export interface IStatus {
  id: number;
  name: string;
  primaryStatusName: string;
  primaryStatusNumber: number;
  secondaryStatusName?: string;
  secondaryStatusNumber?: number;
}