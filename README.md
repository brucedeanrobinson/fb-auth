# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

`npm i -D elysiajs/swagger`

To start the development server run:

```bash
bun dev
```

Open http://localhost:3000/ with your browser to see the result.

## My notes

Authentication implementation overview

- [ ] A custom username/password system with in-memory users and secrets,
- [ ] JWT-based authentication with secure cookies,
- [ ] More professional authentication using Better-Auth.

For each approach, you will:

- [ ] Build login, logout, and signup flows (client and server).
- [ ] Protect API endpoints using your authentication method.
- [ ] Use the Vercel AI SDK to power authenticated AI chat endpoints.
- [ ] Fully document your API with OpenAPI/Swagger, including authentication flows, request/response schemas, and example requests and responses.

Core Concepts

- [ ] username / password
- [ ] JWT (JSON Web Tokens)
- [ ] Cookies
- [ ] Better Auth
- [ ] API Development & Documentation
- [ ] Protected API Endpoints
- [ ] OpenAPI/Swagger Specifications

Features (build an app that implements the following)

- [ ] Request Middleware
- [ ] Client-Side Log In, Log Out, Sign Up HTML pages
- [ ] Authenticated API endpoints
- [ ] hosted OpenAPI documentation
- [ ] use an Auth library for "Better Auth"

### Step-by-Step

Step 1: Create the Basic App Structure

- [x] Set up Express (or Elysia) server
- Create two endpoints:
  - [x] GET /api/public - Returns: { message: "This is public information" }
  - [x] GET /api/protected - Returns: { message: "Only admin should be able to see this" }
- Problem: Both endpoints are actually public! Anyone can access the "protected" one.

Step 2: Add API Documentation

- [x] Add Swagger/OpenAPI documentation for both endpoints
- [x] Serve interactive docs at /api-docs
- [x] Document request/response schemas
- [x] Test both endpoints through Swagger UI
