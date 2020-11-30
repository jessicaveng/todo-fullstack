const connection = require('./connection')
const {where} = require('./connection')

const getToDo = (db = connection) => {
  return db('todos')
    .select()
}

const addToDo = (todo, db = connection) => {
  return db('todos')
    .insert(todo)
}

const editToDo = (id, newToDo, db = connection) => {
  return db('todos')
    .update(newToDo)
    .where('id', id)
}

const deleteToDo = (id, db = connection) => {
  return db('todos')
    .delete()
    .where('id', id)
}

module.exports = {
  getToDo,
  addToDo,
  editToDo,
  deleteToDo
}