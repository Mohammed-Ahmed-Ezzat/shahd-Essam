import React, { useEffect, useRef } from 'react';

export default function SkyBackground({ theme = 'light' }) {
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Dynamic moving stars with 3D depth layers
    const starCount = isDark ? 280 : 90;
    const stars = Array.from({ length: starCount }, () => {
      const depth = Math.random() * 0.85 + 0.15; // 0.15 (distant) to 1.0 (close)
      const isSparkle = isDark && depth > 0.8 && Math.random() > 0.55;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.7 * depth + 0.6,
        vx: (Math.random() * 0.18 + 0.05) * depth, // gentle drift to the right
        vy: (Math.random() * 0.08 - 0.02) * depth,
        depth,
        isSparkle,
        baseAlpha: Math.random() * 0.5 + (isDark ? 0.4 : 0.18),
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        twinkleOffset: Math.random() * Math.PI * 2,
        color:
          depth > 0.8
            ? '#FFFFFF'
            : depth > 0.5
            ? Math.random() > 0.4 ? '#7DD3FC' : '#38BDF8'
            : Math.random() > 0.5 ? '#FDE047' : '#C084FC',
      };
    });

    // Shooting stars / meteors
    const meteors = [];
    let nextMeteorTime = Date.now() + Math.random() * 2500 + 1000;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.8 + width * 0.1;
      const startY = Math.random() * height * 0.4;
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 15 + 16;
      const length = Math.random() * 120 + 80;

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 1.0,
        decay: Math.random() * 0.024 + 0.016,
        color: Math.random() > 0.35 ? '#38BDF8' : '#FFFFFF',
      });
    };

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      const shiftX = (mouseX - width / 2) * 0.015;
      const shiftY = (mouseY - height / 2) * 0.015;

      // Draw dynamic stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Drift motion
        s.x += s.vx;
        s.y += s.vy;

        // Wrap boundaries
        if (s.x > width + 15) s.x = -15;
        if (s.x < -15) s.x = width + 15;
        if (s.y > height + 15) s.y = -15;
        if (s.y < -15) s.y = height + 15;

        // Parallax coordinates
        const renderX = s.x - shiftX * s.depth;
        const renderY = s.y - shiftY * s.depth;

        // Twinkling sine wave
        const alpha = Math.max(
          0.12,
          Math.min(1, s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.42)
        );

        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Atmospheric halo & 4-point sparkle for prominent stars
        if (isDark && s.isSparkle && alpha > 0.65) {
          const haloSize = s.size * 3.2;
          ctx.beginPath();
          ctx.arc(renderX, renderY, haloSize, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
          ctx.fill();

          // 4-point diamond sparkle flare
          const flareLen = s.size * 5.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.75})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(renderX - flareLen, renderY);
          ctx.lineTo(renderX + flareLen, renderY);
          ctx.moveTo(renderX, renderY - flareLen);
          ctx.lineTo(renderX, renderY + flareLen);
          ctx.stroke();
        }
      }

      // Render shooting stars
      if (isDark) {
        if (Date.now() > nextMeteorTime) {
          spawnMeteor();
          nextMeteorTime = Date.now() + Math.random() * 4000 + 2000;
        }

        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.x += m.vx;
          m.y += m.vy;
          m.life -= m.decay;

          if (m.life <= 0 || m.x > width + 100 || m.y > height + 100) {
            meteors.splice(i, 1);
            continue;
          }

          const tailX = m.x - (m.vx / 18) * m.length;
          const tailY = m.y - (m.vy / 18) * m.length;

          const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
          grad.addColorStop(0, m.color);
          grad.addColorStop(0.25, `rgba(56, 189, 248, ${m.life * 0.9})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.globalAlpha = m.life;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          // Bright glowing star head
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(m.x, m.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className={`sky ${isDark ? 'sky--dark' : 'sky--light'}`} id="sky" aria-hidden="true">
      {/* Living Dynamic Canvas Starfield with Moving, Drifting Stars & Meteors */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="sky__glow"></div>

      {/* Floating Atmospheric Cloud Layers */}
      <div className="sky__clouds-layer">
        <div className="sky-floating-cloud sky-floating-cloud--1"></div>
        <div className="sky-floating-cloud sky-floating-cloud--2"></div>
        <div className="sky-floating-cloud sky-floating-cloud--3"></div>
      </div>

      {/* 3D Background Elements Layer (Dark Mode Desktop Only - Removed in Day Mode & Phone Mode) */}
      {isDark && (
        <div className="sky-3d-backdrop sky-3d--dark hidden md:block" aria-hidden="true">
          {/* 1. Dark Mode: 3D Cosmic Wireframe Cube (Top-Left Background) */}
          <div className="bg-3d-element bg-3d-element--top-left">
            <div className="bg-3d-cosmic-cube">
              <div className="cube-face cube-face--front"></div>
              <div className="cube-face cube-face--back"></div>
              <div className="cube-face cube-face--right"></div>
              <div className="cube-face cube-face--left"></div>
              <div className="cube-face cube-face--top"></div>
              <div className="cube-face cube-face--bottom"></div>
              <div className="cube-glow-core"></div>
            </div>
          </div>

          {/* 2. Dark Mode: 3D Celestial Planet with Orbital Rings (Bottom-Left Background) */}
          <div className="bg-3d-element bg-3d-element--bottom-left">
            <div className="bg-3d-saturn">
              <div className="saturn-body"></div>
              <div className="saturn-ring saturn-ring--1"></div>
              <div className="saturn-ring saturn-ring--2"></div>
            </div>
          </div>

          {/* 3. Dark Mode: 3D Pulsating Astral Diamond (Middle-Left Background) */}
          <div className="bg-3d-element bg-3d-element--mid-left">
            <div className="bg-3d-astral-prism">
              <div className="prism-facet prism-facet--top"></div>
              <div className="prism-facet prism-facet--bottom"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
