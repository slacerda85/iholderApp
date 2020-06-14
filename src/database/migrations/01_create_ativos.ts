import Knex from 'knex'; 

export async function up(knex: Knex) { 
    return knex.schema.createTable('ativos', table => { 
      table.increments('id').primary(); 
      table.string('ticker').notNullable();
      table.string('isin').notNullable();
      table.string('description').notNullable();
    });
  }
  
  export async function down(knex: Knex) {    
    return knex.schema.dropTable('ativos');
  }