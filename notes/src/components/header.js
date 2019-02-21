import React from 'react'
import './header.scss';
import SidebarNav from './sidebar';

export default function Header(props) {
  return (
    <div className="headerWrapper">
      <SidebarNav />
      <h1>Lambda Notes</h1>
      <h2>Lambda Notes Will Keep You Organized!</h2>
      <h3>Welcome {props.state.userName}</h3>
    </div>
  )
}
