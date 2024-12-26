import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ParticleNetworkProps {
  seed: number;
}

export function ParticleNetwork({ seed }: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      createParticles(); // Adjust particles on resize
    };

    const random = seededRandom(seed); // Use seeded random generator
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const createParticles = () => {
      const area = canvas.width * canvas.height;
      const particleDensity = area > 500000 ? 0.00015 : 0.0003; // Lower density for larger screens
      const particleCount = Math.floor(area * particleDensity);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: random() * canvas.width,
          y: random() * canvas.height,
          vx: (random() - 0.5) * 1,
          vy: (random() - 0.5) * 1,
          size: random() * 3 + 2,
        });
      }
    };

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;
      setTimeout(() => (isMouseMoving = false), 100);
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * 0.4;
            particle.vy -= Math.sin(angle) * 0.4;
          }
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? 'rgba(147, 51, 234, 0.8)'
          : 'rgba(147, 51, 234, 0.6)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * (isDark ? 0.6 : 0.4);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark, seed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'auto',
        zIndex: -3,
        opacity: 0.8,
        mixBlendMode: 'lighten',
      }}
    />
  );
}

// Seeded random generator function
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}
