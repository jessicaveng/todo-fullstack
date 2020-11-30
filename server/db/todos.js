

const connection = require('./connection')

function getTodos (db = connection){
  return db('todo').select()
}

function addTodos (data, db = connection){
  return db('todo').insert(data)
}

function updateDoneOrNot (data, db = connection){
  return db('todo')
  .where('id' , data.id)
  .update({completed: data.completed})
}

function deleteTodo (data, db = connection){
  return db('todo')
  .where('id' , data.id)
  .del(data)
}

function delCompletedTodos (data, db = connection){
    return db('todo')
    .delete(data)
    .where('completed', true)
}

function updateTodo (data, db = connection){
  return db('todo')
  .where('id' , data.id)
  .update({todo: data.todo})
}



module.exports={
  getTodos,
  addTodos,
  updateDoneOrNot,
  deleteTodo,
  delCompletedTodos,
  updateTodo
}