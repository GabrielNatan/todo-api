import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
import OrganizationRepository from '@modules/organizations/typeorm/repositories/OrganizationRepository';
import AppErrors from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { instanceToInstance } from 'class-transformer';

interface IRequest {
  full_name: string;
  last_name: string;
  first_name: string;
  email: string;
  organization_id: string;
  password: string;
}

class CreateUserService {
  public async execute({
    email,
    first_name,
    full_name,
    last_name,
    organization_id,
    password,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const organizationRepository = getCustomRepository(OrganizationRepository);

    const organization = await organizationRepository.findById(organization_id);

    if (!organization) {
      throw new AppErrors('Organization not found.', 404);
    }

    const hashPassword = await hash(password, 8);
    const user = userRepository.create({
      email,
      first_name,
      full_name,
      last_name,
      organization,
      password: hashPassword,
    });

    await userRepository.save(user);

    return instanceToInstance(user);
  }
}

export default CreateUserService;
