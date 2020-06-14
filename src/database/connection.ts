import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database: "iholder_app",
    user: "postgres",
    password: "0000"
  },
  useNullAsDefault: true,  
});

export default connection;

//Migrations = Histórico do banco de dados