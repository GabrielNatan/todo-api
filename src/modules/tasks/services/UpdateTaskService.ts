import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';
import AppErrors from '@shared/errors/AppError';

interface IRequest {
  id: string;
  title: string;
  message: string;
}

class UpdateTaskService {
  public async execute({ id, message, title }: IRequest): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);

    const task = await taskRepository.findById(id);

    if (!task) {
      throw new AppErrors('Task not found.', 404);
    }

    task.title = title;
    task.message = message;

    await taskRepository.save(task);

    return task;
  }
}

export default UpdateTaskService;
