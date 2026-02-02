import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'FULL-STACK DEVELOPER';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const skills = [
    'React', 'Node.js', 'MongoDB', 'Express',
    'JavaScript', 'TypeScript', 'Python', 'Docker',
    'AWS', 'Git', 'REST APIs', 'GraphQL'
  ];

  return (
    <div className="home">
      <div className="grid-bg"></div>
      
      <section className="hero">
        <div className="container">
          <motion.div 
            className="terminal-window"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="terminal-title">portfolio.sh</span>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">user@portfolio</span>
                <span className="separator">:</span>
                <span className="path">~</span>
                <span className="dollar">$</span>
                <span className="command"> whoami</span>
              </div>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                JOHN DOE
              </motion.h1>
              
              <div className="terminal-line">
                <span className="prompt">user@portfolio</span>
                <span className="separator">:</span>
                <span className="path">~</span>
                <span className="dollar">$</span>
                <span className="command"> cat role.txt</span>
              </div>
              
              <div className="role-display">
                {displayText}
                {showCursor && <span className="cursor-inline">_</span>}
              </div>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="prompt">user@portfolio</span>
                <span className="separator">:</span>
                <span className="path">~</span>
                <span className="dollar">$</span>
                <span className="command"> ls skills/</span>
              </div>

              <motion.div 
                className="skills-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="prompt">user@portfolio</span>
                <span className="separator">:</span>
                <span className="path">~</span>
                <span className="dollar">$</span>
                <span className="command"> ./explore.sh</span>
              </div>

              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <Link to="/projects">
                  <button className="btn-primary">VIEW_PROJECTS</button>
                </Link>
                <Link to="/contact">
                  <button className="btn-secondary">CONTACT_ME</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <div className="floating-brackets">
            <span className="float-elem bracket-1">{'{'}</span>
            <span className="float-elem bracket-2">{'}'}</span>
            <span className="float-elem bracket-3">{'<'}</span>
            <span className="float-elem bracket-4">{'>'}</span>
            <span className="float-elem bracket-5">{'['}</span>
            <span className="float-elem bracket-6">{']'}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>ABOUT_ME</h2>
            <div className="about-content">
              <div className="code-block">
                <pre>
{`const developer = {
  name: "John Doe",
  location: "Your City",
  interests: [
    "Web Development",
    "Open Source",
    "Problem Solving",
    "Innovation"
  ],
  currentFocus: "Building scalable applications",
  funFact: "Coffee-driven code machine ☕"
};

console.log(developer);`}
                </pre>
              </div>
              <div className="about-text">
                <p>
                  I'm a passionate full-stack developer with expertise in the MERN stack. 
                  I love building innovative solutions that solve real-world problems and 
                  create exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
