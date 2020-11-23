
const connection = require('./connection')


function getTodos (db = connection){
  return db('todo').select()
}

function addTodos (data, db = connection){
  return db('todo').insert(data)
}

module.exports={
  getTodos,
  addTodos
}