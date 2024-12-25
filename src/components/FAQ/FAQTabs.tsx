import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Trash2, Bell, Lock, HelpCircle } from 'lucide-react';

interface FAQTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'impersonation', label: 'Impersonation', icon: Shield },
  { id: 'takedown', label: 'Takedown', icon: Trash2 },
  { id: 'monitoring', label: 'Monitoring', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
];

export function FAQTabs({ activeCategory, setActiveCategory }: FAQTabsProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shadow-md backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-50/50 dark:hover:bg-gray-700 transition ${
          dropdownOpen ? 'bg-indigo-600 text-white' : ''
        }`}
      >
        Filters
        {dropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {dropdownOpen && (
        <div className="absolute mt-2 right-0 w-48 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg backdrop-blur-lg z-10">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveCategory(id);
                setDropdownOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 w-full text-left transition-all rounded-lg hover:bg-indigo-50/50 dark:hover:bg-gray-700 ${
                activeCategory === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
