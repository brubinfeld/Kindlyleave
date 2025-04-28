import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KindlyLeave - Compassionate Breakup Letters & Support Services',
  description: 'Create compassionate breakup letters and connect with support services for relationship transitions'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
