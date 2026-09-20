import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const triggerMagic = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { x, y },
      colors: ['#38bdf8', '#a855f7', '#34d399', '#f472b6', '#fbbf24'],
      shapes: ['star', 'circle'],
      ticks: 180,
      gravity: 0.8,
      scalar: 1.1,
    });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">04 — Contact</span>
          <h2 className="sr-only">Need some creative magic? Let's create the magic</h2>

          {/* Creative Frameless Meme Presentation */}
          <div className="contact__creative-meme relative my-8 sm:my-10 mx-auto max-w-2xl px-2">
            {/* Ambient Celestial Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/15 to-emerald-500/10 blur-3xl opacity-70" />

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6">
              {/* First Image - The Question */}
              <motion.div
                className="relative w-full max-w-[340px] sm:max-w-none sm:w-1/2 cursor-pointer select-none"
                initial={{ opacity: 0, x: -25, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0, y: -6, zIndex: 20 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="/image/contact_meme_1.png"
                  alt="Need some creative magic?"
                  className="w-full h-auto rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(56,189,248,0.35)] block"
                  loading="lazy"
                />
              </motion.div>

              {/* Connecting Magical Element */}
              <div className="flex sm:flex-col items-center justify-center z-10 text-sky-400/90 -my-2 sm:my-0">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-9 h-9 rounded-full bg-sky-950/80 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/20"
                >
                  <Sparkles className="w-4 h-4 text-sky-300" />
                </motion.div>
              </div>

              {/* Second Image - The Magic */}
              <motion.div
                className="relative w-full max-w-[340px] sm:max-w-none sm:w-1/2 cursor-pointer select-none"
                initial={{ opacity: 0, x: 25, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0, y: -6, zIndex: 20 }}
                whileTap={{ scale: 0.98 }}
                onClick={triggerMagic}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                title="Click for magic! ✨"
              >
                <img
                  src="/image/contact_meme_2.png"
                  alt="Let's create the magic"
                  className="w-full h-auto rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(168,85,247,0.35)] block"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          <div className="contact__info flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:shahdessam537@gmail.com"
              className="contact-info group hover:border-sky-400/50 hover:bg-sky-500/10 transition-all"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>shahdessam537@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+201092916162"
              className="contact-info group hover:border-sky-400/50 hover:bg-sky-500/10 transition-all"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>+20 10 9291 6162</span>
            </motion.a>
          </div>

          <div className="contact__socials mt-6">
            <motion.a
              href="https://wa.me/201092916162"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              data-platform="whatsapp"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.66.21-.46.21-.86.15-.98-.06-.13-.23-.2-.48-.32z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
