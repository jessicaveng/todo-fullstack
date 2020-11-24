import React from 'react'
import { connect } from 'react-redux'


function FooterComplete(props){

  function getCompleted(){
    return props.todos.filter(todo=>todo.completed == 1).length
  }
  return(

    <>
    <span className="todo-count"><strong>{getCompleted()}</strong> item left</span>

    <ul className="filters">
      <li>
        <a className="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>

    <button className="clear-completed">Clear completed</button>
    </>
  )
}

function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(FooterComplete)