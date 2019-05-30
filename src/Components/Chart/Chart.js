import React, { Component } from 'react'
import './Chart.css';
import OHLC from './OHLC/OHLC';
import axios from 'axios';



export default class theChart extends Component {
  constructor() {
    super()

    this.state = {
      watchlist: []
    }
  }

  async componentDidMount() {
    await axios.get('/api/watchlist/1').then(res => {
      this.setState({
        watchlist: res.data
      });
    }).catch(console.log)
  }

  render() {
    return (
      <OHLC watchlist={this.state.watchlist}/>
    )
  }
}
