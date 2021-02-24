import { Request, Response, NextFunction } from 'express'
import knex from '../database/connection'

class OperationsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { asset_ticker, price, qtd, date, fees } = request.body

      const trx = await knex.transaction()

      await trx('operations').insert({
        asset_ticker,
        price: Number(price.split(',').join('.')),
        qtd: Number(qtd.split(',').join('.')),
        date,
        fees: Number(fees.split(',').join('.')),
        total_operation_cost:
          Number(qtd.split(',').join('.')) *
            Number(price.split(',').join('.')) +
          Number(fees.split(',').join('.'))
      })

      const totalOperations = await trx('operations').where({ asset_ticker })
      const sumQtd = totalOperations.reduce((acc, curr) => acc + curr.qtd, 0)
      const sumValue = totalOperations.reduce(
        (acc, curr) => acc + curr.total_operation_cost,
        0
      )

      await trx('portfolio')
        .update({
          qtd: sumQtd,
          avg_price: sumValue,
          updated_at: trx.fn.now()
        })
        .where({ asset_ticker })

      await trx.commit()

      return response.send()
    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const operations = await knex('operations').select('*')

      return response.json(operations)
    } catch (error) {
      next(error)
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { ticker } = request.params

      const operation = await knex('operations').where({
        asset_ticker: ticker.toUpperCase()
      })

      return response.json(operation)
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { price, qtd, date, fees } = request.body
      const { id } = request.params

      const trx = await knex.transaction()

      await trx('operations')
        .update({
          price: Number(price.split(',').join('.')),
          qtd: Number(qtd.split(',').join('.')),
          date,
          fees: Number(fees.split(',').join('.')),
          total_operation_cost:
            Number(qtd.split(',').join('.')) *
              Number(price.split(',').join('.')) +
            Number(fees.split(',').join('.')),
          updated_at: knex.fn.now()
        })
        .where({ id })

      const asset_ticker = (
        await trx('operations').select('asset_ticker').where({ id })
      )[0].asset_ticker

      const totalOperations = await trx('operations').where({ asset_ticker })
      const sumQtd = totalOperations.reduce((acc, curr) => acc + curr.qtd, 0)
      const sumValue = totalOperations.reduce(
        (acc, curr) => acc + curr.total_operation_cost,
        0
      )

      await trx('portfolio')
        .update({
          qtd: sumQtd,
          avg_price: sumValue,
          updated_at: knex.fn.now()
        })
        .where({ asset_ticker })

      await trx.commit()

      return response.send()
    } catch (error) {
      next(error)
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params

      await knex('operations').where({ id }).del()

      return response.send()
    } catch (error) {
      next(error)
    }
  }
}

export default OperationsController
