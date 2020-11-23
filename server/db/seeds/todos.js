
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'do dishes', done: false},
        {id: 2, task: 'make bed', done: false},
        {id: 3, task: 'cook dinner', done: false}
      ]);
    });
};
