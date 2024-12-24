import React from 'react';
import { Search } from 'lucide-react';

interface SearchFAQProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchFAQ({ searchQuery, setSearchQuery }: SearchFAQProps) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search questions..."
        className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all"
      />
      <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}