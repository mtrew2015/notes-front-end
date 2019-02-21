import React, { Component } from 'react'
import './register.scss';
import axios from 'axios';
import { InputText } from 'primereact/inputtext'
import {Growl} from 'primereact/growl';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      password: '',
      password2: '',
      email: '',
      role: 'user',
      response: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  disabled = () => {
    if (this.state.password.length <5 || this.state.password !== this.state.password2) {
    return true;
    }
  }
  showError() {
    this.growl.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    }
    axios
      .post('http://localhost:5000/api/users/signup', user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username)
        this.props.login();
      }
      )
      .catch(err => console.log(err));
    this.props.history.push('/')
  }
  render() {
    console.log(this.state)
    return (
      <div className="registerContainer">
        <h1>Register</h1>
        <form className="register" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="username" placeholder="Username" required />
          <input onChange={this.handleChange} type="email" name="email" placeholder="Email" required />
          <input onChange={this.handleChange} type="password" name="password" placeholder="Password" required />
          <input onChange={this.handleChange} type="password" name="password2" placeholder="Confirm Password" required />
          <h3>Disclaimer: This app is for testing purposes only, Please don't use real passwords or information.</h3>
          <button disabled={this.disabled()} type="submit">Register</button>
          <Growl ref={(el) => this.growl = el}></Growl>
        </form>

      </div>
    )
  }
}

export default Register;