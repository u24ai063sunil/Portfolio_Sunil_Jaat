import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span className="bracket">{'<'}</span>
            <span className="logo-text">SJ</span>
            <span className="bracket">{'/>'}</span>
            <span className="logo-subtitle">ML Engineer</span>
          </Link>

          <div className="nav-links">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="nav-prefix">&gt;</span> {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;