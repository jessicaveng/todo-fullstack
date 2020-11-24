import request from 'superagent'

export function getAllTodosAPI() {
  return request.get('/api/v1/todo')
  .then( res => res.body)
}

export function addTodoAPI(todo) {
  console.log(todo)
  return request.post('/api/v1/todo')
  .send(todo)
  .then( response => response.body)
}

export function editTodoAPI(todo) {
  console.log(todo)
  return request.patch('/api/v1/todo')
  .send(todo)
  .then( response => response.body)
}

export function removeTodoAPI(todo) {
  return request.delete('api/v1/todo')
  .send(todo)
  .then( response => response.body)
}