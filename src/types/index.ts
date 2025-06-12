// Database types
export interface User {
  id: number
  username: string
  password: string
  role: 'admin' | 'basic'
  secret: string
  createdAt: Date
}
