import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import { getTechMeta } from './techData';
import PROJECTS, { FEATURED_PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import aiMl from '../images/certificates/AI_ML.jpeg';
import ctrlSpace from '../images/certificates/CTRL+Space.jpeg';
import datathon from '../images/certificates/datathon.png';
import echelon from '../images/certificates/Echelon.jpeg';
import mindSprint from '../images/certificates/mind_sprints.jpeg';
import acmWinter from '../images/certificates/acm_winter.png';
import bitQuiz from '../images/certificates/bitquiz.png';
import codeWars from '../images/certificates/code_wars.png';
import webWonders from '../images/certificates/web_wonders.png';
import Footer from '../components/Footer';

/* ───────────────────────── Content ───────────────────────── */

const ROLE_TEXT = 'ML ENGINEER | FULL-STACK DEVELOPER | NLP RESEARCHER';

const SKILL_GROUPS = [
  { label: 'languages', items: ['Python', 'C++', 'C', 'JavaScript', 'Rust', 'SQL'] },
  {
    label: 'ai_ml',
    items: ['NLP', 'LLMs', 'Vector Search', 'YOLOv8', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    label: 'web_backend',
    items: ['React', 'Node.js', 'Express', 'FastAPI', 'Django', 'MongoDB', 'MySQL', 'Redis', 'Socket.io']
  },
  { label: 'tools_cs', items: ['Git', 'Docker', 'Streamlit', 'Data Structures', 'Algorithms'] }
];

const EDUCATION = {
  degree: 'B.Tech Artificial Intelligence',
  college: 'SVNIT (Sardar Vallabhbhai National Institute of Technology)',
  year: '3rd Year',
  location: 'Surat, Gujarat',
  cgpa: '8.22',
  class12: '82%',
  class10: '87%'
};

const CERTIFICATIONS = [
  { src: aiMl, name: 'AI / ML' },
  { src: webWonders, name: 'Web Wonders' },
  { src: codeWars, name: 'Code Wars' },
  { src: acmWinter, name: 'ACM Winter' },
  { src: datathon, name: 'Datathon' },
  { src: ctrlSpace, name: 'CTRL + Space' },
  { src: echelon, name: 'Echelon' },
  { src: mindSprint, name: 'Mind Sprints' },
  { src: bitQuiz, name: 'BitQuiz' }
];

const RESEARCH_PAPERS = [
  {
    title:
      'Team Horizon at BHASHA Task 1: Multilingual IndicGEC with Transformer-based Grammatical Error Correction Models',
    authors: 'Manav Dhamecha, Gaurav Damor, Sunil Jaat, Pruthwik Mishra',
    venue: 'Proceedings of BHASHA 2025 · ACL Anthology',
    link: 'https://aclanthology.org/2025.bhasha-1.14/',
    code: 'https://github.com/u24ai063sunil/IndicGEC2025',
    topics: ['NLP', 'Grammatical Error Correction', 'Indic Languages', 'Transformers']
  },
  {
    title:
      'Team Horizon at BHASHA Task 2: Fine-tuning Multilingual Transformers for Indic Word Grouping',
    authors: 'Manav Dhamecha, Gaurav Damor, Sunil Jaat, Pruthwik Mishra',
    venue: 'Proceedings of BHASHA 2025 · ACL Anthology',
    link: 'https://aclanthology.org/2025.bhasha-1.18/',
    code: 'https://github.com/u24ai063sunil/IndicWG2025',
    topics: ['NLP', 'Word Grouping', 'Multilingual Transformers', 'Indic Languages']
  }
];

const HACKATHON_COUNT = 3;

const EXPERIENCE = [
  {
    tag: 'HACKATHON',
    when: '2026',
    title: 'ACM RVCE Code Cup — Computer Vision Track',
    detail:
      'Built Tactics Cam with a team of 4: a YOLOv8 + ByteTrack pipeline that turns football broadcast footage into team shape and zone-occupancy analytics (mAP50 0.815, 98% team-label consistency).',
    link: 'https://github.com/u24ai063sunil/VisionX'
  },
  {
    tag: 'HACKATHON',
    title: 'MongoDB Student Hackathon — Agentic Memory Track',
    detail:
      "Built TeamBrain, a shared long-term memory layer for a team's AI agents using Atlas Vector Search, Change Streams, TTL indexes and an MCP server.",
    link: 'https://github.com/u24ai063sunil/teambrain'
  },
  {
    tag: 'HACKATHON',
    title: 'Atomberg Hackathon 1.0',
    detail:
      'Built AtomQuest, an enterprise goal-cascading and performance management portal with three-role approval workflows and Google SSO.',
    link: 'https://atomberg-web-portal.vercel.app'
  },
  {
    tag: 'INTERNSHIP',
    title: 'SVNIT Transportation Cell — G-TRISP',
    detail:
      'Built a road-accident blackspot dashboard (DBSCAN + KDE over 1,500 records) and a YOLOv8x + ByteTrack vehicle-trajectory extraction pipeline.',
    link: 'https://github.com/u24ai063sunil/G-TRISP_G1_T2'
  },
  {
    tag: 'RESEARCH',
    when: '2025',
    title: 'BHASHA Workshop @ ACL — Shared Tasks',
    detail:
      'Co-authored two papers as Team Horizon on Indic grammatical error correction and Indic word grouping with multilingual transformers.',
    link: 'https://aclanthology.org/2025.bhasha-1.14/'
  },
  {
    tag: 'COMPETITIVE',
    title: 'LeetCode & Codeforces',
    detail: 'Regular problem solving to keep data structures and algorithms sharp.',
    link: 'https://leetcode.com/sunilj/'
  }
];

const STATS = [
  { value: PROJECTS.length, label: 'Projects shipped' },
  { value: RESEARCH_PAPERS.length, label: 'ACL papers' },
  { value: HACKATHON_COUNT, label: 'Hackathon builds' },
  { value: CERTIFICATIONS.length, label: 'Certifications' }
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/* ───────────────────────── Component ───────────────────────── */

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < ROLE_TEXT.length) {
        setDisplayText(ROLE_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const closeCert = useCallback(() => setActiveCert(null), []);

  useEffect(() => {
    if (!activeCert) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeCert();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeCert, closeCert]);

  let skillIndex = 0;

  return (
    <div className="home">
      <div className="grid-bg"></div>

      {/* ── Hero ── */}
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
              <div className="terminal-buttons" aria-hidden="true">
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

              <div className="role-display" aria-label={ROLE_TEXT}>
                {displayText}
                {showCursor && <span className="cursor-inline">_</span>}
              </div>

              <p className="hero-summary">
                B.Tech AI @ SVNIT Surat. I build LLM memory systems, computer-vision pipelines and
                production-style full-stack apps — and publish NLP research along the way.
              </p>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="prompt">C:\Users\SunilJaat</span>
                <span className="command">&gt; tree skills</span>
              </div>

              <motion.div
                className="skill-groups"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {SKILL_GROUPS.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <span className="skill-group-label">├── {group.label}/</span>
                    <div className="skills-grid">
                      {group.items.map((skill) => {
                        const { color, icon } = getTechMeta(skill);
                        const delay = 1.2 + skillIndex++ * 0.025;
                        return (
                          <motion.span
                            key={skill}
                            className="skill-tag"
                            style={{ '--tag-color': color }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay }}
                          >
                            <span className="skill-icon" style={{ color }}>
                              {icon}
                            </span>
                            <span className="skill-label">{skill}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                ))}
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
                <Link to="/projects" className="btn-primary">
                  VIEW_PROJECTS
                </Link>
                <Link to="/contact" className="btn-secondary">
                  CONTACT_ME
                </Link>
                <a
                  href="https://github.com/u24ai063sunil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GITHUB ↗
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <div className="floating-brackets" aria-hidden="true">
            <span className="float-elem bracket-1">{'{'}</span>
            <span className="float-elem bracket-2">{'}'}</span>
            <span className="float-elem bracket-3">{'<'}</span>
            <span className="float-elem bracket-4">{'>'}</span>
            <span className="float-elem bracket-5">{'['}</span>
            <span className="float-elem bracket-6">{']'}</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-strip">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>ABOUT_ME</h2>
            <div className="about-content">
              <div className="code-block">
                <pre>
{`const developer = {
  name: "Sunil Jaat",
  location: "Surat, Gujarat",
  college: "SVNIT",
  year: "B.Tech AI - 3rd Year",

  focus: [
    "LLM agents & long-term memory",
    "Computer vision",
    "NLP research (Indic languages)",
    "Full-stack & backend systems"
  ],

  platforms: {
    leetcode: "sunilj",
    codeforces: "Sunil_j",
    github: "u24ai063sunil"
  },

  achievements: [
    "2 papers @ BHASHA 2025 (ACL)",
    "${HACKATHON_COUNT} hackathon builds",
    "${PROJECTS.length} projects on GitHub"
  ],

  motto: "Learn, Build, Contribute 🚀"
};

console.log(developer);`}
                </pre>
              </div>
              <div className="about-text">
                <p>
                  I'm Sunil Jaat, a 3rd-year B.Tech AI student at SVNIT, Surat. I like building
                  systems end to end — from the model to the API to the UI people actually use.
                </p>
                <p>
                  Lately that has meant <strong>LLM memory systems</strong> (TeamBrain, Long Memory
                  AI), <strong>computer-vision pipelines</strong> (football tactics analytics and
                  traffic tracking with YOLOv8 + ByteTrack), and <strong>production-style web
                  apps</strong> with real-time sync, queues and caching. I've also written a
                  multithreaded key-value server in Rust to go deeper on systems.
                </p>
                <p>
                  On the research side I've co-authored two NLP papers in the ACL Anthology on Indic
                  language processing, and I keep my fundamentals sharp on LeetCode and Codeforces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured projects ── */}
      <section className="featured-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>FEATURED_PROJECTS</h2>
            <p className="section-subtitle">
              A few recent builds — AI agents, computer vision and production-grade full-stack.
            </p>
          </motion.div>
          <div className="featured-grid">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} compact />
            ))}
          </div>
          <div className="featured-more">
            <Link to="/projects" className="btn-primary">
              VIEW_ALL_{PROJECTS.length}_PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experience & hackathons ── */}
      <section className="experience-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>EXPERIENCE_&amp;_HACKATHONS</h2>
          </motion.div>
          <ol className="timeline">
            {EXPERIENCE.map((item, index) => (
              <motion.li
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-meta">
                  <span className={`timeline-tag tag-${item.tag.toLowerCase()}`}>{item.tag}</span>
                  {item.when && <span className="timeline-when">{item.when}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                    View →
                  </a>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="research-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>RESEARCH_PUBLICATIONS</h2>
            <p className="section-subtitle">
              Shared-task papers on NLP for Indic languages, published in the ACL Anthology
            </p>
            <div className="research-grid">
              {RESEARCH_PAPERS.map((paper, index) => (
                <motion.div
                  key={paper.link}
                  className="research-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="research-icon" aria-hidden="true">📝</div>
                  <h3>{paper.title}</h3>
                  <p className="research-authors">
                    {paper.authors.split('Sunil Jaat').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <strong>Sunil Jaat</strong>}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="research-venue">{paper.venue}</p>
                  <div className="research-topics">
                    {paper.topics.map((topic) => (
                      <span key={topic} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="research-links">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="research-link">
                      Read Paper →
                    </a>
                    {paper.code && (
                      <a href={paper.code} target="_blank" rel="noopener noreferrer" className="research-link">
                        View Code →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="certifications-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>CERTIFICATIONS</h2>
            <p className="section-subtitle">Click any certificate to view it full size.</p>
            <div className="certifications-grid">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.button
                  type="button"
                  key={cert.name}
                  className="cert-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.08, 0.5) }}
                  onClick={() => setActiveCert(cert)}
                  aria-label={`View ${cert.name} certificate`}
                >
                  <img
                    src={cert.src}
                    alt={`${cert.name} certificate`}
                    className="certificate-image"
                    loading="lazy"
                  />
                  <span className="cert-caption">{cert.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="cert-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCert.name} certificate`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCert}
          >
            <motion.figure
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeCert.src} alt={`${activeCert.name} certificate`} />
              <figcaption>
                {activeCert.name}
                <button type="button" className="lightbox-close" onClick={closeCert} autoFocus>
                  CLOSE [ESC]
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Education ── */}
      <section className="education-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2>EDUCATION</h2>
            <div className="education-grid">
              <div className="education-card main-education">
                <div className="edu-header">
                  <div className="edu-title-section">
                    <h3>{EDUCATION.degree}</h3>
                    <p className="edu-college">{EDUCATION.college}</p>
                  </div>
                </div>
                <div className="edu-details">
                  <div className="edu-info">
                    <span className="info-label">Current Year:</span>
                    <span className="info-value">{EDUCATION.year}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Location:</span>
                    <span className="info-value">{EDUCATION.location}</span>
                  </div>
                  <div className="edu-info highlight">
                    <span className="info-label">CGPA:</span>
                    <span className="info-value">{EDUCATION.cgpa}/10.0</span>
                  </div>
                </div>
              </div>

              <div className="education-card">
                <div className="edu-header">
                  <h3>Class XII (Senior Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{EDUCATION.class12}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">GSEB</span>
                  </div>
                </div>
              </div>

              <div className="education-card">
                <div className="edu-header">
                  <h3>Class X (Secondary)</h3>
                </div>
                <div className="edu-details">
                  <div className="edu-info highlight">
                    <span className="info-label">Percentage:</span>
                    <span className="info-value">{EDUCATION.class10}</span>
                  </div>
                  <div className="edu-info">
                    <span className="info-label">Board:</span>
                    <span className="info-value">GSEB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
