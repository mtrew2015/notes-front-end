import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import ViewNote from './views/viewNote';
import UpdateNote from './views/updateNote';
import NewNote from './views/newNote';
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
        .get(`http://localhost:5000/api/posts/notes/${username}`)
        .then(response => this.setState({ notes: response.data }))
        .catch(err => console.log(err));
    }
  }
  showError = (message) => {
    this.growl.show({ severity: 'warn', summary: 'Error', detail: 'please Log In' })
  }
  deleteNote = (id) => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`)
      .then(() => (this.getNotes()))
      .then(() => (this.props.history.push('/')))
      .catch(err => console.log(err));
      
  }
  updateNote = (id, note) => {
    axios
      .put(`http://localhost:5000/api/posts/update/${id}`,note)
      .then(() => this.getNotes())
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err))
  }

getNotes = () => {
    const username = this.state.userName;
    axios
      .get(`http://localhost:5000/api/posts/notes/${username}`)
      .then(response => this.setState({notes: response.data}))
      .catch(err => console.log(err));
  }
  createNote = (note) => {
    axios
      .post("http://localhost:5000/api/posts/newpost", note)
      .then(() => (this.getNotes()))
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Route path="/" render={(props) => (<Header {...props} />)} />
        <Route exact path="/" render={(props) => (<Home {...props} state={this.state} />)} />
        <Route path="/view/:id" render={(props) => <ViewNote notes={this.state.notes} {...props} deleteNote={this.deleteNote} />} />
        <Route path="/update/:id" render={(props) => (<UpdateNote {...props} updateNote={this.updateNote} notes={this.state.notes}/>)} />
        <Route path="/create" render={(props) => (<NewNote userName={this.state.userName}createNote={this.createNote} {...props} />)} />
        <Growl ref={(el) => this.growl = el} />
      </div>
    );
  }
}

export default withRouter(App);


