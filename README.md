# Neuronix Todo App

A simple, elegant, and efficient todo application built with Next.js 14, TypeScript, and Tailwind CSS. Manage your tasks with a clean and intuitive interface.

## Features

- ✅ Add new tasks with a simple form
- ☑️ Mark tasks as complete/incomplete with a checkbox
- 🗑️ Delete tasks you no longer need
- 💾 Automatic saving to browser's local storage
- 📱 Fully responsive design for all devices
- 🎨 Clean and modern UI with Tailwind CSS
- ⚡ Built with performance in mind using Next.js 14 App Router
- 🔒 Type-safe with TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser's localStorage

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
neuronix-todo-app/
├── app/
│   ├── api/ping/
│   │   └── route.ts          # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page component
├── components/
│   ├── AddTodoForm.tsx       # Form for adding new todos
│   └── TodoItem.tsx          # Individual todo item component
├── lib/
│   ├── types.ts              # TypeScript type definitions
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # This file
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn TypeScript](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and utilities.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.