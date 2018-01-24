import React, { Component } from 'react';
import Skills from './components/skills';
import Projects from './components/projects';
import Splash from './components/splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;
