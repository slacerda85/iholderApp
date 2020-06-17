import { Request, Response } from 'express';
import knex from '../database/connection';

//Os nomes padrão para funções de controllers são:
//create, show, index, update, delete.

class AssetsController {

  async create(request: Request, response: Response) {
    const { ticker, description, isin } = request.body;

    await knex('assets').insert({
      ticker,
      description,
      isin
    });

    return response.json({ success: true });
  }

  async index(request: Request, response: Response) {
    const assetsList = await knex('assets').select('*');

    return response.json(assetsList);
  }

  async show(request: Request, response: Response) {
    const { ticker } = request.params;

    const asset = await knex('assets').where(ticker);

    return response.json(asset);
  }

  async update(request: Request, response: Response) {
    const { 
      description,
      isin,
      average_price,
      qtd
    } = request.body;
    const { ticker } = request.params;

    await knex('assets')
      .update({        
        description,
        isin,
        average_price,
        qtd
      })
      .where({ ticker });

    return response.send();
  }

  async delete(request: Request, response: Response) {
    const { ticker } = request.params;

    await knex('assets')
      .where({ ticker })
      .del();

    return response.send();
  }

}

export default AssetsController;