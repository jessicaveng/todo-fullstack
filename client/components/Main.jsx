import React, { useState, useEffect } from 'react'
import { fetchTasks } from '../actions'
import { connect } from 'react-redux'


function Main(props) {

    // const [tasks, setTasks] = useState()

    useEffect(() => {
        props.dispatch(fetchTasks())
    }, [])

    return (
        
        <>
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
             {props.tasks.map((task, key) => {
               return (
                   <li className={task.done ? "completed" : "view"} key={key}>
                    <div className="view">
                       <input className="toggle" type="checkbox" />
                        <label>{task.task}</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" />
                </li> 
               )  
                
             })}
            </ul>
        </>
    )
}

function ms2p(globalState){
    return {
        tasks: globalState.tasks
    }
}

export default connect(ms2p)(Main)


/* <li>
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>Buy a unicorn</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web" />
            </li> */
            


// <!-- These are here just to show the structure of the list items -->
// <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->