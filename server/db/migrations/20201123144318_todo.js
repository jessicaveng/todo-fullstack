
exports.up = function(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments('id')
    table.string('todo')
    table.boolean('completed')

})
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('todo')
};
