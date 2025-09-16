import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaTwitter, FaDiscord, FaPaperPlane, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

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
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "#34a853"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Toronto, Ontario, Canada",
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
      name: "Gmail",
      url: "mailto:kaungmyathein001@hotmail.com",
      color: "#ea4335"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/kaungmyathein",
      color: "#1da1f2"
    },
    {
      icon: <FaDiscord />,
      name: "Discord",
      url: "https://discord.gg/kaungmyathein",
      color: "#5865f2"
    },
    {
      icon: <FaEnvelope />,
      name: "Telegram",
      url: "https://t.me/kaungmyathein",
      color: "#0088cc"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact-content"
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

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-content">
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in new opportunities, whether it's securing 
                  critical infrastructure, building innovative web applications, or 
                  collaborating on security research projects.
                </p>
                
                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
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
                    {socialLinks.map((social, index) => (
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

            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="form-card">
                <div className="form-header">
                  <h3>Send a Message</h3>
                  <p>I'll get back to you within 24 hours</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="project">Project Inquiry</option>
                      <option value="job">Job Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="security">Security Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`submit-btn ${formStatus}`}
                    disabled={formStatus === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus === 'sending' && <FaPaperPlane className="spinning" />}
                    {formStatus === 'success' && <FaCheckCircle />}
                    {formStatus === 'error' && <FaExclamationCircle />}
                    {formStatus === 'idle' && <FaPaperPlane />}
                    <span>
                      {formStatus === 'sending' && 'Sending...'}
                      {formStatus === 'success' && 'Message Sent!'}
                      {formStatus === 'error' && 'Try Again'}
                      {formStatus === 'idle' && 'Send Message'}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div className="contact-footer" variants={itemVariants}>
            <div className="footer-content">
              <h3>Ready to Secure Your Digital Future?</h3>
              <p>
                Whether you need a security audit, custom web application, or 
                cybersecurity consultation, I'm here to help. Let's build something 
                secure and amazing together.
              </p>
              <div className="cta-buttons">
                <a href="mailto:kaungmyathein001@hotmail.com" className="btn-primary">
                  <FaEnvelope />
                  Start a Conversation
                </a>
                <a href="#projects" className="btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;