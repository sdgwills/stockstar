import React, { Component } from 'react';
import Auth from '../../Auth';
// import loading_gif from './output.gif';[]
import './Callback.css'
import { withRouter } from 'react-router';

function Callback(props) {
  props.auth.handleAuthentication().then(() => {
    props.history.push('/');
  });

  return (
    <div>
      Loading user profile.
    </div>
  );
}

export default withRouter(Callback);