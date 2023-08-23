import { Request, Response, response } from 'express';
import CreateUserService from '../services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, full_name, email, organization_id } =
      request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      first_name,
      last_name,
      full_name,
      email,
      organization_id,
    });

    return response.json(user);
  }
}

export default UserController;
