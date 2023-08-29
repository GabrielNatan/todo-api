import { Router } from 'express';

import SessionController from '../controller/SessionController';
import { celebrate, Joi, Segments } from 'celebrate';

const sessionRoutes = Router();

const sessionController = new SessionController();

sessionRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.index,
);

export default sessionRoutes;
