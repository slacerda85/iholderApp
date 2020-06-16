import Knex from 'knex'; //Importar Knex com K maiusculo, importará as definições de tipos.

export async function up(knex: Knex) { //Agora que o parametro knex foi definido tambem com 
// seu tipo, vc tera acesso a todos os metodos do knex com ctrl+espaço.
  return knex.schema.createTable('users', table => { //cria a tabela e os campos
    table.increments('id').primary(); // Primeiro campo é o id com auto increment
    table.string('name').notNullable();
    table.string('email').notNullable();
  });
}

export async function down(knex: Knex) {
  //Voltar atrás (deletar a tabela)
  return knex.schema.dropTable('users');
}