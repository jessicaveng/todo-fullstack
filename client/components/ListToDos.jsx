import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTaskStatus } from "../actions/index";


//toggle - takes in the id & task info of the task being clicked & then gets the task array from GS, and finds the task which mates the id of the task being passed in. If the task is set as completed set to not completed & if task set to not completed set to completed - works to toggle on & off.
function toggle(id, props) {
  let updatedTask = props.tasks.find(task => {
    if (task.id == id) {
      if (task.completed) {
        task.completed = 0
      } else {
        task.completed = 1
      }
      return task
    }
  })
  props.dispatch(updateTaskStatus(updatedTask.id, updatedTask.completed))
}

function ListToDos(props) {
  const editing = 'editing'
  const setEditing = taskID => {
    if (taskID == id) {
      return editing
    }
  }

  const getClassName = task => {
    if (task.id == editing) {
      return editing
    }
    return task.done ? 'completed' : 'view'
  }
  return(
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {props.tasks.map((task) => {
        return (
          <>
            <li className={getClassName(task)}
              onDoubleClick={() => { setEditing(task.id) }} >
              <div className="view">
                <input className="toggle"
                  type="checkbox"
                  onClick={() => toggle(task.id, props)}
                  defaultChecked={task.completed && 'checked'} />
                <label>{task.task}</label>
                <button className="destroy"></button>
              </div>
              {/* <input className="edit" value="Hi :)" /> */}
            </li>
          </>
        )
      })}
    </ul>
  </section>
  )}


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(ListToDos);
