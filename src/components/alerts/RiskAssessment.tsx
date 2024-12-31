import React from 'react';
import { AlertOctagon } from 'lucide-react';

interface RiskAssessmentProps {
  id: string;
  risk: {
    level: string;
    score: number;
    indicators: string[];
  };
}

export function RiskAssessment({ id, risk }: RiskAssessmentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <AlertOctagon className="w-8 h-8 text-red-600 dark:text-red-400" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Risk Assessment</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Alert ID: {id}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-full text-sm font-medium">
          {risk.level} Risk
        </span>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center transform -rotate-45">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">{risk.score}</div>
              <div className="text-sm text-red-600 dark:text-red-400">Risk Score</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Risk Indicators</h3>
        <ul className="space-y-2">
          {risk.indicators.map((indicator, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full" />
              <span className="text-sm">{indicator}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}