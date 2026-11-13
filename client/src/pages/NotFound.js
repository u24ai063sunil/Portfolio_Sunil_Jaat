import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="not-found-page">
      <div className="grid-bg"></div>
      <div className="container not-found-body">
        <div className="terminal-prompt">
          <span className="prompt">C:\Users\SunilJaat</span>
          <span className="command">&gt; cd {pathname}</span>
        </div>
        <h1>404</h1>
        <p className="not-found-msg">
          The system cannot find the path specified: <code>{pathname}</code>
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            cd ~
          </Link>
          <Link to="/projects" className="btn-secondary">
            VIEW_PROJECTS
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
