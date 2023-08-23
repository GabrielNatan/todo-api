import { Router } from 'express';
import OrganizationController from '../controllers/OrganizationController';

const organizationRoutes = Router();
const organizationController = new OrganizationController();

organizationRoutes.get('/', organizationController.index);
organizationRoutes.get('/:id', organizationController.show);

organizationRoutes.post('/', organizationController.create);

organizationRoutes.put('/:id', organizationController.update);

organizationRoutes.delete('/:id', organizationController.delete);

export default organizationRoutes;
