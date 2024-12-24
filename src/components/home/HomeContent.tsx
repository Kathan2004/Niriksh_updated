import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Hero } from '../Hero';
import { MobileHero } from '../MobileHero';
import { Benefits } from '../Benefits';
import { MobileBenefits } from '../MobileBenefits';
import { WhyChooseUs } from '../WhyChooseUs';
import { Reviews } from '../Reviews';
import { Contact } from '../Contact';
import { FAQSection } from '../FAQ/FAQSection';

export function HomeContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <MobileHero /> : <Hero />}
      {isMobile ? <MobileBenefits /> : <Benefits />}
      <WhyChooseUs />
      <FAQSection />
      <Reviews />
      <Contact />
    </>
  );
}