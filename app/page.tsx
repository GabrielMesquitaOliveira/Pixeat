import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import ContentSection2 from "@/components/content-7";
import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-12";
import FeaturesSection from "@/components/features-6";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats-2";
import Testimonials from "@/components/testimonials";
import { HeroHeader } from '@/components/header'

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection/>
      <LogoCloud/>
      <ContentSection/>
      <ContentSection2/>
      <Features/>
      <FeaturesSection/>
      <StatsSection/>
      <Testimonials/>
      <Pricing/>
      <FAQsFour/>
      <CallToAction/>
      <FooterSection/>
    </>
  );
}
