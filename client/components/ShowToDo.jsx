import React from 'react'
import { connect } from 'react-redux'
import ShowEach from './ShowEach'




class  ShowToDo extends React.Component {
  render(){
    return (
      <>
    <ul className='todo-list'>
    {this.props.todoList.map(todo =>{
      return (
          <ShowEach todo={todo}/>
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
