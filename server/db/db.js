
const connection = require('./connection')




//GET CRUD R = Read

function getTodos(db = connection) {
  return db('toDoList').select()
}

//POST CRUD C = Create

function createTask(newTask, db = connection){
  return db('toDoList').insert(newTask)
  // inserting & automatically returning an array of ids, but just the first id for whatever task has been inserted,
  .then(ids => ids[0])
}

// PATCH CRUD U = UPDATE

function updateTask(id, updatedTask, db = connection ){

  return db('toDoList').update(updatedTask).where('id', id)
  //update task on the id that we select 
}


function deleteTask(id, db = connection){
  return db('toDoList').delete().where('id', id)
}

// CRUD D = DELETE

module.exports = {
  getTodos,
  createTask,
  updateTask,
  deleteTask,
}