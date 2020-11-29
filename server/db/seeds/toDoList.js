
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toDoList').del()
    .then(function () {
      // Inserts seed entries

      
      return knex('toDoList').insert([
        {id: 1, task: 'washing',priority: 'low',completed: 'true', },
        {id: 2, task: 'groceries',priority: 'medium',completed: 'false', },
        {id: 3, task: 'brunch',priority: 'high',completed: 'false', },
      ]);
    });
};
