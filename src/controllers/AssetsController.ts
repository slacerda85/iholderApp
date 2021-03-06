import { Request, Response, NextFunction } from 'express'
import knex from '../database/connection'

//Os nomes padrão para funções de controllers são:
//create, show, index, update, delete.
//command+K+2 = fecha e organiza

class AssetsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { ticker, category, description, isin } = request.body

      await knex('assets').insert({
        ticker,
        category,
        description,
        isin
      })

      return response.send()
    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const assetsList = await knex('assets').select('*')

      return response.json(assetsList)
    } catch (error) {
      next(error)
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { ticker } = request.params

      const asset = await knex('assets').where({ ticker: ticker.toUpperCase() })

      return response.json(asset)
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {}

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { ticker } = request.params

      await knex('assets').where({ ticker: ticker.toUpperCase() }).del()

      return response.send()
    } catch (error) {
      next(error)
    }
  }
}

export default AssetsController
