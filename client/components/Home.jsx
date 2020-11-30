import React from 'react'
import { connect } from 'react-redux'


import { completeTask, destroyCompletedTasks, destroyTask, fetchActiveTasks, fetchTasks } from '../actions/index'
import Task from './Task'

class Home extends React.Component {

  state={
    editBoxVisible: false

  }

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }


  handleChange = (task) => {
    this.props.dispatch(completeTask(task))
  }

  handleDestroy = (task) => {
    this.props.dispatch(destroyTask(task))
  }

  clearCompletedHandler() {
    this.props.dispatch(destroyCompletedTasks())

  }


  makeEditBoxVisible = ()=>{
    this.setState({
      editBoxVisible: true
    })
  }


  render() {
    return (
      <>
        <header className="header">
          <h1>todos</h1>

        </header>
        <section className="main">
        <ul className="todo-list">
            {this.props.tasks.map(task =>
                  <Task task={task}/> 
            )}
        </ul>
        </section>


      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    activeTasks: globalState.activeTasks
  }
}

export default connect(mapStateToProps)(Home)
