import React, { Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

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
      
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="about" className="nav-link">About Me</NavLink>
              </li>
            </ul>
          </div>
          </nav>
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
