import api from './api'

interface Intraday {
  closPric: number
  dtTm: string
  prcFlcn: number
}

const getLastPrice = async (asset: string) => {
  const { data } = await api.get(asset)
  const intraday: Intraday[] = await data.TradgFlr.scty.lstQtn
  const lastPrice = await intraday[intraday.length - 1].closPric
  return lastPrice
}

export default getLastPrice
