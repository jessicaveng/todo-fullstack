import React from 'react'
import { connect } from 'react-redux'


function FooterComplete(props){
  console.log(props)
  function getCompleted(){
    return props.todos.filter(todo=>todo.completed == 0).length
  }
  return(

    <>
    <span className="todo-count"><strong>{getCompleted()}</strong> item left</span>

    <ul className="filters">
      <li>
        <a className={!props.match.params.status ? "selected" : ""} href="#/">All</a>
      </li>
      <li>
        <a className={props.match.params.status == "active" ? "selected" : ""} href="#/active">Active</a>
      </li>
      <li>
        <a className={props.match.params.status == "completed" ? "selected" : ""} href="#/completed">Completed</a>
      </li>
    </ul>

    <button className="clear-completed">Clear completed</button>
    </>
  )
}
// className={props.match.params.status == "active" ? "selected" : ""}
function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(FooterComplete)