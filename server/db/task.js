const connection = require('./connection')


function getAllTasks (db = connection) {
  return db('task').select()
}

function addTasks (task, db = connection) {
  return db('task').insert(task)
}

// function updateTask (task, db = connection) {
//     return db('task').insert(task)
// }


function deltask (deleteTask, db = connection)
{
  console.log(deleteTask)
  return db('Task')
  .where('id', deleteTask)
  .delete()
}



module.exports = {
  addTasks,
  getAllTasks,
  // updateTask,
  deltask,
}