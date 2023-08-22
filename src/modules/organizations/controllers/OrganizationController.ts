import { Request, Response } from 'express';
import Organization from '../typeorm/entities/Organization';
import CreateOrganizationService from '../services/CreateOrganizationService';
import AppErrors from '@shared/errors/AppError';

class OrganizationController {
  // public async index(request: Request, response: Response): Response<Organization>{
  //   const organization =
  //   return request.json()
  // }

  public async create(request: Request, response: Response) {
    const { name } = request.body;
    const createOrganization = new CreateOrganizationService();

    const organization = await createOrganization.execute({
      name,
    });

    return response.json(organization);
  }
}

export default OrganizationController;
