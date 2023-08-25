import organizationRoutes from '@modules/organizations/routes/organization.routes';
import taskRoutes from '@modules/tasks/routes/task.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/organization', organizationRoutes);
routes.use('/user', usersRouter);
routes.use('/task', taskRoutes);

export default routes;
