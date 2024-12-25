import React, { useState } from 'react';
import { SearchFAQ } from './SearchFAQ';
import { FAQTabs } from './FAQTabs';
import { FAQList } from './FAQList';
import { faqData } from './FAQData';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on category and search query
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-purple-900/50 dark:to-gray-900/50 backdrop-blur-md">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our most frequently asked questions to find what you’re looking for quickly.
        </p>
      </div>

      {/* Search Bar and Filters Positioned Below Title */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <div className="flex-1 max-w-xl">
          <SearchFAQ searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <FAQTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto p-6 bg-white/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-lg shadow-xl">
        <FAQList faqs={filteredFAQs} />
      </div>
    </section>
  );
}
