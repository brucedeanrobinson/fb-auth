import { Elysia } from 'elysia'
import { authSetup } from '../middleware/auth.js'

export const authRoutes = new Elysia({ prefix: '/api' })
  .use(authSetup)

  .get('/public', () => {
    console.log('GET /public')
  }, {
    response: {
      // 200: ApiResponseSchema
    },
    detail: {
      summary: '[PUBLIC] endpoint (no authentication required)',
      description: `
      This endpoint demonstrates a public API that anyone can access.
      Part of Steps 1-2 in the assignment progression.
      `,
      tags: ['Public']
    }
  })
