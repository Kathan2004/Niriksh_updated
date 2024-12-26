import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ParticleNetwork } from '../particles/ParticleNetwork';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Generate a seed based on location.pathname or another fixed value
  const seed = location.pathname
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0); // Deterministic seed

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/30 dark:to-gray-900" />
      <ParticleNetwork seed={seed} /> {/* Pass seed as a prop */}
      <motion.div
        initial={false}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
