import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions/index";

// here we started by adding mapStateToProps function & returning the globalState we're wanting to use, then we mapped over this globalState and returned each item in our globalState tasks array, & rendered this component in our App
class EditToDos extends React.Component {
  state = {
    task: "",
  };

  // sets the local state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  // checkbox appear and task gets strike through when completed

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {this.props.existingTasks.map((task) => {
              return (
                <>
                  <li
                    className=""
                    onDoubleClick={() =>
                      this.props.dispatch(updateTask(task.id))
                    }
                  >
                    <input
                      type="text"
                      className="new-todo"
                      name="task"
                      onChange={this.handleChange}
                    />
                    <label>{task.task}</label>
                    <button
                      onClick={() => this.props.dispatch(deleteTask(task.id))}
                      className="destroy"
                    ></button>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      </form>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    existingTasks: globalState.tasks,
  };
}

export default connect(mapStateToProps)(EditToDos);
