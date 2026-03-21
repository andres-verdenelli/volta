import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Turnito',
  description:
    'Turnito is a scheduling app for shift workers. It helps you manage your work schedule and keep track of your shifts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn('font-sans', 'font-sans', inter.variable)}
    >
      <body
        className={cn(
          'bg-background text-foreground min-h-screen font-sans antialiased',
          geistMono.variable,
        )}
      >
        <Header />
        <main className='p-4'>{children}</main>
      </body>
    </html>
  )
}
