import React, { Component } from 'react'
import './viewNote.scss';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      details: '',
      id: ''
    }
  }

  componentDidMount() {
    const { match, notes } = this.props;
    console.log(notes);
    const note = notes.find(note => note.id === Number(match.params.id));
    this.setState({
      title: note.title,
      details: note.details,
      id: note.id
    })
  };
  deleteHandler = () => {
    const id = this.state.id;
    this.props.deleteNote(id)
  }

  updateHandler = (e) => {
    e.preventDefault()
    const id = this.state.id;
    this.props.history.push(`/update/${id}`)
  }

  render() {
    console.log(this.props.history)
    return (
      <div className="editNoteView">
        <div className="box">
          <h2>{this.state.title}</h2>
          <p>{this.state.details}</p>
          <div className="buttonContainer">
            <button onClick={this.updateHandler} className="edit">Edit</button>
            <button onClick={this.deleteHandler} className="delete">Delete</button>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ViewNote)