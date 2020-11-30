import React, {useState} from 'react'
import { connect } from 'react-redux'
import Update from './Update'
import {checkCompleted, deleteTodo}from '../actions'

function ShowEach (props) {
    const [doubleClickEdit, setDoubleClickEdit] = useState(false)

   function removeTodo(id){
        props.dispatch(deleteTodo({id}))
      }
    function onDoubleClick(){
        setDoubleClickEdit(!doubleClickEdit)
    }

    function checkIfDone(id){
        let onetodo = id
        if(onetodo.completed == true){
            onetodo.completed = onetodo.completed = 0
        }else{
            onetodo.completed = onetodo.completed = 1
        }
        props.dispatch(checkCompleted(id))
     }

    return (
      <>
      <li key={props.todo.id}>
        <div className='view'>
        <input className="toggle" type="checkbox" checked={props.todo.completed} onChange={()=> checkIfDone(props.todo)} />
        {!doubleClickEdit ? <label onDoubleClick={onDoubleClick}>{props.todo.todo}</label> : <Update text={props.todo.todo} todo={props.todo} enter={onDoubleClick}/>}

        <button className="destroy" onClick={()=> removeTodo(props.todo.id)}></button>
        </div>
        </li>  
      </>
    )
}

export default connect()(ShowEach)