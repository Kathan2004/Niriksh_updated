import React from 'react';
import { Activity } from 'lucide-react';

interface ActivityLogEntry {
  id: number;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

interface ActivityLogProps {
  activities: ActivityLogEntry[];
}

export function TakedownActivityLog({ activities }: ActivityLogProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Activity Log</h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="relative pl-6 pb-6 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full" />
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{activity.timestamp}</div>
            <div className="font-medium text-gray-900 dark:text-white mb-1">{activity.action}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">{activity.details}</div>
            <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">By {activity.user}</div>
          </div>
        ))}
      </div>
    </div>
  );
}