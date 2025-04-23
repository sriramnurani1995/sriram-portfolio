import React, { useState } from "react";
import "./Projects.css";
import Icon from "../common/Icon";
import projectsData from "../../data/projects";

type ProjectCategory = "all" | "professional" | "academic" | "ai-ml";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-underline"></div>

        <div className="project-tabs">
          <button
            className={`tab ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`tab ${
              activeCategory === "professional" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("professional")}
          >
            Professional
          </button>
          <button
            className={`tab ${activeCategory === "academic" ? "active" : ""}`}
            onClick={() => setActiveCategory("academic")}
          >
            Academic
          </button>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <Icon name="fa-brands fa-github" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <Icon name="fa-solid fa-arrow-up-right-from-square" />{" "}
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeCategory !== "all" && filteredProjects.length > 0 && (
          <div className="view-all-container">
            <button
              className="view-all-button"
              onClick={() => setActiveCategory("all")}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
