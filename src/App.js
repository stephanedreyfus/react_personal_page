import React, { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
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
  constructor(props) {
    super(props);

    this.state = {
      isOpen : false
    };
  
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="app">
      
        <header className="app-header">
          <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml=auto" navbar>
              <NavItem>
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="about" className="nav-link">About Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
          <h1 className="app-welcome"> Welcome to Stéphane's Personal Page</h1>
          <p className="app-blurb">Dedicating myself to the world: from retreat into development.</p>
          <img className="personal-photo" src="" alt="personal_photo" />
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
