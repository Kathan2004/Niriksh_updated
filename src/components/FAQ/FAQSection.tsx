import React, { useState } from 'react';
import { SearchFAQ } from './SearchFAQ';
import { FAQTabs } from './FAQTabs';
import { FAQList } from './FAQList';
import { faqData } from './faqData';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on category and search query
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Search bar for FAQs */}
          <SearchFAQ 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Tabs for FAQ categories */}
          <FAQTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* List of FAQs */}
          <FAQList faqs={filteredFAQs} />
        </div>
      </div>
    </section>
  );
}
