import Knex from 'knex'; 

export async function up(knex: Knex) { 
    return knex.schema.createTable('operations', table => { 
      table.increments('id').primary(); 
      table.integer('ativo_id')
      .notNullable()
      .references('id')
      .inTable('ativos');
      table.float('price').notNullable();
      table.integer('qtd').notNullable();
      table.string('date').notNullable();
      table.float('fees').notNullable();
    });
  }
  
  export async function down(knex: Knex) {    
    return knex.schema.dropTable('operations');
  }