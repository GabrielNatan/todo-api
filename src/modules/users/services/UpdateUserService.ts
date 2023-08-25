import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
import AppErrors from '@shared/errors/AppError';

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

    user.email = email;
    user.first_name = first_name;
    user.last_name = last_name;
    user.password = password;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;