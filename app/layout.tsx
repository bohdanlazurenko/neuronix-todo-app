import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuronix Todo App',
  description: 'A modern todo application built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </body>
    </html>
  )
}