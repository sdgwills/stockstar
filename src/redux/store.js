import { createStore } from 'redux';

let initialState = {
  ticker: 'GOOGL'
}

const CHANGE_TICKER = 'CHANGE_TICKER';

export function changeTicker(ticker) {
  return {
    type: CHANGE_TICKER,
    payload: ticker
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_TICKER:
      return {...state, ticker: action.payload}
      
    default:
      return state
  }
}

export default createStore(reducer);