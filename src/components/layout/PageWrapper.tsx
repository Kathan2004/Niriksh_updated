import React from 'react';
import { ParticleNetwork } from '../particles/ParticleNetwork';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}