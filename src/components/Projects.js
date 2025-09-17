import React from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCode 
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clothing Store Website",
      category: "Frontend",
      type: "Web Application",
      image: "/api/placeholder/600/400",
      github: "https://github.com/kaung721/projects/tree/main/clothing%20store",
      live: "https://project1-lzp.pages.dev/",
    },
    {
      id: 2,
      title: "Candy Store Website",
      category: "Frontend",
      type: "Web Application",
      image: "/api/placeholder/600/400",
      github: "https://github.com/kaung721/projects/tree/main/css%20project",
      live: "https://project2-aqp.pages.dev/",
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-content">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Applications/Websites that demonstrate my expertise
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <FaCode />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-technologies">
                    {project.technologies?.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-tag"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
