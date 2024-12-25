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
      className="group h-full bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 hover:bg-purple-50 dark:hover:bg-purple-900/80 transition-all duration-300 border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700"
      id="why-choose-us"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white/50 dark:from-gray-900/50 dark:to-purple-900/50 backdrop-blur-sm" />
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
