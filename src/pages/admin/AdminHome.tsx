import React from 'react';
import { Activity, AlertTriangle, Shield, Link2, Server } from 'lucide-react';

// Mock data for charts
const typoStats = {
  total: 156,
  increase: 12,
  breakdown: {
    phishing: 45,
    malware: 23,
    scam: 88
  }
};

const severityData = {
  high: 34,
  medium: 89,
  low: 33
};

const recentAlerts = [
  {
    id: 1,
    domain: 'example-phish.com',
    type: 'Phishing',
    severity: 'High',
    detected: '2 hours ago'
  },
  {
    id: 2,
    domain: 'brand-spoof.net',
    type: 'Brand Abuse',
    severity: 'Medium',
    detected: '4 hours ago'
  },
  {
    id: 3,
    domain: 'malware-site.com',
    type: 'Malware',
    severity: 'High',
    detected: '6 hours ago'
  }
];

const integrations = [
  {
    name: 'Splunk',
    status: 'Connected',
    icon: Server
  },
  {
    name: 'IBM QRadar',
    status: 'Connected',
    icon: Shield
  },
  {
    name: 'Elastic SIEM',
    status: 'Pending',
    icon: Activity
  }
];

export function AdminHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
              +{typoStats.increase}%
              <Activity className="w-4 h-4" />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {typoStats.total}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Total Threats Detected</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {severityData.high}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">High Severity Alerts</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
              <Link2 className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {typoStats.breakdown.phishing}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Active Phishing Campaigns</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {integrations.length}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Active Integrations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Alerts</h2>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{alert.domain}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{alert.type}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'High'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {alert.severity}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{alert.detected}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Severity Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Severity Breakdown</h2>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full border-8 border-red-500 dark:border-red-400 flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{severityData.high}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">High</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full border-8 border-yellow-500 dark:border-yellow-400 flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{severityData.medium}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Medium</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full border-8 border-green-500 dark:border-green-400 flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{severityData.low}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Low</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations & Documentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SIEM Integrations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">SIEM Integrations</h2>
          <div className="space-y-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <integration.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{integration.name}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  integration.status === 'Connected'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                }`}>
                  {integration.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation & Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Documentation & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">API Documentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete API reference and integration guides
              </p>
            </a>
            <a
              href="#"
              className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">User Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn how to use all features effectively
              </p>
            </a>
            <a
              href="#"
              className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Best Practices</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Security recommendations and guidelines
              </p>
            </a>
            <a
              href="#"
              className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Release Notes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Latest updates and feature releases
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}