import React, { useState } from 'react';
import { Search, HelpCircle, ExternalLink } from 'lucide-react';
import { helpArticles, helpCategories } from '../../utils/helpData';

export function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Help Center</h1>
        <p className="text-gray-600 dark:text-gray-400">Find answers to common questions or browse by topic.</p>
      </header>

      {/* Search Bar */}
      <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
        <Search className="text-gray-500 dark:text-gray-400 mr-3" />
        <input
          type="text"
          className="flex-1 border-none outline-none text-gray-900 dark:text-white bg-transparent"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-6">
        {helpCategories.map(category => (
          <button
            key={category.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <category.icon size={16} />
            {category.label}
          </button>
        ))}
      </div>

      {/* Article List */}
      <div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
              <div className="mt-2 text-purple-600 dark:text-purple-400 flex items-center gap-1">
                <span>Read more</span>
                <ExternalLink size={16} />
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center">No articles found matching your search or selected category.</p>
        )}
      </div>

      {/* Additional Help Section */}
      <div className="mt-8 bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-purple-800 dark:text-purple-200 flex items-center gap-4">
        <HelpCircle size={32} className="text-purple-600 dark:text-purple-400" />
        <div>
          <h3 className="text-lg font-semibold">Still need help?</h3>
          <p>If you need further assistance, contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
