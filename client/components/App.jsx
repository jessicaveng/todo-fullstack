import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo';
import { getToDo } from '../apis/api';
import { toggleTaskCompleted, fetchToDos } from '../actions'

class App extends React.Component {
	state = {
		todos: [],
	};
	componentDidMount() {
		// getToDo().then((todos) => {
		// 	this.setState({ todos: todos });
		// });
		this.props.dispatch(fetchToDos())
		// this.props.dispatch(toggleTaskCompleted(task))
	}

	render() {
		return (
			<>
				<header className="header">
					<h1>Panha / Tense</h1>
				</header>

				<AddTodo />

				<section className="main">
					<input id="toggle-all" className="toggle-all" type="checkbox" />

					{/* CRUD U = UPDATE true or false */}

					<label for="toggle-all">Mark all as complete</label>
					<ul className="todo-list">
						{this.props.tasks.map((singleTask) => {
							return (
								// <li className="completed">
								<li className={singleTask.completed === 'true' ? 'completed' : 'view'}>
									<div className="view">
										<input
											className="toggle"
											type="checkbox"
											onClick={() => this.toggle(singleTask.id, this.props)}
											defaultChecked={singleTask.completed}
										/>

										<label>{singleTask.task}</label>
										<button className="destroy"></button>
									</div>
									<input className="edit" value="Create a TodoMVC template" />
								</li>
							);
						})}
					</ul>
				</section>
			</>
		);
	}
}




function mapStateToProps(globalState){
  return {
    tasks: globalState.tasks
  }
}
export default connect(mapStateToProps)(App)
