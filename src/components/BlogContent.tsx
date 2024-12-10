import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogContentProps {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export function BlogContent({ title, content, author, date, image, readTime }: BlogContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      
      <div className="flex items-center gap-6 mb-6 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>{readTime} min read</span>
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300 space-y-4">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}