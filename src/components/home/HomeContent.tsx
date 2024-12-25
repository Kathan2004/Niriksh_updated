import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Hero } from '../Hero';
import { MobileHero } from '../MobileHero';
import { BenefitsSection } from '../features/BenefitsSection';
import { WhyChooseUsSection } from '../features/WhyChooseUsSection';
import { Reviews } from '../Reviews';
import { Contact } from '../Contact';
import { FAQSection } from '../FAQ/FAQSection';

export function HomeContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="overflow-x-hidden">
      {isMobile ? <MobileHero /> : <Hero />}
      <BenefitsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <Reviews />
      <Contact />
    </div>
  );
}