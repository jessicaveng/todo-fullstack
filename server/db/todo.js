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


module.exports={
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
}