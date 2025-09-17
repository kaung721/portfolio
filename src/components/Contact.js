import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "kaungmyathein001@hotmail.com",
      link: "mailto:kaungmyathein001@hotmail.com",
      color: "#ea4335"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Toronto, Canada",
      link: null,
      color: "#4285f4"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/kaungmyathein",
      link: "https://linkedin.com/in/kaungmyathein",
      color: "#0077b5"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/kaung721",
      color: "#333"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/kaungmyathein",
      color: "#0077b5"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:kaungmyathein001@hotmail.com",
      color: "#ea4335"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact-content centered"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to discuss your next cybersecurity or development project?
            </p>
          </motion.div>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-content">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities, whether it's securing 
                critical infrastructure, building innovative web applications, or 
                collaborating on security research projects.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    className="contact-method"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="method-icon"
                      style={{ backgroundColor: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div className="method-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ backgroundColor: social.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
