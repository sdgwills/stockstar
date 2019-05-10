import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <span> Login Here </span> <br />
        Need an account? <br />
        <Link to='/register'> <strong> {`-> Register Here <-`} </strong> </Link>
      </div>
    )
  }
}