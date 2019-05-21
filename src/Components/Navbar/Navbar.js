import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <nav>
          <ul>

            <li>
              <Link to='/'> Home </Link>
            </li>

            <li>
              <Link to='/chart'> Chart </Link>
            </li>
            {!this.props.auth.isAuthenticated() ?
            <li>
              <a onClick={this.props.auth.login}> Login </a>
            </li>
            :
            <li>
              <Link to='/profile'> Profile </Link>
            </li>
            }

          </ul>
        </nav>
      </div>
    )
  }
}

// AAAAB3NzaC1yc2EAAAADAQABAAACAQDNktGKgZgm0Y7uha5Y8uXSohlDedGntKrhA8Ui4xGnSQuCTJqDGOWGpmJyPT5vbGUYTcHSmk7NwKHia07WUbWfWFCljame9lEO9/9uTrfWdaix5SKfWbk7uWEYhmqjhFsvo2dGn3dUYo23csN6gCqO3NBMGPbZICeXnNWEz9/aMgYRvpi53JuXmP+BuVRRN0GPGqM1mEZGxLyb6KpPryKYcU8SWEnoD75r/knK8f5mscqebQ46zq9IXwq1jzZw2eol9c0YwcVOwHEQo7/oICrJp5cUog/aIB6n9h2q6MRtydvTlsW2LgYGFNStTKU9VemExMAxr8xOGHKcvSb3yvxR9ZRow2BfLbrhNCp875kFxts3xpM6IY2ViU6xM6W4+Wwm+PwzzAiQn1gA1JQ05ZaMOM3a4cW0IPhJXFfVdIOzxeyWG/TCFfZFMhai6sJFbwZfZPGBF/PW4S8eIRz4uh6Ycg0EBv+/Mpoc86Rin83xKJ9q+ppuA6/F+0Srdfwg6HJ+o4FGzhuDD1TVyiW/ga1OqTIHRrrLrpr14ZY5ZNZfV1vFtwxXYvqRSP/B2ICjVwnLiKPzdmw4F8jepiNLlOym4IlN+NhtsT9uwVaCPvwasHKSxVovPHMlnSvXzNGBtdKn6eMf2KRsvrXZBvOIwar6ojlK8etkvdwi32MDIdH4Ow==