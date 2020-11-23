import React from 'react'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/index'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchTasks())
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps(globalState){
  return {
    tasks: globalState.tasks
  }
}
export default connect(mapStateToProps)(App)
