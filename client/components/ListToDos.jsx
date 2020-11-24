import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/index'


// here we started by adding mapStateToProps function & returning the globalState we're wanting to use, then we mapped over this globalState and returned each item in our globalState tasks array, & rendered this component in our App
function ListToDos (props) {
  return (
    <>
      {props.existingTasks.map(task => {
        return (
          <>
          <ul className="todo-list">
          <li className="new-todo" >{task.task}
          <button onClick ={() => props.dispatch(deleteTask(task.id)) }className="destroy"></button>
          {/* <DeleteTask/> */}
          </li>
          </ul>
          </>
        )
      })}
   
    </>
  )
}

function mapStateToProps(globalState){
  return {
    existingTasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(ListToDos)