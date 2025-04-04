import React from "react";
import "../styles/Portfolio.css";
import project1 from "../images/6.png";
import project2 from "../images/fantasy skull.png";

const projects = [
  {
    image: project1,
    title: "Codigo",
    description: "Coding web-application",
    github: "https://github.com/your-repo",
    liveDemo: "https://your-live-demo.com"
  },
  {
    image: project2,
    title: "Fantasy Skull",
    description: "Artistic digital project",
    github: "https://github.com/your-repo2",
    liveDemo: "https://your-live-demo2.com"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="title">Latest <span>Project</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <div className="button-wrapper">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
              </div>
              <div className="button-wrapper">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
