import { Router } from 'express';
import TaskController from '../controller/TaskController';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get('/', taskController.index);
taskRoutes.get('/:id', taskController.show);
taskRoutes.post('/', taskController.create);
taskRoutes.put('/:id', taskController.update);
taskRoutes.put('/users/:id', taskController.updateUserTask);
taskRoutes.delete('/:id', taskController.delete);

export default taskRoutes;
