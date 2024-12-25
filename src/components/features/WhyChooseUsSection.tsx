import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { MobileWhyChooseUs } from '../mobile/MobileWhyChooseUs';
import { DesktopWhyChooseUs } from '../desktop/DesktopWhyChooseUs';

export function WhyChooseUsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      className="py-16 md:py-32 bg-gradient-to-b from-transparent to-transparent dark:from-transparent dark:to-transparent relative overflow-hidden transition-colors"
      id="why-choose-us"
    >
      {/* Removed background gradient and blur */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle="WHY CHOOSE US"
          title="Why Choose निरीक्ष for Your Security?"
          description="In today's connected world, cybersecurity is more than protection—it's empowerment."
        />

        {/* Apply motion transition effect to the section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Matching layout and design for mobile and desktop versions */}
          {isMobile ? (
            <MobileWhyChooseUs />
          ) : (
            <DesktopWhyChooseUs />
          )}
        </motion.div>
      </div>
    </section>
  );
}
