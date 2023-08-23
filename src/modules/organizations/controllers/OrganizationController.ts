import { Request, Response } from 'express';
import CreateOrganizationService from '../services/CreateOrganizationService';
import ListOrganizationService from '../services/ListOrganizationService';
import ShowOrganizationService from '../services/ShowOrganizationService';
import UpdateOrganizationService from '../services/UpdateOrganizationService';
import DeleteOrganizationService from '../services/DeleteOrganizationService';

class OrganizationController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrganizations = new ListOrganizationService();

    const organization = await listOrganizations.execute();

    return response.json(organization);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createOrganization = new CreateOrganizationService();

    const organization = await createOrganization.execute({
      name,
    });

    return response.json(organization);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrganization = new ShowOrganizationService();

    const organization = await showOrganization.execute({ id });

    return response.json(organization);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateOrganization = new UpdateOrganizationService();

    const organization = await updateOrganization.execute({ id, name });

    return response.json(organization);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteOrganizationService = new DeleteOrganizationService();

    await deleteOrganizationService.execute({ id });

    return response.json({});
  }
}

export default OrganizationController;
