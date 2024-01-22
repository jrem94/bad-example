import type { IContractDto } from '@/models/Contract'
import type { IDataWrapper } from '@/api/utils/httpMock'
import { contractService } from '@/api/services/contractService'

export const contractController = () => {
  const ContractService = contractService()

  const publishNewContract = async (newContract: IContractDto): Promise<IDataWrapper> => {
    const newContractId = ContractService.createNewContract(newContract)
    return { status: 200, data: { newContractId } }
}

  return {
    publishNewContract
  }
}