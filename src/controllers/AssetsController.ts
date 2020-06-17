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

  async update(request: Request, response: Response) {
    const { ticker, description, isin } = request.body;
    const { id } = request.params;

    await knex('assets')
      .update({
        ticker,
        description,
        isin
      })
      .where({ id });

    return response.send();
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('assets')
      .where({ id })
      .del();

    return response.send();
  }

}

export default AssetsController;