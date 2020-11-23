exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, text: 'Get groceries', completed: 0 },
        { id: 2, text: 'Buy jeans', completed: 0 },
        { id: 3, text: 'Launder drug money', completed: 0 },
        { id: 4, text: 'Dispose of dead body', completed: 0 },
        { id: 5, text: 'Water garden', completed: 0 },
      ])
    })
}
