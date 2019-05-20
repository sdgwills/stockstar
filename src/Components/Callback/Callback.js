import React, { Component } from 'react';
import Auth from '../../Auth';
// import loading_gif from './output.gif';[]
import './Callback.css'

export default class Callback extends Component {

  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    return(
      <div className='Callback'>
        {/* <img className='loading-gif' src={loading_gif} alt='loading' /> */}
      </div>
    )
  }
}