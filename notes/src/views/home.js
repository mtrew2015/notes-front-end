import React, { Component } from 'react';
import Notes from './notes';
import './home.scss';


export default class Home extends Component {
  render() {
    const {state} = this.props;
    if (this.props.state.userName) {
      return (
        <div className='homeContainer'>
          <h1>Notes</h1>
          <Notes state={state}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No Notes</h1>
        </div>
      )
    }
  }
}
