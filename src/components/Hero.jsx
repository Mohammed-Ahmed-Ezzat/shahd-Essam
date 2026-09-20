import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, TrendingUp, Flame, Wand2, ExternalLink, Folder } from 'lucide-react';

export default function Hero({ onOpenFolder }) {
  const woodSwingRef = useRef(null);
  const figureRef = useRef(null);

  const triggerEpicSparkles = (e) => {
    // 1. Dynamic Wooden Sign Swing Physics
    if (woodSwingRef.current) {
      woodSwingRef.current.classList.remove('knocking');
      void woodSwingRef.current.offsetWidth;
      woodSwingRef.current.classList.add('knocking');
      setTimeout(() => {
        if (woodSwingRef.current) {
          woodSwingRef.current.classList.remove('knocking');
        }
      }, 900);
    }

    // 2. Mind-blowing Canvas Confetti Starburst
    const rect = figureRef.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

    // Stars and Circles burst
    confetti({
      origin: { x, y },
      particleCount: 45,
      spread: 80,
      startVelocity: 30,
      gravity: 0.65,
      ticks: 200,
      scalar: 1.2,
      shapes: ['star', 'circle'],
      colors: ['#38BDF8', '#F43F5E', '#FBBF24', '#34D399', '#C084FC', '#FFFFFF'],
    });

    // Complementary ambient golden sparkles
    setTimeout(() => {
      confetti({
        origin: { x, y: y - 0.05 },
        particleCount: 20,
        spread: 60,
        startVelocity: 22,
        scalar: 0.9,
        shapes: ['star'],
        colors: ['#FEF08A', '#FDE68A', '#7DD3FC'],
      });
    }, 120);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerEpicSparkles(e);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero__layout">
        {/* Left Column: Hero Content */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="hero__badge-dot"></span>
            <span>Available for Strategic Growth &amp; Collaborations</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I craft <span className="gradient-text hero-highlight">scroll&#8209;stopping</span> content &amp; viral growth.
          </motion.h1>

          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            I'm <strong>Shahd Essam</strong> — Freelance Social Media Specialist &amp; Content Creator helping ambitious
            brands build a strong online presence through creative content, strategy development, and audience-focused
            communication.
          </motion.p>

          <motion.div
            className="hero__tags-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="hero__tag-item">
              <Wand2 className="w-4 h-4 text-sky-300 inline-block mr-1.5" /> Viral Video Scripting
            </span>
            <span className="hero__tag-item">
              <TrendingUp className="w-4 h-4 text-emerald-400 inline-block mr-1.5" /> Acquisition Funnels
            </span>
            <span className="hero__tag-item">
              <Flame className="w-4 h-4 text-amber-400 inline-block mr-1.5" /> High-Retention Hooks
            </span>
          </motion.div>

          {/* Action CTAs: Direct Portfolio Triggers */}
          <motion.div
            className="hero__cta-actions flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 my-5 sm:my-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <button
              type="button"
              onClick={() => onOpenFolder('medical')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden border border-sky-300/30"
            >
              <Folder className="w-4 h-4 text-sky-100 group-hover:scale-110 transition-transform shrink-0" />
              <span>Explore My Work</span>
              <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono text-sky-100 shrink-0">
                4 Sectors
              </span>
            </button>

            <a
              href="https://drive.google.com/drive/folders/1gEmezdHKR8cM8uEHMGTAa1pljyG1epIX"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-sky-400/30 hover:border-emerald-400/60 shadow-md hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              title="Open all works in Google Drive"
            >
              {/* Google Drive SVG */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 87.3 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
              </svg>
              <span>All Works on Drive</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </motion.div>

          <div className="hero__scroll">
            <span>Scroll to Explore</span>
            <div className="hero__scroll-line"><span></span></div>
          </div>
        </motion.div>

        {/* Right Column: Idea Spark Visual & Windows XP Floating Folders */}
        <div className="hero__visual">
          {/* Master Frameless Floating Figure */}
          <div className="hero-floating-stage" id="heroFloatingStage">
            <motion.div
              className="hero-figure-wrapper cursor-pointer"
              id="heroFigureWrapper"
              ref={figureRef}
              role="button"
              tabIndex={0}
              aria-label="Shahd Essam — Wait... I have an idea. (Click for Magic Stars)"
              onClick={triggerEpicSparkles}
              onKeyDown={handleKeyDown}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="hero-wood-swing" id="heroWoodSwing" ref={woodSwingRef}>
                <div className="hero-figure-sheen" aria-hidden="true"></div>

                <img
                  src={`${import.meta.env.BASE_URL}image/shahd_idea_nobg.png`}
                  alt="Shahd Essam — Wait... I have an idea."
                  className="hero-floating-img"
                  id="heroFloatingImg"
                  loading="eager"
                />

                <div className="hero-figure-sparkles" aria-hidden="true">
                  <span className="hero-spark hero-spark--1">✦</span>
                  <span className="hero-spark hero-spark--2">⭐</span>
                  <span className="hero-spark hero-spark--3">✧</span>
                  <span className="hero-spark hero-spark--4">✨</span>
                  <span className="hero-spark hero-spark--5">★</span>
                  <span className="hero-spark hero-spark--6">💫</span>
                </div>
              </div>

              <div className="hero-ground-shadow" aria-hidden="true"></div>
            </motion.div>
          </div>

          {/* Interactive Guide Badge above folders */}
          <motion.div
            className="hero-folders-guide-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span className="font-bold text-sky-200">
              📁 Click any folder to explore my work
            </span>
          </motion.div>

          {/* Windows XP Classic Style Floating Folders (Rendered AFTER figure so they stay on top) */}
          <div className="hero-xp-folders" aria-hidden="false">
            {/* Folder 1: Medical */}
            <button
              type="button"
              className="xp-folder hero-sector-folder xp-folder--1 xp-folder--pink cursor-pointer"
              title="01_Healthcare_Medical (5 Dossiers)"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFolder('medical');
              }}
            >
              <div className="xp-folder__icon-box">
                <svg className="xp-folder__svg" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z"
                    fill="url(#xpBack1)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <rect x="10" y="8" width="44" height="20" rx="2" fill="#FFFFFF" opacity="0.95" />
                  <line x1="14" y1="12" x2="32" y2="12" stroke="#FDA4AF" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="44" y2="16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z"
                    fill="url(#xpFront1)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <path d="M6 16.5H58" stroke="#FFF7C2" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <defs>
                    <linearGradient id="xpBack1" x1="4" y1="4" x2="60" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFDF5D" />
                      <stop offset="0.5" stopColor="#F5B800" />
                      <stop offset="1" stopColor="#D99B00" />
                    </linearGradient>
                    <linearGradient id="xpFront1" x1="2" y1="14" x2="62" y2="49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFF18E" />
                      <stop offset="0.3" stopColor="#FFD738" />
                      <stop offset="0.8" stopColor="#F2A900" />
                      <stop offset="1" stopColor="#C78200" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="xp-folder__mini-pill xp-folder__mini-pill--pink">
                  <i className="fa-solid fa-heart-pulse"></i>
                </span>
              </div>
              <span className="xp-folder__text">
                <span className="hidden sm:inline">01_Medical (5 Projects) ↗</span>
                <span className="sm:hidden">Medical (5) ↗</span>
              </span>
            </button>

            {/* Folder 2: Commercial */}
            <button
              type="button"
              className="xp-folder hero-sector-folder xp-folder--2 xp-folder--cyan cursor-pointer"
              title="02_Commercial_Retail (3 Dossiers)"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFolder('commercial');
              }}
            >
              <div className="xp-folder__icon-box">
                <svg className="xp-folder__svg" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z"
                    fill="url(#xpBack2)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <rect x="10" y="8" width="44" height="20" rx="2" fill="#FFFFFF" opacity="0.95" />
                  <line x1="14" y1="12" x2="30" y2="12" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="42" y2="16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z"
                    fill="url(#xpFront2)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <path d="M6 16.5H58" stroke="#FFF7C2" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <defs>
                    <linearGradient id="xpBack2" x1="4" y1="4" x2="60" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFDF5D" />
                      <stop offset="0.5" stopColor="#F5B800" />
                      <stop offset="1" stopColor="#D99B00" />
                    </linearGradient>
                    <linearGradient id="xpFront2" x1="2" y1="14" x2="62" y2="49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFF18E" />
                      <stop offset="0.3" stopColor="#FFD738" />
                      <stop offset="0.8" stopColor="#F2A900" />
                      <stop offset="1" stopColor="#C78200" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="xp-folder__mini-pill xp-folder__mini-pill--cyan">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
              <span className="xp-folder__text">
                <span className="hidden sm:inline">02_Commercial (3 Projects) ↗</span>
                <span className="sm:hidden">Commercial (3) ↗</span>
              </span>
            </button>

            {/* Folder 3: Food */}
            <button
              type="button"
              className="xp-folder hero-sector-folder xp-folder--3 xp-folder--gold cursor-pointer"
              title="03_Food_Dining (4 Dossiers)"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFolder('food');
              }}
            >
              <div className="xp-folder__icon-box">
                <svg className="xp-folder__svg" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z"
                    fill="url(#xpBack3)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <rect x="10" y="8" width="44" height="20" rx="2" fill="#FFFFFF" opacity="0.95" />
                  <line x1="14" y1="12" x2="28" y2="12" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="40" y2="16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z"
                    fill="url(#xpFront3)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <path d="M6 16.5H58" stroke="#FFF7C2" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <defs>
                    <linearGradient id="xpBack3" x1="4" y1="4" x2="60" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFDF5D" />
                      <stop offset="0.5" stopColor="#F5B800" />
                      <stop offset="1" stopColor="#D99B00" />
                    </linearGradient>
                    <linearGradient id="xpFront3" x1="2" y1="14" x2="62" y2="49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFF18E" />
                      <stop offset="0.3" stopColor="#FFD738" />
                      <stop offset="0.8" stopColor="#F2A900" />
                      <stop offset="1" stopColor="#C78200" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="xp-folder__mini-pill xp-folder__mini-pill--gold">
                  <i className="fa-solid fa-utensils"></i>
                </span>
              </div>
              <span className="xp-folder__text">
                <span className="hidden sm:inline">03_Food & Dining (4 Projects) ↗</span>
                <span className="sm:hidden">Food (4) ↗</span>
              </span>
            </button>

            {/* Folder 4: Real Estate */}
            <button
              type="button"
              className="xp-folder hero-sector-folder xp-folder--4 xp-folder--purple cursor-pointer"
              title="04_Brand_Strategy_RealEstate (Dossier)"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFolder('realestate');
              }}
            >
              <div className="xp-folder__icon-box">
                <svg className="xp-folder__svg" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z"
                    fill="url(#xpBack4)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <rect x="10" y="8" width="44" height="20" rx="2" fill="#FFFFFF" opacity="0.95" />
                  <line x1="14" y1="12" x2="34" y2="12" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="42" y2="16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z"
                    fill="url(#xpFront4)"
                    stroke="#B38006"
                    strokeWidth="1.2"
                  />
                  <path d="M6 16.5H58" stroke="#FFF7C2" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <defs>
                    <linearGradient id="xpBack4" x1="4" y1="4" x2="60" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFDF5D" />
                      <stop offset="0.5" stopColor="#F5B800" />
                      <stop offset="1" stopColor="#D99B00" />
                    </linearGradient>
                    <linearGradient id="xpFront4" x1="2" y1="14" x2="62" y2="49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFF18E" />
                      <stop offset="0.3" stopColor="#FFD738" />
                      <stop offset="0.8" stopColor="#F2A900" />
                      <stop offset="1" stopColor="#C78200" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="xp-folder__mini-pill xp-folder__mini-pill--purple">
                  <i className="fa-solid fa-chess-knight"></i>
                </span>
              </div>
              <span className="xp-folder__text">
                <span className="hidden sm:inline">04_Brand Strategy (Case Study) ↗</span>
                <span className="sm:hidden">Strategy (1) ↗</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
