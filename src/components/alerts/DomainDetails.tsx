import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

interface DomainDetailsProps {
  domain: string;
  timestamp: string;
  similarity: {
    score: string;
    matchingElements: string[];
  };
}

export function DomainDetails({ domain, timestamp, similarity }: DomainDetailsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{domain}</h2>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Detected: {timestamp}</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Complete Details
        </button>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Domain Similarity</h3>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-900 dark:text-white font-medium">Similarity Score</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">{similarity.score}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {similarity.matchingElements.map((element, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <span className="text-sm">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}