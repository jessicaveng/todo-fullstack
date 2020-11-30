import request from 'superagent'
//  list all API
export function getAllTodosAPI () {
  return request.get('/api/v1/todo')
    .then(res => res.body)
}

// add todo API
export function addTodoAPI (todo) {
  return request.post('/api/v1/todo')
    .send(todo)
    .then(response => response.body)
}

//  update todo API
export function updateTodoAPI (todo) {
  return request.patch('api/v1/todo')
    .send(todo)
    .then(response => response.body)
}

// delete todo API
export function deleteTodoAPI (todo) {
  return request.delete('api/v1/todo')
    .send(todo)
    .then(response => response.body)
}
