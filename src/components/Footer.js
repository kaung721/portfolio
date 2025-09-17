import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaShieldAlt, FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/kaung721", color: "#333" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/kaungmyathein", color: "#0077b5" },
    { icon: <FaEnvelope />, name: "Email", url: "mailto:kaungmyathein001@hotmail.com", color: "#ea4335" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="footer-brand text-center">
            <h3>Kaung Myat Hein</h3>
            <p>Cybersecurity Specialist & Full-Stack Developer</p>
            <div className="brand-tags">
              <span className="tag"><FaShieldAlt /> Aspiring Cybersecurity Professional</span>
              <span className="tag"><FaCode /> Full-Stack Dev</span>
            </div>
          </div>

          {/* Quick Links & Technologies */}
          <div className="footer-links text-center">
            <div className="link-section">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="link-section">
              <h4>Technologies</h4>
              <ul>
                <li>React & Node.js</li>
                <li>Python & Java</li>
                <li>SQL</li>
                <li>ASP.NET</li>
                <li>Git</li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="footer-social text-center">
            <h4>Connect With Me</h4>
            <p>Let’s connect! Reach out via email or LinkedIn and let’s make something secure and amazing together.</p>
            <div className="social-links">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ backgroundColor: social.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon} <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Kaung Myat Hein. All rights reserved. Built with <FaHeart className="heart" /> and security in mind.
          </p>
          <div className="footer-meta">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version 2.0</span>
          </div>
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
