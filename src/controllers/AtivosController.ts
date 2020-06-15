import { Request, Response } from 'express';
import knex from '../database/connection';

//Os nomes padrão para funções de controllers são:
//create, show, index, update, delete.

class AtivosController {

  async create(request: Request, response: Response) {
    const { ticker, description, isin } = request.body;

    await knex('ativos').insert({
      ticker,
      description,
      isin
    });

    return response.json({ success: true });
  }

  async index(request: Request, response: Response) {
    const ativosList = await knex('ativos').select('*');

    return response.json(ativosList);
  }

  async update(request: Request, response: Response) {
    const { ticker, description, isin } = request.body;
    const { id } = request.params;

    await knex('ativos')
    .update({
      ticker,
      description,
      isin
    })
    .where({ id });

    return response.send();
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

    await knex('ativos')
    .where({ id })
    .del();

    return response.send();
    } catch (error) {
      console.log(error);
    }
  }

}

export default AtivosController;