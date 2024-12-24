import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function MobileFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-24 mt-auto">
      <div className="px-4">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">निरीक्ष</span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400">Threat Detection</Link></li>
              <li><Link to="/services" className="text-gray-400">Security Monitoring</Link></li>
              <li><Link to="/services" className="text-gray-400">Incident Response</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} निरीक्ष. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}