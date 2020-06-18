import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('balance', table => {
        table.increments('id').primary();
        table.string('asset_ticker')
        .notNullable()
        .references('ticker')
        .inTable('assets');
        table.integer('qtd').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('balance');
}