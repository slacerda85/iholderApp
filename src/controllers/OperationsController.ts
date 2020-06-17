import { Request, Response } from 'express';
import knex from '../database/connection';

class OperationsController {
  async create(request: Request, response: Response) {
    const {
      asset_id,
      price,
      qtd,
      date,
      fees,      
    } = request.body;

    await knex('operations').insert({
      asset_id,
      price,
      qtd,
      date,
      fees,      
    });

    return response.json({ success: true });
  }

  async index(request: Request, response:Response) {
    const operations = await knex('operations').select('*');

    return response.json(operations);
  }

  async update(request: Request, response: Response) {
    const {
      asset_id,
      price,
      qtd,
      date,
      fees,
    } = request.body;
    const { id } = request.params;

    await knex('operations')
    .update({
      asset_id,
      price,
      qtd,
      date,
      fees,
    })
    .where({ id });

    return response.send();
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('operations')
    .where({ id })
    .del();

    return response.send();
  }
  
}

export default OperationsController;