import React, { useState } from 'react';
import { Code, ChevronDown, ChevronUp } from 'lucide-react';

interface SourceCodeProps {
  htmlCode: string;
}

export function SourceCode({ htmlCode }: SourceCodeProps) {
  const [showFullCode, setShowFullCode] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">HTML Source</h2>
        </div>
        <button
          onClick={() => setShowFullCode(!showFullCode)}
          className="flex items-center gap-1 text-purple-600 dark:text-purple-400"
        >
          {showFullCode ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show More
            </>
          )}
        </button>
      </div>
      <pre className={`bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 overflow-x-auto ${
        showFullCode ? '' : 'max-h-48'
      }`}>
        <code className="text-sm text-gray-600 dark:text-gray-300">{htmlCode}</code>
      </pre>
    </div>
  );
}