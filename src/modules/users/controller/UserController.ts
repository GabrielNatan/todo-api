import { Request, Response, response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';
import ListUserService from '../services/ListUserService';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showUserService = new ListUserService();

    const users = await showUserService.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUserService = new ShowUserService();

    const user = await showUserService.execute(id);

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, organization_id, password } =
      request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      first_name,
      last_name,
      full_name: `${first_name} ${last_name}`,
      email,
      organization_id,
      password,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { first_name, last_name, email, password } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id,
      first_name,
      last_name,
      email,
      password,
    });

    return response.json(user);
  }
}

export default UserController;
