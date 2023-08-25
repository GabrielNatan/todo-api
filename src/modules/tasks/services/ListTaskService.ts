import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import AppErrors from '@shared/errors/AppError';

class ListTaskService {
  public async execute(): Promise<Task[]> {
    const taskRepository = getCustomRepository(TaskRepository);
    const tasks = await taskRepository.find({ relations: ['users'] });

    if (!tasks) {
      throw new AppErrors('Task Not found.');
    }

    return tasks;
  }
}

export default ListTaskService;
