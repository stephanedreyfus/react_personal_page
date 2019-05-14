import React, { Component } from 'react';
import InfoBox from './InfoBox';
import Project from './Project';

/** Main page and props:
 * This page is meant to hold the majority of the data
 * on the site.
 * - defaultProp data is passed to InfoBox children as props.
 * - defaultProp data is passed to Project children as props.
 */

class Home extends Component {
  static defaultProps = {
    about: {
      title: "Background",
      text: "Web developer experienced with ReactJS/Redux, Node.js, Express, JavaScript and Python. I'm always looking for opportunities to collaborate with other programmers. Feel free to browse around my portfolio and get in contact with me.",
    },
    skills: {
      title: "Skills",
      text: {
        languages: {
          title: "LANGUAGES",
          lang1: "JavaScript",
          lang2: "Python",
          lang3: "CSS",
          lang4: "HTML",
          lang5: "SQL",
        },
        frameworks: {
          title: "FRAMEWORKS",
          lang1: "ReactJS",
          lang2: "Node.js",
          lang3: "Express",
          lang4: "Flask",
          lang5: "Django",
        },
        Libraries: {
          title: "LIBRARIES",
          lang1: "JQuery",
          lang2: "React/Redux",
        },
        Databases: {
          title: "DATABASES",
          lang1: "PostgreSQL",
        },
      }
    },
    warbler: {
      screenshot: "warbler image",
      info_link: "Link to github or deployed site",
    },
    memory: {
      screenshot: "memory game image",
      info_link: "Link to github or deployed site",
    },
  }
  render() {
    return (
      <main>
        <p>Hello and welcome to Stéphane Dreyfus' page!</p>
        <div className="info-links">
          <a href="https://github.com/stephanedreyfus">GitHub</a>
          <a href="www.linkedin.com/in/stephane-dreyfus">LinkedIn</a>
          <a href="../media/stephane_dreyfus_resume.pdf">Resume</a>
        </div>
        <InfoBox about={this.props.about}></InfoBox>
        <InfoBox skills={this.props.skills}></InfoBox>
        <div className="project-start">Recent Work and Projects</div>
        <Project warbler={this.props.warbler}></Project>
        <Project memory={this.props.memory}></Project>
      </main>
    )
  }
}

export default Home;
