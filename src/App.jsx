import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutLVCC from './pages/AboutLVCC';
import TeamPage from './pages/TeamPage';

// Scrolls to the hash target after navigation (e.g. /#features from another page)
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the target page has rendered
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          const headerOffset = 88;
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutLVCC />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;