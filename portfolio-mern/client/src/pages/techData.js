/**
 * techData.js
 * Single source of truth: brand colour + inline SVG icon for every tech.
 * Usage:  import { getTechMeta } from './techData';
 *         const { color, icon } = getTechMeta('React');
 */

const techMap = {
  /* ─── Front-end ─── */
  React: {
    color: '#61dafb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <path d="M12 2C8.5 2 5.5 5.5 4 8.5 2.5 11.5 2 14 2 14s2 .5 4.5 1c1-.5 2-1.5 3-3 .5-1 1-2 2.5-2s2 1 2.5 2c1 1.5 2 2.5 3 3 2.5-.5 4.5-1 4.5-1s-.5-2.5-2-5.5C19 5.5 16 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 22c3.5 0 6.5-3.5 8-6.5 1.5-3 2-5.5 2-5.5s-2-.5-4.5-1c-1 .5-2 1.5-3 3-.5 1-1 2-2.5 2s-2-1-2.5-2c-1-1.5-2-2.5-3-3C5.5 10 3.5 10 3.5 10s.5 2.5 2 5.5c1.5 3 4.5 6.5 6.5 6.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },

  'Node.js': {
    color: '#68a51c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 1.8l7.3 4.05L12 11.9 4.7 7.85 12 3.8zM4.5 9l7.2 4v7.5L4.5 16.5V9zm13 7.5l-7.2 4V13l7.2-4v7.5z"/>
      </svg>
    )
  },

  MongoDB: {
    color: '#47a248',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2 2c-.8 0-1.4.5-1.7 1.1-.5 1-1.5 3.5-2 4.8-.3.8-.8 1.2-1.5 1.5C6.8 10 5 10.8 4 12c-2 2.2-1.5 5.5 0 7.5.6.9 1.5 1.5 2.5 1.5.8 0 1.4-.3 1.8-.8.7-.8.6-2 .6-3 0-.4 0-1 .4-1.4.3-.3.8-.4 1.2-.4s.8.1 1.2.4c.4.4.4 1 .4 1.4 0 1-.1 2.2.6 3 .4.5 1 .8 1.8.8 1 0 1.9-.6 2.5-1.5 1.5-2 2-5.3 0-7.5-1-1.2-2.8-2-4-2.5-.7-.3-1.2-.7-1.5-1.5-.5-1.3-1.5-3.8-2-4.8-.3-.6-.9-1.1-1.7-1.1z"/>
      </svg>
    )
  },

  Express: {
    color: '#bbbbbb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },

  JavaScript: {
    color: '#f7df1e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 17v-4h2v4c0 .8.4 1 .8 1s.6-.2.6-.7V13h2v4.3c0 1.5-1 2-2.3 2C8.8 19.3 7 18.5 7 17z" fill="currentColor"/>
        <path d="M13 18.5l1.3-1.2c.5.7 1.2 1 2 1 .6 0 1-.3 1-1 0-.6-.3-.8-1.3-1.1-1.3-.5-2.2-1.2-2.2-2.5 0-1.5 1.2-2.7 3.1-2.7.9 0 1.7.3 2.2.9l-1 1.2c-.3-.4-.7-.6-1.2-.6-.5 0-.8.3-.8.7 0 .5.4.7 1.3 1 1.4.5 2.3 1.2 2.3 2.6 0 1.6-1.2 2.7-3.2 2.7-1.1 0-2-.4-2.5-1.1z" fill="currentColor"/>
      </svg>
    )
  },

  TypeScript: {
    color: '#3178c6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 9h14v2H12v9h-2V11H5V9z"/>
        <path d="M16 12h1.5c1 0 2 .6 2 2s-.8 1.8-2 2l2 2.5h-2L15 16h-.5v2.5h-1.5V12H16z"/>
      </svg>
    )
  },

  /* ─── Back-end / DB ─── */
  Python: {
    color: '#3572a5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-2.2 0-4 .3-5.2.8-1 .5-1.8 1.2-1.8 2.2V9c0 1 .8 1.8 1.8 2.2C8 11.7 10 12 12 12s4-.3 5.2-.8c1-.5 1.8-1.2 1.8-2.2V5c0-1-.8-1.7-1.8-2.2C16 2.3 14.2 2 12 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="9" cy="7" r="1" fill="currentColor"/>
        <path d="M12 12c2.2 0 4 .3 5.2.8 1 .5 1.8 1.2 1.8 2.2v4c0 1-.8 1.7-1.8 2.2C16 21.7 14.2 22 12 22s-4-.3-5.2-.8c-1-.5-1.8-1.2-1.8-2.2v-4c0-1 .8-1.7 1.8-2.2C8 11.7 10 12 12 12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="15" cy="17" r="1" fill="currentColor"/>
      </svg>
    )
  },

  /* ─── ML / AI ─── */
  TensorFlow: {
    color: '#ff7000',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v7l5 3"/>
        <circle cx="12" cy="9" r="2"/>
        <path d="M7 5v14"/>
        <circle cx="7" cy="19" r="2"/>
        <path d="M17 5v14"/>
        <circle cx="17" cy="5" r="2"/>
        <path d="M12 12v7"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    )
  },

  PyTorch: {
    color: '#ee4c2c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3c-3 0-5.5 1-7 3-1.5 2-2 4-2 5.5 0 3 1.5 5 4 6.5.5.3 1 .8 1 1.5v2h4v-2c0-.7.5-1.2 1-1.5 2.5-1.5 4-3.5 4-6.5 0-1.5-.5-3.5-2-5.5C14.5 4 12 3 12 3z"/>
        <rect x="9" y="19" width="6" height="2" rx="1" fill="currentColor"/>
      </svg>
    )
  },

  'Scikit-learn': {
    color: '#f09300',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 12l3 3 5-5"/>
      </svg>
    )
  },

  NLP: {
    color: '#c084fc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },

  'Computer Vision': {
    color: '#60a5fa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3"/>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
      </svg>
    )
  },

  /* ─── DevOps / Tools ─── */
  Docker: {
    color: '#2496ed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="14" width="4" height="4" rx=".8"/>
        <rect x="8" y="14" width="4" height="4" rx=".8"/>
        <rect x="13" y="14" width="4" height="4" rx=".8"/>
        <rect x="8" y="9" width="4" height="4" rx=".8"/>
        <rect x="13" y="9" width="4" height="4" rx=".8"/>
        <path d="M21 13c-.5 0-1-.4-1-1s.5-1 1-1 1 .4 1 1-.5 1-1 1zm-2-5h-1V7h1v1z" fill="currentColor"/>
      </svg>
    )
  },

  AWS: {
    color: '#ff9900',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18.5c-1.5.7-3.2 1-5 1h-.5c-.5 0-.5-.5 0-.7 1.8-.7 3.3-1.8 4.3-3.3.3-.5.8-.5 1 0 .2.5.7.8 1 1 .3.2.3.7 0 1L7 18.5zM18.5 17c-1 .5-2 1-3 1-.5 0-1-.2-1-.8 0-.8.5-1.5 1-2 .5-.5 1-1 1-1.5 0-.5-.5-.8-1-1-1-.3-2-.5-3-.5-1.2 0-2.5.3-3.5 1-.3.2-.7 0-.5-.3.5-.7 1.2-1.3 2-1.8 1-.5 2.2-.7 3.5-.7 1.2 0 2.3.2 3.2.5 1 .3 1.8.8 1.8 1.8 0 .7-.5 1.2-1 1.8-.3.3-.5.8-.5 1.2 0 .3.2.5.5.5.5 0 1.2-.2 1.5-.5.3-.2.7 0 .5.3-.2.5-.7.8-1 1z"/>
        <path d="M12 4C8.5 4 6 5.5 5 8c-.5 1-1 2-1.5 2.5-.3.3-.5.5-.2.8.3.3.7.2 1 0C5.2 10.5 6 10 7 9.5c.5-.3 1-.3 1.2.2.5 1 1.5 1.8 2.8 2 .7.1 1.2.5 1.2 1.2 0 .5-.3.8-.8 1-1 .3-2 .8-2.8 1.5.5 0 1-.2 1.5-.2.8 0 1.5.3 2 .8.5-.3 1-.5 1.5-.5.5 0 1 .2 1.2.5.5-.5 1.2-.8 2-.8 1.5 0 2.8 1 2.8 2.5 0 .2 0 .5-.2.8.5-.3 1-.8 1.2-1.5.5-1 .5-2.2-.2-3-.5-.5-1.2-.8-2-1 1.2-.8 2-2 2-3.5 0-2.2-1.8-4-4-4-1 0-2 .5-2.5 1.2C14.5 4.7 13.3 4 12 4z"/>
      </svg>
    )
  },

  Git: {
    color: '#f1502f',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 11.5h-1V9.7l-2.2-2.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L17.8 11H11V4.8l1.9-1.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 3.2 8.5 1.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1 1V11H3.5c-1 0-2 1-2 2s1 2 2 2h.3c.3.8 1 1.5 2 1.5s1.7-.7 2-1.5h.5c.3.8 1 1.5 2 1.5s1.7-.7 2-1.5h.5v1.5c0 1 1 2 2 2s2-1 2-2V15h4.7c1 0 2-1 2-2s-1-2-2-2z"/>
      </svg>
    )
  },

  'C++': {
    color: '#00599c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M7 12h4"/>
        <path d="M14 9v6"/>
        <path d="M11 12h6"/>
        <path d="M17 9v6"/>
      </svg>
    )
  },

  'Data Structures': {
    color: '#34d399',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="4" r="2"/>
        <circle cx="6" cy="14" r="2"/>
        <circle cx="18" cy="14" r="2"/>
        <circle cx="12" cy="20" r="2"/>
        <line x1="12" y1="6" x2="6" y2="12"/>
        <line x1="12" y1="6" x2="18" y2="12"/>
        <line x1="6" y1="16" x2="12" y2="18"/>
        <line x1="18" y1="16" x2="12" y2="18"/>
      </svg>
    )
  },

  Algorithms: {
    color: '#a78bfa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4 6 8 6 8 10 12 10 12 14 16 14 16 18 20 18"/>
        <line x1="4" y1="18" x2="20" y2="18"/>
      </svg>
    )
  },

  /* ─── extras that appear in project cards ─── */
  'Socket.io': {
    color: '#efefef',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-5 0-9 4-9 9 0 2.5 1 4.7 2.5 6.4L3 22l5-1.5C9.5 21.5 10.7 22 12 22c5 0 9-4 9-9s-4-11-9-11z"/>
      </svg>
    )
  },

  Stripe: {
    color: '#635bff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5c-1.5 0-3 .5-4 1.5C9 7.5 8 9 8 11s1 3.5 2 4.5c1 1 2.5 1.5 4 1.5s3-.5 4-1.5c1-1 2-2.5 2-4.5 0-2.5-3-6-6-6zm0 2c1 0 2.5.5 3.5 1.5.8.8 1.5 2 1.5 3.5-1.5 0-3 .2-4 1-1-1-2-2-3.5-2 .5-1.5 1.5-2.5 2.5-4z"/>
      </svg>
    )
  },

  PostgreSQL: {
    color: '#336791',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="7" ry="2.5"/>
        <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5"/>
        <path d="M5 9c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>
      </svg>
    )
  },

  Redux: {
    color: '#764abc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4 8.5l-2.8-2.8c-.4-.4-1-.4-1.4 0L9.4 8.5c-.2.2-.4.5-.4.9v1.8H7c-.8 0-1.5.5-1.8 1.2l-1 2.5c-.1.3-.2.6-.2.9v2.5c0 .8.7 1.5 1.5 1.5h2.5c.8 0 1.5-.7 1.5-1.5v-1.2h1.5v1.2c0 .8.7 1.5 1.5 1.5h2.5c.8 0 1.5-.7 1.5-1.5v-2.5c0-.3-.1-.6-.2-.9l-1-2.5c-.3-.7-1-.9-1.8-1.2v-1.8c0-.4-.2-.7-.4-.9z"/>
      </svg>
    )
  },

  'OpenWeather API': {
    color: '#eb6e4f',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
      </svg>
    )
  },

  'Chart.js': {
    color: '#ff6384',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="3 17 7 13 11 15 15 9 19 11"/>
        <line x1="3" y1="20" x2="21" y2="20"/>
      </svg>
    )
  }
};

/**
 * Returns { color, icon } for a given tech name.
 * Falls back to a generic palette colour + a simple circle icon
 * if the name isn't in the map (e.g. backend-fetched techs).
 */
const fallbackColors = [
  '#ef4444','#f97316','#eab308','#22c55e',
  '#06b6d4','#3b82f6','#8b5cf6','#ec4899'
];

export function getTechMeta(name) {
  if (techMap[name]) return techMap[name];

  // deterministic colour from the name string
  const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const color = fallbackColors[hash % fallbackColors.length];

  return {
    color,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="7"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  };
}

export default techMap;