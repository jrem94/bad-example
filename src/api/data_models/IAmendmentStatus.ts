/**
 * Amendments have fairly linear statuses such as New, Draft, Published, Ending, and Expired. These statuses
 * determine what amendments create LOAs and which LOAs expire with their amendments. A combination status can
 * exist if there are two overlapping amendments, for example, with one in New and the other in Published. This
 * would result in letting the admins know that there is a "Republish Available"
 */

export interface IAmendmentStatus {
  id: number;
  name: string;
}