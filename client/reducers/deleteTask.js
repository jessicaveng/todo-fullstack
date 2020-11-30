const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return state.filter( (todos) => todos !== action.todos)

        default: 
            return state
    }
}

export default reducer