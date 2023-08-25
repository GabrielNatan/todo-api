import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import AppErrors from '@shared/errors/AppError';
import User from '@modules/users/typeorm/entities/User';

interface IRequest {
  users: User[];
  id: string;
}

class UpdateUserTaskService {
  public async execute({ id, users }: IRequest): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);

    const task = await taskRepository.findById(id);

    if (!task) {
      throw new AppErrors('Task Not found.', 404);
    }

    task.users = users;

    await taskRepository.save(task);

    return task;
  }
}

export default UpdateUserTaskService;
