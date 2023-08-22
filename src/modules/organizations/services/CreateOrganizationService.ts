import { getCustomRepository } from 'typeorm';
import Organization from '../typeorm/entities/Organization';
import OrganizationRepository from '../typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  name: string;
}

class CreateOrganizationService {
  public async execute({ name }: IRequest): Promise<Organization> {
    const organizationRepository = await getCustomRepository(
      OrganizationRepository,
    );

    const organizationExist = await organizationRepository.findByName(name);
    if (organizationExist) {
      throw new AppErrors('Organization already exists.');
    }

    const organization = organizationRepository.create({
      name,
      active: true,
    });

    await organizationRepository.save(organization);

    return organization;
  }
}

export default CreateOrganizationService;
