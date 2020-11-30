const initialState = [{id:1, task: 'wash dishes', completed: true}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TASKS':
        return action.tasks
      
    // case 'COMPLETE_TASK':  
    // return state.filter((task) =>{
    //   return (task.id !== action.id)
   
    //   })

      default:
        return state
  }
}

export default reducer