import { Router } from 'express';
import OrganizationController from '../controllers/OrganizationController';

const organizationRoutes = Router();
const organizationController = new OrganizationController();

// organizationRoutes.get('/', (request: Request, response: Response) => {
//   return request.json({ message: 'message' });
// });

organizationRoutes.post('/', organizationController.create);

export default organizationRoutes;
