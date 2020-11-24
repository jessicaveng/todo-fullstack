import React from 'react'
import AddTodo from './AddTodo'
import Main from './Main'
import Footer from './Footer'
import MainActive from './MainActive'
import MainCompleted from './MainCompleted'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App (props) {

    return (
      <Router>
        <>
            <AddTodo />
          
            <Route exact path="/" component={Main}/>

            <Route exact path="/active" component={MainActive}/>
              
            <Route exact path="/completed" component={MainCompleted}/>

          <Footer />
        </>
      </Router>
    )
}

export default App
