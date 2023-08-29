import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
import AppErrors from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { instanceToInstance } from 'class-transformer';

interface IRequest {
  id: string;
  last_name: string;
  first_name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  public async execute({
    id,
    email,
    first_name,
    last_name,
    password,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppErrors('User not found.');
    }

    const hashPassword = await hash(password, 8);
    user.first_name = first_name;
    user.last_name = last_name;
    user.full_name = `${first_name} ${last_name}`;
    user.email = email;
    user.password = hashPassword;

    await userRepository.save(user);

    return instanceToInstance(user);
  }
}

export default UpdateUserService;
