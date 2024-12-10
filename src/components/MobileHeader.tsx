import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              निरीक्ष
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg">
            <div className="py-4 px-4 space-y-3">
              <Link
                to="/"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/features"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t dark:border-gray-800">
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 text-center rounded-lg border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}