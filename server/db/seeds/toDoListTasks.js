
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, task: 'Ideation'},
        {id: 2, task: 'Grocery Shopping'},
        {id: 3, task: 'Christmas Shopping'}
      ]);
    });
};
