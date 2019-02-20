import React, { Component } from 'react'
import Note from '../components/note';
import './notes.scss';

 class Notes extends Component {
  render() {
    const {notes} = this.props.state
    return (
      <div className="noteSection">
      {notes.map(note => (<Note key={note.id}{...note}/>))}
      </div>
    )
  }
}

export default Notes