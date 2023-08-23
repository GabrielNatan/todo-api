import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
import OrganizationRepository from '@modules/organizations/typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  full_name: string;
  last_name: string;
  first_name: string;
  email: string;
  organization_id: string;
}

class CreateUserService {
  public async execute({
    email,
    first_name,
    full_name,
    last_name,
    organization_id,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const organizationRepository = getCustomRepository(OrganizationRepository);

    const organization = await organizationRepository.findById(organization_id);

    if (!organization) {
      throw new AppErrors('Organization not found.', 404);
    }

    const user = userRepository.create({
      email,
      first_name,
      full_name,
      last_name,
      organization_id: organization,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
