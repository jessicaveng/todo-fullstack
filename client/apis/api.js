import request from 'superagent'

const rootUrl = '/api/v1/todos'

// Create
export function addTodo (text) {
  let todo = {
    text: text,
    completed: false
  }
  return request.post(rootUrl).send(todo)
    .then(res => {
      return res.body
    })
}

// Read
export function getTodos () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

// Update
export function updateTodo (id, newText, completed) {
  let completedInteger = completed ? 1 : 0
  return request.patch(rootUrl).send({id: id, newText: newText, completed: completedInteger})
    .then(res => {
      return res.body
    })
}

// Delete
export function deleteTodo (id) {
  return request.delete(rootUrl + '/delete/' + id)
    .then(res => {
      return res.body
    })
}

export function deleteCompletedTodos () {
  return request.delete(rootUrl + '/batchdelete')
    .then(res => {
      return res.body
    })
}