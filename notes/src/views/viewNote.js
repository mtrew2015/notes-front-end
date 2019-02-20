import React, { Component } from 'react'
import './viewNote.scss';
import axios from 'axios';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      details:'',
      id: ''
    }
  }
  
  componentDidMount(){
    const {match, notes} = this.props;
    console.log(notes);
    const note = notes.find(note => note.id === Number(match.params.id));
    this.setState({
      title: note.title,
      details: note.details,
      id: note.id
    })
  };

  render() {
    return (
        <div className="editNoteView">
        <box className ="box">
          <h2>{this.state.title}</h2>
          <p>{this.state.details}</p>
        </box>

        </div>
      )
    }
  }

export default ViewNote