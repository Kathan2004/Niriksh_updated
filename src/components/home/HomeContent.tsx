import React from 'react';
import { Hero } from '../Hero';
import { MobileHero } from '../MobileHero';
import { Benefits } from '../Benefits';
import { MobileBenefits } from '../MobileBenefits';
import { WhyChooseUs } from '../WhyChooseUs';
import { Reviews } from '../Reviews';
import { Contact } from '../Contact';

interface HomeContentProps {
  isMobile: boolean;
}

export function HomeContent({ isMobile }: HomeContentProps) {
  if (isMobile) {
    return (
      <>
        <MobileHero />
        <MobileBenefits />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </>
    );
  }

  return (
    <>
      <Hero />
      <Benefits />
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </>
  );
}