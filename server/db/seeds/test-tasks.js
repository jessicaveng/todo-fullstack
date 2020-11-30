
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'do stuff', priority: 'low', completed: false},
        {id: 2, task: 'something else needs to be done', priority: 'low', completed: false},
        {id: 3, task: 'wow so much stuff to do', priority: 'low', completed: false}
      ]);
    });
};
