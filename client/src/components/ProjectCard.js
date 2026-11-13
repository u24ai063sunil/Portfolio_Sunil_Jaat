import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { getTechMeta } from '../pages/techData';
import { getCategory } from '../data/projects';
import './ProjectCard.css';

/* Terminal-styled cover used when a project has no screenshot. */
const TerminalCover = ({ project, color }) => (
  <div className="terminal-cover" style={{ '--cover-color': color }} aria-hidden="true">
    <div className="terminal-cover-body">
      <div className="terminal-cover-line">
        <span className="tc-prompt">$</span> cat README.md | head -1
      </div>
      <div className="terminal-cover-title">{project.title}</div>
      {project.metric && (
        <div className="terminal-cover-line tc-metric">
          <span className="tc-prompt">&gt;</span> {project.metric}
        </div>
      )}
    </div>
    <div className="terminal-cover-bar">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="terminal-cover-path">~/projects/{project.slug}</span>
      <span className="terminal-cover-branch">⎇ main</span>
    </div>
  </div>
);

// forwardRef: AnimatePresence (mode="popLayout") on the Projects page needs a DOM ref.
const ProjectCard = forwardRef(({ project, index = 0, compact = false }, ref) => {
  const category = getCategory(project.category);
  const highlights = compact ? project.highlights.slice(0, 2) : project.highlights;

  return (
    <motion.article
      ref={ref}
      layout
      className={`project-card ${compact ? 'compact' : ''}`}
      style={{ '--cat-color': category.color }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.4) }}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <TerminalCover project={project} color={category.color} />
        )}
        <span className="category-badge">{category.label}</span>
        {project.featured && !compact && <span className="featured-badge">★ FEATURED</span>}
      </div>

      <div className="project-content">
        {project.context && <p className="project-context">{project.context}</p>}
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        {!compact && <p className="project-description">{project.description}</p>}

        {highlights?.length > 0 && (
          <ul className="project-highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="tech-stack">
          {project.technologies.map((tech) => {
            const { color, icon } = getTechMeta(tech);
            return (
              <span key={tech} className="tech-tag" style={{ '--tag-color': color }}>
                <span className="tech-tag-icon" style={{ color }}>
                  {icon}
                </span>
                <span className="tech-tag-label">{tech}</span>
              </span>
            );
          })}
        </div>

        <div className="project-links">
          {project.projectUrl && (
            <a
              className="project-link primary"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
            >
              LIVE_DEMO ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              className="project-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
            >
              SOURCE_CODE ↗
            </a>
          )}
        </div>
        {project.coldStart && project.projectUrl && (
          <p className="cold-start-note">
            ⏱ Hosted on a free tier — the demo may take 30–60s to wake up.
          </p>
        )}
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
