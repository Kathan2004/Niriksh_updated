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
      className="py-16 md:py-32 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50 relative overflow-hidden transition-colors"
      id="why-choose-us"
    >
      {/* Same gradient background as Hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50" />
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
