import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { getTechMeta } from './techData';
import iplImg from '../images/ipl-match-predictor.png';
import eduace from '../images/eduace.png';
import rabuste from '../images/rabuste.png';
import rangriti from '../images/rangriti.png'
const PROJECTS_DATA = [
  {
    _id: '1',
    title: 'EduAce',
    description:
      'All-in-one education & productivity web app featuring study planner, focus timer, and comprehensive user dashboard for students.',
    technologies: ['Django', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    imageUrl:eduace,
    projectUrl: 'https://eduace.onrender.com',
    githubUrl: 'https://github.com/u24ai063sunil/EduAce',
    featured: false
  },
  {
    _id: '2',
    title: 'IPL Match Predictor',
    description:
      'Machine Learning based IPL match outcome predictor using historical data analysis and advanced predictive algorithms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    imageUrl:iplImg,
    projectUrl: 'https://ipl-match-predictor.vercel.app/',
    githubUrl: 'https://github.com/u24ai063sunil/ipl-match-predictor',
    featured: true
  },
  {
    _id: '3',
    title: 'RangRiti',
    description:
      'Innovative full-stack platform bridging traditional Indian art with a modern digital audience.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    imageUrl:rangriti,
    projectUrl: 'https://rangriti.onrender.com/',
    githubUrl: 'https://github.com/u24ai063sunil/RangRiti',
    featured: false
  },
  {
    _id: '4',
    title: 'Rabuste-GWOC',
    description:
      'Full-stack coffee shop & digital art platform with modern UI and collaboration features.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    imageUrl: rabuste,
    projectUrl: 'https://rabuste-coffee-gwoc.vercel.app',
    githubUrl: 'https://github.com/u24ai063sunil/Rabuste-GWOC',
    featured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.featured);

  const allTechs = [
    ...new Set(PROJECTS_DATA.flatMap(p => p.technologies))
  ];

  return (
    <div className="projects-page">
      <div className="grid-bg"></div>

      <div className="container">
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-prompt">
            <span className="prompt">C:\Users\SunilJaat\Projects</span>
            <span className="command">&gt; dir /a</span>
          </div>

          <h1>MY_PROJECTS</h1>
          <p className="subtitle">
            Building innovative solutions, one commit at a time
          </p>

          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              ALL ({PROJECTS_DATA.length})
            </button>
            <button
              className={filter === 'featured' ? 'active' : ''}
              onClick={() => setFilter('featured')}
            >
              Machine Learning (
              {PROJECTS_DATA.filter(p => p.featured).length})
            </button>
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />

                <div className="project-overlay">
                  <div className="project-links">
                    {project.projectUrl && (
                      <a href={project.projectUrl} target="_blank" rel="noreferrer">
                        <button>VIEW_LIVE</button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <button>SOURCE_CODE</button>
                      </a>
                    )}
                  </div>
                </div>

                {project.featured && (
                  <span className="featured-badge">ML</span>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, i) => {
                    const { color, icon } = getTechMeta(tech);
                    return (
                      <span
                        key={i}
                        className="tech-tag"
                        style={{ '--tag-color': color }}
                      >
                        <span className="tech-tag-icon" style={{ color }}>
                          {icon}
                        </span>
                        <span className="tech-tag-label">{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK OVERVIEW */}
        <motion.div
          className="tech-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>TECH_STACK</h2>
          <div className="tech-cloud">
            {allTechs.map((tech, index) => {
              const { color, icon } = getTechMeta(tech);
              return (
                <motion.span
                  key={tech}
                  className="tech-bubble"
                  style={{ '--tag-color': color }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bubble-icon" style={{ color }}>
                    {icon}
                  </span>
                  <span className="bubble-label">{tech}</span>
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
