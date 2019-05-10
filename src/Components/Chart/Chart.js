import React, { Component } from 'react'
import './Chart.css';
import { Chart } from 'react-google-charts';

export default class theChart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
        
  }

  render() {

    return (
      <div className='body'>
        <div className='chart'>
        <Chart
          width={'70vw'}
          height={'70vh'}
          chartType="CandlestickChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['day', 'a', 'b', 'c', 'd'],
            ['Mon', 20, 28, 38, 45],
            ['Tue', 31, 38, 55, 66],
            ['Wed', 50, 55, 77, 80],
            ['Thu', 77, 77, 66, 50],
            ['Fri', 68, 66, 22, 15],
          ]}
          options={{
            legend: 'none',
            candlestick: {
              fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
              risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        </div>
      </div>
    )
  }
}
