/**
 * Tier types are simply "Facility", "Facility or Group", and "Group" which indicate whether the tier can be chosen
 * for a single letter of agreement or if it must be selected in the context of a group.
 */

export interface ITierType {
  id: number;
  name: string;
}