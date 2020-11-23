import request from 'superagent'

const rootUrl = '/api/v1'

export function addTodo (todo) {
  return request.post(rootUrl + '/').send(todo)
    .then(res => {
      return res.body
    })
}

export function getTodos () {
  return request.get(rootUrl + '/')
    .then(res => {
      return res.body
    })
}

export function updateTodo (id, newText) {
  return request.update(rootUrl + '/').send({id: id, newText: newText})
    .then(res => {
      return res.body
    })
}

export function deleteTodo (id) {
  return request.delete(rootUrl + '/').send({id: id})
    .then(res => {
      return res.body
    })
}