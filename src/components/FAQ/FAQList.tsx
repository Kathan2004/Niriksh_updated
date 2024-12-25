import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from './faqData';

interface FAQListProps {
  faqs: FAQ[];
}

export function FAQList({ faqs }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6 relative z-10"> {/* Ensures the FAQs are positioned directly on the bg */}
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-3xl shadow-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-white/60 to-purple-50/60 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-lg"
        >
          {/* Question Button */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-indigo-100/50 to-purple-100/50 dark:from-gray-800/60 dark:to-gray-700/60 hover:scale-[1.03] transition-transform rounded-3xl"
          >
            <span className="font-bold text-gray-900 dark:text-gray-50 text-lg">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            )}
          </button>

          {/* Answer Section */}
          <div
            className={`overflow-hidden px-6 transition-all duration-300 ${
              openIndex === index ? 'py-4 max-h-[300px]' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
