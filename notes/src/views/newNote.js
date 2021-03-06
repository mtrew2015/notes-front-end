import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './newNote.scss'

class NewNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      title: '',
      username:'mtrew'
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log('button pushed')
    this.props.createNote({ title: this.state.title, details: this.state.text, username: this.props.username });
    this.props.history.push('/')
  }
  render() {
    {
      if (localStorage.getItem('username') !== null) {
        return (
          <div className="create">
            <h1>Create New Note:</h1>
            <form onSubmit={this.submitHandler}>
              <input placeholder="Title" name="title" onChange={this.changeHandler} value={this.state.title}></input>
              <textarea placeholder="Your Note..." name="text" onChange={this.changeHandler} value={this.state.text} className="textArea"></textarea>
              <button type="submit" color="info">Submit</button>
            </form>
          </div>
        )
      } else {
        return (<h1 className="needToLogin">You Must Be Logged In To Do That!</h1>)
      }
    }
  }
}

export default (NewNote);