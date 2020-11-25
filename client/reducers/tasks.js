

function reducer(state = [], action ){
    let newState
    let found
    switch(action.type){
        case 'GET_TASKS':
            return action.tasks

        case 'TASK_DELETED':
            return state.filter(task => task.id != action.id)

        case 'BATCH_DELETED':
            // newState = []
            // state.forEach(task => {
            //    if(!action.ids.includes(task.id)){
            //        newState.push(task)
            //    } 
            // })
            // return newState
            return state.filter(task => !action.ids.includes(task.id))

        case 'TASK_ADDED':
            // newState = [...state]
            // newState.push(action.task)
            // return newState
            return [...state, action.task]

        case 'TASK_STATUS_UPDATED':
            newState = [...state]
            found = newState.find(task => task.id == action.id)
            found.done = action.done
            return newState

        case 'TASK_DETAILS_UPDATED':
            newState = [...state]
            found = newState.find(task => task.id == action.id)
            found.text = action.text
            return newState

        default:
            return state
    }
}

export default reducer