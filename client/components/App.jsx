import React from 'react'
import AddTodo from './AddTodo'
import Main from './Main'

function App (props) {

    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
          <Main />
        </section>
        <footer className="footer">

        </footer>
      </>
    )
}

export default App
