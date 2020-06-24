import path from 'path';

module.exports = { //não vai funcionar export default pois o knexfile ainda nao da suporte
  //aqui é só copiar os parametros dentro da connection.ts
  client: 'pg',
  connection: {
    database: "iholderapp",
    user: "postgres",
    password: "0"
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
}

//depois de criar isto, execute npx knex --knexfile knexfile.ts migrate:latest