import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const skillsList = [
      {
        title: "JavaScript (ES6)",
        link: ""
      },
      {
        title: "React",
        link: ""
      },
      {
        title: "Node.js",
        link: ""
      },
      {
        title: "HTML5",
        link: ""
      },
      {
        title: "CSS3",
        link: ""
      },
      {
        title: "Sass",
        link: ""
      },
      {
        title: "TypeScript",
        link: ""
      },
      {
        title: "Webpack",
        link: ""
      },
      {
        title: "Express",
        link: ""
      },
      {
        title: "jQuery",
        link: ""
      },
      {
        title: "MongoDB",
        link: ""
      },
      {
        title: "SQL",
        link: ""
      }
    ];

    const skills = skillsList.map((skill) =>
    <div className="skill">
      <p>{skill.title}</p>
    </div>
    )

    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skillList">{skills}</div>
      </div>
    ) 
  }
}