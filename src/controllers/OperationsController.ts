import { Request, Response } from 'express';
import knex from '../database/connection';

class TransactionsController {
  async create(request: Request, response: Response) {
    const {
      price,
      qtd,
      date,
      fees,
      ativo_id
    } = request.body;

    await knex('transactions').insert({
      price,
      qtd,
      date,
      fees,
      ativo_id
    });

    return response.json({ success: true });
  }

  async index(request: Request, response:Response) {
    const transactions = await knex('transactions').select('*');

    return response.json(transactions);
  }
  
}

export default TransactionsController;