import { Elysia } from "elysia";

const PORT = 3002;

const app = new Elysia()
  // Step 1: Create the two basic endpoints
  .get('/api/public', () => {
    return { message: "This is public information" };
  })
  .get('/api/protected', () => {
    return { message: "Only admin should be able to see this" };
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
console.log(`Try these endpoints:`);
console.log(`  GET http://localhost:${PORT}/api/public`);
console.log(`  GET http://localhost:${PORT}/api/protected`);

export default app;
