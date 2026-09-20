import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

export default function Navbar({ isLoaded, theme = 'light', onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'process', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync body class with mobile menu state
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  // Close on Escape or Window Resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 992 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('nav-open');
  };

  const handleNavClick = (e, targetId) => {
    if (e) {
      e.preventDefault();
    }

    // 1. Immediately close the mobile drawer and unlock body
    closeMenu();
    setActiveSection(targetId);

    // 2. Smoothly scroll to the target section with fixed navbar offset
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const navOffset = window.innerWidth <= 768 ? 64 : 76;
        if (window.__lenis) {
          window.__lenis.scrollTo(el, {
            offset: -navOffset,
            duration: 1.1,
          });
        } else {
          const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top,
            behavior: 'smooth',
          });
        }
      }
    });

    // 3. Update URL hash cleanly
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <>
      <nav
        className={`navbar ${isLoaded ? 'nav-visible' : ''} ${scrolled ? 'nav-scrolled backdrop-blur-xl' : ''}`}
        id="navbar"
      >
        <div className="container nav-container">
          <a href="#home" className="nav-logo group" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="nav-logo__mark transition-transform group-hover:scale-105 inline-block">shahd</span>
            <span className="nav-logo__dot">.ic</span>
          </a>

          <ul className={`nav-links ${isOpen ? 'active open' : ''}`} id="navLinks">
            {['home', 'about', 'services', 'process', 'contact'].map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`nav-link capitalize ${activeSection === sec ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, sec)}
                >
                  {sec === 'home' ? 'Home' : sec === 'about' ? 'About' : sec === 'services' ? 'Services' : sec === 'process' ? 'Process' : 'Contact'}
                </a>
              </li>
            ))}

            {/* Mobile Drawer Theme Switcher (Visible ONLY on Mobile Drawer) */}
            <li className="nav-mobile-theme-row">
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  closeMenu();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-sky-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
                  <span>{theme === 'dark' ? 'Night Theme' : 'Day Theme'}</span>
                </span>
                <span className="text-[11px] font-bold text-sky-300 bg-sky-500/20 border border-sky-500/30 px-2.5 py-1 rounded-full">
                  {theme === 'dark' ? 'Day Mode ☀️' : 'Night Mode 🌙'}
                </span>
              </button>
            </li>

            <li className="nav-mobile-cta">
              <a
                href="https://wa.me/201092916162"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn--nav-mobile flex items-center justify-center gap-2"
                onClick={closeMenu}
              >
                <i className="bi bi-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </li>
          </ul>

          <div className="nav-actions flex items-center gap-2.5">
            {/* Theme Toggle Button (Light/Dark Switcher) */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn w-9 h-9 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              title={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-sky-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/201092916162"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social hover:scale-110 active:scale-95 transition-transform"
              data-platform="whatsapp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.66.21-.46.21-.86.15-.98-.06-.13-.23-.2-.48-.32z" />
              </svg>
            </a>
          </div>

          <button
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`nav-overlay ${isOpen ? 'active' : ''}`}
        id="navOverlay"
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />
    </>
  );
}
