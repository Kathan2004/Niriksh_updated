import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Shield, Phone, FileText, User } from 'lucide-react';

export function MobileNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-6 py-2 z-50">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 ${
            isActive('/') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        
        <Link
          to="/services"
          className={`flex flex-col items-center gap-1 ${
            isActive('/services') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Shield className="w-6 h-6" />
          <span className="text-xs">Services</span>
        </Link>
        
        <Link
          to="/contact"
          className={`flex flex-col items-center gap-1 ${
            isActive('/contact') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs">Contact</span>
        </Link>
        
        <Link
          to="/blog"
          className={`flex flex-col items-center gap-1 ${
            isActive('/blog') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <FileText className="w-6 h-6" />
          <span className="text-xs">Blog</span>
        </Link>
        
        <Link
          to="/login"
          className={`flex flex-col items-center gap-1 ${
            isActive('/login') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </Link>
      </div>
    </nav>
  );
}