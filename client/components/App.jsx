import React from 'react'
import AddTodo from './AddTodo'
import Main from './Main'
import Footer from './Footer'

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
        <Footer />
      </>
    )
}

export default App
