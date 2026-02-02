import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('/api/contacts', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'IN' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'TW' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '@' }
  ];

  return (
    <div className="contact-page">
      <div className="grid-bg"></div>

      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-prompt">
            <span className="prompt">user@portfolio</span>
            <span className="separator">:</span>
            <span className="path">~/contact</span>
            <span className="dollar">$</span>
            <span className="command"> ./send_message.sh</span>
          </div>

          <h1>GET_IN_TOUCH</h1>
          <p className="subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <span className="terminal-title">contact-form.js</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>
                    <span className="label-prefix">const</span> name <span className="label-equals">=</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span className="label-prefix">const</span> email <span className="label-equals">=</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span className="label-prefix">const</span> message <span className="label-equals">=</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <span className="code-comment">// Send the message</span>
                  <button type="submit" disabled={loading}>
                    {loading ? 'SENDING...' : 'SEND_MESSAGE()'}
                  </button>
                </div>

                {status.message && (
                  <motion.div
                    className={`status-message ${status.type}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="status-icon">
                      {status.type === 'success' ? '✓' : '✗'}
                    </span>
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-block">
              <h3>CONNECT_WITH_ME</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="info-block code-snippet">
              <h3>AVAILABILITY</h3>
              <pre>
{`{
  status: "Open to opportunities",
  location: "Your City, Country",
  timezone: "UTC+0",
  workStyle: [
    "Remote",
    "Hybrid",
    "On-site"
  ],
  responseTime: "24-48 hours"
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
