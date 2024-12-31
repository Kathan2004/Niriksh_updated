import React from 'react';
import { Calendar, User, Activity, AlertTriangle, Globe, Server } from 'lucide-react';

interface AssetSummaryProps {
  asset: {
    id: string;
    domain: string;
    type: string;
    status: string;
    priority: string;
    requestedBy: string;
    requestedDate: string;
    hostingProvider: string;
    ipAddress: string;
  };
}

export function TakedownAssetSummary({ asset }: AssetSummaryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Asset Summary</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Domain</p>
              <p className="text-gray-900 dark:text-white">{asset.domain}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Hosting Provider</p>
              <p className="text-gray-900 dark:text-white">{asset.hostingProvider}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Requested Date</p>
              <p className="text-gray-900 dark:text-white">{asset.requestedDate}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Requested By</p>
              <p className="text-gray-900 dark:text-white">{asset.requestedBy}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                asset.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {asset.status}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Priority</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                asset.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {asset.priority}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}