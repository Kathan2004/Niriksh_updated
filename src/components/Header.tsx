import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              निरीक्ष
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link>
            <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</Link>
            <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Login</Link>
            <Link to="/contact" className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
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
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
              <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link>
              <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</Link>
              <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
              <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Login</Link>
              <Link to="/signup" className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-center">
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 transition-colors">
        <div className="container mx-auto px-4 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4 animate-fade-in">सुरक्षा हमारी प्राथमिकता</h3>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-purple-600 dark:text-purple-400 leading-tight">
              Because Your Digital Identity Matters
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Empowering Indian businesses with next-generation cybersecurity solutions. 
              From startups to enterprises, we protect what matters most.
            </p>
            
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/services" className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all">
                Get Started
              </Link>
              <Link to="/contact" className="bg-transparent border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
