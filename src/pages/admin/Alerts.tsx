import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, AlertTriangle, Globe, Shield } from 'lucide-react';

interface Alert {
  id: string;
  domain: string;
  type: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Investigating' | 'Resolved';
  detectedAt: string;
  lastUpdated: string;
}

const alerts: Alert[] = [
  {
    id: 'ALERT-001',
    domain: 'suspicious-login.com',
    type: 'Phishing',
    severity: 'High',
    status: 'Active',
    detectedAt: '2024-03-21 14:30',
    lastUpdated: '2024-03-21 14:35'
  },
  {
    id: 'ALERT-002',
    domain: 'brand-spoof.net',
    type: 'Brand Abuse',
    severity: 'Medium',
    status: 'Investigating',
    detectedAt: '2024-03-21 13:15',
    lastUpdated: '2024-03-21 13:45'
  },
  {
    id: 'ALERT-003',
    domain: 'malware-site.org',
    type: 'Malware',
    severity: 'High',
    status: 'Resolved',
    detectedAt: '2024-03-21 10:20',
    lastUpdated: '2024-03-21 11:30'
  }
];

export function Alerts() {
  const [showFilters, setShowFilters] = useState(false);
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || alert.severity.toLowerCase() === severityFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || alert.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Security Alerts</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Search and Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search alerts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 bg-white dark:bg-gray-700"
              />
            </div>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"

          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {showFilters && (
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex gap-4">
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              >
                <option value="all">All Severities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="investigating">Investigating</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        )}

        {/* Alerts Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Alert ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Domain</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Severity</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Detected</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {filteredAlerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <Link
                      to={`/admin/alerts/${alert.id}`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      {alert.id}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{alert.domain}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{alert.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      alert.severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                      alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                      'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      alert.status === 'Active' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                      alert.status === 'Investigating' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                      'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{alert.detectedAt}</td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{alert.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}