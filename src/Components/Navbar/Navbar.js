import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <nav>
          
          <ul>
            <Link className='logo a' to='/'> STOCKSTAR </Link>
            <li>
              <Link className='a' to='/'> News </Link>
            </li>

            <li>
              <Link className='a' to='/chart'> Chart </Link>
            </li>
            {!this.props.auth.isAuthenticated() ?
            <li>
              <a className='a' onClick={this.props.auth.login}> Login   |   Register </a>
            </li>
            :
            <li>
              <Link className='a' to='/profile'> Profile </Link>
            </li>
            }

          </ul>
        </nav>
      </div>
    )
  }
}