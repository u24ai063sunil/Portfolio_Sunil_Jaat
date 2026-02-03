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
    { name: 'GitHub',     url: 'https://github.com/u24ai063sunil',     icon: 'GH' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/sunil-jaat-216052348/',   icon: 'IN' },
    { name: 'CodeForces',  url: 'https://codeforces.com/profile/Sunil_j',   icon: 'CF' },
    { name: 'Email',     url: 'mailto:suniljaat2911@gmail.com', icon: '@'  }
  ];

  return (
    <div className="contact-page">
      <div className="grid-bg"></div>

      <div className="container">
        {/* ── Header ── */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-prompt">
            <span className="prompt">C:\Users\SunilJaat\Contact</span>
            <span className="command">&gt; send_message.bat</span>
          </div>

          <h1>GET_IN_TOUCH</h1>
          <p className="subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="contact-content">

          {/* ── Left: form inside a Windows terminal shell ── */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-terminal">
              {/* Windows title-bar */}
              <div className="terminal-header">
                <span className="terminal-title">contact-form.js</span>
                <div className="terminal-buttons">
                  <span className="btn-minimize">_</span>
                  <span className="btn-maximize">□</span>
                  <span className="btn-close">×</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>
                    <span className="label-prefix">const</span> name
                    <span className="label-equals">=</span>
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
                    <span className="label-prefix">const</span> email
                    <span className="label-equals">=</span>
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
                    <span className="label-prefix">const</span> message
                    <span className="label-equals">=</span>
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

          {/* ── Right: info cards ── */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Social links card */}
            <div className="info-block">
              <h3>CONNECT_WITH_ME</h3>
              <p>
                I'm always interested in hearing about new projects, ML collaborations,
                or competitive-programming discussions. Feel free to reach out!
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
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability snippet card */}
            <div className="info-block code-snippet">
              <h3>AVAILABILITY</h3>
              <pre>
{`{
  name: "Sunil Jaat",
  college: "SVNIT, Surat",
  status: "Open to opportunities",
  location: "Surat, Gujarat",
  timezone: "IST (UTC+5:30)",
  interests: [
    "ML / DL Projects",
    "NLP Research",
    "Competitive Programming",
    "Full-Stack Builds"
  ],
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