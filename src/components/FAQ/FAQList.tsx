import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from './faqData';

interface FAQListProps {
  faqs: FAQ[];
}

export function FAQList({ faqs }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            )}
          </button>
          
          <div
            className={`px-6 transition-all duration-300 ${
              openIndex === index ? 'py-4 border-t border-gray-200 dark:border-gray-700' : 'max-h-0'
            }`}
          >
            <p className={`text-gray-600 dark:text-gray-300 ${openIndex === index ? 'block' : 'hidden'}`}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}