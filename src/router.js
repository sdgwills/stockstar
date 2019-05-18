import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Chart from './Components/Chart/Chart';
import Users from './Components/Users';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/chart' component={Chart} />
    <Route path='/users' component={Users} />
    <Route path ='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/profile' component={Profile} />
  </Switch>
)