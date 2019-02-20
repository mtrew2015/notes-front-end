import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import ViewNote from './views/viewNote';
import './App.scss';
import axios from 'axios';
import { Growl } from 'primereact/growl';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      userName: 'mtrew',
      isLoggedIn: false,
    }
  }
  componentDidMount() {
    if (this.state.userName) {
      const username = this.state.userName;
      axios
        .get(`http://localhost:5000/api/posts/${username}`)
        .then(response => this.setState({notes: response.data}))
        .catch(err => console.log(err));
    }
  }
  showError = (message) => {
    this.growl.show({ severity: 'warn', summary: 'Error', detail: 'please Log In' })
  }

  render() {
    return (
      <div className="container">
        <Route path="/" render={(props) => (<Header {...props} />)} />
        <Route exact path="/home" render={(props) => (<Home {...props} state={this.state} />)} />
        <Route path="/view/:id" render={(props) => <ViewNote notes={this.state.notes} {...props} />} />
        <Growl ref={(el) => this.growl = el} />
      </div>
    );
  }
}

export default App;


