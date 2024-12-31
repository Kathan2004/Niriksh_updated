import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ApprovalFilters } from '../../components/approvals/ApprovalFilters';
import { ApprovalTable } from '../../components/approvals/ApprovalTable';
import type { Approval } from '@/components/types/approvals';
const approvals: Approval[] = [
  {
    id: 'APR-2024-001',
    requestType: 'Domain Takedown',
    status: 'In Review',
    priority: 'High',
    requestedBy: 'Karad',
    requestedDate: '2024-03-21',
    description: 'Urgent takedown request for phishing domain',
    assignedTo: 'Admin Team',
    domain: 'example.com'
  },
  {
    id: 'APR-2024-002',
    requestType: 'Asset Access',
    status: 'Pending',
    priority: 'Medium',
    requestedBy: 'Chinnalpatti',
    requestedDate: '2024-03-20',
    description: 'Request for access to monitoring dashboard',
    assignedTo: 'Security Team',
    domain: 'test.com'
  },
  {
    id: 'APR-2024-003',
    requestType: 'Policy Exception',
    status: 'In Review',
    priority: 'Low',
    requestedBy: 'Sahil',
    requestedDate: '2024-03-19',
    description: 'Temporary exception for development environment',
    assignedTo: 'Compliance Team',
    domain: 'demo.com'
  }
];

export function Approvals() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    severity: 'all',
    domain: 'all'
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredApprovals = approvals.filter(approval => {
    const matchesSearch = 
      approval.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.requestType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filters.status === 'all' || 
      approval.status.toLowerCase() === filters.status.toLowerCase();
    
    const matchesType = filters.type === 'all' || 
      approval.requestType.toLowerCase().includes(filters.type.toLowerCase());
    
    const matchesSeverity = filters.severity === 'all' || 
      approval.priority.toLowerCase() === filters.severity.toLowerCase();
    
    const matchesDomain = filters.domain === 'all' || 
      approval.domain === filters.domain;

    return matchesSearch && matchesStatus && matchesType && matchesSeverity && matchesDomain;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Approvals in Progress</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search approvals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 bg-white dark:bg-gray-700"
              />
            </div>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {showFilters && (
          <div className="mb-6">
            <ApprovalFilters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        )}

        <ApprovalTable approvals={filteredApprovals} />
      </div>
    </div>
  );
}