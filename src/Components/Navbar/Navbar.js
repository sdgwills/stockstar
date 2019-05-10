import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <nav>
          <span> <h3> Please kill me  </h3> </span>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/chart'> Chart </Link>
            </li>
            <li>
              <Link to='/users'> Users </Link>
            </li>
            <li>
              <Link to='/login'> Login </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    )
  }
}