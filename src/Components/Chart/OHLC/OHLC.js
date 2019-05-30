import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import './OHLC.css'
import loading_gif from './output.gif';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeTicker } from '../../../redux/store';
import WatchlistTable from '../../../Components/Home/News/Table';
import TextField from '@material-ui/core/TextField';

class OHLC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candles: [],
      dates: []
    }
  }


  async componentDidMount() {
    await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&outputsize=compact&apikey=HCQQ1K27RGB0LYS2`).then(results => {
      this.setState({
        candles: Object.values(results.data)
      })

      this.setState({
        dates: Object.keys(this.state.candles[1]),
        candles: Object.values(this.state.candles[1])
      })

      let newChartCandles = this.state.candles;

      for(let i=0; i < this.state.candles.length; i++) {
        newChartCandles[i]["1. open"] = +newChartCandles[i]["1. open"]
        newChartCandles[i]["2. high"] = +newChartCandles[i]["2. high"]
        newChartCandles[i]["3. low"] = +newChartCandles[i]["3. low"]
        newChartCandles[i]["4. close"] = +newChartCandles[i]["4. close"]
      }
      let newChartDates = this.state.dates

      for(let i=this.state.candles.length -1; i >= 0; i--) {
        newChartCandles[i].date = newChartDates[i]
      }

      let candleArr = [];

      for(let i=this.state.candles.length - 1; i >= 0; i--) {
        let newArr= []
        newArr.push(newChartCandles[i].date);
        newArr.push(newChartCandles[i]["3. low"]);
        newArr.push(newChartCandles[i]["1. open"]);
        newArr.push(newChartCandles[i]["4. close"]);
        newArr.push(newChartCandles[i]["2. high"]);
        candleArr.push(newArr);
      }
      
      let splicedCandleArr = candleArr.splice(0, 105);
      splicedCandleArr.unshift(['date', 'low', 'open', 'close', 'high'])
      this.setState({
        candles: splicedCandleArr
      })
    })

  }

  handleKeyPress = async (event) => {
    if(event.key === "Enter") {
      this.setState({
        candles: [],
        date: []
      })

      await this.props.changeTicker(event.target.value);

      await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&outputsize=compact&apikey=HCQQ1K27RGB0LYS2`).then(results => {
      this.setState({
        candles: Object.values(results.data)
      })

      this.setState({
        dates: Object.keys(this.state.candles[1]),
        candles: Object.values(this.state.candles[1])
      })

      let newChartCandles = this.state.candles;

      for(let i=0; i < this.state.candles.length; i++) {
        newChartCandles[i]["1. open"] = +newChartCandles[i]["1. open"]
        newChartCandles[i]["2. high"] = +newChartCandles[i]["2. high"]
        newChartCandles[i]["3. low"] = +newChartCandles[i]["3. low"]
        newChartCandles[i]["4. close"] = +newChartCandles[i]["4. close"]
      }
      let newChartDates = this.state.dates

      for(let i=this.state.candles.length -1; i >= 0; i--) {
        newChartCandles[i].date = newChartDates[i]
      }

      let candleArr = [];

      for(let i=this.state.candles.length - 1; i >= 0; i--) {
        let newArr= []
        newArr.push(newChartCandles[i].date);
        newArr.push(newChartCandles[i]["3. low"]);
        newArr.push(newChartCandles[i]["1. open"]);
        newArr.push(newChartCandles[i]["4. close"]);
        newArr.push(newChartCandles[i]["2. high"]);
        candleArr.push(newArr);
      }
      
      let splicedCandleArr = candleArr.splice(0, 105);
      splicedCandleArr.unshift(['date', 'low', 'open', 'close', 'high'])
      this.setState({
        candles: splicedCandleArr
      })
    })

    }
  }

  handleChange = (e) => {
    let { value } = e.target
    this.props.changeTicker(value);
  }

  handleFocus = (event) => event.target.select();

  handleClick = () => {
    let ticker = this.props.ticker
    axios.post('/api/stock', {ticker}).then(res => {
      
    })
  }

  

  render() {

    return (
      <div className='body'>
        
        <div className='chart'>
        
            {this.state.candles[0] ?
              <div className='ohlc-chart-container'>
                <Chart
                  className='ohlc-chart'
                  width={'80vw'}
                  height={'80vh'}
                  chartType="CandlestickChart"
                  
                  loader={<img className='loading-gif' src={loading_gif} alt='loading' />}
                  data={this.state.candles}
                  options={{
                    backgroundColor: 'transparent',
                    legend: 'none',
                    colors: ["black"],
                    candlestick: {
                      fallingColor: { strokeWidth: 0, fill: '#a52714' },
                      risingColor: { strokeWidth: 0, fill: '#0f9d58' },
                    },
                  }}
                />
              </div> 
              :
              <div className='loading-container'>
                <img className='loading-gif' src={loading_gif} alt='loading' />
              </div>
            }
        </div>
        <div className='chart-and-table'>
        <h3> Active Chart: {this.props.ticker}</h3>
        <div className='textandbutton'><TextField class='ticker-input' name='ticker-input' onKeyPress={this.handleKeyPress} value={this.props.ticker} onChange={this.handleChange} onFocus={this.handleFocus} onClick={this.handleFocus}/>
        <button onClick={this.handleClick} className='add-button'> Add To Watchlist </button> </div>
          <WatchlistTable {...this.props}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) =>  {
  return reduxState;
}

const mapDispatchToProps = {
  changeTicker
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(OHLC));