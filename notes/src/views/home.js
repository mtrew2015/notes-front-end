import React, { Component } from 'react';
import Notes from './notes';
import Login from './login';
import {Link} from 'react-router-dom'
import './home.scss';

class Home extends Component {
  render() {
    const { state } = this.props;
    if (localStorage.getItem('token') !== null) {
      return (
        <div className='homeContainer'>
          {this.props.state.notes.length > 0 ?<h1>Notes</h1> : <Link className="link" to="create">Create Your First Note</Link>}
          <Notes state={state} />
        </div>
      )
    }
    else {
      return (
        <div className="loginOrRegister">
          <Link className="link" to='/login'>Login</Link>
          <h3>or</h3>
          <Link className="link" to='/register'>Register</Link>
        </div>
      )
    }
  }
}

export default Home