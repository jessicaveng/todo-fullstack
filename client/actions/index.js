import request from 'superagent'

export const setTasks = ( todos ) => {
    return {
        type: 'SET_TASKS',
        todos: todos
    }
}

export const deleteTask = () => {
    return {
        type: 'DESTROY_TASK',
        id: id
    }
}

// api
export function getTasks () {
    return dispatch => {
        return request
        .get('api/v1/todos')
        .then( res => {
            return dispatch(setTasks(res.body))
        })
        .catch( err => {
            console.log( err )
        })
    }
}

export const addTask = ( task ) => {
    return dispatch => {
        return request
        .post( 'api/v1/todos' )
        .send( task )
        .then( () => dispatch( getTasks() ))
        .catch( err => console.log( err ))
    }
}

export const destroyTask = ( id ) => {
    return dispatch => {
        return request
        .delete( 'api/v1/todos/' + id )
        .then( () => dispatch( getTasks() ))
        .catch( err => console.log( err ))
    }
}

// toggle task
export const toggleTask = ( task ) => {
  console.log(task)
  task.completed = !task.completed
  console.log(task)
  return dispatch => {
      return request
      .put( 'api/v1/todos' )
      .send( task )
      .then( () => dispatch( getTasks() ))
      .catch( err => console.log( err ))
  }
}