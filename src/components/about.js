import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h1 className="name">Nicholas Keeling</h1>
        <div className="nav">
          <a href="https://github.com/athousandleaves">GitHub</a>
          <a href="https://www.linkedin.com/in/nicholas-keeling-169269b8/">LinkedIn</a>
        </div>
        <h2 className="subtitle">Full-Stack JavaScript / React Developer</h2>
        <p className="elevator">
          Hi! I am an up-and-coming JavaScript developer, excited about the modern landscape of the web.
          My time is spent building complex full-stack applications, utilizing cutting edge technologies to optimize performance.

        </p>
        <a href="mailto:nicholasrandolphkeeling@gmail.com" className="contact">Contact Me</a>
      </div>
    );
  }
}
