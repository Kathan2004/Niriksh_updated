import React from 'react';
import { Shield, Bell, Monitor, Clock, Scale, Lock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const benefits = [
  {
    icon: Shield,
    title: 'Phishing Protection',
    description: 'Identify and block deceptive websites targeting your brand.'
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Instant notification of potential security threats.'
  },
  {
    icon: Monitor,
    title: '24/7 Monitoring',
    description: 'Continuous surveillance of your digital assets.'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Swift action against security incidents.'
  },
  {
    icon: Scale,
    title: 'Scalable Security',
    description: 'Solutions that grow with your business.'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'Protecting sensitive information and compliance.'
  }
];

export function MobileBenefits() {
  return (
    <section className="py-12 bg-purple-50 dark:bg-gray-900">
      <div className="px-4">
        <SectionHeader
          subtitle="निरीक्ष BENEFITS"
          title="Why Choose Us"
          description="Comprehensive security for the digital age"
        />
        
        <div className="mt-8 space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}