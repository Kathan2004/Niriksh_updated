import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQListProps {
  faqs: { question: string, answer: string }[];
}

export function FAQList({ faqs }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6 relative z-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 bg-gradient-to-b from-purple-100/50 to-white/60 dark:from-gray-900/50 dark:to-purple-900/50"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left bg-gradient-to-r from-indigo-200/50 to-purple-200/50 dark:from-gray-800/60 dark:to-gray-700/60 hover:bg-gradient-to-r hover:from-purple-300/60 hover:to-indigo-400/60 transition-all duration-300 rounded-xl"
          >
            <span className="font-semibold text-xl text-gray-900 dark:text-gray-50">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            )}
          </button>

          <div
            className={`overflow-hidden px-8 transition-all duration-300 ${
              openIndex === index ? 'py-6 max-h-[400px]' : 'max-h-0'
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
