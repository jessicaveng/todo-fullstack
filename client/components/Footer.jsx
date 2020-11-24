import React, { useState } from 'react'
import { connect } from 'react-redux'
import {removeTodo} from '../actions/deleteTodo'
import Popup from './Popup'



function FooterComplete(props){
  const [showPopup, setShowPopup] = useState(false)


  function getCompleted(){
    return props.todos.filter(todo=>todo.completed == 0).length
  }

  function deleteTodo(){
    let completedTodos = props.todos.filter(todo=>todo.completed == 1)
    completedTodos.map(todo=>props.dispatch(removeTodo(todo)))
    setShowPopup(!showPopup)
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

    <button className="clear-completed" onClick={()=> setShowPopup(!showPopup)} >Clear completed</button>
    {showPopup && (<Popup text="Are you sure you want to delete" confirm={() => deleteTodo()} cancel={() => setShowPopup(false)} />)}
    </>
  )
}

function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(FooterComplete)