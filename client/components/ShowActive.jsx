import React from 'react'
import { connect } from 'react-redux'


function ShowActive (props) {
  // const getActive = ()=> {
  //   console.log(props.todoList.filter(todo =>todo.completed == false))
  //   return props.todoList.filter(todo =>todo.completed == false)
  // }


    return (
      <>
      {console.log(props.getActive)}
      <ul className="todo-list">
        {props.getActive().map(todo =>{
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
export default connect(mapStateToProps)(ShowActive)