/**
 * A tier is the pricing category that a location agrees to when they sign letters of agreement. Tiers are specific to
 * amendments and have different definitions.
 */

export interface ITier {
  id: number;
  tierNumber: number;
  amendmentId: number; // FK
  definition: string;
  tierTypeId: number; // FK
}