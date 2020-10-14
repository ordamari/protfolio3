import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Footer } from './cmps/Footer';
import { Navbar } from './cmps/Navbar';
import { ProjectDetails } from './cmps/ProjectDetails';

import {Home} from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route component={ProjectDetails} path='/:id' />
        <Route component={Home} path='/' />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
