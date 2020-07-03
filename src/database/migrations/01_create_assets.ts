import Knex from 'knex'; 

export async function up(knex: Knex) { 
    return knex.schema.createTable('assets', table => { 
      table.string('ticker').notNullable().primary();
      table.string('category').notNullable();
      table.string('isin').notNullable();
      table.string('description').notNullable();
    });
  }
  
  export async function down(knex: Knex) {    
    return knex.schema.dropTable('assets');
  }