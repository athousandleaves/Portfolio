import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const skillsList = [
      {
        title: "JavaScript (ES6)",
        link: "http://es6-features.org"
      },
      {
        title: "React",
        link: "https://reactjs.org/"
      },
      {
        title: "Node.js",
        link: "https://nodejs.org"
      },
      {
        title: "HTML5",
        link: "https://html.spec.whatwg.org"
      },
      {
        title: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        title: "Sass",
        link: "http://sass-lang.com/"
      },
      {
        title: "TypeScript",
        link: "http://typescriptlang.org"
      },
      {
        title: "Webpack",
        link: "https://webpack.js.org/"
      },
      {
        title: "Express",
        link: "https://expressjs.com/"
      },
      {
        title: "jQuery",
        link: "https://jquery.com/"
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/"
      },
      {
        title: "SQL",
        link: "https://www.mysql.com/"
      }
    ];

    const skills = skillsList.map((skill, index) =>
    <div className="skill" key={index}>
      <a href={skill.link} className="skillLink">
        <p>{skill.title}</p>
      </a>
    </div>
    )

    return (
      <div className="skills">
        <h1>Skills</h1>
        <hr />
        <div className="skillList">{skills}</div>
      </div>
    ) 
  }
}