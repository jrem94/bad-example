import { groupService } from '@/api/services/groupService'
import type { IGroupDto } from '@/models/Group'
import type { IDataWrapper } from '@/api/utils/httpMock'

export const groupController = () => {
  const GroupService = groupService()

  const createNewGroup = async (newGroup: IGroupDto): Promise<IDataWrapper> => {
    const newGroupId = GroupService.createNewGroup(newGroup)
    return { status: 200, data: { newGroupId } }
  }

  return {
    createNewGroup
  }
}