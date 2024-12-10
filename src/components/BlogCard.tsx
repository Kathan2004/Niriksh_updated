import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  onClick: () => void;
}

export function BlogCard({ title, excerpt, author, date, image, readTime, onClick }: BlogCardProps) {
  return (
    <article 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}