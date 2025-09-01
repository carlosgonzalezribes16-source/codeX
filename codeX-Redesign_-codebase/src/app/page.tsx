import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeItem="Inicio" />
      <HeroSection />
      
      <main className="relative">
        <BenefitsSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
}