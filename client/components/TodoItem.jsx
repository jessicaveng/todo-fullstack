import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions/updateTodo'
import { removeTodo } from '../actions/deleteTodo'
import EditTodo from './EditTodo'
import Popup from './Popup'

function TodoItem (props) {
  const [showPopup, setShowPopup] = useState(false)
  const [doubleClickEdit, setDoubleClickEdit] = useState(false)
  //   const changePopup = setShowPopup(!showPopup)  use this for refactoring?

  function updateCompleted (todo) {
    todo.completed = todo.completed ? 0 : 1
    props.dispatch(updateTodo(todo))
  }

  function deleteTodo (todo) {
    props.dispatch(removeTodo(todo))
    setShowPopup(!showPopup)
  }

  function onDoubleClick () {
    setDoubleClickEdit(!doubleClickEdit)
  }

  return (
    <>
      <li className={props.todo.completed ? 'completed' : ''} key={props.todo.id}>
        <div className='view'>
          <input className='toggle' type='checkbox' id={props.todo.id} checked={props.todo.completed} onChange={() => updateCompleted(props.todo)}/>
          {!doubleClickEdit ? <label onDoubleClick={onDoubleClick}>{props.todo.todo}</label> : <EditTodo text={props.todo.todo} todo={props.todo} enter={onDoubleClick}/>}
          {showPopup && (<Popup text='Are You Sure You Want To Delete?' confirm={() => deleteTodo(props.todo)} cancel={() => setShowPopup(false)} />)}
          <button className='delete' onClick={() => setShowPopup(!showPopup)}></button>
        </div>
      </li>
    </>
  )
}

export default connect()(TodoItem)
