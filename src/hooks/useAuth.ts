import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // For demo purposes - in production, this would be an API call
      if (email === 'admin@niriksh.com' && password === 'admin123') {
        const user = {
          id: '1',
          email,
          role: 'admin' as const
        };
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, loading, login, logout };
}