````markdown
# Next.js Authentication System

> Build a full authentication flow in Next.js using NextAuth, OAuth providers, custom server actions, middleware protection, and deploy it to Vercel.

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Lesson Guide](#lesson-guide)
6. [Project Structure](#project-structure)
7. [Running & Testing](#running--testing)
8. [Protecting Routes](#protecting-routes)
9. [Deployment](#deployment)
10. [License](#license)

---

## 🔍 Overview

In this module you will:

- Set up a Next.js project with an external server/API
- Integrate [NextAuth.js](https://next-auth.js.org/) into your Next.js app
- Implement OAuth with GitHub & Google
- Read the authenticated user session
- Add logout functionality
- Protect pages & API routes via middleware
- Build custom registration & login with Next.js Server Actions + custom server
- Finally, build & deploy on Vercel

Total time: ~82 minutes of video content.

---

## 🛠 Prerequisites

- **Node.js** v16+
- **npm** or **yarn**
- A GitHub account & OAuth app
- A Google Cloud project & OAuth credentials

---

## 🚀 Getting Started

```bash

# 1. Install dependencies
npm install
# or
yarn

# 2. Create your .env.local (see below)
cp .env.example .env.local

# 3. Run the dev server
npm run dev
# or
yarn dev
```
````

---

## 📝 Environment Variables

Rename `.env.example` to `.env.local` and fill in:

```dotenv
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<a secure random string>

# Database (e.g. PostgreSQL)
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# GitHub OAuth
GITHUB_ID=<your GitHub OAuth App Client ID>
GITHUB_SECRET=<your GitHub OAuth App Client Secret>

# Google OAuth
GOOGLE_CLIENT_ID=<your Google OAuth Client ID>
GOOGLE_CLIENT_SECRET=<your Google OAuth Client Secret>
```

---

## 🎓 Lesson Guide

| Lesson | Title                                                        | Duration |
| ------ | ------------------------------------------------------------ | -------- |
| 39‑1   | Initial project setup & configure external server            | 5 min    |
| 39‑2   | Integrating & Setup NextAuth in Next.js app                  | 8 min    |
| 39‑3   | Implement GitHub authentication system                       | 11 min   |
| 39‑4   | Get logged‑in user info from the session                     | 11 min   |
| 39‑5   | Implement user logout functionality                          | 6 min    |
| 39‑6   | Implement Google authentication system                       | 7 min    |
| 39‑7   | Protect a route from unauthorized users using middleware     | 7 min    |
| 39‑8   | Register user using Next.js Server Actions & a custom server | 10 min   |
| 39‑9   | Login user using Next.js Server Actions & a custom server    | 10 min   |
| 39‑10  | Build and deploy a Next.js project on Vercel                 | —        |

---

## 📁 Project Structure

```
.
├── .env.example
├── README.md
├── next.config.js
├── package.json
├── /app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api
│   │   ├── auth/[...nextauth].ts
│   │   └── register.ts     # custom registration
│   └── protected
│       └── page.tsx        # demo protected page
├── /lib
│   └── auth.ts             # NextAuth options
├── /middleware.ts
└── /server
    └── index.ts            # custom Express/Fastify server
```

---

## ▶️ Running & Testing

- **Dev mode**

  ```bash
  npm run dev
  ```

- **Type‑check & lint**

  ```bash
  npm run lint
  npm run type-check
  ```

- **Build**

  ```bash
  npm run build
  npm start
  ```

---

## 🔒 Protecting Routes

Middleware at the root of the project (`middleware.ts`) checks for a valid session and redirects unauthorized users to `/api/auth/signin`. Customize `matcher` in `next.config.js` to protect specific paths.

```ts
// middleware.ts
import { getToken } from "next-auth/jwt";
export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  return NextResponse.next();
}
```

---

## ☁️ Deployment

This project is Vercel‑ready:

1. Push to a GitHub repo
2. Import the repo at vercel.com
3. Add your Environment Variables in the Vercel dashboard
4. Click **Deploy**

---

## 📝 License

MIT © Your Name

```

Feel free to adjust any paths, scripts, or descriptions to match your actual code. This should give you a clear road‑map for every lesson and a smooth dev → deploy workflow!
```
