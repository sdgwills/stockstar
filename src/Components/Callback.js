import React, { Component } from 'react';
import Auth from '../Auth';
import loading from '../Components/Home/News/output.gif';

export default class Callback extends Component {

  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    return(
      <div>
        {loading}
      </div>
    )
  }
}