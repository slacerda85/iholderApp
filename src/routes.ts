import express from 'express';

import AssetsController from './controllers/AssetsController';
import OperationsController from './controllers/OperationsController';

const routes = express.Router();
const assetsController = new AssetsController();
const operationsController = new OperationsController();

routes.get('/assets', assetsController.index);
routes.post('/assets', assetsController.create);
routes.put('/assets/:id', assetsController.update);
routes.delete('/assets/:id', assetsController.delete);

routes.get('/operations', operationsController.index);
routes.post('/operations', operationsController.create);

export default routes;