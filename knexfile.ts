import path from 'path';

module.exports = { //não vai funcionar export default pois o knexfile ainda nao da suporte
  //aqui é só copiar s parametros dentro da connection.ts
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database: "iholder_app",
    user: "postgres",
    password: "0000"
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
}

//depois de criar isto, execute npx knex --knexfile knexfile.ts migrate:latest