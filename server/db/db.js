const { where } = require('./connection')
const connection = require('./connection')

function addTodo (todo, db = connection) {
  return db('todos').insert(todo)
}

function getTodos (db = connection) {
  return db('todos').select()
}

function updateTodo (id, newText, db = connection) {
  return db('todos')
    .where({id: id})
    .update({text: newText})
}

function deleteTodo (id, db = connection) {
  return db('todos')
    .where('id', id)
    .del()
}

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo
}