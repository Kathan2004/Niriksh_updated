import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}

export function ReviewCard({ name, role, company, review, rating, image }: ReviewCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative transform transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute top-6 right-8">
        <Quote className="w-12 h-12 text-purple-100 dark:text-gray-700 transform rotate-180" />
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-2xl object-cover ring-4 ring-purple-100 dark:ring-purple-900"
        />
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-purple-600 dark:text-purple-400 font-medium">{role}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{company}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star 
            key={i} 
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic relative">
        "{review}"
      </p>
    </div>
  );
}