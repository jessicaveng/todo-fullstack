import React, { useState } from 'react'
import { connect } from 'react-redux'
import {updateDBTodo} from '../actions/updateTodo'
import {removeTodo} from '../actions/deleteTodo'
import Popup from './Popup'
import EditTodoItem from './EditTodoItem'


export default connect()(TodoItem)

function TodoItem(props){
  const [showPopup, setShowPopup] = useState(false)
  const [doubleClickEdit, setDoubleClickEdit] = useState(false)

  function updateCompleted(todo){
    todo.completed = todo.completed ? 0 : 1
    props.dispatch(updateDBTodo(todo))
  }
  function deleteTodo(todo){
    props.dispatch(removeTodo(todo))
    setShowPopup(!showPopup)
  }
  function onDoubleClick(){
    setDoubleClickEdit(!doubleClickEdit)
  }
  return(
  <>
    <li className={props.todo.completed ? "completed" : ""} key={props.todo.id}>
      <div className="view">
        <input className="toggle" type="checkbox" id={props.todo.id} checked={props.todo.completed} onChange={() => updateCompleted (props.todo)}/>

        {!doubleClickEdit ? <label onDoubleClick={onDoubleClick}>{props.todo.todo}</label> : <EditTodoItem text={props.todo.todo} todo={props.todo} enter={onDoubleClick}/>}

        {/* <label onDoubleClick={onDoubleClick}>{props.todo.todo}</label> */}


        { showPopup && (<Popup text="Are you sure you want to delete" confirm={() => deleteTodo(props.todo)} cancel={() => setShowPopup(false)} />)}
      <button className="destroy" onClick={()=> setShowPopup(!showPopup)}></button>
      </div>
    </li>
  </>
  )
}
