import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chart from './Components/Chart/Chart';
import Users from './Components/Users';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Auth from './Auth';
import { Provider } from 'react-redux';
import store from './redux/store';
import Callback from './Components/Callback/Callback';
import './App.css';

const auth = new Auth();

function App() {
  return (

    <div className='App'>
      <Provider store={store}>
        <Router>
          <Navbar auth={auth}/>
          <Switch>
            <Route exact path='/' render={() => {
              return <Home auth={auth}/>
            }} />
            <Route path='/chart' render={() => {
              return <Chart auth={auth}/>
            }} />
            <Route path='/users' render={() => {
              return <Users auth={auth}/>
            }} />
            <Route path ='/login' render={() => {
              return <Login auth={auth}/>
            }} />
            <Route path='/register' render={() => {
              return <Register auth={auth}/>
            }} />
            <Route path='/profile' render={() => {
              return <Profile auth={auth}/>
            }} />
            <Route path ='/callback' render={() => {
              return <Callback auth={auth}/>
            }} />
          </Switch> 
        </Router>
      </Provider>
    </div>
  );
}

export default App;
