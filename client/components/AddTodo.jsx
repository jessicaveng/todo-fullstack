import React from 'react'
import { connect } from 'react-redux'




function AddTodo (props) {
  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      
    </>
  )
}



function mapStateToProps (globalState) {
  return {
    todoList: globalState.TodoList,
  }
}
export default connect(mapStateToProps)(AddTodo)
