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

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      {/* <LogoCloud /> */}
      <ContentSection />
      <ContentSection2 />
      <Features />
      <FeaturesSection />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <FAQsFour />
      <CallToAction />
      <FooterSection />
    </>
  );
}
