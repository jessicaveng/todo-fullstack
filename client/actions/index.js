
import {
  addTaskAPI,
  getAllTasksAPI,
  completeTaskAPI,
  deleteTaskAPI,
  getCompletedTasksAPI,
  getActiveTasksAPI,
  deleteCompletedTasksAPI,
  updateTaskAPI
}from '../apis/todo'

export function setTasks (tasks) {
  console.log('set tasks being called')
  console.log(tasks)
  return {
    type: 'SET_TASKS',
    tasks
  }
}

export function setActiveTasks (tasks) {
  return {
    type: 'SET_ACTIVE_TASKS',
    tasks
  }
}

export function setCompletedTasks (tasks) {
  return {
    type: 'SET_COMPLETED_TASKS',
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

export function deleteCompleted(){
  return {
    type:'DEL_COMPLETED_TASKS',
  
  }
}

export function setUpdatedTask(editedTask){
  return {
    type:'UPDATE_TASK',
    editedTask
  }
}


export function fetchTasks() {
  console.log('fetch tasks being called')
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
      dispatch(fetchActiveTasks())
    })
  }
}

export function completeTask(task){
  console.log('got to action')
  return dispatch=>{
    return completeTaskAPI(task)
    .then(()=>{
      dispatch(changeToCompleted(task.id))
      dispatch(fetchActiveTasks())
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

export function fetchCompletedTasks() {
  return dispatch => {
    return getCompletedTasksAPI()
      .then(tasks => {
        dispatch(setCompletedTasks(tasks))
        return null
      })
    }
  }

  export function fetchActiveTasks() {
    return dispatch => {
      return getActiveTasksAPI()
        .then(tasks => {
          dispatch(setActiveTasks(tasks))
          return null
        })
      }
    }

    export function destroyCompletedTasks(){
      console.log('got to destroy task action')
      return dispatch=>{
        return deleteCompletedTasksAPI()
        .then ((tasks) =>{
          dispatch(fetchTasks(tasks))
        })
      }
    }

    export function updateTask(editedTask){
      console.log('got to action')
      return dispatch=>{
        return updateTaskAPI(editedTask)
        .then(()=>{
          dispatch(setUpdatedTask(editedTask))
        })
      }
    }
    