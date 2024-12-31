import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface HtmlPanelProps {
  code: string;
}

export function HtmlPanel({ code }: HtmlPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">HTML Source Code</h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="relative">
        <pre className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">{code}</code>
        </pre>
      </div>
    </div>
  );
}