import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "Every line of code is written with security in mind, implementing best practices and following OWASP guidelines."
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description: "Approaching complex challenges with analytical thinking and creative solutions."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Staying ahead of the curve with cutting-edge technologies and modern development practices."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about building secure, scalable solutions
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <h3>Cybersecurity & Development Professional</h3>
                <p>
                  I'm a dedicated Computer Programming student with a deep passion for both 
                  web development and cybersecurity. My journey began with curiosity about 
                  how things work, which led me to explore the intricate world of code and 
                  digital security.
                </p>
                <p>
                  I specialize in creating robust web applications that not only deliver 
                  exceptional user experiences but also maintain the highest security standards. 
                  My approach combines modern development practices with security-first 
                  methodologies, ensuring that every project I work on is both functional and secure.
                </p>
                <p>
                  When I'm not coding or researching the latest security threats, you'll find 
                  me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge with the developer community.
                </p>
              </div>
              
              <div className="about-stats">
                <div className="stat">
                  <h4>2+</h4>
                  <p>Years Learning</p>
                </div>
                <div className="stat">
                  <h4>10+</h4>
                  <p>Projects Built</p>
                </div>
                <div className="stat">
                  <h4>5+</h4>
                  <p>Technologies</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="visual-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="card-title">kaung_myat_hein.js</span>
                </div>
                <div className="card-content">
                  <div className="code-block">
                    <span className="code-line">
                      <span className="keyword">const</span> <span className="variable">developer</span> = <span className="string">'Kaung Myat Hein'</span>;
                    </span>
                    <span className="code-line">
                      <span className="keyword">const</span> <span className="variable">passion</span> = <span className="string">'Cybersecurity & Web Dev'</span>;
                    </span>
                    <span className="code-line">
                      <span className="keyword">const</span> <span className="variable">mission</span> = <span className="string">'Secure the digital world'</span>;
                    </span>
                    <span className="code-line">
                      <span className="keyword">const</span> <span className="variable">skills</span> = [
                    </span>
                    <span className="code-line indent">
                      <span className="string">'ASP.NET'</span>,
                    </span>
                    <span className="code-line indent">
                      <span className="string">'React'</span>,
                    </span>
                    <span className="code-line indent">
                      <span className="string">'Flutter'</span>,
                    </span>
                    <span className="code-line indent">
                      <span className="string">'Python'</span>
                    </span>
                    <span className="code-line">];
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="values-grid" variants={itemVariants}>
            {values.map((value, index) => (
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
