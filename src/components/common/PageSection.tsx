import React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageSection({ children, className = '' }: PageSectionProps) {
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-purple-900/50 dark:to-gray-900/50 backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          {children}
        </div>
      </div>
    </section>
  );
}
