import organizationRoutes from '@modules/organizations/routes/organization.routes';
import taskRoutes from '@modules/tasks/routes/task.routes';
import sessionRoutes from '@modules/users/routes/session.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/organization', organizationRoutes);
routes.use('/user', usersRouter);
routes.use('/task', taskRoutes);
routes.use('/session', sessionRoutes);

export default routes;
