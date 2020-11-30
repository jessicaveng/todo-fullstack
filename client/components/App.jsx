import React from 'react';
import AddTodo from './AddTodo';
import {getToDo} from '../apis/api'


class App extends React.Component {

  state = {
    todos: [],
  }

  
  componentDidMount() {
    getToDo()
    .then(todos => {
      this.setState({
        todos: todos
      })
    })
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

               {this.state.todos.map(singleTask => {
                 console.log(singleTask)
                  return(

                  <li className="completed">
                    <div className="view">
                      <input className="toggle" type="checkbox" checked />
                    <label></label>
                      <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Create a TodoMVC template" />
                  </li>
                  )}
                  
                  )}
                


<li className="">
							<div className="view">
								<input className="toggle" type="checkbox" />
								<label>the task name here</label>
								<button className="destroy"></button>

								{/* this will be the delete button ()destroy */}
							</div>
							<input className="edit" value="the task name here" />
						</li>
					</ul>
				</section>
			</>
		);
	}
}

export default App;
