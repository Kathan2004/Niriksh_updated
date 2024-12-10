import React, { useState } from 'react';
import { features } from '../../data/features';

export function DesktopWhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-8 mt-8">
      <div className="grid md:grid-cols-5 gap-4">
        <div className="space-y-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                selectedFeature.id === feature.id 
                  ? 'bg-purple-600 text-white shadow-lg scale-102'
                  : 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-600'
              }`}
            >
              <feature.icon className="w-5 h-5" />
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
        
        <div className="md:col-span-4 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <selectedFeature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedFeature.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {selectedFeature.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {selectedFeature.points.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
            
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}