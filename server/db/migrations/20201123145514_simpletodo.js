
exports.up = function(knex) {
  return knex.schema.table('todos', table => {
    table.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
