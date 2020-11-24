import request from 'superagent'



export function getAllTasksAPI(){
  console.log('got to Api')
  return request
  .get('/api/v1/todo/')
  .then(res => res.body)
}


export function addTaskAPI(theState){
  console.log(theState)
  const newTask = {
    task: theState,
    priority: 'high',
    completed: false
 
  }
  return request
      .post('/api/v1/todo/').send(newTask)
      .then(res => res.body)
}


export function deleteTaskAPI(id){
  return request .delete('/api/v1/todo/' + id)
}

export function updateTaskAPI(task) {
  return request.patch('/api/v1/todo')
  .send(task)
  .then( response => response.body)
}



