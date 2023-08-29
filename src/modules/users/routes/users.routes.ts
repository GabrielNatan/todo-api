import { Router } from 'express';
import UserController from '../controller/UserController';
import { Segments, celebrate, Joi } from 'celebrate';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', usersController.index);
usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      organization_id: Joi.string().uuid().required(),
      password: Joi.string().min(8).max(30).required(),
    },
  }),
  usersController.create,
);
usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(8).max(30),
    },
  }),
  usersController.update,
);

export default usersRouter;
