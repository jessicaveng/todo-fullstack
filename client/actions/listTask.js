import { listAllTaskAPI } from '../apis/Api'
import { addTaskAPI } from '../apis/Api'


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
        .then(() => {
          dispatch(addTask(task))
        })
        .catch(err => console.log(err))
    } 
}




