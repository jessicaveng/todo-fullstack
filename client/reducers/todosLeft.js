const initialState = 0

const todosLeft = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_TODOS_LEFT':
      return action.todosLeft

    default: 
      return state
  }
}

export default todosLeft