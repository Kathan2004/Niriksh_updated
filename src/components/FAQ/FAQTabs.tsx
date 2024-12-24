import React from 'react';
import { Shield, Trash2, Bell, Lock, HelpCircle } from 'lucide-react';

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
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveCategory(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            activeCategory === id
              ? 'bg-purple-600 text-white shadow-lg scale-105'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}