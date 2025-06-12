import type { User } from '../types/index.ts'

// In-memory users database (Steps 1-12 of the assignment)
export const users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123', // In real apps, this would be hashed
    role: 'admin',
    secret: 'admin-secret-123',
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    username: 'user',
    password: 'user123', // In real apps, this would be hashed
    role: 'basic',
    secret: 'user-secret-456',
    createdAt: new Date('2024-01-01')
  }
]

