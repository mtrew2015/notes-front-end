import React from 'react'
import { Link } from 'react-router-dom';
import './note.scss';

function Note(props) {
  return (
    <Link className="noteBox" to={`/view/${props.id}`}>
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </Link>
)
}

export default Note;
