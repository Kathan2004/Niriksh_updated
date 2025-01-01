import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface AddUserFormProps {
  onSubmit: (userData: {
    username: string;
    email: string;
    role: string;
  }) => void;
}

export function AddUserForm({ onSubmit }: AddUserFormProps) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    role: 'user'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData(prev => ({ ...prev, username: e.target.value }))}
          className="block w-full px-3 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
          placeholder="Enter username"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
          className="block w-full px-3 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
          placeholder="Enter email"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Role</label>
        <select
          value={userData.role}
          onChange={(e) => setUserData(prev => ({ ...prev, role: e.target.value }))}
          className="block w-full px-3 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Add User
      </button>
    </form>
  );
}