import organizationRoutes from '@modules/organizations/routes/organization.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/organization', organizationRoutes);

export default routes;
