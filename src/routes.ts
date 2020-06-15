import express from 'express';
import knex from './database/connection';

import AtivosController from './controllers/AtivosController';
import TransactionsController from './controllers/TransactionsController';

const routes = express.Router();
const ativosController = new AtivosController();
const transactionsController = new TransactionsController();

routes.get('/ativos', ativosController.index);
routes.post('/ativos', ativosController.create);
routes.put('/ativos/:id', ativosController.update);
routes.delete('/ativos/:id', ativosController.delete);

routes.get('/transactions', transactionsController.index);
routes.post('/transactions', transactionsController.create);

export default routes;