import organizationRoutes from '@modules/organizations/routes/organization.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/organization', organizationRoutes);
routes.use('/user', usersRouter);

export default routes;
