import React, { useState } from 'react';
import { AuthContext } from '../hooks/useAuth';
import { MOCK_USERS } from '../config/auth';
import type { User } from '../types';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const mockUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!mockUser) {
      throw new Error('Invalid credentials');
    }

    // Omit password from user data
    const { password: _, ...userData } = mockUser;
    setUser(userData as User);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}