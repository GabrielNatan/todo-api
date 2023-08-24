import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/:id', usersController.show);
usersRouter.post('/', usersController.create);

export default usersRouter;
