// const { default: reducers } = require(".")

const reducer = (state = [], action) =>{
  switch(action.type){
    case 'GET_TODO':
      return action.todo

    case 'CHECK':
      return {
        todo: action.check
      }
    default:
      return state
  }
}

export default reducer