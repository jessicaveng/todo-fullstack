
import {addTaskAPI, getAllTasksAPI, completeTaskAPI, deleteTaskAPI} from '../apis/todo'

export function setTasks (tasks) {
  return {
    type: 'SET_TASKS',
    tasks
  }
}

export function addTask (task){
  console.log('addTask function is being called')
  return{
    type:'ADD_TASK',
    task
  }
}

export function changeToCompleted(task){
  return{
    type:'COMPLETE_TASK',
    id:task
  }
}

export function deleteTask(task){
  return{
    type:'DEL_TASK',
    id:task
  }
}

export function fetchTasks() {
  return dispatch => {
    return getAllTasksAPI()
      .then(tasks => {
        dispatch(setTasks(tasks))
        return null
      })
    }
  }

export function addNewTask(newTask){
  return dispatch=>{
    return addTaskAPI(newTask)
    .then (newTask =>{
      dispatch(addTask(newTask))
    })
  }
}

export function completeTask(task){
  console.log('got to action')
  return dispatch=>{
    return completeTaskAPI(task)
    .then(()=>{
      dispatch(changeToCompleted(task.id))
    })
  }
}



export function destroyTask(task){
  console.log('got to destroy task action')
  return dispatch=>{
    return deleteTaskAPI(task.id)
    .then (() =>{
      dispatch(deleteTask(task.id))
    })
  }
}