import axios from 'axios'

const api = axios.create({
  baseURL: 'http://cotacao.b3.com.br/mds/api/v1/DailyFluctuationHistory/'
})

export const tesourodireto = axios.create({
  baseURL:
    'https://www.tesourodireto.com.br/json/br/com/b3/tesourodireto/service/api/treasurybondsinfo.json'
})

export default api
