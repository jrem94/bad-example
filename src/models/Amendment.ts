import type { IFacilityTypeDto } from '@/models/FacilityType'
import { FacilityType } from '@/models/FacilityType'
import type { IClassOfTradeDto } from '@/models/ClassOfTrade'
import { ClassOfTrade } from '@/models/ClassOfTrade'
import type { IVisibilityDto } from '@/models/Visibility'
import { Visibility } from '@/models/Visibility'
import type { Attribute, IAttributeDto } from '@/models/Attribute'
import type { AmendmentStatus } from '@/enums/AmendmentStatus'

export interface IAmendmentDto {
  id: number;
  status: AmendmentStatus;
  attributes: IAttributeDto[];
  facilityTypes: IFacilityTypeDto[];
  classesOfTrade: IClassOfTradeDto[];
  participants: IVisibilityDto[]
}

export class Amendment implements IAmendmentDto {
  id: number;
  status: AmendmentStatus;
  attributes: Attribute[];
  facilityTypes: FacilityType[];
  classesOfTrade: ClassOfTrade[];
  participants: Visibility[];

  constructor(id: number, status: AmendmentStatus, attributes: Attribute[], facilityTypes: FacilityType[],
              classesOfTrade: ClassOfTrade[], participants: Visibility[]
  ) {
    this.id = id
    this.status = status
    this.attributes = attributes
    this.facilityTypes = facilityTypes;
    this.classesOfTrade = classesOfTrade;
    this.participants = participants
  }
}