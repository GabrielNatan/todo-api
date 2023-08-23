import { getCustomRepository } from 'typeorm';
import Organization from '../typeorm/entities/Organization';
import OrganizationRepository from '../typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
}

class UpdateOrganizationService {
  public async execute({ id, name }: IRequest): Promise<Organization> {
    const organizationRepository = getCustomRepository(OrganizationRepository);

    const organization = await organizationRepository.findById(id);

    if (!organization) {
      throw new AppErrors('Organization not found.', 404);
    }

    const organizationExists = await organizationRepository.findByName(name);

    if (organizationExists && organizationExists.id !== id) {
      throw new AppErrors(
        'There is already one organization with this name.',
        400,
      );
    }

    organization.name = name;

    await organizationRepository.save(organization);

    return organization;
  }
}

export default UpdateOrganizationService;
