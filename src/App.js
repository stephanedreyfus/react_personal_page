import React, { Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from 'reactstrap';

import Home from './Home';
import AboutMe from './AboutMe';

/** Overall site application:
 * 
 * - shows header, nav links, and contains routes to:
 * - homepage
 * - about_me
 */

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <Navbar className="b-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
              <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar>
        </header>

        <Switch>
          <Route exact path="/about_me"
                render={(props) => <AboutMe {...props} />} />
          <Route exact path="/"
                render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
