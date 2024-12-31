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
    const particleCount = 200; // Number of particles
    const maxDistance = 150; // Max distance for connecting lines
    const centerMargin = 200; // Area to keep particles away from the center

    const createParticles = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        let x, y;

        // Place particles along the boundaries
        const side = Math.random();
        if (side < 0.25) {
          // Top edge
          x = Math.random() * canvasWidth;
          y = Math.random() * (centerMargin / 2);
        } else if (side < 0.5) {
          // Bottom edge
          x = Math.random() * canvasWidth;
          y = canvasHeight - Math.random() * (centerMargin / 2);
        } else if (side < 0.75) {
          // Left edge
          x = Math.random() * (centerMargin / 2);
          y = Math.random() * canvasHeight;
        } else {
          // Right edge
          x = canvasWidth - Math.random() * (centerMargin / 2);
          y = Math.random() * canvasHeight;
        }

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: isDark
            ? 'rgba(147, 51, 234, 0.2)' // Dark purple with lower opacity
            : 'rgba(255, 255, 255, 0.2)', // Soft white with lower opacity
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce particles off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Push particles away from the center
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

        if (distanceFromCenter < centerMargin) {
          particle.vx += dx / centerMargin;
          particle.vy += dy / centerMargin;
        }

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
            const opacity = (1 - distance / maxDistance) * 0.2; // Lower opacity for lines
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(147, 51, 234, ${opacity})` // Dark purple lines with reduced opacity
              : `rgba(255, 255, 255, ${opacity})`; // Light white lines with reduced opacity
            ctx.lineWidth = 0.5;
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