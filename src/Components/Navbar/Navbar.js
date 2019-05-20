import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './my_logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <nav>
          <ul>
            {/* <div className='company-logo'>
            </div> */}

            <li>
              <Link to='/'> Home </Link>
            </li>

            <li>
              <Link to='/chart'> Chart </Link>
            </li>
{/* 
            <li>
              <Link to='/users'> Users </Link>
            </li> */}

            <li>
              <a onClick={this.props.auth.login}> Login </a>
            </li>
            
          </ul>
        </nav>
      </div>
    )
  }
}