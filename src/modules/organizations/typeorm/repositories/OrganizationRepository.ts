import { EntityRepository, Repository } from 'typeorm';
import Organization from '../entities/Organization';

@EntityRepository(Organization)
class OrganizationRepository extends Repository<Organization> {
  public async findById(id: string): Promise<Organization | undefined> {
    const organization = this.findOne({
      where: {
        id,
      },
    });

    return organization;
  }

  public async findByName(name: string): Promise<Organization | undefined> {
    const organization = this.findOne({
      where: {
        name,
      },
    });

    return organization;
  }
}

export default OrganizationRepository;
