import type { IAmendment } from '@/api/data_models/IAmendment'

export const amendmentData: IAmendment[] = [
  {
    id: 1,
    contractId: 1,
    previousAmendmentId: null, // Reference
    text: '<div>Hello World</div>',
    startDate: new Date().setMonth(1),
    endDate: new Date().setMonth(6),
    createdDate: new Date().setMonth(1),
  },
  {
    id: 2,
    contractId: 1,
    previousAmendmentId: 1, // Reference
    text: '<div>Hello World!!!</div>',
    startDate: new Date().setMonth(6),
    endDate: new Date().setMonth(11),
    createdDate: new Date().setMonth(6),
  },
  {
    id: 3,
    contractId: 2,
    previousAmendmentId: null, // Reference
    text: '<div>This is for the second contract</div>',
    startDate: new Date().setMonth(1),
    endDate: new Date().setMonth(11),
    createdDate: new Date().setMonth(1),
  },
]