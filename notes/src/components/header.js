import React from 'react'
import './header.scss';
import SidebarNav from './sidebar';
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="headerWrapper">
      <SidebarNav />
      <h1>Lambda Notes</h1>
      <h2>Lambda Notes Will Keep You Organized!</h2>
      <div className='welcome'>
      {localStorage.getItem('token') !==null ?<h3>Welcome {props.state.userName}</h3>: null}
      {localStorage.getItem('token') !== null ?  <Link to="/" className="logout" onClick={props.logout}>Logout</Link>:null}
      </div>
      </div>
  )
}
