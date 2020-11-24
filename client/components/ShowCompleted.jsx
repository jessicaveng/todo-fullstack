import React from 'react'
import { connect } from 'react-redux'


function ShowCompleted (props) {


    return (
      <>
        <ul className="todo-list">
        {props.getCompleted().map(todo =>{
      return (
      <li key={todo.id}>
        <div className='view'>
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=> props.checkIfDone(todo.id)} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={()=> props.removeTodo(todo.id)}></button>
        </div>
        </li> 
      )  
    })}
        </ul>
      </>
    )

}


function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(ShowCompleted)