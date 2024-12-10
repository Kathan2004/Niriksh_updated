import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowDown } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export function BlogPost({ title, excerpt, content, author, date, image, readTime }: BlogPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        
        {isExpanded && (
          <div className="mt-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
            {content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">{readTime} min read</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            {isExpanded ? <ArrowDown className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </article>
  );
}