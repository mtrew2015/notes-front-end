import React, { Component } from 'react';
import SideBarNav from './components/sidebar'
import {Route} from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" render={(props) => (<SideBarNav {...props}/>)} />
        <Route path="/" render={(props) => (<Header {...props} />)} />
        <Route path="/" render={(props) => (<Home {...props} />)} />
     
      </div>
    );
  }
}

export default App;
