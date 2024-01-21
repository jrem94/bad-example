import type { IAddress } from '@/api/data_models/IAddress'

export const addressData: IAddress[] = [
  {
    id: 1,
    country: 'USA',
    city: 'Portland',
    stateOrProvince: 'Maine',
    streetAddress1: '500 Main Street',
    streetAddress2: 'Unit 123',
    zipcode: '04106',
  },
  {
    id: 2,
    country: 'USA',
    city: 'Highwater',
    stateOrProvince: 'Oregon',
    streetAddress1: '100 Rain Street',
    streetAddress2: null,
    zipcode: '04106',
  },
  {
    id: 3,
    country: 'USA',
    city: 'Nashville',
    stateOrProvince: 'Tennessee',
    streetAddress1: '1000 MLK Street',
    streetAddress2: null,
    zipcode: '37075',
  }
]