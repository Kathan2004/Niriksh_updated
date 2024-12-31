import React from 'react';
import { Globe, Server, Shield } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  type: string;
  status: string;
  createdBy: string;
  lastUpdated: string;
}

interface AssetListProps {
  assets: Asset[];
  onDelete: (id: string) => void;
}

export function AssetList({ assets, onDelete }: AssetListProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Domain':
        return Globe;
      case 'IP':
        return Shield;
      case 'Server':
        return Server;
      default:
        return Globe;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Created By</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            const Icon = getIcon(asset.type);
            return (
              <tr
                key={asset.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-900 dark:text-white">{asset.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{asset.type}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    asset.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{asset.createdBy}</td>
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{asset.lastUpdated}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => onDelete(asset.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}