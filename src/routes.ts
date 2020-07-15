import express from 'express';

import AssetsController from './controllers/AssetsController';
import OperationsController from './controllers/OperationsController';
import PortfolioController from './controllers/PortfolioController';

const routes = express.Router();
const assetsController = new AssetsController();
const operationsController = new OperationsController();
const portfolioController = new PortfolioController();

routes.get('/assets', assetsController.index);
routes.post('/assets', assetsController.create);
routes.get('/assets/:ticker', assetsController.show);
routes.put('/assets/:ticker', assetsController.update);
routes.delete('/assets/:ticker', assetsController.delete);

routes.get('/balance', portfolioController.index);
routes.post('/balance', portfolioController.create);
routes.get('/balance/:asset_ticker', portfolioController.show);
routes.put('/balance/:asset_ticker', portfolioController.update);

routes.get('/operations', operationsController.index);
routes.post('/operations', operationsController.create);
routes.get('/operations/:ticker', operationsController.show);
routes.put('/operations/:id', operationsController.update);
routes.delete('/operations/:id', operationsController.delete);

export default routes;