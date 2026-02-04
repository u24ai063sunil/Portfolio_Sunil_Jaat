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
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const skills = [
    'Python', 'C', 'C++', 'JavaScript',
    'Django', 'React', 'Node.js', 'MongoDB', 'Express', 'MySQL',
    'NLP', 'Scikit-learn', 'Pandas', 'NumPy',
    'Git', 'Data Structures', 'Algorithms'
  ];

  const education = {
    degree: 'B.Tech Artificial Intelligence',
    college: 'SVNIT (Sardar Vallabhbhai National Institute of Technology)',
    year: '2nd Year',
    location: 'Surat, Gujarat',
    cgpa: '8.22',
    class12: '82%',
    class10: '87%'
  };

  const certifications = [
    'Deep Learning Specialization - Coursera',
    'Machine Learning - Stanford Online',
    'Competitive Programming - CodeChef',
    'AWS Certified Solutions Architect',
    'Advanced Data Structures & Algorithms'
  ];

  const achievements = [
    'Published NLP Research Papers in ACL Anthology',
    'Active LeetCode & CodeForces Problem Solver',
    'Led ML Projects with 95%+ Accuracy',
  ];

  const researchPapers = [
    {
      title: 'Indic Grammatical Error Correction (IndicGEC2025)',
      venue: 'ACL Anthology - Bhasha Workshop 2025',
      link: 'https://aclanthology.org/2025.bhasha-1.14/',
      topics: ['NLP', 'Grammatical Error Correction', 'Indic Languages']
    },
    {
      title: 'Indic Word Generation (IndicWG2025)',
      venue: 'ACL Anthology - Bhasha Workshop 2025',
      link: 'https://aclanthology.org/2025.bhasha-1.18/',
      topics: ['NLP', 'Word Generation', 'Computational Linguistics']
    }
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
  year: "B.Tech AI - 2nd Year",
  
  focus: [
    "Machine Learning & NLP",
    "Full-Stack Development",
    "Competitive Programming"
  ],
  
  platforms: {
    leetcode: "sunilj",
    codeforces: "Sunil_j",
    github: "u24ai063sunil"
  },
  
  achievements: [
    "Published NLP Papers (ACL)",
    "Active CP Solver",
    "Open Source Contributor"
  ],
  
  motto: "Learn, Build, Contribute 🚀"
};

console.log(developer);`}
                </pre>
              </div>
              <div className="about-text">
                <p>
                  I'm Sunil Jaat, a 2nd-year B.Tech AI student at SVNIT, Surat. 
                  I'm passionate about Machine Learning, NLP research, and building 
                  full-stack applications with Django and the MERN stack.
                </p>
                <p>
                  I've published research papers in Natural Language Processing (ACL Anthology) 
                  focusing on Indic language processing, and I actively solve problems on 
                  LeetCode and CodeForces to strengthen my algorithmic thinking.
                </p>
                <p>
                  When I'm not coding or researching, you'll find me contributing to collaborative 
                  projects, participating in hackathons, or exploring the latest advancements 
                  in AI/ML technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="research-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>RESEARCH_PUBLICATIONS</h2>
            <p className="section-subtitle">
              Published papers in Natural Language Processing focused on Indic language processing
            </p>
            <div className="research-grid">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={index}
                  className="research-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                >
                  <div className="research-icon">📝</div>
                  <h3>{paper.title}</h3>
                  <p className="research-venue">{paper.venue}</p>
                  <div className="research-topics">
                    {paper.topics.map((topic, i) => (
                      <span key={i} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="research-link">
                    Read Paper →
                  </a>
                </motion.div>
              ))}
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

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>KEY_ACHIEVEMENTS</h2>
            <div className="achievements-list">
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
                  <div className="edu-icon"></div>
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
                  <div className="edu-icon"></div>
                  <h3>Class XII (Senior Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{education.class12}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">GSEB</span>
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
                  <div className="edu-icon"></div>
                  <h3>Class X (Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{education.class10}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">GSEB</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;