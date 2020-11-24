import React from 'react'
import {connect} from 'react-redux'

import AddTodo from './AddTodo'
import {completeTask, fetchTasks} from '../actions/index'

class App extends React.Component {
  
  
  componentDidMount () {
    this.props.dispatch(fetchTasks())
  }


  handleChange = (task)=>{
    this.props.dispatch(completeTask(task)
    )}
  
  

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
      
          <ul className="todo-list">
           {this.props.tasks.map((task)=>
              <li key={task.id} className={task.completed == 1 ? 'completed' : ''} >
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={() =>this.handleChange(task)}/>
                  <label>{task.task}</label>
                  <button className="destroy"></button>
                </div>
              </li>
           )}
          </ul>

        </section>
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(App)
