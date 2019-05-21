import React, { Component } from 'react'
import {withRouter} from 'react-router';
import axios from 'axios';



class Profile extends Component {

  render() {

    const logout = () => {
      this.props.auth.logout();
    };


    console.log(localStorage.getItem('profile'));

    return (
      <div>
        <h1>Whom the heck are you?</h1>
        
        <div>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);