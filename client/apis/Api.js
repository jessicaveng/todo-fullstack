import request from 'superagent'

export function listAllTaskAPI () {
  return request.get('/api/v1/').then(res => res.body)
}

export function addTaskAPI (task) {
  console.log('we got the api file')
  console.log('api recevied', task)

  return request
    .post('/api/v1/').send(task)
    .then(response => response.body)
}

export function updateTaskAPI (task) {
console.log(task)
    return request.patch(`/api/v1/${task.editcurrent}`)
      .send(task)
      .then(res => {
        // PostResponse('PATCH', 'v1/:id', res.body)
        return res.body
      })
      // .catch(errorHandler('PATCH', '/v1/:id'))
  }

export function deltaskAPI (id) {
  console.log('we delete api fired',id)
  return request.delete(`/api/v1/${id}`).then(res => res.body)
}
