import React from 'react';
import { AlertTriangle, Activity } from 'lucide-react';

interface RiskDetailsProps {
  risk: {
    level: string;
    score: number;
    type: string;
    indicators: string[];
  };
}

export function RiskDetails({ risk }: RiskDetailsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Risk Assessment</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            risk.level === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
          }`}>
            {risk.level} Risk
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="w-32 h-32 mx-auto relative">
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">{risk.score}</div>
              <div className="text-sm text-red-600 dark:text-red-400">Risk Score</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Risk Indicators</h4>
        <ul className="space-y-2">
          {risk.indicators.map((indicator, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Activity className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm">{indicator}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}