import { Router } from 'express';
import TaskController from '../controller/TaskController';
import { Segments, celebrate, Joi } from 'celebrate';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get('/', taskController.index);
taskRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  taskController.show,
);
taskRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      message: Joi.string().required(),
    },
  }),
  taskController.create,
);
taskRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string(),
      message: Joi.string(),
    },
  }),
  taskController.update,
);
taskRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  taskController.delete,
);
taskRoutes.put(
  '/users/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  taskController.updateUserTask,
);

export default taskRoutes;
