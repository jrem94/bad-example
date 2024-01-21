/**
 * A transition is simply a between state when letters of agreement are moving from one status to another
 * or awaiting some action or event.
 *
 * NOTE: AKA "Tags". Additionally, we could just add more primary statuses instead of these that cover this, but that's
 * dependent on the number of combinations. For example if pending changes can appear in most Statuses, then it would
 * just become noise to kep all of those unique combinations around as status records. Still, this isn't the case yet.
 */

export interface ITransition {
  id: number;
  name: string;
}