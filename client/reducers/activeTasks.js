const initialState = [{id:1, task: 'wash dishes', completed: true}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TASKS':
        return action.tasks

      default:
        return state
  }
}

export default reducer