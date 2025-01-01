import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Shield, AlertTriangle, Database, Settings, HelpCircle, CheckSquare } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, path: '/admin' },
  { name: 'Assets', icon: Database, path: '/admin/assets' },
  { name: 'Alerts', icon: AlertTriangle, path: '/admin/alerts' },
  { name: 'Takedowns', icon: Shield, path: '/admin/takedowns' },

  { name: 'Settings', icon: Settings, path: '/admin/settings' },
  { name: 'Help', icon: HelpCircle, path: '/admin/help' },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm min-h-screen">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">निरीक्ष Admin</span>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}