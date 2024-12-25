import React, { useState } from 'react';
import { MobileFeatureCard } from './MobileFeatureCard';
import { features } from '../../data/features';

export function MobileWhyChooseUs() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4 mt-8">
      {features.map((feature) => (
        <MobileFeatureCard
          key={feature.id}
          {...feature}
          isExpanded={expandedId === feature.id}
          onToggle={() => toggleExpand(feature.id)}
        />
      ))}
    </div>
  );
}