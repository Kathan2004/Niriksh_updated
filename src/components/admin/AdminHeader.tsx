import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export function AdminHeader() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2">
            <User className="w-5 h-5" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}