import Knex from 'knex'; 

export async function up(knex: Knex) { 
    return knex.schema.createTable('assets', table => { 
      table.string('ticker').unique().notNullable().primary();
      table.string('isin').unique().notNullable();
      table.string('description').notNullable();
      table.float('average_price').defaultTo(0);
      table.integer('qtd').defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  }
  
  export async function down(knex: Knex) {    
    return knex.schema.dropTable('assets');
  }