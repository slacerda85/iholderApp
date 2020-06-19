import express from 'express';

import AssetsController from './controllers/AssetsController';
import OperationsController from './controllers/OperationsController';

const routes = express.Router();
const assetsController = new AssetsController();
const operationsController = new OperationsController();

routes.get('/assets', assetsController.index);
routes.post('/assets', assetsController.create);
routes.get('/assets/:ticker', assetsController.show);
routes.put('/assets/:ticker', assetsController.update);
routes.delete('/assets/:ticker', assetsController.delete);

routes.get('/operations', operationsController.index);
routes.post('/operations', operationsController.create);
routes.get('/operations/:id', operationsController.show);
routes.put('/operations/:id', operationsController.update);

export default routes;