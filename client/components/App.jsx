import React from 'react'
import AddTodo from './AddTodo'
import Main from './Main'
import TodoItem from './TodoItem'

import Footer from './Footer'

class App extends React.Component {
  componentDidMount () {}

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <Main /> 
        {/* <Footer />  */}
      </>
    )
  }
}

export default App
