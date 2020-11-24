
import {addTaskAPI, getAllTasksAPI, updateTaskAPI} from '../apis/todo'

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
    task
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
  return dispatch=>{
    return updateTaskAPI(task)
    .then((task)=>{
      dispatch(changeToCompleted(task))
    })
  }
}