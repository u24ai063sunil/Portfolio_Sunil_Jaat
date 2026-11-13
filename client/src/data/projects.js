/**
 * projects.js
 * Single source of truth for every project shown on the site.
 * Used by the Projects page and the "Featured projects" section on Home.
 *
 * Fields:
 *   slug        – short id, also used in the generated terminal cover
 *   category    – one of CATEGORIES below (drives the filter buttons)
 *   context     – where/why it was built (hackathon, internship, ...)
 *   tagline     – one-line pitch
 *   description – 1–2 sentence summary
 *   highlights  – concrete, verifiable bullet points (taken from each repo)
 *   metric      – short headline stat shown on the generated cover
 *   image       – optional screenshot; if missing a terminal cover is rendered
 *   featured    – shown on Home and pinned to the top of the Projects page
 *   coldStart   – demo (or its API) runs on a free tier that sleeps when idle
 */
import iplImg from '../images/ipl-match-predictor.png';
import eduace from '../images/eduace.png';
import rabuste from '../images/rabuste.png';
import rangriti from '../images/rangriti.png';
import visionx from '../images/visionx.jpg';

const GH = 'https://github.com/u24ai063sunil';

export const CATEGORIES = [
  { id: 'fullstack', label: 'Full-Stack', color: '#00ef76' },
  { id: 'ai', label: 'AI / LLM Systems', color: '#c084fc' },
  { id: 'cv', label: 'Computer Vision', color: '#60a5fa' },
  { id: 'data', label: 'Data & ML', color: '#f59e0b' },
  { id: 'systems', label: 'Systems', color: '#dea584' }
];

export const getCategory = (id) =>
  CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];

const PROJECTS = [
  /* ───────────────────────── Featured ───────────────────────── */
  {
    slug: 'teambrain',
    title: 'TeamBrain',
    category: 'ai',
    context: 'MongoDB Student Hackathon · Agentic Memory track',
    tagline: "Shared, self-correcting long-term memory for a team's AI agents",
    description:
      'When one teammate tells their agent about a decision or constraint, every other agent on the team knows it in its next session. Answers cite the memories they used, and an inspector explains why each one ranked.',
    highlights: [
      'Atlas Vector Search (1024-d Voyage AI embeddings) with hybrid re-ranking: 0.8·similarity + 0.1·recency + 0.1·importance',
      'Versioned superseding, conflict detection, TTL-index expiry, soft/hard forgetting and pre-LLM secret redaction',
      'Live sync to every open browser via MongoDB Change Streams + SSE; an MCP server lets Claude Code / Cursor share the same memory',
      'Hit@1 = 1.00 and MRR = 1.00 on an 11-query retrieval benchmark, plus a 15-scenario adversarial suite (prompt injection, Hinglish, typos)'
    ],
    metric: 'Hit@1 1.00 · MRR 1.00 · 15 adversarial tests',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Vector Search', 'LLMs', 'MCP', 'JavaScript'],
    githubUrl: `${GH}/teambrain`,
    featured: true
  },
  {
    slug: 'devboard',
    title: 'DevBoard',
    category: 'fullstack',
    context: 'Production-style project management platform',
    tagline: 'Real-time Kanban project management with a production-grade API',
    description:
      'A Trello/Jira-style project and task manager built from scratch to exercise every core backend concept: auth, caching, queues, real-time sync, file uploads and analytics.',
    highlights: [
      'JWT access + refresh token rotation, Google OAuth 2.0, RBAC, Helmet and per-IP rate limiting',
      'Drag-and-drop Kanban (dnd-kit) that updates live for every viewer via Socket.io, with online presence',
      'Redis caching with targeted invalidation and a BullMQ email queue with exponential-backoff retries',
      'Recharts analytics, Cloudinary attachments, CSV export, Swagger docs and Docker Compose setup'
    ],
    metric: 'Socket.io · Redis · BullMQ · Docker',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Docker', 'Tailwind CSS'],
    projectUrl: 'https://devboard-dun.vercel.app',
    coldStart: true,
    githubUrl: `${GH}/DevBoard`,
    featured: true
  },
  {
    slug: 'visionx',
    title: 'Tactics Cam (VisionX)',
    category: 'cv',
    context: 'ACM RVCE Code Cup 2026 · Computer Vision track · team of 4',
    tagline: 'Turns raw football broadcast footage into tactical insight',
    description:
      'An end-to-end pipeline that detects players, goalkeepers, referees and the ball, tracks them across frames, assigns teams by jersey colour and computes team shape and zone occupancy.',
    highlights: [
      'Fine-tuned YOLOv8n detector: mAP50 0.815 overall (player 0.988, goalkeeper 0.947, referee 0.929)',
      'ByteTrack multi-object tracking with persistent IDs across a 750-frame broadcast clip',
      'Jersey-colour K-means team assignment: 45 / 46 tracks (98%) consistent after majority-vote smoothing',
      'Convex-hull team shape and zone occupancy, validated against SoccerTrack v2 ground-truth pitch coordinates'
    ],
    metric: 'mAP50 0.815 · 98% team-label consistency',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: visionx,
    githubUrl: `${GH}/VisionX`,
    featured: true
  },
  {
    slug: 'atomquest',
    title: 'AtomQuest',
    category: 'fullstack',
    context: 'Atomberg Hackathon 1.0',
    tagline: 'Enterprise goal-cascading & performance management portal',
    description:
      'A performance management system that cascades company OKRs from admins to managers to individual employee goal sheets, with approvals, quarterly check-ins and org-wide analytics.',
    highlights: [
      'Three-role workflow (admin → manager → employee) with approve / return-for-rework and post-approval sheet locking',
      'Goal rule engine: weightage must total 100%, max 8 goals, min 10% each; numeric, %, milestone and zero-based targets',
      'Google OAuth 2.0 SSO + JWT sessions, scheduled quarterly check-in windows, email and Slack notifications',
      'Admin analytics dashboards, immutable audit trail and a peer-kudos leaderboard'
    ],
    metric: '3 roles · OKR cascade · OAuth SSO',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Recharts'],
    projectUrl: 'https://atomberg-web-portal.vercel.app',
    coldStart: true,
    githubUrl: `${GH}/AtomBerg_Web_Portal`,
    featured: true
  },

  /* ───────────────────────── AI / LLM ───────────────────────── */
  {
    slug: 'long-memory-ai',
    title: 'Long Memory AI',
    category: 'ai',
    context: 'Persistent memory for conversational AI',
    tagline: 'A chatbot that remembers what matters across hundreds of turns',
    description:
      'Fixes LLM "context amnesia" by extracting durable facts from conversation, storing them with embeddings and injecting only the relevant ones into each new prompt.',
    highlights: [
      'Split pipeline: a fast path (retrieve → rank → inject → generate) and an async background path for extraction',
      'LLM extraction of 5 memory types (preference, fact, constraint, commitment, instruction) with confidence + de-duplication',
      'Hybrid ranking on semantic similarity, extraction confidence and recency',
      'Reflection engine that runs every 5 turns to infer higher-level insights about the user'
    ],
    metric: '5 memory types · async extraction · reflection',
    technologies: ['Python', 'FastAPI', 'React', 'LLMs', 'Vector Search'],
    projectUrl: 'https://memory-chat-ui.vercel.app',
    coldStart: true,
    githubUrl: `${GH}/Long_memory_AI`,
    featured: false
  },

  /* ───────────────────────── Systems ───────────────────────── */
  {
    slug: 'kv-server',
    title: 'KV Server',
    category: 'systems',
    context: 'Systems programming in Rust',
    tagline: 'Multithreaded in-memory key-value store over raw TCP',
    description:
      'A small Redis-like server with its own text protocol, key expiry and disk persistence, plus an interactive Rust CLI client.',
    highlights: [
      'Thread-per-connection TCP server sharing state through Arc<Mutex<HashMap>>',
      'SET / GET / DEL / LIST / EXPIRE protocol parsed into an enum so every command is handled exhaustively',
      'TTL enforced twice: lazy expiry on read plus a background reaper thread',
      'serde JSON persistence that never crashes on a missing or corrupt file; covered by unit tests'
    ],
    metric: 'TCP · TTL reaper · serde persistence',
    technologies: ['Rust', 'Serde'],
    githubUrl: `${GH}/KV-server`,
    featured: false
  },

  /* ───────────────────────── Data & CV (internship) ───────────────────────── */
  {
    slug: 'crash-dashboard',
    title: 'Gujarat Crash Analytics',
    category: 'data',
    context: 'SVNIT Transportation Cell · G-TRISP Task 2',
    tagline: 'Interactive road-accident blackspot analysis dashboard',
    description:
      'A Streamlit dashboard over 1,500 accident records from 10 Gujarat districts (2021–2024) that surfaces trends and ranks the most dangerous road stretches.',
    highlights: [
      'DBSCAN with the haversine metric (eps = 15 km) found 108 crash clusters; Gaussian KDE density heatmap',
      'Weighted blackspot score combining crash frequency, average severity and fatalities',
      'Folium maps (heatmap / markers / clusters) and Plotly trend views by hour, weekday, weather and violation',
      'Live filtering by year, district and severity across every chart'
    ],
    metric: '1,500 records · 108 clusters · KDE heatmap',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly'],
    githubUrl: `${GH}/G-TRISP_G1_T2`,
    featured: false
  },
  {
    slug: 'vehicle-tracking',
    title: 'Traffic Vehicle Tracking',
    category: 'cv',
    context: 'SVNIT Transportation Cell · G-TRISP Task 1',
    tagline: 'Vehicle detection, tracking and trajectory extraction from traffic video',
    description:
      'Detects and tracks vehicles in traffic footage and exports clean per-frame trajectories for downstream traffic-flow analysis.',
    highlights: [
      'YOLOv8x detection with ByteTrack (Supervision) for consistent track IDs',
      'Exports per-frame bounding boxes and centroids for every track to CSV',
      'Annotated output video; CLI flags for confidence, frame range and output directory'
    ],
    metric: 'YOLOv8x + ByteTrack → trajectory.csv',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Pandas'],
    githubUrl: `${GH}/G-TRISP_G2_T1`,
    featured: false
  },
  {
    slug: 'ipl-predictor',
    title: 'IPL Match Predictor',
    category: 'data',
    context: 'Machine learning project',
    tagline: 'Predicts IPL match outcomes from historical data',
    description:
      'Machine-learning based IPL match outcome predictor using historical data analysis, feature engineering and model evaluation.',
    highlights: [
      'Data preprocessing and feature engineering on historical IPL match data',
      'Trained and evaluated classification models to output win probabilities'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    image: iplImg,
    projectUrl: 'https://ipl-match-predictor.vercel.app/',
    githubUrl: `${GH}/ipl-match-predictor`,
    featured: false
  },

  /* ───────────────────────── Earlier full-stack work ───────────────────────── */
  {
    slug: 'eduace',
    title: 'EduAce',
    category: 'fullstack',
    context: 'Student productivity platform',
    tagline: 'All-in-one education & productivity web app',
    description:
      'Study planner, focus timer and a personal dashboard for students, built with Django.',
    highlights: [
      'Personalised study planner and focus timer',
      'Django backend with a responsive HTML/CSS/JS frontend'
    ],
    technologies: ['Django', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: eduace,
    projectUrl: 'https://eduace.onrender.com',
    coldStart: true,
    githubUrl: `${GH}/EduAce`,
    featured: false
  },
  {
    slug: 'rangriti',
    title: 'RangRiti',
    category: 'fullstack',
    context: 'MERN cultural platform',
    tagline: 'Bridging traditional Indian art with a modern digital audience',
    description:
      'A full-stack platform showcasing traditional arts and crafts with artist profiles and immersive sections.',
    highlights: [
      'Artist profiles and immersive art showcase sections',
      'MERN architecture designed around usability and accessibility'
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: rangriti,
    projectUrl: 'https://rangriti.onrender.com/',
    coldStart: true,
    githubUrl: `${GH}/RangRiti`,
    featured: false
  },
  {
    slug: 'rabuste',
    title: 'Rabuste Coffee',
    category: 'fullstack',
    context: 'GWOC',
    tagline: 'Coffee shop & digital art platform',
    description:
      'Coffee shop and digital art platform with a modern UI, built collaboratively with Git.',
    highlights: [
      'Modern, responsive storefront UI',
      'Built collaboratively with a Git-based workflow'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    image: rabuste,
    projectUrl: 'https://rabuste-coffee-gwoc.vercel.app',
    featured: false
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export default PROJECTS;
