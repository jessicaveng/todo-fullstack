import React from 'react'

class AddTodo extends React.Component {

  state = {
    newTodo: ""
  }

  changeHandler = (e) => {
    this.setState({
      newTodo: e.target.value
    })
    console.log(this.state.newTodo);
  }

  submitHandler = (e) => {
    e.preventDefault()

  }

  render () {
    return (
      <>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input onChange={this.changeHandler} className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
        </form>
      </>
    )
  }
}

function mapStateToProps () {
  return true
}

export default AddTodo
