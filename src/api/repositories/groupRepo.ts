import type { IGroup } from '@/api/data_models/IGroup'
import { groupData } from '@/api/data/groupData'

export const groupRepo = () => {

  const add = (group: IGroup): IGroup => {
    if (!group.id) {
      group.id = groupData.length ? groupData[groupData.length - 1].id + 1 : 1
    }

    groupData.push(group)

    return group;
  }

  return {
    add
  }
}