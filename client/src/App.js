import React from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
<<<<<<< HEAD:client/src/App.js
import Home from '../src/pages/Home.js';
import Design from '../src/components/Design/index'
=======
import Home from '../src/Pages/Home';
import Plants from '../src/Pages/Plants';
import Cultivate from './Pages/Cultivate';
import Signup from '../src/Pages/Signup';

>>>>>>> 3fba89826ee78cda93095cc4d98b8c8f272a689f:src/App.js

function App() {
  return (
    <>
<<<<<<< HEAD:client/src/App.js
      <Router>
        <Navbar />
        <Design />
        <Switch>
          <Route path='/' exact component={Home} />
=======
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/plants' component={Plants} />
        <Route path='/cultivate' component={Cultivate} />
        <Route path='/signup' component={Signup} />
>>>>>>> 3fba89826ee78cda93095cc4d98b8c8f272a689f:src/App.js
        </Switch>
      </Router>
    </>
  );
}

export default App;

