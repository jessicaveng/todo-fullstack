const connection = require('./connection')


function getAllTasks (db = connection) {
  return db('task').select()
}

function addTasks (task, db = connection) {
  return db('task').insert(task)
}

function updateTask (task, db = connection) {
    return db('task').insert(task)
}


module.exports = {
  addTasks,
  getAllTasks,
  updateTask,
}