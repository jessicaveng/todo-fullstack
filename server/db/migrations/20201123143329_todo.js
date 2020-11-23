
exports.up = function(knex) {
  return knex.schema.createTable('list', table => {
    table.increments('id').primary()
    table.string('todo')
    table.integer('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('list')
};
