import create from 'zustand';  // Corrected import
import { persist } from 'zustand/middleware';

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: string;
  createdBy: string;
  lastUpdated: string;
  description: string;
}

export interface Setting {
  id: string;
  name: string;
  value: string | boolean;
  type: 'text' | 'toggle' | 'select';
  options?: string[];
  category: 'security' | 'notifications' | 'general';
}

interface AdminStore {
  assets: Asset[];
  settings: Setting[];
  addAsset: (asset: Omit<Asset, 'id' | 'status' | 'createdBy' | 'lastUpdated'>) => void;
  deleteAsset: (id: string) => void;
  updateSetting: (id: string, value: string | boolean) => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      assets: [],
      settings: [
        {
          id: 'mfa',
          name: 'Multi-Factor Authentication',
          value: true,
          type: 'toggle',
          category: 'security',
        },
        {
          id: 'email_alerts',
          name: 'Email Alerts',
          value: true,
          type: 'toggle',
          category: 'notifications',
        },
        {
          id: 'api_key',
          name: 'API Key',
          value: 'sk_test_123456789',
          type: 'text',
          category: 'security',
        },
        {
          id: 'alert_frequency',
          name: 'Alert Frequency',
          value: 'realtime',
          type: 'select',
          options: ['realtime', 'hourly', 'daily'],
          category: 'notifications',
        },
      ],
      addAsset: (newAsset) =>
        set((state) => ({
          assets: [
            ...state.assets,
            {
              ...newAsset,
              id: Date.now().toString(),
              status: 'Active',
              createdBy: 'Admin User',
              lastUpdated: new Date().toLocaleDateString(),
            },
          ],
        })),
      deleteAsset: (id) =>
        set((state) => ({
          assets: state.assets.filter((asset) => asset.id !== id),
        })),
      updateSetting: (id, value) =>
        set((state) => ({
          settings: state.settings.map((setting) =>
            setting.id === id ? { ...setting, value } : setting
          ),
        })),
    }),
    { name: 'admin-store' }
  )
);
