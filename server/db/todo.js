const connection = require('./connection')

function getAllTasks (db = connection){
  return db('todo').select()
}

function addTask( newTask, db = connection){
  return db('todo').insert(newTask)
}

function updateTask(id, updatedTask, db = connection){
  return db('todo').update(updatedTask).where('id', id)
}

function deleteTask(id, db = connection){
  return db('todo').where('id', id). delete()
}

function deleteCompletedTask( db = connection){
  return db('todo').where('todo.completed', true). delete()
}

function getActiveTasks (db=connection){
  return db('todo').select().where('todo.completed', false)
}

function getCompletedTasks (db=connection){
  return db('todo').select().where('todo.completed', true)
}


module.exports={
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
  getActiveTasks,
  getCompletedTasks,
  deleteCompletedTask
}