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

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-purple-900/30 dark:to-gray-900" />
      <ParticleNetwork />
      <motion.div
        initial={false}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}