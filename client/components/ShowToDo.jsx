import React from 'react'
import { connect } from 'react-redux'



class  ShowToDo extends React.Component {

  render(){
    return (
      <>
    <ul>
    {this.props.todoList.map(todo =>{
  
      return (
      <li key={todo.id}>{todo.todo}</li> 
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
