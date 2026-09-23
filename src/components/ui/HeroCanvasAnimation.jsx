import React, { useEffect, useRef } from 'react';

/**
 * HeroCanvasAnimation
 * 
 * Specially designed for ACCEL 7.0 (Business, Entrepreneurship, Sustainability & Innovation Expo):
 * - Dynamic Harmonic Growth Waves (Emerald Sustainability, Royal Sapphire Trust, Solar Gold Wealth/Momentum)
 * - Rising Luminous Growth Embers & Bokeh Orbs (Startups, Ventures & Rising Ideas)
 * - Interactive Cursor Aura & Ripple
 * - Non-IT, high-end Corporate Summit / Global Forum aesthetic (e.g. World Economic Forum, Bloomberg Green)
 */
export default function HeroCanvasAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let time = 0;

    // Interactive mouse / touch state
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 200,
      active: false
    };

    // Rising Growth Embers / Idea Sparks
    let embers = [];
    // Ambient floating halo orbs
    let haloOrbs = [];

    const emberColors = [
      { r: 245, g: 158, b: 11, name: 'gold' },      // Solar Gold (Business / Wealth / Acceleration)
      { r: 251, g: 191, b: 36, name: 'amber' },     // Bright Amber
      { r: 16, g: 185, b: 129, name: 'emerald' },   // Sustainability Emerald
      { r: 52, g: 211, b: 153, name: 'mint' },      // Mint Green
      { r: 56, g: 189, b: 248, name: 'cyan' },      // Innovation Cyan
    ];

    const initSize = () => {
      const currentW = canvas.clientWidth || window.innerWidth;
      const currentH = canvas.clientHeight || 700;

      // Optimize for mobile: ignore small vertical resizes (address bar showing/hiding)
      if (w === currentW && Math.abs(h - currentH) < 150 && w !== 0) {
        return;
      }

      w = currentW;
      h = currentH;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Initialize rising embers (optimized count for responsiveness: 20 - 60)
      const emberCount = Math.min(60, Math.max(20, Math.floor((w * h) / 20000)));
      embers = Array.from({ length: emberCount }, () => createEmber(true));

      // Ambient background soft orbs
      haloOrbs = [
        {
          x: w * 0.18,
          y: h * 0.35,
          baseRadius: Math.min(w, h) * 0.38,
          color: 'rgba(16, 185, 129, 0.08)', // Emerald
          vx: 0.15,
          vy: 0.1,
          phase: 0
        },
        {
          x: w * 0.82,
          y: h * 0.45,
          baseRadius: Math.min(w, h) * 0.42,
          color: 'rgba(30, 95, 191, 0.12)', // Sapphire
          vx: -0.12,
          vy: 0.08,
          phase: Math.PI / 2
        },
        {
          x: w * 0.5,
          y: h * 0.7,
          baseRadius: Math.min(w, h) * 0.32,
          color: 'rgba(245, 158, 11, 0.07)', // Gold
          vx: 0.08,
          vy: -0.14,
          phase: Math.PI
        }
      ];
    };

    function createEmber(randomY = false) {
      const color = emberColors[Math.floor(Math.random() * emberColors.length)];
      const radius = Math.random() * 2.5 + 1.0;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + Math.random() * 40,
        radius,
        baseRadius: radius,
        color,
        vy: Math.random() * 0.6 + 0.3, // Upward speed
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmp: Math.random() * 35 + 15,
        phase: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.6 + 0.3,
        maxAlpha: Math.random() * 0.5 + 0.4,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      };
    }

    // Optimization: Avoid getBoundingClientRect during mouse move to prevent reflows
    const onMouseMove = (e) => {
      // Approximate position without reflow (good enough for background effects)
      const rectTop = canvas.offsetTop || 0; 
      const rectLeft = canvas.offsetLeft || 0;
      mouse.targetX = e.clientX - rectLeft;
      mouse.targetY = e.clientY - rectTop;
      mouse.active = true;
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rectTop = canvas.offsetTop || 0;
        const rectLeft = canvas.offsetLeft || 0;
        mouse.targetX = e.touches[0].clientX - rectLeft;
        mouse.targetY = e.touches[0].clientY - rectTop;
        mouse.active = true;
      }
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    // Wave parameters (Business Momentum & Sustainability Harmonic Waves)
    const waveLayers = [
      {
        baseY: 0.78,
        amplitude: 34,
        frequency: 0.0032,
        speed: 0.014,
        phase: 0,
        gradientStart: 'rgba(16, 185, 129, 0.16)', 
        gradientEnd: 'rgba(5, 150, 105, 0.0)',
        stroke: 'rgba(52, 211, 153, 0.5)',
        strokeWidth: 1.5,
      },
      {
        baseY: 0.84,
        amplitude: 42,
        frequency: 0.0026,
        speed: -0.011,
        phase: 2.1,
        gradientStart: 'rgba(30, 95, 191, 0.18)', 
        gradientEnd: 'rgba(13, 27, 76, 0.0)',
        stroke: 'rgba(96, 165, 250, 0.55)',
        strokeWidth: 1.8,
      },
      {
        baseY: 0.89,
        amplitude: 28,
        frequency: 0.0040,
        speed: 0.018,
        phase: 4.3,
        gradientStart: 'rgba(245, 158, 11, 0.13)', 
        gradientEnd: 'rgba(217, 119, 6, 0.0)',
        stroke: 'rgba(251, 191, 36, 0.65)',
        strokeWidth: 2,
      },
      {
        baseY: 0.94,
        amplitude: 22,
        frequency: 0.0035,
        speed: -0.016,
        phase: 1.2,
        gradientStart: 'rgba(6, 182, 212, 0.12)', 
        gradientEnd: 'rgba(8, 18, 53, 0.0)',
        stroke: 'rgba(34, 188, 203, 0.45)',
        strokeWidth: 1.2,
      }
    ];

    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);

      if (!isHeroInView) return;

      time += 0.016;

      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.05;
        mouse.y += (-9999 - mouse.y) * 0.05;
      }

      ctx.clearRect(0, 0, w, h);

      // 1. Draw Ambient Floating Halo Orbs
      haloOrbs.forEach(orb => {
        orb.phase += 0.01;
        const currentX = orb.x + Math.sin(orb.phase * 0.5) * 40;
        const currentY = orb.y + Math.cos(orb.phase * 0.4) * 25;
        const r = orb.baseRadius + Math.sin(orb.phase) * 20;

        const radGrad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, r);
        radGrad.addColorStop(0, orb.color);
        radGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Interactive Cursor Spotlight
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const mouseGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 220
        );
        mouseGrad.addColorStop(0, 'rgba(251, 191, 36, 0.12)'); 
        mouseGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.07)'); 
        mouseGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw Dynamic Growth Waves
      waveLayers.forEach(layer => {
        const yBase = h * layer.baseY;
        layer.phase += layer.speed;

        ctx.beginPath();
        ctx.moveTo(0, h);

        const step = 16;
        for (let x = 0; x <= w + step; x += step) {
          const sin1 = Math.sin(x * layer.frequency + layer.phase);
          const sin2 = Math.sin(x * (layer.frequency * 1.8) + layer.phase * 0.7) * 0.35;
          const sin3 = Math.cos(x * (layer.frequency * 0.6) - layer.phase * 1.2) * 0.25;
          
          let y = yBase + (sin1 + sin2 + sin3) * layer.amplitude;

          if (mouse.active) {
            const dist = Math.abs(x - mouse.x);
            if (dist < 200) {
              const influence = (1 - dist / 200);
              const dy = mouse.y - y;
              y += Math.sin(dist * 0.05 - time * 4) * influence * 16 + (dy * 0.08 * influence);
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - layer.amplitude * 2, 0, h);
        grad.addColorStop(0, layer.gradientStart);
        grad.addColorStop(1, layer.gradientEnd);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = layer.stroke;
        ctx.lineWidth = layer.strokeWidth;
        ctx.stroke();
      });

      // 4. Draw Rising Luminous Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];

        e.y -= e.vy;
        e.phase += e.swaySpeed;
        e.x += Math.sin(e.phase) * (e.swayAmp * 0.03);

        if (mouse.active) {
          const dx = e.x - mouse.x;
          const dy = e.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150 && dist > 0) {
            const force = (1 - dist / 150) * 1.2;
            e.x += (dx / dist) * force * 1.5;
            e.y += (dy / dist) * force * 1.5;
            e.radius = e.baseRadius + force * 2;
          } else {
            e.radius = e.baseRadius;
          }
        } else {
          e.radius = e.baseRadius;
        }

        const currentAlpha = Math.min(e.maxAlpha, e.alpha + Math.sin(time * 3 + e.phase) * 0.2);

        if (e.y < -30 || e.x < -40 || e.x > w + 40) {
          embers[i] = createEmber(false);
          continue;
        }

        const rad = Math.max(0.8, e.radius);
        const glowRadius = rad * 4.5;
        const glowGrad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, glowRadius);
        glowGrad.addColorStop(0, `rgba(${e.color.r}, ${e.color.g}, ${e.color.b}, ${currentAlpha})`);
        glowGrad.addColorStop(0.35, `rgba(${e.color.r}, ${e.color.g}, ${e.color.b}, ${currentAlpha * 0.45})`);
        glowGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, currentAlpha * 1.2)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, rad * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let isHeroInView = true;
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroInView = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    heroObserver.observe(canvas);

    // Throttle resize events to prevent excessive recalculations
    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initSize, 100);
    };

    initSize();
    window.addEventListener('resize', handleResize);
    
    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchstart', onTouchMove, { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave, { passive: true });
    canvas.addEventListener('touchend', onMouseLeave, { passive: true });

    draw();

    return () => {
      heroObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchstart', onTouchMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchend', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
