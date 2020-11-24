import request from 'superagent'

const rootUrl = '/api/v1'

export function listAllTaskAPI (){
    return request.get('/api/v1/')
    .then(res => res.body)
}

export function addTaskAPI (task) {
    console.log('we got the api file')
    console.log('api recevied', task)

    return request 
        .post('/api/v1/').send(task)
        .then(response =>response.body)
}

export function UpdateTask (tasks) {
    // tasks = tasks
    return request.patch(`/v1/${tasks.id}`)
      .send(tasks)
      .then(res => {
        validateNoSnakeCase(res.body)
        validatePostResponse('PATCH', 'v1/:id', res.body)
        return res.body
      })
      .catch(errorHandler('PATCH', '/v1/:id'))
  }



