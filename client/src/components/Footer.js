import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Sunil Jaat</span>
        </p>

        <p className="footer-subtext">
          Built with React • Framer Motion • Passion 🚀
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/u24ai063sunil"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:sunil@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
