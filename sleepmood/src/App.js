import React from 'react';
import './App.css';
import {  Route, NavLink } from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import CreateSleepEntry from './components/CreateSleepEntry';
import NavBar from './components/Navbar';
import SleepHistory from './components/SleepHistory';
import Help from './components/Help';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path="/CreateSleepEntry" component={CreateSleepEntry} />
      <Route path='/SleepHistory' component={SleepHistory} />
      <Route  path='/Help' component={Help} />
      <Route path='Settings.js' component={Settings} />
    </div>
  );
}

export default App;

//yes