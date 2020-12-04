import React from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Cultivate from './pages/Cultivate';
import Members from './pages/Members';
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'  component={Home} />
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

