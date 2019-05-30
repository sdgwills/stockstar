import React, { Component } from 'react'

export default class EditExercise extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      ticker: props.ticker
    }
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = e => {
    let { ticker, id }= this.state
    this.props.updateTicker(ticker, id)
    this.props.toggleEdit()
  } 

  render() {
    return (
      <section>
        <input 
          type='text' 
          placeholder='Ticker' 
          name='ticker' 
          value={this.state.ticker} 
          onChange={this.handleChange} /> 

          <button className='button4' onClick={this.handleClick}> Update </button>

      </section>
    )
  }
  }