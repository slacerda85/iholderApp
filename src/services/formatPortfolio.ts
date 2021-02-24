import knex from '../database/connection'
import getLastPrice from './getLastPrice'

interface Portfolio {
  asset_ticker: string
  description: string
  qtd: number
  avg_price: number
  lastPrice: number
  profit: number
  percent: number
}

async function formatPortfolio(item: Portfolio) {
  const data = await knex
    .column('description')
    .from('assets')
    .where({ ticker: item.asset_ticker })
  const description = data[0].description
  const lastPrice = await getLastPrice(item.asset_ticker)
  const percent =
    ((item.qtd * lastPrice - item.avg_price) / item.avg_price) * 100

  return {
    asset_ticker: item.asset_ticker,
    description: description,
    qtd: item.qtd,
    avg_price: item.avg_price,
    lastPrice: lastPrice != undefined ? lastPrice : 0,
    profit: item.qtd * lastPrice - item.avg_price,
    percent: isNaN(percent) ? 0 : percent
  }
}

export default formatPortfolio
