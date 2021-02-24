import { Request, Response, NextFunction } from 'express'
import knex from '../database/connection'
import formatPortfolio from '../services/formatPortfolio'

interface Portfolio {
  asset_ticker: string
  description: string
  qtd: number
  avg_price: number
  lastPrice: number
  profit: number
  percent: number
}

class NetWorthController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      //Busca o portfolio no DB
      const portfolio: Portfolio[] = await knex('portfolio').select('*')

      //mapeia os itens, e chama a função de formatação de dados para retorno.
      const result = await Promise.all(
        portfolio.map(item => {
          return formatPortfolio(item)
        })
      )
      //PENDENTE - Somar o qtd e o preço atual de cada ativo, e criar o networth
      const summedResult = result.map(item => {
        return {
          total: item.qtd * item.lastPrice,
          avgPrice: item.avg_price
        }
      })

      const total = summedResult.reduce((acc, curr) => acc + curr.total, 0)
      const totalAvgPrice = summedResult.reduce(
        (acc, curr) => acc + curr.avgPrice,
        0
      )

      const netWorth = {
        lastValue: total,
        avgPrice: totalAvgPrice,
        profit: total - totalAvgPrice,
        percent: ((total - totalAvgPrice) / totalAvgPrice) * 100
      }

      return response.json(netWorth)
    } catch (error) {
      next(error)
    }
  }
}

export default NetWorthController
