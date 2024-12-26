import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = [];
    const particleCount = 80;
    const maxDistance = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const createParticles = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        // Create particles around the center, but spread them outwards
        const distanceFromCenter = Math.random() * canvasWidth * 0.4 + 100; // Spread particles farther out from the center
        const angle = Math.random() * Math.PI * 2; // Random angle

        const x = centerX + Math.cos(angle) * distanceFromCenter;
        const y = centerY + Math.sin(angle) * distanceFromCenter;

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: isDark
            ? Math.random() > 0.5
              ? 'rgba(147, 51, 234, 0.4)' // Dark purple with less opacity
              : 'rgba(100, 100, 150, 0.4)' // Muted bluish tone with less opacity
            : Math.random() > 0.5
            ? 'rgba(147, 51, 234, 0.8)' // Light purple
            : 'rgba(255, 255, 255, 0.6)', // Soft white
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off canvas edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles with lines
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(147, 51, 234, ${opacity * 0.5})` // Darker purple lines with less opacity
              : `rgba(147, 51, 234, ${opacity})`; // Light purple lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -2,
        mixBlendMode: 'lighten',
      }}
    />
  );
}
