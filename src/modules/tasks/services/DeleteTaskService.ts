import { getCustomRepository } from 'typeorm';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import AppErrors from '@shared/errors/AppError';

class DeleteTaskService {
  public async execute(id: string): Promise<void> {
    const taskRepository = getCustomRepository(TaskRepository);

    const task = await taskRepository.findById(id);

    if (!task) {
      throw new AppErrors('Task not found', 404);
    }

    await taskRepository.delete(id);

    return;
  }
}

export default DeleteTaskService;
