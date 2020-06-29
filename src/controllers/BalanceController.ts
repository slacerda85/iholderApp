import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';

class BalanceController {
    async create(request: Request, response: Response, next: NextFunction) {
      try {
        const {
          asset_ticker,
          qtd,
          avg_price
        } = request.body;

        await knex('balance').insert({
          asset_ticker,
          qtd,
          avg_price
        });

        return response.send();

      } catch (error) {
        next(error);
      }
    }

    async index(request: Request, response: Response, next: NextFunction) {

    }

    async show(request: Request, response: Response, next: NextFunction) {

    }

    async update(request: Request, response: Response, next: NextFunction) {

    }

    async delete(request: Request, response: Response, next: NextFunction) {

    }

}

export default BalanceController;