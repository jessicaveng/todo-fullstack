import React from 'react'
import { connect } from 'react-redux'
import {checkCompleted, deleteTodo}from '../actions'



class  ShowToDo extends React.Component {
 checkIfDone =(id)=>{
   let onetodo = this.props.todoList.filter(todo =>{
    return todo.id == id
  })
  if(onetodo[0].completed == true){
    onetodo[0].completed = onetodo[0].completed = 0
  }else{
    onetodo[0].completed = onetodo[0].completed = 1
  }
  this.props.dispatch(checkCompleted(onetodo[0]))
  }

removeTodo =(todoItem)=>{
  let onetodo = this.props.todoList.filter(todo =>{
    return todo.id == todoItem
  })
  this.props.dispatch(deleteTodo(onetodo[0]))
}


  render(){
    return (
      <>
    <ul className='todo-list'>
    {this.props.todoList.map(todo =>{
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
}



function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(ShowToDo)
