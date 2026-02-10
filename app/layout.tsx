import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import MountElement from "../components/MountElement";

// Header moved to landing-specific pages so dashboard isn't affected
import { ptBR } from '@clerk/localizations'
import { shadcn } from '@clerk/themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pixeat',
    template: '%s | Pixeat',
  },
  metadataBase: new URL('https://pixeat.com.br'),
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <ClerkProvider localization={ptBR} appearance={{ theme: shadcn }}>
        <html lang="pt-BR" suppressHydrationWarning>
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#000000" />
          </head>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <MountElement />
            {children}
          </body>
        </html>
      </ClerkProvider>
  )
}