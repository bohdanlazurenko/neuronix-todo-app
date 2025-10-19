import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuronix Todo App',
  description: 'A simple and efficient todo application built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}