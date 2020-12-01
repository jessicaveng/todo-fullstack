import React from "react"
import { connect } from "react-redux"
import { fetchTasks, addTask } from '../actions'

class AddTodo extends React.Component {
  state = {
    task: "",
    completed: 0
  };

  // sets the local state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //dispatches local state data to API func
    this.props.dispatch(
      addTask(
        this.state
      )
    );
    //resets local state to empty
     this.setState({
       task: ""
     })
    // this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <header className="header">
         <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.task}
            name="task"
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
          {/* <select
            onChange={this.handleChange}
            value={this.state.priority}
            name="priority"
            type="text"
            
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select> */}
        
        </form>
      </header>
    );
  }
}

function mapStateToProps(globalState){
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(AddTodo)
