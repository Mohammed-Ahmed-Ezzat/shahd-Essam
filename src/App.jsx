import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import SkyBackground from './components/SkyBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FinderModal from './components/FinderModal';
import WorkModal from './components/WorkModal';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [finderState, setFinderState] = useState({
    isOpen: false,
    categoryKey: 'medical'
  });
  const [workModalState, setWorkModalState] = useState({
    isOpen: false,
    deliverable: null,
    client: null,
    category: null
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('shahd_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  const lenisRef = useRef(null);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    try {
      localStorage.setItem('shahd_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Smooth scroll using Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.5,
        smoothTouch: false
      });

      lenisRef.current = lenisInstance;
      window.__lenis = lenisInstance;

      let animationFrameId;
      function raf(time) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
        }
        animationFrameId = requestAnimationFrame(raf);
      }
      animationFrameId = requestAnimationFrame(raf);

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
          window.__lenis = null;
        }
      };
    } catch (err) {
      console.warn('Lenis could not be initialized:', err);
    }
  }, []);

  // Lock body scroll and pause Lenis smoothly when any modal is open
  useEffect(() => {
    const isModalOpen = finderState.isOpen || workModalState.isOpen;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      lenisRef.current?.start();
    }
  }, [finderState.isOpen, workModalState.isOpen]);

  const handleOpenFolder = (categoryKey) => {
    setFinderState({
      isOpen: true,
      categoryKey: categoryKey || 'medical'
    });
  };

  const handleCloseFinder = () => {
    setFinderState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenDeliverable = (item, client, category) => {
    setWorkModalState({
      isOpen: true,
      deliverable: item,
      client,
      category
    });
  };

  const handleCloseWorkModal = () => {
    setWorkModalState({
      isOpen: false,
      deliverable: null,
      client: null,
      category: null
    });
  };

  return (
    <div className="app-root">
      <Preloader onLoaded={() => setIsLoaded(true)} />
      <SkyBackground theme={theme} />
      <ScrollProgress />
      <BackToTop />
      <Navbar isLoaded={isLoaded} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero onOpenFolder={handleOpenFolder} />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Modals */}
      <FinderModal
        isOpen={finderState.isOpen}
        categoryKey={finderState.categoryKey}
        onClose={handleCloseFinder}
        onOpenDeliverable={handleOpenDeliverable}
      />

      <WorkModal
        isOpen={workModalState.isOpen}
        deliverable={workModalState.deliverable}
        client={workModalState.client}
        category={workModalState.category}
        onClose={handleCloseWorkModal}
      />
    </div>
  );
}
