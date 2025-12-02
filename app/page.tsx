import CallToAction from "@/components/landing/call-to-action";
import ContentSection from "@/components/landing/content-1";
import ContentSection2 from "@/components/landing/content-7";
import FAQsFour from "@/components/landing/faqs-4";
import Features from "@/components/landing/features-12";
import FeaturesSection from "@/components/landing/features-6";
import FooterSection from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import LogoCloud from "@/components/landing/logo-cloud";
import Pricing from "@/components/landing/pricing";
import StatsSection from "@/components/landing/stats-2";
import Testimonials from "@/components/landing/testimonials";
import { HeroHeader } from '@/components/landing/header'
import { Metadata } from 'next'
import SchemaMarkup from '@/components/schema-markup'
import GoogleAnalytics from '@/components/google-analytics'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Pixeat - Autoatendimento Inteligente para Restaurantes | QR Code e Reservas Online',
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

export default function Home() {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      <SchemaMarkup />
      <HeroHeader />
      <HeroSection />
      {/* <LogoCloud /> */}
      <ContentSection />
      <ContentSection2 />
      <FeaturesSection />
      <Features />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <FAQsFour />
      <CallToAction />
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
