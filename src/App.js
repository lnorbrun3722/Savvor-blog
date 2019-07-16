import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/utility/About';
import Navbar from './components/utility/Navbar';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Profile from './components/users/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
    <Route exact path='/' components={Home} />
    <Route exact path="/About" components={About} />
    <Route exact path="/Profile" components={Profile} />
    <Route exact path="/Login" components={Login} />
    <Route exact path="/Register" components={Register} />
      </Switch>

    </Router>
  )
}
export default App;
