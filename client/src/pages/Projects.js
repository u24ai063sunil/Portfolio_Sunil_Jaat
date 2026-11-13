import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { getTechMeta } from './techData';
import PROJECTS, { CATEGORIES } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const matchesQuery = (project, q) => {
  if (!q) return true;
  const haystack = [
    project.title,
    project.tagline,
    project.context,
    ...project.technologies
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q.toLowerCase());
};

const Projects = () => {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = { all: PROJECTS.length };
    CATEGORIES.forEach(({ id }) => {
      c[id] = PROJECTS.filter((p) => p.category === id).length;
    });
    return c;
  }, []);

  const visibleProjects = useMemo(
    () =>
      PROJECTS.filter(
        (p) => (category === 'all' || p.category === category) && matchesQuery(p, query.trim())
      ),
    [category, query]
  );

  // Every tech used across projects, most-used first.
  const techUsage = useMemo(() => {
    const usage = {};
    PROJECTS.forEach((p) =>
      p.technologies.forEach((t) => {
        usage[t] = (usage[t] || 0) + 1;
      })
    );
    return Object.entries(usage).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, []);

  const filterByTech = (tech) => {
    setCategory('all');
    setQuery(tech);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            AI systems, computer vision pipelines and full-stack products — one commit at a time
          </p>

          <div className="filter-buttons" role="tablist" aria-label="Filter projects by category">
            <button
              role="tab"
              aria-selected={category === 'all'}
              className={category === 'all' ? 'active' : ''}
              onClick={() => setCategory('all')}
            >
              ALL ({counts.all})
            </button>
            {CATEGORIES.filter((c) => counts[c.id] > 0).map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={category === c.id}
                className={category === c.id ? 'active' : ''}
                style={{ '--filter-color': c.color }}
                onClick={() => setCategory(c.id)}
              >
                {c.label} ({counts[c.id]})
              </button>
            ))}
          </div>

          <div className="project-search">
            <span className="search-prompt" aria-hidden="true">
              grep -i
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search by name or tech (e.g. React, YOLOv8, Rust)"
              aria-label="Search projects"
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                ×
              </button>
            )}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <div className="no-results">
            <p>
              <span className="prompt">&gt;</span> No projects match "{query}".
            </p>
            <button
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
            >
              RESET_FILTERS
            </button>
          </div>
        )}

        {/* TECH STACK OVERVIEW */}
        <motion.div
          className="tech-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>TECH_STACK</h2>
          <p className="tech-overview-note">
            Everything used across these projects — click a tech to see where it's used.
          </p>
          <div className="tech-cloud">
            {techUsage.map(([tech, count], index) => {
              const { color, icon } = getTechMeta(tech);
              return (
                <motion.button
                  type="button"
                  key={tech}
                  className="tech-bubble"
                  style={{ '--tag-color': color }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.02, 0.6) }}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => filterByTech(tech)}
                  aria-label={`Show projects using ${tech}`}
                >
                  <span className="bubble-icon" style={{ color }}>
                    {icon}
                  </span>
                  <span className="bubble-label">{tech}</span>
                  <span className="bubble-count">{count}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
