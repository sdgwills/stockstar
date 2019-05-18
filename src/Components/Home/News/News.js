import React, { Component } from 'react';
import axios from 'axios';
import './News.css';
import loading_gif from './output.gif';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeTicker } from '../../../redux/store';

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: {}
    }
  }

  async componentDidMount() {
    await axios.get(`https://stocknewsapi.com/api/v1?tickers=${this.props.ticker}&items=30&fallback=true&token=obdl1wjpt90vypk7x6uwpexcbcayi2cep7nzox7r`).then( results => {
      this.setState({
        news: results.data
      })
      console.log(this.state.news);
    })
  }
  
  handleKeyPress = async (event) => {
    if(event.key === "Enter") {
      this.setState({
        candles: [],
        date: []
      })

      await this.props.changeTicker(event.target.value);

      await axios.get(`https://stocknewsapi.com/api/v1?tickers=${this.props.ticker}&items=30&fallback=true&token=obdl1wjpt90vypk7x6uwpexcbcayi2cep7nzox7r`).then( results => {
        this.setState({
          news: results.data
        })
      })
    }
  }

  handleChange = (e) => {
    let { value } = e.target
    this.props.changeTicker(value);
  }

  handleFocus = (event) => event.target.select();

  render() {
    return (
      <div className='News'>
        <div className='news-items'>
          <div className='card-box'>
            {this.state.news.data ?
              <div className="card">
                  <a href={this.state.news.data[0].news_url} target="_blank"  >
                    <img className='card-img' src={this.state.news.data[0].image_url} />
                  </a>
                <div className='card-info'>
                  <a className='card-title' target="_blank"  href={this.state.news.data[0].news_url} > {this.state.news.data[0].title} </a> <br/>
                  <span className='card-text'> {this.state.news.data[0].text} </span>
                </div>
              </div>
              :
              <div className='loading-container'>
                <img className='loading-gif' src={loading_gif} />
              </div>
            }
          </div>
        </div>
        <input class='ticker-input' placeholder='Symbol or Ticker' name='ticker-input' onKeyPress={this.handleKeyPress} value={this.props.ticker} onChange={this.handleChange} onFocus={this.handleFocus} onClick={this.handleFocus}/>
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

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(News));