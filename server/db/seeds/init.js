
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {id: 1, todo: 'Thrive', completed: 0},
      ]);
    });
};
