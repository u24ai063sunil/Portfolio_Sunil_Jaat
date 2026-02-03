import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Projects.css';
import { getTechMeta } from './techData';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Demo data for development
      setProjects([
        {
          _id: '1',
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          imageUrl: 'https://via.placeholder.com/600x400/0a0a0a/00ef76?text=E-Commerce',
          projectUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          featured: true
        },
        {
          _id: '2',
          title: 'Real-Time Chat App',
          description: 'WebSocket-based chat application with rooms, direct messaging, and file sharing capabilities.',
          technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
          imageUrl: 'https://via.placeholder.com/600x400/0a0a0a/ff0080?text=Chat+App',
          projectUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          featured: true
        },
        {
          _id: '3',
          title: 'Task Management System',
          description: 'Kanban-style task manager with drag-and-drop, team collaboration, and progress tracking.',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
          imageUrl: 'https://via.placeholder.com/600x400/0a0a0a/00ef76?text=Task+Manager',
          projectUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          featured: false
        },
        {
          _id: '4',
          title: 'Weather Dashboard',
          description: 'Real-time weather dashboard with location search, forecasts, and interactive maps.',
          technologies: ['React', 'OpenWeather API', 'Chart.js'],
          imageUrl: 'https://via.placeholder.com/600x400/0a0a0a/ff0080?text=Weather+App',
          projectUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          featured: false
        }
      ]);
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  const allTechs = [...new Set(projects.flatMap(p => p.technologies))];

  return (
    <div className="projects-page">
      <div className="grid-bg"></div>
      
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-prompt">
            <span className="prompt">C:\Users\Portfolio\Projects</span>
            <span className="command">&gt; dir /a</span>
          </div>
          
          <h1>MY_PROJECTS</h1>
          <p className="subtitle">Building innovative solutions, one commit at a time</p>

          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              ALL ({projects.length})
            </button>
            <button 
              className={filter === 'featured' ? 'active' : ''}
              onClick={() => setFilter('featured')}
            >
              FEATURED ({projects.filter(p => p.featured).length})
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="loading">
            <div className="loader"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.projectUrl && (
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                          <button>VIEW_LIVE</button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <button>SOURCE_CODE</button>
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">FEATURED</span>
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => {
                      const { color, icon } = getTechMeta(tech);
                      return (
                        <span key={i} className="tech-tag" style={{ '--tag-color': color }}>
                          <span className="tech-tag-icon" style={{ color }}>{icon}</span>
                          <span className="tech-tag-label">{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tech Stack Overview */}
        <motion.div
          className="tech-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bubble-icon" style={{ color }}>{icon}</span>
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