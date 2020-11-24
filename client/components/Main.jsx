import React from "react";
import { connect } from "react-redux";
import { fetchapis } from "../actions/listTask";
// import { Link, Route } from "react-router-dom";
// import Task from "../../server/db/task";
// import { listAllTaskAPI } from "../apis/Api";
// import task from "../../server/db/task";
// import task from "../../server/db/task";



class Main extends React.Component {


componentDidMount = ()=>{
  this.props.dispatch(fetchapis())
  .then((Task) => {
    
  })

}

  render (){
  return (
        
    <section class="main">
    {/* <input id="toggle-all" class="toggle-all" type="checkbox" /> */}

    {/* <label for="toggle-all">Mark all as complete</label> */}
    <ul class="todo-list">

        <div class="view">
            
            {this.props.task.map(task => {
              return <li>  <input class="toggle" type="checkbox" /> <label> {task.taskDetails}</label> 
            
              <input class="edit" value="" />
              <button class="destroy"></button></li>
            })} 
     
        </div>


        <div>




          
        </div>
        

      {/* <!-- These are here just to show the structure of the list items -->

      <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}

      {/* <li class="completed">
 
        <div class="view">
                 
          <input class="toggle" type="checkbox" checked />

          <label>Taste JavaScript</label>

          <button class="destroy"></button>

        </div>

        <input class="edit" value="Create a TodoMVC template" />

      </li>
      <li>

        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li> */}
    </ul>
  </section>
 
      )
    }
  }



function mapStateToProps(globalState) {
  return {
    task: globalState.listTask
  };
}




export default connect(mapStateToProps)(Main);