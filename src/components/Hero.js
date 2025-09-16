import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { FaCode, FaShieldAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">Kaung Myat Hein</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <div className="typing-container">
              <span className="typing-text">
                Aspiring Cybersecurity Specialist & Full-Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            I’m a computer science student and web developer with a passion for cybersecurity and ethical hacking. I enjoy building and securing web applications, exploring vulnerabilities, and learning how systems can be strengthened against real-world attacks. Through hands-on labs, CTF challenges, and bug bounty programs, I’ve developed practical skills in penetration testing, network security, and incident response. I’m constantly expanding my knowledge in both offensive and defensive security techniques, with the goal of becoming a well-rounded cybersecurity professional. My portfolio showcases projects, labs, and write-ups that highlight my commitment to applying security best practices in real-world scenarios.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <motion.div
                className="stat-icon"
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaCode />
              </motion.div>
              <div className="stat-content">
                <h3>Full-Stack Development</h3>
                <p>Modern web technologies</p>
              </div>
            </div>
            <div className="stat-item">
              <motion.div
                className="stat-icon"
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaShieldAlt />
              </motion.div>
              <div className="stat-content">
                <h3>Cybersecurity</h3>
                <p>Secure by design</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com/kaung721" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kaungmyathein" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:kaungmyathein001@hotmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <div className="window-title">security-audit.js</div>
            </div>
            <div className="window-content">
              <div className="code-line">
                <span className="code-comment">// Cybersecurity & Development</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = <span className="code-string">'Kaung Myat Hein'</span>;
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">passion</span> = <span className="code-string">'Cybersecurity & Web Dev'</span>;
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">mission</span> = <span className="code-string">'Secure the digital world'</span>;
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">skills</span> = [
              </div>
              <div className="code-line indent">
                <span className="code-string">'Penetration Testing'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'Web Security'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'React Development'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'Node.js'</span>
              </div>
              <div className="code-line">];
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;