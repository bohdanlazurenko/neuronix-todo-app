# Neuronix Todo App

A modern, feature-rich todo application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Add, complete, and delete todos
- Filter todos by status (All, Active, Completed)
- Persistent storage using localStorage
- Clean and responsive UI with Tailwind CSS
- TypeScript for type safety
- Real-time todo counter
- Smooth animations and transitions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── TodoApp.tsx           # Main todo component
│   ├── TodoItem.tsx          # Individual todo item
│   └── TodoFilters.tsx       # Filter buttons
├── lib/
│   ├── types.ts              # TypeScript definitions
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /api/ping` - Health check endpoint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
