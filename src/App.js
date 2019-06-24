import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
    <Route exact path='/' component={Home} />
    <route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}
export default App;
