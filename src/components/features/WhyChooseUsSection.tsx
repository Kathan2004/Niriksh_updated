import React, { useState } from 'react';
import { SectionHeader } from '../SectionHeader';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { MobileWhyChooseUs } from '../mobile/MobileWhyChooseUs';
import { DesktopWhyChooseUs } from '../desktop/DesktopWhyChooseUs';

export function WhyChooseUsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors" id="why-choose-us">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="WHY CHOOSE US"
          title="Why Choose निरीक्ष for Your Security?"
          description="In today's connected world, cybersecurity is more than protection—it's empowerment."
        />
        
        {isMobile ? <MobileWhyChooseUs /> : <DesktopWhyChooseUs />}
      </div>
    </section>
  );
}