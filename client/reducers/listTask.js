
const initialState = []


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return action.task
    case 'ADD_TASK':
      return [...state, action.task]
    case 'DEL_TASK':
      console.log(action)
      return state.filter( task => task.id != action.taskID)
    case 'UPDATE_TASK':
          return state.map( task => task.id != action.taskID )
        default:
          return state
  }
}






export default reducer