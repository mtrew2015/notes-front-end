import React, { Component } from 'react';
import {Sidebar} from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {withRouter, Link} from 'react-router-dom';
import './sidebar.scss';


class SideBarNav extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <div>
      <Sidebar visible={this.state.visible} className="ui-sidebar-md" position="left" onHide={(e) => this.setState({ visible: false })}>
      {}
      <ul className="navLinks">
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/create">Create Note</Link>
      <Link className="link" to="/">View Notes</Link>
      <Link className="link" to="/register">Register</Link>
      </ul>
      </Sidebar>
        <Button icon="pi pi-bars" onClick={(e) => this.setState({ visible: true })} />
      </div>


    )
  }
}

export default withRouter (SideBarNav)