const connection = require('./connection')


function getAllTasks (db = connection) {
  return db('task').select()
}

function addTasks (task, db = connection) {
  return db('task').insert(task)
}

// Update a task, needs to change database, this must change taskDetials

function updateTask(id, updatedTask, db = connection){
  return db('todo').update(updatedTask).where('id', id)
}

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
  updateTask,
  deltask,
}