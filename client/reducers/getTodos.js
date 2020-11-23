import {GET_TODOS} from '../actions/getTodos'

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TODOS:
      return [...state]
    default:
      return state
  }
}

export default reducer