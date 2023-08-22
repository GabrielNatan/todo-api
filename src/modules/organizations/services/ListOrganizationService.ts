import { getCustomRepository } from 'typeorm';
import Organization from '../typeorm/entities/Organization';
import OrganizationRepository from '../typeorm/repositories/OrganizationRepository';

class ListOrganizationService {
  public async execute(): Promise<Organization[]> {
    const organizationsRepository = getCustomRepository(OrganizationRepository);

    const organization = await organizationsRepository.find();

    return organization;
  }
}

export default ListOrganizationService;
