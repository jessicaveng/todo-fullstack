const connection = require('./connection')

// Create
function addTodo (todo, db = connection) {
  return db('list')
    .insert(todo)
}

// Read
function getTodo (db = connection) {
  return db('list')
}

// Update
function updateTodo (update, db = connection) {
  return db('list')
    .where('id', update.id)
    .first()
    .then(() => {
      return db('list')
        .where('id', update.id)
        .update(update)
    })
}

// Delete
function deleteTodo (toDelete, db = connection) {
  return db('list')
    .where('id', toDelete.id)
    .first()
    .then(() => {
      return db('list')
        .where('id', toDelete.id)
        .del()
    })
}

module.exports = {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
}
