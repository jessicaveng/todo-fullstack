const initialState = []
// import { ADD_TODO } from '../actions/index'

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]

    case 'GET_TODOS':
      return state

    case 'DELETE_TODO':
      let deleteThisIndex = state.findIndex((item) => item.id == action.id)
      let deleteThisMany = 1 
      state.splice(deleteThisIndex, deleteThisMany)
      return [...state]

    case 'TOGGLE_COMPLETED_TODO':
      state.map((item) => {
        if (item.id == action.id) {
          item.completed = !item.completed
        }
      })
      return [...state ]

    case 'UPDATE_TODO':
      let alterThisIndex = state.findIndex((item) => (item.id == action.id))
      state[alterThisIndex].text = action.text
      return [...state ]

    case 'DELETE_COMPLETED_TODOS':
      let newState = state.filter(item => !action.ids.includes(item.id))
      return newState

    default: 
      return state
  }
}

export default todos
