import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">निरीक्ष</span>
            </div>
            <p className="text-gray-400 mb-4">
              Securing your digital future with innovative cybersecurity solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-purple-500 transition-colors">Threat Detection</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-500 transition-colors">Security Monitoring</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-500 transition-colors">Incident Response</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-500 transition-colors">Security Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-purple-500 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-purple-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on cybersecurity trends and best practices.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} निरीक्ष. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}