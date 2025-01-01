import React, { useState } from 'react';
import { User, Lock, Cog, Bell, Database, Globe, Users } from 'lucide-react';
import { AddUserForm } from '../../components/settings/AddUserForm';
import { Modal } from '../../components/Modal';

function SettingsModal({ isOpen, onClose, title, children }: any) {
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
      </div>
    </div>
  );
}

export function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSetting, setActiveSetting] = useState<any>(null);

  const handleAddUser = (userData: any) => {
    console.log('Adding user:', userData);
    setIsModalOpen(false);
  };

  const settingsOptions = [
    {
      title: 'Profile Settings',
      description: 'Update your personal information and preferences',
      icon: User,
    },
    {
      title: 'Security',
      description: 'Manage password and security settings',
      icon: Lock,
    },
    {
      title: 'Notifications',
      description: 'Configure notification preferences',
      icon: Bell,
    },
    {
      title: 'Add User',
      description: 'Add new users and manage their roles',
      icon: Users,
      content: <AddUserForm onSubmit={handleAddUser} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
            onClick={() => {
              setActiveSetting(option);
              setIsModalOpen(true);
            }}
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

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setActiveSetting(null);
        }}
        title={activeSetting?.title}
      >
        {activeSetting?.content}
      </SettingsModal>
    </div>
  );
}