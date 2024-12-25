import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Shield, Phone, FileText, User, HelpCircle, File } from 'lucide-react';

export function MobileNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50 border-t dark:border-gray-800 px-6 py-2 z-50 shadow-xl backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Home Link */}
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/') ? 'Home' : 'Home'}</span>
        </Link>

        {/* Services Link */}
        <Link
          to="/services"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/services') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Shield className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/services') ? 'Services' : 'Services'}</span>
        </Link>

        {/* Blog Link */}
        <Link
          to="/blog"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/blog') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <File className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/blog') ? 'Blog' : 'Blog'}</span>
        </Link>

        {/* FAQ Link */}
        <Link
          to="/faq"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/faq') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <HelpCircle className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/faq') ? 'FAQ' : 'FAQ'}</span>
        </Link>

        {/* Contact Link */}
        <Link
          to="/contact"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/contact') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Phone className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/contact') ? 'Contact' : 'Contact'}</span>
        </Link>

        {/* Account Link */}
        <Link
          to="/login"
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isActive('/login') ? 'text-purple-600 dark:text-purple-400 transform scale-110' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <User className="w-6 h-6 transition-transform duration-300" />
          <span className="text-xs transition-opacity duration-300">{isActive('/login') ? 'Account' : 'Account'}</span>
        </Link>
      </div>
    </nav>
  );
}
