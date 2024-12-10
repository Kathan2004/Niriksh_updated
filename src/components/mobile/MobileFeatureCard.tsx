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
    <div className="bg-purple-50 dark:bg-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>
          
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <ul className="grid grid-cols-2 gap-2">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-2 rounded-lg"
              >
                <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}