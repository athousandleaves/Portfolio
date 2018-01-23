import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    const projectList = [
      {
        name: "Qtorial",
        description: "A coding tutorial library that utilizes Mongoose and the YouTube API",
        link: "https://limitless-springs-46654.herokuapp.com/",
        github: "https://github.com/athousandleaves/Qtorial",
        thumbnail: "img src"
      },
      {
        name: "Pixelizer",
        description: "A pixel art generator utilizing CSS Grid",
        link: "http://pixelizer.surge.sh/",
        github: "https://github.com/athousandleaves/Pixelizer", 
        thumbnail: "img src"
      },
      {
        name: "Listener",
        description: "A search app that utilizes the Last.fm API to find and display artists' top songs",
        link: "http://listener.surge.sh/",
        github: "https://github.com/athousandleaves/Listener",
        thumbnail: "img src"
      },
      {
        name: "Itemizer",
        description: "A list-making app that utilizes the Web Speech API for asynchronous speech recognition",
        link: "http://itemizer.surge.sh/",
        github: "https://github.com/athousandleaves/Itemizer",
        thumbnail: "img src"
      }
    ];
    
    const projects = projectList.map((project) =>
      <div>
        <a href={project.link} className="projectName"><h2>{project.name}</h2></a>
        <a href={project.github}>{project.github}</a>
        <p>{project.description}</p>
      </div>
    );
    return (
      <div className="projects">
        <h1>Projects</h1>
        {projects}
      </div>
    ) 
  }
}