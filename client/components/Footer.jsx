import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {removeTodo} from '../actions/deleteTodo'
import Popup from './Popup'



function FooterComplete(props){
  const [showPopup, setShowPopup] = useState(false)

  console.log(props)

  function getCompleted(){
    return props.todos.filter(todo=>todo.completed == 0).length
  }

  function deleteTodo(todoProps){
    let completedTodos = props.todos.filter(todo=>todo.completed == 1)
    completedTodos.map(todo=>props.dispatch(removeTodo(todo)))
    setShowPopup(!showPopup)
  }

  return(

    <>
    <span className="todo-count"><strong>{getCompleted()}</strong> item left</span>

    <ul className="filters">
      <li>
        <NavLink exact to= "/" activeClassName = "selected">All</NavLink> 
      </li>
      <li>
      <NavLink exact to= "/active" activeClassName = "selected">Active</NavLink> 
      </li>
      <li>
      <NavLink exact to= "/completed" activeClassName = "selected">Completed</NavLink> 
      </li>
    </ul>

    <button className="clear-completed" onClick={()=> setShowPopup(!showPopup)} >Clear completed</button>
    {showPopup && (<Popup text="Are you sure you want to delete" confirm={() => deleteTodo(props.todos)} cancel={() => setShowPopup(!showPopup)} />)}
    </>
  )
}

function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(FooterComplete)