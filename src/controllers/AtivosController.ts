import { Request, Response } from 'express';
import knex from '../database/connection';

//Os nomes padrão para funções de controllers são:
//create, show, index, update, delete.

class AtivosController {
  async create(request: Request, response: Response) {
    const {
      ticker,
      description,
      isin
    } = request.body;

        
    await knex('ativos').insert({
      ticker,
      description,
      isin
    });

    return response.json({ success: true });
  }

  async index(request: Request, response:Response) {
    const ativosList = await knex('ativos').select('*');

    return response.json(ativosList);
  }
    
}

export default AtivosController;