import React, { useState } from 'react';
import { Clock, MessageSquare, Activity, AlertTriangle, Calendar, User, Filter, ChevronDown } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  user: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '2024-03-20 14:30',
    title: 'Takedown Request Initiated',
    description: 'Takedown request raised for phishing domain example-phish.com',
    user: 'Karad'
  },
  {
    date: '2024-03-20 15:45',
    title: 'Initial Assessment',
    description: 'Domain verified as malicious. Evidence collected.',
    user: 'Admin'
  },
  {
    date: '2024-03-21 09:15',
    title: 'Notice Sent',
    description: 'Takedown notice sent to hosting provider.',
    user: 'Sahil'
  }
];

const comments = [
  {
    id: 1,
    user: 'Karad',
    date: '2024-03-20 14:35',
    content: 'Domain appears to be using our brand assets. High priority takedown required.'
  },
  {
    id: 2,
    user: 'Admin',
    date: '2024-03-20 15:50',
    content: 'Evidence collected and documented. Proceeding with takedown notice.'
  }
];

const matchingAlerts = [
  {
    id: 1,
    type: 'Phishing',
    severity: 'High',
    date: '2024-03-20 14:25',
    description: 'Suspicious domain mimicking brand detected'
  },
  {
    id: 2,
    type: 'Brand Abuse',
    severity: 'Medium',
    date: '2024-03-20 14:28',
    description: 'Unauthorized use of logo detected'
  }
];

export function TakedownDetails() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {showFilters && (
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="closed">Closed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Timeline & Comments */}
        <div className="lg:col-span-2 space-y-8">
          {/* Takedown Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Takedown Summary
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Raised: March 20, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">By: Karad</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Status: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Priority: High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Timeline</h2>
            </div>
            
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-6 pb-6 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{event.date}</div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">{event.title}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{event.description}</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">By {event.user}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Comments</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{comment.user}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <textarea
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 bg-white dark:bg-gray-700"
                rows={3}
                placeholder="Add a comment..."
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Matching Alerts */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Matching Alerts</h2>
            </div>
            
            <div className="space-y-4">
              {matchingAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">{alert.type}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{alert.description}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-sm font-medium ${
                      alert.severity === 'High' ? 'text-red-600 dark:text-red-400' :
                      alert.severity === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {alert.severity}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{alert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info or Stats could go here */}
        </div>
      </div>
    </div>
  );
}