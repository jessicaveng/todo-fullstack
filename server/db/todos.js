const connection = require('./connection')

function getTodo (db = connection){
  return db ('list')

}

function addTodo (todo, db = connection){
  return db('list')
  .insert(todo)
}

function updateTodo (update, db = connection){
  return db('list')
  .where('id', update.id)
  .first()
  .then(() => {
    return db('list')
    .where('id', update.id)
    .update(update)
  })
  .then((hello)=>console.log(hello))
  .then(console.log("I made it"))
}

function deleteTodo (toDelete, db = connection){
  return db('list')
  .where('id', toDelete.id)
  .first()
  .then(()=> {
    return db('list')
    .where('id', toDelete.id)
    .del()
  })
}

module.exports = { 
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} 