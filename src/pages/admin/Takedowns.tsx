import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, AlertTriangle, Globe, Shield } from 'lucide-react';

interface Takedown {
  id: string;
  domain: string;
  type: string;
  status: 'Active' | 'Inactive' | 'Closed' | 'Canceled';
  priority: 'High' | 'Medium' | 'Low';
  requestedBy: string;
  requestedDate: string;
}

const takedowns: Takedown[] = [
  {
    id: 'TD-2024-001',
    domain: 'example-phish.com',
    type: 'Phishing',
    status: 'Active',
    priority: 'High',
    requestedBy: 'Karad',
    requestedDate: '2024-03-20'
  },
  {
    id: 'TD-2024-002',
    domain: 'fake-brand.net',
    type: 'Brand Abuse',
    status: 'Closed',
    priority: 'Medium',
    requestedBy: 'Chinnalpatti',
    requestedDate: '2024-03-19'
  },
  {
    id: 'TD-2024-003',
    domain: 'malware-site.org',
    type: 'Malware',
    status: 'Active',
    priority: 'High',
    requestedBy: 'admin',
    requestedDate: '2024-03-18'
  }
];

export function Takedowns() {
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddTakedownModal, setShowAddTakedownModal] = useState(false);
  const [newTakedown, setNewTakedown] = useState<Takedown>({
    id: '',
    domain: '',
    type: '',
    status: 'Active',
    priority: 'Medium',
    requestedBy: '',
    requestedDate: ''
  });

  const filteredTakedowns = takedowns.filter(takedown => {
    const matchesSearch = takedown.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         takedown.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || takedown.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleAddTakedown = () => {
    const newTakedownWithId = { ...newTakedown, id: `TD-${Date.now()}` }; 
    takedowns.push(newTakedownWithId); 
    setShowAddTakedownModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Takedown Requests</h1>
        <button
          onClick={() => setShowAddTakedownModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          New Takedown
        </button>
      </div>

      {/* Add Takedown Modal */}
      {showAddTakedownModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Add New Takedown</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Domain</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-2 dark:bg-gray-700 dark:text-gray-100"
                value={newTakedown.domain}
                onChange={(e) => setNewTakedown({ ...newTakedown, domain: e.target.value })}
                placeholder="Enter the domain"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Type</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-2 dark:bg-gray-700 dark:text-gray-100"
                value={newTakedown.type}
                onChange={(e) => setNewTakedown({ ...newTakedown, type: e.target.value })}
                placeholder="Enter the type of takedown (e.g., Phishing)"
              />
            </div>
            <div className="mb-4">
<label className="block text-sm font-medium text-gray-900 dark:text-white">Requested By</label>

              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-2 dark:bg-gray-700 dark:text-gray-100"
                value={newTakedown.requestedBy}
                onChange={(e) => setNewTakedown({ ...newTakedown, requestedBy: e.target.value })}
                placeholder="Enter the requester name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Requested Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-2 dark:bg-gray-700 dark:text-gray-100"
                value={newTakedown.requestedDate}
                onChange={(e) => setNewTakedown({ ...newTakedown, requestedDate: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowAddTakedownModal(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTakedown}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Add Takedown
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Search and Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search takedowns..."
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
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="closed">Closed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </div>
        )}

        {/* Takedowns Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Domain</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Priority</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Requested By</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTakedowns.map((takedown) => (
                <tr
                  key={takedown.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <Link
                      to={`/admin/takedowns/${takedown.id}`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      {takedown.id}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{takedown.domain}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{takedown.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-4 py-2 rounded-lg text-sm ${
                        takedown.status === 'Active'
                          ? 'bg-green-200 text-green-800'
                          : takedown.status === 'Inactive'
                          ? 'bg-gray-200 text-gray-800'
                          : takedown.status === 'Closed'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {takedown.status}
                    </span>
                  </td>
                   <td className="px-4 py-4 text-gray-900 dark:text-white">{takedown.priority}</td>
      <td className="px-4 py-4 text-gray-900 dark:text-white">{takedown.requestedBy}</td>
      <td className="px-4 py-4 text-gray-900 dark:text-white">{takedown.requestedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
