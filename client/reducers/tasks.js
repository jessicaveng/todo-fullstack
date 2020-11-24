const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks

    case'ADD_TASK':
    return[...state, action.task]
    
    case'DEL_TASK':
    return state.filter((task) => task.id !==action.task.id)

    case 'COMPLETE_TASK':
       return state.map((task) =>{
         if (task.id === action.id){
           task.completed = action.completed
          }
          return task 
       })

      default:
        return state
}
}

export default reducer
