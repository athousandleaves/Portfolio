import React, { Component } from 'react';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nicholas Keeling</h1>
        <h2>Full Stack JavaScript / React Developer</h2>
        <p>Hi! I'm looking for a job. Can you help me?</p>
        <Projects />
        <Skills />
        <Experience />
      </div>
    );
  }
}

export default App;
