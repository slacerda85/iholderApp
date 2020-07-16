import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';
import formatPortfolio from '../services/formatPortfolio';

interface Portfolio {
  asset_ticker: string,
  description: string,
  qtd: number,
  avg_price: number,
  lastPrice: number,
  profit: number,
  percent: number
}

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
      //Busca o portfolio no DB
      const portfolio: Portfolio[] = await knex('portfolio').select('*');
      
      //mapeia os itens, e chama a função de formatação de dados para retorno.
      const result = await Promise.all(portfolio.map(item => {
        return (
          formatPortfolio(item)
        );
      }));

      return response.json(result);

    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { asset_ticker } = request.params;

      const asset: Portfolio[] = await knex('portfolio')
        .where({ asset_ticker: asset_ticker.toUpperCase() });

      const result = await formatPortfolio(asset[0]);

      return response.json(result);
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