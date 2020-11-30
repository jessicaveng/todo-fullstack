import { listAllTaskAPI } from '../apis/Api'
import { addTaskAPI } from '../apis/Api'
import { deltaskAPI } from '../apis/Api'
import { updateTaskAPI } from '../apis/Api'

export function setTask (task) {
    return {
      type: 'SET_TASK',
      task
    }
  }

export function fetchapis() {
    return dispatch => {
      return listAllTaskAPI()
        .then(task => {
          dispatch(setTask(task))
          return null
        })
      }
    }
 
export function addTask (task) {
    return {
        type: 'ADD_TASK',
        task
      }
    }


export function addtaskapis(task){
  console.log('action receieved', task)
  return dispatch => {
      return addTaskAPI(task)
        .then(taskID => {
          task.id = taskID.results[0]
          dispatch(addTask(task))
        })
        .catch(err => console.log(err))
    } 
}

export function delTask (taskID) {
  return {
      type: 'DEL_TASK',
      taskID
    }
  }


export function deltaskfun(task) {
  return dispatch => {
      return deltaskAPI(task)
      .then(() => dispatch(delTask(task))
      )
  }
}

export function updTask (taskID) {
  return {
      type: 'UPD_TASK',
      taskID
    }
  }

export function updatetaskfun(task) {
  return dispatch => {
    return updateTaskAPI(task)
    .then(()=> dispatch(updTask)(task))
  }
}





