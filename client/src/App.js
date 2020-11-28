import React from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
import Home from '../src/Pages/Home';
import Plants from '../src/Pages/Plants';
import Cultivate from '../src/Pages/Cultivate';
import Members from '../src/Pages/Members';
import Signup from '../src/Pages/Signup';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/plants' component={Plants} />
        <Route path='/cultivate' component={Cultivate} />
        <Route path='/members' component={Members} />
        <Route path='/sign-up' component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

