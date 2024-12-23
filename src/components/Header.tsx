import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-b-3xl shadow-lg sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-white dark:text-gray-800" />
            <span className="text-2xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              निरीक्ष
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="relative text-white hover:text-gray-300 transition-colors group">
              Home
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Go to Home page
              </div>
            </Link>
            <Link to="/about" className="relative text-white hover:text-gray-300 transition-colors group">
              About
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more about us
              </div>
            </Link>
            <Link to="/services" className="relative text-white hover:text-gray-300 transition-colors group">
              Services
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore our services
              </div>
            </Link>
            <Link to="/features" className="relative text-white hover:text-gray-300 transition-colors group">
              Features
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Discover key features
              </div>
            </Link>
            <Link to="/blog" className="relative text-white hover:text-gray-300 transition-colors group">
              Blog
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read our latest blogs
              </div>
            </Link>
            <Link to="/contact" className="relative text-white hover:text-gray-300 transition-colors group">
              Contact
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Get in touch with us
              </div>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="relative text-white hover:text-gray-300 transition-colors group">
              Login
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Access your account
              </div>
            </Link>
            <Link to="/contact" className="relative bg-white text-purple-600 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md transition-all group">
              Request Demo
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Request a product demo
              </div>
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
              <Link to="/" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                Home
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Go to Home page
                </div>
              </Link>
              <Link to="/about" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                About
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more about us
                </div>
              </Link>
              <Link to="/services" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                Services
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore our services
                </div>
              </Link>
              <Link to="/features" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                Features
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Discover key features
                </div>
              </Link>
              <Link to="/blog" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                Blog
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read our latest blogs
                </div>
              </Link>
              <Link to="/contact" className="relative text-gray-600 hover:text-purple-600 transition-colors group">
                Contact
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get in touch with us
                </div>
              </Link>
              <Link to="/login" className="relative text-purple-600 hover:text-purple-700 transition-colors group">
                Login
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Access your account
                </div>
              </Link>
              <Link to="/signup" className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors group">
                Sign Up
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Join us today
                </div>
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
              <Link to="/services" className="relative bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all group">
                Get Started
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Start using our tool
                </div>
              </Link>
              <Link to="/contact" className="relative bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-6 py-3 transition-all group">
                Contact Us
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max p-2 mt-2 bg-white text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get in touch with us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
