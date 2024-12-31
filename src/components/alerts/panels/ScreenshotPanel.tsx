import React from 'react';
import { Download } from 'lucide-react';

interface ScreenshotPanelProps {
  image: string;
}

export function ScreenshotPanel({ image }: ScreenshotPanelProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Screenshot</h3>
        <button
          onClick={() => window.open(image, '_blank')}
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <img
          src={image}
          alt="Domain Screenshot"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}