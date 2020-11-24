import React from 'react'

import { connect } from 'react-redux'

import TodoItem from './TodoItem'
export default connect(mapStateToProps)(TodosList)



function TodosList(props) {
  function returnProps(){
    if(props.match.params.status == "completed"){
      return props.todos.filter(todo=>todo.completed == 1)
    }else if(props.match.params.status == "active"){
      return props.todos.filter(todo=>todo.completed == 0)
    }else{
      return props.todos
    }
  }
    return(
      <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">

        {returnProps().map(todo => {
          return (
            <TodoItem todo={todo}/>
          )}
          )}
      </ul>
      </>
    )
}

function mapStateToProps (globalState){

  return {
    todos: globalState.getTodos
  }
}
