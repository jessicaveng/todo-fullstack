import React from 'react'
import { connect } from 'react-redux'


function ShowCompleted (props) {


  const getCompleted= ()=>{
    console.log(props.todoList.filter(todo =>todo.completed == true))
    return props.todoList.filter(todo =>todo.completed == true)
  }

    return (
      <>
        <ul className="todo-list">
        {getCompleted().map(todo =>{
      return (
      <li key={todo.id}>
        <div className='view'>
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=> this.checkIfDone(todo.id)} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={()=> this.removeTodo(todo.id)}></button>
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