export const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    email: 'teacher@example.com',
    password: 'password123',
    name: 'Teacher User',
    role: 'teacher',
    createdAt: new Date('2024-01-01'),
  },
] as const;