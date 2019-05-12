import React, { Component } from 'react';
import InfoBox from './InfoBox';

class Home extends Component {
  render() {
    return (
      <main>
        <p>Hello and welcome to Stéphane Dreyfus' page!</p>
        <div className="info-links">
          <a href="https://github.com/stephanedreyfus">GitHub</a>
          <a href="www.linkedin.com/in/stephane-dreyfus">LinkedIn</a>
          <a href="../media/stephane_dreyfus_resume.pdf">Resume</a>
        </div>
        <InfoBox>

        </InfoBox>
      </main>
    )
  }
}

export default Home;
