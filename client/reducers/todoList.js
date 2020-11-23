// const { default: reducers } = require(".")

const reducer = (state = [], action) =>{
  switch(action.type){
    case 'GET_TODO':
      return action.todo

    case 'ADD_TODO':
      return action.updateState

    default:
      return state
  }
}

export default reducer