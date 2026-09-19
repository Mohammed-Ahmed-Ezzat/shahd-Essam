import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    num: '01',
    icon: 'fa-solid fa-lightbulb',
    title: 'Idea',
    desc: 'Every great piece starts with a spark — brainstorming concepts that align with your brand and audience.'
  },
  {
    num: '02',
    icon: 'fa-solid fa-chess-knight',
    title: 'Strategy',
    desc: 'Mapping the concept to platform, timing, format, and audience psychology for maximum impact.'
  },
  {
    num: '03',
    icon: 'fa-solid fa-pen-ruler',
    title: 'Creation',
    desc: 'Production — shooting, editing, designing. Where the idea becomes tangible, polished content.'
  },
  {
    num: '04',
    icon: 'fa-solid fa-paper-plane',
    title: 'Publishing',
    desc: 'Strategic release — timing, captions, hashtags, and distribution engineered for reach.'
  },
  {
    num: '05',
    icon: 'fa-solid fa-chart-line',
    title: 'Results',
    desc: 'Tracking, analyzing, and optimizing. Real numbers, real growth, real ROI.'
  }
];

const mobileProcessSteps = [
  {
    num: '01',
    icon: 'fa-solid fa-chess-knight',
    title: 'Strategy',
    desc: 'Mapping the concept to platform, timing, format, and audience psychology for maximum impact.'
  },
  {
    num: '02',
    icon: 'fa-solid fa-pen-ruler',
    title: 'Creation',
    desc: 'Production — shooting, editing, designing. Where the idea becomes tangible, polished content.'
  },
  {
    num: '03',
    icon: 'fa-solid fa-chart-line',
    title: 'Results',
    desc: 'Tracking, analyzing, and optimizing. Real numbers, real growth, real ROI.'
  }
];

export default function Process() {
  const trackRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      if (rect.top <= winH * 0.75 && rect.bottom >= winH * 0.25) {
        const p = Math.min(1, Math.max(0, (winH * 0.75 - rect.top) / (rect.height * 0.75)));
        setLineWidth(p * 100);
      } else if (rect.top > winH * 0.75) {
        setLineWidth(0);
      } else {
        setLineWidth(100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stepsToRender = isMobile ? mobileProcessSteps : processSteps;

  return (
    <section className="section process" id="process">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">03 — Process</span>
          <h2 className="section-title">
            How the <span className="gradient-text">magic</span> happens.
          </h2>
        </motion.div>

        <div className="process__track" id="processTrack" ref={trackRef}>
          {/* Connecting Line */}
          <div className="process__line" id="processLine">
            <div className="process__line-bg"></div>
            <div
              className="process__line-fill transition-all duration-300 ease-out"
              id="processLineFill"
              style={{
                width: isMobile ? '100%' : `${lineWidth}%`,
                height: isMobile ? `${lineWidth}%` : '100%'
              }}
            ></div>
          </div>

          {stepsToRender.map((step, idx) => (
            <motion.div
              key={step.title}
              className={`process-step ${step.title === 'Idea' ? 'process-step--idea' : ''} cursor-pointer`}
              data-step={idx + 1}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="process-step__num">{step.num}</div>
              <div className="process-step__icon-wrap">
                <i className={step.icon}></i>
                <span className="process-step__ring"></span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
