import { EntityRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  public async findById(id: string): Promise<Task | undefined> {
    const task = await this.findOne({
      where: {
        id,
      },
      relations: ['users'],
    });

    return task;
  }
}

export default TaskRepository;
