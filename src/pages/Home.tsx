import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';
import { FAQSection } from '../components/FAQ/FAQSection';

export function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <WhyChooseUs />
      <FAQSection />
      <Reviews />
      <Contact />
    </>
  );
}