import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import { getTechMeta } from './techData';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'FULL-STACK DEVELOPER | ML ENGINEER | COMPETITIVE PROGRAMMER';
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
    }, 50);

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
    'JavaScript', 'TypeScript', 'Python', 'TensorFlow',
    'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision',
    'Docker', 'AWS', 'Git', 'C++', 'Data Structures', 'Algorithms'
  ];

  const education = {
    degree: 'B.Tech Computer Science and Engineering',
    college: 'SVNIT (Sardar Vallabhbhai National Institute of Technology)',
    year: '2nd Year',
    location: 'Surat, Gujarat',
    cgpa: '9.2',
    class12: '95%',
    class10: '96%'
  };

  const certifications = [
    'Deep Learning Specialization - Coursera',
    'Machine Learning - Stanford Online',
    'Competitive Programming - CodeChef',
    'AWS Certified Solutions Architect',
    'Advanced Data Structures & Algorithms'
  ];

  const achievements = [
    'Published NLP Research Papers in International Journals',
    'CodeChef 5★ Rating',
    'Top 100 in Multiple National Coding Competitions',
    'Led ML Projects with 95%+ Accuracy',
    'Contributed to Open Source AI Projects'
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
              <span className="terminal-title">Command Prompt - portfolio</span>
              <div className="terminal-buttons">
                <span className="btn-minimize">_</span>
                <span className="btn-maximize">□</span>
                <span className="btn-close">×</span>
              </div>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">C:\Users\SunilJaat</span>
                <span className="command">&gt; whoami</span>
              </div>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                SUNIL JAAT
              </motion.h1>
              
              <div className="terminal-line">
                <span className="prompt">C:\Users\SunilJaat</span>
                <span className="command">&gt; type role.txt</span>
              </div>
              
              <div className="role-display">
                {displayText}
                {showCursor && <span className="cursor-inline">_</span>}
              </div>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="prompt">C:\Users\SunilJaat</span>
                <span className="command">&gt; dir skills</span>
              </div>

              <motion.div 
                className="skills-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {skills.map((skill, index) => {
                    const { color, icon } = getTechMeta(skill);
                    return (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        style={{ '--tag-color': color }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.03 }}
                      >
                        <span className="skill-icon" style={{ color }}>{icon}</span>
                        <span className="skill-label">{skill}</span>
                      </motion.span>
                    );
                  })}
              </motion.div>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="prompt">C:\Users\SunilJaat</span>
                <span className="command">&gt; explore.bat</span>
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
  name: "Sunil Jaat",
  location: "Surat, Gujarat",
  college: "SVNIT",
  year: "B.Tech 2nd Year",
  branch: "Computer Science",
  
  interests: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Competitive Programming",
    "Full-Stack Development",
    "Computer Vision",
    "Problem Solving"
  ],
  
  currentFocus: [
    "Building ML Models",
    "Publishing Research Papers",
    "Competitive Programming",
    "Open Source Contributions"
  ],
  
  achievements: [
    "Published NLP Papers",
    "CodeChef 5★ Coder",
    "Top 100 in National Contests"
  ],
  
  motto: "Code, Compete, Create 🚀"
};

console.log(developer);`}
                </pre>
              </div>
              <div className="about-text">
                <p>
                  I'm Sunil Jaat, a passionate Computer Science student at SVNIT, Surat, 
                  currently in my 2nd year of B.Tech. I specialize in Machine Learning, 
                  Deep Learning, and Full-Stack Development with the MERN stack.
                </p>
                <p>
                  My journey spans across multiple domains - from building intelligent ML 
                  models and conducting NLP research to solving complex algorithmic challenges 
                  in competitive programming. I've published research papers in Natural Language 
                  Processing and consistently perform in top ranks in national coding competitions.
                </p>
                <p>
                  When I'm not training models or debugging code, you'll find me participating 
                  in hackathons, contributing to open-source projects, or exploring the latest 
                  advancements in AI/ML technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>EDUCATION</h2>
            <div className="education-grid">
              <motion.div 
                className="education-card main-education"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="edu-header">
                  <div className="edu-icon">🎓</div>
                  <div className="edu-title-section">
                    <h3>{education.degree}</h3>
                    <p className="edu-college">{education.college}</p>
                  </div>
                </div>
                <div className="edu-details">
                  <div className="edu-info">
                    <span className="info-label">Current Year:</span>
                    <span className="info-value">{education.year}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Location:</span>
                    <span className="info-value">{education.location}</span>
                  </div>
                  <div className="edu-info highlight">
                    <span className="info-label">CGPA:</span>
                    <span className="info-value">{education.cgpa}/10.0</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="education-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="edu-header">
                  <div className="edu-icon">📚</div>
                  <h3>Class XII (Senior Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{education.class12}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">CBSE</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="education-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="edu-header">
                  <div className="edu-icon">📖</div>
                  <h3>Class X (Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{education.class10}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">CBSE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>CERTIFICATIONS</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 239, 118, 0.3)' }}
                >
                  <div className="cert-icon">✓</div>
                  <p>{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>RESEARCH_&_ACHIEVEMENTS</h2>
            <div className="achievements-content">
              <div className="research-block">
                <h3>📝 Published Research Papers</h3>
                <p className="research-desc">
                  Contributed to the field of Natural Language Processing with published 
                  research papers in international journals, focusing on innovative 
                  approaches to text analysis and language understanding.
                </p>
                <div className="research-tags">
                  <span className="tag">Natural Language Processing</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Research</span>
                </div>
              </div>

              <div className="achievements-list">
                <h3>🏆 Key Achievements</h3>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="achievement-bullet">▸</span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;