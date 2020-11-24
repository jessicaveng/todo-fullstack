
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task').del()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {id: 1,taskDetails: 'Task name', Priority: 1, Completed: 'True', },
        {id: 2,taskDetails: 'Task name', Priority: 2, Completed: 'False', },
        {id: 3,taskDetails: 'Task name', Priority: 3, Completed: 'True', }
      ]);
    });
};
