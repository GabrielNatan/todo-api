import { Request, Response } from 'express';
import ListTaskService from '../services/ListTaskService';
import CreateTaskService from '../services/CreateTaskService';
import UpdateTaskService from '../services/UpdateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';
import ShowTaskService from '../services/ShowTaskService';

class TaskController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTaskService = new ListTaskService();

    const tasks = await listTaskService.execute();

    return response.json(tasks);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTaskService = new ShowTaskService();

    const task = showTaskService.execute(id);

    return response.json(task);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { message, title } = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({
      user_id: '4cec0a49-2412-418f-827e-90f450b8b6a1',
      message,
      title,
    });

    return response.json(task);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { message, title } = request.body;

    const updateTaskService = new UpdateTaskService();

    const task = await updateTaskService.execute({
      id,
      message,
      title,
    });

    return response.json(task);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTaskService = new DeleteTaskService();

    await deleteTaskService.execute(id);

    return response.json({});
  }
}

export default TaskController;
