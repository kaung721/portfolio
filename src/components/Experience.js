import React from 'react';
import { FaUniversity, FaFlask, FaCode, FaShieldAlt, FaTools} from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: <FaFlask />,
      title: "Research Assistant",
      company: "Georgian College",
      period: "2024 - Present",
      type: "Research",
      description: "Research Assistant skilled in developing web applications and tools to support academic projects, combining programming expertise with innovative problem-solving to enhance research outcomes",
      achievements: [
        "Collaborate with faculty and clients to understand project requirements and objectives.",
        "Design and develop responsive websites and web applications using modern frameworks",
        "Build mobile applications using cross-platform tools such as Flutter or React Native",
        "Assist in UI/UX design, prototyping, and user testing to ensure optimal user experience",
        "Integrate third-party APIs and backend services",
        "Conduct technical research to support project decisions and innovation", 
        "Document code, features, and processes for future reference", 
        "Debug issues and ensure performance, scalability, and security best practices", 
      ],
      technologies: ["ASP.NET", "Flutter", "Bootstrap", "Chart.js", "JQuery"]
    },
    {
      icon: <FaUniversity />,
      title: "Computer Programming Student",
      company: "Georgian College",
      period: "202 - 2026",
      type: "Education",
      description: "Pursuing comprehensive studies in computer programming with specialized focus on web development and cybersecurity applications.",
      achievements: [
        "Maintained high academic performance in programming courses",
        "Completed advanced coursework in web security and ethical hacking",
        "Led student cybersecurity awareness initiatives",
        "Developed multiple full-stack web applications"
      ],
      technologies: ["C#", "Java", "Python", "HTML/CSS", "JavaScript", "SQL"]
    },
    {
    icon: <FaTools />,
    title: "Hackathon Participant",
    company: "AUTOHACK",
    period: "2025",
    type: "Software Development & Education",
    description: "Developed an educational software during a hackathon to simulate automotive components, enabling students to practice car repairs safely without risk of damaging real vehicles.",
    achievements: [
      "Designed and implemented a simulation tool for car parts, allowing users to interact with and learn automotive mechanics virtually",
      "Created Python-based backend and interactive frontend components to replicate real-world car systems and responses",
      "Collaborated with team members to ensure usability, accuracy, and an engaging learning experience",
      "Demonstrated the project to judges and received positive feedback for innovation and practical educational impact"
    ],
    technologies: ["Python", "JavaScript", "Git", "VS Code", "OOP Principles", "Simulation Tools"]
  },
    {
    icon: <FaShieldAlt />,
    title: "CTF Participant",
    company: "High School",
    period: "2023",
    type: "Cybersecurity",
    description: "Hands-on cybersecurity enthusiast participating in Capture The Flag competitions, solving challenges in web exploitation, networking, and system security.",
    achievements: [
      "Completed 50+ CTF challenges across web exploitation, privilege escalation, and network security",
      "Identified vulnerabilities in lab environments and documented detailed write-ups for each challenge",
      "Developed Python scripts to automate scanning and exploitation tasks, improving efficiency during competitions",
      "Collaborated with teammates to strategize and solve complex multi-step challenges"
    ],
    technologies: ["Python", "Linux", "Wireshark", "Nmap", "Burp Suite", "TryHackMe"]
  }

  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Research': return '#10b981';
      case 'Education': return '#3b82f6';
      case 'Development': return '#f59e0b';
      case 'Cybersecurity': return '#ef4444';
      case 'Software Development & Education': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="experience-content">
          <div className="experience-header">
            <h2 className="section-title">Experience & Journey</h2>
            <p className="section-subtitle">
              My path in Web/Software Development
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-marker">
                  <div 
                    className="marker-icon"
                    style={{ backgroundColor: getTypeColor(exp.type) }}
                  >
                    {exp.icon}
                  </div>
                  <div className="timeline-line"></div>
                </div>
                
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="card-header">
                      <div className="title-section">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <span className="period">{exp.period}</span>
                      </div>
                      <div 
                        className="type-badge"
                        style={{ backgroundColor: getTypeColor(exp.type) }}
                      >
                        {exp.type}
                      </div>
                    </div>
                    
                    <p className="description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-footer">
            <div className="footer-content">
              <h3>Ready for the Next Challenge</h3>
              <p>
                I'm always looking for new opportunities to apply my skills in cybersecurity 
                and software development. Whether it's securing critical infrastructure, 
                building innovative web applications, or conducting security research, 
                I'm ready to make an impact.
              </p>
              <div className="cta-buttons">
                <a href="#projects" className="btn-primary">
                  View My Projects
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
