import React, { Component } from 'react';
import Skills from './components/skills';
import Projects from './components/projects';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;
