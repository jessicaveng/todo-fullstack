import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions/index";

// here we started by adding mapStateToProps function & returning the globalState we're wanting to use, then we mapped over this globalState and returned each item in our globalState tasks array, & rendered this component in our App

function toggle(id, props){
  //get the task array from global state, and find the task that matches the id of the task which we're passing in
  let updatedTask = props.task.find(task => {-
      task.completed = 1
    }
    return task
  })
  props.dispatch(updateTaskStatus(updatedTask.id, updatedTask.completed))
}

function ListToDos (props){


  // checkbox appear and task gets strike through when completed

 
    return (
   
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {props.existingTasks.map((task) => {
              return (
              <>
              <li className={task.completed ? 'completed' : ''} >
                <div className="view">
                  <input className="toggle" 
                  type="checkbox" 
                  onClick={() => toggle(task.id, props)}
                  defaultChecked={task.completed && 'checked'}/>
                  <label>{task.task}</label>
                  <button className="destroy"></button>
                  </div>
                  <input className="edit" value="Hi :)" />
                  </li>
                </>
                 )})}
            </ul>
          </section>
    )}


function mapStateToProps(globalState) {
  return {
    existingTasks: globalState.tasks,
  };
}

export default connect(mapStateToProps)(ListToDos);
