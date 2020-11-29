import request from 'superagent'

export function getAllTasksAPI(){
  return request
  .get('/api/v1/todo/')
  .then(res => res.body)
}

export function deleteCompletedTasksAPI(){
  return request
  .delete('/api/v1/todo/')
  .then(res => res.body)
}

export function getCompletedTasksAPI(){
  return request
  .get('/api/v1/todo/completed/')
  .then(res => res.body)
}

export function getActiveTasksAPI(){
  return request
  .get('/api/v1/todo/active/')
  .then(res => res.body)
}

export function addTaskAPI(theState){
  console.log(theState)
  const newTask = {
    task: theState,
    priority: 'high',
    completed: "0"
 
  }
  return request
      .post('/api/v1/todo/').send(newTask)
      .then(res => res.body)
}



export function completeTaskAPI(task) {
  console.log('got to the API')
  console.log(task)
  const updatedTask ={
    id:task.id,
    completed: (task.completed === '0' || false) ? '1' || true : '0' || false
  }
  console.log('updatedTask' , updatedTask)
  
  return request
  .patch('/api/v1/todo/' + updatedTask.id)
  .send(updatedTask)
  .then( response => response.body)
}



export function deleteTaskAPI(id){
  return request .delete('/api/v1/todo/' + id)
}

