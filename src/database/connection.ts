import knex from 'knex'
import path from 'path'

const connection = knex({
  client: 'pg',
  connection: {
    database: 'iholderapp',
    user: 'postgres',
    password: ''
  },
  useNullAsDefault: true
})

export default connection

//Migrations = Histórico do banco de dados
