import React, { Component } from 'react';
import Notes from './notes';
import Login from './login';
import './home.scss';

class Home extends Component {
  render() {
    const { state } = this.props;
    if (this.props.state.userName) {
      return (
        <div className='homeContainer'>
          <h1>Notes</h1>
          <Notes state={state} />
        </div>
      )
    }
    else {
      return (
        <div>
          <Login/>
        </div>
      )
    }
  }
}

export default Home