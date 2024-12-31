import React, { useState } from 'react';
import { Plus, Search, Filter, ChevronDown } from 'lucide-react';
import { AssetForm } from '../../components/admin/assets/AssetForm';
import { AssetList } from '../../components/admin/assets/AssetList';
import { Modal } from '../../components/Modal';
import { useAdminStore } from '../../store/adminStore';

export function Assets() {
  const { assets, addAsset, deleteAsset } = useAdminStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const handleAddAsset = (assetData: { name: string; type: string; description: string }) => {
    addAsset(assetData);
    setShowAddModal(false);
  };

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || asset.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Assets</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Asset
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Search and Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search assets..."
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
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            >
              <option value="all">All Types</option>
              <option value="Domain">Domain</option>
              <option value="IP">IP Address</option>
              <option value="Server">Server</option>
            </select>
          </div>
        )}

        <AssetList assets={filteredAssets} onDelete={deleteAsset} />
      </div>

      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Add New Asset</h2>
          <AssetForm onSubmit={handleAddAsset} onCancel={() => setShowAddModal(false)} />
        </div>
      </Modal>
    </div>
  );
}