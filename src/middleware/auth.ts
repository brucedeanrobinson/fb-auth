import { Elysia, t } from 'elysia'
import { jwt } from '@elysiajs/jwt'
import { bearer } from '@elysiajs/bearer'
import { cookie } from '@elysiajs/cookie'

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'

// JWT plugin setup
export const authSetup = new Elysia({ name: 'auth-setup' })
  .use(jwt({ name: 'jwt', secret: JWT_SECRET }))
  .use(bearer())
  .use(cookie())
