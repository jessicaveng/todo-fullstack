import React from 'react'
import { connect } from 'react-redux'
import { updateTodo} from '../actions'


class  Update extends React.Component {
  state = {
    todo: '',
  }
  
  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
    console.log(this.state.todo)

 }

  handleSubmit = (event) => {
    let newEvent = this.props.todo
    newEvent.todo = this.state.todo
    this.props.dispatch(updateTodo(newEvent))
    .then(this.props.enter())
  }

  handleKeyDown = function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit()
    }
  };

 render(){
    return (
      <>
      <form  onKeyDown={e => this.handleKeyDown(e)}>
        <input className="new-todo" placeholder={this.props.text} onChange={this.handleChange} value={this.state.todo} autoFocus={true} />
      </form>
      </>
    )
  }

}



function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(Update)
