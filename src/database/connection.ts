import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,  
});

export default connection;

//Migrations = Histórico do banco de dados