import Knex from 'knex'; 

export async function up(knex: Knex) { 
    return knex.schema.createTable('operations', table => { 
      table.increments('id').primary(); 
      table.integer('asset_id')
      .notNullable()
      .references('id')
      .inTable('assets');
      table.float('price').notNullable();
      table.integer('qtd').notNullable();
      table.string('date').notNullable();
      table.float('fees').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  }
  
  export async function down(knex: Knex) {    
    return knex.schema.dropTable('operations');
  }