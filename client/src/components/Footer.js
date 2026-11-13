import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/u24ai063sunil' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sunil-jaat-216052348/' },
  { label: 'LeetCode', href: 'https://leetcode.com/sunilj/' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/Sunil_j' },
  { label: 'Email', href: 'mailto:suniljaat2911@gmail.com' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Sunil Jaat</span>
        </p>

        <p className="footer-subtext">
          Built with React • Framer Motion • Node.js — <Link to="/contact">say hi</Link>
        </p>

        <nav className="footer-links" aria-label="Social links">
          {LINKS.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && <span aria-hidden="true">•</span>}
              <a
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
