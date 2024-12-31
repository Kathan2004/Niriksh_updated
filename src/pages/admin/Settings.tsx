import React, { useState, useEffect } from 'react';
import { User, Lock, Cog, Bell, Database, Globe } from 'lucide-react';

function Modal({ isOpen, onClose, title, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ✕
          </button>
        </div>
        {children}
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export function Settings() {
  const defaultSettings = {
    name: '',
    email: '',
    password: '',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    subscriptionPlan: 'Free',
    region: 'India',
    language: 'English',
  };

  const [settings, setSettings] = useState<any>(defaultSettings);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSetting, setActiveSetting] = useState<any>(null);

  // Load settings from local storage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: string, value: any) => {
    setSettings((prev: any) => ({ ...prev, [key]: value }));
  };

  const updateNestedSetting = (key: string, nestedKey: string, value: any) => {
    setSettings((prev: any) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const settingsOptions = [
    {
      title: 'Profile Settings',
      description: 'Update your personal information and preferences',
      icon: User,
      content: (
        <>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
          <input
            type="text"
            value={settings.name}
            onChange={(e) => updateSetting('name', e.target.value)}
            className="block w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your name"
          />
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => updateSetting('email', e.target.value)}
            className="block w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your email"
          />
        </>
      ),
    },
    {
      title: 'Security',
      description: 'Manage password, two-factor authentication, and other security settings',
      icon: Lock,
      content: (
        <>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">New Password</label>
          <input
            type="password"
            value={settings.password}
            onChange={(e) => updateSetting('password', e.target.value)}
            className="block w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            placeholder="Enter new password"
          />
        </>
      ),
    },
    {
      title: 'Notifications',
      description: 'Customize your notification preferences',
      icon: Bell,
      content: (
        <>
          <label className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              checked={settings.notifications.email}
              onChange={(e) => updateNestedSetting('notifications', 'email', e.target.checked)}
              className="mr-2 rounded focus:ring-purple-600"
            />
            Email Notifications
          </label>
          <label className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              checked={settings.notifications.sms}
              onChange={(e) => updateNestedSetting('notifications', 'sms', e.target.checked)}
              className="mr-2 rounded focus:ring-purple-600"
            />
            SMS Notifications
          </label>
          <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              checked={settings.notifications.push}
              onChange={(e) => updateNestedSetting('notifications', 'push', e.target.checked)}
              className="mr-2 rounded focus:ring-purple-600"
            />
            Push Notifications
          </label>
        </>
      ),
    },
    {
      title: 'Language & Region',
      description: 'Change language and regional settings',
      icon: Globe,
      content: (
        <>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Language</label>
          <select
            value={settings.language}
            onChange={(e) => updateSetting('language', e.target.value)}
            className="block w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Region</label>
          <select
            value={settings.region}
            onChange={(e) => updateSetting('region', e.target.value)}
            className="block w-full px-3 py-2 mb-4 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
          >
            <option>India</option>
            <option>US</option>
            <option>Europe</option>
          </select>
        </>
      ),
    },
  ];

  const openModal = (setting: any) => {
    setActiveSetting(setting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveSetting(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
            onClick={() => openModal(option)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <option.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{option.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={activeSetting?.title}>
        {activeSetting?.content}
      </Modal>
    </div>
  );
}

// AdminHome Component
export default function AdminHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Home</h1>
      <Settings />
    </div>
  );
}



