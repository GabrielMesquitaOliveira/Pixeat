import type { Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
// Header moved to landing-specific pages so dashboard isn't affected
import { ptBR } from '@clerk/localizations'
import { shadcn } from '@clerk/themes'
import GoogleAnalytics from '@/components/google-analytics'
import SchemaMarkup from '@/components/schema-markup'

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
    default: 'Pixeat - Autoatendimento Inteligente para Restaurantes | QR Code e Reservas Online',
    template: '%s | Pixeat',
  },
  description: 'Sistema de autoatendimento completo para restaurantes. Cardápio digital por QR Code, reservas online automáticas e gestão de pedidos em tempo real. Aumente suas vendas em até 40%. Teste grátis por 30 dias.',
  keywords: [
    'autoatendimento restaurante',
    'cardápio digital',
    'qr code restaurante',
    'reservas online restaurante',
    'sistema para restaurante',
    'pedidos online',
    'gestão de restaurante',
    'cardápio qr code',
    'menu digital',
    'autoatendimento por QR Code',
  ],
  authors: [{ name: 'Pixeat' }],
  creator: 'Pixeat',
  publisher: 'Pixeat',
  metadataBase: new URL('https://pixeat.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pixeat - Autoatendimento Inteligente para Restaurantes',
    description: 'Sistema completo de autoatendimento com QR Code, reservas online e gestão de pedidos. Aumente suas vendas em até 40%. Teste grátis por 30 dias.',
    url: 'https://pixeat.com.br',
    siteName: 'Pixeat',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixeat - Autoatendimento Inteligente para Restaurantes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixeat - Autoatendimento Inteligente para Restaurantes',
    description: 'Sistema completo de autoatendimento com QR Code, reservas online e gestão de pedidos. Aumente suas vendas em até 40%.',
    images: ['/og-image.png'],
    creator: '@pixeat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-de-verificacao-aqui',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={ptBR} appearance={{
      theme: shadcn,
    }}>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
          <SchemaMarkup />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}