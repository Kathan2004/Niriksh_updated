import React from 'react';
import { CaseOverview } from '../components/dashboard/CaseOverview';
import { NetworkAnalysis } from '../components/analysis/NetworkAnalysis';

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Forensic Analysis Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor active cases, evidence analysis, and threat detection
        </p>
      </div>

      <div className="space-y-8">
        <CaseOverview />
        <NetworkAnalysis />
      </div>
    </div>
  );
}