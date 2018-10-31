
exports.up = function (knex, Promise) {
  return knex.schema.createTable('associations', function (table) {
    table.integer('created_by').unsigned().notNullable();
    table.foreign('created_by').references('id').inTable('users');
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('associations');
}
