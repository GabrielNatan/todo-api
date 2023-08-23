import { getCustomRepository } from 'typeorm';
import Organization from '../typeorm/entities/Organization';
import OrganizationRepository from '../typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class ShowOrganizationService {
  public async execute({ id }: IRequest): Promise<Organization> {
    const organizationRepository = getCustomRepository(OrganizationRepository);

    const organization = await organizationRepository.findById(id);

    if (!organization) {
      throw new AppErrors('organization not found', 404);
    }

    return organization;
  }
}

export default ShowOrganizationService;
