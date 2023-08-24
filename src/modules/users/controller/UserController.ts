import { Request, Response, response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

class UserController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUserService = new ShowUserService();

    const user = await showUserService.execte(id);

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      first_name,
      last_name,
      full_name,
      email,
      organization_id,
      password,
    } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      first_name,
      last_name,
      full_name,
      email,
      organization_id,
      password,
    });

    return response.json(user);
  }
}

export default UserController;
