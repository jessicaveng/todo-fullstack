
const connection = require('./connection')





function getTodos(db = connection) {
  return db('toDoList').select()
}




module.exports = {
  getTodos,
}