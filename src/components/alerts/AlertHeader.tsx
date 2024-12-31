import React from 'react';
import { Globe, Calendar } from 'lucide-react';

interface AlertHeaderProps {
  domain: string;
  timestamp: string;
}

export function AlertHeader({ domain, timestamp }: AlertHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{domain}</h2>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Calendar className="w-5 h-5" />
        <span>Alert Generated: {timestamp}</span>
      </div>
    </div>
  );
}