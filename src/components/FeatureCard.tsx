import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}