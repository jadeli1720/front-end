import React from 'react';
import './App.css';
import {  Route } from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import CreateSleepEntry from './components/CreateSleepEntry';
import NavBar from './components/Navbar';
import SleepHistory from './components/HistoryComponents/SleepHistory';
import Help from './components/Help';
import Settings from './components/Settings';
import LandingPage from './components/LandingPage';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute path="/CreateSleepEntry" component={CreateSleepEntry} />
      <PrivateRoute path='/SleepHistory' component={SleepHistory} />
      <PrivateRoute path='/Help' component={Help} />
      <PrivateRoute path='Settings.js' component={Settings} />
    </div>
  );
}

export default App;

//yes