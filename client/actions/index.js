import { thunk } from 'react-redux'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED_TODO = 'TOGGLE_COMPLETED_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const UPDATE_TODOS_LEFT = 'UPDATE_TODOS_LEFT'


export const todoAdded = (id, text, completed) => {
  return {
    type: ADD_TODO,
    todo: {
      id: id,
      text: text,
      completed: completed
    }
  }
}

export const todoCompleteToggled = (id) => {
  return {
    type: TOGGLE_COMPLETED_TODO,
    id: id
  }
}

export const todoDeleted = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export const todoUpdated = (id, text) => {
  return {
    type: UPDATE_TODO,
    id: id,
    text: text
  }
}

export const updateTodosLeft = (todos) => {

  let todosLeft = todos.filter((item) => !item.completed).length

  return {
    type: UPDATE_TODOS_LEFT,
    todosLeft: todosLeft
  }
}
