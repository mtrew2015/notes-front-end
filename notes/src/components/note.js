import React from 'react'
import { Link } from 'react-router-dom';
import './note.scss';

function Note(props) {
  return (
    <div className="noteBox">
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </div>
    


  )
}

export default Note;
