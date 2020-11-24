
exports.up = function(knex) {
    return knex.schema.createTable('Task', table => {
        table.increments('id')
        table.string('taskDetails')
        table.increments('Priority')
        table.string('Completed')
    }
    )
};

exports.down = function(knex) {
    return knex.schema.dropTable('Task')
};
