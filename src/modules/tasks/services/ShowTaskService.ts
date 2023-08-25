import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import AppErrors from '@shared/errors/AppError';

class ShowTaskService {
  public async execute(id: string): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);

    const task = await taskRepository.findById(id);

    if (!task) {
      throw new AppErrors('Task not found.', 404);
    }

    return task;
  }
}

export default ShowTaskService;
