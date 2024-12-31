import React from 'react';
import { Server, Globe } from 'lucide-react';

interface DnsPanelProps {
  data: {
    aRecords: string[];
    nsRecords: string[];
    mxRecords: string[];
    txtRecords: string[];
  };
}

export function DnsPanel({ data }: DnsPanelProps) {
  const renderRecordSection = (title: string, records: string[], icon: React.ReactNode) => (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{title}</h4>
      {records && records.length > 0 ? (
        <div className="space-y-2">
          {records.map((record, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-900 dark:text-white"
            >
              {icon}
              <span>{record}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 dark:text-gray-500 text-sm">No records found</div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">DNS Records</h3>

      <div className="space-y-4">
        {renderRecordSection('A Records', data.aRecords || [], 
          <Server className="w-4 h-4 text-gray-400" />
        )}
        
        {renderRecordSection('NS Records', data.nsRecords || [], 
          <Globe className="w-4 h-4 text-gray-400" />
        )}
        
        {renderRecordSection('MX Records', data.mxRecords || [], 
          <Server className="w-4 h-4 text-gray-400" />
        )}
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">TXT Records</h4>
          {data.txtRecords && data.txtRecords.length > 0 ? (
            <div className="space-y-2">
              {data.txtRecords.map((record, index) => (
                <div
                  key={index}
                  className="text-gray-900 dark:text-white text-sm font-mono break-all"
                >
                  {record}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 dark:text-gray-500 text-sm">No TXT records found</div>
          )}
        </div>
      </div>
    </div>
  );
}