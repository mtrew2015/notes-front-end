import React from 'react'
import {withRouter} from 'react-router-dom';
import './note.scss';

function Note(props) {
  {console.log('note props', props)}
  return (
    <div className="note">
    <h3>{props.title}</h3>
    <p>{props.details}</p>
    </div>
  )
}

export default Note;
