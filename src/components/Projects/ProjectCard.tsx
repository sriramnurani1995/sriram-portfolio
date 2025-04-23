import React from "react";
import "./Projects.css";
import Icon from "../common/Icon";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
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
              <Icon name="fa-brands fa-github" size={18} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              <Icon name="fa-solid fa-arrow-up-right-from-square" size={18} />{" "}
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
