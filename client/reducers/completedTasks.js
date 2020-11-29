const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPLETED_TASKS':
        return action.tasks

      default:
        return state
  }
}

export default reducer