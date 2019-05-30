import React, { Component } from 'react';
import axios from 'axios';
import './News.css';
import loading_gif from './output.gif';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeTicker } from '../../../redux/store';
import Card from './Card';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import WatchlistTable from './Table';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  

  async componentDidMount() {
    await axios.get(`https://stocknewsapi.com/api/v1?tickers=${this.props.ticker}&items=18&fallback=true&token=obdl1wjpt90vypk7x6uwpexcbcayi2cep7nzox7r`).then( results => {
      this.setState({
        news: results.data
      })
    })
  }
  
  handleKeyPress = async (event) => {
    if(event.key === "Enter") {
      this.setState({
        news: []
      })

      await this.props.changeTicker(event.target.value);

      await axios.get(`https://stocknewsapi.com/api/v1?tickers=${this.props.ticker}&items=18&fallback=true&token=obdl1wjpt90vypk7x6uwpexcbcayi2cep7nzox7r`).then( results => {
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

          <div class='all-container'>
            <div className='card-box'>
            <h1>{this.props.ticker} News</h1>
              {this.state.news.data ?
                <div className="card">
                  
                  {this.state.news.data.map(news_card => {
                    return <Card
                      key={news_card.date} 
                      news_card={news_card}
                    />
                  })}
                </div>
                :
                <div className='loading-container'>
                  <img className='loading-gif' src={loading_gif} />
                </div>
              }
              
            </div>
            <div class='watch-list'>
                <div className='ticker-search'>
                  <div className='textandbutton'><TextField class='ticker-input' name='ticker-input' onKeyPress={this.handleKeyPress} value={this.props.ticker} onChange={this.handleChange} onFocus={this.handleFocus} onClick={this.handleFocus}/> <button className='add-button'> Add To Watchlist </button> </div>
                  <WatchlistTable />
                </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(News));