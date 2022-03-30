import React from 'react'
import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <nav className='nav'>
          <ul>
            <li><a href="/">Features</a></li>
            <li><a href="/tem">Team</a></li>
            <li><a href="/singin">Sing In</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header