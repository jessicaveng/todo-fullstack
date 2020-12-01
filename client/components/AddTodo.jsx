import React from 'react'
import { connect } from 'react-redux'

import {addTaskToDbAndGlobState} from '../actions/index'

class AddTodo extends React.Component {
	state = {
		newTask: '',
	}

	makeOneBabyTask = (event) => {
    this.setState({
      newTask: event.target.value
    })
  }

  giveBirth = (event) => {

    event.preventDefault()
    this.props.dispatch(addTaskToDbAndGlobState(this.state.newTask))
    this.setState({
      newTask: ''
    })
  }


	render() {
		return (
			<form onSubmit={this.giveBirth} >
				<input value={this.state.newTask}
					className="new-todo"
          onChange={this.makeOneBabyTask}
          
					placeholder="What needs to be done?"
					autoFocus={true}
				/>
			</form>
		)
	}
}

export default connect()(AddTodo)
