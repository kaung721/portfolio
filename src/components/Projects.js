import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCode, 
  FaLock, FaEye, FaBug, FaNetworkWired, FaDatabase,
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDocker,
  FaServer, FaTools, FaWrench, FaBootstrap, FaAws, FaTerminal
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Secure E-Commerce Platform",
      category: "fullstack",
      type: "Web Application",
      description: "A comprehensive e-commerce platform built with security-first principles, featuring encrypted payments, secure authentication, and vulnerability protection.",
      longDescription: "This project demonstrates my expertise in building secure web applications. It includes features like JWT authentication, encrypted data storage, SQL injection prevention, XSS protection, and secure payment processing. The platform handles user management, product catalog, shopping cart, and order processing with enterprise-level security measures.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MongoDB", icon: <FaDatabase />, color: "#47a248" },
        { name: "JWT", icon: <FaLock />, color: "#000000" },
        { name: "Express", icon: <FaServer />, color: "#000000" }
      ],
      features: [
        "End-to-end encryption for sensitive data",
        "Multi-factor authentication system",
        "Real-time security monitoring",
        "Automated vulnerability scanning",
        "Secure payment gateway integration"
      ],
      github: "https://github.com/kaung721/secure-ecommerce",
      live: "https://secure-ecommerce-demo.com",
      security: {
        level: "High",
        vulnerabilities: 0,
        tests: 150
      }
    },
    {
      id: 2,
      title: "Penetration Testing Toolkit",
      category: "security",
      type: "Security Tool",
      description: "A comprehensive suite of penetration testing tools and scripts for automated security assessments and vulnerability discovery.",
      longDescription: "This toolkit includes custom scripts for network scanning, vulnerability assessment, password cracking, and social engineering testing. Built with Python and integrated with popular security frameworks like Metasploit and Burp Suite. Features include automated report generation, vulnerability classification, and remediation recommendations.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
        { name: "Kali Linux", icon: <FaTerminal />, color: "#557c94" },
        { name: "Metasploit", icon: <FaTools />, color: "#d22128" },
        { name: "Burp Suite", icon: <FaWrench />, color: "#ff6633" },
        { name: "Nmap", icon: <FaNetworkWired />, color: "#000000" }
      ],
      features: [
        "Automated vulnerability scanning",
        "Custom exploit development",
        "Network reconnaissance tools",
        "Password attack modules",
        "Report generation system"
      ],
      github: "https://github.com/kaung721/penetration-toolkit",
      live: null,
      security: {
        level: "Critical",
        vulnerabilities: 0,
        tests: 200
      }
    },
    {
      id: 3,
      title: "Cybersecurity Dashboard",
      category: "security",
      type: "Security Dashboard",
      description: "A real-time security monitoring dashboard that provides comprehensive visibility into system security posture and threat intelligence.",
      longDescription: "This dashboard aggregates data from multiple security tools and provides real-time monitoring of security events, threat intelligence feeds, and system vulnerabilities. Features include customizable alerts, threat correlation, incident response workflows, and compliance reporting. Built with modern web technologies for optimal performance and user experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MongoDB", icon: <FaDatabase />, color: "#47a248" },
        { name: "Wireshark", icon: <FaNetworkWired />, color: "#1679ab" },
        { name: "Tailwind CSS", icon: <FaCss3Alt />, color: "#06b6d4" }
      ],
      features: [
        "Real-time threat monitoring",
        "Customizable security metrics",
        "Automated incident response",
        "Threat intelligence integration",
        "Compliance reporting"
      ],
      github: "https://github.com/kaung721/security-dashboard",
      live: "https://security-dashboard-demo.com",
      security: {
        level: "High",
        vulnerabilities: 0,
        tests: 100
      }
    },
    {
      id: 4,
      title: "Secure API Gateway",
      category: "backend",
      type: "Backend Service",
      description: "A robust API gateway with advanced security features including rate limiting, authentication, authorization, and threat detection.",
      longDescription: "This API gateway serves as a security layer for microservices architecture, providing centralized authentication, authorization, rate limiting, and threat detection. It includes features like OAuth 2.0 integration, API versioning, request/response transformation, and comprehensive logging. Built for high availability and scalability.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <FaServer />, color: "#000000" },
        { name: "JWT", icon: <FaLock />, color: "#000000" },
        { name: "MongoDB", icon: <FaDatabase />, color: "#47a248" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" }
      ],
      features: [
        "OAuth 2.0 authentication",
        "Rate limiting and throttling",
        "API versioning support",
        "Request/response transformation",
        "Comprehensive audit logging"
      ],
      github: "https://github.com/kaung721/secure-api-gateway",
      live: "https://api-gateway-demo.com",
      security: {
        level: "High",
        vulnerabilities: 0,
        tests: 120
      }
    },
    {
      id: 5,
      title: "Vulnerability Scanner",
      category: "security",
      type: "Security Tool",
      description: "An automated vulnerability scanner that identifies security weaknesses in web applications and provides detailed remediation guidance.",
      longDescription: "This scanner performs comprehensive security assessments of web applications, checking for common vulnerabilities like SQL injection, XSS, CSRF, and insecure configurations. It generates detailed reports with severity ratings, proof-of-concept exploits, and step-by-step remediation instructions. Designed for both security professionals and developers.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
        { name: "Burp Suite", icon: <FaWrench />, color: "#ff6633" },
        { name: "Nmap", icon: <FaNetworkWired />, color: "#000000" },
        { name: "Wireshark", icon: <FaNetworkWired />, color: "#1679ab" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" }
      ],
      features: [
        "Automated vulnerability detection",
        "OWASP Top 10 coverage",
        "Custom exploit generation",
        "Detailed remediation reports",
        "Integration with CI/CD pipelines"
      ],
      github: "https://github.com/kaung721/vulnerability-scanner",
      live: null,
      security: {
        level: "Critical",
        vulnerabilities: 0,
        tests: 300
      }
    },
    {
      id: 6,
      title: "Secure Chat Application",
      category: "fullstack",
      type: "Web Application",
      description: "A real-time chat application with end-to-end encryption, secure file sharing, and advanced privacy features.",
      longDescription: "This chat application prioritizes user privacy and security with end-to-end encryption, secure file sharing, message self-destruction, and advanced authentication. Features include group chats, file sharing, message encryption, and secure user management. Built with modern web technologies and security best practices.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MongoDB", icon: <FaDatabase />, color: "#47a248" },
        { name: "Socket.io", icon: <FaNetworkWired />, color: "#010101" },
        { name: "JWT", icon: <FaLock />, color: "#000000" }
      ],
      features: [
        "End-to-end encryption",
        "Secure file sharing",
        "Message self-destruction",
        "Multi-device synchronization",
        "Advanced privacy controls"
      ],
      github: "https://github.com/kaung721/secure-chat",
      live: "https://secure-chat-demo.com",
      security: {
        level: "High",
        vulnerabilities: 0,
        tests: 80
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'security', label: 'Security' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const getSecurityColor = (level) => {
    switch (level) {
      case 'Critical': return '#ef4444';
      case 'High': return '#f59e0b';
      case 'Medium': return '#3b82f6';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-content">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Security-focused applications and tools that demonstrate my expertise
            </p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
              >
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

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
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

                  <div className="project-security">
                    <div className="security-badge">
                      <FaShieldAlt />
                      <span>Security Level: {project.security.level}</span>
                    </div>
                    <div className="security-stats">
                      <span>Vulnerabilities: {project.security.vulnerabilities}</span>
                      <span>Tests: {project.security.tests}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-footer">
            <div className="footer-content">
              <h3>More Projects Coming Soon</h3>
              <p>
                I'm constantly working on new projects that combine my passion for 
                cybersecurity and software development. Check back regularly for updates 
                on my latest work.
              </p>
              <div className="cta-buttons">
                <a href="https://github.com/kaung721" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaGithub />
                  View All on GitHub
                </a>
                <a href="#contact" className="btn-secondary">
                  Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
