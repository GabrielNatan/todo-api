import { Router } from 'express';
import OrganizationController from '../controllers/OrganizationController';
import { celebrate, Joi, Segments } from 'celebrate';

const organizationRoutes = Router();
const organizationController = new OrganizationController();

organizationRoutes.get('/', organizationController.index);

organizationRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  organizationController.show,
);

organizationRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  organizationController.create,
);

organizationRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  organizationController.update,
);

organizationRoutes.delete('/:id', organizationController.delete);

export default organizationRoutes;
