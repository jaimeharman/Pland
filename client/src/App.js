import React from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
import Home from './Pages/Home';
import Plants from './Pages/Plants';
import Cultivate from './Pages/Cultivate';
import Members from './Pages/Members';
import Signup from './Pages/Signup';


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

