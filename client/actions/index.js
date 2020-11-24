export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED_TODO = 'TOGGLE_COMPLETED_TODO'
export const DELETE_TODO = 'DELETE_TODO'


export const addTodo = (id, text, completed) => {
  return {
    type: ADD_TODO,
    todo: {
      id: id,
      text: text,
      completed: completed
    }
  }
}

export const toggleCompletedTodo = (id) => {
  return {
    type: TOGGLE_COMPLETED_TODO,
    id: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
}