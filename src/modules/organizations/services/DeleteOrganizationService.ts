import { getCustomRepository } from 'typeorm';
import OrganizationRepository from '../typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteOrganizationService {
  public async execute({ id }: IRequest): Promise<void> {
    const organizationRepository = getCustomRepository(OrganizationRepository);

    const organizationExist = await organizationRepository.findById(id);

    if (!organizationExist) {
      throw new AppErrors('Organization not found.', 404);
    }

    await organizationRepository.delete(id);

    return;
  }
}

export default DeleteOrganizationService;
