import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import AppErrors from '@shared/errors/AppError';
import User from '../typeorm/entities/User';

class ShowUserService {
  public async execte(id: string): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);
    console.log('ID: %s, USER %s', id, user?.full_name);
    if (!user) {
      throw new AppErrors('User not found.', 404);
    }

    return user;
  }
}

export default ShowUserService;
