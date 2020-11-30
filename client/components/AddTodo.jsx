import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index'


export class AddToDo extends React.Component {
    
    state = {
        input: ''
    }
    
    handleChange( event ){
        this.setState({
            input: event.target.value
        })
    }
    
    handleSubmit( event ){
        event.preventDefault()
        const newTask = { task: this.state.input, completed: false }
        this.props.dispatch(addTask( newTask ))
        this.setState({ input: '' })
    }

    render(){
        return (
            <>
                <form onSubmit={ event => this.handleSubmit( event )}>
                    <input 
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus={ true } 
                    onChange={( event ) => this.handleChange( event )}
                    value={ this.state.input }/>              
                </form>
            </>
        )
    }
} 

function mapStateToProps (globalState){
    return {
        setTasks: globalState.setTasks
    }
  }

export default connect(mapStateToProps)(AddToDo)
