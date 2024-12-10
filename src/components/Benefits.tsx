import React from 'react';
import { Shield, Bell, Monitor, Clock, Scale, Lock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';

const benefits = [
  {
    icon: Shield,
    title: 'Phishing Websites',
    description: 'We identify and alert you about deceptive websites that masquerade as your brand, aiming to deceive your customers and tarnish your image.'
  },
  {
    icon: Bell,
    title: 'Real-Time Threat Detection',
    description: 'Our advanced system identifies and responds to threats instantly, minimizing risks before they escalate into significant problems.'
  },
  {
    icon: Monitor,
    title: 'Comprehensive Monitoring',
    description: 'Round-the-clock monitoring ensures complete visibility into your network, keeping you informed and secure at all times.'
  },
  {
    icon: Clock,
    title: 'Rapid Incident Response',
    description: 'When incidents occur, our team acts swiftly to contain and resolve them, minimizing downtime and damage.'
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description: 'Designed to grow with your business, our flexible security solutions adapt to meet evolving needs and challenges.'
  },
  {
    icon: Lock,
    title: 'Data Privacy Assurance',
    description: 'Protecting sensitive information is our top priority, ensuring compliance and safeguarding your trust.'
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="निरीक्ष BENEFITS"
          title="Fully Automated And Secure"
          description="In today's connected world, cybersecurity is more than protection—it's empowerment."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FeatureCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}