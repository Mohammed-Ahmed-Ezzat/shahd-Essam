import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Social Media Management',
    desc: 'Full-channel growth, calendars & active community engagement.'
  },
  {
    icon: 'fa-solid fa-clapperboard',
    title: 'Content Creation',
    desc: 'Scroll-stopping visuals, dynamic graphics & viral video content.'
  },
  {
    icon: 'fa-solid fa-chess',
    title: 'Content Strategy',
    desc: 'Data-driven roadmaps tuned to audience psychology & algorithms.'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Creative Campaigns',
    desc: 'Bold, unconventional campaigns from concept to measurable impact.'
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Reels / Short-form Content',
    desc: 'High-retention reels & shorts built for hooks, virality & reach.'
  },
  {
    icon: 'fa-solid fa-fingerprint',
    title: 'Personal Branding',
    desc: 'Magnetic positioning, distinct voice & memorable visual identity.'
  }
];

export default function Services() {
  return (
    <section className="section services" id="services">
      {/* Hidden SVG Master Gradients for Cloud Cards */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <linearGradient id="cloudBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="68%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2EDF8" />
          </linearGradient>
          <linearGradient id="cloudBgGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#D9EEFD" />
          </linearGradient>
          <linearGradient id="cloudBorderGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="rgba(186, 230, 253, 0.95)" />
            <stop offset="100%" stopColor="rgba(125, 211, 252, 0.7)" />
          </linearGradient>
          <linearGradient id="cloudBorderGradAmber" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="rgba(251, 191, 36, 0.95)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.75)" />
          </linearGradient>
          {/* Dark Mode Gradients */}
          <linearGradient id="cloudBgGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1B2D4F" />
            <stop offset="50%" stopColor="#111D35" />
            <stop offset="100%" stopColor="#0A1224" />
          </linearGradient>
          <linearGradient id="cloudBgGradDarkHover" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#253D6B" />
            <stop offset="50%" stopColor="#172748" />
            <stop offset="100%" stopColor="#0E1931" />
          </linearGradient>
          <linearGradient id="cloudBorderGradDark" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="rgba(125, 211, 252, 0.85)" />
            <stop offset="45%" stopColor="rgba(56, 189, 248, 0.65)" />
            <stop offset="100%" stopColor="rgba(129, 140, 248, 0.45)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">02 — Services</span>
          <h2 className="section-title">
            What I <span className="gradient-text">do best.</span>
          </h2>
        </motion.div>

        <div className="services__grid">
          {servicesList.map((srv, idx) => (
            <motion.article
              key={idx}
              className="service-card cursor-pointer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              <svg className="service-card__cloud-svg" viewBox="0 0 400 260" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="service-card__cloud-path"
                  d="M 140,50 C 155,18 245,18 260,50 C 295,45 345,60 345,95 C 375,110 395,135 385,160 C 385,195 360,235 325,235 C 285,242 240,242 200,238 C 160,242 115,242 75,235 C 40,235 15,195 15,160 C 5,135 25,110 55,95 C 55,60 105,45 140,50 Z"
                />
              </svg>
              <div className="service-card__inner">
                <div className="service-card__icon-box">
                  <i className={`${srv.icon} service-card__icon`}></i>
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
