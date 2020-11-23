const initialState = []
// import { ADD_TODO } from '../actions/index'

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return
    case 'GET_TODOS':
      return 
    case 'DEL_TODO':
      return
    case 'UPDATE_TODO':
      return
    default: 
      return state
  }
}

export default todos
