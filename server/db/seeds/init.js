exports.seed = function (knex) {
  return knex('list').del()
    .then(function () {
      return knex('list').insert([
        { id: 1, todo: 'Win', completed: 0 }
      ])
    })
}
