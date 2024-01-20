import { LOAStatuses, LOAStatusStrings } from '@/enums/LOAStatuses'

export const LOAStatusStringToEnum = (LOAStatusString: LOAStatusStrings): LOAStatuses => {
  return LOAStatuses[LOAStatusString]
}

export const LOAStatusEnumToString = (LOAStatusEnum: LOAStatuses): LOAStatusStrings => {
  return LOAStatusStrings[LOAStatusEnum]
}