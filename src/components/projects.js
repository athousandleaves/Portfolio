import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    const projectList = [
      {
        name: "Qtorial",
        description: "A coding tutorial library that utilizes Mongoose and the YouTube API. Built with React.",
        link: "http://qtorial.surge.sh/",
        github: "https://github.com/athousandleaves/react-qtorial",
        thumbnail: "https://i.imgur.com/72pbRBp.png"
      },
      {
        name: "Paletteer",
        description: "An image parsing app that generates a palette of colors from a user-uploaded image. Built with the color-thief package.",
        link: "http://paletteer.surge.sh/",
        github: "https://github.com/athousandleaves/Paletteer",
        thumbnail: "https://i.imgur.com/GWmsBlp.png"
      },
      // {
      //   name: "Pixelizer",
      //   description: "A pixel art generator utilizing CSS Grid",
      //   link: "http://pixelizer.surge.sh/",
      //   github: "https://github.com/athousandleaves/Pixelizer", 
      //   thumbnail: "https://i.imgur.com/c4y0KAn.png"
      // },
      {
        name: "Listener",
        description: "A music search app that utilizes the Last.fm API to find and display artists' top songs. Each search generates YouTube links for each song and aggregates the links into a playlist.",
        link: "http://listener.surge.sh/",
        github: "https://github.com/athousandleaves/Listener",
        thumbnail: "https://i.imgur.com/tmOmYUA.png"
      },

      // {
      //   name: "Itemizer",
      //   description: "A list-making app that utilizes the Web Speech API for asynchronous speech recognition",
      //   link: "http://itemizer.surge.sh/",
      //   github: "https://github.com/athousandleaves/Itemizer",
      //   thumbnail: "https://i.imgur.com/qThfMJU.png"
      // }
    ];
    
    const projects = projectList.map((project, index) =>
      <div className="projectItem" key={index}>
        <div className="projectChunk">
        <div className="projectLink">
        <a href={project.link} className="projectName"><h2>{project.name}</h2></a>          
        </div>
        <a href={project.github} className="githubLink">{project.github}</a>
        <p className="projectDescription">{project.description}</p>
        </div>
        <div className="projectThumb">
          <img src={project.thumbnail} alt={project.name} className="projectPic"/>
        </div>
      </div>
    );

    return (
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <hr />
        <div className="projectList">{projects}</div>
      </div>
    ) 
  }
}