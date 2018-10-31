
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.unique('username').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('name').nullable();
    table.string('email').nullable();
    table.string('address').nullable();
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
}
