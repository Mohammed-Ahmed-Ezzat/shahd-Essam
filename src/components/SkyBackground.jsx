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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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

    // 160-200 dynamic moving stars with 3D depth layers
    const starCount = isDark ? 180 : 80;
    const stars = Array.from({ length: starCount }, () => {
      const depth = Math.random() * 0.8 + 0.2; // 0.2 (distant) to 1.0 (close)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 * depth + 0.5,
        vx: (Math.random() * 0.2 + 0.06) * depth, // gentle drift to the right
        vy: (Math.random() * 0.1 - 0.03) * depth, // slight upward/downward angle
        depth,
        baseAlpha: Math.random() * 0.45 + (isDark ? 0.35 : 0.15),
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.03 + 0.012,
        twinkleOffset: Math.random() * Math.PI * 2,
        color:
          depth > 0.75
            ? '#FFFFFF'
            : depth > 0.45
            ? Math.random() > 0.5 ? '#7DD3FC' : '#BAE6FD'
            : Math.random() > 0.5 ? '#FEF08A' : '#C4B5FD',
      };
    });

    // Shooting stars / meteors
    const meteors = [];
    let nextMeteorTime = Date.now() + Math.random() * 3500 + 1500;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.75 + width * 0.1;
      const startY = Math.random() * height * 0.35;
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 14 + 16;
      const length = Math.random() * 100 + 70;

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 1.0,
        decay: Math.random() * 0.025 + 0.018,
        color: Math.random() > 0.4 ? '#38BDF8' : '#FFFFFF',
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
        if (s.x > width + 10) s.x = -10;
        if (s.x < -10) s.x = width + 10;
        if (s.y > height + 10) s.y = -10;
        if (s.y < -10) s.y = height + 10;

        // Parallax coordinates
        const renderX = s.x - shiftX * s.depth;
        const renderY = s.y - shiftY * s.depth;

        // Twinkling sine wave
        const alpha = Math.max(
          0.08,
          Math.min(1, s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.38)
        );

        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Atmospheric halo for prominent stars
        if (isDark && s.size > 1.4 && alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, s.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
          ctx.fill();
        }
      }

      // Render shooting stars
      if (isDark) {
        if (Date.now() > nextMeteorTime) {
          spawnMeteor();
          nextMeteorTime = Date.now() + Math.random() * 5000 + 3000;
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
          grad.addColorStop(0.3, `rgba(56, 189, 248, ${m.life * 0.85})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.globalAlpha = m.life;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.0;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          // Bright glowing star head
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(m.x, m.y, 2.0, 0, Math.PI * 2);
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

      {/* 3D Background Elements Layer (Far Left / Margins - Completely Clear of Folders & Figure) */}
      <div className={`sky-3d-backdrop ${isDark ? 'sky-3d--dark' : 'sky-3d--day'}`} aria-hidden="true">
        {isDark ? (
          <>
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
          </>
        ) : (
          <>
            {/* 1. Day Mode: 3D Vibrant Azure-Cyan Faceted Crystal (Top-Left Background) */}
            <div className="bg-3d-element bg-3d-element--top-left">
              <div className="bg-3d-day-crystal">
                <div className="crystal-face crystal-face--1"></div>
                <div className="crystal-face crystal-face--2"></div>
                <div className="crystal-face crystal-face--3"></div>
                <div className="crystal-face crystal-face--4"></div>
                <div className="crystal-face crystal-face--5"></div>
                <div className="crystal-face crystal-face--6"></div>
                <div className="crystal-core"></div>
              </div>
            </div>

            {/* 2. Day Mode: 3D Radiant Golden-Amber Solar Orb with Orbital Rings (Bottom-Left Background) */}
            <div className="bg-3d-element bg-3d-element--bottom-left">
              <div className="bg-3d-day-solar">
                <div className="solar-body"></div>
                <div className="solar-ring solar-ring--1"></div>
                <div className="solar-ring solar-ring--2"></div>
                <div className="solar-glow"></div>
              </div>
            </div>

            {/* 3. Day Mode: 3D Vibrant Chromatic Coral-Violet Gem (Middle-Left Background) */}
            <div className="bg-3d-element bg-3d-element--mid-left">
              <div className="bg-3d-day-gem">
                <div className="gem-face gem-face--top"></div>
                <div className="gem-face gem-face--bottom"></div>
                <div className="gem-face gem-face--glow"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
