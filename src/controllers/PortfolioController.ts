import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';

class PortfolioController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        asset_ticker
      } = request.body;

      await knex('portfolio').insert({
        asset_ticker
      });

      return response.send();

    } catch (error) {
      next(error);
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const portfolio = await knex('portfolio').select('*');

      return response.json(portfolio);

    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { asset_ticker } = request.params;
      
      const asset = await knex('portfolio')
      .where({ asset_ticker: asset_ticker.toUpperCase() });

    return response.json(asset);
    } catch (error) {
      next(error);
    } 
  }  

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        qtd,
        avg_price
      } = request.body;
      const { asset_ticker } = request.params;      

      await knex('portfolio').update({
        qtd: qtd,
        avg_price: avg_price,
        updated_at: knex.fn.now()
      })
        .where({ asset_ticker: asset_ticker.toUpperCase() });

      return response.send();

    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {

  }

}

export default PortfolioController;