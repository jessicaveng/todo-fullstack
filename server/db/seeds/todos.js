
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          id: 1,
          text: 'Get groceries'
        },
        {
          id: 2,
          text: 'Buy jeans'
        },
        {
          id: 3,
          text: 'Launder drug money'
        },
        {
          id: 4,
          text: 'Dispose of dead body'
        },
        {
          id: 5,
          text: 'Water garden'
        }
      ]);
    });
};
