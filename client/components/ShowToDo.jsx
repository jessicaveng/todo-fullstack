import React from 'react'
import { connect } from 'react-redux'




class  ShowToDo extends React.Component {
  render(){
    return (
      <>
    <ul className='todo-list'>
    {this.props.todoList.map(todo =>{
      return (
      <li key={todo.id}>
        <div className='view'>
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=> this.props.checkIfDone(todo.id)} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={()=> this.props.removeTodo(todo.id)}></button>
        </div>
        </li> 
      )  
    })}
    </ul>
      </>
    )
  }
}



function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(ShowToDo)
