import { addressData } from '@/api/data/addressData'
import type { IAddress } from '@/api/data_models/IAddress'

export const getAddressById = (id: number): IAddress => {
  return addressData.find(x => x.id === id)
}

export const getAllAddresses = (): IAddress[] => {
  return addressData
}