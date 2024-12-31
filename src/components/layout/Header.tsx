import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Bell, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">ForensicFlow</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Dashboard</Link>
            <Link to="/cases" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Cases</Link>
            <Link to="/evidence" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Evidence</Link>
            <Link to="/analysis" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Analysis</Link>
            <Link to="/reports" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Reports</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}