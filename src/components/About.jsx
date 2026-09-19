import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">01 — WHO AM I ?</span>
          <h2 className="section-title">
            YOUR BRAND. <span className="gradient-text">MY STRATEGY.</span>
          </h2>
        </motion.div>

        <div className="about__triptych">
          {/* Left Pillar Card: Strategy */}
          <motion.div
            className="about__pillar-col about__pillar-col--left"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="about__pillar-card hover:scale-[1.02] transition-transform duration-300">
              <div className="about__pillar-frame">
                <img
                  src="/image/shahd_strategy.jpg"
                  alt="Shahd Essam — Strategy Creates Clarity"
                  className="about__pillar-img"
                  loading="eager"
                />
                <div className="about__pillar-badge about__pillar-badge--blue">
                  <i className="fa-solid fa-chess"></i> <span>Strategy</span>
                </div>
                <div className="about__pillar-quote-box">
                  <span className="about__pillar-quote">
                    <i className="fa-solid fa-heart about__heart--blue"></i> Strategy Creates Clarity.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Clean Minimalist Bio Card */}
          <motion.div
            className="about__center-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about__bio-card backdrop-blur-xl border border-sky-400/30 hover:border-sky-400/50 transition-colors">
              <span className="about__subtitle-badge">
                Freelance Social Media Specialist &amp; Content Creator
              </span>

              <div className="about__bio-paragraphs">
                <p className="about__bio-p">
                  I specialize in <strong className="text-highlight">content creation</strong>,{' '}
                  <strong className="text-highlight">strategy development</strong>, and{' '}
                  <strong className="text-highlight">social media management</strong>.
                </p>
                <p className="about__bio-p">
                  I help brands build a strong online presence through{' '}
                  <strong className="text-highlight">creative content</strong> and{' '}
                  <strong className="text-highlight">audience-focused communication</strong>.
                </p>
                <p className="about__bio-p">
                  Driven by <strong className="text-highlight">creativity</strong>,{' '}
                  <strong className="text-highlight">adaptability</strong>, and{' '}
                  <strong className="text-highlight">continuous learning</strong>, I create content that delivers real
                  impact.
                </p>
              </div>

              <div className="about__center-meta">
                <h3 className="about__creator-name">SHAHD ESSAM</h3>
                <p className="about__creator-role">Freelance Social Media Specialist &amp; Content Creator</p>
              </div>
            </div>
          </motion.div>

          {/* Right Pillar Card: Content */}
          <motion.div
            className="about__pillar-col about__pillar-col--right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="about__pillar-card hover:scale-[1.02] transition-transform duration-300">
              <div className="about__pillar-frame">
                <img
                  src="/image/shahd_content.jpg"
                  alt="Shahd Essam — Content Connects People"
                  className="about__pillar-img"
                  loading="eager"
                />
                <div className="about__pillar-badge about__pillar-badge--pink">
                  <i className="fa-solid fa-wand-magic-sparkles"></i> <span>Content</span>
                </div>
                <div className="about__pillar-quote-box">
                  <span className="about__pillar-quote">
                    <i className="fa-solid fa-heart about__heart--pink"></i> Content Connects People.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
