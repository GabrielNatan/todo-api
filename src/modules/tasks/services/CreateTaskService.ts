import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import UserRepository from '@modules/users/typeorm/repositories/UserRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  title: string;
  message: string;
}

class CreateTaskService {
  public async execute({ user_id, message, title }: IRequest): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppErrors('User not found.', 404);
    }

    const task = taskRepository.create({
      message,
      title,
      users: [user],
    });
    console.log('TASK ', task);

    await taskRepository.save(task);

    return task;
  }
}

export default CreateTaskService;
