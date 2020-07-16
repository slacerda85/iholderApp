import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';
import getLastPrice from '../services/getLastPrice';

interface Portfolio {
  asset_ticker: string,
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

    //Função que calcula e monta o objeto com os dados do ativo
    async function mountPortfolio(portfolio: Portfolio[]) {

      const result = portfolio.map(async (item: Portfolio) => {

        const lastPrice = await getLastPrice(item.asset_ticker);

        const percent = ((item.qtd * lastPrice - item.avg_price) / item.avg_price * 100);

        console.log(percent);

        return {
          asset_ticker: item.asset_ticker,
          qtd: item.qtd,
          avg_price: item.avg_price,
          lastPrice: (lastPrice != undefined ? lastPrice : 0),
          profit: (item.qtd * lastPrice - item.avg_price),
          percent: isNaN(percent) ? 0 : percent
        };
      });

      const finalResult = await Promise.all(result);

      return finalResult;
    }

    //função que busca o portfolio, envia como parametro para a função acima, e retorna o resultado.
    try {
      let portfolio: Portfolio[] = await knex('portfolio').select('*');

      const result = await mountPortfolio(portfolio);

      return response.json(result);

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