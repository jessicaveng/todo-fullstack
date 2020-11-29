const initialState = [{id:1, task: 'wash dishes', completed: true}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks

    case'ADD_TASK':
      return[...state, action.task]
    
    // case 'DEL_COMPLETED_TASKS':
    //   return state.filter((task) => { task.completed !== true || '1'})

    case'DEL_TASK':
      return state.filter((task) => task.id !==action.id)

    case 'COMPLETE_TASK':  
    console.log('got to reducer')
      return state.map((task) =>{
        if (task.id === action.id)
          {
            task.completed = (task.completed === '0') ? '1' : '0'
          }
          return task 
        })

      default:
        return state
  }
}

export default reducer
