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
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="about">About Me</NavLink>
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
