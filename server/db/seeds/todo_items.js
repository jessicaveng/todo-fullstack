
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {todo: 'Walk Dog', completed: false},
        {todo: 'Washing', completed: true},
        {todo: 'Make Dinner', completed: false}
      ]);
    });
};
