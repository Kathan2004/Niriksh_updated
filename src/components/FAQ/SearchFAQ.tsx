import React from 'react';
import { Search } from 'lucide-react';

interface SearchFAQProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchFAQ({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search FAQs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full px-6 py-3 text-sm rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition"
    />
  );
}
