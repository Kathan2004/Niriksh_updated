import React from "react";


interface ApprovalFiltersProps {
  filters: {
    status: string;
    type: string;
    severity: string;
    domain: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export function ApprovalFilters({ filters, onFilterChange }: ApprovalFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Status
        </label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="in review">In Review</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Type
        </label>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
        >
          <option value="all">All Types</option>
          <option value="domain">Domain Takedown</option>
          <option value="asset">Asset Access</option>
          <option value="policy">Policy Exception</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Severity
        </label>
        <select
          value={filters.severity}
          onChange={(e) => onFilterChange('severity', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
        >
          <option value="all">All Severity</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Domain
        </label>
        <select
          value={filters.domain}
          onChange={(e) => onFilterChange('domain', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
        >
          <option value="all">All Domains</option>
          <option value="example.com">example.com</option>
          <option value="test.com">test.com</option>
          <option value="demo.com">demo.com</option>
        </select>
      </div>
    </div>
  );
}