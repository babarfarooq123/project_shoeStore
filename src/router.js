import React from 'react';
import './App.css';
import Home from './component/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './component/navbar';
import About from './component/about';
import Product from './component/product';
import Card from './component/card';


function Routerconfig() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/product/:id" component={Product} />
              <Route path="/card" component={Card} />
              <Route path="/about" component={About} />
          </Switch>
      </Router>
    </div>
  );
}

export default Routerconfig;