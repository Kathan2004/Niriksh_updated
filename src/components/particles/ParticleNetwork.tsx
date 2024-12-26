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
    const particleCount = 150;  // Increased number of particles
    const maxDistance = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const createParticles = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        // Randomly place particles across the screen but avoid the center too much
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;

        // Avoid placing particles too close to the center
        if (Math.abs(x - centerX) < 150 && Math.abs(y - centerY) < 150) {
          continue;
        }

        // Slight randomness to create organic patterns
        const vx = (Math.random() - 0.5) * 2;
        const vy = (Math.random() - 0.5) * 2;

        particles.push({
          x,
          y,
          vx,
          vy,
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

        // Connect particles with lines, making sure to avoid too many center connections
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
