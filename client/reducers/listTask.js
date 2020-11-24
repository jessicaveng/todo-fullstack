
const initialState = []


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return action.task
    case 'ADD_TASK':
      return [...state, action.task]
    default:
      return state
    // case 'UPDATE_TASK':
    //     return [...state, action.task]
    //   default:
    //     return state
  }
}







export default reducer