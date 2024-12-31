import React from 'react';
import { Globe } from 'lucide-react';

interface WhoisDataProps {
  whois: {
    registrar: string;
    createdDate: string;
    expiryDate: string;
    registrant: {
      organization: string;
      country: string;
    };
  };
}

export function WhoisData({ whois }: WhoisDataProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">WHOIS Data</h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Registrar</p>
          <p className="font-medium text-gray-900 dark:text-white">{whois.registrar}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created Date</p>
            <p className="font-medium text-gray-900 dark:text-white">{whois.createdDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Expiry Date</p>
            <p className="font-medium text-gray-900 dark:text-white">{whois.expiryDate}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Registrant</p>
          <p className="font-medium text-gray-900 dark:text-white">{whois.registrant.organization}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{whois.registrant.country}</p>
        </div>
      </div>
    </div>
  );
}