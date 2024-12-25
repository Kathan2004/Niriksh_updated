import React from 'react';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

interface MobileFeatureCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  image: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export function MobileFeatureCard({
  icon: Icon,
  title,
  description,
  points,
  image,
  isExpanded,
  onToggle
}: MobileFeatureCardProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50/60 to-white/60 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl overflow-hidden shadow-xl backdrop-blur-lg transition-transform duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-purple-100/60 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-4 bg-white dark:bg-gray-800/60 backdrop-blur-lg rounded-b-xl">
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.05]"
          />
          
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm hover:bg-purple-50/60 dark:hover:bg-gray-600 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
