import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';

class OperationsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        asset_ticker,
        price,
        qtd,
        date,
        fees,      
      } = request.body;

      const trx = await knex.transaction();
  
      await trx('operations').insert({
        asset_ticker,
        price,
        qtd,
        date,
        fees,
        total_operation_cost: (qtd * price) + fees,
      });

      const totalOperations = await trx('operations')
      .where({asset_ticker});
      const sumQtd = totalOperations.reduce((acc, curr) => acc + curr.qtd, 0);
      const sumValue = totalOperations.reduce((acc, curr) => acc + curr.total_operation_cost, 0);

      await trx('portfolio').update({
        qtd: sumQtd,
        avg_price: sumValue,
        updated_at: knex.fn.now()
      }).where({ asset_ticker });

      await trx.commit();
  
      return response.send();

    } catch (error) {
      next(error);
    }
  }

  async index(request: Request, response:Response, next: NextFunction) {
    try {
      const operations = await knex('operations').select('*');

      return response.json(operations);

    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { ticker } = request.params;
      
      const operation = await knex('operations')
      .where({ asset_ticker: ticker.toUpperCase() });

    return response.json(operation);
    } catch (error) {
      next(error);
    } 
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        asset_ticker,
        price,
        qtd,
        date,
        fees,
      } = request.body;
      const { id } = request.params;
  
      await knex('operations')
      .update({
        asset_ticker,
        price,
        qtd,
        date,
        fees,
        total_operation_cost: (qtd * price) + fees,
        updated_at: knex.fn.now()
      })
      .where({ id });
  
      return response.send();

    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

    await knex('operations')
    .where({ id })
    .del();

    return response.send();

    } catch (error) {
      next(error);
    }
  }  
}

export default OperationsController;