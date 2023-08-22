import { Router } from 'express';
import OrganizationController from '../controllers/OrganizationController';

const organizationRoutes = Router();
const organizationController = new OrganizationController();

organizationRoutes.get('/', organizationController.index);

organizationRoutes.post('/', organizationController.create);

export default organizationRoutes;
