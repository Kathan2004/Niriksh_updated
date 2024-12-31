import React from 'react';
import { Calendar, User, MapPin } from 'lucide-react';

interface WhoisPanelProps {
  data: {
    registrar: string;
    createdDate: string;
    expiryDate: string;
    registrant: {
      organization: string;
      country: string;
    };
  };
}

export function WhoisPanel({ data }: WhoisPanelProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">WHOIS Information</h3>
      
      <div className="grid gap-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Registrar</h4>
          <p className="text-gray-900 dark:text-white">{data.registrar}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Created Date</h4>
            </div>
            <p className="text-gray-900 dark:text-white">{data.createdDate}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Expiry Date</h4>
            </div>
            <p className="text-gray-900 dark:text-white">{data.expiryDate}</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-gray-400" />
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Registrant</h4>
          </div>
          <p className="text-gray-900 dark:text-white mb-2">{data.registrant.organization}</p>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{data.registrant.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}