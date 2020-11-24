import React from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
import Home from '../src/pages/Home.js';
import Design from '../src/components/Design/index'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Design />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

