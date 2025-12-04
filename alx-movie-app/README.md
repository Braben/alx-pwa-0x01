# HookMastery: Unleashing the Power of Hooks

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Project Description

This project is a Next.js-based web application that allows users to generate AI-powered images by providing text prompts. The app interfaces with the GPT-4 Image Generation API to create unique images based on user input. The application features a clean UI with state management, custom hooks, and API integration, while following React best practices.

## Objectives

By completing this project, you will:

Understand and implement React state management using useState
Create and utilize custom React hooks
Work with environment variables for API key management
Implement API routes in Next.js applications
Develop reusable React components
Manage application state across multiple components
Implement responsive UI design with Tailwind CSS
Handle asynchronous operations in React
Follow React best practices for component structure and organization
Requirements
Node.js (v14 or later)
Next.js (v13 or later)
React (v18 or later)
TypeScript
Tailwind CSS
GPT-4 API key (from RapidAPI)
Modern web browser
Project Structure
alx-project-0x07/ (and subsequent versions)

```
├── components/
│   ├── common/
│   │   └── ImageCard.tsx
│   └── layouts/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts
├── hooks/
│   └── useFetchData.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── api/
│   │   └── generate-image.ts
│   ├── _app.tsx
│   └── index.tsx
├── public/
└── styles/
    └── globals.css

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
