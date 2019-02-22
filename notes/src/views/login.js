import React, { Component } from 'react'
import './login.scss';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username:'',
      password:''
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    console.log(user);
    axios
      .post('https://agile-taiga-82193.herokuapp.com/api/users/login', user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username)
        this.props.login();
        this.props.history.push('/');
        
      })
    .catch(err => console.log(err));
    
      
  }
  render() {
    console.log(this.state);
    console.log(this.props)
    return (
      <div className="loginContainer">
        <h1>Please Login</h1>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="username" placeholder="Username"  />
          <input onChange={this.handleChange} type="password" name="password" placeholder="Password"  />
         <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default Login