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
    <>
      {/* Title */}
      <div className="text-center relative z-10 mb-12">
        <SectionHeader
          title="निरीक्ष BENEFITS"
          description="Comprehensive security for the digital age"
        />
      </div>

      {/* Benefits List */}
      <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-white/60 to-purple-50/60 dark:from-gray-800/50 dark:to-gray-900/50 p-6 rounded-3xl shadow-xl backdrop-blur-lg transition-transform hover:scale-[1.03]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
