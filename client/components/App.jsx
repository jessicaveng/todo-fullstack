import React from 'react'
import { fetchapis } from '../actions/listTask'
import AddTodo from './AddTodo'
import Main from './Main'
import { connect } from 'react-redux'
// import listtask from './listtaks'
class App extends React.Component {
  
  componentDidMount () {
    this.props.dispatch(fetchapis())
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <Main /> 

        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}


function mapStateToProps (globalState) {
  return {
    task: globalState.task
  }
}


export default connect(mapStateToProps)(App)


// export default App
