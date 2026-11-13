import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/App.css';

const TITLES = {
  '/': 'Sunil Jaat | ML Engineer & Full-Stack Developer',
  '/projects': 'Projects | Sunil Jaat',
  '/contact': 'Contact | Sunil Jaat'
};

/* Reset scroll position and document title on every route change. */
function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] || '404 | Sunil Jaat';
  }, [pathname]);

  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <RouteEffects />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
