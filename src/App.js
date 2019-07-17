import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/users/Home';
import About from './components/utility/About';
import Navbar from './components/utility/Navbar';
import Footer from './components/utility/Footer';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Profile from './components/users/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
      </Switch>

    </Router>
  )
}
export default App;
