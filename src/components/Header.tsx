import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
    className="sticky top-0 z-50 transition-all"
    style={{
      background: 'linear-gradient(to bottom, #FFFFFF, #F3E8FF)', // Light mode gradient
      backdropFilter: 'blur(10px)', // Glassmorphism effect
    }}
    className="dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-900" // Dark mode gradient
  >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-white dark:text-gray-800" />
            {/* Wrap the "निरीक्ष" text with Link to the home page */}
            <Link to="/" className="text-2xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              निरीक्ष
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">Services</Link>
            <Link to="/features" className="text-white hover:text-gray-300 transition-colors">Features</Link>
            <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">Blog</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="text-white hover:text-gray-300 transition-colors">Login</Link>
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors">
              Request Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-lg mt-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</Link>
              <Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link>
              <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
