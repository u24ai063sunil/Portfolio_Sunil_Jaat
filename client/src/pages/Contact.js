/* eslint-disable react/jsx-no-comment-textnodes */
// export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';
import Footer from '../components/Footer';

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
      const res = await axios.post(
  `${process.env.REACT_APP_API_BASE_URL}/api/contacts`,
  {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  },
  {
    headers: { 'Content-Type': 'application/json' }
  }
);


      // ✅ CHECK BACKEND RESPONSE
      if (res.data && res.data.success) {
        setStatus({
          type: 'success',
          message: res.data.message || 'Message sent successfully!'
        });

        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response');
      }

    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/u24ai063sunil', icon: 'GH', handle: '@u24ai063sunil' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sunil-jaat-216052348/', icon: 'IN', handle: 'sunil-jaat' },
    { name: 'LeetCode', url: 'https://leetcode.com/sunilj/', icon: 'LC', handle: '@sunilj' },
    { name: 'CodeForces', url: 'https://codeforces.com/profile/Sunil_j', icon: 'CF', handle: '@Sunil_j' }
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
            <span className="prompt">C:\Users\SunilJaat\Contact</span>
            <span className="command">&gt; send_message.bat</span>
          </div>

          <h1>GET_IN_TOUCH</h1>
          <p className="subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

       
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
                  <span className="code-comment">/* Send the message */</span>
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
            {/* Social links card */}
            <div className="info-block">
              <h3>CONNECT_WITH_ME</h3>
              <p>
                I'm always interested in ML collaborations, open-source contributions, 
                competitive programming discussions, and GSoC opportunities. Feel free to reach out!
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
                    <div className="social-info">
                      <span className="social-name">{link.name}</span>
                      <span className="social-handle">{link.handle}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Direct email link */}
              <div className="direct-contact">
                <span className="contact-label">📧 Email:</span>
                <a href="mailto:suniljaat2911@gmail.com" className="contact-link">
                  suniljaat2911@gmail.com
                </a>
              </div>
            </div>

            {/* Availability snippet card */}
            <div className="info-block code-snippet">
              <h3>AVAILABILITY</h3>
              <pre>
{`{
  name: "Sunil Jaat",
  college: "SVNIT, Surat",
  year: "2nd Year B.Tech AI",
  status: "Open to opportunities",
  location: "Surat, Gujarat",
  timezone: "IST (UTC+5:30)",
  
  interests: [
    "ML / DL / NLP Research",
    "MERN & Django Development",
    "Competitive Programming",
    "Open Source (GSoC 2026)"
  ],
  
  platforms: {
    leetcode: "sunilj",
    codeforces: "Sunil_j",
    github: "@u24ai063sunil"
  },
  
  workStyle: ["Remote", "Hybrid"],
  responseTime: "24-48 hours"
}`}
              </pre>
            </div>

            {/* Competitive Programming Stats Card */}
            <div className="info-block cp-stats">
              <h3>COMPETITIVE_PROGRAMMING</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-platform">LeetCode</span>
                  <a href="https://leetcode.com/sunilj/" target="_blank" rel="noopener noreferrer" className="stat-link">
                    View Profile →
                  </a>
                </div>
                <div className="stat-card">
                  <span className="stat-platform">CodeForces</span>
                  <a href="https://codeforces.com/profile/Sunil_j" target="_blank" rel="noopener noreferrer" className="stat-link">
                    View Profile →
                  </a>
                </div>
              </div>
              <p className="stats-note">
                Active problem solver focusing on algorithms, data structures, and competitive programming to strengthen GSoC preparation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
