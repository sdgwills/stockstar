import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <span> <Link to='/profile'> <strong> {`-> Login Here <-`} </strong> </Link> </span> <br />
        Need an account? <br />
        <span> <Link to='/register'> <strong> {`-> Register Here <-`} </strong> </Link> </span>
      </div>
    )
  }
}