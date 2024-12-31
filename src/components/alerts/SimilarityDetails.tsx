import React from 'react';
import { Code, Image } from 'lucide-react';

interface SimilarityDetailsProps {
  similarity: {
    score: string;
    matchingElements: string[];
  };
  screenshot: string;
  htmlCode: string;
}

export function SimilarityDetails({ similarity, screenshot, htmlCode }: SimilarityDetailsProps) {
  const [showFullCode, setShowFullCode] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Domain Similarity</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Similarity Score</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">{similarity.score}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {similarity.matchingElements.map((element, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <span className="text-sm">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Screenshot</h3>
        </div>
        <img src={screenshot} alt="Domain Screenshot" className="w-full rounded-lg shadow-lg" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Source Code</h3>
          </div>
          <button
            onClick={() => setShowFullCode(!showFullCode)}
            className="text-purple-600 dark:text-purple-400 text-sm"
          >
            {showFullCode ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <pre className={`bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto ${
          showFullCode ? '' : 'max-h-48'
        }`}>
          <code className="text-sm text-gray-800 dark:text-gray-200">{htmlCode}</code>
        </pre>
      </div>
    </div>
  );
}