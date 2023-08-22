import { Request, Response } from 'express';
import Organization from '../typeorm/entities/Organization';
import CreateOrganizationService from '../services/CreateOrganizationService';
import AppErrors from '@shared/errors/AppError';
import ListOrganizationService from '../services/ListOrganizationService';

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
}

export default OrganizationController;
