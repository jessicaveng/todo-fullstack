import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      {/* <!-- This should be `0 items left` by default --> */}
      <span className="todo-count"><strong>{props.tasks.length}</strong> item{(props.tasks.length !== 1) && 's'} left</span>
     
      {/* <!-- Remove this if you don't implement routing --> */}
      <ul className="filters">
        <li>
          <Link to='/' className="selected">
            All
          </Link>
        </li>
        <li>
        <Link to='/active'>
          active
        </Link>
        </li>
        <li>
        <Link to='/completed'>
          Completed
        </Link>
        </li>
      </ul>
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

function ms2p(globalState) {
  return {
      tasks: globalState.tasks
  }
}

export default connect(ms2p)(Footer)
