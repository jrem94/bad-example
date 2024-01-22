import type { IContractDto } from '@/models/Contract'

export const contractService = () => {

  const publishNewContract = (contractDto: IContractDto): number => {
    // get the amendment facility types and offering types

    // retrieve all LOAs that have a corresponding facility or offering type, minus any that have a facility or
    // offering type that is excluded.

    // get all the amendment visibility records
    // mark all of the locations that are at or below a given excluded hierarchy node.
    // unmark all if the locations that are at or below a given included hierarchy node.

    // create a new letter of agreement for all non-excluded locations remaining, checking to make sure one
    // doesn't already exist before creation.

    // link the initial revision.
    return 1
  }

  return {
    publishNewContract
  }
}