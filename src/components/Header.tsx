import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleMouseEnter = (url) => {
    setPreviewUrl(url);
  };

  const handleMouseLeave = () => {
    setPreviewUrl(null);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-b-3xl shadow-lg sticky top-0 z-50 transition-all"
      style={{
        background: 'rgba(128, 0, 128, 0.5)', // Translucent purple shade for both dark and light modes
        backdropFilter: 'blur(10px)', // Soft blur effect for a glassmorphism look
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-white dark:text-gray-800" />
            <span className="text-2xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              निरीक्ष
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/")} 
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/about")} 
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/services")} 
              onMouseLeave={handleMouseLeave}
            >
              Services
            </Link>
            <Link 
              to="/features" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/features")} 
              onMouseLeave={handleMouseLeave}
            >
              Features
            </Link>
            <Link 
              to="/blog" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/blog")} 
              onMouseLeave={handleMouseLeave}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/contact")} 
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link 
              to="/login" 
              className="relative text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => handleMouseEnter("/login")} 
              onMouseLeave={handleMouseLeave}
            >
              Login
            </Link>
            <Link 
              to="/contact" 
              className="relative bg-white text-purple-600 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md transition-all"
              onMouseEnter={() => handleMouseEnter("/contact")} 
              onMouseLeave={handleMouseLeave}
            >
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
              <Link 
                to="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/")} 
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/about")} 
                onMouseLeave={handleMouseLeave}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/services")} 
                onMouseLeave={handleMouseLeave}
              >
                Services
              </Link>
              <Link 
                to="/features" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/features")} 
                onMouseLeave={handleMouseLeave}
              >
                Features
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/blog")} 
                onMouseLeave={handleMouseLeave}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onMouseEnter={() => handleMouseEnter("/contact")} 
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Preview Window */}
      {previewUrl && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-96 h-64 rounded-lg shadow-xl z-50 overflow-hidden transition-all"
          style={{
            backgroundColor: 'rgba(128, 0, 128, 0.2)',  // Translucent purple background for dark mode
            border: '1px solid rgba(128, 0, 128, 0.3)',  // Slightly darker purple border
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Subtle shadow for 3D effect
          }}
        >
          <iframe
            src={previewUrl}
            title="Page Preview"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 transition-colors rounded-t-3xl">
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
              <Link 
                to="/services" 
                className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all"
                onMouseEnter={() => handleMouseEnter("/services")} 
                onMouseLeave={handleMouseLeave}
              >
                Get Started
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all"
                onMouseEnter={() => handleMouseEnter("/contact")} 
                onMouseLeave={handleMouseLeave}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
