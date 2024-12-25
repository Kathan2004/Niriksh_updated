import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-80 backdrop-blur-md shadow-xl sticky top-0 z-50 transition-colors rounded-b-3xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 shadow-lg">
                निरीक्ष
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">About</Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Services</Link>
            <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Features</Link>
            <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">FAQ</Link>
            <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Blog</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300">Login</Link>
            <Link to="/contact" className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
              Request Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">About</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">Services</Link>
              <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">Features</Link>
              <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">FAQ</Link>
              <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">Blog</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">Contact</Link>
              <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300">Login</Link>
              <Link to="/signup" className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 text-center">
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
