import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

const PORT = 3002;

const app = new Elysia()
  .use(swagger({
    path: '/api-docs',
    documentation: {
      info: {
        title: 'Authentication Assignment API',
        version: '1.0.0',
        description: 'Learning authentication step by step'
      },
      tags: [
        { name: 'Public', description: 'Public endpoints' },
        { name: 'Protected', description: 'Protected endpoints (will require auth later)' }
      ]
    }
  }))
  .get('/api/public', () => {
    return { message: "This is public information" };
  }, {
    detail: {
      tags: ['Public'],
      summary: 'Get public information',
      description: 'Returns public information that anyone can access',
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'This is public information' }
                }
              }
            }
          }
        }
      }
    }
  })
  .get('/api/protected', () => {
    return { message: "Only admin should be able to see this" };
  }, {
    detail: {
      tags: ['Protected'],
      summary: 'Get protected information',
      description: 'Returns protected information (currently not actually protected!)',
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Only admin should be able to see this' }
                }
              }
            }
          }
        }
      }
    }
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`);
console.log(`Try these endpoints:`);
console.log(`  GET http://localhost:${PORT}/api/public`);
console.log(`  GET http://localhost:${PORT}/api/protected`);

export default app;