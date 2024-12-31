import React from 'react';
import { Download } from 'lucide-react';

interface LogosPanelProps {
  data: {
    favicon: string;
    logos: string[];
  };
}

export function LogosPanel({ data }: LogosPanelProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Favicon</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 inline-block">
          {data.favicon ? (
            <img
              src={data.favicon}
              alt="Favicon"
              className="w-16 h-16"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-sm">No favicon</span>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Logos</h3>
        <div className="grid grid-cols-2 gap-4">
          {data.logos && data.logos.length > 0 ? (
            data.logos.map((logo, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
                <button
                  onClick={() => window.open(logo, '_blank')}
                  className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors mt-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <span className="text-gray-400 dark:text-gray-500">No logos found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}