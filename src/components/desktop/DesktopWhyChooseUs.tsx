import React, { useState } from 'react';
import { features } from '../../data/features';

export function DesktopWhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-b from-purple-50/60 to-white/60 dark:from-gray-800/50 dark:to-gray-900/50 shadow-xl backdrop-blur-lg">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Feature List */}
        <div className="space-y-4 md:col-span-4 lg:col-span-3">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`w-full text-left p-4 rounded-lg transition-transform duration-300 flex items-center gap-3 ${
                selectedFeature.id === feature.id
                  ? 'bg-purple-600 text-white shadow-lg scale-[1.03]'
                  : 'bg-gradient-to-r from-white/60 to-purple-50/60 dark:from-gray-800/50 dark:to-gray-900/50 text-purple-600 dark:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-gray-700'
              }`}
            >
              <feature.icon className="w-5 h-5" />
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Feature Details */}
        <div className="md:col-span-8 lg:col-span-9 bg-gradient-to-b from-white/60 to-purple-50/60 dark:from-gray-800/50 dark:to-gray-900/50 p-6 rounded-3xl shadow-xl backdrop-blur-lg">
          <div className="flex items-center gap-4 mb-4">
            <selectedFeature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedFeature.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {selectedFeature.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              {selectedFeature.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
