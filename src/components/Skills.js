import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaShieldAlt, FaLock, 
  FaDatabase, FaCode, FaBug, FaNetworkWired, FaCloud,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaLinux,
  FaBootstrap, FaAws, FaGithub, FaLinkedin, FaTwitter,
  FaTerminal, FaServer, FaCog, FaWrench, FaTools
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {

  const certifications = [
    {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    status: "Done",
    color: "#f59e0b",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/6AUZXEZ4CGX3",
  },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "In Progress",
      color: "#ef4444"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "Planned",
      color: "#3b82f6"
    },
    {
      name: "CISSP",
      issuer: "ISC²",
      status: "Future Goal",
      color: "#10b981"
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-content">
          <div className="certifications-section">
            <h3 className="certifications-title">Certifications & Learning Path</h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.name} className="certification-card">
                  <div className="cert-header">
                    <h4>{cert.name}</h4>
                    <span 
                      className="cert-status"
                      style={{ backgroundColor: cert.color }}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-footer">
            <div className="footer-content">
              <h3>Always Learning, Always Growing</h3>
              <p>
                I'm constantly updating my skills and staying current with the latest 
                technologies and security practices. The cybersecurity and development 
                landscape evolves rapidly, and I'm committed to continuous learning.
              </p>
              <div className="learning-stats">
                <div className="stat">
                  <h4>50+</h4>
                  <p>Security Challenges Completed</p>
                </div>
                <div className="stat">
                  <h4>100+</h4>
                  <p>Hours of Research</p>
                </div>
                <div className="stat">
                  <h4>10+</h4>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
