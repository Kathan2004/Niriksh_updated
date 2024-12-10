import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

export function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4">{subtitle}</h3>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">{title}</h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}