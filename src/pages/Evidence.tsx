import React from 'react';
import { EvidenceUploader } from '../components/evidence/EvidenceUploader';
import { File, HardDrive, Network } from 'lucide-react';

const evidenceItems = [
  {
    id: 1,
    type: 'Disk Image',
    name: 'System_C_Drive.dd',
    size: '120 GB',
    status: 'Analyzing',
    progress: 45,
    icon: HardDrive
  },
  {
    id: 2,
    type: 'Network Capture',
    name: 'Network_Traffic.pcap',
    size: '2.3 GB',
    status: 'Completed',
    progress: 100,
    icon: Network
  },
  {
    id: 3,
    type: 'System Logs',
    name: 'Security_Events.log',
    size: '450 MB',
    status: 'Queued',
    progress: 0,
    icon: File
  }
];

export function Evidence() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Digital Evidence Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upload, manage, and analyze digital evidence securely
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EvidenceUploader />

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Evidence
          </h2>

          <div className="space-y-4">
            {evidenceItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.type} • {item.size}
                      </p>
                    </div>
                    <span className={`text-sm font-medium ${
                      item.status === 'Completed' 
                        ? 'text-green-600' 
                        : item.status === 'Analyzing'
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {item.status !== 'Queued' && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}